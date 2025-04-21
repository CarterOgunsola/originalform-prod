var __defProp = Object.defineProperty;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __publicField = (obj, key, value) =>
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) =>
      x.done
        ? resolve(x.value)
        : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function () {
  "use strict";
  var _a;
  var _documentCurrentScript =
    typeof document !== "undefined" ? document.currentScript : null;
  const context = (() => {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    } else if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();
  const defines = __DEFINES__;
  Object.keys(defines).forEach((key) => {
    const segments = key.split(".");
    let target = context;
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      if (i === segments.length - 1) {
        target[segment] = defines[key];
      } else {
        target = target[segment] || (target[segment] = {});
      }
    }
  });
  class HMRMessenger {
    constructor(connection) {
      this.connection = connection;
      this.queue = [];
    }
    send(message) {
      this.queue.push(message);
      this.flush();
    }
    flush() {
      if (this.connection.isReady()) {
        this.queue.forEach((msg) => this.connection.send(msg));
        this.queue = [];
      }
    }
  }
  class HMRClient {
    constructor(logger, connection, importUpdatedModule) {
      this.logger = logger;
      this.importUpdatedModule = importUpdatedModule;
      this.hotModulesMap = /* @__PURE__ */ new Map();
      this.disposeMap = /* @__PURE__ */ new Map();
      this.pruneMap = /* @__PURE__ */ new Map();
      this.dataMap = /* @__PURE__ */ new Map();
      this.customListenersMap = /* @__PURE__ */ new Map();
      this.ctxToListenersMap = /* @__PURE__ */ new Map();
      this.updateQueue = [];
      this.pendingUpdateQueue = false;
      this.messenger = new HMRMessenger(connection);
    }
    notifyListeners(event2, data) {
      return __async(this, null, function* () {
        const cbs = this.customListenersMap.get(event2);
        if (cbs) {
          yield Promise.allSettled(cbs.map((cb) => cb(data)));
        }
      });
    }
    clear() {
      this.hotModulesMap.clear();
      this.disposeMap.clear();
      this.pruneMap.clear();
      this.dataMap.clear();
      this.customListenersMap.clear();
      this.ctxToListenersMap.clear();
    }
    // After an HMR update, some modules are no longer imported on the page
    // but they may have left behind side effects that need to be cleaned up
    // (.e.g style injections)
    prunePaths(paths) {
      return __async(this, null, function* () {
        yield Promise.all(
          paths.map((path) => {
            const disposer = this.disposeMap.get(path);
            if (disposer) return disposer(this.dataMap.get(path));
          })
        );
        paths.forEach((path) => {
          const fn = this.pruneMap.get(path);
          if (fn) {
            fn(this.dataMap.get(path));
          }
        });
      });
    }
    warnFailedUpdate(err, path) {
      if (!err.message.includes("fetch")) {
        this.logger.error(err);
      }
      this.logger.error(
        `[hmr] Failed to reload ${path}. This could be due to syntax errors or importing non-existent modules. (see errors above)`
      );
    }
    /**
     * buffer multiple hot updates triggered by the same src change
     * so that they are invoked in the same order they were sent.
     * (otherwise the order may be inconsistent because of the http request round trip)
     */
    queueUpdate(payload) {
      return __async(this, null, function* () {
        this.updateQueue.push(this.fetchUpdate(payload));
        if (!this.pendingUpdateQueue) {
          this.pendingUpdateQueue = true;
          yield Promise.resolve();
          this.pendingUpdateQueue = false;
          const loading = [...this.updateQueue];
          this.updateQueue = [];
          (yield Promise.all(loading)).forEach((fn) => fn && fn());
        }
      });
    }
    fetchUpdate(update2) {
      return __async(this, null, function* () {
        const { path, acceptedPath } = update2;
        const mod = this.hotModulesMap.get(path);
        if (!mod) {
          return;
        }
        let fetchedModule;
        const isSelfUpdate = path === acceptedPath;
        const qualifiedCallbacks = mod.callbacks.filter(({ deps }) =>
          deps.includes(acceptedPath)
        );
        if (isSelfUpdate || qualifiedCallbacks.length > 0) {
          const disposer = this.disposeMap.get(acceptedPath);
          if (disposer) yield disposer(this.dataMap.get(acceptedPath));
          try {
            fetchedModule = yield this.importUpdatedModule(update2);
          } catch (e) {
            this.warnFailedUpdate(e, acceptedPath);
          }
        }
        return () => {
          for (const { deps, fn } of qualifiedCallbacks) {
            fn(
              deps.map((dep) => (dep === acceptedPath ? fetchedModule : void 0))
            );
          }
          const loggedPath = isSelfUpdate
            ? path
            : `${acceptedPath} via ${path}`;
          this.logger.debug(`[vite] hot updated: ${loggedPath}`);
        };
      });
    }
  }
  const hmrConfigName = __HMR_CONFIG_NAME__;
  const base$1 = __BASE__ || "/";
  function h(e, attrs = {}, ...children2) {
    const elem = document.createElement(e);
    for (const [k, v] of Object.entries(attrs)) {
      elem.setAttribute(k, v);
    }
    elem.append(...children2);
    return elem;
  }
  const templateStyle =
    /*css*/
    `
:host {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  --monospace: 'SFMono-Regular', Consolas,
  'Liberation Mono', Menlo, Courier, monospace;
  --red: #ff5555;
  --yellow: #e2aa53;
  --purple: #cfa4ff;
  --cyan: #2dd9da;
  --dim: #c9c9c9;

  --window-background: #181818;
  --window-color: #d8d8d8;
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  background: rgba(0, 0, 0, 0.66);
}

.window {
  font-family: var(--monospace);
  line-height: 1.5;
  max-width: 80vw;
  color: var(--window-color);
  box-sizing: border-box;
  margin: 30px auto;
  padding: 2.5vh 4vw;
  position: relative;
  background: var(--window-background);
  border-radius: 6px 6px 8px 8px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  overflow: hidden;
  border-top: 8px solid var(--red);
  direction: ltr;
  text-align: left;
}

pre {
  font-family: var(--monospace);
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 1em;
  overflow-x: scroll;
  scrollbar-width: none;
}

pre::-webkit-scrollbar {
  display: none;
}

pre.frame::-webkit-scrollbar {
  display: block;
  height: 5px;
}

pre.frame::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 5px;
}

pre.frame {
  scrollbar-width: thin;
}

.message {
  line-height: 1.3;
  font-weight: 600;
  white-space: pre-wrap;
}

.message-body {
  color: var(--red);
}

.plugin {
  color: var(--purple);
}

.file {
  color: var(--cyan);
  margin-bottom: 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.frame {
  color: var(--yellow);
}

.stack {
  font-size: 13px;
  color: var(--dim);
}

.tip {
  font-size: 13px;
  color: #999;
  border-top: 1px dotted #999;
  padding-top: 13px;
  line-height: 1.8;
}

code {
  font-size: 13px;
  font-family: var(--monospace);
  color: var(--yellow);
}

.file-link {
  text-decoration: underline;
  cursor: pointer;
}

kbd {
  line-height: 1.5;
  font-family: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgb(38, 40, 44);
  color: rgb(166, 167, 171);
  padding: 0.15rem 0.3rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem 0.0625rem 0.1875rem;
  border-style: solid;
  border-color: rgb(54, 57, 64);
  border-image: initial;
}
`;
  const createTemplate = () =>
    h(
      "div",
      { class: "backdrop", part: "backdrop" },
      h(
        "div",
        { class: "window", part: "window" },
        h(
          "pre",
          { class: "message", part: "message" },
          h("span", { class: "plugin", part: "plugin" }),
          h("span", { class: "message-body", part: "message-body" })
        ),
        h("pre", { class: "file", part: "file" }),
        h("pre", { class: "frame", part: "frame" }),
        h("pre", { class: "stack", part: "stack" }),
        h(
          "div",
          { class: "tip", part: "tip" },
          "Click outside, press ",
          h("kbd", {}, "Esc"),
          " key, or fix the code to dismiss.",
          h("br"),
          "You can also disable this overlay by setting ",
          h("code", { part: "config-option-name" }, "server.hmr.overlay"),
          " to ",
          h("code", { part: "config-option-value" }, "false"),
          " in ",
          h("code", { part: "config-file-name" }, hmrConfigName),
          "."
        )
      ),
      h("style", {}, templateStyle)
    );
  const fileRE = /(?:[a-zA-Z]:\\|\/).*?:\d+:\d+/g;
  const codeframeRE = /^(?:>?\s*\d+\s+\|.*|\s+\|\s*\^.*)\r?\n/gm;
  const { HTMLElement: HTMLElement$1 = class {} } = globalThis;
  class ErrorOverlay extends HTMLElement$1 {
    constructor(err, links = true) {
      var _a2;
      super();
      this.root = this.attachShadow({ mode: "open" });
      this.root.appendChild(createTemplate());
      codeframeRE.lastIndex = 0;
      const hasFrame = err.frame && codeframeRE.test(err.frame);
      const message = hasFrame
        ? err.message.replace(codeframeRE, "")
        : err.message;
      if (err.plugin) {
        this.text(".plugin", `[plugin:${err.plugin}] `);
      }
      this.text(".message-body", message.trim());
      const [file] = (
        ((_a2 = err.loc) == null ? void 0 : _a2.file) ||
        err.id ||
        "unknown file"
      ).split(`?`);
      if (err.loc) {
        this.text(".file", `${file}:${err.loc.line}:${err.loc.column}`, links);
      } else if (err.id) {
        this.text(".file", file);
      }
      if (hasFrame) {
        this.text(".frame", err.frame.trim());
      }
      this.text(".stack", err.stack, links);
      this.root.querySelector(".window").addEventListener("click", (e) => {
        e.stopPropagation();
      });
      this.addEventListener("click", () => {
        this.close();
      });
      this.closeOnEsc = (e) => {
        if (e.key === "Escape" || e.code === "Escape") {
          this.close();
        }
      };
      document.addEventListener("keydown", this.closeOnEsc);
    }
    text(selector2, text2, linkFiles = false) {
      const el = this.root.querySelector(selector2);
      if (!linkFiles) {
        el.textContent = text2;
      } else {
        let curIndex = 0;
        let match;
        fileRE.lastIndex = 0;
        while ((match = fileRE.exec(text2))) {
          const { 0: file, index: index2 } = match;
          if (index2 != null) {
            const frag = text2.slice(curIndex, index2);
            el.appendChild(document.createTextNode(frag));
            const link = document.createElement("a");
            link.textContent = file;
            link.className = "file-link";
            link.onclick = () => {
              fetch(
                new URL(
                  `${base$1}__open-in-editor?file=${encodeURIComponent(file)}`,
                  (_documentCurrentScript &&
                    _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" &&
                    _documentCurrentScript.src) ||
                    new URL("index.js", document.baseURI).href
                )
              );
            };
            el.appendChild(link);
            curIndex += frag.length + file.length;
          }
        }
      }
    }
    close() {
      var _a2;
      (_a2 = this.parentNode) == null ? void 0 : _a2.removeChild(this);
      document.removeEventListener("keydown", this.closeOnEsc);
    }
  }
  const overlayId = "vite-error-overlay";
  const { customElements } = globalThis;
  if (customElements && !customElements.get(overlayId)) {
    customElements.define(overlayId, ErrorOverlay);
  }
  console.debug("[vite] connecting...");
  const importMetaUrl = new URL(
    (_documentCurrentScript &&
      _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" &&
      _documentCurrentScript.src) ||
      new URL("index.js", document.baseURI).href
  );
  const serverHost = __SERVER_HOST__;
  const socketProtocol =
    __HMR_PROTOCOL__ || (importMetaUrl.protocol === "https:" ? "wss" : "ws");
  const hmrPort = __HMR_PORT__;
  const socketHost = `${__HMR_HOSTNAME__ || importMetaUrl.hostname}:${
    hmrPort || importMetaUrl.port
  }${__HMR_BASE__}`;
  const directSocketHost = __HMR_DIRECT_TARGET__;
  const base = __BASE__ || "/";
  const wsToken = __WS_TOKEN__;
  let socket;
  try {
    let fallback;
    if (!hmrPort) {
      fallback = () => {
        socket = setupWebSocket(socketProtocol, directSocketHost, () => {
          const currentScriptHostURL = new URL(
            (_documentCurrentScript &&
              _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" &&
              _documentCurrentScript.src) ||
              new URL("index.js", document.baseURI).href
          );
          const currentScriptHost =
            currentScriptHostURL.host +
            currentScriptHostURL.pathname.replace(/@vite\/client$/, "");
          console.error(
            `[vite] failed to connect to websocket.
your current setup:
  (browser) ${currentScriptHost} <--[HTTP]--> ${serverHost} (server)
  (browser) ${socketHost} <--[WebSocket (failing)]--> ${directSocketHost} (server)
Check out your Vite / network configuration and https://vite.dev/config/server-options.html#server-hmr .`
          );
        });
        socket.addEventListener(
          "open",
          () => {
            console.info(
              "[vite] Direct websocket connection fallback. Check out https://vite.dev/config/server-options.html#server-hmr to remove the previous connection error."
            );
          },
          { once: true }
        );
      };
    }
    socket = setupWebSocket(socketProtocol, socketHost, fallback);
  } catch (error) {
    console.error(`[vite] failed to connect to websocket (${error}). `);
  }
  function setupWebSocket(protocol, hostAndPath, onCloseWithoutOpen) {
    const socket2 = new WebSocket(
      `${protocol}://${hostAndPath}?token=${wsToken}`,
      "vite-hmr"
    );
    let isOpened = false;
    socket2.addEventListener(
      "open",
      () => {
        isOpened = true;
        notifyListeners("vite:ws:connect", { webSocket: socket2 });
      },
      { once: true }
    );
    socket2.addEventListener("message", (_0) =>
      __async(this, [_0], function* ({ data }) {
        handleMessage(JSON.parse(data));
      })
    );
    socket2.addEventListener("close", (_0) =>
      __async(this, [_0], function* ({ wasClean }) {
        if (wasClean) return;
        if (!isOpened && onCloseWithoutOpen) {
          onCloseWithoutOpen();
          return;
        }
        notifyListeners("vite:ws:disconnect", { webSocket: socket2 });
        if (hasDocument) {
          console.log(`[vite] server connection lost. Polling for restart...`);
          yield waitForSuccessfulPing(protocol, hostAndPath);
          location.reload();
        }
      })
    );
    return socket2;
  }
  function cleanUrl(pathname) {
    const url = new URL(pathname, "http://vite.dev");
    url.searchParams.delete("direct");
    return url.pathname + url.search;
  }
  let isFirstUpdate = true;
  const outdatedLinkTags = /* @__PURE__ */ new WeakSet();
  const debounceReload = (time) => {
    let timer;
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        location.reload();
      }, time);
    };
  };
  const pageReload = debounceReload(50);
  const hmrClient = new HMRClient(
    console,
    {
      isReady: () => socket && socket.readyState === 1,
      send: (message) => socket.send(message),
    },
    function importUpdatedModule(_0) {
      return __async(
        this,
        arguments,
        function* ({
          acceptedPath,
          timestamp,
          explicitImportRequired,
          isWithinCircularImport,
        }) {
          const [acceptedPathWithoutQuery, query] = acceptedPath.split(`?`);
          const importPromise = import(
            /* @vite-ignore */
            base +
              acceptedPathWithoutQuery.slice(1) +
              `?${explicitImportRequired ? "import&" : ""}t=${timestamp}${
                query ? `&${query}` : ""
              }`
          );
          if (isWithinCircularImport) {
            importPromise.catch(() => {
              console.info(
                `[hmr] ${acceptedPath} failed to apply HMR as it's within a circular import. Reloading page to reset the execution order. To debug and break the circular import, you can run \`vite --debug hmr\` to log the circular dependency path if a file change triggered it.`
              );
              pageReload();
            });
          }
          return yield importPromise;
        }
      );
    }
  );
  function handleMessage(payload) {
    return __async(this, null, function* () {
      switch (payload.type) {
        case "connected":
          console.debug(`[vite] connected.`);
          hmrClient.messenger.flush();
          setInterval(() => {
            if (socket.readyState === socket.OPEN) {
              socket.send('{"type":"ping"}');
            }
          }, __HMR_TIMEOUT__);
          break;
        case "update":
          notifyListeners("vite:beforeUpdate", payload);
          if (hasDocument) {
            if (isFirstUpdate && hasErrorOverlay()) {
              location.reload();
              return;
            } else {
              if (enableOverlay) {
                clearErrorOverlay();
              }
              isFirstUpdate = false;
            }
          }
          yield Promise.all(
            payload.updates.map((update2) =>
              __async(this, null, function* () {
                if (update2.type === "js-update") {
                  return hmrClient.queueUpdate(update2);
                }
                const { path, timestamp } = update2;
                const searchUrl = cleanUrl(path);
                const el = Array.from(document.querySelectorAll("link")).find(
                  (e) =>
                    !outdatedLinkTags.has(e) &&
                    cleanUrl(e.href).includes(searchUrl)
                );
                if (!el) {
                  return;
                }
                const newPath = `${base}${searchUrl.slice(1)}${
                  searchUrl.includes("?") ? "&" : "?"
                }t=${timestamp}`;
                return new Promise((resolve) => {
                  const newLinkTag = el.cloneNode();
                  newLinkTag.href = new URL(newPath, el.href).href;
                  const removeOldEl = () => {
                    el.remove();
                    console.debug(`[vite] css hot updated: ${searchUrl}`);
                    resolve();
                  };
                  newLinkTag.addEventListener("load", removeOldEl);
                  newLinkTag.addEventListener("error", removeOldEl);
                  outdatedLinkTags.add(el);
                  el.after(newLinkTag);
                });
              })
            )
          );
          notifyListeners("vite:afterUpdate", payload);
          break;
        case "custom": {
          notifyListeners(payload.event, payload.data);
          break;
        }
        case "full-reload":
          notifyListeners("vite:beforeFullReload", payload);
          if (hasDocument) {
            if (payload.path && payload.path.endsWith(".html")) {
              const pagePath = decodeURI(location.pathname);
              const payloadPath = base + payload.path.slice(1);
              if (
                pagePath === payloadPath ||
                payload.path === "/index.html" ||
                (pagePath.endsWith("/") &&
                  pagePath + "index.html" === payloadPath)
              ) {
                pageReload();
              }
              return;
            } else {
              pageReload();
            }
          }
          break;
        case "prune":
          notifyListeners("vite:beforePrune", payload);
          yield hmrClient.prunePaths(payload.paths);
          break;
        case "error": {
          notifyListeners("vite:error", payload);
          if (hasDocument) {
            const err = payload.err;
            if (enableOverlay) {
              createErrorOverlay(err);
            } else {
              console.error(
                `[vite] Internal Server Error
${err.message}
${err.stack}`
              );
            }
          }
          break;
        }
        default: {
          const check = payload;
          return check;
        }
      }
    });
  }
  function notifyListeners(event2, data) {
    hmrClient.notifyListeners(event2, data);
  }
  const enableOverlay = __HMR_ENABLE_OVERLAY__;
  const hasDocument = "document" in globalThis;
  function createErrorOverlay(err) {
    clearErrorOverlay();
    document.body.appendChild(new ErrorOverlay(err));
  }
  function clearErrorOverlay() {
    document.querySelectorAll(overlayId).forEach((n) => n.close());
  }
  function hasErrorOverlay() {
    return document.querySelectorAll(overlayId).length;
  }
  function waitForSuccessfulPing(socketProtocol2, hostAndPath, ms = 1e3) {
    return __async(this, null, function* () {
      const pingHostProtocol = socketProtocol2 === "wss" ? "https" : "http";
      const ping = () =>
        __async(this, null, function* () {
          try {
            yield fetch(`${pingHostProtocol}://${hostAndPath}`, {
              mode: "no-cors",
              headers: {
                // Custom headers won't be included in a request with no-cors so (ab)use one of the
                // safelisted headers to identify the ping request
                Accept: "text/x-vite-ping",
              },
            });
            return true;
          } catch (e) {}
          return false;
        });
      if (yield ping()) {
        return;
      }
      yield wait(ms);
      while (true) {
        if (document.visibilityState === "visible") {
          if (yield ping()) {
            break;
          }
          yield wait(ms);
        } else {
          yield waitForWindowShow();
        }
      }
    });
  }
  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function waitForWindowShow() {
    return new Promise((resolve) => {
      const onChange = () =>
        __async(this, null, function* () {
          if (document.visibilityState === "visible") {
            resolve();
            document.removeEventListener("visibilitychange", onChange);
          }
        });
      document.addEventListener("visibilitychange", onChange);
    });
  }
  const sheetsMap = /* @__PURE__ */ new Map();
  if ("document" in globalThis) {
    document.querySelectorAll("style[data-vite-dev-id]").forEach((el) => {
      sheetsMap.set(el.getAttribute("data-vite-dev-id"), el);
    });
  }
  "document" in globalThis
    ? (_a = document.querySelector("meta[property=csp-nonce]")) == null
      ? void 0
      : _a.nonce
    : void 0;
  /*! @vimeo/player v2.26.0 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty =
        Object.defineProperty ||
        function (obj, key, desc) {
          obj[key] = desc.value;
        },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return (
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true,
        }),
        obj[key]
      );
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return (obj[key] = value);
      };
    }
    function wrap2(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator =
          outerFn && outerFn.prototype instanceof Generator
            ? outerFn
            : Generator,
        generator = Object.create(protoGenerator.prototype),
        context2 = new Context2(tryLocsList || []);
      return (
        defineProperty(generator, "_invoke", {
          value: makeInvokeMethod(innerFn, self2, context2),
        }),
        generator
      );
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg),
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err,
        };
      }
    }
    exports.wrap = wrap2;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
      (IteratorPrototype = NativeIteratorPrototype);
    var Gp =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        Object.create(IteratorPrototype));
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value &&
            "object" == typeof value &&
            hasOwn.call(value, "__await")
            ? PromiseImpl.resolve(value.__await).then(
                function (value2) {
                  invoke("next", value2, resolve, reject);
                },
                function (err) {
                  invoke("throw", err, resolve, reject);
                }
              )
            : PromiseImpl.resolve(value).then(
                function (unwrapped) {
                  (result.value = unwrapped), resolve(result);
                },
                function (error) {
                  return invoke("throw", error, resolve, reject);
                }
              );
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return (previousPromise = previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                callInvokeWithMethodAndArg
              )
            : callInvokeWithMethodAndArg());
        },
      });
    }
    function makeInvokeMethod(innerFn, self2, context2) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state)
          throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context2.method = method, context2.arg = arg; ; ) {
          var delegate = context2.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context2);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context2.method)
            context2.sent = context2._sent = context2.arg;
          else if ("throw" === context2.method) {
            if ("suspendedStart" === state)
              throw ((state = "completed"), context2.arg);
            context2.dispatchException(context2.arg);
          } else
            "return" === context2.method &&
              context2.abrupt("return", context2.arg);
          state = "executing";
          var record = tryCatch(innerFn, self2, context2);
          if ("normal" === record.type) {
            if (
              ((state = context2.done ? "completed" : "suspendedYield"),
              record.arg === ContinueSentinel)
            )
              continue;
            return {
              value: record.arg,
              done: context2.done,
            };
          }
          "throw" === record.type &&
            ((state = "completed"),
            (context2.method = "throw"),
            (context2.arg = record.arg));
        }
      };
    }
    function maybeInvokeDelegate(delegate, context2) {
      var methodName = context2.method,
        method = delegate.iterator[methodName];
      if (void 0 === method)
        return (
          (context2.delegate = null),
          ("throw" === methodName &&
            delegate.iterator.return &&
            ((context2.method = "return"),
            (context2.arg = void 0),
            maybeInvokeDelegate(delegate, context2),
            "throw" === context2.method)) ||
            ("return" !== methodName &&
              ((context2.method = "throw"),
              (context2.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              )))),
          ContinueSentinel
        );
      var record = tryCatch(method, delegate.iterator, context2.arg);
      if ("throw" === record.type)
        return (
          (context2.method = "throw"),
          (context2.arg = record.arg),
          (context2.delegate = null),
          ContinueSentinel
        );
      var info = record.arg;
      return info
        ? info.done
          ? ((context2[delegate.resultName] = info.value),
            (context2.next = delegate.nextLoc),
            "return" !== context2.method &&
              ((context2.method = "next"), (context2.arg = void 0)),
            (context2.delegate = null),
            ContinueSentinel)
          : info
        : ((context2.method = "throw"),
          (context2.arg = new TypeError("iterator result is not an object")),
          (context2.delegate = null),
          ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0],
      };
      1 in locs && (entry.catchLoc = locs[1]),
        2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      (record.type = "normal"), delete record.arg, (entry.completion = record);
    }
    function Context2(tryLocsList) {
      (this.tryEntries = [
        {
          tryLoc: "root",
        },
      ]),
        tryLocsList.forEach(pushTryEntry, this),
        this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next2 = function next3() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return (
                    (next3.value = iterable[i]), (next3.done = false), next3
                  );
              return (next3.value = void 0), (next3.done = true), next3;
            };
          return (next2.next = next2);
        }
      }
      return {
        next: doneResult,
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true,
      };
    }
    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true,
      }),
      defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true,
      }),
      (GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        "GeneratorFunction"
      )),
      (exports.isGeneratorFunction = function (genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return (
          !!ctor &&
          (ctor === GeneratorFunction ||
            "GeneratorFunction" === (ctor.displayName || ctor.name))
        );
      }),
      (exports.mark = function (genFun) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
            : ((genFun.__proto__ = GeneratorFunctionPrototype),
              define(genFun, toStringTagSymbol, "GeneratorFunction")),
          (genFun.prototype = Object.create(Gp)),
          genFun
        );
      }),
      (exports.awrap = function (arg) {
        return {
          __await: arg,
        };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }),
      (exports.AsyncIterator = AsyncIterator),
      (exports.async = function (
        innerFn,
        outerFn,
        self2,
        tryLocsList,
        PromiseImpl
      ) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(
          wrap2(innerFn, outerFn, self2, tryLocsList),
          PromiseImpl
        );
        return exports.isGeneratorFunction(outerFn)
          ? iter
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      }),
      defineIteratorMethods(Gp),
      define(Gp, toStringTagSymbol, "Generator"),
      define(Gp, iteratorSymbol, function () {
        return this;
      }),
      define(Gp, "toString", function () {
        return "[object Generator]";
      }),
      (exports.keys = function (val) {
        var object = Object(val),
          keys = [];
        for (var key in object) keys.push(key);
        return (
          keys.reverse(),
          function next2() {
            for (; keys.length; ) {
              var key2 = keys.pop();
              if (key2 in object)
                return (next2.value = key2), (next2.done = false), next2;
            }
            return (next2.done = true), next2;
          }
        );
      }),
      (exports.values = values),
      (Context2.prototype = {
        constructor: Context2,
        reset: function (skipTempReset) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = false),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(resetTryEntry),
            !skipTempReset)
          )
            for (var name in this)
              "t" === name.charAt(0) &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1)) &&
                (this[name] = void 0);
        },
        stop: function () {
          this.done = true;
          var rootRecord = this.tryEntries[0].completion;
          if ("throw" === rootRecord.type) throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function (exception) {
          if (this.done) throw exception;
          var context2 = this;
          function handle(loc, caught) {
            return (
              (record.type = "throw"),
              (record.arg = exception),
              (context2.next = loc),
              caught && ((context2.method = "next"), (context2.arg = void 0)),
              !!caught
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
              record = entry.completion;
            if ("root" === entry.tryLoc) return handle("end");
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"),
                hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, true);
              } else {
                if (!hasFinally)
                  throw new Error("try statement without catch or finally");
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry &&
            ("break" === type || "continue" === type) &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc &&
            (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return (
            (record.type = type),
            (record.arg = arg),
            finallyEntry
              ? ((this.method = "next"),
                (this.next = finallyEntry.finallyLoc),
                ContinueSentinel)
              : this.complete(record)
          );
        },
        complete: function (record, afterLoc) {
          if ("throw" === record.type) throw record.arg;
          return (
            "break" === record.type || "continue" === record.type
              ? (this.next = record.arg)
              : "return" === record.type
              ? ((this.rval = this.arg = record.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === record.type && afterLoc && (this.next = afterLoc),
            ContinueSentinel
          );
        },
        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return (
                this.complete(entry.completion, entry.afterLoc),
                resetTryEntry(entry),
                ContinueSentinel
              );
          }
        },
        catch: function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ("throw" === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (iterable, resultName, nextLoc) {
          return (
            (this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc,
            }),
            "next" === this.method && (this.arg = void 0),
            ContinueSentinel
          );
        },
      }),
      exports
    );
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self2 = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self2, args);
        function _next(value) {
          asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            "next",
            value
          );
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false,
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false,
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2) _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2)) return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized$1(self2) {
    if (self2 === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    }
    return _assertThisInitialized$1(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint);
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var isNode$1 =
    typeof global !== "undefined" &&
    {}.toString.call(global) === "[object global]";
  function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) {
      return prop;
    }
    return ""
      .concat(type.toLowerCase())
      .concat(prop.substr(0, 1).toUpperCase())
      .concat(prop.substr(1));
  }
  function isDomElement(element) {
    return Boolean(
      element &&
        element.nodeType === 1 &&
        "nodeName" in element &&
        element.ownerDocument &&
        element.ownerDocument.defaultView
    );
  }
  function isInteger(value) {
    return (
      !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value
    );
  }
  function isVimeoUrl(url) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(
      url
    );
  }
  function isVimeoEmbed(url) {
    var expr =
      /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return expr.test(url);
  }
  function getOembedDomain(url) {
    var match = (url || "").match(/^(?:https?:)?(?:\/\/)?([^/?]+)/);
    var domain = ((match && match[1]) || "").replace("player.", "");
    var customDomains = [".videoji.hk", ".vimeo.work", ".videoji.cn"];
    for (
      var _i = 0, _customDomains = customDomains;
      _i < _customDomains.length;
      _i++
    ) {
      var customDomain = _customDomains[_i];
      if (domain.endsWith(customDomain)) {
        return domain;
      }
    }
    return "vimeo.com";
  }
  function getVimeoUrl() {
    var oEmbedParameters2 =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var id = oEmbedParameters2.id;
    var url = oEmbedParameters2.url;
    var idOrUrl = id || url;
    if (!idOrUrl) {
      throw new Error(
        "An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute."
      );
    }
    if (isInteger(idOrUrl)) {
      return "https://vimeo.com/".concat(idOrUrl);
    }
    if (isVimeoUrl(idOrUrl)) {
      return idOrUrl.replace("http:", "https:");
    }
    if (id) {
      throw new TypeError("“".concat(id, "” is not a valid video id."));
    }
    throw new TypeError("“".concat(idOrUrl, "” is not a vimeo.com url."));
  }
  var subscribe = function subscribe2(target, eventName, callback) {
    var onName =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : "addEventListener";
    var offName =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : "removeEventListener";
    var eventNames = typeof eventName === "string" ? [eventName] : eventName;
    eventNames.forEach(function (evName) {
      target[onName](evName, callback);
    });
    return {
      cancel: function cancel() {
        return eventNames.forEach(function (evName) {
          return target[offName](evName, callback);
        });
      },
    };
  };
  var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
  var postMessageSupport =
    typeof window !== "undefined" && typeof window.postMessage !== "undefined";
  if (!isNode$1 && (!arrayIndexOfSupport || !postMessageSupport)) {
    throw new Error(
      "Sorry, the Vimeo Player API is not available in this browser."
    );
  }
  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};
  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }
  /*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   */
  (function (self2) {
    if (self2.WeakMap) {
      return;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine =
      Object.defineProperty &&
      (function () {
        try {
          return (
            Object.defineProperty({}, "x", {
              value: 1,
            }).x === 1
          );
        } catch (e) {}
      })();
    var defineProperty = function (object, name, value) {
      if (hasDefine) {
        Object.defineProperty(object, name, {
          configurable: true,
          writable: true,
          value,
        });
      } else {
        object[name] = value;
      }
    };
    self2.WeakMap = (function () {
      function WeakMap2() {
        if (this === void 0) {
          throw new TypeError("Constructor WeakMap requires 'new'");
        }
        defineProperty(this, "_id", genId("_WeakMap"));
        if (arguments.length > 0) {
          throw new TypeError("WeakMap iterable is not supported");
        }
      }
      defineProperty(WeakMap2.prototype, "delete", function (key) {
        checkInstance(this, "delete");
        if (!isObject2(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          delete key[this._id];
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "get", function (key) {
        checkInstance(this, "get");
        if (!isObject2(key)) {
          return void 0;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return entry[1];
        }
        return void 0;
      });
      defineProperty(WeakMap2.prototype, "has", function (key) {
        checkInstance(this, "has");
        if (!isObject2(key)) {
          return false;
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          return true;
        }
        return false;
      });
      defineProperty(WeakMap2.prototype, "set", function (key, value) {
        checkInstance(this, "set");
        if (!isObject2(key)) {
          throw new TypeError("Invalid value used as weak map key");
        }
        var entry = key[this._id];
        if (entry && entry[0] === key) {
          entry[1] = value;
          return this;
        }
        defineProperty(key, this._id, [key, value]);
        return this;
      });
      function checkInstance(x, methodName) {
        if (!isObject2(x) || !hasOwnProperty.call(x, "_id")) {
          throw new TypeError(
            methodName + " method called on incompatible receiver " + typeof x
          );
        }
      }
      function genId(prefix) {
        return prefix + "_" + rand() + "." + rand();
      }
      function rand() {
        return Math.random().toString().substring(2);
      }
      defineProperty(WeakMap2, "_polyfill", true);
      return WeakMap2;
    })();
    function isObject2(x) {
      return Object(x) === x;
    }
  })(
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof self !== "undefined"
      ? self
      : typeof window !== "undefined"
      ? window
      : typeof commonjsGlobal !== "undefined"
      ? commonjsGlobal
      : commonjsGlobal
  );
  var npo_src = createCommonjsModule(function (module) {
    /*! Native Promise Only
        v0.8.1 (c) Kyle Simpson
        MIT License: http://getify.mit-license.org
    */
    (function UMD(name, context2, definition) {
      context2[name] = context2[name] || definition();
      if (module.exports) {
        module.exports = context2[name];
      }
    })(
      "Promise",
      typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal,
      function DEF() {
        var builtInProp,
          cycle,
          scheduling_queue,
          ToString = Object.prototype.toString,
          timer =
            typeof setImmediate != "undefined"
              ? function timer2(fn) {
                  return setImmediate(fn);
                }
              : setTimeout;
        try {
          Object.defineProperty({}, "x", {});
          builtInProp = function builtInProp2(obj, name, val, config) {
            return Object.defineProperty(obj, name, {
              value: val,
              writable: true,
              configurable: config !== false,
            });
          };
        } catch (err) {
          builtInProp = function builtInProp2(obj, name, val) {
            obj[name] = val;
            return obj;
          };
        }
        scheduling_queue = /* @__PURE__ */ (function Queue() {
          var first, last, item;
          function Item(fn, self2) {
            this.fn = fn;
            this.self = self2;
            this.next = void 0;
          }
          return {
            add: function add(fn, self2) {
              item = new Item(fn, self2);
              if (last) {
                last.next = item;
              } else {
                first = item;
              }
              last = item;
              item = void 0;
            },
            drain: function drain() {
              var f = first;
              first = last = cycle = void 0;
              while (f) {
                f.fn.call(f.self);
                f = f.next;
              }
            },
          };
        })();
        function schedule(fn, self2) {
          scheduling_queue.add(fn, self2);
          if (!cycle) {
            cycle = timer(scheduling_queue.drain);
          }
        }
        function isThenable(o) {
          var _then,
            o_type = typeof o;
          if (o != null && (o_type == "object" || o_type == "function")) {
            _then = o.then;
          }
          return typeof _then == "function" ? _then : false;
        }
        function notify() {
          for (var i = 0; i < this.chain.length; i++) {
            notifyIsolated(
              this,
              this.state === 1 ? this.chain[i].success : this.chain[i].failure,
              this.chain[i]
            );
          }
          this.chain.length = 0;
        }
        function notifyIsolated(self2, cb, chain) {
          var ret, _then;
          try {
            if (cb === false) {
              chain.reject(self2.msg);
            } else {
              if (cb === true) {
                ret = self2.msg;
              } else {
                ret = cb.call(void 0, self2.msg);
              }
              if (ret === chain.promise) {
                chain.reject(TypeError("Promise-chain cycle"));
              } else if ((_then = isThenable(ret))) {
                _then.call(ret, chain.resolve, chain.reject);
              } else {
                chain.resolve(ret);
              }
            }
          } catch (err) {
            chain.reject(err);
          }
        }
        function resolve(msg) {
          var _then,
            self2 = this;
          if (self2.triggered) {
            return;
          }
          self2.triggered = true;
          if (self2.def) {
            self2 = self2.def;
          }
          try {
            if ((_then = isThenable(msg))) {
              schedule(function () {
                var def_wrapper = new MakeDefWrapper(self2);
                try {
                  _then.call(
                    msg,
                    function $resolve$() {
                      resolve.apply(def_wrapper, arguments);
                    },
                    function $reject$() {
                      reject.apply(def_wrapper, arguments);
                    }
                  );
                } catch (err) {
                  reject.call(def_wrapper, err);
                }
              });
            } else {
              self2.msg = msg;
              self2.state = 1;
              if (self2.chain.length > 0) {
                schedule(notify, self2);
              }
            }
          } catch (err) {
            reject.call(new MakeDefWrapper(self2), err);
          }
        }
        function reject(msg) {
          var self2 = this;
          if (self2.triggered) {
            return;
          }
          self2.triggered = true;
          if (self2.def) {
            self2 = self2.def;
          }
          self2.msg = msg;
          self2.state = 2;
          if (self2.chain.length > 0) {
            schedule(notify, self2);
          }
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
          for (var idx = 0; idx < arr.length; idx++) {
            (function IIFE(idx2) {
              Constructor.resolve(arr[idx2]).then(function $resolver$(msg) {
                resolver(idx2, msg);
              }, rejecter);
            })(idx);
          }
        }
        function MakeDefWrapper(self2) {
          this.def = self2;
          this.triggered = false;
        }
        function MakeDef(self2) {
          this.promise = self2;
          this.state = 0;
          this.triggered = false;
          this.chain = [];
          this.msg = void 0;
        }
        function Promise2(executor) {
          if (typeof executor != "function") {
            throw TypeError("Not a function");
          }
          if (this.__NPO__ !== 0) {
            throw TypeError("Not a promise");
          }
          this.__NPO__ = 1;
          var def = new MakeDef(this);
          this["then"] = function then(success, failure) {
            var o = {
              success: typeof success == "function" ? success : true,
              failure: typeof failure == "function" ? failure : false,
            };
            o.promise = new this.constructor(function extractChain(
              resolve2,
              reject2
            ) {
              if (
                typeof resolve2 != "function" ||
                typeof reject2 != "function"
              ) {
                throw TypeError("Not a function");
              }
              o.resolve = resolve2;
              o.reject = reject2;
            });
            def.chain.push(o);
            if (def.state !== 0) {
              schedule(notify, def);
            }
            return o.promise;
          };
          this["catch"] = function $catch$(failure) {
            return this.then(void 0, failure);
          };
          try {
            executor.call(
              void 0,
              function publicResolve(msg) {
                resolve.call(def, msg);
              },
              function publicReject(msg) {
                reject.call(def, msg);
              }
            );
          } catch (err) {
            reject.call(def, err);
          }
        }
        var PromisePrototype = builtInProp(
          {},
          "constructor",
          Promise2,
          /*configurable=*/
          false
        );
        Promise2.prototype = PromisePrototype;
        builtInProp(
          PromisePrototype,
          "__NPO__",
          0,
          /*configurable=*/
          false
        );
        builtInProp(Promise2, "resolve", function Promise$resolve(msg) {
          var Constructor = this;
          if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
            return msg;
          }
          return new Constructor(function executor(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            resolve2(msg);
          });
        });
        builtInProp(Promise2, "reject", function Promise$reject(msg) {
          return new this(function executor(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            reject2(msg);
          });
        });
        builtInProp(Promise2, "all", function Promise$all(arr) {
          var Constructor = this;
          if (ToString.call(arr) != "[object Array]") {
            return Constructor.reject(TypeError("Not an array"));
          }
          if (arr.length === 0) {
            return Constructor.resolve([]);
          }
          return new Constructor(function executor(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            var len = arr.length,
              msgs = Array(len),
              count = 0;
            iteratePromises(
              Constructor,
              arr,
              function resolver(idx, msg) {
                msgs[idx] = msg;
                if (++count === len) {
                  resolve2(msgs);
                }
              },
              reject2
            );
          });
        });
        builtInProp(Promise2, "race", function Promise$race(arr) {
          var Constructor = this;
          if (ToString.call(arr) != "[object Array]") {
            return Constructor.reject(TypeError("Not an array"));
          }
          return new Constructor(function executor(resolve2, reject2) {
            if (typeof resolve2 != "function" || typeof reject2 != "function") {
              throw TypeError("Not a function");
            }
            iteratePromises(
              Constructor,
              arr,
              function resolver(idx, msg) {
                resolve2(msg);
              },
              reject2
            );
          });
        });
        return Promise2;
      }
    );
  });
  var callbackMap = /* @__PURE__ */ new WeakMap();
  function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) {
      playerCallbacks[name] = [];
    }
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
  }
  function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
  }
  function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) {
      return true;
    }
    if (!callback) {
      playerCallbacks[name] = [];
      callbackMap.set(player.element, playerCallbacks);
      return true;
    }
    var index2 = playerCallbacks[name].indexOf(callback);
    if (index2 !== -1) {
      playerCallbacks[name].splice(index2, 1);
    }
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
  }
  function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) {
      return false;
    }
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
  }
  function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
  }
  function parseMessageData(data) {
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.warn(error);
        return {};
      }
    }
    return data;
  }
  function postMessage(player, method, params) {
    if (
      !player.element.contentWindow ||
      !player.element.contentWindow.postMessage
    ) {
      return;
    }
    var message = {
      method,
    };
    if (params !== void 0) {
      message.value = params;
    }
    var ieVersion = parseFloat(
      navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1")
    );
    if (ieVersion >= 8 && ieVersion < 10) {
      message = JSON.stringify(message);
    }
    player.element.contentWindow.postMessage(message, player.origin);
  }
  function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
      if (data.event === "error") {
        var promises = getCallbacks(player, data.data.method);
        promises.forEach(function (promise) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          promise.reject(error);
          removeCallback(player, data.data.method, promise);
        });
      }
      callbacks = getCallbacks(player, "event:".concat(data.event));
      param = data.data;
    } else if (data.method) {
      var callback = shiftCallbacks(player, data.method);
      if (callback) {
        callbacks.push(callback);
        param = data.value;
      }
    }
    callbacks.forEach(function (callback2) {
      try {
        if (typeof callback2 === "function") {
          callback2.call(player, param);
          return;
        }
        callback2.resolve(param);
      } catch (e) {}
    });
  }
  var oEmbedParameters = [
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
  function getOEmbedParameters(element) {
    var defaults2 =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return oEmbedParameters.reduce(function (params, param) {
      var value = element.getAttribute("data-vimeo-".concat(param));
      if (value || value === "") {
        params[param] = value === "" ? 1 : value;
      }
      return params;
    }, defaults2);
  }
  function createEmbed(_ref, element) {
    var html2 = _ref.html;
    if (!element) {
      throw new TypeError("An element must be provided");
    }
    if (element.getAttribute("data-vimeo-initialized") !== null) {
      return element.querySelector("iframe");
    }
    var div = document.createElement("div");
    div.innerHTML = html2;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
  }
  function getOEmbedData(videoUrl) {
    var params =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function (resolve, reject) {
      if (!isVimeoUrl(videoUrl)) {
        throw new TypeError("“".concat(videoUrl, "” is not a vimeo.com url."));
      }
      var domain = getOembedDomain(videoUrl);
      var url = "https://"
        .concat(domain, "/api/oembed.json?url=")
        .concat(encodeURIComponent(videoUrl));
      for (var param in params) {
        if (params.hasOwnProperty(param)) {
          url += "&"
            .concat(param, "=")
            .concat(encodeURIComponent(params[param]));
        }
      }
      var xhr =
        "XDomainRequest" in window
          ? new XDomainRequest()
          : new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function () {
        if (xhr.status === 404) {
          reject(new Error("“".concat(videoUrl, "” was not found.")));
          return;
        }
        if (xhr.status === 403) {
          reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
          return;
        }
        try {
          var json = JSON.parse(xhr.responseText);
          if (json.domain_status_code === 403) {
            createEmbed(json, element);
            reject(new Error("“".concat(videoUrl, "” is not embeddable.")));
            return;
          }
          resolve(json);
        } catch (error) {
          reject(error);
        }
      };
      xhr.onerror = function () {
        var status = xhr.status ? " (".concat(xhr.status, ")") : "";
        reject(
          new Error(
            "There was an error fetching the embed code from Vimeo".concat(
              status,
              "."
            )
          )
        );
      };
      xhr.send();
    });
  }
  function initializeEmbeds() {
    var parent2 =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    var elements = [].slice.call(
      parent2.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")
    );
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error creating an embed: ".concat(error));
      }
    };
    elements.forEach(function (element) {
      try {
        if (element.getAttribute("data-vimeo-defer") !== null) {
          return;
        }
        var params = getOEmbedParameters(element);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element)
          .then(function (data) {
            return createEmbed(data, element);
          })
          .catch(handleError);
      } catch (error) {
        handleError(error);
      }
    });
  }
  function resizeEmbeds() {
    var parent2 =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoPlayerResizeEmbeds_) {
      return;
    }
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      if (!event2.data || event2.data.event !== "spacechange") {
        return;
      }
      var iframes = parent2.querySelectorAll("iframe");
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow !== event2.source) {
          continue;
        }
        var space = iframes[i].parentElement;
        space.style.paddingBottom = "".concat(event2.data.data[0].bottom, "px");
        break;
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initAppendVideoMetadata() {
    var parent2 =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoSeoMetadataAppended) {
      return;
    }
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      var data = parseMessageData(event2.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent2.querySelectorAll("iframe");
      for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var isValidMessageSource = iframe.contentWindow === event2.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player = new Player(iframe);
          player.callMethod("appendVideoMetadata", window.location.href);
        }
      }
    };
    window.addEventListener("message", onMessage);
  }
  function checkUrlTimeParam() {
    var parent2 =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (window.VimeoCheckedUrlTimeParam) {
      return;
    }
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError2(error) {
      if ("console" in window && console.error) {
        console.error("There was an error getting video Id: ".concat(error));
      }
    };
    var onMessage = function onMessage2(event2) {
      if (!isVimeoUrl(event2.origin)) {
        return;
      }
      var data = parseMessageData(event2.data);
      if (!data || data.event !== "ready") {
        return;
      }
      var iframes = parent2.querySelectorAll("iframe");
      var _loop = function _loop2() {
        var iframe = iframes[i];
        var isValidMessageSource = iframe.contentWindow === event2.source;
        if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
          var player = new Player(iframe);
          player
            .getVideoId()
            .then(function (videoId) {
              var matches = new RegExp(
                "[?&]vimeo_t_".concat(videoId, "=([^&#]*)")
              ).exec(window.location.href);
              if (matches && matches[1]) {
                var sec = decodeURI(matches[1]);
                player.setCurrentTime(sec);
              }
              return;
            })
            .catch(handleError);
        }
      };
      for (var i = 0; i < iframes.length; i++) {
        _loop();
      }
    };
    window.addEventListener("message", onMessage);
  }
  function initializeScreenfull() {
    var fn = (function () {
      var val;
      var fnMap = [
        [
          "requestFullscreen",
          "exitFullscreen",
          "fullscreenElement",
          "fullscreenEnabled",
          "fullscreenchange",
          "fullscreenerror",
        ],
        // New WebKit
        [
          "webkitRequestFullscreen",
          "webkitExitFullscreen",
          "webkitFullscreenElement",
          "webkitFullscreenEnabled",
          "webkitfullscreenchange",
          "webkitfullscreenerror",
        ],
        // Old WebKit
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
      ];
      var i = 0;
      var l = fnMap.length;
      var ret = {};
      for (; i < l; i++) {
        val = fnMap[i];
        if (val && val[1] in document) {
          for (i = 0; i < val.length; i++) {
            ret[fnMap[0][i]] = val[i];
          }
          return ret;
        }
      }
      return false;
    })();
    var eventNameMap = {
      fullscreenchange: fn.fullscreenchange,
      fullscreenerror: fn.fullscreenerror,
    };
    var screenfull2 = {
      request: function request(element) {
        return new Promise(function (resolve, reject) {
          var onFullScreenEntered = function onFullScreenEntered2() {
            screenfull2.off("fullscreenchange", onFullScreenEntered2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenEntered);
          element = element || document.documentElement;
          var returnPromise = element[fn.requestFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenEntered).catch(reject);
          }
        });
      },
      exit: function exit() {
        return new Promise(function (resolve, reject) {
          if (!screenfull2.isFullscreen) {
            resolve();
            return;
          }
          var onFullScreenExit = function onFullScreenExit2() {
            screenfull2.off("fullscreenchange", onFullScreenExit2);
            resolve();
          };
          screenfull2.on("fullscreenchange", onFullScreenExit);
          var returnPromise = document[fn.exitFullscreen]();
          if (returnPromise instanceof Promise) {
            returnPromise.then(onFullScreenExit).catch(reject);
          }
        });
      },
      on: function on2(event2, callback) {
        var eventName = eventNameMap[event2];
        if (eventName) {
          document.addEventListener(eventName, callback);
        }
      },
      off: function off2(event2, callback) {
        var eventName = eventNameMap[event2];
        if (eventName) {
          document.removeEventListener(eventName, callback);
        }
      },
    };
    Object.defineProperties(screenfull2, {
      isFullscreen: {
        get: function get() {
          return Boolean(document[fn.fullscreenElement]);
        },
      },
      element: {
        enumerable: true,
        get: function get() {
          return document[fn.fullscreenElement];
        },
      },
      isEnabled: {
        enumerable: true,
        get: function get() {
          return Boolean(document[fn.fullscreenEnabled]);
        },
      },
    });
    return screenfull2;
  }
  var defaultOptions = {
    role: "viewer",
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1,
  };
  var TimingSrcConnector = /* @__PURE__ */ (function (_EventTarget) {
    _inherits(TimingSrcConnector2, _EventTarget);
    var _super = _createSuper(TimingSrcConnector2);
    function TimingSrcConnector2(_player, timingObject) {
      var _this;
      var options =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var logger = arguments.length > 3 ? arguments[3] : void 0;
      _classCallCheck(this, TimingSrcConnector2);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized$1(_this), "logger", void 0);
      _defineProperty(_assertThisInitialized$1(_this), "speedAdjustment", 0);
      _defineProperty(
        _assertThisInitialized$1(_this),
        "adjustSpeed",
        /* @__PURE__ */ (function () {
          var _ref = _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(
              player,
              newAdjustment
            ) {
              var newPlaybackRate;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      if (!(_this.speedAdjustment === newAdjustment)) {
                        _context2.next = 2;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 2:
                      _context2.next = 4;
                      return player.getPlaybackRate();
                    case 4:
                      _context2.t0 = _context2.sent;
                      _context2.t1 = _this.speedAdjustment;
                      _context2.t2 = _context2.t0 - _context2.t1;
                      _context2.t3 = newAdjustment;
                      newPlaybackRate = _context2.t2 + _context2.t3;
                      _this.log("New playbackRate:  ".concat(newPlaybackRate));
                      _context2.next = 12;
                      return player.setPlaybackRate(newPlaybackRate);
                    case 12:
                      _this.speedAdjustment = newAdjustment;
                    case 13:
                    case "end":
                      return _context2.stop();
                  }
              }, _callee);
            })
          );
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        })()
      );
      _this.logger = logger;
      _this.init(
        timingObject,
        _player,
        _objectSpread2(_objectSpread2({}, defaultOptions), options)
      );
      return _this;
    }
    _createClass(TimingSrcConnector2, [
      {
        key: "disconnect",
        value: function disconnect() {
          this.dispatchEvent(new Event("disconnect"));
        },
        /**
         * @param {TimingObject} timingObject
         * @param {PlayerControls} player
         * @param {TimingSrcConnectorOptions} options
         * @return {Promise<void>}
         */
      },
      {
        key: "init",
        value: (function () {
          var _init = _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(
              timingObject,
              player,
              options
            ) {
              var _this2 = this;
              var playerUpdater, positionSync, timingObjectUpdater;
              return _regeneratorRuntime().wrap(
                function _callee2$(_context2) {
                  while (1)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        _context2.next = 2;
                        return this.waitForTOReadyState(timingObject, "open");
                      case 2:
                        if (!(options.role === "viewer")) {
                          _context2.next = 10;
                          break;
                        }
                        _context2.next = 5;
                        return this.updatePlayer(timingObject, player, options);
                      case 5:
                        playerUpdater = subscribe(
                          timingObject,
                          "change",
                          function () {
                            return _this2.updatePlayer(
                              timingObject,
                              player,
                              options
                            );
                          }
                        );
                        positionSync = this.maintainPlaybackPosition(
                          timingObject,
                          player,
                          options
                        );
                        this.addEventListener("disconnect", function () {
                          positionSync.cancel();
                          playerUpdater.cancel();
                        });
                        _context2.next = 14;
                        break;
                      case 10:
                        _context2.next = 12;
                        return this.updateTimingObject(timingObject, player);
                      case 12:
                        timingObjectUpdater = subscribe(
                          player,
                          ["seeked", "play", "pause", "ratechange"],
                          function () {
                            return _this2.updateTimingObject(
                              timingObject,
                              player
                            );
                          },
                          "on",
                          "off"
                        );
                        this.addEventListener("disconnect", function () {
                          return timingObjectUpdater.cancel();
                        });
                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                },
                _callee2,
                this
              );
            })
          );
          function init(_x3, _x4, _x5) {
            return _init.apply(this, arguments);
          }
          return init;
        })(),
        /**
         * Sets the TimingObject's state to reflect that of the player
         *
         * @param {TimingObject} timingObject
         * @param {PlayerControls} player
         * @return {Promise<void>}
         */
      },
      {
        key: "updateTimingObject",
        value: (function () {
          var _updateTimingObject = _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(
              timingObject,
              player
            ) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      _context3.t0 = timingObject;
                      _context3.next = 3;
                      return player.getCurrentTime();
                    case 3:
                      _context3.t1 = _context3.sent;
                      _context3.next = 6;
                      return player.getPaused();
                    case 6:
                      if (!_context3.sent) {
                        _context3.next = 10;
                        break;
                      }
                      _context3.t2 = 0;
                      _context3.next = 13;
                      break;
                    case 10:
                      _context3.next = 12;
                      return player.getPlaybackRate();
                    case 12:
                      _context3.t2 = _context3.sent;
                    case 13:
                      _context3.t3 = _context3.t2;
                      _context3.t4 = {
                        position: _context3.t1,
                        velocity: _context3.t3,
                      };
                      _context3.t0.update.call(_context3.t0, _context3.t4);
                    case 16:
                    case "end":
                      return _context3.stop();
                  }
              }, _callee3);
            })
          );
          function updateTimingObject(_x6, _x7) {
            return _updateTimingObject.apply(this, arguments);
          }
          return updateTimingObject;
        })(),
        /**
         * Sets the player's timing state to reflect that of the TimingObject
         *
         * @param {TimingObject} timingObject
         * @param {PlayerControls} player
         * @param {TimingSrcConnectorOptions} options
         * @return {Promise<void>}
         */
      },
      {
        key: "updatePlayer",
        value: (function () {
          var _updatePlayer = _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(
              timingObject,
              player,
              options
            ) {
              var _timingObject$query, position, velocity;
              return _regeneratorRuntime().wrap(
                function _callee5$(_context5) {
                  while (1)
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        (_timingObject$query = timingObject.query()),
                          (position = _timingObject$query.position),
                          (velocity = _timingObject$query.velocity);
                        if (typeof position === "number") {
                          player.setCurrentTime(position);
                        }
                        if (!(typeof velocity === "number")) {
                          _context5.next = 25;
                          break;
                        }
                        if (!(velocity === 0)) {
                          _context5.next = 11;
                          break;
                        }
                        _context5.next = 6;
                        return player.getPaused();
                      case 6:
                        _context5.t0 = _context5.sent;
                        if (!(_context5.t0 === false)) {
                          _context5.next = 9;
                          break;
                        }
                        player.pause();
                      case 9:
                        _context5.next = 25;
                        break;
                      case 11:
                        if (!(velocity > 0)) {
                          _context5.next = 25;
                          break;
                        }
                        _context5.next = 14;
                        return player.getPaused();
                      case 14:
                        _context5.t1 = _context5.sent;
                        if (!(_context5.t1 === true)) {
                          _context5.next = 19;
                          break;
                        }
                        _context5.next = 18;
                        return player.play().catch(
                          /* @__PURE__ */ (function () {
                            var _ref2 = _asyncToGenerator(
                              /* @__PURE__ */ _regeneratorRuntime().mark(
                                function _callee4(err) {
                                  return _regeneratorRuntime().wrap(
                                    function _callee4$(_context4) {
                                      while (1)
                                        switch (
                                          (_context4.prev = _context4.next)
                                        ) {
                                          case 0:
                                            if (
                                              !(
                                                err.name ===
                                                  "NotAllowedError" &&
                                                options.autoPlayMuted
                                              )
                                            ) {
                                              _context4.next = 5;
                                              break;
                                            }
                                            _context4.next = 3;
                                            return player.setMuted(true);
                                          case 3:
                                            _context4.next = 5;
                                            return player
                                              .play()
                                              .catch(function (err2) {
                                                return console.error(
                                                  "Couldn't play the video from TimingSrcConnector. Error:",
                                                  err2
                                                );
                                              });
                                          case 5:
                                          case "end":
                                            return _context4.stop();
                                        }
                                    },
                                    _callee4
                                  );
                                }
                              )
                            );
                            return function (_x11) {
                              return _ref2.apply(this, arguments);
                            };
                          })()
                        );
                      case 18:
                        this.updatePlayer(timingObject, player, options);
                      case 19:
                        _context5.next = 21;
                        return player.getPlaybackRate();
                      case 21:
                        _context5.t2 = _context5.sent;
                        _context5.t3 = velocity;
                        if (!(_context5.t2 !== _context5.t3)) {
                          _context5.next = 25;
                          break;
                        }
                        player.setPlaybackRate(velocity);
                      case 25:
                      case "end":
                        return _context5.stop();
                    }
                },
                _callee5,
                this
              );
            })
          );
          function updatePlayer(_x8, _x9, _x10) {
            return _updatePlayer.apply(this, arguments);
          }
          return updatePlayer;
        })(),
        /**
         * Since video players do not play with 100% time precision, we need to closely monitor
         * our player to be sure it remains in sync with the TimingObject.
         *
         * If out of sync, we use the current conditions and the options provided to determine
         * whether to re-sync via setting currentTime or adjusting the playbackRate
         *
         * @param {TimingObject} timingObject
         * @param {PlayerControls} player
         * @param {TimingSrcConnectorOptions} options
         * @return {{cancel: (function(): void)}}
         */
      },
      {
        key: "maintainPlaybackPosition",
        value: function maintainPlaybackPosition(
          timingObject,
          player,
          options
        ) {
          var _this3 = this;
          var allowedDrift = options.allowedDrift,
            maxAllowedDrift = options.maxAllowedDrift,
            minCheckInterval = options.minCheckInterval,
            maxRateAdjustment = options.maxRateAdjustment,
            maxTimeToCatchUp = options.maxTimeToCatchUp;
          var syncInterval =
            Math.min(
              maxTimeToCatchUp,
              Math.max(minCheckInterval, maxAllowedDrift)
            ) * 1e3;
          var check = /* @__PURE__ */ (function () {
            var _ref3 = _asyncToGenerator(
              /* @__PURE__ */ _regeneratorRuntime().mark(function _callee6() {
                var diff, diffAbs, min, max, adjustment;
                return _regeneratorRuntime().wrap(function _callee6$(
                  _context6
                ) {
                  while (1)
                    switch ((_context6.prev = _context6.next)) {
                      case 0:
                        _context6.t0 = timingObject.query().velocity === 0;
                        if (_context6.t0) {
                          _context6.next = 6;
                          break;
                        }
                        _context6.next = 4;
                        return player.getPaused();
                      case 4:
                        _context6.t1 = _context6.sent;
                        _context6.t0 = _context6.t1 === true;
                      case 6:
                        if (!_context6.t0) {
                          _context6.next = 8;
                          break;
                        }
                        return _context6.abrupt("return");
                      case 8:
                        _context6.t2 = timingObject.query().position;
                        _context6.next = 11;
                        return player.getCurrentTime();
                      case 11:
                        _context6.t3 = _context6.sent;
                        diff = _context6.t2 - _context6.t3;
                        diffAbs = Math.abs(diff);
                        _this3.log("Drift: ".concat(diff));
                        if (!(diffAbs > maxAllowedDrift)) {
                          _context6.next = 22;
                          break;
                        }
                        _context6.next = 18;
                        return _this3.adjustSpeed(player, 0);
                      case 18:
                        player.setCurrentTime(timingObject.query().position);
                        _this3.log("Resync by currentTime");
                        _context6.next = 29;
                        break;
                      case 22:
                        if (!(diffAbs > allowedDrift)) {
                          _context6.next = 29;
                          break;
                        }
                        min = diffAbs / maxTimeToCatchUp;
                        max = maxRateAdjustment;
                        adjustment = min < max ? (max - min) / 2 : max;
                        _context6.next = 28;
                        return _this3.adjustSpeed(
                          player,
                          adjustment * Math.sign(diff)
                        );
                      case 28:
                        _this3.log("Resync by playbackRate");
                      case 29:
                      case "end":
                        return _context6.stop();
                    }
                },
                _callee6);
              })
            );
            return function check2() {
              return _ref3.apply(this, arguments);
            };
          })();
          var interval = setInterval(function () {
            return check();
          }, syncInterval);
          return {
            cancel: function cancel() {
              return clearInterval(interval);
            },
          };
        },
        /**
         * @param {string} msg
         */
      },
      {
        key: "log",
        value: function log(msg) {
          var _this$logger;
          (_this$logger = this.logger) === null || _this$logger === void 0
            ? void 0
            : _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
        },
      },
      {
        key: "waitForTOReadyState",
        value:
          /**
           * @param {TimingObject} timingObject
           * @param {TConnectionState} state
           * @return {Promise<void>}
           */
          function waitForTOReadyState(timingObject, state) {
            return new Promise(function (resolve) {
              var check = function check2() {
                if (timingObject.readyState === state) {
                  resolve();
                } else {
                  timingObject.addEventListener("readystatechange", check2, {
                    once: true,
                  });
                }
              };
              check();
            });
          },
      },
    ]);
    return TimingSrcConnector2;
  })(/* @__PURE__ */ _wrapNativeSuper(EventTarget));
  var playerMap = /* @__PURE__ */ new WeakMap();
  var readyMap = /* @__PURE__ */ new WeakMap();
  var screenfull = {};
  var Player = /* @__PURE__ */ (function () {
    function Player2(element) {
      var _this = this;
      var options =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Player2);
      if (window.jQuery && element instanceof jQuery) {
        if (element.length > 1 && window.console && console.warn) {
          console.warn(
            "A jQuery object with multiple elements was passed, using the first element."
          );
        }
        element = element[0];
      }
      if (typeof document !== "undefined" && typeof element === "string") {
        element = document.getElementById(element);
      }
      if (!isDomElement(element)) {
        throw new TypeError(
          "You must pass either a valid element or a valid id."
        );
      }
      if (element.nodeName !== "IFRAME") {
        var iframe = element.querySelector("iframe");
        if (iframe) {
          element = iframe;
        }
      }
      if (
        element.nodeName === "IFRAME" &&
        !isVimeoUrl(element.getAttribute("src") || "")
      ) {
        throw new Error("The player element passed isn’t a Vimeo embed.");
      }
      if (playerMap.has(element)) {
        return playerMap.get(element);
      }
      this._window = element.ownerDocument.defaultView;
      this.element = element;
      this.origin = "*";
      var readyPromise = new npo_src(function (resolve, reject) {
        _this._onMessage = function (event2) {
          if (
            !isVimeoUrl(event2.origin) ||
            _this.element.contentWindow !== event2.source
          ) {
            return;
          }
          if (_this.origin === "*") {
            _this.origin = event2.origin;
          }
          var data = parseMessageData(event2.data);
          var isError = data && data.event === "error";
          var isReadyError =
            isError && data.data && data.data.method === "ready";
          if (isReadyError) {
            var error = new Error(data.data.message);
            error.name = data.data.name;
            reject(error);
            return;
          }
          var isReadyEvent = data && data.event === "ready";
          var isPingResponse = data && data.method === "ping";
          if (isReadyEvent || isPingResponse) {
            _this.element.setAttribute("data-ready", "true");
            resolve();
            return;
          }
          processData(_this, data);
        };
        _this._window.addEventListener("message", _this._onMessage);
        if (_this.element.nodeName !== "IFRAME") {
          var params = getOEmbedParameters(element, options);
          var url = getVimeoUrl(params);
          getOEmbedData(url, params, element)
            .then(function (data) {
              var iframe2 = createEmbed(data, element);
              _this.element = iframe2;
              _this._originalElement = element;
              swapCallbacks(element, iframe2);
              playerMap.set(_this.element, _this);
              return data;
            })
            .catch(reject);
        }
      });
      readyMap.set(this, readyPromise);
      playerMap.set(this.element, this);
      if (this.element.nodeName === "IFRAME") {
        postMessage(this, "ping");
      }
      if (screenfull.isEnabled) {
        var exitFullscreen = function exitFullscreen2() {
          return screenfull.exit();
        };
        this.fullscreenchangeHandler = function () {
          if (screenfull.isFullscreen) {
            storeCallback(_this, "event:exitFullscreen", exitFullscreen);
          } else {
            removeCallback(_this, "event:exitFullscreen", exitFullscreen);
          }
          _this.ready().then(function () {
            postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
          });
        };
        screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
      }
      return this;
    }
    _createClass(Player2, [
      {
        key: "callMethod",
        value: function callMethod(name) {
          var _this2 = this;
          var args =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return new npo_src(function (resolve, reject) {
            return _this2
              .ready()
              .then(function () {
                storeCallback(_this2, name, {
                  resolve,
                  reject,
                });
                postMessage(_this2, name, args);
              })
              .catch(reject);
          });
        },
        /**
         * Get a promise for the value of a player property.
         *
         * @param {string} name The property name
         * @return {Promise}
         */
      },
      {
        key: "get",
        value: function get(name) {
          var _this3 = this;
          return new npo_src(function (resolve, reject) {
            name = getMethodName(name, "get");
            return _this3
              .ready()
              .then(function () {
                storeCallback(_this3, name, {
                  resolve,
                  reject,
                });
                postMessage(_this3, name);
              })
              .catch(reject);
          });
        },
        /**
         * Get a promise for setting the value of a player property.
         *
         * @param {string} name The API method to call.
         * @param {mixed} value The value to set.
         * @return {Promise}
         */
      },
      {
        key: "set",
        value: function set(name, value) {
          var _this4 = this;
          return new npo_src(function (resolve, reject) {
            name = getMethodName(name, "set");
            if (value === void 0 || value === null) {
              throw new TypeError("There must be a value to set.");
            }
            return _this4
              .ready()
              .then(function () {
                storeCallback(_this4, name, {
                  resolve,
                  reject,
                });
                postMessage(_this4, name, value);
              })
              .catch(reject);
          });
        },
        /**
         * Add an event listener for the specified event. Will call the
         * callback with a single parameter, `data`, that contains the data for
         * that event.
         *
         * @param {string} eventName The name of the event.
         * @param {function(*)} callback The function to call when the event fires.
         * @return {void}
         */
      },
      {
        key: "on",
        value: function on2(eventName, callback) {
          if (!eventName) {
            throw new TypeError("You must pass an event name.");
          }
          if (!callback) {
            throw new TypeError("You must pass a callback function.");
          }
          if (typeof callback !== "function") {
            throw new TypeError("The callback must be a function.");
          }
          var callbacks = getCallbacks(this, "event:".concat(eventName));
          if (callbacks.length === 0) {
            this.callMethod("addEventListener", eventName).catch(
              function () {}
            );
          }
          storeCallback(this, "event:".concat(eventName), callback);
        },
        /**
         * Remove an event listener for the specified event. Will remove all
         * listeners for that event if a `callback` isn’t passed, or only that
         * specific callback if it is passed.
         *
         * @param {string} eventName The name of the event.
         * @param {function} [callback] The specific callback to remove.
         * @return {void}
         */
      },
      {
        key: "off",
        value: function off2(eventName, callback) {
          if (!eventName) {
            throw new TypeError("You must pass an event name.");
          }
          if (callback && typeof callback !== "function") {
            throw new TypeError("The callback must be a function.");
          }
          var lastCallback = removeCallback(
            this,
            "event:".concat(eventName),
            callback
          );
          if (lastCallback) {
            this.callMethod("removeEventListener", eventName).catch(function (
              e
            ) {});
          }
        },
        /**
         * A promise to load a new video.
         *
         * @promise LoadVideoPromise
         * @fulfill {number} The video with this id or url successfully loaded.
         * @reject {TypeError} The id was not a number.
         */
        /**
         * Load a new video into this embed. The promise will be resolved if
         * the video is successfully loaded, or it will be rejected if it could
         * not be loaded.
         *
         * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
         * @return {LoadVideoPromise}
         */
      },
      {
        key: "loadVideo",
        value: function loadVideo(options) {
          return this.callMethod("loadVideo", options);
        },
        /**
         * A promise to perform an action when the Player is ready.
         *
         * @todo document errors
         * @promise LoadVideoPromise
         * @fulfill {void}
         */
        /**
         * Trigger a function when the player iframe has initialized. You do not
         * need to wait for `ready` to trigger to begin adding event listeners
         * or calling other methods.
         *
         * @return {ReadyPromise}
         */
      },
      {
        key: "ready",
        value: function ready() {
          var readyPromise =
            readyMap.get(this) ||
            new npo_src(function (resolve, reject) {
              reject(new Error("Unknown player. Probably unloaded."));
            });
          return npo_src.resolve(readyPromise);
        },
        /**
         * A promise to add a cue point to the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point to use for removeCuePoint.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Add a cue point to the player.
         *
         * @param {number} time The time for the cue point.
         * @param {object} [data] Arbitrary data to be returned with the cue point.
         * @return {AddCuePointPromise}
         */
      },
      {
        key: "addCuePoint",
        value: function addCuePoint(time) {
          var data =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return this.callMethod("addCuePoint", {
            time,
            data,
          });
        },
        /**
         * A promise to remove a cue point from the player.
         *
         * @promise AddCuePointPromise
         * @fulfill {string} The id of the cue point that was removed.
         * @reject {InvalidCuePoint} The cue point with the specified id was not
         *         found.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Remove a cue point from the video.
         *
         * @param {string} id The id of the cue point to remove.
         * @return {RemoveCuePointPromise}
         */
      },
      {
        key: "removeCuePoint",
        value: function removeCuePoint(id) {
          return this.callMethod("removeCuePoint", id);
        },
        /**
         * A representation of a text track on a video.
         *
         * @typedef {Object} VimeoTextTrack
         * @property {string} language The ISO language code.
         * @property {string} kind The kind of track it is (captions or subtitles).
         * @property {string} label The human‐readable label for the track.
         */
        /**
         * A promise to enable a text track.
         *
         * @promise EnableTextTrackPromise
         * @fulfill {VimeoTextTrack} The text track that was enabled.
         * @reject {InvalidTrackLanguageError} No track was available with the
         *         specified language.
         * @reject {InvalidTrackError} No track was available with the specified
         *         language and kind.
         */
        /**
         * Enable the text track with the specified language, and optionally the
         * specified kind (captions or subtitles).
         *
         * When set via the API, the track language will not change the viewer’s
         * stored preference.
         *
         * @param {string} language The two‐letter language code.
         * @param {string} [kind] The kind of track to enable (captions or subtitles).
         * @return {EnableTextTrackPromise}
         */
      },
      {
        key: "enableTextTrack",
        value: function enableTextTrack(language, kind) {
          if (!language) {
            throw new TypeError("You must pass a language.");
          }
          return this.callMethod("enableTextTrack", {
            language,
            kind,
          });
        },
        /**
         * A promise to disable the active text track.
         *
         * @promise DisableTextTrackPromise
         * @fulfill {void} The track was disabled.
         */
        /**
         * Disable the currently-active text track.
         *
         * @return {DisableTextTrackPromise}
         */
      },
      {
        key: "disableTextTrack",
        value: function disableTextTrack() {
          return this.callMethod("disableTextTrack");
        },
        /**
         * A promise to pause the video.
         *
         * @promise PausePromise
         * @fulfill {void} The video was paused.
         */
        /**
         * Pause the video if it’s playing.
         *
         * @return {PausePromise}
         */
      },
      {
        key: "pause",
        value: function pause() {
          return this.callMethod("pause");
        },
        /**
         * A promise to play the video.
         *
         * @promise PlayPromise
         * @fulfill {void} The video was played.
         */
        /**
         * Play the video if it’s paused. **Note:** on iOS and some other
         * mobile devices, you cannot programmatically trigger play. Once the
         * viewer has tapped on the play button in the player, however, you
         * will be able to use this function.
         *
         * @return {PlayPromise}
         */
      },
      {
        key: "play",
        value: function play() {
          return this.callMethod("play");
        },
        /**
         * Request that the player enters fullscreen.
         * @return {Promise}
         */
      },
      {
        key: "requestFullscreen",
        value: function requestFullscreen() {
          if (screenfull.isEnabled) {
            return screenfull.request(this.element);
          }
          return this.callMethod("requestFullscreen");
        },
        /**
         * Request that the player exits fullscreen.
         * @return {Promise}
         */
      },
      {
        key: "exitFullscreen",
        value: function exitFullscreen() {
          if (screenfull.isEnabled) {
            return screenfull.exit();
          }
          return this.callMethod("exitFullscreen");
        },
        /**
         * Returns true if the player is currently fullscreen.
         * @return {Promise}
         */
      },
      {
        key: "getFullscreen",
        value: function getFullscreen() {
          if (screenfull.isEnabled) {
            return npo_src.resolve(screenfull.isFullscreen);
          }
          return this.get("fullscreen");
        },
        /**
         * Request that the player enters picture-in-picture.
         * @return {Promise}
         */
      },
      {
        key: "requestPictureInPicture",
        value: function requestPictureInPicture() {
          return this.callMethod("requestPictureInPicture");
        },
        /**
         * Request that the player exits picture-in-picture.
         * @return {Promise}
         */
      },
      {
        key: "exitPictureInPicture",
        value: function exitPictureInPicture() {
          return this.callMethod("exitPictureInPicture");
        },
        /**
         * Returns true if the player is currently picture-in-picture.
         * @return {Promise}
         */
      },
      {
        key: "getPictureInPicture",
        value: function getPictureInPicture() {
          return this.get("pictureInPicture");
        },
        /**
         * A promise to prompt the viewer to initiate remote playback.
         *
         * @promise RemotePlaybackPromptPromise
         * @fulfill {void}
         * @reject {NotFoundError} No remote playback device is available.
         */
        /**
         * Request to prompt the user to initiate remote playback.
         *
         * @return {RemotePlaybackPromptPromise}
         */
      },
      {
        key: "remotePlaybackPrompt",
        value: function remotePlaybackPrompt() {
          return this.callMethod("remotePlaybackPrompt");
        },
        /**
         * A promise to unload the video.
         *
         * @promise UnloadPromise
         * @fulfill {void} The video was unloaded.
         */
        /**
         * Return the player to its initial state.
         *
         * @return {UnloadPromise}
         */
      },
      {
        key: "unload",
        value: function unload() {
          return this.callMethod("unload");
        },
        /**
         * Cleanup the player and remove it from the DOM
         *
         * It won't be usable and a new one should be constructed
         *  in order to do any operations.
         *
         * @return {Promise}
         */
      },
      {
        key: "destroy",
        value: function destroy() {
          var _this5 = this;
          return new npo_src(function (resolve) {
            readyMap.delete(_this5);
            playerMap.delete(_this5.element);
            if (_this5._originalElement) {
              playerMap.delete(_this5._originalElement);
              _this5._originalElement.removeAttribute("data-vimeo-initialized");
            }
            if (
              _this5.element &&
              _this5.element.nodeName === "IFRAME" &&
              _this5.element.parentNode
            ) {
              if (
                _this5.element.parentNode.parentNode &&
                _this5._originalElement &&
                _this5._originalElement !== _this5.element.parentNode
              ) {
                _this5.element.parentNode.parentNode.removeChild(
                  _this5.element.parentNode
                );
              } else {
                _this5.element.parentNode.removeChild(_this5.element);
              }
            }
            if (
              _this5.element &&
              _this5.element.nodeName === "DIV" &&
              _this5.element.parentNode
            ) {
              _this5.element.removeAttribute("data-vimeo-initialized");
              var iframe = _this5.element.querySelector("iframe");
              if (iframe && iframe.parentNode) {
                if (
                  iframe.parentNode.parentNode &&
                  _this5._originalElement &&
                  _this5._originalElement !== iframe.parentNode
                ) {
                  iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                } else {
                  iframe.parentNode.removeChild(iframe);
                }
              }
            }
            _this5._window.removeEventListener("message", _this5._onMessage);
            if (screenfull.isEnabled) {
              screenfull.off(
                "fullscreenchange",
                _this5.fullscreenchangeHandler
              );
            }
            resolve();
          });
        },
        /**
         * A promise to get the autopause behavior of the video.
         *
         * @promise GetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */
        /**
         * Get the autopause behavior for this player.
         *
         * @return {GetAutopausePromise}
         */
      },
      {
        key: "getAutopause",
        value: function getAutopause() {
          return this.get("autopause");
        },
        /**
         * A promise to set the autopause behavior of the video.
         *
         * @promise SetAutopausePromise
         * @fulfill {boolean} Whether autopause is turned on or off.
         * @reject {UnsupportedError} Autopause is not supported with the current
         *         player or browser.
         */
        /**
         * Enable or disable the autopause behavior of this player.
         *
         * By default, when another video is played in the same browser, this
         * player will automatically pause. Unless you have a specific reason
         * for doing so, we recommend that you leave autopause set to the
         * default (`true`).
         *
         * @param {boolean} autopause
         * @return {SetAutopausePromise}
         */
      },
      {
        key: "setAutopause",
        value: function setAutopause(autopause) {
          return this.set("autopause", autopause);
        },
        /**
         * A promise to get the buffered property of the video.
         *
         * @promise GetBufferedPromise
         * @fulfill {Array} Buffered Timeranges converted to an Array.
         */
        /**
         * Get the buffered property of the video.
         *
         * @return {GetBufferedPromise}
         */
      },
      {
        key: "getBuffered",
        value: function getBuffered() {
          return this.get("buffered");
        },
        /**
         * @typedef {Object} CameraProperties
         * @prop {number} props.yaw - Number between 0 and 360.
         * @prop {number} props.pitch - Number between -90 and 90.
         * @prop {number} props.roll - Number between -180 and 180.
         * @prop {number} props.fov - The field of view in degrees.
         */
        /**
         * A promise to get the camera properties of the player.
         *
         * @promise GetCameraPromise
         * @fulfill {CameraProperties} The camera properties.
         */
        /**
         * For 360° videos get the camera properties for this player.
         *
         * @return {GetCameraPromise}
         */
      },
      {
        key: "getCameraProps",
        value: function getCameraProps() {
          return this.get("cameraProps");
        },
        /**
         * A promise to set the camera properties of the player.
         *
         * @promise SetCameraPromise
         * @fulfill {Object} The camera was successfully set.
         * @reject {RangeError} The range was out of bounds.
         */
        /**
         * For 360° videos set the camera properties for this player.
         *
         * @param {CameraProperties} camera The camera properties
         * @return {SetCameraPromise}
         */
      },
      {
        key: "setCameraProps",
        value: function setCameraProps(camera) {
          return this.set("cameraProps", camera);
        },
        /**
         * A representation of a chapter.
         *
         * @typedef {Object} VimeoChapter
         * @property {number} startTime The start time of the chapter.
         * @property {object} title The title of the chapter.
         * @property {number} index The place in the order of Chapters. Starts at 1.
         */
        /**
         * A promise to get chapters for the video.
         *
         * @promise GetChaptersPromise
         * @fulfill {VimeoChapter[]} The chapters for the video.
         */
        /**
         * Get an array of all the chapters for the video.
         *
         * @return {GetChaptersPromise}
         */
      },
      {
        key: "getChapters",
        value: function getChapters() {
          return this.get("chapters");
        },
        /**
         * A promise to get the currently active chapter.
         *
         * @promise GetCurrentChaptersPromise
         * @fulfill {VimeoChapter|undefined} The current chapter for the video.
         */
        /**
         * Get the currently active chapter for the video.
         *
         * @return {GetCurrentChaptersPromise}
         */
      },
      {
        key: "getCurrentChapter",
        value: function getCurrentChapter() {
          return this.get("currentChapter");
        },
        /**
         * A promise to get the accent color of the player.
         *
         * @promise GetColorPromise
         * @fulfill {string} The hex color of the player.
         */
        /**
         * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
         *
         * @return {GetColorPromise}
         */
      },
      {
        key: "getColor",
        value: function getColor() {
          return this.get("color");
        },
        /**
         * A promise to get all colors for the player in an array.
         *
         * @promise GetColorsPromise
         * @fulfill {string[]} The hex colors of the player.
         */
        /**
         * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
         *
         * @return {GetColorPromise}
         */
      },
      {
        key: "getColors",
        value: function getColors() {
          return npo_src.all([
            this.get("colorOne"),
            this.get("colorTwo"),
            this.get("colorThree"),
            this.get("colorFour"),
          ]);
        },
        /**
         * A promise to set the accent color of the player.
         *
         * @promise SetColorPromise
         * @fulfill {string} The color was successfully set.
         * @reject {TypeError} The string was not a valid hex or rgb color.
         * @reject {ContrastError} The color was set, but the contrast is
         *         outside of the acceptable range.
         * @reject {EmbedSettingsError} The owner of the player has chosen to
         *         use a specific color.
         */
        /**
         * Set the accent color of this player to a hex or rgb string. Setting the
         * color may fail if the owner of the video has set their embed
         * preferences to force a specific color.
         * Note this is deprecated in place of `setColorTwo`.
         *
         * @param {string} color The hex or rgb color string to set.
         * @return {SetColorPromise}
         */
      },
      {
        key: "setColor",
        value: function setColor(color) {
          return this.set("color", color);
        },
        /**
         * A promise to set all colors for the player.
         *
         * @promise SetColorsPromise
         * @fulfill {string[]} The colors were successfully set.
         * @reject {TypeError} The string was not a valid hex or rgb color.
         * @reject {ContrastError} The color was set, but the contrast is
         *         outside of the acceptable range.
         * @reject {EmbedSettingsError} The owner of the player has chosen to
         *         use a specific color.
         */
        /**
         * Set the colors of this player to a hex or rgb string. Setting the
         * color may fail if the owner of the video has set their embed
         * preferences to force a specific color.
         * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
         * If a color should not be set, the index in the array can be left as null.
         *
         * @param {string[]} colors Array of the hex or rgb color strings to set.
         * @return {SetColorsPromise}
         */
      },
      {
        key: "setColors",
        value: function setColors(colors) {
          if (!Array.isArray(colors)) {
            return new npo_src(function (resolve, reject) {
              return reject(new TypeError("Argument must be an array."));
            });
          }
          var nullPromise = new npo_src(function (resolve) {
            return resolve(null);
          });
          var colorPromises = [
            colors[0] ? this.set("colorOne", colors[0]) : nullPromise,
            colors[1] ? this.set("colorTwo", colors[1]) : nullPromise,
            colors[2] ? this.set("colorThree", colors[2]) : nullPromise,
            colors[3] ? this.set("colorFour", colors[3]) : nullPromise,
          ];
          return npo_src.all(colorPromises);
        },
        /**
         * A representation of a cue point.
         *
         * @typedef {Object} VimeoCuePoint
         * @property {number} time The time of the cue point.
         * @property {object} data The data passed when adding the cue point.
         * @property {string} id The unique id for use with removeCuePoint.
         */
        /**
         * A promise to get the cue points of a video.
         *
         * @promise GetCuePointsPromise
         * @fulfill {VimeoCuePoint[]} The cue points added to the video.
         * @reject {UnsupportedError} Cue points are not supported with the current
         *         player or browser.
         */
        /**
         * Get an array of the cue points added to the video.
         *
         * @return {GetCuePointsPromise}
         */
      },
      {
        key: "getCuePoints",
        value: function getCuePoints() {
          return this.get("cuePoints");
        },
        /**
         * A promise to get the current time of the video.
         *
         * @promise GetCurrentTimePromise
         * @fulfill {number} The current time in seconds.
         */
        /**
         * Get the current playback position in seconds.
         *
         * @return {GetCurrentTimePromise}
         */
      },
      {
        key: "getCurrentTime",
        value: function getCurrentTime() {
          return this.get("currentTime");
        },
        /**
         * A promise to set the current time of the video.
         *
         * @promise SetCurrentTimePromise
         * @fulfill {number} The actual current time that was set.
         * @reject {RangeError} the time was less than 0 or greater than the
         *         video’s duration.
         */
        /**
         * Set the current playback position in seconds. If the player was
         * paused, it will remain paused. Likewise, if the player was playing,
         * it will resume playing once the video has buffered.
         *
         * You can provide an accurate time and the player will attempt to seek
         * to as close to that time as possible. The exact time will be the
         * fulfilled value of the promise.
         *
         * @param {number} currentTime
         * @return {SetCurrentTimePromise}
         */
      },
      {
        key: "setCurrentTime",
        value: function setCurrentTime(currentTime) {
          return this.set("currentTime", currentTime);
        },
        /**
         * A promise to get the duration of the video.
         *
         * @promise GetDurationPromise
         * @fulfill {number} The duration in seconds.
         */
        /**
         * Get the duration of the video in seconds. It will be rounded to the
         * nearest second before playback begins, and to the nearest thousandth
         * of a second after playback begins.
         *
         * @return {GetDurationPromise}
         */
      },
      {
        key: "getDuration",
        value: function getDuration() {
          return this.get("duration");
        },
        /**
         * A promise to get the ended state of the video.
         *
         * @promise GetEndedPromise
         * @fulfill {boolean} Whether or not the video has ended.
         */
        /**
         * Get the ended state of the video. The video has ended if
         * `currentTime === duration`.
         *
         * @return {GetEndedPromise}
         */
      },
      {
        key: "getEnded",
        value: function getEnded() {
          return this.get("ended");
        },
        /**
         * A promise to get the loop state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the player is set to loop.
         */
        /**
         * Get the loop state of the player.
         *
         * @return {GetLoopPromise}
         */
      },
      {
        key: "getLoop",
        value: function getLoop() {
          return this.get("loop");
        },
        /**
         * A promise to set the loop state of the player.
         *
         * @promise SetLoopPromise
         * @fulfill {boolean} The loop state that was set.
         */
        /**
         * Set the loop state of the player. When set to `true`, the player
         * will start over immediately once playback ends.
         *
         * @param {boolean} loop
         * @return {SetLoopPromise}
         */
      },
      {
        key: "setLoop",
        value: function setLoop(loop2) {
          return this.set("loop", loop2);
        },
        /**
         * A promise to set the muted state of the player.
         *
         * @promise SetMutedPromise
         * @fulfill {boolean} The muted state that was set.
         */
        /**
         * Set the muted state of the player. When set to `true`, the player
         * volume will be muted.
         *
         * @param {boolean} muted
         * @return {SetMutedPromise}
         */
      },
      {
        key: "setMuted",
        value: function setMuted(muted) {
          return this.set("muted", muted);
        },
        /**
         * A promise to get the muted state of the player.
         *
         * @promise GetMutedPromise
         * @fulfill {boolean} Whether or not the player is muted.
         */
        /**
         * Get the muted state of the player.
         *
         * @return {GetMutedPromise}
         */
      },
      {
        key: "getMuted",
        value: function getMuted() {
          return this.get("muted");
        },
        /**
         * A promise to get the paused state of the player.
         *
         * @promise GetLoopPromise
         * @fulfill {boolean} Whether or not the video is paused.
         */
        /**
         * Get the paused state of the player.
         *
         * @return {GetLoopPromise}
         */
      },
      {
        key: "getPaused",
        value: function getPaused() {
          return this.get("paused");
        },
        /**
         * A promise to get the playback rate of the player.
         *
         * @promise GetPlaybackRatePromise
         * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
         */
        /**
         * Get the playback rate of the player on a scale from `0` to `2`.
         *
         * @return {GetPlaybackRatePromise}
         */
      },
      {
        key: "getPlaybackRate",
        value: function getPlaybackRate() {
          return this.get("playbackRate");
        },
        /**
         * A promise to set the playbackrate of the player.
         *
         * @promise SetPlaybackRatePromise
         * @fulfill {number} The playback rate was set.
         * @reject {RangeError} The playback rate was less than 0 or greater than 2.
         */
        /**
         * Set the playback rate of the player on a scale from `0` to `2`. When set
         * via the API, the playback rate will not be synchronized to other
         * players or stored as the viewer's preference.
         *
         * @param {number} playbackRate
         * @return {SetPlaybackRatePromise}
         */
      },
      {
        key: "setPlaybackRate",
        value: function setPlaybackRate(playbackRate) {
          return this.set("playbackRate", playbackRate);
        },
        /**
         * A promise to get the played property of the video.
         *
         * @promise GetPlayedPromise
         * @fulfill {Array} Played Timeranges converted to an Array.
         */
        /**
         * Get the played property of the video.
         *
         * @return {GetPlayedPromise}
         */
      },
      {
        key: "getPlayed",
        value: function getPlayed() {
          return this.get("played");
        },
        /**
         * A promise to get the qualities available of the current video.
         *
         * @promise GetQualitiesPromise
         * @fulfill {Array} The qualities of the video.
         */
        /**
         * Get the qualities of the current video.
         *
         * @return {GetQualitiesPromise}
         */
      },
      {
        key: "getQualities",
        value: function getQualities() {
          return this.get("qualities");
        },
        /**
         * A promise to get the current set quality of the video.
         *
         * @promise GetQualityPromise
         * @fulfill {string} The current set quality.
         */
        /**
         * Get the current set quality of the video.
         *
         * @return {GetQualityPromise}
         */
      },
      {
        key: "getQuality",
        value: function getQuality() {
          return this.get("quality");
        },
        /**
         * A promise to set the video quality.
         *
         * @promise SetQualityPromise
         * @fulfill {number} The quality was set.
         * @reject {RangeError} The quality is not available.
         */
        /**
         * Set a video quality.
         *
         * @param {string} quality
         * @return {SetQualityPromise}
         */
      },
      {
        key: "setQuality",
        value: function setQuality(quality) {
          return this.set("quality", quality);
        },
        /**
         * A promise to get the remote playback availability.
         *
         * @promise RemotePlaybackAvailabilityPromise
         * @fulfill {boolean} Whether remote playback is available.
         */
        /**
         * Get the availability of remote playback.
         *
         * @return {RemotePlaybackAvailabilityPromise}
         */
      },
      {
        key: "getRemotePlaybackAvailability",
        value: function getRemotePlaybackAvailability() {
          return this.get("remotePlaybackAvailability");
        },
        /**
         * A promise to get the current remote playback state.
         *
         * @promise RemotePlaybackStatePromise
         * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
         */
        /**
         * Get the current remote playback state.
         *
         * @return {RemotePlaybackStatePromise}
         */
      },
      {
        key: "getRemotePlaybackState",
        value: function getRemotePlaybackState() {
          return this.get("remotePlaybackState");
        },
        /**
         * A promise to get the seekable property of the video.
         *
         * @promise GetSeekablePromise
         * @fulfill {Array} Seekable Timeranges converted to an Array.
         */
        /**
         * Get the seekable property of the video.
         *
         * @return {GetSeekablePromise}
         */
      },
      {
        key: "getSeekable",
        value: function getSeekable() {
          return this.get("seekable");
        },
        /**
         * A promise to get the seeking property of the player.
         *
         * @promise GetSeekingPromise
         * @fulfill {boolean} Whether or not the player is currently seeking.
         */
        /**
         * Get if the player is currently seeking.
         *
         * @return {GetSeekingPromise}
         */
      },
      {
        key: "getSeeking",
        value: function getSeeking() {
          return this.get("seeking");
        },
        /**
         * A promise to get the text tracks of a video.
         *
         * @promise GetTextTracksPromise
         * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
         */
        /**
         * Get an array of the text tracks that exist for the video.
         *
         * @return {GetTextTracksPromise}
         */
      },
      {
        key: "getTextTracks",
        value: function getTextTracks() {
          return this.get("textTracks");
        },
        /**
         * A promise to get the embed code for the video.
         *
         * @promise GetVideoEmbedCodePromise
         * @fulfill {string} The `<iframe>` embed code for the video.
         */
        /**
         * Get the `<iframe>` embed code for the video.
         *
         * @return {GetVideoEmbedCodePromise}
         */
      },
      {
        key: "getVideoEmbedCode",
        value: function getVideoEmbedCode() {
          return this.get("videoEmbedCode");
        },
        /**
         * A promise to get the id of the video.
         *
         * @promise GetVideoIdPromise
         * @fulfill {number} The id of the video.
         */
        /**
         * Get the id of the video.
         *
         * @return {GetVideoIdPromise}
         */
      },
      {
        key: "getVideoId",
        value: function getVideoId() {
          return this.get("videoId");
        },
        /**
         * A promise to get the title of the video.
         *
         * @promise GetVideoTitlePromise
         * @fulfill {number} The title of the video.
         */
        /**
         * Get the title of the video.
         *
         * @return {GetVideoTitlePromise}
         */
      },
      {
        key: "getVideoTitle",
        value: function getVideoTitle() {
          return this.get("videoTitle");
        },
        /**
         * A promise to get the native width of the video.
         *
         * @promise GetVideoWidthPromise
         * @fulfill {number} The native width of the video.
         */
        /**
         * Get the native width of the currently‐playing video. The width of
         * the highest‐resolution available will be used before playback begins.
         *
         * @return {GetVideoWidthPromise}
         */
      },
      {
        key: "getVideoWidth",
        value: function getVideoWidth() {
          return this.get("videoWidth");
        },
        /**
         * A promise to get the native height of the video.
         *
         * @promise GetVideoHeightPromise
         * @fulfill {number} The native height of the video.
         */
        /**
         * Get the native height of the currently‐playing video. The height of
         * the highest‐resolution available will be used before playback begins.
         *
         * @return {GetVideoHeightPromise}
         */
      },
      {
        key: "getVideoHeight",
        value: function getVideoHeight() {
          return this.get("videoHeight");
        },
        /**
         * A promise to get the vimeo.com url for the video.
         *
         * @promise GetVideoUrlPromise
         * @fulfill {number} The vimeo.com url for the video.
         * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
         */
        /**
         * Get the vimeo.com url for the video.
         *
         * @return {GetVideoUrlPromise}
         */
      },
      {
        key: "getVideoUrl",
        value: function getVideoUrl() {
          return this.get("videoUrl");
        },
        /**
         * A promise to get the volume level of the player.
         *
         * @promise GetVolumePromise
         * @fulfill {number} The volume level of the player on a scale from 0 to 1.
         */
        /**
         * Get the current volume level of the player on a scale from `0` to `1`.
         *
         * Most mobile devices do not support an independent volume from the
         * system volume. In those cases, this method will always return `1`.
         *
         * @return {GetVolumePromise}
         */
      },
      {
        key: "getVolume",
        value: function getVolume() {
          return this.get("volume");
        },
        /**
         * A promise to set the volume level of the player.
         *
         * @promise SetVolumePromise
         * @fulfill {number} The volume was set.
         * @reject {RangeError} The volume was less than 0 or greater than 1.
         */
        /**
         * Set the volume of the player on a scale from `0` to `1`. When set
         * via the API, the volume level will not be synchronized to other
         * players or stored as the viewer’s preference.
         *
         * Most mobile devices do not support setting the volume. An error will
         * *not* be triggered in that situation.
         *
         * @param {number} volume
         * @return {SetVolumePromise}
         */
      },
      {
        key: "setVolume",
        value: function setVolume(volume) {
          return this.set("volume", volume);
        },
        /** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */
        /** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
        /** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */
        /**
         * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
         *
         * @param {TimingObject} timingObject
         * @param {TimingSrcConnectorOptions} options
         *
         * @return {Promise<TimingSrcConnector>}
         */
      },
      {
        key: "setTimingSrc",
        value: (function () {
          var _setTimingSrc = _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(
              timingObject,
              options
            ) {
              var _this6 = this;
              var connector;
              return _regeneratorRuntime().wrap(
                function _callee$(_context2) {
                  while (1)
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        if (timingObject) {
                          _context2.next = 2;
                          break;
                        }
                        throw new TypeError(
                          "A Timing Object must be provided."
                        );
                      case 2:
                        _context2.next = 4;
                        return this.ready();
                      case 4:
                        connector = new TimingSrcConnector(
                          this,
                          timingObject,
                          options
                        );
                        postMessage(this, "notifyTimingObjectConnect");
                        connector.addEventListener("disconnect", function () {
                          return postMessage(
                            _this6,
                            "notifyTimingObjectDisconnect"
                          );
                        });
                        return _context2.abrupt("return", connector);
                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                },
                _callee,
                this
              );
            })
          );
          function setTimingSrc(_x, _x2) {
            return _setTimingSrc.apply(this, arguments);
          }
          return setTimingSrc;
        })(),
      },
    ]);
    return Player2;
  })();
  if (!isNode$1) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
  }
  class VideoPlayer {
    constructor() {
      if (typeof Player !== "undefined") {
        this.init();
      } else {
        console.error("Vimeo Player SDK not available");
      }
    }
    init() {
      const vimeoPlayers = document.querySelectorAll(
        "[data-vimeo-player-init]"
      );
      if (vimeoPlayers.length > 0) {
        this.initVimeoPlayer();
      }
    }
    initVimeoPlayer() {
      const vimeoPlayers = document.querySelectorAll(
        "[data-vimeo-player-init]"
      );
      vimeoPlayers.forEach((vimeoElement, index2) => {
        try {
          let secondsTimeSpanToHMS = function (s) {
              let h2 = Math.floor(s / 3600);
              s -= h2 * 3600;
              let m = Math.floor(s / 60);
              s -= m * 60;
              return m + ":" + (s < 10 ? "0" + s : s);
            },
            updateTimelineValue = function () {
              player.getDuration().then(function () {
                const timeVal = timelineElem.value;
                player.setCurrentTime(timeVal);
                if (progressElem) {
                  progressElem.value = timeVal;
                }
              });
            },
            vimeoHoverTrue = function () {
              vimeoElement.setAttribute("data-vimeo-hover", "false");
            },
            vimeoOnEnd = function () {
              vimeoElement.setAttribute("data-vimeo-activated", "false");
              vimeoElement.setAttribute("data-vimeo-playing", "false");
              player.unload();
            };
          const vimeoVideoID = vimeoElement.getAttribute("data-vimeo-video-id");
          if (!vimeoVideoID) return;
          const iframe = vimeoElement.querySelector("iframe");
          if (!iframe) {
            console.error(
              "No iframe found in vimeo player element",
              vimeoElement
            );
            return;
          }
          const vimeoVideoURL = `https://player.vimeo.com/video/${vimeoVideoID}?api=1&background=1&autoplay=0&loop=0&muted=1`;
          iframe.setAttribute("src", vimeoVideoURL);
          const videoIndexID = "vimeo-player-index-" + index2;
          vimeoElement.setAttribute("id", videoIndexID);
          const iframeID = vimeoElement.id;
          const player = new Player(iframe);
          if (vimeoElement.getAttribute("data-vimeo-update-size") === "true") {
            player.getVideoWidth().then(function (width) {
              player.getVideoHeight().then(function (height) {
                const beforeEl = vimeoElement.querySelector(
                  ".vimeo-player__before"
                );
                if (beforeEl) {
                  beforeEl.style.paddingTop = (height / width) * 100 + "%";
                }
              });
            });
          }
          player.on("play", function () {
            vimeoElement.setAttribute("data-vimeo-loaded", "true");
          });
          if (vimeoElement.getAttribute("data-vimeo-autoplay") === "false") {
            player.setVolume(1);
            player.pause();
          } else {
            player.setVolume(0);
            vimeoElement.setAttribute("data-vimeo-muted", "true");
            if (
              vimeoElement.getAttribute("data-vimeo-paused-by-user") === "false"
            ) {
              const checkVisibility2 = () => {
                const rect = vimeoElement.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                inView ? vimeoPlayerPlay() : vimeoPlayerPause();
              };
              checkVisibility2();
              window.addEventListener("scroll", checkVisibility2);
            }
          }
          const vimeoPlayerPlay = () => {
            vimeoElement.setAttribute("data-vimeo-activated", "true");
            vimeoElement.setAttribute("data-vimeo-playing", "true");
            player.play();
          };
          const vimeoPlayerPause = () => {
            vimeoElement.setAttribute("data-vimeo-playing", "false");
            player.pause();
          };
          const playBtn = vimeoElement.querySelector(
            '[data-vimeo-control="play"]'
          );
          if (playBtn) {
            playBtn.addEventListener("click", function () {
              player.setVolume(0);
              vimeoPlayerPlay();
              if (vimeoElement.getAttribute("data-vimeo-muted") === "true") {
                player.setVolume(0);
              } else {
                player.setVolume(1);
              }
            });
          }
          const pauseBtn = vimeoElement.querySelector(
            '[data-vimeo-control="pause"]'
          );
          if (pauseBtn) {
            pauseBtn.addEventListener("click", function () {
              vimeoPlayerPause();
              if (vimeoElement.getAttribute("data-vimeo-autoplay") === "true") {
                vimeoElement.setAttribute("data-vimeo-paused-by-user", "true");
                window.removeEventListener("scroll", checkVisibility);
              }
            });
          }
          const muteBtn = vimeoElement.querySelector(
            '[data-vimeo-control="mute"]'
          );
          if (muteBtn) {
            muteBtn.addEventListener("click", function () {
              if (vimeoElement.getAttribute("data-vimeo-muted") === "false") {
                player.setVolume(0);
                vimeoElement.setAttribute("data-vimeo-muted", "true");
              } else {
                player.setVolume(1);
                vimeoElement.setAttribute("data-vimeo-muted", "false");
              }
            });
          }
          const fullscreenSupported = !!(
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
          );
          const fullscreenBtn = vimeoElement.querySelector(
            '[data-vimeo-control="fullscreen"]'
          );
          if (!fullscreenSupported && fullscreenBtn) {
            fullscreenBtn.style.display = "none";
          }
          if (fullscreenBtn) {
            fullscreenBtn.addEventListener("click", () => {
              const fullscreenElement = document.getElementById(iframeID);
              if (!fullscreenElement) return;
              const isFullscreen =
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement;
              if (isFullscreen) {
                vimeoElement.setAttribute("data-vimeo-fullscreen", "false");
                (
                  document.exitFullscreen ||
                  document.webkitExitFullscreen ||
                  document.mozCancelFullScreen ||
                  document.msExitFullscreen
                ).call(document);
              } else {
                vimeoElement.setAttribute("data-vimeo-fullscreen", "true");
                (
                  fullscreenElement.requestFullscreen ||
                  fullscreenElement.webkitRequestFullscreen ||
                  fullscreenElement.mozRequestFullScreen ||
                  fullscreenElement.msRequestFullscreen
                ).call(fullscreenElement);
              }
            });
          }
          const handleFullscreenChange = () => {
            const isFullscreen =
              document.fullscreenElement ||
              document.webkitFullscreenElement ||
              document.mozFullScreenElement ||
              document.msFullscreenElement;
            vimeoElement.setAttribute(
              "data-vimeo-fullscreen",
              isFullscreen ? "true" : "false"
            );
          };
          [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "msfullscreenchange",
          ].forEach((event2) => {
            document.addEventListener(event2, handleFullscreenChange);
          });
          const vimeoDuration = vimeoElement.querySelector(
            "[data-vimeo-duration]"
          );
          player.getDuration().then(function (duration) {
            if (vimeoDuration) {
              vimeoDuration.textContent = secondsTimeSpanToHMS(duration);
            }
            const timelineAndProgress = vimeoElement.querySelectorAll(
              '[data-vimeo-control="timeline"], progress'
            );
            timelineAndProgress.forEach((el) => {
              el.setAttribute("max", duration);
            });
          });
          const timelineElem = vimeoElement.querySelector(
            '[data-vimeo-control="timeline"]'
          );
          const progressElem = vimeoElement.querySelector("progress");
          if (timelineElem) {
            ["input", "change"].forEach((evt) => {
              timelineElem.addEventListener(evt, updateTimelineValue);
            });
          }
          player.on("timeupdate", function (data) {
            if (timelineElem) {
              timelineElem.value = data.seconds;
            }
            if (progressElem) {
              progressElem.value = data.seconds;
            }
            if (vimeoDuration) {
              vimeoDuration.textContent = secondsTimeSpanToHMS(
                Math.trunc(data.seconds)
              );
            }
          });
          let vimeoHoverTimer;
          vimeoElement.addEventListener("mousemove", function () {
            if (vimeoElement.getAttribute("data-vimeo-hover") === "false") {
              vimeoElement.setAttribute("data-vimeo-hover", "true");
            }
            clearTimeout(vimeoHoverTimer);
            vimeoHoverTimer = setTimeout(vimeoHoverTrue, 3e3);
          });
          player.on("ended", vimeoOnEnd);
        } catch (error) {
          console.error("Error initializing Vimeo player:", error);
        }
      });
    }
  }
  const initVideoPlayer = () => {
    new VideoPlayer();
  };
  function isObject$1(obj) {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "constructor" in obj &&
      obj.constructor === Object
    );
  }
  function extend$1(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (
        isObject$1(src[key]) &&
        isObject$1(target[key]) &&
        Object.keys(src[key]).length > 0
      ) {
        extend$1(target[key], src[key]);
      }
    });
  }
  const ssrDocument = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: "",
    },
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
      return {
        initEvent() {},
      };
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
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }
  const ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: "",
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
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
    },
    CustomEvent: function CustomEvent() {
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
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    },
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }
  function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
      get() {
        return proto;
      },
      set(value) {
        proto.__proto__ = value;
      },
    });
  }
  class Dom7 extends Array {
    constructor(items) {
      if (typeof items === "number") {
        super(items);
      } else {
        super(...(items || []));
        makeReactive(this);
      }
    }
  }
  function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        res.push(...arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }
  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }
  function arrayUnique(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }
    return uniqueArray;
  }
  function qsa(selector2, context2) {
    if (typeof selector2 !== "string") {
      return [selector2];
    }
    const a = [];
    const res = context2.querySelectorAll(selector2);
    for (let i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }
    return a;
  }
  function $(selector2, context2) {
    const window2 = getWindow();
    const document2 = getDocument();
    let arr = [];
    if (!context2 && selector2 instanceof Dom7) {
      return selector2;
    }
    if (!selector2) {
      return new Dom7(arr);
    }
    if (typeof selector2 === "string") {
      const html2 = selector2.trim();
      if (html2.indexOf("<") >= 0 && html2.indexOf(">") >= 0) {
        let toCreate = "div";
        if (html2.indexOf("<li") === 0) toCreate = "ul";
        if (html2.indexOf("<tr") === 0) toCreate = "tbody";
        if (html2.indexOf("<td") === 0 || html2.indexOf("<th") === 0)
          toCreate = "tr";
        if (html2.indexOf("<tbody") === 0) toCreate = "table";
        if (html2.indexOf("<option") === 0) toCreate = "select";
        const tempParent = document2.createElement(toCreate);
        tempParent.innerHTML = html2;
        for (let i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector2.trim(), context2 || document2);
      }
    } else if (
      selector2.nodeType ||
      selector2 === window2 ||
      selector2 === document2
    ) {
      arr.push(selector2);
    } else if (Array.isArray(selector2)) {
      if (selector2 instanceof Dom7) return selector2;
      arr = selector2;
    }
    return new Dom7(arrayUnique(arr));
  }
  $.fn = Dom7.prototype;
  function addClass$1(...classes2) {
    const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.add(...classNames);
    });
    return this;
  }
  function removeClass(...classes2) {
    const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
    this.forEach((el) => {
      el.classList.remove(...classNames);
    });
    return this;
  }
  function toggleClass$1(...classes2) {
    const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
    this.forEach((el) => {
      classNames.forEach((className) => {
        el.classList.toggle(className);
      });
    });
  }
  function hasClass(...classes2) {
    const classNames = arrayFlat(classes2.map((c) => c.split(" ")));
    return (
      arrayFilter(this, (el) => {
        return (
          classNames.filter((className) => el.classList.contains(className))
            .length > 0
        );
      }).length > 0
    );
  }
  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
      if (this[0]) return this[0].getAttribute(attrs);
      return void 0;
    }
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        this[i].setAttribute(attrs, value);
      } else {
        for (const attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }
    return this;
  }
  function removeAttr(attr2) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr2);
    }
    return this;
  }
  function transform(transform2) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform2;
    }
    return this;
  }
  function transition$1(duration) {
    for (let i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration =
        typeof duration !== "string" ? `${duration}ms` : duration;
    }
    return this;
  }
  function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
      const target = e.target;
      if (!target) return;
      const eventData = e.target.dom7EventData || [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      if ($(target).is(targetSelector)) listener.apply(target, eventData);
      else {
        const parents2 = $(target).parents();
        for (let k = 0; k < parents2.length; k += 1) {
          if ($(parents2[k]).is(targetSelector))
            listener.apply(parents2[k], eventData);
        }
      }
    }
    function handleEvent(e) {
      const eventData = e && e.target ? e.target.dom7EventData || [] : [];
      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }
      listener.apply(this, eventData);
    }
    const events2 = eventType.split(" ");
    let j;
    for (let i = 0; i < this.length; i += 1) {
      const el = this[i];
      if (!targetSelector) {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event2]) el.dom7Listeners[event2] = [];
          el.dom7Listeners[event2].push({
            listener,
            proxyListener: handleEvent,
          });
          el.addEventListener(event2, handleEvent, capture);
        }
      } else {
        for (j = 0; j < events2.length; j += 1) {
          const event2 = events2[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[event2]) el.dom7LiveListeners[event2] = [];
          el.dom7LiveListeners[event2].push({
            listener,
            proxyListener: handleLiveEvent,
          });
          el.addEventListener(event2, handleLiveEvent, capture);
        }
      }
    }
    return this;
  }
  function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
      [eventType, listener, capture] = args;
      targetSelector = void 0;
    }
    if (!capture) capture = false;
    const events2 = eventType.split(" ");
    for (let i = 0; i < events2.length; i += 1) {
      const event2 = events2[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        let handlers;
        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event2];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event2];
        }
        if (handlers && handlers.length) {
          for (let k = handlers.length - 1; k >= 0; k -= 1) {
            const handler = handlers[k];
            if (listener && handler.listener === listener) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (
              listener &&
              handler.listener &&
              handler.listener.dom7proxy &&
              handler.listener.dom7proxy === listener
            ) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event2, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }
    return this;
  }
  function trigger(...args) {
    const window2 = getWindow();
    const events2 = args[0].split(" ");
    const eventData = args[1];
    for (let i = 0; i < events2.length; i += 1) {
      const event2 = events2[i];
      for (let j = 0; j < this.length; j += 1) {
        const el = this[j];
        if (window2.CustomEvent) {
          const evt = new window2.CustomEvent(event2, {
            detail: eventData,
            bubbles: true,
            cancelable: true,
          });
          el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }
    return this;
  }
  function transitionEnd$1(callback) {
    const dom = this;
    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off("transitionend", fireCallBack);
    }
    if (callback) {
      dom.on("transitionend", fireCallBack);
    }
    return this;
  }
  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(styles2.getPropertyValue("margin-right")) +
          parseFloat(styles2.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        const styles2 = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(styles2.getPropertyValue("margin-top")) +
          parseFloat(styles2.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function offset() {
    if (this.length > 0) {
      const window2 = getWindow();
      const document2 = getDocument();
      const el = this[0];
      const box = el.getBoundingClientRect();
      const body = document2.body;
      const clientTop = el.clientTop || body.clientTop || 0;
      const clientLeft = el.clientLeft || body.clientLeft || 0;
      const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
      const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft,
      };
    }
    return null;
  }
  function styles() {
    const window2 = getWindow();
    if (this[0]) return window2.getComputedStyle(this[0], null);
    return {};
  }
  function css(props, value) {
    const window2 = getWindow();
    let i;
    if (arguments.length === 1) {
      if (typeof props === "string") {
        if (this[0])
          return window2
            .getComputedStyle(this[0], null)
            .getPropertyValue(props);
      } else {
        for (i = 0; i < this.length; i += 1) {
          for (const prop in props) {
            this[i].style[prop] = props[prop];
          }
        }
        return this;
      }
    }
    if (arguments.length === 2 && typeof props === "string") {
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }
      return this;
    }
    return this;
  }
  function each(callback) {
    if (!callback) return this;
    this.forEach((el, index2) => {
      callback.apply(el, [el, index2]);
    });
    return this;
  }
  function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
  }
  function html(html2) {
    if (typeof html2 === "undefined") {
      return this[0] ? this[0].innerHTML : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html2;
    }
    return this;
  }
  function text(text2) {
    if (typeof text2 === "undefined") {
      return this[0] ? this[0].textContent.trim() : null;
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i].textContent = text2;
    }
    return this;
  }
  function is(selector2) {
    const window2 = getWindow();
    const document2 = getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector2 === "undefined") return false;
    if (typeof selector2 === "string") {
      if (el.matches) return el.matches(selector2);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector2);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector2);
      compareWith = $(selector2);
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    }
    if (selector2 === document2) {
      return el === document2;
    }
    if (selector2 === window2) {
      return el === window2;
    }
    if (selector2.nodeType || selector2 instanceof Dom7) {
      compareWith = selector2.nodeType ? [selector2] : selector2;
      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }
      return false;
    }
    return false;
  }
  function index() {
    let child = this[0];
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return void 0;
  }
  function eq(index2) {
    if (typeof index2 === "undefined") return this;
    const length = this.length;
    if (index2 > length - 1) {
      return $([]);
    }
    if (index2 < 0) {
      const returnIndex = length + index2;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }
    return $([this[index2]]);
  }
  function append(...els) {
    let newChild;
    const document2 = getDocument();
    for (let k = 0; k < els.length; k += 1) {
      newChild = els[k];
      for (let i = 0; i < this.length; i += 1) {
        if (typeof newChild === "string") {
          const tempDiv = document2.createElement("div");
          tempDiv.innerHTML = newChild;
          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (let j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }
    return this;
  }
  function prepend(newChild) {
    const document2 = getDocument();
    let i;
    let j;
    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === "string") {
        const tempDiv = document2.createElement("div");
        tempDiv.innerHTML = newChild;
        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }
    return this;
  }
  function next(selector2) {
    if (this.length > 0) {
      if (selector2) {
        if (
          this[0].nextElementSibling &&
          $(this[0].nextElementSibling).is(selector2)
        ) {
          return $([this[0].nextElementSibling]);
        }
        return $([]);
      }
      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function nextAll(selector2) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while (el.nextElementSibling) {
      const next2 = el.nextElementSibling;
      if (selector2) {
        if ($(next2).is(selector2)) nextEls.push(next2);
      } else nextEls.push(next2);
      el = next2;
    }
    return $(nextEls);
  }
  function prev(selector2) {
    if (this.length > 0) {
      const el = this[0];
      if (selector2) {
        if (
          el.previousElementSibling &&
          $(el.previousElementSibling).is(selector2)
        ) {
          return $([el.previousElementSibling]);
        }
        return $([]);
      }
      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }
    return $([]);
  }
  function prevAll(selector2) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while (el.previousElementSibling) {
      const prev2 = el.previousElementSibling;
      if (selector2) {
        if ($(prev2).is(selector2)) prevEls.push(prev2);
      } else prevEls.push(prev2);
      el = prev2;
    }
    return $(prevEls);
  }
  function parent(selector2) {
    const parents2 = [];
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector2) {
          if ($(this[i].parentNode).is(selector2))
            parents2.push(this[i].parentNode);
        } else {
          parents2.push(this[i].parentNode);
        }
      }
    }
    return $(parents2);
  }
  function parents(selector2) {
    const parents2 = [];
    for (let i = 0; i < this.length; i += 1) {
      let parent2 = this[i].parentNode;
      while (parent2) {
        if (selector2) {
          if ($(parent2).is(selector2)) parents2.push(parent2);
        } else {
          parents2.push(parent2);
        }
        parent2 = parent2.parentNode;
      }
    }
    return $(parents2);
  }
  function closest(selector2) {
    let closest2 = this;
    if (typeof selector2 === "undefined") {
      return $([]);
    }
    if (!closest2.is(selector2)) {
      closest2 = closest2.parents(selector2).eq(0);
    }
    return closest2;
  }
  function find(selector2) {
    const foundElements = [];
    for (let i = 0; i < this.length; i += 1) {
      const found = this[i].querySelectorAll(selector2);
      for (let j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }
    return $(foundElements);
  }
  function children(selector2) {
    const children2 = [];
    for (let i = 0; i < this.length; i += 1) {
      const childNodes = this[i].children;
      for (let j = 0; j < childNodes.length; j += 1) {
        if (!selector2 || $(childNodes[j]).is(selector2)) {
          children2.push(childNodes[j]);
        }
      }
    }
    return $(children2);
  }
  function remove() {
    for (let i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }
    return this;
  }
  const Methods = {
    addClass: addClass$1,
    removeClass,
    hasClass,
    toggleClass: toggleClass$1,
    attr,
    removeAttr,
    transform,
    transition: transition$1,
    on,
    off,
    trigger,
    transitionEnd: transitionEnd$1,
    outerWidth,
    outerHeight,
    styles,
    offset,
    css,
    each,
    html,
    text,
    is,
    index,
    eq,
    append,
    prepend,
    next,
    nextAll,
    prev,
    prevAll,
    parent,
    parents,
    closest,
    find,
    children,
    filter,
    remove,
  };
  Object.keys(Methods).forEach((methodName) => {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true,
    });
  });
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {}
      try {
        delete object[key];
      } catch (e) {}
    });
  }
  function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle$1(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis = "x") {
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle$1(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform
          .split(", ")
          .map((a) => a.replace(",", "."))
          .join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(
        curTransform === "none" ? "" : curTransform
      );
    } else {
      transformMatrix =
        curStyle.MozTransform ||
        curStyle.OTransform ||
        curStyle.MsTransform ||
        curStyle.msTransform ||
        curStyle.transform ||
        curStyle
          .getPropertyValue("transform")
          .replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject(o) {
    return (
      typeof o === "object" &&
      o !== null &&
      o.constructor &&
      Object.prototype.toString.call(o).slice(8, -1) === "Object"
    );
  }
  function isNode(node) {
    if (
      typeof window !== "undefined" &&
      typeof window.HTMLElement !== "undefined"
    ) {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend(...args) {
    const to = Object(args[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter(
          (key) => noExtend.indexOf(key) < 0
        );
        for (
          let nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex += 1
        ) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (
              !isObject(to[nextKey]) &&
              isObject(nextSource[nextKey])
            ) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll({ swiper, targetPosition, side }) {
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return (
        (dir === "next" && current >= target) ||
        (dir === "prev" && current <= target)
      );
    };
    const animate = () => {
      time = /* @__PURE__ */ new Date().getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition =
        startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition,
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition,
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  let support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll:
        document2.documentElement &&
        "scrollBehavior" in document2.documentElement.style,
      touch: !!(
        "ontouchstart" in window2 ||
        (window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
      ),
      passiveListener: (function checkPassiveListener() {
        let supportsPassive = false;
        try {
          const opts = Object.defineProperty({}, "passive", {
            // eslint-disable-next-line
            get() {
              supportsPassive = true;
            },
          });
          window2.addEventListener("testPassiveListener", null, opts);
        } catch (e) {}
        return supportsPassive;
      })(),
      gestures: (function checkGestures() {
        return "ongesturestart" in window2;
      })(),
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  let deviceCached;
  function calcDevice({ userAgent } = {}) {
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false,
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = [
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
    if (
      !ipad &&
      macos &&
      support2.touch &&
      iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0
    ) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides = {}) {
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  let browser;
  function calcBrowser() {
    const window2 = getWindow();
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return (
        ua.indexOf("safari") >= 0 &&
        ua.indexOf("chrome") < 0 &&
        ua.indexOf("android") < 0
      );
    }
    return {
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        window2.navigator.userAgent
      ),
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize({ swiper, on: on2, emit }) {
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const { width, height } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach(({ contentBoxSize, contentRect, target }) => {
            if (target && target !== swiper.el) return;
            newWidth = contentRect
              ? contentRect.width
              : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect
              ? contentRect.height
              : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on2("init", () => {
      if (
        swiper.params.resizeObserver &&
        typeof window2.ResizeObserver !== "undefined"
      ) {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on2("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener(
        "orientationchange",
        orientationChangeHandler
      );
    });
  }
  function Observer({ swiper, extendParams, on: on2, emit }) {
    const observers = [];
    const window2 = getWindow();
    const attach = (target, options = {}) => {
      const ObserverFunc =
        window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes:
          typeof options.attributes === "undefined" ? true : options.attributes,
        childList:
          typeof options.childList === "undefined" ? true : options.childList,
        characterData:
          typeof options.characterData === "undefined"
            ? true
            : options.characterData,
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = swiper.$el.parents();
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren,
      });
      attach(swiper.$wrapperEl[0], {
        attributes: false,
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false,
    });
    on2("init", init);
    on2("destroy", destroy);
  }
  const eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2]) self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      function onceHandler(...args) {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsAnyListeners) return self2;
      const index2 = self2.eventsAnyListeners.indexOf(handler);
      if (index2 >= 0) {
        self2.eventsAnyListeners.splice(index2, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index2) => {
            if (
              eventHandler === handler ||
              (eventHandler.__emitterProxy &&
                eventHandler.__emitterProxy === handler)
            ) {
              self2.eventsListeners[event2].splice(index2, 1);
            }
          });
        }
      });
      return self2;
    },
    emit(...args) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      let events2;
      let data;
      let context2;
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context2 = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context2 = args[0].context || self2;
      }
      data.unshift(context2);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context2, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context2, data);
          });
        }
      });
      return self2;
    },
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (
      typeof swiper.params.width !== "undefined" &&
      swiper.params.width !== null
    ) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }
    if (
      typeof swiper.params.height !== "undefined" &&
      swiper.params.height !== null
    ) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }
    if (
      (width === 0 && swiper.isHorizontal()) ||
      (height === 0 && swiper.isVertical())
    ) {
      return;
    }
    width =
      width -
      parseInt($el.css("padding-left") || 0, 10) -
      parseInt($el.css("padding-right") || 0, 10);
    height =
      height -
      parseInt($el.css("padding-top") || 0, 10) -
      parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height,
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      }
      return {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom",
      }[property];
    }
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      $wrapperEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL,
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual
      ? swiper.virtual.slides.length
      : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual
      ? swiper.virtual.slides.length
      : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index2 = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween =
        (parseFloat(spaceBetween.replace("%", "")) / 100) * swiperSize;
    }
    swiper.virtualSize = -spaceBetween;
    if (rtl)
      slides.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: "",
      });
    else
      slides.css({
        marginRight: "",
        marginBottom: "",
        marginTop: "",
      });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    }
    let slideSize;
    const shouldResetSlideSize =
      params.slidesPerView === "auto" &&
      params.breakpoints &&
      Object.keys(params.breakpoints).filter((key) => {
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
      }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      const slide2 = slides.eq(i);
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
      }
      if (slide2.css("display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2[0]);
        const currentTransform = slide2[0].style.transform;
        const currentWebKitTransform = slide2[0].style.webkitTransform;
        if (currentTransform) {
          slide2[0].style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2[0].style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal()
            ? slide2.outerWidth(true)
            : slide2.outerHeight(true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(
            slideStyles,
            "padding-left"
          );
          const paddingRight = getDirectionPropertyValue(
            slideStyles,
            "padding-right"
          );
          const marginLeft = getDirectionPropertyValue(
            slideStyles,
            "margin-left"
          );
          const marginRight = getDirectionPropertyValue(
            slideStyles,
            "margin-right"
          );
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const { clientWidth, offsetWidth } = slide2[0];
            slideSize =
              width +
              paddingLeft +
              paddingRight +
              marginLeft +
              marginRight +
              (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2[0].style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2[0].style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize =
          (swiperSize - (params.slidesPerView - 1) * spaceBetween) /
          params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition =
          slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index2 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (
          (index2 - Math.min(swiper.params.slidesPerGroupSkip, index2)) %
            swiper.params.slidesPerGroup ===
          0
        )
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index2 += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (
      rtl &&
      wrongRTL &&
      (params.effect === "slide" || params.effect === "coverflow")
    ) {
      $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`,
      });
    }
    if (params.setWrapperSize) {
      $wrapperEl.css({
        [getDirectionLabel("width")]: `${
          swiper.virtualSize + params.spaceBetween
        }px`,
      });
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (
        Math.floor(swiper.virtualSize - swiperSize) -
          Math.floor(snapGrid[snapGrid.length - 1]) >
        1
      ) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (params.spaceBetween !== 0) {
      const key =
        swiper.isHorizontal() && rtl
          ? "marginLeft"
          : getDirectionLabel("marginRight");
      slides
        .filter((_, slideIndex) => {
          if (!params.cssMode) return true;
          if (slideIndex === slides.length - 1) {
            return false;
          }
          return true;
        })
        .css({
          [key]: `${spaceBetween}px`,
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap2) => {
        if (snap2 < 0) return -offsetBefore;
        if (snap2 > maxSnap) return maxSnap + offsetAfter;
        return snap2;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize +=
          slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap2, snapIndex) => {
          snapGrid[snapIndex] = snap2 - allSlidesOffset;
        });
        slidesGrid.forEach((snap2, snapIndex) => {
          slidesGrid[snapIndex] = snap2 + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid,
    });
    if (
      params.centeredSlides &&
      params.cssMode &&
      !params.centeredSlidesBounds
    ) {
      setCSSProperty(
        swiper.wrapperEl,
        "--swiper-centered-offset-before",
        `${-snapGrid[0]}px`
      );
      setCSSProperty(
        swiper.wrapperEl,
        "--swiper-centered-offset-after",
        `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`
      );
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (
      !isVirtual &&
      !params.cssMode &&
      (params.effect === "slide" || params.effect === "fade")
    ) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded =
        swiper.$el.hasClass(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.$el.addClass(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.$el.removeClass(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index2) => {
      if (isVirtual) {
        return swiper.slides.filter(
          (el) =>
            parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index2
        )[0];
      }
      return swiper.slides.eq(index2)[0];
    };
    if (
      swiper.params.slidesPerView !== "auto" &&
      swiper.params.slidesPerView > 1
    ) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || $([])).each((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index2 = swiper.activeIndex + i;
          if (index2 > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index2));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.$wrapperEl.css("height", `${newHeight}px`);
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal()
        ? slides[i].offsetLeft
        : slides[i].offsetTop;
    }
  }
  function updateSlidesProgress(translate2 = (this && this.translate) || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress =
        (offsetCenter +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slideOffset) /
        (slide2.swiperSlideSize + params.spaceBetween);
      const originalSlideProgress =
        (offsetCenter -
          snapGrid[0] +
          (params.centeredSlides ? swiper.minTranslate() : 0) -
          slideOffset) /
        (slide2.swiperSlideSize + params.spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible =
        (slideBefore >= 0 && slideBefore < swiper.size - 1) ||
        (slideAfter > 1 && slideAfter <= swiper.size) ||
        (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl
        ? -originalSlideProgress
        : originalSlideProgress;
    }
    swiper.visibleSlides = $(swiper.visibleSlides);
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 =
        (swiper && swiper.translate && swiper.translate * multiplier) || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }
    Object.assign(swiper, {
      progress,
      isBeginning,
      isEnd,
    });
    if (
      params.watchSlidesProgress ||
      (params.centeredSlides && params.autoHeight)
    )
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(
      `${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`
    );
    let activeSlide;
    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(
        `.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`
      );
    } else {
      activeSlide = slides.eq(activeIndex);
    }
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            `.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`
          )
          .addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl
          .children(
            `.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`
          )
          .addClass(params.slideDuplicateActiveClass);
      }
    }
    let nextSlide = activeSlide
      .nextAll(`.${params.slideClass}`)
      .eq(0)
      .addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    }
    let prevSlide = activeSlide
      .prevAll(`.${params.slideClass}`)
      .eq(0)
      .addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            `.${params.slideClass}:not(.${
              params.slideDuplicateClass
            })[data-swiper-slide-index="${nextSlide.attr(
              "data-swiper-slide-index"
            )}"]`
          )
          .addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl
          .children(
            `.${params.slideClass}.${
              params.slideDuplicateClass
            }[data-swiper-slide-index="${nextSlide.attr(
              "data-swiper-slide-index"
            )}"]`
          )
          .addClass(params.slideDuplicateNextClass);
      }
      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl
          .children(
            `.${params.slideClass}:not(.${
              params.slideDuplicateClass
            })[data-swiper-slide-index="${prevSlide.attr(
              "data-swiper-slide-index"
            )}"]`
          )
          .addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl
          .children(
            `.${params.slideClass}.${
              params.slideDuplicateClass
            }[data-swiper-slide-index="${prevSlide.attr(
              "data-swiper-slide-index"
            )}"]`
          )
          .addClass(params.slideDuplicatePrevClass);
      }
    }
    swiper.emitSlidesClasses();
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate
      ? swiper.translate
      : -swiper.translate;
    const {
      slidesGrid,
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex,
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === "undefined") {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            translate2 >= slidesGrid[i] &&
            translate2 <
              slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2
          ) {
            activeIndex = i;
          } else if (
            translate2 >= slidesGrid[i] &&
            translate2 < slidesGrid[i + 1]
          ) {
            activeIndex = i + 1;
          }
        } else if (translate2 >= slidesGrid[i]) {
          activeIndex = i;
        }
      }
      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === "undefined")
          activeIndex = 0;
      }
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex =
        skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    const realIndex = parseInt(
      swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") ||
        activeIndex,
      10
    );
    Object.assign(swiper, {
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex,
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide2 = $(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(
          $(slide2).attr("data-swiper-slide-index"),
          10
        );
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (
      params.slideToClickedSlide &&
      swiper.clickedIndex !== void 0 &&
      swiper.clickedIndex !== swiper.activeIndex
    ) {
      swiper.slideToClickedSlide();
    }
  }
  const update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide,
  };
  function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      $wrapperEl,
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      $wrapperEl,
      wrapperEl,
      progress,
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] =
        swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(
    translate2 = 0,
    speed = this.params.speed,
    runCallbacks = true,
    translateBounds = true,
    internal
  ) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top",
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth",
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(
            e
          ) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener(
              "transitionend",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.$wrapperEl[0].removeEventListener(
              "webkitTransitionEnd",
              swiper.onTranslateToWrapperTransitionEnd
            );
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.$wrapperEl[0].addEventListener(
          "transitionend",
          swiper.onTranslateToWrapperTransitionEnd
        );
        swiper.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          swiper.onTranslateToWrapperTransitionEnd
        );
      }
    }
    return true;
  }
  const translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo,
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit({ swiper, runCallbacks, direction, step }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start",
    });
  }
  function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End",
    });
  }
  const transition = {
    setTransition,
    transitionStart,
    transitionEnd,
  };
  function slideTo(
    index2 = 0,
    speed = this.params.speed,
    runCallbacks = true,
    internal,
    initial
  ) {
    if (typeof index2 !== "number" && typeof index2 !== "string") {
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index2}] given.`
      );
    }
    if (typeof index2 === "string") {
      const indexAsNumber = parseInt(index2, 10);
      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`
        );
      }
      index2 = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index2;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled,
    } = swiper;
    if (
      (swiper.animating && params.preventInteractionOnTransition) ||
      (!enabled && !internal && !initial)
    ) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex =
      skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (
            normalizedTranslate >= normalizedGrid &&
            normalizedTranslate <
              normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
          ) {
            slideIndex = i;
          } else if (
            normalizedTranslate >= normalizedGrid &&
            normalizedTranslate < normalizedGridNext
          ) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (
        !swiper.allowSlideNext &&
        translate2 < swiper.translate &&
        translate2 < swiper.minTranslate()
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        translate2 > swiper.translate &&
        translate2 > swiper.maxTranslate()
      ) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    if (
      (rtl && -translate2 === swiper.translate) ||
      (!rtl && translate2 === swiper.translate)
    ) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._swiperImmediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top",
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth",
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener(
            "transitionend",
            swiper.onSlideToWrapperTransitionEnd
          );
          swiper.$wrapperEl[0].removeEventListener(
            "webkitTransitionEnd",
            swiper.onSlideToWrapperTransitionEnd
          );
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener(
        "transitionend",
        swiper.onSlideToWrapperTransitionEnd
      );
      swiper.$wrapperEl[0].addEventListener(
        "webkitTransitionEnd",
        swiper.onSlideToWrapperTransitionEnd
      );
    }
    return true;
  }
  function slideToLoop(
    index2 = 0,
    speed = this.params.speed,
    runCallbacks = true,
    internal
  ) {
    if (typeof index2 === "string") {
      const indexAsNumber = parseInt(index2, 10);
      const isValidNumber = isFinite(indexAsNumber);
      if (!isValidNumber) {
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${index2}] given.`
        );
      }
      index2 = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index2;
    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating, enabled, params } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (
      params.slidesPerView === "auto" &&
      params.slidesPerGroup === 1 &&
      params.slidesPerGroupAuto
    ) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment =
      swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(
      swiper.activeIndex + increment,
      speed,
      runCallbacks,
      internal
    );
  }
  function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } =
      swiper;
    if (!enabled) return swiper;
    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix();
      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize2(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize2(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize2(val));
    let prevSnap =
      snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap2, snapIndex) => {
        if (normalizedTranslate >= snap2) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap =
          snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (
        params.slidesPerView === "auto" &&
        params.slidesPerGroup === 1 &&
        params.slidesPerGroupAuto
      ) {
        prevIndex =
          prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex =
        swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual
          ? swiper.virtual.slides.length - 1
          : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(
    speed = this.params.speed,
    runCallbacks = true,
    internal
  ) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(
    speed = this.params.speed,
    runCallbacks = true,
    internal,
    threshold = 0.5
  ) {
    const swiper = this;
    let index2 = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index2);
    const snapIndex =
      skip + Math.floor((index2 - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate
      ? swiper.translate
      : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index2 += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index2 -= swiper.params.slidesPerGroup;
      }
    }
    index2 = Math.max(index2, 0);
    index2 = Math.min(index2, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index2, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
    const slidesPerView =
      params.slidesPerView === "auto"
        ? swiper.slidesPerViewDynamic()
        : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(
        $(swiper.clickedSlide).attr("data-swiper-slide-index"),
        10
      );
      if (params.centeredSlides) {
        if (
          slideToIndex < swiper.loopedSlides - slidesPerView / 2 ||
          slideToIndex >
            swiper.slides.length - swiper.loopedSlides + slidesPerView / 2
        ) {
          swiper.loopFix();
          slideToIndex = $wrapperEl
            .children(
              `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`
            )
            .eq(0)
            .index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(
            `.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`
          )
          .eq(0)
          .index();
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  const slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide,
  };
  function loopCreate() {
    const swiper = this;
    const document2 = getDocument();
    const { params, $wrapperEl } = swiper;
    const $selector =
      $wrapperEl.children().length > 0
        ? $($wrapperEl.children()[0].parentNode)
        : $wrapperEl;
    $selector
      .children(`.${params.slideClass}.${params.slideDuplicateClass}`)
      .remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
      const blankSlidesNum =
        params.slidesPerGroup - (slides.length % params.slidesPerGroup);
      if (blankSlidesNum !== params.slidesPerGroup) {
        for (let i = 0; i < blankSlidesNum; i += 1) {
          const blankNode = $(document2.createElement("div")).addClass(
            `${params.slideClass} ${params.slideBlankClass}`
          );
          $selector.append(blankNode);
        }
        slides = $selector.children(`.${params.slideClass}`);
      }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides)
      params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(
      parseFloat(params.loopedSlides || params.slidesPerView, 10)
    );
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (
      swiper.loopedSlides > slides.length &&
      swiper.params.loopedSlidesLimit
    ) {
      swiper.loopedSlides = slides.length;
    }
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index2) => {
      const slide2 = $(el);
      slide2.attr("data-swiper-slide-index", index2);
    });
    for (let i = 0; i < swiper.loopedSlides; i += 1) {
      const index2 = i - Math.floor(i / slides.length) * slides.length;
      appendSlides.push(slides.eq(index2)[0]);
      prependSlides.unshift(slides.eq(slides.length - index2 - 1)[0]);
    }
    for (let i = 0; i < appendSlides.length; i += 1) {
      $selector.append(
        $(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass)
      );
    }
    for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
      $selector.prepend(
        $(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass)
      );
    }
  }
  function loopFix() {
    const swiper = this;
    swiper.emit("beforeLoopFix");
    const {
      activeIndex,
      slides,
      loopedSlides,
      allowSlidePrev,
      allowSlideNext,
      snapGrid,
      rtlTranslate: rtl,
    } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate();
    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;
      const slideChanged = swiper.slideTo(newIndex, 0, false, true);
      if (slideChanged && diff !== 0) {
        swiper.setTranslate(
          (rtl ? -swiper.translate : swiper.translate) - diff
        );
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const { $wrapperEl, params, slides } = swiper;
    $wrapperEl
      .children(
        `.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`
      )
      .remove();
    slides.removeAttr("data-swiper-slide-index");
  }
  const loop = {
    loopCreate,
    loopFix,
    loopDestroy,
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (
      swiper.support.touch ||
      !swiper.params.simulateTouch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    )
      return;
    const el =
      swiper.params.touchEventsTarget === "container"
        ? swiper.el
        : swiper.wrapperEl;
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (
      swiper.support.touch ||
      (swiper.params.watchOverflow && swiper.isLocked) ||
      swiper.params.cssMode
    ) {
      return;
    }
    swiper[
      swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "";
  }
  const grabCursor = {
    setGrabCursor,
    unsetGrabCursor,
  };
  function closestElement(selector2, base2 = this) {
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector2);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base2);
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    const window2 = getWindow();
    const data = swiper.touchEventsData;
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = $(e.target);
    if (params.touchEventsTarget === "wrapper") {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) return;
    if (!data.isTouchEvent && "button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue =
      !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = event2.composedPath ? event2.composedPath() : event2.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      $targetEl = $(eventPath[0]);
    }
    const noSwipingSelector = params.noSwipingSelector
      ? params.noSwipingSelector
      : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (
      params.noSwiping &&
      (isTargetShadow
        ? closestElement(noSwipingSelector, $targetEl[0])
        : $targetEl.closest(noSwipingSelector)[0])
    ) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX =
      e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY =
      e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    const edgeSwipeDetection =
      params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold =
      params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (
      edgeSwipeDetection &&
      (startX <= edgeSwipeThreshold ||
        startX >= window2.innerWidth - edgeSwipeThreshold)
    ) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
      } else {
        return;
      }
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0,
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== "touchstart") {
      let preventDefault = true;
      if ($targetEl.is(data.focusableElements)) {
        preventDefault = false;
        if ($targetEl[0].nodeName === "SELECT") {
          data.isTouched = false;
        }
      }
      if (
        document2.activeElement &&
        $(document2.activeElement).is(data.focusableElements) &&
        document2.activeElement !== $targetEl[0]
      ) {
        document2.activeElement.blur();
      }
      const shouldPreventDefault =
        preventDefault &&
        swiper.allowTouchMove &&
        params.touchStartPreventDefault;
      if (
        (params.touchStartForcePreventDefault || shouldPreventDefault) &&
        !$targetEl[0].isContentEditable
      ) {
        e.preventDefault();
      }
    }
    if (
      swiper.params.freeMode &&
      swiper.params.freeMode.enabled &&
      swiper.freeMode &&
      swiper.animating &&
      !params.cssMode
    ) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    if (data.isTouchEvent && e.type !== "touchmove") return;
    const targetTouch =
      e.type === "touchmove" &&
      e.targetTouches &&
      (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!$(e.target).is(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY,
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (
          (pageY < touches.startY &&
            swiper.translate <= swiper.maxTranslate()) ||
          (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
        ) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (
        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
        (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
      ) {
        return;
      }
    }
    if (data.isTouchEvent && document2.activeElement) {
      if (
        e.target === document2.activeElement &&
        $(e.target).is(data.focusableElements)
      ) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (
      swiper.params.threshold &&
      Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper.params.threshold
    )
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (
        (swiper.isHorizontal() && touches.currentY === touches.startY) ||
        (swiper.isVertical() && touches.currentX === touches.startX)
      ) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle =
            (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
          data.isScrolling = swiper.isHorizontal()
            ? touchAngle > params.touchAngle
            : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (
        touches.currentX !== touches.startX ||
        touches.currentY !== touches.startY
      ) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    if (!data.isMoved) {
      if (params.loop && !params.cssMode) {
        swiper.loopFix();
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
      }
      data.allowMomentumBounce = false;
      if (
        params.grabCursor &&
        (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
      ) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate =
          swiper.minTranslate() -
          1 +
          __pow(
            -swiper.minTranslate() + data.startTranslate + diff,
            resistanceRatio
          );
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance)
        data.currentTranslate =
          swiper.maxTranslate() +
          1 -
          __pow(
            swiper.maxTranslate() - data.startTranslate - diff,
            resistanceRatio
          );
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (
      !swiper.allowSlideNext &&
      swiper.swipeDirection === "next" &&
      data.currentTranslate < data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (
      !swiper.allowSlidePrev &&
      swiper.swipeDirection === "prev" &&
      data.currentTranslate > data.startTranslate
    ) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal()
            ? touches.currentX - touches.startX
            : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (
      (params.freeMode && params.freeMode.enabled && swiper.freeMode) ||
      params.watchSlidesProgress
    ) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (
      params.grabCursor &&
      data.isMoved &&
      data.isTouched &&
      (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)
    ) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || (e.composedPath && e.composedPath());
      swiper.updateClickedSlide((pathTree && pathTree[0]) || e.target);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (
      !data.isTouched ||
      !data.isMoved ||
      !swiper.swipeDirection ||
      touches.diff === 0 ||
      data.currentTranslate === data.startTranslate
    ) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos,
      });
      return;
    }
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (
      let i = 0;
      i < slidesGrid.length;
      i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup
    ) {
      const increment2 =
        i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (
          currentPos >= slidesGrid[i] &&
          currentPos < slidesGrid[i + increment2]
        ) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize =
          slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex =
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
            ? swiper.virtual.slides.length - 1
            : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment =
      stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(
            params.rewind && swiper.isEnd
              ? rewindFirstIndex
              : stopIndex + increment
          );
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (
          rewindLastIndex !== null &&
          ratio < 0 &&
          Math.abs(ratio) > params.longSwipesRatio
        ) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget =
        swiper.navigation &&
        (e.target === swiper.navigation.nextEl ||
          e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(
            rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment
          );
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(
            rewindLastIndex !== null ? rewindLastIndex : stopIndex
          );
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if (
      (params.slidesPerView === "auto" || params.slidesPerView > 1) &&
      swiper.isEnd &&
      !swiper.isBeginning &&
      !swiper.params.centeredSlides
    ) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(
        rtlTranslate ? -swiper.translate : swiper.translate
      );
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  let dummyEventAttached = false;
  function dummyEventListener() {}
  const events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      touchEvents,
      el,
      wrapperEl,
      device,
      support: support2,
    } = swiper;
    const capture = !!params.nested;
    const domMethod =
      method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!support2.touch) {
      el[domMethod](touchEvents.start, swiper.onTouchStart, false);
      document2[domMethod](touchEvents.move, swiper.onTouchMove, capture);
      document2[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
      const passiveListener =
        touchEvents.start === "touchstart" &&
        support2.passiveListener &&
        params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
      el[domMethod](
        touchEvents.move,
        swiper.onTouchMove,
        support2.passiveListener
          ? {
              passive: false,
              capture,
            }
          : capture
      );
      el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
      if (touchEvents.cancel) {
        el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](
        device.ios || device.android
          ? "resize orientationchange observerUpdate"
          : "resize observerUpdate",
        onResize,
        true
      );
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
  };
  function attachEvents() {
    const swiper = this;
    const document2 = getDocument();
    const { params, support: support2 } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    if (support2.touch && !dummyEventAttached) {
      document2.addEventListener("touchstart", dummyEventListener);
      dummyEventAttached = true;
    }
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  const events$1 = {
    attachEvents,
    detachEvents,
  };
  const isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
    const breakpoints2 = params.breakpoints;
    if (
      !breakpoints2 ||
      (breakpoints2 && Object.keys(breakpoints2).length === 0)
    )
      return;
    const breakpoint = swiper.getBreakpoint(
      breakpoints2,
      swiper.params.breakpointsBase,
      swiper.el
    );
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams =
      breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(
        `${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`
      );
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(`${params.containerModifierClass}grid`);
      if (
        (breakpointParams.grid.fill &&
          breakpointParams.grid.fill === "column") ||
        (!breakpointParams.grid.fill && params.grid.fill === "column")
      ) {
        $el.addClass(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled =
        breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged =
      breakpointParams.direction &&
      breakpointParams.direction !== params.direction;
    const needsReLoop =
      params.loop &&
      (breakpointParams.slidesPerView !== params.slidesPerView ||
        directionChanged);
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(
        activeIndex - loopedSlides + swiper.loopedSlides,
        0,
        false
      );
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base2 = "window", containerEl) {
    if (!breakpoints2 || (base2 === "container" && !containerEl)) return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight =
      base2 === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point,
        };
      }
      return {
        value: point,
        point,
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const { point, value } = points[i];
      if (base2 === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  const breakpoints = {
    setBreakpoint,
    getBreakpoint,
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, $el, device, support: support2 } = swiper;
    const suffixes = prepareClasses(
      [
        "initialized",
        params.direction,
        {
          "pointer-events": !support2.touch,
        },
        {
          "free-mode": swiper.params.freeMode && params.freeMode.enabled,
        },
        {
          autoheight: params.autoHeight,
        },
        {
          rtl: rtl,
        },
        {
          grid: params.grid && params.grid.rows > 1,
        },
        {
          "grid-column":
            params.grid &&
            params.grid.rows > 1 &&
            params.grid.fill === "column",
        },
        {
          android: device.android,
        },
        {
          ios: device.ios,
        },
        {
          "css-mode": params.cssMode,
        },
        {
          centered: params.cssMode && params.centeredSlides,
        },
        {
          "watch-progress": params.watchSlidesProgress,
        },
      ],
      params.containerModifierClass
    );
    classNames.push(...suffixes);
    $el.addClass([...classNames].join(" "));
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const { $el, classNames } = swiper;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
  }
  const classes = {
    addClasses,
    removeClasses,
  };
  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window2 = getWindow();
    let image;
    function onReady() {
      if (callback) callback();
    }
    const isPicture = $(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window2.Image();
        image.onload = onReady;
        image.onerror = onReady;
        if (sizes) {
          image.sizes = sizes;
        }
        if (srcset) {
          image.srcset = srcset;
        }
        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      onReady();
    }
  }
  function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
      if (
        typeof swiper === "undefined" ||
        swiper === null ||
        !swiper ||
        swiper.destroyed
      )
        return;
      if (swiper.imagesLoaded !== void 0) swiper.imagesLoaded += 1;
      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit("imagesReady");
      }
    }
    for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
      const imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(
        imageEl,
        imageEl.currentSrc || imageEl.getAttribute("src"),
        imageEl.srcset || imageEl.getAttribute("srcset"),
        imageEl.sizes || imageEl.getAttribute("sizes"),
        true,
        onReady
      );
    }
  }
  const images = {
    loadImage,
    preloadImages,
  };
  function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge =
        swiper.slidesGrid[lastSlideIndex] +
        swiper.slidesSizesGrid[lastSlideIndex] +
        slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  const checkOverflow$1 = {
    checkOverflow,
  };
  const defaults = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: true,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
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
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false,
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }
      if (
        ["navigation", "pagination", "scrollbar"].indexOf(moduleParamName) >=
          0 &&
        params[moduleParamName] === true
      ) {
        params[moduleParamName] = {
          auto: true,
        };
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true,
        };
      }
      if (
        typeof params[moduleParamName] === "object" &&
        !("enabled" in params[moduleParamName])
      ) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false,
        };
      extend(allModulesParams, obj);
    };
  }
  const prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes,
    images,
  };
  const extendedDefaults = {};
  class Swiper {
    constructor(...args) {
      let el;
      let params;
      if (
        args.length === 1 &&
        args[0].constructor &&
        Object.prototype.toString.call(args[0]).slice(8, -1) === "Object"
      ) {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;
      if (params.el && $(params.el).length > 1) {
        const swipers = [];
        $(params.el).each((containerEl) => {
          const newParams = extend({}, params, {
            el: containerEl,
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent,
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper),
        });
      });
      const swiperParams = extend({}, defaults, allModulesParams);
      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      swiper.$ = $;
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: (function touchEvents() {
          const touch = ["touchstart", "touchmove", "touchend", "touchcancel"];
          const desktop = ["pointerdown", "pointermove", "pointerup"];
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3],
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2],
          };
          return swiper.support.touch || !swiper.params.simulateTouch
            ? swiper.touchEventsTouch
            : swiper.touchEventsDesktop;
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
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: now(),
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0,
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return (
          className.indexOf("swiper") === 0 ||
          className.indexOf(swiper.params.containerModifierClass) === 0
        );
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className
        .split(" ")
        .filter((className) => {
          return (
            className.indexOf("swiper-slide") === 0 ||
            className.indexOf(swiper.params.slideClass) === 0
          );
        })
        .join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.each((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames,
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex,
      } = swiper;
      let spv = 1;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex].swiperSlideSize;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact
              ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] <
                swiperSize
              : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView =
              slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const { snapGrid, params } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate
          ? swiper.translate * -1
          : swiper.translate;
        const newTranslate = Math.min(
          Math.max(translateValue, swiper.maxTranslate()),
          swiper.minTranslate()
        );
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
        setTranslate2();
        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if (
          (swiper.params.slidesPerView === "auto" ||
            swiper.params.slidesPerView > 1) &&
          swiper.isEnd &&
          !swiper.params.centeredSlides
        ) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection =
          currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (
        newDirection === currentDirection ||
        (newDirection !== "horizontal" && newDirection !== "vertical")
      ) {
        return swiper;
      }
      swiper.$el
        .removeClass(
          `${swiper.params.containerModifierClass}${currentDirection}`
        )
        .addClass(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (
        (swiper.rtl && direction === "rtl") ||
        (!swiper.rtl && direction === "ltr")
      )
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate =
        swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(el) {
      const swiper = this;
      if (swiper.mounted) return true;
      const $el = $(el || swiper.params.el);
      el = $el[0];
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "")
          .trim()
          .split(" ")
          .join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = $(el.shadowRoot.querySelector(getWrapperSelector()));
          res.children = (options) => $el.children(options);
          return res;
        }
        if (!$el.children) {
          return $($el).children(getWrapperSelector());
        }
        return $el.children(getWrapperSelector());
      };
      let $wrapperEl = getWrapper();
      if ($wrapperEl.length === 0 && swiper.params.createElements) {
        const document2 = getDocument();
        const wrapper = document2.createElement("div");
        $wrapperEl = $(wrapper);
        wrapper.className = swiper.params.wrapperClass;
        $el.append(wrapper);
        $el.children(`.${swiper.params.slideClass}`).each((slideEl) => {
          $wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        $el,
        el,
        $wrapperEl,
        wrapperEl: $wrapperEl[0],
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
        rtlTranslate:
          swiper.params.direction === "horizontal" &&
          (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
        wrongRTL: $wrapperEl.css("display") === "-webkit-box",
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      }
      if (swiper.params.loop) {
        swiper.slideTo(
          swiper.params.initialSlide + swiper.loopedSlides,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      } else {
        swiper.slideTo(
          swiper.params.initialSlide,
          0,
          swiper.params.runCallbacksOnInit,
          false,
          true
        );
      }
      swiper.attachEvents();
      swiper.initialized = true;
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
      const swiper = this;
      const { params, $el, $wrapperEl, slides } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr("style");
        $wrapperEl.removeAttr("style");
        if (slides && slides.length) {
          slides
            .removeClass(
              [
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass,
              ].join(" ")
            )
            .removeAttr("style")
            .removeAttr("data-swiper-slide-index");
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
      const modules2 = Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
        modules2.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => Swiper.installModule(m));
        return Swiper;
      }
      Swiper.installModule(module);
      return Swiper;
    }
  }
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);
  function Virtual({ swiper, extendParams, on: on2, emit }) {
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let cssModeTimeout;
    swiper.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    function renderSlide(slide2, index2) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index2]) {
        return swiper.virtual.cache[index2];
      }
      const $slideEl = params.renderSlide
        ? $(params.renderSlide.call(swiper, slide2, index2))
        : $(
            `<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index2}">${slide2}</div>`
          );
      if (!$slideEl.attr("data-swiper-slide-index"))
        $slideEl.attr("data-swiper-slide-index", index2);
      if (params.cache) swiper.virtual.cache[index2] = $slideEl;
      return $slideEl;
    }
    function update2(force) {
      const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
      const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset,
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = swiper.activeIndex || 0;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore =
          Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = slidesPerGroup + addSlidesBefore;
      }
      const from = Math.max((activeIndex || 0) - slidesBefore, 0);
      const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      const offset2 =
        (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      Object.assign(swiper.virtual, {
        from,
        to,
        offset: offset2,
        slidesGrid: swiper.slidesGrid,
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (
          swiper.slidesGrid !== previousSlidesGrid &&
          offset2 !== previousOffset
        ) {
          swiper.slides.css(offsetProp, `${offset2}px`);
        }
        swiper.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset2,
          from,
          to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          })(),
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      if (force) {
        swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl
              .find(
                `.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`
              )
              .remove();
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        if (i >= from && i <= to) {
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(i);
          } else {
            if (i > previousTo) appendIndexes.push(i);
            if (i < previousFrom) prependIndexes.push(i);
          }
        }
      }
      appendIndexes.forEach((index2) => {
        swiper.$wrapperEl.append(renderSlide(slides[index2], index2));
      });
      prependIndexes
        .sort((a, b) => b - a)
        .forEach((index2) => {
          swiper.$wrapperEl.prepend(renderSlide(slides[index2], index2));
        });
      swiper.$wrapperEl
        .children(".swiper-slide")
        .css(offsetProp, `${offset2}px`);
      onRendered();
    }
    function appendSlide2(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update2(true);
    }
    function prependSlide2(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const $cachedEl = cache[cachedIndex];
          const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
          if (cachedElIndex) {
            $cachedEl.attr(
              "data-swiper-slide-index",
              parseInt(cachedElIndex, 10) + numberOfNewSlides
            );
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update2(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide2(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null)
        return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update2(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides2() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update2(true);
      swiper.slideTo(0, 0);
    }
    on2("beforeInit", () => {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.slides = swiper.params.virtual.slides;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      if (!swiper.params.initialSlide) {
        update2();
      }
    });
    on2("setTranslate", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update2();
        }, 100);
      } else {
        update2();
      }
    });
    on2("init update resize", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(
          swiper.wrapperEl,
          "--swiper-virtual-size",
          `${swiper.virtualSize}px`
        );
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide2,
      prependSlide: prependSlide2,
      removeSlide: removeSlide2,
      removeAllSlides: removeAllSlides2,
      update: update2,
    });
  }
  function Keyboard({ swiper, extendParams, on: on2, emit }) {
    const document2 = getDocument();
    const window2 = getWindow();
    swiper.keyboard = {
      enabled: false,
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true,
      },
    });
    function handle(event2) {
      if (!swiper.enabled) return;
      const { rtlTranslate: rtl } = swiper;
      let e = event2;
      if (e.originalEvent) e = e.originalEvent;
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (
        !swiper.allowSlideNext &&
        ((swiper.isHorizontal() && isArrowRight) ||
          (swiper.isVertical() && isArrowDown) ||
          isPageDown)
      ) {
        return false;
      }
      if (
        !swiper.allowSlidePrev &&
        ((swiper.isHorizontal() && isArrowLeft) ||
          (swiper.isVertical() && isArrowUp) ||
          isPageUp)
      ) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return void 0;
      }
      if (
        document2.activeElement &&
        document2.activeElement.nodeName &&
        (document2.activeElement.nodeName.toLowerCase() === "input" ||
          document2.activeElement.nodeName.toLowerCase() === "textarea")
      ) {
        return void 0;
      }
      if (
        swiper.params.keyboard.onlyInViewport &&
        (isPageUp ||
          isPageDown ||
          isArrowLeft ||
          isArrowRight ||
          isArrowUp ||
          isArrowDown)
      ) {
        let inView = false;
        if (
          swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 &&
          swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0
        ) {
          return void 0;
        }
        const $el = swiper.$el;
        const swiperWidth = $el[0].clientWidth;
        const swiperHeight = $el[0].clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = swiper.$el.offset();
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
          [swiperOffset.left, swiperOffset.top],
          [swiperOffset.left + swiperWidth, swiperOffset.top],
          [swiperOffset.left, swiperOffset.top + swiperHeight],
          [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight],
        ];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (
            point[0] >= 0 &&
            point[0] <= windowWidth &&
            point[1] >= 0 &&
            point[1] <= windowHeight
          ) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (
          ((isPageDown || isArrowRight) && !rtl) ||
          ((isPageUp || isArrowLeft) && rtl)
        )
          swiper.slideNext();
        if (
          ((isPageUp || isArrowLeft) && !rtl) ||
          ((isPageDown || isArrowRight) && rtl)
        )
          swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      $(document2).on("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      $(document2).off("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on2("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable,
    });
  }
  function Mousewheel({ swiper, extendParams, on: on2, emit }) {
    const window2 = getWindow();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
      },
    });
    swiper.mousewheel = {
      enabled: false,
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize2(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY,
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (
        swiper.params.mousewheel.thresholdDelta &&
        newEvent.delta < swiper.params.mousewheel.thresholdDelta
      ) {
        return false;
      }
      if (
        swiper.params.mousewheel.thresholdTime &&
        now() - lastScrollTime < swiper.params.mousewheel.thresholdTime
      ) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if (
        (!swiper.isBeginning || swiper.params.loop) &&
        !swiper.animating
      ) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (
        swiper.isBeginning &&
        !swiper.params.loop &&
        params.releaseOnEdges
      ) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = $(swiper.params.mousewheel.eventsTarget);
      }
      if (
        !swiper.mouseEntered &&
        !target[0].contains(e.target) &&
        !params.releaseOnEdges
      )
        return true;
      if (e.originalEvent) e = e.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize2(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY))
            delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX))
          delta = -data.pixelY;
        else return true;
      } else {
        delta =
          Math.abs(data.pixelX) > Math.abs(data.pixelY)
            ? -data.pixelX * rtlFactor
            : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop
        ? true
        : !(
            positions === swiper.minTranslate() ||
            positions === swiper.maxTranslate()
          );
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2,
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length
          ? recentWheelEvents[recentWheelEvents.length - 1]
          : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (
            newEvent.direction !== prevEvent.direction ||
            newEvent.delta > prevEvent.delta ||
            newEvent.time > prevEvent.time + 150
          ) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
        };
        const ignoreWheelEvents =
          lastEventBeforeSnap &&
          newEvent.time < lastEventBeforeSnap.time + 500 &&
          newEvent.delta <= lastEventBeforeSnap.delta &&
          newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          if (swiper.params.loop) {
            swiper.loopFix();
          }
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate())
            position = swiper.minTranslate();
          if (position <= swiper.maxTranslate())
            position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (
            (!wasBeginning && swiper.isBeginning) ||
            (!wasEnd && swiper.isEnd)
          ) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length
              ? recentWheelEvents[recentWheelEvents.length - 1]
              : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (
              prevEvent &&
              (newEvent.delta > prevEvent.delta ||
                newEvent.direction !== prevEvent.direction)
            ) {
              recentWheelEvents.splice(0);
            } else if (
              recentWheelEvents.length >= 15 &&
              newEvent.time - firstEvent.time < 500 &&
              firstEvent.delta - newEvent.delta >= 1 &&
              newEvent.delta <= 6
            ) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  void 0,
                  snapToThreshold
                );
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(
                  swiper.params.speed,
                  true,
                  void 0,
                  snapToThreshold
                );
              }, 500);
            }
          }
          if (!ignoreWheelEvents) emit("scroll", e);
          if (
            swiper.params.autoplay &&
            swiper.params.autoplayDisableOnInteraction
          )
            swiper.autoplay.stop();
          if (
            position === swiper.minTranslate() ||
            position === swiper.maxTranslate()
          )
            return true;
        }
      }
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    }
    function events2(method) {
      let target = swiper.$el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        target = $(swiper.params.mousewheel.eventsTarget);
      }
      target[method]("mouseenter", handleMouseEnter);
      target[method]("mouseleave", handleMouseLeave);
      target[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events2("on");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events2("off");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on2("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on2("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable,
    });
  }
  function createElementIfNotDefined(
    swiper,
    originalParams,
    params,
    checkProps
  ) {
    const document2 = getDocument();
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = swiper.$el.children(`.${checkProps[key]}`)[0];
          if (!element) {
            element = document2.createElement("div");
            element.className = checkProps[key];
            swiper.$el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }
  function Navigation({ swiper, extendParams, on: on2, emit }) {
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    });
    swiper.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    };
    function getEl(el) {
      let $el;
      if (el) {
        $el = $(el);
        if (
          swiper.params.uniqueNavElements &&
          typeof el === "string" &&
          $el.length > 1 &&
          swiper.$el.find(el).length === 1
        ) {
          $el = swiper.$el.find(el);
        }
      }
      return $el;
    }
    function toggleEl($el, disabled) {
      const params = swiper.params.navigation;
      if ($el && $el.length > 0) {
        $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
        if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
      }
    }
    function update2() {
      if (swiper.params.loop) return;
      const { $nextEl, $prevEl } = swiper.navigation;
      toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(
        swiper,
        swiper.originalParams.navigation,
        swiper.params.navigation,
        {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }
      );
      if (!(params.nextEl || params.prevEl)) return;
      const $nextEl = getEl(params.nextEl);
      const $prevEl = getEl(params.prevEl);
      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on("click", onNextClick);
      }
      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on("click", onPrevClick);
      }
      Object.assign(swiper.navigation, {
        $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl,
        prevEl: $prevEl && $prevEl[0],
      });
      if (!swiper.enabled) {
        if ($nextEl) $nextEl.addClass(params.lockClass);
        if ($prevEl) $prevEl.addClass(params.lockClass);
      }
    }
    function destroy() {
      const { $nextEl, $prevEl } = swiper.navigation;
      if ($nextEl && $nextEl.length) {
        $nextEl.off("click", onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }
      if ($prevEl && $prevEl.length) {
        $prevEl.off("click", onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
    on2("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on2("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      const { $nextEl, $prevEl } = swiper.navigation;
      if ($nextEl) {
        $nextEl[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.navigation.lockClass
        );
      }
      if ($prevEl) {
        $prevEl[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.navigation.lockClass
        );
      }
    });
    on2("click", (_s, e) => {
      const { $nextEl, $prevEl } = swiper.navigation;
      const targetEl = e.target;
      if (
        swiper.params.navigation.hideOnClick &&
        !$(targetEl).is($prevEl) &&
        !$(targetEl).is($nextEl)
      ) {
        if (
          swiper.pagination &&
          swiper.params.pagination &&
          swiper.params.pagination.clickable &&
          (swiper.pagination.el === targetEl ||
            swiper.pagination.el.contains(targetEl))
        )
          return;
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
      init();
      update2();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy,
    });
  }
  function classesToSelector(classes2 = "") {
    return `.${classes2
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Pagination({ swiper, extendParams, on: on2, emit }) {
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`,
      },
    });
    swiper.pagination = {
      el: null,
      $el: null,
      bullets: [],
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return (
        !swiper.params.pagination.el ||
        !swiper.pagination.el ||
        !swiper.pagination.$el ||
        swiper.pagination.$el.length === 0
      );
    }
    function setSideBullets($bulletEl, position) {
      const { bulletActiveClass } = swiper.params.pagination;
      $bulletEl[position]()
        .addClass(`${bulletActiveClass}-${position}`)
        [position]()
        .addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let current;
      const total = swiper.params.loop
        ? Math.ceil(
            (slidesLength - swiper.loopedSlides * 2) /
              swiper.params.slidesPerGroup
          )
        : swiper.snapGrid.length;
      if (swiper.params.loop) {
        current = Math.ceil(
          (swiper.activeIndex - swiper.loopedSlides) /
            swiper.params.slidesPerGroup
        );
        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }
        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== "bullets")
          current = total + current;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      }
      if (
        params.type === "bullets" &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length > 0
      ) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = bullets
            .eq(0)
            [swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
          $el.css(
            swiper.isHorizontal() ? "width" : "height",
            `${bulletSize * (params.dynamicMainBullets + 4)}px`
          );
          if (
            params.dynamicMainBullets > 1 &&
            swiper.previousIndex !== void 0
          ) {
            dynamicBulletIndex +=
              current - (swiper.previousIndex - swiper.loopedSlides || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex =
            firstIndex +
            (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((suffix) => `${params.bulletActiveClass}${suffix}`)
            .join(" ")
        );
        if ($el.length > 1) {
          bullets.each((bullet) => {
            const $bullet = $(bullet);
            const bulletIndex = $bullet.index();
            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(`${params.bulletActiveClass}-main`);
              }
              if (bulletIndex === firstIndex) {
                setSideBullets($bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets($bullet, "next");
              }
            }
          });
        } else {
          const $bullet = bullets.eq(current);
          const bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);
          if (params.dynamicBullets) {
            const $firstDisplayedBullet = bullets.eq(firstIndex);
            const $lastDisplayedBullet = bullets.eq(lastIndex);
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
            }
            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length) {
                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                  bullets
                    .eq(bullets.length - i)
                    .addClass(`${params.bulletActiveClass}-main`);
                }
                bullets
                  .eq(bullets.length - params.dynamicMainBullets - 1)
                  .addClass(`${params.bulletActiveClass}-prev`);
              } else {
                setSideBullets($firstDisplayedBullet, "prev");
                setSideBullets($lastDisplayedBullet, "next");
              }
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(
            bullets.length,
            params.dynamicMainBullets + 4
          );
          const bulletsOffset =
            (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
            midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.css(
            swiper.isHorizontal() ? offsetProp : "top",
            `${bulletsOffset}px`
          );
        }
      }
      if (params.type === "fraction") {
        $el
          .find(classesToSelector(params.currentClass))
          .text(params.formatFractionCurrent(current + 1));
        $el
          .find(classesToSelector(params.totalClass))
          .text(params.formatFractionTotal(total));
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal()
            ? "vertical"
            : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal()
            ? "horizontal"
            : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        $el
          .find(classesToSelector(params.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`)
          .transition(swiper.params.speed);
      }
      if (params.type === "custom" && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        emit("paginationRender", $el[0]);
      } else {
        emit("paginationUpdate", $el[0]);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength =
        swiper.virtual && swiper.params.virtual.enabled
          ? swiper.virtual.slides.length
          : swiper.slides.length;
      const $el = swiper.pagination.$el;
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop
          ? Math.ceil(
              (slidesLength - swiper.loopedSlides * 2) /
                swiper.params.slidesPerGroup
            )
          : swiper.snapGrid.length;
        if (
          swiper.params.freeMode &&
          swiper.params.freeMode.enabled &&
          !swiper.params.loop &&
          numberOfBullets > slidesLength
        ) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(
              swiper,
              i,
              params.bulletClass
            );
          } else {
            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(
          classesToSelector(params.bulletClass)
        );
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(
            swiper,
            params.currentClass,
            params.totalClass
          );
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(
            swiper,
            params.progressbarFillClass
          );
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
        $el.html(paginationHTML);
      }
      if (params.type !== "custom") {
        emit("paginationRender", swiper.pagination.$el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(
        swiper,
        swiper.originalParams.pagination,
        swiper.params.pagination,
        {
          el: "swiper-pagination",
        }
      );
      const params = swiper.params.pagination;
      if (!params.el) return;
      let $el = $(params.el);
      if ($el.length === 0) return;
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1
      ) {
        $el = swiper.$el.find(params.el);
        if ($el.length > 1) {
          $el = $el.filter((el) => {
            if ($(el).parents(".swiper")[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (params.type === "bullets" && params.clickable) {
        $el.addClass(params.clickableClass);
      }
      $el.addClass(params.modifierClass + params.type);
      $el.addClass(
        swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
      );
      if (params.type === "bullets" && params.dynamicBullets) {
        $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        $el.on(
          "click",
          classesToSelector(params.bulletClass),
          function onClick2(e) {
            e.preventDefault();
            let index2 = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index2 += swiper.loopedSlides;
            swiper.slideTo(index2);
          }
        );
      }
      Object.assign(swiper.pagination, {
        $el,
        el: $el[0],
      });
      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      $el.removeClass(
        swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
      );
      if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
        swiper.pagination.bullets.removeClass(params.bulletActiveClass);
      if (params.clickable) {
        $el.off("click", classesToSelector(params.bulletClass));
      }
    }
    on2("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on2("activeIndexChange", () => {
      if (swiper.params.loop) {
        update2();
      } else if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on2("snapIndexChange", () => {
      if (!swiper.params.loop) {
        update2();
      }
    });
    on2("slidesLengthChange", () => {
      if (swiper.params.loop) {
        render();
        update2();
      }
    });
    on2("snapGridLengthChange", () => {
      if (!swiper.params.loop) {
        render();
        update2();
      }
    });
    on2("destroy", () => {
      destroy();
    });
    on2("enable disable", () => {
      const { $el } = swiper.pagination;
      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.pagination.lockClass
        );
      }
    });
    on2("lock unlock", () => {
      update2();
    });
    on2("click", (_s, e) => {
      const targetEl = e.target;
      const { $el } = swiper.pagination;
      if (
        swiper.params.pagination.el &&
        swiper.params.pagination.hideOnClick &&
        $el &&
        $el.length > 0 &&
        !$(targetEl).hasClass(swiper.params.pagination.bulletClass)
      ) {
        if (
          swiper.navigation &&
          ((swiper.navigation.nextEl &&
            targetEl === swiper.navigation.nextEl) ||
            (swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        )
          return;
        const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        $el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.removeClass(
          swiper.params.pagination.paginationDisabledClass
        );
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
      if (swiper.pagination.$el) {
        swiper.pagination.$el.addClass(
          swiper.params.pagination.paginationDisabledClass
        );
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy,
    });
  }
  function Scrollbar({ swiper, extendParams, on: on2, emit }) {
    const document2 = getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: `swiper-scrollbar-horizontal`,
        verticalClass: `swiper-scrollbar-vertical`,
      },
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null,
      $el: null,
      $dragEl: null,
    };
    function setTranslate2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const { scrollbar, rtlTranslate: rtl, progress } = swiper;
      const { $dragEl, $el } = scrollbar;
      const params = swiper.params.scrollbar;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
        $dragEl[0].style.width = `${newSize}px`;
      } else {
        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
        $dragEl[0].style.height = `${newSize}px`;
      }
      if (params.hide) {
        clearTimeout(timeout);
        $el[0].style.opacity = 1;
        timeout = setTimeout(() => {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const { scrollbar } = swiper;
      const { $dragEl, $el } = scrollbar;
      $dragEl[0].style.width = "";
      $dragEl[0].style.height = "";
      trackSize = swiper.isHorizontal()
        ? $el[0].offsetWidth
        : $el[0].offsetHeight;
      divider =
        swiper.size /
        (swiper.virtualSize +
          swiper.params.slidesOffsetBefore -
          (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = `${dragSize}px`;
      } else {
        $dragEl[0].style.height = `${dragSize}px`;
      }
      if (divider >= 1) {
        $el[0].style.display = "none";
      } else {
        $el[0].style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](
          swiper.params.scrollbar.lockClass
        );
      }
    }
    function getPointerPosition(e) {
      if (swiper.isHorizontal()) {
        return e.type === "touchstart" || e.type === "touchmove"
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      return e.type === "touchstart" || e.type === "touchmove"
        ? e.targetTouches[0].clientY
        : e.clientY;
    }
    function setDragPosition(e) {
      const { scrollbar, rtlTranslate: rtl } = swiper;
      const { $el } = scrollbar;
      let positionRatio;
      positionRatio =
        (getPointerPosition(e) -
          $el.offset()[swiper.isHorizontal() ? "left" : "top"] -
          (dragStartPos !== null ? dragStartPos : dragSize / 2)) /
        (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position =
        swiper.minTranslate() +
        (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const { scrollbar, $wrapperEl } = swiper;
      const { $el, $dragEl } = scrollbar;
      isTouched = true;
      dragStartPos =
        e.target === $dragEl[0] || e.target === $dragEl
          ? getPointerPosition(e) -
            e.target.getBoundingClientRect()[
              swiper.isHorizontal() ? "left" : "top"
            ]
          : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      setDragPosition(e);
      clearTimeout(dragTimeout);
      $el.transition(0);
      if (params.hide) {
        $el.css("opacity", 1);
      }
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "none");
      }
      emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      const { scrollbar, $wrapperEl } = swiper;
      const { $el, $dragEl } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const { scrollbar, $wrapperEl } = swiper;
      const { $el } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css("scroll-snap-type", "");
        $wrapperEl.transition("");
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          $el.css("opacity", 0);
          $el.transition(400);
        }, 1e3);
      }
      emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        touchEventsTouch,
        touchEventsDesktop,
        params,
        support: support2,
      } = swiper;
      const $el = scrollbar.$el;
      if (!$el) return;
      const target = $el[0];
      const activeListener =
        support2.passiveListener && params.passiveListeners
          ? {
              passive: false,
              capture: false,
            }
          : false;
      const passiveListener =
        support2.passiveListener && params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      if (!target) return;
      const eventMethod =
        method === "on" ? "addEventListener" : "removeEventListener";
      if (!support2.touch) {
        target[eventMethod](
          touchEventsDesktop.start,
          onDragStart,
          activeListener
        );
        document2[eventMethod](
          touchEventsDesktop.move,
          onDragMove,
          activeListener
        );
        document2[eventMethod](
          touchEventsDesktop.end,
          onDragEnd,
          passiveListener
        );
      } else {
        target[eventMethod](
          touchEventsTouch.start,
          onDragStart,
          activeListener
        );
        target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
        target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
      }
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("off");
    }
    function init() {
      const { scrollbar, $el: $swiperEl } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(
        swiper,
        swiper.originalParams.scrollbar,
        swiper.params.scrollbar,
        {
          el: "swiper-scrollbar",
        }
      );
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let $el = $(params.el);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.el === "string" &&
        $el.length > 1 &&
        $swiperEl.find(params.el).length === 1
      ) {
        $el = $swiperEl.find(params.el);
      }
      $el.addClass(
        swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
      );
      let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
      if ($dragEl.length === 0) {
        $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
        $el.append($dragEl);
      }
      Object.assign(scrollbar, {
        $el,
        el: $el[0],
        $dragEl,
        dragEl: $dragEl[0],
      });
      if (params.draggable) {
        enableDraggable();
      }
      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.scrollbar.lockClass
        );
      }
    }
    function destroy() {
      const params = swiper.params.scrollbar;
      const $el = swiper.scrollbar.$el;
      if ($el) {
        $el.removeClass(
          swiper.isHorizontal() ? params.horizontalClass : params.verticalClass
        );
      }
      disableDraggable();
    }
    on2("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on2("update resize observerUpdate lock unlock", () => {
      updateSize2();
    });
    on2("setTranslate", () => {
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on2("enable disable", () => {
      const { $el } = swiper.scrollbar;
      if ($el) {
        $el[swiper.enabled ? "removeClass" : "addClass"](
          swiper.params.scrollbar.lockClass
        );
      }
    });
    on2("destroy", () => {
      destroy();
    });
    const enable = () => {
      swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.$el) {
        swiper.scrollbar.$el.removeClass(
          swiper.params.scrollbar.scrollbarDisabledClass
        );
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
      if (swiper.scrollbar.$el) {
        swiper.scrollbar.$el.addClass(
          swiper.params.scrollbar.scrollbarDisabledClass
        );
      }
      destroy();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy,
    });
  }
  function Parallax({ swiper, extendParams, on: on2 }) {
    extendParams({
      parallax: {
        enabled: false,
      },
    });
    const setTransform = (el, progress) => {
      const { rtl } = swiper;
      const $el = $(el);
      const rtlFactor = rtl ? -1 : 1;
      const p = $el.attr("data-swiper-parallax") || "0";
      let x = $el.attr("data-swiper-parallax-x");
      let y = $el.attr("data-swiper-parallax-y");
      const scale = $el.attr("data-swiper-parallax-scale");
      const opacity = $el.attr("data-swiper-parallax-opacity");
      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }
      if (x.indexOf("%") >= 0) {
        x = `${parseInt(x, 10) * progress * rtlFactor}%`;
      } else {
        x = `${x * progress * rtlFactor}px`;
      }
      if (y.indexOf("%") >= 0) {
        y = `${parseInt(y, 10) * progress}%`;
      } else {
        y = `${y * progress}px`;
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity =
          opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }
      if (typeof scale === "undefined" || scale === null) {
        $el.transform(`translate3d(${x}, ${y}, 0px)`);
      } else {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
      }
    };
    const setTranslate2 = () => {
      const { $el, slides, progress, snapGrid } = swiper;
      $el
        .children(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each((el) => {
          setTransform(el, progress);
        });
      slides.each((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (
          swiper.params.slidesPerGroup > 1 &&
          swiper.params.slidesPerView !== "auto"
        ) {
          slideProgress +=
            Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl)
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((el) => {
            setTransform(el, slideProgress);
          });
      });
    };
    const setTransition2 = (duration = swiper.params.speed) => {
      const { $el } = swiper;
      $el
        .find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        )
        .each((parallaxEl) => {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration =
            parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) ||
            duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
    };
    on2("beforeInit", () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on2("init", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTranslate", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTransition", (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition2(duration);
    });
  }
  function Zoom({ swiper, extendParams, on: on2, emit }) {
    const window2 = getWindow();
    extendParams({
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    });
    swiper.zoom = {
      enabled: false,
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
      $slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      $imageEl: void 0,
      $imageWrapEl: void 0,
      maxRatio: 3,
    };
    const image = {
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
    };
    const velocity = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : void 0;
          const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : void 0;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      },
    });
    function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      const x1 = e.targetTouches[0].pageX;
      const y1 = e.targetTouches[0].pageY;
      const x2 = e.targetTouches[1].pageX;
      const y2 = e.targetTouches[1].pageY;
      const distance = Math.sqrt(__pow(x2 - x1, 2) + __pow(y2 - y1, 2));
      return distance;
    }
    function onGestureStart(e) {
      const support2 = swiper.support;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!support2.gestures) {
        if (
          e.type !== "touchstart" ||
          (e.type === "touchstart" && e.targetTouches.length < 2)
        ) {
          return;
        }
        fakeGestureTouched = true;
        gesture.scaleStart = getDistanceBetweenTouches(e);
      }
      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
        if (gesture.$slideEl.length === 0)
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl
          .find(`.${params.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          `.${params.containerClass}`
        );
        gesture.maxRatio =
          gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = void 0;
          return;
        }
      }
      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      const support2 = swiper.support;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      if (!support2.gestures) {
        if (
          e.type !== "touchmove" ||
          (e.type === "touchmove" && e.targetTouches.length < 2)
        ) {
          return;
        }
        fakeGestureMoved = true;
        gesture.scaleMove = getDistanceBetweenTouches(e);
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        if (e.type === "gesturechange") onGestureStart(e);
        return;
      }
      if (support2.gestures) {
        zoom.scale = e.scale * currentScale;
      } else {
        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * currentScale;
      }
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale =
          gesture.maxRatio - 1 + __pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale =
          params.minRatio + 1 - __pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
      const device = swiper.device;
      const support2 = swiper.support;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      if (!support2.gestures) {
        if (!fakeGestureTouched || !fakeGestureMoved) {
          return;
        }
        if (
          e.type !== "touchend" ||
          (e.type === "touchend" &&
            e.changedTouches.length < 2 &&
            !device.android)
        ) {
          return;
        }
        fakeGestureTouched = false;
        fakeGestureMoved = false;
      }
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(
        Math.min(zoom.scale, gesture.maxRatio),
        params.minRatio
      );
      gesture.$imageEl
        .transition(swiper.params.speed)
        .transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = void 0;
    }
    function onTouchStart2(e) {
      const device = swiper.device;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x =
        e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y =
        e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove2(e) {
      const zoom = swiper.zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;
      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = getTranslate(gesture.$imageWrapEl[0], "x") || 0;
        image.startY = getTranslate(gesture.$imageWrapEl[0], "y") || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      if (
        scaledWidth < gesture.slideWidth &&
        scaledHeight < gesture.slideHeight
      )
        return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x =
        e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y =
        e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
      if (!image.isMoved && !isScaling) {
        if (
          swiper.isHorizontal() &&
          ((Math.floor(image.minX) === Math.floor(image.startX) &&
            image.touchesCurrent.x < image.touchesStart.x) ||
            (Math.floor(image.maxX) === Math.floor(image.startX) &&
              image.touchesCurrent.x > image.touchesStart.x))
        ) {
          image.isTouched = false;
          return;
        }
        if (
          !swiper.isHorizontal() &&
          ((Math.floor(image.minY) === Math.floor(image.startY) &&
            image.touchesCurrent.y < image.touchesStart.y) ||
            (Math.floor(image.maxY) === Math.floor(image.startY) &&
              image.touchesCurrent.y > image.touchesStart.y))
        ) {
          image.isTouched = false;
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      image.isMoved = true;
      image.currentX =
        image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY =
        image.touchesCurrent.y - image.touchesStart.y + image.startY;
      if (image.currentX < image.minX) {
        image.currentX =
          image.minX + 1 - __pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX =
          image.maxX - 1 + __pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY =
          image.minY + 1 - __pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY =
          image.maxY - 1 + __pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX)
        velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY)
        velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x =
        (image.touchesCurrent.x - velocity.prevPositionX) /
        (Date.now() - velocity.prevTime) /
        2;
      velocity.y =
        (image.touchesCurrent.y - velocity.prevPositionY) /
        (Date.now() - velocity.prevTime) /
        2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2)
        velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2)
        velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform(
        `translate3d(${image.currentX}px, ${image.currentY}px,0)`
      );
    }
    function onTouchEnd2() {
      const zoom = swiper.zoom;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0)
        momentumDurationX = Math.abs(
          (newPositionX - image.currentX) / velocity.x
        );
      if (velocity.y !== 0)
        momentumDurationY = Math.abs(
          (newPositionY - image.currentY) / velocity.y
        );
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(
        Math.min(image.currentX, image.maxX),
        image.minX
      );
      image.currentY = Math.max(
        Math.min(image.currentY, image.maxY),
        image.minY
      );
      gesture.$imageWrapEl
        .transition(momentumDuration)
        .transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
        }
        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform("translate3d(0,0,0)");
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$slideEl = void 0;
        gesture.$imageEl = void 0;
        gesture.$imageWrapEl = void 0;
      }
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.$slideEl) {
        if (e && e.target) {
          gesture.$slideEl = $(e.target).closest(
            `.${swiper.params.slideClass}`
          );
        }
        if (!gesture.$slideEl) {
          if (
            swiper.params.virtual &&
            swiper.params.virtual.enabled &&
            swiper.virtual
          ) {
            gesture.$slideEl = swiper.$wrapperEl.children(
              `.${swiper.params.slideActiveClass}`
            );
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
        }
        gesture.$imageEl = gesture.$slideEl
          .find(`.${params.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          `.${params.containerClass}`
        );
      }
      if (
        !gesture.$imageEl ||
        gesture.$imageEl.length === 0 ||
        !gesture.$imageWrapEl ||
        gesture.$imageWrapEl.length === 0
      )
        return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.touchAction = "none";
      }
      gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      zoom.scale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      currentScale =
        gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left + window2.scrollX;
        offsetY = gesture.$slideEl.offset().top + window2.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      gesture.$imageWrapEl
        .transition(300)
        .transform(`translate3d(${translateX}px, ${translateY}px,0)`);
      gesture.$imageEl
        .transition(300)
        .transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.$slideEl) {
        if (
          swiper.params.virtual &&
          swiper.params.virtual.enabled &&
          swiper.virtual
        ) {
          gesture.$slideEl = swiper.$wrapperEl.children(
            `.${swiper.params.slideActiveClass}`
          );
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
        gesture.$imageEl = gesture.$slideEl
          .find(`.${params.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0);
        gesture.$imageWrapEl = gesture.$imageEl.parent(
          `.${params.containerClass}`
        );
      }
      if (
        !gesture.$imageEl ||
        gesture.$imageEl.length === 0 ||
        !gesture.$imageWrapEl ||
        gesture.$imageWrapEl.length === 0
      )
        return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
      gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
      gesture.$slideEl = void 0;
    }
    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoomOut();
      } else {
        zoomIn(e);
      }
    }
    function getListeners() {
      const support2 = swiper.support;
      const passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        support2.passiveListener &&
        swiper.params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      const activeListenerWithCapture = support2.passiveListener
        ? {
            passive: false,
            capture: true,
          }
        : true;
      return {
        passiveListener,
        activeListenerWithCapture,
      };
    }
    function getSlideSelector() {
      return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
      const { passiveListener } = getListeners();
      const slideSelector = getSlideSelector();
      swiper.$wrapperEl[method](
        "gesturestart",
        slideSelector,
        onGestureStart,
        passiveListener
      );
      swiper.$wrapperEl[method](
        "gesturechange",
        slideSelector,
        onGestureChange,
        passiveListener
      );
      swiper.$wrapperEl[method](
        "gestureend",
        slideSelector,
        onGestureEnd,
        passiveListener
      );
    }
    function enableGestures() {
      if (gesturesEnabled) return;
      gesturesEnabled = true;
      toggleGestures("on");
    }
    function disableGestures() {
      if (!gesturesEnabled) return;
      gesturesEnabled = false;
      toggleGestures("off");
    }
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const support2 = swiper.support;
      const { passiveListener, activeListenerWithCapture } = getListeners();
      const slideSelector = getSlideSelector();
      if (support2.gestures) {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          enableGestures,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          disableGestures,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.on(
          swiper.touchEvents.start,
          slideSelector,
          onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.move,
          slideSelector,
          onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.on(
          swiper.touchEvents.end,
          slideSelector,
          onGestureEnd,
          passiveListener
        );
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(
            swiper.touchEvents.cancel,
            slideSelector,
            onGestureEnd,
            passiveListener
          );
        }
      }
      swiper.$wrapperEl.on(
        swiper.touchEvents.move,
        `.${swiper.params.zoom.containerClass}`,
        onTouchMove2,
        activeListenerWithCapture
      );
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      const support2 = swiper.support;
      zoom.enabled = false;
      const { passiveListener, activeListenerWithCapture } = getListeners();
      const slideSelector = getSlideSelector();
      if (support2.gestures) {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          enableGestures,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          disableGestures,
          passiveListener
        );
      } else if (swiper.touchEvents.start === "touchstart") {
        swiper.$wrapperEl.off(
          swiper.touchEvents.start,
          slideSelector,
          onGestureStart,
          passiveListener
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.move,
          slideSelector,
          onGestureChange,
          activeListenerWithCapture
        );
        swiper.$wrapperEl.off(
          swiper.touchEvents.end,
          slideSelector,
          onGestureEnd,
          passiveListener
        );
        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(
            swiper.touchEvents.cancel,
            slideSelector,
            onGestureEnd,
            passiveListener
          );
        }
      }
      swiper.$wrapperEl.off(
        swiper.touchEvents.move,
        `.${swiper.params.zoom.containerClass}`,
        onTouchMove2,
        activeListenerWithCapture
      );
    }
    on2("init", () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      disable();
    });
    on2("touchStart", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart2(e);
    });
    on2("touchEnd", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd2();
    });
    on2("doubleTap", (_s, e) => {
      if (
        !swiper.animating &&
        swiper.params.zoom.enabled &&
        swiper.zoom.enabled &&
        swiper.params.zoom.toggle
      ) {
        zoomToggle(e);
      }
    });
    on2("transitionEnd", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on2("slideChange", () => {
      if (
        swiper.zoom.enabled &&
        swiper.params.zoom.enabled &&
        swiper.params.cssMode
      ) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle,
    });
  }
  function Lazy({ swiper, extendParams, on: on2, emit }) {
    extendParams({
      lazy: {
        checkInView: false,
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    });
    swiper.lazy = {};
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index2, loadInDuplicate = true) {
      const params = swiper.params.lazy;
      if (typeof index2 === "undefined") return;
      if (swiper.slides.length === 0) return;
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      const $slideEl = isVirtual
        ? swiper.$wrapperEl.children(
            `.${swiper.params.slideClass}[data-swiper-slide-index="${index2}"]`
          )
        : swiper.slides.eq(index2);
      const $images = $slideEl.find(
        `.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`
      );
      if (
        $slideEl.hasClass(params.elementClass) &&
        !$slideEl.hasClass(params.loadedClass) &&
        !$slideEl.hasClass(params.loadingClass)
      ) {
        $images.push($slideEl[0]);
      }
      if ($images.length === 0) return;
      $images.each((imageEl) => {
        const $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        const background = $imageEl.attr("data-background");
        const src = $imageEl.attr("data-src");
        const srcset = $imageEl.attr("data-srcset");
        const sizes = $imageEl.attr("data-sizes");
        const $pictureEl = $imageEl.parent("picture");
        swiper.loadImage(
          $imageEl[0],
          src || background,
          srcset,
          sizes,
          false,
          () => {
            if (
              typeof swiper === "undefined" ||
              swiper === null ||
              !swiper ||
              (swiper && !swiper.params) ||
              swiper.destroyed
            )
              return;
            if (background) {
              $imageEl.css("background-image", `url("${background}")`);
              $imageEl.removeAttr("data-background");
            } else {
              if (srcset) {
                $imageEl.attr("srcset", srcset);
                $imageEl.removeAttr("data-srcset");
              }
              if (sizes) {
                $imageEl.attr("sizes", sizes);
                $imageEl.removeAttr("data-sizes");
              }
              if ($pictureEl.length) {
                $pictureEl.children("source").each((sourceEl) => {
                  const $source = $(sourceEl);
                  if ($source.attr("data-srcset")) {
                    $source.attr("srcset", $source.attr("data-srcset"));
                    $source.removeAttr("data-srcset");
                  }
                });
              }
              if (src) {
                $imageEl.attr("src", src);
                $imageEl.removeAttr("data-src");
              }
            }
            $imageEl
              .addClass(params.loadedClass)
              .removeClass(params.loadingClass);
            $slideEl.find(`.${params.preloaderClass}`).remove();
            if (swiper.params.loop && loadInDuplicate) {
              const slideOriginalIndex = $slideEl.attr(
                "data-swiper-slide-index"
              );
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                const originalSlide = swiper.$wrapperEl.children(
                  `[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`
                );
                loadInSlide(originalSlide.index(), false);
              } else {
                const duplicatedSlide = swiper.$wrapperEl.children(
                  `.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`
                );
                loadInSlide(duplicatedSlide.index(), false);
              }
            }
            emit("lazyImageReady", $slideEl[0], $imageEl[0]);
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          }
        );
        emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
      });
    }
    function load() {
      const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
      const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      const params = swiperParams.lazy;
      let slidesPerView = swiperParams.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = 0;
      }
      function slideExist(index2) {
        if (isVirtual) {
          if (
            $wrapperEl.children(
              `.${swiperParams.slideClass}[data-swiper-slide-index="${index2}"]`
            ).length
          ) {
            return true;
          }
        } else if (slides[index2]) return true;
        return false;
      }
      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr("data-swiper-slide-index");
        }
        return $(slideEl).index();
      }
      if (!initialImageLoaded) initialImageLoaded = true;
      if (swiper.params.watchSlidesProgress) {
        $wrapperEl
          .children(`.${swiperParams.slideVisibleClass}`)
          .each((slideEl) => {
            const index2 = isVirtual
              ? $(slideEl).attr("data-swiper-slide-index")
              : $(slideEl).index();
            loadInSlide(index2);
          });
      } else if (slidesPerView > 1) {
        for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        loadInSlide(activeIndex);
      }
      if (params.loadPrevNext) {
        if (
          slidesPerView > 1 ||
          (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)
        ) {
          const amount = params.loadPrevNextAmount;
          const spv = Math.ceil(slidesPerView);
          const maxIndex = Math.min(
            activeIndex + spv + Math.max(amount, spv),
            slides.length
          );
          const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
          for (let i = activeIndex + spv; i < maxIndex; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
          for (let i = minIndex; i < activeIndex; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          const nextSlide = $wrapperEl.children(
            `.${swiperParams.slideNextClass}`
          );
          if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
          const prevSlide = $wrapperEl.children(
            `.${swiperParams.slidePrevClass}`
          );
          if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
        }
      }
    }
    function checkInViewOnLoad() {
      const window2 = getWindow();
      if (!swiper || swiper.destroyed) return;
      const $scrollElement = swiper.params.lazy.scrollingElement
        ? $(swiper.params.lazy.scrollingElement)
        : $(window2);
      const isWindow = $scrollElement[0] === window2;
      const scrollElementWidth = isWindow
        ? window2.innerWidth
        : $scrollElement[0].offsetWidth;
      const scrollElementHeight = isWindow
        ? window2.innerHeight
        : $scrollElement[0].offsetHeight;
      const swiperOffset = swiper.$el.offset();
      const { rtlTranslate: rtl } = swiper;
      let inView = false;
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (
          point[0] >= 0 &&
          point[0] <= scrollElementWidth &&
          point[1] >= 0 &&
          point[1] <= scrollElementHeight
        ) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      const passiveListener =
        swiper.touchEvents.start === "touchstart" &&
        swiper.support.passiveListener &&
        swiper.params.passiveListeners
          ? {
              passive: true,
              capture: false,
            }
          : false;
      if (inView) {
        load();
        $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
      } else if (!scrollHandlerAttached) {
        scrollHandlerAttached = true;
        $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
      }
    }
    on2("beforeInit", () => {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    });
    on2("init", () => {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on2("scroll", () => {
      if (
        swiper.params.freeMode &&
        swiper.params.freeMode.enabled &&
        !swiper.params.freeMode.sticky
      ) {
        load();
      }
    });
    on2("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on2("transitionStart", () => {
      if (swiper.params.lazy.enabled) {
        if (
          swiper.params.lazy.loadOnTransitionStart ||
          (!swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded)
        ) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      }
    });
    on2("transitionEnd", () => {
      if (
        swiper.params.lazy.enabled &&
        !swiper.params.lazy.loadOnTransitionStart
      ) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on2("slideChange", () => {
      const {
        lazy,
        cssMode,
        watchSlidesProgress,
        touchReleaseOnEdges,
        resistanceRatio,
      } = swiper.params;
      if (
        lazy.enabled &&
        (cssMode ||
          (watchSlidesProgress &&
            (touchReleaseOnEdges || resistanceRatio === 0)))
      ) {
        load();
      }
    });
    on2("destroy", () => {
      if (!swiper.$el) return;
      swiper.$el
        .find(`.${swiper.params.lazy.loadingClass}`)
        .removeClass(swiper.params.lazy.loadingClass);
    });
    Object.assign(swiper.lazy, {
      load,
      loadInSlide,
    });
  }
  function Controller({ swiper, extendParams, on: on2 }) {
    extendParams({
      controller: {
        control: void 0,
        inverse: false,
        by: "slide",
        // or 'container'
      },
    });
    swiper.controller = {
      control: void 0,
    };
    function LinearSpline(x, y) {
      const binarySearch = /* @__PURE__ */ (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = (maxIndex + minIndex) >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      let i1;
      let i3;
      this.interpolate = function interpolate2(x2) {
        if (!x2) return 0;
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
        return (
          ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) /
            (this.x[i3] - this.x[i1]) +
          this.y[i1]
        );
      };
      return this;
    }
    function getInterpolateFunction(c) {
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop
          ? new LinearSpline(swiper.slidesGrid, c.slidesGrid)
          : new LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    }
    function setTranslate2(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper2 = swiper.constructor;
      function setControlledTranslate(c) {
        const translate2 = swiper.rtlTranslate
          ? -swiper.translate
          : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          getInterpolateFunction(c);
          controlledTranslate = -swiper.controller.spline.interpolate(
            -translate2
          );
        }
        if (
          !controlledTranslate ||
          swiper.params.controller.by === "container"
        ) {
          multiplier =
            (c.maxTranslate() - c.minTranslate()) /
            (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate =
            (translate2 - swiper.minTranslate()) * multiplier +
            c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper2
          ) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition2(duration, byController) {
      const Swiper2 = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          c.$wrapperEl.transitionEnd(() => {
            if (!controlled) return;
            if (c.params.loop && swiper.params.controller.by === "slide") {
              c.loopFix();
            }
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (
            controlled[i] !== byController &&
            controlled[i] instanceof Swiper2
          ) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    }
    on2("beforeInit", () => {
      swiper.controller.control = swiper.params.controller.control;
    });
    on2("update", () => {
      removeSpline();
    });
    on2("resize", () => {
      removeSpline();
    });
    on2("observerUpdate", () => {
      removeSpline();
    });
    on2("setTranslate", (_s, translate2, byController) => {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate2, byController);
    });
    on2("setTransition", (_s, duration, byController) => {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate2,
      setTransition: setTransition2,
    });
  }
  function A11y({ swiper, extendParams, on: on2 }) {
    extendParams({
      a11y: {
        enabled: true,
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
    });
    swiper.a11y = {
      clicked: false,
    };
    let liveRegion = null;
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.html("");
      notification.html(message);
    }
    function getRandomNumber(size = 16) {
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
      $el.attr("tabIndex", "0");
    }
    function makeElNotFocusable($el) {
      $el.attr("tabIndex", "-1");
    }
    function addElRole($el, role) {
      $el.attr("role", role);
    }
    function addElRoleDescription($el, description) {
      $el.attr("aria-roledescription", description);
    }
    function addElControls($el, controls) {
      $el.attr("aria-controls", controls);
    }
    function addElLabel($el, label) {
      $el.attr("aria-label", label);
    }
    function addElId($el, id) {
      $el.attr("id", id);
    }
    function addElLive($el, live) {
      $el.attr("aria-live", live);
    }
    function disableEl($el) {
      $el.attr("aria-disabled", true);
    }
    function enableEl($el) {
      $el.attr("aria-disabled", false);
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const $targetEl = $(e.target);
      if (
        swiper.navigation &&
        swiper.navigation.$nextEl &&
        $targetEl.is(swiper.navigation.$nextEl)
      ) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (
        swiper.navigation &&
        swiper.navigation.$prevEl &&
        $targetEl.is(swiper.navigation.$prevEl)
      ) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
      if (
        swiper.pagination &&
        $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))
      ) {
        $targetEl[0].click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation)
        return;
      const { $nextEl, $prevEl } = swiper.navigation;
      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          disableEl($prevEl);
          makeElNotFocusable($prevEl);
        } else {
          enableEl($prevEl);
          makeElFocusable($prevEl);
        }
      }
      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          disableEl($nextEl);
          makeElNotFocusable($nextEl);
        } else {
          enableEl($nextEl);
          makeElFocusable($nextEl);
        }
      }
    }
    function hasPagination() {
      return (
        swiper.pagination &&
        swiper.pagination.bullets &&
        swiper.pagination.bullets.length
      );
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.each((bulletEl) => {
        const $bulletEl = $(bulletEl);
        if (swiper.params.pagination.clickable) {
          makeElFocusable($bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole($bulletEl, "button");
            addElLabel(
              $bulletEl,
              params.paginationBulletMessage.replace(
                /\{\{index\}\}/,
                $bulletEl.index() + 1
              )
            );
          }
        }
        if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
          $bulletEl.attr("aria-current", "true");
        } else {
          $bulletEl.removeAttr("aria-current");
        }
      });
    }
    const initNavEl = ($el, wrapperId, message) => {
      makeElFocusable($el);
      if ($el[0].tagName !== "BUTTON") {
        addElRole($el, "button");
        $el.on("keydown", onEnterOrSpaceKey);
      }
      addElLabel($el, message);
      addElControls($el, wrapperId);
    };
    const handlePointerDown = () => {
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const handleFocus = (e) => {
      if (swiper.a11y.clicked) return;
      const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible =
        swiper.params.watchSlidesProgress &&
        swiper.visibleSlides &&
        swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(
          $(swiper.slides),
          params.itemRoleDescriptionMessage
        );
      }
      if (params.slideRole) {
        addElRole($(swiper.slides), params.slideRole);
      }
      const slidesLength = swiper.params.loop
        ? swiper.slides.filter(
            (el) => !el.classList.contains(swiper.params.slideDuplicateClass)
          ).length
        : swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.each((slideEl, index2) => {
          const $slideEl = $(slideEl);
          const slideIndex = swiper.params.loop
            ? parseInt($slideEl.attr("data-swiper-slide-index"), 10)
            : index2;
          const ariaLabelMessage = params.slideLabelMessage
            .replace(/\{\{index\}\}/, slideIndex + 1)
            .replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel($slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.$el.append(liveRegion);
      const $containerEl = swiper.$el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(
          $containerEl,
          params.containerRoleDescriptionMessage
        );
      }
      if (params.containerMessage) {
        addElLabel($containerEl, params.containerMessage);
      }
      const $wrapperEl = swiper.$wrapperEl;
      const wrapperId =
        params.id ||
        $wrapperEl.attr("id") ||
        `swiper-wrapper-${getRandomNumber(16)}`;
      const live =
        swiper.params.autoplay && swiper.params.autoplay.enabled
          ? "off"
          : "polite";
      addElId($wrapperEl, wrapperId);
      addElLive($wrapperEl, live);
      initSlides();
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl && $nextEl.length) {
        initNavEl($nextEl, wrapperId, params.nextSlideMessage);
      }
      if ($prevEl && $prevEl.length) {
        initNavEl($prevEl, wrapperId, params.prevSlideMessage);
      }
      if (hasClickablePagination()) {
        swiper.pagination.$el.on(
          "keydown",
          classesToSelector(swiper.params.pagination.bulletClass),
          onEnterOrSpaceKey
        );
      }
      swiper.$el.on("focus", handleFocus, true);
      swiper.$el.on("pointerdown", handlePointerDown, true);
      swiper.$el.on("pointerup", handlePointerUp, true);
    };
    function destroy() {
      if (liveRegion && liveRegion.length > 0) liveRegion.remove();
      let $nextEl;
      let $prevEl;
      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }
      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }
      if ($nextEl) {
        $nextEl.off("keydown", onEnterOrSpaceKey);
      }
      if ($prevEl) {
        $prevEl.off("keydown", onEnterOrSpaceKey);
      }
      if (hasClickablePagination()) {
        swiper.pagination.$el.off(
          "keydown",
          classesToSelector(swiper.params.pagination.bulletClass),
          onEnterOrSpaceKey
        );
      }
      swiper.$el.off("focus", handleFocus, true);
      swiper.$el.off("pointerdown", handlePointerDown, true);
      swiper.$el.off("pointerup", handlePointerUp, true);
    }
    on2("beforeInit", () => {
      liveRegion = $(
        `<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    });
    on2("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on2(
      "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
      () => {
        if (!swiper.params.a11y.enabled) return;
        initSlides();
      }
    );
    on2("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on2("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on2("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy();
    });
  }
  function History({ swiper, extendParams, on: on2 }) {
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false,
      },
    });
    let initialized = false;
    let paths = {};
    const slugify = (text2) => {
      return text2
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window2 = getWindow();
      let location2;
      if (urlOverride) {
        location2 = new URL(urlOverride);
      } else {
        location2 = window2.location;
      }
      const pathArray = location2.pathname
        .slice(1)
        .split("/")
        .filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value,
      };
    };
    const setHistory = (key, index2) => {
      const window2 = getWindow();
      if (!initialized || !swiper.params.history.enabled) return;
      let location2;
      if (swiper.params.url) {
        location2 = new URL(swiper.params.url);
      } else {
        location2 = window2.location;
      }
      const slide2 = swiper.slides.eq(index2);
      let value = slugify(slide2.attr("data-history"));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === "/")
          root = root.slice(0, root.length - 1);
        value = `${root}/${key}/${value}`;
      } else if (!location2.pathname.includes(key)) {
        value = `${key}/${value}`;
      }
      if (swiper.params.history.keepQuery) {
        value += location2.search;
      }
      const currentState = window2.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window2.history.replaceState(
          {
            value,
          },
          null,
          value
        );
      } else {
        window2.history.pushState(
          {
            value,
          },
          null,
          value
        );
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide2 = swiper.slides.eq(i);
          const slideHistory = slugify(slide2.attr("data-history"));
          if (
            slideHistory === value &&
            !slide2.hasClass(swiper.params.slideDuplicateClass)
          ) {
            const index2 = slide2.index();
            swiper.slideTo(index2, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window2 = getWindow();
      if (!swiper.params.history) return;
      if (!window2.history || !window2.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) return;
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy = () => {
      const window2 = getWindow();
      if (!swiper.params.history.replaceState) {
        window2.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on2("init", () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.history.enabled) {
        destroy();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }
  function HashNavigation({ swiper, extendParams, emit, on: on2 }) {
    let initialized = false;
    const document2 = getDocument();
    const window2 = getWindow();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
      },
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document2.location.hash.replace("#", "");
      const activeSlideHash = swiper.slides
        .eq(swiper.activeIndex)
        .attr("data-hash");
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.$wrapperEl
          .children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`)
          .index();
        if (typeof newIndex === "undefined") return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      if (
        swiper.params.hashNavigation.replaceState &&
        window2.history &&
        window2.history.replaceState
      ) {
        window2.history.replaceState(
          null,
          null,
          `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || ""
        );
        emit("hashSet");
      } else {
        const slide2 = swiper.slides.eq(swiper.activeIndex);
        const hash = slide2.attr("data-hash") || slide2.attr("data-history");
        document2.location.hash = hash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (
        !swiper.params.hashNavigation.enabled ||
        (swiper.params.history && swiper.params.history.enabled)
      )
        return;
      initialized = true;
      const hash = document2.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide2 = swiper.slides.eq(i);
          const slideHash =
            slide2.attr("data-hash") || slide2.attr("data-history");
          if (
            slideHash === hash &&
            !slide2.hasClass(swiper.params.slideDuplicateClass)
          ) {
            const index2 = slide2.index();
            swiper.slideTo(
              index2,
              speed,
              swiper.params.runCallbacksOnInit,
              true
            );
          }
        }
      }
      if (swiper.params.hashNavigation.watchState) {
        $(window2).on("hashchange", onHashChange);
      }
    };
    const destroy = () => {
      if (swiper.params.hashNavigation.watchState) {
        $(window2).off("hashchange", onHashChange);
      }
    };
    on2("init", () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }
  function Autoplay({ swiper, extendParams, on: on2, emit }) {
    let timeout;
    swiper.autoplay = {
      running: false,
      paused: false,
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false,
      },
    });
    function run() {
      if (!swiper.size) {
        swiper.autoplay.running = false;
        swiper.autoplay.paused = false;
        return;
      }
      const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      let delay = swiper.params.autoplay.delay;
      if ($activeSlideEl.attr("data-swiper-autoplay")) {
        delay =
          $activeSlideEl.attr("data-swiper-autoplay") ||
          swiper.params.autoplay.delay;
      }
      clearTimeout(timeout);
      timeout = nextTick(() => {
        let autoplayResult;
        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit("autoplay");
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(
              swiper.slides.length - 1,
              swiper.params.speed,
              true,
              true
            );
            emit("autoplay");
          } else {
            stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
        if (swiper.params.cssMode && swiper.autoplay.running) run();
        else if (autoplayResult === false) {
          run();
        }
      }, delay);
    }
    function start() {
      if (typeof timeout !== "undefined") return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      emit("autoplayStart");
      run();
      return true;
    }
    function stop() {
      if (!swiper.autoplay.running) return false;
      if (typeof timeout === "undefined") return false;
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
      swiper.autoplay.running = false;
      emit("autoplayStop");
      return true;
    }
    function pause(speed) {
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (timeout) clearTimeout(timeout);
      swiper.autoplay.paused = true;
      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        run();
      } else {
        ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
          swiper.$wrapperEl[0].addEventListener(event2, onTransitionEnd);
        });
      }
    }
    function onVisibilityChange() {
      const document2 = getDocument();
      if (document2.visibilityState === "hidden" && swiper.autoplay.running) {
        pause();
      }
      if (document2.visibilityState === "visible" && swiper.autoplay.paused) {
        run();
        swiper.autoplay.paused = false;
      }
    }
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
      if (e.target !== swiper.$wrapperEl[0]) return;
      ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
        swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
      });
      swiper.autoplay.paused = false;
      if (!swiper.autoplay.running) {
        stop();
      } else {
        run();
      }
    }
    function onMouseEnter() {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        emit("autoplayPause");
        pause();
      }
      ["transitionend", "webkitTransitionEnd"].forEach((event2) => {
        swiper.$wrapperEl[0].removeEventListener(event2, onTransitionEnd);
      });
    }
    function onMouseLeave() {
      if (swiper.params.autoplay.disableOnInteraction) {
        return;
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
      run();
    }
    function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on("mouseenter", onMouseEnter);
        swiper.$el.on("mouseleave", onMouseLeave);
      }
    }
    function detachMouseEvents() {
      swiper.$el.off("mouseenter", onMouseEnter);
      swiper.$el.off("mouseleave", onMouseLeave);
    }
    on2("init", () => {
      if (swiper.params.autoplay.enabled) {
        start();
        const document2 = getDocument();
        document2.addEventListener("visibilitychange", onVisibilityChange);
        attachMouseEvents();
      }
    });
    on2("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          stop();
        }
      }
    });
    on2("sliderFirstMove", () => {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          pause();
        }
      }
    });
    on2("touchEnd", () => {
      if (
        swiper.params.cssMode &&
        swiper.autoplay.paused &&
        !swiper.params.autoplay.disableOnInteraction
      ) {
        run();
      }
    });
    on2("destroy", () => {
      detachMouseEvents();
      if (swiper.autoplay.running) {
        stop();
      }
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
      pause,
      run,
      start,
      stop,
    });
  }
  function Thumb({ swiper, extendParams, on: on2 }) {
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null,
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (
        clickedSlide &&
        $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)
      )
        return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(
          $(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"),
          10
        );
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        let currentIndex = swiper.activeIndex;
        if (
          swiper.slides
            .eq(currentIndex)
            .hasClass(swiper.params.slideDuplicateClass)
        ) {
          swiper.loopFix();
          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }
        const prevIndex = swiper.slides
          .eq(currentIndex)
          .prevAll(`[data-swiper-slide-index="${slideToIndex}"]`)
          .eq(0)
          .index();
        const nextIndex = swiper.slides
          .eq(currentIndex)
          .nextAll(`[data-swiper-slide-index="${slideToIndex}"]`)
          .eq(0)
          .index();
        if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
        else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
        else if (nextIndex - currentIndex < currentIndex - prevIndex)
          slideToIndex = nextIndex;
        else slideToIndex = prevIndex;
      }
      swiper.slideTo(slideToIndex);
    }
    function init() {
      const { thumbs: thumbsParams } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
      } else if (isObject(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false,
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.$el.addClass(
        swiper.params.thumbs.thumbsContainerClass
      );
      swiper.thumbs.swiper.on("tap", onThumbClick);
      return true;
    }
    function update2(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView =
        thumbsSwiper.params.slidesPerView === "auto"
          ? thumbsSwiper.slidesPerViewDynamic()
          : thumbsSwiper.params.slidesPerView;
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.removeClass(thumbActiveClass);
      if (
        thumbsSwiper.params.loop ||
        (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)
      ) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl
            .children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`)
            .addClass(thumbActiveClass);
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.slides
            .eq(swiper.realIndex + i)
            .addClass(thumbActiveClass);
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        let currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          if (
            thumbsSwiper.slides
              .eq(currentThumbsIndex)
              .hasClass(thumbsSwiper.params.slideDuplicateClass)
          ) {
            thumbsSwiper.loopFix();
            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          }
          const prevThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
            .eq(0)
            .index();
          const nextThumbsIndex = thumbsSwiper.slides
            .eq(currentThumbsIndex)
            .nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`)
            .eq(0)
            .index();
          if (typeof prevThumbsIndex === "undefined") {
            newThumbsIndex = nextThumbsIndex;
          } else if (typeof nextThumbsIndex === "undefined") {
            newThumbsIndex = prevThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex ===
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex =
              thumbsSwiper.params.slidesPerGroup > 1
                ? nextThumbsIndex
                : currentThumbsIndex;
          } else if (
            nextThumbsIndex - currentThumbsIndex <
            currentThumbsIndex - prevThumbsIndex
          ) {
            newThumbsIndex = nextThumbsIndex;
          } else {
            newThumbsIndex = prevThumbsIndex;
          }
          direction =
            swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex +=
            direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (
          thumbsSwiper.visibleSlidesIndexes &&
          thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0
        ) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex =
                newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex =
                newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (
            newThumbsIndex > currentThumbsIndex &&
            thumbsSwiper.params.slidesPerGroup === 1
          );
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
        }
      }
    }
    on2("beforeInit", () => {
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      init();
      update2(true);
    });
    on2("slideChange update resize observerUpdate", () => {
      update2();
    });
    on2("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on2("beforeDestroy", () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update: update2,
    });
  }
  function freeMode({ swiper, extendParams, emit, once }) {
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02,
      },
    });
    function onTouchStart2() {
      const translate2 = swiper.getTranslate();
      swiper.setTranslate(translate2);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate,
      });
    }
    function onTouchMove2() {
      const { touchEventsData: data, touches } = swiper;
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime,
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now(),
      });
    }
    function onTouchEnd2({ currentPos }) {
      const {
        params,
        $wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data,
      } = swiper;
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1e3 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount =
          Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (
            Math.abs(snapGrid[nextSlide] - newPosition) <
              Math.abs(snapGrid[nextSlide - 1] - newPosition) ||
            swiper.swipeDirection === "next"
          ) {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once("transitionEnd", () => {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs(
              (-newPosition - swiper.translate) / swiper.velocity
            );
          } else {
            momentumDuration = Math.abs(
              (newPosition - swiper.translate) / swiper.velocity
            );
          }
          if (params.freeMode.sticky) {
            const moveDistance = Math.abs(
              (rtl ? -newPosition : newPosition) - swiper.translate
            );
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
              return;
            emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart2,
        onTouchMove: onTouchMove2,
        onTouchEnd: onTouchEnd2,
      },
    });
  }
  function Grid({ swiper, extendParams }) {
    extendParams({
      grid: {
        rows: 1,
        fill: "column",
      },
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength) => {
      const { slidesPerView } = swiper.params;
      const { rows, fill } = swiper.params.grid;
      slidesPerRow = slidesNumberEvenToRows / rows;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill === "row") {
        slidesNumberEvenToRows = Math.max(
          slidesNumberEvenToRows,
          slidesPerView * rows
        );
      }
    };
    const updateSlide = (i, slide2, slidesLength, getDirectionLabel) => {
      const { slidesPerGroup, spaceBetween } = swiper.params;
      const { rows, fill } = swiper.params.grid;
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup =
          groupIndex === 0
            ? slidesPerGroup
            : Math.min(
                Math.ceil(
                  (slidesLength - groupIndex * rows * slidesPerGroup) / rows
                ),
                slidesPerGroup
              );
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column =
          slideIndexInGroup -
          row * columnsInGroup +
          groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + (row * slidesNumberEvenToRows) / rows;
        slide2.css({
          "-webkit-order": newSlideOrderIndex,
          order: newSlideOrderIndex,
        });
      } else if (fill === "column") {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (
          column > numFullColumns ||
          (column === numFullColumns && row === rows - 1)
        ) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide2.css(
        getDirectionLabel("margin-top"),
        row !== 0 ? spaceBetween && `${spaceBetween}px` : ""
      );
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
      const { spaceBetween, centeredSlides, roundLengths } = swiper.params;
      const { rows } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      swiper.$wrapperEl.css({
        [getDirectionLabel("width")]: `${swiper.virtualSize + spaceBetween}px`,
      });
      if (centeredSlides) {
        snapGrid.splice(0, snapGrid.length);
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0])
            newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.push(...newSlidesGrid);
      }
    };
    swiper.grid = {
      initSlides,
      updateSlide,
      updateWrapperSize,
    };
  }
  function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl, params } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index2, slides) {
    const swiper = this;
    const { $wrapperEl, params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index2 <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index2 >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex =
      activeIndexBuffer > index2 ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index2; i -= 1) {
      const currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
      newActiveIndex =
        activeIndexBuffer > index2
          ? activeIndexBuffer + slides.length
          : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      $wrapperEl.append(slidesBuffer[i]);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove])
          swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove])
        swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation({ swiper }) {
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper),
    });
  }
  function effectInit(params) {
    const {
      effect,
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams,
    } = params;
    on2("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push(
        `${swiper.params.containerModifierClass}${effect}`
      );
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on2("setTranslate", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition2(duration);
    });
    on2("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper.slides.each((slideEl) => {
          const $slideEl = swiper.$(slideEl);
          $slideEl
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .remove();
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on2("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }
  function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) {
      return $slideEl.find(effectParams.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden",
      });
    }
    return $slideEl;
  }
  function effectVirtualTransitionEnd({
    swiper,
    duration,
    transformEl,
    allSlides,
  }) {
    const { slides, activeIndex, $wrapperEl } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let $transitionEndTarget;
      if (allSlides) {
        $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
      } else {
        $transitionEndTarget = transformEl
          ? slides.eq(activeIndex).find(transformEl)
          : slides.eq(activeIndex);
      }
      $transitionEndTarget.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ["webkitTransitionEnd", "transitionend"];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
  function EffectFade({ swiper, extendParams, on: on2 }) {
    extendParams({
      fadeEffect: {
        crossFade: false,
        transformEl: null,
      },
    });
    const setTranslate2 = () => {
      const { slides } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = swiper.slides.eq(i);
        const offset2 = $slideEl[0].swiperSlideOffset;
        let tx = -offset2;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade
          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl
          .css({
            opacity: slideOpacity,
          })
          .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
      }
    };
    const setTransition2 = (duration) => {
      const { transformEl } = swiper.params.fadeEffect;
      const $transitionElements = transformEl
        ? swiper.slides.find(transformEl)
        : swiper.slides;
      $transitionElements.transition(duration);
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformEl,
        allSlides: true,
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }
  function EffectCube({ swiper, extendParams, on: on2 }) {
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const createSlideShadows = ($slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal
        ? $slideEl.find(".swiper-slide-shadow-left")
        : $slideEl.find(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal
        ? $slideEl.find(".swiper-slide-shadow-right")
        : $slideEl.find(".swiper-slide-shadow-bottom");
      if (shadowBefore.length === 0) {
        shadowBefore = $(
          `<div class="swiper-slide-shadow-${
            isHorizontal ? "left" : "top"
          }"></div>`
        );
        $slideEl.append(shadowBefore);
      }
      if (shadowAfter.length === 0) {
        shadowAfter = $(
          `<div class="swiper-slide-shadow-${
            isHorizontal ? "right" : "bottom"
          }"></div>`
        );
        $slideEl.append(shadowAfter);
      }
      if (shadowBefore.length)
        shadowBefore[0].style.opacity = Math.max(-progress, 0);
      if (shadowAfter.length)
        shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.each((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows($(slideEl), progress, isHorizontal);
      });
    };
    const setTranslate2 = () => {
      const {
        $el,
        $wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser2,
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({
            height: `${swiperWidth}px`,
          });
        } else {
          $cubeShadowEl = $el.find(".swiper-cube-shadow");
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform2 = `rotateX(${
          isHorizontal ? 0 : -slideAngle
        }deg) rotateY(${
          isHorizontal ? slideAngle : 0
        }deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        $slideEl.transform(transform2);
        if (params.slideShadows) {
          createSlideShadows($slideEl, progress, isHorizontal);
        }
      }
      $wrapperEl.css({
        "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
        "transform-origin": `50% 50% -${swiperSize / 2}px`,
      });
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(
            `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${
              -swiperWidth / 2
            }px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`
          );
        } else {
          const shadowAngle =
            Math.abs(wrapperRotate) -
            Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier =
            1.5 -
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
              Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset2 = params.shadowOffset;
          $cubeShadowEl.transform(
            `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${
              swiperHeight / 2 + offset2
            }px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`
          );
        }
      }
      const zFactor =
        browser2.isSafari || browser2.isWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform(
        `translate3d(0px,0,${zFactor}px) rotateX(${
          swiper.isHorizontal() ? 0 : wrapperRotate
        }deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`
      );
      $wrapperEl[0].style.setProperty(
        "--swiper-cube-translate-z",
        `${zFactor}px`
      );
    };
    const setTransition2 = (duration) => {
      const { $el, slides } = swiper;
      slides
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find(".swiper-cube-shadow").transition(duration);
      }
    };
    effectInit({
      effect: "cube",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      }),
    });
  }
  function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
    const $shadowContainer = params.transformEl
      ? $slideEl.find(params.transformEl)
      : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
      $shadowEl = $(
        `<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`
      );
      $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
  }
  function EffectFlip({ swiper, extendParams, on: on2 }) {
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
        transformEl: null,
      },
    });
    const createSlideShadows = ($slideEl, progress, params) => {
      let shadowBefore = swiper.isHorizontal()
        ? $slideEl.find(".swiper-slide-shadow-left")
        : $slideEl.find(".swiper-slide-shadow-top");
      let shadowAfter = swiper.isHorizontal()
        ? $slideEl.find(".swiper-slide-shadow-right")
        : $slideEl.find(".swiper-slide-shadow-bottom");
      if (shadowBefore.length === 0) {
        shadowBefore = createShadow(
          params,
          $slideEl,
          swiper.isHorizontal() ? "left" : "top"
        );
      }
      if (shadowAfter.length === 0) {
        shadowAfter = createShadow(
          params,
          $slideEl,
          swiper.isHorizontal() ? "right" : "bottom"
        );
      }
      if (shadowBefore.length)
        shadowBefore[0].style.opacity = Math.max(-progress, 0);
      if (shadowAfter.length)
        shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const params = swiper.params.flipEffect;
      swiper.slides.each((slideEl) => {
        const $slideEl = $(slideEl);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows($slideEl, progress, params);
      });
    };
    const setTranslate2 = () => {
      const { slides, rtlTranslate: rtl } = swiper;
      const params = swiper.params.flipEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let progress = $slideEl[0].progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }
        const offset2 = $slideEl[0].swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset2 - swiper.translate : -offset2;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows($slideEl, progress, params);
        }
        const transform2 = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform2);
      }
    };
    const setTransition2 = (duration) => {
      const { transformEl } = swiper.params.flipEffect;
      const $transitionElements = transformEl
        ? swiper.slides.find(transformEl)
        : swiper.slides;
      $transitionElements
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformEl,
      });
    };
    effectInit({
      effect: "flip",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }
  function EffectCoverflow({ swiper, extendParams, on: on2 }) {
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true,
        transformEl: null,
      },
    });
    const setTranslate2 = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid,
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform2 = swiper.translate;
      const center = isHorizontal
        ? -transform2 + swiperWidth / 2
        : -transform2 + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate2 = params.depth;
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier =
          typeof params.modifier === "function"
            ? params.modifier(centerOffset)
            : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate2 * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = (parseFloat(params.stretch) / 100) * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        if (Math.abs(translateX) < 1e-3) translateX = 0;
        if (Math.abs(translateY) < 1e-3) translateY = 0;
        if (Math.abs(translateZ) < 1e-3) translateZ = 0;
        if (Math.abs(rotateY) < 1e-3) rotateY = 0;
        if (Math.abs(rotateX) < 1e-3) rotateX = 0;
        if (Math.abs(scale) < 1e-3) scale = 0;
        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let $shadowBeforeEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-left")
            : $slideEl.find(".swiper-slide-shadow-top");
          let $shadowAfterEl = isHorizontal
            ? $slideEl.find(".swiper-slide-shadow-right")
            : $slideEl.find(".swiper-slide-shadow-bottom");
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = createShadow(
              params,
              $slideEl,
              isHorizontal ? "left" : "top"
            );
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = createShadow(
              params,
              $slideEl,
              isHorizontal ? "right" : "bottom"
            );
          }
          if ($shadowBeforeEl.length)
            $shadowBeforeEl[0].style.opacity =
              offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length)
            $shadowAfterEl[0].style.opacity =
              -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition2 = (duration) => {
      const { transformEl } = swiper.params.coverflowEffect;
      const $transitionElements = transformEl
        ? swiper.slides.find(transformEl)
        : swiper.slides;
      $transitionElements
        .transition(duration)
        .find(
          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
        )
        .transition(duration);
    };
    effectInit({
      effect: "coverflow",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
      }),
    });
  }
  function EffectCreative({ swiper, extendParams, on: on2 }) {
    extendParams({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
      },
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return `${value}px`;
    };
    const setTranslate2 = () => {
      const { slides, $wrapperEl, slidesSizesGrid } = swiper;
      const params = swiper.params.creativeEffect;
      const { progressMultiplier: multiplier } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      if (isCenteredSlides) {
        const margin =
          slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
      }
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideProgress = $slideEl[0].progress;
        const progress = Math.min(
          Math.max($slideEl[0].progress, -params.limitProgress),
          params.limitProgress
        );
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(
            Math.max($slideEl[0].originalProgress, -params.limitProgress),
            params.limitProgress
          );
        }
        const offset2 = $slideEl[0].swiperSlideOffset;
        const t = [
          swiper.params.cssMode ? -offset2 - swiper.translate : -offset2,
          0,
          0,
        ];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        t.forEach((value, index2) => {
          t[index2] = `calc(${value}px + (${getTranslateValue(
            data.translate[index2]
          )} * ${Math.abs(progress * multiplier)}))`;
        });
        r.forEach((value, index2) => {
          r[index2] = data.rotate[index2] * Math.abs(progress * multiplier);
        });
        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(", ");
        const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
        const scaleString =
          originalProgress < 0
            ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})`
            : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
        const opacityString =
          originalProgress < 0
            ? 1 + (1 - data.opacity) * originalProgress * multiplier
            : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform2 = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
        if ((custom && data.shadow) || !custom) {
          let $shadowEl = $slideEl.children(".swiper-slide-shadow");
          if ($shadowEl.length === 0 && data.shadow) {
            $shadowEl = createShadow(params, $slideEl);
          }
          if ($shadowEl.length) {
            const shadowOpacity = params.shadowPerProgress
              ? progress * (1 / params.limitProgress)
              : progress;
            $shadowEl[0].style.opacity = Math.min(
              Math.max(Math.abs(shadowOpacity), 0),
              1
            );
          }
        }
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform2).css({
          opacity: opacityString,
        });
        if (data.origin) {
          $targetEl.css("transform-origin", data.origin);
        }
      }
    };
    const setTransition2 = (duration) => {
      const { transformEl } = swiper.params.creativeEffect;
      const $transitionElements = transformEl
        ? swiper.slides.find(transformEl)
        : swiper.slides;
      $transitionElements
        .transition(duration)
        .find(".swiper-slide-shadow")
        .transition(duration);
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformEl,
        allSlides: true,
      });
    };
    effectInit({
      effect: "creative",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }
  function EffectCards({ swiper, extendParams, on: on2 }) {
    extendParams({
      cardsEffect: {
        slideShadows: true,
        transformEl: null,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    });
    const setTranslate2 = () => {
      const { slides, activeIndex } = swiper;
      const params = swiper.params.cardsEffect;
      const { startTranslate, isTouched } = swiper.touchEventsData;
      const currentTranslate = swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideProgress = $slideEl[0].progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset2 = $slideEl[0].swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset2 -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset2 - swiper.translate : -offset2;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.from + i
            : i;
        const isSwipeToNext =
          (slideIndex === activeIndex || slideIndex === activeIndex - 1) &&
          progress > 0 &&
          progress < 1 &&
          (isTouched || swiper.params.cssMode) &&
          currentTranslate < startTranslate;
        const isSwipeToPrev =
          (slideIndex === activeIndex || slideIndex === activeIndex + 1) &&
          progress < 0 &&
          progress > -1 &&
          (isTouched || swiper.params.cssMode) &&
          currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = __pow(
            1 - Math.abs((Math.abs(progress) - 0.5) / 0.5),
            0.5
          );
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = `${-25 * subProgress * Math.abs(progress)}%`;
        }
        if (progress < 0) {
          tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
        } else if (progress > 0) {
          tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
        } else {
          tX = `${tX}px`;
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString =
          progress < 0
            ? `${1 + (1 - scale) * progress}`
            : `${1 - (1 - scale) * progress}`;
        const transform2 = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
        if (params.slideShadows) {
          let $shadowEl = $slideEl.find(".swiper-slide-shadow");
          if ($shadowEl.length === 0) {
            $shadowEl = createShadow(params, $slideEl);
          }
          if ($shadowEl.length)
            $shadowEl[0].style.opacity = Math.min(
              Math.max((Math.abs(progress) - 0.5) / 0.5, 0),
              1
            );
        }
        $slideEl[0].style.zIndex =
          -Math.abs(Math.round(slideProgress)) + slides.length;
        const $targetEl = effectTarget(params, $slideEl);
        $targetEl.transform(transform2);
      }
    };
    const setTransition2 = (duration) => {
      const { transformEl } = swiper.params.cardsEffect;
      const $transitionElements = transformEl
        ? swiper.slides.find(transformEl)
        : swiper.slides;
      $transitionElements
        .transition(duration)
        .find(".swiper-slide-shadow")
        .transition(duration);
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformEl,
      });
    };
    effectInit({
      effect: "cards",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode,
      }),
    });
  }
  const modules = [
    Virtual,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    Zoom,
    Lazy,
    Controller,
    A11y,
    History,
    HashNavigation,
    Autoplay,
    Thumb,
    freeMode,
    Grid,
    Manipulation,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow,
    EffectCreative,
    EffectCards,
  ];
  Swiper.use(modules);
  const initWorkSlider = () => {
    const workSlider = document.querySelector(
      ".swiper[work-slider='component']"
    );
    if (!workSlider) return;
    new Swiper(workSlider, {
      slidesPerView: "auto",
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      centeredSlides: false,
      autoHeight: false,
      speed: 600,
      grabCursor: true,
      parallax: true,
      loop: true,
      mousewheel: {
        forceToAxis: true,
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        scale: 0.9,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {},
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active",
    });
  };
  const homeInit = () => {
    console.log("homeInit");
    initVideoPlayer();
    initWorkSlider();
  };
  const queryElement = (selector2) => document.querySelector(selector2);
  const queryElements = (selector2) => document.querySelectorAll(selector2);
  const addClass = (el, className) => el.classList.add(className);
  const toggleClass = (el, className) => el.classList.toggle(className);
  const aboutInit = () => {
    const teamMembers = queryElements(".team-member");
    teamMembers.forEach((member) => {
      member.addEventListener("mouseenter", () => {
        var _a2;
        (_a2 = member.querySelector(".member-bio")) == null
          ? void 0
          : _a2.classList.add("is-visible");
      });
      member.addEventListener("mouseleave", () => {
        var _a2;
        (_a2 = member.querySelector(".member-bio")) == null
          ? void 0
          : _a2.classList.remove("is-visible");
      });
    });
  };
  const contactInit = () => {
    const form = queryElement(".contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted!");
    });
  };
  const routes = {
    home: homeInit,
    about: aboutInit,
    contact: contactInit,
    "extra-page": homeInit,
  };
  const PageRouter = () => {
    const routeElement = document.querySelector("[data-route]");
    if (!routeElement) {
      console.log("No element with data-route attribute found");
      return;
    }
    const route = routeElement.dataset.route;
    const initFunction = routes[route];
    if (initFunction) {
      initFunction();
    } else {
      console.log(`No specific script for route: ${route}`);
    }
  };
  const navigationInit = () => {
    const menuButton = queryElement(".menu-button");
    const navigation = queryElement(".navigation");
    if (!menuButton || !navigation) return;
    menuButton.addEventListener("click", () => {
      toggleClass(navigation, "is-open");
      toggleClass(menuButton, "is-active");
    });
  };
  const footerInit = () => {
    const accordions = queryElements(".footer-accordion");
    accordions.forEach((accordion) => {
      const trigger2 = accordion.querySelector(".accordion-trigger");
      const content = accordion.querySelector(".accordion-content");
      if (!trigger2 || !content) return;
      trigger2.addEventListener("click", () => {
        content.style.height = content.style.height
          ? ""
          : `${content.scrollHeight}px`;
      });
    });
  };
  class GradientFollow {
    constructor() {
      __publicField(this, "move", () => {
        this.curX += (this.tgX - this.curX) / 20;
        this.curY += (this.tgY - this.curY) / 20;
        this.interBubble.style.transform = `translate(${Math.round(
          this.curX
        )}px, ${Math.round(this.curY)}px)`;
        requestAnimationFrame(this.move);
      });
      __publicField(this, "handleMouseMove", (event2) => {
        this.tgX = event2.clientX;
        this.tgY = event2.clientY;
      });
      this.interBubble = document.querySelector(".interactive");
      this.curX = 0;
      this.curY = 0;
      this.tgX = 0;
      this.tgY = 0;
      this.init();
    }
    init() {
      window.addEventListener("mousemove", this.handleMouseMove);
      this.move();
    }
  }
  const initGradientFollow = () => {
    new GradientFollow();
  };
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /*!
   * GSAP 3.12.7
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: "",
      },
    },
    _defaults = {
      duration: 0.5,
      overwrite: false,
      delay: 0,
    },
    _suppressOverwrites,
    _reverting$1,
    _context,
    _bigNum$1 = 1e8,
    _tinyNum = 1 / _bigNum$1,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString2(value) {
      return typeof value === "string";
    },
    _isFunction = function _isFunction2(value) {
      return typeof value === "function";
    },
    _isNumber = function _isNumber2(value) {
      return typeof value === "number";
    },
    _isUndefined = function _isUndefined2(value) {
      return typeof value === "undefined";
    },
    _isObject = function _isObject2(value) {
      return typeof value === "object";
    },
    _isNotFalse = function _isNotFalse2(value) {
      return value !== false;
    },
    _windowExists$1 = function _windowExists2() {
      return typeof window !== "undefined";
    },
    _isFuncOrString = function _isFuncOrString2(value) {
      return _isFunction(value) || _isString(value);
    },
    _isTypedArray =
      (typeof ArrayBuffer === "function" && ArrayBuffer.isView) ||
      function () {},
    _isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    _relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win$1,
    _coreInitted,
    _doc$1,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install2(scope) {
      return (_installScope = _merge(scope, _globals)) && gsap;
    },
    _missingPlugin = function _missingPlugin2(property, value) {
      return console.warn(
        "Invalid property",
        property,
        "set to",
        value,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    _warn = function _warn2(message, suppress) {
      return !suppress && console.warn(message);
    },
    _addGlobal = function _addGlobal2(name, obj) {
      return (
        (name &&
          (_globals[name] = obj) &&
          _installScope &&
          (_installScope[name] = obj)) ||
        _globals
      );
    },
    _emptyFunc = function _emptyFunc2() {
      return 0;
    },
    _startAtRevertConfig = {
      suppressEvents: true,
      isStart: true,
      kill: false,
    },
    _revertConfigNoKill = {
      suppressEvents: true,
      kill: false,
    },
    _revertConfig = {
      suppressEvents: true,
    },
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness2(targets) {
      var target = targets[0],
        harnessPlugin,
        i;
      _isObject(target) || _isFunction(target) || (targets = [targets]);
      if (!(harnessPlugin = (target._gsap || {}).harness)) {
        i = _harnessPlugins.length;
        while (i-- && !_harnessPlugins[i].targetTest(target)) {}
        harnessPlugin = _harnessPlugins[i];
      }
      i = targets.length;
      while (i--) {
        (targets[i] &&
          (targets[i]._gsap ||
            (targets[i]._gsap = new GSCache(targets[i], harnessPlugin)))) ||
          targets.splice(i, 1);
      }
      return targets;
    },
    _getCache = function _getCache2(target) {
      return target._gsap || _harness(toArray(target))[0]._gsap;
    },
    _getProperty = function _getProperty2(target, property, v) {
      return (v = target[property]) && _isFunction(v)
        ? target[property]()
        : (_isUndefined(v) &&
            target.getAttribute &&
            target.getAttribute(property)) ||
            v;
    },
    _forEachName = function _forEachName2(names, func) {
      return (names = names.split(",")).forEach(func) || names;
    },
    _round = function _round2(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    },
    _roundPrecise = function _roundPrecise2(value) {
      return Math.round(value * 1e7) / 1e7 || 0;
    },
    _parseRelative = function _parseRelative2(start, value) {
      var operator = value.charAt(0),
        end = parseFloat(value.substr(2));
      start = parseFloat(start);
      return operator === "+"
        ? start + end
        : operator === "-"
        ? start - end
        : operator === "*"
        ? start * end
        : start / end;
    },
    _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
      var l = toFind.length,
        i = 0;
      for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {}
      return i < l;
    },
    _lazyRender = function _lazyRender2() {
      var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;
      _lazyLookup = {};
      _lazyTweens.length = 0;
      for (i = 0; i < l; i++) {
        tween = a[i];
        tween &&
          tween._lazy &&
          (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
      }
    },
    _lazySafeRender = function _lazySafeRender2(
      animation,
      time,
      suppressEvents,
      force
    ) {
      _lazyTweens.length && !_reverting$1 && _lazyRender();
      animation.render(
        time,
        suppressEvents,
        _reverting$1 && time < 0 && (animation._initted || animation._startAt)
      );
      _lazyTweens.length && !_reverting$1 && _lazyRender();
    },
    _numericIfPossible = function _numericIfPossible2(value) {
      var n = parseFloat(value);
      return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2
        ? n
        : _isString(value)
        ? value.trim()
        : value;
    },
    _passThrough = function _passThrough2(p) {
      return p;
    },
    _setDefaults = function _setDefaults2(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || (obj[p] = defaults2[p]);
      }
      return obj;
    },
    _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
      return function (obj, defaults2) {
        for (var p in defaults2) {
          p in obj ||
            (p === "duration" && excludeDuration) ||
            p === "ease" ||
            (obj[p] = defaults2[p]);
        }
      };
    },
    _merge = function _merge2(base2, toMerge) {
      for (var p in toMerge) {
        base2[p] = toMerge[p];
      }
      return base2;
    },
    _mergeDeep = function _mergeDeep2(base2, toMerge) {
      for (var p in toMerge) {
        p !== "__proto__" &&
          p !== "constructor" &&
          p !== "prototype" &&
          (base2[p] = _isObject(toMerge[p])
            ? _mergeDeep2(base2[p] || (base2[p] = {}), toMerge[p])
            : toMerge[p]);
      }
      return base2;
    },
    _copyExcluding = function _copyExcluding2(obj, excluding) {
      var copy = {},
        p;
      for (p in obj) {
        p in excluding || (copy[p] = obj[p]);
      }
      return copy;
    },
    _inheritDefaults = function _inheritDefaults2(vars) {
      var parent2 = vars.parent || _globalTimeline,
        func = vars.keyframes
          ? _setKeyframeDefaults(_isArray(vars.keyframes))
          : _setDefaults;
      if (_isNotFalse(vars.inherit)) {
        while (parent2) {
          func(vars, parent2.vars.defaults);
          parent2 = parent2.parent || parent2._dp;
        }
      }
      return vars;
    },
    _arraysMatch = function _arraysMatch2(a1, a2) {
      var i = a1.length,
        match = i === a2.length;
      while (match && i-- && a1[i] === a2[i]) {}
      return i < 0;
    },
    _addLinkedListItem = function _addLinkedListItem2(
      parent2,
      child,
      firstProp,
      lastProp,
      sortBy
    ) {
      var prev2 = parent2[lastProp],
        t;
      if (sortBy) {
        t = child[sortBy];
        while (prev2 && prev2[sortBy] > t) {
          prev2 = prev2._prev;
        }
      }
      if (prev2) {
        child._next = prev2._next;
        prev2._next = child;
      } else {
        child._next = parent2[firstProp];
        parent2[firstProp] = child;
      }
      if (child._next) {
        child._next._prev = child;
      } else {
        parent2[lastProp] = child;
      }
      child._prev = prev2;
      child.parent = child._dp = parent2;
      return child;
    },
    _removeLinkedListItem = function _removeLinkedListItem2(
      parent2,
      child,
      firstProp,
      lastProp
    ) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }
      if (lastProp === void 0) {
        lastProp = "_last";
      }
      var prev2 = child._prev,
        next2 = child._next;
      if (prev2) {
        prev2._next = next2;
      } else if (parent2[firstProp] === child) {
        parent2[firstProp] = next2;
      }
      if (next2) {
        next2._prev = prev2;
      } else if (parent2[lastProp] === child) {
        parent2[lastProp] = prev2;
      }
      child._next = child._prev = child.parent = null;
    },
    _removeFromParent = function _removeFromParent2(
      child,
      onlyIfParentHasAutoRemove
    ) {
      child.parent &&
        (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) &&
        child.parent.remove &&
        child.parent.remove(child);
      child._act = 0;
    },
    _uncache = function _uncache2(animation, child) {
      if (
        animation &&
        (!child || child._end > animation._dur || child._start < 0)
      ) {
        var a = animation;
        while (a) {
          a._dirty = 1;
          a = a.parent;
        }
      }
      return animation;
    },
    _recacheAncestors = function _recacheAncestors2(animation) {
      var parent2 = animation.parent;
      while (parent2 && parent2.parent) {
        parent2._dirty = 1;
        parent2.totalDuration();
        parent2 = parent2.parent;
      }
      return animation;
    },
    _rewindStartAt = function _rewindStartAt2(
      tween,
      totalTime,
      suppressEvents,
      force
    ) {
      return (
        tween._startAt &&
        (_reverting$1
          ? tween._startAt.revert(_revertConfigNoKill)
          : (tween.vars.immediateRender && !tween.vars.autoRevert) ||
            tween._startAt.render(totalTime, true, force))
      );
    },
    _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
      return (
        !animation ||
        (animation._ts && _hasNoPausedAncestors2(animation.parent))
      );
    },
    _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
      return animation._repeat
        ? _animationCycle(
            animation._tTime,
            (animation = animation.duration() + animation._rDelay)
          ) * animation
        : 0;
    },
    _animationCycle = function _animationCycle2(tTime, cycleDuration) {
      var whole = Math.floor((tTime = _roundPrecise(tTime / cycleDuration)));
      return tTime && whole === tTime ? whole - 1 : whole;
    },
    _parentToChildTotalTime = function _parentToChildTotalTime2(
      parentTime,
      child
    ) {
      return (
        (parentTime - child._start) * child._ts +
        (child._ts >= 0
          ? 0
          : child._dirty
          ? child.totalDuration()
          : child._tDur)
      );
    },
    _setEnd = function _setEnd2(animation) {
      return (animation._end = _roundPrecise(
        animation._start +
          (animation._tDur /
            Math.abs(animation._ts || animation._rts || _tinyNum) || 0)
      ));
    },
    _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
      var parent2 = animation._dp;
      if (parent2 && parent2.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(
          parent2._time -
            (animation._ts > 0
              ? totalTime / animation._ts
              : ((animation._dirty
                  ? animation.totalDuration()
                  : animation._tDur) -
                  totalTime) /
                -animation._ts)
        );
        _setEnd(animation);
        parent2._dirty || _uncache(parent2, animation);
      }
      return animation;
    },
    _postAddChecks = function _postAddChecks2(timeline, child) {
      var t;
      if (
        child._time ||
        (!child._dur && child._initted) ||
        (child._start < timeline._time && (child._dur || !child.add))
      ) {
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (
          !child._dur ||
          _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum
        ) {
          child.render(t, true);
        }
      }
      if (
        _uncache(timeline, child)._dp &&
        timeline._initted &&
        timeline._time >= timeline._dur &&
        timeline._ts
      ) {
        if (timeline._dur < timeline.duration()) {
          t = timeline;
          while (t._dp) {
            t.rawTime() >= 0 && t.totalTime(t._tTime);
            t = t._dp;
          }
        }
        timeline._zTime = -1e-8;
      }
    },
    _addToTimeline = function _addToTimeline2(
      timeline,
      child,
      position,
      skipChecks
    ) {
      child.parent && _removeFromParent(child);
      child._start = _roundPrecise(
        (_isNumber(position)
          ? position
          : position || timeline !== _globalTimeline
          ? _parsePosition(timeline, position, child)
          : timeline._time) + child._delay
      );
      child._end = _roundPrecise(
        child._start +
          (child.totalDuration() / Math.abs(child.timeScale()) || 0)
      );
      _addLinkedListItem(
        timeline,
        child,
        "_first",
        "_last",
        timeline._sort ? "_start" : 0
      );
      _isFromOrFromStart(child) || (timeline._recent = child);
      skipChecks || _postAddChecks(timeline, child);
      timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
      return timeline;
    },
    _scrollTrigger = function _scrollTrigger2(animation, trigger2) {
      return (
        (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger2)) &&
        _globals.ScrollTrigger.create(trigger2, animation)
      );
    },
    _attemptInitTween = function _attemptInitTween2(
      tween,
      time,
      force,
      suppressEvents,
      tTime
    ) {
      _initTween(tween, time, tTime);
      if (!tween._initted) {
        return 1;
      }
      if (
        !force &&
        tween._pt &&
        !_reverting$1 &&
        ((tween._dur && tween.vars.lazy !== false) ||
          (!tween._dur && tween.vars.lazy)) &&
        _lastRenderedFrame !== _ticker.frame
      ) {
        _lazyTweens.push(tween);
        tween._lazy = [tTime, suppressEvents];
        return 1;
      }
    },
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(
      _ref
    ) {
      var parent2 = _ref.parent;
      return (
        parent2 &&
        parent2._ts &&
        parent2._initted &&
        !parent2._lock &&
        (parent2.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent2))
      );
    },
    _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
      var data = _ref2.data;
      return data === "isFromStart" || data === "isStart";
    },
    _renderZeroDurationTween = function _renderZeroDurationTween2(
      tween,
      totalTime,
      suppressEvents,
      force
    ) {
      var prevRatio = tween.ratio,
        ratio =
          totalTime < 0 ||
          (!totalTime &&
            ((!tween._start &&
              _parentPlayheadIsBeforeStart(tween) &&
              !(!tween._initted && _isFromOrFromStart(tween))) ||
              ((tween._ts < 0 || tween._dp._ts < 0) &&
                !_isFromOrFromStart(tween))))
            ? 0
            : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;
      if (repeatDelay && tween._repeat) {
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
          prevRatio = 1 - ratio;
          tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
      }
      if (
        ratio !== prevRatio ||
        _reverting$1 ||
        force ||
        tween._zTime === _tinyNum ||
        (!totalTime && tween._zTime)
      ) {
        if (
          !tween._initted &&
          _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)
        ) {
          return;
        }
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
        suppressEvents || (suppressEvents = totalTime && !prevIteration);
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime &&
          tween._repeat &&
          !suppressEvents &&
          tween.parent &&
          _callback(tween, "onRepeat");
        if (
          (totalTime >= tween._tDur || totalTime < 0) &&
          tween.ratio === ratio
        ) {
          ratio && _removeFromParent(tween, 1);
          if (!suppressEvents && !_reverting$1) {
            _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
            tween._prom && tween._prom();
          }
        }
      } else if (!tween._zTime) {
        tween._zTime = totalTime;
      }
    },
    _findNextPauseTween = function _findNextPauseTween2(
      animation,
      prevTime,
      time
    ) {
      var child;
      if (time > prevTime) {
        child = animation._first;
        while (child && child._start <= time) {
          if (child.data === "isPause" && child._start > prevTime) {
            return child;
          }
          child = child._next;
        }
      } else {
        child = animation._last;
        while (child && child._start >= time) {
          if (child.data === "isPause" && child._start < prevTime) {
            return child;
          }
          child = child._prev;
        }
      }
    },
    _setDuration = function _setDuration2(
      animation,
      duration,
      skipUncache,
      leavePlayhead
    ) {
      var repeat = animation._repeat,
        dur = _roundPrecise(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
      totalProgress &&
        !leavePlayhead &&
        (animation._time *= dur / animation._dur);
      animation._dur = dur;
      animation._tDur = !repeat
        ? dur
        : repeat < 0
        ? 1e10
        : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
      totalProgress > 0 &&
        !leavePlayhead &&
        _alignPlayhead(
          animation,
          (animation._tTime = animation._tDur * totalProgress)
        );
      animation.parent && _setEnd(animation);
      skipUncache || _uncache(animation.parent, animation);
      return animation;
    },
    _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
      return animation instanceof Timeline
        ? _uncache(animation)
        : _setDuration(animation, animation._dur);
    },
    _zeroPosition = {
      _start: 0,
      endTime: _emptyFunc,
      totalDuration: _emptyFunc,
    },
    _parsePosition = function _parsePosition2(
      animation,
      position,
      percentAnimation
    ) {
      var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration =
          animation.duration() >= _bigNum$1
            ? recent.endTime(false)
            : animation._dur,
        i,
        offset2,
        isPercent;
      if (_isString(position) && (isNaN(position) || position in labels)) {
        offset2 = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset2 === "<" || offset2 === ">") {
          i >= 0 && (position = position.replace(/=/, ""));
          return (
            (offset2 === "<"
              ? recent._start
              : recent.endTime(recent._repeat >= 0)) +
            (parseFloat(position.substr(1)) || 0) *
              (isPercent
                ? (i < 0 ? recent : percentAnimation).totalDuration() / 100
                : 1)
          );
        }
        if (i < 0) {
          position in labels || (labels[position] = clippedDuration);
          return labels[position];
        }
        offset2 = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) {
          offset2 =
            (offset2 / 100) *
            (_isArray(percentAnimation)
              ? percentAnimation[0]
              : percentAnimation
            ).totalDuration();
        }
        return i > 1
          ? _parsePosition2(
              animation,
              position.substr(0, i - 1),
              percentAnimation
            ) + offset2
          : clippedDuration + offset2;
      }
      return position == null ? clippedDuration : +position;
    },
    _createTweenType = function _createTweenType2(type, params, timeline) {
      var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars,
        parent2;
      isLegacy && (vars.duration = params[1]);
      vars.parent = timeline;
      if (type) {
        irVars = vars;
        parent2 = timeline;
        while (parent2 && !("immediateRender" in irVars)) {
          irVars = parent2.vars.defaults || {};
          parent2 = _isNotFalse(parent2.vars.inherit) && parent2.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2
          ? (vars.runBackwards = 1)
          : (vars.startAt = params[varsIndex - 1]);
      }
      return new Tween(params[0], vars, params[varsIndex + 1]);
    },
    _conditionalReturn = function _conditionalReturn2(value, func) {
      return value || value === 0 ? func(value) : func;
    },
    _clamp = function _clamp2(min, max, value) {
      return value < min ? min : value > max ? max : value;
    },
    getUnit = function getUnit2(value, v) {
      return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
    },
    clamp = function clamp2(min, max, value) {
      return _conditionalReturn(value, function (v) {
        return _clamp(min, max, v);
      });
    },
    _slice = [].slice,
    _isArrayLike = function _isArrayLike2(value, nonEmpty) {
      return (
        value &&
        _isObject(value) &&
        "length" in value &&
        ((!nonEmpty && !value.length) ||
          (value.length - 1 in value && _isObject(value[0]))) &&
        !value.nodeType &&
        value !== _win$1
      );
    },
    _flatten = function _flatten2(ar, leaveStrings, accumulator) {
      if (accumulator === void 0) {
        accumulator = [];
      }
      return (
        ar.forEach(function (value) {
          var _accumulator;
          return (_isString(value) && !leaveStrings) || _isArrayLike(value, 1)
            ? (_accumulator = accumulator).push.apply(
                _accumulator,
                toArray(value)
              )
            : accumulator.push(value);
        }) || accumulator
      );
    },
    toArray = function toArray2(value, scope, leaveStrings) {
      return _context && !scope && _context.selector
        ? _context.selector(value)
        : _isString(value) && !leaveStrings && (_coreInitted || !_wake())
        ? _slice.call((scope || _doc$1).querySelectorAll(value), 0)
        : _isArray(value)
        ? _flatten(value, leaveStrings)
        : _isArrayLike(value)
        ? _slice.call(value, 0)
        : value
        ? [value]
        : [];
    },
    selector = function selector2(value) {
      value = toArray(value)[0] || _warn("Invalid scope") || {};
      return function (v) {
        var el = value.current || value.nativeElement || value;
        return toArray(
          v,
          el.querySelectorAll
            ? el
            : el === value
            ? _warn("Invalid scope") || _doc$1.createElement("div")
            : value
        );
      };
    },
    shuffle = function shuffle2(a) {
      return a.sort(function () {
        return 0.5 - Math.random();
      });
    },
    distribute = function distribute2(v) {
      if (_isFunction(v)) {
        return v;
      }
      var vars = _isObject(v)
          ? v
          : {
              each: v,
            },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base2 = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;
      if (_isString(from)) {
        ratioX = ratioY =
          {
            center: 0.5,
            edges: 0.5,
            end: 1,
          }[from] || 0;
      } else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
      }
      return function (i, target, a) {
        var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;
        if (!distances) {
          wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
          if (!wrapAt) {
            max = -1e8;
            while (
              max < (max = a[wrapAt++].getBoundingClientRect().left) &&
              wrapAt < l
            ) {}
            wrapAt < l && wrapAt--;
          }
          distances = cache[l] = [];
          originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
          originY =
            wrapAt === _bigNum$1
              ? 0
              : ratios
              ? (l * ratioY) / wrapAt - 0.5
              : (from / wrapAt) | 0;
          max = 0;
          min = _bigNum$1;
          for (j = 0; j < l; j++) {
            x = (j % wrapAt) - originX;
            y = originY - ((j / wrapAt) | 0);
            distances[j] = d = !axis
              ? _sqrt(x * x + y * y)
              : Math.abs(axis === "y" ? y : x);
            d > max && (max = d);
            d < min && (min = d);
          }
          from === "random" && shuffle(distances);
          distances.max = max - min;
          distances.min = min;
          distances.v = l =
            (parseFloat(vars.amount) ||
              parseFloat(vars.each) *
                (wrapAt > l
                  ? l - 1
                  : !axis
                  ? Math.max(wrapAt, l / wrapAt)
                  : axis === "y"
                  ? l / wrapAt
                  : wrapAt) ||
              0) * (from === "edges" ? -1 : 1);
          distances.b = l < 0 ? base2 - l : base2;
          distances.u = getUnit(vars.amount || vars.each) || 0;
          ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return (
          _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) +
          distances.u
        );
      };
    },
    _roundModifier = function _roundModifier2(v) {
      var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
      return function (raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - (n % 1)) / p + (_isNumber(raw) ? 0 : getUnit(raw));
      };
    },
    snap = function snap2(snapTo, value) {
      var isArray = _isArray(snapTo),
        radius,
        is2D;
      if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum$1;
        if (snapTo.values) {
          snapTo = toArray(snapTo.values);
          if ((is2D = !_isNumber(snapTo[0]))) {
            radius *= radius;
          }
        } else {
          snapTo = _roundModifier(snapTo.increment);
        }
      }
      return _conditionalReturn(
        value,
        !isArray
          ? _roundModifier(snapTo)
          : _isFunction(snapTo)
          ? function (raw) {
              is2D = snapTo(raw);
              return Math.abs(is2D - raw) <= radius ? is2D : raw;
            }
          : function (raw) {
              var x = parseFloat(is2D ? raw.x : raw),
                y = parseFloat(is2D ? raw.y : 0),
                min = _bigNum$1,
                closest2 = 0,
                i = snapTo.length,
                dx,
                dy;
              while (i--) {
                if (is2D) {
                  dx = snapTo[i].x - x;
                  dy = snapTo[i].y - y;
                  dx = dx * dx + dy * dy;
                } else {
                  dx = Math.abs(snapTo[i] - x);
                }
                if (dx < min) {
                  min = dx;
                  closest2 = i;
                }
              }
              closest2 = !radius || min <= radius ? snapTo[closest2] : raw;
              return is2D || closest2 === raw || _isNumber(raw)
                ? closest2
                : closest2 + getUnit(raw);
            }
      );
    },
    random = function random2(min, max, roundingIncrement, returnFunction) {
      return _conditionalReturn(
        _isArray(min)
          ? !max
          : roundingIncrement === true
          ? !!(roundingIncrement = 0)
          : !returnFunction,
        function () {
          return _isArray(min)
            ? min[~~(Math.random() * min.length)]
            : (roundingIncrement = roundingIncrement || 1e-5) &&
                (returnFunction =
                  roundingIncrement < 1
                    ? Math.pow(10, (roundingIncrement + "").length - 2)
                    : 1) &&
                Math.floor(
                  Math.round(
                    (min -
                      roundingIncrement / 2 +
                      Math.random() * (max - min + roundingIncrement * 0.99)) /
                      roundingIncrement
                  ) *
                    roundingIncrement *
                    returnFunction
                ) / returnFunction;
        }
      );
    },
    pipe = function pipe2() {
      for (
        var _len = arguments.length, functions = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        functions[_key] = arguments[_key];
      }
      return function (value) {
        return functions.reduce(function (v, f) {
          return f(v);
        }, value);
      };
    },
    unitize = function unitize2(func, unit) {
      return function (value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
      };
    },
    normalize = function normalize2(min, max, value) {
      return mapRange(min, max, 0, 1, value);
    },
    _wrapArray = function _wrapArray2(a, wrapper, value) {
      return _conditionalReturn(value, function (index2) {
        return a[~~wrapper(index2)];
      });
    },
    wrap = function wrap2(min, max, value) {
      var range = max - min;
      return _isArray(min)
        ? _wrapArray(min, wrap2(0, min.length), max)
        : _conditionalReturn(value, function (value2) {
            return ((range + ((value2 - min) % range)) % range) + min;
          });
    },
    wrapYoyo = function wrapYoyo2(min, max, value) {
      var range = max - min,
        total = range * 2;
      return _isArray(min)
        ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max)
        : _conditionalReturn(value, function (value2) {
            value2 = (total + ((value2 - min) % total)) % total || 0;
            return min + (value2 > range ? total - value2 : value2);
          });
    },
    _replaceRandom = function _replaceRandom2(value) {
      var prev2 = 0,
        s = "",
        i,
        nums,
        end,
        isArray;
      while (~(i = value.indexOf("random(", prev2))) {
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value
          .substr(i + 7, end - i - 7)
          .match(isArray ? _delimitedValueExp : _strictNumExp);
        s +=
          value.substr(prev2, i - prev2) +
          random(
            isArray ? nums : +nums[0],
            isArray ? 0 : +nums[1],
            +nums[2] || 1e-5
          );
        prev2 = end + 1;
      }
      return s + value.substr(prev2, value.length - prev2);
    },
    mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
      var inRange = inMax - inMin,
        outRange = outMax - outMin;
      return _conditionalReturn(value, function (value2) {
        return outMin + (((value2 - inMin) / inRange) * outRange || 0);
      });
    },
    interpolate = function interpolate2(start, end, progress, mutate) {
      var func = isNaN(start + end)
        ? 0
        : function (p2) {
            return (1 - p2) * start + p2 * end;
          };
      if (!func) {
        var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
          start = {
            p: start,
          };
          end = {
            p: end,
          };
        } else if (_isArray(start) && !_isArray(end)) {
          interpolators = [];
          l = start.length;
          il = l - 2;
          for (i = 1; i < l; i++) {
            interpolators.push(interpolate2(start[i - 1], start[i]));
          }
          l--;
          func = function func2(p2) {
            p2 *= l;
            var i2 = Math.min(il, ~~p2);
            return interpolators[i2](p2 - i2);
          };
          progress = end;
        } else if (!mutate) {
          start = _merge(_isArray(start) ? [] : {}, start);
        }
        if (!interpolators) {
          for (p in end) {
            _addPropTween.call(master, start, p, "get", end[p]);
          }
          func = function func2(p2) {
            return (
              _renderPropTweens(p2, master) || (isString ? start.p : start)
            );
          };
        }
      }
      return _conditionalReturn(progress, func);
    },
    _getLabelInDirection = function _getLabelInDirection2(
      timeline,
      fromTime,
      backward
    ) {
      var labels = timeline.labels,
        min = _bigNum$1,
        p,
        distance,
        label;
      for (p in labels) {
        distance = labels[p] - fromTime;
        if (
          distance < 0 === !!backward &&
          distance &&
          min > (distance = Math.abs(distance))
        ) {
          label = p;
          min = distance;
        }
      }
      return label;
    },
    _callback = function _callback2(animation, type, executeLazyFirst) {
      var v = animation.vars,
        callback = v[type],
        prevContext = _context,
        context2 = animation._ctx,
        params,
        scope,
        result;
      if (!callback) {
        return;
      }
      params = v[type + "Params"];
      scope = v.callbackScope || animation;
      executeLazyFirst && _lazyTweens.length && _lazyRender();
      context2 && (_context = context2);
      result = params ? callback.apply(scope, params) : callback.call(scope);
      _context = prevContext;
      return result;
    },
    _interrupt = function _interrupt2(animation) {
      _removeFromParent(animation);
      animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
      animation.progress() < 1 && _callback(animation, "onInterrupt");
      return animation;
    },
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin2(config) {
      if (!config) return;
      config = (!config.name && config["default"]) || config;
      if (_windowExists$1() || config.headless) {
        var name = config.name,
          isFunc = _isFunction(config),
          Plugin =
            name && !isFunc && config.init
              ? function () {
                  this._props = [];
                }
              : config,
          instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0,
          },
          statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0,
          };
        _wake();
        if (config !== Plugin) {
          if (_plugins[name]) {
            return;
          }
          _setDefaults(
            Plugin,
            _setDefaults(_copyExcluding(config, instanceDefaults), statics)
          );
          _merge(
            Plugin.prototype,
            _merge(instanceDefaults, _copyExcluding(config, statics))
          );
          _plugins[(Plugin.prop = name)] = Plugin;
          if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
          }
          name =
            (name === "css"
              ? "CSS"
              : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
      } else {
        _registerPluginQueue.push(config);
      }
    },
    _255 = 255,
    _colorLookup = {
      aqua: [0, _255, _255],
      lime: [0, _255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _255],
      navy: [0, 0, 128],
      white: [_255, _255, _255],
      olive: [128, 128, 0],
      yellow: [_255, _255, 0],
      orange: [_255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_255, 0, 0],
      pink: [_255, 192, 203],
      cyan: [0, _255, _255],
      transparent: [_255, _255, _255, 0],
    },
    _hue = function _hue2(h2, m1, m2) {
      h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
      return (
        ((h2 * 6 < 1
          ? m1 + (m2 - m1) * h2 * 6
          : h2 < 0.5
          ? m2
          : h2 * 3 < 2
          ? m1 + (m2 - m1) * (2 / 3 - h2) * 6
          : m1) *
          _255 +
          0.5) |
        0
      );
    },
    splitColor = function splitColor2(v, toHSL, forceAlpha) {
      var a = !v
          ? _colorLookup.black
          : _isNumber(v)
          ? [v >> 16, (v >> 8) & _255, v & _255]
          : 0,
        r,
        g,
        b,
        h2,
        s,
        l,
        max,
        min,
        d,
        wasHSL;
      if (!a) {
        if (v.substr(-1) === ",") {
          v = v.substr(0, v.length - 1);
        }
        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length < 6) {
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v =
              "#" +
              r +
              r +
              g +
              g +
              b +
              b +
              (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
          }
          if (v.length === 9) {
            a = parseInt(v.substr(1, 6), 16);
            return [
              a >> 16,
              (a >> 8) & _255,
              a & _255,
              parseInt(v.substr(7), 16) / 255,
            ];
          }
          v = parseInt(v.substr(1), 16);
          a = [v >> 16, (v >> 8) & _255, v & _255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_strictNumExp);
          if (!toHSL) {
            h2 = (+a[0] % 360) / 360;
            s = +a[1] / 100;
            l = +a[2] / 100;
            g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;
            a.length > 3 && (a[3] *= 1);
            a[0] = _hue(h2 + 1 / 3, r, g);
            a[1] = _hue(h2, r, g);
            a[2] = _hue(h2 - 1 / 3, r, g);
          } else if (~v.indexOf("=")) {
            a = v.match(_numExp);
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
          }
        } else {
          a = v.match(_strictNumExp) || _colorLookup.transparent;
        }
        a = a.map(Number);
      }
      if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) {
          h2 = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h2 =
            max === r
              ? (g - b) / d + (g < b ? 6 : 0)
              : max === g
              ? (b - r) / d + 2
              : (r - g) / d + 4;
          h2 *= 60;
        }
        a[0] = ~~(h2 + 0.5);
        a[1] = ~~(s * 100 + 0.5);
        a[2] = ~~(l * 100 + 0.5);
      }
      forceAlpha && a.length < 4 && (a[3] = 1);
      return a;
    },
    _colorOrderData = function _colorOrderData2(v) {
      var values = [],
        c = [],
        i = -1;
      v.split(_colorExp).forEach(function (v2) {
        var a = v2.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push((i += a.length + 1));
      });
      values.c = c;
      return values;
    },
    _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
      var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;
      if (!colors) {
        return s;
      }
      colors = colors.map(function (color) {
        return (
          (color = splitColor(color, toHSL, 1)) &&
          type +
            (toHSL
              ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3]
              : color.join(",")) +
            ")"
        );
      });
      if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
          shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result +=
              shell[i] +
              (~c.indexOf(i)
                ? colors.shift() || type + "0,0,0,0)"
                : (d.length
                    ? d
                    : colors.length
                    ? colors
                    : orderMatchData
                  ).shift());
          }
        }
      }
      if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + colors[i];
        }
      }
      return result + shell[l];
    },
    _colorExp = (function () {
      var s =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;
      for (p in _colorLookup) {
        s += "|" + p + "\\b";
      }
      return new RegExp(s + ")", "gi");
    })(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter2(a) {
      var combined = a.join(" "),
        toHSL;
      _colorExp.lastIndex = 0;
      if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
        return true;
      }
    },
    _tickerActive,
    _ticker = (function () {
      var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1e3 / 240,
        _nextTime = _gap,
        _listeners2 = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick2(v) {
          var elapsed = _getTime() - _lastUpdate,
            manual = v === true,
            overlap,
            dispatch,
            time,
            frame;
          (elapsed > _lagThreshold || elapsed < 0) &&
            (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id = _req(_tick2));
          if (dispatch) {
            for (_i = 0; _i < _listeners2.length; _i++) {
              _listeners2[_i](time, _delta, frame, v);
            }
          }
        };
      _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
          _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
          return _delta / (1e3 / (fps || 60));
        },
        wake: function wake() {
          if (_coreReady) {
            if (!_coreInitted && _windowExists$1()) {
              _win$1 = _coreInitted = window;
              _doc$1 = _win$1.document || {};
              _globals.gsap = gsap;
              (_win$1.gsapVersions || (_win$1.gsapVersions = [])).push(
                gsap.version
              );
              _install(
                _installScope ||
                  _win$1.GreenSockGlobals ||
                  (!_win$1.gsap && _win$1) ||
                  {}
              );
              _registerPluginQueue.forEach(_createPlugin);
            }
            _raf =
              typeof requestAnimationFrame !== "undefined" &&
              requestAnimationFrame;
            _id && _self.sleep();
            _req =
              _raf ||
              function (f) {
                return setTimeout(f, (_nextTime - _self.time * 1e3 + 1) | 0);
              };
            _tickerActive = 1;
            _tick(2);
          }
        },
        sleep: function sleep() {
          (_raf ? cancelAnimationFrame : clearTimeout)(_id);
          _tickerActive = 0;
          _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
          _lagThreshold = threshold || Infinity;
          _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
          _gap = 1e3 / (_fps || 240);
          _nextTime = _self.time * 1e3 + _gap;
        },
        add: function add(callback, once, prioritize) {
          var func = once
            ? function (t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
              }
            : callback;
          _self.remove(callback);
          _listeners2[prioritize ? "unshift" : "push"](func);
          _wake();
          return func;
        },
        remove: function remove2(callback, i) {
          ~(i = _listeners2.indexOf(callback)) &&
            _listeners2.splice(i, 1) &&
            _i >= i &&
            _i--;
        },
        _listeners: _listeners2,
      };
      return _self;
    })(),
    _wake = function _wake2() {
      return !_tickerActive && _ticker.wake();
    },
    _easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString2(value) {
      var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index2,
        val,
        parsedVal;
      for (; i < l; i++) {
        val = split[i];
        index2 = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index2);
        obj[key] = isNaN(parsedVal)
          ? parsedVal.replace(_quotesExp, "").trim()
          : +parsedVal;
        key = val.substr(index2 + 1).trim();
      }
      return obj;
    },
    _valueInParentheses = function _valueInParentheses2(value) {
      var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
      return value.substring(
        open,
        ~nested && nested < close ? value.indexOf(")", close + 1) : close
      );
    },
    _configEaseFromString = function _configEaseFromString2(name) {
      var split = (name + "").split("("),
        ease = _easeMap[split[0]];
      return ease && split.length > 1 && ease.config
        ? ease.config.apply(
            null,
            ~name.indexOf("{")
              ? [_parseObjectInString(split[1])]
              : _valueInParentheses(name).split(",").map(_numericIfPossible)
          )
        : _easeMap._CE && _customEaseExp.test(name)
        ? _easeMap._CE("", name)
        : ease;
    },
    _invertEase = function _invertEase2(ease) {
      return function (p) {
        return 1 - ease(1 - p);
      };
    },
    _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
      var child = timeline._first,
        ease;
      while (child) {
        if (child instanceof Timeline) {
          _propagateYoyoEase2(child, isYoyo);
        } else if (
          child.vars.yoyoEase &&
          (!child._yoyo || !child._repeat) &&
          child._yoyo !== isYoyo
        ) {
          if (child.timeline) {
            _propagateYoyoEase2(child.timeline, isYoyo);
          } else {
            ease = child._ease;
            child._ease = child._yEase;
            child._yEase = ease;
            child._yoyo = isYoyo;
          }
        }
        child = child._next;
      }
    },
    _parseEase = function _parseEase2(ease, defaultEase) {
      return !ease
        ? defaultEase
        : (_isFunction(ease)
            ? ease
            : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
    },
    _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
      if (easeOut === void 0) {
        easeOut = function easeOut2(p) {
          return 1 - easeIn(1 - p);
        };
      }
      if (easeInOut === void 0) {
        easeInOut = function easeInOut2(p) {
          return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
      }
      var ease = {
          easeIn,
          easeOut,
          easeInOut,
        },
        lowercaseName;
      _forEachName(names, function (name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[(lowercaseName = name.toLowerCase())] = easeOut;
        for (var p in ease) {
          _easeMap[
            lowercaseName +
              (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = _easeMap[name + "." + p] = ease[p];
        }
      });
      return ease;
    },
    _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
      return function (p) {
        return p < 0.5
          ? (1 - easeOut(1 - p * 2)) / 2
          : 0.5 + easeOut((p - 0.5) * 2) / 2;
      };
    },
    _configElastic = function _configElastic2(type, amplitude, period) {
      var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1),
        p3 = (p2 / _2PI) * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut2(p) {
          return p === 1
            ? 1
            : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        },
        ease =
          type === "out"
            ? easeOut
            : type === "in"
            ? function (p) {
                return 1 - easeOut(1 - p);
              }
            : _easeInOutFromOut(easeOut);
      p2 = _2PI / p2;
      ease.config = function (amplitude2, period2) {
        return _configElastic2(type, amplitude2, period2);
      };
      return ease;
    },
    _configBack = function _configBack2(type, overshoot) {
      if (overshoot === void 0) {
        overshoot = 1.70158;
      }
      var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        },
        ease =
          type === "out"
            ? easeOut
            : type === "in"
            ? function (p) {
                return 1 - easeOut(1 - p);
              }
            : _easeInOutFromOut(easeOut);
      ease.config = function (overshoot2) {
        return _configBack2(type, overshoot2);
      };
      return ease;
    };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(
      name + ",Power" + (power - 1),
      i
        ? function (p) {
            return Math.pow(p, power);
          }
        : function (p) {
            return p;
          },
      function (p) {
        return 1 - Math.pow(1 - p, power);
      },
      function (p) {
        return p < 0.5
          ? Math.pow(p * 2, power) / 2
          : 1 - Math.pow((1 - p) * 2, power) / 2;
      }
    );
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase(
    "Elastic",
    _configElastic("in"),
    _configElastic("out"),
    _configElastic()
  );
  (function (n, c) {
    var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut2(p) {
        return p < n1
          ? n * p * p
          : p < n2
          ? n * Math.pow(p - 1.5 / c, 2) + 0.75
          : p < n3
          ? n * (p -= 2.25 / c) * p + 0.9375
          : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
      };
    _insertEase(
      "Bounce",
      function (p) {
        return 1 - easeOut(1 - p);
      },
      easeOut
    );
  })(7.5625, 2.75);
  _insertEase("Expo", function (p) {
    return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
  });
  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase =
    _easeMap.steps =
    _globals.SteppedEase =
      {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps,
            p2 = steps + (immediateStart ? 0 : 1),
            p3 = immediateStart ? 1 : 0,
            max = 1 - _tinyNum;
          return function (p) {
            return (((p2 * _clamp(0, max, p)) | 0) + p3) * p1;
          };
        },
      };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (name) {
      return (_callbackNames += name + "," + name + "Params,");
    }
  );
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ (function () {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if ((this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0)) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent &&
          this.parent.smoothChildTiming &&
          this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length
        ? this.totalDuration(
            this._repeat > 0
              ? value + (value + this._rDelay) * this._repeat
              : value
          )
        : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(
        this,
        this._repeat < 0
          ? value
          : (value - this._repeat * this._rDelay) / (this._repeat + 1)
      );
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent2 = this._dp;
      if (parent2 && parent2.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent2._dp || parent2.parent || _postAddChecks(parent2, this);
        while (parent2 && parent2.parent) {
          if (
            parent2.parent._time !==
            parent2._start +
              (parent2._ts >= 0
                ? parent2._tTime / parent2._ts
                : (parent2.totalDuration() - parent2._tTime) / -parent2._ts)
          ) {
            parent2.totalTime(parent2._tTime, true);
          }
          parent2 = parent2.parent;
        }
        if (
          !this.parent &&
          this._dp.autoRemoveChildren &&
          ((this._ts > 0 && _totalTime < this._tDur) ||
            (this._ts < 0 && _totalTime > 0) ||
            (!this._tDur && !_totalTime))
        ) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (
        this._tTime !== _totalTime ||
        (!this._dur && !suppressEvents) ||
        (this._initted && Math.abs(this._zTime) === _tinyNum) ||
        (!_totalTime && !this._initted && (this.add || this._ptLookup))
      ) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length
        ? this.totalTime(
            Math.min(
              this.totalDuration(),
              value + _elapsedCycleDuration(this)
            ) %
              (this._dur + this._rDelay) || (value ? this._dur : 0),
            suppressEvents
          )
        : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length
        ? this.totalTime(this.totalDuration() * value, suppressEvents)
        : this.totalDuration()
        ? Math.min(1, this._tTime / this._tDur)
        : this.rawTime() >= 0 && this._initted
        ? 1
        : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length
        ? this.totalTime(
            this.duration() *
              (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) +
              _elapsedCycleDuration(this),
            suppressEvents
          )
        : this.duration()
        ? Math.min(1, this._time / this._dur)
        : this.rawTime() > 0
        ? 1
        : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length
        ? this.totalTime(
            this._time + (value - 1) * cycleDuration,
            suppressEvents
          )
        : this._repeat
        ? _animationCycle(this._tTime, cycleDuration) + 1
        : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -1e-8 ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime =
        this.parent && this._ts
          ? _parentToChildTotalTime(this.parent._time, this)
          : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -1e-8 ? 0 : this._rts;
      this.totalTime(
        _clamp(-Math.abs(this._delay), this._tDur, tTime),
        suppressEvents !== false
      );
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(
            this.parent && !this.parent.smoothChildTiming
              ? this.rawTime()
              : this._tTime || this._pTime,
            this.progress() === 1 &&
              Math.abs(this._zTime) !== _tinyNum &&
              (this._tTime -= _tinyNum)
          );
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent2 = this.parent || this._dp;
        parent2 &&
          (parent2._sort || !this.parent) &&
          _addToTimeline(parent2, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return (
        this._start +
        (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) /
          Math.abs(this._ts || 1)
      );
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent2 = this.parent || this._dp;
      return !parent2
        ? this._tTime
        : wrapRepeats &&
          (!this._ts ||
            (this._repeat && this._time && this.totalProgress() < 1))
        ? this._tTime % (this._dur + this._rDelay)
        : !this._ts
        ? this._tTime
        : _parentToChildTotalTime(parent2.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
      if (config === void 0) {
        config = _revertConfig;
      }
      var prevIsReverting = _reverting$1;
      _reverting$1 = config;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config);
        this.totalTime(-0.01, config.suppressEvents);
      }
      this.data !== "nested" && config.kill !== false && this.kill();
      _reverting$1 = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(
        _parsePosition(this, position),
        _isNotFalse(suppressEvents)
      );
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      this.play().totalTime(
        includeDelay ? -this._delay : 0,
        _isNotFalse(suppressEvents)
      );
      this._dur || (this._zTime = -1e-8);
      return this;
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() &&
          this.timeScale(-this._rts || (value ? -1e-8 : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -1e-8;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent2 = this.parent || this._dp,
        start = this._start,
        rawTime;
      return !!(
        !parent2 ||
        (this._ts &&
          this._initted &&
          parent2.isActive() &&
          (rawTime = parent2.rawTime(true)) >= start &&
          rawTime < this.endTime(true) - _tinyNum)
      );
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve2() {
            var _then = self2.then;
            self2.then = null;
            _isFunction(f) &&
              (f = f(self2)) &&
              (f.then || f === self2) &&
              (self2.then = _then);
            resolve(f);
            self2.then = _then;
          };
        if (
          (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0) ||
          (!self2._tTime && self2._ts < 0)
        ) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  })();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: false,
    _rts: 1,
  });
  var Timeline = /* @__PURE__ */ (function (_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline &&
        _addToTimeline(
          vars.parent || _globalTimeline,
          _assertThisInitialized(_this),
          position
        );
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger &&
        _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(
        this,
        Tween.delayedCall(0, callback, params),
        position
      );
    };
    _proto2.staggerTo = function staggerTo(
      targets,
      duration,
      vars,
      stagger,
      position,
      onCompleteAll,
      onCompleteAllParams
    ) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(
      targets,
      duration,
      vars,
      stagger,
      position,
      onCompleteAll,
      onCompleteAllParams
    ) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(
        vars.immediateRender
      );
      return this.staggerTo(
        targets,
        duration,
        vars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      );
    };
    _proto2.staggerFromTo = function staggerFromTo(
      targets,
      duration,
      fromVars,
      toVars,
      stagger,
      position,
      onCompleteAll,
      onCompleteAllParams
    ) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(
        toVars.immediateRender
      );
      return this.staggerTo(
        targets,
        duration,
        toVars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      );
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        crossingStart =
          this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next2,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
      this !== _globalTimeline &&
        tTime > tDur &&
        totalTime >= 0 &&
        (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(
              cycleDuration * 100 + totalTime,
              suppressEvents,
              force
            );
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime &&
            this._tTime &&
            prevIteration !== iteration &&
            this._tTime - prevIteration * cycleDuration - this._dur <= 0 &&
            (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(
              prevTime ||
                (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)),
              suppressEvents,
              !dur
            )._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (
              (prevTime && prevTime !== this._time) ||
              prevPaused !== !this._ts ||
              (this.vars.onRepeat && !this.parent && !this._act)
            ) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(
            this,
            _roundPrecise(prevTime),
            _roundPrecise(time)
          );
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next2 = child._next;
            if (
              (child._act || time >= child._start) &&
              child._ts &&
              pauseTween !== child
            ) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(
                child._ts > 0
                  ? (time - child._start) * child._ts
                  : (child._dirty ? child.totalDuration() : child._tDur) +
                      (time - child._start) * child._ts,
                suppressEvents,
                force
              );
              if (time !== this._time || (!this._ts && !prevPaused)) {
                pauseTween = 0;
                next2 && (tTime += this._zTime = -1e-8);
                break;
              }
            }
            child = next2;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next2 = child._prev;
            if (
              (child._act || adjustedTime <= child._end) &&
              child._ts &&
              pauseTween !== child
            ) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(
                child._ts > 0
                  ? (adjustedTime - child._start) * child._ts
                  : (child._dirty ? child.totalDuration() : child._tDur) +
                      (adjustedTime - child._start) * child._ts,
                suppressEvents,
                force || (_reverting$1 && (child._initted || child._startAt))
              );
              if (time !== this._time || (!this._ts && !prevPaused)) {
                pauseTween = 0;
                next2 &&
                  (tTime += this._zTime = adjustedTime ? -1e-8 : _tinyNum);
                break;
              }
            }
            child = next2;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -1e-8)._zTime =
            time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (
          (tTime === tDur && this._tTime >= this.totalDuration()) ||
          (!tTime && prevTime)
        ) {
          if (
            prevStart === this._start ||
            Math.abs(timeScale) !== Math.abs(this._ts)
          ) {
            if (!this._lock) {
              (totalTime || !dur) &&
                ((tTime === tDur && this._ts > 0) ||
                  (!tTime && this._ts < 0)) &&
                _removeFromParent(this, 1);
              if (
                !suppressEvents &&
                !(totalTime < 0 && !prevTime) &&
                (tTime || prevTime || !tDur)
              ) {
                _callback(
                  this,
                  tTime === tDur && totalTime >= 0
                    ? "onComplete"
                    : "onReverseComplete",
                  true
                );
                this._prom &&
                  !(tTime < tDur && this.timeScale() > 0) &&
                  this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(
      nested,
      tweens,
      timelines,
      ignoreBeforeTime
    ) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -1e8;
      }
      var a = [],
        child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested &&
              a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
        i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove2(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      child.parent === this && _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(
          _ticker.time -
            (this._ts > 0
              ? _totalTime2 / this._ts
              : (this.totalDuration() - _totalTime2) / -this._ts)
        );
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        children2;
      while (child) {
        if (child instanceof Tween) {
          if (
            _arrayContainsAny(child._targets, parsedTargets) &&
            (isGlobalTime
              ? (!_overwritingTween || (child._initted && child._ts)) &&
                child.globalTime(0) <= onlyActive &&
                child.globalTime(child.totalDuration()) > onlyActive
              : !onlyActive || child.isActive())
          ) {
            a.push(child);
          }
        } else if (
          (children2 = child.getTweensOf(parsedTargets, onlyActive)).length
        ) {
          a.push.apply(a, children2);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(
          tl,
          _setDefaults(
            {
              ease: vars.ease || "none",
              lazy: false,
              immediateRender: false,
              time: endTime,
              overwrite: "auto",
              duration:
                vars.duration ||
                Math.abs(
                  (endTime -
                    (startAt && "time" in startAt ? startAt.time : tl._time)) /
                    tl.timeScale()
                ) ||
                _tinyNum,
              onStart: function onStart() {
                tl.pause();
                if (!initted) {
                  var duration =
                    vars.duration ||
                    Math.abs(
                      (endTime -
                        (startAt && "time" in startAt
                          ? startAt.time
                          : tl._time)) /
                        tl.timeScale()
                    );
                  tween._dur !== duration &&
                    _setDuration(tween, duration, 0, 1).render(
                      tween._time,
                      true,
                      true
                    );
                  initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []);
              },
            },
            vars
          )
        );
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(
        toPosition,
        _setDefaults(
          {
            startAt: {
              time: _parsePosition(this, fromPosition),
            },
          },
          vars
        )
      );
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length
        ? this.seek(value, true)
        : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(
      amount,
      adjustLabels,
      ignoreBeforeTime
    ) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first,
        labels = this.labels,
        p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first,
        next2;
      while (child) {
        next2 = child._next;
        this.remove(child);
        child = next2;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
        self2 = this,
        child = self2._last,
        prevStart = _bigNum$1,
        prev2,
        start,
        parent2;
      if (arguments.length) {
        return self2.timeScale(
          (self2._repeat < 0 ? self2.duration() : self2.totalDuration()) /
            (self2.reversed() ? -value : value)
        );
      }
      if (self2._dirty) {
        parent2 = self2.parent;
        while (child) {
          prev2 = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (
              (!parent2 && !self2._dp) ||
              (parent2 && parent2.smoothChildTiming)
            ) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev2;
        }
        _setDuration(
          self2,
          self2 === _globalTimeline && self2._time > max ? self2._time : max,
          1,
          1
        );
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(
          _globalTimeline,
          _parentToChildTotalTime(time, _globalTimeline)
        );
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  })(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0,
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(
      target,
      prop,
      start,
      end,
      setter,
      stringFilter,
      funcParam
    ) {
      var pt = new PropTween(
          this._pt,
          target,
          prop,
          0,
          1,
          _renderComplexString,
          null,
          setter
        ),
        index2 = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if ((hasRandom = ~end.indexOf("random("))) {
        end = _replaceRandom(end);
      }
      if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop);
        start = a[0];
        end = a[1];
      }
      startNums = start.match(_complexStringNumExp) || [];
      while ((result = _complexStringNumExp.exec(end))) {
        endNum = result[0];
        chunk = end.substring(index2, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0;
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c:
              endNum.charAt(1) === "="
                ? _parseRelative(startNum, endNum) - startNum
                : parseFloat(endNum) - startNum,
            m: color && color < 4 ? Math.round : 0,
          };
          index2 = _complexStringNumExp.lastIndex;
        }
      }
      pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
      pt.fp = funcParam;
      if (_relExp.test(end) || hasRandom) {
        pt.e = 0;
      }
      this._pt = pt;
      return pt;
    },
    _addPropTween = function _addPropTween2(
      target,
      prop,
      start,
      end,
      index2,
      targets,
      modifier,
      stringFilter,
      funcParam,
      optional
    ) {
      _isFunction(end) && (end = end(index2 || 0, target, targets));
      var currentValue = target[prop],
        parsedStart =
          start !== "get"
            ? start
            : !_isFunction(currentValue)
            ? currentValue
            : funcParam
            ? target[
                prop.indexOf("set") ||
                !_isFunction(target["get" + prop.substr(3)])
                  ? prop
                  : "get" + prop.substr(3)
              ](funcParam)
            : target[prop](),
        setter = !_isFunction(currentValue)
          ? _setterPlain
          : funcParam
          ? _setterFuncWithParam
          : _setterFunc,
        pt;
      if (_isString(end)) {
        if (~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (end.charAt(1) === "=") {
          pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
          if (pt || pt === 0) {
            end = pt;
          }
        }
      }
      if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
          pt = new PropTween(
            this._pt,
            target,
            prop,
            +parsedStart || 0,
            end - (parsedStart || 0),
            typeof currentValue === "boolean" ? _renderBoolean : _renderPlain,
            0,
            setter
          );
          funcParam && (pt.fp = funcParam);
          modifier && pt.modifier(modifier, this, target);
          return (this._pt = pt);
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(
          this,
          target,
          prop,
          parsedStart,
          end,
          setter,
          stringFilter || _config.stringFilter,
          funcParam
        );
      }
    },
    _processVars = function _processVars2(
      vars,
      index2,
      target,
      targets,
      tween
    ) {
      _isFunction(vars) &&
        (vars = _parseFuncOrString(vars, tween, index2, target, targets));
      if (
        !_isObject(vars) ||
        (vars.style && vars.nodeType) ||
        _isArray(vars) ||
        _isTypedArray(vars)
      ) {
        return _isString(vars)
          ? _parseFuncOrString(vars, tween, index2, target, targets)
          : vars;
      }
      var copy = {},
        p;
      for (p in vars) {
        copy[p] = _parseFuncOrString(vars[p], tween, index2, target, targets);
      }
      return copy;
    },
    _checkPlugin = function _checkPlugin2(
      property,
      vars,
      tween,
      index2,
      target,
      targets
    ) {
      var plugin, pt, ptLookup, i;
      if (
        _plugins[property] &&
        (plugin = new _plugins[property]()).init(
          target,
          plugin.rawVars
            ? vars[property]
            : _processVars(vars[property], index2, target, targets, tween),
          tween,
          index2,
          targets
        ) !== false
      ) {
        tween._pt = pt = new PropTween(
          tween._pt,
          target,
          property,
          0,
          1,
          plugin.render,
          plugin,
          0,
          plugin.priority
        );
        if (tween !== _quickTween) {
          ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
          i = plugin._props.length;
          while (i--) {
            ptLookup[plugin._props[i]] = pt;
          }
        }
      }
      return plugin;
    },
    _overwritingTween,
    _forceAllPropTweens,
    _initTween = function _initTween2(tween, time, tTime) {
      var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent2 = tween.parent,
        fullTargets =
          parent2 && parent2.data === "nested" ? parent2.vars.targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index2,
        harnessVars,
        overwritten;
      tl && (!keyframes || !ease) && (ease = "none");
      tween._ease = _parseEase(ease, _defaults.ease);
      tween._yEase = yoyoEase
        ? _invertEase(
            _parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)
          )
        : 0;
      if (yoyoEase && tween._yoyo && !tween._repeat) {
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
      }
      tween._from = !tl && !!vars.runBackwards;
      if (!tl || (keyframes && !vars.stagger)) {
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop];
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
          prevStartAt._zTime < 0 && prevStartAt.progress(1);
          time < 0 && runBackwards && immediateRender && !autoRevert
            ? prevStartAt.render(-1, true)
            : prevStartAt.revert(
                runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig
              );
          prevStartAt._lazy = 0;
        }
        if (startAt) {
          _removeFromParent(
            (tween._startAt = Tween.set(
              targets,
              _setDefaults(
                {
                  data: "isStart",
                  overwrite: false,
                  parent: parent2,
                  immediateRender: true,
                  lazy: !prevStartAt && _isNotFalse(lazy),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    onUpdate &&
                    function () {
                      return _callback(tween, "onUpdate");
                    },
                  stagger: 0,
                },
                startAt
              )
            ))
          );
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 &&
            (_reverting$1 || (!immediateRender && !autoRevert)) &&
            tween._startAt.revert(_revertConfigNoKill);
          if (immediateRender) {
            if (dur && time <= 0 && tTime <= 0) {
              time && (tween._zTime = time);
              return;
            }
          }
        } else if (runBackwards && dur) {
          if (!prevStartAt) {
            time && (immediateRender = false);
            p = _setDefaults(
              {
                overwrite: false,
                data: "isFromStart",
                //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                immediateRender,
                //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                stagger: 0,
                parent: parent2,
                //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
              },
              cleanVars
            );
            harnessVars && (p[harness.prop] = harnessVars);
            _removeFromParent((tween._startAt = Tween.set(targets, p)));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 &&
              (_reverting$1
                ? tween._startAt.revert(_revertConfigNoKill)
                : tween._startAt.render(-1, true));
            tween._zTime = time;
            if (!immediateRender) {
              _initTween2(tween._startAt, _tinyNum, _tinyNum);
            } else if (!time) {
              return;
            }
          }
        }
        tween._pt = tween._ptCache = 0;
        lazy = (dur && _isNotFalse(lazy)) || (lazy && !dur);
        for (i = 0; i < targets.length; i++) {
          target = targets[i];
          gsData = target._gsap || _harness(targets)[i]._gsap;
          tween._ptLookup[i] = ptLookup = {};
          _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
          index2 = fullTargets === targets ? i : fullTargets.indexOf(target);
          if (
            harness &&
            (plugin = new harness()).init(
              target,
              harnessVars || cleanVars,
              tween,
              index2,
              fullTargets
            ) !== false
          ) {
            tween._pt = pt = new PropTween(
              tween._pt,
              target,
              plugin.name,
              0,
              1,
              plugin.render,
              plugin,
              0,
              plugin.priority
            );
            plugin._props.forEach(function (name) {
              ptLookup[name] = pt;
            });
            plugin.priority && (hasPriority = 1);
          }
          if (!harness || harnessVars) {
            for (p in cleanVars) {
              if (
                _plugins[p] &&
                (plugin = _checkPlugin(
                  p,
                  cleanVars,
                  tween,
                  index2,
                  target,
                  fullTargets
                ))
              ) {
                plugin.priority && (hasPriority = 1);
              } else {
                ptLookup[p] = pt = _addPropTween.call(
                  tween,
                  target,
                  p,
                  "get",
                  cleanVars[p],
                  index2,
                  fullTargets,
                  0,
                  vars.stringFilter
                );
              }
            }
          }
          tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
          if (autoOverwrite && tween._pt) {
            _overwritingTween = tween;
            _globalTimeline.killTweensOf(
              target,
              ptLookup,
              tween.globalTime(time)
            );
            overwritten = !tween.parent;
            _overwritingTween = 0;
          }
          tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween);
      }
      tween._onUpdate = onUpdate;
      tween._initted = (!tween._op || tween._pt) && !overwritten;
      keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
    },
    _updatePropTweens = function _updatePropTweens2(
      tween,
      property,
      value,
      start,
      startIsRelative,
      ratio,
      time,
      skipRecursion
    ) {
      var ptCache = ((tween._pt && tween._ptCache) || (tween._ptCache = {}))[
          property
        ],
        pt,
        rootPT,
        lookup,
        i;
      if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while (i--) {
          pt = lookup[i][property];
          if (pt && pt.d && pt.d._pt) {
            pt = pt.d._pt;
            while (pt && pt.p !== property && pt.fp !== property) {
              pt = pt._next;
            }
          }
          if (!pt) {
            _forceAllPropTweens = 1;
            tween.vars[property] = "+=0";
            _initTween(tween, time);
            _forceAllPropTweens = 0;
            return skipRecursion
              ? _warn(property + " not eligible for reset")
              : 1;
          }
          ptCache.push(pt);
        }
      }
      i = ptCache.length;
      while (i--) {
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT;
        pt.s =
          (start || start === 0) && !startIsRelative
            ? start
            : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
      }
    },
    _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
      var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;
      if (!propertyAliases) {
        return vars;
      }
      copy = _merge({}, vars);
      for (p in propertyAliases) {
        if (p in copy) {
          aliases = propertyAliases[p].split(",");
          i = aliases.length;
          while (i--) {
            copy[aliases[i]] = copy[p];
          }
        }
      }
      return copy;
    },
    _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
      var ease = obj.ease || easeEach || "power1.inOut",
        p,
        a;
      if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []);
        obj.forEach(function (value, i) {
          return a.push({
            t: (i / (obj.length - 1)) * 100,
            v: value,
            e: ease,
          });
        });
      } else {
        for (p in obj) {
          a = allProps[p] || (allProps[p] = []);
          p === "ease" ||
            a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease,
            });
        }
      }
    },
    _parseFuncOrString = function _parseFuncOrString2(
      value,
      tween,
      i,
      target,
      targets
    ) {
      return _isFunction(value)
        ? value.call(tween, i, target, targets)
        : _isString(value) && ~value.indexOf("random(")
        ? _replaceRandom(value)
        : value;
    },
    _staggerTweenProps =
      _callbackNames +
      "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};
  _forEachName(
    _staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger",
    function (name) {
      return (_staggerPropsToSkip[name] = 1);
    }
  );
  var Tween = /* @__PURE__ */ (function (_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 =
        _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) ||
        this;
      var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults2 = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent2 = vars.parent || _globalTimeline,
        parsedTargets = (
          _isArray(targets) || _isTypedArray(targets)
            ? _isNumber(targets[0])
            : "length" in vars
        )
          ? [targets]
          : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
      _this3._targets = parsedTargets.length
        ? _harness(parsedTargets)
        : _warn(
            "GSAP target " + targets + " not found. https://gsap.com",
            !_config.nullTargetWarn
          ) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (
        keyframes ||
        stagger ||
        _isFuncOrString(duration) ||
        _isFuncOrString(delay)
      ) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults2 || {},
          targets:
            parent2 && parent2.data === "nested"
              ? parent2.vars.targets
              : parsedTargets,
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(
              duration,
              _assertThisInitialized(_this3),
              i,
              curTarget,
              parsedTargets
            );
            copy.delay =
              (+_parseFuncOrString(
                delay,
                _assertThisInitialized(_this3),
                i,
                curTarget,
                parsedTargets
              ) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(
              curTarget,
              copy,
              staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0
            );
            tl._ease = _easeMap.none;
          }
          tl.duration() ? (duration = delay = 0) : (_this3.timeline = 0);
        } else if (keyframes) {
          _inheritDefaults(
            _setDefaults(tl.vars.defaults, {
              ease: "none",
            })
          );
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0,
            a,
            kf,
            v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function (frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p in keyframes) {
              p === "ease" ||
                p === "easeEach" ||
                _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }
            for (p in copy) {
              a = copy[p].sort(function (a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: ((kf.t - (i ? a[i - 1].t : 0)) / 100) * duration,
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration &&
              tl.to(
                {},
                {
                  duration: duration - tl.duration(),
                }
              );
          }
        }
        duration || _this3.duration((duration = tl.duration()));
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent2, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (
        immediateRender ||
        (!duration &&
          !keyframes &&
          _this3._start === _roundPrecise(parent2._time) &&
          _isNotFalse(immediateRender) &&
          _hasNoPausedAncestors(_assertThisInitialized(_this3)) &&
          parent2.data !== "nested")
      ) {
        _this3._tTime = -1e-8;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger &&
        _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime =
          totalTime > tDur - _tinyNum && !isNegative
            ? tDur
            : totalTime < _tinyNum
            ? 0
            : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (
        tTime !== this._tTime ||
        !totalTime ||
        force ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== isNegative) ||
        this._lazy
      ) {
        time = tTime;
        timeline = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(
              cycleDuration * 100 + totalTime,
              suppressEvents,
              force
            );
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            prevIteration = _roundPrecise(tTime / cycleDuration);
            iteration = ~~prevIteration;
            if (iteration && iteration === prevIteration) {
              time = dur;
              iteration--;
            } else if (time > dur) {
              time = dur;
            }
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (
            time === prevTime &&
            !force &&
            this._initted &&
            iteration === prevIteration
          ) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
            if (
              this.vars.repeatRefresh &&
              !isYoyo &&
              !this._lock &&
              time !== cycleDuration &&
              this._initted
            ) {
              this._lock = force = 1;
              this.render(
                _roundPrecise(cycleDuration * iteration),
                true
              ).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (
            _attemptInitTween(
              this,
              isNegative ? totalTime : time,
              force,
              suppressEvents,
              tTime
            )
          ) {
            this._tTime = 0;
            return this;
          }
          if (
            prevTime !== this._time &&
            !(force && this.vars.repeatRefresh && iteration !== prevIteration)
          ) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        (timeline &&
          timeline.render(
            totalTime < 0
              ? totalTime
              : timeline._dur * timeline._ease(time / this._dur),
            suppressEvents,
            force
          )) ||
          (this._startAt && (this._zTime = totalTime));
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat &&
          iteration !== prevIteration &&
          this.vars.onRepeat &&
          !suppressEvents &&
          this.parent &&
          _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative &&
            !this._onUpdate &&
            _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) &&
            ((tTime === this._tDur && this._ts > 0) ||
              (!tTime && this._ts < 0)) &&
            _removeFromParent(this, 1);
          if (
            !suppressEvents &&
            !(isNegative && !prevTime) &&
            (tTime || prevTime || isYoyo)
          ) {
            _callback(
              this,
              tTime === tDur ? "onComplete" : "onReverseComplete",
              true
            );
            this._prom &&
              !(tTime < tDur && this.timeScale() > 0) &&
              this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(
      property,
      value,
      start,
      startIsRelative,
      skipRecursion
    ) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (
        _updatePropTweens(
          this,
          property,
          value,
          start,
          startIsRelative,
          ratio,
          time,
          skipRecursion
        )
      ) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent ||
        _addLinkedListItem(
          this._dp,
          this,
          "_first",
          "_last",
          this._dp._sort ? "_start" : 0
        );
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        this.parent
          ? _interrupt(this)
          : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting$1);
        return this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(
          targets,
          vars,
          _overwritingTween && _overwritingTween.vars.overwrite !== true
        )._first || _interrupt(this);
        this.parent &&
          tDur !== this.timeline.totalDuration() &&
          _setDuration(this, (this._dur * this.timeline._tDur) / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;
      if (
        (!vars || vars === "all") &&
        _arraysMatch(parsedTargets, killingTargets)
      ) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function (name) {
            return (p[name] = 1);
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope,
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  })(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0,
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
        params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
      return (target[property] = value);
    },
    _setterFunc = function _setterFunc2(target, property, value) {
      return target[property](value);
    },
    _setterFuncWithParam = function _setterFuncWithParam2(
      target,
      property,
      value,
      data
    ) {
      return target[property](data.fp, value);
    },
    _setterAttribute = function _setterAttribute2(target, property, value) {
      return target.setAttribute(property, value);
    },
    _getSetter = function _getSetter2(target, property) {
      return _isFunction(target[property])
        ? _setterFunc
        : _isUndefined(target[property]) && target.setAttribute
        ? _setterAttribute
        : _setterPlain;
    },
    _renderPlain = function _renderPlain2(ratio, data) {
      return data.set(
        data.t,
        data.p,
        Math.round((data.s + data.c * ratio) * 1e6) / 1e6,
        data
      );
    },
    _renderBoolean = function _renderBoolean2(ratio, data) {
      return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    },
    _renderComplexString = function _renderComplexString2(ratio, data) {
      var pt = data._pt,
        s = "";
      if (!ratio && data.b) {
        s = data.b;
      } else if (ratio === 1 && data.e) {
        s = data.e;
      } else {
        while (pt) {
          s =
            pt.p +
            (pt.m
              ? pt.m(pt.s + pt.c * ratio)
              : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) +
            s;
          pt = pt._next;
        }
        s += data.c;
      }
      data.set(data.t, data.p, s, data);
    },
    _renderPropTweens = function _renderPropTweens2(ratio, data) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    },
    _addPluginModifier = function _addPluginModifier2(
      modifier,
      tween,
      target,
      property
    ) {
      var pt = this._pt,
        next2;
      while (pt) {
        next2 = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next2;
      }
    },
    _killPropTweensOf = function _killPropTweensOf2(property) {
      var pt = this._pt,
        hasNonDependentRemaining,
        next2;
      while (pt) {
        next2 = pt._next;
        if ((pt.p === property && !pt.op) || pt.op === property) {
          _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
          hasNonDependentRemaining = 1;
        }
        pt = next2;
      }
      return !hasNonDependentRemaining;
    },
    _setterWithModifier = function _setterWithModifier2(
      target,
      property,
      value,
      data
    ) {
      data.mSet(
        target,
        property,
        data.m.call(data.tween, value, data.mt),
        data
      );
    },
    _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent2) {
      var pt = parent2._pt,
        next2,
        pt2,
        first,
        last;
      while (pt) {
        next2 = pt._next;
        pt2 = first;
        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }
        if ((pt._prev = pt2 ? pt2._prev : last)) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }
        if ((pt._next = pt2)) {
          pt2._prev = pt;
        } else {
          last = pt;
        }
        pt = next2;
      }
      parent2._pt = first;
    };
  var PropTween = /* @__PURE__ */ (function () {
    function PropTween2(
      next2,
      target,
      prop,
      start,
      change,
      renderer,
      data,
      setter,
      priority
    ) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next2;
      if (next2) {
        next2._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  })();
  _forEachName(
    _callbackNames +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (name) {
      return (_reservedProps[name] = 1);
    }
  );
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true,
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch2(type) {
      return (_listeners[type] || _emptyArray).map(function (f) {
        return f();
      });
    },
    _onMediaChange = function _onMediaChange2() {
      var time = Date.now(),
        matches = [];
      if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function (c) {
          var queries = c.queries,
            conditions = c.conditions,
            match,
            p,
            anyMatch,
            toggled;
          for (p in queries) {
            match = _win$1.matchMedia(queries[p]).matches;
            match && (anyMatch = 1);
            if (match !== conditions[p]) {
              conditions[p] = match;
              toggled = 1;
            }
          }
          if (toggled) {
            c.revert();
            anyMatch && matches.push(c);
          }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function (c) {
          return c.onMatch(c, function (func) {
            return c.add(null, func);
          });
        });
        _lastMediaTime = time;
        _dispatch("matchMedia");
      }
    };
  var Context = /* @__PURE__ */ (function () {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self2 = this,
        f = function f2() {
          var prev2 = _context,
            prevSelector = self2.selector,
            result;
          prev2 && prev2 !== self2 && prev2.data.push(self2);
          scope && (self2.selector = selector(scope));
          _context = self2;
          result = func.apply(self2, arguments);
          _isFunction(result) && self2._r.push(result);
          _context = prev2;
          self2.selector = prevSelector;
          self2.isReverted = false;
          return result;
        };
      self2.last = f;
      return name === _isFunction
        ? f(self2, function (func2) {
            return self2.add(null, func2);
          })
        : name
        ? (self2[name] = f)
        : f;
    };
    _proto5.ignore = function ignore(func) {
      var prev2 = _context;
      _context = null;
      func(this);
      _context = prev2;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function (e) {
        return e instanceof Context2
          ? a.push.apply(a, e.getTweens())
          : e instanceof Tween &&
              !(e.parent && e.parent.data === "nested") &&
              a.push(e);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
      var _this4 = this;
      if (revert) {
        (function () {
          var tweens = _this4.getTweens(),
            i2 = _this4.data.length,
            t;
          while (i2--) {
            t = _this4.data[i2];
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function (tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens
            .map(function (t2) {
              return {
                g:
                  t2._dur ||
                  t2._delay ||
                  (t2._sat && !t2._sat.vars.immediateRender)
                    ? t2.globalTime(0)
                    : -Infinity,
                t: t2,
              };
            })
            .sort(function (a, b) {
              return b.g - a.g || -Infinity;
            })
            .forEach(function (o) {
              return o.t.revert(revert);
            });
          i2 = _this4.data.length;
          while (i2--) {
            t = _this4.data[i2];
            if (t instanceof Timeline) {
              if (t.data !== "nested") {
                t.scrollTrigger && t.scrollTrigger.revert();
                t.kill();
              }
            } else {
              !(t instanceof Tween) && t.revert && t.revert(revert);
            }
          }
          _this4._r.forEach(function (f) {
            return f(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function (e) {
          return e.kill && e.kill();
        });
      }
      this.clear();
      if (matchMedia) {
        var i = _media.length;
        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };
    _proto5.revert = function revert(config) {
      this.kill(config || {});
    };
    return Context2;
  })();
  var MatchMedia = /* @__PURE__ */ (function () {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) ||
        (conditions = {
          matches: conditions,
        });
      var context2 = new Context(0, scope || this.scope),
        cond = (context2.conditions = {}),
        mq,
        p,
        active;
      _context && !context2.selector && (context2.selector = _context.selector);
      this.contexts.push(context2);
      func = context2.add("onMatch", func);
      context2.queries = conditions;
      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win$1.matchMedia(conditions[p]);
          if (mq) {
            _media.indexOf(context2) < 0 && _media.push(context2);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener
              ? mq.addListener(_onMediaChange)
              : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active &&
        func(context2, function (f) {
          return context2.add(null, f);
        });
      return this;
    };
    _proto6.revert = function revert(config) {
      this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function (c) {
        return c.kill(revert, true);
      });
    };
    return MatchMedia2;
  })();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target
        ? target
        : !property
        ? function (property2, unit2, uncache2) {
            return format(
              ((_plugins[property2] && _plugins[property2].get) || getter)(
                target,
                property2,
                unit2,
                uncache2
              )
            );
          }
        : format(
            ((_plugins[property] && _plugins[property].get) || getter)(
              target,
              property,
              unit,
              uncache
            )
          );
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function (t) {
            return gsap.quickSetter(t, property, unit);
          }),
          l = setters.length;
        return function (value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property],
        cache = _getCache(target),
        p =
          (cache.harness && (cache.harness.aliases || {})[property]) ||
          property,
        setter = Plugin
          ? function (value) {
              var p2 = new Plugin();
              _quickTween._pt = 0;
              p2.init(target, unit ? value + unit : value, _quickTween, 0, [
                target,
              ]);
              p2.render(1, p2);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            }
          : cache.set(target, p);
      return Plugin
        ? setter
        : function (value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
    },
    quickTo: function quickTo(target, property, vars) {
      var _setDefaults2;
      var tween = gsap.to(
          target,
          _setDefaults(
            ((_setDefaults2 = {}),
            (_setDefaults2[property] = "+=0.1"),
            (_setDefaults2.paused = true),
            (_setDefaults2.stagger = 0),
            _setDefaults2),
            vars || {}
          )
        ),
        func = function func2(value, start, startIsRelative) {
          return tween.resetTo(property, value, start, startIsRelative);
        };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults2(value) {
      value &&
        value.ease &&
        (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults2 = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return (
          pluginName &&
          !_plugins[pluginName] &&
          !_globals[pluginName] &&
          _warn(name + " effect requires " + pluginName + " plugin.")
        );
      });
      _effects[name] = function (targets, vars, tl) {
        return effect(
          toArray(targets),
          _setDefaults(vars || {}, defaults2),
          tl
        );
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(
            _effects[name](
              targets,
              _isObject(vars) ? vars : (position = vars) && {},
              this
            ),
            position
          );
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars),
        child,
        next2;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next2 = child._next;
        if (
          includeDelayedCalls ||
          !(
            !child._dur &&
            child instanceof Tween &&
            child.vars.onComplete === child._targets[0]
          )
        ) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next2;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context2(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return (
        _media.forEach(function (c) {
          var cond = c.conditions,
            found,
            p;
          for (p in cond) {
            if (cond[p]) {
              cond[p] = false;
              found = 1;
            }
          }
          found && c.revert();
        }) || _onMediaChange()
      );
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type],
        i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle,
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting$1;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return (_suppressOverwrites = value);
      },
    },
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return (_gsap[name] = Tween[name]);
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to(
    {},
    {
      duration: 0,
    }
  );
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
      var pt = plugin._pt;
      while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
      }
      return pt;
    },
    _addModifiers = function _addModifiers2(tween, modifiers) {
      var targets = tween._targets,
        p,
        i,
        pt;
      for (p in modifiers) {
        i = targets.length;
        while (i--) {
          pt = tween._ptLookup[i][p];
          if (pt && (pt = pt.d)) {
            if (pt._pt) {
              pt = _getPluginPropTween(pt, p);
            }
            pt &&
              pt.modifier &&
              pt.modifier(modifiers[p], tween, targets[i], p);
          }
        }
      }
    },
    _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
      return {
        name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
          tween._onInit = function (tween2) {
            var temp, p;
            if (_isString(vars)) {
              temp = {};
              _forEachName(vars, function (name2) {
                return (temp[name2] = 1);
              });
              vars = temp;
            }
            if (modifier) {
              temp = {};
              for (p in vars) {
                temp[p] = modifier(vars[p]);
              }
              vars = temp;
            }
            _addModifiers(tween2, vars);
          };
        },
      };
    };
  var gsap =
    _gsap.registerPlugin(
      {
        name: "attr",
        init: function init(target, vars, tween, index2, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(
              target,
              "setAttribute",
              (v || 0) + "",
              vars[p],
              index2,
              targets,
              0,
              0,
              p
            );
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting$1 ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        },
      },
      {
        name: "endArray",
        init: function init(target, value) {
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        },
      },
      _buildModifierPlugin("roundProps", _roundModifier),
      _buildModifierPlugin("modifiers"),
      _buildModifierPlugin("snap", snap)
    ) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.7";
  _coreReady = 1;
  _windowExists$1() && _wake();
  _easeMap.Power0;
  _easeMap.Power1;
  _easeMap.Power2;
  _easeMap.Power3;
  _easeMap.Power4;
  _easeMap.Linear;
  _easeMap.Quad;
  _easeMap.Cubic;
  _easeMap.Quart;
  _easeMap.Quint;
  _easeMap.Strong;
  _easeMap.Elastic;
  _easeMap.Back;
  _easeMap.SteppedEase;
  _easeMap.Bounce;
  _easeMap.Sine;
  _easeMap.Expo;
  _easeMap.Circ;
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists2() {
      return typeof window !== "undefined";
    },
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    _renderCSSProp = function _renderCSSProp2(ratio, data) {
      return data.set(
        data.t,
        data.p,
        Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u,
        data
      );
    },
    _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
      return data.set(
        data.t,
        data.p,
        ratio === 1
          ? data.e
          : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u,
        data
      );
    },
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(
      ratio,
      data
    ) {
      return data.set(
        data.t,
        data.p,
        ratio
          ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u
          : data.b,
        data
      );
    },
    _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
      var value = data.s + data.c * ratio;
      data.set(
        data.t,
        data.p,
        ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u,
        data
      );
    },
    _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
      return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    },
    _renderNonTweeningValueOnlyAtEnd =
      function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      },
    _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
      return (target.style[property] = value);
    },
    _setterCSSProp = function _setterCSSProp2(target, property, value) {
      return target.style.setProperty(property, value);
    },
    _setterTransform = function _setterTransform2(target, property, value) {
      return (target._gsap[property] = value);
    },
    _setterScale = function _setterScale2(target, property, value) {
      return (target._gsap.scaleX = target._gsap.scaleY = value);
    },
    _setterScaleWithRender = function _setterScaleWithRender2(
      target,
      property,
      value,
      data,
      ratio
    ) {
      var cache = target._gsap;
      cache.scaleX = cache.scaleY = value;
      cache.renderTransform(ratio, cache);
    },
    _setterTransformWithRender = function _setterTransformWithRender2(
      target,
      property,
      value,
      data,
      ratio
    ) {
      var cache = target._gsap;
      cache[property] = value;
      cache.renderTransform(ratio, cache);
    },
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle2(property, isNotCSS) {
      var _this = this;
      var target = this.target,
        style = target.style,
        cache = target._gsap;
      if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
          property = _propertyAliases[property] || property;
          ~property.indexOf(",")
            ? property.split(",").forEach(function (a) {
                return (_this.tfm[a] = _get(target, a));
              })
            : (this.tfm[property] = cache.x
                ? cache[property]
                : _get(target, property));
          property === _transformOriginProp &&
            (this.tfm.zOrigin = cache.zOrigin);
        } else {
          return _propertyAliases.transform.split(",").forEach(function (p) {
            return _saveStyle2.call(_this, p, isNotCSS);
          });
        }
        if (this.props.indexOf(_transformProp) >= 0) {
          return;
        }
        if (cache.svg) {
          this.svgo = target.getAttribute("data-svg-origin");
          this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
      }
      (style || isNotCSS) &&
        this.props.push(property, isNotCSS, style[property]);
    },
    _removeIndependentTransforms = function _removeIndependentTransforms2(
      style
    ) {
      if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
      }
    },
    _revertStyle = function _revertStyle2() {
      var props = this.props,
        target = this.target,
        style = target.style,
        cache = target._gsap,
        i,
        p;
      for (i = 0; i < props.length; i += 3) {
        if (!props[i + 1]) {
          props[i + 2]
            ? (style[props[i]] = props[i + 2])
            : style.removeProperty(
                props[i].substr(0, 2) === "--"
                  ? props[i]
                  : props[i].replace(_capsExp, "-$1").toLowerCase()
              );
        } else if (props[i + 1] === 2) {
          target[props[i]](props[i + 2]);
        } else {
          target[props[i]] = props[i + 2];
        }
      }
      if (this.tfm) {
        for (p in this.tfm) {
          cache[p] = this.tfm[p];
        }
        if (cache.svg) {
          cache.renderTransform();
          target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting();
        if ((!i || !i.isStart) && !style[_transformProp]) {
          _removeIndependentTransforms(style);
          if (cache.zOrigin && style[_transformOriginProp]) {
            style[_transformOriginProp] += " " + cache.zOrigin + "px";
            cache.zOrigin = 0;
            cache.renderTransform();
          }
          cache.uncache = 1;
        }
      }
    },
    _getStyleSaver = function _getStyleSaver2(target, properties) {
      var saver = {
        target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle,
      };
      target._gsap || gsap.core.getCache(target);
      properties &&
        target.style &&
        target.nodeType &&
        properties.split(",").forEach(function (p) {
          return saver.save(p);
        });
      return saver;
    },
    _supports3D,
    _createElement = function _createElement2(type, ns) {
      var e = _doc.createElementNS
        ? _doc.createElementNS(
            (ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            type
          )
        : _doc.createElement(type);
      return e && e.style ? e : _doc.createElement(type);
    },
    _getComputedProperty = function _getComputedProperty2(
      target,
      property,
      skipPrefixFallback
    ) {
      var cs = getComputedStyle(target);
      return (
        cs[property] ||
        cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) ||
        cs.getPropertyValue(property) ||
        (!skipPrefixFallback &&
          _getComputedProperty2(
            target,
            _checkPropPrefix(property) || property,
            1
          )) ||
        ""
      );
    },
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix2(
      property,
      element,
      preferPrefix
    ) {
      var e = element || _tempDiv,
        s = e.style,
        i = 5;
      if (property in s && !preferPrefix) {
        return property;
      }
      property = property.charAt(0).toUpperCase() + property.substr(1);
      while (i-- && !(_prefixes[i] + property in s)) {}
      return i < 0
        ? null
        : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    },
    _initCore = function _initCore2() {
      if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
          style: {},
        };
        _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0";
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting = gsap.core.reverting;
        _pluginInitted = 1;
      }
    },
    _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
      var owner = target.ownerSVGElement,
        svg = _createElement(
          "svg",
          (owner && owner.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        clone = target.cloneNode(true),
        bbox;
      clone.style.display = "block";
      svg.appendChild(clone);
      _docElement.appendChild(svg);
      try {
        bbox = clone.getBBox();
      } catch (e) {}
      svg.removeChild(clone);
      _docElement.removeChild(svg);
      return bbox;
    },
    _getAttributeFallbacks = function _getAttributeFallbacks2(
      target,
      attributesArray
    ) {
      var i = attributesArray.length;
      while (i--) {
        if (target.hasAttribute(attributesArray[i])) {
          return target.getAttribute(attributesArray[i]);
        }
      }
    },
    _getBBox = function _getBBox2(target) {
      var bounds, cloned;
      try {
        bounds = target.getBBox();
      } catch (error) {
        bounds = _getReparentedCloneBBox(target);
        cloned = 1;
      }
      (bounds && (bounds.width || bounds.height)) ||
        cloned ||
        (bounds = _getReparentedCloneBBox(target));
      return bounds && !bounds.width && !bounds.x && !bounds.y
        ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : bounds;
    },
    _isSVG = function _isSVG2(e) {
      return !!(
        e.getCTM &&
        (!e.parentNode || e.ownerSVGElement) &&
        _getBBox(e)
      );
    },
    _removeProperty = function _removeProperty2(target, property) {
      if (property) {
        var style = target.style,
          first2Chars;
        if (property in _transformProps && property !== _transformOriginProp) {
          property = _transformProp;
        }
        if (style.removeProperty) {
          first2Chars = property.substr(0, 2);
          if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
            property = "-" + property;
          }
          style.removeProperty(
            first2Chars === "--"
              ? property
              : property.replace(_capsExp, "-$1").toLowerCase()
          );
        } else {
          style.removeAttribute(property);
        }
      }
    },
    _addNonTweeningPT = function _addNonTweeningPT2(
      plugin,
      target,
      property,
      beginning,
      end,
      onlySetAtEnd
    ) {
      var pt = new PropTween(
        plugin._pt,
        target,
        property,
        0,
        1,
        onlySetAtEnd
          ? _renderNonTweeningValueOnlyAtEnd
          : _renderNonTweeningValue
      );
      plugin._pt = pt;
      pt.b = beginning;
      pt.e = end;
      plugin._props.push(property);
      return pt;
    },
    _nonConvertibleUnits = {
      deg: 1,
      rad: 1,
      turn: 1,
    },
    _nonStandardLayouts = {
      grid: 1,
      flex: 1,
    },
    _convertToUnit = function _convertToUnit2(target, property, value, unit) {
      var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty =
          (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent2,
        cache,
        isSVG;
      if (
        unit === curUnit ||
        !curValue ||
        _nonConvertibleUnits[unit] ||
        _nonConvertibleUnits[curUnit]
      ) {
        return curValue;
      }
      curUnit !== "px" &&
        !toPixels &&
        (curValue = _convertToUnit2(target, property, value, "px"));
      isSVG = target.getCTM && _isSVG(target);
      if (
        (toPercent || curUnit === "%") &&
        (_transformProps[property] || ~property.indexOf("adius"))
      ) {
        px = isSVG
          ? target.getBBox()[horizontal ? "width" : "height"]
          : target[measureProperty];
        return _round(
          toPercent ? (curValue / px) * amount : (curValue / 100) * px
        );
      }
      style[horizontal ? "width" : "height"] =
        amount + (toPixels ? curUnit : unit);
      parent2 =
        (unit !== "rem" && ~property.indexOf("adius")) ||
        (unit === "em" && target.appendChild && !isRootSVG)
          ? target
          : target.parentNode;
      if (isSVG) {
        parent2 = (target.ownerSVGElement || {}).parentNode;
      }
      if (!parent2 || parent2 === _doc || !parent2.appendChild) {
        parent2 = _doc.body;
      }
      cache = parent2._gsap;
      if (
        cache &&
        toPercent &&
        cache.width &&
        horizontal &&
        cache.time === _ticker.time &&
        !cache.uncache
      ) {
        return _round((curValue / cache.width) * amount);
      } else {
        if (toPercent && (property === "height" || property === "width")) {
          var v = target.style[property];
          target.style[property] = amount + unit;
          px = target[measureProperty];
          v ? (target.style[property] = v) : _removeProperty(target, property);
        } else {
          (toPercent || curUnit === "%") &&
            !_nonStandardLayouts[_getComputedProperty(parent2, "display")] &&
            (style.position = _getComputedProperty(target, "position"));
          parent2 === target && (style.position = "static");
          parent2.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent2.removeChild(_tempDiv);
          style.position = "absolute";
        }
        if (horizontal && toPercent) {
          cache = _getCache(parent2);
          cache.time = _ticker.time;
          cache.width = parent2[measureProperty];
        }
      }
      return _round(
        toPixels
          ? (px * curValue) / amount
          : px && curValue
          ? (amount / px) * curValue
          : 0
      );
    },
    _get = function _get2(target, property, unit, uncache) {
      var value;
      _pluginInitted || _initCore();
      if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) {
          property = property.split(",")[0];
        }
      }
      if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value =
          property !== "transformOrigin"
            ? value[property]
            : value.svg
            ? value.origin
            : _firstTwoOnly(
                _getComputedProperty(target, _transformOriginProp)
              ) +
              " " +
              value.zOrigin +
              "px";
      } else {
        value = target.style[property];
        if (
          !value ||
          value === "auto" ||
          uncache ||
          ~(value + "").indexOf("calc(")
        ) {
          value =
            (_specialProps[property] &&
              _specialProps[property](target, property, unit)) ||
            _getComputedProperty(target, property) ||
            _getProperty(target, property) ||
            (property === "opacity" ? 1 : 0);
        }
      }
      return unit && !~(value + "").trim().indexOf(" ")
        ? _convertToUnit(target, property, value, unit) + unit
        : value;
    },
    _tweenComplexCSSString = function _tweenComplexCSSString2(
      target,
      prop,
      start,
      end
    ) {
      if (!start || start === "none") {
        var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
          prop = p;
          start = s;
        } else if (prop === "borderColor") {
          start = _getComputedProperty(target, "borderTopColor");
        }
      }
      var pt = new PropTween(
          this._pt,
          target.style,
          prop,
          0,
          1,
          _renderComplexString
        ),
        index2 = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        endValues;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";
      if (end === "auto") {
        startValue = target.style[prop];
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        startValue
          ? (target.style[prop] = startValue)
          : _removeProperty(target, prop);
      }
      a = [start, end];
      _colorStringFilter(a);
      start = a[0];
      end = a[1];
      startValues = start.match(_numWithUnitExp) || [];
      endValues = end.match(_numWithUnitExp) || [];
      if (endValues.length) {
        while ((result = _numWithUnitExp.exec(end))) {
          endValue = result[0];
          chunk = end.substring(index2, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (
            chunk.substr(-5) === "rgba(" ||
            chunk.substr(-5) === "hsla("
          ) {
            color = 1;
          }
          if (endValue !== (startValue = startValues[matchIndex++] || "")) {
            startNum = parseFloat(startValue) || 0;
            startUnit = startValue.substr((startNum + "").length);
            endValue.charAt(1) === "=" &&
              (endValue = _parseRelative(startNum, endValue) + startUnit);
            endNum = parseFloat(endValue);
            endUnit = endValue.substr((endNum + "").length);
            index2 = _numWithUnitExp.lastIndex - endUnit.length;
            if (!endUnit) {
              endUnit = endUnit || _config.units[prop] || startUnit;
              if (index2 === end.length) {
                end += endUnit;
                pt.e += endUnit;
              }
            }
            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
            }
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum - startNum,
              m: (color && color < 4) || prop === "zIndex" ? Math.round : 0,
            };
          }
        }
        pt.c = index2 < end.length ? end.substring(index2, end.length) : "";
      } else {
        pt.r =
          prop === "display" && end === "none"
            ? _renderNonTweeningValueOnlyAtEnd
            : _renderNonTweeningValue;
      }
      _relExp.test(end) && (pt.e = 0);
      this._pt = pt;
      return pt;
    },
    _keywordToPercent = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(
      value
    ) {
      var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";
      if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        value = x;
        x = y;
        y = value;
      }
      split[0] = _keywordToPercent[x] || x;
      split[1] = _keywordToPercent[y] || y;
      return split.join(" ");
    },
    _renderClearProps = function _renderClearProps2(ratio, data) {
      if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;
        if (props === "all" || props === true) {
          style.cssText = "";
          clearTransforms = 1;
        } else {
          props = props.split(",");
          i = props.length;
          while (--i > -1) {
            prop = props[i];
            if (_transformProps[prop]) {
              clearTransforms = 1;
              prop =
                prop === "transformOrigin"
                  ? _transformOriginProp
                  : _transformProp;
            }
            _removeProperty(target, prop);
          }
        }
        if (clearTransforms) {
          _removeProperty(target, _transformProp);
          if (cache) {
            cache.svg && target.removeAttribute("transform");
            style.scale = style.rotate = style.translate = "none";
            _parseTransform(target, 1);
            cache.uncache = 1;
            _removeIndependentTransforms(style);
          }
        }
      }
    },
    _specialProps = {
      clearProps: function clearProps(
        plugin,
        target,
        property,
        endValue,
        tween
      ) {
        if (tween.data !== "isFromStart") {
          var pt = (plugin._pt = new PropTween(
            plugin._pt,
            target,
            property,
            0,
            0,
            _renderClearProps
          ));
          pt.u = endValue;
          pt.pr = -10;
          pt.tween = tween;
          plugin._props.push(property);
          return 1;
        }
      },
      /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
    },
    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform2(value) {
      return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    },
    _getComputedTransformMatrixAsArray =
      function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString)
          ? _identity2DMatrix
          : matrixString.substr(7).match(_numExp).map(_round);
      },
    _getMatrix = function _getMatrix2(target, force2D) {
      var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent2,
        nextSibling,
        temp,
        addedToDOM;
      if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix;
        matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
      } else if (
        matrix === _identity2DMatrix &&
        !target.offsetParent &&
        target !== _docElement &&
        !cache.svg
      ) {
        temp = style.display;
        style.display = "block";
        parent2 = target.parentNode;
        if (
          !parent2 ||
          (!target.offsetParent && !target.getBoundingClientRect().width)
        ) {
          addedToDOM = 1;
          nextSibling = target.nextElementSibling;
          _docElement.appendChild(target);
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? (style.display = temp) : _removeProperty(target, "display");
        if (addedToDOM) {
          nextSibling
            ? parent2.insertBefore(target, nextSibling)
            : parent2
            ? parent2.appendChild(target)
            : _docElement.removeChild(target);
        }
      }
      return force2D && matrix.length > 6
        ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]]
        : matrix;
    },
    _applySVGOrigin = function _applySVGOrigin2(
      target,
      origin,
      originIsAbsolute,
      smooth,
      matrixArray,
      pluginToAddPropTweensTo
    ) {
      var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;
      if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin =
          bounds.x +
          (~originSplit[0].indexOf("%")
            ? (xOrigin / 100) * bounds.width
            : xOrigin);
        yOrigin =
          bounds.y +
          (~(originSplit[1] || originSplit[0]).indexOf("%")
            ? (yOrigin / 100) * bounds.height
            : yOrigin);
      } else if (
        matrix !== _identity2DMatrix &&
        (determinant = a * d - b * c)
      ) {
        x =
          xOrigin * (d / determinant) +
          yOrigin * (-c / determinant) +
          (c * ty - d * tx) / determinant;
        y =
          xOrigin * (-b / determinant) +
          yOrigin * (a / determinant) -
          (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
      }
      if (smooth || (smooth !== false && cache.smooth)) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
      } else {
        cache.xOffset = cache.yOffset = 0;
      }
      cache.xOrigin = xOrigin;
      cache.yOrigin = yOrigin;
      cache.smooth = !!smooth;
      cache.origin = origin;
      cache.originIsAbsolute = !!originIsAbsolute;
      target.style[_transformOriginProp] = "0px 0px";
      if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(
          pluginToAddPropTweensTo,
          cache,
          "xOrigin",
          xOriginOld,
          xOrigin
        );
        _addNonTweeningPT(
          pluginToAddPropTweensTo,
          cache,
          "yOrigin",
          yOriginOld,
          yOrigin
        );
        _addNonTweeningPT(
          pluginToAddPropTweensTo,
          cache,
          "xOffset",
          xOffsetOld,
          cache.xOffset
        );
        _addNonTweeningPT(
          pluginToAddPropTweensTo,
          cache,
          "yOffset",
          yOffsetOld,
          cache.yOffset
        );
      }
      target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    },
    _parseTransform = function _parseTransform2(target, uncache) {
      var cache = target._gsap || new GSCache(target);
      if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
      }
      var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        cs = getComputedStyle(target),
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
      x =
        y =
        z =
        rotation =
        rotationX =
        rotationY =
        skewX =
        skewY =
        perspective =
          0;
      scaleX = scaleY = 1;
      cache.svg = !!(target.getCTM && _isSVG(target));
      if (cs.translate) {
        if (
          cs.translate !== "none" ||
          cs.scale !== "none" ||
          cs.rotate !== "none"
        ) {
          style[_transformProp] =
            (cs.translate !== "none"
              ? "translate3d(" +
                (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") +
            (cs.scale !== "none"
              ? "scale(" + cs.scale.split(" ").join(",") + ") "
              : "") +
            (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        }
        style.scale = style.rotate = style.translate = "none";
      }
      matrix = _getMatrix(target, cache.svg);
      if (cache.svg) {
        if (cache.uncache) {
          t2 = target.getBBox();
          origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
          t1 = "";
        } else {
          t1 = !uncache && target.getAttribute("data-svg-origin");
        }
        _applySVGOrigin(
          target,
          t1 || origin,
          !!t1 || cache.originIsAbsolute,
          cache.smooth !== false,
          matrix
        );
      }
      xOrigin = cache.xOrigin || 0;
      yOrigin = cache.yOrigin || 0;
      if (matrix !== _identity2DMatrix) {
        a = matrix[0];
        b = matrix[1];
        c = matrix[2];
        d = matrix[3];
        x = a12 = matrix[4];
        y = a22 = matrix[5];
        if (matrix.length === 6) {
          scaleX = Math.sqrt(a * a + b * b);
          scaleY = Math.sqrt(d * d + c * c);
          rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
          skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
          skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
          if (cache.svg) {
            x -= xOrigin - (xOrigin * a + yOrigin * c);
            y -= yOrigin - (xOrigin * b + yOrigin * d);
          }
        } else {
          a32 = matrix[6];
          a42 = matrix[7];
          a13 = matrix[8];
          a23 = matrix[9];
          a33 = matrix[10];
          a43 = matrix[11];
          x = matrix[12];
          y = matrix[13];
          z = matrix[14];
          angle = _atan2(a32, a33);
          rotationX = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t1;
            a22 = t2;
            a32 = t3;
          }
          angle = _atan2(-c, a33);
          rotationY = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a * cos - a13 * sin;
            t2 = b * cos - a23 * sin;
            t3 = c * cos - a33 * sin;
            a43 = d * sin + a43 * cos;
            a = t1;
            b = t2;
            c = t3;
          }
          angle = _atan2(b, a);
          rotation = angle * _RAD2DEG;
          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t1 = a * cos + b * sin;
            t2 = a12 * cos + a22 * sin;
            b = b * cos - a * sin;
            a22 = a22 * cos - a12 * sin;
            a = t1;
            a12 = t2;
          }
          if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
            rotationX = rotation = 0;
            rotationY = 180 - rotationY;
          }
          scaleX = _round(Math.sqrt(a * a + b * b + c * c));
          scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
          angle = _atan2(a12, a22);
          skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
          perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
          t1 = target.getAttribute("transform");
          cache.forceCSS =
            target.setAttribute("transform", "") ||
            !_isNullTransform(_getComputedProperty(target, _transformProp));
          t1 && target.setAttribute("transform", t1);
        }
      }
      if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
          scaleX *= -1;
          skewX += rotation <= 0 ? 180 : -180;
          rotation += rotation <= 0 ? 180 : -180;
        } else {
          scaleY *= -1;
          skewX += skewX <= 0 ? 180 : -180;
        }
      }
      uncache = uncache || cache.uncache;
      cache.x =
        x -
        ((cache.xPercent =
          x &&
          ((!uncache && cache.xPercent) ||
            (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0)))
          ? (target.offsetWidth * cache.xPercent) / 100
          : 0) +
        px;
      cache.y =
        y -
        ((cache.yPercent =
          y &&
          ((!uncache && cache.yPercent) ||
            (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
          ? (target.offsetHeight * cache.yPercent) / 100
          : 0) +
        px;
      cache.z = z + px;
      cache.scaleX = _round(scaleX);
      cache.scaleY = _round(scaleY);
      cache.rotation = _round(rotation) + deg;
      cache.rotationX = _round(rotationX) + deg;
      cache.rotationY = _round(rotationY) + deg;
      cache.skewX = skewX + deg;
      cache.skewY = skewY + deg;
      cache.transformPerspective = perspective + px;
      if (
        (cache.zOrigin =
          parseFloat(origin.split(" ")[2]) || (!uncache && cache.zOrigin) || 0)
      ) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
      }
      cache.xOffset = cache.yOffset = 0;
      cache.force3D = _config.force3D;
      cache.renderTransform = cache.svg
        ? _renderSVGTransforms
        : _supports3D
        ? _renderCSSTransforms
        : _renderNon3DTransforms;
      cache.uncache = 0;
      return cache;
    },
    _firstTwoOnly = function _firstTwoOnly2(value) {
      return (value = value.split(" "))[0] + " " + value[1];
    },
    _addPxTranslate = function _addPxTranslate2(target, start, value) {
      var unit = getUnit(start);
      return (
        _round(
          parseFloat(start) +
            parseFloat(_convertToUnit(target, "x", value + "px", unit))
        ) + unit
      );
    },
    _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
      cache.z = "0px";
      cache.rotationY = cache.rotationX = "0deg";
      cache.force3D = 0;
      _renderCSSTransforms(ratio, cache);
    },
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
      var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D =
          (force3D === "auto" && ratio && ratio !== 1) || force3D === true;
      if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
      }
      if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
      }
      if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
      }
      if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms +=
          z !== _zeroPx || use3D
            ? "translate3d(" + x + ", " + y + ", " + z + ") "
            : "translate(" + x + ", " + y + _endParenthesis;
      }
      if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
      }
      if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
      }
      if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
      }
      if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
      }
      if (scaleX !== 1 || scaleY !== 1) {
        transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
      }
      target.style[_transformProp] = transforms || "translate(0, 0)";
    },
    _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
      var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;
      rotation = parseFloat(rotation);
      skewX = parseFloat(skewX);
      skewY = parseFloat(skewY);
      if (skewY) {
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
      }
      if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
          skewY *= _DEG2RAD;
          temp = Math.tan(skewX - skewY);
          temp = Math.sqrt(1 + temp * temp);
          a12 *= temp;
          a22 *= temp;
          if (skewY) {
            temp = Math.tan(skewY);
            temp = Math.sqrt(1 + temp * temp);
            a11 *= temp;
            a21 *= temp;
          }
        }
        a11 = _round(a11);
        a21 = _round(a21);
        a12 = _round(a12);
        a22 = _round(a22);
      } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
      }
      if (
        (tx && !~(x + "").indexOf("px")) ||
        (ty && !~(y + "").indexOf("px"))
      ) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
      }
      if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
      }
      if (xPercent || yPercent) {
        temp = target.getBBox();
        tx = _round(tx + (xPercent / 100) * temp.width);
        ty = _round(ty + (yPercent / 100) * temp.height);
      }
      temp =
        "matrix(" +
        a11 +
        "," +
        a21 +
        "," +
        a12 +
        "," +
        a22 +
        "," +
        tx +
        "," +
        ty +
        ")";
      target.setAttribute("transform", temp);
      forceCSS && (target.style[_transformProp] = temp);
    },
    _addRotationalPropTween = function _addRotationalPropTween2(
      plugin,
      target,
      property,
      startNum,
      endValue
    ) {
      var cap = 360,
        isString = _isString(endValue),
        endNum =
          parseFloat(endValue) *
          (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;
      if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
          change %= cap;
          if (change !== change % (cap / 2)) {
            change += change < 0 ? cap : -360;
          }
        }
        if (direction === "cw" && change < 0) {
          change = ((change + cap * _bigNum) % cap) - ~~(change / cap) * cap;
        } else if (direction === "ccw" && change > 0) {
          change = ((change - cap * _bigNum) % cap) - ~~(change / cap) * cap;
        }
      }
      plugin._pt = pt = new PropTween(
        plugin._pt,
        target,
        property,
        startNum,
        change,
        _renderPropWithEnd
      );
      pt.e = finalValue;
      pt.u = "deg";
      plugin._props.push(property);
      return pt;
    },
    _assign = function _assign2(target, source) {
      for (var p in source) {
        target[p] = source[p];
      }
      return target;
    },
    _addRawTransformPTs = function _addRawTransformPTs2(
      plugin,
      transforms,
      target
    ) {
      var startCache = _assign({}, target._gsap),
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        style = target.style,
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;
      if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
      } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
      }
      for (p in _transformProps) {
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          startNum =
            startUnit !== endUnit
              ? _convertToUnit(target, p, startValue, endUnit)
              : parseFloat(startValue);
          endNum = parseFloat(endValue);
          plugin._pt = new PropTween(
            plugin._pt,
            endCache,
            p,
            startNum,
            endNum - startNum,
            _renderCSSProp
          );
          plugin._pt.u = endUnit || 0;
          plugin._props.push(p);
        }
      }
      _assign(endCache, startCache);
    };
  _forEachName("padding,margin,Width,Radius", function (name, index2) {
    var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index2 < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(
        function (side) {
          return index2 < 2 ? name + side : "border" + side + name;
        }
      );
    _specialProps[index2 > 1 ? "border" + name : name] = function (
      plugin,
      target,
      property,
      endValue,
      tween
    ) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return (vars[prop] = a[i] = a[i] || a[((i - 1) / 2) | 0]);
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index2, targets) {
      var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (
          _plugins[p] &&
          _checkPlugin(p, vars, tween, index2, target, targets)
        ) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index2, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (
            getComputedStyle(target).getPropertyValue(p) + ""
          ).trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit
            ? startUnit !== endUnit &&
              (startValue =
                _convertToUnit(target, p, startValue, endUnit) + endUnit)
            : startUnit && (endValue += startUnit);
          this.add(
            style,
            "setProperty",
            startValue,
            endValue,
            index2,
            targets,
            0,
            0,
            p
          );
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue =
              typeof startAt[p] === "function"
                ? startAt[p].call(tween, index2, target, targets)
                : startAt[p];
            _isString(startValue) &&
              ~startValue.indexOf("random(") &&
              (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") ||
              startValue === "auto" ||
              (startValue +=
                _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" &&
              (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative =
            type === "string" &&
            endValue.charAt(1) === "=" &&
            endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (
                startNum === 1 &&
                _get(target, "visibility") === "hidden" &&
                endNum
              ) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(
                this,
                style,
                "visibility",
                startNum ? "inherit" : "hidden",
                endNum ? "inherit" : "hidden",
                !endNum
              );
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = p in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p);
            if (!transformPropTween) {
              cache = target._gsap;
              (cache.renderTransform && !vars.parseTransform) ||
                _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(
                this._pt,
                style,
                _transformProp,
                0,
                1,
                cache.renderTransform,
                cache,
                0,
                -1
              );
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(
                this._pt,
                cache,
                "scaleY",
                cache.scaleY,
                (relative
                  ? _parseRelative(cache.scaleY, relative + endNum)
                  : endNum) - cache.scaleY || 0,
                _renderCSSProp
              );
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(
                _transformOriginProp,
                0,
                style[_transformOriginProp]
              );
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin &&
                  _addNonTweeningPT(
                    this,
                    cache,
                    "zOrigin",
                    cache.zOrigin,
                    endUnit
                  );
                _addNonTweeningPT(
                  this,
                  style,
                  p,
                  _firstTwoOnly(startValue),
                  _firstTwoOnly(endValue)
                );
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(
                this,
                cache,
                p,
                startNum,
                relative
                  ? _parseRelative(startNum, relative + endValue)
                  : endValue
              );
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
          if (
            isTransformRelated ||
            ((endNum || endNum === 0) &&
              (startNum || startNum === 0) &&
              !_complexExp.test(endValue) &&
              p in style)
          ) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit =
              getUnit(endValue) ||
              (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit &&
              (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(
              this._pt,
              isTransformRelated ? cache : style,
              p,
              startNum,
              (relative
                ? _parseRelative(startNum, relative + endNum)
                : endNum) - startNum,
              !isTransformRelated &&
              (endUnit === "px" || p === "zIndex") &&
              vars.autoRound !== false
                ? _renderRoundedCSSProp
                : _renderCSSProp
            );
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(
                target,
                p,
                startValue || target[p],
                relative ? relative + endValue : endValue,
                index2,
                targets
              );
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(
              this,
              target,
              p,
              startValue,
              relative ? relative + endValue : endValue
            );
          }
          isTransformRelated ||
            (p in style
              ? inlineProps.push(p, 0, style[p])
              : typeof target[p] === "function"
              ? inlineProps.push(p, 2, target[p]())
              : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render(ratio, data) {
      if (data.tween._time || !_reverting()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps &&
        property !== _transformOriginProp &&
        (target._gsap.x || _get(target, "x"))
        ? plugin && _recentSetterPlugin === plugin
          ? property === "scale"
            ? _setterScale
            : _setterTransform
          : (_recentSetterPlugin = plugin || {}) &&
            (property === "scale"
              ? _setterScaleWithRender
              : _setterTransformWithRender)
        : target.style && !_isUndefined(target.style[property])
        ? _setterCSSStyle
        : ~property.indexOf("-")
        ? _setterCSSProp
        : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix,
    },
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(
      positionAndScale + "," + rotation + "," + others,
      function (name) {
        _transformProps[name] = 1;
      }
    );
    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
  );
  _forEachName(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (name) {
      _config.units[name] = "px";
    }
  );
  gsap.registerPlugin(CSSPlugin);
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  gsapWithCSS.core.Tween;
  const navMenu = () => {
    const navMenuTrigger = document.querySelector("[nav-menu='trigger']");
    const navMenu2 = document.querySelector("[nav-menu='component']");
    const navMenuContain = document.querySelector("[nav-menu='contain']");
    const mainNavBrand = document.querySelector("[main-nav='brand']");
    const navMenuBrand = document.querySelector("[nav-menu='brand']");
    const navMenuLinks = document.querySelectorAll("[nav-menu='link-item']");
    const navMenuInfoText = document.querySelector("[nav-menu='info-text']");
    const navMenuLinkSocial = document.querySelectorAll(
      "[nav-menu='social-link']"
    );
    if (
      !navMenuTrigger ||
      !navMenu2 ||
      !navMenuContain ||
      !navMenuBrand ||
      !navMenuLinks ||
      !navMenuInfoText ||
      !navMenuLinkSocial
    )
      return;
    gsapWithCSS.set(navMenu2, {
      clipPath: "inset(0% 0% 100% 0%)",
    });
    gsapWithCSS.set([navMenuBrand, navMenuLinks, navMenuLinkSocial], {
      y: "100%",
      opacity: 0,
    });
    gsapWithCSS.set(navMenuInfoText, {
      y: "20%",
      opacity: 0,
    });
    const openTl = gsapWithCSS.timeline({ paused: true });
    const closeTl = gsapWithCSS.timeline({ paused: true });
    openTl
      .to(navMenu2, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "expo.inOut",
        duration: 1,
      })
      .to(
        navMenuBrand,
        {
          y: "0%",
          duration: 1,
          opacity: 1,
          ease: "expo.out",
        },
        "-=0.4"
      )
      .to(
        mainNavBrand,
        {
          x: "-100%",
          duration: 1,
          opacity: 0,
          ease: "expo.out",
        },
        "-=1.4"
      )
      .to(
        navMenuLinks,
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
        navMenuInfoText,
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.9"
      )
      .to(
        navMenuLinkSocial,
        {
          y: "0%",
          duration: 1.2,
          opacity: 1,
          ease: "expo.out",
          stagger: 0.1,
        },
        "-=1"
      );
    closeTl
      .to([navMenuBrand, navMenuLinks], {
        y: "100%",
        duration: 0.6,
        ease: "expo.in",
        opacity: 0,
        stagger: 0.05,
      })
      .to(
        [navMenuInfoText, navMenuLinkSocial],
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
        navMenu2,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "expo.inOut",
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        mainNavBrand,
        {
          x: "0%",
          duration: 0.8,
          opacity: 1,
          ease: "expo.out",
        },
        "-=0.2"
      );
    navMenuTrigger.addEventListener("click", () => {
      const isOpen = navMenuTrigger.getAttribute("hamburger-state") === "open";
      const newState = isOpen ? "closed" : "open";
      navMenuTrigger.setAttribute("hamburger-state", newState);
      if (newState === "open") {
        closeTl.pause();
        openTl.play(0);
      } else {
        openTl.pause();
        closeTl.play(0);
      }
    });
  };
  const initNavMenu = () => {
    navMenu();
  };
  const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 4278190080;
        }
      }
      noiseData.push(idata);
    };
    const paintNoise = () => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }
      ctx.putImageData(noiseData[frame], 0, 0);
    };
    const loop2 = () => {
      paintNoise();
      window.setTimeout(() => {
        window.requestAnimationFrame(loop2);
      }, 1e3 / 25);
    };
    const setup = () => {
      wWidth = window.innerWidth;
      wHeight = window.innerHeight;
      canvas.width = wWidth;
      canvas.height = wHeight;
      for (let i = 0; i < 10; i++) {
        createNoise();
      }
      loop2();
    };
    (() => {
      canvas = document.getElementById("noise");
      ctx = canvas.getContext("2d");
      setup();
    })();
  };
  const initNoise = () => {
    noise();
  };
  const globalInit = () => {
    navigationInit();
    footerInit();
    initGradientFollow();
    initNavMenu();
    initNoise();
  };
  const exampleComponent = () => {
    const element = queryElement(".example-component");
    if (!element) return;
    addClass(element, "is-initialized");
    element.addEventListener("click", () => {
      console.log("Example component clicked!");
    });
  };
  const initializeComponents = () => {
    exampleComponent();
  };
  document.addEventListener("DOMContentLoaded", () => {
    globalInit();
    initializeComponents();
    PageRouter();
  });
})();
