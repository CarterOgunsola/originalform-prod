(() => {
  try {
    const style = document.createElement("style");
    style.textContent =
      '@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes hero-gradient-animation-01{0%{--g01-s-start-1: 17%;--g01-s-end-1: 55%;--g01-c-1: hsla(91.42857142857144, 14%, 28%, 1);--g01-y-1: 94%;--g01-x-1: 92%;--g01-y-2: 32%;--g01-c-2: hsla(53.79310344827586, 17%, 31%, 1);--g01-x-2: 89%;--g01-s-start-2: 17%;--g01-s-end-2: 55%;--g01-s-start-3: 17%;--g01-s-end-3: 55%;--g01-x-3: 37%;--g01-c-3: hsla(91.42857142857144, 14%, 28%, 1);--g01-y-3: 36%;--g01-c-4: hsla(54.19354838709677, 18%, 32%, 1);--g01-x-4: 42%;--g01-y-4: 76%;--g01-s-start-4: 17%;--g01-s-end-4: 55%;--g01-s-start-5: 17%;--g01-s-end-5: 55%;--g01-c-5: hsla(196.15384615384613, 10%, 47%, 1);--g01-x-5: 42%;--g01-y-5: 76%}to{--g01-s-start-1: 17;--g01-s-end-1: 55;--g01-c-1: hsla(55.3846153846154, 16%, 30%, 1);--g01-y-1: 65%;--g01-x-1: 95%;--g01-y-2: 9%;--g01-c-2: hsla(0, 4%, 8%, 1);--g01-x-2: 23%;--g01-s-start-2: 17;--g01-s-end-2: 55;--g01-s-start-3: 17;--g01-s-end-3: 55;--g01-x-3: 4%;--g01-c-3: hsla(197.1428571428571, 11%, 47%, 1);--g01-y-3: 4%;--g01-c-4: hsla(197.50000000000003, 10%, 47%, 1);--g01-x-4: 55%;--g01-y-4: 95%;--g01-s-start-4: 17;--g01-s-end-4: 55;--g01-s-start-5: 17;--g01-s-end-5: 55;--g01-c-5: hsla(54.193548387096776, 0%, 0%, 1);--g01-x-5: 55%;--g01-y-5: 95%}}@property --g01-x-0{syntax: "<percentage>"; inherits: false; initial-value: 26%;}@property --g01-s-start-0{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-0{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-c-0{syntax: "<color>"; inherits: false; initial-value: hsla(0,4%,8%,1);}@property --g01-y-0{syntax: "<percentage>"; inherits: false; initial-value: 7%;}@property --g01-s-start-1{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-1{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-c-1{syntax: "<color>"; inherits: false; initial-value: hsla(91.42857142857144,14%,28%,1);}@property --g01-y-1{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --g01-x-1{syntax: "<percentage>"; inherits: false; initial-value: 92%;}@property --g01-y-2{syntax: "<percentage>"; inherits: false; initial-value: 32%;}@property --g01-c-2{syntax: "<color>"; inherits: false; initial-value: hsla(53.79310344827586,17%,31%,1);}@property --g01-x-2{syntax: "<percentage>"; inherits: false; initial-value: 89%;}@property --g01-s-start-2{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-2{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-s-start-3{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-3{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-x-3{syntax: "<percentage>"; inherits: false; initial-value: 37%;}@property --g01-c-3{syntax: "<color>"; inherits: false; initial-value: hsla(91.42857142857144,14%,28%,1);}@property --g01-y-3{syntax: "<percentage>"; inherits: false; initial-value: 36%;}@property --g01-c-4{syntax: "<color>"; inherits: false; initial-value: hsla(54.19354838709677,18%,32%,1);}@property --g01-x-4{syntax: "<percentage>"; inherits: false; initial-value: 42%;}@property --g01-y-4{syntax: "<percentage>"; inherits: false; initial-value: 76%;}@property --g01-s-start-4{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-4{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-s-start-5{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --g01-s-end-5{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g01-c-5{syntax: "<color>"; inherits: false; initial-value: hsla(196.15384615384613,10%,47%,1);}@property --g01-x-5{syntax: "<percentage>"; inherits: false; initial-value: 42%;}@property --g01-y-5{syntax: "<percentage>"; inherits: false; initial-value: 76%;}.of_gradient_main{--g01-x-0: 26%;--g01-c-0: hsla(0, 4%, 8%, 1);--g01-y-0: 7%;--g01-c-1: hsla(91.42857142857144, 14%, 28%, 1);--g01-y-1: 94%;--g01-x-1: 92%;--g01-y-2: 32%;--g01-c-2: hsla(53.79310344827586, 17%, 31%, 1);--g01-x-2: 89%;--g01-x-3: 37%;--g01-c-3: hsla(91.42857142857144, 14%, 28%, 1);--g01-y-3: 36%;--g01-c-4: hsla(54.19354838709677, 18%, 32%, 1);--g01-x-4: 42%;--g01-y-4: 76%;--g01-c-5: hsla(196.15384615384613, 10%, 47%, 1);--g01-x-5: 42%;--g01-y-5: 76%;background-color:#1a1a1a;background-image:radial-gradient(circle at var(--g01-x-0) var(--g01-y-0),var(--g01-c-0) var(--g01-s-start-0),transparent var(--g01-s-end-0)),radial-gradient(circle at var(--g01-x-1) var(--g01-y-1),var(--g01-c-1) var(--g01-s-start-1),transparent var(--g01-s-end-1)),radial-gradient(circle at var(--g01-x-2) var(--g01-y-2),var(--g01-c-2) var(--g01-s-start-2),transparent var(--g01-s-end-2)),radial-gradient(circle at var(--g01-x-3) var(--g01-y-3),var(--g01-c-3) var(--g01-s-start-3),transparent var(--g01-s-end-3)),radial-gradient(circle at var(--g01-x-4) var(--g01-y-4),var(--g01-c-4) var(--g01-s-start-4),transparent var(--g01-s-end-4)),radial-gradient(circle at var(--g01-x-5) var(--g01-y-5),var(--g01-c-5) var(--g01-s-start-5),transparent var(--g01-s-end-5));animation:hero-gradient-animation-01 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal}@media (prefers-reduced-motion: reduce){.of_gradient_main{animation:none!important}}@keyframes hero-gradient-animation-02{0%{--g02-x-0: 94%;--g02-c-0: hsla(350.8695652173913, 19%, 47%, 1);--g02-s-start-0: 4.830917874396135%;--g02-s-end-0: 33.06686091768569%;--g02-y-0: 8%;--g02-y-1: 57%;--g02-c-1: hsla(347.6923076923077, 38%, 19%, 1);--g02-s-start-1: 5%;--g02-s-end-1: 45.618109071888206%;--g02-x-1: 88%;--g02-x-2: 55%;--g02-s-start-2: 5%;--g02-s-end-2: 84%;--g02-y-2: 2%;--g02-c-2: hsla(349.2857142857143, 15%, 36%, 1);--g02-x-3: 41%;--g02-c-3: hsla(347.6923076923077, 38%, 19%, 1);--g02-s-start-3: 5%;--g02-s-end-3: 47.104806798667724%;--g02-y-3: 97%;--g02-y-4: -6%;--g02-c-4: hsla(347.02702702702703, 38%, 19%, 1);--g02-s-start-4: 5%;--g02-s-end-4: 7.0574101987092375%;--g02-x-4: 35%;--g02-c-5: hsla(350.8695652173913, 0%, 9%, 1);--g02-x-5: 95%;--g02-s-start-5: 4.830917874396135%;--g02-s-end-5: 71.00994371791968%;--g02-y-5: 56%}to{--g02-x-0: 93%;--g02-c-0: hsla(350.8695652173912, 0%, 1%, 1);--g02-s-start-0: 4.830917874396135%;--g02-s-end-0: 43.49135954483695%;--g02-y-0: 1%;--g02-y-1: -6%;--g02-c-1: hsla(347.6923076923077, 38%, 19%, 1);--g02-s-start-1: 5%;--g02-s-end-1: 55.5371872169384%;--g02-x-1: 52%;--g02-x-2: 37%;--g02-s-start-2: 5%;--g02-s-end-2: 59.402741952794756%;--g02-y-2: 71%;--g02-c-2: hsla(347.6923076923077, 0%, 9%, 1);--g02-x-3: 92%;--g02-c-3: hsla(347.6923076923077, 38%, 19%, 1);--g02-s-start-3: 5%;--g02-s-end-3: 84%;--g02-y-3: 11%;--g02-y-4: 88%;--g02-c-4: hsla(350.8695652173913, 19%, 47%, 1);--g02-s-start-4: 4.830917874396135%;--g02-s-end-4: 84%;--g02-x-4: 94%;--g02-c-5: hsla(350.8695652173913, 19%, 47%, 1);--g02-x-5: 29%;--g02-s-start-5: 5%;--g02-s-end-5: 55.631589585456304%;--g02-y-5: 8%}}@property --g02-x-0{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --g02-c-0{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,19%,47%,1);}@property --g02-s-start-0{syntax: "<percentage>"; inherits: false; initial-value: 4.830917874396135%;}@property --g02-s-end-0{syntax: "<percentage>"; inherits: false; initial-value: 33.06686091768569%;}@property --g02-y-0{syntax: "<percentage>"; inherits: false; initial-value: 8%;}@property --g02-y-1{syntax: "<percentage>"; inherits: false; initial-value: 57%;}@property --g02-c-1{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --g02-s-start-1{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g02-s-end-1{syntax: "<percentage>"; inherits: false; initial-value: 45.618109071888206%;}@property --g02-x-1{syntax: "<percentage>"; inherits: false; initial-value: 88%;}@property --g02-x-2{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --g02-s-start-2{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g02-s-end-2{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g02-y-2{syntax: "<percentage>"; inherits: false; initial-value: 2%;}@property --g02-c-2{syntax: "<color>"; inherits: false; initial-value: hsla(349.2857142857143,15%,36%,1);}@property --g02-x-3{syntax: "<percentage>"; inherits: false; initial-value: 41%;}@property --g02-c-3{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --g02-s-start-3{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g02-s-end-3{syntax: "<percentage>"; inherits: false; initial-value: 47.104806798667724%;}@property --g02-y-3{syntax: "<percentage>"; inherits: false; initial-value: 97%;}@property --g02-y-4{syntax: "<percentage>"; inherits: false; initial-value: -6%;}@property --g02-c-4{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702703,38%,19%,1);}@property --g02-s-start-4{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g02-s-end-4{syntax: "<percentage>"; inherits: false; initial-value: 7.0574101987092375%;}@property --g02-x-4{syntax: "<percentage>"; inherits: false; initial-value: 35%;}@property --g02-c-5{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,0%,9%,1);}@property --g02-x-5{syntax: "<percentage>"; inherits: false; initial-value: 95%;}@property --g02-s-start-5{syntax: "<percentage>"; inherits: false; initial-value: 4.830917874396135%;}@property --g02-s-end-5{syntax: "<percentage>"; inherits: false; initial-value: 71.00994371791968%;}@property --g02-y-5{syntax: "<percentage>"; inherits: false; initial-value: 56%;}.of_gradient_02{--g02-x-0: 94%;--g02-c-0: hsla(350.8695652173913, 19%, 47%, 1);--g02-y-0: 8%;--g02-y-1: 57%;--g02-c-1: hsla(347.6923076923077, 38%, 19%, 1);--g02-x-1: 88%;--g02-x-2: 55%;--g02-y-2: 2%;--g02-c-2: hsla(349.2857142857143, 15%, 36%, 1);--g02-x-3: 41%;--g02-c-3: hsla(347.6923076923077, 38%, 19%, 1);--g02-y-3: 97%;--g02-y-4: -6%;--g02-c-4: hsla(347.02702702702703, 38%, 19%, 1);--g02-x-4: 35%;--g02-c-5: hsla(350.8695652173913, 0%, 9%, 1);--g02-x-5: 95%;--g02-y-5: 56%;background-color:#171717;background-image:radial-gradient(circle at var(--g02-x-0) var(--g02-y-0),var(--g02-c-0) var(--g02-s-start-0),transparent var(--g02-s-end-0)),radial-gradient(circle at var(--g02-x-1) var(--g02-y-1),var(--g02-c-1) var(--g02-s-start-1),transparent var(--g02-s-end-1)),radial-gradient(circle at var(--g02-x-2) var(--g02-y-2),var(--g02-c-2) var(--g02-s-start-2),transparent var(--g02-s-end-2)),radial-gradient(circle at var(--g02-x-3) var(--g02-y-3),var(--g02-c-3) var(--g02-s-start-3),transparent var(--g02-s-end-3)),radial-gradient(circle at var(--g02-x-4) var(--g02-y-4),var(--g02-c-4) var(--g02-s-start-4),transparent var(--g02-s-end-4)),radial-gradient(circle at var(--g02-x-5) var(--g02-y-5),var(--g02-c-5) var(--g02-s-start-5),transparent var(--g02-s-end-5));animation:hero-gradient-animation-02 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal}@media (prefers-reduced-motion: reduce){.of_gradient_02{animation:none!important}}@keyframes hero-gradient-animation-03{0%{--g03-c-0: hsla(0, 1%, 6%, 1);--g03-x-0: 66%;--g03-s-start-0: 5%;--g03-s-end-0: 49.95819371909911%;--g03-y-0: -3%;--g03-x-1: 36%;--g03-s-start-1: 5%;--g03-s-end-1: 84%;--g03-c-1: hsla(347.6923076923077, 38%, 19%, 1);--g03-y-1: 81%;--g03-y-2: 59%;--g03-s-start-2: 5%;--g03-s-end-2: 84%;--g03-x-2: 33%;--g03-c-2: hsla(347.02702702702686, 0%, 0%, 1);--g03-s-start-3: 5%;--g03-s-end-3: 87.46458589857903%;--g03-x-3: 40%;--g03-y-3: 27%;--g03-c-3: hsla(46.32352941176471, 16%, 54%, 1);--g03-x-4: 0%;--g03-s-start-4: 5%;--g03-s-end-4: 84%;--g03-c-4: hsla(347.02702702702686, 0%, 0%, 1);--g03-y-4: 100%;--g03-s-start-5: 5%;--g03-s-end-5: 84%;--g03-x-5: 85%;--g03-c-5: hsla(0, 1%, 6%, 1);--g03-y-5: -2%;--g03-y-6: 4%;--g03-x-6: 54%;--g03-c-6: hsla(257.00000000000006, 0%, 0%, 1);--g03-s-start-6: 5%;--g03-s-end-6: 84%;--g03-x-7: 46%;--g03-s-start-7: 5%;--g03-s-end-7: 84%;--g03-c-7: hsla(289, 0%, 0%, 1);--g03-y-7: 28%;--g03-y-8: 64%;--g03-s-start-8: 5%;--g03-s-end-8: 84%;--g03-x-8: 8%;--g03-c-8: hsla(0, 1%, 6%, 1)}to{--g03-c-0: hsla(47.64705882352971, 0%, 3%, 1);--g03-x-0: 75%;--g03-s-start-0: 5%;--g03-s-end-0: 45.31271583446558%;--g03-y-0: -16%;--g03-x-1: 77%;--g03-s-start-1: 5%;--g03-s-end-1: 84%;--g03-c-1: hsla(347.02702702702703, 38%, 19%, 1);--g03-y-1: 24%;--g03-y-2: 44%;--g03-s-start-2: 5%;--g03-s-end-2: 45.31271583446558%;--g03-x-2: 65%;--g03-c-2: hsla(347.02702702702703, 38%, 19%, 1);--g03-s-start-3: 5%;--g03-s-end-3: 85.7206100979865%;--g03-y-3: 64%;--g03-x-3: 50%;--g03-c-3: hsla(56.923076923076934, 51%, 70%, 1);--g03-x-4: 4%;--g03-s-start-4: 5%;--g03-s-end-4: 63.60980047695879%;--g03-c-4: hsla(47.64705882352939, 0%, 0%, 1);--g03-y-4: 72%;--g03-s-start-5: 5%;--g03-s-end-5: 45.09661835748792%;--g03-x-5: 75%;--g03-c-5: hsla(47.64705882352942, 15%, 53%, 1);--g03-y-5: -5%;--g03-y-6: 80%;--g03-x-6: 97%;--g03-c-6: hsla(347.02702702702703, 0%, 0%, 1);--g03-s-start-6: 5%;--g03-s-end-6: 84%;--g03-x-7: 90%;--g03-s-start-7: 5%;--g03-s-end-7: 84%;--g03-c-7: hsla(347.02702702702703, 38%, 19%, 1);--g03-y-7: 27%;--g03-y-8: 47%;--g03-s-start-8: 5%;--g03-s-end-8: 45.31271583446558%;--g03-x-8: 4%;--g03-c-8: hsla(47.64705882352942, 15%, 53%, 1)}}@property --g03-c-0{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}@property --g03-x-0{syntax: "<percentage>"; inherits: false; initial-value: 66%;}@property --g03-s-start-0{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-0{syntax: "<percentage>"; inherits: false; initial-value: 49.95819371909911%;}@property --g03-y-0{syntax: "<percentage>"; inherits: false; initial-value: -3%;}@property --g03-x-1{syntax: "<percentage>"; inherits: false; initial-value: 36%;}@property --g03-s-start-1{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-1{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-c-1{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --g03-y-1{syntax: "<percentage>"; inherits: false; initial-value: 81%;}@property --g03-y-2{syntax: "<percentage>"; inherits: false; initial-value: 59%;}@property --g03-s-start-2{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-2{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-x-2{syntax: "<percentage>"; inherits: false; initial-value: 33%;}@property --g03-c-2{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702686,0%,0%,1);}@property --g03-s-start-3{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-3{syntax: "<percentage>"; inherits: false; initial-value: 87.46458589857903%;}@property --g03-x-3{syntax: "<percentage>"; inherits: false; initial-value: 40%;}@property --g03-y-3{syntax: "<percentage>"; inherits: false; initial-value: 27%;}@property --g03-c-3{syntax: "<color>"; inherits: false; initial-value: hsla(46.32352941176471,16%,54%,1);}@property --g03-x-4{syntax: "<percentage>"; inherits: false; initial-value: 0%;}@property --g03-s-start-4{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-4{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-c-4{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702686,0%,0%,1);}@property --g03-y-4{syntax: "<percentage>"; inherits: false; initial-value: 100%;}@property --g03-s-start-5{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-5{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-x-5{syntax: "<percentage>"; inherits: false; initial-value: 85%;}@property --g03-c-5{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}@property --g03-y-5{syntax: "<percentage>"; inherits: false; initial-value: -2%;}@property --g03-y-6{syntax: "<percentage>"; inherits: false; initial-value: 4%;}@property --g03-x-6{syntax: "<percentage>"; inherits: false; initial-value: 54%;}@property --g03-c-6{syntax: "<color>"; inherits: false; initial-value: hsla(257.00000000000006,0%,0%,1);}@property --g03-s-start-6{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-6{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-x-7{syntax: "<percentage>"; inherits: false; initial-value: 46%;}@property --g03-s-start-7{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-7{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-c-7{syntax: "<color>"; inherits: false; initial-value: hsla(289,0%,0%,1);}@property --g03-y-7{syntax: "<percentage>"; inherits: false; initial-value: 28%;}@property --g03-y-8{syntax: "<percentage>"; inherits: false; initial-value: 64%;}@property --g03-s-start-8{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g03-s-end-8{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g03-x-8{syntax: "<percentage>"; inherits: false; initial-value: 8%;}@property --g03-c-8{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}.of_gradient_03{--g03-c-0: hsla(0, 1%, 6%, 1);--g03-x-0: 66%;--g03-y-0: -3%;--g03-x-1: 36%;--g03-c-1: hsla(347.6923076923077, 38%, 19%, 1);--g03-y-1: 81%;--g03-y-2: 59%;--g03-x-2: 33%;--g03-c-2: hsla(347.02702702702686, 0%, 0%, 1);--g03-x-3: 40%;--g03-y-3: 27%;--g03-c-3: hsla(46.32352941176471, 16%, 54%, 1);--g03-x-4: 0%;--g03-c-4: hsla(347.02702702702686, 0%, 0%, 1);--g03-y-4: 100%;--g03-x-5: 85%;--g03-c-5: hsla(0, 1%, 6%, 1);--g03-y-5: -2%;--g03-y-6: 4%;--g03-x-6: 54%;--g03-c-6: hsla(257.00000000000006, 0%, 0%, 1);--g03-x-7: 46%;--g03-c-7: hsla(289, 0%, 0%, 1);--g03-y-7: 28%;--g03-y-8: 64%;--g03-x-8: 8%;--g03-c-8: hsla(0, 1%, 6%, 1);background-color:#000;background-image:radial-gradient(circle at var(--g03-x-0) var(--g03-y-0),var(--g03-c-0) var(--g03-s-start-0),transparent var(--g03-s-end-0)),radial-gradient(circle at var(--g03-x-1) var(--g03-y-1),var(--g03-c-1) var(--g03-s-start-1),transparent var(--g03-s-end-1)),radial-gradient(circle at var(--g03-x-2) var(--g03-y-2),var(--g03-c-2) var(--g03-s-start-2),transparent var(--g03-s-end-2)),radial-gradient(circle at var(--g03-x-3) var(--g03-y-3),var(--g03-c-3) var(--g03-s-start-3),transparent var(--g03-s-end-3)),radial-gradient(circle at var(--g03-x-4) var(--g03-y-4),var(--g03-c-4) var(--g03-s-start-4),transparent var(--g03-s-end-4)),radial-gradient(circle at var(--g03-x-5) var(--g03-y-5),var(--g03-c-5) var(--g03-s-start-5),transparent var(--g03-s-end-5)),radial-gradient(circle at var(--g03-x-6) var(--g03-y-6),var(--g03-c-6) var(--g03-s-start-6),transparent var(--g03-s-end-6)),radial-gradient(circle at var(--g03-x-7) var(--g03-y-7),var(--g03-c-7) var(--g03-s-start-7),transparent var(--g03-s-end-7)),radial-gradient(circle at var(--g03-x-8) var(--g03-y-8),var(--g03-c-8) var(--g03-s-start-8),transparent var(--g03-s-end-8));animation:hero-gradient-animation-03 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal,normal,normal,normal}@media (prefers-reduced-motion: reduce){.of_gradient_03{animation:none!important}}@keyframes hero-gradient-animation-04{0%{--g04-x-0: 2%;--g04-c-0: hsla(354.00000000000017, 0%, 5%, 1);--g04-s-start-0: 5%;--g04-s-end-0: 84%;--g04-y-0: 41%;--g04-y-1: 98%;--g04-s-start-1: 5%;--g04-s-end-1: 55.211184589183276%;--g04-c-1: hsla(354.00000000000017, 0%, 5%, 1);--g04-x-1: 51%;--g04-s-start-2: 5%;--g04-s-end-2: 50.171087734941125%;--g04-x-2: 21%;--g04-c-2: hsla(196.875, 16%, 62%, 1);--g04-y-2: 76%;--g04-s-start-3: 5%;--g04-s-end-3: 50.171087734941125%;--g04-y-3: 9%;--g04-x-3: 54%;--g04-c-3: hsla(350.8695652173913, 19%, 47%, 1);--g04-x-4: 94%;--g04-s-start-4: 5%;--g04-s-end-4: 50.171087734941125%;--g04-y-4: 59%;--g04-c-4: hsla(197.41935483870967, 16%, 62%, 1)}to{--g04-x-0: 35%;--g04-c-0: hsla(317.0000000000001, 1%, 7%, 1);--g04-s-start-0: 5%;--g04-s-end-0: 66.77928906132058%;--g04-y-0: 0%;--g04-y-1: 77%;--g04-s-start-1: 5%;--g04-s-end-1: 58.276715117376206%;--g04-c-1: hsla(317.0000000000001, 1%, 7%, 1);--g04-x-1: 94%;--g04-s-start-2: 5%;--g04-s-end-2: 47.50655464504076%;--g04-x-2: 83%;--g04-c-2: hsla(196.875, 16%, 62%, 1);--g04-y-2: 18%;--g04-s-start-3: 5%;--g04-s-end-3: 85.7206100979865%;--g04-y-3: 3%;--g04-x-3: 79%;--g04-c-3: hsla(350.8695652173913, 19%, 47%, 1);--g04-x-4: 43%;--g04-s-start-4: 5%;--g04-s-end-4: 85.7206100979865%;--g04-y-4: 98%;--g04-c-4: hsla(350.8695652173913, 19%, 47%, 1)}}@property --g04-x-0{syntax: "<percentage>"; inherits: false; initial-value: 2%;}@property --g04-c-0{syntax: "<color>"; inherits: false; initial-value: hsla(354.00000000000017,0%,5%,1);}@property --g04-s-start-0{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g04-s-end-0{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --g04-y-0{syntax: "<percentage>"; inherits: false; initial-value: 41%;}@property --g04-y-1{syntax: "<percentage>"; inherits: false; initial-value: 98%;}@property --g04-s-start-1{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g04-s-end-1{syntax: "<percentage>"; inherits: false; initial-value: 55.211184589183276%;}@property --g04-c-1{syntax: "<color>"; inherits: false; initial-value: hsla(354.00000000000017,0%,5%,1);}@property --g04-x-1{syntax: "<percentage>"; inherits: false; initial-value: 51%;}@property --g04-s-start-2{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g04-s-end-2{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}@property --g04-x-2{syntax: "<percentage>"; inherits: false; initial-value: 21%;}@property --g04-c-2{syntax: "<color>"; inherits: false; initial-value: hsla(196.875,16%,62%,1);}@property --g04-y-2{syntax: "<percentage>"; inherits: false; initial-value: 76%;}@property --g04-s-start-3{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g04-s-end-3{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}@property --g04-y-3{syntax: "<percentage>"; inherits: false; initial-value: 9%;}@property --g04-x-3{syntax: "<percentage>"; inherits: false; initial-value: 54%;}@property --g04-c-3{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,19%,47%,1);}@property --g04-x-4{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --g04-s-start-4{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --g04-s-end-4{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}@property --g04-y-4{syntax: "<percentage>"; inherits: false; initial-value: 59%;}@property --g04-c-4{syntax: "<color>"; inherits: false; initial-value: hsla(197.41935483870967,16%,62%,1);}.of_gradient_04{--g04-x-0: 2%;--g04-c-0: hsla(354.00000000000017, 0%, 5%, 1);--g04-y-0: 41%;--g04-y-1: 98%;--g04-c-1: hsla(354.00000000000017, 0%, 5%, 1);--g04-x-1: 51%;--g04-x-2: 21%;--g04-c-2: hsla(196.875, 16%, 62%, 1);--g04-y-2: 76%;--g04-y-3: 9%;--g04-x-3: 54%;--g04-c-3: hsla(350.8695652173913, 19%, 47%, 1);--g04-x-4: 94%;--g04-y-4: 59%;--g04-c-4: hsla(197.41935483870967, 16%, 62%, 1);background-color:#121212;background-image:radial-gradient(circle at var(--g04-x-0) var(--g04-y-0),var(--g04-c-0) var(--g04-s-start-0),transparent var(--g04-s-end-0)),radial-gradient(circle at var(--g04-x-1) var(--g04-y-1),var(--g04-c-1) var(--g04-s-start-1),transparent var(--g04-s-end-1)),radial-gradient(circle at var(--g04-x-2) var(--g04-y-2),var(--g04-c-2) var(--g04-s-start-2),transparent var(--g04-s-end-2)),radial-gradient(circle at var(--g04-x-3) var(--g04-y-3),var(--g04-c-3) var(--g04-s-start-3),transparent var(--g04-s-end-3)),radial-gradient(circle at var(--g04-x-4) var(--g04-y-4),var(--g04-c-4) var(--g04-s-start-4),transparent var(--g04-s-end-4));animation:hero-gradient-animation-04 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal}@media (prefers-reduced-motion: reduce){.of_gradient_04{animation:none!important}}@keyframes hero-gradient-animation-05{0%{--g05-c-0: hsla(0, 4%, 8%, 1);--g05-s-start-0: 5%;--g05-s-end-0: 74.8620228053291%;--g05-x-0: 88%;--g05-y-0: 92%;--g05-y-1: 40%;--g05-s-start-1: 5%;--g05-s-end-1: 68.3461719457654%;--g05-x-1: 67%;--g05-c-1: hsla(89.09090909090908, 20%, 31%, 1);--g05-y-2: 2%;--g05-x-2: 98%;--g05-c-2: hsla(0, 4%, 8%, 1);--g05-s-start-2: 5%;--g05-s-end-2: 68.3461719457654%;--g05-s-start-3: 5%;--g05-s-end-3: 68.3461719457654%;--g05-y-3: 39%;--g05-x-3: 66%;--g05-c-3: hsla(89.09090909090908, 20%, 31%, 1);--g05-x-4: 48%;--g05-s-start-4: 5%;--g05-s-end-4: 68.3461719457654%;--g05-c-4: hsla(56.923076923076934, 51%, 70%, 1);--g05-y-4: 97%;--g05-s-start-5: 5%;--g05-s-end-5: 68.3461719457654%;--g05-x-5: 40%;--g05-c-5: hsla(90.85714285714288, 20%, 33%, 1);--g05-y-5: 57%;--g05-y-6: 94%;--g05-x-6: 96%;--g05-c-6: hsla(0, 2%, 8%, 1)}to{--g05-c-0: hsla(0, 4%, 8%, 1);--g05-s-start-0: 5%;--g05-s-end-0: 84%;--g05-x-0: 3%;--g05-y-0: 99%;--g05-s-start-1: 5%;--g05-s-end-1: 54.21315245697465%;--g05-c-1: hsla(90, 20%, 32%, 1);--g05-x-1: 4%;--g05-y-1: 32%;--g05-y-2: 2%;--g05-x-2: 17%;--g05-c-2: hsla(0, 4%, 8%, 1);--g05-s-start-2: 5%;--g05-s-end-2: 47.03374212145229%;--g05-s-start-3: 5%;--g05-s-end-3: 49.54054149682971%;--g05-y-3: 27%;--g05-x-3: 112%;--g05-c-3: hsla(0, 2%, 8%, 1);--g05-x-4: 81%;--g05-s-start-4: 5%;--g05-s-end-4: 58.404344789071935%;--g05-c-4: hsla(56.923076923076934, 51%, 70%, 1);--g05-y-4: 35%;--g05-s-start-5: 5%;--g05-s-end-5: 77.64730820218146%;--g05-x-5: 79%;--g05-y-5: 5%;--g05-c-5: hsla(90.85714285714288, 20%, 33%, 1);--g05-y-6: 89%;--g05-x-6: 29%;--g05-c-6: hsla(90, 20%, 32%, 1)}}.of_gradient_05{--g05-c-0: hsla(0, 4%, 8%, 1);--g05-x-0: 88%;--g05-y-0: 92%;--g05-y-1: 40%;--g05-x-1: 67%;--g05-c-1: hsla(89.09090909090908, 20%, 31%, 1);--g05-y-2: 2%;--g05-x-2: 98%;--g05-c-2: hsla(0, 4%, 8%, 1);--g05-x-3: 66%;--g05-c-3: hsla(89.09090909090908, 20%, 31%, 1);--g05-y-3: 39%;--g05-x-4: 48%;--g05-c-4: hsla(56.923076923076934, 51%, 70%, 1);--g05-y-4: 97%;--g05-x-5: 40%;--g05-c-5: hsla(90.85714285714288, 20%, 33%, 1);--g05-y-5: 57%;--g05-y-6: 94%;--g05-x-6: 96%;--g05-c-6: hsla(0, 2%, 8%, 1);background-color:#151414;background-image:radial-gradient(circle at var(--g05-x-0) var(--g05-y-0),var(--g05-c-0) var(--g05-s-start-0),transparent var(--g05-s-end-0)),radial-gradient(circle at var(--g05-x-1) var(--g05-y-1),var(--g05-c-1) var(--g05-s-start-1),transparent var(--g05-s-end-1)),radial-gradient(circle at var(--g05-x-2) var(--g05-y-2),var(--g05-c-2) var(--g05-s-start-2),transparent var(--g05-s-end-2)),radial-gradient(circle at var(--g05-x-3) var(--g05-y-3),var(--g05-c-3) var(--g05-s-start-3),transparent var(--g05-s-end-3)),radial-gradient(circle at var(--g05-x-4) var(--g05-y-4),var(--g05-c-4) var(--g05-s-start-4),transparent var(--g05-s-end-4)),radial-gradient(circle at var(--g05-x-5) var(--g05-y-5),var(--g05-c-5) var(--g05-s-start-5),transparent var(--g05-s-end-5)),radial-gradient(circle at var(--g05-x-6) var(--g05-y-6),var(--g05-c-6) var(--g05-s-start-6),transparent var(--g05-s-end-6));animation:hero-gradient-animation-05 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal,normal}@media (prefers-reduced-motion: reduce){.of_gradient_05{animation:none!important}}@keyframes hero-gradient-animation-01{0%{--s-start-1-01: 17%;--s-end-1-01: 55%;--y-1-01: 94%;--x-1-01: 92%;--c-1-01: hsla(91.42857142857144, 14%, 28%, 1);--s-start-2-01: 17%;--s-end-2-01: 55%;--y-2-01: 32%;--x-2-01: 89%;--c-2-01: hsla(53.79310344827586, 17%, 31%, 1);--s-start-3-01: 17%;--s-end-3-01: 55%;--c-3-01: hsla(91.42857142857144, 14%, 28%, 1);--x-3-01: 37%;--y-3-01: 36%;--s-start-4-01: 17%;--s-end-4-01: 55%;--c-4-01: hsla(54.19354838709677, 18%, 32%, 1);--y-4-01: 76%;--x-4-01: 42%;--y-5-01: 76%;--x-5-01: 42%;--s-start-5-01: 17%;--s-end-5-01: 55%;--c-5-01: hsla(196.15384615384613, 10%, 47%, 1)}to{--s-start-1-01: 17;--s-end-1-01: 55;--y-1-01: 65%;--x-1-01: 95%;--c-1-01: hsla(55.3846153846154, 16%, 30%, 1);--s-start-2-01: 17;--s-end-2-01: 55;--y-2-01: 9%;--x-2-01: 23%;--c-2-01: hsla(0, 4%, 8%, 1);--s-start-3-01: 17;--s-end-3-01: 55;--c-3-01: hsla(197.1428571428571, 11%, 47%, 1);--x-3-01: 4%;--y-3-01: 4%;--s-start-4-01: 17;--s-end-4-01: 55;--c-4-01: hsla(197.50000000000003, 10%, 47%, 1);--y-4-01: 95%;--x-4-01: 55%;--y-5-01: 95%;--x-5-01: 55%;--s-start-5-01: 17;--s-end-5-01: 55;--c-5-01: hsla(54.193548387096776, 0%, 0%, 1)}}@property --y-0-01{syntax: "<percentage>"; inherits: false; initial-value: 7%;}@property --x-0-01{syntax: "<percentage>"; inherits: false; initial-value: 26%;}@property --s-start-0-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-0-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --c-0-01{syntax: "<color>"; inherits: false; initial-value: hsla(0,4%,8%,1);}@property --s-start-1-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-1-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --y-1-01{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --x-1-01{syntax: "<percentage>"; inherits: false; initial-value: 92%;}@property --c-1-01{syntax: "<color>"; inherits: false; initial-value: hsla(91.42857142857144,14%,28%,1);}@property --s-start-2-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-2-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --y-2-01{syntax: "<percentage>"; inherits: false; initial-value: 32%;}@property --x-2-01{syntax: "<percentage>"; inherits: false; initial-value: 89%;}@property --c-2-01{syntax: "<color>"; inherits: false; initial-value: hsla(53.79310344827586,17%,31%,1);}@property --s-start-3-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-3-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --c-3-01{syntax: "<color>"; inherits: false; initial-value: hsla(91.42857142857144,14%,28%,1);}@property --x-3-01{syntax: "<percentage>"; inherits: false; initial-value: 37%;}@property --y-3-01{syntax: "<percentage>"; inherits: false; initial-value: 36%;}@property --s-start-4-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-4-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --c-4-01{syntax: "<color>"; inherits: false; initial-value: hsla(54.19354838709677,18%,32%,1);}@property --y-4-01{syntax: "<percentage>"; inherits: false; initial-value: 76%;}@property --x-4-01{syntax: "<percentage>"; inherits: false; initial-value: 42%;}@property --y-5-01{syntax: "<percentage>"; inherits: false; initial-value: 76%;}@property --x-5-01{syntax: "<percentage>"; inherits: false; initial-value: 42%;}@property --s-start-5-01{syntax: "<percentage>"; inherits: false; initial-value: 17%;}@property --s-end-5-01{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --c-5-01{syntax: "<color>"; inherits: false; initial-value: hsla(196.15384615384613,10%,47%,1);}.of_gradient_main_01{--y-0-01: 7%;--x-0-01: 26%;--c-0-01: hsla(0, 4%, 8%, 1);--y-1-01: 94%;--x-1-01: 92%;--c-1-01: hsla(91.42857142857144, 14%, 28%, 1);--y-2-01: 32%;--x-2-01: 89%;--c-2-01: hsla(53.79310344827586, 17%, 31%, 1);--c-3-01: hsla(91.42857142857144, 14%, 28%, 1);--x-3-01: 37%;--y-3-01: 36%;--c-4-01: hsla(54.19354838709677, 18%, 32%, 1);--y-4-01: 76%;--x-4-01: 42%;--y-5-01: 76%;--x-5-01: 42%;--c-5-01: hsla(196.15384615384613, 10%, 47%, 1);background-color:#1a1a1a;background-image:radial-gradient(circle at var(--x-0-01) var(--y-0-01),var(--c-0-01) var(--s-start-0-01),transparent var(--s-end-0-01)),radial-gradient(circle at var(--x-1-01) var(--y-1-01),var(--c-1-01) var(--s-start-1-01),transparent var(--s-end-1-01)),radial-gradient(circle at var(--x-2-01) var(--y-2-01),var(--c-2-01) var(--s-start-2-01),transparent var(--s-end-2-01)),radial-gradient(circle at var(--x-3-01) var(--y-3-01),var(--c-3-01) var(--s-start-3-01),transparent var(--s-end-3-01)),radial-gradient(circle at var(--x-4-01) var(--y-4-01),var(--c-4-01) var(--s-start-4-01),transparent var(--s-end-4-01)),radial-gradient(circle at var(--x-5-01) var(--y-5-01),var(--c-5-01) var(--s-start-5-01),transparent var(--s-end-5-01));animation:hero-gradient-animation-01 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal}@keyframes hero-gradient-animation-02{0%{--y-0-02: 8%;--c-0-02: hsla(350.8695652173913, 19%, 47%, 1);--s-start-0-02: 4.830917874396135%;--s-end-0-02: 33.06686091768569%;--x-0-02: 94%;--y-1-02: 57%;--c-1-02: hsla(347.6923076923077, 38%, 19%, 1);--x-1-02: 88%;--s-start-1-02: 5%;--s-end-1-02: 45.618109071888206%;--s-start-2-02: 5%;--s-end-2-02: 84%;--c-2-02: hsla(349.2857142857143, 15%, 36%, 1);--y-2-02: 2%;--x-2-02: 55%;--c-3-02: hsla(347.6923076923077, 38%, 19%, 1);--s-start-3-02: 5%;--s-end-3-02: 47.104806798667724%;--y-3-02: 97%;--x-3-02: 41%;--x-4-02: 35%;--s-start-4-02: 5%;--s-end-4-02: 7.0574101987092375%;--c-4-02: hsla(347.02702702702703, 38%, 19%, 1);--y-4-02: -6%;--c-5-02: hsla(350.8695652173913, 0%, 9%, 1);--x-5-02: 95%;--y-5-02: 56%;--s-start-5-02: 4.830917874396135%;--s-end-5-02: 71.00994371791968%}to{--y-0-02: 1%;--c-0-02: hsla(350.8695652173912, 0%, 1%, 1);--s-start-0-02: 4.830917874396135%;--s-end-0-02: 43.49135954483695%;--x-0-02: 93%;--y-1-02: -6%;--c-1-02: hsla(347.6923076923077, 38%, 19%, 1);--x-1-02: 52%;--s-start-1-02: 5%;--s-end-1-02: 55.5371872169384%;--s-start-2-02: 5%;--s-end-2-02: 59.402741952794756%;--c-2-02: hsla(347.6923076923077, 0%, 9%, 1);--y-2-02: 71%;--x-2-02: 37%;--c-3-02: hsla(347.6923076923077, 38%, 19%, 1);--s-start-3-02: 5%;--s-end-3-02: 84%;--y-3-02: 11%;--x-3-02: 92%;--x-4-02: 94%;--s-start-4-02: 4.830917874396135%;--s-end-4-02: 84%;--c-4-02: hsla(350.8695652173913, 19%, 47%, 1);--y-4-02: 88%;--c-5-02: hsla(350.8695652173913, 19%, 47%, 1);--x-5-02: 29%;--y-5-02: 8%;--s-start-5-02: 5%;--s-end-5-02: 55.631589585456304%}}@property --y-0-02{syntax: "<percentage>"; inherits: false; initial-value: 8%;}@property --c-0-02{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,19%,47%,1);}@property --s-start-0-02{syntax: "<percentage>"; inherits: false; initial-value: 4.830917874396135%;}@property --s-end-0-02{syntax: "<percentage>"; inherits: false; initial-value: 33.06686091768569%;}@property --x-0-02{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --y-1-02{syntax: "<percentage>"; inherits: false; initial-value: 57%;}@property --c-1-02{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --x-1-02{syntax: "<percentage>"; inherits: false; initial-value: 88%;}@property --s-start-1-02{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-1-02{syntax: "<percentage>"; inherits: false; initial-value: 45.618109071888206%;}@property --s-start-2-02{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-2-02{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --c-2-02{syntax: "<color>"; inherits: false; initial-value: hsla(349.2857142857143,15%,36%,1);}@property --y-2-02{syntax: "<percentage>"; inherits: false; initial-value: 2%;}@property --x-2-02{syntax: "<percentage>"; inherits: false; initial-value: 55%;}@property --c-3-02{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --s-start-3-02{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-3-02{syntax: "<percentage>"; inherits: false; initial-value: 47.104806798667724%;}@property --y-3-02{syntax: "<percentage>"; inherits: false; initial-value: 97%;}@property --x-3-02{syntax: "<percentage>"; inherits: false; initial-value: 41%;}@property --x-4-02{syntax: "<percentage>"; inherits: false; initial-value: 35%;}@property --s-start-4-02{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-4-02{syntax: "<percentage>"; inherits: false; initial-value: 7.0574101987092375%;}@property --c-4-02{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702703,38%,19%,1);}@property --y-4-02{syntax: "<percentage>"; inherits: false; initial-value: -6%;}@property --c-5-02{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,0%,9%,1);}@property --x-5-02{syntax: "<percentage>"; inherits: false; initial-value: 95%;}@property --y-5-02{syntax: "<percentage>"; inherits: false; initial-value: 56%;}@property --s-start-5-02{syntax: "<percentage>"; inherits: false; initial-value: 4.830917874396135%;}@property --s-end-5-02{syntax: "<percentage>"; inherits: false; initial-value: 71.00994371791968%;}.of_gradient_main_02{--y-0-02: 8%;--c-0-02: hsla(350.8695652173913, 19%, 47%, 1);--x-0-02: 94%;--y-1-02: 57%;--c-1-02: hsla(347.6923076923077, 38%, 19%, 1);--x-1-02: 88%;--c-2-02: hsla(349.2857142857143, 15%, 36%, 1);--y-2-02: 2%;--x-2-02: 55%;--c-3-02: hsla(347.6923076923077, 38%, 19%, 1);--y-3-02: 97%;--x-3-02: 41%;--x-4-02: 35%;--c-4-02: hsla(347.02702702702703, 38%, 19%, 1);--y-4-02: -6%;--c-5-02: hsla(350.8695652173913, 0%, 9%, 1);--x-5-02: 95%;--y-5-02: 56%;background-color:#171717;background-image:radial-gradient(circle at var(--x-0-02) var(--y-0-02),var(--c-0-02) var(--s-start-0-02),transparent var(--s-end-0-02)),radial-gradient(circle at var(--x-1-02) var(--y-1-02),var(--c-1-02) var(--s-start-1-02),transparent var(--s-end-1-02)),radial-gradient(circle at var(--x-2-02) var(--y-2-02),var(--c-2-02) var(--s-start-2-02),transparent var(--s-end-2-02)),radial-gradient(circle at var(--x-3-02) var(--y-3-02),var(--c-3-02) var(--s-start-3-02),transparent var(--s-end-3-02)),radial-gradient(circle at var(--x-4-02) var(--y-4-02),var(--c-4-02) var(--s-start-4-02),transparent var(--s-end-4-02)),radial-gradient(circle at var(--x-5-02) var(--y-5-02),var(--c-5-02) var(--s-start-5-02),transparent var(--s-end-5-02));animation:hero-gradient-animation-02 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal}@keyframes hero-gradient-animation-03{0%{--c-0-03: hsla(0, 1%, 6%, 1);--x-0-03: 66%;--s-start-0-03: 5%;--s-end-0-03: 49.95819371909911%;--y-0-03: -3%;--c-1-03: hsla(347.6923076923077, 38%, 19%, 1);--y-1-03: 81%;--x-1-03: 36%;--s-start-1-03: 5%;--s-end-1-03: 84%;--c-2-03: hsla(347.02702702702686, 0%, 0%, 1);--y-2-03: 59%;--s-start-2-03: 5%;--s-end-2-03: 84%;--x-2-03: 33%;--x-3-03: 40%;--y-3-03: 27%;--s-start-3-03: 5%;--s-end-3-03: 87.46458589857903%;--c-3-03: hsla(46.32352941176471, 16%, 54%, 1);--c-4-03: hsla(347.02702702702686, 0%, 0%, 1);--x-4-03: 0%;--y-4-03: 100%;--s-start-4-03: 5%;--s-end-4-03: 84%;--y-5-03: -2%;--c-5-03: hsla(0, 1%, 6%, 1);--x-5-03: 85%;--s-start-5-03: 5%;--s-end-5-03: 84%;--y-6-03: 4%;--s-start-6-03: 5%;--s-end-6-03: 84%;--c-6-03: hsla(257.00000000000006, 0%, 0%, 1);--x-6-03: 54%;--x-7-03: 46%;--y-7-03: 28%;--c-7-03: hsla(289, 0%, 0%, 1);--s-start-7-03: 5%;--s-end-7-03: 84%;--y-8-03: 64%;--s-start-8-03: 5%;--s-end-8-03: 84%;--x-8-03: 8%;--c-8-03: hsla(0, 1%, 6%, 1)}to{--c-0-03: hsla(47.64705882352971, 0%, 3%, 1);--x-0-03: 75%;--s-start-0-03: 5%;--s-end-0-03: 45.31271583446558%;--y-0-03: -16%;--c-1-03: hsla(347.02702702702703, 38%, 19%, 1);--y-1-03: 24%;--x-1-03: 77%;--s-start-1-03: 5%;--s-end-1-03: 84%;--c-2-03: hsla(347.02702702702703, 38%, 19%, 1);--y-2-03: 44%;--s-start-2-03: 5%;--s-end-2-03: 45.31271583446558%;--x-2-03: 65%;--x-3-03: 50%;--y-3-03: 64%;--s-start-3-03: 5%;--s-end-3-03: 85.7206100979865%;--c-3-03: hsla(56.923076923076934, 51%, 70%, 1);--c-4-03: hsla(47.64705882352939, 0%, 0%, 1);--x-4-03: 4%;--y-4-03: 72%;--s-start-4-03: 5%;--s-end-4-03: 63.60980047695879%;--y-5-03: -5%;--c-5-03: hsla(47.64705882352942, 15%, 53%, 1);--x-5-03: 75%;--s-start-5-03: 5%;--s-end-5-03: 45.09661835748792%;--y-6-03: 80%;--s-start-6-03: 5%;--s-end-6-03: 84%;--c-6-03: hsla(347.02702702702703, 0%, 0%, 1);--x-6-03: 97%;--x-7-03: 90%;--y-7-03: 27%;--c-7-03: hsla(347.02702702702703, 38%, 19%, 1);--s-start-7-03: 5%;--s-end-7-03: 84%;--y-8-03: 47%;--s-start-8-03: 5%;--s-end-8-03: 45.31271583446558%;--x-8-03: 4%;--c-8-03: hsla(47.64705882352942, 15%, 53%, 1)}}@property --c-0-03{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}@property --x-0-03{syntax: "<percentage>"; inherits: false; initial-value: 66%;}@property --s-start-0-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-0-03{syntax: "<percentage>"; inherits: false; initial-value: 49.95819371909911%;}@property --y-0-03{syntax: "<percentage>"; inherits: false; initial-value: -3%;}@property --c-1-03{syntax: "<color>"; inherits: false; initial-value: hsla(347.6923076923077,38%,19%,1);}@property --y-1-03{syntax: "<percentage>"; inherits: false; initial-value: 81%;}@property --x-1-03{syntax: "<percentage>"; inherits: false; initial-value: 36%;}@property --s-start-1-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-1-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --c-2-03{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702686,0%,0%,1);}@property --y-2-03{syntax: "<percentage>"; inherits: false; initial-value: 59%;}@property --s-start-2-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-2-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --x-2-03{syntax: "<percentage>"; inherits: false; initial-value: 33%;}@property --x-3-03{syntax: "<percentage>"; inherits: false; initial-value: 40%;}@property --y-3-03{syntax: "<percentage>"; inherits: false; initial-value: 27%;}@property --s-start-3-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-3-03{syntax: "<percentage>"; inherits: false; initial-value: 87.46458589857903%;}@property --c-3-03{syntax: "<color>"; inherits: false; initial-value: hsla(46.32352941176471,16%,54%,1);}@property --c-4-03{syntax: "<color>"; inherits: false; initial-value: hsla(347.02702702702686,0%,0%,1);}@property --x-4-03{syntax: "<percentage>"; inherits: false; initial-value: 0%;}@property --y-4-03{syntax: "<percentage>"; inherits: false; initial-value: 100%;}@property --s-start-4-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-4-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --y-5-03{syntax: "<percentage>"; inherits: false; initial-value: -2%;}@property --c-5-03{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}@property --x-5-03{syntax: "<percentage>"; inherits: false; initial-value: 85%;}@property --s-start-5-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-5-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --y-6-03{syntax: "<percentage>"; inherits: false; initial-value: 4%;}@property --s-start-6-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-6-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --c-6-03{syntax: "<color>"; inherits: false; initial-value: hsla(257.00000000000006,0%,0%,1);}@property --x-6-03{syntax: "<percentage>"; inherits: false; initial-value: 54%;}@property --x-7-03{syntax: "<percentage>"; inherits: false; initial-value: 46%;}@property --y-7-03{syntax: "<percentage>"; inherits: false; initial-value: 28%;}@property --c-7-03{syntax: "<color>"; inherits: false; initial-value: hsla(289,0%,0%,1);}@property --s-start-7-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-7-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --y-8-03{syntax: "<percentage>"; inherits: false; initial-value: 64%;}@property --s-start-8-03{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-8-03{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --x-8-03{syntax: "<percentage>"; inherits: false; initial-value: 8%;}@property --c-8-03{syntax: "<color>"; inherits: false; initial-value: hsla(0,1%,6%,1);}.of_gradient_main_03{--c-0-03: hsla(0, 1%, 6%, 1);--x-0-03: 66%;--y-0-03: -3%;--c-1-03: hsla(347.6923076923077, 38%, 19%, 1);--y-1-03: 81%;--x-1-03: 36%;--c-2-03: hsla(347.02702702702686, 0%, 0%, 1);--y-2-03: 59%;--x-2-03: 33%;--x-3-03: 40%;--y-3-03: 27%;--c-3-03: hsla(46.32352941176471, 16%, 54%, 1);--c-4-03: hsla(347.02702702702686, 0%, 0%, 1);--x-4-03: 0%;--y-4-03: 100%;--y-5-03: -2%;--c-5-03: hsla(0, 1%, 6%, 1);--x-5-03: 85%;--y-6-03: 4%;--c-6-03: hsla(257.00000000000006, 0%, 0%, 1);--x-6-03: 54%;--x-7-03: 46%;--y-7-03: 28%;--c-7-03: hsla(289, 0%, 0%, 1);--y-8-03: 64%;--x-8-03: 8%;--c-8-03: hsla(0, 1%, 6%, 1);background-color:#000;background-image:radial-gradient(circle at var(--x-0-03) var(--y-0-03),var(--c-0-03) var(--s-start-0-03),transparent var(--s-end-0-03)),radial-gradient(circle at var(--x-1-03) var(--y-1-03),var(--c-1-03) var(--s-start-1-03),transparent var(--s-end-1-03)),radial-gradient(circle at var(--x-2-03) var(--y-2-03),var(--c-2-03) var(--s-start-2-03),transparent var(--s-end-2-03)),radial-gradient(circle at var(--x-3-03) var(--y-3-03),var(--c-3-03) var(--s-start-3-03),transparent var(--s-end-3-03)),radial-gradient(circle at var(--x-4-03) var(--y-4-03),var(--c-4-03) var(--s-start-4-03),transparent var(--s-end-4-03)),radial-gradient(circle at var(--x-5-03) var(--y-5-03),var(--c-5-03) var(--s-start-5-03),transparent var(--s-end-5-03)),radial-gradient(circle at var(--x-6-03) var(--y-6-03),var(--c-6-03) var(--s-start-6-03),transparent var(--s-end-6-03)),radial-gradient(circle at var(--x-7-03) var(--y-7-03),var(--c-7-03) var(--s-start-7-03),transparent var(--s-end-7-03)),radial-gradient(circle at var(--x-8-03) var(--y-8-03),var(--c-8-03) var(--s-start-8-03),transparent var(--s-end-8-03));animation:hero-gradient-animation-03 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal,normal,normal,normal}@keyframes hero-gradient-animation-04{0%{--y-0-04: 41%;--s-start-0-04: 5%;--s-end-0-04: 84%;--x-0-04: 2%;--c-0-04: hsla(354.00000000000017, 0%, 5%, 1);--x-1-04: 51%;--s-start-1-04: 5%;--s-end-1-04: 55.211184589183276%;--y-1-04: 98%;--c-1-04: hsla(354.00000000000017, 0%, 5%, 1);--x-2-04: 21%;--s-start-2-04: 5%;--s-end-2-04: 50.171087734941125%;--y-2-04: 76%;--c-2-04: hsla(196.875, 16%, 62%, 1);--x-3-04: 54%;--s-start-3-04: 5%;--s-end-3-04: 50.171087734941125%;--c-3-04: hsla(350.8695652173913, 19%, 47%, 1);--y-3-04: 9%;--y-4-04: 59%;--c-4-04: hsla(197.41935483870967, 16%, 62%, 1);--x-4-04: 94%;--s-start-4-04: 5%;--s-end-4-04: 50.171087734941125%}to{--y-0-04: 0%;--s-start-0-04: 5%;--s-end-0-04: 66.77928906132058%;--x-0-04: 35%;--c-0-04: hsla(317.0000000000001, 1%, 7%, 1);--x-1-04: 94%;--s-start-1-04: 5%;--s-end-1-04: 58.276715117376206%;--y-1-04: 77%;--c-1-04: hsla(317.0000000000001, 1%, 7%, 1);--x-2-04: 83%;--s-start-2-04: 5%;--s-end-2-04: 47.50655464504076%;--y-2-04: 18%;--c-2-04: hsla(196.875, 16%, 62%, 1);--x-3-04: 79%;--s-start-3-04: 5%;--s-end-3-04: 85.71579819831295%;--c-3-04: hsla(350.8695652173913, 19%, 47%, 1);--y-3-04: 3%;--y-4-04: 98%;--c-4-04: hsla(350.8695652173913, 19%, 47%, 1);--x-4-04: 43%;--s-start-4-04: 5%;--s-end-4-04: 85.71579819831295%}}@property --y-0-04{syntax: "<percentage>"; inherits: false; initial-value: 41%;}@property --s-start-0-04{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-0-04{syntax: "<percentage>"; inherits: false; initial-value: 84%;}@property --x-0-04{syntax: "<percentage>"; inherits: false; initial-value: 2%;}@property --c-0-04{syntax: "<color>"; inherits: false; initial-value: hsla(354.00000000000017,0%,5%,1);}@property --x-1-04{syntax: "<percentage>"; inherits: false; initial-value: 51%;}@property --s-start-1-04{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-1-04{syntax: "<percentage>"; inherits: false; initial-value: 55.211184589183276%;}@property --y-1-04{syntax: "<percentage>"; inherits: false; initial-value: 98%;}@property --c-1-04{syntax: "<color>"; inherits: false; initial-value: hsla(354.00000000000017,0%,5%,1);}@property --x-2-04{syntax: "<percentage>"; inherits: false; initial-value: 21%;}@property --s-start-2-04{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-2-04{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}@property --y-2-04{syntax: "<percentage>"; inherits: false; initial-value: 76%;}@property --c-2-04{syntax: "<color>"; inherits: false; initial-value: hsla(196.875,16%,62%,1);}@property --x-3-04{syntax: "<percentage>"; inherits: false; initial-value: 54%;}@property --s-start-3-04{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-3-04{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}@property --c-3-04{syntax: "<color>"; inherits: false; initial-value: hsla(350.8695652173913,19%,47%,1);}@property --y-3-04{syntax: "<percentage>"; inherits: false; initial-value: 9%;}@property --y-4-04{syntax: "<percentage>"; inherits: false; initial-value: 59%;}@property --c-4-04{syntax: "<color>"; inherits: false; initial-value: hsla(197.41935483870967,16%,62%,1);}@property --x-4-04{syntax: "<percentage>"; inherits: false; initial-value: 94%;}@property --s-start-4-04{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-4-04{syntax: "<percentage>"; inherits: false; initial-value: 50.171087734941125%;}.of_gradient_main_04{--y-0-04: 41%;--x-0-04: 2%;--c-0-04: hsla(354.00000000000017, 0%, 5%, 1);--x-1-04: 51%;--y-1-04: 98%;--c-1-04: hsla(354.00000000000017, 0%, 5%, 1);--x-2-04: 21%;--y-2-04: 76%;--c-2-04: hsla(196.875, 16%, 62%, 1);--x-3-04: 54%;--c-3-04: hsla(350.8695652173913, 19%, 47%, 1);--y-3-04: 9%;--y-4-04: 59%;--c-4-04: hsla(197.41935483870967, 16%, 62%, 1);--x-4-04: 94%;background-color:#121212;background-image:radial-gradient(circle at var(--x-0-04) var(--y-0-04),var(--c-0-04) var(--s-start-0-04),transparent var(--s-end-0-04)),radial-gradient(circle at var(--x-1-04) var(--y-1-04),var(--c-1-04) var(--s-start-1-04),transparent var(--s-end-1-04)),radial-gradient(circle at var(--x-2-04) var(--y-2-04),var(--c-2-04) var(--s-start-2-04),transparent var(--s-end-2-04)),radial-gradient(circle at var(--x-3-04) var(--y-3-04),var(--c-3-04) var(--s-start-3-04),transparent var(--s-end-3-04)),radial-gradient(circle at var(--x-4-04) var(--y-4-04),var(--c-4-04) var(--s-start-4-04),transparent var(--s-end-4-04));animation:hero-gradient-animation-04 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal}@keyframes hero-gradient-animation-05{0%{--y-0-05: 92%;--s-start-0-05: 5%;--s-end-0-05: 74.8620228053291%;--c-0-05: hsla(0, 4%, 8%, 1);--x-0-05: 88%;--y-1-05: 40%;--s-start-1-05: 5%;--s-end-1-05: 68.3461719457654%;--x-1-05: 67%;--c-1-05: hsla(89.09090909090908, 20%, 31%, 1);--y-2-05: 2%;--c-2-05: hsla(0, 4%, 8%, 1);--s-start-2-05: 5%;--s-end-2-05: 68.3461719457654%;--x-2-05: 98%;--y-3-05: 39%;--s-start-3-05: 5%;--s-end-3-05: 68.3461719457654%;--x-3-05: 66%;--c-3-05: hsla(89.09090909090908, 20%, 31%, 1);--x-4-05: 48%;--c-4-05: hsla(56.923076923076934, 51%, 70%, 1);--y-4-05: 97%;--s-start-4-05: 5%;--s-end-4-05: 68.3461719457654%;--x-5-05: 40%;--y-5-05: 57%;--s-start-5-05: 5%;--s-end-5-05: 68.3461719457654%;--c-5-05: hsla(90.85714285714288, 20%, 33%, 1);--x-6-05: 96%;--c-6-05: hsla(0, 2%, 8%, 1);--s-start-6-05: 5%;--s-end-6-05: 68.3461719457654%;--y-6-05: 94%}to{--y-0-05: 99%;--s-start-0-05: 5%;--s-end-0-05: 84%;--c-0-05: hsla(0, 4%, 8%, 1);--x-0-05: 3%;--y-1-05: 32%;--s-start-1-05: 5%;--s-end-1-05: 54.21315245697465%;--x-1-05: 4%;--c-1-05: hsla(90, 20%, 32%, 1);--y-2-05: 2%;--c-2-05: hsla(0, 4%, 8%, 1);--s-start-2-05: 5%;--s-end-2-05: 47.03374212145229%;--x-2-05: 17%;--y-3-05: 27%;--s-start-3-05: 5%;--s-end-3-05: 49.54054149682971%;--x-3-05: 112%;--c-3-05: hsla(0, 2%, 8%, 1);--x-4-05: 81%;--c-4-05: hsla(56.923076923076934, 51%, 70%, 1);--y-4-05: 35%;--s-start-4-05: 5%;--s-end-4-05: 58.404344789071935%;--x-5-05: 79%;--y-5-05: 5%;--s-start-5-05: 5%;--s-end-5-05: 77.64730820218146%;--c-5-05: hsla(90.85714285714288, 20%, 33%, 1);--x-6-05: 29%;--c-6-05: hsla(90, 20%, 32%, 1);--s-start-6-05: 5%;--s-end-6-05: 77.64730820218146%;--y-6-05: 89%}}@property --y-0-05{syntax: "<percentage>"; inherits: false; initial-value: 92%;}@property --s-start-0-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-0-05{syntax: "<percentage>"; inherits: false; initial-value: 74.8620228053291%;}@property --c-0-05{syntax: "<color>"; inherits: false; initial-value: hsla(0,4%,8%,1);}@property --x-0-05{syntax: "<percentage>"; inherits: false; initial-value: 88%;}@property --y-1-05{syntax: "<percentage>"; inherits: false; initial-value: 40%;}@property --s-start-1-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-1-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --x-1-05{syntax: "<percentage>"; inherits: false; initial-value: 67%;}@property --c-1-05{syntax: "<color>"; inherits: false; initial-value: hsla(89.09090909090908,20%,31%,1);}@property --y-2-05{syntax: "<percentage>"; inherits: false; initial-value: 2%;}@property --c-2-05{syntax: "<color>"; inherits: false; initial-value: hsla(0,4%,8%,1);}@property --s-start-2-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-2-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --x-2-05{syntax: "<percentage>"; inherits: false; initial-value: 98%;}@property --y-3-05{syntax: "<percentage>"; inherits: false; initial-value: 39%;}@property --s-start-3-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-3-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --x-3-05{syntax: "<percentage>"; inherits: false; initial-value: 66%;}@property --c-3-05{syntax: "<color>"; inherits: false; initial-value: hsla(89.09090909090908,20%,31%,1);}@property --x-4-05{syntax: "<percentage>"; inherits: false; initial-value: 48%;}@property --c-4-05{syntax: "<color>"; inherits: false; initial-value: hsla(56.923076923076934,51%,70%,1);}@property --y-4-05{syntax: "<percentage>"; inherits: false; initial-value: 97%;}@property --s-start-4-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-4-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --x-5-05{syntax: "<percentage>"; inherits: false; initial-value: 40%;}@property --y-5-05{syntax: "<percentage>"; inherits: false; initial-value: 57%;}@property --s-start-5-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-5-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --c-5-05{syntax: "<color>"; inherits: false; initial-value: hsla(90.85714285714288,20%,33%,1);}@property --x-6-05{syntax: "<percentage>"; inherits: false; initial-value: 96%;}@property --c-6-05{syntax: "<color>"; inherits: false; initial-value: hsla(0,2%,8%,1);}@property --s-start-6-05{syntax: "<percentage>"; inherits: false; initial-value: 5%;}@property --s-end-6-05{syntax: "<percentage>"; inherits: false; initial-value: 68.3461719457654%;}@property --y-6-05{syntax: "<percentage>"; inherits: false; initial-value: 94%;}.of_gradient_main_05{--y-0-05: 92%;--c-0-05: hsla(0, 4%, 8%, 1);--x-0-05: 88%;--y-1-05: 40%;--x-1-05: 67%;--c-1-05: hsla(89.09090909090908, 20%, 31%, 1);--y-2-05: 2%;--c-2-05: hsla(0, 4%, 8%, 1);--x-2-05: 98%;--y-3-05: 39%;--x-3-05: 66%;--c-3-05: hsla(89.09090909090908, 20%, 31%, 1);--x-4-05: 48%;--c-4-05: hsla(56.923076923076934, 51%, 70%, 1);--y-4-05: 97%;--x-5-05: 40%;--y-5-05: 57%;--c-5-05: hsla(90.85714285714288, 20%, 33%, 1);--x-6-05: 96%;--c-6-05: hsla(0, 2%, 8%, 1);--y-6-05: 94%;background-color:#151414;background-image:radial-gradient(circle at var(--x-0-05) var(--y-0-05),var(--c-0-05) var(--s-start-0-05),transparent var(--s-end-0-05)),radial-gradient(circle at var(--x-1-05) var(--y-1-05),var(--c-1-05) var(--s-start-1-05),transparent var(--s-end-1-05)),radial-gradient(circle at var(--x-2-05) var(--y-2-05),var(--c-2-05) var(--s-start-2-05),transparent var(--s-end-2-05)),radial-gradient(circle at var(--x-3-05) var(--y-3-05),var(--c-3-05) var(--s-start-3-05),transparent var(--s-end-3-05)),radial-gradient(circle at var(--x-4-05) var(--y-4-05),var(--c-4-05) var(--s-start-4-05),transparent var(--s-end-4-05)),radial-gradient(circle at var(--x-5-05) var(--y-5-05),var(--c-5-05) var(--s-start-5-05),transparent var(--s-end-5-05)),radial-gradient(circle at var(--x-6-05) var(--y-6-05),var(--c-6-05) var(--s-start-6-05),transparent var(--s-end-6-05));animation:hero-gradient-animation-05 10s linear infinite alternate;background-blend-mode:normal,normal,normal,normal,normal,normal,normal}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:#00000040;position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:#0000001a}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:#00000080;border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev,.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;inset:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}html.lenis,html.lenis body{height:auto}.lenis:not(.lenis-autoToggle).lenis-stopped{overflow:clip}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-smooth iframe{pointer-events:none}.lenis.lenis-autoToggle{transition-property:overflow;transition-duration:1ms;transition-behavior:allow-discrete}';
    document.head.appendChild(style);
  } catch (e) {
    console.warn("Failed to inject CSS:", e);
  }
})();
var zl = Object.defineProperty;
var ud = (s, e, t) =>
  e in s
    ? zl(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var a = (s, e) => zl(s, "name", { value: e, configurable: !0 });
var H = (s, e, t) => ud(s, typeof e != "symbol" ? e + "" : e, t);
function Rl(s, e) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    e &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(s, r).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
a(Rl, "ownKeys");
function Nl(s) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Rl(Object(t), !0).forEach(function (i) {
          Rs(s, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t))
      : Rl(Object(t)).forEach(function (i) {
          Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
        });
  }
  return s;
}
a(Nl, "_objectSpread2");
function ht() {
  ht = a(function () {
    return s;
  }, "_regeneratorRuntime");
  var s = {},
    e = Object.prototype,
    t = e.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (x, M, O) {
        x[M] = O.value;
      },
    r = typeof Symbol == "function" ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.asyncIterator || "@@asyncIterator",
    l = r.toStringTag || "@@toStringTag";
  function u(x, M, O) {
    return (
      Object.defineProperty(x, M, {
        value: O,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      x[M]
    );
  }
  a(u, "define");
  try {
    u({}, "");
  } catch {
    u = a(function (M, O, D) {
      return (M[O] = D);
    }, "define");
  }
  function c(x, M, O, D) {
    var R = M && M.prototype instanceof p ? M : p,
      N = Object.create(R.prototype),
      B = new A(D || []);
    return i(N, "_invoke", { value: S(x, O, B) }), N;
  }
  a(c, "wrap");
  function f(x, M, O) {
    try {
      return { type: "normal", arg: x.call(M, O) };
    } catch (D) {
      return { type: "throw", arg: D };
    }
  }
  a(f, "tryCatch"), (s.wrap = c);
  var d = {};
  function p() {}
  a(p, "Generator");
  function h() {}
  a(h, "GeneratorFunction");
  function g() {}
  a(g, "GeneratorFunctionPrototype");
  var m = {};
  u(m, n, function () {
    return this;
  });
  var _ = Object.getPrototypeOf,
    b = _ && _(_(P([])));
  b && b !== e && t.call(b, n) && (m = b);
  var w = (g.prototype = p.prototype = Object.create(m));
  function y(x) {
    ["next", "throw", "return"].forEach(function (M) {
      u(x, M, function (O) {
        return this._invoke(M, O);
      });
    });
  }
  a(y, "defineIteratorMethods");
  function v(x, M) {
    function O(R, N, B, q) {
      var E = f(x[R], x, N);
      if (E.type !== "throw") {
        var j = E.arg,
          K = j.value;
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
                (j.value = ce), B(j);
              },
              function (ce) {
                return O("throw", ce, B, q);
              }
            );
      }
      q(E.arg);
    }
    a(O, "invoke");
    var D;
    i(this, "_invoke", {
      value: a(function (R, N) {
        function B() {
          return new M(function (q, E) {
            O(R, N, q, E);
          });
        }
        return a(B, "callInvokeWithMethodAndArg"), (D = D ? D.then(B, B) : B());
      }, "value"),
    });
  }
  a(v, "AsyncIterator");
  function S(x, M, O) {
    var D = "suspendedStart";
    return function (R, N) {
      if (D === "executing") throw new Error("Generator is already running");
      if (D === "completed") {
        if (R === "throw") throw N;
        return z();
      }
      for (O.method = R, O.arg = N; ; ) {
        var B = O.delegate;
        if (B) {
          var q = k(B, O);
          if (q) {
            if (q === d) continue;
            return q;
          }
        }
        if (O.method === "next") O.sent = O._sent = O.arg;
        else if (O.method === "throw") {
          if (D === "suspendedStart") throw ((D = "completed"), O.arg);
          O.dispatchException(O.arg);
        } else O.method === "return" && O.abrupt("return", O.arg);
        D = "executing";
        var E = f(x, M, O);
        if (E.type === "normal") {
          if (((D = O.done ? "completed" : "suspendedYield"), E.arg === d))
            continue;
          return { value: E.arg, done: O.done };
        }
        E.type === "throw" &&
          ((D = "completed"), (O.method = "throw"), (O.arg = E.arg));
      }
    };
  }
  a(S, "makeInvokeMethod");
  function k(x, M) {
    var O = M.method,
      D = x.iterator[O];
    if (D === void 0)
      return (
        (M.delegate = null),
        (O === "throw" &&
          x.iterator.return &&
          ((M.method = "return"),
          (M.arg = void 0),
          k(x, M),
          M.method === "throw")) ||
          (O !== "return" &&
            ((M.method = "throw"),
            (M.arg = new TypeError(
              "The iterator does not provide a '" + O + "' method"
            )))),
        d
      );
    var R = f(D, x.iterator, M.arg);
    if (R.type === "throw")
      return (M.method = "throw"), (M.arg = R.arg), (M.delegate = null), d;
    var N = R.arg;
    return N
      ? N.done
        ? ((M[x.resultName] = N.value),
          (M.next = x.nextLoc),
          M.method !== "return" && ((M.method = "next"), (M.arg = void 0)),
          (M.delegate = null),
          d)
        : N
      : ((M.method = "throw"),
        (M.arg = new TypeError("iterator result is not an object")),
        (M.delegate = null),
        d);
  }
  a(k, "maybeInvokeDelegate");
  function C(x) {
    var M = { tryLoc: x[0] };
    1 in x && (M.catchLoc = x[1]),
      2 in x && ((M.finallyLoc = x[2]), (M.afterLoc = x[3])),
      this.tryEntries.push(M);
  }
  a(C, "pushTryEntry");
  function T(x) {
    var M = x.completion || {};
    (M.type = "normal"), delete M.arg, (x.completion = M);
  }
  a(T, "resetTryEntry");
  function A(x) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      x.forEach(C, this),
      this.reset(!0);
  }
  a(A, "Context");
  function P(x) {
    if (x) {
      var M = x[n];
      if (M) return M.call(x);
      if (typeof x.next == "function") return x;
      if (!isNaN(x.length)) {
        var O = -1,
          D = a(function R() {
            for (; ++O < x.length; )
              if (t.call(x, O)) return (R.value = x[O]), (R.done = !1), R;
            return (R.value = void 0), (R.done = !0), R;
          }, "next");
        return (D.next = D);
      }
    }
    return { next: z };
  }
  a(P, "values");
  function z() {
    return { value: void 0, done: !0 };
  }
  return (
    a(z, "doneResult"),
    (h.prototype = g),
    i(w, "constructor", { value: g, configurable: !0 }),
    i(g, "constructor", { value: h, configurable: !0 }),
    (h.displayName = u(g, l, "GeneratorFunction")),
    (s.isGeneratorFunction = function (x) {
      var M = typeof x == "function" && x.constructor;
      return (
        !!M && (M === h || (M.displayName || M.name) === "GeneratorFunction")
      );
    }),
    (s.mark = function (x) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(x, g)
          : ((x.__proto__ = g), u(x, l, "GeneratorFunction")),
        (x.prototype = Object.create(w)),
        x
      );
    }),
    (s.awrap = function (x) {
      return { __await: x };
    }),
    y(v.prototype),
    u(v.prototype, o, function () {
      return this;
    }),
    (s.AsyncIterator = v),
    (s.async = function (x, M, O, D, R) {
      R === void 0 && (R = Promise);
      var N = new v(c(x, M, O, D), R);
      return s.isGeneratorFunction(M)
        ? N
        : N.next().then(function (B) {
            return B.done ? B.value : N.next();
          });
    }),
    y(w),
    u(w, l, "Generator"),
    u(w, n, function () {
      return this;
    }),
    u(w, "toString", function () {
      return "[object Generator]";
    }),
    (s.keys = function (x) {
      var M = Object(x),
        O = [];
      for (var D in M) O.push(D);
      return (
        O.reverse(),
        a(function R() {
          for (; O.length; ) {
            var N = O.pop();
            if (N in M) return (R.value = N), (R.done = !1), R;
          }
          return (R.done = !0), R;
        }, "next")
      );
    }),
    (s.values = P),
    (A.prototype = {
      constructor: A,
      reset: a(function (x) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = void 0),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = void 0),
          this.tryEntries.forEach(T),
          !x)
        )
          for (var M in this)
            M.charAt(0) === "t" &&
              t.call(this, M) &&
              !isNaN(+M.slice(1)) &&
              (this[M] = void 0);
      }, "reset"),
      stop: a(function () {
        this.done = !0;
        var x = this.tryEntries[0].completion;
        if (x.type === "throw") throw x.arg;
        return this.rval;
      }, "stop"),
      dispatchException: a(function (x) {
        if (this.done) throw x;
        var M = this;
        function O(E, j) {
          return (
            (N.type = "throw"),
            (N.arg = x),
            (M.next = E),
            j && ((M.method = "next"), (M.arg = void 0)),
            !!j
          );
        }
        a(O, "handle");
        for (var D = this.tryEntries.length - 1; D >= 0; --D) {
          var R = this.tryEntries[D],
            N = R.completion;
          if (R.tryLoc === "root") return O("end");
          if (R.tryLoc <= this.prev) {
            var B = t.call(R, "catchLoc"),
              q = t.call(R, "finallyLoc");
            if (B && q) {
              if (this.prev < R.catchLoc) return O(R.catchLoc, !0);
              if (this.prev < R.finallyLoc) return O(R.finallyLoc);
            } else if (B) {
              if (this.prev < R.catchLoc) return O(R.catchLoc, !0);
            } else {
              if (!q) throw new Error("try statement without catch or finally");
              if (this.prev < R.finallyLoc) return O(R.finallyLoc);
            }
          }
        }
      }, "dispatchException"),
      abrupt: a(function (x, M) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var D = this.tryEntries[O];
          if (
            D.tryLoc <= this.prev &&
            t.call(D, "finallyLoc") &&
            this.prev < D.finallyLoc
          ) {
            var R = D;
            break;
          }
        }
        R &&
          (x === "break" || x === "continue") &&
          R.tryLoc <= M &&
          M <= R.finallyLoc &&
          (R = null);
        var N = R ? R.completion : {};
        return (
          (N.type = x),
          (N.arg = M),
          R
            ? ((this.method = "next"), (this.next = R.finallyLoc), d)
            : this.complete(N)
        );
      }, "abrupt"),
      complete: a(function (x, M) {
        if (x.type === "throw") throw x.arg;
        return (
          x.type === "break" || x.type === "continue"
            ? (this.next = x.arg)
            : x.type === "return"
            ? ((this.rval = this.arg = x.arg),
              (this.method = "return"),
              (this.next = "end"))
            : x.type === "normal" && M && (this.next = M),
          d
        );
      }, "complete"),
      finish: a(function (x) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var O = this.tryEntries[M];
          if (O.finallyLoc === x)
            return this.complete(O.completion, O.afterLoc), T(O), d;
        }
      }, "finish"),
      catch: a(function (x) {
        for (var M = this.tryEntries.length - 1; M >= 0; --M) {
          var O = this.tryEntries[M];
          if (O.tryLoc === x) {
            var D = O.completion;
            if (D.type === "throw") {
              var R = D.arg;
              T(O);
            }
            return R;
          }
        }
        throw new Error("illegal catch attempt");
      }, "catch"),
      delegateYield: a(function (x, M, O) {
        return (
          (this.delegate = { iterator: P(x), resultName: M, nextLoc: O }),
          this.method === "next" && (this.arg = void 0),
          d
        );
      }, "delegateYield"),
    }),
    s
  );
}
a(ht, "_regeneratorRuntime");
function Fl(s, e, t, i, r, n, o) {
  try {
    var l = s[n](o),
      u = l.value;
  } catch (c) {
    t(c);
    return;
  }
  l.done ? e(u) : Promise.resolve(u).then(i, r);
}
a(Fl, "asyncGeneratorStep");
function ur(s) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (i, r) {
      var n = s.apply(e, t);
      function o(u) {
        Fl(n, i, r, o, l, "next", u);
      }
      a(o, "_next");
      function l(u) {
        Fl(n, i, r, o, l, "throw", u);
      }
      a(l, "_throw"), o(void 0);
    });
  };
}
a(ur, "_asyncToGenerator");
function Zu(s, e) {
  if (!(s instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
a(Zu, "_classCallCheck");
function cd(s, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, ec(i.key), i);
  }
}
a(cd, "_defineProperties$1");
function Qu(s, e, t) {
  return (
    e && cd(s.prototype, e),
    Object.defineProperty(s, "prototype", { writable: !1 }),
    s
  );
}
a(Qu, "_createClass$1");
function Rs(s, e, t) {
  return (
    (e = ec(e)),
    e in s
      ? Object.defineProperty(s, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (s[e] = t),
    s
  );
}
a(Rs, "_defineProperty");
function fd(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (s.prototype = Object.create(e && e.prototype, {
    constructor: { value: s, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(s, "prototype", { writable: !1 }),
    e && ts(s, e);
}
a(fd, "_inherits");
function es(s) {
  return (
    (es = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : a(function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, "_getPrototypeOf")),
    es(s)
  );
}
a(es, "_getPrototypeOf");
function ts(s, e) {
  return (
    (ts = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : a(function (i, r) {
          return (i.__proto__ = r), i;
        }, "_setPrototypeOf")),
    ts(s, e)
  );
}
a(ts, "_setPrototypeOf");
function Ju() {
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
a(Ju, "_isNativeReflectConstruct");
function Ns(s, e, t) {
  return (
    Ju()
      ? (Ns = Reflect.construct.bind())
      : (Ns = a(function (r, n, o) {
          var l = [null];
          l.push.apply(l, n);
          var u = Function.bind.apply(r, l),
            c = new u();
          return o && ts(c, o.prototype), c;
        }, "_construct")),
    Ns.apply(null, arguments)
  );
}
a(Ns, "_construct");
function dd(s) {
  return Function.toString.call(s).indexOf("[native code]") !== -1;
}
a(dd, "_isNativeFunction");
function oa(s) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (oa = a(function (i) {
      if (i === null || !dd(i)) return i;
      if (typeof i != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(i)) return e.get(i);
        e.set(i, r);
      }
      function r() {
        return Ns(i, arguments, es(this).constructor);
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
        ts(r, i)
      );
    }, "_wrapNativeSuper")),
    oa(s)
  );
}
a(oa, "_wrapNativeSuper");
function Fs(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
a(Fs, "_assertThisInitialized$1");
function hd(s, e) {
  if (e && (typeof e == "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Fs(s);
}
a(hd, "_possibleConstructorReturn");
function pd(s) {
  var e = Ju();
  return a(function () {
    var i = es(s),
      r;
    if (e) {
      var n = es(this).constructor;
      r = Reflect.construct(i, arguments, n);
    } else r = i.apply(this, arguments);
    return hd(this, r);
  }, "_createSuperInternal");
}
a(pd, "_createSuper");
function gd(s, e) {
  if (typeof s != "object" || s === null) return s;
  var t = s[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(s, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(s);
}
a(gd, "_toPrimitive");
function ec(s) {
  var e = gd(s, "string");
  return typeof e == "symbol" ? e : String(e);
}
a(ec, "_toPropertyKey");
var tc = typeof global < "u" && {}.toString.call(global) === "[object global]";
function Bl(s, e) {
  return s.indexOf(e.toLowerCase()) === 0
    ? s
    : ""
        .concat(e.toLowerCase())
        .concat(s.substr(0, 1).toUpperCase())
        .concat(s.substr(1));
}
a(Bl, "getMethodName");
function md(s) {
  return !!(
    s &&
    s.nodeType === 1 &&
    "nodeName" in s &&
    s.ownerDocument &&
    s.ownerDocument.defaultView
  );
}
a(md, "isDomElement");
function vd(s) {
  return !isNaN(parseFloat(s)) && isFinite(s) && Math.floor(s) == s;
}
a(vd, "isInteger");
function kr(s) {
  return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
    s
  );
}
a(kr, "isVimeoUrl");
function ic(s) {
  var e =
    /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
  return e.test(s);
}
a(ic, "isVimeoEmbed");
function _d(s) {
  for (
    var e = (s || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/),
      t = ((e && e[1]) || "").replace("player.", ""),
      i = [".videoji.hk", ".vimeo.work", ".videoji.cn"],
      r = 0,
      n = i;
    r < n.length;
    r++
  ) {
    var o = n[r];
    if (t.endsWith(o)) return t;
  }
  return "vimeo.com";
}
a(_d, "getOembedDomain");
function rc() {
  var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = s.id,
    t = s.url,
    i = e || t;
  if (!i)
    throw new Error(
      "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
    );
  if (vd(i)) return "https://vimeo.com/".concat(i);
  if (kr(i)) return i.replace("http:", "https:");
  throw e
    ? new TypeError("“".concat(e, "” is not a valid video id."))
    : new TypeError("“".concat(i, "” is not a vimeo.com url."));
}
a(rc, "getVimeoUrl");
var Vl = a(function (e, t, i) {
    var r =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : "addEventListener",
      n =
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
            return e[n](u, i);
          });
        }, "cancel"),
      }
    );
  }, "subscribe"),
  yd = typeof Array.prototype.indexOf < "u",
  wd = typeof window < "u" && typeof window.postMessage < "u";
if (!tc && (!yd || !wd))
  throw new Error(
    "Sorry, the Vimeo Player API is not available in this browser."
  );
var Qr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function bd(s, e) {
  return (e = { exports: {} }), s(e, e.exports), e.exports;
}
a(bd, "createCommonjsModule");
(function (s) {
  if (s.WeakMap) return;
  var e = Object.prototype.hasOwnProperty,
    t =
      Object.defineProperty &&
      (function () {
        try {
          return Object.defineProperty({}, "x", { value: 1 }).x === 1;
        } catch {}
      })(),
    i = a(function (n, o, l) {
      t
        ? Object.defineProperty(n, o, {
            configurable: !0,
            writable: !0,
            value: l,
          })
        : (n[o] = l);
    }, "defineProperty");
  s.WeakMap = (function () {
    function n() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if ((i(this, "_id", l("_WeakMap")), arguments.length > 0))
        throw new TypeError("WeakMap iterable is not supported");
    }
    a(n, "WeakMap"),
      i(n.prototype, "delete", function (c) {
        if ((o(this, "delete"), !r(c))) return !1;
        var f = c[this._id];
        return f && f[0] === c ? (delete c[this._id], !0) : !1;
      }),
      i(n.prototype, "get", function (c) {
        if ((o(this, "get"), !!r(c))) {
          var f = c[this._id];
          if (f && f[0] === c) return f[1];
        }
      }),
      i(n.prototype, "has", function (c) {
        if ((o(this, "has"), !r(c))) return !1;
        var f = c[this._id];
        return !!(f && f[0] === c);
      }),
      i(n.prototype, "set", function (c, f) {
        if ((o(this, "set"), !r(c)))
          throw new TypeError("Invalid value used as weak map key");
        var d = c[this._id];
        return d && d[0] === c
          ? ((d[1] = f), this)
          : (i(c, this._id, [c, f]), this);
      });
    function o(c, f) {
      if (!r(c) || !e.call(c, "_id"))
        throw new TypeError(
          f + " method called on incompatible receiver " + typeof c
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
    return a(u, "rand"), i(n, "_polyfill", !0), n;
  })();
  function r(n) {
    return Object(n) === n;
  }
  a(r, "isObject");
})(
  typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : Qr
);
var $t = bd(function (s) {
    a(function (t, i, r) {
      (i[t] = i[t] || r()), s.exports && (s.exports = i[t]);
    }, "UMD")(
      "Promise",
      Qr,
      a(function () {
        var t,
          i,
          r,
          n = Object.prototype.toString,
          o =
            typeof setImmediate < "u"
              ? a(function (y) {
                  return setImmediate(y);
                }, "timer")
              : setTimeout;
        try {
          t = a(function (y, v, S, k) {
            return Object.defineProperty(y, v, {
              value: S,
              writable: !0,
              configurable: k !== !1,
            });
          }, "builtInProp");
        } catch {
          t = a(function (v, S, k) {
            return (v[S] = k), v;
          }, "builtInProp");
        }
        r = a(function () {
          var y, v, S;
          function k(C, T) {
            (this.fn = C), (this.self = T), (this.next = void 0);
          }
          return (
            a(k, "Item"),
            {
              add: a(function (T, A) {
                (S = new k(T, A)),
                  v ? (v.next = S) : (y = S),
                  (v = S),
                  (S = void 0);
              }, "add"),
              drain: a(function () {
                var T = y;
                for (y = v = i = void 0; T; ) T.fn.call(T.self), (T = T.next);
              }, "drain"),
            }
          );
        }, "Queue")();
        function l(w, y) {
          r.add(w, y), i || (i = o(r.drain));
        }
        a(l, "schedule");
        function u(w) {
          var y,
            v = typeof w;
          return (
            w != null && (v == "object" || v == "function") && (y = w.then),
            typeof y == "function" ? y : !1
          );
        }
        a(u, "isThenable");
        function c() {
          for (var w = 0; w < this.chain.length; w++)
            f(
              this,
              this.state === 1 ? this.chain[w].success : this.chain[w].failure,
              this.chain[w]
            );
          this.chain.length = 0;
        }
        a(c, "notify");
        function f(w, y, v) {
          var S, k;
          try {
            y === !1
              ? v.reject(w.msg)
              : (y === !0 ? (S = w.msg) : (S = y.call(void 0, w.msg)),
                S === v.promise
                  ? v.reject(TypeError("Promise-chain cycle"))
                  : (k = u(S))
                  ? k.call(S, v.resolve, v.reject)
                  : v.resolve(S));
          } catch (C) {
            v.reject(C);
          }
        }
        a(f, "notifyIsolated");
        function d(w) {
          var y,
            v = this;
          if (!v.triggered) {
            (v.triggered = !0), v.def && (v = v.def);
            try {
              (y = u(w))
                ? l(function () {
                    var S = new g(v);
                    try {
                      y.call(
                        w,
                        a(function () {
                          d.apply(S, arguments);
                        }, "$resolve$"),
                        a(function () {
                          p.apply(S, arguments);
                        }, "$reject$")
                      );
                    } catch (k) {
                      p.call(S, k);
                    }
                  })
                : ((v.msg = w), (v.state = 1), v.chain.length > 0 && l(c, v));
            } catch (S) {
              p.call(new g(v), S);
            }
          }
        }
        a(d, "resolve");
        function p(w) {
          var y = this;
          y.triggered ||
            ((y.triggered = !0),
            y.def && (y = y.def),
            (y.msg = w),
            (y.state = 2),
            y.chain.length > 0 && l(c, y));
        }
        a(p, "reject");
        function h(w, y, v, S) {
          for (var k = 0; k < y.length; k++)
            a(function (T) {
              w.resolve(y[T]).then(
                a(function (P) {
                  v(T, P);
                }, "$resolver$"),
                S
              );
            }, "IIFE")(k);
        }
        a(h, "iteratePromises");
        function g(w) {
          (this.def = w), (this.triggered = !1);
        }
        a(g, "MakeDefWrapper");
        function m(w) {
          (this.promise = w),
            (this.state = 0),
            (this.triggered = !1),
            (this.chain = []),
            (this.msg = void 0);
        }
        a(m, "MakeDef");
        function _(w) {
          if (typeof w != "function") throw TypeError("Not a function");
          if (this.__NPO__ !== 0) throw TypeError("Not a promise");
          this.__NPO__ = 1;
          var y = new m(this);
          (this.then = a(function (S, k) {
            var C = {
              success: typeof S == "function" ? S : !0,
              failure: typeof k == "function" ? k : !1,
            };
            return (
              (C.promise = new this.constructor(
                a(function (A, P) {
                  if (typeof A != "function" || typeof P != "function")
                    throw TypeError("Not a function");
                  (C.resolve = A), (C.reject = P);
                }, "extractChain")
              )),
              y.chain.push(C),
              y.state !== 0 && l(c, y),
              C.promise
            );
          }, "then")),
            (this.catch = a(function (S) {
              return this.then(void 0, S);
            }, "$catch$"));
          try {
            w.call(
              void 0,
              a(function (S) {
                d.call(y, S);
              }, "publicResolve"),
              a(function (S) {
                p.call(y, S);
              }, "publicReject")
            );
          } catch (v) {
            p.call(y, v);
          }
        }
        a(_, "Promise");
        var b = t({}, "constructor", _, !1);
        return (
          (_.prototype = b),
          t(b, "__NPO__", 0, !1),
          t(
            _,
            "resolve",
            a(function (y) {
              var v = this;
              return y && typeof y == "object" && y.__NPO__ === 1
                ? y
                : new v(
                    a(function (k, C) {
                      if (typeof k != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      k(y);
                    }, "executor")
                  );
            }, "Promise$resolve")
          ),
          t(
            _,
            "reject",
            a(function (y) {
              return new this(
                a(function (S, k) {
                  if (typeof S != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                  k(y);
                }, "executor")
              );
            }, "Promise$reject")
          ),
          t(
            _,
            "all",
            a(function (y) {
              var v = this;
              return n.call(y) != "[object Array]"
                ? v.reject(TypeError("Not an array"))
                : y.length === 0
                ? v.resolve([])
                : new v(
                    a(function (k, C) {
                      if (typeof k != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      var T = y.length,
                        A = Array(T),
                        P = 0;
                      h(
                        v,
                        y,
                        a(function (x, M) {
                          (A[x] = M), ++P === T && k(A);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$all")
          ),
          t(
            _,
            "race",
            a(function (y) {
              var v = this;
              return n.call(y) != "[object Array]"
                ? v.reject(TypeError("Not an array"))
                : new v(
                    a(function (k, C) {
                      if (typeof k != "function" || typeof C != "function")
                        throw TypeError("Not a function");
                      h(
                        v,
                        y,
                        a(function (A, P) {
                          k(P);
                        }, "resolver"),
                        C
                      );
                    }, "executor")
                  );
            }, "Promise$race")
          ),
          _
        );
      }, "DEF")
    );
  }),
  Mi = new WeakMap();
function En(s, e, t) {
  var i = Mi.get(s.element) || {};
  e in i || (i[e] = []), i[e].push(t), Mi.set(s.element, i);
}
a(En, "storeCallback");
function Qs(s, e) {
  var t = Mi.get(s.element) || {};
  return t[e] || [];
}
a(Qs, "getCallbacks");
function Js(s, e, t) {
  var i = Mi.get(s.element) || {};
  if (!i[e]) return !0;
  if (!t) return (i[e] = []), Mi.set(s.element, i), !0;
  var r = i[e].indexOf(t);
  return (
    r !== -1 && i[e].splice(r, 1),
    Mi.set(s.element, i),
    i[e] && i[e].length === 0
  );
}
a(Js, "removeCallback");
function Sd(s, e) {
  var t = Qs(s, e);
  if (t.length < 1) return !1;
  var i = t.shift();
  return Js(s, e, i), i;
}
a(Sd, "shiftCallbacks");
function xd(s, e) {
  var t = Mi.get(s);
  Mi.set(e, t), Mi.delete(s);
}
a(xd, "swapCallbacks");
function yo(s) {
  if (typeof s == "string")
    try {
      s = JSON.parse(s);
    } catch {
      return {};
    }
  return s;
}
a(yo, "parseMessageData");
function or(s, e, t) {
  if (!(!s.element.contentWindow || !s.element.contentWindow.postMessage)) {
    var i = { method: e };
    t !== void 0 && (i.value = t);
    var r = parseFloat(
      navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
    );
    r >= 8 && r < 10 && (i = JSON.stringify(i)),
      s.element.contentWindow.postMessage(i, s.origin);
  }
}
a(or, "postMessage");
function Td(s, e) {
  e = yo(e);
  var t = [],
    i;
  if (e.event) {
    if (e.event === "error") {
      var r = Qs(s, e.data.method);
      r.forEach(function (o) {
        var l = new Error(e.data.message);
        (l.name = e.data.name), o.reject(l), Js(s, e.data.method, o);
      });
    }
    (t = Qs(s, "event:".concat(e.event))), (i = e.data);
  } else if (e.method) {
    var n = Sd(s, e.method);
    n && (t.push(n), (i = e.value));
  }
  t.forEach(function (o) {
    try {
      if (typeof o == "function") {
        o.call(s, i);
        return;
      }
      o.resolve(i);
    } catch {}
  });
}
a(Td, "processData");
var Ed = [
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
function nc(s) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Ed.reduce(function (t, i) {
    var r = s.getAttribute("data-vimeo-".concat(i));
    return (r || r === "") && (t[i] = r === "" ? 1 : r), t;
  }, e);
}
a(nc, "getOEmbedParameters");
function Ha(s, e) {
  var t = s.html;
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
a(Ha, "createEmbed");
function sc(s) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function (i, r) {
    if (!kr(s)) throw new TypeError("“".concat(s, "” is not a vimeo.com url."));
    var n = _d(s),
      o = "https://"
        .concat(n, "/api/oembed.json?url=")
        .concat(encodeURIComponent(s));
    for (var l in e)
      e.hasOwnProperty(l) &&
        (o += "&".concat(l, "=").concat(encodeURIComponent(e[l])));
    var u =
      "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    u.open("GET", o, !0),
      (u.onload = function () {
        if (u.status === 404) {
          r(new Error("“".concat(s, "” was not found.")));
          return;
        }
        if (u.status === 403) {
          r(new Error("“".concat(s, "” is not embeddable.")));
          return;
        }
        try {
          var c = JSON.parse(u.responseText);
          if (c.domain_status_code === 403) {
            Ha(c, t), r(new Error("“".concat(s, "” is not embeddable.")));
            return;
          }
          i(c);
        } catch (f) {
          r(f);
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
a(sc, "getOEmbedData");
function kd() {
  var s =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
    e = [].slice.call(s.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
    t = a(function (r) {
      "console" in window;
    }, "handleError");
  e.forEach(function (i) {
    try {
      if (i.getAttribute("data-vimeo-defer") !== null) return;
      var r = nc(i),
        n = rc(r);
      sc(n, r, i)
        .then(function (o) {
          return Ha(o, i);
        })
        .catch(t);
    } catch (o) {
      t(o);
    }
  });
}
a(kd, "initializeEmbeds");
function Cd() {
  var s =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = a(function (i) {
      if (kr(i.origin) && !(!i.data || i.data.event !== "spacechange")) {
        for (var r = s.querySelectorAll("iframe"), n = 0; n < r.length; n++)
          if (r[n].contentWindow === i.source) {
            var o = r[n].parentElement;
            o.style.paddingBottom = "".concat(i.data.data[0].bottom, "px");
            break;
          }
      }
    }, "onMessage");
    window.addEventListener("message", e);
  }
}
a(Cd, "resizeEmbeds");
function Pd() {
  var s =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = a(function (i) {
      if (kr(i.origin)) {
        var r = yo(i.data);
        if (!(!r || r.event !== "ready"))
          for (var n = s.querySelectorAll("iframe"), o = 0; o < n.length; o++) {
            var l = n[o],
              u = l.contentWindow === i.source;
            if (ic(l.src) && u) {
              var c = new Fn(l);
              c.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    }, "onMessage");
    window.addEventListener("message", e);
  }
}
a(Pd, "initAppendVideoMetadata");
function Md() {
  var s =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = a(function (r) {
        "console" in window;
      }, "handleError"),
      t = a(function (r) {
        if (kr(r.origin)) {
          var n = yo(r.data);
          if (!(!n || n.event !== "ready"))
            for (
              var o = s.querySelectorAll("iframe"),
                l = a(function () {
                  var f = o[u],
                    d = f.contentWindow === r.source;
                  if (ic(f.src) && d) {
                    var p = new Fn(f);
                    p.getVideoId()
                      .then(function (h) {
                        var g = new RegExp(
                          "[?&]vimeo_t_".concat(h, "=([^&#]*)")
                        ).exec(window.location.href);
                        if (g && g[1]) {
                          var m = decodeURI(g[1]);
                          p.setCurrentTime(m);
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
a(Md, "checkUrlTimeParam");
function Ad() {
  var s = (function () {
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
          n = 0,
          o = r.length,
          l = {};
        n < o;
        n++
      )
        if (((i = r[n]), i && i[1] in document)) {
          for (n = 0; n < i.length; n++) l[r[0][n]] = i[n];
          return l;
        }
      return !1;
    })(),
    e = {
      fullscreenchange: s.fullscreenchange,
      fullscreenerror: s.fullscreenerror,
    },
    t = {
      request: a(function (r) {
        return new Promise(function (n, o) {
          var l = a(function c() {
            t.off("fullscreenchange", c), n();
          }, "onFullScreenEntered");
          t.on("fullscreenchange", l), (r = r || document.documentElement);
          var u = r[s.requestFullscreen]();
          u instanceof Promise && u.then(l).catch(o);
        });
      }, "request"),
      exit: a(function () {
        return new Promise(function (r, n) {
          if (!t.isFullscreen) {
            r();
            return;
          }
          var o = a(function u() {
            t.off("fullscreenchange", u), r();
          }, "onFullScreenExit");
          t.on("fullscreenchange", o);
          var l = document[s.exitFullscreen]();
          l instanceof Promise && l.then(o).catch(n);
        });
      }, "exit"),
      on: a(function (r, n) {
        var o = e[r];
        o && document.addEventListener(o, n);
      }, "on"),
      off: a(function (r, n) {
        var o = e[r];
        o && document.removeEventListener(o, n);
      }, "off"),
    };
  return (
    Object.defineProperties(t, {
      isFullscreen: {
        get: a(function () {
          return !!document[s.fullscreenElement];
        }, "get"),
      },
      element: {
        enumerable: !0,
        get: a(function () {
          return document[s.fullscreenElement];
        }, "get"),
      },
      isEnabled: {
        enumerable: !0,
        get: a(function () {
          return !!document[s.fullscreenEnabled];
        }, "get"),
      },
    }),
    t
  );
}
a(Ad, "initializeScreenfull");
var Od = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  },
  Ld = (function (s) {
    fd(t, s);
    var e = pd(t);
    function t(i, r) {
      var n,
        o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        l = arguments.length > 3 ? arguments[3] : void 0;
      return (
        Zu(this, t),
        (n = e.call(this)),
        Rs(Fs(n), "logger", void 0),
        Rs(Fs(n), "speedAdjustment", 0),
        Rs(
          Fs(n),
          "adjustSpeed",
          (function () {
            var u = ur(
              ht().mark(
                a(function c(f, d) {
                  var p;
                  return ht().wrap(
                    a(function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            if (n.speedAdjustment !== d) {
                              g.next = 2;
                              break;
                            }
                            return g.abrupt("return");
                          case 2:
                            return (g.next = 4), f.getPlaybackRate();
                          case 4:
                            return (
                              (g.t0 = g.sent),
                              (g.t1 = n.speedAdjustment),
                              (g.t2 = g.t0 - g.t1),
                              (g.t3 = d),
                              (p = g.t2 + g.t3),
                              n.log("New playbackRate:  ".concat(p)),
                              (g.next = 12),
                              f.setPlaybackRate(p)
                            );
                          case 12:
                            n.speedAdjustment = d;
                          case 13:
                          case "end":
                            return g.stop();
                        }
                    }, "_callee$"),
                    c
                  );
                }, "_callee")
              )
            );
            return function (c, f) {
              return u.apply(this, arguments);
            };
          })()
        ),
        (n.logger = l),
        n.init(r, i, Nl(Nl({}, Od), o)),
        n
      );
    }
    return (
      a(t, "TimingSrcConnector"),
      Qu(t, [
        {
          key: "disconnect",
          value: a(function () {
            this.dispatchEvent(new Event("disconnect"));
          }, "disconnect"),
        },
        {
          key: "init",
          value: (function () {
            var i = ur(
              ht().mark(
                a(function n(o, l, u) {
                  var c = this,
                    f,
                    d,
                    p;
                  return ht().wrap(
                    a(function (g) {
                      for (;;)
                        switch ((g.prev = g.next)) {
                          case 0:
                            return (
                              (g.next = 2), this.waitForTOReadyState(o, "open")
                            );
                          case 2:
                            if (u.role !== "viewer") {
                              g.next = 10;
                              break;
                            }
                            return (g.next = 5), this.updatePlayer(o, l, u);
                          case 5:
                            (f = Vl(o, "change", function () {
                              return c.updatePlayer(o, l, u);
                            })),
                              (d = this.maintainPlaybackPosition(o, l, u)),
                              this.addEventListener("disconnect", function () {
                                d.cancel(), f.cancel();
                              }),
                              (g.next = 14);
                            break;
                          case 10:
                            return (g.next = 12), this.updateTimingObject(o, l);
                          case 12:
                            (p = Vl(
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
                            return g.stop();
                        }
                    }, "_callee2$"),
                    n,
                    this
                  );
                }, "_callee2")
              )
            );
            function r(n, o, l) {
              return i.apply(this, arguments);
            }
            return a(r, "init"), r;
          })(),
        },
        {
          key: "updateTimingObject",
          value: (function () {
            var i = ur(
              ht().mark(
                a(function n(o, l) {
                  return ht().wrap(
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
                    n
                  );
                }, "_callee3")
              )
            );
            function r(n, o) {
              return i.apply(this, arguments);
            }
            return a(r, "updateTimingObject"), r;
          })(),
        },
        {
          key: "updatePlayer",
          value: (function () {
            var i = ur(
              ht().mark(
                a(function n(o, l, u) {
                  var c, f, d;
                  return ht().wrap(
                    a(function (h) {
                      for (;;)
                        switch ((h.prev = h.next)) {
                          case 0:
                            if (
                              ((c = o.query()),
                              (f = c.position),
                              (d = c.velocity),
                              typeof f == "number" && l.setCurrentTime(f),
                              typeof d != "number")
                            ) {
                              h.next = 25;
                              break;
                            }
                            if (d !== 0) {
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
                            if (!(d > 0)) {
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
                                  var g = ur(
                                    ht().mark(
                                      a(function m(_) {
                                        return ht().wrap(
                                          a(function (w) {
                                            for (;;)
                                              switch ((w.prev = w.next)) {
                                                case 0:
                                                  if (
                                                    !(
                                                      _.name ===
                                                        "NotAllowedError" &&
                                                      u.autoPlayMuted
                                                    )
                                                  ) {
                                                    w.next = 5;
                                                    break;
                                                  }
                                                  return (
                                                    (w.next = 3), l.setMuted(!0)
                                                  );
                                                case 3:
                                                  return (
                                                    (w.next = 5),
                                                    l
                                                      .play()
                                                      .catch(function (y) {})
                                                  );
                                                case 5:
                                                case "end":
                                                  return w.stop();
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
                            this.updatePlayer(o, l, u);
                          case 19:
                            return (h.next = 21), l.getPlaybackRate();
                          case 21:
                            if (((h.t2 = h.sent), (h.t3 = d), h.t2 === h.t3)) {
                              h.next = 25;
                              break;
                            }
                            l.setPlaybackRate(d);
                          case 25:
                          case "end":
                            return h.stop();
                        }
                    }, "_callee5$"),
                    n,
                    this
                  );
                }, "_callee5")
              )
            );
            function r(n, o, l) {
              return i.apply(this, arguments);
            }
            return a(r, "updatePlayer"), r;
          })(),
        },
        {
          key: "maintainPlaybackPosition",
          value: a(function (r, n, o) {
            var l = this,
              u = o.allowedDrift,
              c = o.maxAllowedDrift,
              f = o.minCheckInterval,
              d = o.maxRateAdjustment,
              p = o.maxTimeToCatchUp,
              h = Math.min(p, Math.max(f, c)) * 1e3,
              g = (function () {
                var _ = ur(
                  ht().mark(
                    a(function b() {
                      var w, y, v, S, k;
                      return ht().wrap(
                        a(function (T) {
                          for (;;)
                            switch ((T.prev = T.next)) {
                              case 0:
                                if (((T.t0 = r.query().velocity === 0), T.t0)) {
                                  T.next = 6;
                                  break;
                                }
                                return (T.next = 4), n.getPaused();
                              case 4:
                                (T.t1 = T.sent), (T.t0 = T.t1 === !0);
                              case 6:
                                if (!T.t0) {
                                  T.next = 8;
                                  break;
                                }
                                return T.abrupt("return");
                              case 8:
                                return (
                                  (T.t2 = r.query().position),
                                  (T.next = 11),
                                  n.getCurrentTime()
                                );
                              case 11:
                                if (
                                  ((T.t3 = T.sent),
                                  (w = T.t2 - T.t3),
                                  (y = Math.abs(w)),
                                  l.log("Drift: ".concat(w)),
                                  !(y > c))
                                ) {
                                  T.next = 22;
                                  break;
                                }
                                return (T.next = 18), l.adjustSpeed(n, 0);
                              case 18:
                                n.setCurrentTime(r.query().position),
                                  l.log("Resync by currentTime"),
                                  (T.next = 29);
                                break;
                              case 22:
                                if (!(y > u)) {
                                  T.next = 29;
                                  break;
                                }
                                return (
                                  (v = y / p),
                                  (S = d),
                                  (k = v < S ? (S - v) / 2 : S),
                                  (T.next = 28),
                                  l.adjustSpeed(n, k * Math.sign(w))
                                );
                              case 28:
                                l.log("Resync by playbackRate");
                              case 29:
                              case "end":
                                return T.stop();
                            }
                        }, "_callee6$"),
                        b
                      );
                    }, "_callee6")
                  )
                );
                return a(function () {
                  return _.apply(this, arguments);
                }, "check");
              })(),
              m = setInterval(function () {
                return g();
              }, h);
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
            var n;
            (n = this.logger) === null ||
              n === void 0 ||
              n.call(this, "TimingSrcConnector: ".concat(r));
          }, "log"),
        },
        {
          key: "waitForTOReadyState",
          value: a(function (r, n) {
            return new Promise(function (o) {
              var l = a(function u() {
                r.readyState === n
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
  })(oa(EventTarget)),
  Br = new WeakMap(),
  Po = new WeakMap(),
  yt = {},
  Fn = (function () {
    function s(e) {
      var t = this,
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (
        (Zu(this, s),
        window.jQuery &&
          e instanceof jQuery &&
          (e.length > 1 && window.console, (e = e[0])),
        typeof document < "u" &&
          typeof e == "string" &&
          (e = document.getElementById(e)),
        !md(e))
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
      var n = new $t(function (l, u) {
        if (
          ((t._onMessage = function (d) {
            if (!(!kr(d.origin) || t.element.contentWindow !== d.source)) {
              t.origin === "*" && (t.origin = d.origin);
              var p = yo(d.data),
                h = p && p.event === "error",
                g = h && p.data && p.data.method === "ready";
              if (g) {
                var m = new Error(p.data.message);
                (m.name = p.data.name), u(m);
                return;
              }
              var _ = p && p.event === "ready",
                b = p && p.method === "ping";
              if (_ || b) {
                t.element.setAttribute("data-ready", "true"), l();
                return;
              }
              Td(t, p);
            }
          }),
          t._window.addEventListener("message", t._onMessage),
          t.element.nodeName !== "IFRAME")
        ) {
          var c = nc(e, i),
            f = rc(c);
          sc(f, c, e)
            .then(function (d) {
              var p = Ha(d, e);
              return (
                (t.element = p),
                (t._originalElement = e),
                xd(e, p),
                Br.set(t.element, t),
                d
              );
            })
            .catch(u);
        }
      });
      if (
        (Po.set(this, n),
        Br.set(this.element, this),
        this.element.nodeName === "IFRAME" && or(this, "ping"),
        yt.isEnabled)
      ) {
        var o = a(function () {
          return yt.exit();
        }, "exitFullscreen");
        (this.fullscreenchangeHandler = function () {
          yt.isFullscreen
            ? En(t, "event:exitFullscreen", o)
            : Js(t, "event:exitFullscreen", o),
            t.ready().then(function () {
              or(t, "fullscreenchange", yt.isFullscreen);
            });
        }),
          yt.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    return (
      a(s, "Player"),
      Qu(s, [
        {
          key: "callMethod",
          value: a(function (t) {
            var i = this,
              r =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
            return new $t(function (n, o) {
              return i
                .ready()
                .then(function () {
                  En(i, t, { resolve: n, reject: o }), or(i, t, r);
                })
                .catch(o);
            });
          }, "callMethod"),
        },
        {
          key: "get",
          value: a(function (t) {
            var i = this;
            return new $t(function (r, n) {
              return (
                (t = Bl(t, "get")),
                i
                  .ready()
                  .then(function () {
                    En(i, t, { resolve: r, reject: n }), or(i, t);
                  })
                  .catch(n)
              );
            });
          }, "get"),
        },
        {
          key: "set",
          value: a(function (t, i) {
            var r = this;
            return new $t(function (n, o) {
              if (((t = Bl(t, "set")), i == null))
                throw new TypeError("There must be a value to set.");
              return r
                .ready()
                .then(function () {
                  En(r, t, { resolve: n, reject: o }), or(r, t, i);
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
            var r = Qs(this, "event:".concat(t));
            r.length === 0 &&
              this.callMethod("addEventListener", t).catch(function () {}),
              En(this, "event:".concat(t), i);
          }, "on"),
        },
        {
          key: "off",
          value: a(function (t, i) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (i && typeof i != "function")
              throw new TypeError("The callback must be a function.");
            var r = Js(this, "event:".concat(t), i);
            r &&
              this.callMethod("removeEventListener", t).catch(function (n) {});
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
              Po.get(this) ||
              new $t(function (i, r) {
                r(new Error("Unknown player. Probably unloaded."));
              });
            return $t.resolve(t);
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
            return yt.isEnabled
              ? yt.request(this.element)
              : this.callMethod("requestFullscreen");
          }, "requestFullscreen"),
        },
        {
          key: "exitFullscreen",
          value: a(function () {
            return yt.isEnabled ? yt.exit() : this.callMethod("exitFullscreen");
          }, "exitFullscreen"),
        },
        {
          key: "getFullscreen",
          value: a(function () {
            return yt.isEnabled
              ? $t.resolve(yt.isFullscreen)
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
            return new $t(function (i) {
              if (
                (Po.delete(t),
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
                yt.isEnabled &&
                  yt.off("fullscreenchange", t.fullscreenchangeHandler),
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
            return $t.all([
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
              return new $t(function (n, o) {
                return o(new TypeError("Argument must be an array."));
              });
            var i = new $t(function (n) {
                return n(null);
              }),
              r = [
                t[0] ? this.set("colorOne", t[0]) : i,
                t[1] ? this.set("colorTwo", t[1]) : i,
                t[2] ? this.set("colorThree", t[2]) : i,
                t[3] ? this.set("colorFour", t[3]) : i,
              ];
            return $t.all(r);
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
            var e = ur(
              ht().mark(
                a(function i(r, n) {
                  var o = this,
                    l;
                  return ht().wrap(
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
                              (l = new Ld(this, r, n)),
                              or(this, "notifyTimingObjectConnect"),
                              l.addEventListener("disconnect", function () {
                                return or(o, "notifyTimingObjectDisconnect");
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
      s
    );
  })();
tc || ((yt = Ad()), kd(), Cd(), Pd(), Md());
const Ol = class Ol {
  constructor() {
    typeof Fn < "u" &&
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
        n = t.getAttribute("data-vimeo-video-id"),
        l = this.shouldUseMobileVideo() && r ? r : n;
      if (l && i !== l) {
        const u = t.getAttribute("id"),
          c = this.players.get(u);
        if (c) {
          let f = t.getAttribute("data-vimeo-playing") === "true",
            d = 0,
            p = t.getAttribute("data-vimeo-muted") === "true";
          c.getCurrentTime()
            .then((h) => {
              (d = h),
                c.unload(),
                this.players.delete(u),
                this.switchVideo(t, l, {
                  wasPlaying: f,
                  currentTime: d,
                  isMuted: p,
                });
            })
            .catch(() => {
              c.unload(),
                this.players.delete(u),
                this.switchVideo(t, l, {
                  wasPlaying: f,
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
    const n = `https://player.vimeo.com/video/${t}?api=1&background=1&autoplay=0&loop=0&muted=1`;
    r.setAttribute("src", n),
      e.setAttribute("data-vimeo-active-video-id", t),
      setTimeout(() => {
        this.initSinglePlayer(e, i);
      }, 500);
  }
  initSinglePlayer(e, t = {}) {
    const i = e.querySelector("iframe");
    if (i)
      try {
        const r = new Fn(i),
          n = e.getAttribute("id");
        this.players.set(n, r),
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
          n = t.getAttribute("data-vimeo-video-id-mob"),
          o = t.getAttribute("data-vimeo-video-id"),
          l = r && n ? n : o;
        if (!l) return;
        const u = t.querySelector("iframe");
        if (!u) return;
        const c = `https://player.vimeo.com/video/${l}?api=1&background=1&autoplay=0&loop=0&muted=1`;
        u.setAttribute("src", c),
          t.setAttribute("data-vimeo-active-video-id", l);
        const f = "vimeo-player-index-" + i;
        t.setAttribute("id", f);
        const d = new Fn(u);
        this.players.set(f, d), this.setupPlayerControls(t, d);
      } catch {}
    });
  }
  setupPlayerControls(e, t) {
    const i = e.id;
    if (
      (e.getAttribute("data-vimeo-update-size") === "true" &&
        t.getVideoWidth().then(function (v) {
          t.getVideoHeight().then(function (S) {
            const k = e.querySelector(".vimeo-player__before");
            k && (k.style.paddingTop = (S / v) * 100 + "%");
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
        const S = e.getBoundingClientRect();
        S.top < window.innerHeight && S.bottom > 0 ? r() : n();
      }, "checkVisibility");
      v(), window.addEventListener("scroll", v);
    }
    const r = a(() => {
        e.setAttribute("data-vimeo-activated", "true"),
          e.setAttribute("data-vimeo-playing", "true"),
          t.play();
      }, "vimeoPlayerPlay"),
      n = a(() => {
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
        n(),
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
      f = e.querySelector('[data-vimeo-control="fullscreen"]');
    !c && f && (f.style.display = "none"),
      f &&
        f.addEventListener("click", () => {
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
    const d = a(() => {
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
      document.addEventListener(v, d);
    });
    function p(v) {
      let S = Math.floor(v / 3600);
      v -= S * 3600;
      let k = Math.floor(v / 60);
      return (v -= k * 60), k + ":" + (v < 10 ? "0" + v : v);
    }
    a(p, "secondsTimeSpanToHMS");
    const h = e.querySelector("[data-vimeo-duration]");
    t.getDuration().then(function (v) {
      h && (h.textContent = p(v)),
        e
          .querySelectorAll('[data-vimeo-control="timeline"], progress')
          .forEach((k) => {
            k.setAttribute("max", v);
          });
    });
    const g = e.querySelector('[data-vimeo-control="timeline"]'),
      m = e.querySelector("progress");
    function _() {
      t.getDuration().then(function () {
        const v = g.value;
        t.setCurrentTime(v), m && (m.value = v);
      });
    }
    a(_, "updateTimelineValue"),
      g &&
        ["input", "change"].forEach((v) => {
          g.addEventListener(v, _);
        }),
      t.on("timeupdate", function (v) {
        g && (g.value = v.seconds),
          m && (m.value = v.seconds),
          h && (h.textContent = p(Math.trunc(v.seconds)));
      });
    let b;
    e.addEventListener("mousemove", function () {
      e.getAttribute("data-vimeo-hover") === "false" &&
        e.setAttribute("data-vimeo-hover", "true"),
        clearTimeout(b),
        (b = setTimeout(w, 3e3));
    });
    function w() {
      e.setAttribute("data-vimeo-hover", "false");
    }
    a(w, "vimeoHoverTrue");
    function y() {
      e.setAttribute("data-vimeo-activated", "false"),
        e.setAttribute("data-vimeo-playing", "false"),
        t.unload();
    }
    a(y, "vimeoOnEnd"), t.on("ended", y);
  }
};
a(Ol, "VideoPlayer");
let aa = Ol;
const Dd = a(() => {
  new aa();
}, "initVideoPlayer");
function ql(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
a(ql, "isObject$1");
function Ga(s = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof s[t] > "u"
      ? (s[t] = e[t])
      : ql(e[t]) && ql(s[t]) && Object.keys(e[t]).length > 0 && Ga(s[t], e[t]);
  });
}
a(Ga, "extend$1");
const oc = {
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
  const s = typeof document < "u" ? document : {};
  return Ga(s, oc), s;
}
a(Ft, "getDocument");
const Id = {
  document: oc,
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
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function Xe() {
  const s = typeof window < "u" ? window : {};
  return Ga(s, Id), s;
}
a(Xe, "getWindow");
function zd(s) {
  const e = s.__proto__;
  Object.defineProperty(s, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    },
  });
}
a(zd, "makeReactive");
const Ll = class Ll extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), zd(this));
  }
};
a(Ll, "Dom7");
let fi = Ll;
function hs(s = []) {
  const e = [];
  return (
    s.forEach((t) => {
      Array.isArray(t) ? e.push(...hs(t)) : e.push(t);
    }),
    e
  );
}
a(hs, "arrayFlat");
function ac(s, e) {
  return Array.prototype.filter.call(s, e);
}
a(ac, "arrayFilter");
function Rd(s) {
  const e = [];
  for (let t = 0; t < s.length; t += 1) e.indexOf(s[t]) === -1 && e.push(s[t]);
  return e;
}
a(Rd, "arrayUnique");
function Nd(s, e) {
  if (typeof s != "string") return [s];
  const t = [],
    i = e.querySelectorAll(s);
  for (let r = 0; r < i.length; r += 1) t.push(i[r]);
  return t;
}
a(Nd, "qsa");
function W(s, e) {
  const t = Xe(),
    i = Ft();
  let r = [];
  if (!e && s instanceof fi) return s;
  if (!s) return new fi(r);
  if (typeof s == "string") {
    const n = s.trim();
    if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
      let o = "div";
      n.indexOf("<li") === 0 && (o = "ul"),
        n.indexOf("<tr") === 0 && (o = "tbody"),
        (n.indexOf("<td") === 0 || n.indexOf("<th") === 0) && (o = "tr"),
        n.indexOf("<tbody") === 0 && (o = "table"),
        n.indexOf("<option") === 0 && (o = "select");
      const l = i.createElement(o);
      l.innerHTML = n;
      for (let u = 0; u < l.childNodes.length; u += 1) r.push(l.childNodes[u]);
    } else r = Nd(s.trim(), e || i);
  } else if (s.nodeType || s === t || s === i) r.push(s);
  else if (Array.isArray(s)) {
    if (s instanceof fi) return s;
    r = s;
  }
  return new fi(Rd(r));
}
a(W, "$");
W.fn = fi.prototype;
function Fd(...s) {
  const e = hs(s.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
a(Fd, "addClass");
function Bd(...s) {
  const e = hs(s.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
a(Bd, "removeClass");
function Vd(...s) {
  const e = hs(s.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((i) => {
      t.classList.toggle(i);
    });
  });
}
a(Vd, "toggleClass");
function qd(...s) {
  const e = hs(s.map((t) => t.split(" ")));
  return (
    ac(this, (t) => e.filter((i) => t.classList.contains(i)).length > 0)
      .length > 0
  );
}
a(qd, "hasClass");
function $d(s, e) {
  if (arguments.length === 1 && typeof s == "string")
    return this[0] ? this[0].getAttribute(s) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(s, e);
    else for (const i in s) (this[t][i] = s[i]), this[t].setAttribute(i, s[i]);
  return this;
}
a($d, "attr");
function Wd(s) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(s);
  return this;
}
a(Wd, "removeAttr");
function Hd(s) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = s;
  return this;
}
a(Hd, "transform");
function Gd(s) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof s != "string" ? `${s}ms` : s;
  return this;
}
a(Gd, "transition$1");
function Yd(...s) {
  let [e, t, i, r] = s;
  typeof s[1] == "function" && (([e, i, r] = s), (t = void 0)), r || (r = !1);
  function n(c) {
    const f = c.target;
    if (!f) return;
    const d = c.target.dom7EventData || [];
    if ((d.indexOf(c) < 0 && d.unshift(c), W(f).is(t))) i.apply(f, d);
    else {
      const p = W(f).parents();
      for (let h = 0; h < p.length; h += 1) W(p[h]).is(t) && i.apply(p[h], d);
    }
  }
  a(n, "handleLiveEvent");
  function o(c) {
    const f = c && c.target ? c.target.dom7EventData || [] : [];
    f.indexOf(c) < 0 && f.unshift(c), i.apply(this, f);
  }
  a(o, "handleEvent");
  const l = e.split(" ");
  let u;
  for (let c = 0; c < this.length; c += 1) {
    const f = this[c];
    if (t)
      for (u = 0; u < l.length; u += 1) {
        const d = l[u];
        f.dom7LiveListeners || (f.dom7LiveListeners = {}),
          f.dom7LiveListeners[d] || (f.dom7LiveListeners[d] = []),
          f.dom7LiveListeners[d].push({ listener: i, proxyListener: n }),
          f.addEventListener(d, n, r);
      }
    else
      for (u = 0; u < l.length; u += 1) {
        const d = l[u];
        f.dom7Listeners || (f.dom7Listeners = {}),
          f.dom7Listeners[d] || (f.dom7Listeners[d] = []),
          f.dom7Listeners[d].push({ listener: i, proxyListener: o }),
          f.addEventListener(d, o, r);
      }
  }
  return this;
}
a(Yd, "on");
function Xd(...s) {
  let [e, t, i, r] = s;
  typeof s[1] == "function" && (([e, i, r] = s), (t = void 0)), r || (r = !1);
  const n = e.split(" ");
  for (let o = 0; o < n.length; o += 1) {
    const l = n[o];
    for (let u = 0; u < this.length; u += 1) {
      const c = this[u];
      let f;
      if (
        (!t && c.dom7Listeners
          ? (f = c.dom7Listeners[l])
          : t && c.dom7LiveListeners && (f = c.dom7LiveListeners[l]),
        f && f.length)
      )
        for (let d = f.length - 1; d >= 0; d -= 1) {
          const p = f[d];
          (i && p.listener === i) ||
          (i &&
            p.listener &&
            p.listener.dom7proxy &&
            p.listener.dom7proxy === i)
            ? (c.removeEventListener(l, p.proxyListener, r), f.splice(d, 1))
            : i ||
              (c.removeEventListener(l, p.proxyListener, r), f.splice(d, 1));
        }
    }
  }
  return this;
}
a(Xd, "off");
function jd(...s) {
  const e = Xe(),
    t = s[0].split(" "),
    i = s[1];
  for (let r = 0; r < t.length; r += 1) {
    const n = t[r];
    for (let o = 0; o < this.length; o += 1) {
      const l = this[o];
      if (e.CustomEvent) {
        const u = new e.CustomEvent(n, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (l.dom7EventData = s.filter((c, f) => f > 0)),
          l.dispatchEvent(u),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
a(jd, "trigger");
function Ud(s) {
  const e = this;
  function t(i) {
    i.target === this && (s.call(this, i), e.off("transitionend", t));
  }
  return a(t, "fireCallBack"), s && e.on("transitionend", t), this;
}
a(Ud, "transitionEnd$1");
function Kd(s) {
  if (this.length > 0) {
    if (s) {
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
a(Kd, "outerWidth");
function Zd(s) {
  if (this.length > 0) {
    if (s) {
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
a(Zd, "outerHeight");
function Qd() {
  if (this.length > 0) {
    const s = Xe(),
      e = Ft(),
      t = this[0],
      i = t.getBoundingClientRect(),
      r = e.body,
      n = t.clientTop || r.clientTop || 0,
      o = t.clientLeft || r.clientLeft || 0,
      l = t === s ? s.scrollY : t.scrollTop,
      u = t === s ? s.scrollX : t.scrollLeft;
    return { top: i.top + l - n, left: i.left + u - o };
  }
  return null;
}
a(Qd, "offset");
function Jd() {
  const s = Xe();
  return this[0] ? s.getComputedStyle(this[0], null) : {};
}
a(Jd, "styles");
function eh(s, e) {
  const t = Xe();
  let i;
  if (arguments.length === 1)
    if (typeof s == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(s);
    } else {
      for (i = 0; i < this.length; i += 1)
        for (const r in s) this[i].style[r] = s[r];
      return this;
    }
  if (arguments.length === 2 && typeof s == "string") {
    for (i = 0; i < this.length; i += 1) this[i].style[s] = e;
    return this;
  }
  return this;
}
a(eh, "css");
function th(s) {
  return s
    ? (this.forEach((e, t) => {
        s.apply(e, [e, t]);
      }),
      this)
    : this;
}
a(th, "each");
function ih(s) {
  const e = ac(this, s);
  return W(e);
}
a(ih, "filter");
function rh(s) {
  if (typeof s > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = s;
  return this;
}
a(rh, "html");
function nh(s) {
  if (typeof s > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = s;
  return this;
}
a(nh, "text");
function sh(s) {
  const e = Xe(),
    t = Ft(),
    i = this[0];
  let r, n;
  if (!i || typeof s > "u") return !1;
  if (typeof s == "string") {
    if (i.matches) return i.matches(s);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(s);
    if (i.msMatchesSelector) return i.msMatchesSelector(s);
    for (r = W(s), n = 0; n < r.length; n += 1) if (r[n] === i) return !0;
    return !1;
  }
  if (s === t) return i === t;
  if (s === e) return i === e;
  if (s.nodeType || s instanceof fi) {
    for (r = s.nodeType ? [s] : s, n = 0; n < r.length; n += 1)
      if (r[n] === i) return !0;
    return !1;
  }
  return !1;
}
a(sh, "is");
function oh() {
  let s = this[0],
    e;
  if (s) {
    for (e = 0; (s = s.previousSibling) !== null; )
      s.nodeType === 1 && (e += 1);
    return e;
  }
}
a(oh, "index");
function ah(s) {
  if (typeof s > "u") return this;
  const e = this.length;
  if (s > e - 1) return W([]);
  if (s < 0) {
    const t = e + s;
    return t < 0 ? W([]) : W([this[t]]);
  }
  return W([this[s]]);
}
a(ah, "eq");
function lh(...s) {
  let e;
  const t = Ft();
  for (let i = 0; i < s.length; i += 1) {
    e = s[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const n = t.createElement("div");
        for (n.innerHTML = e; n.firstChild; ) this[r].appendChild(n.firstChild);
      } else if (e instanceof fi)
        for (let n = 0; n < e.length; n += 1) this[r].appendChild(e[n]);
      else this[r].appendChild(e);
  }
  return this;
}
a(lh, "append");
function uh(s) {
  const e = Ft();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof s == "string") {
      const r = e.createElement("div");
      for (r.innerHTML = s, i = r.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
    } else if (s instanceof fi)
      for (i = 0; i < s.length; i += 1)
        this[t].insertBefore(s[i], this[t].childNodes[0]);
    else this[t].insertBefore(s, this[t].childNodes[0]);
  return this;
}
a(uh, "prepend");
function ch(s) {
  return this.length > 0
    ? s
      ? this[0].nextElementSibling && W(this[0].nextElementSibling).is(s)
        ? W([this[0].nextElementSibling])
        : W([])
      : this[0].nextElementSibling
      ? W([this[0].nextElementSibling])
      : W([])
    : W([]);
}
a(ch, "next");
function fh(s) {
  const e = [];
  let t = this[0];
  if (!t) return W([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    s ? W(i).is(s) && e.push(i) : e.push(i), (t = i);
  }
  return W(e);
}
a(fh, "nextAll");
function dh(s) {
  if (this.length > 0) {
    const e = this[0];
    return s
      ? e.previousElementSibling && W(e.previousElementSibling).is(s)
        ? W([e.previousElementSibling])
        : W([])
      : e.previousElementSibling
      ? W([e.previousElementSibling])
      : W([]);
  }
  return W([]);
}
a(dh, "prev");
function hh(s) {
  const e = [];
  let t = this[0];
  if (!t) return W([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    s ? W(i).is(s) && e.push(i) : e.push(i), (t = i);
  }
  return W(e);
}
a(hh, "prevAll");
function ph(s) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (s
        ? W(this[t].parentNode).is(s) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return W(e);
}
a(ph, "parent");
function gh(s) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) s ? W(i).is(s) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return W(e);
}
a(gh, "parents");
function mh(s) {
  let e = this;
  return typeof s > "u" ? W([]) : (e.is(s) || (e = e.parents(s).eq(0)), e);
}
a(mh, "closest");
function vh(s) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(s);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return W(e);
}
a(vh, "find");
function _h(s) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let r = 0; r < i.length; r += 1) (!s || W(i[r]).is(s)) && e.push(i[r]);
  }
  return W(e);
}
a(_h, "children");
function yh() {
  for (let s = 0; s < this.length; s += 1)
    this[s].parentNode && this[s].parentNode.removeChild(this[s]);
  return this;
}
a(yh, "remove");
const $l = {
  addClass: Fd,
  removeClass: Bd,
  hasClass: qd,
  toggleClass: Vd,
  attr: $d,
  removeAttr: Wd,
  transform: Hd,
  transition: Gd,
  on: Yd,
  off: Xd,
  trigger: jd,
  transitionEnd: Ud,
  outerWidth: Kd,
  outerHeight: Zd,
  styles: Jd,
  offset: Qd,
  css: eh,
  each: th,
  html: rh,
  text: nh,
  is: sh,
  index: oh,
  eq: ah,
  append: lh,
  prepend: uh,
  next: ch,
  nextAll: fh,
  prev: dh,
  prevAll: hh,
  parent: ph,
  parents: gh,
  closest: mh,
  find: vh,
  children: _h,
  filter: ih,
  remove: yh,
};
Object.keys($l).forEach((s) => {
  Object.defineProperty(W.fn, s, { value: $l[s], writable: !0 });
});
function wh(s) {
  const e = s;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
a(wh, "deleteProps");
function la(s, e = 0) {
  return setTimeout(s, e);
}
a(la, "nextTick");
function is() {
  return Date.now();
}
a(is, "now");
function bh(s) {
  const e = Xe();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
  );
}
a(bh, "getComputedStyle$1");
function Sh(s, e = "x") {
  const t = Xe();
  let i, r, n;
  const o = bh(s);
  return (
    t.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (n = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((n =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = n.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = n.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = n.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
a(Sh, "getTranslate");
function _s(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
a(_s, "isObject");
function xh(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
a(xh, "isNode");
function Mt(...s) {
  const e = Object(s[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < s.length; i += 1) {
    const r = s[i];
    if (r != null && !xh(r)) {
      const n = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, l = n.length; o < l; o += 1) {
        const u = n[o],
          c = Object.getOwnPropertyDescriptor(r, u);
        c !== void 0 &&
          c.enumerable &&
          (_s(e[u]) && _s(r[u])
            ? r[u].__swiper__
              ? (e[u] = r[u])
              : Mt(e[u], r[u])
            : !_s(e[u]) && _s(r[u])
            ? ((e[u] = {}), r[u].__swiper__ ? (e[u] = r[u]) : Mt(e[u], r[u]))
            : (e[u] = r[u]));
      }
    }
  }
  return e;
}
a(Mt, "extend");
function ys(s, e, t) {
  s.style.setProperty(e, t);
}
a(ys, "setCSSProperty");
function lc({ swiper: s, targetPosition: e, side: t }) {
  const i = Xe(),
    r = -s.translate;
  let n = null,
    o;
  const l = s.params.speed;
  (s.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(s.cssModeFrameID);
  const u = e > r ? "next" : "prev",
    c = a(
      (d, p) => (u === "next" && d >= p) || (u === "prev" && d <= p),
      "isOutOfBound"
    ),
    f = a(() => {
      (o = new Date().getTime()), n === null && (n = o);
      const d = Math.max(Math.min((o - n) / l, 1), 0),
        p = 0.5 - Math.cos(d * Math.PI) / 2;
      let h = r + p * (e - r);
      if ((c(h, e) && (h = e), s.wrapperEl.scrollTo({ [t]: h }), c(h, e))) {
        (s.wrapperEl.style.overflow = "hidden"),
          (s.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (s.wrapperEl.style.overflow = ""), s.wrapperEl.scrollTo({ [t]: h });
          }),
          i.cancelAnimationFrame(s.cssModeFrameID);
        return;
      }
      s.cssModeFrameID = i.requestAnimationFrame(f);
    }, "animate");
  f();
}
a(lc, "animateCSSModeScroll");
let Mo;
function Th() {
  const s = Xe(),
    e = Ft();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && e instanceof s.DocumentTouch)
    ),
    passiveListener: a(function () {
      let i = !1;
      try {
        const r = Object.defineProperty({}, "passive", {
          get() {
            i = !0;
          },
        });
        s.addEventListener("testPassiveListener", null, r);
      } catch {}
      return i;
    }, "checkPassiveListener")(),
    gestures: a(function () {
      return "ongesturestart" in s;
    }, "checkGestures")(),
  };
}
a(Th, "calcSupport");
function uc() {
  return Mo || (Mo = Th()), Mo;
}
a(uc, "getSupport");
let Ao;
function Eh({ userAgent: s } = {}) {
  const e = uc(),
    t = Xe(),
    i = t.navigator.platform,
    r = s || t.navigator.userAgent,
    n = { ios: !1, android: !1 },
    o = t.screen.width,
    l = t.screen.height,
    u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
  let h = i === "MacIntel";
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
    !c &&
      h &&
      e.touch &&
      g.indexOf(`${o}x${l}`) >= 0 &&
      ((c = r.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (h = !1)),
    u && !p && ((n.os = "android"), (n.android = !0)),
    (c || d || f) && ((n.os = "ios"), (n.ios = !0)),
    n
  );
}
a(Eh, "calcDevice");
function kh(s = {}) {
  return Ao || (Ao = Eh(s)), Ao;
}
a(kh, "getDevice");
let Oo;
function Ch() {
  const s = Xe();
  function e() {
    const t = s.navigator.userAgent.toLowerCase();
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
        s.navigator.userAgent
      ),
    }
  );
}
a(Ch, "calcBrowser");
function Ph() {
  return Oo || (Oo = Ch()), Oo;
}
a(Ph, "getBrowser");
function Mh({ swiper: s, on: e, emit: t }) {
  const i = Xe();
  let r = null,
    n = null;
  const o = a(() => {
      !s || s.destroyed || !s.initialized || (t("beforeResize"), t("resize"));
    }, "resizeHandler"),
    l = a(() => {
      !s ||
        s.destroyed ||
        !s.initialized ||
        ((r = new ResizeObserver((f) => {
          n = i.requestAnimationFrame(() => {
            const { width: d, height: p } = s;
            let h = d,
              g = p;
            f.forEach(({ contentBoxSize: m, contentRect: _, target: b }) => {
              (b && b !== s.el) ||
                ((h = _ ? _.width : (m[0] || m).inlineSize),
                (g = _ ? _.height : (m[0] || m).blockSize));
            }),
              (h !== d || g !== p) && o();
          });
        })),
        r.observe(s.el));
    }, "createObserver"),
    u = a(() => {
      n && i.cancelAnimationFrame(n),
        r && r.unobserve && s.el && (r.unobserve(s.el), (r = null));
    }, "removeObserver"),
    c = a(() => {
      !s || s.destroyed || !s.initialized || t("orientationchange");
    }, "orientationChangeHandler");
  e("init", () => {
    if (s.params.resizeObserver && typeof i.ResizeObserver < "u") {
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
a(Mh, "Resize");
function Ah({ swiper: s, extendParams: e, on: t, emit: i }) {
  const r = [],
    n = Xe(),
    o = a((c, f = {}) => {
      const d = n.MutationObserver || n.WebkitMutationObserver,
        p = new d((h) => {
          if (h.length === 1) {
            i("observerUpdate", h[0]);
            return;
          }
          const g = a(function () {
            i("observerUpdate", h[0]);
          }, "observerUpdate");
          n.requestAnimationFrame
            ? n.requestAnimationFrame(g)
            : n.setTimeout(g, 0);
        });
      p.observe(c, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData,
      }),
        r.push(p);
    }, "attach"),
    l = a(() => {
      if (s.params.observer) {
        if (s.params.observeParents) {
          const c = s.$el.parents();
          for (let f = 0; f < c.length; f += 1) o(c[f]);
        }
        o(s.$el[0], { childList: s.params.observeSlideChildren }),
          o(s.$wrapperEl[0], { attributes: !1 });
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
a(Ah, "Observer$1");
const Oh = {
  on(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return (
      s.split(" ").forEach((n) => {
        i.eventsListeners[n] || (i.eventsListeners[n] = []),
          i.eventsListeners[n][r](e);
      }),
      i
    );
  },
  once(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r(...n) {
      i.off(s, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, n);
    }
    return a(r, "onceHandler"), (r.__emitterProxy = e), i.on(s, r, t);
  },
  onAny(s, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(s, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        s.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((r, n) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(n, 1);
              });
        }),
      t
    );
  },
  emit(...s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, i, r;
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (i = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (i = s[0].data), (r = s[0].context || e)),
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
function Lh() {
  const s = this;
  let e, t;
  const i = s.$el;
  typeof s.params.width < "u" && s.params.width !== null
    ? (e = s.params.width)
    : (e = i[0].clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (t = s.params.height)
      : (t = i[0].clientHeight),
    !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
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
      Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t,
      }));
}
a(Lh, "updateSize");
function Dh() {
  const s = this;
  function e(P) {
    return s.isHorizontal()
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
  a(e, "getDirectionLabel");
  function t(P, z) {
    return parseFloat(P.getPropertyValue(e(z)) || 0);
  }
  a(t, "getDirectionPropertyValue");
  const i = s.params,
    { $wrapperEl: r, size: n, rtlTranslate: o, wrongRTL: l } = s,
    u = s.virtual && i.virtual.enabled,
    c = u ? s.virtual.slides.length : s.slides.length,
    f = r.children(`.${s.params.slideClass}`),
    d = u ? s.virtual.slides.length : f.length;
  let p = [];
  const h = [],
    g = [];
  let m = i.slidesOffsetBefore;
  typeof m == "function" && (m = i.slidesOffsetBefore.call(s));
  let _ = i.slidesOffsetAfter;
  typeof _ == "function" && (_ = i.slidesOffsetAfter.call(s));
  const b = s.snapGrid.length,
    w = s.slidesGrid.length;
  let y = i.spaceBetween,
    v = -m,
    S = 0,
    k = 0;
  if (typeof n > "u") return;
  typeof y == "string" &&
    y.indexOf("%") >= 0 &&
    (y = (parseFloat(y.replace("%", "")) / 100) * n),
    (s.virtualSize = -y),
    o
      ? f.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : f.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (ys(s.wrapperEl, "--swiper-centered-offset-before", ""),
      ys(s.wrapperEl, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && s.grid;
  C && s.grid.initSlides(d);
  let T;
  const A =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (P) => typeof i.breakpoints[P].slidesPerView < "u"
    ).length > 0;
  for (let P = 0; P < d; P += 1) {
    T = 0;
    const z = f.eq(P);
    if ((C && s.grid.updateSlide(P, z, d, e), z.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        A && (f[P].style[e("width")] = "");
        const x = getComputedStyle(z[0]),
          M = z[0].style.transform,
          O = z[0].style.webkitTransform;
        if (
          (M && (z[0].style.transform = "none"),
          O && (z[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          T = s.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0);
        else {
          const D = t(x, "width"),
            R = t(x, "padding-left"),
            N = t(x, "padding-right"),
            B = t(x, "margin-left"),
            q = t(x, "margin-right"),
            E = x.getPropertyValue("box-sizing");
          if (E && E === "border-box") T = D + B + q;
          else {
            const { clientWidth: j, offsetWidth: K } = z[0];
            T = D + R + N + B + q + (K - j);
          }
        }
        M && (z[0].style.transform = M),
          O && (z[0].style.webkitTransform = O),
          i.roundLengths && (T = Math.floor(T));
      } else
        (T = (n - (i.slidesPerView - 1) * y) / i.slidesPerView),
          i.roundLengths && (T = Math.floor(T)),
          f[P] && (f[P].style[e("width")] = `${T}px`);
      f[P] && (f[P].swiperSlideSize = T),
        g.push(T),
        i.centeredSlides
          ? ((v = v + T / 2 + S / 2 + y),
            S === 0 && P !== 0 && (v = v - n / 2 - y),
            P === 0 && (v = v - n / 2 - y),
            Math.abs(v) < 1 / 1e3 && (v = 0),
            i.roundLengths && (v = Math.floor(v)),
            k % i.slidesPerGroup === 0 && p.push(v),
            h.push(v))
          : (i.roundLengths && (v = Math.floor(v)),
            (k - Math.min(s.params.slidesPerGroupSkip, k)) %
              s.params.slidesPerGroup ===
              0 && p.push(v),
            h.push(v),
            (v = v + T + y)),
        (s.virtualSize += T + y),
        (S = T),
        (k += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, n) + _),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      r.css({ width: `${s.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      r.css({ [e("width")]: `${s.virtualSize + i.spaceBetween}px` }),
    C && s.grid.updateWrapperSize(T, p, e),
    !i.centeredSlides)
  ) {
    const P = [];
    for (let z = 0; z < p.length; z += 1) {
      let x = p[z];
      i.roundLengths && (x = Math.floor(x)),
        p[z] <= s.virtualSize - n && P.push(x);
    }
    (p = P),
      Math.floor(s.virtualSize - n) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(s.virtualSize - n);
  }
  if ((p.length === 0 && (p = [0]), i.spaceBetween !== 0)) {
    const P = s.isHorizontal() && o ? "marginLeft" : e("marginRight");
    f.filter((z, x) => (i.cssMode ? x !== f.length - 1 : !0)).css({
      [P]: `${y}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let P = 0;
    g.forEach((x) => {
      P += x + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (P -= i.spaceBetween);
    const z = P - n;
    p = p.map((x) => (x < 0 ? -m : x > z ? z + _ : x));
  }
  if (i.centerInsufficientSlides) {
    let P = 0;
    if (
      (g.forEach((z) => {
        P += z + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (P -= i.spaceBetween),
      P < n)
    ) {
      const z = (n - P) / 2;
      p.forEach((x, M) => {
        p[M] = x - z;
      }),
        h.forEach((x, M) => {
          h[M] = x + z;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: f,
      snapGrid: p,
      slidesGrid: h,
      slidesSizesGrid: g,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    ys(s.wrapperEl, "--swiper-centered-offset-before", `${-p[0]}px`),
      ys(
        s.wrapperEl,
        "--swiper-centered-offset-after",
        `${s.size / 2 - g[g.length - 1] / 2}px`
      );
    const P = -s.snapGrid[0],
      z = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((x) => x + P)),
      (s.slidesGrid = s.slidesGrid.map((x) => x + z));
  }
  if (
    (d !== c && s.emit("slidesLengthChange"),
    p.length !== b &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    h.length !== w && s.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && s.updateSlidesOffset(),
    !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const P = `${i.containerModifierClass}backface-hidden`,
      z = s.$el.hasClass(P);
    d <= i.maxBackfaceHiddenSlides
      ? z || s.$el.addClass(P)
      : z && s.$el.removeClass(P);
  }
}
a(Dh, "updateSlides");
function Ih(s) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    n;
  typeof s == "number"
    ? e.setTransition(s)
    : s === !0 && e.setTransition(e.params.speed);
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
      (e.visibleSlides || W([])).each((l) => {
        t.push(l);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n;
        if (l > e.slides.length && !i) break;
        t.push(o(l));
      }
  else t.push(o(e.activeIndex));
  for (n = 0; n < t.length; n += 1)
    if (typeof t[n] < "u") {
      const l = t[n].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
}
a(Ih, "updateAutoHeight");
function zh() {
  const s = this,
    e = s.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = s.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
a(zh, "updateSlidesOffset");
function Rh(s = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: r, snapGrid: n } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -s;
  r && (o = s),
    i.removeClass(t.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let l = 0; l < i.length; l += 1) {
    const u = i[l];
    let c = u.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
    const f =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + t.spaceBetween),
      d =
        (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
        (u.swiperSlideSize + t.spaceBetween),
      p = -(o - c),
      h = p + e.slidesSizesGrid[l];
    ((p >= 0 && p < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (p <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(u),
      e.visibleSlidesIndexes.push(l),
      i.eq(l).addClass(t.slideVisibleClass)),
      (u.progress = r ? -f : f),
      (u.originalProgress = r ? -d : d);
  }
  e.visibleSlides = W(e.visibleSlides);
}
a(Rh, "updateSlidesProgress");
function Nh(s) {
  const e = this;
  if (typeof s > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    s = (e && e.translate && e.translate * c) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: n, isEnd: o } = e;
  const l = n,
    u = o;
  i === 0
    ? ((r = 0), (n = !0), (o = !0))
    : ((r = (s - e.minTranslate()) / i), (n = r <= 0), (o = r >= 1)),
    Object.assign(e, { progress: r, isBeginning: n, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(s),
    n && !l && e.emit("reachBeginning toEdge"),
    o && !u && e.emit("reachEnd toEdge"),
    ((l && !n) || (u && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
a(Nh, "updateProgress");
function Fh() {
  const s = this,
    { slides: e, params: t, $wrapperEl: i, activeIndex: r, realIndex: n } = s,
    o = s.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let l;
  o
    ? (l = s.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${r}"]`
      ))
    : (l = e.eq(r)),
    l.addClass(t.slideActiveClass),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : i
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
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
    s.emitSlidesClasses();
}
a(Fh, "updateSlidesClasses");
function Bh(s) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: i,
      snapGrid: r,
      params: n,
      activeIndex: o,
      realIndex: l,
      snapIndex: u,
    } = e;
  let c = s,
    f;
  if (typeof c > "u") {
    for (let p = 0; p < i.length; p += 1)
      typeof i[p + 1] < "u"
        ? t >= i[p] && t < i[p + 1] - (i[p + 1] - i[p]) / 2
          ? (c = p)
          : t >= i[p] && t < i[p + 1] && (c = p + 1)
        : t >= i[p] && (c = p);
    n.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (r.indexOf(t) >= 0) f = r.indexOf(t);
  else {
    const p = Math.min(n.slidesPerGroupSkip, c);
    f = p + Math.floor((c - p) / n.slidesPerGroup);
  }
  if ((f >= r.length && (f = r.length - 1), c === o)) {
    f !== u && ((e.snapIndex = f), e.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(e.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(e, {
    snapIndex: f,
    realIndex: d,
    previousIndex: o,
    activeIndex: c,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    l !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
a(Bh, "updateActiveIndex");
function Vh(s) {
  const e = this,
    t = e.params,
    i = W(s).closest(`.${t.slideClass}`)[0];
  let r = !1,
    n;
  if (i) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === i) {
        (r = !0), (n = o);
        break;
      }
  }
  if (i && r)
    (e.clickedSlide = i),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(W(i).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = n);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
a(Vh, "updateClickedSlide");
const qh = {
  updateSize: Lh,
  updateSlides: Dh,
  updateAutoHeight: Ih,
  updateSlidesOffset: zh,
  updateSlidesProgress: Rh,
  updateProgress: Nh,
  updateSlidesClasses: Fh,
  updateActiveIndex: Bh,
  updateClickedSlide: Vh,
};
function $h(s = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, $wrapperEl: n } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let o = Sh(n[0], s);
  return i && (o = -o), o || 0;
}
a($h, "getSwiperTranslate");
function Wh(s, e) {
  const t = this,
    {
      rtlTranslate: i,
      params: r,
      $wrapperEl: n,
      wrapperEl: o,
      progress: l,
    } = t;
  let u = 0,
    c = 0;
  const f = 0;
  t.isHorizontal() ? (u = i ? -s : s) : (c = s),
    r.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
    r.cssMode
      ? (o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -u
          : -c)
      : r.virtualTranslate ||
        n.transform(`translate3d(${u}px, ${c}px, ${f}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? u : c);
  let d;
  const p = t.maxTranslate() - t.minTranslate();
  p === 0 ? (d = 0) : (d = (s - t.minTranslate()) / p),
    d !== l && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e);
}
a(Wh, "setTranslate");
function Hh() {
  return -this.snapGrid[0];
}
a(Hh, "minTranslate");
function Gh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
a(Gh, "maxTranslate");
function Yh(s = 0, e = this.params.speed, t = !0, i = !0, r) {
  const n = this,
    { params: o, wrapperEl: l } = n;
  if (n.animating && o.preventInteractionOnTransition) return !1;
  const u = n.minTranslate(),
    c = n.maxTranslate();
  let f;
  if (
    (i && s > u ? (f = u) : i && s < c ? (f = c) : (f = s),
    n.updateProgress(f),
    o.cssMode)
  ) {
    const d = n.isHorizontal();
    if (e === 0) l[d ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!n.support.smoothScroll)
        return (
          lc({ swiper: n, targetPosition: -f, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (n.setTransition(0),
        n.setTranslate(f),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
      : (n.setTransition(e),
        n.setTranslate(f),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = a(function (p) {
              !n ||
                n.destroyed ||
                (p.target === this &&
                  (n.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  n.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  t && n.emit("transitionEnd")));
            }, "transitionEnd")),
          n.$wrapperEl[0].addEventListener(
            "transitionend",
            n.onTranslateToWrapperTransitionEnd
          ),
          n.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            n.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
a(Yh, "translateTo");
const Xh = {
  getTranslate: $h,
  setTranslate: Wh,
  minTranslate: Hh,
  maxTranslate: Gh,
  translateTo: Yh,
};
function jh(s, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(s), t.emit("setTransition", s, e);
}
a(jh, "setTransition");
function cc({ swiper: s, runCallbacks: e, direction: t, step: i }) {
  const { activeIndex: r, previousIndex: n } = s;
  let o = t;
  if (
    (o || (r > n ? (o = "next") : r < n ? (o = "prev") : (o = "reset")),
    s.emit(`transition${i}`),
    e && r !== n)
  ) {
    if (o === "reset") {
      s.emit(`slideResetTransition${i}`);
      return;
    }
    s.emit(`slideChangeTransition${i}`),
      o === "next"
        ? s.emit(`slideNextTransition${i}`)
        : s.emit(`slidePrevTransition${i}`);
  }
}
a(cc, "transitionEmit");
function Uh(s = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    cc({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
}
a(Uh, "transitionStart");
function Kh(s = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      cc({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
}
a(Kh, "transitionEnd");
const Zh = { setTransition: jh, transitionStart: Uh, transitionEnd: Kh };
function Qh(s = 0, e = this.params.speed, t = !0, i, r) {
  if (typeof s != "number" && typeof s != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof s}] given.`
    );
  if (typeof s == "string") {
    const y = parseInt(s, 10);
    if (!isFinite(y))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${s}] given.`
      );
    s = y;
  }
  const n = this;
  let o = s;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: u,
    slidesGrid: c,
    previousIndex: f,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: h,
    enabled: g,
  } = n;
  if ((n.animating && l.preventInteractionOnTransition) || (!g && !i && !r))
    return !1;
  const m = Math.min(n.params.slidesPerGroupSkip, o);
  let _ = m + Math.floor((o - m) / n.params.slidesPerGroup);
  _ >= u.length && (_ = u.length - 1);
  const b = -u[_];
  if (l.normalizeSlideIndex)
    for (let y = 0; y < c.length; y += 1) {
      const v = -Math.floor(b * 100),
        S = Math.floor(c[y] * 100),
        k = Math.floor(c[y + 1] * 100);
      typeof c[y + 1] < "u"
        ? v >= S && v < k - (k - S) / 2
          ? (o = y)
          : v >= S && v < k && (o = y + 1)
        : v >= S && (o = y);
    }
  if (
    n.initialized &&
    o !== d &&
    ((!n.allowSlideNext && b < n.translate && b < n.minTranslate()) ||
      (!n.allowSlidePrev &&
        b > n.translate &&
        b > n.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (f || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(b);
  let w;
  if (
    (o > d ? (w = "next") : o < d ? (w = "prev") : (w = "reset"),
    (p && -b === n.translate) || (!p && b === n.translate))
  )
    return (
      n.updateActiveIndex(o),
      l.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      l.effect !== "slide" && n.setTranslate(b),
      w !== "reset" && (n.transitionStart(t, w), n.transitionEnd(t, w)),
      !1
    );
  if (l.cssMode) {
    const y = n.isHorizontal(),
      v = p ? b : -b;
    if (e === 0) {
      const S = n.virtual && n.params.virtual.enabled;
      S &&
        ((n.wrapperEl.style.scrollSnapType = "none"),
        (n._immediateVirtual = !0)),
        (h[y ? "scrollLeft" : "scrollTop"] = v),
        S &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ""),
              (n._swiperImmediateVirtual = !1);
          });
    } else {
      if (!n.support.smoothScroll)
        return (
          lc({ swiper: n, targetPosition: v, side: y ? "left" : "top" }), !0
        );
      h.scrollTo({ [y ? "left" : "top"]: v, behavior: "smooth" });
    }
    return !0;
  }
  return (
    n.setTransition(e),
    n.setTranslate(b),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, w),
    e === 0
      ? n.transitionEnd(t, w)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = a(function (v) {
            !n ||
              n.destroyed ||
              (v.target === this &&
                (n.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                n.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  n.onSlideToWrapperTransitionEnd
                ),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(t, w)));
          }, "transitionEnd")),
        n.$wrapperEl[0].addEventListener(
          "transitionend",
          n.onSlideToWrapperTransitionEnd
        ),
        n.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          n.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
a(Qh, "slideTo");
function Jh(s = 0, e = this.params.speed, t = !0, i) {
  if (typeof s == "string") {
    const o = parseInt(s, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${s}] given.`
      );
    s = o;
  }
  const r = this;
  let n = s;
  return r.params.loop && (n += r.loopedSlides), r.slideTo(n, e, t, i);
}
a(Jh, "slideToLoop");
function ep(s = this.params.speed, e = !0, t) {
  const i = this,
    { animating: r, enabled: n, params: o } = i;
  if (!n) return i;
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
    ? i.slideTo(0, s, e, t)
    : i.slideTo(i.activeIndex + u, s, e, t);
}
a(ep, "slideNext");
function tp(s = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      animating: n,
      snapGrid: o,
      slidesGrid: l,
      rtlTranslate: u,
      enabled: c,
    } = i;
  if (!c) return i;
  if (r.loop) {
    if (n && r.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const f = u ? i.translate : -i.translate;
  function d(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  a(d, "normalize");
  const p = d(f),
    h = o.map((_) => d(_));
  let g = o[h.indexOf(p) - 1];
  if (typeof g > "u" && r.cssMode) {
    let _;
    o.forEach((b, w) => {
      p >= b && (_ = w);
    }),
      typeof _ < "u" && (g = o[_ > 0 ? _ - 1 : _]);
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
    const _ =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(_, s, e, t);
  }
  return i.slideTo(m, s, e, t);
}
a(tp, "slidePrev");
function ip(s = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, s, e, t);
}
a(ip, "slideReset");
function rp(s = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let n = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, n),
    l = o + Math.floor((n - o) / r.params.slidesPerGroup),
    u = r.rtlTranslate ? r.translate : -r.translate;
  if (u >= r.snapGrid[l]) {
    const c = r.snapGrid[l],
      f = r.snapGrid[l + 1];
    u - c > (f - c) * i && (n += r.params.slidesPerGroup);
  } else {
    const c = r.snapGrid[l - 1],
      f = r.snapGrid[l];
    u - c <= (f - c) * i && (n -= r.params.slidesPerGroup);
  }
  return (
    (n = Math.max(n, 0)),
    (n = Math.min(n, r.slidesGrid.length - 1)),
    r.slideTo(n, s, e, t)
  );
}
a(rp, "slideToClosest");
function np() {
  const s = this,
    { params: e, $wrapperEl: t } = s,
    i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let r = s.clickedIndex,
    n;
  if (e.loop) {
    if (s.animating) return;
    (n = parseInt(W(s.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < s.loopedSlides - i / 2 ||
          r > s.slides.length - s.loopedSlides + i / 2
          ? (s.loopFix(),
            (r = t
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            la(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r)
        : r > s.slides.length - i
        ? (s.loopFix(),
          (r = t
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          la(() => {
            s.slideTo(r);
          }))
        : s.slideTo(r);
  } else s.slideTo(r);
}
a(np, "slideToClickedSlide");
const sp = {
  slideTo: Qh,
  slideToLoop: Jh,
  slideNext: ep,
  slidePrev: tp,
  slideReset: ip,
  slideToClosest: rp,
  slideToClickedSlide: np,
};
function op() {
  const s = this,
    e = Ft(),
    { params: t, $wrapperEl: i } = s,
    r = i.children().length > 0 ? W(i.children()[0].parentNode) : i;
  r.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let n = r.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const u = t.slidesPerGroup - (n.length % t.slidesPerGroup);
    if (u !== t.slidesPerGroup) {
      for (let c = 0; c < u; c += 1) {
        const f = W(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        r.append(f);
      }
      n = r.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = n.length),
    (s.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (s.loopedSlides += t.loopAdditionalSlides),
    s.loopedSlides > n.length &&
      s.params.loopedSlidesLimit &&
      (s.loopedSlides = n.length);
  const o = [],
    l = [];
  n.each((u, c) => {
    W(u).attr("data-swiper-slide-index", c);
  });
  for (let u = 0; u < s.loopedSlides; u += 1) {
    const c = u - Math.floor(u / n.length) * n.length;
    l.push(n.eq(c)[0]), o.unshift(n.eq(n.length - c - 1)[0]);
  }
  for (let u = 0; u < l.length; u += 1)
    r.append(W(l[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let u = o.length - 1; u >= 0; u -= 1)
    r.prepend(W(o[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
a(op, "loopCreate");
function ap() {
  const s = this;
  s.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: i,
    allowSlidePrev: r,
    allowSlideNext: n,
    snapGrid: o,
    rtlTranslate: l,
  } = s;
  let u;
  (s.allowSlidePrev = !0), (s.allowSlideNext = !0);
  const f = -o[e] - s.getTranslate();
  e < i
    ? ((u = t.length - i * 3 + e),
      (u += i),
      s.slideTo(u, 0, !1, !0) &&
        f !== 0 &&
        s.setTranslate((l ? -s.translate : s.translate) - f))
    : e >= t.length - i &&
      ((u = -t.length + e + i),
      (u += i),
      s.slideTo(u, 0, !1, !0) &&
        f !== 0 &&
        s.setTranslate((l ? -s.translate : s.translate) - f)),
    (s.allowSlidePrev = r),
    (s.allowSlideNext = n),
    s.emit("loopFix");
}
a(ap, "loopFix");
function lp() {
  const s = this,
    { $wrapperEl: e, params: t, slides: i } = s;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
a(lp, "loopDestroy");
const up = { loopCreate: op, loopFix: ap, loopDestroy: lp };
function cp(s) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (t.style.cursor = "move"), (t.style.cursor = s ? "grabbing" : "grab");
}
a(cp, "setGrabCursor");
function fp() {
  const s = this;
  s.support.touch ||
    (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
a(fp, "unsetGrabCursor");
const dp = { setGrabCursor: cp, unsetGrabCursor: fp };
function hp(s, e = this) {
  function t(i) {
    if (!i || i === Ft() || i === Xe()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(s);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return a(t, "__closestFrom"), t(e);
}
a(hp, "closestElement");
function pp(s) {
  const e = this,
    t = Ft(),
    i = Xe(),
    r = e.touchEventsData,
    { params: n, touches: o, enabled: l } = e;
  if (!l || (e.animating && n.preventInteractionOnTransition)) return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let u = s;
  u.originalEvent && (u = u.originalEvent);
  let c = W(u.target);
  if (
    (n.touchEventsTarget === "wrapper" && !c.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = u.type === "touchstart"),
    !r.isTouchEvent && "which" in u && u.which === 3) ||
    (!r.isTouchEvent && "button" in u && u.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const f = !!n.noSwipingClass && n.noSwipingClass !== "",
    d = s.composedPath ? s.composedPath() : s.path;
  f && u.target && u.target.shadowRoot && d && (c = W(d[0]));
  const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    h = !!(u.target && u.target.shadowRoot);
  if (n.noSwiping && (h ? hp(p, c[0]) : c.closest(p)[0])) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !c.closest(n.swipeHandler)[0]) return;
  (o.currentX = u.type === "touchstart" ? u.targetTouches[0].pageX : u.pageX),
    (o.currentY = u.type === "touchstart" ? u.targetTouches[0].pageY : u.pageY);
  const g = o.currentX,
    m = o.currentY,
    _ = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
    b = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
  if (_ && (g <= b || g >= i.innerWidth - b))
    if (_ === "prevent") s.preventDefault();
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
    (r.touchStartTime = is()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1),
    u.type !== "touchstart")
  ) {
    let w = !0;
    c.is(r.focusableElements) &&
      ((w = !1), c[0].nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        W(t.activeElement).is(r.focusableElements) &&
        t.activeElement !== c[0] &&
        t.activeElement.blur();
    const y = w && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || y) &&
      !c[0].isContentEditable &&
      u.preventDefault();
  }
  e.params.freeMode &&
    e.params.freeMode.enabled &&
    e.freeMode &&
    e.animating &&
    !n.cssMode &&
    e.freeMode.onTouchStart(),
    e.emit("touchStart", u);
}
a(pp, "onTouchStart");
function gp(s) {
  const e = Ft(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: n, rtlTranslate: o, enabled: l } = t;
  if (!l) return;
  let u = s;
  if ((u.originalEvent && (u = u.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", u);
    return;
  }
  if (i.isTouchEvent && u.type !== "touchmove") return;
  const c =
      u.type === "touchmove" &&
      u.targetTouches &&
      (u.targetTouches[0] || u.changedTouches[0]),
    f = u.type === "touchmove" ? c.pageX : u.pageX,
    d = u.type === "touchmove" ? c.pageY : u.pageY;
  if (u.preventedByNestedSwiper) {
    (n.startX = f), (n.startY = d);
    return;
  }
  if (!t.allowTouchMove) {
    W(u.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(n, { startX: f, startY: d, currentX: f, currentY: d }),
        (i.touchStartTime = is()));
    return;
  }
  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (d < n.startY && t.translate <= t.maxTranslate()) ||
        (d > n.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (f < n.startX && t.translate <= t.maxTranslate()) ||
      (f > n.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    e.activeElement &&
    u.target === e.activeElement &&
    W(u.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", u),
    u.targetTouches && u.targetTouches.length > 1)
  )
    return;
  (n.currentX = f), (n.currentY = d);
  const p = n.currentX - n.startX,
    h = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(p ** 2 + h ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let b;
    (t.isHorizontal() && n.currentY === n.startY) ||
    (t.isVertical() && n.currentX === n.startX)
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
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
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
  let g = t.isHorizontal() ? p : h;
  (n.diff = g),
    (g *= r.touchRatio),
    o && (g = -g),
    (t.swipeDirection = g > 0 ? "prev" : "next"),
    (i.currentTranslate = g + i.startTranslate);
  let m = !0,
    _ = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (_ = 0),
    g > 0 && i.currentTranslate > t.minTranslate()
      ? ((m = !1),
        r.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + i.startTranslate + g) ** _))
      : g < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((m = !1),
        r.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - i.startTranslate - g) ** _)),
    m && (u.preventedByNestedSwiper = !0),
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
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          (n.diff = t.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY);
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
a(gp, "onTouchMove");
function mp(s) {
  const e = this,
    t = e.touchEventsData,
    { params: i, touches: r, rtlTranslate: n, slidesGrid: o, enabled: l } = e;
  if (!l) return;
  let u = s;
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
  const c = is(),
    f = c - t.touchStartTime;
  if (e.allowClick) {
    const w = u.path || (u.composedPath && u.composedPath());
    e.updateClickedSlide((w && w[0]) || u.target),
      e.emit("tap click", u),
      f < 300 &&
        c - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", u);
  }
  if (
    ((t.lastClickTime = is()),
    la(() => {
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
      ? (d = n ? e.translate : -e.translate)
      : (d = -t.currentTranslate),
    i.cssMode)
  )
    return;
  if (e.params.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let p = 0,
    h = e.slidesSizesGrid[0];
  for (
    let w = 0;
    w < o.length;
    w += w < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const y = w < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[w + y] < "u"
      ? d >= o[w] && d < o[w + y] && ((p = w), (h = o[w + y] - o[w]))
      : d >= o[w] && ((p = w), (h = o[o.length - 1] - o[o.length - 2]));
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
  const _ = (d - o[p]) / h,
    b = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (f > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (_ >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? g : p + b)
        : e.slideTo(p)),
      e.swipeDirection === "prev" &&
        (_ > 1 - i.longSwipesRatio
          ? e.slideTo(p + b)
          : m !== null && _ < 0 && Math.abs(_) > i.longSwipesRatio
          ? e.slideTo(m)
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
      : (e.swipeDirection === "next" && e.slideTo(g !== null ? g : p + b),
        e.swipeDirection === "prev" && e.slideTo(m !== null ? m : p));
  }
}
a(mp, "onTouchEnd");
function Wl() {
  const s = this,
    { params: e, el: t } = s;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = s;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    s.isEnd &&
    !s.isBeginning &&
    !s.params.centeredSlides
      ? s.slideTo(s.slides.length - 1, 0, !1, !0)
      : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.run(),
    (s.allowSlidePrev = r),
    (s.allowSlideNext = i),
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
}
a(Wl, "onResize");
function vp(s) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && s.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
a(vp, "onClick");
function _p() {
  const s = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = s;
  if (!i) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -e.scrollLeft)
      : (s.translate = -e.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let r;
  const n = s.maxTranslate() - s.minTranslate();
  n === 0 ? (r = 0) : (r = (s.translate - s.minTranslate()) / n),
    r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
a(_p, "onScroll");
let Hl = !1;
function yp() {}
a(yp, "dummyEventListener");
const fc = a((s, e) => {
  const t = Ft(),
    {
      params: i,
      touchEvents: r,
      el: n,
      wrapperEl: o,
      device: l,
      support: u,
    } = s,
    c = !!i.nested,
    f = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  if (!u.touch)
    n[f](r.start, s.onTouchStart, !1),
      t[f](r.move, s.onTouchMove, c),
      t[f](r.end, s.onTouchEnd, !1);
  else {
    const p =
      r.start === "touchstart" && u.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    n[f](r.start, s.onTouchStart, p),
      n[f](
        r.move,
        s.onTouchMove,
        u.passiveListener ? { passive: !1, capture: c } : c
      ),
      n[f](r.end, s.onTouchEnd, p),
      r.cancel && n[f](r.cancel, s.onTouchEnd, p);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    n[f]("click", s.onClick, !0),
    i.cssMode && o[f]("scroll", s.onScroll),
    i.updateOnWindowResize
      ? s[d](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Wl,
          !0
        )
      : s[d]("observerUpdate", Wl, !0);
}, "events");
function wp() {
  const s = this,
    e = Ft(),
    { params: t, support: i } = s;
  (s.onTouchStart = pp.bind(s)),
    (s.onTouchMove = gp.bind(s)),
    (s.onTouchEnd = mp.bind(s)),
    t.cssMode && (s.onScroll = _p.bind(s)),
    (s.onClick = vp.bind(s)),
    i.touch && !Hl && (e.addEventListener("touchstart", yp), (Hl = !0)),
    fc(s, "on");
}
a(wp, "attachEvents");
function bp() {
  fc(this, "off");
}
a(bp, "detachEvents");
const Sp = { attachEvents: wp, detachEvents: bp },
  Gl = a((s, e) => s.grid && e.grid && e.grid.rows > 1, "isGridEnabled");
function xp() {
  const s = this,
    {
      activeIndex: e,
      initialized: t,
      loopedSlides: i = 0,
      params: r,
      $el: n,
    } = s,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const l = s.getBreakpoint(o, s.params.breakpointsBase, s.el);
  if (!l || s.currentBreakpoint === l) return;
  const c = (l in o ? o[l] : void 0) || s.originalParams,
    f = Gl(s, r),
    d = Gl(s, c),
    p = r.enabled;
  f && !d
    ? (n.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      s.emitContainerClasses())
    : !f &&
      d &&
      (n.addClass(`${r.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && r.grid.fill === "column")) &&
        n.addClass(`${r.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((_) => {
      const b = r[_] && r[_].enabled,
        w = c[_] && c[_].enabled;
      b && !w && s[_].disable(), !b && w && s[_].enable();
    });
  const h = c.direction && c.direction !== r.direction,
    g = r.loop && (c.slidesPerView !== r.slidesPerView || h);
  h && t && s.changeDirection(), Mt(s.params, c);
  const m = s.params.enabled;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    p && !m ? s.disable() : !p && m && s.enable(),
    (s.currentBreakpoint = l),
    s.emit("_beforeBreakpoint", c),
    g &&
      t &&
      (s.loopDestroy(),
      s.loopCreate(),
      s.updateSlides(),
      s.slideTo(e - i + s.loopedSlides, 0, !1)),
    s.emit("breakpoint", c);
}
a(xp, "setBreakpoint");
function Tp(s, e = "window", t) {
  if (!s || (e === "container" && !t)) return;
  let i = !1;
  const r = Xe(),
    n = e === "window" ? r.innerHeight : t.clientHeight,
    o = Object.keys(s).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const u = parseFloat(l.substr(1));
        return { value: n * u, point: l };
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
a(Tp, "getBreakpoint");
const Ep = { setBreakpoint: xp, getBreakpoint: Tp };
function kp(s, e) {
  const t = [];
  return (
    s.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && t.push(e + r);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
a(kp, "prepareClasses");
function Cp() {
  const s = this,
    { classNames: e, params: t, rtl: i, $el: r, device: n, support: o } = s,
    l = kp(
      [
        "initialized",
        t.direction,
        { "pointer-events": !o.touch },
        { "free-mode": s.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: n.android },
        { ios: n.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...l), r.addClass([...e].join(" ")), s.emitContainerClasses();
}
a(Cp, "addClasses");
function Pp() {
  const s = this,
    { $el: e, classNames: t } = s;
  e.removeClass(t.join(" ")), s.emitContainerClasses();
}
a(Pp, "removeClasses");
const Mp = { addClasses: Cp, removeClasses: Pp };
function Ap(s, e, t, i, r, n) {
  const o = Xe();
  let l;
  function u() {
    n && n();
  }
  a(u, "onReady"),
    !W(s).parent("picture")[0] && (!s.complete || !r) && e
      ? ((l = new o.Image()),
        (l.onload = u),
        (l.onerror = u),
        i && (l.sizes = i),
        t && (l.srcset = t),
        e && (l.src = e))
      : u();
}
a(Ap, "loadImage");
function Op() {
  const s = this;
  s.imagesToLoad = s.$el.find("img");
  function e() {
    typeof s > "u" ||
      s === null ||
      !s ||
      s.destroyed ||
      (s.imagesLoaded !== void 0 && (s.imagesLoaded += 1),
      s.imagesLoaded === s.imagesToLoad.length &&
        (s.params.updateOnImagesReady && s.update(), s.emit("imagesReady")));
  }
  a(e, "onReady");
  for (let t = 0; t < s.imagesToLoad.length; t += 1) {
    const i = s.imagesToLoad[t];
    s.loadImage(
      i,
      i.currentSrc || i.getAttribute("src"),
      i.srcset || i.getAttribute("srcset"),
      i.sizes || i.getAttribute("sizes"),
      !0,
      e
    );
  }
}
a(Op, "preloadImages");
const Lp = { loadImage: Ap, preloadImages: Op };
function Dp() {
  const s = this,
    { isLocked: e, params: t } = s,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const r = s.slides.length - 1,
      n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
    s.isLocked = s.size > n;
  } else s.isLocked = s.snapGrid.length === 1;
  t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
a(Dp, "checkOverflow");
const Ip = { checkOverflow: Dp },
  Yl = {
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
function zp(s, e) {
  return a(function (i = {}) {
    const r = Object.keys(i)[0],
      n = i[r];
    if (typeof n != "object" || n === null) {
      Mt(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        s[r] === !0 &&
        (s[r] = { auto: !0 }),
      !(r in s && "enabled" in n))
    ) {
      Mt(e, i);
      return;
    }
    s[r] === !0 && (s[r] = { enabled: !0 }),
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
      s[r] || (s[r] = { enabled: !1 }),
      Mt(e, i);
  }, "extendParams");
}
a(zp, "moduleExtendParams");
const Lo = {
    eventsEmitter: Oh,
    update: qh,
    translate: Xh,
    transition: Zh,
    slide: sp,
    loop: up,
    grabCursor: dp,
    events: Sp,
    breakpoints: Ep,
    checkOverflow: Ip,
    classes: Mp,
    images: Lp,
  },
  Do = {},
  ii = class ii {
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
        i.el && W(i.el).length > 1)
      ) {
        const l = [];
        return (
          W(i.el).each((u) => {
            const c = Mt({}, i, { el: u });
            l.push(new ii(c));
          }),
          l
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = uc()),
        (r.device = kh({ userAgent: i.userAgent })),
        (r.browser = Ph()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
      const n = {};
      r.modules.forEach((l) => {
        l({
          swiper: r,
          extendParams: zp(i, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const o = Mt({}, Yl, n);
      return (
        (r.params = Mt({}, o, Do, i)),
        (r.originalParams = Mt({}, r.params)),
        (r.passedParams = Mt({}, i)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((l) => {
            r.on(l, r.params.on[l]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = W),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: t,
          classNames: [],
          slides: W(),
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
            lastClickTime: is(),
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
          slides: n,
          slidesGrid: o,
          slidesSizesGrid: l,
          size: u,
          activeIndex: c,
        } = i;
      let f = 1;
      if (r.centeredSlides) {
        let d = n[c].swiperSlideSize,
          p;
        for (let h = c + 1; h < n.length; h += 1)
          n[h] &&
            !p &&
            ((d += n[h].swiperSlideSize), (f += 1), d > u && (p = !0));
        for (let h = c - 1; h >= 0; h -= 1)
          n[h] &&
            !p &&
            ((d += n[h].swiperSlideSize), (f += 1), d > u && (p = !0));
      } else if (e === "current")
        for (let d = c + 1; d < n.length; d += 1)
          (t ? o[d] + l[d] - o[c] < u : o[d] - o[c] < u) && (f += 1);
      else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < u && (f += 1);
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
      let n;
      e.params.freeMode && e.params.freeMode.enabled
        ? (r(), e.params.autoHeight && e.updateAutoHeight())
        : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? (n = e.slideTo(e.slides.length - 1, 0, !1, !0))
            : (n = e.slideTo(e.activeIndex, 0, !1, !0)),
          n || r()),
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
          i.slides.each((n) => {
            e === "vertical" ? (n.style.width = "") : (n.style.height = "");
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
      const i = W(e || t.params.el);
      if (((e = i[0]), !e)) return !1;
      e.swiper = t;
      const r = a(
        () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
        "getWrapperSelector"
      );
      let o = a(() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const l = W(e.shadowRoot.querySelector(r()));
          return (l.children = (u) => i.children(u)), l;
        }
        return i.children ? i.children(r()) : W(i).children(r());
      }, "getWrapper")();
      if (o.length === 0 && t.params.createElements) {
        const u = Ft().createElement("div");
        (o = W(u)),
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
        { params: r, $el: n, $wrapperEl: o, slides: l } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            n.removeAttr("style"),
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
          e !== !1 && ((i.$el[0].swiper = null), wh(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      Mt(Do, e);
    }
    static get extendedDefaults() {
      return Do;
    }
    static get defaults() {
      return Yl;
    }
    static installModule(e) {
      ii.prototype.__modules__ || (ii.prototype.__modules__ = []);
      const t = ii.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => ii.installModule(t)), ii)
        : (ii.installModule(e), ii);
    }
  };
a(ii, "Swiper");
let Cr = ii;
Object.keys(Lo).forEach((s) => {
  Object.keys(Lo[s]).forEach((e) => {
    Cr.prototype[e] = Lo[s][e];
  });
});
Cr.use([Mh, Ah]);
let Io = null;
const dc = a(() => {
  const s = document.querySelector(".swiper[work-slider='component']");
  if (!s) return;
  const e = a(() => window.innerWidth >= 768, "getIsDesktop"),
    t = a(() => {
      const r = e();
      Io = new Cr(s, {
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
            const n = Array.from(this.slides).filter(
                (l) => !l.classList.contains("swiper-slide-duplicate")
              ).length,
              o = this.realIndex + 1;
            (document.querySelector("[data-slider-count]").textContent = n),
              (document.querySelector("[data-slider-current]").textContent = o);
          }, "init"),
          slideChange: a(function () {
            const n = this.realIndex + 1;
            document.querySelector("[data-slider-current]").textContent = n;
          }, "slideChange"),
        },
      });
    }, "initSwiper");
  let i = e();
  t(),
    window.addEventListener("resize", () => {
      const r = e();
      r !== i && ((i = r), Io && Io.destroy(!0, !0), t());
    });
}, "initWorkSlider");
function Si(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
a(Si, "_assertThisInitialized");
function hc(s, e) {
  (s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e);
}
a(hc, "_inheritsLoose");
var zt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  dn = { duration: 0.5, overwrite: !1, delay: 0 },
  Ya,
  Je,
  we,
  gi = 1e8,
  lt = 1 / gi,
  ua = Math.PI * 2,
  Rp = ua / 4,
  Np = 0,
  pc = Math.sqrt,
  Fp = Math.cos,
  Bp = Math.sin,
  Ye = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  ke = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  Oi = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  Xa = a(function (e) {
    return typeof e > "u";
  }, "_isUndefined"),
  vi = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  bt = a(function (e) {
    return e !== !1;
  }, "_isNotFalse"),
  ja = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  ws = a(function (e) {
    return ke(e) || Ye(e);
  }, "_isFuncOrString"),
  gc =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ct = Array.isArray,
  ca = /(?:-?\.?\d|\.)+/gi,
  mc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Xr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  zo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  vc = /[+-]=-?[.\d]+/,
  _c = /[^,'"\[\]\s]+/gi,
  Vp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  xe,
  li,
  fa,
  Ua,
  Rt = {},
  eo = {},
  yc,
  wc = a(function (e) {
    return (eo = hn(e, Rt)) && Et;
  }, "_install"),
  Ka = a(function (e, t) {}, "_missingPlugin"),
  rs = a(function (e, t) {
    return !t && void 0;
  }, "_warn"),
  bc = a(function (e, t) {
    return (e && (Rt[e] = t) && eo && (eo[e] = t)) || Rt;
  }, "_addGlobal"),
  ns = a(function () {
    return 0;
  }, "_emptyFunc"),
  qp = { suppressEvents: !0, isStart: !0, kill: !1 },
  Bs = { suppressEvents: !0, kill: !1 },
  $p = { suppressEvents: !0 },
  Za = {},
  Gi = [],
  da = {},
  Sc,
  At = {},
  Ro = {},
  Xl = 30,
  Vs = [],
  Qa = "",
  Ja = a(function (e) {
    var t = e[0],
      i,
      r;
    if ((vi(t) || ke(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Vs.length; r-- && !Vs[r].targetTest(t); );
      i = Vs[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Yc(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  }, "_harness"),
  mr = a(function (e) {
    return e._gsap || Ja(Yt(e))[0]._gsap;
  }, "_getCache"),
  xc = a(function (e, t, i) {
    return (i = e[t]) && ke(i)
      ? e[t]()
      : (Xa(i) && e.getAttribute && e.getAttribute(t)) || i;
  }, "_getProperty"),
  St = a(function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  }, "_forEachName"),
  Ae = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Re = a(function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  }, "_roundPrecise"),
  Jr = a(function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  }, "_parseRelative"),
  Wp = a(function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  }, "_arrayContainsAny"),
  to = a(function () {
    var e = Gi.length,
      t = Gi.slice(0),
      i,
      r;
    for (da = {}, Gi.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  }, "_lazyRender"),
  el = a(function (e) {
    return !!(e._initted || e._startAt || e.add);
  }, "_isRevertWorthy"),
  Tc = a(function (e, t, i, r) {
    Gi.length && !Je && to(),
      e.render(t, i, !!(Je && t < 0 && el(e))),
      Gi.length && !Je && to();
  }, "_lazySafeRender"),
  Ec = a(function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(_c).length < 2
      ? t
      : Ye(e)
      ? e.trim()
      : e;
  }, "_numericIfPossible"),
  kc = a(function (e) {
    return e;
  }, "_passThrough"),
  Nt = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Hp = a(function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  }, "_setKeyframeDefaults"),
  hn = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_merge"),
  jl = a(function s(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = vi(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  }, "_mergeDeep"),
  io = a(function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  }, "_copyExcluding"),
  Bn = a(function (e) {
    var t = e.parent || xe,
      i = e.keyframes ? Hp(ct(e.keyframes)) : Nt;
    if (bt(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  }, "_inheritDefaults"),
  Gp = a(function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  }, "_arraysMatch"),
  Cc = a(function (e, t, i, r, n) {
    var o = e[r],
      l;
    if (n) for (l = t[n]; o && o[n] > l; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  }, "_addLinkedListItem"),
  wo = a(function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t._prev,
      o = t._next;
    n ? (n._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = n) : e[r] === t && (e[r] = n),
      (t._next = t._prev = t.parent = null);
  }, "_removeLinkedListItem"),
  ji = a(function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  }, "_removeFromParent"),
  vr = a(function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  }, "_uncache"),
  Yp = a(function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  }, "_recacheAncestors"),
  ha = a(function (e, t, i, r) {
    return (
      e._startAt &&
      (Je
        ? e._startAt.revert(Bs)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  }, "_rewindStartAt"),
  Xp = a(function s(e) {
    return !e || (e._ts && s(e.parent));
  }, "_hasNoPausedAncestors"),
  Ul = a(function (e) {
    return e._repeat ? pn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  }, "_elapsedCycleDuration"),
  pn = a(function (e, t) {
    var i = Math.floor((e = Re(e / t)));
    return e && i === e ? i - 1 : i;
  }, "_animationCycle"),
  ro = a(function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  }, "_parentToChildTotalTime"),
  bo = a(function (e) {
    return (e._end = Re(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || lt) || 0)
    ));
  }, "_setEnd"),
  So = a(function (e, t) {
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
        bo(e),
        i._dirty || vr(i, e)),
      e
    );
  }, "_alignPlayhead"),
  Pc = a(function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = ro(e.rawTime(), t)),
        (!t._dur || ps(0, t.totalDuration(), i) - t._tTime > lt) &&
          t.render(i, !0)),
      vr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -1e-8;
    }
  }, "_postAddChecks"),
  ci = a(function (e, t, i, r) {
    return (
      t.parent && ji(t),
      (t._start = Re(
        (Oi(i) ? i : i || e !== xe ? Wt(e, i, t) : e._time) + t._delay
      )),
      (t._end = Re(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Cc(e, t, "_first", "_last", e._sort ? "_start" : 0),
      pa(t) || (e._recent = t),
      r || Pc(e, t),
      e._ts < 0 && So(e, e._tTime),
      e
    );
  }, "_addToTimeline"),
  Mc = a(function (e, t) {
    return (
      (Rt.ScrollTrigger || Ka("scrollTrigger", t)) &&
      Rt.ScrollTrigger.create(t, e)
    );
  }, "_scrollTrigger"),
  Ac = a(function (e, t, i, r, n) {
    if ((il(e, t, n), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !Je &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Sc !== Lt.frame
    )
      return Gi.push(e), (e._lazy = [n, r]), 1;
  }, "_attemptInitTween"),
  jp = a(function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
  }, "_parentPlayheadIsBeforeStart"),
  pa = a(function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  }, "_isFromOrFromStart"),
  Up = a(function (e, t, i, r) {
    var n = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && jp(e) && !(!e._initted && pa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !pa(e))))
          ? 0
          : 1,
      l = e._rDelay,
      u = 0,
      c,
      f,
      d;
    if (
      (l &&
        e._repeat &&
        ((u = ps(0, e._tDur, t)),
        (f = pn(u, l)),
        e._yoyo && f & 1 && (o = 1 - o),
        f !== pn(e._tTime, l) &&
          ((n = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== n || Je || r || e._zTime === lt || (!t && e._zTime))
    ) {
      if (!e._initted && Ac(e, t, r, i, u)) return;
      for (
        d = e._zTime,
          e._zTime = t || (i ? lt : 0),
          i || (i = t && !d),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = u,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      t < 0 && ha(e, t, i, !0),
        e._onUpdate && !i && It(e, "onUpdate"),
        u && e._repeat && !i && e.parent && It(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && ji(e, 1),
          !i &&
            !Je &&
            (It(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  }, "_renderZeroDurationTween"),
  Kp = a(function (e, t, i) {
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
    var n = e._repeat,
      o = Re(t) || 0,
      l = e._tTime / e._tDur;
    return (
      l && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = n ? (n < 0 ? 1e10 : Re(o * (n + 1) + e._rDelay * n)) : o),
      l > 0 && !r && So(e, (e._tTime = e._tDur * l)),
      e.parent && bo(e),
      i || vr(e.parent, e),
      e
    );
  }, "_setDuration"),
  Kl = a(function (e) {
    return e instanceof vt ? vr(e) : gn(e, e._dur);
  }, "_onUpdateTotalDuration"),
  Zp = { _start: 0, endTime: ns, totalDuration: ns },
  Wt = a(function s(e, t, i) {
    var r = e.labels,
      n = e._recent || Zp,
      o = e.duration() >= gi ? n.endTime(!1) : e._dur,
      l,
      u,
      c;
    return Ye(t) && (isNaN(t) || t in r)
      ? ((u = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (l = t.indexOf("=")),
        u === "<" || u === ">"
          ? (l >= 0 && (t = t.replace(/=/, "")),
            (u === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (l < 0 ? n : i).totalDuration() / 100 : 1))
          : l < 0
          ? (t in r || (r[t] = o), r[t])
          : ((u = parseFloat(t.charAt(l - 1) + t.substr(l + 1))),
            c && i && (u = (u / 100) * (ct(i) ? i[0] : i).totalDuration()),
            l > 1 ? s(e, t.substr(0, l - 1), i) + u : o + u))
      : t == null
      ? o
      : +t;
  }, "_parsePosition"),
  Vn = a(function (e, t, i) {
    var r = Oi(t[1]),
      n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[n],
      l,
      u;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (l = o, u = i; u && !("immediateRender" in l); )
        (l = u.vars.defaults || {}), (u = bt(u.vars.inherit) && u.parent);
      (o.immediateRender = bt(l.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
    }
    return new ze(t[0], o, t[n + 1]);
  }, "_createTweenType"),
  Zi = a(function (e, t) {
    return e || e === 0 ? t(e) : t;
  }, "_conditionalReturn"),
  ps = a(function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  }, "_clamp"),
  ot = a(function (e, t) {
    return !Ye(e) || !(t = Vp.exec(e)) ? "" : t[1];
  }, "getUnit"),
  Qp = a(function (e, t, i) {
    return Zi(i, function (r) {
      return ps(e, t, r);
    });
  }, "clamp"),
  ga = [].slice,
  Oc = a(function (e, t) {
    return (
      e &&
      vi(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && vi(e[0]))) &&
      !e.nodeType &&
      e !== li
    );
  }, "_isArrayLike"),
  Jp = a(function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var n;
        return (Ye(r) && !t) || Oc(r, 1)
          ? (n = i).push.apply(n, Yt(r))
          : i.push(r);
      }) || i
    );
  }, "_flatten"),
  Yt = a(function (e, t, i) {
    return we && !t && we.selector
      ? we.selector(e)
      : Ye(e) && !i && (fa || !mn())
      ? ga.call((t || Ua).querySelectorAll(e), 0)
      : ct(e)
      ? Jp(e, i)
      : Oc(e)
      ? ga.call(e, 0)
      : e
      ? [e]
      : [];
  }, "toArray"),
  ma = a(function (e) {
    return (
      (e = Yt(e)[0] || rs("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return Yt(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? rs("Invalid scope") || Ua.createElement("div")
            : e
        );
      }
    );
  }, "selector"),
  Lc = a(function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  }, "shuffle"),
  Dc = a(function (e) {
    if (ke(e)) return e;
    var t = vi(e) ? e : { each: e },
      i = _r(t.ease),
      r = t.from || 0,
      n = parseFloat(t.base) || 0,
      o = {},
      l = r > 0 && r < 1,
      u = isNaN(r) || l,
      c = t.axis,
      f = r,
      d = r;
    return (
      Ye(r)
        ? (f = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !l && u && ((f = r[0]), (d = r[1])),
      function (p, h, g) {
        var m = (g || t).length,
          _ = o[m],
          b,
          w,
          y,
          v,
          S,
          k,
          C,
          T,
          A;
        if (!_) {
          if (((A = t.grid === "auto" ? 0 : (t.grid || [1, gi])[1]), !A)) {
            for (
              C = -1e8;
              C < (C = g[A++].getBoundingClientRect().left) && A < m;

            );
            A < m && A--;
          }
          for (
            _ = o[m] = [],
              b = u ? Math.min(A, m) * f - 0.5 : r % A,
              w = A === gi ? 0 : u ? (m * d) / A - 0.5 : (r / A) | 0,
              C = 0,
              T = gi,
              k = 0;
            k < m;
            k++
          )
            (y = (k % A) - b),
              (v = w - ((k / A) | 0)),
              (_[k] = S = c ? Math.abs(c === "y" ? v : y) : pc(y * y + v * v)),
              S > C && (C = S),
              S < T && (T = S);
          r === "random" && Lc(_),
            (_.max = C - T),
            (_.min = T),
            (_.v = m =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (A > m
                    ? m - 1
                    : c
                    ? c === "y"
                      ? m / A
                      : A
                    : Math.max(A, m / A)) ||
                0) * (r === "edges" ? -1 : 1)),
            (_.b = m < 0 ? n - m : n),
            (_.u = ot(t.amount || t.each) || 0),
            (i = i && m < 0 ? Wc(i) : i);
        }
        return (
          (m = (_[p] - _.min) / _.max || 0),
          Re(_.b + (i ? i(m) : m) * _.v) + _.u
        );
      }
    );
  }, "distribute"),
  va = a(function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = Re(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (Oi(i) ? 0 : ot(i));
    };
  }, "_roundModifier"),
  Ic = a(function (e, t) {
    var i = ct(e),
      r,
      n;
    return (
      !i &&
        vi(e) &&
        ((r = i = e.radius || gi),
        e.values
          ? ((e = Yt(e.values)), (n = !Oi(e[0])) && (r *= r))
          : (e = va(e.increment))),
      Zi(
        t,
        i
          ? ke(e)
            ? function (o) {
                return (n = e(o)), Math.abs(n - o) <= r ? n : o;
              }
            : function (o) {
                for (
                  var l = parseFloat(n ? o.x : o),
                    u = parseFloat(n ? o.y : 0),
                    c = gi,
                    f = 0,
                    d = e.length,
                    p,
                    h;
                  d--;

                )
                  n
                    ? ((p = e[d].x - l), (h = e[d].y - u), (p = p * p + h * h))
                    : (p = Math.abs(e[d] - l)),
                    p < c && ((c = p), (f = d));
                return (
                  (f = !r || c <= r ? e[f] : o),
                  n || f === o || Oi(o) ? f : f + ot(o)
                );
              }
          : va(e)
      )
    );
  }, "snap"),
  zc = a(function (e, t, i, r) {
    return Zi(ct(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return ct(e)
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
  eg = a(function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (n, o) {
        return o(n);
      }, r);
    };
  }, "pipe"),
  tg = a(function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || ot(i));
    };
  }, "unitize"),
  ig = a(function (e, t, i) {
    return Nc(e, t, 0, 1, i);
  }, "normalize"),
  Rc = a(function (e, t, i) {
    return Zi(i, function (r) {
      return e[~~t(r)];
    });
  }, "_wrapArray"),
  rg = a(function s(e, t, i) {
    var r = t - e;
    return ct(e)
      ? Rc(e, s(0, e.length), t)
      : Zi(i, function (n) {
          return ((r + ((n - e) % r)) % r) + e;
        });
  }, "wrap"),
  ng = a(function s(e, t, i) {
    var r = t - e,
      n = r * 2;
    return ct(e)
      ? Rc(e, s(0, e.length - 1), t)
      : Zi(i, function (o) {
          return (o = (n + ((o - e) % n)) % n || 0), e + (o > r ? n - o : o);
        });
  }, "wrapYoyo"),
  ss = a(function (e) {
    for (var t = 0, i = "", r, n, o, l; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (l = e.charAt(r + 7) === "["),
        (n = e.substr(r + 7, o - r - 7).match(l ? _c : ca)),
        (i +=
          e.substr(t, r - t) + zc(l ? n : +n[0], l ? 0 : +n[1], +n[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  }, "_replaceRandom"),
  Nc = a(function (e, t, i, r, n) {
    var o = t - e,
      l = r - i;
    return Zi(n, function (u) {
      return i + (((u - e) / o) * l || 0);
    });
  }, "mapRange"),
  sg = a(function s(e, t, i, r) {
    var n = isNaN(e + t)
      ? 0
      : function (h) {
          return (1 - h) * e + h * t;
        };
    if (!n) {
      var o = Ye(e),
        l = {},
        u,
        c,
        f,
        d,
        p;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (ct(e) && !ct(t)) {
        for (f = [], d = e.length, p = d - 2, c = 1; c < d; c++)
          f.push(s(e[c - 1], e[c]));
        d--,
          (n = a(function (g) {
            g *= d;
            var m = Math.min(p, ~~g);
            return f[m](g - m);
          }, "func")),
          (i = t);
      } else r || (e = hn(ct(e) ? [] : {}, e));
      if (!f) {
        for (u in t) tl.call(l, e, u, "get", t[u]);
        n = a(function (g) {
          return sl(g, l) || (o ? e.p : e);
        }, "func");
      }
    }
    return Zi(i, n);
  }, "interpolate"),
  Zl = a(function (e, t, i) {
    var r = e.labels,
      n = gi,
      o,
      l,
      u;
    for (o in r)
      (l = r[o] - t),
        l < 0 == !!i && l && n > (l = Math.abs(l)) && ((u = o), (n = l));
    return u;
  }, "_getLabelInDirection"),
  It = a(function (e, t, i) {
    var r = e.vars,
      n = r[t],
      o = we,
      l = e._ctx,
      u,
      c,
      f;
    if (n)
      return (
        (u = r[t + "Params"]),
        (c = r.callbackScope || e),
        i && Gi.length && to(),
        l && (we = l),
        (f = u ? n.apply(c, u) : n.call(c)),
        (we = o),
        f
      );
  }, "_callback"),
  An = a(function (e) {
    return (
      ji(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Je),
      e.progress() < 1 && It(e, "onInterrupt"),
      e
    );
  }, "_interrupt"),
  jr,
  Fc = [],
  Bc = a(function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), ja() || e.headless)) {
        var t = e.name,
          i = ke(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: ns,
            render: sl,
            add: tl,
            kill: bg,
            modifier: wg,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: nl,
            aliases: {},
            register: 0,
          };
        if ((mn(), e !== r)) {
          if (At[t]) return;
          Nt(r, Nt(io(e, n), o)),
            hn(r.prototype, hn(n, io(e, o))),
            (At[(r.prop = t)] = r),
            e.targetTest && (Vs.push(r), (Za[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        bc(t, r), e.register && e.register(Et, r, xt);
      } else Fc.push(e);
  }, "_createPlugin"),
  pe = 255,
  On = {
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
  No = a(function (e, t, i) {
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
  Vc = a(function (e, t, i) {
    var r = e ? (Oi(e) ? [e >> 16, (e >> 8) & pe, e & pe] : 0) : On.black,
      n,
      o,
      l,
      u,
      c,
      f,
      d,
      p,
      h,
      g;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), On[e]))
        r = On[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (o = e.charAt(2)),
            (l = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
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
        if (((r = g = e.match(ca)), !t))
          (u = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (f = +r[2] / 100),
            (o = f <= 0.5 ? f * (c + 1) : f + c - f * c),
            (n = f * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = No(u + 1 / 3, n, o)),
            (r[1] = No(u, n, o)),
            (r[2] = No(u - 1 / 3, n, o));
        else if (~e.indexOf("="))
          return (r = e.match(mc)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(ca) || On.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !g &&
        ((n = r[0] / pe),
        (o = r[1] / pe),
        (l = r[2] / pe),
        (d = Math.max(n, o, l)),
        (p = Math.min(n, o, l)),
        (f = (d + p) / 2),
        d === p
          ? (u = c = 0)
          : ((h = d - p),
            (c = f > 0.5 ? h / (2 - d - p) : h / (d + p)),
            (u =
              d === n
                ? (o - l) / h + (o < l ? 6 : 0)
                : d === o
                ? (l - n) / h + 2
                : (n - o) / h + 4),
            (u *= 60)),
        (r[0] = ~~(u + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(f * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  }, "splitColor"),
  qc = a(function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(Yi).forEach(function (n) {
        var o = n.match(Xr) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  }, "_colorOrderData"),
  Ql = a(function (e, t, i) {
    var r = "",
      n = (e + r).match(Yi),
      o = t ? "hsla(" : "rgba(",
      l = 0,
      u,
      c,
      f,
      d;
    if (!n) return e;
    if (
      ((n = n.map(function (p) {
        return (
          (p = Vc(p, t, 1)) &&
          o +
            (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
            ")"
        );
      })),
      i && ((f = qc(e)), (u = i.c), u.join(r) !== f.c.join(r)))
    )
      for (c = e.replace(Yi, "1").split(Xr), d = c.length - 1; l < d; l++)
        r +=
          c[l] +
          (~u.indexOf(l)
            ? n.shift() || o + "0,0,0,0)"
            : (f.length ? f : n.length ? n : i).shift());
    if (!c)
      for (c = e.split(Yi), d = c.length - 1; l < d; l++) r += c[l] + n[l];
    return r + c[d];
  }, "_formatColors"),
  Yi = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in On) s += "|" + e + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  og = /hsl[a]?\(/,
  $c = a(function (e) {
    var t = e.join(" "),
      i;
    if (((Yi.lastIndex = 0), Yi.test(t)))
      return (
        (i = og.test(t)),
        (e[1] = Ql(e[1], i)),
        (e[0] = Ql(e[0], i, qc(e[1]))),
        !0
      );
  }, "_colorStringFilter"),
  os,
  Lt = (function () {
    var s = Date.now,
      e = 500,
      t = 33,
      i = s(),
      r = i,
      n = 1e3 / 240,
      o = n,
      l = [],
      u,
      c,
      f,
      d,
      p,
      h,
      g = a(function m(_) {
        var b = s() - r,
          w = _ === !0,
          y,
          v,
          S,
          k;
        if (
          ((b > e || b < 0) && (i += b - t),
          (r += b),
          (S = r - i),
          (y = S - o),
          (y > 0 || w) &&
            ((k = ++d.frame),
            (p = S - d.time * 1e3),
            (d.time = S = S / 1e3),
            (o += y + (y >= n ? 4 : n - y)),
            (v = 1)),
          w || (u = c(m)),
          v)
        )
          for (h = 0; h < l.length; h++) l[h](S, p, k, _);
      }, "_tick");
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: a(function () {
          g(!0);
        }, "tick"),
        deltaRatio: a(function (_) {
          return p / (1e3 / (_ || 60));
        }, "deltaRatio"),
        wake: a(function () {
          yc &&
            (!fa &&
              ja() &&
              ((li = fa = window),
              (Ua = li.document || {}),
              (Rt.gsap = Et),
              (li.gsapVersions || (li.gsapVersions = [])).push(Et.version),
              wc(eo || li.GreenSockGlobals || (!li.gsap && li) || {}),
              Fc.forEach(Bc)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            u && d.sleep(),
            (c =
              f ||
              function (_) {
                return setTimeout(_, (o - d.time * 1e3 + 1) | 0);
              }),
            (os = 1),
            g(2));
        }, "wake"),
        sleep: a(function () {
          (f ? cancelAnimationFrame : clearTimeout)(u), (os = 0), (c = ns);
        }, "sleep"),
        lagSmoothing: a(function (_, b) {
          (e = _ || 1 / 0), (t = Math.min(b || 33, e));
        }, "lagSmoothing"),
        fps: a(function (_) {
          (n = 1e3 / (_ || 240)), (o = d.time * 1e3 + n);
        }, "fps"),
        add: a(function (_, b, w) {
          var y = b
            ? function (v, S, k, C) {
                _(v, S, k, C), d.remove(y);
              }
            : _;
          return d.remove(_), l[w ? "unshift" : "push"](y), mn(), y;
        }, "add"),
        remove: a(function (_, b) {
          ~(b = l.indexOf(_)) && l.splice(b, 1) && h >= b && h--;
        }, "remove"),
        _listeners: l,
      }),
      d
    );
  })(),
  mn = a(function () {
    return !os && Lt.wake();
  }, "_wake"),
  Qe = {},
  ag = /^[\d.\-M][\d.\-,\s]/,
  lg = /["']/g,
  ug = a(function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        n = 1,
        o = i.length,
        l,
        u,
        c;
      n < o;
      n++
    )
      (u = i[n]),
        (l = n !== o - 1 ? u.lastIndexOf(",") : u.length),
        (c = u.substr(0, l)),
        (t[r] = isNaN(c) ? c.replace(lg, "").trim() : +c),
        (r = u.substr(l + 1).trim());
    return t;
  }, "_parseObjectInString"),
  cg = a(function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  }, "_valueInParentheses"),
  fg = a(function (e) {
    var t = (e + "").split("("),
      i = Qe[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [ug(t[1])] : cg(e).split(",").map(Ec)
        )
      : Qe._CE && ag.test(e)
      ? Qe._CE("", e)
      : i;
  }, "_configEaseFromString"),
  Wc = a(function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  }, "_invertEase"),
  Hc = a(function s(e, t) {
    for (var i = e._first, r; i; )
      i instanceof vt
        ? s(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? s(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  }, "_propagateYoyoEase"),
  _r = a(function (e, t) {
    return (e && (ke(e) ? e : Qe[e] || fg(e))) || t;
  }, "_parseEase"),
  Ir = a(function (e, t, i, r) {
    i === void 0 &&
      (i = a(function (u) {
        return 1 - t(1 - u);
      }, "easeOut")),
      r === void 0 &&
        (r = a(function (u) {
          return u < 0.5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2;
        }, "easeInOut"));
    var n = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      St(e, function (l) {
        (Qe[l] = Rt[l] = n), (Qe[(o = l.toLowerCase())] = i);
        for (var u in n)
          Qe[
            o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")
          ] = Qe[l + "." + u] = n[u];
      }),
      n
    );
  }, "_insertEase"),
  Gc = a(function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  }, "_easeInOutFromOut"),
  Fo = a(function s(e, t, i) {
    var r = t >= 1 ? t : 1,
      n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (n / ua) * (Math.asin(1 / r) || 0),
      l = a(function (f) {
        return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Bp((f - o) * n) + 1;
      }, "easeOut"),
      u =
        e === "out"
          ? l
          : e === "in"
          ? function (c) {
              return 1 - l(1 - c);
            }
          : Gc(l);
    return (
      (n = ua / n),
      (u.config = function (c, f) {
        return s(e, c, f);
      }),
      u
    );
  }, "_configElastic"),
  Bo = a(function s(e, t) {
    t === void 0 && (t = 1.70158);
    var i = a(function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      }, "easeOut"),
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : Gc(i);
    return (
      (r.config = function (n) {
        return s(e, n);
      }),
      r
    );
  }, "_configBack");
St("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
  var t = e < 5 ? e + 1 : e;
  Ir(
    s + ",Power" + (t - 1),
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
Qe.Linear.easeNone = Qe.none = Qe.Linear.easeIn;
Ir("Elastic", Fo("in"), Fo("out"), Fo());
(function (s, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    n = a(function (l) {
      return l < t
        ? s * l * l
        : l < i
        ? s * Math.pow(l - 1.5 / e, 2) + 0.75
        : l < r
        ? s * (l -= 2.25 / e) * l + 0.9375
        : s * Math.pow(l - 2.625 / e, 2) + 0.984375;
    }, "easeOut");
  Ir(
    "Bounce",
    function (o) {
      return 1 - n(1 - o);
    },
    n
  );
})(7.5625, 2.75);
Ir("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Ir("Circ", function (s) {
  return -(pc(1 - s * s) - 1);
});
Ir("Sine", function (s) {
  return s === 1 ? 1 : -Fp(s * Rp) + 1;
});
Ir("Back", Bo("in"), Bo("out"), Bo());
Qe.SteppedEase =
  Qe.steps =
  Rt.SteppedEase =
    {
      config: a(function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          o = 1 - lt;
        return function (l) {
          return (((r * ps(0, o, l)) | 0) + n) * i;
        };
      }, "config"),
    };
dn.ease = Qe["quad.out"];
St(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Qa += s + "," + s + "Params,");
  }
);
var Yc = a(function (e, t) {
    (this.id = Np++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : xc),
      (this.set = t ? t.getSetter : nl);
  }, "GSCache"),
  as = (function () {
    function s(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        gn(this, +t.duration, 1, 1),
        (this.data = t.data),
        we && ((this._ctx = we), we.data.push(this)),
        os || Lt.wake();
    }
    a(s, "Animation");
    var e = s.prototype;
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
        if ((mn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (So(this, i), !n._dp || n.parent || Pc(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            ci(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === lt) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Tc(this, i, r)),
          this
        );
      }, "totalTime")),
      (e.time = a(function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Ul(this)) %
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
                Ul(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }, "progress")),
      (e.iteration = a(function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? pn(this._tTime, n) + 1
          : 1;
      }, "iteration")),
      (e.timeScale = a(function (i, r) {
        if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? ro(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
          this.totalTime(
            ps(-Math.abs(this._delay), this.totalDuration(), n),
            r !== !1
          ),
          bo(this),
          Yp(this)
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
                : (mn(),
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
      }, "paused")),
      (e.startTime = a(function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && ci(r, this, i - this._delay), this
          );
        }
        return this._start;
      }, "startTime")),
      (e.endTime = a(function (i) {
        return (
          this._start +
          (bt(i) ? this.totalDuration() : this.duration()) /
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
            ? ro(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }, "rawTime")),
      (e.revert = a(function (i) {
        i === void 0 && (i = $p);
        var r = Je;
        return (
          (Je = i),
          el(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (Je = r),
          this
        );
      }, "revert")),
      (e.globalTime = a(function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }, "globalTime")),
      (e.repeat = a(function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Kl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }, "repeat")),
      (e.repeatDelay = a(function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Kl(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }, "repeatDelay")),
      (e.yoyo = a(function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }, "yoyo")),
      (e.seek = a(function (i, r) {
        return this.totalTime(Wt(this, i), bt(r));
      }, "seek")),
      (e.restart = a(function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, bt(r)),
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
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - lt)
        );
      }, "isActive")),
      (e.eventCallback = a(function (i, r, n) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                n && (o[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }, "eventCallback")),
      (e.then = a(function (i) {
        var r = this;
        return new Promise(function (n) {
          var o = ke(i) ? i : kc,
            l = a(function () {
              var c = r.then;
              (r.then = null),
                ke(o) && (o = o(r)) && (o.then || o === r) && (r.then = c),
                n(o),
                (r.then = c);
            }, "_resolve");
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? l()
            : (r._prom = l);
        });
      }, "then")),
      (e.kill = a(function () {
        An(this);
      }, "kill")),
      s
    );
  })();
Nt(as.prototype, {
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
var vt = (function (s) {
  hc(e, s);
  function e(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = s.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = bt(i.sortChildren)),
      xe && ci(i.parent || xe, Si(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Mc(Si(n), i.scrollTrigger),
      n
    );
  }
  a(e, "Timeline");
  var t = e.prototype;
  return (
    (t.to = a(function (r, n, o) {
      return Vn(0, arguments, this), this;
    }, "to")),
    (t.from = a(function (r, n, o) {
      return Vn(1, arguments, this), this;
    }, "from")),
    (t.fromTo = a(function (r, n, o, l) {
      return Vn(2, arguments, this), this;
    }, "fromTo")),
    (t.set = a(function (r, n, o) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Bn(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new ze(r, n, Wt(this, o), 1),
        this
      );
    }, "set")),
    (t.call = a(function (r, n, o) {
      return ci(this, ze.delayedCall(0, r, n), o);
    }, "call")),
    (t.staggerTo = a(function (r, n, o, l, u, c, f) {
      return (
        (o.duration = n),
        (o.stagger = o.stagger || l),
        (o.onComplete = c),
        (o.onCompleteParams = f),
        (o.parent = this),
        new ze(r, o, Wt(this, u)),
        this
      );
    }, "staggerTo")),
    (t.staggerFrom = a(function (r, n, o, l, u, c, f) {
      return (
        (o.runBackwards = 1),
        (Bn(o).immediateRender = bt(o.immediateRender)),
        this.staggerTo(r, n, o, l, u, c, f)
      );
    }, "staggerFrom")),
    (t.staggerFromTo = a(function (r, n, o, l, u, c, f, d) {
      return (
        (l.startAt = o),
        (Bn(l).immediateRender = bt(l.immediateRender)),
        this.staggerTo(r, n, l, u, c, f, d)
      );
    }, "staggerFromTo")),
    (t.render = a(function (r, n, o) {
      var l = this._time,
        u = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        f = r <= 0 ? 0 : Re(r),
        d = this._zTime < 0 != r < 0 && (this._initted || !c),
        p,
        h,
        g,
        m,
        _,
        b,
        w,
        y,
        v,
        S,
        k,
        C;
      if (
        (this !== xe && f > u && r >= 0 && (f = u), f !== this._tTime || o || d)
      ) {
        if (
          (l !== this._time &&
            c &&
            ((f += this._time - l), (r += this._time - l)),
          (p = f),
          (v = this._start),
          (y = this._ts),
          (b = !y),
          d && (c || (l = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((k = this._yoyo),
            (_ = c + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(_ * 100 + r, n, o);
          if (
            ((p = Re(f % _)),
            f === u
              ? ((m = this._repeat), (p = c))
              : ((S = Re(f / _)),
                (m = ~~S),
                m && m === S && ((p = c), m--),
                p > c && (p = c)),
            (S = pn(this._tTime, _)),
            !l &&
              this._tTime &&
              S !== m &&
              this._tTime - S * _ - this._dur <= 0 &&
              (S = m),
            k && m & 1 && ((p = c - p), (C = 1)),
            m !== S && !this._lock)
          ) {
            var T = k && S & 1,
              A = T === (k && m & 1);
            if (
              (m < S && (T = !T),
              (l = T ? 0 : f % c ? c : f),
              (this._lock = 1),
              (this.render(l || (C ? 0 : Re(m * _)), n, !c)._lock = 0),
              (this._tTime = f),
              !n && this.parent && It(this, "onRepeat"),
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
                (l = T ? c : -1e-4),
                this.render(l, !0),
                this.vars.repeatRefresh && !C && this.invalidate()),
              (this._lock = 0),
              !this._ts && !b)
            )
              return this;
            Hc(this, C);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((w = Kp(this, Re(l), Re(p))), w && (f -= p - (p = w._start))),
          (this._tTime = f),
          (this._time = p),
          (this._act = !y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (l = 0)),
          !l && f && !n && !S && (It(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (p >= l && r >= 0)
          for (h = this._first; h; ) {
            if (
              ((g = h._next), (h._act || p >= h._start) && h._ts && w !== h)
            ) {
              if (h.parent !== this) return this.render(r, n, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (p - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (p - h._start) * h._ts,
                  n,
                  o
                ),
                p !== this._time || (!this._ts && !b))
              ) {
                (w = 0), g && (f += this._zTime = -1e-8);
                break;
              }
            }
            h = g;
          }
        else {
          h = this._last;
          for (var P = r < 0 ? r : p; h; ) {
            if (((g = h._prev), (h._act || P <= h._end) && h._ts && w !== h)) {
              if (h.parent !== this) return this.render(r, n, o);
              if (
                (h.render(
                  h._ts > 0
                    ? (P - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (P - h._start) * h._ts,
                  n,
                  o || (Je && el(h))
                ),
                p !== this._time || (!this._ts && !b))
              ) {
                (w = 0), g && (f += this._zTime = P ? -1e-8 : lt);
                break;
              }
            }
            h = g;
          }
        }
        if (
          w &&
          !n &&
          (this.pause(),
          (w.render(p >= l ? 0 : -1e-8)._zTime = p >= l ? 1 : -1),
          this._ts)
        )
          return (this._start = v), bo(this), this.render(r, n, o);
        this._onUpdate && !n && It(this, "onUpdate", !0),
          ((f === u && this._tTime >= this.totalDuration()) || (!f && l)) &&
            (v === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) &&
                ((f === u && this._ts > 0) || (!f && this._ts < 0)) &&
                ji(this, 1),
              !n &&
                !(r < 0 && !l) &&
                (f || l || !u) &&
                (It(
                  this,
                  f === u && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < u && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }, "render")),
    (t.add = a(function (r, n) {
      var o = this;
      if ((Oi(n) || (n = Wt(this, n, r)), !(r instanceof as))) {
        if (ct(r))
          return (
            r.forEach(function (l) {
              return o.add(l, n);
            }),
            this
          );
        if (Ye(r)) return this.addLabel(r, n);
        if (ke(r)) r = ze.delayedCall(0, r);
        else return this;
      }
      return this !== r ? ci(this, r, n) : this;
    }, "add")),
    (t.getChildren = a(function (r, n, o, l) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        o === void 0 && (o = !0),
        l === void 0 && (l = -1e8);
      for (var u = [], c = this._first; c; )
        c._start >= l &&
          (c instanceof ze
            ? n && u.push(c)
            : (o && u.push(c), r && u.push.apply(u, c.getChildren(!0, n, o)))),
          (c = c._next);
      return u;
    }, "getChildren")),
    (t.getById = a(function (r) {
      for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
        if (n[o].vars.id === r) return n[o];
    }, "getById")),
    (t.remove = a(function (r) {
      return Ye(r)
        ? this.removeLabel(r)
        : ke(r)
        ? this.killTweensOf(r)
        : (r.parent === this && wo(this, r),
          r === this._recent && (this._recent = this._last),
          vr(this));
    }, "remove")),
    (t.totalTime = a(function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Re(
              Lt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          s.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }, "totalTime")),
    (t.addLabel = a(function (r, n) {
      return (this.labels[r] = Wt(this, n)), this;
    }, "addLabel")),
    (t.removeLabel = a(function (r) {
      return delete this.labels[r], this;
    }, "removeLabel")),
    (t.addPause = a(function (r, n, o) {
      var l = ze.delayedCall(0, n || ns, o);
      return (
        (l.data = "isPause"), (this._hasPause = 1), ci(this, l, Wt(this, r))
      );
    }, "addPause")),
    (t.removePause = a(function (r) {
      var n = this._first;
      for (r = Wt(this, r); n; )
        n._start === r && n.data === "isPause" && ji(n), (n = n._next);
    }, "removePause")),
    (t.killTweensOf = a(function (r, n, o) {
      for (var l = this.getTweensOf(r, o), u = l.length; u--; )
        Vi !== l[u] && l[u].kill(r, n);
      return this;
    }, "killTweensOf")),
    (t.getTweensOf = a(function (r, n) {
      for (var o = [], l = Yt(r), u = this._first, c = Oi(n), f; u; )
        u instanceof ze
          ? Wp(u._targets, l) &&
            (c
              ? (!Vi || (u._initted && u._ts)) &&
                u.globalTime(0) <= n &&
                u.globalTime(u.totalDuration()) > n
              : !n || u.isActive()) &&
            o.push(u)
          : (f = u.getTweensOf(l, n)).length && o.push.apply(o, f),
          (u = u._next);
      return o;
    }, "getTweensOf")),
    (t.tweenTo = a(function (r, n) {
      n = n || {};
      var o = this,
        l = Wt(o, r),
        u = n,
        c = u.startAt,
        f = u.onStart,
        d = u.onStartParams,
        p = u.immediateRender,
        h,
        g = ze.to(
          o,
          Nt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: l,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (l - (c && "time" in c ? c.time : o._time)) / o.timeScale()
                ) ||
                lt,
              onStart: a(function () {
                if ((o.pause(), !h)) {
                  var _ =
                    n.duration ||
                    Math.abs(
                      (l - (c && "time" in c ? c.time : o._time)) /
                        o.timeScale()
                    );
                  g._dur !== _ && gn(g, _, 0, 1).render(g._time, !0, !0),
                    (h = 1);
                }
                f && f.apply(g, d || []);
              }, "onStart"),
            },
            n
          )
        );
      return p ? g.render(0) : g;
    }, "tweenTo")),
    (t.tweenFromTo = a(function (r, n, o) {
      return this.tweenTo(n, Nt({ startAt: { time: Wt(this, r) } }, o));
    }, "tweenFromTo")),
    (t.recent = a(function () {
      return this._recent;
    }, "recent")),
    (t.nextLabel = a(function (r) {
      return r === void 0 && (r = this._time), Zl(this, Wt(this, r));
    }, "nextLabel")),
    (t.previousLabel = a(function (r) {
      return r === void 0 && (r = this._time), Zl(this, Wt(this, r), 1);
    }, "previousLabel")),
    (t.currentLabel = a(function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + lt);
    }, "currentLabel")),
    (t.shiftChildren = a(function (r, n, o) {
      o === void 0 && (o = 0);
      for (var l = this._first, u = this.labels, c; l; )
        l._start >= o && ((l._start += r), (l._end += r)), (l = l._next);
      if (n) for (c in u) u[c] >= o && (u[c] += r);
      return vr(this);
    }, "shiftChildren")),
    (t.invalidate = a(function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return s.prototype.invalidate.call(this, r);
    }, "invalidate")),
    (t.clear = a(function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, o; n; ) (o = n._next), this.remove(n), (n = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        vr(this)
      );
    }, "clear")),
    (t.totalDuration = a(function (r) {
      var n = 0,
        o = this,
        l = o._last,
        u = gi,
        c,
        f,
        d;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (d = o.parent; l; )
          (c = l._prev),
            l._dirty && l.totalDuration(),
            (f = l._start),
            f > u && o._sort && l._ts && !o._lock
              ? ((o._lock = 1), (ci(o, l, f - l._delay, 1)._lock = 0))
              : (u = f),
            f < 0 &&
              l._ts &&
              ((n -= f),
              ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                ((o._start += f / o._ts), (o._time -= f), (o._tTime -= f)),
              o.shiftChildren(-f, !1, -1 / 0),
              (u = 0)),
            l._end > n && l._ts && (n = l._end),
            (l = c);
        gn(o, o === xe && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }, "totalDuration")),
    (e.updateRoot = a(function (r) {
      if ((xe._ts && (Tc(xe, ro(r, xe)), (Sc = Lt.frame)), Lt.frame >= Xl)) {
        Xl += zt.autoSleep || 120;
        var n = xe._first;
        if ((!n || !n._ts) && zt.autoSleep && Lt._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || Lt.sleep();
        }
      }
    }, "updateRoot")),
    e
  );
})(as);
Nt(vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var dg = a(function (e, t, i, r, n, o, l) {
    var u = new xt(this._pt, e, t, 0, 1, Qc, null, n),
      c = 0,
      f = 0,
      d,
      p,
      h,
      g,
      m,
      _,
      b,
      w;
    for (
      u.b = i,
        u.e = r,
        i += "",
        r += "",
        (b = ~r.indexOf("random(")) && (r = ss(r)),
        o && ((w = [i, r]), o(w, e, t), (i = w[0]), (r = w[1])),
        p = i.match(zo) || [];
      (d = zo.exec(r));

    )
      (g = d[0]),
        (m = r.substring(c, d.index)),
        h ? (h = (h + 1) % 5) : m.substr(-5) === "rgba(" && (h = 1),
        g !== p[f++] &&
          ((_ = parseFloat(p[f - 1]) || 0),
          (u._pt = {
            _next: u._pt,
            p: m || f === 1 ? m : ",",
            s: _,
            c: g.charAt(1) === "=" ? Jr(_, g) - _ : parseFloat(g) - _,
            m: h && h < 4 ? Math.round : 0,
          }),
          (c = zo.lastIndex));
    return (
      (u.c = c < r.length ? r.substring(c, r.length) : ""),
      (u.fp = l),
      (vc.test(r) || b) && (u.e = 0),
      (this._pt = u),
      u
    );
  }, "_addComplexStringPropTween"),
  tl = a(function (e, t, i, r, n, o, l, u, c, f) {
    ke(r) && (r = r(n || 0, e, o));
    var d = e[t],
      p =
        i !== "get"
          ? i
          : ke(d)
          ? c
            ? e[
                t.indexOf("set") || !ke(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](c)
            : e[t]()
          : d,
      h = ke(d) ? (c ? vg : Kc) : rl,
      g;
    if (
      (Ye(r) &&
        (~r.indexOf("random(") && (r = ss(r)),
        r.charAt(1) === "=" &&
          ((g = Jr(p, r) + (ot(p) || 0)), (g || g === 0) && (r = g))),
      !f || p !== r || _a)
    )
      return !isNaN(p * r) && r !== ""
        ? ((g = new xt(
            this._pt,
            e,
            t,
            +p || 0,
            r - (p || 0),
            typeof d == "boolean" ? yg : Zc,
            0,
            h
          )),
          c && (g.fp = c),
          l && g.modifier(l, this, e),
          (this._pt = g))
        : (!d && !(t in e) && Ka(t, r),
          dg.call(this, e, t, p, r, h, u || zt.stringFilter, c));
  }, "_addPropTween"),
  hg = a(function (e, t, i, r, n) {
    if (
      (ke(e) && (e = qn(e, n, t, i, r)),
      !vi(e) || (e.style && e.nodeType) || ct(e) || gc(e))
    )
      return Ye(e) ? qn(e, n, t, i, r) : e;
    var o = {},
      l;
    for (l in e) o[l] = qn(e[l], n, t, i, r);
    return o;
  }, "_processVars"),
  Xc = a(function (e, t, i, r, n, o) {
    var l, u, c, f;
    if (
      At[e] &&
      (l = new At[e]()).init(
        n,
        l.rawVars ? t[e] : hg(t[e], r, n, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = u = new xt(i._pt, n, e, 0, 1, l.render, l, 0, l.priority)),
      i !== jr)
    )
      for (c = i._ptLookup[i._targets.indexOf(n)], f = l._props.length; f--; )
        c[l._props[f]] = u;
    return l;
  }, "_checkPlugin"),
  Vi,
  _a,
  il = a(function s(e, t, i) {
    var r = e.vars,
      n = r.ease,
      o = r.startAt,
      l = r.immediateRender,
      u = r.lazy,
      c = r.onUpdate,
      f = r.runBackwards,
      d = r.yoyoEase,
      p = r.keyframes,
      h = r.autoRevert,
      g = e._dur,
      m = e._startAt,
      _ = e._targets,
      b = e.parent,
      w = b && b.data === "nested" ? b.vars.targets : _,
      y = e._overwrite === "auto" && !Ya,
      v = e.timeline,
      S,
      k,
      C,
      T,
      A,
      P,
      z,
      x,
      M,
      O,
      D,
      R,
      N;
    if (
      (v && (!p || !n) && (n = "none"),
      (e._ease = _r(n, dn.ease)),
      (e._yEase = d ? Wc(_r(d === !0 ? n : d, dn.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !v && !!r.runBackwards),
      !v || (p && !r.stagger))
    ) {
      if (
        ((x = _[0] ? mr(_[0]).harness : 0),
        (R = x && r[x.prop]),
        (S = io(r, Za)),
        m &&
          (m._zTime < 0 && m.progress(1),
          t < 0 && f && l && !h ? m.render(-1, !0) : m.revert(f && g ? Bs : qp),
          (m._lazy = 0)),
        o)
      ) {
        if (
          (ji(
            (e._startAt = ze.set(
              _,
              Nt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: b,
                  immediateRender: !0,
                  lazy: !m && bt(u),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
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
          t < 0 && (Je || (!l && !h)) && e._startAt.revert(Bs),
          l && g && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && g && !m) {
        if (
          (t && (l = !1),
          (C = Nt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: l && !m && bt(u),
              immediateRender: l,
              stagger: 0,
              parent: b,
            },
            S
          )),
          R && (C[x.prop] = R),
          ji((e._startAt = ze.set(_, C))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Je ? e._startAt.revert(Bs) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !l)
        )
          s(e._startAt, lt, lt);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, u = (g && bt(u)) || (u && !g), k = 0;
        k < _.length;
        k++
      ) {
        if (
          ((A = _[k]),
          (z = A._gsap || Ja(_)[k]._gsap),
          (e._ptLookup[k] = O = {}),
          da[z.id] && Gi.length && to(),
          (D = w === _ ? k : w.indexOf(A)),
          x &&
            (M = new x()).init(A, R || S, e, D, w) !== !1 &&
            ((e._pt = T =
              new xt(e._pt, A, M.name, 0, 1, M.render, M, 0, M.priority)),
            M._props.forEach(function (B) {
              O[B] = T;
            }),
            M.priority && (P = 1)),
          !x || R)
        )
          for (C in S)
            At[C] && (M = Xc(C, S, e, D, A, w))
              ? M.priority && (P = 1)
              : (O[C] = T =
                  tl.call(e, A, C, "get", S[C], D, w, 0, r.stringFilter));
        e._op && e._op[k] && e.kill(A, e._op[k]),
          y &&
            e._pt &&
            ((Vi = e),
            xe.killTweensOf(A, O, e.globalTime(t)),
            (N = !e.parent),
            (Vi = 0)),
          e._pt && u && (da[z.id] = 1);
      }
      P && Jc(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !N),
      p && t <= 0 && v.render(gi, !0, !0);
  }, "_initTween"),
  pg = a(function (e, t, i, r, n, o, l, u) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      f,
      d,
      p,
      h;
    if (!c)
      for (
        c = e._ptCache[t] = [], p = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((f = p[h][t]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== t && f.fp !== t; ) f = f._next;
        if (!f)
          return (
            (_a = 1),
            (e.vars[t] = "+=0"),
            il(e, l),
            (_a = 0),
            u ? rs(t + " not eligible for reset") : 1
          );
        c.push(f);
      }
    for (h = c.length; h--; )
      (d = c[h]),
        (f = d._pt || d),
        (f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c),
        (f.c = i - f.s),
        d.e && (d.e = Ae(i) + ot(d.e)),
        d.b && (d.b = f.s + ot(d.b));
  }, "_updatePropTweens"),
  gg = a(function (e, t) {
    var i = e[0] ? mr(e[0]).harness : 0,
      r = i && i.aliases,
      n,
      o,
      l,
      u;
    if (!r) return t;
    n = hn({}, t);
    for (o in r)
      if (o in n) for (u = r[o].split(","), l = u.length; l--; ) n[u[l]] = n[o];
    return n;
  }, "_addAliasesToVars"),
  mg = a(function (e, t, i, r) {
    var n = t.ease || r || "power1.inOut",
      o,
      l;
    if (ct(t))
      (l = i[e] || (i[e] = [])),
        t.forEach(function (u, c) {
          return l.push({ t: (c / (t.length - 1)) * 100, v: u, e: n });
        });
    else
      for (o in t)
        (l = i[o] || (i[o] = [])),
          o === "ease" || l.push({ t: parseFloat(e), v: t[o], e: n });
  }, "_parseKeyframe"),
  qn = a(function (e, t, i, r, n) {
    return ke(e)
      ? e.call(t, i, r, n)
      : Ye(e) && ~e.indexOf("random(")
      ? ss(e)
      : e;
  }, "_parseFuncOrString"),
  jc = Qa + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Uc = {};
St(jc + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (Uc[s] = 1);
});
var ze = (function (s) {
  hc(e, s);
  function e(i, r, n, o) {
    var l;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (l = s.call(this, o ? r : Bn(r)) || this);
    var u = l.vars,
      c = u.duration,
      f = u.delay,
      d = u.immediateRender,
      p = u.stagger,
      h = u.overwrite,
      g = u.keyframes,
      m = u.defaults,
      _ = u.scrollTrigger,
      b = u.yoyoEase,
      w = r.parent || xe,
      y = (ct(i) || gc(i) ? Oi(i[0]) : "length" in r) ? [i] : Yt(i),
      v,
      S,
      k,
      C,
      T,
      A,
      P,
      z;
    if (
      ((l._targets = y.length
        ? Ja(y)
        : rs(
            "GSAP target " + i + " not found. https://gsap.com",
            !zt.nullTargetWarn
          ) || []),
      (l._ptLookup = []),
      (l._overwrite = h),
      g || p || ws(c) || ws(f))
    ) {
      if (
        ((r = l.vars),
        (v = l.timeline =
          new vt({
            data: "nested",
            defaults: m || {},
            targets: w && w.data === "nested" ? w.vars.targets : y,
          })),
        v.kill(),
        (v.parent = v._dp = Si(l)),
        (v._start = 0),
        p || ws(c) || ws(f))
      ) {
        if (((C = y.length), (P = p && Dc(p)), vi(p)))
          for (T in p) ~jc.indexOf(T) && (z || (z = {}), (z[T] = p[T]));
        for (S = 0; S < C; S++)
          (k = io(r, Uc)),
            (k.stagger = 0),
            b && (k.yoyoEase = b),
            z && hn(k, z),
            (A = y[S]),
            (k.duration = +qn(c, Si(l), S, A, y)),
            (k.delay = (+qn(f, Si(l), S, A, y) || 0) - l._delay),
            !p &&
              C === 1 &&
              k.delay &&
              ((l._delay = f = k.delay), (l._start += f), (k.delay = 0)),
            v.to(A, k, P ? P(S, A, y) : 0),
            (v._ease = Qe.none);
        v.duration() ? (c = f = 0) : (l.timeline = 0);
      } else if (g) {
        Bn(Nt(v.vars.defaults, { ease: "none" })),
          (v._ease = _r(g.ease || r.ease || "none"));
        var x = 0,
          M,
          O,
          D;
        if (ct(g))
          g.forEach(function (R) {
            return v.to(y, R, ">");
          }),
            v.duration();
        else {
          k = {};
          for (T in g)
            T === "ease" || T === "easeEach" || mg(T, g[T], k, g.easeEach);
          for (T in k)
            for (
              M = k[T].sort(function (R, N) {
                return R.t - N.t;
              }),
                x = 0,
                S = 0;
              S < M.length;
              S++
            )
              (O = M[S]),
                (D = {
                  ease: O.e,
                  duration: ((O.t - (S ? M[S - 1].t : 0)) / 100) * c,
                }),
                (D[T] = O.v),
                v.to(y, D, x),
                (x += D.duration);
          v.duration() < c && v.to({}, { duration: c - v.duration() });
        }
      }
      c || l.duration((c = v.duration()));
    } else l.timeline = 0;
    return (
      h === !0 && !Ya && ((Vi = Si(l)), xe.killTweensOf(y), (Vi = 0)),
      ci(w, Si(l), n),
      r.reversed && l.reverse(),
      r.paused && l.paused(!0),
      (d ||
        (!c &&
          !g &&
          l._start === Re(w._time) &&
          bt(d) &&
          Xp(Si(l)) &&
          w.data !== "nested")) &&
        ((l._tTime = -1e-8), l.render(Math.max(0, -f) || 0)),
      _ && Mc(Si(l), _),
      l
    );
  }
  a(e, "Tween");
  var t = e.prototype;
  return (
    (t.render = a(function (r, n, o) {
      var l = this._time,
        u = this._tDur,
        c = this._dur,
        f = r < 0,
        d = r > u - lt && !f ? u : r < lt ? 0 : r,
        p,
        h,
        g,
        m,
        _,
        b,
        w,
        y,
        v;
      if (!c) Up(this, r, n, o);
      else if (
        d !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f) ||
        this._lazy
      ) {
        if (((p = d), (y = this.timeline), this._repeat)) {
          if (((m = c + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(m * 100 + r, n, o);
          if (
            ((p = Re(d % m)),
            d === u
              ? ((g = this._repeat), (p = c))
              : ((_ = Re(d / m)),
                (g = ~~_),
                g && g === _ ? ((p = c), g--) : p > c && (p = c)),
            (b = this._yoyo && g & 1),
            b && ((v = this._yEase), (p = c - p)),
            (_ = pn(this._tTime, m)),
            p === l && !o && this._initted && g === _)
          )
            return (this._tTime = d), this;
          g !== _ &&
            (y && this._yEase && Hc(y, b),
            this.vars.repeatRefresh &&
              !b &&
              !this._lock &&
              p !== m &&
              this._initted &&
              ((this._lock = o = 1),
              (this.render(Re(m * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ac(this, f ? r : p, o, n, d)) return (this._tTime = 0), this;
          if (l !== this._time && !(o && this.vars.repeatRefresh && g !== _))
            return this;
          if (c !== this._dur) return this.render(r, n, o);
        }
        if (
          ((this._tTime = d),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = w = (v || this._ease)(p / c)),
          this._from && (this.ratio = w = 1 - w),
          !l && d && !n && !_ && (It(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (h = this._pt; h; ) h.r(w, h.d), (h = h._next);
        (y && y.render(r < 0 ? r : y._dur * y._ease(p / this._dur), n, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (f && ha(this, r, n, o), It(this, "onUpdate")),
          this._repeat &&
            g !== _ &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            It(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (f && !this._onUpdate && ha(this, r, !0, !0),
            (r || !c) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              ji(this, 1),
            !n &&
              !(f && !l) &&
              (d || l || b) &&
              (It(this, d === u ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < u && this.timeScale() > 0) && this._prom()));
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
        s.prototype.invalidate.call(this, r)
      );
    }, "invalidate")),
    (t.resetTo = a(function (r, n, o, l, u) {
      os || Lt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || il(this, c),
        (f = this._ease(c / this._dur)),
        pg(this, r, n, o, l, f, c, u)
          ? this.resetTo(r, n, o, l, 1)
          : (So(this, 0),
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
    }, "resetTo")),
    (t.kill = a(function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? An(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, Vi && Vi.vars.overwrite !== !0)
            ._first || An(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            gn(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var l = this._targets,
        u = r ? Yt(r) : l,
        c = this._ptLookup,
        f = this._pt,
        d,
        p,
        h,
        g,
        m,
        _,
        b;
      if ((!n || n === "all") && Gp(l, u))
        return n === "all" && (this._pt = 0), An(this);
      for (
        d = this._op = this._op || [],
          n !== "all" &&
            (Ye(n) &&
              ((m = {}),
              St(n, function (w) {
                return (m[w] = 1);
              }),
              (n = m)),
            (n = gg(l, n))),
          b = l.length;
        b--;

      )
        if (~u.indexOf(l[b])) {
          (p = c[b]),
            n === "all"
              ? ((d[b] = n), (g = p), (h = {}))
              : ((h = d[b] = d[b] || {}), (g = n));
          for (m in g)
            (_ = p && p[m]),
              _ &&
                ((!("kill" in _.d) || _.d.kill(m) === !0) && wo(this, _, "_pt"),
                delete p[m]),
              h !== "all" && (h[m] = 1);
        }
      return this._initted && !this._pt && f && An(this), this;
    }, "kill")),
    (e.to = a(function (r, n) {
      return new e(r, n, arguments[2]);
    }, "to")),
    (e.from = a(function (r, n) {
      return Vn(1, arguments);
    }, "from")),
    (e.delayedCall = a(function (r, n, o, l) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: l,
      });
    }, "delayedCall")),
    (e.fromTo = a(function (r, n, o) {
      return Vn(2, arguments);
    }, "fromTo")),
    (e.set = a(function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
    }, "set")),
    (e.killTweensOf = a(function (r, n, o) {
      return xe.killTweensOf(r, n, o);
    }, "killTweensOf")),
    e
  );
})(as);
Nt(ze.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
St("staggerTo,staggerFrom,staggerFromTo", function (s) {
  ze[s] = function () {
    var e = new vt(),
      t = ga.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var rl = a(function (e, t, i) {
    return (e[t] = i);
  }, "_setterPlain"),
  Kc = a(function (e, t, i) {
    return e[t](i);
  }, "_setterFunc"),
  vg = a(function (e, t, i, r) {
    return e[t](r.fp, i);
  }, "_setterFuncWithParam"),
  _g = a(function (e, t, i) {
    return e.setAttribute(t, i);
  }, "_setterAttribute"),
  nl = a(function (e, t) {
    return ke(e[t]) ? Kc : Xa(e[t]) && e.setAttribute ? _g : rl;
  }, "_getSetter"),
  Zc = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  }, "_renderPlain"),
  yg = a(function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  }, "_renderBoolean"),
  Qc = a(function (e, t) {
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
  sl = a(function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  }, "_renderPropTweens"),
  wg = a(function (e, t, i, r) {
    for (var n = this._pt, o; n; )
      (o = n._next), n.p === r && n.modifier(e, t, i), (n = o);
  }, "_addPluginModifier"),
  bg = a(function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? wo(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  }, "_killPropTweensOf"),
  Sg = a(function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  }, "_setterWithModifier"),
  Jc = a(function (e) {
    for (var t = e._pt, i, r, n, o; t; ) {
      for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (n = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = n;
  }, "_sortPropTweensByPriority"),
  xt = (function () {
    function s(t, i, r, n, o, l, u, c, f) {
      (this.t = i),
        (this.s = n),
        (this.c = o),
        (this.p = r),
        (this.r = l || Zc),
        (this.d = u || this),
        (this.set = c || rl),
        (this.pr = f || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    a(s, "PropTween");
    var e = s.prototype;
    return (
      (e.modifier = a(function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Sg),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }, "modifier")),
      s
    );
  })();
St(
  Qa +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (Za[s] = 1);
  }
);
Rt.TweenMax = Rt.TweenLite = ze;
Rt.TimelineLite = Rt.TimelineMax = vt;
xe = new vt({
  sortChildren: !1,
  defaults: dn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
zt.stringFilter = $c;
var yr = [],
  qs = {},
  xg = [],
  Jl = 0,
  Tg = 0,
  Vo = a(function (e) {
    return (qs[e] || xg).map(function (t) {
      return t();
    });
  }, "_dispatch"),
  ya = a(function () {
    var e = Date.now(),
      t = [];
    e - Jl > 2 &&
      (Vo("matchMediaInit"),
      yr.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          o,
          l,
          u,
          c;
        for (l in r)
          (o = li.matchMedia(r[l]).matches),
            o && (u = 1),
            o !== n[l] && ((n[l] = o), (c = 1));
        c && (i.revert(), u && t.push(i));
      }),
      Vo("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (Jl = e),
      Vo("matchMedia"));
  }, "_onMediaChange"),
  ef = (function () {
    function s(t, i) {
      (this.selector = i && ma(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Tg++),
        t && this.add(t);
    }
    a(s, "Context");
    var e = s.prototype;
    return (
      (e.add = a(function (i, r, n) {
        ke(i) && ((n = r), (r = i), (i = ke));
        var o = this,
          l = a(function () {
            var c = we,
              f = o.selector,
              d;
            return (
              c && c !== o && c.data.push(o),
              n && (o.selector = ma(n)),
              (we = o),
              (d = r.apply(o, arguments)),
              ke(d) && o._r.push(d),
              (we = c),
              (o.selector = f),
              (o.isReverted = !1),
              d
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
            return r instanceof s
              ? i.push.apply(i, r.getTweens())
              : r instanceof ze &&
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
        var n = this;
        if (
          (i
            ? (function () {
                for (var l = n.getTweens(), u = n.data.length, c; u--; )
                  (c = n.data[u]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (f) {
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
                    u = n.data.length;
                  u--;

                )
                  (c = n.data[u]),
                    c instanceof vt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof ze) && c.revert && c.revert(i);
                n._r.forEach(function (f) {
                  return f(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (l) {
                return l.kill && l.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = yr.length; o--; )
            yr[o].id === this.id && yr.splice(o, 1);
      }, "kill")),
      (e.revert = a(function (i) {
        this.kill(i || {});
      }, "revert")),
      s
    );
  })(),
  Eg = (function () {
    function s(t) {
      (this.contexts = []), (this.scope = t), we && we.data.push(this);
    }
    a(s, "MatchMedia");
    var e = s.prototype;
    return (
      (e.add = a(function (i, r, n) {
        vi(i) || (i = { matches: i });
        var o = new ef(0, n || this.scope),
          l = (o.conditions = {}),
          u,
          c,
          f;
        we && !o.selector && (o.selector = we.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (c in i)
          c === "all"
            ? (f = 1)
            : ((u = li.matchMedia(i[c])),
              u &&
                (yr.indexOf(o) < 0 && yr.push(o),
                (l[c] = u.matches) && (f = 1),
                u.addListener
                  ? u.addListener(ya)
                  : u.addEventListener("change", ya)));
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
      s
    );
  })(),
  no = {
    registerPlugin: a(function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return Bc(r);
      });
    }, "registerPlugin"),
    timeline: a(function (e) {
      return new vt(e);
    }, "timeline"),
    getTweensOf: a(function (e, t) {
      return xe.getTweensOf(e, t);
    }, "getTweensOf"),
    getProperty: a(function (e, t, i, r) {
      Ye(e) && (e = Yt(e)[0]);
      var n = mr(e || {}).get,
        o = i ? kc : Ec;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o(((At[t] && At[t].get) || n)(e, t, i, r))
            : function (l, u, c) {
                return o(((At[l] && At[l].get) || n)(e, l, u, c));
              })
      );
    }, "getProperty"),
    quickSetter: a(function (e, t, i) {
      if (((e = Yt(e)), e.length > 1)) {
        var r = e.map(function (f) {
            return Et.quickSetter(f, t, i);
          }),
          n = r.length;
        return function (f) {
          for (var d = n; d--; ) r[d](f);
        };
      }
      e = e[0] || {};
      var o = At[t],
        l = mr(e),
        u = (l.harness && (l.harness.aliases || {})[t]) || t,
        c = o
          ? function (f) {
              var d = new o();
              (jr._pt = 0),
                d.init(e, i ? f + i : f, jr, 0, [e]),
                d.render(1, d),
                jr._pt && sl(1, jr);
            }
          : l.set(e, u);
      return o
        ? c
        : function (f) {
            return c(e, u, i ? f + i : f, l, 1);
          };
    }, "quickSetter"),
    quickTo: a(function (e, t, i) {
      var r,
        n = Et.to(
          e,
          Nt(
            ((r = {}), (r[t] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = a(function (u, c, f) {
          return n.resetTo(t, u, c, f);
        }, "func");
      return (o.tween = n), o;
    }, "quickTo"),
    isTweening: a(function (e) {
      return xe.getTweensOf(e, !0).length > 0;
    }, "isTweening"),
    defaults: a(function (e) {
      return e && e.ease && (e.ease = _r(e.ease, dn.ease)), jl(dn, e || {});
    }, "defaults"),
    config: a(function (e) {
      return jl(zt, e || {});
    }, "config"),
    registerEffect: a(function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        n = e.defaults,
        o = e.extendTimeline;
      (r || "").split(",").forEach(function (l) {
        return (
          l && !At[l] && !Rt[l] && rs(t + " effect requires " + l + " plugin.")
        );
      }),
        (Ro[t] = function (l, u, c) {
          return i(Yt(l), Nt(u || {}, n), c);
        }),
        o &&
          (vt.prototype[t] = function (l, u, c) {
            return this.add(Ro[t](l, vi(u) ? u : (c = u) && {}, this), c);
          });
    }, "registerEffect"),
    registerEase: a(function (e, t) {
      Qe[e] = _r(t);
    }, "registerEase"),
    parseEase: a(function (e, t) {
      return arguments.length ? _r(e, t) : Qe;
    }, "parseEase"),
    getById: a(function (e) {
      return xe.getById(e);
    }, "getById"),
    exportRoot: a(function (e, t) {
      e === void 0 && (e = {});
      var i = new vt(e),
        r,
        n;
      for (
        i.smoothChildTiming = bt(e.smoothChildTiming),
          xe.remove(i),
          i._dp = 0,
          i._time = i._tTime = xe._time,
          r = xe._first;
        r;

      )
        (n = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof ze &&
              r.vars.onComplete === r._targets[0]
            )) &&
            ci(i, r, r._start - r._delay),
          (r = n);
      return ci(xe, i, 0), i;
    }, "exportRoot"),
    context: a(function (e, t) {
      return e ? new ef(e, t) : we;
    }, "context"),
    matchMedia: a(function (e) {
      return new Eg(e);
    }, "matchMedia"),
    matchMediaRefresh: a(function () {
      return (
        yr.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || ya()
      );
    }, "matchMediaRefresh"),
    addEventListener: a(function (e, t) {
      var i = qs[e] || (qs[e] = []);
      ~i.indexOf(t) || i.push(t);
    }, "addEventListener"),
    removeEventListener: a(function (e, t) {
      var i = qs[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    }, "removeEventListener"),
    utils: {
      wrap: rg,
      wrapYoyo: ng,
      distribute: Dc,
      random: zc,
      snap: Ic,
      normalize: ig,
      getUnit: ot,
      clamp: Qp,
      splitColor: Vc,
      toArray: Yt,
      selector: ma,
      mapRange: Nc,
      pipe: eg,
      unitize: tg,
      interpolate: sg,
      shuffle: Lc,
    },
    install: wc,
    effects: Ro,
    ticker: Lt,
    updateRoot: vt.updateRoot,
    plugins: At,
    globalTimeline: xe,
    core: {
      PropTween: xt,
      globals: bc,
      Tween: ze,
      Timeline: vt,
      Animation: as,
      getCache: mr,
      _removeLinkedListItem: wo,
      reverting: a(function () {
        return Je;
      }, "reverting"),
      context: a(function (e) {
        return e && we && (we.data.push(e), (e._ctx = we)), we;
      }, "context"),
      suppressOverwrites: a(function (e) {
        return (Ya = e);
      }, "suppressOverwrites"),
    },
  };
St("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (no[s] = ze[s]);
});
Lt.add(vt.updateRoot);
jr = no.to({}, { duration: 0 });
var kg = a(function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  }, "_getPluginPropTween"),
  Cg = a(function (e, t) {
    var i = e._targets,
      r,
      n,
      o;
    for (r in t)
      for (n = i.length; n--; )
        (o = e._ptLookup[n][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = kg(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[n], r));
  }, "_addModifiers"),
  qo = a(function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: a(function (r, n, o) {
        o._onInit = function (l) {
          var u, c;
          if (
            (Ye(n) &&
              ((u = {}),
              St(n, function (f) {
                return (u[f] = 1);
              }),
              (n = u)),
            t)
          ) {
            u = {};
            for (c in n) u[c] = t(n[c]);
            n = u;
          }
          Cg(l, n);
        };
      }, "init"),
    };
  }, "_buildModifierPlugin"),
  Et =
    no.registerPlugin(
      {
        name: "attr",
        init: a(function (e, t, i, r, n) {
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
                n,
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
            Je ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
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
      qo("roundProps", va),
      qo("modifiers"),
      qo("snap", Ic)
    ) || no;
ze.version = vt.version = Et.version = "3.13.0";
yc = 1;
ja() && mn();
var eu,
  qi,
  en,
  ol,
  pr,
  tu,
  al,
  Pg = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Li = {},
  cr = 180 / Math.PI,
  tn = Math.PI / 180,
  Vr = Math.atan2,
  iu = 1e8,
  ll = /([A-Z])/g,
  Mg = /(left|right|width|margin|padding|x)/i,
  Ag = /[\s,\(]\S/,
  di = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  wa = a(function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  }, "_renderCSSProp"),
  Og = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  }, "_renderPropWithEnd"),
  Lg = a(function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  }, "_renderCSSPropWithBeginning"),
  Dg = a(function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  }, "_renderRoundedCSSProp"),
  tf = a(function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  }, "_renderNonTweeningValue"),
  rf = a(function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  }, "_renderNonTweeningValueOnlyAtEnd"),
  Ig = a(function (e, t, i) {
    return (e.style[t] = i);
  }, "_setterCSSStyle"),
  zg = a(function (e, t, i) {
    return e.style.setProperty(t, i);
  }, "_setterCSSProp"),
  Rg = a(function (e, t, i) {
    return (e._gsap[t] = i);
  }, "_setterTransform"),
  Ng = a(function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  }, "_setterScale"),
  Fg = a(function (e, t, i, r, n) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(n, o);
  }, "_setterScaleWithRender"),
  Bg = a(function (e, t, i, r, n) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(n, o);
  }, "_setterTransformWithRender"),
  Te = "transform",
  Tt = Te + "Origin",
  Vg = a(function s(e, t) {
    var i = this,
      r = this.target,
      n = r.style,
      o = r._gsap;
    if (e in Li && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = di[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (l) {
                return (i.tfm[l] = xi(r, l));
              })
            : (this.tfm[e] = o.x ? o[e] : xi(r, e)),
          e === Tt && (this.tfm.zOrigin = o.zOrigin);
      else
        return di.transform.split(",").forEach(function (l) {
          return s.call(i, l, t);
        });
      if (this.props.indexOf(Te) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(Tt, t, "")),
        (e = Te);
    }
    (n || t) && this.props.push(e, t, n[e]);
  }, "_saveStyle"),
  nf = a(function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  }, "_removeIndependentTransforms"),
  qg = a(function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      r = t._gsap,
      n,
      o;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? e[n + 1] === 2
          ? t[e[n]](e[n + 2])
          : (t[e[n]] = e[n + 2])
        : e[n + 2]
        ? (i[e[n]] = e[n + 2])
        : i.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(ll, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (n = al()),
        (!n || !n.isStart) &&
          !i[Te] &&
          (nf(i),
          r.zOrigin &&
            i[Tt] &&
            ((i[Tt] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  }, "_revertStyle"),
  sf = a(function (e, t) {
    var i = { target: e, props: [], revert: qg, save: Vg };
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
  }, "_getStyleSaver"),
  of,
  ba = a(function (e, t) {
    var i = qi.createElementNS
      ? qi.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : qi.createElement(e);
    return i && i.style ? i : qi.createElement(e);
  }, "_createElement"),
  Xt = a(function s(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(ll, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && s(e, vn(t) || t, 1)) ||
      ""
    );
  }, "_getComputedProperty"),
  ru = "O,Moz,ms,Ms,Webkit".split(","),
  vn = a(function (e, t, i) {
    var r = t || pr,
      n = r.style,
      o = 5;
    if (e in n && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(ru[o] + e in n);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? ru[o] : "") + e;
  }, "_checkPropPrefix"),
  Sa = a(function () {
    Pg() &&
      window.document &&
      ((eu = window),
      (qi = eu.document),
      (en = qi.documentElement),
      (pr = ba("div") || { style: {} }),
      ba("div"),
      (Te = vn(Te)),
      (Tt = Te + "Origin"),
      (pr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (of = !!vn("perspective")),
      (al = Et.core.reverting),
      (ol = 1));
  }, "_initCore"),
  nu = a(function (e) {
    var t = e.ownerSVGElement,
      i = ba(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = e.cloneNode(!0),
      n;
    (r.style.display = "block"), i.appendChild(r), en.appendChild(i);
    try {
      n = r.getBBox();
    } catch {}
    return i.removeChild(r), en.removeChild(i), n;
  }, "_getReparentedCloneBBox"),
  su = a(function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  }, "_getAttributeFallbacks"),
  af = a(function (e) {
    var t, i;
    try {
      t = e.getBBox();
    } catch {
      (t = nu(e)), (i = 1);
    }
    return (
      (t && (t.width || t.height)) || i || (t = nu(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +su(e, ["x", "cx", "x1"]) || 0,
            y: +su(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  }, "_getBBox"),
  lf = a(function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && af(e));
  }, "_isSVG"),
  Pr = a(function (e, t) {
    if (t) {
      var i = e.style,
        r;
      t in Li && t !== Tt && (t = Te),
        i.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            i.removeProperty(
              r === "--" ? t : t.replace(ll, "-$1").toLowerCase()
            ))
          : i.removeAttribute(t);
    }
  }, "_removeProperty"),
  $i = a(function (e, t, i, r, n, o) {
    var l = new xt(e._pt, t, i, 0, 1, o ? rf : tf);
    return (e._pt = l), (l.b = r), (l.e = n), e._props.push(i), l;
  }, "_addNonTweeningPT"),
  ou = { deg: 1, rad: 1, turn: 1 },
  $g = { grid: 1, flex: 1 },
  Ui = a(function s(e, t, i, r) {
    var n = parseFloat(i) || 0,
      o = (i + "").trim().substr((n + "").length) || "px",
      l = pr.style,
      u = Mg.test(t),
      c = e.tagName.toLowerCase() === "svg",
      f = (c ? "client" : "offset") + (u ? "Width" : "Height"),
      d = 100,
      p = r === "px",
      h = r === "%",
      g,
      m,
      _,
      b;
    if (r === o || !n || ou[r] || ou[o]) return n;
    if (
      (o !== "px" && !p && (n = s(e, t, i, "px")),
      (b = e.getCTM && lf(e)),
      (h || o === "%") && (Li[t] || ~t.indexOf("adius")))
    )
      return (
        (g = b ? e.getBBox()[u ? "width" : "height"] : e[f]),
        Ae(h ? (n / g) * d : (n / 100) * g)
      );
    if (
      ((l[u ? "width" : "height"] = d + (p ? o : r)),
      (m =
        (r !== "rem" && ~t.indexOf("adius")) ||
        (r === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      b && (m = (e.ownerSVGElement || {}).parentNode),
      (!m || m === qi || !m.appendChild) && (m = qi.body),
      (_ = m._gsap),
      _ && h && _.width && u && _.time === Lt.time && !_.uncache)
    )
      return Ae((n / _.width) * d);
    if (h && (t === "height" || t === "width")) {
      var w = e.style[t];
      (e.style[t] = d + r), (g = e[f]), w ? (e.style[t] = w) : Pr(e, t);
    } else (h || o === "%") && !$g[Xt(m, "display")] && (l.position = Xt(e, "position")), m === e && (l.position = "static"), m.appendChild(pr), (g = pr[f]), m.removeChild(pr), (l.position = "absolute");
    return (
      u && h && ((_ = mr(m)), (_.time = Lt.time), (_.width = m[f])),
      Ae(p ? (g * n) / d : g && n ? (d / g) * n : 0)
    );
  }, "_convertToUnit"),
  xi = a(function (e, t, i, r) {
    var n;
    return (
      ol || Sa(),
      t in di &&
        t !== "transform" &&
        ((t = di[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Li[t] && t !== "transform"
        ? ((n = us(e, r)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : oo(Xt(e, Tt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (so[t] && so[t](e, t, i)) ||
              Xt(e, t) ||
              xc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Ui(e, t, n, i) + i : n
    );
  }, "_get"),
  Wg = a(function (e, t, i, r) {
    if (!i || i === "none") {
      var n = vn(t, e, 1),
        o = n && Xt(e, n, 1);
      o && o !== i
        ? ((t = n), (i = o))
        : t === "borderColor" && (i = Xt(e, "borderTopColor"));
    }
    var l = new xt(this._pt, e.style, t, 0, 1, Qc),
      u = 0,
      c = 0,
      f,
      d,
      p,
      h,
      g,
      m,
      _,
      b,
      w,
      y,
      v,
      S;
    if (
      ((l.b = i),
      (l.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = Xt(e, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((m = e.style[t]),
        (e.style[t] = r),
        (r = Xt(e, t) || r),
        m ? (e.style[t] = m) : Pr(e, t)),
      (f = [i, r]),
      $c(f),
      (i = f[0]),
      (r = f[1]),
      (p = i.match(Xr) || []),
      (S = r.match(Xr) || []),
      S.length)
    ) {
      for (; (d = Xr.exec(r)); )
        (_ = d[0]),
          (w = r.substring(u, d.index)),
          g
            ? (g = (g + 1) % 5)
            : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (g = 1),
          _ !== (m = p[c++] || "") &&
            ((h = parseFloat(m) || 0),
            (v = m.substr((h + "").length)),
            _.charAt(1) === "=" && (_ = Jr(h, _) + v),
            (b = parseFloat(_)),
            (y = _.substr((b + "").length)),
            (u = Xr.lastIndex - y.length),
            y ||
              ((y = y || zt.units[t] || v),
              u === r.length && ((r += y), (l.e += y))),
            v !== y && (h = Ui(e, t, m, y) || 0),
            (l._pt = {
              _next: l._pt,
              p: w || c === 1 ? w : ",",
              s: h,
              c: b - h,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      l.c = u < r.length ? r.substring(u, r.length) : "";
    } else l.r = t === "display" && r === "none" ? rf : tf;
    return vc.test(r) && (l.e = 0), (this._pt = l), l;
  }, "_tweenComplexCSSString"),
  au = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Hg = a(function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = au[i] || i),
      (t[1] = au[r] || r),
      t.join(" ")
    );
  }, "_convertKeywordsToPercentages"),
  Gg = a(function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        n = t.u,
        o = i._gsap,
        l,
        u,
        c;
      if (n === "all" || n === !0) (r.cssText = ""), (u = 1);
      else
        for (n = n.split(","), c = n.length; --c > -1; )
          (l = n[c]),
            Li[l] && ((u = 1), (l = l === "transformOrigin" ? Tt : Te)),
            Pr(i, l);
      u &&
        (Pr(i, Te),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          us(i, 1),
          (o.uncache = 1),
          nf(r)));
    }
  }, "_renderClearProps"),
  so = {
    clearProps: a(function (e, t, i, r, n) {
      if (n.data !== "isFromStart") {
        var o = (e._pt = new xt(e._pt, t, i, 0, 0, Gg));
        return (o.u = r), (o.pr = -10), (o.tween = n), e._props.push(i), 1;
      }
    }, "clearProps"),
  },
  ls = [1, 0, 0, 1, 0, 0],
  uf = {},
  cf = a(function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  }, "_isNullTransform"),
  lu = a(function (e) {
    var t = Xt(e, Te);
    return cf(t) ? ls : t.substr(7).match(mc).map(Ae);
  }, "_getComputedTransformMatrixAsArray"),
  ul = a(function (e, t) {
    var i = e._gsap || mr(e),
      r = e.style,
      n = lu(e),
      o,
      l,
      u,
      c;
    return i.svg && e.getAttribute("transform")
      ? ((u = e.transform.baseVal.consolidate().matrix),
        (n = [u.a, u.b, u.c, u.d, u.e, u.f]),
        n.join(",") === "1,0,0,1,0,0" ? ls : n)
      : (n === ls &&
          !e.offsetParent &&
          e !== en &&
          !i.svg &&
          ((u = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (l = e.nextElementSibling), en.appendChild(e)),
          (n = lu(e)),
          u ? (r.display = u) : Pr(e, "display"),
          c &&
            (l
              ? o.insertBefore(e, l)
              : o
              ? o.appendChild(e)
              : en.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  }, "_getMatrix"),
  xa = a(function (e, t, i, r, n, o) {
    var l = e._gsap,
      u = n || ul(e, !0),
      c = l.xOrigin || 0,
      f = l.yOrigin || 0,
      d = l.xOffset || 0,
      p = l.yOffset || 0,
      h = u[0],
      g = u[1],
      m = u[2],
      _ = u[3],
      b = u[4],
      w = u[5],
      y = t.split(" "),
      v = parseFloat(y[0]) || 0,
      S = parseFloat(y[1]) || 0,
      k,
      C,
      T,
      A;
    i
      ? u !== ls &&
        (C = h * _ - g * m) &&
        ((T = v * (_ / C) + S * (-m / C) + (m * w - _ * b) / C),
        (A = v * (-g / C) + S * (h / C) - (h * w - g * b) / C),
        (v = T),
        (S = A))
      : ((k = af(e)),
        (v = k.x + (~y[0].indexOf("%") ? (v / 100) * k.width : v)),
        (S = k.y + (~(y[1] || y[0]).indexOf("%") ? (S / 100) * k.height : S))),
      r || (r !== !1 && l.smooth)
        ? ((b = v - c),
          (w = S - f),
          (l.xOffset = d + (b * h + w * m) - b),
          (l.yOffset = p + (b * g + w * _) - w))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = v),
      (l.yOrigin = S),
      (l.smooth = !!r),
      (l.origin = t),
      (l.originIsAbsolute = !!i),
      (e.style[Tt] = "0px 0px"),
      o &&
        ($i(o, l, "xOrigin", c, v),
        $i(o, l, "yOrigin", f, S),
        $i(o, l, "xOffset", d, l.xOffset),
        $i(o, l, "yOffset", p, l.yOffset)),
      e.setAttribute("data-svg-origin", v + " " + S);
  }, "_applySVGOrigin"),
  us = a(function (e, t) {
    var i = e._gsap || new Yc(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      n = i.scaleX < 0,
      o = "px",
      l = "deg",
      u = getComputedStyle(e),
      c = Xt(e, Tt) || "0",
      f,
      d,
      p,
      h,
      g,
      m,
      _,
      b,
      w,
      y,
      v,
      S,
      k,
      C,
      T,
      A,
      P,
      z,
      x,
      M,
      O,
      D,
      R,
      N,
      B,
      q,
      E,
      j,
      K,
      ce,
      le,
      ne;
    return (
      (f = d = p = m = _ = b = w = y = v = 0),
      (h = g = 1),
      (i.svg = !!(e.getCTM && lf(e))),
      u.translate &&
        ((u.translate !== "none" ||
          u.scale !== "none" ||
          u.rotate !== "none") &&
          (r[Te] =
            (u.translate !== "none"
              ? "translate3d(" +
                (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") +
            (u.scale !== "none"
              ? "scale(" + u.scale.split(" ").join(",") + ") "
              : "") +
            (u[Te] !== "none" ? u[Te] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (C = ul(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((B = e.getBBox()),
            (c = i.xOrigin - B.x + "px " + (i.yOrigin - B.y) + "px"),
            (N = ""))
          : (N = !t && e.getAttribute("data-svg-origin")),
        xa(e, N || c, !!N || i.originIsAbsolute, i.smooth !== !1, C)),
      (S = i.xOrigin || 0),
      (k = i.yOrigin || 0),
      C !== ls &&
        ((z = C[0]),
        (x = C[1]),
        (M = C[2]),
        (O = C[3]),
        (f = D = C[4]),
        (d = R = C[5]),
        C.length === 6
          ? ((h = Math.sqrt(z * z + x * x)),
            (g = Math.sqrt(O * O + M * M)),
            (m = z || x ? Vr(x, z) * cr : 0),
            (w = M || O ? Vr(M, O) * cr + m : 0),
            w && (g *= Math.abs(Math.cos(w * tn))),
            i.svg && ((f -= S - (S * z + k * M)), (d -= k - (S * x + k * O))))
          : ((ne = C[6]),
            (ce = C[7]),
            (E = C[8]),
            (j = C[9]),
            (K = C[10]),
            (le = C[11]),
            (f = C[12]),
            (d = C[13]),
            (p = C[14]),
            (T = Vr(ne, K)),
            (_ = T * cr),
            T &&
              ((A = Math.cos(-T)),
              (P = Math.sin(-T)),
              (N = D * A + E * P),
              (B = R * A + j * P),
              (q = ne * A + K * P),
              (E = D * -P + E * A),
              (j = R * -P + j * A),
              (K = ne * -P + K * A),
              (le = ce * -P + le * A),
              (D = N),
              (R = B),
              (ne = q)),
            (T = Vr(-M, K)),
            (b = T * cr),
            T &&
              ((A = Math.cos(-T)),
              (P = Math.sin(-T)),
              (N = z * A - E * P),
              (B = x * A - j * P),
              (q = M * A - K * P),
              (le = O * P + le * A),
              (z = N),
              (x = B),
              (M = q)),
            (T = Vr(x, z)),
            (m = T * cr),
            T &&
              ((A = Math.cos(T)),
              (P = Math.sin(T)),
              (N = z * A + x * P),
              (B = D * A + R * P),
              (x = x * A - z * P),
              (R = R * A - D * P),
              (z = N),
              (D = B)),
            _ &&
              Math.abs(_) + Math.abs(m) > 359.9 &&
              ((_ = m = 0), (b = 180 - b)),
            (h = Ae(Math.sqrt(z * z + x * x + M * M))),
            (g = Ae(Math.sqrt(R * R + ne * ne))),
            (T = Vr(D, R)),
            (w = Math.abs(T) > 2e-4 ? T * cr : 0),
            (v = le ? 1 / (le < 0 ? -le : le) : 0)),
        i.svg &&
          ((N = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !cf(Xt(e, Te))),
          N && e.setAttribute("transform", N))),
      Math.abs(w) > 90 &&
        Math.abs(w) < 270 &&
        (n
          ? ((h *= -1), (w += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((g *= -1), (w += w <= 0 ? 180 : -180))),
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
      (i.z = p + o),
      (i.scaleX = Ae(h)),
      (i.scaleY = Ae(g)),
      (i.rotation = Ae(m) + l),
      (i.rotationX = Ae(_) + l),
      (i.rotationY = Ae(b) + l),
      (i.skewX = w + l),
      (i.skewY = y + l),
      (i.transformPerspective = v + o),
      (i.zOrigin = parseFloat(c.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
        (r[Tt] = oo(c)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = zt.force3D),
      (i.renderTransform = i.svg ? Xg : of ? ff : Yg),
      (i.uncache = 0),
      i
    );
  }, "_parseTransform"),
  oo = a(function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  }, "_firstTwoOnly"),
  $o = a(function (e, t, i) {
    var r = ot(t);
    return Ae(parseFloat(t) + parseFloat(Ui(e, "x", i + "px", r))) + r;
  }, "_addPxTranslate"),
  Yg = a(function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      ff(e, t);
  }, "_renderNon3DTransforms"),
  ar = "0deg",
  kn = "0px",
  lr = ") ",
  ff = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      o = i.x,
      l = i.y,
      u = i.z,
      c = i.rotation,
      f = i.rotationY,
      d = i.rotationX,
      p = i.skewX,
      h = i.skewY,
      g = i.scaleX,
      m = i.scaleY,
      _ = i.transformPerspective,
      b = i.force3D,
      w = i.target,
      y = i.zOrigin,
      v = "",
      S = (b === "auto" && e && e !== 1) || b === !0;
    if (y && (d !== ar || f !== ar)) {
      var k = parseFloat(f) * tn,
        C = Math.sin(k),
        T = Math.cos(k),
        A;
      (k = parseFloat(d) * tn),
        (A = Math.cos(k)),
        (o = $o(w, o, C * A * -y)),
        (l = $o(w, l, -Math.sin(k) * -y)),
        (u = $o(w, u, T * A * -y + y));
    }
    _ !== kn && (v += "perspective(" + _ + lr),
      (r || n) && (v += "translate(" + r + "%, " + n + "%) "),
      (S || o !== kn || l !== kn || u !== kn) &&
        (v +=
          u !== kn || S
            ? "translate3d(" + o + ", " + l + ", " + u + ") "
            : "translate(" + o + ", " + l + lr),
      c !== ar && (v += "rotate(" + c + lr),
      f !== ar && (v += "rotateY(" + f + lr),
      d !== ar && (v += "rotateX(" + d + lr),
      (p !== ar || h !== ar) && (v += "skew(" + p + ", " + h + lr),
      (g !== 1 || m !== 1) && (v += "scale(" + g + ", " + m + lr),
      (w.style[Te] = v || "translate(0, 0)");
  }, "_renderCSSTransforms"),
  Xg = a(function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      o = i.x,
      l = i.y,
      u = i.rotation,
      c = i.skewX,
      f = i.skewY,
      d = i.scaleX,
      p = i.scaleY,
      h = i.target,
      g = i.xOrigin,
      m = i.yOrigin,
      _ = i.xOffset,
      b = i.yOffset,
      w = i.forceCSS,
      y = parseFloat(o),
      v = parseFloat(l),
      S,
      k,
      C,
      T,
      A;
    (u = parseFloat(u)),
      (c = parseFloat(c)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (c += f), (u += f)),
      u || c
        ? ((u *= tn),
          (c *= tn),
          (S = Math.cos(u) * d),
          (k = Math.sin(u) * d),
          (C = Math.sin(u - c) * -p),
          (T = Math.cos(u - c) * p),
          c &&
            ((f *= tn),
            (A = Math.tan(c - f)),
            (A = Math.sqrt(1 + A * A)),
            (C *= A),
            (T *= A),
            f &&
              ((A = Math.tan(f)),
              (A = Math.sqrt(1 + A * A)),
              (S *= A),
              (k *= A))),
          (S = Ae(S)),
          (k = Ae(k)),
          (C = Ae(C)),
          (T = Ae(T)))
        : ((S = d), (T = p), (k = C = 0)),
      ((y && !~(o + "").indexOf("px")) || (v && !~(l + "").indexOf("px"))) &&
        ((y = Ui(h, "x", o, "px")), (v = Ui(h, "y", l, "px"))),
      (g || m || _ || b) &&
        ((y = Ae(y + g - (g * S + m * C) + _)),
        (v = Ae(v + m - (g * k + m * T) + b))),
      (r || n) &&
        ((A = h.getBBox()),
        (y = Ae(y + (r / 100) * A.width)),
        (v = Ae(v + (n / 100) * A.height))),
      (A =
        "matrix(" + S + "," + k + "," + C + "," + T + "," + y + "," + v + ")"),
      h.setAttribute("transform", A),
      w && (h.style[Te] = A);
  }, "_renderSVGTransforms"),
  jg = a(function (e, t, i, r, n) {
    var o = 360,
      l = Ye(n),
      u = parseFloat(n) * (l && ~n.indexOf("rad") ? cr : 1),
      c = u - r,
      f = r + c + "deg",
      d,
      p;
    return (
      l &&
        ((d = n.split("_")[1]),
        d === "short" &&
          ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -360)),
        d === "cw" && c < 0
          ? (c = ((c + o * iu) % o) - ~~(c / o) * o)
          : d === "ccw" && c > 0 && (c = ((c - o * iu) % o) - ~~(c / o) * o)),
      (e._pt = p = new xt(e._pt, t, i, r, c, Og)),
      (p.e = f),
      (p.u = "deg"),
      e._props.push(i),
      p
    );
  }, "_addRotationalPropTween"),
  uu = a(function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  }, "_assign"),
  Ug = a(function (e, t, i) {
    var r = uu({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      l,
      u,
      c,
      f,
      d,
      p,
      h,
      g;
    r.svg
      ? ((c = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Te] = t),
        (l = us(i, 1)),
        Pr(i, Te),
        i.setAttribute("transform", c))
      : ((c = getComputedStyle(i)[Te]),
        (o[Te] = t),
        (l = us(i, 1)),
        (o[Te] = c));
    for (u in Li)
      (c = r[u]),
        (f = l[u]),
        c !== f &&
          n.indexOf(u) < 0 &&
          ((h = ot(c)),
          (g = ot(f)),
          (d = h !== g ? Ui(i, u, c, g) : parseFloat(c)),
          (p = parseFloat(f)),
          (e._pt = new xt(e._pt, l, u, d, p - d, wa)),
          (e._pt.u = g || 0),
          e._props.push(u));
    uu(l, r);
  }, "_addRawTransformPTs");
St("padding,margin,Width,Radius", function (s, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    o = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (l) {
      return e < 2 ? s + l : "border" + l + s;
    });
  so[e > 1 ? "border" + s : s] = function (l, u, c, f, d) {
    var p, h;
    if (arguments.length < 4)
      return (
        (p = o.map(function (g) {
          return xi(l, g, c);
        })),
        (h = p.join(" ")),
        h.split(p[0]).length === 5 ? p[0] : h
      );
    (p = (f + "").split(" ")),
      (h = {}),
      o.forEach(function (g, m) {
        return (h[g] = p[m] = p[m] || p[((m - 1) / 2) | 0]);
      }),
      l.init(u, h, d);
  };
});
var df = {
  name: "css",
  register: Sa,
  targetTest: a(function (e) {
    return e.style && e.nodeType;
  }, "targetTest"),
  init: a(function (e, t, i, r, n) {
    var o = this._props,
      l = e.style,
      u = i.vars.startAt,
      c,
      f,
      d,
      p,
      h,
      g,
      m,
      _,
      b,
      w,
      y,
      v,
      S,
      k,
      C,
      T;
    ol || Sa(),
      (this.styles = this.styles || sf(e)),
      (T = this.styles.props),
      (this.tween = i);
    for (m in t)
      if (m !== "autoRound" && ((f = t[m]), !(At[m] && Xc(m, t, i, r, e, n)))) {
        if (
          ((h = typeof f),
          (g = so[m]),
          h === "function" && ((f = f.call(i, r, e, n)), (h = typeof f)),
          h === "string" && ~f.indexOf("random(") && (f = ss(f)),
          g)
        )
          g(this, e, m, f, i) && (C = 1);
        else if (m.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (f += ""),
            (Yi.lastIndex = 0),
            Yi.test(c) || ((_ = ot(c)), (b = ot(f))),
            b ? _ !== b && (c = Ui(e, m, c, b) + b) : _ && (f += _),
            this.add(l, "setProperty", c, f, r, n, 0, 0, m),
            o.push(m),
            T.push(m, 0, l[m]);
        else if (h !== "undefined") {
          if (
            (u && m in u
              ? ((c = typeof u[m] == "function" ? u[m].call(i, r, e, n) : u[m]),
                Ye(c) && ~c.indexOf("random(") && (c = ss(c)),
                ot(c + "") ||
                  c === "auto" ||
                  (c += zt.units[m] || ot(xi(e, m)) || ""),
                (c + "").charAt(1) === "=" && (c = xi(e, m)))
              : (c = xi(e, m)),
            (p = parseFloat(c)),
            (w = h === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            w && (f = f.substr(2)),
            (d = parseFloat(f)),
            m in di &&
              (m === "autoAlpha" &&
                (p === 1 && xi(e, "visibility") === "hidden" && d && (p = 0),
                T.push("visibility", 0, l.visibility),
                $i(
                  this,
                  l,
                  "visibility",
                  p ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              m !== "scale" &&
                m !== "transform" &&
                ((m = di[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
            (y = m in Li),
            y)
          ) {
            if (
              (this.styles.save(m),
              h === "string" &&
                f.substring(0, 6) === "var(--" &&
                ((f = Xt(e, f.substring(4, f.indexOf(")")))),
                (d = parseFloat(f))),
              v ||
                ((S = e._gsap),
                (S.renderTransform && !t.parseTransform) ||
                  us(e, t.parseTransform),
                (k = t.smoothOrigin !== !1 && S.smooth),
                (v = this._pt =
                  new xt(this._pt, l, Te, 0, 1, S.renderTransform, S, 0, -1)),
                (v.dep = 1)),
              m === "scale")
            )
              (this._pt = new xt(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (w ? Jr(S.scaleY, w + d) : d) - S.scaleY || 0,
                wa
              )),
                (this._pt.u = 0),
                o.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              T.push(Tt, 0, l[Tt]),
                (f = Hg(f)),
                S.svg
                  ? xa(e, f, 0, k, 0, this)
                  : ((b = parseFloat(f.split(" ")[2]) || 0),
                    b !== S.zOrigin && $i(this, S, "zOrigin", S.zOrigin, b),
                    $i(this, l, m, oo(c), oo(f)));
              continue;
            } else if (m === "svgOrigin") {
              xa(e, f, 1, k, 0, this);
              continue;
            } else if (m in uf) {
              jg(this, S, m, p, w ? Jr(p, w + f) : f);
              continue;
            } else if (m === "smoothOrigin") {
              $i(this, S, "smooth", S.smooth, f);
              continue;
            } else if (m === "force3D") {
              S[m] = f;
              continue;
            } else if (m === "transform") {
              Ug(this, f, e);
              continue;
            }
          } else m in l || (m = vn(m) || m);
          if (y || ((d || d === 0) && (p || p === 0) && !Ag.test(f) && m in l))
            (_ = (c + "").substr((p + "").length)),
              d || (d = 0),
              (b = ot(f) || (m in zt.units ? zt.units[m] : _)),
              _ !== b && (p = Ui(e, m, c, b)),
              (this._pt = new xt(
                this._pt,
                y ? S : l,
                m,
                p,
                (w ? Jr(p, w + d) : d) - p,
                !y && (b === "px" || m === "zIndex") && t.autoRound !== !1
                  ? Dg
                  : wa
              )),
              (this._pt.u = b || 0),
              _ !== b && b !== "%" && ((this._pt.b = c), (this._pt.r = Lg));
          else if (m in l) Wg.call(this, e, m, c, w ? w + f : f);
          else if (m in e) this.add(e, m, c || e[m], w ? w + f : f, r, n);
          else if (m !== "parseTransform") {
            Ka(m, f);
            continue;
          }
          y ||
            (m in l
              ? T.push(m, 0, l[m])
              : typeof e[m] == "function"
              ? T.push(m, 2, e[m]())
              : T.push(m, 1, c || e[m])),
            o.push(m);
        }
      }
    C && Jc(this);
  }, "init"),
  render: a(function (e, t) {
    if (t.tween._time || !al())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  }, "render"),
  get: xi,
  aliases: di,
  getSetter: a(function (e, t, i) {
    var r = di[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Li && t !== Tt && (e._gsap.x || xi(e, "x"))
        ? i && tu === i
          ? t === "scale"
            ? Ng
            : Rg
          : (tu = i || {}) && (t === "scale" ? Fg : Bg)
        : e.style && !Xa(e.style[t])
        ? Ig
        : ~t.indexOf("-")
        ? zg
        : nl(e, t)
    );
  }, "getSetter"),
  core: { _removeProperty: Pr, _getMatrix: ul },
};
Et.utils.checkPrefix = vn;
Et.core.getStyleSaver = sf;
(function (s, e, t, i) {
  var r = St(s + "," + e + "," + t, function (n) {
    Li[n] = 1;
  });
  St(e, function (n) {
    (zt.units[n] = "deg"), (uf[n] = 1);
  }),
    (di[r[13]] = s + "," + e),
    St(i, function (n) {
      var o = n.split(":");
      di[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
St(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    zt.units[s] = "px";
  }
);
Et.registerPlugin(df);
var I = Et.registerPlugin(df) || Et;
function Kg(s, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, i.key, i);
  }
}
a(Kg, "_defineProperties");
function Zg(s, e, t) {
  return e && Kg(s.prototype, e), s;
}
a(Zg, "_createClass");
var ut,
  $s,
  Dt,
  Wi,
  Hi,
  rn,
  hf,
  fr,
  $n,
  pf,
  Ei,
  ti,
  gf,
  mf = a(function () {
    return (
      ut ||
      (typeof window < "u" && (ut = window.gsap) && ut.registerPlugin && ut)
    );
  }, "_getGSAP"),
  vf = 1,
  Ur = [],
  re = [],
  mi = [],
  Wn = Date.now,
  Ta = a(function (e, t) {
    return t;
  }, "_bridge"),
  Qg = a(function () {
    var e = $n.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, re),
      r.push.apply(r, mi),
      (re = i),
      (mi = r),
      (Ta = a(function (o, l) {
        return t[o](l);
      }, "_bridge"));
  }, "_integrate"),
  Xi = a(function (e, t) {
    return ~mi.indexOf(e) && mi[mi.indexOf(e) + 1][t];
  }, "_getProxyProp"),
  Hn = a(function (e) {
    return !!~pf.indexOf(e);
  }, "_isViewport"),
  dt = a(function (e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: r !== !1, capture: !!n });
  }, "_addListener"),
  ft = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  bs = "scrollLeft",
  Ss = "scrollTop",
  Ea = a(function () {
    return (Ei && Ei.isPressed) || re.cache++;
  }, "_onScroll"),
  ao = a(function (e, t) {
    var i = a(function r(n) {
      if (n || n === 0) {
        vf && (Dt.history.scrollRestoration = "manual");
        var o = Ei && Ei.isPressed;
        (n = r.v = Math.round(n) || (Ei && Ei.iOS ? 1 : 0)),
          e(n),
          (r.cacheID = re.cache),
          o && Ta("ss", n);
      } else (t || re.cache !== r.cacheID || Ta("ref")) && ((r.cacheID = re.cache), (r.v = e()));
      return r.v + r.offset;
    }, "cachingFunc");
    return (i.offset = 0), e && i;
  }, "_scrollCacheFunc"),
  _t = {
    s: bs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ao(function (s) {
      return arguments.length
        ? Dt.scrollTo(s, Be.sc())
        : Dt.pageXOffset || Wi[bs] || Hi[bs] || rn[bs] || 0;
    }),
  },
  Be = {
    s: Ss,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _t,
    sc: ao(function (s) {
      return arguments.length
        ? Dt.scrollTo(_t.sc(), s)
        : Dt.pageYOffset || Wi[Ss] || Hi[Ss] || rn[Ss] || 0;
    }),
  },
  wt = a(function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || ut.utils.toArray)(e)[0] ||
      (typeof e == "string" && ut.config().nullTargetWarn !== !1
        ? void 0
        : null)
    );
  }, "_getTarget"),
  Jg = a(function (e, t) {
    for (var i = t.length; i--; ) if (t[i] === e || t[i].contains(e)) return !0;
    return !1;
  }, "_isWithin"),
  Ki = a(function (e, t) {
    var i = t.s,
      r = t.sc;
    Hn(e) && (e = Wi.scrollingElement || Hi);
    var n = re.indexOf(e),
      o = r === Be.sc ? 1 : 2;
    !~n && (n = re.push(e) - 1), re[n + o] || dt(e, "scroll", Ea);
    var l = re[n + o],
      u =
        l ||
        (re[n + o] =
          ao(Xi(e, i), !0) ||
          (Hn(e)
            ? r
            : ao(function (c) {
                return arguments.length ? (e[i] = c) : e[i];
              })));
    return (
      (u.target = e),
      l || (u.smooth = ut.getProperty(e, "scrollBehavior") === "smooth"),
      u
    );
  }, "_getScrollFunc"),
  ka = a(function (e, t, i) {
    var r = e,
      n = e,
      o = Wn(),
      l = o,
      u = t || 50,
      c = Math.max(500, u * 3),
      f = a(function (g, m) {
        var _ = Wn();
        m || _ - o > u
          ? ((n = r), (r = g), (l = o), (o = _))
          : i
          ? (r += g)
          : (r = n + ((g - n) / (_ - l)) * (o - l));
      }, "update"),
      d = a(function () {
        (n = r = i ? 0 : r), (l = o = 0);
      }, "reset"),
      p = a(function (g) {
        var m = l,
          _ = n,
          b = Wn();
        return (
          (g || g === 0) && g !== r && f(g),
          o === l || b - l > c
            ? 0
            : ((r + (i ? _ : -_)) / ((i ? b : o) - m)) * 1e3
        );
      }, "getVelocity");
    return { update: f, reset: d, getVelocity: p };
  }, "_getVelocityProp"),
  Cn = a(function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }, "_getEvent"),
  cu = a(function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  }, "_getAbsoluteMax"),
  _f = a(function () {
    ($n = ut.core.globals().ScrollTrigger), $n && $n.core && Qg();
  }, "_setScrollTrigger"),
  yf = a(function (e) {
    return (
      (ut = e || mf()),
      !$s &&
        ut &&
        typeof document < "u" &&
        document.body &&
        ((Dt = window),
        (Wi = document),
        (Hi = Wi.documentElement),
        (rn = Wi.body),
        (pf = [Dt, Wi, Hi, rn]),
        (gf = ut.core.context || function () {}),
        (fr = "onpointerenter" in rn ? "pointer" : "mouse"),
        (hf = Oe.isTouch =
          Dt.matchMedia &&
          Dt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Dt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (ti = Oe.eventTypes =
          (
            "ontouchstart" in Hi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Hi
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (vf = 0);
        }, 500),
        _f(),
        ($s = 1)),
      $s
    );
  }, "_initCore");
_t.op = Be;
re.cache = 0;
var Oe = (function () {
  function s(t) {
    this.init(t);
  }
  a(s, "Observer");
  var e = s.prototype;
  return (
    (e.init = a(function (i) {
      $s || yf(ut), $n || _f();
      var r = i.tolerance,
        n = i.dragMinimum,
        o = i.type,
        l = i.target,
        u = i.lineHeight,
        c = i.debounce,
        f = i.preventDefault,
        d = i.onStop,
        p = i.onStopDelay,
        h = i.ignore,
        g = i.wheelSpeed,
        m = i.event,
        _ = i.onDragStart,
        b = i.onDragEnd,
        w = i.onDrag,
        y = i.onPress,
        v = i.onRelease,
        S = i.onRight,
        k = i.onLeft,
        C = i.onUp,
        T = i.onDown,
        A = i.onChangeX,
        P = i.onChangeY,
        z = i.onChange,
        x = i.onToggleX,
        M = i.onToggleY,
        O = i.onHover,
        D = i.onHoverEnd,
        R = i.onMove,
        N = i.ignoreCheck,
        B = i.isNormalizer,
        q = i.onGestureStart,
        E = i.onGestureEnd,
        j = i.onWheel,
        K = i.onEnable,
        ce = i.onDisable,
        le = i.onClick,
        ne = i.scrollSpeed,
        ee = i.capture,
        de = i.allowClicks,
        ge = i.lockAxis,
        Le = i.onLockAxis;
      (this.target = l = wt(l) || Hi),
        (this.vars = i),
        h && (h = ut.utils.toArray(h)),
        (r = r || 1e-9),
        (n = n || 0),
        (g = g || 1),
        (ne = ne || 1),
        (o = o || "wheel,touch,pointer"),
        (c = c !== !1),
        u || (u = parseFloat(Dt.getComputedStyle(rn).lineHeight) || 22);
      var Ve,
        ve,
        qe,
        G,
        se,
        je,
        Ue,
        L = this,
        Ce = 0,
        Ut = 0,
        Bt = i.passive || (!f && i.passive !== !1),
        $ = Ki(l, _t),
        Vt = Ki(l, Be),
        Di = $(),
        tr = Vt(),
        $e =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          ti[0] === "pointerdown",
        Ii = Hn(l),
        Pe = l.ownerDocument || Wi,
        Kt = [0, 0, 0],
        qt = [0, 0, 0],
        yi = 0,
        bn = a(function () {
          return (yi = Wn());
        }, "clickCapture"),
        De = a(function (U, ue) {
          return (
            ((L.event = U) && h && Jg(U.target, h)) ||
            (ue && $e && U.pointerType !== "touch") ||
            (N && N(U, ue))
          );
        }, "_ignoreCheck"),
        gs = a(function () {
          L._vx.reset(), L._vy.reset(), ve.pause(), d && d(L);
        }, "onStopFunc"),
        wi = a(function () {
          var U = (L.deltaX = cu(Kt)),
            ue = (L.deltaY = cu(qt)),
            F = Math.abs(U) >= r,
            Z = Math.abs(ue) >= r;
          z && (F || Z) && z(L, U, ue, Kt, qt),
            F &&
              (S && L.deltaX > 0 && S(L),
              k && L.deltaX < 0 && k(L),
              A && A(L),
              x && L.deltaX < 0 != Ce < 0 && x(L),
              (Ce = L.deltaX),
              (Kt[0] = Kt[1] = Kt[2] = 0)),
            Z &&
              (T && L.deltaY > 0 && T(L),
              C && L.deltaY < 0 && C(L),
              P && P(L),
              M && L.deltaY < 0 != Ut < 0 && M(L),
              (Ut = L.deltaY),
              (qt[0] = qt[1] = qt[2] = 0)),
            (G || qe) &&
              (R && R(L),
              qe && (_ && qe === 1 && _(L), w && w(L), (qe = 0)),
              (G = !1)),
            je && !(je = !1) && Le && Le(L),
            se && (j(L), (se = !1)),
            (Ve = 0);
        }, "update"),
        Rr = a(function (U, ue, F) {
          (Kt[F] += U),
            (qt[F] += ue),
            L._vx.update(U),
            L._vy.update(ue),
            c ? Ve || (Ve = requestAnimationFrame(wi)) : wi();
        }, "onDelta"),
        Nr = a(function (U, ue) {
          ge &&
            !Ue &&
            ((L.axis = Ue = Math.abs(U) > Math.abs(ue) ? "x" : "y"), (je = !0)),
            Ue !== "y" && ((Kt[2] += U), L._vx.update(U, !0)),
            Ue !== "x" && ((qt[2] += ue), L._vy.update(ue, !0)),
            c ? Ve || (Ve = requestAnimationFrame(wi)) : wi();
        }, "onTouchOrPointerDelta"),
        zi = a(function (U) {
          if (!De(U, 1)) {
            U = Cn(U, f);
            var ue = U.clientX,
              F = U.clientY,
              Z = ue - L.x,
              Y = F - L.y,
              Q = L.isDragging;
            (L.x = ue),
              (L.y = F),
              (Q ||
                ((Z || Y) &&
                  (Math.abs(L.startX - ue) >= n ||
                    Math.abs(L.startY - F) >= n))) &&
                ((qe = Q ? 2 : 1), Q || (L.isDragging = !0), Nr(Z, Y));
          }
        }, "_onDrag"),
        ir = (L.onPress = function (J) {
          De(J, 1) ||
            (J && J.button) ||
            ((L.axis = Ue = null),
            ve.pause(),
            (L.isPressed = !0),
            (J = Cn(J)),
            (Ce = Ut = 0),
            (L.startX = L.x = J.clientX),
            (L.startY = L.y = J.clientY),
            L._vx.reset(),
            L._vy.reset(),
            dt(B ? l : Pe, ti[1], zi, Bt, !0),
            (L.deltaX = L.deltaY = 0),
            y && y(L));
        }),
        oe = (L.onRelease = function (J) {
          if (!De(J, 1)) {
            ft(B ? l : Pe, ti[1], zi, !0);
            var U = !isNaN(L.y - L.startY),
              ue = L.isDragging,
              F =
                ue &&
                (Math.abs(L.x - L.startX) > 3 || Math.abs(L.y - L.startY) > 3),
              Z = Cn(J);
            !F &&
              U &&
              (L._vx.reset(),
              L._vy.reset(),
              f &&
                de &&
                ut.delayedCall(0.08, function () {
                  if (Wn() - yi > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (Pe.createEvent) {
                      var Y = Pe.createEvent("MouseEvents");
                      Y.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Dt,
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
              (L.isDragging = L.isGesturing = L.isPressed = !1),
              d && ue && !B && ve.restart(!0),
              qe && wi(),
              b && ue && b(L),
              v && v(L, F);
          }
        }),
        rr = a(function (U) {
          return (
            U.touches &&
            U.touches.length > 1 &&
            (L.isGesturing = !0) &&
            q(U, L.isDragging)
          );
        }, "_onGestureStart"),
        Zt = a(function () {
          return (L.isGesturing = !1) || E(L);
        }, "_onGestureEnd"),
        Qt = a(function (U) {
          if (!De(U)) {
            var ue = $(),
              F = Vt();
            Rr((ue - Di) * ne, (F - tr) * ne, 1),
              (Di = ue),
              (tr = F),
              d && ve.restart(!0);
          }
        }, "onScroll"),
        Jt = a(function (U) {
          if (!De(U)) {
            (U = Cn(U, f)), j && (se = !0);
            var ue =
              (U.deltaMode === 1 ? u : U.deltaMode === 2 ? Dt.innerHeight : 1) *
              g;
            Rr(U.deltaX * ue, U.deltaY * ue, 0), d && !B && ve.restart(!0);
          }
        }, "_onWheel"),
        nr = a(function (U) {
          if (!De(U)) {
            var ue = U.clientX,
              F = U.clientY,
              Z = ue - L.x,
              Y = F - L.y;
            (L.x = ue),
              (L.y = F),
              (G = !0),
              d && ve.restart(!0),
              (Z || Y) && Nr(Z, Y);
          }
        }, "_onMove"),
        Fr = a(function (U) {
          (L.event = U), O(L);
        }, "_onHover"),
        bi = a(function (U) {
          (L.event = U), D(L);
        }, "_onHoverEnd"),
        Sn = a(function (U) {
          return De(U) || (Cn(U, f) && le(L));
        }, "_onClick");
      (ve = L._dc = ut.delayedCall(p || 0.25, gs).pause()),
        (L.deltaX = L.deltaY = 0),
        (L._vx = ka(0, 50, !0)),
        (L._vy = ka(0, 50, !0)),
        (L.scrollX = $),
        (L.scrollY = Vt),
        (L.isDragging = L.isGesturing = L.isPressed = !1),
        gf(this),
        (L.enable = function (J) {
          return (
            L.isEnabled ||
              (dt(Ii ? Pe : l, "scroll", Ea),
              o.indexOf("scroll") >= 0 && dt(Ii ? Pe : l, "scroll", Qt, Bt, ee),
              o.indexOf("wheel") >= 0 && dt(l, "wheel", Jt, Bt, ee),
              ((o.indexOf("touch") >= 0 && hf) || o.indexOf("pointer") >= 0) &&
                (dt(l, ti[0], ir, Bt, ee),
                dt(Pe, ti[2], oe),
                dt(Pe, ti[3], oe),
                de && dt(l, "click", bn, !0, !0),
                le && dt(l, "click", Sn),
                q && dt(Pe, "gesturestart", rr),
                E && dt(Pe, "gestureend", Zt),
                O && dt(l, fr + "enter", Fr),
                D && dt(l, fr + "leave", bi),
                R && dt(l, fr + "move", nr)),
              (L.isEnabled = !0),
              (L.isDragging = L.isGesturing = L.isPressed = G = qe = !1),
              L._vx.reset(),
              L._vy.reset(),
              (Di = $()),
              (tr = Vt()),
              J && J.type && ir(J),
              K && K(L)),
            L
          );
        }),
        (L.disable = function () {
          L.isEnabled &&
            (Ur.filter(function (J) {
              return J !== L && Hn(J.target);
            }).length || ft(Ii ? Pe : l, "scroll", Ea),
            L.isPressed &&
              (L._vx.reset(), L._vy.reset(), ft(B ? l : Pe, ti[1], zi, !0)),
            ft(Ii ? Pe : l, "scroll", Qt, ee),
            ft(l, "wheel", Jt, ee),
            ft(l, ti[0], ir, ee),
            ft(Pe, ti[2], oe),
            ft(Pe, ti[3], oe),
            ft(l, "click", bn, !0),
            ft(l, "click", Sn),
            ft(Pe, "gesturestart", rr),
            ft(Pe, "gestureend", Zt),
            ft(l, fr + "enter", Fr),
            ft(l, fr + "leave", bi),
            ft(l, fr + "move", nr),
            (L.isEnabled = L.isPressed = L.isDragging = !1),
            ce && ce(L));
        }),
        (L.kill = L.revert =
          function () {
            L.disable();
            var J = Ur.indexOf(L);
            J >= 0 && Ur.splice(J, 1), Ei === L && (Ei = 0);
          }),
        Ur.push(L),
        B && Hn(l) && (Ei = L),
        L.enable(m);
    }, "init")),
    Zg(s, [
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
    s
  );
})();
Oe.version = "3.13.0";
Oe.create = function (s) {
  return new Oe(s);
};
Oe.register = yf;
Oe.getAll = function () {
  return Ur.slice();
};
Oe.getById = function (s) {
  return Ur.filter(function (e) {
    return e.vars.id === s;
  })[0];
};
mf() && ut.registerPlugin(Oe);
var V,
  Gr,
  ie,
  me,
  Ot,
  fe,
  cl,
  lo,
  cs,
  Gn,
  Ln,
  xs,
  rt,
  xo,
  Ca,
  gt,
  fu,
  du,
  Yr,
  wf,
  Wo,
  bf,
  pt,
  Pa,
  Sf,
  xf,
  Fi,
  Ma,
  fl,
  nn,
  dl,
  uo,
  Aa,
  Ho,
  Ts = 1,
  nt = Date.now,
  Go = nt(),
  jt = 0,
  Dn = 0,
  hu = a(function (e, t, i) {
    var r = Pt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  }, "_parseClamp"),
  pu = a(function (e, t) {
    return t && (!Pt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  }, "_keepClamp"),
  em = a(function s() {
    return Dn && requestAnimationFrame(s);
  }, "_rafBugFix"),
  gu = a(function () {
    return (xo = 1);
  }, "_pointerDownHandler"),
  mu = a(function () {
    return (xo = 0);
  }, "_pointerUpHandler"),
  ui = a(function (e) {
    return e;
  }, "_passThrough"),
  In = a(function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  }, "_round"),
  Tf = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  Ef = a(function () {
    return V || (Tf() && (V = window.gsap) && V.registerPlugin && V);
  }, "_getGSAP"),
  Mr = a(function (e) {
    return !!~cl.indexOf(e);
  }, "_isViewport"),
  kf = a(function (e) {
    return (
      (e === "Height" ? dl : ie["inner" + e]) ||
      Ot["client" + e] ||
      fe["client" + e]
    );
  }, "_getViewportDimension"),
  Cf = a(function (e) {
    return (
      Xi(e, "getBoundingClientRect") ||
      (Mr(e)
        ? function () {
            return (Xs.width = ie.innerWidth), (Xs.height = dl), Xs;
          }
        : function () {
            return Ti(e);
          })
    );
  }, "_getBoundsFunc"),
  tm = a(function (e, t, i) {
    var r = i.d,
      n = i.d2,
      o = i.a;
    return (o = Xi(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? kf(n) : e["client" + n]) || 0;
        };
  }, "_getSizeFunc"),
  im = a(function (e, t) {
    return !t || ~mi.indexOf(e)
      ? Cf(e)
      : function () {
          return Xs;
        };
  }, "_getOffsetsFunc"),
  hi = a(function (e, t) {
    var i = t.s,
      r = t.d2,
      n = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = Xi(e, i))
        ? o() - Cf(e)()[n]
        : Mr(e)
        ? (Ot[i] || fe[i]) - kf(r)
        : e[i] - e["offset" + r]
    );
  }, "_maxScroll"),
  Es = a(function (e, t) {
    for (var i = 0; i < Yr.length; i += 3)
      (!t || ~t.indexOf(Yr[i + 1])) && e(Yr[i], Yr[i + 1], Yr[i + 2]);
  }, "_iterateAutoRefresh"),
  Pt = a(function (e) {
    return typeof e == "string";
  }, "_isString"),
  at = a(function (e) {
    return typeof e == "function";
  }, "_isFunction"),
  zn = a(function (e) {
    return typeof e == "number";
  }, "_isNumber"),
  dr = a(function (e) {
    return typeof e == "object";
  }, "_isObject"),
  Pn = a(function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  }, "_endAnimation"),
  Yo = a(function (e, t) {
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
  Pf = "left",
  Mf = "top",
  hl = "right",
  pl = "bottom",
  wr = "width",
  br = "height",
  Yn = "Right",
  Xn = "Left",
  jn = "Top",
  Un = "Bottom",
  Ie = "padding",
  Ht = "margin",
  _n = "Width",
  gl = "Height",
  Fe = "px",
  Gt = a(function (e) {
    return ie.getComputedStyle(e);
  }, "_getComputedStyle"),
  rm = a(function (e) {
    var t = Gt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  }, "_makePositionable"),
  vu = a(function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  }, "_setDefaults"),
  Ti = a(function (e, t) {
    var i =
        t &&
        Gt(e)[Ca] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
  co = a(function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  }, "_getSize"),
  Af = a(function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      n;
    for (n in i) t.push(i[n] / r);
    return t;
  }, "_getLabelRatioArray"),
  nm = a(function (e) {
    return function (t) {
      return V.utils.snap(Af(e), t);
    };
  }, "_getClosestLabel"),
  ml = a(function (e) {
    var t = V.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, n) {
          return r - n;
        });
    return i
      ? function (r, n, o) {
          o === void 0 && (o = 0.001);
          var l;
          if (!n) return t(r);
          if (n > 0) {
            for (r -= o, l = 0; l < i.length; l++) if (i[l] >= r) return i[l];
            return i[l - 1];
          } else for (l = i.length, r += o; l--; ) if (i[l] <= r) return i[l];
          return i[0];
        }
      : function (r, n, o) {
          o === void 0 && (o = 0.001);
          var l = t(r);
          return !n || Math.abs(l - r) < o || l - r < 0 == n < 0
            ? l
            : t(n < 0 ? r - e : r + e);
        };
  }, "_snapDirectional"),
  sm = a(function (e) {
    return function (t, i) {
      return ml(Af(e))(t, i.direction);
    };
  }, "_getLabelAtDirection"),
  ks = a(function (e, t, i, r) {
    return i.split(",").forEach(function (n) {
      return e(t, n, r);
    });
  }, "_multiListener"),
  Ge = a(function (e, t, i, r, n) {
    return e.addEventListener(t, i, { passive: !r, capture: !!n });
  }, "_addListener"),
  He = a(function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  }, "_removeListener"),
  Cs = a(function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  }, "_wheelListener"),
  _u = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Ps = { toggleActions: "play", anticipatePin: 0 },
  fo = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Ws = a(function (e, t) {
    if (Pt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in fo
            ? fo[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }, "_offsetToPx"),
  Ms = a(function (e, t, i, r, n, o, l, u) {
    var c = n.startColor,
      f = n.endColor,
      d = n.fontSize,
      p = n.indent,
      h = n.fontWeight,
      g = me.createElement("div"),
      m = Mr(i) || Xi(i, "pinType") === "fixed",
      _ = e.indexOf("scroller") !== -1,
      b = m ? fe : i,
      w = e.indexOf("start") !== -1,
      y = w ? c : f,
      v =
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
      (v += "position:" + ((_ || u) && m ? "fixed;" : "absolute;")),
      (_ || u || !m) &&
        (v += (r === Be ? hl : pl) + ":" + (o + parseFloat(p)) + "px;"),
      l &&
        (v +=
          "box-sizing:border-box;text-align:left;width:" +
          l.offsetWidth +
          "px;"),
      (g._isStart = w),
      g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (g.style.cssText = v),
      (g.innerText = t || t === 0 ? e + "-" + t : e),
      b.children[0] ? b.insertBefore(g, b.children[0]) : b.appendChild(g),
      (g._offset = g["offset" + r.op.d2]),
      Hs(g, 0, r, w),
      g
    );
  }, "_createMarker"),
  Hs = a(function (e, t, i, r) {
    var n = { display: "block" },
      o = i[r ? "os2" : "p2"],
      l = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (n[i.a + "Percent"] = r ? -100 : 0),
      (n[i.a] = r ? "1px" : 0),
      (n["border" + o + _n] = 1),
      (n["border" + l + _n] = 0),
      (n[i.p] = t + "px"),
      V.set(e, n);
  }, "_positionMarker"),
  te = [],
  Oa = {},
  fs,
  yu = a(function () {
    return nt() - jt > 34 && (fs || (fs = requestAnimationFrame(Ai)));
  }, "_sync"),
  $r = a(function () {
    (!pt || !pt.isPressed || pt.startX > fe.clientWidth) &&
      (re.cache++,
      pt ? fs || (fs = requestAnimationFrame(Ai)) : Ai(),
      jt || Or("scrollStart"),
      (jt = nt()));
  }, "_onScroll"),
  Xo = a(function () {
    (xf = ie.innerWidth), (Sf = ie.innerHeight);
  }, "_setBaseDimensions"),
  Rn = a(function (e) {
    re.cache++,
      (e === !0 ||
        (!rt &&
          !bf &&
          !me.fullscreenElement &&
          !me.webkitFullscreenElement &&
          (!Pa ||
            xf !== ie.innerWidth ||
            Math.abs(ie.innerHeight - Sf) > ie.innerHeight * 0.25))) &&
        lo.restart(!0);
  }, "_onResize"),
  Ar = {},
  om = [],
  Of = a(function s() {
    return He(X, "scrollEnd", s) || gr(!0);
  }, "_softRefresh"),
  Or = a(function (e) {
    return (
      (Ar[e] &&
        Ar[e].map(function (t) {
          return t();
        })) ||
      om
    );
  }, "_dispatch"),
  Ct = [],
  Lf = a(function (e) {
    for (var t = 0; t < Ct.length; t += 5)
      (!e || (Ct[t + 4] && Ct[t + 4].query === e)) &&
        ((Ct[t].style.cssText = Ct[t + 1]),
        Ct[t].getBBox && Ct[t].setAttribute("transform", Ct[t + 2] || ""),
        (Ct[t + 3].uncache = 1));
  }, "_revertRecorded"),
  vl = a(function (e, t) {
    var i;
    for (gt = 0; gt < te.length; gt++)
      (i = te[gt]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    (uo = !0), t && Lf(t), t || Or("revert");
  }, "_revertAll"),
  Df = a(function (e, t) {
    re.cache++,
      (t || !mt) &&
        re.forEach(function (i) {
          return at(i) && i.cacheID++ && (i.rec = 0);
        }),
      Pt(e) && (ie.history.scrollRestoration = fl = e);
  }, "_clearScrollMemory"),
  mt,
  Sr = 0,
  wu,
  am = a(function () {
    if (wu !== Sr) {
      var e = (wu = Sr);
      requestAnimationFrame(function () {
        return e === Sr && gr(!0);
      });
    }
  }, "_queueRefreshAll"),
  If = a(function () {
    fe.appendChild(nn),
      (dl = (!pt && nn.offsetHeight) || ie.innerHeight),
      fe.removeChild(nn);
  }, "_refresh100vh"),
  bu = a(function (e) {
    return cs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (t) {
      return (t.style.display = e ? "none" : "block");
    });
  }, "_hideAllMarkers"),
  gr = a(function (e, t) {
    if (
      ((Ot = me.documentElement),
      (fe = me.body),
      (cl = [ie, me, Ot, fe]),
      jt && !e && !uo)
    ) {
      Ge(X, "scrollEnd", Of);
      return;
    }
    If(),
      (mt = X.isRefreshing = !0),
      re.forEach(function (r) {
        return at(r) && ++r.cacheID && (r.rec = r());
      });
    var i = Or("refreshInit");
    wf && X.sort(),
      t || vl(),
      re.forEach(function (r) {
        at(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      te.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (uo = !1),
      te.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[n];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
        }
      }),
      (Aa = 1),
      bu(!0),
      te.forEach(function (r) {
        var n = hi(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > n),
          l = r._startClamp && r.start >= n;
        (o || l) &&
          r.setPositions(
            l ? n - 1 : r.start,
            o ? Math.max(l ? n : r.start + 1, n) : r.end,
            !0
          );
      }),
      bu(!1),
      (Aa = 0),
      i.forEach(function (r) {
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
      Df(fl, 1),
      lo.pause(),
      Sr++,
      (mt = 2),
      Ai(2),
      te.forEach(function (r) {
        return at(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (mt = X.isRefreshing = !1),
      Or("refresh");
  }, "_refreshAll"),
  La = 0,
  Gs = 1,
  Kn,
  Ai = a(function (e) {
    if (e === 2 || (!mt && !uo)) {
      (X.isUpdating = !0), Kn && Kn.update(0);
      var t = te.length,
        i = nt(),
        r = i - Go >= 50,
        n = t && te[0].scroll();
      if (
        ((Gs = La > n ? -1 : 1),
        mt || (La = n),
        r &&
          (jt && !xo && i - jt > 200 && ((jt = 0), Or("scrollEnd")),
          (Ln = Go),
          (Go = i)),
        Gs < 0)
      ) {
        for (gt = t; gt-- > 0; ) te[gt] && te[gt].update(0, r);
        Gs = 1;
      } else for (gt = 0; gt < t; gt++) te[gt] && te[gt].update(0, r);
      X.isUpdating = !1;
    }
    fs = 0;
  }, "_updateAll"),
  Da = [
    Pf,
    Mf,
    pl,
    hl,
    Ht + Un,
    Ht + Yn,
    Ht + jn,
    Ht + Xn,
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
  Ys = Da.concat([
    wr,
    br,
    "boxSizing",
    "max" + _n,
    "max" + gl,
    "position",
    Ht,
    Ie,
    Ie + jn,
    Ie + Yn,
    Ie + Un,
    Ie + Xn,
  ]),
  lm = a(function (e, t, i) {
    sn(i);
    var r = e._gsap;
    if (r.spacerIsNative) sn(r.spacerState);
    else if (e._gsap.swappedIn) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  }, "_swapPinOut"),
  jo = a(function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var n = Da.length, o = t.style, l = e.style, u; n--; )
        (u = Da[n]), (o[u] = i[u]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (l[pl] = l[hl] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[wr] = co(e, _t) + Fe),
        (o[br] = co(e, Be) + Fe),
        (o[Ie] = l[Ht] = l[Mf] = l[Pf] = "0"),
        sn(r),
        (l[wr] = l["max" + _n] = i[wr]),
        (l[br] = l["max" + gl] = i[br]),
        (l[Ie] = i[Ie]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }, "_swapPinIn"),
  um = /([A-Z])/g,
  sn = a(function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        n,
        o;
      for ((e.t._gsap || V.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (n = e[r]),
          o
            ? (t[n] = o)
            : t[n] && t.removeProperty(n.replace(um, "-$1").toLowerCase());
    }
  }, "_setState"),
  As = a(function (e) {
    for (var t = Ys.length, i = e.style, r = [], n = 0; n < t; n++)
      r.push(Ys[n], i[Ys[n]]);
    return (r.t = e), r;
  }, "_getState"),
  cm = a(function (e, t, i) {
    for (var r = [], n = e.length, o = i ? 8 : 0, l; o < n; o += 2)
      (l = e[o]), r.push(l, l in t ? t[l] : e[o + 1]);
    return (r.t = e.t), r;
  }, "_copyState"),
  Xs = { left: 0, top: 0 },
  Su = a(function (e, t, i, r, n, o, l, u, c, f, d, p, h, g) {
    at(e) && (e = e(u)),
      Pt(e) &&
        e.substr(0, 3) === "max" &&
        (e = p + (e.charAt(4) === "=" ? Ws("0" + e.substr(3), i) : 0));
    var m = h ? h.time() : 0,
      _,
      b,
      w;
    if ((h && h.seek(0), isNaN(e) || (e = +e), zn(e)))
      h &&
        (e = V.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          p,
          e
        )),
        l && Hs(l, i, r, !0);
    else {
      at(t) && (t = t(u));
      var y = (e || "0").split(" "),
        v,
        S,
        k,
        C;
      (w = wt(t, u) || fe),
        (v = Ti(w) || {}),
        (!v || (!v.left && !v.top)) &&
          Gt(w).display === "none" &&
          ((C = w.style.display),
          (w.style.display = "block"),
          (v = Ti(w)),
          C ? (w.style.display = C) : w.style.removeProperty("display")),
        (S = Ws(y[0], v[r.d])),
        (k = Ws(y[1] || "0", i)),
        (e = v[r.p] - c[r.p] - f + S + n - k),
        l && Hs(l, k, r, i - k < 20 || (l._isStart && k > 20)),
        (i -= i - k);
    }
    if ((g && ((u[g] = e || -0.001), e < 0 && (e = 0)), o)) {
      var T = e + i,
        A = o._isStart;
      (_ = "scroll" + r.d2),
        Hs(
          o,
          T,
          r,
          (A && T > 20) ||
            (!A && (d ? Math.max(fe[_], Ot[_]) : o.parentNode[_]) <= T + 1)
        ),
        d &&
          ((c = Ti(l)),
          d && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + Fe));
    }
    return (
      h &&
        w &&
        ((_ = Ti(w)),
        h.seek(p),
        (b = Ti(w)),
        (h._caScrollDist = _[r.p] - b[r.p]),
        (e = (e / h._caScrollDist) * p)),
      h && h.seek(m),
      h ? e : Math.round(e)
    );
  }, "_parsePosition"),
  fm = /(webkit|moz|length|cssText|inset)/i,
  xu = a(function (e, t, i, r) {
    if (e.parentNode !== t) {
      var n = e.style,
        o,
        l;
      if (t === fe) {
        (e._stOrig = n.cssText), (l = Gt(e));
        for (o in l)
          !+o &&
            !fm.test(o) &&
            l[o] &&
            typeof n[o] == "string" &&
            o !== "0" &&
            (n[o] = l[o]);
        (n.top = i), (n.left = r);
      } else n.cssText = e._stOrig;
      (V.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }, "_reparent"),
  zf = a(function (e, t, i) {
    var r = t,
      n = r;
    return function (o) {
      var l = Math.round(e());
      return (
        l !== r &&
          l !== n &&
          Math.abs(l - r) > 3 &&
          Math.abs(l - n) > 3 &&
          ((o = l), i && i()),
        (n = r),
        (r = Math.round(o)),
        r
      );
    };
  }, "_interruptionTracker"),
  Os = a(function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), V.set(e, r);
  }, "_shiftMarker"),
  Tu = a(function (e, t) {
    var i = Ki(e, t),
      r = "_scroll" + t.p2,
      n = a(function o(l, u, c, f, d) {
        var p = o.tween,
          h = u.onComplete,
          g = {};
        c = c || i();
        var m = zf(i, c, function () {
          p.kill(), (o.tween = 0);
        });
        return (
          (d = (f && d) || 0),
          (f = f || l - c),
          p && p.kill(),
          (u[r] = l),
          (u.inherit = !1),
          (u.modifiers = g),
          (g[r] = function () {
            return m(c + f * p.ratio + d * p.ratio * p.ratio);
          }),
          (u.onUpdate = function () {
            re.cache++, o.tween && Ai();
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
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Ge(e, "wheel", i.wheelHandler),
      X.isTouch && Ge(e, "touchmove", i.wheelHandler),
      n
    );
  }, "_getTweenCreator"),
  X = (function () {
    function s(t, i) {
      Gr || s.register(V), Ma(this), this.init(t, i);
    }
    a(s, "ScrollTrigger");
    var e = s.prototype;
    return (
      (e.init = a(function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Dn)
        ) {
          this.update = this.refresh = this.kill = ui;
          return;
        }
        i = vu(Pt(i) || zn(i) || i.nodeType ? { trigger: i } : i, Ps);
        var n = i,
          o = n.onUpdate,
          l = n.toggleClass,
          u = n.id,
          c = n.onToggle,
          f = n.onRefresh,
          d = n.scrub,
          p = n.trigger,
          h = n.pin,
          g = n.pinSpacing,
          m = n.invalidateOnRefresh,
          _ = n.anticipatePin,
          b = n.onScrubComplete,
          w = n.onSnapComplete,
          y = n.once,
          v = n.snap,
          S = n.pinReparent,
          k = n.pinSpacer,
          C = n.containerAnimation,
          T = n.fastScrollEnd,
          A = n.preventOverlaps,
          P =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? _t
              : Be,
          z = !d && d !== 0,
          x = wt(i.scroller || ie),
          M = V.core.getCache(x),
          O = Mr(x),
          D =
            ("pinType" in i
              ? i.pinType
              : Xi(x, "pinType") || (O && "fixed")) === "fixed",
          R = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          N = z && i.toggleActions.split(" "),
          B = "markers" in i ? i.markers : Ps.markers,
          q = O ? 0 : parseFloat(Gt(x)["border" + P.p2 + _n]) || 0,
          E = this,
          j =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(E);
            },
          K = tm(x, O, P),
          ce = im(x, O),
          le = 0,
          ne = 0,
          ee = 0,
          de = Ki(x, P),
          ge,
          Le,
          Ve,
          ve,
          qe,
          G,
          se,
          je,
          Ue,
          L,
          Ce,
          Ut,
          Bt,
          $,
          Vt,
          Di,
          tr,
          $e,
          Ii,
          Pe,
          Kt,
          qt,
          yi,
          bn,
          De,
          gs,
          wi,
          Rr,
          Nr,
          zi,
          ir,
          oe,
          rr,
          Zt,
          Qt,
          Jt,
          nr,
          Fr,
          bi;
        if (
          ((E._startClamp = E._endClamp = !1),
          (E._dir = P),
          (_ *= 45),
          (E.scroller = x),
          (E.scroll = C ? C.time.bind(C) : de),
          (ve = de()),
          (E.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((wf = 1), i.refreshPriority === -9999 && (Kn = E)),
          (M.tweenScroll = M.tweenScroll || {
            top: Tu(x, Be),
            left: Tu(x, _t),
          }),
          (E.tweenTo = ge = M.tweenScroll[P.p]),
          (E.scrubDuration = function (F) {
            (rr = zn(F) && F),
              rr
                ? oe
                  ? oe.duration(F)
                  : (oe = V.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: rr,
                      paused: !0,
                      onComplete: a(function () {
                        return b && b(E);
                      }, "onComplete"),
                    }))
                : (oe && oe.progress(1).kill(), (oe = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !E.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (E.animation = r.pause()),
            (r.scrollTrigger = E),
            E.scrubDuration(d),
            (zi = 0),
            u || (u = r.vars.id)),
          v &&
            ((!dr(v) || v.push) && (v = { snapTo: v }),
            "scrollBehavior" in fe.style &&
              V.set(O ? [fe, Ot] : x, { scrollBehavior: "auto" }),
            re.forEach(function (F) {
              return (
                at(F) &&
                F.target === (O ? me.scrollingElement || Ot : x) &&
                (F.smooth = !1)
              );
            }),
            (Ve = at(v.snapTo)
              ? v.snapTo
              : v.snapTo === "labels"
              ? nm(r)
              : v.snapTo === "labelsDirectional"
              ? sm(r)
              : v.directional !== !1
              ? function (F, Z) {
                  return ml(v.snapTo)(F, nt() - ne < 500 ? 0 : Z.direction);
                }
              : V.utils.snap(v.snapTo)),
            (Zt = v.duration || { min: 0.1, max: 2 }),
            (Zt = dr(Zt) ? Gn(Zt.min, Zt.max) : Gn(Zt, Zt)),
            (Qt = V.delayedCall(v.delay || rr / 2 || 0.1, function () {
              var F = de(),
                Z = nt() - ne < 500,
                Y = ge.tween;
              if (
                (Z || Math.abs(E.getVelocity()) < 10) &&
                !Y &&
                !xo &&
                le !== F
              ) {
                var Q = (F - G) / $,
                  We = r && !z ? r.totalProgress() : Q,
                  ae = Z ? 0 : ((We - ir) / (nt() - Ln)) * 1e3 || 0,
                  Me = V.utils.clamp(-Q, 1 - Q, (qr(ae / 2) * ae) / 0.185),
                  et = Q + (v.inertia === !1 ? 0 : Me),
                  Ee,
                  ye,
                  he = v,
                  ei = he.onStart,
                  Se = he.onInterrupt,
                  kt = he.onComplete;
                if (
                  ((Ee = Ve(et, E)),
                  zn(Ee) || (Ee = et),
                  (ye = Math.max(0, Math.round(G + Ee * $))),
                  F <= se && F >= G && ye !== F)
                ) {
                  if (Y && !Y._initted && Y.data <= qr(ye - F)) return;
                  v.inertia === !1 && (Me = Ee - Q),
                    ge(
                      ye,
                      {
                        duration: Zt(
                          qr(
                            (Math.max(qr(et - We), qr(Ee - We)) * 0.185) /
                              ae /
                              0.05 || 0
                          )
                        ),
                        ease: v.ease || "power3",
                        data: qr(ye - F),
                        onInterrupt: a(function () {
                          return Qt.restart(!0) && Se && Se(E);
                        }, "onInterrupt"),
                        onComplete: a(function () {
                          E.update(),
                            (le = de()),
                            r &&
                              !z &&
                              (oe
                                ? oe.resetTo(
                                    "totalProgress",
                                    Ee,
                                    r._tTime / r._tDur
                                  )
                                : r.progress(Ee)),
                            (zi = ir =
                              r && !z ? r.totalProgress() : E.progress),
                            w && w(E),
                            kt && kt(E);
                        }, "onComplete"),
                      },
                      F,
                      Me * $,
                      ye - F - Me * $
                    ),
                    ei && ei(E, ge.tween);
                }
              } else E.isActive && le !== F && Qt.restart(!0);
            }).pause())),
          u && (Oa[u] = E),
          (p = E.trigger = wt(p || (h !== !0 && h))),
          (bi = p && p._gsap && p._gsap.stRevert),
          bi && (bi = bi(E)),
          (h = h === !0 ? p : wt(h)),
          Pt(l) && (l = { targets: p, className: l }),
          h &&
            (g === !1 ||
              g === Ht ||
              (g =
                !g &&
                h.parentNode &&
                h.parentNode.style &&
                Gt(h.parentNode).display === "flex"
                  ? !1
                  : Ie),
            (E.pin = h),
            (Le = V.core.getCache(h)),
            Le.spacer
              ? (Vt = Le.pinState)
              : (k &&
                  ((k = wt(k)),
                  k && !k.nodeType && (k = k.current || k.nativeElement),
                  (Le.spacerIsNative = !!k),
                  k && (Le.spacerState = As(k))),
                (Le.spacer = $e = k || me.createElement("div")),
                $e.classList.add("pin-spacer"),
                u && $e.classList.add("pin-spacer-" + u),
                (Le.pinState = Vt = As(h))),
            i.force3D !== !1 && V.set(h, { force3D: !0 }),
            (E.spacer = $e = Le.spacer),
            (Nr = Gt(h)),
            (bn = Nr[g + P.os2]),
            (Pe = V.getProperty(h)),
            (Kt = V.quickSetter(h, P.a, Fe)),
            jo(h, $e, Nr),
            (tr = As(h))),
          B)
        ) {
          (Ut = dr(B) ? vu(B, _u) : _u),
            (L = Ms("scroller-start", u, x, P, Ut, 0)),
            (Ce = Ms("scroller-end", u, x, P, Ut, 0, L)),
            (Ii = L["offset" + P.op.d2]);
          var Sn = wt(Xi(x, "content") || x);
          (je = this.markerStart = Ms("start", u, Sn, P, Ut, Ii, 0, C)),
            (Ue = this.markerEnd = Ms("end", u, Sn, P, Ut, Ii, 0, C)),
            C && (Fr = V.quickSetter([je, Ue], P.a, Fe)),
            !D &&
              !(mi.length && Xi(x, "fixedMarkers") === !0) &&
              (rm(O ? fe : x),
              V.set([L, Ce], { force3D: !0 }),
              (gs = V.quickSetter(L, P.a, Fe)),
              (Rr = V.quickSetter(Ce, P.a, Fe)));
        }
        if (C) {
          var J = C.vars.onUpdate,
            U = C.vars.onUpdateParams;
          C.eventCallback("onUpdate", function () {
            E.update(0, 0, 1), J && J.apply(C, U || []);
          });
        }
        if (
          ((E.previous = function () {
            return te[te.indexOf(E) - 1];
          }),
          (E.next = function () {
            return te[te.indexOf(E) + 1];
          }),
          (E.revert = function (F, Z) {
            if (!Z) return E.kill(!0);
            var Y = F !== !1 || !E.enabled,
              Q = rt;
            Y !== E.isReverted &&
              (Y &&
                ((Jt = Math.max(de(), E.scroll.rec || 0)),
                (ee = E.progress),
                (nr = r && r.progress())),
              je &&
                [je, Ue, L, Ce].forEach(function (We) {
                  return (We.style.display = Y ? "none" : "block");
                }),
              Y && ((rt = E), E.update(Y)),
              h &&
                (!S || !E.isActive) &&
                (Y ? lm(h, $e, Vt) : jo(h, $e, Gt(h), De)),
              Y || E.update(Y),
              (rt = Q),
              (E.isReverted = Y));
          }),
          (E.refresh = function (F, Z, Y, Q) {
            if (!((rt || !E.enabled) && !Z)) {
              if (h && F && jt) {
                Ge(s, "scrollEnd", Of);
                return;
              }
              !mt && j && j(E),
                (rt = E),
                ge.tween && !Y && (ge.tween.kill(), (ge.tween = 0)),
                oe && oe.pause(),
                m &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Ri) {
                      return Ri.vars.immediateRender && Ri.render(0, !0, !0);
                    })),
                E.isReverted || E.revert(!0, !0),
                (E._subPinOffset = !1);
              var We = K(),
                ae = ce(),
                Me = C ? C.duration() : hi(x, P),
                et = $ <= 0.01 || !$,
                Ee = 0,
                ye = Q || 0,
                he = dr(Y) ? Y.end : i.end,
                ei = i.endTrigger || p,
                Se = dr(Y)
                  ? Y.start
                  : i.start || (i.start === 0 || !p ? 0 : h ? "0 0" : "0 100%"),
                kt = (E.pinnedContainer =
                  i.pinnedContainer && wt(i.pinnedContainer, E)),
                si = (p && Math.max(0, te.indexOf(E))) || 0,
                Ke = si,
                Ze,
                tt,
                sr,
                ms,
                it,
                Ne,
                oi,
                Co,
                Il,
                xn,
                ai,
                Tn,
                vs;
              for (
                B &&
                dr(Y) &&
                ((Tn = V.getProperty(L, P.p)), (vs = V.getProperty(Ce, P.p)));
                Ke-- > 0;

              )
                (Ne = te[Ke]),
                  Ne.end || Ne.refresh(0, 1) || (rt = E),
                  (oi = Ne.pin),
                  oi &&
                    (oi === p || oi === h || oi === kt) &&
                    !Ne.isReverted &&
                    (xn || (xn = []), xn.unshift(Ne), Ne.revert(!0, !0)),
                  Ne !== te[Ke] && (si--, Ke--);
              for (
                at(Se) && (Se = Se(E)),
                  Se = hu(Se, "start", E),
                  G =
                    Su(
                      Se,
                      p,
                      We,
                      P,
                      de(),
                      je,
                      L,
                      E,
                      ae,
                      q,
                      D,
                      Me,
                      C,
                      E._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  at(he) && (he = he(E)),
                  Pt(he) &&
                    !he.indexOf("+=") &&
                    (~he.indexOf(" ")
                      ? (he = (Pt(Se) ? Se.split(" ")[0] : "") + he)
                      : ((Ee = Ws(he.substr(2), We)),
                        (he = Pt(Se)
                          ? Se
                          : (C
                              ? V.utils.mapRange(
                                  0,
                                  C.duration(),
                                  C.scrollTrigger.start,
                                  C.scrollTrigger.end,
                                  G
                                )
                              : G) + Ee),
                        (ei = p))),
                  he = hu(he, "end", E),
                  se =
                    Math.max(
                      G,
                      Su(
                        he || (ei ? "100% 0" : Me),
                        ei,
                        We,
                        P,
                        de() + Ee,
                        Ue,
                        Ce,
                        E,
                        ae,
                        q,
                        D,
                        Me,
                        C,
                        E._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Ee = 0,
                  Ke = si;
                Ke--;

              )
                (Ne = te[Ke]),
                  (oi = Ne.pin),
                  oi &&
                    Ne.start - Ne._pinPush <= G &&
                    !C &&
                    Ne.end > 0 &&
                    ((Ze =
                      Ne.end -
                      (E._startClamp ? Math.max(0, Ne.start) : Ne.start)),
                    ((oi === p && Ne.start - Ne._pinPush < G) || oi === kt) &&
                      isNaN(Se) &&
                      (Ee += Ze * (1 - Ne.progress)),
                    oi === h && (ye += Ze));
              if (
                ((G += Ee),
                (se += Ee),
                E._startClamp && (E._startClamp += Ee),
                E._endClamp &&
                  !mt &&
                  ((E._endClamp = se || -0.001), (se = Math.min(se, hi(x, P)))),
                ($ = se - G || ((G -= 0.01) && 0.001)),
                et && (ee = V.utils.clamp(0, 1, V.utils.normalize(G, se, Jt))),
                (E._pinPush = ye),
                je &&
                  Ee &&
                  ((Ze = {}),
                  (Ze[P.a] = "+=" + Ee),
                  kt && (Ze[P.p] = "-=" + de()),
                  V.set([je, Ue], Ze)),
                h && !(Aa && E.end >= hi(x, P)))
              )
                (Ze = Gt(h)),
                  (ms = P === Be),
                  (sr = de()),
                  (qt = parseFloat(Pe(P.a)) + ye),
                  !Me &&
                    se > 1 &&
                    ((ai = (O ? me.scrollingElement || Ot : x).style),
                    (ai = {
                      style: ai,
                      value: ai["overflow" + P.a.toUpperCase()],
                    }),
                    O &&
                      Gt(fe)["overflow" + P.a.toUpperCase()] !== "scroll" &&
                      (ai.style["overflow" + P.a.toUpperCase()] = "scroll")),
                  jo(h, $e, Ze),
                  (tr = As(h)),
                  (tt = Ti(h, !0)),
                  (Co = D && Ki(x, ms ? _t : Be)()),
                  g
                    ? ((De = [g + P.os2, $ + ye + Fe]),
                      (De.t = $e),
                      (Ke = g === Ie ? co(h, P) + $ + ye : 0),
                      Ke &&
                        (De.push(P.d, Ke + Fe),
                        $e.style.flexBasis !== "auto" &&
                          ($e.style.flexBasis = Ke + Fe)),
                      sn(De),
                      kt &&
                        te.forEach(function (Ri) {
                          Ri.pin === kt &&
                            Ri.vars.pinSpacing !== !1 &&
                            (Ri._subPinOffset = !0);
                        }),
                      D && de(Jt))
                    : ((Ke = co(h, P)),
                      Ke &&
                        $e.style.flexBasis !== "auto" &&
                        ($e.style.flexBasis = Ke + Fe)),
                  D &&
                    ((it = {
                      top: tt.top + (ms ? sr - G : Co) + Fe,
                      left: tt.left + (ms ? Co : sr - G) + Fe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (it[wr] = it["max" + _n] = Math.ceil(tt.width) + Fe),
                    (it[br] = it["max" + gl] = Math.ceil(tt.height) + Fe),
                    (it[Ht] =
                      it[Ht + jn] =
                      it[Ht + Yn] =
                      it[Ht + Un] =
                      it[Ht + Xn] =
                        "0"),
                    (it[Ie] = Ze[Ie]),
                    (it[Ie + jn] = Ze[Ie + jn]),
                    (it[Ie + Yn] = Ze[Ie + Yn]),
                    (it[Ie + Un] = Ze[Ie + Un]),
                    (it[Ie + Xn] = Ze[Ie + Xn]),
                    (Di = cm(Vt, it, S)),
                    mt && de(0)),
                  r
                    ? ((Il = r._initted),
                      Wo(1),
                      r.render(r.duration(), !0, !0),
                      (yi = Pe(P.a) - qt + $ + ye),
                      (wi = Math.abs($ - yi) > 1),
                      D && wi && Di.splice(Di.length - 2, 2),
                      r.render(0, !0, !0),
                      Il || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Wo(0))
                    : (yi = $),
                  ai &&
                    (ai.value
                      ? (ai.style["overflow" + P.a.toUpperCase()] = ai.value)
                      : ai.style.removeProperty("overflow-" + P.a));
              else if (p && de() && !C)
                for (tt = p.parentNode; tt && tt !== fe; )
                  tt._pinOffset &&
                    ((G -= tt._pinOffset), (se -= tt._pinOffset)),
                    (tt = tt.parentNode);
              xn &&
                xn.forEach(function (Ri) {
                  return Ri.revert(!1, !0);
                }),
                (E.start = G),
                (E.end = se),
                (ve = qe = mt ? Jt : de()),
                !C && !mt && (ve < Jt && de(Jt), (E.scroll.rec = 0)),
                E.revert(!1, !0),
                (ne = nt()),
                Qt && ((le = -1), Qt.restart(!0)),
                (rt = 0),
                r &&
                  z &&
                  (r._initted || nr) &&
                  r.progress() !== nr &&
                  r.progress(nr || 0, !0).render(r.time(), !0, !0),
                (et || ee !== E.progress || C || m || (r && !r._initted)) &&
                  (r &&
                    !z &&
                    (r._initted || ee || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      C && G < -0.001 && !ee ? V.utils.normalize(G, se, 0) : ee,
                      !0
                    ),
                  (E.progress = et || (ve - G) / $ === ee ? 0 : ee)),
                h && g && ($e._pinOffset = Math.round(E.progress * yi)),
                oe && oe.invalidate(),
                isNaN(Tn) ||
                  ((Tn -= V.getProperty(L, P.p)),
                  (vs -= V.getProperty(Ce, P.p)),
                  Os(L, P, Tn),
                  Os(je, P, Tn - (Q || 0)),
                  Os(Ce, P, vs),
                  Os(Ue, P, vs - (Q || 0))),
                et && !mt && E.update(),
                f && !mt && !Bt && ((Bt = !0), f(E), (Bt = !1));
            }
          }),
          (E.getVelocity = function () {
            return ((de() - qe) / (nt() - Ln)) * 1e3 || 0;
          }),
          (E.endAnimation = function () {
            Pn(E.callbackAnimation),
              r &&
                (oe
                  ? oe.progress(1)
                  : r.paused()
                  ? z || Pn(r, E.direction < 0, 1)
                  : Pn(r, r.reversed()));
          }),
          (E.labelToScroll = function (F) {
            return (
              (r &&
                r.labels &&
                (G || E.refresh() || G) + (r.labels[F] / r.duration()) * $) ||
              0
            );
          }),
          (E.getTrailing = function (F) {
            var Z = te.indexOf(E),
              Y = E.direction > 0 ? te.slice(0, Z).reverse() : te.slice(Z + 1);
            return (
              Pt(F)
                ? Y.filter(function (Q) {
                    return Q.vars.preventOverlaps === F;
                  })
                : Y
            ).filter(function (Q) {
              return E.direction > 0 ? Q.end <= G : Q.start >= se;
            });
          }),
          (E.update = function (F, Z, Y) {
            if (!(C && !Y && !F)) {
              var Q = mt === !0 ? Jt : E.scroll(),
                We = F ? 0 : (Q - G) / $,
                ae = We < 0 ? 0 : We > 1 ? 1 : We || 0,
                Me = E.progress,
                et,
                Ee,
                ye,
                he,
                ei,
                Se,
                kt,
                si;
              if (
                (Z &&
                  ((qe = ve),
                  (ve = C ? de() : Q),
                  v && ((ir = zi), (zi = r && !z ? r.totalProgress() : ae))),
                _ &&
                  h &&
                  !rt &&
                  !Ts &&
                  jt &&
                  (!ae && G < Q + ((Q - qe) / (nt() - Ln)) * _
                    ? (ae = 1e-4)
                    : ae === 1 &&
                      se > Q + ((Q - qe) / (nt() - Ln)) * _ &&
                      (ae = 0.9999)),
                ae !== Me && E.enabled)
              ) {
                if (
                  ((et = E.isActive = !!ae && ae < 1),
                  (Ee = !!Me && Me < 1),
                  (Se = et !== Ee),
                  (ei = Se || !!ae != !!Me),
                  (E.direction = ae > Me ? 1 : -1),
                  (E.progress = ae),
                  ei &&
                    !rt &&
                    ((ye = ae && !Me ? 0 : ae === 1 ? 1 : Me === 1 ? 2 : 3),
                    z &&
                      ((he =
                        (!Se && N[ye + 1] !== "none" && N[ye + 1]) || N[ye]),
                      (si =
                        r &&
                        (he === "complete" || he === "reset" || he in r)))),
                  A &&
                    (Se || si) &&
                    (si || d || !r) &&
                    (at(A)
                      ? A(E)
                      : E.getTrailing(A).forEach(function (sr) {
                          return sr.endAnimation();
                        })),
                  z ||
                    (oe && !rt && !Ts
                      ? (oe._dp._time - oe._start !== oe._time &&
                          oe.render(oe._dp._time - oe._start),
                        oe.resetTo
                          ? oe.resetTo("totalProgress", ae, r._tTime / r._tDur)
                          : ((oe.vars.totalProgress = ae),
                            oe.invalidate().restart()))
                      : r && r.totalProgress(ae, !!(rt && (ne || F)))),
                  h)
                ) {
                  if ((F && g && ($e.style[g + P.os2] = bn), !D))
                    Kt(In(qt + yi * ae));
                  else if (ei) {
                    if (
                      ((kt = !F && ae > Me && se + 1 > Q && Q + 1 >= hi(x, P)),
                      S)
                    )
                      if (!F && (et || kt)) {
                        var Ke = Ti(h, !0),
                          Ze = Q - G;
                        xu(
                          h,
                          fe,
                          Ke.top + (P === Be ? Ze : 0) + Fe,
                          Ke.left + (P === Be ? 0 : Ze) + Fe
                        );
                      } else xu(h, $e);
                    sn(et || kt ? Di : tr),
                      (wi && ae < 1 && et) ||
                        Kt(qt + (ae === 1 && !kt ? yi : 0));
                  }
                }
                v && !ge.tween && !rt && !Ts && Qt.restart(!0),
                  l &&
                    (Se || (y && ae && (ae < 1 || !Ho))) &&
                    cs(l.targets).forEach(function (sr) {
                      return sr.classList[et || y ? "add" : "remove"](
                        l.className
                      );
                    }),
                  o && !z && !F && o(E),
                  ei && !rt
                    ? (z &&
                        (si &&
                          (he === "complete"
                            ? r.pause().totalProgress(1)
                            : he === "reset"
                            ? r.restart(!0).pause()
                            : he === "restart"
                            ? r.restart(!0)
                            : r[he]()),
                        o && o(E)),
                      (Se || !Ho) &&
                        (c && Se && Yo(E, c),
                        R[ye] && Yo(E, R[ye]),
                        y && (ae === 1 ? E.kill(!1, 1) : (R[ye] = 0)),
                        Se || ((ye = ae === 1 ? 1 : 3), R[ye] && Yo(E, R[ye]))),
                      T &&
                        !et &&
                        Math.abs(E.getVelocity()) > (zn(T) ? T : 2500) &&
                        (Pn(E.callbackAnimation),
                        oe
                          ? oe.progress(1)
                          : Pn(r, he === "reverse" ? 1 : !ae, 1)))
                    : z && o && !rt && o(E);
              }
              if (Rr) {
                var tt = C ? (Q / C.duration()) * (C._caScrollDist || 0) : Q;
                gs(tt + (L._isFlipped ? 1 : 0)), Rr(tt);
              }
              Fr && Fr((-Q / C.duration()) * (C._caScrollDist || 0));
            }
          }),
          (E.enable = function (F, Z) {
            E.enabled ||
              ((E.enabled = !0),
              Ge(x, "resize", Rn),
              O || Ge(x, "scroll", $r),
              j && Ge(s, "refreshInit", j),
              F !== !1 && ((E.progress = ee = 0), (ve = qe = le = de())),
              Z !== !1 && E.refresh());
          }),
          (E.getTween = function (F) {
            return F && ge ? ge.tween : oe;
          }),
          (E.setPositions = function (F, Z, Y, Q) {
            if (C) {
              var We = C.scrollTrigger,
                ae = C.duration(),
                Me = We.end - We.start;
              (F = We.start + (Me * F) / ae), (Z = We.start + (Me * Z) / ae);
            }
            E.refresh(
              !1,
              !1,
              {
                start: pu(F, Y && !!E._startClamp),
                end: pu(Z, Y && !!E._endClamp),
              },
              Q
            ),
              E.update();
          }),
          (E.adjustPinSpacing = function (F) {
            if (De && F) {
              var Z = De.indexOf(P.d) + 1;
              (De[Z] = parseFloat(De[Z]) + F + Fe),
                (De[1] = parseFloat(De[1]) + F + Fe),
                sn(De);
            }
          }),
          (E.disable = function (F, Z) {
            if (
              E.enabled &&
              (F !== !1 && E.revert(!0, !0),
              (E.enabled = E.isActive = !1),
              Z || (oe && oe.pause()),
              (Jt = 0),
              Le && (Le.uncache = 1),
              j && He(s, "refreshInit", j),
              Qt && (Qt.pause(), ge.tween && ge.tween.kill() && (ge.tween = 0)),
              !O)
            ) {
              for (var Y = te.length; Y--; )
                if (te[Y].scroller === x && te[Y] !== E) return;
              He(x, "resize", Rn), O || He(x, "scroll", $r);
            }
          }),
          (E.kill = function (F, Z) {
            E.disable(F, Z), oe && !Z && oe.kill(), u && delete Oa[u];
            var Y = te.indexOf(E);
            Y >= 0 && te.splice(Y, 1),
              Y === gt && Gs > 0 && gt--,
              (Y = 0),
              te.forEach(function (Q) {
                return Q.scroller === E.scroller && (Y = 1);
              }),
              Y || mt || (E.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                F && r.revert({ kill: !1 }),
                Z || r.kill()),
              je &&
                [je, Ue, L, Ce].forEach(function (Q) {
                  return Q.parentNode && Q.parentNode.removeChild(Q);
                }),
              Kn === E && (Kn = 0),
              h &&
                (Le && (Le.uncache = 1),
                (Y = 0),
                te.forEach(function (Q) {
                  return Q.pin === h && Y++;
                }),
                Y || (Le.spacer = 0)),
              i.onKill && i.onKill(E);
          }),
          te.push(E),
          E.enable(!1, !1),
          bi && bi(E),
          r && r.add && !$)
        ) {
          var ue = E.update;
          (E.update = function () {
            (E.update = ue), re.cache++, G || se || E.refresh();
          }),
            V.delayedCall(0.01, E.update),
            ($ = 0.01),
            (G = se = 0);
        } else E.refresh();
        h && am();
      }, "init")),
      (s.register = a(function (i) {
        return (
          Gr ||
            ((V = i || Ef()), Tf() && window.document && s.enable(), (Gr = Dn)),
          Gr
        );
      }, "register")),
      (s.defaults = a(function (i) {
        if (i) for (var r in i) Ps[r] = i[r];
        return Ps;
      }, "defaults")),
      (s.disable = a(function (i, r) {
        (Dn = 0),
          te.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          He(ie, "wheel", $r),
          He(me, "scroll", $r),
          clearInterval(xs),
          He(me, "touchcancel", ui),
          He(fe, "touchstart", ui),
          ks(He, me, "pointerdown,touchstart,mousedown", gu),
          ks(He, me, "pointerup,touchend,mouseup", mu),
          lo.kill(),
          Es(He);
        for (var n = 0; n < re.length; n += 3)
          Cs(He, re[n], re[n + 1]), Cs(He, re[n], re[n + 2]);
      }, "disable")),
      (s.enable = a(function () {
        if (
          ((ie = window),
          (me = document),
          (Ot = me.documentElement),
          (fe = me.body),
          V &&
            ((cs = V.utils.toArray),
            (Gn = V.utils.clamp),
            (Ma = V.core.context || ui),
            (Wo = V.core.suppressOverwrites || ui),
            (fl = ie.history.scrollRestoration || "auto"),
            (La = ie.pageYOffset || 0),
            V.core.globals("ScrollTrigger", s),
            fe))
        ) {
          (Dn = 1),
            (nn = document.createElement("div")),
            (nn.style.height = "100vh"),
            (nn.style.position = "absolute"),
            If(),
            em(),
            Oe.register(V),
            (s.isTouch = Oe.isTouch),
            (Fi =
              Oe.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Pa = Oe.isTouch === 1),
            Ge(ie, "wheel", $r),
            (cl = [ie, me, Ot, fe]),
            V.matchMedia &&
              ((s.matchMedia = function (c) {
                var f = V.matchMedia(),
                  d;
                for (d in c) f.add(d, c[d]);
                return f;
              }),
              V.addEventListener("matchMediaInit", function () {
                return vl();
              }),
              V.addEventListener("matchMediaRevert", function () {
                return Lf();
              }),
              V.addEventListener("matchMedia", function () {
                gr(0, 1), Or("matchMedia");
              }),
              V.matchMedia().add("(orientation: portrait)", function () {
                return Xo(), Xo;
              })),
            Xo(),
            Ge(me, "scroll", $r);
          var i = fe.hasAttribute("style"),
            r = fe.style,
            n = r.borderTopStyle,
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
              l = Ti(fe),
              Be.m = Math.round(l.top + Be.sc()) || 0,
              _t.m = Math.round(l.left + _t.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              i || (fe.setAttribute("style", ""), fe.removeAttribute("style")),
              xs = setInterval(yu, 250),
              V.delayedCall(0.5, function () {
                return (Ts = 0);
              }),
              Ge(me, "touchcancel", ui),
              Ge(fe, "touchstart", ui),
              ks(Ge, me, "pointerdown,touchstart,mousedown", gu),
              ks(Ge, me, "pointerup,touchend,mouseup", mu),
              Ca = V.utils.checkPrefix("transform"),
              Ys.push(Ca),
              Gr = nt(),
              lo = V.delayedCall(0.2, gr).pause(),
              Yr = [
                me,
                "visibilitychange",
                function () {
                  var c = ie.innerWidth,
                    f = ie.innerHeight;
                  me.hidden
                    ? ((fu = c), (du = f))
                    : (fu !== c || du !== f) && Rn();
                },
                me,
                "DOMContentLoaded",
                gr,
                ie,
                "load",
                gr,
                ie,
                "resize",
                Rn,
              ],
              Es(Ge),
              te.forEach(function (c) {
                return c.enable(0, 1);
              }),
              u = 0;
            u < re.length;
            u += 3
          )
            Cs(He, re[u], re[u + 1]), Cs(He, re[u], re[u + 2]);
        }
      }, "enable")),
      (s.config = a(function (i) {
        "limitCallbacks" in i && (Ho = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(xs)) || ((xs = r) && setInterval(yu, r)),
          "ignoreMobileResize" in i &&
            (Pa = s.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Es(He) || Es(Ge, i.autoRefreshEvents || "none"),
            (bf = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }, "config")),
      (s.scrollerProxy = a(function (i, r) {
        var n = wt(i),
          o = re.indexOf(n),
          l = Mr(n);
        ~o && re.splice(o, l ? 6 : 2),
          r && (l ? mi.unshift(ie, r, fe, r, Ot, r) : mi.unshift(n, r));
      }, "scrollerProxy")),
      (s.clearMatchMedia = a(function (i) {
        te.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }, "clearMatchMedia")),
      (s.isInViewport = a(function (i, r, n) {
        var o = (Pt(i) ? wt(i) : i).getBoundingClientRect(),
          l = o[n ? wr : br] * r || 0;
        return n
          ? o.right - l > 0 && o.left + l < ie.innerWidth
          : o.bottom - l > 0 && o.top + l < ie.innerHeight;
      }, "isInViewport")),
      (s.positionInViewport = a(function (i, r, n) {
        Pt(i) && (i = wt(i));
        var o = i.getBoundingClientRect(),
          l = o[n ? wr : br],
          u =
            r == null
              ? l / 2
              : r in fo
              ? fo[r] * l
              : ~r.indexOf("%")
              ? (parseFloat(r) * l) / 100
              : parseFloat(r) || 0;
        return n ? (o.left + u) / ie.innerWidth : (o.top + u) / ie.innerHeight;
      }, "positionInViewport")),
      (s.killAll = a(function (i) {
        if (
          (te.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          i !== !0)
        ) {
          var r = Ar.killAll || [];
          (Ar = {}),
            r.forEach(function (n) {
              return n();
            });
        }
      }, "killAll")),
      s
    );
  })();
X.version = "3.13.0";
X.saveStyles = function (s) {
  return s
    ? cs(s).forEach(function (e) {
        if (e && e.style) {
          var t = Ct.indexOf(e);
          t >= 0 && Ct.splice(t, 5),
            Ct.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              V.core.getCache(e),
              Ma()
            );
        }
      })
    : Ct;
};
X.revert = function (s, e) {
  return vl(!s, e);
};
X.create = function (s, e) {
  return new X(s, e);
};
X.refresh = function (s) {
  return s ? Rn(!0) : (Gr || X.register()) && gr(!0);
};
X.update = function (s) {
  return ++re.cache && Ai(s === !0 ? 2 : 0);
};
X.clearScrollMemory = Df;
X.maxScroll = function (s, e) {
  return hi(s, e ? _t : Be);
};
X.getScrollFunc = function (s, e) {
  return Ki(wt(s), e ? _t : Be);
};
X.getById = function (s) {
  return Oa[s];
};
X.getAll = function () {
  return te.filter(function (s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
X.isScrolling = function () {
  return !!jt;
};
X.snapDirectional = ml;
X.addEventListener = function (s, e) {
  var t = Ar[s] || (Ar[s] = []);
  ~t.indexOf(e) || t.push(e);
};
X.removeEventListener = function (s, e) {
  var t = Ar[s],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
X.batch = function (s, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    n = e.batchMax || 1e9,
    o = a(function (c, f) {
      var d = [],
        p = [],
        h = V.delayedCall(r, function () {
          f(d, p), (d = []), (p = []);
        }).pause();
      return function (g) {
        d.length || h.restart(!0),
          d.push(g.trigger),
          p.push(g),
          n <= d.length && h.progress(1);
      };
    }, "proxyCallback"),
    l;
  for (l in e)
    i[l] =
      l.substr(0, 2) === "on" && at(e[l]) && l !== "onRefreshInit"
        ? o(l, e[l])
        : e[l];
  return (
    at(n) &&
      ((n = n()),
      Ge(X, "refresh", function () {
        return (n = e.batchMax());
      })),
    cs(s).forEach(function (u) {
      var c = {};
      for (l in i) c[l] = i[l];
      (c.trigger = u), t.push(X.create(c));
    }),
    t
  );
};
var Eu = a(function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  }, "_clampScrollAndGetDurationMultiplier"),
  Uo = a(function s(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Oe.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ot && s(fe, t);
  }, "_allowNativePanning"),
  Ls = { auto: 1, scroll: 1 },
  dm = a(function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      n = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = n._gsap || V.core.getCache(n),
      l = nt(),
      u;
    if (!o._isScrollT || l - o._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== fe &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(Ls[(u = Gt(n)).overflowY] || Ls[u.overflowX]));

      )
        n = n.parentNode;
      (o._isScroll =
        n &&
        n !== i &&
        !Mr(n) &&
        (Ls[(u = Gt(n)).overflowY] || Ls[u.overflowX])),
        (o._isScrollT = l);
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  }, "_nestedScroll"),
  Rf = a(function (e, t, i, r) {
    return Oe.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && dm),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: a(function () {
        return i && Ge(me, Oe.eventTypes[0], Cu, !1, !0);
      }, "onEnable"),
      onDisable: a(function () {
        return He(me, Oe.eventTypes[0], Cu, !0);
      }, "onDisable"),
    });
  }, "_inputObserver"),
  hm = /(input|label|select|textarea)/i,
  ku,
  Cu = a(function (e) {
    var t = hm.test(e.target.tagName);
    (t || ku) && ((e._gsapAllow = !0), (ku = t));
  }, "_captureInputs"),
  pm = a(function (e) {
    dr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      i = t.normalizeScrollX,
      r = t.momentum,
      n = t.allowNestedScroll,
      o = t.onRelease,
      l,
      u,
      c = wt(e.target) || Ot,
      f = V.core.globals().ScrollSmoother,
      d = f && f.get(),
      p =
        Fi &&
        ((e.content && wt(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      h = Ki(c, Be),
      g = Ki(c, _t),
      m = 1,
      _ =
        (Oe.isTouch && ie.visualViewport
          ? ie.visualViewport.scale * ie.visualViewport.width
          : ie.outerWidth) / ie.innerWidth,
      b = 0,
      w = at(r)
        ? function () {
            return r(l);
          }
        : function () {
            return r || 2.8;
          },
      y,
      v,
      S = Rf(c, e.type, !0, n),
      k = a(function () {
        return (v = !1);
      }, "resumeTouchMove"),
      C = ui,
      T = ui,
      A = a(function () {
        (u = hi(c, Be)),
          (T = Gn(Fi ? 1 : 0, u)),
          i && (C = Gn(0, hi(c, _t))),
          (y = Sr);
      }, "updateClamps"),
      P = a(function () {
        (p._gsap.y = In(parseFloat(p._gsap.y) + h.offset) + "px"),
          (p.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(p._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      }, "removeContentOffset"),
      z = a(function () {
        if (v) {
          requestAnimationFrame(k);
          var B = In(l.deltaY / 2),
            q = T(h.v - B);
          if (p && q !== h.v + h.offset) {
            h.offset = q - h.v;
            var E = In((parseFloat(p && p._gsap.y) || 0) - h.offset);
            (p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              E +
              ", 0, 1)"),
              (p._gsap.y = E + "px"),
              (h.cacheID = re.cache),
              Ai();
          }
          return !0;
        }
        h.offset && P(), (v = !0);
      }, "ignoreDrag"),
      x,
      M,
      O,
      D,
      R = a(function () {
        A(),
          x.isActive() &&
            x.vars.scrollY > u &&
            (h() > u ? x.progress(1) && h(u) : x.resetTo("scrollY", u));
      }, "onResize");
    return (
      p && V.set(p, { y: "+=0" }),
      (e.ignoreCheck = function (N) {
        return (
          (Fi && N.type === "touchmove" && z()) ||
          (m > 1.05 && N.type !== "touchstart") ||
          l.isGesturing ||
          (N.touches && N.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        v = !1;
        var N = m;
        (m = In(((ie.visualViewport && ie.visualViewport.scale) || 1) / _)),
          x.pause(),
          N !== m && Uo(c, m > 1.01 ? !0 : i ? !1 : "x"),
          (M = g()),
          (O = h()),
          A(),
          (y = Sr);
      }),
      (e.onRelease = e.onGestureStart =
        function (N, B) {
          if ((h.offset && P(), !B)) D.restart(!0);
          else {
            re.cache++;
            var q = w(),
              E,
              j;
            i &&
              ((E = g()),
              (j = E + (q * 0.05 * -N.velocityX) / 0.227),
              (q *= Eu(g, E, j, hi(c, _t))),
              (x.vars.scrollX = C(j))),
              (E = h()),
              (j = E + (q * 0.05 * -N.velocityY) / 0.227),
              (q *= Eu(h, E, j, hi(c, Be))),
              (x.vars.scrollY = T(j)),
              x.invalidate().duration(q).play(0.01),
              ((Fi && x.vars.scrollY >= u) || E >= u - 1) &&
                V.to({}, { onUpdate: R, duration: q });
          }
          o && o(N);
        }),
      (e.onWheel = function () {
        x._ts && x.pause(), nt() - b > 1e3 && ((y = 0), (b = nt()));
      }),
      (e.onChange = function (N, B, q, E, j) {
        if (
          (Sr !== y && A(),
          B && i && g(C(E[2] === B ? M + (N.startX - N.x) : g() + B - E[1])),
          q)
        ) {
          h.offset && P();
          var K = j[2] === q,
            ce = K ? O + N.startY - N.y : h() + q - j[1],
            le = T(ce);
          K && ce !== le && (O += le - ce), h(le);
        }
        (q || B) && Ai();
      }),
      (e.onEnable = function () {
        Uo(c, i ? !1 : "x"),
          X.addEventListener("refresh", R),
          Ge(ie, "resize", R),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = g.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        Uo(c, !0),
          He(ie, "resize", R),
          X.removeEventListener("refresh", R),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new Oe(e)),
      (l.iOS = Fi),
      Fi && !h() && h(1),
      Fi && V.ticker.add(ui),
      (D = l._dc),
      (x = V.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: zf(h, h(), function () {
            return x.pause();
          }),
        },
        onUpdate: Ai,
        onComplete: D.vars.onComplete,
      })),
      l
    );
  }, "_getScrollNormalizer");
X.sort = function (s) {
  if (at(s)) return te.sort(s);
  var e = ie.pageYOffset || 0;
  return (
    X.getAll().forEach(function (t) {
      return (t._sortY = t.trigger
        ? e + t.trigger.getBoundingClientRect().top
        : t.start + ie.innerHeight);
    }),
    te.sort(
      s ||
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
X.observe = function (s) {
  return new Oe(s);
};
X.normalizeScroll = function (s) {
  if (typeof s > "u") return pt;
  if (s === !0 && pt) return pt.enable();
  if (s === !1) {
    pt && pt.kill(), (pt = s);
    return;
  }
  var e = s instanceof Oe ? s : pm(s);
  return pt && pt.target === e.target && pt.kill(), Mr(e.target) && (pt = e), e;
};
X.core = {
  _getVelocityProp: ka,
  _inputObserver: Rf,
  _scrollers: re,
  _proxies: mi,
  bridge: {
    ss: a(function () {
      jt || Or("scrollStart"), (jt = nt());
    }, "ss"),
    ref: a(function () {
      return rt;
    }, "ref"),
  },
};
Ef() && V.registerPlugin(X);
let Mn,
  Wr,
  Ia,
  gm = a(() => Ia || be.register(window.gsap), "_initIfNecessary"),
  Pu = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  ho = a(
    (s) =>
      typeof s == "string"
        ? ho(document.querySelectorAll(s))
        : "length" in s
        ? Array.from(s)
        : [s],
    "_toArray$2"
  ),
  Mu = a((s) => ho(s).filter((e) => e instanceof HTMLElement), "_elements"),
  za = [],
  Ko = a(function () {}, "_context"),
  mm = /\s+/g,
  Au = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  Ou = { left: 0, top: 0, width: 0, height: 0 },
  Lu = a((s, e) => {
    if (e) {
      let t = new Set(s.join("").match(e) || za),
        i = s.length,
        r,
        n,
        o,
        l;
      if (t.size)
        for (; --i > -1; ) {
          n = s[i];
          for (o of t)
            if (o.startsWith(n) && o.length > n.length) {
              for (
                r = 0, l = n;
                o.startsWith((l += s[i + ++r])) && l.length < o.length;

              );
              if (r && l.length === o.length) {
                (s[i] = o), s.splice(i + 1, r);
                break;
              }
            }
        }
    }
    return s;
  }, "_stretchToFitSpecialChars"),
  Du = a(
    (s) =>
      window.getComputedStyle(s).display === "inline" &&
      (s.style.display = "inline-block"),
    "_disallowInline"
  ),
  Hr = a(
    (s, e, t) =>
      e.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, t),
    "_insertNodeBefore"
  ),
  Ra = a((s, e, t) => {
    let i = e[s + "sClass"] || "",
      { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = e,
      l = s === "line" ? "block" : "inline-block",
      u = i.indexOf("++") > -1,
      c = a((f) => {
        let d = document.createElement(r),
          p = t.length + 1;
        return (
          i && (d.className = i + (u ? " " + i + p : "")),
          o && d.style.setProperty("--" + s, p + ""),
          n !== "none" && d.setAttribute("aria-hidden", "true"),
          r !== "span" &&
            ((d.style.position = "relative"), (d.style.display = l)),
          (d.textContent = f),
          t.push(d),
          d
        );
      }, "wrapper");
    return u && (i = i.replace("++", "")), (c.collection = t), c;
  }, "_getWrapper"),
  vm = a((s, e, t, i) => {
    let r = Ra("line", t, i),
      n = window.getComputedStyle(s).textAlign || "left";
    return (o, l) => {
      let u = r("");
      for (u.style.textAlign = n, s.insertBefore(u, e[o]); o < l; o++)
        u.appendChild(e[o]);
      u.normalize();
    };
  }, "_getLineWrapper"),
  Nf = a((s, e, t, i, r, n, o, l, u, c) => {
    var f;
    let d = Array.from(s.childNodes),
      p = 0,
      { wordDelimiter: h, reduceWhiteSpace: g = !0, prepareText: m } = e,
      _ = s.getBoundingClientRect(),
      b = _,
      w = !g && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre",
      y = 0,
      v = t.collection,
      S,
      k,
      C,
      T,
      A,
      P,
      z,
      x,
      M,
      O,
      D,
      R,
      N,
      B,
      q,
      E,
      j,
      K;
    for (
      typeof h == "object"
        ? ((C = h.delimiter || h), (k = h.replaceWith || ""))
        : (k = h === "" ? "" : h || " "),
        S = k !== " ";
      p < d.length;
      p++
    )
      if (((T = d[p]), T.nodeType === 3)) {
        for (
          q = T.textContent || "",
            g
              ? (q = q.replace(mm, " "))
              : w &&
                (q = q.replace(
                  /\n/g,
                  k +
                    `
`
                )),
            m && (q = m(q, s)),
            T.textContent = q,
            A = k || C ? q.split(C || k) : q.match(l) || za,
            j = A[A.length - 1],
            x = S ? j.slice(-1) === " " : !j,
            j || A.pop(),
            b = _,
            z = S ? A[0].charAt(0) === " " : !A[0],
            z && Hr(" ", s, T),
            A[0] || A.shift(),
            Lu(A, u),
            (n && c) || (T.textContent = ""),
            M = 1;
          M <= A.length;
          M++
        )
          if (
            ((E = A[M - 1]),
            !g &&
              w &&
              E.charAt(0) ===
                `
` &&
              ((f = T.previousSibling) == null || f.remove(),
              Hr(document.createElement("br"), s, T),
              (E = E.slice(1))),
            !g && E === "")
          )
            Hr(k, s, T);
          else if (E === " ") s.insertBefore(document.createTextNode(" "), T);
          else {
            if (
              (S && E.charAt(0) === " " && Hr(" ", s, T),
              y && M === 1 && !z && v.indexOf(y.parentNode) > -1
                ? ((P = v[v.length - 1]),
                  P.appendChild(document.createTextNode(i ? "" : E)))
                : ((P = t(i ? "" : E)),
                  Hr(P, s, T),
                  y && M === 1 && !z && P.insertBefore(y, P.firstChild)),
              i)
            )
              for (
                D = Pu
                  ? Lu(
                      [...Pu.segment(E)].map((ce) => ce.segment),
                      u
                    )
                  : E.match(l) || za,
                  K = 0;
                K < D.length;
                K++
              )
                P.appendChild(
                  D[K] === " " ? document.createTextNode(" ") : i(D[K])
                );
            if (n && c) {
              if (
                ((q = T.textContent = q.substring(E.length + 1, q.length)),
                (O = P.getBoundingClientRect()),
                O.top > b.top && O.left <= b.left)
              ) {
                for (R = s.cloneNode(), N = s.childNodes[0]; N && N !== P; )
                  (B = N), (N = N.nextSibling), R.appendChild(B);
                s.parentNode.insertBefore(R, s), r && Du(R);
              }
              b = O;
            }
            (M < A.length || x) &&
              Hr(
                M >= A.length ? " " : S && E.slice(-1) === " " ? " " + k : k,
                s,
                T
              );
          }
        s.removeChild(T), (y = 0);
      } else
        T.nodeType === 1 &&
          (o && o.indexOf(T) > -1
            ? (v.indexOf(T.previousSibling) > -1 &&
                v[v.length - 1].appendChild(T),
              (y = T))
            : (Nf(T, e, t, i, r, n, o, l, u, !0), (y = 0)),
          r && Du(T));
  }, "_splitWordsAndCharsRecursively");
var Er;
const Ff =
  ((Er = class {
    constructor(e, t) {
      (this.isSplit = !1),
        gm(),
        (this.elements = Mu(e)),
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.masks = []),
        (this.vars = t),
        (this._split = () => this.isSplit && this.split(this.vars));
      let i = [],
        r,
        n = a(() => {
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
            clearTimeout(r), (r = setTimeout(n, 200));
          }),
      }),
        Ko(this),
        this.split(t);
    }
    split(e) {
      this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
      let {
          type: t = "chars,words,lines",
          aria: i = "auto",
          deepSlice: r = !0,
          smartWrap: n,
          onSplit: o,
          autoSplit: l = !1,
          specialChars: u,
          mask: c,
        } = this.vars,
        f = t.indexOf("lines") > -1,
        d = t.indexOf("chars") > -1,
        p = t.indexOf("words") > -1,
        h = d && !p && !f,
        g =
          u && ("push" in u ? new RegExp("(?:" + u.join("|") + ")", "gu") : u),
        m = g ? new RegExp(g.source + "|" + Au.source, "gu") : Au,
        _ = !!e.ignore && Mu(e.ignore),
        { orig: b, animTime: w, obs: y } = this._data,
        v;
      return (
        (d || p || f) &&
          (this.elements.forEach((S, k) => {
            (b[k] = {
              element: S,
              html: S.innerHTML,
              ariaL: S.getAttribute("aria-label"),
              ariaH: S.getAttribute("aria-hidden"),
            }),
              i === "auto"
                ? S.setAttribute("aria-label", (S.textContent || "").trim())
                : i === "hidden" && S.setAttribute("aria-hidden", "true");
            let C = [],
              T = [],
              A = [],
              P = d ? Ra("char", e, C) : null,
              z = Ra("word", e, T),
              x,
              M,
              O,
              D;
            if ((Nf(S, e, z, P, h, r && (f || h), _, m, g, !1), f)) {
              let R = ho(S.childNodes),
                N = vm(S, R, e, A),
                B,
                q = [],
                E = 0,
                j = R.map((ce) =>
                  ce.nodeType === 1 ? ce.getBoundingClientRect() : Ou
                ),
                K = Ou;
              for (x = 0; x < R.length; x++)
                (B = R[x]),
                  B.nodeType === 1 &&
                    (B.nodeName === "BR"
                      ? (q.push(B), N(E, x + 1), (E = x + 1), (K = j[E]))
                      : (x &&
                          j[x].top > K.top &&
                          j[x].left <= K.left &&
                          (N(E, x), (E = x)),
                        (K = j[x])));
              E < x && N(E, x),
                q.forEach((ce) => {
                  var le;
                  return (le = ce.parentNode) == null
                    ? void 0
                    : le.removeChild(ce);
                });
            }
            if (!p) {
              for (x = 0; x < T.length; x++)
                if (
                  ((M = T[x]),
                  d || !M.nextSibling || M.nextSibling.nodeType !== 3)
                )
                  if (n && !f) {
                    for (
                      O = document.createElement("span"),
                        O.style.whiteSpace = "nowrap";
                      M.firstChild;

                    )
                      O.appendChild(M.firstChild);
                    M.replaceWith(O);
                  } else M.replaceWith(...M.childNodes);
                else
                  (D = M.nextSibling),
                    D &&
                      D.nodeType === 3 &&
                      ((D.textContent =
                        (M.textContent || "") + (D.textContent || "")),
                      M.remove());
              (T.length = 0), S.normalize();
            }
            this.lines.push(...A), this.words.push(...T), this.chars.push(...C);
          }),
          c &&
            this[c] &&
            this.masks.push(
              ...this[c].map((S) => {
                let k = S.cloneNode();
                return (
                  S.replaceWith(k),
                  k.appendChild(S),
                  S.className &&
                    (k.className = S.className.replace(
                      /(\b\w+\b)/g,
                      "$1-mask"
                    )),
                  (k.style.overflow = "clip"),
                  k
                );
              })
            )),
        (this.isSplit = !0),
        Wr && (l ? Wr.addEventListener("loadingdone", this._split) : Wr.status),
        (v = o && o(this)) &&
          v.totalTime &&
          (this._data.anim = w ? v.totalTime(w) : v),
        f &&
          l &&
          this.elements.forEach((S, k) => {
            (b[k].width = S.offsetWidth), y && y.observe(S);
          }),
        this
      );
    }
    revert() {
      var e, t;
      let { orig: i, anim: r, obs: n } = this._data;
      return (
        n && n.disconnect(),
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
        Wr?.removeEventListener("loadingdone", this._split),
        r && ((this._data.animTime = r.totalTime()), r.revert()),
        (t = (e = this.vars).onRevert) == null || t.call(e, this),
        this
      );
    }
    static create(e, t) {
      return new Er(e, t);
    }
    static register(e) {
      (Mn = Mn || e || window.gsap),
        Mn && ((ho = Mn.utils.toArray), (Ko = Mn.core.context || Ko)),
        !Ia && window.innerWidth > 0 && ((Wr = document.fonts), (Ia = !0));
    }
  }),
  a(Er, "_SplitText"),
  Er);
Ff.version = "3.13.0";
let be = Ff;
I.registerPlugin(X, be);
const _m = a(async () => {
    await document.fonts.ready,
      document.querySelectorAll("[split-text]").forEach((e) => {
        e.hasAttribute("data-split-initialized") ||
          (e.setAttribute("data-split-initialized", "true"),
          be.create(e, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "split-line",
            tag: "div",
            onSplit(t) {
              t.lines.forEach((n) => {
                const o = document.createElement("div");
                o.setAttribute("data-line-wrapper", ""),
                  (o.style.overflow = "clip"),
                  (o.style.paddingBottom = "5px"),
                  (o.style.position = "relative"),
                  n.parentNode.insertBefore(o, n),
                  o.appendChild(n);
              });
              const i = e.querySelectorAll("[data-line-wrapper]"),
                r = Array.from(i).map((n) => n.firstChild);
              I.set(r, { willChange: "transform" }),
                I.from(r, {
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
  Qi = a(() => {
    _m();
  }, "initSplitTextAnimate");
I.registerPlugin(X);
const Ji = a(() => {
  const s =
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
        X.getAll().forEach((l) => l.kill());
    }, "cleanup"),
    r = a((l) => {
      const u = l.getAttribute("motion");
      if (u !== "fade" && u !== "move-up") return;
      const c = parseFloat(l.getAttribute("motion-duration") || "1.4"),
        f = parseFloat(l.getAttribute("motion-delay") || "0"),
        d = l.getAttribute("motion-ease") || "power2.out",
        p = l.getAttribute("motion-start") || "top 80%";
      let h;
      u === "fade"
        ? (I.set(l, { opacity: 0 }),
          (h = I.to(l, {
            opacity: 1,
            duration: c,
            delay: f,
            ease: d,
            scrollTrigger: {
              trigger: l,
              start: p,
              toggleActions: "play none none reverse",
            },
          })))
        : u === "move-up" &&
          (I.set(l, { opacity: 0, y: 50 }),
          (h = I.to(l, {
            opacity: 1,
            y: 0,
            duration: c,
            delay: f,
            ease: d,
            scrollTrigger: {
              trigger: l,
              start: p,
              toggleActions: "play none none reverse",
            },
          }))),
        h && e.push(h);
    }, "createAnimation"),
    n = a(() => {
      document.querySelectorAll("[motion]").forEach((u) => r(u));
    }, "createAllAnimations"),
    o = a(() => {
      s ||
        (clearTimeout(t),
        (t = setTimeout(() => {
          i(),
            setTimeout(() => {
              n(), X.refresh();
            }, 100);
        }, 250)));
    }, "handleResize");
  n(), s || window.addEventListener("resize", o);
}, "initGenAnimation");
I.registerPlugin(be);
const ym = a((s) => {
  const e = document.querySelectorAll("[page-load='component']"),
    t = document.querySelectorAll("[page-load='wrap']"),
    i = document.querySelectorAll("[page-load='gradient']"),
    r = document.querySelectorAll("[page-load='text']"),
    n = document.querySelectorAll(".page_cover"),
    o = localStorage.getItem("pageLoadPlayed") !== "true",
    l = sessionStorage.getItem("sessionPageLoadPlayed") !== "true";
  o && localStorage.setItem("pageLoadPlayed", "true"),
    l && sessionStorage.setItem("sessionPageLoadPlayed", "true");
  const u = o || l,
    c = I.timeline();
  I.set(i, { opacity: 0 }), I.set(t, { opacity: 0 });
  let f = [],
    d = [];
  return (
    u
      ? (r.forEach((p) => {
          const h = be.create(p, {
            type: "lines",
            mask: "lines",
            linesClass: "pg-load-text-line",
            onSplit: a(function (g) {
              return (
                I.set(g.lines, {
                  opacity: 0,
                  yPercent: 100,
                  willChange: "transform, opacity",
                }),
                g
              );
            }, "onSplit"),
          });
          f.push(h);
        }),
        (d = f.flatMap((p) => p.lines)))
      : I.set(r, { opacity: 0 }),
    c.to(i, {
      opacity: u ? 1 : 0,
      duration: u ? (o ? 2 : 1.6) : 0.6,
      ease: "power1.out",
    }),
    c.to(t, { opacity: 1, duration: u ? 1 : 0.8, ease: "power2.inOut" }, "<"),
    c.to(
      n,
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
        duration: u ? 1.6 : 1.2,
        ease: "expo.inOut",
        onComplete: a(() => {
          I.set(e, { pointerEvents: "none" }),
            u && f.forEach((p) => p.revert());
        }, "onComplete"),
      },
      u ? (o ? "-=0.7" : "-=0.5") : "-=0.2"
    ),
    c
  );
}, "pageLoad");
I.registerPlugin(be);
const wm = a((s) => {
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
    const n = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const u = document.querySelector("[home-hero='text']"),
          c = document.querySelector("[home-hero='btn']"),
          f = document.querySelector("[home-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "home-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  h.parentNode.insertBefore(g, h),
                  g.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(g, h),
                      g.appendChild(h);
                  }),
                (i = I.timeline()),
                I.set(".move-text", { opacity: 0, yPercent: 100 }),
                I.set(c, { opacity: 0 }),
                I.set(f, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initHomeTransitions"),
  er = a((s) => {
    const e = document.querySelectorAll("[nav-load='component']"),
      t = document.querySelectorAll("[main-nav='brand']"),
      i = document.querySelectorAll("[nav-link='wrap']");
    I.set(e, { opacity: 0 }),
      I.set(t, { opacity: 0 }),
      I.set(i, { opacity: 0, yPercent: -100 });
    const r = I.timeline();
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
  bm = a(() => {
    const s = document.querySelector("[home-hero='visual']"),
      e = document.querySelector("[home-hero='follow-button']");
    I.set(e, {
      xPercent: -50,
      yPercent: -50,
      willChange: "transform, opacity",
    });
    let t = !1;
    const i = s.getBoundingClientRect(),
      r = i.width / 2,
      n = i.height / 2;
    s.addEventListener("mouseenter", () => {
      t = !0;
    }),
      s.addEventListener("mouseleave", () => {
        (t = !1),
          I.to(e, { x: 0, y: 0, duration: 1.6, ease: "elastic.out(1.5, 0.5)" });
      }),
      window.addEventListener("mousemove", (o) => {
        if (t) {
          const l = o.clientX + 10,
            u = o.clientY + 10,
            c = e.parentElement.getBoundingClientRect(),
            f = l - c.left,
            d = u - c.top;
          I.to(e, {
            x: f - r + 50,
            y: d - n - 30,
            duration: 1.4,
            ease: "elastic.out(2, 0.75)",
          });
        }
      });
  }, "videoMouseFollow"),
  Sm = a(() => {
    bm();
  }, "initVideoMouseFollow"),
  Iu = a(() => {
    Dd(), dc(), Qi(), Ji(), Sm();
    const s = ym();
    s.add(() => er(), "-=0.8"), s.add(() => wm(), "-=1");
  }, "homeInit"),
  Bf = a(() => {
    const s = document.querySelector(".swiper[review-slider='component']");
    s &&
      new Cr(s, {
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
I.registerPlugin(X);
const xm = a(() => {
    const s =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
    let e, t;
    const i = a(() => {
        e && (e.kill(), (e = null)), X.getAll().forEach((o) => o.kill());
      }, "cleanup"),
      r = a(() => {
        const o = document.querySelector("[impact-slide='main']"),
          l = o?.querySelectorAll("[impact-slide='component']");
        !o ||
          !l.length ||
          (l.forEach((u, c) => {
            I.set(u, {
              clipPath: c === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
            });
          }),
          (e = I.timeline({
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
      n = a(() => {
        s ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), X.refresh();
              }, 100);
          }, 250)));
      }, "handleResize");
    r(), s || window.addEventListener("resize", n);
  }, "initImpactSlide"),
  Tm = a(() => {
    document.querySelectorAll("[image-index='wrap']").forEach((s) => {
      const e = s.querySelector("[image-index='large']"),
        t = s.querySelector("[image-index='small']"),
        i = a((u, c) => {
          const f = [];
          let d = u;
          for (; d && d !== c; )
            (d = d.parentElement), d && d !== c && f.push(d);
          return f;
        }, "getAllParents"),
        r = i(e, s),
        n = i(t, s),
        o = a((u, c, f) => {
          (u.style.zIndex = f),
            c.forEach((d) => {
              d.style.zIndex = f;
            });
        }, "setZIndex");
      o(e, r, "2"), o(t, n, "1");
      const l = a((u, c, f, d) => {
        o(u, f, "2"), o(c, d, "1");
      }, "handleClick");
      e.addEventListener("click", () => l(e, t, r, n)),
        t.addEventListener("click", () => l(t, e, n, r));
    });
  }, "imageIndex"),
  _l = a(() => {
    Tm();
  }, "initImageIndex"),
  Em = a(() => {
    const s = document.querySelector(".swiper[about-slider='component']");
    s &&
      new Cr(s, {
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
  zr = a((s) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = I.timeline();
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
I.registerPlugin(be);
const km = a((s) => {
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
    const n = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const u = document.querySelector("[about-hero='text']"),
          c = document.querySelectorAll("[about-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "about-hero-text-line",
            tag: "span",
            onSplit(f) {
              f.lines.forEach((p) => {
                const h = document.createElement("div");
                h.classList.add("move-text"),
                  p.parentNode.insertBefore(h, p),
                  h.appendChild(p);
              });
              const d = u.querySelectorAll("span");
              return (
                d.length &&
                  d.forEach((p) => {
                    const h = document.createElement("div");
                    (h.style.overflow = "clip"),
                      (h.style.paddingBottom = "3px"),
                      p.parentNode.insertBefore(h, p),
                      h.appendChild(p);
                  }),
                (i = I.timeline()),
                I.set(".move-text", { opacity: 0, yPercent: 100 }),
                I.set(c, { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }),
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initAboutTransitions"),
  Cm = a(() => {
    Em(), Bf(), xm(), _l(), Qi(), Ji();
    const s = zr();
    s.add(() => er(), "-=1"), s.add(() => km(), "-=1");
  }, "aboutInit");
var Pm = "1.3.1";
function Vf(s, e, t) {
  return Math.max(s, Math.min(e, t));
}
a(Vf, "clamp");
function Mm(s, e, t) {
  return (1 - t) * s + t * e;
}
a(Mm, "lerp");
function Am(s, e, t, i) {
  return Mm(s, e, 1 - Math.exp(-t * i));
}
a(Am, "damp");
function Om(s, e) {
  return ((s % e) + e) % e;
}
a(Om, "modulo");
var an,
  Lm =
    ((an = class {
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
          const i = Vf(0, this.currentTime / this.duration, 1);
          t = i >= 1;
          const r = t ? 1 : this.easing(i);
          this.value = this.from + (this.to - this.from) * r;
        } else
          this.lerp
            ? ((this.value = Am(this.value, this.to, this.lerp * 60, e)),
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
        { lerp: i, duration: r, easing: n, onStart: o, onUpdate: l }
      ) {
        (this.from = this.value = e),
          (this.to = t),
          (this.lerp = i),
          (this.duration = r),
          (this.easing = n),
          (this.currentTime = 0),
          (this.isRunning = !0),
          o?.(),
          (this.onUpdate = l);
      }
    }),
    a(an, "Animate"),
    an);
function Dm(s, e) {
  let t;
  return function (...i) {
    let r = this;
    clearTimeout(t),
      (t = setTimeout(() => {
        (t = void 0), s.apply(r, i);
      }, e));
  };
}
a(Dm, "debounce$1");
var ln,
  Im =
    ((ln = class {
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
            ((this.debouncedResize = Dm(this.resize, r)),
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
    a(ln, "Dimensions"),
    ln),
  un,
  qf =
    ((un = class {
      constructor() {
        H(this, "events", {});
      }
      emit(e, ...t) {
        let i = this.events[e] || [];
        for (let r = 0, n = i.length; r < n; r++) i[r]?.(...t);
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
    a(un, "Emitter"),
    un),
  zu = 100 / 6,
  Ni = { passive: !1 },
  cn,
  zm =
    ((cn = class {
      constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        H(this, "touchStart", { x: 0, y: 0 });
        H(this, "lastDelta", { x: 0, y: 0 });
        H(this, "window", { width: 0, height: 0 });
        H(this, "emitter", new qf());
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
              n = -(i - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = t),
              (this.touchStart.y = i),
              (this.lastDelta = { x: r, y: n }),
              this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: e });
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
            const n = r === 1 ? zu : r === 2 ? this.window.width : 1,
              o = r === 1 ? zu : r === 2 ? this.window.height : 1;
            (t *= n),
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
          this.element.addEventListener("wheel", this.onWheel, Ni),
          this.element.addEventListener("touchstart", this.onTouchStart, Ni),
          this.element.addEventListener("touchmove", this.onTouchMove, Ni),
          this.element.addEventListener("touchend", this.onTouchEnd, Ni);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Ni),
          this.element.removeEventListener("touchstart", this.onTouchStart, Ni),
          this.element.removeEventListener("touchmove", this.onTouchMove, Ni),
          this.element.removeEventListener("touchend", this.onTouchEnd, Ni);
      }
    }),
    a(cn, "VirtualScroll"),
    cn),
  fn,
  Rm =
    ((fn = class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        eventsTarget: i = e,
        smoothWheel: r = !0,
        syncTouch: n = !1,
        syncTouchLerp: o = 0.075,
        touchInertiaMultiplier: l = 35,
        duration: u,
        easing: c = a(
          (A) => Math.min(1, 1.001 - Math.pow(2, -10 * A)),
          "easing"
        ),
        lerp: f = 0.1,
        infinite: d = !1,
        orientation: p = "vertical",
        gestureOrientation: h = "vertical",
        touchMultiplier: g = 1,
        wheelMultiplier: m = 1,
        autoResize: _ = !0,
        prevent: b,
        virtualScroll: w,
        overscroll: y = !0,
        autoRaf: v = !1,
        anchors: S = !1,
        autoToggle: k = !1,
        allowNestedScroll: C = !1,
        __experimental__naiveDimensions: T = !1,
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
        H(this, "animate", new Lm());
        H(this, "emitter", new qf());
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
                const n =
                  typeof this.options.anchors == "object" &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0;
                let o = `#${r.split("#")[1]}`;
                ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) &&
                  (o = 0),
                  this.scrollTo(o, n);
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
            const n = r.type.includes("touch"),
              o = r.type.includes("wheel");
            this.isTouching = r.type === "touchstart" || r.type === "touchmove";
            const l = t === 0 && i === 0;
            if (
              this.options.syncTouch &&
              n &&
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
            let f = r.composedPath();
            f = f.slice(0, f.indexOf(this.rootElement));
            const d = this.options.prevent;
            if (
              f.find(
                (b) =>
                  b instanceof HTMLElement &&
                  ((typeof d == "function" && d?.(b)) ||
                    b.hasAttribute?.("data-lenis-prevent") ||
                    (n && b.hasAttribute?.("data-lenis-prevent-touch")) ||
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
                (this.options.syncTouch && n) ||
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
            const g = n && this.options.syncTouch,
              _ = n && r.type === "touchend" && Math.abs(h) > 5;
            _ && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + h, {
                programmatic: !1,
                ...(g
                  ? { lerp: _ ? this.options.syncTouchLerp : 1 }
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
        (window.lenisVersion = Pm),
          (!e || e === document.documentElement) && (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            eventsTarget: i,
            smoothWheel: r,
            syncTouch: n,
            syncTouchLerp: o,
            touchInertiaMultiplier: l,
            duration: u,
            easing: c,
            lerp: f,
            infinite: d,
            gestureOrientation: h,
            orientation: p,
            touchMultiplier: g,
            wheelMultiplier: m,
            autoResize: _,
            prevent: b,
            virtualScroll: w,
            overscroll: y,
            autoRaf: v,
            anchors: S,
            autoToggle: k,
            allowNestedScroll: C,
            __experimental__naiveDimensions: T,
          }),
          (this.dimensions = new Im(e, t, { autoResize: _ })),
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
          (this.virtualScroll = new zm(i, {
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
          duration: n = this.options.duration,
          easing: o = this.options.easing,
          lerp: l = this.options.lerp,
          onStart: u,
          onComplete: c,
          force: f = !1,
          programmatic: d = !0,
          userData: p,
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
            let h;
            if (
              (typeof e == "string"
                ? (h = document.querySelector(e))
                : e instanceof HTMLElement && e?.nodeType && (h = e),
              h)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                t -= this.isHorizontal ? m.left : m.top;
              }
              const g = h.getBoundingClientRect();
              e = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
            }
          }
          if (typeof e == "number") {
            if (((e += t), (e = Math.round(e)), this.options.infinite)) {
              if (d) {
                this.targetScroll = this.animatedScroll = this.scroll;
                const h = e - this.animatedScroll;
                h > this.limit / 2
                  ? (e = e - this.limit)
                  : h < -this.limit / 2 && (e = e + this.limit);
              }
            } else e = Vf(0, e, this.limit);
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
            d || (this.targetScroll = e),
              this.animate.fromTo(this.animatedScroll, e, {
                duration: n,
                easing: o,
                lerp: l,
                onStart: a(() => {
                  r && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    u?.(this);
                }, "onStart"),
                onUpdate: a((h, g) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = h - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = h),
                    this.setScroll(this.scroll),
                    d && (this.targetScroll = h),
                    g || this.emit(),
                    g &&
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
          n = e._lenis ?? (e._lenis = {});
        let o, l, u, c, f, d, p, h;
        const g = this.options.gestureOrientation;
        if (r - (n.time ?? 0) > 2e3) {
          n.time = Date.now();
          const k = window.getComputedStyle(e);
          n.computedStyle = k;
          const C = k.overflowX,
            T = k.overflowY;
          if (
            ((o = ["auto", "overlay", "scroll"].includes(C)),
            (l = ["auto", "overlay", "scroll"].includes(T)),
            (n.hasOverflowX = o),
            (n.hasOverflowY = l),
            (!o && !l) ||
              (g === "vertical" && !l) ||
              (g === "horizontal" && !o))
          )
            return !1;
          (f = e.scrollWidth),
            (d = e.scrollHeight),
            (p = e.clientWidth),
            (h = e.clientHeight),
            (u = f > p),
            (c = d > h),
            (n.isScrollableX = u),
            (n.isScrollableY = c),
            (n.scrollWidth = f),
            (n.scrollHeight = d),
            (n.clientWidth = p),
            (n.clientHeight = h);
        } else
          (u = n.isScrollableX),
            (c = n.isScrollableY),
            (o = n.hasOverflowX),
            (l = n.hasOverflowY),
            (f = n.scrollWidth),
            (d = n.scrollHeight),
            (p = n.clientWidth),
            (h = n.clientHeight);
        if (
          (!o && !l) ||
          (!u && !c) ||
          (g === "vertical" && (!l || !c)) ||
          (g === "horizontal" && (!o || !u))
        )
          return !1;
        let m;
        if (g === "horizontal") m = "x";
        else if (g === "vertical") m = "y";
        else {
          const k = t !== 0,
            C = i !== 0;
          k && o && u && (m = "x"), C && l && c && (m = "y");
        }
        if (!m) return !1;
        let _, b, w, y, v;
        if (m === "x")
          (_ = e.scrollLeft), (b = f - p), (w = t), (y = o), (v = u);
        else if (m === "y")
          (_ = e.scrollTop), (b = d - h), (w = i), (y = l), (v = c);
        else return !1;
        return (w > 0 ? _ < b : _ > 0) && y && v;
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
          ? Om(this.animatedScroll, this.limit)
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
I.registerPlugin(X);
let js;
const Nm = a(() => {
    "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      ((js = new Rm({
        autoRaf: !0,
        lerp: 0.1,
        duration: 1.2,
        easing: a((s) => Math.min(1, 1.001 - Math.pow(2, -12 * s)), "easing"),
        smoothWheel: !0,
        smoothTouch: !1,
      })),
      js.on("scroll", X.update),
      I.ticker.add((s) => {
        js.raf(s * 1e3);
      }),
      I.ticker.lagSmoothing(0));
  }, "smoothScroll"),
  $f = a(() => {
    Nm();
  }, "initLenis"),
  xr = a(() => js, "getLenis"),
  Fm = a(() => {
    const s = document.querySelectorAll("[career-modal='open-trigger']"),
      e = document.querySelectorAll("[career-modal='modal']");
    if (!s || !e) return;
    let t = null,
      i = null;
    const r = a((n) => {
      if (n.key === "Escape" && t && i) {
        i.restart();
        const o = xr();
        o && o.start();
      }
    }, "handleEscapeKey");
    document.addEventListener("keydown", r),
      e.forEach((n) => {
        const o = n.getAttribute("career-modal-name"),
          l = n.querySelector("[career-modal='component']"),
          u = n.querySelector("[career-modal='main-info']"),
          c = n.querySelector("[career-modal='sec-info']"),
          f = n.querySelectorAll("[career-modal='close-trigger']");
        if (!l || !u || !c || !f) return;
        I.set(n, {
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          display: "none",
        }),
          I.set(l, { clipPath: "inset(0% 0% 100% 0%)" }),
          I.set([u, c], { opacity: 0, y: 100, filter: "blur(2px)" });
        const d = I.timeline({ paused: !0 }),
          p = I.timeline({ paused: !0 });
        d.to(n, {
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
            n,
            {
              opacity: 0,
              ease: "expo.in",
              duration: 0.8,
              pointerEvents: "none",
              onComplete: a(() => {
                (n.style.visibility = "hidden"),
                  (n.style.display = "none"),
                  (n.style.pointerEvents = "none");
              }, "onComplete"),
            },
            "<"
          );
        const h = Array.from(s).find(
          (g) => g.getAttribute("career-modal-name") === o
        );
        h &&
          h.addEventListener("click", () => {
            d.restart(), (t = n), (i = p);
            const g = xr();
            g && g.stop();
          }),
          f.forEach((g) => {
            g.addEventListener("click", () => {
              p.restart(), (t = null), (i = null);
              const m = xr();
              m && m.start();
            });
          });
      });
  }, "careerModal"),
  Bm = a(() => {
    Fm();
  }, "initCareerModal"),
  Vm = a(() => {
    const s = document.querySelectorAll("[clock='component']"),
      e = a(() => {
        s.forEach((t) => {
          const r = t.querySelector("[clock-location]")?.dataset.timezone,
            n = t.querySelector("[clock='hour-hand']"),
            o = t.querySelector("[clock='minute-hand']"),
            l = t.querySelector("[clock='text']");
          if (!r || !n || !o || !l) return;
          const u = new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !0,
              timeZone: r,
            }),
            c = new Date(new Date().toLocaleString("en-US", { timeZone: r })),
            f = c.getHours() % 12,
            d = c.getMinutes(),
            p = c.getSeconds(),
            h = (f + d / 60) * 30,
            g = (d + p / 60) * 6;
          n.setAttribute("transform", `rotate(${h} 10 10)`),
            o.setAttribute("transform", `rotate(${g} 10 10)`),
            (l.textContent = u);
        }),
          requestAnimationFrame(e);
      }, "updateClocks");
    e();
  }, "clock"),
  Wf = a(() => {
    Vm();
  }, "initClock");
I.registerPlugin(be);
const qm = a((s) => {
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
    const n = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const u = document.querySelector("[contact-hero='text']"),
          c = document.querySelector("[contact-hero='visual']"),
          f = document.querySelectorAll("[contact-hero='visual-info']"),
          d = document.querySelectorAll("[contact-hero='cta']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "contact-hero-text-line",
            tag: "span",
            onSplit(p) {
              p.lines.forEach((g) => {
                const m = document.createElement("div");
                m.classList.add("move-text"),
                  g.parentNode.insertBefore(m, g),
                  m.appendChild(g);
              });
              const h = u.querySelectorAll("span");
              return (
                h.length &&
                  h.forEach((g) => {
                    const m = document.createElement("div");
                    (m.style.overflow = "clip"),
                      (m.style.paddingBottom = "3px"),
                      g.parentNode.insertBefore(m, g),
                      m.appendChild(g);
                  }),
                (i = I.timeline()),
                I.set(".move-text", { opacity: 0, yPercent: 100 }),
                I.set(c, { opacity: 0, clipPath: "inset(50% round 16px)" }),
                I.set(f, { opacity: 0, y: 50 }),
                I.set(d, { opacity: 0, yPercent: 50 }),
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initContactTransitions"),
  $m = a(() => {
    Wf(), Qi(), Ji();
    const s = zr();
    s.add(() => er(), "-=1"), s.add(() => qm(), "-=1");
  }, "contactInit");
I.registerPlugin(be);
const Wm = a((s) => {
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
    const n = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const u = document.querySelector("[career-hero='text']"),
          c = document.querySelector("[career-hero='btn']"),
          f = document.querySelector("[career-hero='visual']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "career-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  h.parentNode.insertBefore(g, h),
                  g.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(g, h),
                      g.appendChild(h);
                  }),
                (i = I.timeline()),
                I.set(".move-text", { opacity: 0, yPercent: 100 }),
                I.set(c, { opacity: 0 }),
                I.set(f, { opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initCareerTransitions"),
  Hm = a(() => {
    _l(), Bm(), Wf(), Qi(), Ji();
    const s = zr();
    s.add(() => er(), "-=1"), s.add(() => Wm(), "-=1");
  }, "careerInit");
I.registerPlugin(be);
const Gm = a((s) => {
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
    const n = a(() => {
        t && typeof t.revert == "function" && (t.revert(), (t = null)),
          i && (i.kill(), (i = null)),
          document.querySelectorAll(".move-text").forEach((c) => {
            c.parentNode &&
              (c.parentNode.insertBefore(c.firstChild, c), c.remove());
          });
      }, "cleanup"),
      o = a(() => {
        const u = document.querySelector("[work-hero='text']"),
          c = document.querySelector("[work-hero='filter-wrap']"),
          f = document.querySelectorAll("[work-hero='project']");
        u &&
          (t = be.create(u, {
            type: "lines",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-hero-text-line",
            tag: "span",
            onSplit(d) {
              d.lines.forEach((h) => {
                const g = document.createElement("div");
                g.classList.add("move-text"),
                  h.parentNode.insertBefore(g, h),
                  g.appendChild(h);
              });
              const p = u.querySelectorAll("span");
              return (
                p.length &&
                  p.forEach((h) => {
                    const g = document.createElement("div");
                    (g.style.overflow = "clip"),
                      (g.style.paddingBottom = "3px"),
                      h.parentNode.insertBefore(g, h),
                      g.appendChild(h);
                  }),
                (i = I.timeline()),
                I.set(".move-text", { opacity: 0, yPercent: 100 }),
                I.set(c, { opacity: 0 }),
                I.set(f, { y: 100, opacity: 0 }),
                i.to(".move-text", {
                  opacity: 1,
                  duration: 1.8,
                  stagger: 0.08,
                  ease: "expo.inOut",
                  yPercent: 0,
                }),
                i.to(c, { opacity: 1, duration: 1, ease: "power1.out" }, "-=1"),
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initWorkTransitions"),
  Ym = a(() => {
    Bf(), Qi(), Ji();
    const s = zr();
    s.add(() => er(), "-=1"), s.add(() => Gm(), "-=1");
  }, "workInit"),
  Xm = a(() => {
    const s = document.querySelector("[service-link='wrap']");
    if (!s) return;
    const e = s.querySelectorAll("[service-link='item']"),
      t = document.querySelectorAll("[service-item]"),
      i = s.querySelector("[service-link='line-wrap']"),
      r = i?.querySelector("[service-link='line']"),
      n = document.querySelector("[hero-gradient='main']"),
      o = document.querySelectorAll("[hero-gradient]");
    if (!e.length || !t.length || !i || !r) return;
    let l = !1,
      u = null,
      c = null;
    const f = new Set(),
      d = a(() => {
        e.forEach((b) => {
          const w = b.querySelector("[service-link='num']");
          b.setAttribute("service-link-status", "inactive"),
            I.to(b, { opacity: 0.2, duration: 0.3 }),
            I.to(w, { opacity: 0, y: 5, duration: 0.3 });
        }),
          t.forEach((b) => {
            b.setAttribute("service-item-status", "inactive");
          }),
          o.forEach((b) => {
            b.getAttribute("hero-gradient") !== "main" &&
              I.to(b, { opacity: 0, duration: 0.5 });
          }),
          n && I.to(n, { opacity: 1, duration: 0.5 });
      }, "clearAllActive"),
      p = a((b) => {
        if (c === b) return;
        c = b;
        const w = document.querySelector(
            `[service-link='item'][item-name='${b}']`
          ),
          y = document.querySelector(`[service-item='${b}']`),
          v = document.querySelector(`[hero-gradient='${b}']`);
        if (w && y) {
          d();
          const S = w.querySelector("[service-link='num']");
          w.setAttribute("service-link-status", "active"),
            I.to(w, { opacity: 1, duration: 0.4 }),
            I.to(S, { opacity: 1, y: 0, duration: 0.4 }),
            y.setAttribute("service-item-status", "active"),
            f.has(b) || (h(y), f.add(b)),
            v &&
              (n && I.to(n, { opacity: 0, duration: 0.5 }),
              I.to(v, { opacity: 1, duration: 0.5 })),
            g(w);
        }
      }, "activateByName"),
      h = a((b) => {
        const w = b.children;
        I.set(w, { opacity: 0, y: 50 }),
          I.to(w, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          });
      }, "animateServiceItemChildren"),
      g = a((b) => {
        const w = Array.from(e).indexOf(b),
          y = e.length,
          v = i.offsetHeight,
          S = r.offsetHeight,
          k = v - S,
          C = y > 1 ? w / (y - 1) : 0,
          T = k * C;
        I.to(r, { y: T, duration: 0.6, ease: "power2.out" });
      }, "moveLineToItem");
    n && I.set(n, { opacity: 1 }),
      o.forEach((b) => {
        b.getAttribute("hero-gradient") !== "main" && I.set(b, { opacity: 0 });
      }),
      t.forEach((b) => {
        I.set(b.children, { opacity: 0, y: 50 });
      }),
      e.forEach((b) => {
        const w = b.getAttribute("item-name");
        b.addEventListener("click", () => {
          w &&
            (u && clearTimeout(u),
            (l = !0),
            p(w),
            xr().scrollTo(document.querySelector(`[service-item='${w}']`), {
              duration: 1.6,
              offset: -100,
            }),
            (u = setTimeout(() => {
              l = !1;
            }, 2e3)));
        });
      });
    const m = new Map(),
      _ = new IntersectionObserver(
        (b) => {
          if (l) return;
          b.forEach((v) => {
            const S = v.target.getAttribute("service-item");
            S &&
              (m.set(S, v.intersectionRatio),
              v.isIntersecting &&
                v.intersectionRatio >= 0.3 &&
                !f.has(S) &&
                (h(v.target), f.add(S)));
          });
          let w = null,
            y = 0;
          m.forEach((v, S) => {
            v > y && ((y = v), (w = S));
          }),
            w && y >= 0.3 ? p(w) : y < 0.3 && (d(), (c = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    t.forEach((b) => _.observe(b));
  }, "serviceList"),
  jm = a(() => {
    Xm();
  }, "initServiceList");
var pi,
  yl,
  po,
  Hf,
  Gf,
  Ru,
  Na,
  Yf,
  Xf = a(function () {
    return typeof window < "u";
  }, "_windowExists"),
  jf = a(function () {
    return pi || (Xf() && (pi = window.gsap) && pi.registerPlugin && pi);
  }, "_getGSAP"),
  Um = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Zo = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  hr = a(function (e) {
    return Math.round(e * 1e4) / 1e4;
  }, "_round"),
  ki = a(function (e) {
    return parseFloat(e) || 0;
  }, "_parseNum"),
  Nu = a(function (e, t) {
    var i = ki(e);
    return ~e.indexOf("%") ? (i / 100) * t : i;
  }, "_parseSingleVal"),
  Ds = a(function (e, t) {
    return ki(e.getAttribute(t));
  }, "_getAttributeAsNumber"),
  Us = Math.sqrt,
  Fu = a(function (e, t, i, r, n, o) {
    return Us(
      Math.pow((ki(i) - ki(e)) * n, 2) + Math.pow((ki(r) - ki(t)) * o, 2)
    );
  }, "_getDistance"),
  Bu = a(function (e) {}, "_warn"),
  Uf = a(function (e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke";
  }, "_hasNonScalingStroke"),
  Km = 1,
  Zm = a(function (e, t, i) {
    var r = e.indexOf(" "),
      n,
      o;
    return (
      r < 0
        ? ((n = i !== void 0 ? i + "" : e), (o = e))
        : ((n = e.substr(0, r)), (o = e.substr(r + 1))),
      (n = Nu(n, t)),
      (o = Nu(o, t)),
      n > o ? [o, n] : [n, o]
    );
  }, "_parse"),
  Ks = a(function (e) {
    if (((e = yl(e)[0]), !e)) return 0;
    var t = e.tagName.toLowerCase(),
      i = e.style,
      r = 1,
      n = 1,
      o,
      l,
      u,
      c,
      f,
      d,
      p;
    Uf(e) &&
      ((n = e.getScreenCTM()),
      (r = Us(n.a * n.a + n.b * n.b)),
      (n = Us(n.d * n.d + n.c * n.c)));
    try {
      l = e.getBBox();
    } catch {
      Bu(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var h = l || { x: 0, y: 0, width: 0, height: 0 },
      g = h.x,
      m = h.y,
      _ = h.width,
      b = h.height;
    if (
      ((!l || (!_ && !b)) &&
        Zo[t] &&
        ((_ = Ds(e, Zo[t][0])),
        (b = Ds(e, Zo[t][1])),
        t !== "rect" && t !== "line" && ((_ *= 2), (b *= 2)),
        t === "line" &&
          ((g = Ds(e, "x1")),
          (m = Ds(e, "y1")),
          (_ = Math.abs(_ - g)),
          (b = Math.abs(b - m)))),
      t === "path")
    )
      (c = i.strokeDasharray),
        (i.strokeDasharray = "none"),
        (o = e.getTotalLength() || 0),
        hr(r) !== hr(n) &&
          !Ru &&
          (Ru = 1) &&
          Bu(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (o *= (r + n) / 2),
        (i.strokeDasharray = c);
    else if (t === "rect") o = _ * 2 * r + b * 2 * n;
    else if (t === "line") o = Fu(g, m, g + _, m + b, r, n);
    else if (t === "polyline" || t === "polygon")
      for (
        u = e.getAttribute("points").match(Um) || [],
          t === "polygon" && u.push(u[0], u[1]),
          o = 0,
          f = 2;
        f < u.length;
        f += 2
      )
        o += Fu(u[f - 2], u[f - 1], u[f], u[f + 1], r, n) || 0;
    else
      (t === "circle" || t === "ellipse") &&
        ((d = (_ / 2) * r),
        (p = (b / 2) * n),
        (o = Math.PI * (3 * (d + p) - Us((3 * d + p) * (d + 3 * p)))));
    return o || 0;
  }, "_getLength"),
  Vu = a(function (e, t) {
    if (((e = yl(e)[0]), !e)) return [0, 0];
    t || (t = Ks(e) + 1);
    var i = po.getComputedStyle(e),
      r = i.strokeDasharray || "",
      n = ki(i.strokeDashoffset),
      o = r.indexOf(",");
    return (
      o < 0 && (o = r.indexOf(" ")),
      (r = o < 0 ? t : ki(r.substr(0, o))),
      r > t && (r = t),
      [-n || 0, r - n || 0]
    );
  }, "_getPosition"),
  qu = a(function () {
    Xf() &&
      ((po = window),
      (Gf = pi = jf()),
      (yl = pi.utils.toArray),
      (Na = pi.core.getStyleSaver),
      (Yf = pi.core.reverting || function () {}),
      (Hf = ((po.navigator || {}).userAgent || "").indexOf("Edge") !== -1));
  }, "_initCore"),
  wl = {
    version: "3.13.0",
    name: "drawSVG",
    register: a(function (e) {
      (pi = e), qu();
    }, "register"),
    init: a(function (e, t, i, r, n) {
      if (!e.getBBox) return !1;
      Gf || qu();
      var o = Ks(e),
        l,
        u,
        c;
      return (
        (this.styles =
          Na && Na(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
        (this.tween = i),
        (this._style = e.style),
        (this._target = e),
        t + "" == "true"
          ? (t = "0 100%")
          : t
          ? (t + "").indexOf(" ") === -1 && (t = "0 " + t)
          : (t = "0 0"),
        (l = Vu(e, o)),
        (u = Zm(t, o, l[0])),
        (this._length = hr(o)),
        (this._dash = hr(l[1] - l[0])),
        (this._offset = hr(-l[0])),
        (this._dashPT = this.add(
          this,
          "_dash",
          this._dash,
          hr(u[1] - u[0]),
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
          hr(-u[0]),
          0,
          0,
          0,
          0,
          0,
          1
        )),
        Hf &&
          ((c = po.getComputedStyle(e)),
          c.strokeLinecap !== c.strokeLinejoin &&
            ((u = ki(c.strokeMiterlimit)),
            this.add(e.style, "strokeMiterlimit", u, u + 0.01))),
        (this._live = Uf(e) || ~(t + "").indexOf("live")),
        (this._nowrap = ~(t + "").indexOf("nowrap")),
        this._props.push("drawSVG"),
        Km
      );
    }, "init"),
    render: a(function (e, t) {
      if (t.tween._time || !Yf()) {
        var i = t._pt,
          r = t._style,
          n,
          o,
          l,
          u;
        if (i) {
          for (
            t._live &&
            ((n = Ks(t._target)),
            n !== t._length &&
              ((o = n / t._length),
              (t._length = n),
              t._offsetPT && ((t._offsetPT.s *= o), (t._offsetPT.c *= o)),
              t._dashPT
                ? ((t._dashPT.s *= o), (t._dashPT.c *= o))
                : (t._dash *= o)));
            i;

          )
            i.r(e, i.d), (i = i._next);
          (l = t._dash || (e && e !== 1 && 1e-4) || 0),
            (n = t._length - l + 0.1),
            (u = t._offset),
            l &&
              u &&
              l + Math.abs(u % t._length) > t._length - 0.05 &&
              (u += u < 0 ? 0.005 : -0.005) &&
              (n += 0.005),
            (r.strokeDashoffset = l ? u : u + 0.001),
            (r.strokeDasharray =
              n < 0.1
                ? "none"
                : l
                ? l + "px," + (t._nowrap ? 999999 : n) + "px"
                : "0px, 999999px");
        }
      } else t.styles.revert();
    }, "render"),
    getLength: Ks,
    getPosition: Vu,
  };
jf() && pi.registerPlugin(wl);
I.registerPlugin(be, wl);
const Qm = a((s) => {
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
  const n = a(() => {
      t && typeof t.revert == "function" && (t.revert(), (t = null)),
        i && (i.kill(), (i = null)),
        document.querySelectorAll(".move-text").forEach((c) => {
          c.parentNode &&
            (c.parentNode.insertBefore(c.firstChild, c), c.remove());
        });
    }, "cleanup"),
    o = a(() => {
      const u = document.querySelector("[service-hero='text']"),
        c = document.querySelectorAll("[service-hero='btn']"),
        f = document.querySelectorAll("[service-hero='svg']"),
        d = document.querySelectorAll("[service-hero='svg'] path");
      u &&
        (t = be.create(u, {
          type: "lines",
          autoSplit: !0,
          mask: "lines",
          linesClass: "service-hero-text-line",
          tag: "span",
          onSplit(p) {
            p.lines.forEach((g) => {
              const m = document.createElement("div");
              m.classList.add("move-text"),
                g.parentNode.insertBefore(m, g),
                m.appendChild(g);
            });
            const h = u.querySelectorAll("span");
            return (
              h.length &&
                h.forEach((g) => {
                  const m = document.createElement("div");
                  (m.style.overflow = "clip"),
                    (m.style.paddingBottom = "3px"),
                    g.parentNode.insertBefore(m, g),
                    m.appendChild(g);
                }),
              (i = I.timeline()),
              I.set(".move-text", { opacity: 0, yPercent: 100 }),
              I.set(c, { opacity: 0, yPercent: 20, scale: 0 }),
              I.set(f, { opacity: 0 }),
              I.set(d, { drawSVG: 0 }),
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
    }, "createServiceTransitions"),
    l = a(() => {
      e() ||
        (clearTimeout(r),
        (r = setTimeout(() => {
          n(),
            setTimeout(() => {
              o();
            }, 100);
        }, 250)));
    }, "handleResize");
  o(), e() || window.addEventListener("resize", l);
}, "initServiceTransitions");
I.registerPlugin(wl, X);
const Jm = a(() => {
    const s = document.querySelector(".services_hero_section"),
      e = document.querySelectorAll("[service-hero='svg'] path");
    if (e.length === 0) return;
    I.timeline({
      scrollTrigger: {
        trigger: s,
        start: "bottom 95%",
        end: "bottom 10%",
        scrub: 1.5,
      },
    }).to(e, { drawSVG: "100% 100% " });
  }, "serviceLine"),
  e0 = a(() => {
    Jm();
  }, "initServiceLine"),
  t0 = a(() => {
    jm(), Qi(), Ji(), e0();
    const s = zr();
    s.add(() => er(), "-=1"), s.add(() => Qm(), "-=1");
  }, "serviceInit"),
  i0 = a(() => {
    const s = document.querySelectorAll("[service-item]"),
      e = document.querySelector("[hero-gradient='main']"),
      t = document.querySelectorAll("[hero-gradient]");
    if (!s.length || !e) return;
    let i = !1,
      r = null,
      n = null;
    const o = a(() => {
        t.forEach((d) => {
          d.getAttribute("hero-gradient") !== "main" &&
            I.to(d, { opacity: 0, duration: 0.5 });
        }),
          I.to(e, { opacity: 1, duration: 0.5 });
      }, "showMainGradient"),
      l = a((d) => {
        if (n === d) return;
        n = d;
        const p = document.querySelector(`[hero-gradient='${d}']`);
        p &&
          (I.to(e, { opacity: 0, duration: 0.5 }),
          t.forEach((h) => {
            const g = h.getAttribute("hero-gradient");
            g !== "main" && g !== d && I.to(h, { opacity: 0, duration: 0.5 });
          }),
          I.to(p, { opacity: 1, duration: 0.5 }));
      }, "activateGradientByName");
    I.set(e, { opacity: 1 }),
      t.forEach((d) => {
        d.getAttribute("hero-gradient") !== "main" && I.set(d, { opacity: 0 });
      });
    const u = new Map(),
      c = new IntersectionObserver(
        (d) => {
          if (i) return;
          d.forEach((g) => {
            const m = g.target.getAttribute("service-item");
            m && u.set(m, g.intersectionRatio);
          });
          let p = null,
            h = 0;
          u.forEach((g, m) => {
            g > h && ((h = g), (p = m));
          }),
            p && h >= 0.3 ? l(p) : h < 0.3 && (o(), (n = null));
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
      );
    return (
      s.forEach((d) => c.observe(d)),
      {
        setGradient: a((d) => {
          r && clearTimeout(r),
            (i = !0),
            d ? l(d) : (o(), (n = null)),
            (r = setTimeout(() => {
              i = !1;
            }, 1e3));
        }, "setGradient"),
        showMainGradient: o,
      }
    );
  }, "serviceGradients"),
  r0 = a(() => i0(), "initServiceGradients");
var Ci,
  Tr,
  bl,
  To,
  Nn,
  Zs,
  go,
  Zn,
  ri = "transform",
  Fa = ri + "Origin",
  Kf,
  Sl = a(function (e) {
    var t = e.ownerDocument || e;
    for (
      !(ri in e.style) &&
      ("msTransform" in e.style) &&
      ((ri = "msTransform"), (Fa = ri + "Origin"));
      t.parentNode && (t = t.parentNode);

    );
    if (((Tr = window), (go = new Lr()), t)) {
      (Ci = t),
        (bl = t.documentElement),
        (To = t.body),
        (Zn = Ci.createElementNS("http://www.w3.org/2000/svg", "g")),
        (Zn.style.transform = "none");
      var i = t.createElement("div"),
        r = t.createElement("div"),
        n = t && (t.body || t.firstElementChild);
      n &&
        n.appendChild &&
        (n.appendChild(i),
        i.appendChild(r),
        i.setAttribute(
          "style",
          "position:static;transform:translate3d(0,0,1px)"
        ),
        (Kf = r.offsetParent !== i),
        n.removeChild(i));
    }
    return t;
  }, "_setDoc"),
  n0 = a(function (e) {
    for (var t, i; e && e !== To; )
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
  Zf = [],
  Qf = [],
  xl = a(function () {
    return Tr.pageYOffset || Ci.scrollTop || bl.scrollTop || To.scrollTop || 0;
  }, "_getDocScrollTop"),
  Tl = a(function () {
    return (
      Tr.pageXOffset || Ci.scrollLeft || bl.scrollLeft || To.scrollLeft || 0
    );
  }, "_getDocScrollLeft"),
  El = a(function (e) {
    return (
      e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    );
  }, "_svgOwner"),
  s0 = a(function s(e) {
    if (Tr.getComputedStyle(e).position === "fixed") return !0;
    if (((e = e.parentNode), e && e.nodeType === 1)) return s(e);
  }, "_isFixed"),
  Qo = a(function s(e, t) {
    if (e.parentNode && (Ci || Sl(e))) {
      var i = El(e),
        r = i
          ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        n = i ? (t ? "rect" : "g") : "div",
        o = t !== 2 ? 0 : 100,
        l = t === 3 ? 100 : 0,
        u =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        c = Ci.createElementNS
          ? Ci.createElementNS(r.replace(/^https/, "http"), n)
          : Ci.createElement(n);
      return (
        t &&
          (i
            ? (Zs || (Zs = s(e)),
              c.setAttribute("width", 0.01),
              c.setAttribute("height", 0.01),
              c.setAttribute("transform", "translate(" + o + "," + l + ")"),
              Zs.appendChild(c))
            : (Nn || ((Nn = s(e)), (Nn.style.cssText = u)),
              (c.style.cssText =
                u +
                "width:0.1px;height:0.1px;top:" +
                l +
                "px;left:" +
                o +
                "px"),
              Nn.appendChild(c))),
        c
      );
    }
    throw "Need document and parent.";
  }, "_createSibling"),
  o0 = a(function (e) {
    for (var t = new Lr(), i = 0; i < e.numberOfItems; i++)
      t.multiply(e.getItem(i).matrix);
    return t;
  }, "_consolidate"),
  Jf = a(function (e) {
    var t = e.getCTM(),
      i;
    return (
      t ||
        ((i = e.style[ri]),
        (e.style[ri] = "none"),
        e.appendChild(Zn),
        (t = Zn.getCTM()),
        e.removeChild(Zn),
        i
          ? (e.style[ri] = i)
          : e.style.removeProperty(
              ri.replace(/([A-Z])/g, "-$1").toLowerCase()
            )),
      t || go.clone()
    );
  }, "_getCTM"),
  a0 = a(function (e, t) {
    var i = El(e),
      r = e === i,
      n = i ? Zf : Qf,
      o = e.parentNode,
      l =
        o && !i && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o,
      u,
      c,
      f,
      d,
      p,
      h;
    if (e === Tr) return e;
    if (
      (n.length || n.push(Qo(e, 1), Qo(e, 2), Qo(e, 3)), (u = i ? Zs : Nn), i)
    )
      r
        ? ((f = Jf(e)), (d = -f.e / f.a), (p = -f.f / f.d), (c = go))
        : e.getBBox
        ? ((f = e.getBBox()),
          (c = e.transform ? e.transform.baseVal : {}),
          (c = c.numberOfItems
            ? c.numberOfItems > 1
              ? o0(c)
              : c.getItem(0).matrix
            : go),
          (d = c.a * f.x + c.c * f.y),
          (p = c.b * f.x + c.d * f.y))
        : ((c = new Lr()), (d = p = 0)),
        t && e.tagName.toLowerCase() === "g" && (d = p = 0),
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
            (c.e + d) +
            "," +
            (c.f + p) +
            ")"
        );
    else {
      if (((d = p = 0), Kf))
        for (
          c = e.offsetParent, f = e;
          f && (f = f.parentNode) && f !== c && f.parentNode;

        )
          (Tr.getComputedStyle(f)[ri] + "").length > 4 &&
            ((d = f.offsetLeft), (p = f.offsetTop), (f = 0));
      if (
        ((h = Tr.getComputedStyle(e)),
        h.position !== "absolute" && h.position !== "fixed")
      )
        for (c = e.offsetParent; o && o !== c; )
          (d += o.scrollLeft || 0), (p += o.scrollTop || 0), (o = o.parentNode);
      (f = u.style),
        (f.top = e.offsetTop - p + "px"),
        (f.left = e.offsetLeft - d + "px"),
        (f[ri] = h[ri]),
        (f[Fa] = h[Fa]),
        (f.position = h.position === "fixed" ? "fixed" : "absolute"),
        l.appendChild(u);
    }
    return u;
  }, "_placeSiblings"),
  Jo = a(function (e, t, i, r, n, o, l) {
    return (e.a = t), (e.b = i), (e.c = r), (e.d = n), (e.e = o), (e.f = l), e;
  }, "_setMatrix"),
  Lr = (function () {
    function s(t, i, r, n, o, l) {
      t === void 0 && (t = 1),
        i === void 0 && (i = 0),
        r === void 0 && (r = 0),
        n === void 0 && (n = 1),
        o === void 0 && (o = 0),
        l === void 0 && (l = 0),
        Jo(this, t, i, r, n, o, l);
    }
    a(s, "Matrix2D");
    var e = s.prototype;
    return (
      (e.inverse = a(function () {
        var i = this.a,
          r = this.b,
          n = this.c,
          o = this.d,
          l = this.e,
          u = this.f,
          c = i * o - r * n || 1e-10;
        return Jo(
          this,
          o / c,
          -r / c,
          -n / c,
          i / c,
          (n * u - o * l) / c,
          -(i * u - r * l) / c
        );
      }, "inverse")),
      (e.multiply = a(function (i) {
        var r = this.a,
          n = this.b,
          o = this.c,
          l = this.d,
          u = this.e,
          c = this.f,
          f = i.a,
          d = i.c,
          p = i.b,
          h = i.d,
          g = i.e,
          m = i.f;
        return Jo(
          this,
          f * r + p * o,
          f * n + p * l,
          d * r + h * o,
          d * n + h * l,
          u + g * r + m * o,
          c + g * n + m * l
        );
      }, "multiply")),
      (e.clone = a(function () {
        return new s(this.a, this.b, this.c, this.d, this.e, this.f);
      }, "clone")),
      (e.equals = a(function (i) {
        var r = this.a,
          n = this.b,
          o = this.c,
          l = this.d,
          u = this.e,
          c = this.f;
        return (
          r === i.a &&
          n === i.b &&
          o === i.c &&
          l === i.d &&
          u === i.e &&
          c === i.f
        );
      }, "equals")),
      (e.apply = a(function (i, r) {
        r === void 0 && (r = {});
        var n = i.x,
          o = i.y,
          l = this.a,
          u = this.b,
          c = this.c,
          f = this.d,
          d = this.e,
          p = this.f;
        return (
          (r.x = n * l + o * c + d || 0), (r.y = n * u + o * f + p || 0), r
        );
      }, "apply")),
      s
    );
  })();
function _i(s, e, t, i) {
  if (!s || !s.parentNode || (Ci || Sl(s)).documentElement === s)
    return new Lr();
  var r = n0(s),
    n = El(s),
    o = n ? Zf : Qf,
    l = a0(s, t),
    u = o[0].getBoundingClientRect(),
    c = o[1].getBoundingClientRect(),
    f = o[2].getBoundingClientRect(),
    d = l.parentNode,
    p = !i && s0(s),
    h = new Lr(
      (c.left - u.left) / 100,
      (c.top - u.top) / 100,
      (f.left - u.left) / 100,
      (f.top - u.top) / 100,
      u.left + (p ? 0 : Tl()),
      u.top + (p ? 0 : xl())
    );
  if ((d.removeChild(l), r))
    for (u = r.length; u--; )
      (c = r[u]), (c.scaleX = c.scaleY = 0), c.renderTransform(1, c);
  return e ? h.inverse() : h;
}
a(_i, "getGlobalMatrix");
var l0 = 1,
  yn,
  st,
  _e,
  Qn,
  Bi,
  Pi,
  Ba,
  $u = a(function (e, t) {
    return e.actions.forEach(function (i) {
      return i.vars[t] && i.vars[t](i);
    });
  }, "_forEachBatch"),
  Va = {},
  Wu = 180 / Math.PI,
  u0 = Math.PI / 180,
  mo = {},
  Hu = {},
  Eo = {},
  kl = a(function (e) {
    return typeof e == "string" ? e.split(" ").join("").split(",") : e;
  }, "_listToArray"),
  c0 = kl("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
  ko = kl(
    "transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"
  ),
  Jn = a(function (e) {
    return yn(e)[0] || void 0;
  }, "_getEl"),
  Kr = a(function (e) {
    return Math.round(e * 1e4) / 1e4 || 0;
  }, "_round"),
  ea = a(function (e, t, i) {
    return e.forEach(function (r) {
      return r.classList[i](t);
    });
  }, "_toggleClass"),
  Gu = {
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
  ed = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1,
  },
  td = a(function (e) {
    return e.replace(/([A-Z])/g, "-$1").toLowerCase();
  }, "_camelToDashed"),
  Zr = a(function (e, t) {
    var i = {},
      r;
    for (r in e) t[r] || (i[r] = e[r]);
    return i;
  }, "_copy"),
  Cl = {},
  id = a(function (e) {
    var t = (Cl[e] = kl(e));
    return (Eo[e] = t.concat(ko)), t;
  }, "_memoizeProps"),
  f0 = a(function (e) {
    var t = e._gsap || st.core.getCache(e);
    return t.gmCache === st.ticker.frame
      ? t.gMatrix
      : ((t.gmCache = st.ticker.frame), (t.gMatrix = _i(e, !0, !1, !0)));
  }, "_getInverseGlobalMatrix"),
  d0 = a(function s(e, t, i) {
    i === void 0 && (i = 0);
    for (
      var r = e.parentNode,
        n = 1e3 * Math.pow(10, i) * (t ? -1 : 1),
        o = t ? -n * 900 : 0;
      e;

    )
      (o += n), (e = e.previousSibling);
    return r ? o + s(r, t, i + 1) : o;
  }, "_getDOMDepth"),
  vo = a(function (e, t, i) {
    return (
      e.forEach(function (r) {
        return (r.d = d0(i ? r.element : r.t, t));
      }),
      e.sort(function (r, n) {
        return r.d - n.d;
      }),
      e
    );
  }, "_orderByDOMDepth"),
  ds = a(function (e, t) {
    for (
      var i = e.element.style, r = (e.css = e.css || []), n = t.length, o, l;
      n--;

    )
      (o = t[n]),
        (l = i[o] || i.getPropertyValue(o)),
        r.push(l ? o : Hu[o] || (Hu[o] = td(o)), l);
    return i;
  }, "_recordInlineStyles"),
  _o = a(function (e) {
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
  Yu = a(function (e, t) {
    e.forEach(function (i) {
      return (i.a.cache.uncache = 1);
    }),
      t || e.finalStates.forEach(_o);
  }, "_setFinalStates"),
  ta =
    "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(
      ","
    ),
  Pl = a(function (e, t, i) {
    var r = e.element,
      n = e.width,
      o = e.height,
      l = e.uncache,
      u = e.getProp,
      c = r.style,
      f = 4,
      d,
      p,
      h;
    if ((typeof t != "object" && (t = e), _e && i !== 1))
      return (
        _e._abs.push({ t: r, b: e, a: e, sd: 0 }),
        _e._final.push(function () {
          return (e.cache.uncache = 1) && _o(e);
        }),
        r
      );
    for (
      p = u("display") === "none",
        (!e.isVisible || p) &&
          (p && (ds(e, ["display"]).display = t.display),
          (e.matrix = t.matrix),
          (e.width = n = e.width || t.width),
          (e.height = o = e.height || t.height)),
        ds(e, ta),
        h = window.getComputedStyle(r);
      f--;

    )
      c[ta[f]] = h[ta[f]];
    if (
      ((c.gridArea = "1 / 1 / 1 / 1"),
      (c.transition = "none"),
      (c.position = "absolute"),
      (c.width = n + "px"),
      (c.height = o + "px"),
      c.top || (c.top = "0px"),
      c.left || (c.left = "0px"),
      l)
    )
      d = new Dr(r);
    else if (((d = Zr(e, mo)), (d.position = "absolute"), e.simple)) {
      var g = r.getBoundingClientRect();
      d.matrix = new Lr(1, 0, 0, 1, g.left + Tl(), g.top + xl());
    } else d.matrix = _i(r, !1, !1, !0);
    return (d = on(d, e, !0)), (e.x = Pi(d.x, 0.01)), (e.y = Pi(d.y, 0.01)), r;
  }, "_makeAbsolute"),
  Xu = a(function (e, t) {
    return (
      t !== !0 &&
        ((t = yn(t)),
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
  rd = a(function (e) {
    return vo(e, !0).forEach(function (t) {
      return (
        (t.a.isVisible || t.b.isVisible) && Pl(t.sd < 0 ? t.b : t.a, t.b, 1)
      );
    });
  }, "_makeCompsAbsolute"),
  h0 = a(function (e, t) {
    return (t && e.idLookup[qa(t).id]) || e.elementStates[0];
  }, "_findElStateInState"),
  qa = a(function (e, t, i, r) {
    return e instanceof Dr
      ? e
      : e instanceof ni
      ? h0(e, r)
      : new Dr(typeof e == "string" ? Jn(e) || void 0 : e, t, i);
  }, "_parseElementState"),
  p0 = a(function (e, t) {
    for (
      var i = st.getProperty(e.element, null, "native"),
        r = (e.props = {}),
        n = t.length;
      n--;

    )
      r[t[n]] = (i(t[n]) + "").trim();
    return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), e;
  }, "_recordProps"),
  nd = a(function (e, t) {
    var i = e.style || e,
      r;
    for (r in t) i[r] = t[r];
  }, "_applyProps"),
  g0 = a(function (e) {
    var t = e.getAttribute("data-flip-id");
    return t || e.setAttribute("data-flip-id", (t = "auto-" + l0++)), t;
  }, "_getID"),
  sd = a(function (e) {
    return e.map(function (t) {
      return t.element;
    });
  }, "_elementsFromElementStates"),
  ju = a(function (e, t, i) {
    return e && t.length && i.add(e(sd(t), i, new ni(t, 0, !0)), 0);
  }, "_handleCallback"),
  on = a(function (e, t, i, r, n, o) {
    var l = e.element,
      u = e.cache,
      c = e.parent,
      f = e.x,
      d = e.y,
      p = t.width,
      h = t.height,
      g = t.scaleX,
      m = t.scaleY,
      _ = t.rotation,
      b = t.bounds,
      w = o && Ba && Ba(l, "transform,width,height"),
      y = e,
      v = t.matrix,
      S = v.e,
      k = v.f,
      C =
        e.bounds.width !== b.width ||
        e.bounds.height !== b.height ||
        e.scaleX !== g ||
        e.scaleY !== m ||
        e.rotation !== _,
      T = !C && e.simple && t.simple && !n,
      A,
      P,
      z,
      x,
      M,
      O,
      D;
    return (
      T || !c
        ? ((g = m = 1), (_ = A = 0))
        : ((M = f0(c)),
          (O = M.clone().multiply(
            t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix
          )),
          (_ = Kr(Math.atan2(O.b, O.a) * Wu)),
          (A = Kr(Math.atan2(O.c, O.d) * Wu + _) % 360),
          (g = Math.sqrt(Math.pow(O.a, 2) + Math.pow(O.b, 2))),
          (m =
            Math.sqrt(Math.pow(O.c, 2) + Math.pow(O.d, 2)) * Math.cos(A * u0)),
          n &&
            ((n = yn(n)[0]),
            (x = st.getProperty(n)),
            (D = n.getBBox && typeof n.getBBox == "function" && n.getBBox()),
            (y = {
              scaleX: x("scaleX"),
              scaleY: x("scaleY"),
              width: D ? D.width : Math.ceil(parseFloat(x("width", "px"))),
              height: D ? D.height : parseFloat(x("height", "px")),
            })),
          (u.rotation = _ + "deg"),
          (u.skewX = A + "deg")),
      i
        ? ((g *= p === y.width || !y.width ? 1 : p / y.width),
          (m *= h === y.height || !y.height ? 1 : h / y.height),
          (u.scaleX = g),
          (u.scaleY = m))
        : ((p = Pi((p * g) / y.scaleX, 0)),
          (h = Pi((h * m) / y.scaleY, 0)),
          (l.style.width = p + "px"),
          (l.style.height = h + "px")),
      r && nd(l, t.props),
      T || !c
        ? ((f += S - e.matrix.e), (d += k - e.matrix.f))
        : C || c !== t.parent
        ? (u.renderTransform(1, u),
          (O = _i(n || l, !1, !1, !0)),
          (P = M.apply({ x: O.e, y: O.f })),
          (z = M.apply({ x: S, y: k })),
          (f += z.x - P.x),
          (d += z.y - P.y))
        : ((M.e = M.f = 0),
          (z = M.apply({ x: S - e.matrix.e, y: k - e.matrix.f })),
          (f += z.x),
          (d += z.y)),
      (f = Pi(f, 0.02)),
      (d = Pi(d, 0.02)),
      o && !(o instanceof Dr)
        ? w && w.revert()
        : ((u.x = f + "px"), (u.y = d + "px"), u.renderTransform(1, u)),
      o &&
        ((o.x = f),
        (o.y = d),
        (o.rotation = _),
        (o.skewX = A),
        i ? ((o.scaleX = g), (o.scaleY = m)) : ((o.width = p), (o.height = h))),
      o || u
    );
  }, "_fit"),
  ia = a(function (e, t) {
    return e instanceof ni ? e : new ni(e, t);
  }, "_parseState"),
  od = a(function (e, t, i) {
    var r = e.idLookup[i],
      n = e.alt[i];
    return n.isVisible &&
      (!(t.getElementState(n.element) || n).isVisible || !r.isVisible)
      ? n
      : r;
  }, "_getChangingElState"),
  ra = [],
  na = "width,height,overflowX,overflowY".split(","),
  Is,
  Uu = a(function (e) {
    if (e !== Is) {
      var t = Bi.style,
        i = Bi.clientWidth === window.outerWidth,
        r = Bi.clientHeight === window.outerHeight,
        n = 4;
      if (e && (i || r)) {
        for (; n--; ) ra[n] = t[na[n]];
        i && ((t.width = Bi.clientWidth + "px"), (t.overflowY = "hidden")),
          r && ((t.height = Bi.clientHeight + "px"), (t.overflowX = "hidden")),
          (Is = e);
      } else if (Is) {
        for (; n--; ) ra[n] ? (t[na[n]] = ra[n]) : t.removeProperty(td(na[n]));
        Is = e;
      }
    }
  }, "_lockBodyScroll"),
  sa = a(function (e, t, i, r) {
    e instanceof ni && t instanceof ni, (i = i || {});
    var n = i,
      o = n.clearProps,
      l = n.onEnter,
      u = n.onLeave,
      c = n.absolute,
      f = n.absoluteOnLeave,
      d = n.custom,
      p = n.delay,
      h = n.paused,
      g = n.repeat,
      m = n.repeatDelay,
      _ = n.yoyo,
      b = n.toggleClass,
      w = n.nested,
      y = n.zIndex,
      v = n.scale,
      S = n.fade,
      k = n.stagger,
      C = n.spin,
      T = n.prune,
      A = ("props" in i ? i : e).props,
      P = Zr(i, Gu),
      z = st.timeline({
        delay: p,
        paused: h,
        repeat: g,
        repeatDelay: m,
        yoyo: _,
        data: "isFlip",
      }),
      x = P,
      M = [],
      O = [],
      D = [],
      R = [],
      N = C === !0 ? 1 : C || 0,
      B =
        typeof C == "function"
          ? C
          : function () {
              return N;
            },
      q = e.interrupted || t.interrupted,
      E = z[r !== 1 ? "to" : "from"],
      j,
      K,
      ce,
      le,
      ne,
      ee,
      de,
      ge,
      Le,
      Ve,
      ve,
      qe,
      G,
      se;
    for (K in t.idLookup)
      (ve = t.alt[K] ? od(t, e, K) : t.idLookup[K]),
        (ne = ve.element),
        (Ve = e.idLookup[K]),
        e.alt[K] &&
          ne === Ve.element &&
          (e.alt[K].isVisible || !ve.isVisible) &&
          (Ve = e.alt[K]),
        Ve
          ? ((ee = {
              t: ne,
              b: Ve,
              a: ve,
              sd: Ve.element === ne ? 0 : ve.isVisible ? 1 : -1,
            }),
            D.push(ee),
            ee.sd &&
              (ee.sd < 0 && ((ee.b = ve), (ee.a = Ve)),
              q && ds(ee.b, A ? Eo[A] : ko),
              S &&
                D.push(
                  (ee.swap = {
                    t: Ve.element,
                    b: ee.b,
                    a: ee.a,
                    sd: -ee.sd,
                    swap: ee,
                  })
                )),
            (ne._flip = Ve.element._flip = _e ? _e.timeline : z))
          : ve.isVisible &&
            (D.push({
              t: ne,
              b: Zr(ve, { isVisible: 1 }),
              a: ve,
              sd: 0,
              entering: 1,
            }),
            (ne._flip = _e ? _e.timeline : z));
    if (
      (A &&
        (Cl[A] || id(A)).forEach(function (L) {
          return (P[L] = function (Ce) {
            return D[Ce].a.props[L];
          });
        }),
      (D.finalStates = Le = []),
      (qe = a(function () {
        for (vo(D), Uu(!0), le = 0; le < D.length; le++)
          (ee = D[le]),
            (G = ee.a),
            (se = ee.b),
            T && !G.isDifferent(se) && !ee.entering
              ? D.splice(le--, 1)
              : ((ne = ee.t),
                w && !(ee.sd < 0) && le && (G.matrix = _i(ne, !1, !1, !0)),
                se.isVisible && G.isVisible
                  ? (ee.sd < 0
                      ? ((de = new Dr(ne, A, e.simple)),
                        on(de, G, v, 0, 0, de),
                        (de.matrix = _i(ne, !1, !1, !0)),
                        (de.css = ee.b.css),
                        (ee.a = G = de),
                        S && (ne.style.opacity = q ? se.opacity : G.opacity),
                        k && R.push(ne))
                      : ee.sd > 0 &&
                        S &&
                        (ne.style.opacity = q ? G.opacity - se.opacity : "0"),
                    on(G, se, v, A))
                  : se.isVisible !== G.isVisible &&
                    (se.isVisible
                      ? G.isVisible ||
                        ((se.css = G.css),
                        O.push(se),
                        D.splice(le--, 1),
                        c && w && on(G, se, v, A))
                      : (G.isVisible && M.push(G), D.splice(le--, 1))),
                v ||
                  ((ne.style.maxWidth = Math.max(G.width, se.width) + "px"),
                  (ne.style.maxHeight = Math.max(G.height, se.height) + "px"),
                  (ne.style.minWidth = Math.min(G.width, se.width) + "px"),
                  (ne.style.minHeight = Math.min(G.height, se.height) + "px")),
                w && b && ne.classList.add(b)),
            Le.push(G);
        var Ce;
        if (
          (b &&
            ((Ce = Le.map(function ($) {
              return $.element;
            })),
            w &&
              Ce.forEach(function ($) {
                return $.classList.remove(b);
              })),
          Uu(!1),
          v
            ? ((P.scaleX = function ($) {
                return D[$].a.scaleX;
              }),
              (P.scaleY = function ($) {
                return D[$].a.scaleY;
              }))
            : ((P.width = function ($) {
                return D[$].a.width + "px";
              }),
              (P.height = function ($) {
                return D[$].a.height + "px";
              }),
              (P.autoRound = i.autoRound || !1)),
          (P.x = function ($) {
            return D[$].a.x + "px";
          }),
          (P.y = function ($) {
            return D[$].a.y + "px";
          }),
          (P.rotation = function ($) {
            return D[$].a.rotation + (C ? B($, ge[$], ge) * 360 : 0);
          }),
          (P.skewX = function ($) {
            return D[$].a.skewX;
          }),
          (ge = D.map(function ($) {
            return $.t;
          })),
          (y || y === 0) &&
            ((P.modifiers = {
              zIndex: a(function () {
                return y;
              }, "zIndex"),
            }),
            (P.zIndex = y),
            (P.immediateRender = i.immediateRender !== !1)),
          S &&
            (P.opacity = function ($) {
              return D[$].sd < 0 ? 0 : D[$].sd > 0 ? D[$].a.opacity : "+=0";
            }),
          R.length)
        ) {
          k = st.utils.distribute(k);
          var Ut = ge.slice(R.length);
          P.stagger = function ($, Vt) {
            return k(~R.indexOf(Vt) ? ge.indexOf(D[$].swap.t) : $, Vt, Ut);
          };
        }
        if (
          (c0.forEach(function ($) {
            return i[$] && z.eventCallback($, i[$], i[$ + "Params"]);
          }),
          d && ge.length)
        ) {
          (x = Zr(P, Gu)),
            "scale" in d && ((d.scaleX = d.scaleY = d.scale), delete d.scale);
          for (K in d)
            (j = Zr(d[K], ed)),
              (j[K] = P[K]),
              !("duration" in j) &&
                "duration" in P &&
                (j.duration = P.duration),
              (j.stagger = P.stagger),
              E.call(z, ge, j, 0),
              delete x[K];
        }
        (ge.length || O.length || M.length) &&
          (b &&
            z.add(function () {
              return ea(Ce, b, z._zTime < 0 ? "remove" : "add");
            }, 0) &&
            !h &&
            ea(Ce, b, "add"),
          ge.length && E.call(z, ge, x, 0)),
          ju(l, M, z),
          ju(u, O, z);
        var Bt = _e && _e.timeline;
        Bt &&
          (Bt.add(z, 0),
          _e._final.push(function () {
            return Yu(D, !o);
          })),
          (ce = z.duration()),
          z.call(function () {
            var $ = z.time() >= ce;
            $ && !Bt && Yu(D, !o), b && ea(Ce, b, $ ? "remove" : "add");
          });
      }, "run")),
      f &&
        (c = D.filter(function (L) {
          return !L.sd && !L.a.isVisible && L.b.isVisible;
        }).map(function (L) {
          return L.a.element;
        })),
      _e)
    ) {
      var je;
      c && (je = _e._abs).push.apply(je, Xu(D, c)), _e._run.push(qe);
    } else c && rd(Xu(D, c)), qe();
    var Ue = _e ? _e.timeline : z;
    return (
      (Ue.revert = function () {
        return Ml(Ue, 1, 1);
      }),
      Ue
    );
  }, "_fromTo"),
  m0 = a(function s(e) {
    e.vars.onInterrupt &&
      e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(s);
  }, "_interrupt"),
  Ml = a(function (e, t, i) {
    if (e && e.progress() < 1 && (!e.paused() || i))
      return t && (m0(e), t < 2 && e.progress(1), e.kill()), !0;
  }, "_killFlip"),
  zs = a(function (e) {
    for (
      var t = (e.idLookup = {}),
        i = (e.alt = {}),
        r = e.elementStates,
        n = r.length,
        o;
      n--;

    )
      (o = r[n]), t[o.id] ? (i[o.id] = o) : (t[o.id] = o);
  }, "_createLookup"),
  ni = (function () {
    function s(t, i, r) {
      if (((this.props = i && i.props), (this.simple = !!(i && i.simple)), r))
        (this.targets = sd(t)), (this.elementStates = t), zs(this);
      else {
        this.targets = yn(t);
        var n = i && (i.kill === !1 || (i.batch && !i.kill));
        _e && !n && _e._kill.push(this), this.update(n || !!_e);
      }
    }
    a(s, "FlipState");
    var e = s.prototype;
    return (
      (e.update = a(function (i) {
        var r = this;
        return (
          (this.elementStates = this.targets.map(function (n) {
            return new Dr(n, r.props, r.simple);
          })),
          zs(this),
          this.interrupt(i),
          this.recordInlineStyles(),
          this
        );
      }, "update")),
      (e.clear = a(function () {
        return (
          (this.targets.length = this.elementStates.length = 0), zs(this), this
        );
      }, "clear")),
      (e.fit = a(function (i, r, n) {
        for (
          var o = vo(this.elementStates.slice(0), !1, !0),
            l = (i || this).idLookup,
            u = 0,
            c,
            f;
          u < o.length;
          u++
        )
          (c = o[u]),
            n && (c.matrix = _i(c.element, !1, !1, !0)),
            (f = l[c.id]),
            f && on(c, f, r, !0, 0, c),
            (c.matrix = _i(c.element, !1, !1, !0));
        return this;
      }, "fit")),
      (e.getProperty = a(function (i, r) {
        var n = this.getElementState(i) || mo;
        return (r in n ? n : n.props || mo)[r];
      }, "getProperty")),
      (e.add = a(function (i) {
        for (
          var r = i.targets.length, n = this.idLookup, o = this.alt, l, u, c;
          r--;

        )
          (u = i.elementStates[r]),
            (c = n[u.id]),
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
          zs(this),
          this
        );
      }, "add")),
      (e.compare = a(function (i) {
        var r = i.idLookup,
          n = this.idLookup,
          o = [],
          l = [],
          u = [],
          c = [],
          f = [],
          d = i.alt,
          p = this.alt,
          h = a(function (T, A, P) {
            return (
              (T.isVisible !== A.isVisible
                ? T.isVisible
                  ? u
                  : c
                : T.isVisible
                ? l
                : o
              ).push(P) && f.push(P)
            );
          }, "place"),
          g = a(function (T, A, P) {
            return f.indexOf(P) < 0 && h(T, A, P);
          }, "placeIfDoesNotExist"),
          m,
          _,
          b,
          w,
          y,
          v,
          S,
          k;
        for (b in r)
          (y = d[b]),
            (v = p[b]),
            (m = y ? od(i, this, b) : r[b]),
            (w = m.element),
            (_ = n[b]),
            v
              ? ((k = _.isVisible || (!v.isVisible && w === _.element) ? _ : v),
                (S =
                  y && !m.isVisible && !y.isVisible && k.element === y.element
                    ? y
                    : m),
                S.isVisible && k.isVisible && S.element !== k.element
                  ? ((S.isDifferent(k) ? l : o).push(S.element, k.element),
                    f.push(S.element, k.element))
                  : h(S, k, S.element),
                y && S.element === y.element && (y = r[b]),
                g(S.element !== _.element && y ? y : S, _, _.element),
                g(y && y.element === v.element ? y : S, v, v.element),
                y && g(y, v.element === y.element ? v : _, y.element))
              : (_ ? (_.isDifferent(m) ? h(m, _, w) : o.push(w)) : u.push(w),
                y && g(y, _, y.element));
        for (b in n)
          r[b] || (c.push(n[b].element), p[b] && c.push(p[b].element));
        return { changed: l, unchanged: o, enter: u, leave: c };
      }, "compare")),
      (e.recordInlineStyles = a(function () {
        for (var i = Eo[this.props] || ko, r = this.elementStates.length; r--; )
          ds(this.elementStates[r], i);
      }, "recordInlineStyles")),
      (e.interrupt = a(function (i) {
        var r = this,
          n = [];
        this.targets.forEach(function (o) {
          var l = o._flip,
            u = Ml(l, i ? 0 : 1);
          i &&
            u &&
            n.indexOf(l) < 0 &&
            l.add(function () {
              return r.updateVisibility();
            }),
            u && n.push(l);
        }),
          !i && n.length && this.updateVisibility(),
          this.interrupted || (this.interrupted = !!n.length);
      }, "interrupt")),
      (e.updateVisibility = a(function () {
        this.elementStates.forEach(function (i) {
          var r = i.element.getBoundingClientRect();
          (i.isVisible = !!(r.width || r.height || r.top || r.left)),
            (i.uncache = 1);
        });
      }, "updateVisibility")),
      (e.getElementState = a(function (i) {
        return this.elementStates[this.targets.indexOf(Jn(i))];
      }, "getElementState")),
      (e.makeAbsolute = a(function () {
        return vo(this.elementStates.slice(0), !0, !0).map(Pl);
      }, "makeAbsolute")),
      s
    );
  })(),
  Dr = (function () {
    function s(t, i, r) {
      (this.element = t), this.update(i, r);
    }
    a(s, "ElementState");
    var e = s.prototype;
    return (
      (e.isDifferent = a(function (i) {
        var r = this.bounds,
          n = i.bounds;
        return (
          r.top !== n.top ||
          r.left !== n.left ||
          r.width !== n.width ||
          r.height !== n.height ||
          !this.matrix.equals(i.matrix) ||
          this.opacity !== i.opacity ||
          (this.props &&
            i.props &&
            JSON.stringify(this.props) !== JSON.stringify(i.props))
        );
      }, "isDifferent")),
      (e.update = a(function (i, r) {
        var n = this,
          o = n.element,
          l = st.getProperty(o),
          u = st.core.getCache(o),
          c = o.getBoundingClientRect(),
          f =
            o.getBBox &&
            typeof o.getBBox == "function" &&
            o.nodeName.toLowerCase() !== "svg" &&
            o.getBBox(),
          d = r
            ? new Lr(1, 0, 0, 1, c.left + Tl(), c.top + xl())
            : _i(o, !1, !1, !0);
        (u.uncache = 1),
          (n.getProp = l),
          (n.element = o),
          (n.id = g0(o)),
          (n.matrix = d),
          (n.cache = u),
          (n.bounds = c),
          (n.isVisible = !!(c.width || c.height || c.left || c.top)),
          (n.display = l("display")),
          (n.position = l("position")),
          (n.parent = o.parentNode),
          (n.x = l("x")),
          (n.y = l("y")),
          (n.scaleX = u.scaleX),
          (n.scaleY = u.scaleY),
          (n.rotation = l("rotation")),
          (n.skewX = l("skewX")),
          (n.opacity = l("opacity")),
          (n.width = f ? f.width : Pi(l("width", "px"), 0.04)),
          (n.height = f ? f.height : Pi(l("height", "px"), 0.04)),
          i && p0(n, Cl[i] || id(i)),
          (n.ctm =
            o.getCTM && o.nodeName.toLowerCase() === "svg" && Jf(o).inverse()),
          (n.simple =
            r || (Kr(d.a) === 1 && !Kr(d.b) && !Kr(d.c) && Kr(d.d) === 1)),
          (n.uncache = 0);
      }, "update")),
      s
    );
  })(),
  v0 = (function () {
    function s(t, i) {
      (this.vars = t),
        (this.batch = i),
        (this.states = []),
        (this.timeline = i.timeline);
    }
    a(s, "FlipAction");
    var e = s.prototype;
    return (
      (e.getStateById = a(function (i) {
        for (var r = this.states.length; r--; )
          if (this.states[r].idLookup[i]) return this.states[r];
      }, "getStateById")),
      (e.kill = a(function () {
        this.batch.remove(this);
      }, "kill")),
      s
    );
  })(),
  _0 = (function () {
    function s(t) {
      (this.id = t),
        (this.actions = []),
        (this._kill = []),
        (this._final = []),
        (this._abs = []),
        (this._run = []),
        (this.data = {}),
        (this.state = new ni()),
        (this.timeline = st.timeline());
    }
    a(s, "FlipBatch");
    var e = s.prototype;
    return (
      (e.add = a(function (i) {
        var r = this.actions.filter(function (n) {
          return n.vars === i;
        });
        return r.length
          ? r[0]
          : ((r = new v0(typeof i == "function" ? { animate: i } : i, this)),
            this.actions.push(r),
            r);
      }, "add")),
      (e.remove = a(function (i) {
        var r = this.actions.indexOf(i);
        return r >= 0 && this.actions.splice(r, 1), this;
      }, "remove")),
      (e.getState = a(function (i) {
        var r = this,
          n = _e,
          o = Qn;
        return (
          (_e = this),
          this.state.clear(),
          (this._kill.length = 0),
          this.actions.forEach(function (l) {
            l.vars.getState &&
              ((l.states.length = 0), (Qn = l), (l.state = l.vars.getState(l))),
              i &&
                l.states.forEach(function (u) {
                  return r.state.add(u);
                });
          }),
          (Qn = o),
          (_e = n),
          this.killConflicts(),
          this
        );
      }, "getState")),
      (e.animate = a(function () {
        var i = this,
          r = _e,
          n = this.timeline,
          o = this.actions.length,
          l,
          u;
        for (
          _e = this,
            n.clear(),
            this._abs.length = this._final.length = this._run.length = 0,
            this.actions.forEach(function (c) {
              c.vars.animate && c.vars.animate(c);
              var f = c.vars.onEnter,
                d = c.vars.onLeave,
                p = c.targets,
                h,
                g;
              p &&
                p.length &&
                (f || d) &&
                ((h = new ni()),
                c.states.forEach(function (m) {
                  return h.add(m);
                }),
                (g = h.compare(wn.getState(p))),
                g.enter.length && f && f(g.enter),
                g.leave.length && d && d(g.leave));
            }),
            rd(this._abs),
            this._run.forEach(function (c) {
              return c();
            }),
            u = n.duration(),
            l = this._final.slice(0),
            n.add(function () {
              u <= n.time() &&
                (l.forEach(function (c) {
                  return c();
                }),
                $u(i, "onComplete"));
            }),
            _e = r;
          o--;

        )
          this.actions[o].vars.once && this.actions[o].kill();
        return $u(this, "onStart"), n.restart(), this;
      }, "animate")),
      (e.loadState = a(function (i) {
        i ||
          (i = a(function () {
            return 0;
          }, "done"));
        var r = [];
        return (
          this.actions.forEach(function (n) {
            if (n.vars.loadState) {
              var o,
                l = a(function u(c) {
                  c && (n.targets = c),
                    (o = r.indexOf(u)),
                    ~o && (r.splice(o, 1), r.length || i());
                }, "f");
              r.push(l), n.vars.loadState(l);
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
        var n = this;
        return (
          this !== _e &&
            (i || this.getState(r),
            this.loadState(function () {
              n._killed || (n.setState(), n.animate());
            })),
          this
        );
      }, "run")),
      (e.clear = a(function (i) {
        this.state.clear(), i || (this.actions.length = 0);
      }, "clear")),
      (e.getStateById = a(function (i) {
        for (var r = this.actions.length, n; r--; )
          if (((n = this.actions[r].getStateById(i)), n)) return n;
        return this.state.idLookup[i] && this.state;
      }, "getStateById")),
      (e.kill = a(function () {
        (this._killed = 1), this.clear(), delete Va[this.id];
      }, "kill")),
      s
    );
  })(),
  wn = (function () {
    function s() {}
    return (
      a(s, "Flip"),
      (s.getState = a(function (t, i) {
        var r = ia(t, i);
        return (
          Qn && Qn.states.push(r),
          i && i.batch && s.batch(i.batch).state.add(r),
          r
        );
      }, "getState")),
      (s.from = a(function (t, i) {
        return (
          (i = i || {}),
          "clearProps" in i || (i.clearProps = !0),
          sa(
            t,
            ia(i.targets || t.targets, {
              props: i.props || t.props,
              simple: i.simple,
              kill: !!i.kill,
            }),
            i,
            -1
          )
        );
      }, "from")),
      (s.to = a(function (t, i) {
        return sa(
          t,
          ia(i.targets || t.targets, {
            props: i.props || t.props,
            simple: i.simple,
            kill: !!i.kill,
          }),
          i,
          1
        );
      }, "to")),
      (s.fromTo = a(function (t, i, r) {
        return sa(t, i, r);
      }, "fromTo")),
      (s.fit = a(function (t, i, r) {
        var n = r ? Zr(r, ed) : {},
          o = r || n,
          l = o.absolute,
          u = o.scale,
          c = o.getVars,
          f = o.props,
          d = o.runBackwards,
          p = o.onComplete,
          h = o.simple,
          g = r && r.fitChild && Jn(r.fitChild),
          m = qa(i, f, h, t),
          _ = qa(t, 0, h, m),
          b = f ? Eo[f] : ko,
          w = st.context();
        return (
          f && nd(n, m.props),
          ds(_, b),
          d &&
            ("immediateRender" in n || (n.immediateRender = !0),
            (n.onComplete = function () {
              _o(_), p && p.apply(this, arguments);
            })),
          l && Pl(_, m),
          (n = on(_, m, u || g, !n.duration && f, g, n.duration || c ? n : 0)),
          typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex),
          w &&
            !c &&
            w.add(function () {
              return function () {
                return _o(_);
              };
            }),
          c ? n : n.duration ? st.to(_.element, n) : null
        );
      }, "fit")),
      (s.makeAbsolute = a(function (t, i) {
        return (t instanceof ni ? t : new ni(t, i)).makeAbsolute();
      }, "makeAbsolute")),
      (s.batch = a(function (t) {
        return t || (t = "default"), Va[t] || (Va[t] = new _0(t));
      }, "batch")),
      (s.killFlipsOf = a(function (t, i) {
        (t instanceof ni ? t.targets : yn(t)).forEach(function (r) {
          return r && Ml(r._flip, i !== !1 ? 1 : 2);
        });
      }, "killFlipsOf")),
      (s.isFlipping = a(function (t) {
        var i = s.getByTarget(t);
        return !!i && i.isActive();
      }, "isFlipping")),
      (s.getByTarget = a(function (t) {
        return (Jn(t) || mo)._flip;
      }, "getByTarget")),
      (s.getElementState = a(function (t, i) {
        return new Dr(Jn(t), i);
      }, "getElementState")),
      (s.convertCoordinates = a(function (t, i, r) {
        var n = _i(i, !0, !0).multiply(_i(t));
        return r ? n.apply(r) : n;
      }, "convertCoordinates")),
      (s.register = a(function (t) {
        if (((Bi = typeof document < "u" && document.body), Bi)) {
          (st = t),
            Sl(Bi),
            (yn = st.utils.toArray),
            (Ba = st.core.getStyleSaver);
          var i = st.utils.snap(0.1);
          Pi = a(function (n, o) {
            return i(parseFloat(n) + o);
          }, "_closestTenth");
        }
      }, "register")),
      s
    );
  })();
wn.version = "3.13.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(wn);
I.registerPlugin(wn);
const y0 = a(() => {
    document.querySelector(".seo_header_flip_wrap");
    const s = document.querySelector(".seo_header_title_col"),
      e = document.querySelector(".seo_header_title_text"),
      t = document.querySelector(".seo_header_empty_col"),
      i = document.querySelector(".seo_header_service_col"),
      r = document.querySelector(".seo_header_service_component"),
      n = document.querySelector(".seo_heading_text"),
      o = document.querySelector(".seo_header_service_button"),
      l = document.querySelector(".seo_service_list_wrap"),
      u = document.querySelector(".project_card_tags_seo");
    function c() {
      const f = wn.getState([s, e, t, i, r, n, o, l, u], {
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
      s.classList.toggle("inactive"),
        t.classList.toggle("inactive"),
        i.classList.toggle("u-column-3"),
        i.classList.toggle("u-column-12"),
        l.classList.toggle("inactive"),
        u.classList.toggle("active"),
        n.classList.toggle("active"),
        r.classList.toggle("active"),
        o.classList.toggle("active"),
        wn.from(f, { duration: 1.6, ease: "expo.inOut", absoluteOnLeave: !0 });
    }
    a(c, "flipService"),
      o.addEventListener("click", c),
      o.addEventListener("click", () => {});
  }, "seoFlip"),
  w0 = a(() => {
    y0();
  }, "initSeoFlip"),
  b0 = a(() => {
    r0(), Qi(), _l(), Ji(), w0(), dc(), zr().add(() => er(), "-=1");
  }, "seoInit");
I.registerPlugin(be);
const S0 = a((s) => {
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
    const n = a(() => {
        t.forEach((c) => {
          c && typeof c.revert == "function" && c.revert();
        }),
          (t = []),
          i && (i.kill(), (i = null)),
          document
            .querySelectorAll(
              ".move-text-main, .move-text-title, .move-text-info, .move-text-meta"
            )
            .forEach((c) => {
              c.parentNode &&
                (c.parentNode.insertBefore(c.firstChild, c), c.remove());
            });
      }, "cleanup"),
      o = a(async () => {
        const u = document.querySelector("[work-cms-hero='text']"),
          c = document.querySelector("[work-cms-hero='back-btn']"),
          f = document.querySelector("[work-cms-hero='line']"),
          d = document.querySelector("[work-cms-hero='info']"),
          p = document.querySelector("[work-cms-hero='info-title']"),
          h = document.querySelector("[work-cms-hero='info-text']"),
          g = document.querySelector("[work-cms-hero='info-meta']"),
          m = document.querySelectorAll("[work-cms-hero='tag']"),
          _ = document.querySelectorAll("[work-cms-hero='visual']"),
          b = document.querySelector("[work-cms-hero='bg'] img");
        u &&
          be.create(u, {
            type: "chars, lines, words",
            autoSplit: !0,
            mask: "lines",
            linesClass: "work-cms-hero-text-line",
            tag: "div",
            onSplit(w) {
              be.create(p, {
                type: "lines",
                autoSplit: !0,
                mask: "lines",
                linesClass: "work-cms-info-title-line",
                tag: "div",
                onSplit(y) {
                  be.create(h, {
                    type: "lines",
                    autoSplit: !0,
                    mask: "lines",
                    linesClass: "work-cms-info-text-line",
                    tag: "div",
                    onSplit(v) {
                      be.create(g, {
                        type: "lines",
                        autoSplit: !0,
                        mask: "lines",
                        linesClass: "work-cms-info-meta-line",
                        tag: "div",
                        onSplit(S) {
                          t.push(w, y, v, S),
                            w.lines.forEach((C) => {
                              const T = document.createElement("div");
                              T.classList.add("move-text-main"),
                                (T.style.overflow = "clip"),
                                (T.style.position = "relative"),
                                C.parentNode.insertBefore(T, C),
                                T.appendChild(C);
                            }),
                            y.lines.forEach((C) => {
                              const T = document.createElement("div");
                              T.classList.add("move-text-title"),
                                (T.style.overflow = "clip"),
                                (T.style.position = "relative"),
                                C.parentNode.insertBefore(T, C),
                                T.appendChild(C);
                            }),
                            v.lines.forEach((C) => {
                              const T = document.createElement("div");
                              T.classList.add("move-text-info"),
                                (T.style.overflow = "clip"),
                                (T.style.position = "relative"),
                                C.parentNode.insertBefore(T, C),
                                T.appendChild(C);
                            }),
                            S.lines.forEach((C) => {
                              const T = document.createElement("div");
                              T.classList.add("move-text-meta"),
                                (T.style.overflow = "clip"),
                                (T.style.position = "relative"),
                                C.parentNode.insertBefore(T, C),
                                T.appendChild(C);
                            });
                          const k = a((C, T) => {
                            const A = C.querySelectorAll("span");
                            A.length &&
                              A.forEach((P) => {
                                const z = document.createElement("div");
                                (z.style.overflow = "clip"),
                                  (z.style.position = "relative"),
                                  (z.style.paddingBottom = "3px"),
                                  P.parentNode.insertBefore(z, P),
                                  z.appendChild(P);
                              });
                          }, "wrapSpans");
                          return (
                            k(u),
                            k(p),
                            k(h),
                            k(g),
                            (i = I.timeline()),
                            I.set(w.chars, { opacity: 0, yPercent: 100 }),
                            I.set(c, { opacity: 0, yPercent: 100 }),
                            I.set(m, {
                              opacity: 0,
                              y: 50,
                              scale: 0.4,
                              transformOrigin: "center right",
                            }),
                            I.set(f, {
                              opacity: 0,
                              scaleX: 0,
                              transformOrigin: "center left",
                            }),
                            I.set(d, { opacity: 0, y: 50 }),
                            I.set(".move-text-title", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            I.set(".move-text-info", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            I.set(".move-text-meta", {
                              opacity: 0,
                              yPercent: 100,
                            }),
                            I.set(_, { y: 100, opacity: 0 }),
                            I.set(b, { scale: 1.4 }),
                            i.to(
                              w.chars,
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
                              _,
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
            n(),
              setTimeout(() => {
                o();
              }, 100);
          }, 250)));
      }, "handleResize");
    o(), e() || window.addEventListener("resize", l);
  }, "initWorkCmsTransitions"),
  x0 = a(() => {
    Qi(), Ji();
    const s = zr();
    s.add(() => er(), "-=1.4"), s.add(() => S0(), "-=1.4");
  }, "workCmsInit"),
  T0 = {
    home: Iu,
    about: Cm,
    work: Ym,
    contact: $m,
    career: Hm,
    "extra-page": Iu,
    service: t0,
    work_cms: x0,
    seo: b0,
  },
  E0 = a(() => {
    const s = document.querySelector("[page-route]");
    if (!s) return;
    const e = s.getAttribute("page-route"),
      t = T0[e];
    t && t();
  }, "PageRouter"),
  k0 = a(() => {
    const s = document.querySelector("[nav-menu='trigger']"),
      e = document.querySelector("[nav-menu='component']"),
      t = document.querySelector("[nav-menu='contain']"),
      i = document.querySelector("[main-nav='brand']"),
      r = document.querySelector("[nav-menu='brand']"),
      n = document.querySelectorAll("[nav-menu='link-item']"),
      o = document.querySelector("[nav-menu='info-text']"),
      l = document.querySelectorAll("[nav-menu='close']"),
      u = document.querySelectorAll("[nav-menu='social-link']");
    if (!s || !e || !t || !r || !n || !o || !u) return;
    I.set(e, { clipPath: "inset(0% 0% 100% 0%)" }),
      I.set([r, n, u], { y: "100%", opacity: 0 }),
      I.set(o, { y: "20%", opacity: 0 });
    const c = I.timeline({ paused: !0 }),
      f = I.timeline({ paused: !0 });
    c
      .to(e, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "expo.inOut",
        duration: 1,
      })
      .to(r, { y: "0%", duration: 1, opacity: 1, ease: "expo.out" }, "-=0.4")
      .to(i, { x: "-100%", duration: 1, opacity: 0, ease: "expo.out" }, "-=1.4")
      .to(
        n,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.06 },
        "-=1"
      )
      .to(o, { y: "0%", opacity: 1, duration: 1.2, ease: "expo.out" }, "-=0.9")
      .to(
        u,
        { y: "0%", duration: 1.2, opacity: 1, ease: "expo.out", stagger: 0.1 },
        "-=1"
      ),
      f
        .to([r, n], {
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
      s.addEventListener("click", () => {
        const g =
          s.getAttribute("hamburger-state") === "open" ? "closed" : "open";
        s.setAttribute("hamburger-state", g),
          g === "open" ? (f.pause(), c.play(0)) : (c.pause(), f.play(0));
      }),
      l.forEach((h) => {
        h.addEventListener("click", () => {
          s.setAttribute("hamburger-state", "closed"), f.play(0);
        });
      });
    const d = 767;
    function p() {
      return window.innerWidth <= d;
    }
    a(p, "isMobile"),
      window.addEventListener("resize", () => {
        s.getAttribute("hamburger-state") === "open" &&
          !p() &&
          (s.setAttribute("hamburger-state", "closed"), f.play(0));
      });
  }, "navMenu"),
  C0 = a(() => {
    k0();
  }, "initNavMenu"),
  Dl = class Dl {
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
a(Dl, "Noise");
let $a = Dl;
const Ku = a((s) => {
    const e = document.querySelector(".page_overlay"),
      t = document.querySelector("[page-overlay='text-wrap']"),
      i = document.querySelectorAll("[page-load='component']"),
      r = document.querySelectorAll("[page-load='wrap']"),
      n = document.querySelectorAll("[page-load='gradient']"),
      o = document.querySelectorAll("[page-load='text']");
    e && I.set(e, { clipPath: "inset(100% 0% 0% 0%)", pointerEvents: "none" }),
      t && I.set(t, { opacity: 0, y: 50, willChange: "transform, opacity" });
    const l = I.timeline();
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
              n.length && I.set(n, { opacity: 1 }),
                r.length && I.set(r, { opacity: 0 }),
                o.length && I.set(o, { opacity: 0 }),
                i.length &&
                  I.set(i, {
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
  P0 = a(() => {
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
        e.addEventListener("click", async (n) => {
          n.preventDefault();
          const o = e.href,
            l = document.createElement("link");
          (l.rel = "prefetch"),
            (l.href = o),
            document.head.appendChild(l),
            await Ku(),
            (window.location.href = o);
        });
    }),
      window.addEventListener("popstate", async () => {
        await Ku(), window.location.reload();
      });
  }, "pageToPage");
I.registerPlugin(be, X);
const M0 = {
    lines: { duration: 1.8, stagger: 0.08 },
    words: { duration: 0.6, stagger: 0.06 },
    chars: { duration: 0.4, stagger: 0.01 },
  },
  A0 = a(() => {
    const s = a(
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
          X.getAll().forEach((o) => o.kill());
      }, "cleanup"),
      r = a(() => {
        document.querySelectorAll("[split-text]").forEach((o) => {
          I.set(o, { autoAlpha: 1 });
          const l = o.getAttribute("split-text") || "lines",
            u =
              l === "lines"
                ? ["lines"]
                : l === "words"
                ? ["lines", "words"]
                : ["lines", "words", "chars"],
            c = be.create(o, {
              type: u.join(", "),
              mask: "lines",
              autoSplit: !0,
              linesClass: "line",
              wordsClass: "word",
              charsClass: "letter",
              onSplit: a(function (f) {
                const d = f[l],
                  p = M0[l];
                return I.from(d, {
                  yPercent: 110,
                  duration: p.duration,
                  stagger: p.stagger,
                  ease: "expo.out",
                  scrollTrigger: {
                    trigger: o,
                    start: "clamp(top 80%)",
                    once: !0,
                  },
                });
              }, "onSplit"),
            });
          e.push(c);
        });
      }, "createSplitAnimations"),
      n = a(() => {
        s() ||
          (clearTimeout(t),
          (t = setTimeout(() => {
            i(),
              setTimeout(() => {
                r(), X.refresh();
              }, 100);
          }, 250)));
      }, "handleResize");
    document.fonts.ready.then(() => {
      r(), s() || window.addEventListener("resize", n);
    });
  }, "initSplitText"),
  O0 = a(() => {
    I.set(".cursor", { xPercent: -50, yPercent: -50 });
    let s = I.quickTo(".cursor", "x", { duration: 0.6, ease: "power3" }),
      e = I.quickTo(".cursor", "y", { duration: 0.6, ease: "power3" });
    window.addEventListener("mousemove", (t) => {
      s(t.clientX), e(t.clientY);
    });
  }, "customCursor"),
  L0 = a(() => {
    O0();
  }, "initCustomCursor"),
  D0 = a(() => {
    C0(), new $a(), $f(), P0(), A0(), L0();
  }, "globalInit"),
  ad = a(() => {
    const s = navigator.userAgent,
      e = /iPad|iPhone|iPod/.test(s),
      t = /WebKit/.test(s),
      i = /Safari/.test(s) && !/Chrome/.test(s),
      r = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return e && t && i && r;
  }, "isSafariMobile");
let Wa = window.innerHeight;
const Al = a((s) => {
    (Math.abs(s - Wa) > 150 || !ad()) && (Wa = s);
  }, "updateStableViewportHeight"),
  I0 = a(() => {
    if (!ad()) return;
    const s = a(() => {
      document.documentElement.style.setProperty(
        "--stable-vh",
        `${Wa * 0.01}px`
      );
    }, "setViewportHeight");
    s(),
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          Al(window.innerHeight), s();
        }, 500);
      });
  }, "applySafariViewportFix"),
  ld = a((s, e) => {
    let t;
    return a(function (...r) {
      const n = a(() => {
        clearTimeout(t), s(...r);
      }, "later");
      clearTimeout(t), (t = setTimeout(n, e));
    }, "executedFunction");
  }, "debounce"),
  z0 = ld(() => {
    const s = window.innerHeight;
    Al(s);
    const e = xr();
    e && e.resize(), X.refresh();
  }, 250),
  R0 = a(() => {
    setTimeout(() => {
      const s = xr();
      s && s.resize(), X.refresh();
    }, 500);
  }, "handleOrientationChange"),
  N0 = a(() => {
    I0(),
      window.addEventListener("resize", z0),
      window.addEventListener("orientationchange", R0);
    let s = window.innerHeight,
      e = window.innerWidth;
    const t = ld(() => {
      const i = window.innerHeight,
        r = Math.abs(i - s) > 100,
        n = Math.abs(window.innerWidth - e) > 100;
      if (r || n) {
        Al(i);
        const o = xr();
        o && o.resize(), X.refresh(), (s = i), (e = window.innerWidth);
      }
    }, 100);
    window.addEventListener("resize", t);
  }, "initializeScrollTriggerManager");
document.addEventListener("DOMContentLoaded", () => {
  N0(), D0(), E0(), $f();
});
