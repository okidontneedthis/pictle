const timestamp = 1755738976933;
const build = [
  "/pictle/_app/start-6282a34e.js",
  "/pictle/_app/layout.svelte-3ca0e7cf.js",
  "/pictle/_app/error.svelte-3471433e.js",
  "/pictle/_app/pages/index.svelte-10b8b65a.js",
  "/pictle/_app/pages/gallery.svelte-4d0e9e9d.js",
  "/pictle/_app/pages/draw.svelte-112f2a39.js",
  "/pictle/_app/chunks/vendor-9be25129.js",
  "/pictle/_app/chunks/preload-helper-1bc7907a.js",
  "/pictle/_app/chunks/times-bcedc8d0.js",
  "/pictle/_app/chunks/app-6ffbfc37.js",
  "/pictle/_app/assets/app-fd91bb74.css",
  "/pictle/_app/chunks/db-62e14f2b.js",
  "/pictle/_app/chunks/fireboot-d479453d.js",
  "/pictle/_app/chunks/index.esm-ebb5526c.js"
];
const files = [
  "/pictle/favicon.ico",
  "/pictle/favicon.png",
  "/pictle/fonts/ClearSans-Bold-webfont.woff",
  "/pictle/fonts/ClearSans-Light-webfont.woff",
  "/pictle/fonts/ClearSans-Regular-webfont.woff",
  "/pictle/googlebcd8efa0f7857fa5.html",
  "/pictle/icon_128.png",
  "/pictle/icon_144.png",
  "/pictle/icon_192.png",
  "/pictle/icon_256.png",
  "/pictle/icon_512.png",
  "/pictle/icon_maskable_128.png",
  "/pictle/icon_maskable_144.png",
  "/pictle/icon_maskable_192.png",
  "/pictle/icon_maskable_256.png",
  "/pictle/icon_maskable_512.png",
  "/pictle/icon_mono_128.png",
  "/pictle/icon_mono_144.png",
  "/pictle/icon_mono_192.png",
  "/pictle/icon_mono_256.png",
  "/pictle/icon_mono_512.png",
  "/pictle/icon_mono_maskable_128.png",
  "/pictle/icon_mono_maskable_144.png",
  "/pictle/icon_mono_maskable_192.png",
  "/pictle/icon_mono_maskable_256.png",
  "/pictle/icon_mono_maskable_512.png",
  "/pictle/icon_transparent_128.png",
  "/pictle/icon_transparent_144.png",
  "/pictle/icon_transparent_192.png",
  "/pictle/icon_transparent_256.png",
  "/pictle/icon_transparent_512.png",
  "/pictle/manifest.json",
  "/pictle/pictle_icon.png",
  "/pictle/pictle_product_hunt.png",
  "/pictle/pictle_product_hunt_2.png",
  "/pictle/pictle_social.png"
];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isIndexedDBAvailable() {
  return typeof indexedDB === "object";
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
function areCookiesEnabled() {
  if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
    return false;
  }
  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_NAME = "FirebaseError";
class FirebaseError extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}
class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
const PATTERN = /\{\$([^}]+)}/g;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_INTERVAL_MILLIS = 1e3;
const DEFAULT_BACKOFF_FACTOR = 2;
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
const RANDOM_FACTOR = 0.5;
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
  const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
  const randomWait = Math.round(RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
class Component {
  constructor(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$2 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Provider {
  constructor(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
    this.instancesOptions = /* @__PURE__ */ new Map();
    this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$2 });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME$2) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME$2) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME$2) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {
        }
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME$2) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$2;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$2 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ComponentContainer {
  constructor(name2) {
    this.name = name2;
    this.providers = /* @__PURE__ */ new Map();
  }
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  getProvider(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    const provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
const defaultLogLevel = LogLevel.INFO;
const ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
const defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
class Logger {
  constructor(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
}
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
const name$o = "@firebase/app";
const version$1$1 = "0.7.13";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger$2 = new Logger("@firebase/app");
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3$1 = "@firebase/storage-compat";
const name$2$1 = "@firebase/firestore";
const name$1$1 = "@firebase/firestore-compat";
const name$p = "firebase";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
const PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3$1]: "fire-gcs-compat",
  [name$2$1]: "fire-fst",
  [name$1$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name$p]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _apps = /* @__PURE__ */ new Map();
const _components = /* @__PURE__ */ new Map();
function _addComponent(app2, component) {
  try {
    app2.container.addComponent(component);
  } catch (e) {
    logger$2.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger$2.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component);
  }
  return true;
}
function _getProvider(app2, name2) {
  return app2.container.getProvider(name2);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS$1 = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["bad-app-name"]: "Illegal App name: '{$appName}",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function."
};
const ERROR_FACTORY$4 = new ErrorFactory("app", "Firebase", ERRORS$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY$4.create("app-deleted", { appName: this._name });
    }
  }
}
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = { name: name3 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME$1, automaticDataCollectionEnabled: false }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY$4.create("bad-app-name", {
      appName: String(name2)
    });
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY$4.create("duplicate-app", { appName: name2 });
    }
  }
  const container = new ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME$1) {
  const app2 = _apps.get(name2);
  if (!app2) {
    throw ERROR_FACTORY$4.create("no-app", { appName: name2 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version2}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger$2.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version2 }), "VERSION"));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1$1, variant);
  registerVersion(name$o, version$1$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
var name$3 = "firebase";
var version$3 = "9.6.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name$3, version$3, "app");
function toArray(arr) {
  return Array.prototype.slice.call(arr);
}
function promisifyRequest(request) {
  return new Promise(function(resolve, reject) {
    request.onsuccess = function() {
      resolve(request.result);
    };
    request.onerror = function() {
      reject(request.error);
    };
  });
}
function promisifyRequestCall(obj, method, args) {
  var request;
  var p = new Promise(function(resolve, reject) {
    request = obj[method].apply(obj, args);
    promisifyRequest(request).then(resolve, reject);
  });
  p.request = request;
  return p;
}
function promisifyCursorRequestCall(obj, method, args) {
  var p = promisifyRequestCall(obj, method, args);
  return p.then(function(value) {
    if (!value)
      return;
    return new Cursor(value, p.request);
  });
}
function proxyProperties(ProxyClass, targetProp, properties) {
  properties.forEach(function(prop) {
    Object.defineProperty(ProxyClass.prototype, prop, {
      get: function() {
        return this[targetProp][prop];
      },
      set: function(val) {
        this[targetProp][prop] = val;
      }
    });
  });
}
function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return this[targetProp][prop].apply(this[targetProp], arguments);
    };
  });
}
function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
  properties.forEach(function(prop) {
    if (!(prop in Constructor.prototype))
      return;
    ProxyClass.prototype[prop] = function() {
      return promisifyCursorRequestCall(this[targetProp], prop, arguments);
    };
  });
}
function Index(index) {
  this._index = index;
}
proxyProperties(Index, "_index", [
  "name",
  "keyPath",
  "multiEntry",
  "unique"
]);
proxyRequestMethods(Index, "_index", IDBIndex, [
  "get",
  "getKey",
  "getAll",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(Index, "_index", IDBIndex, [
  "openCursor",
  "openKeyCursor"
]);
function Cursor(cursor, request) {
  this._cursor = cursor;
  this._request = request;
}
proxyProperties(Cursor, "_cursor", [
  "direction",
  "key",
  "primaryKey",
  "value"
]);
proxyRequestMethods(Cursor, "_cursor", IDBCursor, [
  "update",
  "delete"
]);
["advance", "continue", "continuePrimaryKey"].forEach(function(methodName) {
  if (!(methodName in IDBCursor.prototype))
    return;
  Cursor.prototype[methodName] = function() {
    var cursor = this;
    var args = arguments;
    return Promise.resolve().then(function() {
      cursor._cursor[methodName].apply(cursor._cursor, args);
      return promisifyRequest(cursor._request).then(function(value) {
        if (!value)
          return;
        return new Cursor(value, cursor._request);
      });
    });
  };
});
function ObjectStore(store) {
  this._store = store;
}
ObjectStore.prototype.createIndex = function() {
  return new Index(this._store.createIndex.apply(this._store, arguments));
};
ObjectStore.prototype.index = function() {
  return new Index(this._store.index.apply(this._store, arguments));
};
proxyProperties(ObjectStore, "_store", [
  "name",
  "keyPath",
  "indexNames",
  "autoIncrement"
]);
proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "put",
  "add",
  "delete",
  "clear",
  "get",
  "getAll",
  "getKey",
  "getAllKeys",
  "count"
]);
proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, [
  "openCursor",
  "openKeyCursor"
]);
proxyMethods(ObjectStore, "_store", IDBObjectStore, [
  "deleteIndex"
]);
function Transaction(idbTransaction) {
  this._tx = idbTransaction;
  this.complete = new Promise(function(resolve, reject) {
    idbTransaction.oncomplete = function() {
      resolve();
    };
    idbTransaction.onerror = function() {
      reject(idbTransaction.error);
    };
    idbTransaction.onabort = function() {
      reject(idbTransaction.error);
    };
  });
}
Transaction.prototype.objectStore = function() {
  return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
};
proxyProperties(Transaction, "_tx", [
  "objectStoreNames",
  "mode"
]);
proxyMethods(Transaction, "_tx", IDBTransaction, [
  "abort"
]);
function UpgradeDB(db, oldVersion, transaction) {
  this._db = db;
  this.oldVersion = oldVersion;
  this.transaction = new Transaction(transaction);
}
UpgradeDB.prototype.createObjectStore = function() {
  return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
};
proxyProperties(UpgradeDB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(UpgradeDB, "_db", IDBDatabase, [
  "deleteObjectStore",
  "close"
]);
function DB(db) {
  this._db = db;
}
DB.prototype.transaction = function() {
  return new Transaction(this._db.transaction.apply(this._db, arguments));
};
proxyProperties(DB, "_db", [
  "name",
  "version",
  "objectStoreNames"
]);
proxyMethods(DB, "_db", IDBDatabase, [
  "close"
]);
["openCursor", "openKeyCursor"].forEach(function(funcName) {
  [ObjectStore, Index].forEach(function(Constructor) {
    if (!(funcName in Constructor.prototype))
      return;
    Constructor.prototype[funcName.replace("open", "iterate")] = function() {
      var args = toArray(arguments);
      var callback = args[args.length - 1];
      var nativeObject = this._store || this._index;
      var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
      request.onsuccess = function() {
        callback(request.result);
      };
    };
  });
});
[Index, ObjectStore].forEach(function(Constructor) {
  if (Constructor.prototype.getAll)
    return;
  Constructor.prototype.getAll = function(query, count) {
    var instance = this;
    var items = [];
    return new Promise(function(resolve) {
      instance.iterateCursor(query, function(cursor) {
        if (!cursor) {
          resolve(items);
          return;
        }
        items.push(cursor.value);
        if (count !== void 0 && items.length == count) {
          resolve(items);
          return;
        }
        cursor.continue();
      });
    });
  };
});
function openDb(name2, version2, upgradeCallback) {
  var p = promisifyRequestCall(indexedDB, "open", [name2, version2]);
  var request = p.request;
  if (request) {
    request.onupgradeneeded = function(event) {
      if (upgradeCallback) {
        upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
      }
    };
  }
  return p.then(function(db) {
    return new DB(db);
  });
}
function deleteDb(name2) {
  return promisifyRequestCall(indexedDB, "deleteDatabase", [name2]);
}
const name$2 = "@firebase/installations";
const version$2 = "0.5.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_TIMEOUT_MS = 1e4;
const PACKAGE_VERSION = `w:${version$2}`;
const INTERNAL_AUTH_VERSION = "FIS_v2";
const INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
const SERVICE$1 = "installations";
const SERVICE_NAME$1 = "Installations";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP$1 = {
  ["missing-app-config-values"]: 'Missing App configuration value: "{$valueName}"',
  ["not-registered"]: "Firebase Installation is not registered.",
  ["installation-not-found"]: "Firebase Installation not found.",
  ["request-failed"]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  ["app-offline"]: "Could not process request. Application offline.",
  ["delete-pending-registration"]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY$3 = new ErrorFactory(SERVICE$1, SERVICE_NAME$1, ERROR_DESCRIPTION_MAP$1);
function isServerError(error) {
  return error instanceof FirebaseError && error.code.includes("request-failed");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint({ projectId }) {
  return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
  return {
    token: response.token,
    requestStatus: 2,
    expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
    creationTime: Date.now()
  };
}
async function getErrorFromResponse(requestName, response) {
  const responseJson = await response.json();
  const errorData = responseJson.error;
  return ERROR_FACTORY$3.create("request-failed", {
    requestName,
    serverCode: errorData.code,
    serverMessage: errorData.message,
    serverStatus: errorData.status
  });
}
function getHeaders$2({ apiKey }) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
function getHeadersWithAuth(appConfig, { refreshToken }) {
  const headers = getHeaders$2(appConfig);
  headers.append("Authorization", getAuthorizationHeader(refreshToken));
  return headers;
}
async function retryIfServerError(fn) {
  const result = await fn();
  if (result.status >= 500 && result.status < 600) {
    return fn();
  }
  return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
  return Number(responseExpiresIn.replace("s", "000"));
}
function getAuthorizationHeader(refreshToken) {
  return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function createInstallationRequest(appConfig, { fid }) {
  const endpoint = getInstallationsEndpoint(appConfig);
  const headers = getHeaders$2(appConfig);
  const body = {
    fid,
    authVersion: INTERNAL_AUTH_VERSION,
    appId: appConfig.appId,
    sdkVersion: PACKAGE_VERSION
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const registeredInstallationEntry = {
      fid: responseValue.fid || fid,
      registrationStatus: 2,
      refreshToken: responseValue.refreshToken,
      authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
    };
    return registeredInstallationEntry;
  } else {
    throw await getErrorFromResponse("Create Installation", response);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep$1(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
  const b64 = btoa(String.fromCharCode(...array));
  return b64.replace(/\+/g, "-").replace(/\//g, "_");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = "";
function generateFid() {
  try {
    const fidByteArray = new Uint8Array(17);
    const crypto = self.crypto || self.msCrypto;
    crypto.getRandomValues(fidByteArray);
    fidByteArray[0] = 112 + fidByteArray[0] % 16;
    const fid = encode(fidByteArray);
    return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
  } catch (_a) {
    return INVALID_FID;
  }
}
function encode(fidByteArray) {
  const b64String = bufferToBase64UrlSafe(fidByteArray);
  return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getKey$1(appConfig) {
  return `${appConfig.appName}!${appConfig.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fidChangeCallbacks = /* @__PURE__ */ new Map();
function fidChanged(appConfig, fid) {
  const key = getKey$1(appConfig);
  callFidChangeCallbacks(key, fid);
  broadcastFidChange(key, fid);
}
function callFidChangeCallbacks(key, fid) {
  const callbacks = fidChangeCallbacks.get(key);
  if (!callbacks) {
    return;
  }
  for (const callback of callbacks) {
    callback(fid);
  }
}
function broadcastFidChange(key, fid) {
  const channel = getBroadcastChannel();
  if (channel) {
    channel.postMessage({ key, fid });
  }
  closeBroadcastChannel();
}
let broadcastChannel = null;
function getBroadcastChannel() {
  if (!broadcastChannel && "BroadcastChannel" in self) {
    broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
    broadcastChannel.onmessage = (e) => {
      callFidChangeCallbacks(e.data.key, e.data.fid);
    };
  }
  return broadcastChannel;
}
function closeBroadcastChannel() {
  if (fidChangeCallbacks.size === 0 && broadcastChannel) {
    broadcastChannel.close();
    broadcastChannel = null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME$1 = "firebase-installations-database";
const DATABASE_VERSION$1 = 1;
const OBJECT_STORE_NAME$1 = "firebase-installations-store";
let dbPromise$1 = null;
function getDbPromise$1() {
  if (!dbPromise$1) {
    dbPromise$1 = openDb(DATABASE_NAME$1, DATABASE_VERSION$1, (upgradeDB) => {
      switch (upgradeDB.oldVersion) {
        case 0:
          upgradeDB.createObjectStore(OBJECT_STORE_NAME$1);
      }
    });
  }
  return dbPromise$1;
}
async function set(appConfig, value) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  const objectStore = tx.objectStore(OBJECT_STORE_NAME$1);
  const oldValue = await objectStore.get(key);
  await objectStore.put(value, key);
  await tx.complete;
  if (!oldValue || oldValue.fid !== value.fid) {
    fidChanged(appConfig, value.fid);
  }
  return value;
}
async function remove(appConfig) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME$1).delete(key);
  await tx.complete;
}
async function update(appConfig, updateFn) {
  const key = getKey$1(appConfig);
  const db = await getDbPromise$1();
  const tx = db.transaction(OBJECT_STORE_NAME$1, "readwrite");
  const store = tx.objectStore(OBJECT_STORE_NAME$1);
  const oldValue = await store.get(key);
  const newValue = updateFn(oldValue);
  if (newValue === void 0) {
    await store.delete(key);
  } else {
    await store.put(newValue, key);
  }
  await tx.complete;
  if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
    fidChanged(appConfig, newValue.fid);
  }
  return newValue;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getInstallationEntry(appConfig) {
  let registrationPromise;
  const installationEntry = await update(appConfig, (oldEntry) => {
    const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
    const entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry2);
    registrationPromise = entryWithPromise.registrationPromise;
    return entryWithPromise.installationEntry;
  });
  if (installationEntry.fid === INVALID_FID) {
    return { installationEntry: await registrationPromise };
  }
  return {
    installationEntry,
    registrationPromise
  };
}
function updateOrCreateInstallationEntry(oldEntry) {
  const entry = oldEntry || {
    fid: generateFid(),
    registrationStatus: 0
  };
  return clearTimedOutRequest(entry);
}
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
  if (installationEntry.registrationStatus === 0) {
    if (!navigator.onLine) {
      const registrationPromiseWithError = Promise.reject(ERROR_FACTORY$3.create("app-offline"));
      return {
        installationEntry,
        registrationPromise: registrationPromiseWithError
      };
    }
    const inProgressEntry = {
      fid: installationEntry.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    const registrationPromise = registerInstallation(appConfig, inProgressEntry);
    return { installationEntry: inProgressEntry, registrationPromise };
  } else if (installationEntry.registrationStatus === 1) {
    return {
      installationEntry,
      registrationPromise: waitUntilFidRegistration(appConfig)
    };
  } else {
    return { installationEntry };
  }
}
async function registerInstallation(appConfig, installationEntry) {
  try {
    const registeredInstallationEntry = await createInstallationRequest(appConfig, installationEntry);
    return set(appConfig, registeredInstallationEntry);
  } catch (e) {
    if (isServerError(e) && e.customData.serverCode === 409) {
      await remove(appConfig);
    } else {
      await set(appConfig, {
        fid: installationEntry.fid,
        registrationStatus: 0
      });
    }
    throw e;
  }
}
async function waitUntilFidRegistration(appConfig) {
  let entry = await updateInstallationRequest(appConfig);
  while (entry.registrationStatus === 1) {
    await sleep$1(100);
    entry = await updateInstallationRequest(appConfig);
  }
  if (entry.registrationStatus === 0) {
    const { installationEntry, registrationPromise } = await getInstallationEntry(appConfig);
    if (registrationPromise) {
      return registrationPromise;
    } else {
      return installationEntry;
    }
  }
  return entry;
}
function updateInstallationRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!oldEntry) {
      throw ERROR_FACTORY$3.create("installation-not-found");
    }
    return clearTimedOutRequest(oldEntry);
  });
}
function clearTimedOutRequest(entry) {
  if (hasInstallationRequestTimedOut(entry)) {
    return {
      fid: entry.fid,
      registrationStatus: 0
    };
  }
  return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
  return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateAuthTokenRequest({ appConfig, platformLoggerProvider }, installationEntry) {
  const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
  const headers = getHeadersWithAuth(appConfig, installationEntry);
  const platformLogger = platformLoggerProvider.getImmediate({
    optional: true
  });
  if (platformLogger) {
    headers.append("x-firebase-client", platformLogger.getPlatformInfoString());
  }
  const body = {
    installation: {
      sdkVersion: PACKAGE_VERSION
    }
  };
  const request = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  const response = await retryIfServerError(() => fetch(endpoint, request));
  if (response.ok) {
    const responseValue = await response.json();
    const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
    return completedAuthToken;
  } else {
    throw await getErrorFromResponse("Generate Auth Token", response);
  }
}
function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
  return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function refreshAuthToken(installations, forceRefresh = false) {
  let tokenPromise;
  const entry = await update(installations.appConfig, (oldEntry) => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$3.create("not-registered");
    }
    const oldAuthToken = oldEntry.authToken;
    if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
      return oldEntry;
    } else if (oldAuthToken.requestStatus === 1) {
      tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
      return oldEntry;
    } else {
      if (!navigator.onLine) {
        throw ERROR_FACTORY$3.create("app-offline");
      }
      const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
      tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
      return inProgressEntry;
    }
  });
  const authToken = tokenPromise ? await tokenPromise : entry.authToken;
  return authToken;
}
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
  let entry = await updateAuthTokenRequest(installations.appConfig);
  while (entry.authToken.requestStatus === 1) {
    await sleep$1(100);
    entry = await updateAuthTokenRequest(installations.appConfig);
  }
  const authToken = entry.authToken;
  if (authToken.requestStatus === 0) {
    return refreshAuthToken(installations, forceRefresh);
  } else {
    return authToken;
  }
}
function updateAuthTokenRequest(appConfig) {
  return update(appConfig, (oldEntry) => {
    if (!isEntryRegistered(oldEntry)) {
      throw ERROR_FACTORY$3.create("not-registered");
    }
    const oldAuthToken = oldEntry.authToken;
    if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
      return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 } });
    }
    return oldEntry;
  });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
  try {
    const authToken = await generateAuthTokenRequest(installations, installationEntry);
    const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
    await set(installations.appConfig, updatedInstallationEntry);
    return authToken;
  } catch (e) {
    if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
      await remove(installations.appConfig);
    } else {
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 } });
      await set(installations.appConfig, updatedInstallationEntry);
    }
    throw e;
  }
}
function isEntryRegistered(installationEntry) {
  return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
}
function isAuthTokenValid(authToken) {
  return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
  const now = Date.now();
  return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
function makeAuthTokenRequestInProgressEntry(oldEntry) {
  const inProgressAuthToken = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
  return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getId(installations) {
  const installationsImpl = installations;
  const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl.appConfig);
  if (registrationPromise) {
    registrationPromise.catch(console.error);
  } else {
    refreshAuthToken(installationsImpl).catch(console.error);
  }
  return installationEntry.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function getToken(installations, forceRefresh = false) {
  const installationsImpl = installations;
  await completeInstallationRegistration(installationsImpl.appConfig);
  const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
  return authToken.token;
}
async function completeInstallationRegistration(appConfig) {
  const { registrationPromise } = await getInstallationEntry(appConfig);
  if (registrationPromise) {
    await registrationPromise;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig$1(app2) {
  if (!app2 || !app2.options) {
    throw getMissingValueError$1("App Configuration");
  }
  if (!app2.name) {
    throw getMissingValueError$1("App Name");
  }
  const configKeys = [
    "projectId",
    "apiKey",
    "appId"
  ];
  for (const keyName of configKeys) {
    if (!app2.options[keyName]) {
      throw getMissingValueError$1(keyName);
    }
  }
  return {
    appName: app2.name,
    projectId: app2.options.projectId,
    apiKey: app2.options.apiKey,
    appId: app2.options.appId
  };
}
function getMissingValueError$1(valueName) {
  return ERROR_FACTORY$3.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INSTALLATIONS_NAME = "installations";
const INSTALLATIONS_NAME_INTERNAL = "installations-internal";
const publicFactory = (container) => {
  const app2 = container.getProvider("app").getImmediate();
  const appConfig = extractAppConfig$1(app2);
  const platformLoggerProvider = _getProvider(app2, "platform-logger");
  const installationsImpl = {
    app: app2,
    appConfig,
    platformLoggerProvider,
    _delete: () => Promise.resolve()
  };
  return installationsImpl;
};
const internalFactory = (container) => {
  const app2 = container.getProvider("app").getImmediate();
  const installations = _getProvider(app2, INSTALLATIONS_NAME).getImmediate();
  const installationsInternal = {
    getId: () => getId(installations),
    getToken: (forceRefresh) => getToken(installations, forceRefresh)
  };
  return installationsInternal;
};
function registerInstallations() {
  _registerComponent(new Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC"));
  _registerComponent(new Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE"));
}
registerInstallations();
registerVersion(name$2, version$2);
registerVersion(name$2, version$2, "esm2017");
const name$1 = "@firebase/performance";
const version$1 = "0.5.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SDK_VERSION = version$1;
const TRACE_START_MARK_PREFIX = "FB-PERF-TRACE-START";
const TRACE_STOP_MARK_PREFIX = "FB-PERF-TRACE-STOP";
const TRACE_MEASURE_PREFIX = "FB-PERF-TRACE-MEASURE";
const OOB_TRACE_PAGE_LOAD_PREFIX = "_wt_";
const FIRST_PAINT_COUNTER_NAME = "_fp";
const FIRST_CONTENTFUL_PAINT_COUNTER_NAME = "_fcp";
const FIRST_INPUT_DELAY_COUNTER_NAME = "_fid";
const CONFIG_LOCAL_STORAGE_KEY = "@firebase/performance/config";
const CONFIG_EXPIRY_LOCAL_STORAGE_KEY = "@firebase/performance/configexpire";
const SERVICE = "performance";
const SERVICE_NAME = "Performance";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP = {
  ["trace started"]: "Trace {$traceName} was started before.",
  ["trace stopped"]: "Trace {$traceName} is not running.",
  ["nonpositive trace startTime"]: "Trace {$traceName} startTime should be positive.",
  ["nonpositive trace duration"]: "Trace {$traceName} duration should be positive.",
  ["no window"]: "Window is not available.",
  ["no app id"]: "App id is not available.",
  ["no project id"]: "Project id is not available.",
  ["no api key"]: "Api key is not available.",
  ["invalid cc log"]: "Attempted to queue invalid cc event",
  ["FB not default"]: "Performance can only start when Firebase app instance is the default one.",
  ["RC response not ok"]: "RC response is not ok",
  ["invalid attribute name"]: "Attribute name {$attributeName} is invalid.",
  ["invalid attribute value"]: "Attribute value {$attributeValue} is invalid.",
  ["invalid custom metric name"]: "Custom metric name {$customMetricName} is invalid",
  ["invalid String merger input"]: "Input for String merger is invalid, contact support team to resolve.",
  ["already initialized"]: "initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."
};
const ERROR_FACTORY$2 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const consoleLogger = new Logger(SERVICE_NAME);
consoleLogger.logLevel = LogLevel.INFO;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let apiInstance;
let windowInstance;
class Api {
  constructor(window2) {
    this.window = window2;
    if (!window2) {
      throw ERROR_FACTORY$2.create("no window");
    }
    this.performance = window2.performance;
    this.PerformanceObserver = window2.PerformanceObserver;
    this.windowLocation = window2.location;
    this.navigator = window2.navigator;
    this.document = window2.document;
    if (this.navigator && this.navigator.cookieEnabled) {
      this.localStorage = window2.localStorage;
    }
    if (window2.perfMetrics && window2.perfMetrics.onFirstInputDelay) {
      this.onFirstInputDelay = window2.perfMetrics.onFirstInputDelay;
    }
  }
  getUrl() {
    return this.windowLocation.href.split("?")[0];
  }
  mark(name2) {
    if (!this.performance || !this.performance.mark) {
      return;
    }
    this.performance.mark(name2);
  }
  measure(measureName, mark1, mark2) {
    if (!this.performance || !this.performance.measure) {
      return;
    }
    this.performance.measure(measureName, mark1, mark2);
  }
  getEntriesByType(type) {
    if (!this.performance || !this.performance.getEntriesByType) {
      return [];
    }
    return this.performance.getEntriesByType(type);
  }
  getEntriesByName(name2) {
    if (!this.performance || !this.performance.getEntriesByName) {
      return [];
    }
    return this.performance.getEntriesByName(name2);
  }
  getTimeOrigin() {
    return this.performance && (this.performance.timeOrigin || this.performance.timing.navigationStart);
  }
  requiredApisAvailable() {
    if (!fetch || !Promise || !areCookiesEnabled()) {
      consoleLogger.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.");
      return false;
    }
    if (!isIndexedDBAvailable()) {
      consoleLogger.info("IndexedDB is not supported by current browswer");
      return false;
    }
    return true;
  }
  setupObserver(entryType, callback) {
    if (!this.PerformanceObserver) {
      return;
    }
    const observer = new this.PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        callback(entry);
      }
    });
    observer.observe({ entryTypes: [entryType] });
  }
  static getInstance() {
    if (apiInstance === void 0) {
      apiInstance = new Api(windowInstance);
    }
    return apiInstance;
  }
}
function setupApi(window2) {
  windowInstance = window2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let iid;
function getIidPromise(installationsService) {
  const iidPromise = installationsService.getId();
  iidPromise.then((iidVal) => {
    iid = iidVal;
  });
  return iidPromise;
}
function getIid() {
  return iid;
}
function getAuthTokenPromise(installationsService) {
  const authTokenPromise = installationsService.getToken();
  authTokenPromise.then((authTokenVal) => {
  });
  return authTokenPromise;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mergeStrings(part1, part2) {
  const sizeDiff = part1.length - part2.length;
  if (sizeDiff < 0 || sizeDiff > 1) {
    throw ERROR_FACTORY$2.create("invalid String merger input");
  }
  const resultArray = [];
  for (let i = 0; i < part1.length; i++) {
    resultArray.push(part1.charAt(i));
    if (part2.length > i) {
      resultArray.push(part2.charAt(i));
    }
  }
  return resultArray.join("");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let settingsServiceInstance;
class SettingsService {
  constructor() {
    this.instrumentationEnabled = true;
    this.dataCollectionEnabled = true;
    this.loggingEnabled = false;
    this.tracesSamplingRate = 1;
    this.networkRequestsSamplingRate = 1;
    this.logEndPointUrl = "https://firebaselogging.googleapis.com/v0cc/log?format=json_proto";
    this.flTransportEndpointUrl = mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
    this.transportKey = mergeStrings("AzSC8r6ReiGqFMyfvgow", "Iayx0u-XT3vksVM-pIV");
    this.logSource = 462;
    this.logTraceAfterSampling = false;
    this.logNetworkAfterSampling = false;
    this.configTimeToLive = 12;
  }
  getFlTransportFullUrl() {
    return this.flTransportEndpointUrl.concat("?key=", this.transportKey);
  }
  static getInstance() {
    if (settingsServiceInstance === void 0) {
      settingsServiceInstance = new SettingsService();
    }
    return settingsServiceInstance;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VisibilityState;
(function(VisibilityState2) {
  VisibilityState2[VisibilityState2["UNKNOWN"] = 0] = "UNKNOWN";
  VisibilityState2[VisibilityState2["VISIBLE"] = 1] = "VISIBLE";
  VisibilityState2[VisibilityState2["HIDDEN"] = 2] = "HIDDEN";
})(VisibilityState || (VisibilityState = {}));
const RESERVED_ATTRIBUTE_PREFIXES = ["firebase_", "google_", "ga_"];
const ATTRIBUTE_FORMAT_REGEX = new RegExp("^[a-zA-Z]\\w*$");
const MAX_ATTRIBUTE_NAME_LENGTH = 40;
const MAX_ATTRIBUTE_VALUE_LENGTH = 100;
function getServiceWorkerStatus() {
  const navigator2 = Api.getInstance().navigator;
  if ("serviceWorker" in navigator2) {
    if (navigator2.serviceWorker.controller) {
      return 2;
    } else {
      return 3;
    }
  } else {
    return 1;
  }
}
function getVisibilityState() {
  const document2 = Api.getInstance().document;
  const visibilityState = document2.visibilityState;
  switch (visibilityState) {
    case "visible":
      return VisibilityState.VISIBLE;
    case "hidden":
      return VisibilityState.HIDDEN;
    default:
      return VisibilityState.UNKNOWN;
  }
}
function getEffectiveConnectionType() {
  const navigator2 = Api.getInstance().navigator;
  const navigatorConnection = navigator2.connection;
  const effectiveType = navigatorConnection && navigatorConnection.effectiveType;
  switch (effectiveType) {
    case "slow-2g":
      return 1;
    case "2g":
      return 2;
    case "3g":
      return 3;
    case "4g":
      return 4;
    default:
      return 0;
  }
}
function isValidCustomAttributeName(name2) {
  if (name2.length === 0 || name2.length > MAX_ATTRIBUTE_NAME_LENGTH) {
    return false;
  }
  const matchesReservedPrefix = RESERVED_ATTRIBUTE_PREFIXES.some((prefix) => name2.startsWith(prefix));
  return !matchesReservedPrefix && !!name2.match(ATTRIBUTE_FORMAT_REGEX);
}
function isValidCustomAttributeValue(value) {
  return value.length !== 0 && value.length <= MAX_ATTRIBUTE_VALUE_LENGTH;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getAppId(firebaseApp) {
  var _a;
  const appId = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.appId;
  if (!appId) {
    throw ERROR_FACTORY$2.create("no app id");
  }
  return appId;
}
function getProjectId(firebaseApp) {
  var _a;
  const projectId = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.projectId;
  if (!projectId) {
    throw ERROR_FACTORY$2.create("no project id");
  }
  return projectId;
}
function getApiKey(firebaseApp) {
  var _a;
  const apiKey = (_a = firebaseApp.options) === null || _a === void 0 ? void 0 : _a.apiKey;
  if (!apiKey) {
    throw ERROR_FACTORY$2.create("no api key");
  }
  return apiKey;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const REMOTE_CONFIG_SDK_VERSION = "0.0.1";
const DEFAULT_CONFIGS = {
  loggingEnabled: true
};
const FIS_AUTH_PREFIX = "FIREBASE_INSTALLATIONS_AUTH";
function getConfig(performanceController, iid2) {
  const config = getStoredConfig();
  if (config) {
    processConfig(config);
    return Promise.resolve();
  }
  return getRemoteConfig(performanceController, iid2).then(processConfig).then((config2) => storeConfig(config2), () => {
  });
}
function getStoredConfig() {
  const localStorage = Api.getInstance().localStorage;
  if (!localStorage) {
    return;
  }
  const expiryString = localStorage.getItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY);
  if (!expiryString || !configValid(expiryString)) {
    return;
  }
  const configStringified = localStorage.getItem(CONFIG_LOCAL_STORAGE_KEY);
  if (!configStringified) {
    return;
  }
  try {
    const configResponse = JSON.parse(configStringified);
    return configResponse;
  } catch (_a) {
    return;
  }
}
function storeConfig(config) {
  const localStorage = Api.getInstance().localStorage;
  if (!config || !localStorage) {
    return;
  }
  localStorage.setItem(CONFIG_LOCAL_STORAGE_KEY, JSON.stringify(config));
  localStorage.setItem(CONFIG_EXPIRY_LOCAL_STORAGE_KEY, String(Date.now() + SettingsService.getInstance().configTimeToLive * 60 * 60 * 1e3));
}
const COULD_NOT_GET_CONFIG_MSG = "Could not fetch config, will use default configs";
function getRemoteConfig(performanceController, iid2) {
  return getAuthTokenPromise(performanceController.installations).then((authToken) => {
    const projectId = getProjectId(performanceController.app);
    const apiKey = getApiKey(performanceController.app);
    const configEndPoint = `https://firebaseremoteconfig.googleapis.com/v1/projects/${projectId}/namespaces/fireperf:fetch?key=${apiKey}`;
    const request = new Request(configEndPoint, {
      method: "POST",
      headers: { Authorization: `${FIS_AUTH_PREFIX} ${authToken}` },
      body: JSON.stringify({
        app_instance_id: iid2,
        app_instance_id_token: authToken,
        app_id: getAppId(performanceController.app),
        app_version: SDK_VERSION,
        sdk_version: REMOTE_CONFIG_SDK_VERSION
      })
    });
    return fetch(request).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw ERROR_FACTORY$2.create("RC response not ok");
    });
  }).catch(() => {
    consoleLogger.info(COULD_NOT_GET_CONFIG_MSG);
    return void 0;
  });
}
function processConfig(config) {
  if (!config) {
    return config;
  }
  const settingsServiceInstance2 = SettingsService.getInstance();
  const entries = config.entries || {};
  if (entries.fpr_enabled !== void 0) {
    settingsServiceInstance2.loggingEnabled = String(entries.fpr_enabled) === "true";
  } else {
    settingsServiceInstance2.loggingEnabled = DEFAULT_CONFIGS.loggingEnabled;
  }
  if (entries.fpr_log_source) {
    settingsServiceInstance2.logSource = Number(entries.fpr_log_source);
  }
  if (entries.fpr_log_endpoint_url) {
    settingsServiceInstance2.logEndPointUrl = entries.fpr_log_endpoint_url;
  }
  if (entries.fpr_log_transport_key) {
    settingsServiceInstance2.transportKey = entries.fpr_log_transport_key;
  }
  if (entries.fpr_vc_network_request_sampling_rate !== void 0) {
    settingsServiceInstance2.networkRequestsSamplingRate = Number(entries.fpr_vc_network_request_sampling_rate);
  }
  if (entries.fpr_vc_trace_sampling_rate !== void 0) {
    settingsServiceInstance2.tracesSamplingRate = Number(entries.fpr_vc_trace_sampling_rate);
  }
  settingsServiceInstance2.logTraceAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.tracesSamplingRate);
  settingsServiceInstance2.logNetworkAfterSampling = shouldLogAfterSampling(settingsServiceInstance2.networkRequestsSamplingRate);
  return config;
}
function configValid(expiry) {
  return Number(expiry) > Date.now();
}
function shouldLogAfterSampling(samplingRate) {
  return Math.random() <= samplingRate;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let initializationStatus = 1;
let initializationPromise;
function getInitializationPromise(performanceController) {
  initializationStatus = 2;
  initializationPromise = initializationPromise || initializePerf(performanceController);
  return initializationPromise;
}
function isPerfInitialized() {
  return initializationStatus === 3;
}
function initializePerf(performanceController) {
  return getDocumentReadyComplete().then(() => getIidPromise(performanceController.installations)).then((iid2) => getConfig(performanceController, iid2)).then(() => changeInitializationStatus(), () => changeInitializationStatus());
}
function getDocumentReadyComplete() {
  const document2 = Api.getInstance().document;
  return new Promise((resolve) => {
    if (document2 && document2.readyState !== "complete") {
      const handler = () => {
        if (document2.readyState === "complete") {
          document2.removeEventListener("readystatechange", handler);
          resolve();
        }
      };
      document2.addEventListener("readystatechange", handler);
    } else {
      resolve();
    }
  });
}
function changeInitializationStatus() {
  initializationStatus = 3;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_SEND_INTERVAL_MS = 10 * 1e3;
const INITIAL_SEND_TIME_DELAY_MS = 5.5 * 1e3;
const DEFAULT_REMAINING_TRIES = 3;
const MAX_EVENT_COUNT_PER_REQUEST = 1e3;
let remainingTries = DEFAULT_REMAINING_TRIES;
let queue = [];
let isTransportSetup = false;
function setupTransportService() {
  if (!isTransportSetup) {
    processQueue(INITIAL_SEND_TIME_DELAY_MS);
    isTransportSetup = true;
  }
}
function processQueue(timeOffset) {
  setTimeout(() => {
    if (remainingTries === 0) {
      return;
    }
    if (!queue.length) {
      return processQueue(DEFAULT_SEND_INTERVAL_MS);
    }
    dispatchQueueEvents();
  }, timeOffset);
}
function dispatchQueueEvents() {
  const staged = queue.splice(0, MAX_EVENT_COUNT_PER_REQUEST);
  const log_event = staged.map((evt) => ({
    source_extension_json_proto3: evt.message,
    event_time_ms: String(evt.eventTime)
  }));
  const data = {
    request_time_ms: String(Date.now()),
    client_info: {
      client_type: 1,
      js_client_info: {}
    },
    log_source: SettingsService.getInstance().logSource,
    log_event
  };
  sendEventsToFl(data, staged).catch(() => {
    queue = [...staged, ...queue];
    remainingTries--;
    consoleLogger.info(`Tries left: ${remainingTries}.`);
    processQueue(DEFAULT_SEND_INTERVAL_MS);
  });
}
function sendEventsToFl(data, staged) {
  return postToFlEndpoint(data).then((res) => {
    if (!res.ok) {
      consoleLogger.info("Call to Firebase backend failed.");
    }
    return res.json();
  }).then((res) => {
    const transportWait = Number(res.nextRequestWaitMillis);
    let requestOffset = DEFAULT_SEND_INTERVAL_MS;
    if (!isNaN(transportWait)) {
      requestOffset = Math.max(transportWait, requestOffset);
    }
    const logResponseDetails = res.logResponseDetails;
    if (Array.isArray(logResponseDetails) && logResponseDetails.length > 0 && logResponseDetails[0].responseAction === "RETRY_REQUEST_LATER") {
      queue = [...staged, ...queue];
      consoleLogger.info(`Retry transport request later.`);
    }
    remainingTries = DEFAULT_REMAINING_TRIES;
    processQueue(requestOffset);
  });
}
function postToFlEndpoint(data) {
  const flTransportFullUrl = SettingsService.getInstance().getFlTransportFullUrl();
  return fetch(flTransportFullUrl, {
    method: "POST",
    body: JSON.stringify(data)
  });
}
function addToQueue(evt) {
  if (!evt.eventTime || !evt.message) {
    throw ERROR_FACTORY$2.create("invalid cc log");
  }
  queue = [...queue, evt];
}
function transportHandler(serializer2) {
  return (...args) => {
    const message = serializer2(...args);
    addToQueue({
      message,
      eventTime: Date.now()
    });
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let logger$1;
function sendLog(resource, resourceType) {
  if (!logger$1) {
    logger$1 = transportHandler(serializer);
  }
  logger$1(resource, resourceType);
}
function logTrace(trace) {
  const settingsService = SettingsService.getInstance();
  if (!settingsService.instrumentationEnabled && trace.isAuto) {
    return;
  }
  if (!settingsService.dataCollectionEnabled && !trace.isAuto) {
    return;
  }
  if (!Api.getInstance().requiredApisAvailable()) {
    return;
  }
  if (trace.isAuto && getVisibilityState() !== VisibilityState.VISIBLE) {
    return;
  }
  if (isPerfInitialized()) {
    sendTraceLog(trace);
  } else {
    getInitializationPromise(trace.performanceController).then(() => sendTraceLog(trace), () => sendTraceLog(trace));
  }
}
function sendTraceLog(trace) {
  if (!getIid()) {
    return;
  }
  const settingsService = SettingsService.getInstance();
  if (!settingsService.loggingEnabled || !settingsService.logTraceAfterSampling) {
    return;
  }
  setTimeout(() => sendLog(trace, 1), 0);
}
function logNetworkRequest(networkRequest) {
  const settingsService = SettingsService.getInstance();
  if (!settingsService.instrumentationEnabled) {
    return;
  }
  const networkRequestUrl = networkRequest.url;
  const logEndpointUrl = settingsService.logEndPointUrl.split("?")[0];
  const flEndpointUrl = settingsService.flTransportEndpointUrl.split("?")[0];
  if (networkRequestUrl === logEndpointUrl || networkRequestUrl === flEndpointUrl) {
    return;
  }
  if (!settingsService.loggingEnabled || !settingsService.logNetworkAfterSampling) {
    return;
  }
  setTimeout(() => sendLog(networkRequest, 0), 0);
}
function serializer(resource, resourceType) {
  if (resourceType === 0) {
    return serializeNetworkRequest(resource);
  }
  return serializeTrace(resource);
}
function serializeNetworkRequest(networkRequest) {
  const networkRequestMetric = {
    url: networkRequest.url,
    http_method: networkRequest.httpMethod || 0,
    http_response_code: 200,
    response_payload_bytes: networkRequest.responsePayloadBytes,
    client_start_time_us: networkRequest.startTimeUs,
    time_to_response_initiated_us: networkRequest.timeToResponseInitiatedUs,
    time_to_response_completed_us: networkRequest.timeToResponseCompletedUs
  };
  const perfMetric = {
    application_info: getApplicationInfo(networkRequest.performanceController.app),
    network_request_metric: networkRequestMetric
  };
  return JSON.stringify(perfMetric);
}
function serializeTrace(trace) {
  const traceMetric = {
    name: trace.name,
    is_auto: trace.isAuto,
    client_start_time_us: trace.startTimeUs,
    duration_us: trace.durationUs
  };
  if (Object.keys(trace.counters).length !== 0) {
    traceMetric.counters = trace.counters;
  }
  const customAttributes = trace.getAttributes();
  if (Object.keys(customAttributes).length !== 0) {
    traceMetric.custom_attributes = customAttributes;
  }
  const perfMetric = {
    application_info: getApplicationInfo(trace.performanceController.app),
    trace_metric: traceMetric
  };
  return JSON.stringify(perfMetric);
}
function getApplicationInfo(firebaseApp) {
  return {
    google_app_id: getAppId(firebaseApp),
    app_instance_id: getIid(),
    web_app_info: {
      sdk_version: SDK_VERSION,
      page_url: Api.getInstance().getUrl(),
      service_worker_status: getServiceWorkerStatus(),
      visibility_state: getVisibilityState(),
      effective_connection_type: getEffectiveConnectionType()
    },
    application_process_state: 0
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_METRIC_NAME_LENGTH = 100;
const RESERVED_AUTO_PREFIX = "_";
const oobMetrics = [
  FIRST_PAINT_COUNTER_NAME,
  FIRST_CONTENTFUL_PAINT_COUNTER_NAME,
  FIRST_INPUT_DELAY_COUNTER_NAME
];
function isValidMetricName(name2, traceName) {
  if (name2.length === 0 || name2.length > MAX_METRIC_NAME_LENGTH) {
    return false;
  }
  return traceName && traceName.startsWith(OOB_TRACE_PAGE_LOAD_PREFIX) && oobMetrics.indexOf(name2) > -1 || !name2.startsWith(RESERVED_AUTO_PREFIX);
}
function convertMetricValueToInteger(providedValue) {
  const valueAsInteger = Math.floor(providedValue);
  if (valueAsInteger < providedValue) {
    consoleLogger.info(`Metric value should be an Integer, setting the value as : ${valueAsInteger}.`);
  }
  return valueAsInteger;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Trace {
  constructor(performanceController, name2, isAuto = false, traceMeasureName) {
    this.performanceController = performanceController;
    this.name = name2;
    this.isAuto = isAuto;
    this.state = 1;
    this.customAttributes = {};
    this.counters = {};
    this.api = Api.getInstance();
    this.randomId = Math.floor(Math.random() * 1e6);
    if (!this.isAuto) {
      this.traceStartMark = `${TRACE_START_MARK_PREFIX}-${this.randomId}-${this.name}`;
      this.traceStopMark = `${TRACE_STOP_MARK_PREFIX}-${this.randomId}-${this.name}`;
      this.traceMeasure = traceMeasureName || `${TRACE_MEASURE_PREFIX}-${this.randomId}-${this.name}`;
      if (traceMeasureName) {
        this.calculateTraceMetrics();
      }
    }
  }
  start() {
    if (this.state !== 1) {
      throw ERROR_FACTORY$2.create("trace started", {
        traceName: this.name
      });
    }
    this.api.mark(this.traceStartMark);
    this.state = 2;
  }
  stop() {
    if (this.state !== 2) {
      throw ERROR_FACTORY$2.create("trace stopped", {
        traceName: this.name
      });
    }
    this.state = 3;
    this.api.mark(this.traceStopMark);
    this.api.measure(this.traceMeasure, this.traceStartMark, this.traceStopMark);
    this.calculateTraceMetrics();
    logTrace(this);
  }
  record(startTime, duration, options) {
    if (startTime <= 0) {
      throw ERROR_FACTORY$2.create("nonpositive trace startTime", {
        traceName: this.name
      });
    }
    if (duration <= 0) {
      throw ERROR_FACTORY$2.create("nonpositive trace duration", {
        traceName: this.name
      });
    }
    this.durationUs = Math.floor(duration * 1e3);
    this.startTimeUs = Math.floor(startTime * 1e3);
    if (options && options.attributes) {
      this.customAttributes = Object.assign({}, options.attributes);
    }
    if (options && options.metrics) {
      for (const metric of Object.keys(options.metrics)) {
        if (!isNaN(Number(options.metrics[metric]))) {
          this.counters[metric] = Number(Math.floor(options.metrics[metric]));
        }
      }
    }
    logTrace(this);
  }
  incrementMetric(counter, numAsInteger = 1) {
    if (this.counters[counter] === void 0) {
      this.putMetric(counter, numAsInteger);
    } else {
      this.putMetric(counter, this.counters[counter] + numAsInteger);
    }
  }
  putMetric(counter, numAsInteger) {
    if (isValidMetricName(counter, this.name)) {
      this.counters[counter] = convertMetricValueToInteger(numAsInteger);
    } else {
      throw ERROR_FACTORY$2.create("invalid custom metric name", {
        customMetricName: counter
      });
    }
  }
  getMetric(counter) {
    return this.counters[counter] || 0;
  }
  putAttribute(attr, value) {
    const isValidName = isValidCustomAttributeName(attr);
    const isValidValue = isValidCustomAttributeValue(value);
    if (isValidName && isValidValue) {
      this.customAttributes[attr] = value;
      return;
    }
    if (!isValidName) {
      throw ERROR_FACTORY$2.create("invalid attribute name", {
        attributeName: attr
      });
    }
    if (!isValidValue) {
      throw ERROR_FACTORY$2.create("invalid attribute value", {
        attributeValue: value
      });
    }
  }
  getAttribute(attr) {
    return this.customAttributes[attr];
  }
  removeAttribute(attr) {
    if (this.customAttributes[attr] === void 0) {
      return;
    }
    delete this.customAttributes[attr];
  }
  getAttributes() {
    return Object.assign({}, this.customAttributes);
  }
  setStartTime(startTime) {
    this.startTimeUs = startTime;
  }
  setDuration(duration) {
    this.durationUs = duration;
  }
  calculateTraceMetrics() {
    const perfMeasureEntries = this.api.getEntriesByName(this.traceMeasure);
    const perfMeasureEntry = perfMeasureEntries && perfMeasureEntries[0];
    if (perfMeasureEntry) {
      this.durationUs = Math.floor(perfMeasureEntry.duration * 1e3);
      this.startTimeUs = Math.floor((perfMeasureEntry.startTime + this.api.getTimeOrigin()) * 1e3);
    }
  }
  static createOobTrace(performanceController, navigationTimings, paintTimings, firstInputDelay) {
    const route = Api.getInstance().getUrl();
    if (!route) {
      return;
    }
    const trace = new Trace(performanceController, OOB_TRACE_PAGE_LOAD_PREFIX + route, true);
    const timeOriginUs = Math.floor(Api.getInstance().getTimeOrigin() * 1e3);
    trace.setStartTime(timeOriginUs);
    if (navigationTimings && navigationTimings[0]) {
      trace.setDuration(Math.floor(navigationTimings[0].duration * 1e3));
      trace.putMetric("domInteractive", Math.floor(navigationTimings[0].domInteractive * 1e3));
      trace.putMetric("domContentLoadedEventEnd", Math.floor(navigationTimings[0].domContentLoadedEventEnd * 1e3));
      trace.putMetric("loadEventEnd", Math.floor(navigationTimings[0].loadEventEnd * 1e3));
    }
    const FIRST_PAINT = "first-paint";
    const FIRST_CONTENTFUL_PAINT = "first-contentful-paint";
    if (paintTimings) {
      const firstPaint = paintTimings.find((paintObject) => paintObject.name === FIRST_PAINT);
      if (firstPaint && firstPaint.startTime) {
        trace.putMetric(FIRST_PAINT_COUNTER_NAME, Math.floor(firstPaint.startTime * 1e3));
      }
      const firstContentfulPaint = paintTimings.find((paintObject) => paintObject.name === FIRST_CONTENTFUL_PAINT);
      if (firstContentfulPaint && firstContentfulPaint.startTime) {
        trace.putMetric(FIRST_CONTENTFUL_PAINT_COUNTER_NAME, Math.floor(firstContentfulPaint.startTime * 1e3));
      }
      if (firstInputDelay) {
        trace.putMetric(FIRST_INPUT_DELAY_COUNTER_NAME, Math.floor(firstInputDelay * 1e3));
      }
    }
    logTrace(trace);
  }
  static createUserTimingTrace(performanceController, measureName) {
    const trace = new Trace(performanceController, measureName, false, measureName);
    logTrace(trace);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createNetworkRequestEntry(performanceController, entry) {
  const performanceEntry = entry;
  if (!performanceEntry || performanceEntry.responseStart === void 0) {
    return;
  }
  const timeOrigin = Api.getInstance().getTimeOrigin();
  const startTimeUs = Math.floor((performanceEntry.startTime + timeOrigin) * 1e3);
  const timeToResponseInitiatedUs = performanceEntry.responseStart ? Math.floor((performanceEntry.responseStart - performanceEntry.startTime) * 1e3) : void 0;
  const timeToResponseCompletedUs = Math.floor((performanceEntry.responseEnd - performanceEntry.startTime) * 1e3);
  const url = performanceEntry.name && performanceEntry.name.split("?")[0];
  const networkRequest = {
    performanceController,
    url,
    responsePayloadBytes: performanceEntry.transferSize,
    startTimeUs,
    timeToResponseInitiatedUs,
    timeToResponseCompletedUs
  };
  logNetworkRequest(networkRequest);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FID_WAIT_TIME_MS = 5e3;
function setupOobResources(performanceController) {
  if (!getIid()) {
    return;
  }
  setTimeout(() => setupOobTraces(performanceController), 0);
  setTimeout(() => setupNetworkRequests(performanceController), 0);
  setTimeout(() => setupUserTimingTraces(performanceController), 0);
}
function setupNetworkRequests(performanceController) {
  const api = Api.getInstance();
  const resources = api.getEntriesByType("resource");
  for (const resource of resources) {
    createNetworkRequestEntry(performanceController, resource);
  }
  api.setupObserver("resource", (entry) => createNetworkRequestEntry(performanceController, entry));
}
function setupOobTraces(performanceController) {
  const api = Api.getInstance();
  const navigationTimings = api.getEntriesByType("navigation");
  const paintTimings = api.getEntriesByType("paint");
  if (api.onFirstInputDelay) {
    let timeoutId = setTimeout(() => {
      Trace.createOobTrace(performanceController, navigationTimings, paintTimings);
      timeoutId = void 0;
    }, FID_WAIT_TIME_MS);
    api.onFirstInputDelay((fid) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        Trace.createOobTrace(performanceController, navigationTimings, paintTimings, fid);
      }
    });
  } else {
    Trace.createOobTrace(performanceController, navigationTimings, paintTimings);
  }
}
function setupUserTimingTraces(performanceController) {
  const api = Api.getInstance();
  const measures = api.getEntriesByType("measure");
  for (const measure of measures) {
    createUserTimingTrace(performanceController, measure);
  }
  api.setupObserver("measure", (entry) => createUserTimingTrace(performanceController, entry));
}
function createUserTimingTrace(performanceController, measure) {
  const measureName = measure.name;
  if (measureName.substring(0, TRACE_MEASURE_PREFIX.length) === TRACE_MEASURE_PREFIX) {
    return;
  }
  Trace.createUserTimingTrace(performanceController, measureName);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PerformanceController {
  constructor(app2, installations) {
    this.app = app2;
    this.installations = installations;
    this.initialized = false;
  }
  _init(settings) {
    if (this.initialized) {
      return;
    }
    if ((settings === null || settings === void 0 ? void 0 : settings.dataCollectionEnabled) !== void 0) {
      this.dataCollectionEnabled = settings.dataCollectionEnabled;
    }
    if ((settings === null || settings === void 0 ? void 0 : settings.instrumentationEnabled) !== void 0) {
      this.instrumentationEnabled = settings.instrumentationEnabled;
    }
    if (Api.getInstance().requiredApisAvailable()) {
      validateIndexedDBOpenable().then((isAvailable) => {
        if (isAvailable) {
          setupTransportService();
          getInitializationPromise(this).then(() => setupOobResources(this), () => setupOobResources(this));
          this.initialized = true;
        }
      }).catch((error) => {
        consoleLogger.info(`Environment doesn't support IndexedDB: ${error}`);
      });
    } else {
      consoleLogger.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.');
    }
  }
  set instrumentationEnabled(val) {
    SettingsService.getInstance().instrumentationEnabled = val;
  }
  get instrumentationEnabled() {
    return SettingsService.getInstance().instrumentationEnabled;
  }
  set dataCollectionEnabled(val) {
    SettingsService.getInstance().dataCollectionEnabled = val;
  }
  get dataCollectionEnabled() {
    return SettingsService.getInstance().dataCollectionEnabled;
  }
}
const DEFAULT_ENTRY_NAME = "[DEFAULT]";
function getPerformance(app2 = getApp()) {
  app2 = getModularInstance(app2);
  const provider = _getProvider(app2, "performance");
  const perfInstance = provider.getImmediate();
  return perfInstance;
}
const factory$1 = (container, { options: settings }) => {
  const app2 = container.getProvider("app").getImmediate();
  const installations = container.getProvider("installations-internal").getImmediate();
  if (app2.name !== DEFAULT_ENTRY_NAME) {
    throw ERROR_FACTORY$2.create("FB not default");
  }
  if (typeof window === "undefined") {
    throw ERROR_FACTORY$2.create("no window");
  }
  setupApi(window);
  const perfInstance = new PerformanceController(app2, installations);
  perfInstance._init(settings);
  return perfInstance;
};
function registerPerformance() {
  _registerComponent(new Component("performance", factory$1, "PUBLIC"));
  registerVersion(name$1, version$1);
  registerVersion(name$1, version$1, "esm2017");
}
registerPerformance();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ANALYTICS_TYPE = "analytics";
const GA_FID_KEY = "firebase_id";
const ORIGIN_KEY = "origin";
const FETCH_TIMEOUT_MILLIS = 60 * 1e3;
const DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
const GTAG_URL = "https://www.googletagmanager.com/gtag/js";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function promiseAllSettled(promises) {
  return Promise.all(promises.map((promise) => promise.catch((e) => e)));
}
function insertScriptTag(dataLayerName2, measurementId) {
  const script = document.createElement("script");
  script.src = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  let dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
async function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  const correspondingAppId = measurementIdToAppId2[measurementId];
  try {
    if (correspondingAppId) {
      await initializationPromisesMap2[correspondingAppId];
    } else {
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      const foundConfig = dynamicConfigResults.find((config) => config.measurementId === measurementId);
      if (foundConfig) {
        await initializationPromisesMap2[foundConfig.appId];
      }
    }
  } catch (e) {
    logger.error(e);
  }
  gtagCore("config", measurementId, gtagParams);
}
async function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  try {
    let initializationPromisesToWaitFor = [];
    if (gtagParams && gtagParams["send_to"]) {
      let gaSendToList = gtagParams["send_to"];
      if (!Array.isArray(gaSendToList)) {
        gaSendToList = [gaSendToList];
      }
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      for (const sendToId of gaSendToList) {
        const foundConfig = dynamicConfigResults.find((config) => config.measurementId === sendToId);
        const initializationPromise2 = foundConfig && initializationPromisesMap2[foundConfig.appId];
        if (initializationPromise2) {
          initializationPromisesToWaitFor.push(initializationPromise2);
        } else {
          initializationPromisesToWaitFor = [];
          break;
        }
      }
    }
    if (initializationPromisesToWaitFor.length === 0) {
      initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
    }
    await Promise.all(initializationPromisesToWaitFor);
    gtagCore("event", measurementId, gtagParams || {});
  } catch (e) {
    logger.error(e);
  }
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  async function gtagWrapper(command, idOrNameOrParams, gtagParams) {
    try {
      if (command === "event") {
        await gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, idOrNameOrParams, gtagParams);
      } else if (command === "config") {
        await gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, idOrNameOrParams, gtagParams);
      } else {
        gtagCore("set", idOrNameOrParams);
      }
    } catch (e) {
      logger.error(e);
    }
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  let gtagCore = function(..._args) {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage() {
  const scriptTags = window.document.getElementsByTagName("script");
  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL)) {
      return tag;
    }
  }
  return null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
  ["already-exists"]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  ["already-initialized"]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
  ["already-initialized-settings"]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  ["interop-component-reg-failed"]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  ["invalid-analytics-context"]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["indexeddb-unavailable"]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["fetch-throttle"]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  ["config-fetch-failed"]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  ["no-api-key"]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  ["no-app-id"]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
};
const ERROR_FACTORY$1 = new ErrorFactory("analytics", "Analytics", ERRORS);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LONG_RETRY_FACTOR = 30;
const BASE_INTERVAL_MILLIS = 1e3;
class RetryData {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }
  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }
  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }
}
const defaultRetryData = new RetryData();
function getHeaders$1(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
async function fetchDynamicConfig(appFields) {
  var _a;
  const { appId, apiKey } = appFields;
  const request = {
    method: "GET",
    headers: getHeaders$1(apiKey)
  };
  const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
  const response = await fetch(appUrl, request);
  if (response.status !== 200 && response.status !== 304) {
    let errorMessage = "";
    try {
      const jsonResponse = await response.json();
      if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
        errorMessage = jsonResponse.error.message;
      }
    } catch (_ignored) {
    }
    throw ERROR_FACTORY$1.create("config-fetch-failed", {
      httpStatus: response.status,
      responseMessage: errorMessage
    });
  }
  return response.json();
}
async function fetchDynamicConfigWithRetry(app2, retryData = defaultRetryData, timeoutMillis) {
  const { appId, apiKey, measurementId } = app2.options;
  if (!appId) {
    throw ERROR_FACTORY$1.create("no-app-id");
  }
  if (!apiKey) {
    if (measurementId) {
      return {
        measurementId,
        appId
      };
    }
    throw ERROR_FACTORY$1.create("no-api-key");
  }
  const throttleMetadata = retryData.getThrottleMetadata(appId) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  };
  const signal = new AnalyticsAbortSignal();
  setTimeout(async () => {
    signal.abort();
  }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
  return attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData);
}
async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis, backoffCount }, signal, retryData = defaultRetryData) {
  const { appId, measurementId } = appFields;
  try {
    await setAbortableTimeout(signal, throttleEndTimeMillis);
  } catch (e) {
    if (measurementId) {
      logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e.message}]`);
      return { appId, measurementId };
    }
    throw e;
  }
  try {
    const response = await fetchDynamicConfig(appFields);
    retryData.deleteThrottleMetadata(appId);
    return response;
  } catch (e) {
    if (!isRetriableError(e)) {
      retryData.deleteThrottleMetadata(appId);
      if (measurementId) {
        logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e.message}]`);
        return { appId, measurementId };
      } else {
        throw e;
      }
    }
    const backoffMillis = Number(e.customData.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
    const throttleMetadata = {
      throttleEndTimeMillis: Date.now() + backoffMillis,
      backoffCount: backoffCount + 1
    };
    retryData.setThrottleMetadata(appId, throttleMetadata);
    logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
    return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
  }
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY$1.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
class AnalyticsAbortSignal {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  abort() {
    this.listeners.forEach((listener) => listener());
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function validateIndexedDB() {
  if (!isIndexedDBAvailable()) {
    logger.warn(ERROR_FACTORY$1.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message);
    return false;
  } else {
    try {
      await validateIndexedDBOpenable();
    } catch (e) {
      logger.warn(ERROR_FACTORY$1.create("indexeddb-unavailable", {
        errorInfo: e
      }).message);
      return false;
    }
  }
  return true;
}
async function _initializeAnalytics(app2, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options) {
  var _a;
  const dynamicConfigPromise = fetchDynamicConfigWithRetry(app2);
  dynamicConfigPromise.then((config) => {
    measurementIdToAppId2[config.measurementId] = config.appId;
    if (app2.options.measurementId && config.measurementId !== app2.options.measurementId) {
      logger.warn(`The measurement ID in the local Firebase config (${app2.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
    }
  }).catch((e) => logger.error(e));
  dynamicConfigPromisesList2.push(dynamicConfigPromise);
  const fidPromise = validateIndexedDB().then((envIsValid) => {
    if (envIsValid) {
      return installations.getId();
    } else {
      return void 0;
    }
  });
  const [dynamicConfig, fid] = await Promise.all([
    dynamicConfigPromise,
    fidPromise
  ]);
  if (!findGtagScriptOnPage()) {
    insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
  }
  gtagCore("js", new Date());
  const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
  configProperties[ORIGIN_KEY] = "firebase";
  configProperties.update = true;
  if (fid != null) {
    configProperties[GA_FID_KEY] = fid;
  }
  gtagCore("config", dynamicConfig.measurementId, configProperties);
  return dynamicConfig.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AnalyticsService {
  constructor(app2) {
    this.app = app2;
  }
  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }
}
let initializationPromisesMap = {};
let dynamicConfigPromisesList = [];
const measurementIdToAppId = {};
let dataLayerName = "dataLayer";
let gtagName = "gtag";
let gtagCoreFunction;
let wrappedGtagFunction;
let globalInitDone = false;
function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];
  if (isBrowserExtension()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!areCookiesEnabled()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
    const err = ERROR_FACTORY$1.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app2, installations, options) {
  warnOnBrowserContextMismatch();
  const appId = app2.options.appId;
  if (!appId) {
    throw ERROR_FACTORY$1.create("no-app-id");
  }
  if (!app2.options.apiKey) {
    if (app2.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app2.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY$1.create("no-api-key");
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY$1.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    getOrCreateDataLayer(dataLayerName);
    const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = _initializeAnalytics(app2, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  const analyticsInstance = new AnalyticsService(app2);
  return analyticsInstance;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function logEvent$1(gtagFunction, initializationPromise2, eventName, eventParams, options) {
  if (options && options.global) {
    gtagFunction("event", eventName, eventParams);
    return;
  } else {
    const measurementId = await initializationPromise2;
    const params = Object.assign(Object.assign({}, eventParams), { "send_to": measurementId });
    gtagFunction("event", eventName, params);
  }
}
function getAnalytics(app2 = getApp()) {
  app2 = getModularInstance(app2);
  const analyticsProvider = _getProvider(app2, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app2);
}
function initializeAnalytics(app2, options = {}) {
  const analyticsProvider = _getProvider(app2, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();
    if (deepEqual(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY$1.create("already-initialized");
    }
  }
  const analyticsInstance = analyticsProvider.initialize({ options });
  return analyticsInstance;
}
function logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = getModularInstance(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch((e) => logger.error(e));
}
const name = "@firebase/analytics";
const version = "0.7.5";
function registerAnalytics() {
  _registerComponent(new Component(ANALYTICS_TYPE, (container, { options: analyticsOptions }) => {
    const app2 = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    return factory(app2, installations, analyticsOptions);
  }, "PUBLIC"));
  _registerComponent(new Component("analytics-internal", internalFactory2, "PRIVATE"));
  registerVersion(name, version);
  registerVersion(name, version, "esm2017");
  function internalFactory2(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
      };
    } catch (e) {
      throw ERROR_FACTORY$1.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics();
const app = initializeApp({
  apiKey: "AIzaSyCFnoz4_jsO-StDt9vie-SWo0ZSAffUsC8",
  authDomain: "pictle.firebaseapp.com",
  projectId: "pictle",
  storageBucket: "pictle.appspot.com",
  messagingSenderId: "183261919274",
  appId: "1:183261919274:web:1c5e3c4ea6c6226eaeeb53",
  measurementId: "G-ZEPK6EFR57"
});
try {
  getPerformance(app);
  getAnalytics(app);
} catch (e) {
  console.log("Unable to load Firebase Analytics/Performance. Probably not in browser.");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_VAPID_KEY = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
const ENDPOINT = "https://fcmregistrations.googleapis.com/v1";
const FCM_MSG = "FCM_MSG";
const CONSOLE_CAMPAIGN_ID = "google.c.a.c_id";
const SDK_PLATFORM_WEB = 3;
const EVENT_MESSAGE_DELIVERED = 1;
var MessageType$1;
(function(MessageType2) {
  MessageType2[MessageType2["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
  MessageType2[MessageType2["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var MessageType;
(function(MessageType2) {
  MessageType2["PUSH_RECEIVED"] = "push-received";
  MessageType2["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
  const uint8Array = new Uint8Array(array);
  const base64String = btoa(String.fromCharCode(...uint8Array));
  return base64String.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64ToArray(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const OLD_DB_NAME = "fcm_token_details_db";
const OLD_DB_VERSION = 5;
const OLD_OBJECT_STORE_NAME = "fcm_token_object_Store";
async function migrateOldDatabase(senderId) {
  if ("databases" in indexedDB) {
    const databases = await indexedDB.databases();
    const dbNames = databases.map((db2) => db2.name);
    if (!dbNames.includes(OLD_DB_NAME)) {
      return null;
    }
  }
  let tokenDetails = null;
  const db = await openDb(OLD_DB_NAME, OLD_DB_VERSION, async (db2) => {
    var _a;
    if (db2.oldVersion < 2) {
      return;
    }
    if (!db2.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
      return;
    }
    const objectStore = db2.transaction.objectStore(OLD_OBJECT_STORE_NAME);
    const value = await objectStore.index("fcmSenderId").get(senderId);
    await objectStore.clear();
    if (!value) {
      return;
    }
    if (db2.oldVersion === 2) {
      const oldDetails = value;
      if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
        return;
      }
      tokenDetails = {
        token: oldDetails.fcmToken,
        createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
        subscriptionOptions: {
          auth: oldDetails.auth,
          p256dh: oldDetails.p256dh,
          endpoint: oldDetails.endpoint,
          swScope: oldDetails.swScope,
          vapidKey: typeof oldDetails.vapidKey === "string" ? oldDetails.vapidKey : arrayToBase64(oldDetails.vapidKey)
        }
      };
    } else if (db2.oldVersion === 3) {
      const oldDetails = value;
      tokenDetails = {
        token: oldDetails.fcmToken,
        createTime: oldDetails.createTime,
        subscriptionOptions: {
          auth: arrayToBase64(oldDetails.auth),
          p256dh: arrayToBase64(oldDetails.p256dh),
          endpoint: oldDetails.endpoint,
          swScope: oldDetails.swScope,
          vapidKey: arrayToBase64(oldDetails.vapidKey)
        }
      };
    } else if (db2.oldVersion === 4) {
      const oldDetails = value;
      tokenDetails = {
        token: oldDetails.fcmToken,
        createTime: oldDetails.createTime,
        subscriptionOptions: {
          auth: arrayToBase64(oldDetails.auth),
          p256dh: arrayToBase64(oldDetails.p256dh),
          endpoint: oldDetails.endpoint,
          swScope: oldDetails.swScope,
          vapidKey: arrayToBase64(oldDetails.vapidKey)
        }
      };
    }
  });
  db.close();
  await deleteDb(OLD_DB_NAME);
  await deleteDb("fcm_vapid_details_db");
  await deleteDb("undefined");
  return checkTokenDetails(tokenDetails) ? tokenDetails : null;
}
function checkTokenDetails(tokenDetails) {
  if (!tokenDetails || !tokenDetails.subscriptionOptions) {
    return false;
  }
  const { subscriptionOptions } = tokenDetails;
  return typeof tokenDetails.createTime === "number" && tokenDetails.createTime > 0 && typeof tokenDetails.token === "string" && tokenDetails.token.length > 0 && typeof subscriptionOptions.auth === "string" && subscriptionOptions.auth.length > 0 && typeof subscriptionOptions.p256dh === "string" && subscriptionOptions.p256dh.length > 0 && typeof subscriptionOptions.endpoint === "string" && subscriptionOptions.endpoint.length > 0 && typeof subscriptionOptions.swScope === "string" && subscriptionOptions.swScope.length > 0 && typeof subscriptionOptions.vapidKey === "string" && subscriptionOptions.vapidKey.length > 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME = "firebase-messaging-database";
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = "firebase-messaging-store";
let dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDb(DATABASE_NAME, DATABASE_VERSION, (upgradeDb) => {
      switch (upgradeDb.oldVersion) {
        case 0:
          upgradeDb.createObjectStore(OBJECT_STORE_NAME);
      }
    });
  }
  return dbPromise;
}
async function dbGet(firebaseDependencies) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tokenDetails = await db.transaction(OBJECT_STORE_NAME).objectStore(OBJECT_STORE_NAME).get(key);
  if (tokenDetails) {
    return tokenDetails;
  } else {
    const oldTokenDetails = await migrateOldDatabase(firebaseDependencies.appConfig.senderId);
    if (oldTokenDetails) {
      await dbSet(firebaseDependencies, oldTokenDetails);
      return oldTokenDetails;
    }
  }
}
async function dbSet(firebaseDependencies, tokenDetails) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
  await tx.complete;
  return tokenDetails;
}
async function dbRemove(firebaseDependencies) {
  const key = getKey(firebaseDependencies);
  const db = await getDbPromise();
  const tx = db.transaction(OBJECT_STORE_NAME, "readwrite");
  await tx.objectStore(OBJECT_STORE_NAME).delete(key);
  await tx.complete;
}
function getKey({ appConfig }) {
  return appConfig.appId;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_MAP = {
  ["missing-app-config-values"]: 'Missing App configuration value: "{$valueName}"',
  ["only-available-in-window"]: "This method is available in a Window context.",
  ["only-available-in-sw"]: "This method is available in a service worker context.",
  ["permission-default"]: "The notification permission was not granted and dismissed instead.",
  ["permission-blocked"]: "The notification permission was not granted and blocked instead.",
  ["unsupported-browser"]: "This browser doesn't support the API's required to use the Firebase SDK.",
  ["indexed-db-unsupported"]: "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
  ["failed-service-worker-registration"]: "We are unable to register the default service worker. {$browserErrorMessage}",
  ["token-subscribe-failed"]: "A problem occurred while subscribing the user to FCM: {$errorInfo}",
  ["token-subscribe-no-token"]: "FCM returned no token when subscribing the user to push.",
  ["token-unsubscribe-failed"]: "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
  ["token-update-failed"]: "A problem occurred while updating the user from FCM: {$errorInfo}",
  ["token-update-no-token"]: "FCM returned no token when updating the user to push.",
  ["use-sw-after-get-token"]: "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
  ["invalid-sw-registration"]: "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
  ["invalid-bg-handler"]: "The input to setBackgroundMessageHandler() must be a function.",
  ["invalid-vapid-key"]: "The public VAPID key must be a string.",
  ["use-vapid-key-after-get-token"]: "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
};
const ERROR_FACTORY = new ErrorFactory("messaging", "Messaging", ERROR_MAP);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestGetToken(firebaseDependencies, subscriptionOptions) {
  const headers = await getHeaders(firebaseDependencies);
  const body = getBody(subscriptionOptions);
  const subscribeOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };
  let responseData;
  try {
    const response = await fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);
    responseData = await response.json();
  } catch (err) {
    throw ERROR_FACTORY.create("token-subscribe-failed", {
      errorInfo: err
    });
  }
  if (responseData.error) {
    const message = responseData.error.message;
    throw ERROR_FACTORY.create("token-subscribe-failed", {
      errorInfo: message
    });
  }
  if (!responseData.token) {
    throw ERROR_FACTORY.create("token-subscribe-no-token");
  }
  return responseData.token;
}
async function requestUpdateToken(firebaseDependencies, tokenDetails) {
  const headers = await getHeaders(firebaseDependencies);
  const body = getBody(tokenDetails.subscriptionOptions);
  const updateOptions = {
    method: "PATCH",
    headers,
    body: JSON.stringify(body)
  };
  let responseData;
  try {
    const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`, updateOptions);
    responseData = await response.json();
  } catch (err) {
    throw ERROR_FACTORY.create("token-update-failed", {
      errorInfo: err
    });
  }
  if (responseData.error) {
    const message = responseData.error.message;
    throw ERROR_FACTORY.create("token-update-failed", {
      errorInfo: message
    });
  }
  if (!responseData.token) {
    throw ERROR_FACTORY.create("token-update-no-token");
  }
  return responseData.token;
}
async function requestDeleteToken(firebaseDependencies, token) {
  const headers = await getHeaders(firebaseDependencies);
  const unsubscribeOptions = {
    method: "DELETE",
    headers
  };
  try {
    const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${token}`, unsubscribeOptions);
    const responseData = await response.json();
    if (responseData.error) {
      const message = responseData.error.message;
      throw ERROR_FACTORY.create("token-unsubscribe-failed", {
        errorInfo: message
      });
    }
  } catch (err) {
    throw ERROR_FACTORY.create("token-unsubscribe-failed", {
      errorInfo: err
    });
  }
}
function getEndpoint({ projectId }) {
  return `${ENDPOINT}/projects/${projectId}/registrations`;
}
async function getHeaders({ appConfig, installations }) {
  const authToken = await installations.getToken();
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": appConfig.apiKey,
    "x-goog-firebase-installations-auth": `FIS ${authToken}`
  });
}
function getBody({ p256dh, auth, endpoint, vapidKey }) {
  const body = {
    web: {
      endpoint,
      auth,
      p256dh
    }
  };
  if (vapidKey !== DEFAULT_VAPID_KEY) {
    body.web.applicationPubKey = vapidKey;
  }
  return body;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1e3;
async function getTokenInternal(messaging) {
  const pushSubscription = await getPushSubscription(messaging.swRegistration, messaging.vapidKey);
  const subscriptionOptions = {
    vapidKey: messaging.vapidKey,
    swScope: messaging.swRegistration.scope,
    endpoint: pushSubscription.endpoint,
    auth: arrayToBase64(pushSubscription.getKey("auth")),
    p256dh: arrayToBase64(pushSubscription.getKey("p256dh"))
  };
  const tokenDetails = await dbGet(messaging.firebaseDependencies);
  if (!tokenDetails) {
    return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
  } else if (!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
    try {
      await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
    } catch (e) {
      console.warn(e);
    }
    return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
  } else if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
    return updateToken(messaging, {
      token: tokenDetails.token,
      createTime: Date.now(),
      subscriptionOptions
    });
  } else {
    return tokenDetails.token;
  }
}
async function deleteTokenInternal(messaging) {
  const tokenDetails = await dbGet(messaging.firebaseDependencies);
  if (tokenDetails) {
    await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
    await dbRemove(messaging.firebaseDependencies);
  }
  const pushSubscription = await messaging.swRegistration.pushManager.getSubscription();
  if (pushSubscription) {
    return pushSubscription.unsubscribe();
  }
  return true;
}
async function updateToken(messaging, tokenDetails) {
  try {
    const updatedToken = await requestUpdateToken(messaging.firebaseDependencies, tokenDetails);
    const updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), { token: updatedToken, createTime: Date.now() });
    await dbSet(messaging.firebaseDependencies, updatedTokenDetails);
    return updatedToken;
  } catch (e) {
    await deleteTokenInternal(messaging);
    throw e;
  }
}
async function getNewToken(firebaseDependencies, subscriptionOptions) {
  const token = await requestGetToken(firebaseDependencies, subscriptionOptions);
  const tokenDetails = {
    token,
    createTime: Date.now(),
    subscriptionOptions
  };
  await dbSet(firebaseDependencies, tokenDetails);
  return tokenDetails.token;
}
async function getPushSubscription(swRegistration, vapidKey) {
  const subscription = await swRegistration.pushManager.getSubscription();
  if (subscription) {
    return subscription;
  }
  return swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: base64ToArray(vapidKey)
  });
}
function isTokenValid(dbOptions, currentOptions) {
  const isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
  const isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
  const isAuthEqual = currentOptions.auth === dbOptions.auth;
  const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
  return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function externalizePayload(internalPayload) {
  const payload = {
    from: internalPayload.from,
    collapseKey: internalPayload.collapse_key,
    messageId: internalPayload.fcmMessageId
  };
  propagateNotificationPayload(payload, internalPayload);
  propagateDataPayload(payload, internalPayload);
  propagateFcmOptions(payload, internalPayload);
  return payload;
}
function propagateNotificationPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.notification) {
    return;
  }
  payload.notification = {};
  const title = messagePayloadInternal.notification.title;
  if (!!title) {
    payload.notification.title = title;
  }
  const body = messagePayloadInternal.notification.body;
  if (!!body) {
    payload.notification.body = body;
  }
  const image = messagePayloadInternal.notification.image;
  if (!!image) {
    payload.notification.image = image;
  }
}
function propagateDataPayload(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.data) {
    return;
  }
  payload.data = messagePayloadInternal.data;
}
function propagateFcmOptions(payload, messagePayloadInternal) {
  if (!messagePayloadInternal.fcmOptions) {
    return;
  }
  payload.fcmOptions = {};
  const link = messagePayloadInternal.fcmOptions.link;
  if (!!link) {
    payload.fcmOptions.link = link;
  }
  const analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;
  if (!!analyticsLabel) {
    payload.fcmOptions.analyticsLabel = analyticsLabel;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
  return typeof data === "object" && !!data && CONSOLE_CAMPAIGN_ID in data;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_mergeStrings("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o");
_mergeStrings("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
async function stageLog(messaging, internalPayload) {
  const fcmEvent = createFcmEvent(internalPayload, await messaging.firebaseDependencies.installations.getId());
  createAndEnqueueLogEvent(messaging, fcmEvent);
}
function createFcmEvent(internalPayload, fid) {
  var _a, _b;
  const fcmEvent = {};
  if (!!internalPayload.from) {
    fcmEvent.project_number = internalPayload.from;
  }
  if (!!internalPayload.fcmMessageId) {
    fcmEvent.message_id = internalPayload.fcmMessageId;
  }
  fcmEvent.instance_id = fid;
  if (!!internalPayload.notification) {
    fcmEvent.message_type = MessageType$1.DISPLAY_NOTIFICATION.toString();
  } else {
    fcmEvent.message_type = MessageType$1.DATA_MESSAGE.toString();
  }
  fcmEvent.sdk_platform = SDK_PLATFORM_WEB.toString();
  fcmEvent.package_name = self.origin.replace(/(^\w+:|^)\/\//, "");
  if (!!internalPayload.collapse_key) {
    fcmEvent.collapse_key = internalPayload.collapse_key;
  }
  fcmEvent.event = EVENT_MESSAGE_DELIVERED.toString();
  if (!!((_a = internalPayload.fcmOptions) === null || _a === void 0 ? void 0 : _a.analytics_label)) {
    fcmEvent.analytics_label = (_b = internalPayload.fcmOptions) === null || _b === void 0 ? void 0 : _b.analytics_label;
  }
  return fcmEvent;
}
function createAndEnqueueLogEvent(messaging, fcmEvent) {
  const logEvent2 = {};
  logEvent2.event_time_ms = Math.floor(Date.now()).toString();
  logEvent2.source_extension_json_proto3 = JSON.stringify(fcmEvent);
  messaging.logEvents.push(logEvent2);
}
function _mergeStrings(s1, s2) {
  const resultArray = [];
  for (let i = 0; i < s1.length; i++) {
    resultArray.push(s1.charAt(i));
    if (i < s2.length) {
      resultArray.push(s2.charAt(i));
    }
  }
  return resultArray.join("");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function onSubChange(event, messaging) {
  var _a, _b;
  const { newSubscription } = event;
  if (!newSubscription) {
    await deleteTokenInternal(messaging);
    return;
  }
  const tokenDetails = await dbGet(messaging.firebaseDependencies);
  await deleteTokenInternal(messaging);
  messaging.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
  await getTokenInternal(messaging);
}
async function onPush(event, messaging) {
  const internalPayload = getMessagePayloadInternal(event);
  if (!internalPayload) {
    return;
  }
  if (messaging.deliveryMetricsExportedToBigQueryEnabled) {
    await stageLog(messaging, internalPayload);
  }
  const clientList = await getClientList();
  if (hasVisibleClients(clientList)) {
    return sendMessagePayloadInternalToWindows(clientList, internalPayload);
  }
  if (!!internalPayload.notification) {
    await showNotification(wrapInternalPayload(internalPayload));
  }
  if (!messaging) {
    return;
  }
  if (!!messaging.onBackgroundMessageHandler) {
    const payload = externalizePayload(internalPayload);
    if (typeof messaging.onBackgroundMessageHandler === "function") {
      messaging.onBackgroundMessageHandler(payload);
    } else {
      messaging.onBackgroundMessageHandler.next(payload);
    }
  }
}
async function onNotificationClick(event) {
  var _a, _b;
  const internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];
  if (!internalPayload) {
    return;
  } else if (event.action) {
    return;
  }
  event.stopImmediatePropagation();
  event.notification.close();
  const link = getLink(internalPayload);
  if (!link) {
    return;
  }
  const url = new URL(link, self.location.href);
  const originUrl = new URL(self.location.origin);
  if (url.host !== originUrl.host) {
    return;
  }
  let client = await getWindowClient(url);
  if (!client) {
    client = await self.clients.openWindow(link);
    await sleep(3e3);
  } else {
    client = await client.focus();
  }
  if (!client) {
    return;
  }
  internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
  internalPayload.isFirebaseMessaging = true;
  return client.postMessage(internalPayload);
}
function wrapInternalPayload(internalPayload) {
  const wrappedInternalPayload = Object.assign({}, internalPayload.notification);
  wrappedInternalPayload.data = {
    [FCM_MSG]: internalPayload
  };
  return wrappedInternalPayload;
}
function getMessagePayloadInternal({ data }) {
  if (!data) {
    return null;
  }
  try {
    return data.json();
  } catch (err) {
    return null;
  }
}
async function getWindowClient(url) {
  const clientList = await getClientList();
  for (const client of clientList) {
    const clientUrl = new URL(client.url, self.location.href);
    if (url.host === clientUrl.host) {
      return client;
    }
  }
  return null;
}
function hasVisibleClients(clientList) {
  return clientList.some((client) => client.visibilityState === "visible" && !client.url.startsWith("chrome-extension://"));
}
function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
  internalPayload.isFirebaseMessaging = true;
  internalPayload.messageType = MessageType.PUSH_RECEIVED;
  for (const client of clientList) {
    client.postMessage(internalPayload);
  }
}
function getClientList() {
  return self.clients.matchAll({
    type: "window",
    includeUncontrolled: true
  });
}
function showNotification(notificationPayloadInternal) {
  var _a;
  const { actions } = notificationPayloadInternal;
  const { maxActions } = Notification;
  if (actions && maxActions && actions.length > maxActions) {
    console.warn(`This browser only supports ${maxActions} actions. The remaining actions will not be displayed.`);
  }
  return self.registration.showNotification((_a = notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : "", notificationPayloadInternal);
}
function getLink(payload) {
  var _a, _b, _c;
  const link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;
  if (link) {
    return link;
  }
  if (isConsoleMessage(payload.data)) {
    return self.location.origin;
  } else {
    return null;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app2) {
  if (!app2 || !app2.options) {
    throw getMissingValueError("App Configuration Object");
  }
  if (!app2.name) {
    throw getMissingValueError("App Name");
  }
  const configKeys = [
    "projectId",
    "apiKey",
    "appId",
    "messagingSenderId"
  ];
  const { options } = app2;
  for (const keyName of configKeys) {
    if (!options[keyName]) {
      throw getMissingValueError(keyName);
    }
  }
  return {
    appName: app2.name,
    projectId: options.projectId,
    apiKey: options.apiKey,
    appId: options.appId,
    senderId: options.messagingSenderId
  };
}
function getMissingValueError(valueName) {
  return ERROR_FACTORY.create("missing-app-config-values", {
    valueName
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MessagingService {
  constructor(app2, installations, analyticsProvider) {
    this.deliveryMetricsExportedToBigQueryEnabled = false;
    this.onBackgroundMessageHandler = null;
    this.onMessageHandler = null;
    this.logEvents = [];
    this.isLogServiceStarted = false;
    const appConfig = extractAppConfig(app2);
    this.firebaseDependencies = {
      app: app2,
      appConfig,
      installations,
      analyticsProvider
    };
  }
  _delete() {
    return Promise.resolve();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SwMessagingFactory = (container) => {
  const messaging = new MessagingService(container.getProvider("app").getImmediate(), container.getProvider("installations-internal").getImmediate(), container.getProvider("analytics-internal"));
  self.addEventListener("push", (e) => {
    e.waitUntil(onPush(e, messaging));
  });
  self.addEventListener("pushsubscriptionchange", (e) => {
    e.waitUntil(onSubChange(e, messaging));
  });
  self.addEventListener("notificationclick", (e) => {
    e.waitUntil(onNotificationClick(e));
  });
  return messaging;
};
function registerMessagingInSw() {
  _registerComponent(new Component("messaging-sw", SwMessagingFactory, "PUBLIC"));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function isSwSupported() {
  return isIndexedDBAvailable() && await validateIndexedDBOpenable() && "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getMessagingInSw(app2 = getApp()) {
  isSwSupported().then((isSupported) => {
    if (!isSupported) {
      throw ERROR_FACTORY.create("unsupported-browser");
    }
  }, (_) => {
    throw ERROR_FACTORY.create("indexed-db-unsupported");
  });
  return _getProvider(getModularInstance(app2), "messaging-sw").getImmediate();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerMessagingInSw();
getMessagingInSw(app);
self.addEventListener("notificationclick", (event) => {
  console.log("notif click:", event);
});
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }).catch((e) => console.log(e)));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const isPuzzle = url.host === "pictle-default-rtdb.firebaseio.com" && url.pathname.startsWith("/puzzles/");
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = (isStaticAsset || isPuzzle) && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
