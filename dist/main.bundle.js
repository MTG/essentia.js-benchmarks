/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n__webpack_require__(/*! core-js/shim */ \"./node_modules/core-js/shim.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/fn/regexp/escape */ \"./node_modules/core-js/fn/regexp/escape.js\");\n\nif (global._babelPolyfill) {\n  throw new Error(\"only one instance of babel-polyfill is allowed\");\n}\nglobal._babelPolyfill = true;\n\nvar DEFINE_PROPERTY = \"defineProperty\";\nfunction define(O, key, value) {\n  O[key] || Object[DEFINE_PROPERTY](O, key, {\n    writable: true,\n    configurable: true,\n    value: value\n  });\n}\n\ndefine(String.prototype, \"padLeft\", \"\".padStart);\ndefine(String.prototype, \"padRight\", \"\".padEnd);\n\n\"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill\".split(\",\").forEach(function (key) {\n  [][key] && define(Array, key, Function.call.bind([][key]));\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * Copyright (c) 2014, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * https://raw.github.com/facebook/regenerator/master/LICENSE file. An\n * additional grant of patent rights can be found in the PATENTS file in\n * the same directory.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    if (typeof global.process === \"object\" && global.process.domain) {\n      invoke = global.process.domain.bind(invoke);\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // Among the various tricks for obtaining a reference to the global\n  // object, this seems to be the most reliable technique that does not\n  // use indirect eval (which violates Content Security Policy).\n  typeof global === \"object\" ? global :\n  typeof window === \"object\" ? window :\n  typeof self === \"object\" ? self : this\n);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/core.regexp.escape */ \"./node_modules/core-js/modules/core.regexp.escape.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").RegExp.escape;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/regexp/escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nmodule.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {\n  if (\n    arguments.length === 0\n      // eslint-disable-next-line no-self-compare\n      || x != x\n      // eslint-disable-next-line no-self-compare\n      || inLow != inLow\n      // eslint-disable-next-line no-self-compare\n      || inHigh != inHigh\n      // eslint-disable-next-line no-self-compare\n      || outLow != outLow\n      // eslint-disable-next-line no-self-compare\n      || outHigh != outHigh\n  ) return NaN;\n  if (x === Infinity || x === -Infinity) return x;\n  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Map = __webpack_require__(/*! ./es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('metadata');\nvar store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\"))());\n\nvar getOrCreateMetadataMap = function (target, targetKey, create) {\n  var targetMetadata = store.get(target);\n  if (!targetMetadata) {\n    if (!create) return undefined;\n    store.set(target, targetMetadata = new Map());\n  }\n  var keyMetadata = targetMetadata.get(targetKey);\n  if (!keyMetadata) {\n    if (!create) return undefined;\n    targetMetadata.set(targetKey, keyMetadata = new Map());\n  } return keyMetadata;\n};\nvar ordinaryHasOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);\n};\nvar ordinaryGetOwnMetadata = function (MetadataKey, O, P) {\n  var metadataMap = getOrCreateMetadataMap(O, P, false);\n  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);\n};\nvar ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {\n  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);\n};\nvar ordinaryOwnMetadataKeys = function (target, targetKey) {\n  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);\n  var keys = [];\n  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });\n  return keys;\n};\nvar toMetaKey = function (it) {\n  return it === undefined || typeof it == 'symbol' ? it : String(it);\n};\nvar exp = function (O) {\n  $export($export.S, 'Reflect', O);\n};\n\nmodule.exports = {\n  store: store,\n  map: getOrCreateMetadataMap,\n  has: ordinaryHasOwnMetadata,\n  get: ordinaryGetOwnMetadata,\n  set: ordinaryDefineOwnMetadata,\n  keys: ordinaryOwnMetadataKeys,\n  key: toMetaKey,\n  exp: exp\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Forced replacement prototype accessors methods\nmodule.exports = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var K = Math.random();\n  // In FF throws only define methods\n  // eslint-disable-next-line no-undef, no-useless-call\n  __defineSetter__.call(null, K, function () { /* empty */ });\n  delete __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\")[K];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-forced-pam.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (regExp, replace) {\n  var replacer = replace === Object(replace) ? function (part) {\n    return replace[part];\n  } : replace;\n  return function (it) {\n    return String(it).replace(regExp, replacer);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_replacer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/benjamingr/RexExp.escape\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $re = __webpack_require__(/*! ./_replacer */ \"./node_modules/core-js/modules/_replacer.js\")(/[\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');\n\n$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.regexp.escape.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatten: function flatten(/* depthArg = 1 */) {\n    var depthArg = arguments[0];\n    var O = toObject(this);\n    var sourceLen = toLength(O.length);\n    var A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatten');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.array.flatten.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar process = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").process;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\n$export($export.G, {\n  asap: function asap(fn) {\n    var domain = isNode && process.domain;\n    microtask(domain ? domain.bind(fn) : fn);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.asap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/ljharb/proposal-is-error\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n\n$export($export.S, 'Error', {\n  isError: function isError(it) {\n    return cof(it) === 'Error';\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.error.is-error.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Map') });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clamp: function clamp(x, lower, upper) {\n    return Math.min(upper, Math.max(lower, x));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.clamp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.deg-per-rad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar RAD_PER_DEG = 180 / Math.PI;\n\n$export($export.S, 'Math', {\n  degrees: function degrees(radians) {\n    return radians * RAD_PER_DEG;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.degrees.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar scale = __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\");\nvar fround = __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\");\n\n$export($export.S, 'Math', {\n  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {\n    return fround(scale(x, inLow, inHigh, outLow, outHigh));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.fscale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  iaddh: function iaddh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.iaddh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  imulh: function imulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >> 16;\n    var v1 = $v >> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.imulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  isubh: function isubh(x0, x1, y0, y1) {\n    var $x0 = x0 >>> 0;\n    var $x1 = x1 >>> 0;\n    var $y0 = y0 >>> 0;\n    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.isubh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.rad-per-deg.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar DEG_PER_RAD = Math.PI / 180;\n\n$export($export.S, 'Math', {\n  radians: function radians(degrees) {\n    return degrees * DEG_PER_RAD;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.radians.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://rwaldron.github.io/proposal-math-extensions/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { scale: __webpack_require__(/*! ./_math-scale */ \"./node_modules/core-js/modules/_math-scale.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.scale.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// http://jfbastien.github.io/papers/Math.signbit.html\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { signbit: function signbit(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.signbit.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://gist.github.com/BrendanEich/4294d5c212a6d2254703\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  umulh: function umulh(u, v) {\n    var UINT16 = 0xffff;\n    var $u = +u;\n    var $v = +v;\n    var u0 = $u & UINT16;\n    var v0 = $v & UINT16;\n    var u1 = $u >>> 16;\n    var v1 = $v >>> 16;\n    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);\n    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.math.umulh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.2 Object.prototype.__defineGetter__(P, getter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineGetter__: function __defineGetter__(P, getter) {\n    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.define-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n\n// B.2.2.3 Object.prototype.__defineSetter__(P, setter)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __defineSetter__: function __defineSetter__(P, setter) {\n    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.define-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.4 Object.prototype.__lookupGetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupGetter__: function __lookupGetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.get;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.lookup-getter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n// B.2.2.5 Object.prototype.__lookupSetter__(P)\n__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && $export($export.P + __webpack_require__(/*! ./_object-forced-pam */ \"./node_modules/core-js/modules/_object-forced-pam.js\"), 'Object', {\n  __lookupSetter__: function __lookupSetter__(P) {\n    var O = toObject(this);\n    var K = toPrimitive(P, true);\n    var D;\n    do {\n      if (D = getOwnPropertyDescriptor(O, K)) return D.set;\n    } while (O = getPrototypeOf(O));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.lookup-setter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/zenparsing/es-observable\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar OBSERVABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('observable');\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar RETURN = forOf.RETURN;\n\nvar getMethod = function (fn) {\n  return fn == null ? undefined : aFunction(fn);\n};\n\nvar cleanupSubscription = function (subscription) {\n  var cleanup = subscription._c;\n  if (cleanup) {\n    subscription._c = undefined;\n    cleanup();\n  }\n};\n\nvar subscriptionClosed = function (subscription) {\n  return subscription._o === undefined;\n};\n\nvar closeSubscription = function (subscription) {\n  if (!subscriptionClosed(subscription)) {\n    subscription._o = undefined;\n    cleanupSubscription(subscription);\n  }\n};\n\nvar Subscription = function (observer, subscriber) {\n  anObject(observer);\n  this._c = undefined;\n  this._o = observer;\n  observer = new SubscriptionObserver(this);\n  try {\n    var cleanup = subscriber(observer);\n    var subscription = cleanup;\n    if (cleanup != null) {\n      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };\n      else aFunction(cleanup);\n      this._c = cleanup;\n    }\n  } catch (e) {\n    observer.error(e);\n    return;\n  } if (subscriptionClosed(this)) cleanupSubscription(this);\n};\n\nSubscription.prototype = redefineAll({}, {\n  unsubscribe: function unsubscribe() { closeSubscription(this); }\n});\n\nvar SubscriptionObserver = function (subscription) {\n  this._s = subscription;\n};\n\nSubscriptionObserver.prototype = redefineAll({}, {\n  next: function next(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      try {\n        var m = getMethod(observer.next);\n        if (m) return m.call(observer, value);\n      } catch (e) {\n        try {\n          closeSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      }\n    }\n  },\n  error: function error(value) {\n    var subscription = this._s;\n    if (subscriptionClosed(subscription)) throw value;\n    var observer = subscription._o;\n    subscription._o = undefined;\n    try {\n      var m = getMethod(observer.error);\n      if (!m) throw value;\n      value = m.call(observer, value);\n    } catch (e) {\n      try {\n        cleanupSubscription(subscription);\n      } finally {\n        throw e;\n      }\n    } cleanupSubscription(subscription);\n    return value;\n  },\n  complete: function complete(value) {\n    var subscription = this._s;\n    if (!subscriptionClosed(subscription)) {\n      var observer = subscription._o;\n      subscription._o = undefined;\n      try {\n        var m = getMethod(observer.complete);\n        value = m ? m.call(observer, value) : undefined;\n      } catch (e) {\n        try {\n          cleanupSubscription(subscription);\n        } finally {\n          throw e;\n        }\n      } cleanupSubscription(subscription);\n      return value;\n    }\n  }\n});\n\nvar $Observable = function Observable(subscriber) {\n  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);\n};\n\nredefineAll($Observable.prototype, {\n  subscribe: function subscribe(observer) {\n    return new Subscription(observer, this._f);\n  },\n  forEach: function forEach(fn) {\n    var that = this;\n    return new (core.Promise || global.Promise)(function (resolve, reject) {\n      aFunction(fn);\n      var subscription = that.subscribe({\n        next: function (value) {\n          try {\n            return fn(value);\n          } catch (e) {\n            reject(e);\n            subscription.unsubscribe();\n          }\n        },\n        error: reject,\n        complete: resolve\n      });\n    });\n  }\n});\n\nredefineAll($Observable, {\n  from: function from(x) {\n    var C = typeof this === 'function' ? this : $Observable;\n    var method = getMethod(anObject(x)[OBSERVABLE]);\n    if (method) {\n      var observable = anObject(method.call(x));\n      return observable.constructor === C ? observable : new C(function (observer) {\n        return observable.subscribe(observer);\n      });\n    }\n    return new C(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          try {\n            if (forOf(x, false, function (it) {\n              observer.next(it);\n              if (done) return RETURN;\n            }) === RETURN) return;\n          } catch (e) {\n            if (done) throw e;\n            observer.error(e);\n            return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  },\n  of: function of() {\n    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];\n    return new (typeof this === 'function' ? this : $Observable)(function (observer) {\n      var done = false;\n      microtask(function () {\n        if (!done) {\n          for (var j = 0; j < items.length; ++j) {\n            observer.next(items[j]);\n            if (done) return;\n          } observer.complete();\n        }\n      });\n      return function () { done = true; };\n    });\n  }\n});\n\nhide($Observable.prototype, OBSERVABLE, function () { return this; });\n\n$export($export.G, { Observable: $Observable });\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar ordinaryDefineOwnMetadata = metadata.set;\n\nmetadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {\n  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.define-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toMetaKey = metadata.key;\nvar getOrCreateMetadataMap = metadata.map;\nvar store = metadata.store;\n\nmetadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {\n  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);\n  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);\n  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;\n  if (metadataMap.size) return true;\n  var targetMetadata = store.get(target);\n  targetMetadata['delete'](targetKey);\n  return !!targetMetadata.size || store['delete'](target);\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.delete-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Set = __webpack_require__(/*! ./es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/modules/_array-from-iterable.js\");\nvar metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nvar ordinaryMetadataKeys = function (O, P) {\n  var oKeys = ordinaryOwnMetadataKeys(O, P);\n  var parent = getPrototypeOf(O);\n  if (parent === null) return oKeys;\n  var pKeys = ordinaryMetadataKeys(parent, P);\n  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;\n};\n\nmetadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {\n  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nvar ordinaryGetMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;\n};\n\nmetadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.get-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryOwnMetadataKeys = metadata.keys;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {\n  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryGetOwnMetadata = metadata.get;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryGetOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.get-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nvar ordinaryHasMetadata = function (MetadataKey, O, P) {\n  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);\n  if (hasOwn) return true;\n  var parent = getPrototypeOf(O);\n  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;\n};\n\nmetadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.has-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar ordinaryHasOwnMetadata = metadata.has;\nvar toMetaKey = metadata.key;\n\nmetadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {\n  return ordinaryHasOwnMetadata(metadataKey, anObject(target)\n    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.has-own-metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $metadata = __webpack_require__(/*! ./_metadata */ \"./node_modules/core-js/modules/_metadata.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toMetaKey = $metadata.key;\nvar ordinaryDefineOwnMetadata = $metadata.set;\n\n$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {\n  return function decorator(target, targetKey) {\n    ordinaryDefineOwnMetadata(\n      metadataKey, metadataValue,\n      (targetKey !== undefined ? anObject : aFunction)(target),\n      toMetaKey(targetKey)\n    );\n  };\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.reflect.metadata.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('Set');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/modules/_collection-to-json.js\")('Set') });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.set.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/mathiasbynens/String.prototype.at\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n$export($export.P, 'String', {\n  at: function at(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/String.prototype.matchAll/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar getFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar RegExpProto = RegExp.prototype;\n\nvar $RegExpStringIterator = function (regexp, string) {\n  this._r = regexp;\n  this._s = string;\n};\n\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")($RegExpStringIterator, 'RegExp String', function next() {\n  var match = this._r.exec(this._s);\n  return { value: match, done: match === null };\n});\n\n$export($export.P, 'String', {\n  matchAll: function matchAll(regexp) {\n    defined(this);\n    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');\n    var S = String(this);\n    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);\n    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);\n    rx.lastIndex = toLength(regexp.lastIndex);\n    return new $RegExpStringIterator(rx, S);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'System', { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.system.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakMap');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.weak-map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakMap');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.weak-map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/modules/_set-collection-from.js\")('WeakSet');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.weak-set.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/modules/_set-collection-of.js\")('WeakSet');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.weak-set.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ./modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ./modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ./modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ./modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ./modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ./modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ./modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ./modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ./modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ./modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ./modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ./modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ./modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ./modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ./modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ./modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ./modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ./modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ./modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ./modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ./modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ./modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ./modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ./modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ./modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ./modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ./modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ./modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ./modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ./modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ./modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ./modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ./modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ./modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ./modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ./modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ./modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ./modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ./modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ./modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ./modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ./modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ./modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ./modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ./modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ./modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ./modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ./modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ./modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ./modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ./modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ./modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ./modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ./modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ./modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ./modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ./modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ./modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ./modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ./modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ./modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ./modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ./modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ./modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ./modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ./modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ./modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ./modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ./modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ./modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ./modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ./modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ./modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ./modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ./modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ./modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ./modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ./modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ./modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ./modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ./modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ./modules/es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ./modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ./modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ./modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ./modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ./modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ./modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ./modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ./modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ./modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ./modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ./modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ./modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ./modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ./modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ./modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ./modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ./modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ./modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ./modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ./modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ./modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\n__webpack_require__(/*! ./modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n__webpack_require__(/*! ./modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\n__webpack_require__(/*! ./modules/es7.array.flatten */ \"./node_modules/core-js/modules/es7.array.flatten.js\");\n__webpack_require__(/*! ./modules/es7.string.at */ \"./node_modules/core-js/modules/es7.string.at.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\n__webpack_require__(/*! ./modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\n__webpack_require__(/*! ./modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\n__webpack_require__(/*! ./modules/es7.string.match-all */ \"./node_modules/core-js/modules/es7.string.match-all.js\");\n__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ./modules/es7.symbol.observable */ \"./node_modules/core-js/modules/es7.symbol.observable.js\");\n__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\n__webpack_require__(/*! ./modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\n__webpack_require__(/*! ./modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\n__webpack_require__(/*! ./modules/es7.object.define-getter */ \"./node_modules/core-js/modules/es7.object.define-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.define-setter */ \"./node_modules/core-js/modules/es7.object.define-setter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-getter */ \"./node_modules/core-js/modules/es7.object.lookup-getter.js\");\n__webpack_require__(/*! ./modules/es7.object.lookup-setter */ \"./node_modules/core-js/modules/es7.object.lookup-setter.js\");\n__webpack_require__(/*! ./modules/es7.map.to-json */ \"./node_modules/core-js/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ./modules/es7.set.to-json */ \"./node_modules/core-js/modules/es7.set.to-json.js\");\n__webpack_require__(/*! ./modules/es7.map.of */ \"./node_modules/core-js/modules/es7.map.of.js\");\n__webpack_require__(/*! ./modules/es7.set.of */ \"./node_modules/core-js/modules/es7.set.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.of */ \"./node_modules/core-js/modules/es7.weak-map.of.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.of */ \"./node_modules/core-js/modules/es7.weak-set.of.js\");\n__webpack_require__(/*! ./modules/es7.map.from */ \"./node_modules/core-js/modules/es7.map.from.js\");\n__webpack_require__(/*! ./modules/es7.set.from */ \"./node_modules/core-js/modules/es7.set.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-map.from */ \"./node_modules/core-js/modules/es7.weak-map.from.js\");\n__webpack_require__(/*! ./modules/es7.weak-set.from */ \"./node_modules/core-js/modules/es7.weak-set.from.js\");\n__webpack_require__(/*! ./modules/es7.global */ \"./node_modules/core-js/modules/es7.global.js\");\n__webpack_require__(/*! ./modules/es7.system.global */ \"./node_modules/core-js/modules/es7.system.global.js\");\n__webpack_require__(/*! ./modules/es7.error.is-error */ \"./node_modules/core-js/modules/es7.error.is-error.js\");\n__webpack_require__(/*! ./modules/es7.math.clamp */ \"./node_modules/core-js/modules/es7.math.clamp.js\");\n__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ \"./node_modules/core-js/modules/es7.math.deg-per-rad.js\");\n__webpack_require__(/*! ./modules/es7.math.degrees */ \"./node_modules/core-js/modules/es7.math.degrees.js\");\n__webpack_require__(/*! ./modules/es7.math.fscale */ \"./node_modules/core-js/modules/es7.math.fscale.js\");\n__webpack_require__(/*! ./modules/es7.math.iaddh */ \"./node_modules/core-js/modules/es7.math.iaddh.js\");\n__webpack_require__(/*! ./modules/es7.math.isubh */ \"./node_modules/core-js/modules/es7.math.isubh.js\");\n__webpack_require__(/*! ./modules/es7.math.imulh */ \"./node_modules/core-js/modules/es7.math.imulh.js\");\n__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ \"./node_modules/core-js/modules/es7.math.rad-per-deg.js\");\n__webpack_require__(/*! ./modules/es7.math.radians */ \"./node_modules/core-js/modules/es7.math.radians.js\");\n__webpack_require__(/*! ./modules/es7.math.scale */ \"./node_modules/core-js/modules/es7.math.scale.js\");\n__webpack_require__(/*! ./modules/es7.math.umulh */ \"./node_modules/core-js/modules/es7.math.umulh.js\");\n__webpack_require__(/*! ./modules/es7.math.signbit */ \"./node_modules/core-js/modules/es7.math.signbit.js\");\n__webpack_require__(/*! ./modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ./modules/es7.promise.try */ \"./node_modules/core-js/modules/es7.promise.try.js\");\n__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ \"./node_modules/core-js/modules/es7.reflect.define-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ \"./node_modules/core-js/modules/es7.reflect.delete-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ \"./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ \"./node_modules/core-js/modules/es7.reflect.has-own-metadata.js\");\n__webpack_require__(/*! ./modules/es7.reflect.metadata */ \"./node_modules/core-js/modules/es7.reflect.metadata.js\");\n__webpack_require__(/*! ./modules/es7.asap */ \"./node_modules/core-js/modules/es7.asap.js\");\n__webpack_require__(/*! ./modules/es7.observable */ \"./node_modules/core-js/modules/es7.observable.js\");\n__webpack_require__(/*! ./modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ./modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ./modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ./modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/shim.js?");

/***/ }),

/***/ "./node_modules/meyda/dist/web/meyda.min.js":
/*!**************************************************!*\
  !*** ./node_modules/meyda/dist/web/meyda.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./node_modules/assert/assert.js\":\n/*!***************************************!*\\\n  !*** ./node_modules/assert/assert.js ***!\n  \\***************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n/* WEBPACK VAR INJECTION */(function(global) {\n\n// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js\n// original notice:\n\n/*!\n * The buffer module from node.js, for the browser.\n *\n * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>\n * @license  MIT\n */\nfunction compare(a, b) {\n  if (a === b) {\n    return 0;\n  }\n\n  var x = a.length;\n  var y = b.length;\n\n  for (var i = 0, len = Math.min(x, y); i < len; ++i) {\n    if (a[i] !== b[i]) {\n      x = a[i];\n      y = b[i];\n      break;\n    }\n  }\n\n  if (x < y) {\n    return -1;\n  }\n  if (y < x) {\n    return 1;\n  }\n  return 0;\n}\nfunction isBuffer(b) {\n  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {\n    return global.Buffer.isBuffer(b);\n  }\n  return !!(b != null && b._isBuffer);\n}\n\n// based on node assert, original notice:\n\n// http://wiki.commonjs.org/wiki/Unit_Testing/1.0\n//\n// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!\n//\n// Originally from narwhal.js (http://narwhaljs.org)\n// Copyright (c) 2009 Thomas Robinson <280north.com>\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the 'Software'), to\n// deal in the Software without restriction, including without limitation the\n// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or\n// sell copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN\n// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar util = __webpack_require__(/*! util/ */ \"./node_modules/webpack-stream/node_modules/util/util.js\");\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar pSlice = Array.prototype.slice;\nvar functionsHaveNames = (function () {\n  return function foo() {}.name === 'foo';\n}());\nfunction pToString (obj) {\n  return Object.prototype.toString.call(obj);\n}\nfunction isView(arrbuf) {\n  if (isBuffer(arrbuf)) {\n    return false;\n  }\n  if (typeof global.ArrayBuffer !== 'function') {\n    return false;\n  }\n  if (typeof ArrayBuffer.isView === 'function') {\n    return ArrayBuffer.isView(arrbuf);\n  }\n  if (!arrbuf) {\n    return false;\n  }\n  if (arrbuf instanceof DataView) {\n    return true;\n  }\n  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {\n    return true;\n  }\n  return false;\n}\n// 1. The assert module provides functions that throw\n// AssertionError's when particular conditions are not met. The\n// assert module must conform to the following interface.\n\nvar assert = module.exports = ok;\n\n// 2. The AssertionError is defined in assert.\n// new assert.AssertionError({ message: message,\n//                             actual: actual,\n//                             expected: expected })\n\nvar regex = /\\s*function\\s+([^\\(\\s]*)\\s*/;\n// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js\nfunction getName(func) {\n  if (!util.isFunction(func)) {\n    return;\n  }\n  if (functionsHaveNames) {\n    return func.name;\n  }\n  var str = func.toString();\n  var match = str.match(regex);\n  return match && match[1];\n}\nassert.AssertionError = function AssertionError(options) {\n  this.name = 'AssertionError';\n  this.actual = options.actual;\n  this.expected = options.expected;\n  this.operator = options.operator;\n  if (options.message) {\n    this.message = options.message;\n    this.generatedMessage = false;\n  } else {\n    this.message = getMessage(this);\n    this.generatedMessage = true;\n  }\n  var stackStartFunction = options.stackStartFunction || fail;\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, stackStartFunction);\n  } else {\n    // non v8 browsers so we can have a stacktrace\n    var err = new Error();\n    if (err.stack) {\n      var out = err.stack;\n\n      // try to strip useless frames\n      var fn_name = getName(stackStartFunction);\n      var idx = out.indexOf('\\n' + fn_name);\n      if (idx >= 0) {\n        // once we have located the function frame\n        // we need to strip out everything before it (and its line)\n        var next_line = out.indexOf('\\n', idx + 1);\n        out = out.substring(next_line + 1);\n      }\n\n      this.stack = out;\n    }\n  }\n};\n\n// assert.AssertionError instanceof Error\nutil.inherits(assert.AssertionError, Error);\n\nfunction truncate(s, n) {\n  if (typeof s === 'string') {\n    return s.length < n ? s : s.slice(0, n);\n  } else {\n    return s;\n  }\n}\nfunction inspect(something) {\n  if (functionsHaveNames || !util.isFunction(something)) {\n    return util.inspect(something);\n  }\n  var rawname = getName(something);\n  var name = rawname ? ': ' + rawname : '';\n  return '[Function' +  name + ']';\n}\nfunction getMessage(self) {\n  return truncate(inspect(self.actual), 128) + ' ' +\n         self.operator + ' ' +\n         truncate(inspect(self.expected), 128);\n}\n\n// At present only the three keys mentioned above are used and\n// understood by the spec. Implementations or sub modules can pass\n// other keys to the AssertionError's constructor - they will be\n// ignored.\n\n// 3. All of the following functions must throw an AssertionError\n// when a corresponding condition is not met, with a message that\n// may be undefined if not provided.  All assertion methods provide\n// both the actual and expected values to the assertion error for\n// display purposes.\n\nfunction fail(actual, expected, message, operator, stackStartFunction) {\n  throw new assert.AssertionError({\n    message: message,\n    actual: actual,\n    expected: expected,\n    operator: operator,\n    stackStartFunction: stackStartFunction\n  });\n}\n\n// EXTENSION! allows for well behaved errors defined elsewhere.\nassert.fail = fail;\n\n// 4. Pure assertion tests whether a value is truthy, as determined\n// by !!guard.\n// assert.ok(guard, message_opt);\n// This statement is equivalent to assert.equal(true, !!guard,\n// message_opt);. To test strictly for the value true, use\n// assert.strictEqual(true, guard, message_opt);.\n\nfunction ok(value, message) {\n  if (!value) fail(value, true, message, '==', assert.ok);\n}\nassert.ok = ok;\n\n// 5. The equality assertion tests shallow, coercive equality with\n// ==.\n// assert.equal(actual, expected, message_opt);\n\nassert.equal = function equal(actual, expected, message) {\n  if (actual != expected) fail(actual, expected, message, '==', assert.equal);\n};\n\n// 6. The non-equality assertion tests for whether two objects are not equal\n// with != assert.notEqual(actual, expected, message_opt);\n\nassert.notEqual = function notEqual(actual, expected, message) {\n  if (actual == expected) {\n    fail(actual, expected, message, '!=', assert.notEqual);\n  }\n};\n\n// 7. The equivalence assertion tests a deep equality relation.\n// assert.deepEqual(actual, expected, message_opt);\n\nassert.deepEqual = function deepEqual(actual, expected, message) {\n  if (!_deepEqual(actual, expected, false)) {\n    fail(actual, expected, message, 'deepEqual', assert.deepEqual);\n  }\n};\n\nassert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {\n  if (!_deepEqual(actual, expected, true)) {\n    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);\n  }\n};\n\nfunction _deepEqual(actual, expected, strict, memos) {\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (actual === expected) {\n    return true;\n  } else if (isBuffer(actual) && isBuffer(expected)) {\n    return compare(actual, expected) === 0;\n\n  // 7.2. If the expected value is a Date object, the actual value is\n  // equivalent if it is also a Date object that refers to the same time.\n  } else if (util.isDate(actual) && util.isDate(expected)) {\n    return actual.getTime() === expected.getTime();\n\n  // 7.3 If the expected value is a RegExp object, the actual value is\n  // equivalent if it is also a RegExp object with the same source and\n  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).\n  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {\n    return actual.source === expected.source &&\n           actual.global === expected.global &&\n           actual.multiline === expected.multiline &&\n           actual.lastIndex === expected.lastIndex &&\n           actual.ignoreCase === expected.ignoreCase;\n\n  // 7.4. Other pairs that do not both pass typeof value == 'object',\n  // equivalence is determined by ==.\n  } else if ((actual === null || typeof actual !== 'object') &&\n             (expected === null || typeof expected !== 'object')) {\n    return strict ? actual === expected : actual == expected;\n\n  // If both values are instances of typed arrays, wrap their underlying\n  // ArrayBuffers in a Buffer each to increase performance\n  // This optimization requires the arrays to have the same type as checked by\n  // Object.prototype.toString (aka pToString). Never perform binary\n  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their\n  // bit patterns are not identical.\n  } else if (isView(actual) && isView(expected) &&\n             pToString(actual) === pToString(expected) &&\n             !(actual instanceof Float32Array ||\n               actual instanceof Float64Array)) {\n    return compare(new Uint8Array(actual.buffer),\n                   new Uint8Array(expected.buffer)) === 0;\n\n  // 7.5 For all other Object pairs, including Array objects, equivalence is\n  // determined by having the same number of owned properties (as verified\n  // with Object.prototype.hasOwnProperty.call), the same set of keys\n  // (although not necessarily the same order), equivalent values for every\n  // corresponding key, and an identical 'prototype' property. Note: this\n  // accounts for both named and indexed properties on Arrays.\n  } else if (isBuffer(actual) !== isBuffer(expected)) {\n    return false;\n  } else {\n    memos = memos || {actual: [], expected: []};\n\n    var actualIndex = memos.actual.indexOf(actual);\n    if (actualIndex !== -1) {\n      if (actualIndex === memos.expected.indexOf(expected)) {\n        return true;\n      }\n    }\n\n    memos.actual.push(actual);\n    memos.expected.push(expected);\n\n    return objEquiv(actual, expected, strict, memos);\n  }\n}\n\nfunction isArguments(object) {\n  return Object.prototype.toString.call(object) == '[object Arguments]';\n}\n\nfunction objEquiv(a, b, strict, actualVisitedObjects) {\n  if (a === null || a === undefined || b === null || b === undefined)\n    return false;\n  // if one is a primitive, the other must be same\n  if (util.isPrimitive(a) || util.isPrimitive(b))\n    return a === b;\n  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))\n    return false;\n  var aIsArgs = isArguments(a);\n  var bIsArgs = isArguments(b);\n  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))\n    return false;\n  if (aIsArgs) {\n    a = pSlice.call(a);\n    b = pSlice.call(b);\n    return _deepEqual(a, b, strict);\n  }\n  var ka = objectKeys(a);\n  var kb = objectKeys(b);\n  var key, i;\n  // having the same number of owned properties (keys incorporates\n  // hasOwnProperty)\n  if (ka.length !== kb.length)\n    return false;\n  //the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  //~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] !== kb[i])\n      return false;\n  }\n  //equivalent values for every corresponding key, and\n  //~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))\n      return false;\n  }\n  return true;\n}\n\n// 8. The non-equivalence assertion tests for any deep inequality.\n// assert.notDeepEqual(actual, expected, message_opt);\n\nassert.notDeepEqual = function notDeepEqual(actual, expected, message) {\n  if (_deepEqual(actual, expected, false)) {\n    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);\n  }\n};\n\nassert.notDeepStrictEqual = notDeepStrictEqual;\nfunction notDeepStrictEqual(actual, expected, message) {\n  if (_deepEqual(actual, expected, true)) {\n    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);\n  }\n}\n\n\n// 9. The strict equality assertion tests strict equality, as determined by ===.\n// assert.strictEqual(actual, expected, message_opt);\n\nassert.strictEqual = function strictEqual(actual, expected, message) {\n  if (actual !== expected) {\n    fail(actual, expected, message, '===', assert.strictEqual);\n  }\n};\n\n// 10. The strict non-equality assertion tests for strict inequality, as\n// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);\n\nassert.notStrictEqual = function notStrictEqual(actual, expected, message) {\n  if (actual === expected) {\n    fail(actual, expected, message, '!==', assert.notStrictEqual);\n  }\n};\n\nfunction expectedException(actual, expected) {\n  if (!actual || !expected) {\n    return false;\n  }\n\n  if (Object.prototype.toString.call(expected) == '[object RegExp]') {\n    return expected.test(actual);\n  }\n\n  try {\n    if (actual instanceof expected) {\n      return true;\n    }\n  } catch (e) {\n    // Ignore.  The instanceof check doesn't work for arrow functions.\n  }\n\n  if (Error.isPrototypeOf(expected)) {\n    return false;\n  }\n\n  return expected.call({}, actual) === true;\n}\n\nfunction _tryBlock(block) {\n  var error;\n  try {\n    block();\n  } catch (e) {\n    error = e;\n  }\n  return error;\n}\n\nfunction _throws(shouldThrow, block, expected, message) {\n  var actual;\n\n  if (typeof block !== 'function') {\n    throw new TypeError('\"block\" argument must be a function');\n  }\n\n  if (typeof expected === 'string') {\n    message = expected;\n    expected = null;\n  }\n\n  actual = _tryBlock(block);\n\n  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +\n            (message ? ' ' + message : '.');\n\n  if (shouldThrow && !actual) {\n    fail(actual, expected, 'Missing expected exception' + message);\n  }\n\n  var userProvidedMessage = typeof message === 'string';\n  var isUnwantedException = !shouldThrow && util.isError(actual);\n  var isUnexpectedException = !shouldThrow && actual && !expected;\n\n  if ((isUnwantedException &&\n      userProvidedMessage &&\n      expectedException(actual, expected)) ||\n      isUnexpectedException) {\n    fail(actual, expected, 'Got unwanted exception' + message);\n  }\n\n  if ((shouldThrow && actual && expected &&\n      !expectedException(actual, expected)) || (!shouldThrow && actual)) {\n    throw actual;\n  }\n}\n\n// 11. Expected to throw an error:\n// assert.throws(block, Error_opt, message_opt);\n\nassert.throws = function(block, /*optional*/error, /*optional*/message) {\n  _throws(true, block, error, message);\n};\n\n// EXTENSION! This is annoying to write outside this module.\nassert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {\n  _throws(false, block, error, message);\n};\n\nassert.ifError = function(err) { if (err) throw err; };\n\nvar objectKeys = Object.keys || function (obj) {\n  var keys = [];\n  for (var key in obj) {\n    if (hasOwn.call(obj, key)) keys.push(key);\n  }\n  return keys;\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack-stream/node_modules/webpack/buildin/global.js */ \"./node_modules/webpack-stream/node_modules/webpack/buildin/global.js\")))\n\n/***/ }),\n\n/***/ \"./node_modules/dct/index.js\":\n/*!***********************************!*\\\n  !*** ./node_modules/dct/index.js ***!\n  \\***********************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(/*! ./src/dct.js */ \"./node_modules/dct/src/dct.js\");\n\n\n/***/ }),\n\n/***/ \"./node_modules/dct/src/dct.js\":\n/*!*************************************!*\\\n  !*** ./node_modules/dct/src/dct.js ***!\n  \\*************************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\n/*===========================================================================*\\\n * Discrete Cosine Transform\n *\n * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015\n *\n * This code is not designed to be highly optimized but as an educational\n * tool to understand the Mel-scale and its related coefficients used in\n * human speech analysis.\n\\*===========================================================================*/\nvar cosMap = null;\n\n// Builds a cosine map for the given input size. This allows multiple input sizes to be memoized automagically\n// if you want to run the DCT over and over.\nvar memoizeCosines = function(N) {\n  cosMap = cosMap || {};\n  cosMap[N] = new Array(N*N);\n\n  var PI_N = Math.PI / N;\n\n  for (var k = 0; k < N; k++) {\n    for (var n = 0; n < N; n++) {\n      cosMap[N][n + (k * N)] = Math.cos(PI_N * (n + 0.5) * k);\n    }\n  }\n};\n\nfunction dct(signal, scale) {\n  var L = signal.length;\n  scale = scale || 2;\n\n  if (!cosMap || !cosMap[L]) memoizeCosines(L);\n\n  var coefficients = signal.map(function () {return 0;});\n\n  return coefficients.map(function (__, ix) {\n    return scale * signal.reduce(function (prev, cur, ix_, arr) {\n      return prev + (cur * cosMap[L][ix_ + (ix * L)]);\n    }, 0);\n  });\n};\n\nmodule.exports = dct;\n\n\n/***/ }),\n\n/***/ \"./node_modules/fftjs/dist/fft.js\":\n/*!****************************************!*\\\n  !*** ./node_modules/fftjs/dist/fft.js ***!\n  \\****************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/fftjs/dist/utils.js\");\n\n// real to complex fft\nvar fft = function fft(signal) {\n\n  var complexSignal = {};\n\n  if (signal.real === undefined || signal.imag === undefined) {\n    complexSignal = utils.constructComplexArray(signal);\n  } else {\n    complexSignal.real = signal.real.slice();\n    complexSignal.imag = signal.imag.slice();\n  }\n\n  var N = complexSignal.real.length;\n  var logN = Math.log2(N);\n\n  if (Math.round(logN) != logN) throw new Error('Input size must be a power of 2.');\n\n  if (complexSignal.real.length != complexSignal.imag.length) {\n    throw new Error('Real and imaginary components must have the same length.');\n  }\n\n  var bitReversedIndices = utils.bitReverseArray(N);\n\n  // sort array\n  var ordered = {\n    'real': [],\n    'imag': []\n  };\n\n  for (var i = 0; i < N; i++) {\n    ordered.real[bitReversedIndices[i]] = complexSignal.real[i];\n    ordered.imag[bitReversedIndices[i]] = complexSignal.imag[i];\n  }\n\n  for (var _i = 0; _i < N; _i++) {\n    complexSignal.real[_i] = ordered.real[_i];\n    complexSignal.imag[_i] = ordered.imag[_i];\n  }\n  // iterate over the number of stages\n  for (var n = 1; n <= logN; n++) {\n    var currN = Math.pow(2, n);\n\n    // find twiddle factors\n    for (var k = 0; k < currN / 2; k++) {\n      var twiddle = utils.euler(k, currN);\n\n      // on each block of FT, implement the butterfly diagram\n      for (var m = 0; m < N / currN; m++) {\n        var currEvenIndex = currN * m + k;\n        var currOddIndex = currN * m + k + currN / 2;\n\n        var currEvenIndexSample = {\n          'real': complexSignal.real[currEvenIndex],\n          'imag': complexSignal.imag[currEvenIndex]\n        };\n        var currOddIndexSample = {\n          'real': complexSignal.real[currOddIndex],\n          'imag': complexSignal.imag[currOddIndex]\n        };\n\n        var odd = utils.multiply(twiddle, currOddIndexSample);\n\n        var subtractionResult = utils.subtract(currEvenIndexSample, odd);\n        complexSignal.real[currOddIndex] = subtractionResult.real;\n        complexSignal.imag[currOddIndex] = subtractionResult.imag;\n\n        var additionResult = utils.add(odd, currEvenIndexSample);\n        complexSignal.real[currEvenIndex] = additionResult.real;\n        complexSignal.imag[currEvenIndex] = additionResult.imag;\n      }\n    }\n  }\n\n  return complexSignal;\n};\n\n// complex to real ifft\nvar ifft = function ifft(signal) {\n\n  if (signal.real === undefined || signal.imag === undefined) {\n    throw new Error(\"IFFT only accepts a complex input.\");\n  }\n\n  var N = signal.real.length;\n\n  var complexSignal = {\n    'real': [],\n    'imag': []\n  };\n\n  //take complex conjugate in order to be able to use the regular FFT for IFFT\n  for (var i = 0; i < N; i++) {\n    var currentSample = {\n      'real': signal.real[i],\n      'imag': signal.imag[i]\n    };\n\n    var conjugateSample = utils.conj(currentSample);\n    complexSignal.real[i] = conjugateSample.real;\n    complexSignal.imag[i] = conjugateSample.imag;\n  }\n\n  //compute\n  var X = fft(complexSignal);\n\n  //normalize\n  complexSignal.real = X.real.map(function (val) {\n    return val / N;\n  });\n\n  complexSignal.imag = X.imag.map(function (val) {\n    return val / N;\n  });\n\n  return complexSignal;\n};\n\nmodule.exports = {\n  fft: fft,\n  ifft: ifft\n};\n\n/***/ }),\n\n/***/ \"./node_modules/fftjs/dist/utils.js\":\n/*!******************************************!*\\\n  !*** ./node_modules/fftjs/dist/utils.js ***!\n  \\******************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\n\n\n// memoization of the reversal of different lengths.\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar memoizedReversal = {};\nvar memoizedZeroBuffers = {};\n\nvar constructComplexArray = function constructComplexArray(signal) {\n  var complexSignal = {};\n\n  complexSignal.real = signal.real === undefined ? signal.slice() : signal.real.slice();\n\n  var bufferSize = complexSignal.real.length;\n\n  if (memoizedZeroBuffers[bufferSize] === undefined) {\n    memoizedZeroBuffers[bufferSize] = Array.apply(null, Array(bufferSize)).map(Number.prototype.valueOf, 0);\n  }\n\n  complexSignal.imag = memoizedZeroBuffers[bufferSize].slice();\n\n  return complexSignal;\n};\n\nvar bitReverseArray = function bitReverseArray(N) {\n  if (memoizedReversal[N] === undefined) {\n    var maxBinaryLength = (N - 1).toString(2).length; //get the binary length of the largest index.\n    var templateBinary = '0'.repeat(maxBinaryLength); //create a template binary of that length.\n    var reversed = {};\n    for (var n = 0; n < N; n++) {\n      var currBinary = n.toString(2); //get binary value of current index.\n\n      //prepend zeros from template to current binary. This makes binary values of all indices have the same length.\n      currBinary = templateBinary.substr(currBinary.length) + currBinary;\n\n      currBinary = [].concat(_toConsumableArray(currBinary)).reverse().join(''); //reverse\n      reversed[n] = parseInt(currBinary, 2); //convert to decimal\n    }\n    memoizedReversal[N] = reversed; //save\n  }\n  return memoizedReversal[N];\n};\n\n// complex multiplication\nvar multiply = function multiply(a, b) {\n  return {\n    'real': a.real * b.real - a.imag * b.imag,\n    'imag': a.real * b.imag + a.imag * b.real\n  };\n};\n\n// complex addition\nvar add = function add(a, b) {\n  return {\n    'real': a.real + b.real,\n    'imag': a.imag + b.imag\n  };\n};\n\n// complex subtraction\nvar subtract = function subtract(a, b) {\n  return {\n    'real': a.real - b.real,\n    'imag': a.imag - b.imag\n  };\n};\n\n// euler's identity e^x = cos(x) + sin(x)\nvar euler = function euler(kn, N) {\n  var x = -2 * Math.PI * kn / N;\n  return { 'real': Math.cos(x), 'imag': Math.sin(x) };\n};\n\n// complex conjugate\nvar conj = function conj(a) {\n  a.imag *= -1;\n  return a;\n};\n\nmodule.exports = {\n  bitReverseArray: bitReverseArray,\n  multiply: multiply,\n  add: add,\n  subtract: subtract,\n  euler: euler,\n  conj: conj,\n  constructComplexArray: constructComplexArray\n};\n\n/***/ }),\n\n/***/ \"./node_modules/inherits/inherits_browser.js\":\n/*!***************************************************!*\\\n  !*** ./node_modules/inherits/inherits_browser.js ***!\n  \\***************************************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nif (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    ctor.super_ = superCtor\n    var TempCtor = function () {}\n    TempCtor.prototype = superCtor.prototype\n    ctor.prototype = new TempCtor()\n    ctor.prototype.constructor = ctor\n  }\n}\n\n\n/***/ }),\n\n/***/ \"./node_modules/process/browser.js\":\n/*!*****************************************!*\\\n  !*** ./node_modules/process/browser.js ***!\n  \\*****************************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n/***/ }),\n\n/***/ \"./node_modules/webpack-stream/node_modules/util/support/isBufferBrowser.js\":\n/*!**********************************************************************************!*\\\n  !*** ./node_modules/webpack-stream/node_modules/util/support/isBufferBrowser.js ***!\n  \\**********************************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nmodule.exports = function isBuffer(arg) {\n  return arg && typeof arg === 'object'\n    && typeof arg.copy === 'function'\n    && typeof arg.fill === 'function'\n    && typeof arg.readUInt8 === 'function';\n}\n\n/***/ }),\n\n/***/ \"./node_modules/webpack-stream/node_modules/util/util.js\":\n/*!***************************************************************!*\\\n  !*** ./node_modules/webpack-stream/node_modules/util/util.js ***!\n  \\***************************************************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nvar getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||\n  function getOwnPropertyDescriptors(obj) {\n    var keys = Object.keys(obj);\n    var descriptors = {};\n    for (var i = 0; i < keys.length; i++) {\n      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);\n    }\n    return descriptors;\n  };\n\nvar formatRegExp = /%[sdj%]/g;\nexports.format = function(f) {\n  if (!isString(f)) {\n    var objects = [];\n    for (var i = 0; i < arguments.length; i++) {\n      objects.push(inspect(arguments[i]));\n    }\n    return objects.join(' ');\n  }\n\n  var i = 1;\n  var args = arguments;\n  var len = args.length;\n  var str = String(f).replace(formatRegExp, function(x) {\n    if (x === '%%') return '%';\n    if (i >= len) return x;\n    switch (x) {\n      case '%s': return String(args[i++]);\n      case '%d': return Number(args[i++]);\n      case '%j':\n        try {\n          return JSON.stringify(args[i++]);\n        } catch (_) {\n          return '[Circular]';\n        }\n      default:\n        return x;\n    }\n  });\n  for (var x = args[i]; i < len; x = args[++i]) {\n    if (isNull(x) || !isObject(x)) {\n      str += ' ' + x;\n    } else {\n      str += ' ' + inspect(x);\n    }\n  }\n  return str;\n};\n\n\n// Mark that a method should not be used.\n// Returns a modified function which warns once by default.\n// If --no-deprecation is set, then it is a no-op.\nexports.deprecate = function(fn, msg) {\n  if (typeof process !== 'undefined' && process.noDeprecation === true) {\n    return fn;\n  }\n\n  // Allow for deprecating things in the process of starting up.\n  if (typeof process === 'undefined') {\n    return function() {\n      return exports.deprecate(fn, msg).apply(this, arguments);\n    };\n  }\n\n  var warned = false;\n  function deprecated() {\n    if (!warned) {\n      if (process.throwDeprecation) {\n        throw new Error(msg);\n      } else if (process.traceDeprecation) {\n        console.trace(msg);\n      } else {\n        console.error(msg);\n      }\n      warned = true;\n    }\n    return fn.apply(this, arguments);\n  }\n\n  return deprecated;\n};\n\n\nvar debugs = {};\nvar debugEnviron;\nexports.debuglog = function(set) {\n  if (isUndefined(debugEnviron))\n    debugEnviron = process.env.NODE_DEBUG || '';\n  set = set.toUpperCase();\n  if (!debugs[set]) {\n    if (new RegExp('\\\\b' + set + '\\\\b', 'i').test(debugEnviron)) {\n      var pid = process.pid;\n      debugs[set] = function() {\n        var msg = exports.format.apply(exports, arguments);\n        console.error('%s %d: %s', set, pid, msg);\n      };\n    } else {\n      debugs[set] = function() {};\n    }\n  }\n  return debugs[set];\n};\n\n\n/**\n * Echos the value of a value. Trys to print the value out\n * in the best way possible given the different types.\n *\n * @param {Object} obj The object to print out.\n * @param {Object} opts Optional options object that alters the output.\n */\n/* legacy: obj, showHidden, depth, colors*/\nfunction inspect(obj, opts) {\n  // default options\n  var ctx = {\n    seen: [],\n    stylize: stylizeNoColor\n  };\n  // legacy...\n  if (arguments.length >= 3) ctx.depth = arguments[2];\n  if (arguments.length >= 4) ctx.colors = arguments[3];\n  if (isBoolean(opts)) {\n    // legacy...\n    ctx.showHidden = opts;\n  } else if (opts) {\n    // got an \"options\" object\n    exports._extend(ctx, opts);\n  }\n  // set default options\n  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;\n  if (isUndefined(ctx.depth)) ctx.depth = 2;\n  if (isUndefined(ctx.colors)) ctx.colors = false;\n  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;\n  if (ctx.colors) ctx.stylize = stylizeWithColor;\n  return formatValue(ctx, obj, ctx.depth);\n}\nexports.inspect = inspect;\n\n\n// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics\ninspect.colors = {\n  'bold' : [1, 22],\n  'italic' : [3, 23],\n  'underline' : [4, 24],\n  'inverse' : [7, 27],\n  'white' : [37, 39],\n  'grey' : [90, 39],\n  'black' : [30, 39],\n  'blue' : [34, 39],\n  'cyan' : [36, 39],\n  'green' : [32, 39],\n  'magenta' : [35, 39],\n  'red' : [31, 39],\n  'yellow' : [33, 39]\n};\n\n// Don't use 'blue' not visible on cmd.exe\ninspect.styles = {\n  'special': 'cyan',\n  'number': 'yellow',\n  'boolean': 'yellow',\n  'undefined': 'grey',\n  'null': 'bold',\n  'string': 'green',\n  'date': 'magenta',\n  // \"name\": intentionally not styling\n  'regexp': 'red'\n};\n\n\nfunction stylizeWithColor(str, styleType) {\n  var style = inspect.styles[styleType];\n\n  if (style) {\n    return '\\u001b[' + inspect.colors[style][0] + 'm' + str +\n           '\\u001b[' + inspect.colors[style][1] + 'm';\n  } else {\n    return str;\n  }\n}\n\n\nfunction stylizeNoColor(str, styleType) {\n  return str;\n}\n\n\nfunction arrayToHash(array) {\n  var hash = {};\n\n  array.forEach(function(val, idx) {\n    hash[val] = true;\n  });\n\n  return hash;\n}\n\n\nfunction formatValue(ctx, value, recurseTimes) {\n  // Provide a hook for user-specified inspect functions.\n  // Check that value is an object with an inspect function on it\n  if (ctx.customInspect &&\n      value &&\n      isFunction(value.inspect) &&\n      // Filter out the util module, it's inspect function is special\n      value.inspect !== exports.inspect &&\n      // Also filter out any prototype objects using the circular check.\n      !(value.constructor && value.constructor.prototype === value)) {\n    var ret = value.inspect(recurseTimes, ctx);\n    if (!isString(ret)) {\n      ret = formatValue(ctx, ret, recurseTimes);\n    }\n    return ret;\n  }\n\n  // Primitive types cannot have properties\n  var primitive = formatPrimitive(ctx, value);\n  if (primitive) {\n    return primitive;\n  }\n\n  // Look up the keys of the object.\n  var keys = Object.keys(value);\n  var visibleKeys = arrayToHash(keys);\n\n  if (ctx.showHidden) {\n    keys = Object.getOwnPropertyNames(value);\n  }\n\n  // IE doesn't make error fields non-enumerable\n  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx\n  if (isError(value)\n      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {\n    return formatError(value);\n  }\n\n  // Some type of object without properties can be shortcutted.\n  if (keys.length === 0) {\n    if (isFunction(value)) {\n      var name = value.name ? ': ' + value.name : '';\n      return ctx.stylize('[Function' + name + ']', 'special');\n    }\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    }\n    if (isDate(value)) {\n      return ctx.stylize(Date.prototype.toString.call(value), 'date');\n    }\n    if (isError(value)) {\n      return formatError(value);\n    }\n  }\n\n  var base = '', array = false, braces = ['{', '}'];\n\n  // Make Array say that they are Array\n  if (isArray(value)) {\n    array = true;\n    braces = ['[', ']'];\n  }\n\n  // Make functions say that they are functions\n  if (isFunction(value)) {\n    var n = value.name ? ': ' + value.name : '';\n    base = ' [Function' + n + ']';\n  }\n\n  // Make RegExps say that they are RegExps\n  if (isRegExp(value)) {\n    base = ' ' + RegExp.prototype.toString.call(value);\n  }\n\n  // Make dates with properties first say the date\n  if (isDate(value)) {\n    base = ' ' + Date.prototype.toUTCString.call(value);\n  }\n\n  // Make error with message first say the error\n  if (isError(value)) {\n    base = ' ' + formatError(value);\n  }\n\n  if (keys.length === 0 && (!array || value.length == 0)) {\n    return braces[0] + base + braces[1];\n  }\n\n  if (recurseTimes < 0) {\n    if (isRegExp(value)) {\n      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');\n    } else {\n      return ctx.stylize('[Object]', 'special');\n    }\n  }\n\n  ctx.seen.push(value);\n\n  var output;\n  if (array) {\n    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);\n  } else {\n    output = keys.map(function(key) {\n      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);\n    });\n  }\n\n  ctx.seen.pop();\n\n  return reduceToSingleString(output, base, braces);\n}\n\n\nfunction formatPrimitive(ctx, value) {\n  if (isUndefined(value))\n    return ctx.stylize('undefined', 'undefined');\n  if (isString(value)) {\n    var simple = '\\'' + JSON.stringify(value).replace(/^\"|\"$/g, '')\n                                             .replace(/'/g, \"\\\\'\")\n                                             .replace(/\\\\\"/g, '\"') + '\\'';\n    return ctx.stylize(simple, 'string');\n  }\n  if (isNumber(value))\n    return ctx.stylize('' + value, 'number');\n  if (isBoolean(value))\n    return ctx.stylize('' + value, 'boolean');\n  // For some reason typeof null is \"object\", so special case here.\n  if (isNull(value))\n    return ctx.stylize('null', 'null');\n}\n\n\nfunction formatError(value) {\n  return '[' + Error.prototype.toString.call(value) + ']';\n}\n\n\nfunction formatArray(ctx, value, recurseTimes, visibleKeys, keys) {\n  var output = [];\n  for (var i = 0, l = value.length; i < l; ++i) {\n    if (hasOwnProperty(value, String(i))) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          String(i), true));\n    } else {\n      output.push('');\n    }\n  }\n  keys.forEach(function(key) {\n    if (!key.match(/^\\d+$/)) {\n      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,\n          key, true));\n    }\n  });\n  return output;\n}\n\n\nfunction formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {\n  var name, str, desc;\n  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };\n  if (desc.get) {\n    if (desc.set) {\n      str = ctx.stylize('[Getter/Setter]', 'special');\n    } else {\n      str = ctx.stylize('[Getter]', 'special');\n    }\n  } else {\n    if (desc.set) {\n      str = ctx.stylize('[Setter]', 'special');\n    }\n  }\n  if (!hasOwnProperty(visibleKeys, key)) {\n    name = '[' + key + ']';\n  }\n  if (!str) {\n    if (ctx.seen.indexOf(desc.value) < 0) {\n      if (isNull(recurseTimes)) {\n        str = formatValue(ctx, desc.value, null);\n      } else {\n        str = formatValue(ctx, desc.value, recurseTimes - 1);\n      }\n      if (str.indexOf('\\n') > -1) {\n        if (array) {\n          str = str.split('\\n').map(function(line) {\n            return '  ' + line;\n          }).join('\\n').substr(2);\n        } else {\n          str = '\\n' + str.split('\\n').map(function(line) {\n            return '   ' + line;\n          }).join('\\n');\n        }\n      }\n    } else {\n      str = ctx.stylize('[Circular]', 'special');\n    }\n  }\n  if (isUndefined(name)) {\n    if (array && key.match(/^\\d+$/)) {\n      return str;\n    }\n    name = JSON.stringify('' + key);\n    if (name.match(/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)) {\n      name = name.substr(1, name.length - 2);\n      name = ctx.stylize(name, 'name');\n    } else {\n      name = name.replace(/'/g, \"\\\\'\")\n                 .replace(/\\\\\"/g, '\"')\n                 .replace(/(^\"|\"$)/g, \"'\");\n      name = ctx.stylize(name, 'string');\n    }\n  }\n\n  return name + ': ' + str;\n}\n\n\nfunction reduceToSingleString(output, base, braces) {\n  var numLinesEst = 0;\n  var length = output.reduce(function(prev, cur) {\n    numLinesEst++;\n    if (cur.indexOf('\\n') >= 0) numLinesEst++;\n    return prev + cur.replace(/\\u001b\\[\\d\\d?m/g, '').length + 1;\n  }, 0);\n\n  if (length > 60) {\n    return braces[0] +\n           (base === '' ? '' : base + '\\n ') +\n           ' ' +\n           output.join(',\\n  ') +\n           ' ' +\n           braces[1];\n  }\n\n  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];\n}\n\n\n// NOTE: These type checking functions intentionally don't use `instanceof`\n// because it is fragile and can be easily faked with `Object.create()`.\nfunction isArray(ar) {\n  return Array.isArray(ar);\n}\nexports.isArray = isArray;\n\nfunction isBoolean(arg) {\n  return typeof arg === 'boolean';\n}\nexports.isBoolean = isBoolean;\n\nfunction isNull(arg) {\n  return arg === null;\n}\nexports.isNull = isNull;\n\nfunction isNullOrUndefined(arg) {\n  return arg == null;\n}\nexports.isNullOrUndefined = isNullOrUndefined;\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\nexports.isNumber = isNumber;\n\nfunction isString(arg) {\n  return typeof arg === 'string';\n}\nexports.isString = isString;\n\nfunction isSymbol(arg) {\n  return typeof arg === 'symbol';\n}\nexports.isSymbol = isSymbol;\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\nexports.isUndefined = isUndefined;\n\nfunction isRegExp(re) {\n  return isObject(re) && objectToString(re) === '[object RegExp]';\n}\nexports.isRegExp = isRegExp;\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\nexports.isObject = isObject;\n\nfunction isDate(d) {\n  return isObject(d) && objectToString(d) === '[object Date]';\n}\nexports.isDate = isDate;\n\nfunction isError(e) {\n  return isObject(e) &&\n      (objectToString(e) === '[object Error]' || e instanceof Error);\n}\nexports.isError = isError;\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\nexports.isFunction = isFunction;\n\nfunction isPrimitive(arg) {\n  return arg === null ||\n         typeof arg === 'boolean' ||\n         typeof arg === 'number' ||\n         typeof arg === 'string' ||\n         typeof arg === 'symbol' ||  // ES6 symbol\n         typeof arg === 'undefined';\n}\nexports.isPrimitive = isPrimitive;\n\nexports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ \"./node_modules/webpack-stream/node_modules/util/support/isBufferBrowser.js\");\n\nfunction objectToString(o) {\n  return Object.prototype.toString.call(o);\n}\n\n\nfunction pad(n) {\n  return n < 10 ? '0' + n.toString(10) : n.toString(10);\n}\n\n\nvar months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',\n              'Oct', 'Nov', 'Dec'];\n\n// 26 Feb 16:19:34\nfunction timestamp() {\n  var d = new Date();\n  var time = [pad(d.getHours()),\n              pad(d.getMinutes()),\n              pad(d.getSeconds())].join(':');\n  return [d.getDate(), months[d.getMonth()], time].join(' ');\n}\n\n\n// log is just a thin wrapper to console.log that prepends a timestamp\nexports.log = function() {\n  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));\n};\n\n\n/**\n * Inherit the prototype methods from one constructor into another.\n *\n * The Function.prototype.inherits from lang.js rewritten as a standalone\n * function (not on Function.prototype). NOTE: If this file is to be loaded\n * during bootstrapping this function needs to be rewritten using some native\n * functions as prototype setup using normal JavaScript does not work as\n * expected during bootstrapping (see mirror.js in r114903).\n *\n * @param {function} ctor Constructor function which needs to inherit the\n *     prototype.\n * @param {function} superCtor Constructor function to inherit prototype from.\n */\nexports.inherits = __webpack_require__(/*! inherits */ \"./node_modules/inherits/inherits_browser.js\");\n\nexports._extend = function(origin, add) {\n  // Don't do anything if add isn't an object\n  if (!add || !isObject(add)) return origin;\n\n  var keys = Object.keys(add);\n  var i = keys.length;\n  while (i--) {\n    origin[keys[i]] = add[keys[i]];\n  }\n  return origin;\n};\n\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nvar kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;\n\nexports.promisify = function promisify(original) {\n  if (typeof original !== 'function')\n    throw new TypeError('The \"original\" argument must be of type Function');\n\n  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {\n    var fn = original[kCustomPromisifiedSymbol];\n    if (typeof fn !== 'function') {\n      throw new TypeError('The \"util.promisify.custom\" argument must be of type Function');\n    }\n    Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n      value: fn, enumerable: false, writable: false, configurable: true\n    });\n    return fn;\n  }\n\n  function fn() {\n    var promiseResolve, promiseReject;\n    var promise = new Promise(function (resolve, reject) {\n      promiseResolve = resolve;\n      promiseReject = reject;\n    });\n\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n    args.push(function (err, value) {\n      if (err) {\n        promiseReject(err);\n      } else {\n        promiseResolve(value);\n      }\n    });\n\n    try {\n      original.apply(this, args);\n    } catch (err) {\n      promiseReject(err);\n    }\n\n    return promise;\n  }\n\n  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));\n\n  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {\n    value: fn, enumerable: false, writable: false, configurable: true\n  });\n  return Object.defineProperties(\n    fn,\n    getOwnPropertyDescriptors(original)\n  );\n}\n\nexports.promisify.custom = kCustomPromisifiedSymbol\n\nfunction callbackifyOnRejected(reason, cb) {\n  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).\n  // Because `null` is a special error value in callbacks which means \"no error\n  // occurred\", we error-wrap so the callback consumer can distinguish between\n  // \"the promise rejected with null\" or \"the promise fulfilled with undefined\".\n  if (!reason) {\n    var newReason = new Error('Promise was rejected with a falsy value');\n    newReason.reason = reason;\n    reason = newReason;\n  }\n  return cb(reason);\n}\n\nfunction callbackify(original) {\n  if (typeof original !== 'function') {\n    throw new TypeError('The \"original\" argument must be of type Function');\n  }\n\n  // We DO NOT return the promise as it gives the user a false sense that\n  // the promise is actually somehow related to the callback's execution\n  // and that the callback throwing will reject the promise.\n  function callbackified() {\n    var args = [];\n    for (var i = 0; i < arguments.length; i++) {\n      args.push(arguments[i]);\n    }\n\n    var maybeCb = args.pop();\n    if (typeof maybeCb !== 'function') {\n      throw new TypeError('The last argument must be of type Function');\n    }\n    var self = this;\n    var cb = function() {\n      return maybeCb.apply(self, arguments);\n    };\n    // In true node style we process the callback on `nextTick` with all the\n    // implications (stack, `uncaughtException`, `async_hooks`)\n    original.apply(this, args)\n      .then(function(ret) { process.nextTick(cb, null, ret) },\n            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });\n  }\n\n  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));\n  Object.defineProperties(callbackified,\n                          getOwnPropertyDescriptors(original));\n  return callbackified;\n}\nexports.callbackify = callbackify;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n/***/ }),\n\n/***/ \"./node_modules/webpack-stream/node_modules/webpack/buildin/global.js\":\n/*!***********************************!*\\\n  !*** (webpack)/buildin/global.js ***!\n  \\***********************************/\n/*! no static exports found */\n/***/ (function(module, exports) {\n\nvar g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n/***/ }),\n\n/***/ \"./src/extractors/chroma.js\":\n/*!**********************************!*\\\n  !*** ./src/extractors/chroma.js ***!\n  \\**********************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object') {\n    throw new TypeError('Valid ampSpectrum is required to generate chroma');\n  }\n\n  if (_typeof(args.chromaFilterBank) !== 'object') {\n    throw new TypeError('Valid chromaFilterBank is required to generate chroma');\n  }\n\n  var chromagram = args.chromaFilterBank.map(function (row, i) {\n    return args.ampSpectrum.reduce(function (acc, v, j) {\n      return acc + v * row[j];\n    }, 0);\n  });\n  var maxVal = Math.max.apply(Math, _toConsumableArray(chromagram));\n  return maxVal ? chromagram.map(function (v) {\n    return v / maxVal;\n  }) : chromagram;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/energy.js\":\n/*!**********************************!*\\\n  !*** ./src/extractors/energy.js ***!\n  \\**********************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"./node_modules/assert/assert.js\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].signal) !== 'object') {\n    throw new TypeError();\n  }\n\n  var energy = 0;\n\n  for (var i = 0; i < arguments[0].signal.length; i++) {\n    energy += Math.pow(Math.abs(arguments[0].signal[i]), 2);\n  }\n\n  return energy;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/extractorUtilities.js\":\n/*!**********************************************!*\\\n  !*** ./src/extractors/extractorUtilities.js ***!\n  \\**********************************************/\n/*! exports provided: mu */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mu\", function() { return mu; });\nfunction mu(i, amplitudeSpect) {\n  var numerator = 0;\n  var denominator = 0;\n\n  for (var k = 0; k < amplitudeSpect.length; k++) {\n    numerator += Math.pow(k, i) * Math.abs(amplitudeSpect[k]);\n    denominator += amplitudeSpect[k];\n  }\n\n  return numerator / denominator;\n}\n\n/***/ }),\n\n/***/ \"./src/extractors/loudness.js\":\n/*!************************************!*\\\n  !*** ./src/extractors/loudness.js ***!\n  \\************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object' || _typeof(args.barkScale) !== 'object') {\n    throw new TypeError();\n  }\n\n  var NUM_BARK_BANDS = 24;\n  var specific = new Float32Array(NUM_BARK_BANDS);\n  var total = 0;\n  var normalisedSpectrum = args.ampSpectrum;\n  var bbLimits = new Int32Array(NUM_BARK_BANDS + 1);\n  bbLimits[0] = 0;\n  var currentBandEnd = args.barkScale[normalisedSpectrum.length - 1] / NUM_BARK_BANDS;\n  var currentBand = 1;\n\n  for (var i = 0; i < normalisedSpectrum.length; i++) {\n    while (args.barkScale[i] > currentBandEnd) {\n      bbLimits[currentBand++] = i;\n      currentBandEnd = currentBand * args.barkScale[normalisedSpectrum.length - 1] / NUM_BARK_BANDS;\n    }\n  }\n\n  bbLimits[NUM_BARK_BANDS] = normalisedSpectrum.length - 1; //process\n\n  for (var _i = 0; _i < NUM_BARK_BANDS; _i++) {\n    var sum = 0;\n\n    for (var j = bbLimits[_i]; j < bbLimits[_i + 1]; j++) {\n      sum += normalisedSpectrum[j];\n    }\n\n    specific[_i] = Math.pow(sum, 0.23);\n  } //get total loudness\n\n\n  for (var _i2 = 0; _i2 < specific.length; _i2++) {\n    total += specific[_i2];\n  }\n\n  return {\n    specific: specific,\n    total: total\n  };\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/mfcc.js\":\n/*!********************************!*\\\n  !*** ./src/extractors/mfcc.js ***!\n  \\********************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _powerSpectrum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./powerSpectrum */ \"./src/extractors/powerSpectrum.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utilities */ \"./src/utilities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar dct = __webpack_require__(/*! dct */ \"./node_modules/dct/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object') {\n    throw new TypeError('Valid ampSpectrum is required to generate MFCC');\n  }\n\n  if (_typeof(args.melFilterBank) !== 'object') {\n    throw new TypeError('Valid melFilterBank is required to generate MFCC');\n  }\n\n  var numberOfMFCCCoefficients = Math.min(40, Math.max(1, args.numberOfMFCCCoefficients || 13)); // Tutorial from:\n  // http://practicalcryptography.com/miscellaneous/machine-learning\n  // /guide-mel-frequency-cepstral-coefficients-mfccs/\n\n  var powSpec = Object(_powerSpectrum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(args);\n  var numFilters = args.melFilterBank.length;\n  var filtered = Array(numFilters);\n\n  if (numFilters < numberOfMFCCCoefficients) {\n    throw new Error(\"Insufficient filter bank for requested number of coefficients\");\n  }\n\n  var loggedMelBands = new Float32Array(numFilters);\n\n  for (var i = 0; i < loggedMelBands.length; i++) {\n    filtered[i] = new Float32Array(args.bufferSize / 2);\n    loggedMelBands[i] = 0;\n\n    for (var j = 0; j < args.bufferSize / 2; j++) {\n      //point-wise multiplication between power spectrum and filterbanks.\n      filtered[i][j] = args.melFilterBank[i][j] * powSpec[j]; //summing up all of the coefficients into one array\n\n      loggedMelBands[i] += filtered[i][j];\n    } //log each coefficient.\n\n\n    loggedMelBands[i] = Math.log(loggedMelBands[i] + 1);\n  } //dct\n\n\n  var loggedMelBandsArray = Array.prototype.slice.call(loggedMelBands);\n  var mfccs = dct(loggedMelBandsArray).slice(0, numberOfMFCCCoefficients);\n  return mfccs;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/perceptualSharpness.js\":\n/*!***********************************************!*\\\n  !*** ./src/extractors/perceptualSharpness.js ***!\n  \\***********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loudness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loudness */ \"./src/extractors/loudness.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].signal) !== 'object') {\n    throw new TypeError();\n  }\n\n  var loudnessValue = Object(_loudness__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments[0]);\n  var spec = loudnessValue.specific;\n  var output = 0;\n\n  for (var i = 0; i < spec.length; i++) {\n    if (i < 15) {\n      output += (i + 1) * spec[i + 1];\n    } else {\n      output += 0.066 * Math.exp(0.171 * (i + 1));\n    }\n  }\n\n  output *= 0.11 / loudnessValue.total;\n  return output;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/perceptualSpread.js\":\n/*!********************************************!*\\\n  !*** ./src/extractors/perceptualSpread.js ***!\n  \\********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loudness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loudness */ \"./src/extractors/loudness.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].signal) !== 'object') {\n    throw new TypeError();\n  }\n\n  var loudnessValue = Object(_loudness__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments[0]);\n  var max = 0;\n\n  for (var i = 0; i < loudnessValue.specific.length; i++) {\n    if (loudnessValue.specific[i] > max) {\n      max = loudnessValue.specific[i];\n    }\n  }\n\n  var spread = Math.pow((loudnessValue.total - max) / loudnessValue.total, 2);\n  return spread;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/powerSpectrum.js\":\n/*!*****************************************!*\\\n  !*** ./src/extractors/powerSpectrum.js ***!\n  \\*****************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  var powerSpectrum = new Float32Array(arguments[0].ampSpectrum.length);\n\n  for (var i = 0; i < powerSpectrum.length; i++) {\n    powerSpectrum[i] = Math.pow(arguments[0].ampSpectrum[i], 2);\n  }\n\n  return powerSpectrum;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/rms.js\":\n/*!*******************************!*\\\n  !*** ./src/extractors/rms.js ***!\n  \\*******************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.signal) !== 'object') {\n    throw new TypeError();\n  }\n\n  var rms = 0;\n\n  for (var i = 0; i < args.signal.length; i++) {\n    rms += Math.pow(args.signal[i], 2);\n  }\n\n  rms = rms / args.signal.length;\n  rms = Math.sqrt(rms);\n  return rms;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralCentroid.js\":\n/*!********************************************!*\\\n  !*** ./src/extractors/spectralCentroid.js ***!\n  \\********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _extractorUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractorUtilities */ \"./src/extractors/extractorUtilities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  return Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(1, arguments[0].ampSpectrum);\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralFlatness.js\":\n/*!********************************************!*\\\n  !*** ./src/extractors/spectralFlatness.js ***!\n  \\********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  var numerator = 0;\n  var denominator = 0;\n\n  for (var i = 0; i < arguments[0].ampSpectrum.length; i++) {\n    numerator += Math.log(arguments[0].ampSpectrum[i]);\n    denominator += arguments[0].ampSpectrum[i];\n  }\n\n  return Math.exp(numerator / arguments[0].ampSpectrum.length) * arguments[0].ampSpectrum.length / denominator;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralFlux.js\":\n/*!****************************************!*\\\n  !*** ./src/extractors/spectralFlux.js ***!\n  \\****************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.signal) !== 'object' || _typeof(args.previousSignal) != 'object') {\n    throw new TypeError();\n  }\n\n  var sf = 0;\n\n  for (var i = -(args.bufferSize / 2); i < signal.length / 2 - 1; i++) {\n    x = Math.abs(args.signal[i]) - Math.abs(args.previousSignal[i]);\n    sf += (x + Math.abs(x)) / 2;\n  }\n\n  return sf;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralKurtosis.js\":\n/*!********************************************!*\\\n  !*** ./src/extractors/spectralKurtosis.js ***!\n  \\********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _extractorUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractorUtilities */ \"./src/extractors/extractorUtilities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  var ampspec = arguments[0].ampSpectrum;\n  var mu1 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(1, ampspec);\n  var mu2 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(2, ampspec);\n  var mu3 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(3, ampspec);\n  var mu4 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(4, ampspec);\n  var numerator = -3 * Math.pow(mu1, 4) + 6 * mu1 * mu2 - 4 * mu1 * mu3 + mu4;\n  var denominator = Math.pow(Math.sqrt(mu2 - Math.pow(mu1, 2)), 4);\n  return numerator / denominator;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralRolloff.js\":\n/*!*******************************************!*\\\n  !*** ./src/extractors/spectralRolloff.js ***!\n  \\*******************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  var ampspec = arguments[0].ampSpectrum; //calculate nyquist bin\n\n  var nyqBin = arguments[0].sampleRate / (2 * (ampspec.length - 1));\n  var ec = 0;\n\n  for (var i = 0; i < ampspec.length; i++) {\n    ec += ampspec[i];\n  }\n\n  var threshold = 0.99 * ec;\n  var n = ampspec.length - 1;\n\n  while (ec > threshold && n >= 0) {\n    ec -= ampspec[n];\n    --n;\n  }\n\n  return (n + 1) * nyqBin;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralSkewness.js\":\n/*!********************************************!*\\\n  !*** ./src/extractors/spectralSkewness.js ***!\n  \\********************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _extractorUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractorUtilities */ \"./src/extractors/extractorUtilities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  var mu1 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(1, args.ampSpectrum);\n  var mu2 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(2, args.ampSpectrum);\n  var mu3 = Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(3, args.ampSpectrum);\n  var numerator = 2 * Math.pow(mu1, 3) - 3 * mu1 * mu2 + mu3;\n  var denominator = Math.pow(Math.sqrt(mu2 - Math.pow(mu1, 2)), 3);\n  return numerator / denominator;\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralSlope.js\":\n/*!*****************************************!*\\\n  !*** ./src/extractors/spectralSlope.js ***!\n  \\*****************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object') {\n    throw new TypeError();\n  } //linear regression\n\n\n  var ampSum = 0;\n  var freqSum = 0;\n  var freqs = new Float32Array(args.ampSpectrum.length);\n  var powFreqSum = 0;\n  var ampFreqSum = 0;\n\n  for (var i = 0; i < args.ampSpectrum.length; i++) {\n    ampSum += args.ampSpectrum[i];\n    var curFreq = i * args.sampleRate / args.bufferSize;\n    freqs[i] = curFreq;\n    powFreqSum += curFreq * curFreq;\n    freqSum += curFreq;\n    ampFreqSum += curFreq * args.ampSpectrum[i];\n  }\n\n  return (args.ampSpectrum.length * ampFreqSum - freqSum * ampSum) / (ampSum * (powFreqSum - Math.pow(freqSum, 2)));\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/spectralSpread.js\":\n/*!******************************************!*\\\n  !*** ./src/extractors/spectralSpread.js ***!\n  \\******************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _extractorUtilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractorUtilities */ \"./src/extractors/extractorUtilities.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (_typeof(args.ampSpectrum) !== 'object') {\n    throw new TypeError();\n  }\n\n  return Math.sqrt(Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(2, args.ampSpectrum) - Math.pow(Object(_extractorUtilities__WEBPACK_IMPORTED_MODULE_0__[\"mu\"])(1, args.ampSpectrum), 2));\n});\n\n/***/ }),\n\n/***/ \"./src/extractors/zcr.js\":\n/*!*******************************!*\\\n  !*** ./src/extractors/zcr.js ***!\n  \\*******************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (_typeof(arguments[0].signal) !== 'object') {\n    throw new TypeError();\n  }\n\n  var zcr = 0;\n\n  for (var i = 1; i < arguments[0].signal.length; i++) {\n    if (arguments[0].signal[i - 1] >= 0 && arguments[0].signal[i] < 0 || arguments[0].signal[i - 1] < 0 && arguments[0].signal[i] >= 0) {\n      zcr++;\n    }\n  }\n\n  return zcr;\n});\n\n/***/ }),\n\n/***/ \"./src/featureExtractors.js\":\n/*!**********************************!*\\\n  !*** ./src/featureExtractors.js ***!\n  \\**********************************/\n/*! exports provided: buffer, rms, energy, complexSpectrum, spectralSlope, spectralCentroid, spectralRolloff, spectralFlatness, spectralSpread, spectralSkewness, spectralKurtosis, amplitudeSpectrum, zcr, loudness, perceptualSpread, perceptualSharpness, powerSpectrum, mfcc, chroma, spectralFlux */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buffer\", function() { return buffer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"complexSpectrum\", function() { return complexSpectrum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"amplitudeSpectrum\", function() { return amplitudeSpectrum; });\n/* harmony import */ var _extractors_rms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractors/rms */ \"./src/extractors/rms.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rms\", function() { return _extractors_rms__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _extractors_energy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractors/energy */ \"./src/extractors/energy.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"energy\", function() { return _extractors_energy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralSlope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extractors/spectralSlope */ \"./src/extractors/spectralSlope.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralSlope\", function() { return _extractors_spectralSlope__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralCentroid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extractors/spectralCentroid */ \"./src/extractors/spectralCentroid.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralCentroid\", function() { return _extractors_spectralCentroid__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralRolloff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extractors/spectralRolloff */ \"./src/extractors/spectralRolloff.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralRolloff\", function() { return _extractors_spectralRolloff__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralFlatness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extractors/spectralFlatness */ \"./src/extractors/spectralFlatness.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralFlatness\", function() { return _extractors_spectralFlatness__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extractors/spectralSpread */ \"./src/extractors/spectralSpread.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralSpread\", function() { return _extractors_spectralSpread__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralSkewness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extractors/spectralSkewness */ \"./src/extractors/spectralSkewness.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralSkewness\", function() { return _extractors_spectralSkewness__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralKurtosis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extractors/spectralKurtosis */ \"./src/extractors/spectralKurtosis.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralKurtosis\", function() { return _extractors_spectralKurtosis__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _extractors_zcr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extractors/zcr */ \"./src/extractors/zcr.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zcr\", function() { return _extractors_zcr__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _extractors_loudness__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extractors/loudness */ \"./src/extractors/loudness.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loudness\", function() { return _extractors_loudness__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _extractors_perceptualSpread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extractors/perceptualSpread */ \"./src/extractors/perceptualSpread.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"perceptualSpread\", function() { return _extractors_perceptualSpread__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _extractors_perceptualSharpness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extractors/perceptualSharpness */ \"./src/extractors/perceptualSharpness.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"perceptualSharpness\", function() { return _extractors_perceptualSharpness__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _extractors_mfcc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extractors/mfcc */ \"./src/extractors/mfcc.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mfcc\", function() { return _extractors_mfcc__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _extractors_chroma__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./extractors/chroma */ \"./src/extractors/chroma.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"chroma\", function() { return _extractors_chroma__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _extractors_powerSpectrum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extractors/powerSpectrum */ \"./src/extractors/powerSpectrum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"powerSpectrum\", function() { return _extractors_powerSpectrum__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _extractors_spectralFlux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./extractors/spectralFlux */ \"./src/extractors/spectralFlux.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"spectralFlux\", function() { return _extractors_spectralFlux__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar buffer = function buffer(args) {\n  return args.signal;\n};\n\nvar complexSpectrum = function complexSpectrum(args) {\n  return args.complexSpectrum;\n};\n\nvar amplitudeSpectrum = function amplitudeSpectrum(args) {\n  return args.ampSpectrum;\n};\n\n\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\nmodule.exports = __webpack_require__(/*! ./main */ \"./src/main.js\")[\"default\"];\n\n/***/ }),\n\n/***/ \"./src/main.js\":\n/*!*********************!*\\\n  !*** ./src/main.js ***!\n  \\*********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _featureExtractors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featureExtractors */ \"./src/featureExtractors.js\");\n/* harmony import */ var fftjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fftjs */ \"./node_modules/fftjs/dist/fft.js\");\n/* harmony import */ var fftjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fftjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _meyda_wa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meyda-wa */ \"./src/meyda-wa.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n/**\n * Meyda Module\n * @module meyda\n */\n\n/**\n * Options for constructing a MeydaAnalyzer\n * @typedef {Object} MeydaOptions\n * @property {AudioContext} audioContext - The Audio Context for the MeydaAnalyzer to operate in.\n * @property {AudioNode} source - The Audio Node for Meyda to listen to.\n * @property {number} [bufferSize] - The size of the buffer.\n * @property {number} [hopSize] - The hop size between buffers.\n * @property {number} [sampleRate] - The number of samples per second in the audio context.\n * @property {Function} [callback] - A function to receive the frames of audio features\n * @property {string} [windowingFunction] - The Windowing Function to apply to the signal before transformation to the frequency domain\n * @property {string|Array.<string>} [featureExtractors] - Specify the feature extractors you want to run on the audio.\n * @property {boolean} [startImmediately] - Pass `true` to start feature extraction immediately\n * @property {number} [numberOfMFCCCoefficients] - The number of MFCC co-efficients that the MFCC feature extractor should return\n */\n\n/**\n * Web Audio context\n * Either an {@link AudioContext|https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}\n * or an {@link OfflineAudioContext|https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext}\n * @typedef {Object} AudioContext\n */\n\n/**\n * AudioNode\n * A Web AudioNode\n * @typedef {Object} AudioNode\n */\n\n/**\n * ScriptProcessorNode\n * A Web Audio ScriptProcessorNode\n * @typedef {Object} ScriptProcessorNode\n */\n\n/**\n * @class Meyda\n * @hideconstructor\n * @classdesc\n * The schema for the default export of the Meyda library.\n * @example\n * var Meyda = require('meyda');\n */\n\nvar Meyda = {\n  /**\n   * Meyda stores a reference to the relevant audio context here for use inside\n   * the Web Audio API.\n   * @instance\n   * @member {AudioContext}\n   */\n  audioContext: null,\n\n  /**\n   * Meyda keeps an internal ScriptProcessorNode in which it runs audio feature\n   * extraction. The ScriptProcessorNode is stored in this member variable.\n   * @instance\n   * @member {ScriptProcessorNode}\n   */\n  spn: null,\n\n  /**\n   * The length of each buffer that Meyda will extract audio on. When recieving\n   * input via the Web Audio API, the Script Processor Node chunks incoming audio\n   * into arrays of this length. Longer buffers allow for more precision in the\n   * frequency domain, but increase the amount of time it takes for Meyda to\n   * output a set of audio features for the buffer. You can calculate how many\n   * sets of audio features Meyda will output per second by dividing the\n   * buffer size by the sample rate. If you're using Meyda for visualisation,\n   * make sure that you're collecting audio features at a rate that's faster\n   * than or equal to the video frame rate you expect.\n   * @instance\n   * @member {number}\n   */\n  bufferSize: 512,\n\n  /**\n   * The number of samples per second of the incoming audio. This affects\n   * feature extraction outside of the context of the Web Audio API, and must be\n   * set accurately - otherwise calculations will be off.\n   * @instance\n   * @member {number}\n   */\n  sampleRate: 44100,\n\n  /**\n   * The number of Mel bands to use in the Mel Frequency Cepstral Co-efficients\n   * feature extractor\n   * @instance\n   * @member {number}\n   */\n  melBands: 26,\n\n  /**\n   * The number of bands to divide the spectrum into for the Chroma feature\n   * extractor. 12 is the standard number of semitones per octave in the western\n   * music tradition, but Meyda can use an arbitrary number of bands, which\n   * can be useful for microtonal music.\n   * @instance\n   * @member {number}\n   */\n  chromaBands: 12,\n\n  /**\n   * A function you can provide that will be called for each buffer that Meyda\n   * receives from its source node\n   * @instance\n   * @member {Function}\n   */\n  callback: null,\n\n  /**\n   * Specify the windowing function to apply to the buffer before the\n   * transformation from the time domain to the frequency domain is performed\n   *\n   * The default windowing function is the hanning window.\n   *\n   * @instance\n   * @member {string}\n   */\n  windowingFunction: 'hanning',\n\n  /**\n   * @member {object}\n   */\n  featureExtractors: _featureExtractors__WEBPACK_IMPORTED_MODULE_1__,\n  EXTRACTION_STARTED: false,\n\n  /**\n   * The number of MFCC co-efficients that the MFCC feature extractor should return\n   * @instance\n   * @member {number}\n   */\n  numberOfMFCCCoefficients: 13,\n  _featuresToExtract: [],\n  windowing: _utilities__WEBPACK_IMPORTED_MODULE_0__[\"applyWindow\"],\n  _errors: {\n    notPow2: new Error('Meyda: Buffer size must be a power of 2, e.g. 64 or 512'),\n    featureUndef: new Error('Meyda: No features defined.'),\n    invalidFeatureFmt: new Error('Meyda: Invalid feature format'),\n    invalidInput: new Error('Meyda: Invalid input.'),\n    noAC: new Error('Meyda: No AudioContext specified.'),\n    noSource: new Error('Meyda: No source node specified.')\n  },\n\n  /**\n   * @summary\n   * Create a MeydaAnalyzer\n   *\n   * A factory function for creating a MeydaAnalyzer, the interface for using\n   * Meyda in the context of Web Audio.\n   *\n   * @method\n   * @param {MeydaOptions} options Options - an object containing configuration\n   * @returns {MeydaAnalyzer}\n   * @example\n   * const analyzer = Meyda.createMeydaAnalyzer({\n   *   \"audioContext\": audioContext,\n   *   \"source\": source,\n   *   \"bufferSize\": 512,\n   *   \"featureExtractors\": [\"rms\"],\n   *   \"inputs\": 2,\n   *   \"callback\": features => {\n   *     levelRangeElement.value = features.rms;\n   *   }\n   * });\n   */\n  createMeydaAnalyzer: function createMeydaAnalyzer(options) {\n    return new _meyda_wa__WEBPACK_IMPORTED_MODULE_3__[\"MeydaAnalyzer\"](options, Object.assign({}, Meyda));\n  },\n\n  /**\n   * Extract an audio feature from a buffer\n   *\n   * Unless `meyda.windowingFunction` is set otherwise, `extract` will\n   * internally apply a hanning window to the buffer prior to conversion into\n   * the frequency domain.\n   *\n   * @function\n   * @param {(string|Array.<string>)} feature - the feature you want to extract\n   * @param {Array.<number>} signal\n   * An array of numbers that represents the signal. It should be of length\n   * `meyda.bufferSize`\n   * @param {Array.<number>} [previousSignal] - the previous buffer\n   * @returns {object} Features\n   * @example\n   * meyda.bufferSize = 2048;\n   * const features = meyda.extract(['zcr', 'spectralCentroid'], signal);\n   */\n  extract: function extract(feature, signal, previousSignal) {\n    var _this = this;\n\n    if (!signal) throw this._errors.invalidInput;else if (_typeof(signal) != 'object') throw this._errors.invalidInput;else if (!feature) throw this._errors.featureUndef;else if (!_utilities__WEBPACK_IMPORTED_MODULE_0__[\"isPowerOfTwo\"](signal.length)) throw this._errors.notPow2;\n\n    if (typeof this.barkScale == 'undefined' || this.barkScale.length != this.bufferSize) {\n      this.barkScale = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"createBarkScale\"](this.bufferSize, this.sampleRate, this.bufferSize);\n    } // Recalculate mel bank if buffer length changed\n\n\n    if (typeof this.melFilterBank == 'undefined' || this.barkScale.length != this.bufferSize || this.melFilterBank.length != this.melBands) {\n      this.melFilterBank = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"createMelFilterBank\"](Math.max(this.melBands, this.numberOfMFCCCoefficients), this.sampleRate, this.bufferSize);\n    } // Recalculate chroma bank if buffer length changed\n\n\n    if (typeof this.chromaFilterBank == 'undefined' || this.chromaFilterBank.length != this.chromaBands) {\n      this.chromaFilterBank = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"createChromaFilterBank\"](this.chromaBands, this.sampleRate, this.bufferSize);\n    }\n\n    if (typeof signal.buffer == 'undefined') {\n      //signal is a normal array, convert to F32A\n      this.signal = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"arrayToTyped\"](signal);\n    } else {\n      this.signal = signal;\n    }\n\n    var preparedSignal = prepareSignalWithSpectrum(signal, this.windowingFunction, this.bufferSize);\n    this.signal = preparedSignal.windowedSignal;\n    this.complexSpectrum = preparedSignal.complexSpectrum;\n    this.ampSpectrum = preparedSignal.ampSpectrum;\n\n    if (previousSignal) {\n      var _preparedSignal = prepareSignalWithSpectrum(previousSignal, this.windowingFunction, this.bufferSize);\n\n      this.previousSignal = _preparedSignal.windowedSignal;\n      this.previousComplexSpectrum = _preparedSignal.complexSpectrum;\n      this.previousAmpSpectrum = _preparedSignal.ampSpectrum;\n    }\n\n    var extract = function extract(feature) {\n      return _this.featureExtractors[feature]({\n        ampSpectrum: _this.ampSpectrum,\n        chromaFilterBank: _this.chromaFilterBank,\n        complexSpectrum: _this.complexSpectrum,\n        signal: _this.signal,\n        bufferSize: _this.bufferSize,\n        sampleRate: _this.sampleRate,\n        barkScale: _this.barkScale,\n        melFilterBank: _this.melFilterBank,\n        previousSignal: _this.previousSignal,\n        previousAmpSpectrum: _this.previousAmpSpectrum,\n        previousComplexSpectrum: _this.previousComplexSpectrum,\n        numberOfMFCCCoefficients: _this.numberOfMFCCCoefficients\n      });\n    };\n\n    if (_typeof(feature) === 'object') {\n      return feature.reduce(function (acc, el) {\n        return Object.assign({}, acc, _defineProperty({}, el, extract(el)));\n      }, {});\n    } else if (typeof feature === 'string') {\n      return extract(feature);\n    } else {\n      throw this._errors.invalidFeatureFmt;\n    }\n  }\n};\n\nvar prepareSignalWithSpectrum = function prepareSignalWithSpectrum(signal, windowingFunction, bufferSize) {\n  var preparedSignal = {};\n\n  if (typeof signal.buffer == 'undefined') {\n    //signal is a normal array, convert to F32A\n    preparedSignal.signal = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"arrayToTyped\"](signal);\n  } else {\n    preparedSignal.signal = signal;\n  }\n\n  preparedSignal.windowedSignal = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"applyWindow\"](preparedSignal.signal, windowingFunction);\n  preparedSignal.complexSpectrum = Object(fftjs__WEBPACK_IMPORTED_MODULE_2__[\"fft\"])(preparedSignal.windowedSignal);\n  preparedSignal.ampSpectrum = new Float32Array(bufferSize / 2);\n\n  for (var i = 0; i < bufferSize / 2; i++) {\n    preparedSignal.ampSpectrum[i] = Math.sqrt(Math.pow(preparedSignal.complexSpectrum.real[i], 2) + Math.pow(preparedSignal.complexSpectrum.imag[i], 2));\n  }\n\n  return preparedSignal;\n};\n/**\n * The Meyda class\n * @type {Meyda}\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meyda);\nif (typeof window !== 'undefined') window.Meyda = Meyda;\n\n/***/ }),\n\n/***/ \"./src/meyda-wa.js\":\n/*!*************************!*\\\n  !*** ./src/meyda-wa.js ***!\n  \\*************************/\n/*! exports provided: MeydaAnalyzer */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MeydaAnalyzer\", function() { return MeydaAnalyzer; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _featureExtractors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featureExtractors */ \"./src/featureExtractors.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n/**\n  * MeydaAnalyzer\n  * @classdesc\n  * Meyda's interface to the Web Audio API. MeydaAnalyzer abstracts an API on\n  * top of the Web Audio API's ScriptProcessorNode, running the Meyda audio\n  * feature extractors inside that context.\n  *\n  * MeydaAnalyzer's constructor should not be called directly - MeydaAnalyzer\n  * objects should be generated using the {@link Meyda.createMeydaAnalyzer}\n  * factory function in the main Meyda class.\n  *\n  * @example\n  * const analyzer = Meyda.createMeydaAnalyzer({\n  *   \"audioContext\": audioContext,\n  *   \"source\": source,\n  *   \"bufferSize\": 512,\n  *   \"featureExtractors\": [\"rms\"],\n  *   \"inputs\": 2,\n  *   \"numberOfMFCCCoefficients\": 20\n  *   \"callback\": features => {\n  *     levelRangeElement.value = features.rms;\n  *   }\n  * });\n  * @hideconstructor\n  */\n\nvar MeydaAnalyzer =\n/*#__PURE__*/\nfunction () {\n  function MeydaAnalyzer(options, _this) {\n    var _this2 = this;\n\n    _classCallCheck(this, MeydaAnalyzer);\n\n    this._m = _this;\n\n    if (!options.audioContext) {\n      throw this._m.errors.noAC;\n    } else if (options.bufferSize && !_utilities__WEBPACK_IMPORTED_MODULE_0__[\"isPowerOfTwo\"](options.bufferSize)) {\n      throw this._m._errors.notPow2;\n    } else if (!options.source) {\n      throw this._m._errors.noSource;\n    }\n\n    this._m.audioContext = options.audioContext; // TODO: validate options\n\n    this._m.bufferSize = options.bufferSize || this._m.bufferSize || 256;\n    this._m.hopSize = options.hopSize || this._m.hopSize || this._m.bufferSize;\n    this._m.sampleRate = options.sampleRate || this._m.audioContext.sampleRate || 44100;\n    this._m.callback = options.callback;\n    this._m.windowingFunction = options.windowingFunction || 'hanning';\n    this._m.featureExtractors = _featureExtractors__WEBPACK_IMPORTED_MODULE_1__;\n    this._m.EXTRACTION_STARTED = options.startImmediately || false;\n    this._m.channel = typeof options.channel === 'number' ? options.channel : 0;\n    this._m.inputs = options.inputs || 1;\n    this._m.outputs = options.outputs || 1;\n    this._m.numberOfMFCCCoefficients = options.numberOfMFCCCoefficients || this._m.numberOfMFCCCoefficients || 13; //create nodes\n\n    this._m.spn = this._m.audioContext.createScriptProcessor(this._m.bufferSize, this._m.inputs, this._m.outputs);\n\n    this._m.spn.connect(this._m.audioContext.destination);\n\n    this._m._featuresToExtract = options.featureExtractors || []; //always recalculate BS and MFB when a new Meyda analyzer is created.\n\n    this._m.barkScale = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"createBarkScale\"](this._m.bufferSize, this._m.sampleRate, this._m.bufferSize);\n    this._m.melFilterBank = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"createMelFilterBank\"](Math.max(this._m.melBands, this._m.numberOfMFCCCoefficients), this._m.sampleRate, this._m.bufferSize);\n    this._m.inputData = null;\n    this._m.previousInputData = null;\n    this._m.frame = null;\n    this._m.previousFrame = null;\n    this.setSource(options.source);\n\n    this._m.spn.onaudioprocess = function (e) {\n      if (_this2._m.inputData !== null) {\n        _this2._m.previousInputData = _this2._m.inputData;\n      }\n\n      _this2._m.inputData = e.inputBuffer.getChannelData(_this2._m.channel);\n\n      if (!_this2._m.previousInputData) {\n        var buffer = _this2._m.inputData;\n      } else {\n        var buffer = new Float32Array(_this2._m.previousInputData.length + _this2._m.inputData.length - _this2._m.hopSize);\n        buffer.set(_this2._m.previousInputData.slice(_this2._m.hopSize));\n        buffer.set(_this2._m.inputData, _this2._m.previousInputData.length - _this2._m.hopSize);\n      }\n\n      ;\n      var frames = _utilities__WEBPACK_IMPORTED_MODULE_0__[\"frame\"](buffer, _this2._m.bufferSize, _this2._m.hopSize);\n      frames.forEach(function (f) {\n        _this2._m.frame = f;\n\n        var features = _this2._m.extract(_this2._m._featuresToExtract, _this2._m.frame, _this2._m.previousFrame); // call callback if applicable\n\n\n        if (typeof _this2._m.callback === 'function' && _this2._m.EXTRACTION_STARTED) {\n          _this2._m.callback(features);\n        }\n\n        _this2._m.previousFrame = _this2._m.frame;\n      });\n    };\n  }\n  /**\n   * Start feature extraction\n   * The audio features will be passed to the callback function that was defined\n   * in the MeydaOptions that were passed to the factory when constructing the\n   * MeydaAnalyzer.\n   * @param {(string|Array.<string>)} [features]\n   * Change the features that Meyda is extracting. Defaults to the features that\n   * were set upon construction in the options parameter.\n   * @example\n   * analyzer.start('chroma');\n   */\n\n\n  _createClass(MeydaAnalyzer, [{\n    key: \"start\",\n    value: function start(features) {\n      this._m._featuresToExtract = features || this._m._featuresToExtract;\n      this._m.EXTRACTION_STARTED = true;\n    }\n    /**\n     * Stop feature extraction.\n     * @example\n     * analyzer.stop();\n     */\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this._m.EXTRACTION_STARTED = false;\n    }\n    /**\n     * Set the Audio Node for Meyda to listen to.\n     * @param {AudioNode} source - The Audio Node for Meyda to listen to\n     * @example\n     * analyzer.setSource(audioSourceNode);\n     */\n\n  }, {\n    key: \"setSource\",\n    value: function setSource(source) {\n      this._m.source && this._m.source.disconnect(this._m.spn);\n      this._m.source = source;\n\n      this._m.source.connect(this._m.spn);\n    }\n    /**\n     * Set the channel of the audio node for Meyda to listen to\n     * @param {number} channel - the index of the channel on the input audio node\n     * for Meyda to listen to.\n     * @example\n     * analyzer.setChannel(0);\n     */\n\n  }, {\n    key: \"setChannel\",\n    value: function setChannel(channel) {\n      if (channel <= this._m.inputs) {\n        this._m.channel = channel;\n      } else {\n        console.error(\"Channel \".concat(channel, \" does not exist. Make sure you've provided a value for 'inputs' that is greater than \").concat(channel, \" when instantiating the MeydaAnalyzer\"));\n      }\n    }\n    /**\n     * Get a set of features from the current frame.\n     * @param {(string|Array.<string>)} [features]\n     * Change the features that Meyda is extracting\n     * @example\n     * analyzer.get('spectralFlatness');\n     */\n\n  }, {\n    key: \"get\",\n    value: function get(features) {\n      if (this._m.inputData) {\n        return this._m.extract(features || this._m._featuresToExtract, this._m.inputData, this._m.previousInputData);\n      } else {\n        return null;\n      }\n    }\n  }]);\n\n  return MeydaAnalyzer;\n}();\n\n/***/ }),\n\n/***/ \"./src/utilities.js\":\n/*!**************************!*\\\n  !*** ./src/utilities.js ***!\n  \\**************************/\n/*! exports provided: isPowerOfTwo, error, pointwiseBufferMult, applyWindow, createBarkScale, typedToArray, arrayToTyped, _normalize, normalize, normalizeToOne, mean, melToFreq, freqToMel, createMelFilterBank, hzToOctaves, normalizeByColumn, createChromaFilterBank, frame */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPowerOfTwo\", function() { return isPowerOfTwo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointwiseBufferMult\", function() { return pointwiseBufferMult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyWindow\", function() { return applyWindow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBarkScale\", function() { return createBarkScale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typedToArray\", function() { return typedToArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayToTyped\", function() { return arrayToTyped; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_normalize\", function() { return _normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeToOne\", function() { return normalizeToOne; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mean\", function() { return mean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"melToFreq\", function() { return melToFreq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"freqToMel\", function() { return freqToMel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMelFilterBank\", function() { return createMelFilterBank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hzToOctaves\", function() { return hzToOctaves; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizeByColumn\", function() { return normalizeByColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChromaFilterBank\", function() { return createChromaFilterBank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"frame\", function() { return frame; });\n/* harmony import */ var _windowing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./windowing */ \"./src/windowing.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar windows = {};\nfunction isPowerOfTwo(num) {\n  while (num % 2 === 0 && num > 1) {\n    num /= 2;\n  }\n\n  return num === 1;\n}\nfunction error(message) {\n  throw new Error('Meyda: ' + message);\n}\nfunction pointwiseBufferMult(a, b) {\n  var c = [];\n\n  for (var i = 0; i < Math.min(a.length, b.length); i++) {\n    c[i] = a[i] * b[i];\n  }\n\n  return c;\n}\nfunction applyWindow(signal, windowname) {\n  if (windowname !== 'rect') {\n    if (windowname === '' || !windowname) windowname = 'hanning';\n    if (!windows[windowname]) windows[windowname] = {};\n\n    if (!windows[windowname][signal.length]) {\n      try {\n        windows[windowname][signal.length] = _windowing__WEBPACK_IMPORTED_MODULE_0__[windowname](signal.length);\n      } catch (e) {\n        throw new Error('Invalid windowing function');\n      }\n    }\n\n    signal = pointwiseBufferMult(signal, windows[windowname][signal.length]);\n  }\n\n  return signal;\n}\nfunction createBarkScale(length, sampleRate, bufferSize) {\n  var barkScale = new Float32Array(length);\n\n  for (var i = 0; i < barkScale.length; i++) {\n    barkScale[i] = i * sampleRate / bufferSize;\n    barkScale[i] = 13 * Math.atan(barkScale[i] / 1315.8) + 3.5 * Math.atan(Math.pow(barkScale[i] / 7518, 2));\n  }\n\n  return barkScale;\n}\nfunction typedToArray(t) {\n  // utility to convert typed arrays to normal arrays\n  return Array.prototype.slice.call(t);\n}\nfunction arrayToTyped(t) {\n  // utility to convert arrays to typed F32 arrays\n  return Float32Array.from(t);\n}\nfunction _normalize(num, range) {\n  return num / range;\n}\nfunction normalize(a, range) {\n  return a.map(function (n) {\n    return _normalize(n, range);\n  });\n}\nfunction normalizeToOne(a) {\n  var max = Math.max.apply(null, a);\n  return a.map(function (n) {\n    return n / max;\n  });\n}\nfunction mean(a) {\n  return a.reduce(function (prev, cur) {\n    return prev + cur;\n  }) / a.length;\n}\n\nfunction _melToFreq(melValue) {\n  var freqValue = 700 * (Math.exp(melValue / 1125) - 1);\n  return freqValue;\n}\n\nfunction _freqToMel(freqValue) {\n  var melValue = 1125 * Math.log(1 + freqValue / 700);\n  return melValue;\n}\n\nfunction melToFreq(mV) {\n  return _melToFreq(mV);\n}\nfunction freqToMel(fV) {\n  return _freqToMel(fV);\n}\nfunction createMelFilterBank(numFilters, sampleRate, bufferSize) {\n  //the +2 is the upper and lower limits\n  var melValues = new Float32Array(numFilters + 2);\n  var melValuesInFreq = new Float32Array(numFilters + 2); //Generate limits in Hz - from 0 to the nyquist.\n\n  var lowerLimitFreq = 0;\n  var upperLimitFreq = sampleRate / 2; //Convert the limits to Mel\n\n  var lowerLimitMel = _freqToMel(lowerLimitFreq);\n\n  var upperLimitMel = _freqToMel(upperLimitFreq); //Find the range\n\n\n  var range = upperLimitMel - lowerLimitMel; //Find the range as part of the linear interpolation\n\n  var valueToAdd = range / (numFilters + 1);\n  var fftBinsOfFreq = Array(numFilters + 2);\n\n  for (var i = 0; i < melValues.length; i++) {\n    // Initialising the mel frequencies\n    // They're a linear interpolation between the lower and upper limits.\n    melValues[i] = i * valueToAdd; // Convert back to Hz\n\n    melValuesInFreq[i] = _melToFreq(melValues[i]); // Find the corresponding bins\n\n    fftBinsOfFreq[i] = Math.floor((bufferSize + 1) * melValuesInFreq[i] / sampleRate);\n  }\n\n  var filterBank = Array(numFilters);\n\n  for (var j = 0; j < filterBank.length; j++) {\n    // Create a two dimensional array of size numFilters * (buffersize/2)+1\n    // pre-populating the arrays with 0s.\n    filterBank[j] = Array.apply(null, new Array(bufferSize / 2 + 1)).map(Number.prototype.valueOf, 0); //creating the lower and upper slopes for each bin\n\n    for (var _i = fftBinsOfFreq[j]; _i < fftBinsOfFreq[j + 1]; _i++) {\n      filterBank[j][_i] = (_i - fftBinsOfFreq[j]) / (fftBinsOfFreq[j + 1] - fftBinsOfFreq[j]);\n    }\n\n    for (var _i2 = fftBinsOfFreq[j + 1]; _i2 < fftBinsOfFreq[j + 2]; _i2++) {\n      filterBank[j][_i2] = (fftBinsOfFreq[j + 2] - _i2) / (fftBinsOfFreq[j + 2] - fftBinsOfFreq[j + 1]);\n    }\n  }\n\n  return filterBank;\n}\nfunction hzToOctaves(freq, A440) {\n  return Math.log2(16 * freq / A440);\n}\nfunction normalizeByColumn(a) {\n  var emptyRow = a[0].map(function () {\n    return 0;\n  });\n  var colDenominators = a.reduce(function (acc, row) {\n    row.forEach(function (cell, j) {\n      acc[j] += Math.pow(cell, 2);\n    });\n    return acc;\n  }, emptyRow).map(Math.sqrt);\n  return a.map(function (row, i) {\n    return row.map(function (v, j) {\n      return v / (colDenominators[j] || 1);\n    });\n  });\n}\n;\nfunction createChromaFilterBank(numFilters, sampleRate, bufferSize) {\n  var centerOctave = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;\n  var octaveWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;\n  var baseC = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;\n  var A440 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 440;\n  var numOutputBins = Math.floor(bufferSize / 2) + 1;\n  var frequencyBins = new Array(bufferSize).fill(0).map(function (_, i) {\n    return numFilters * hzToOctaves(sampleRate * i / bufferSize, A440);\n  }); // Set a value for the 0 Hz bin that is 1.5 octaves below bin 1\n  // (so chroma is 50% rotated from bin 1, and bin width is broad)\n\n  frequencyBins[0] = frequencyBins[1] - 1.5 * numFilters;\n  var binWidthBins = frequencyBins.slice(1).map(function (v, i) {\n    return Math.max(v - frequencyBins[i]);\n  }, 1).concat([1]);\n  var halfNumFilters = Math.round(numFilters / 2);\n  var filterPeaks = new Array(numFilters).fill(0).map(function (_, i) {\n    return frequencyBins.map(function (frq) {\n      return (10 * numFilters + halfNumFilters + frq - i) % numFilters - halfNumFilters;\n    });\n  });\n  var weights = filterPeaks.map(function (row, i) {\n    return row.map(function (_, j) {\n      return Math.exp(-0.5 * Math.pow(2 * filterPeaks[i][j] / binWidthBins[j], 2));\n    });\n  });\n  weights = normalizeByColumn(weights);\n\n  if (octaveWidth) {\n    var octaveWeights = frequencyBins.map(function (v) {\n      return Math.exp(-0.5 * Math.pow((v / numFilters - centerOctave) / octaveWidth, 2));\n    });\n    weights = weights.map(function (row) {\n      return row.map(function (cell, j) {\n        return cell * octaveWeights[j];\n      });\n    });\n  }\n\n  if (baseC) {\n    weights = [].concat(_toConsumableArray(weights.slice(3)), _toConsumableArray(weights.slice(0, 3)));\n  }\n\n  return weights.map(function (row) {\n    return row.slice(0, numOutputBins);\n  });\n}\nfunction frame(buffer, frameLength, hopLength) {\n  if (buffer.length < frameLength) {\n    throw new Error('Buffer is too short for frame length');\n  }\n\n  if (hopLength < 1) {\n    throw new Error('Hop length cannot be less that 1');\n  }\n\n  if (frameLength < 1) {\n    throw new Error('Frame length cannot be less that 1');\n  }\n\n  var numFrames = 1 + Math.floor((buffer.length - frameLength) / hopLength);\n  return new Array(numFrames).fill(0).map(function (_, i) {\n    return buffer.slice(i * hopLength, i * hopLength + frameLength);\n  });\n}\n\n/***/ }),\n\n/***/ \"./src/windowing.js\":\n/*!**************************!*\\\n  !*** ./src/windowing.js ***!\n  \\**************************/\n/*! exports provided: blackman, sine, hanning, hamming */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blackman\", function() { return blackman; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sine\", function() { return sine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hanning\", function() { return hanning; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hamming\", function() { return hamming; });\nfunction blackman(size) {\n  var blackmanBuffer = new Float32Array(size);\n  var coeff1 = 2 * Math.PI / (size - 1);\n  var coeff2 = 2 * coeff1; //According to http://uk.mathworks.com/help/signal/ref/blackman.html\n  //first half of the window\n\n  for (var i = 0; i < size / 2; i++) {\n    blackmanBuffer[i] = 0.42 - 0.5 * Math.cos(i * coeff1) + 0.08 * Math.cos(i * coeff2);\n  } //second half of the window\n\n\n  for (var _i = size / 2; _i > 0; _i--) {\n    blackmanBuffer[size - _i] = blackmanBuffer[_i - 1];\n  }\n\n  return blackmanBuffer;\n}\nfunction sine(size) {\n  var coeff = Math.PI / (size - 1);\n  var sineBuffer = new Float32Array(size);\n\n  for (var i = 0; i < size; i++) {\n    sineBuffer[i] = Math.sin(coeff * i);\n  }\n\n  return sineBuffer;\n}\nfunction hanning(size) {\n  var hanningBuffer = new Float32Array(size);\n\n  for (var i = 0; i < size; i++) {\n    // According to the R documentation\n    // http://ugrad.stat.ubc.ca/R/library/e1071/html/hanning.window.html\n    hanningBuffer[i] = 0.5 - 0.5 * Math.cos(2 * Math.PI * i / (size - 1));\n  }\n\n  return hanningBuffer;\n}\nfunction hamming(size) {\n  var hammingBuffer = new Float32Array(size);\n\n  for (var i = 0; i < size; i++) {\n    //According to http://uk.mathworks.com/help/signal/ref/hamming.html\n    hammingBuffer[i] = 0.54 - 0.46 * Math.cos(2 * Math.PI * (i / size - 1));\n  }\n\n  return hammingBuffer;\n}\n\n/***/ })\n\n/******/ });\n});\n//# sourceMappingURL=meyda.min.map\n\n//# sourceURL=webpack:///./node_modules/meyda/dist/web/meyda.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_all_time_domain_and_spectral_features.js":
/*!**********************************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_all_time_domain_and_spectral_features.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return all_time_freq; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction all_time_freq(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var AllTimeFreqBtn = document.querySelector('#all_time_freq #start_offline');\n  var p = document.querySelector('#all_time_freq #results');\n  var down_elem = document.querySelector('#all_time_freq #download_results');\n  var meyda_table = document.querySelector('#all_time_freq #meyda_results #table');\n  var meyda_plot = document.querySelector('#all_time_freq #meyda_results #plot');\n  var ess_table = document.querySelector('#all_time_freq #essentia_results #table');\n  var ess_plot = document.querySelector('#all_time_freq #essentia_results #plot');\n  var stack_plot = document.querySelector('#all_time_freq #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('ALL_TIME_FREQ'); // add tests\n\n    suite.add('Meyda#ALL_TIME_FREQ', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['energy', 'rms', 'zcr', 'amplitudeSpectrum', 'powerSpectrum', 'spectralCentroid', 'spectralFlatness', // 'spectralFlux', \n        'spectralRolloff', 'spectralSpread', 'spectralSkewness', 'spectralKurtosis', 'mfcc', 'loudness', 'perceptualSpread'], frame);\n      }\n    }, options).add('Essentia#ALL_TIME_FREQ', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        essentia.Energy(frames.get(i));\n        essentia.RMS(frames.get(i));\n        essentia.ZeroCrossingRate(frames.get(i));\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE)['frame'];\n        var spectrum = essentia.Spectrum(frame_windowed)['spectrum'];\n        essentia.PowerSpectrum(frame_windowed);\n        essentia.Centroid(spectrum);\n        essentia.Flatness(spectrum); // essentia.Flux(spectrum);\n\n        essentia.RollOff(spectrum);\n        essentia.DistributionShape(essentia.CentralMoments(spectrum)[\"centralMoments\"]);\n        essentia.MFCC(spectrum);\n        var bands = essentia.BarkBands(spectrum, 24)['bands'];\n        essentia.Variance(bands);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      AllTimeFreqBtn.classList.add('is-loading');\n      AllTimeFreqBtn.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      AllTimeFreqBtn.classList.remove('is-loading');\n      AllTimeFreqBtn.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution all time and freq features - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution all time and freq features - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution all time and freq features - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"all_time_freq.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_all_time_domain_and_spectral_features.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_amplitude_spectrum.js":
/*!***************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_amplitude_spectrum.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return amplitude_spectrum; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction amplitude_spectrum(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var AmplitudeSpectralButton = document.querySelector('#amplitude_spectrum #start_offline');\n  var p = document.querySelector('#amplitude_spectrum #results');\n  var down_elem = document.querySelector('#amplitude_spectrum #download_results');\n  var meyda_table = document.querySelector('#amplitude_spectrum #meyda_results #table');\n  var meyda_plot = document.querySelector('#amplitude_spectrum #meyda_results #plot');\n  var ess_table = document.querySelector('#amplitude_spectrum #essentia_results #table');\n  var ess_plot = document.querySelector('#amplitude_spectrum #essentia_results #plot');\n  var stack_plot = document.querySelector('#amplitude_spectrum #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('AMPLITUDE_SPECTRUM'); // add tests\n\n    suite.add('Meyda#AMPLITUDE_SPECTRUM', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['amplitudeSpectrum'], frame);\n      }\n    }, options).add('Essentia#AMPLITUDE_SPECTRUM', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.Spectrum(frame_windowed['frame']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      AmplitudeSpectralButton.classList.add('is-loading');\n      AmplitudeSpectralButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      AmplitudeSpectralButton.classList.remove('is-loading');\n      AmplitudeSpectralButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Amplitude Spectrum - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Amplitude Spectrum - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Amplitude Spectrum - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"amplitude_spectrum.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_amplitude_spectrum.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_beats_degara.js":
/*!*********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_beats_degara.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return beats_degara; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction beats_degara(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var BeatsDegaraButton = document.querySelector('#beats_degara #start_offline');\n  var p = document.querySelector('#beats_degara #results');\n  var down_elem = document.querySelector('#beats_degara #download_results');\n  var ess_table = document.querySelector('#beats_degara #essentia_results #table');\n  var ess_plot = document.querySelector('#beats_degara #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('BEATS_DEGARA'); // add tests\n\n    suite.add('Essentia#BEATS_DEGARA', function () {\n      essentia.RhythmExtractor2013(essentia.arrayToVector(audioBuffer.getChannelData(0)), 208, 'beats_degara');\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      BeatsDegaraButton.classList.add('is-loading');\n      BeatsDegaraButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      BeatsDegaraButton.classList.remove('is-loading');\n      BeatsDegaraButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Beats Degara Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"beats_degara.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_beats_degara.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_beats_zapata.js":
/*!*********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_beats_zapata.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return beats_zapata; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction beats_zapata(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var BeatsZapataButton = document.querySelector('#beats_zapata #start_offline');\n  var p = document.querySelector('#beats_zapata #results');\n  var down_elem = document.querySelector('#beats_zapata #download_results');\n  var ess_table = document.querySelector('#beats_zapata #essentia_results #table');\n  var ess_plot = document.querySelector('#beats_zapata #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('BEATS_ZAPATA'); // add tests\n\n    suite.add('Essentia#BEATS_ZAPATA', function () {\n      essentia.RhythmExtractor2013(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      BeatsZapataButton.classList.add('is-loading');\n      BeatsZapataButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      BeatsZapataButton.classList.remove('is-loading');\n      BeatsZapataButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Beats Zapata Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"beats_zapata.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_beats_zapata.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_compute_pyin.js":
/*!*********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_compute_pyin.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pyin; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction pyin(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var PYINButton = document.querySelector('#pyin #start_offline');\n  var p = document.querySelector('#pyin #results');\n  var down_elem = document.querySelector('#pyin #download_results');\n  var ess_table = document.querySelector('#pyin #essentia_results #table');\n  var ess_plot = document.querySelector('#pyin #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('PYIN'); // add tests\n\n    suite.add('Essentia#PYIN', function () {\n      essentia.PitchYinProbabilistic(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      PYINButton.classList.add('is-loading');\n      PYINButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      PYINButton.classList.remove('is-loading');\n      PYINButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution PYIN Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"pyin.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_compute_pyin.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_compute_yin.js":
/*!********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_compute_yin.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return yin; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction yin(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var YINButton = document.querySelector('#yin #start_offline');\n  var p = document.querySelector('#yin #results');\n  var down_elem = document.querySelector('#yin #download_results');\n  var ess_table = document.querySelector('#yin #essentia_results #table');\n  var ess_plot = document.querySelector('#yin #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('YIN'); // add tests\n\n    suite.add('Essentia#YIN', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        essentia.PitchYin(frames.get(i));\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      YINButton.classList.add('is-loading');\n      YINButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      YINButton.classList.remove('is-loading');\n      YINButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution YIN Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"yin.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_compute_yin.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_compute_yin_fft.js":
/*!************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_compute_yin_fft.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return yin_fft; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction yin_fft(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var PYINFFTButton = document.querySelector('#yin_fft #start_offline');\n  var p = document.querySelector('#yin_fft #results');\n  var down_elem = document.querySelector('#yin_fft #download_results');\n  var ess_table = document.querySelector('#yin_fft #essentia_results #table');\n  var ess_plot = document.querySelector('#yin_fft #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('PYINFFT'); // add tests\n\n    suite.add('Essentia#PYINFFT', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.PitchYinFFT(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      PYINFFTButton.classList.add('is-loading');\n      PYINFFTButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      PYINFFTButton.classList.remove('is-loading');\n      PYINFFTButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution PYINFFT Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"pyin_fft.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_compute_yin_fft.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_distribution_shape.js":
/*!***************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_distribution_shape.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return distribution_shape; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction distribution_shape(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var DistShapeButton = document.querySelector('#dist_shape #start_offline');\n  var p = document.querySelector('#dist_shape #results');\n  var down_elem = document.querySelector('#dist_shape #download_results');\n  var meyda_table = document.querySelector('#dist_shape #meyda_results #table');\n  var meyda_plot = document.querySelector('#dist_shape #meyda_results #plot');\n  var ess_table = document.querySelector('#dist_shape #essentia_results #table');\n  var ess_plot = document.querySelector('#dist_shape #essentia_results #plot');\n  var stack_plot = document.querySelector('#dist_shape #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('DIST_SHAPE'); // add tests\n\n    suite.add('Meyda#DIST_SHAPE', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['spectralSpread', 'spectralSkewness', 'spectralKurtosis'], frame);\n      }\n    }, options).add('Essentia#DIST_SHAPE', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.DistributionShape(essentia.CentralMoments(essentia.Spectrum(frame_windowed['frame'])['spectrum'])[\"centralMoments\"]);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      DistShapeButton.classList.add('is-loading');\n      DistShapeButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      DistShapeButton.classList.remove('is-loading');\n      DistShapeButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Distribution Shape - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Distribution Shape - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Distribution Shape - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"distribution_shape.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_distribution_shape.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_energy.js":
/*!***************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_energy.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return energy; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction energy(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var EnergyButton = document.querySelector('#energy #start_offline');\n  var p = document.querySelector('#energy #results');\n  var down_elem = document.querySelector('#energy #download_results');\n  var meyda_table = document.querySelector('#energy #meyda_results #table');\n  var meyda_plot = document.querySelector('#energy #meyda_results #plot');\n  var ess_table = document.querySelector('#energy #essentia_results #table');\n  var ess_plot = document.querySelector('#energy #essentia_results #plot');\n  var stack_plot = document.querySelector('#energy #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('ENERGY'); // add tests\n\n    suite.add('Meyda#ENERGY', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['energy'], frame);\n      }\n    }, options).add('Essentia#ENERGY', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        essentia.Energy(frames.get(i));\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      EnergyButton.classList.add('is-loading');\n      EnergyButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      EnergyButton.classList.remove('is-loading');\n      EnergyButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Energy - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Energy - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Energy - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"energy.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_energy.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_hpcp.js":
/*!*************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_hpcp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hpcp; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction hpcp(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var HPCPButton = document.querySelector('#hpcp #start_offline');\n  var p = document.querySelector('#hpcp #results');\n  var down_elem = document.querySelector('#hpcp #download_results');\n  var meyda_table = document.querySelector('#hpcp #meyda_results #table');\n  var meyda_plot = document.querySelector('#hpcp #meyda_results #plot');\n  var ess_table = document.querySelector('#hpcp #essentia_results #table');\n  var ess_plot = document.querySelector('#hpcp #essentia_results #plot');\n  var stack_plot = document.querySelector('#hpcp #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('HPCP'); // add tests\n\n    suite.add('Meyda#HPCP', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['chroma'], frame);\n      }\n    }, options).add('Essentia#HPCP', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        var peaks = essentia.SpectralPeaks(essentia.Spectrum(frame_windowed['frame'])['spectrum'], 0.00001, 3500, 60, 20, 'magnitude');\n        essentia.HPCP(peaks['frequencies'], peaks['magnitudes']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      HPCPButton.classList.add('is-loading');\n      HPCPButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      HPCPButton.classList.remove('is-loading');\n      HPCPButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution HPCP - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution HPCP - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution HPCP - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"hpcp.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_hpcp.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_key.js":
/*!************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_key.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return key; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction key(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var KeyButton = document.querySelector('#key #start_offline');\n  var p = document.querySelector('#key #results');\n  var down_elem = document.querySelector('#key #download_results');\n  var ess_table = document.querySelector('#key #essentia_results #table');\n  var ess_plot = document.querySelector('#key #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('KEY'); // add tests\n\n    suite.add('Essentia#KEY', function () {\n      essentia.KeyExtractor(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      KeyButton.classList.add('is-loading');\n      KeyButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      KeyButton.classList.remove('is-loading');\n      KeyButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Key Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"key.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_key.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_loudness.js":
/*!*****************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_loudness.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loudness; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction loudness(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var LoudnessBtn = document.querySelector('#loudness #start_offline');\n  var p = document.querySelector('#loudness #results');\n  var down_elem = document.querySelector('#loudness #download_results');\n  var meyda_table = document.querySelector('#loudness #meyda_results #table');\n  var meyda_plot = document.querySelector('#loudness #meyda_results #plot');\n  var ess_table = document.querySelector('#loudness #essentia_results #table');\n  var ess_plot = document.querySelector('#loudness #essentia_results #plot');\n  var stack_plot = document.querySelector('#loudness #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('LOUDNESS'); // add tests\n\n    suite.add('Meyda#LOUDNESS', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['loudness'], frame);\n      }\n    }, options).add('Essentia#LOUDNESS', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.BarkBands(essentia.Spectrum(frame_windowed['frame'])['spectrum'], 24);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      LoudnessBtn.classList.add('is-loading');\n      LoudnessBtn.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      LoudnessBtn.classList.remove('is-loading');\n      LoudnessBtn.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Loudness - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Loudness - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Loudness - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"loudness.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_loudness.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_loudnessEBUR128.js":
/*!************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_loudnessEBUR128.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ebur128; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction ebur128(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var Ebur128Button = document.querySelector('#ebur128 #start_offline');\n  var p = document.querySelector('#ebur128 #results');\n  var down_elem = document.querySelector('#ebur128 #download_results');\n  var ess_table = document.querySelector('#ebur128 #essentia_results #table');\n  var ess_plot = document.querySelector('#ebur128 #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('EBUR128'); // add tests\n\n    suite.add('Essentia#EBUR128', function () {\n      console.log([essentia.arrayToVector(audioBuffer.getChannelData(0)), essentia.arrayToVector(audioBuffer.getChannelData(1))]);\n      console.log('v');\n      var v = new Array();\n      console.log(essentia.arrayToVector(v)); // [essentia.arrayToVector(audioBuffer.getChannelData(0)),essentia.arrayToVector(audioBuffer.getChannelData(1))]\n\n      essentia.LoudnessEBUR128(essentia.arrayToVector([essentia.arrayToVector(audioBuffer.getChannelData(0)), essentia.arrayToVector(audioBuffer.getChannelData(1))]));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      Ebur128Button.classList.add('is-loading');\n      Ebur128Button.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      Ebur128Button.classList.remove('is-loading');\n      Ebur128Button.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Loudness EBUR128 - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"ebur128.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_loudnessEBUR128.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_mel_bands.js":
/*!******************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_mel_bands.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mel_bands; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction mel_bands(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var MFCCButton = document.querySelector('#mel_bands #start_offline');\n  var p = document.querySelector('#mel_bands #results');\n  var down_elem = document.querySelector('#mel_bands #download_results'); // const meyda_table = document.querySelector('#mel_bands #meyda_results #table');\n  // const meyda_plot = document.querySelector('#mel_bands #meyda_results #plot');\n\n  var ess_table = document.querySelector('#mel_bands #essentia_results #table');\n  var ess_plot = document.querySelector('#mel_bands #essentia_results #plot'); // const stack_plot = document.querySelector('#mel_bands #essentia_results #plot_stack');\n\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('MelBands'); // add tests\n\n    suite // .add('Meyda#MelBands', () => {\n    //     for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {\n    //         Meyda.bufferSize = FRAME_SIZE;\n    //         let frame = audioBuffer.getChannelData(0).slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);\n    //         let lastFrame;\n    //         if (frame.length !== FRAME_SIZE) {\n    //             lastFrame = new Float32Array(FRAME_SIZE);\n    //             audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE*i);\n    //             frame = lastFrame;\n    //         }\n    //         Meyda.extract(['mfcc'], frame);\n    //     }\n    // }, options)\n    .add('Essentia#MelBands', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.MelBands(essentia.Spectrum(frame_windowed['frame'])['spectrum'], 22050, 1025, false, 0, 'unit_sum', 128);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      MFCCButton.classList.add('is-loading');\n      MFCCButton.disable = true;\n    }).on('complete', function () {\n      console.log(this); // console.log('Fastest is ' + this.filter('fastest').map('name'));\n      // TODO: Here attach to the DOM -> SPIKE\n      // p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n\n      MFCCButton.classList.remove('is-loading');\n      MFCCButton.disable = false; // showResultsTable(meyda_table, this[0].stats);\n\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats); // violinDistributionPlot(meyda_plot, {0:[\"meyda\", this[0].stats.sample, \"green\"]}, \"Time distribution Mel Bands - Meyda\");\n\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Mel Bands - Essentia\"); // violinDistributionPlot(stack_plot, {0:[\"meyda\", this[0].stats.sample, \"green\"], 1:[\"essentia.js\", this[1].stats.sample, \"red\"]},\n      //                          \"Time distribution Mel Bands - Stack\");\n\n      var resultsObj = {\n        // \"meyda\": {\n        //     \"mean\": this[0].stats.mean,\n        //     \"moe\": this[0].stats.moe,\n        //     \"rme\": this[0].stats.rme,\n        //     \"sem\": this[0].stats.sem,\n        //     \"deviation\": this[0].stats.deviation,\n        //     \"variance\": this[0].stats.variance,\n        //     \"execution times\": this[0].stats.sample,\n        //     \"cycle\": this[0].times.cycle,\n        //     \"elapsed\": this[0].times.elapsed,\n        //     \"period\": this[0].times.period,\n        //     \"timeStamp\": this[0].times.timeStamp,\n        //     \"count\": this[0].count,\n        //     \"cycles\": this[0].cycles,\n        //     \"hz\": this[0].hz\n        // },\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"mel_bands.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_mel_bands.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_mfcc.js":
/*!*************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_mfcc.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mfcc; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction mfcc(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var MFCCButton = document.querySelector('#mfcc #start_offline');\n  var p = document.querySelector('#mfcc #results');\n  var down_elem = document.querySelector('#mfcc #download_results');\n  var meyda_table = document.querySelector('#mfcc #meyda_results #table');\n  var meyda_plot = document.querySelector('#mfcc #meyda_results #plot');\n  var ess_table = document.querySelector('#mfcc #essentia_results #table');\n  var ess_plot = document.querySelector('#mfcc #essentia_results #plot');\n  var stack_plot = document.querySelector('#mfcc #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('MFCC'); // add tests\n\n    suite.add('Meyda#MFCC', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['mfcc'], frame);\n      }\n    }, options).add('Essentia#MFCC', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.MFCC(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      MFCCButton.classList.add('is-loading');\n      MFCCButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      MFCCButton.classList.remove('is-loading');\n      MFCCButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution MFCC - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution MFCC - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution MFCC - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"mfcc.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_mfcc.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_onset.js":
/*!**************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_onset.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return onset; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction onset(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var OnsetButton = document.querySelector('#onset #start_offline');\n  var p = document.querySelector('#onset #results');\n  var down_elem = document.querySelector('#onset #download_results');\n  var ess_table = document.querySelector('#onset #essentia_results #table');\n  var ess_plot = document.querySelector('#onset #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('ONSET'); // add tests\n\n    suite.add('Essentia#ONSET', function () {\n      essentia.OnsetRate(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      OnsetButton.classList.add('is-loading');\n      OnsetButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      OnsetButton.classList.remove('is-loading');\n      OnsetButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Onset Rate - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"onset.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_onset.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_perceptual_spread.js":
/*!**************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_perceptual_spread.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return perceptual_spread; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction perceptual_spread(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var PerceptualSpreadBtn = document.querySelector('#perceptual_spread #start_offline');\n  var p = document.querySelector('#perceptual_spread #results');\n  var down_elem = document.querySelector('#perceptual_spread #download_results');\n  var meyda_table = document.querySelector('#perceptual_spread #meyda_results #table');\n  var meyda_plot = document.querySelector('#perceptual_spread #meyda_results #plot');\n  var ess_table = document.querySelector('#perceptual_spread #essentia_results #table');\n  var ess_plot = document.querySelector('#perceptual_spread #essentia_results #plot');\n  var stack_plot = document.querySelector('#perceptual_spread #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('PERCEPTUAL_SPREAD'); // add tests\n\n    suite.add('Meyda#PERCEPTUAL_SPREAD', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['perceptualSpread'], frame);\n      }\n    }, options).add('Essentia#PERCEPTUAL_SPREAD', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.Variance(essentia.BarkBands(essentia.Spectrum(frame_windowed['frame'])['spectrum'], 24)['bands']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      PerceptualSpreadBtn.classList.add('is-loading');\n      PerceptualSpreadBtn.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      PerceptualSpreadBtn.classList.remove('is-loading');\n      PerceptualSpreadBtn.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Perceptual Spread - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Perceptual Spread - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Perceptual Spread - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"perceptual_spread.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_perceptual_spread.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_power_spectrum.js":
/*!***********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_power_spectrum.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return power_spectrum; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction power_spectrum(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var PowerSpectrumButton = document.querySelector('#power_spectrum #start_offline');\n  var p = document.querySelector('#power_spectrum #results');\n  var down_elem = document.querySelector('#power_spectrum #download_results');\n  var meyda_table = document.querySelector('#power_spectrum #meyda_results #table');\n  var meyda_plot = document.querySelector('#power_spectrum #meyda_results #plot');\n  var ess_table = document.querySelector('#power_spectrum #essentia_results #table');\n  var ess_plot = document.querySelector('#power_spectrum #essentia_results #plot');\n  var stack_plot = document.querySelector('#power_spectrum #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('Power Spectrum'); // add tests\n\n    suite.add('Meyda#PowerSpectrum', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['powerSpectrum'], frame);\n      }\n    }, options).add('Essentia#PowerSpectrum', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.PowerSpectrum(frame_windowed['frame']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      PowerSpectrumButton.classList.add('is-loading');\n      PowerSpectrumButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      PowerSpectrumButton.classList.remove('is-loading');\n      PowerSpectrumButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Power Spectrum - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Power Spectrum - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Power Spectrum - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"power_spectrum.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_power_spectrum.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_rms.js":
/*!************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_rms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rms; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction rms(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var RMSButton = document.querySelector('#rms #start_offline');\n  var p = document.querySelector('#rms #results');\n  var down_elem = document.querySelector('#rms #download_results');\n  var meyda_table = document.querySelector('#rms #meyda_results #table');\n  var meyda_plot = document.querySelector('#rms #meyda_results #plot');\n  var ess_table = document.querySelector('#rms #essentia_results #table');\n  var ess_plot = document.querySelector('#rms #essentia_results #plot');\n  var stack_plot = document.querySelector('#rms #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('RMS'); // add tests\n\n    suite.add('Meyda#RMS', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['rms'], frame);\n      }\n    }, options).add('Essentia#RMS', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        essentia.RMS(frames.get(i));\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      RMSButton.classList.add('is-loading');\n      RMSButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name'));\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      RMSButton.classList.remove('is-loading');\n      RMSButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution RMS - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution RMS - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution RMS - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"rms.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_rms.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_spec_rolloff.js":
/*!*********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_spec_rolloff.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spectral_rolloff; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction spectral_rolloff(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var SpecRollofButton = document.querySelector('#spec_rolloff #start_offline');\n  var p = document.querySelector('#spec_rolloff #results');\n  var down_elem = document.querySelector('#spec_rolloff #download_results');\n  var meyda_table = document.querySelector('#spec_rolloff #meyda_results #table');\n  var meyda_plot = document.querySelector('#spec_rolloff #meyda_results #plot');\n  var ess_table = document.querySelector('#spec_rolloff #essentia_results #table');\n  var ess_plot = document.querySelector('#spec_rolloff #essentia_results #plot');\n  var stack_plot = document.querySelector('#spec_rolloff #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('SPECTRAL_ROLLOFF'); // add tests\n\n    suite.add('Meyda#SPEC_ROLLOFF', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['spectralRolloff'], frame);\n      }\n    }, options).add('Essentia#SPEC_ROLLOFF', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.RollOff(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      SpecRollofButton.classList.add('is-loading');\n      SpecRollofButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      SpecRollofButton.classList.remove('is-loading');\n      SpecRollofButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Spectral RollOff - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral RollOff - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral RollOff - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"spectral_rolloff.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_spec_rolloff.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_spectral_centroid.js":
/*!**************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_spectral_centroid.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spectralCentroid; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction spectralCentroid(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var SpectralCentroidButton = document.querySelector('#spectral_centroid #start_offline');\n  var p = document.querySelector('#spectral_centroid #results');\n  var down_elem = document.querySelector('#spectral_centroid #download_results');\n  var meyda_table = document.querySelector('#spectral_centroid #meyda_results #table');\n  var meyda_plot = document.querySelector('#spectral_centroid #meyda_results #plot');\n  var ess_table = document.querySelector('#spectral_centroid #essentia_results #table');\n  var ess_plot = document.querySelector('#spectral_centroid #essentia_results #plot');\n  var stack_plot = document.querySelector('#spectral_centroid #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('SPECTRAL_CENTROID'); // add tests\n\n    suite.add('Meyda#SPECTRAL_CENTROID', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['spectralCentroid'], frame);\n      }\n    }, options).add('Essentia#SPECTRAL_CENTROID', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.Centroid(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      SpectralCentroidButton.classList.add('is-loading');\n      SpectralCentroidButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      SpectralCentroidButton.classList.remove('is-loading');\n      SpectralCentroidButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Spectral Centroid - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Centroid - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Centroid - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"spectralCentroid.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_spectral_centroid.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_spectral_flatness.js":
/*!**************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_spectral_flatness.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spectralFlatness; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction spectralFlatness(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var SpectralFlatnessButton = document.querySelector('#spectral_flatness #start_offline');\n  var p = document.querySelector('#spectral_flatness #results');\n  var down_elem = document.querySelector('#spectral_flatness #download_results');\n  var meyda_table = document.querySelector('#spectral_flatness #meyda_results #table');\n  var meyda_plot = document.querySelector('#spectral_flatness #meyda_results #plot');\n  var ess_table = document.querySelector('#spectral_flatness #essentia_results #table');\n  var ess_plot = document.querySelector('#spectral_flatness #essentia_results #plot');\n  var stack_plot = document.querySelector('#spectral_flatness #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('SPECTRAL_FLATNESS'); // add tests\n\n    suite.add('Meyda#SPECTRAL_FLATNESS', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['spectralFlatness'], frame);\n      }\n    }, options).add('Essentia#SPECTRAL_FLATNESS', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.Flatness(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      SpectralFlatnessButton.classList.add('is-loading');\n      SpectralFlatnessButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      SpectralFlatnessButton.classList.remove('is-loading');\n      SpectralFlatnessButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Spectral Flatness - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Flatness - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Flatness - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"spectralFlatness.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_spectral_flatness.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_spectral_flux.js":
/*!**********************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_spectral_flux.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spectralFlux; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction spectralFlux(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var SpectralFluxButton = document.querySelector('#spectral_flux #start_offline');\n  var p = document.querySelector('#spectral_flux #results');\n  var down_elem = document.querySelector('#spectral_flux #download_results');\n  var meyda_table = document.querySelector('#spectral_flux #meyda_results #table');\n  var meyda_plot = document.querySelector('#spectral_flux #meyda_results #plot');\n  var ess_table = document.querySelector('#spectral_flux #essentia_results #table');\n  var ess_plot = document.querySelector('#spectral_flux #essentia_results #plot');\n  var stack_plot = document.querySelector('#spectral_flux #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('SPECTRAL_FLUX'); // add tests\n\n    suite.add('Meyda#SPECTRAL_FLUX', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['spectralFlux'], frame);\n      }\n    }, options).add('Essentia#SPECTRAL_FLUX', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        var frame_windowed = essentia.Windowing(frames.get(i), true, FRAME_SIZE);\n        essentia.Flux(essentia.Spectrum(frame_windowed['frame'])['spectrum']);\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      SpectralFluxButton.classList.add('is-loading');\n      SpectralFluxButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      SpectralFluxButton.classList.remove('is-loading');\n      SpectralFluxButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Spectral Flux - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Flux - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Spectral Flux - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"spectralFlux.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_spectral_flux.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_super_flux.js":
/*!*******************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_super_flux.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return key; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction key(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var SuperFluxButton = document.querySelector('#super_flux #start_offline');\n  var p = document.querySelector('#super_flux #results');\n  var down_elem = document.querySelector('#super_flux #download_results');\n  var ess_table = document.querySelector('#super_flux #essentia_results #table');\n  var ess_plot = document.querySelector('#super_flux #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('SUPERFLUX'); // add tests\n\n    suite.add('Essentia#SUPERFLUX', function () {\n      essentia.SuperFluxExtractor(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      SuperFluxButton.classList.add('is-loading');\n      SuperFluxButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      SuperFluxButton.classList.remove('is-loading');\n      SuperFluxButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Super Flux Extractor - Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"super_flux.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_super_flux.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_tuning_frequency.js":
/*!*************************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_tuning_frequency.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tuning_frequency; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction tuning_frequency(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var TuningFreqButton = document.querySelector('#tuning_frequency #start_offline');\n  var p = document.querySelector('#tuning_frequency #results');\n  var down_elem = document.querySelector('#tuning_frequency #download_results');\n  var ess_table = document.querySelector('#tuning_frequency #essentia_results #table');\n  var ess_plot = document.querySelector('#tuning_frequency #essentia_results #plot');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('TUNINGFREQ'); // add tests\n\n    suite.add('Essentia#TUNINGFREQ', function () {\n      essentia.TuningFrequencyExtractor(essentia.arrayToVector(audioBuffer.getChannelData(0)));\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      TuningFreqButton.classList.add('is-loading');\n      TuningFreqButton.disable = true;\n    }).on('complete', function () {\n      // console.log(this);\n      // TODO: Here attach to the DOM -> SPIKE\n      TuningFreqButton.classList.remove('is-loading');\n      TuningFreqButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[0].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[0].stats.sample, \"red\"]\n      }, \"Time distribution Tuning Frequency Extractor- Essentia\");\n      var resultsObj = {\n        \"essentia\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"tuning_frequency_extractor.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_tuning_frequency.js?");

/***/ }),

/***/ "./src/js/Benchmarks/offline/suite_zcr.js":
/*!************************************************!*\
  !*** ./src/js/Benchmarks/offline/suite_zcr.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return zcr; });\n/* harmony import */ var _utils_getFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getFile */ \"./src/js/utils/getFile.js\");\n/* harmony import */ var _utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/downloadJson */ \"./src/js/utils/downloadJson.js\");\n/* harmony import */ var _utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/violinDistributionPlot */ \"./src/js/utils/violinDistributionPlot.js\");\n/* harmony import */ var _utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/showResultsTable */ \"./src/js/utils/showResultsTable.js\");\n\n\n\n\nfunction zcr(essentia, Meyda, audioURL, audioContext) {\n  // const audioContext = new AudioContext();\n  var FRAME_SIZE = 2048;\n  var HOP_SIZE = 1024;\n  var ZCRButton = document.querySelector('#zcr #start_offline');\n  var p = document.querySelector('#zcr #results');\n  var down_elem = document.querySelector('#zcr #download_results');\n  var meyda_table = document.querySelector('#zcr #meyda_results #table');\n  var meyda_plot = document.querySelector('#zcr #meyda_results #plot');\n  var ess_table = document.querySelector('#zcr #essentia_results #table');\n  var ess_plot = document.querySelector('#zcr #essentia_results #plot');\n  var stack_plot = document.querySelector('#zcr #essentia_results #plot_stack');\n  var repetitionsInput = document.getElementById('repetitions');\n  var repetitions = repetitionsInput.value;\n  var options = repetitions ? {\n    minSamples: repetitions,\n    initCount: 1,\n    minTime: -Infinity,\n    maxTime: -Infinity\n  } : {};\n  Object(_utils_getFile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(audioContext, audioURL).then(function (audioBuffer) {\n    var suite = new Benchmark.Suite('ZCR'); // add tests\n\n    suite.add('Meyda#ZCR', function () {\n      for (var i = 0; i < audioBuffer.length / HOP_SIZE; i++) {\n        Meyda.bufferSize = FRAME_SIZE;\n        var frame = audioBuffer.getChannelData(0).slice(HOP_SIZE * i, HOP_SIZE * i + FRAME_SIZE);\n        var lastFrame = void 0;\n\n        if (frame.length !== FRAME_SIZE) {\n          lastFrame = new Float32Array(FRAME_SIZE);\n          audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE * i);\n          frame = lastFrame;\n        }\n\n        Meyda.extract(['zcr'], frame);\n      }\n    }, options).add('Essentia#ZCR', function () {\n      var frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);\n\n      for (var i = 0; i < frames.size(); i++) {\n        essentia.ZeroCrossingRate(frames.get(i));\n      }\n    }, options) // add listeners\n    .on('cycle', function (event) {\n      console.log(String(event.target));\n      console.log('New Cycle!');\n    }).on('start', function () {\n      ZCRButton.classList.add('is-loading');\n      ZCRButton.disable = true;\n    }).on('complete', function () {\n      console.log(this);\n      console.log('Fastest is ' + this.filter('fastest').map('name')); // TODO: Here attach to the DOM -> SPIKE\n\n      p.textContent = 'Fastest is ' + this.filter('fastest').map('name');\n      ZCRButton.classList.remove('is-loading');\n      ZCRButton.disable = false;\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(meyda_table, this[0].stats);\n      Object(_utils_showResultsTable__WEBPACK_IMPORTED_MODULE_3__[\"showResultsTable\"])(ess_table, this[1].stats);\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meyda_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"]\n      }, \"Time distribution Zero Crossing Rate - Meyda\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ess_plot, {\n        0: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Zero Crossing Rate - Essentia\");\n      Object(_utils_violinDistributionPlot__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stack_plot, {\n        0: [\"meyda\", this[0].stats.sample, \"green\"],\n        1: [\"essentia.js\", this[1].stats.sample, \"red\"]\n      }, \"Time distribution Zero Crossing Rate - Stack\");\n      var resultsObj = {\n        \"meyda\": {\n          \"mean\": this[0].stats.mean,\n          \"moe\": this[0].stats.moe,\n          \"rme\": this[0].stats.rme,\n          \"sem\": this[0].stats.sem,\n          \"deviation\": this[0].stats.deviation,\n          \"variance\": this[0].stats.variance,\n          \"execution times\": this[0].stats.sample,\n          \"cycle\": this[0].times.cycle,\n          \"elapsed\": this[0].times.elapsed,\n          \"period\": this[0].times.period,\n          \"timeStamp\": this[0].times.timeStamp,\n          \"count\": this[0].count,\n          \"cycles\": this[0].cycles,\n          \"hz\": this[0].hz\n        },\n        \"essentia\": {\n          \"mean\": this[1].stats.mean,\n          \"moe\": this[1].stats.moe,\n          \"rme\": this[1].stats.rme,\n          \"sem\": this[1].stats.sem,\n          \"deviation\": this[1].stats.deviation,\n          \"variance\": this[1].stats.variance,\n          \"execution times\": this[1].stats.sample,\n          \"cycle\": this[1].times.cycle,\n          \"elapsed\": this[1].times.elapsed,\n          \"period\": this[1].times.period,\n          \"timeStamp\": this[1].times.timeStamp,\n          \"count\": this[1].count,\n          \"cycles\": this[1].cycles,\n          \"hz\": this[1].hz\n        }\n      };\n      Object(_utils_downloadJson__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(resultsObj, \"zcr.json\", down_elem);\n    }) // run async\n    .run({\n      'async': true\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/js/Benchmarks/offline/suite_zcr.js?");

/***/ }),

/***/ "./src/js/data/data.js":
/*!*****************************!*\
  !*** ./src/js/data/data.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar data = [{\n  title: \"Time Domain Features\",\n  childs: [{\n    title: \"Energy\",\n    id: 'energy'\n  }, {\n    title: \"RMS\",\n    id: \"rms\"\n  }, {\n    title: \"Zero Crossing Rate\",\n    id: \"zcr\"\n  }]\n}, {\n  title: \"Spectral Features\",\n  childs: [{\n    title: \"Amplitude Spectrum\",\n    id: \"amplitude_spectrum\"\n  }, {\n    title: \"Power Spectrum\",\n    id: \"power_spectrum\"\n  }, {\n    title: \"Spectral Centroid\",\n    id: \"spectral_centroid\"\n  }, {\n    title: \"Spectral Flatness\",\n    id: \"spectral_flatness\"\n  }, {\n    title: \"Spectral Flux\",\n    id: \"spectral_flux\"\n  }, {\n    title: \"Spectral RollOff\",\n    id: \"spec_rolloff\"\n  }, {\n    title: \"Distribution Shape\",\n    id: \"dist_shape\"\n  }, {\n    title: \"MFCC\",\n    id: \"mfcc\"\n  }, {\n    title: \"Mel Bands\",\n    id: \"mel_bands\"\n  }, {\n    title: \"Loudness\",\n    id: \"loudness\"\n  }, {\n    title: \"Perceptual Spread\",\n    id: \"perceptual_spread\"\n  }]\n}, {\n  title: \"All time domain and Spectral features (Above)\",\n  childs: [{\n    title: \"All Time and Spectral\",\n    id: \"all_time_freq\"\n  }]\n}, {\n  title: \"Tonal Features\",\n  childs: [{\n    title: \"HCPC (Chroma)\",\n    id: \"hpcp\"\n  }, {\n    title: \"Key Extractor\",\n    id: \"key\"\n  }, {\n    title: \"Tuning Frequency Extractor\",\n    id: \"tuning_frequency\"\n  }]\n}, {\n  title: \"Rhythm\",\n  childs: [{\n    title: \"Onset Rate\",\n    id: \"onset\"\n  }, {\n    title: \"Super Flux Extractor\",\n    id: \"super_flux\"\n  }, {\n    title: \"Beats Zapata Extractor\",\n    id: \"beats_zapata\"\n  }, {\n    title: \"Beats Degara Extractor\",\n    id: \"beats_degara\"\n  }]\n}, {\n  title: \"Loudness\",\n  childs: [{\n    title: \"Loudness EBUR128\",\n    id: \"ebur128\"\n  }, {\n    title: \"Compute Pitch PYIN\",\n    id: \"pyin\"\n  }, {\n    title: \"Compute Pitch YIN\",\n    id: \"yin\"\n  }, {\n    title: \"Compute Pitch YIN (fft)\",\n    id: \"yin_fft\"\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/js/data/data.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Benchmarks_offline_suite_energy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Benchmarks/offline/suite_energy */ \"./src/js/Benchmarks/offline/suite_energy.js\");\n/* harmony import */ var _Benchmarks_offline_suite_rms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Benchmarks/offline/suite_rms */ \"./src/js/Benchmarks/offline/suite_rms.js\");\n/* harmony import */ var _Benchmarks_offline_suite_zcr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Benchmarks/offline/suite_zcr */ \"./src/js/Benchmarks/offline/suite_zcr.js\");\n/* harmony import */ var _Benchmarks_offline_suite_amplitude_spectrum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Benchmarks/offline/suite_amplitude_spectrum */ \"./src/js/Benchmarks/offline/suite_amplitude_spectrum.js\");\n/* harmony import */ var _Benchmarks_offline_suite_power_spectrum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Benchmarks/offline/suite_power_spectrum */ \"./src/js/Benchmarks/offline/suite_power_spectrum.js\");\n/* harmony import */ var _Benchmarks_offline_suite_spectral_centroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Benchmarks/offline/suite_spectral_centroid */ \"./src/js/Benchmarks/offline/suite_spectral_centroid.js\");\n/* harmony import */ var _Benchmarks_offline_suite_spectral_flatness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Benchmarks/offline/suite_spectral_flatness */ \"./src/js/Benchmarks/offline/suite_spectral_flatness.js\");\n/* harmony import */ var _Benchmarks_offline_suite_spectral_flux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Benchmarks/offline/suite_spectral_flux */ \"./src/js/Benchmarks/offline/suite_spectral_flux.js\");\n/* harmony import */ var _Benchmarks_offline_suite_spec_rolloff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Benchmarks/offline/suite_spec_rolloff */ \"./src/js/Benchmarks/offline/suite_spec_rolloff.js\");\n/* harmony import */ var _Benchmarks_offline_suite_distribution_shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Benchmarks/offline/suite_distribution_shape */ \"./src/js/Benchmarks/offline/suite_distribution_shape.js\");\n/* harmony import */ var _Benchmarks_offline_suite_mfcc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Benchmarks/offline/suite_mfcc */ \"./src/js/Benchmarks/offline/suite_mfcc.js\");\n/* harmony import */ var _Benchmarks_offline_suite_mel_bands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Benchmarks/offline/suite_mel_bands */ \"./src/js/Benchmarks/offline/suite_mel_bands.js\");\n/* harmony import */ var _Benchmarks_offline_suite_loudness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Benchmarks/offline/suite_loudness */ \"./src/js/Benchmarks/offline/suite_loudness.js\");\n/* harmony import */ var _Benchmarks_offline_suite_perceptual_spread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Benchmarks/offline/suite_perceptual_spread */ \"./src/js/Benchmarks/offline/suite_perceptual_spread.js\");\n/* harmony import */ var _Benchmarks_offline_suite_all_time_domain_and_spectral_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Benchmarks/offline/suite_all_time_domain_and_spectral_features */ \"./src/js/Benchmarks/offline/suite_all_time_domain_and_spectral_features.js\");\n/* harmony import */ var _Benchmarks_offline_suite_hpcp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Benchmarks/offline/suite_hpcp */ \"./src/js/Benchmarks/offline/suite_hpcp.js\");\n/* harmony import */ var _Benchmarks_offline_suite_key__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Benchmarks/offline/suite_key */ \"./src/js/Benchmarks/offline/suite_key.js\");\n/* harmony import */ var _Benchmarks_offline_suite_tuning_frequency__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Benchmarks/offline/suite_tuning_frequency */ \"./src/js/Benchmarks/offline/suite_tuning_frequency.js\");\n/* harmony import */ var _Benchmarks_offline_suite_onset__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Benchmarks/offline/suite_onset */ \"./src/js/Benchmarks/offline/suite_onset.js\");\n/* harmony import */ var _Benchmarks_offline_suite_super_flux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Benchmarks/offline/suite_super_flux */ \"./src/js/Benchmarks/offline/suite_super_flux.js\");\n/* harmony import */ var _Benchmarks_offline_suite_beats_zapata__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Benchmarks/offline/suite_beats_zapata */ \"./src/js/Benchmarks/offline/suite_beats_zapata.js\");\n/* harmony import */ var _Benchmarks_offline_suite_beats_degara__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Benchmarks/offline/suite_beats_degara */ \"./src/js/Benchmarks/offline/suite_beats_degara.js\");\n/* harmony import */ var _Benchmarks_offline_suite_loudnessEBUR128__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Benchmarks/offline/suite_loudnessEBUR128 */ \"./src/js/Benchmarks/offline/suite_loudnessEBUR128.js\");\n/* harmony import */ var _Benchmarks_offline_suite_compute_pyin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Benchmarks/offline/suite_compute_pyin */ \"./src/js/Benchmarks/offline/suite_compute_pyin.js\");\n/* harmony import */ var _Benchmarks_offline_suite_compute_yin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Benchmarks/offline/suite_compute_yin */ \"./src/js/Benchmarks/offline/suite_compute_yin.js\");\n/* harmony import */ var _Benchmarks_offline_suite_compute_yin_fft__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Benchmarks/offline/suite_compute_yin_fft */ \"./src/js/Benchmarks/offline/suite_compute_yin_fft.js\");\n/* harmony import */ var _utils_generateBencharkSet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/generateBencharkSet */ \"./src/js/utils/generateBencharkSet.js\");\n/* harmony import */ var _src_css_styles_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../src/css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _src_css_styles_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_src_css_styles_css__WEBPACK_IMPORTED_MODULE_27__);\n// IMPORTS\nvar Meyda = __webpack_require__(/*! meyda */ \"./node_modules/meyda/dist/web/meyda.min.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Import CSS\n\n\nObject(_utils_generateBencharkSet__WEBPACK_IMPORTED_MODULE_26__[\"default\"])(); // DOM ELEMENTS\n\nvar EnergyButton = document.querySelector('#energy #start_offline');\nvar RMSButton = document.querySelector('#rms #start_offline');\nvar ZCRButton = document.querySelector('#zcr #start_offline');\nvar AmplitudeSpectralButton = document.querySelector('#amplitude_spectrum #start_offline');\nvar PowerSpectrumButton = document.querySelector('#power_spectrum #start_offline');\nvar SpectralCentroidButton = document.querySelector('#spectral_centroid #start_offline');\nvar SpectralFlatnessButton = document.querySelector('#spectral_flatness #start_offline');\nvar SpectralFluxButton = document.querySelector('#spectral_flux #start_offline');\nvar SpecRolloffButton = document.querySelector('#spec_rolloff #start_offline');\nvar DistShapeButton = document.querySelector('#dist_shape #start_offline');\nvar MFCCButton = document.querySelector('#mfcc #start_offline');\nvar MelBandsButton = document.querySelector('#mel_bands #start_offline');\nvar LoudnessButton = document.querySelector('#loudness #start_offline');\nvar PerceptualSpreadButton = document.querySelector('#perceptual_spread #start_offline');\nvar AllTimeFreqButton = document.querySelector('#all_time_freq #start_offline');\nvar HPCPButton = document.querySelector('#hpcp #start_offline');\nvar KeyButton = document.querySelector('#key #start_offline');\nvar TuningFreqButton = document.querySelector('#tuning_frequency #start_offline');\nvar OnsetButton = document.querySelector('#onset #start_offline');\nvar SuperFluxButton = document.querySelector('#super_flux #start_offline');\nvar BeatsZapataButton = document.querySelector('#beats_zapata #start_offline');\nvar BeatsDegaraButton = document.querySelector('#beats_degara #start_offline');\nvar Ebur128Button = document.querySelector('#ebur128 #start_offline');\nvar PYINButton = document.querySelector('#pyin #start_offline');\nvar YINButton = document.querySelector('#yin #start_offline');\nvar YINFFTButton = document.querySelector('#yin_fft #start_offline'); //Custom Variables\n\nvar essentia;\nloadEssentia();\nvar audioURL = 'https://docs.google.com/uc?export=download&id=1NRi0D4DTmxBcEkPfexfyrtRe9kPuj-Zp';\nvar AudioContext = window.AudioContext // Default\n|| window.webkitAudioContext // Safari and old versions of Chrome\n|| false;\n\nif (AudioContext) {\n  // Do whatever you want using the Web Audio API\n  var ctx = new AudioContext(); // ...\n} else {\n  // Web Audio API is not supported\n  // Alert the user\n  alert(\"Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox\");\n}\n/**\n * START HERE WITH ALL SUITES\n */\n\n\nEnergyButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_energy__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nRMSButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_rms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nZCRButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_zcr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nAmplitudeSpectralButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_amplitude_spectrum__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nPowerSpectrumButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_power_spectrum__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nSpectralCentroidButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_spectral_centroid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nSpectralFlatnessButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_spectral_flatness__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nSpectralFluxButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_spectral_flux__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nSpecRolloffButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_spec_rolloff__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nDistShapeButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_distribution_shape__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nMFCCButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_mfcc__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nMelBandsButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_mel_bands__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nLoudnessButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_loudness__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nPerceptualSpreadButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_perceptual_spread__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nAllTimeFreqButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_all_time_domain_and_spectral_features__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nHPCPButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_hpcp__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nKeyButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_key__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nTuningFreqButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_tuning_frequency__WEBPACK_IMPORTED_MODULE_17__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nOnsetButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_onset__WEBPACK_IMPORTED_MODULE_18__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nSuperFluxButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_super_flux__WEBPACK_IMPORTED_MODULE_19__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nBeatsZapataButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_beats_zapata__WEBPACK_IMPORTED_MODULE_20__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nBeatsDegaraButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_beats_degara__WEBPACK_IMPORTED_MODULE_21__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nEbur128Button.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_loudnessEBUR128__WEBPACK_IMPORTED_MODULE_22__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nPYINButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_compute_pyin__WEBPACK_IMPORTED_MODULE_23__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nYINButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_compute_yin__WEBPACK_IMPORTED_MODULE_24__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\nYINFFTButton.addEventListener('click', function () {\n  return Object(_Benchmarks_offline_suite_compute_yin_fft__WEBPACK_IMPORTED_MODULE_25__[\"default\"])(essentia, Meyda, audioURL, ctx);\n});\n\nfunction loadEssentia() {\n  EssentiaModule().then(function (EssentiaWasmModule) {\n    essentia = new Essentia(EssentiaWasmModule);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/downloadJson.js":
/*!**************************************!*\
  !*** ./src/js/utils/downloadJson.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return downloadJson; });\nfunction downloadJson(jsonObj, fileName, downElem) {\n  var dataStr = \"data:text/json;charset=utf-8,\" + encodeURIComponent(JSON.stringify(jsonObj));\n  downElem.setAttribute(\"href\", dataStr);\n  downElem.setAttribute(\"download\", fileName);\n  downElem.click();\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/downloadJson.js?");

/***/ }),

/***/ "./src/js/utils/generateBencharkSet.js":
/*!*********************************************!*\
  !*** ./src/js/utils/generateBencharkSet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data */ \"./src/js/data/data.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var mainContainer = document.getElementById(\"main-container\");\n  /**\n   * Main Loop\n   */\n\n  _data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (element) {\n    mainContainer.appendChild(createHeaderElement('h3', element.title, 'title'));\n    mainContainer.appendChild(createNotificationBlocks(element));\n  });\n  /**\n   * Create a block where algotithms are grouped\n   * @param {object} element \n   */\n\n  function createNotificationBlocks(element) {\n    var mainDiv = document.createElement('div');\n    mainDiv.classList.add('container');\n    element.childs.forEach(function (childEl) {\n      mainDiv.appendChild(createNotificationSubBlock(childEl));\n    });\n    return mainDiv;\n  }\n  /**\n   * Creates the Nedeed elements for one algorithm.\n   * @param {object} childEl \n   */\n\n\n  function createNotificationSubBlock(childEl) {\n    var notiDiv = document.createElement('div');\n    notiDiv.className = \"notification\";\n    notiDiv.setAttribute(\"id\", childEl.id);\n    notiDiv.appendChild(createHeaderElement('h4', childEl.title, 'subtitle'));\n    notiDiv.innerHTML += createColumnsBlock();\n    return notiDiv;\n  }\n  /**\n   * \n   * @param {string} type \n   * @param {string} title \n   * @param {string} className \n   */\n\n\n  function createHeaderElement(type, title, className) {\n    var headerEl = document.createElement(type);\n    headerEl.textContent = title;\n    headerEl.classList.add(className);\n    return headerEl;\n  }\n  /**\n   * Template for Columns Blocks\n   */\n\n\n  function createColumnsBlock() {\n    var template = \"\\n        <div class=\\\"columns is-mobile is-centered\\\">\\n            <div class=\\\"column\\\">\\n                <div class=\\\"buttons\\\">\\n                    <button id=\\\"start_offline\\\" class=\\\"button is-primary\\\">Offline</button>\\n                </div>\\n                <p id=\\\"results\\\"></p>\\n                <a id=\\\"download_results\\\" class=\\\"is-hidden\\\"></a>\\n            </div>\\n            <div class=\\\"column\\\" id=\\\"essentia_results\\\">\\n                <h4 class=\\\"subtitle is-4\\\">essentia.js results</h4>\\n                <div id=\\\"table\\\"></div>\\n                <div id=\\\"plot\\\"></div>\\n                <div id=\\\"plot_stack\\\"></div>\\n            </div>\\n            <div class=\\\"column\\\" id=\\\"meyda_results\\\">\\n                <h4 class=\\\"subtitle is-4\\\">meyda results</h4>\\n                <div id=\\\"table\\\"></div>\\n                <div id=\\\"plot\\\"></div>\\n            </div>\\n        </div>\\n        \";\n    return template;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/utils/generateBencharkSet.js?");

/***/ }),

/***/ "./src/js/utils/getFile.js":
/*!*********************************!*\
  !*** ./src/js/utils/getFile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getFile; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction getFile(_x, _x2) {\n  return _getFile.apply(this, arguments);\n}\n\nfunction _getFile() {\n  _getFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(audioCtx, filepath) {\n    var response, arrayBuffer, audioBuffer;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(filepath);\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.arrayBuffer();\n\n          case 5:\n            arrayBuffer = _context.sent;\n            _context.next = 8;\n            return audioCtx.decodeAudioData(arrayBuffer);\n\n          case 8:\n            audioBuffer = _context.sent;\n            return _context.abrupt(\"return\", audioBuffer);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getFile.apply(this, arguments);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/getFile.js?");

/***/ }),

/***/ "./src/js/utils/showResultsTable.js":
/*!******************************************!*\
  !*** ./src/js/utils/showResultsTable.js ***!
  \******************************************/
/*! exports provided: showResultsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showResultsTable\", function() { return showResultsTable; });\nfunction showResultsTable(domEL, stats) {\n  var table_div = document.createElement(\"div\");\n  table_div.classList.add('table-container');\n  var table = document.createElement(\"table\");\n  table.classList.add('table', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');\n  /**\n   * Create Table Headers\n   */\n\n  function createHeaders() {\n    var thead = document.createElement(\"thead\");\n    var tr = document.createElement(\"tr\");\n    var th_stats = document.createElement(\"th\");\n    var th_stats_text = document.createTextNode(\"Stats\");\n    th_stats.appendChild(th_stats_text);\n    var th_value = document.createElement(\"th\");\n    var th_value_text = document.createTextNode(\"Value\");\n    th_value.appendChild(th_value_text);\n    tr.appendChild(th_stats);\n    tr.appendChild(th_value);\n    thead.appendChild(tr);\n    return thead;\n  }\n  /**\n   * Creates full table body\n   * @param {*} stats \n   */\n\n\n  function createBody(stats) {\n    var tbody = document.createElement(\"tbody\");\n\n    for (var resultName in stats) {\n      if (resultName === 'sample') {\n        continue;\n      }\n\n      var tr_res = createRow();\n      var nameCell = createCell(resultName);\n      var valueCell = createCell(stats[resultName].toFixed(10));\n      tr_res.appendChild(nameCell);\n      tr_res.appendChild(valueCell);\n      tbody.appendChild(tr_res);\n    }\n\n    return tbody;\n  }\n  /**\n   * Generates a table row\n   */\n\n\n  function createRow() {\n    return document.createElement(\"tr\");\n  }\n  /**\n   * Generates a Cell Row and add the value to its content\n   * @param {*} value \n   */\n\n\n  function createCell(value) {\n    var td = document.createElement(\"td\");\n    var td_text = document.createTextNode(value);\n    td.appendChild(td_text);\n    return td;\n  }\n\n  var headers = createHeaders();\n  var tb = createBody(stats);\n  table.appendChild(headers);\n  table.appendChild(tb);\n  table_div.appendChild(table);\n  domEL.appendChild(table_div);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/showResultsTable.js?");

/***/ }),

/***/ "./src/js/utils/violinDistributionPlot.js":
/*!************************************************!*\
  !*** ./src/js/utils/violinDistributionPlot.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return violinDistributionPlot; });\nfunction violinDistributionPlot(domEl, data, title) {\n  var plot_data = [];\n\n  for (var index in data) {\n    var trace = {\n      type: 'violin',\n      y: data[index][1],\n      name: data[index][0],\n      points: 'none',\n      box: {\n        visible: true\n      },\n      boxpoints: false,\n      line: {\n        color: data[index][2]\n      },\n      opacity: 0.6,\n      meanline: {\n        visible: true\n      }\n    };\n    plot_data.push(trace);\n  }\n\n  var plot_layout = {\n    title: title,\n    yaxis: {\n      zeroline: false\n    }\n  };\n  Plotly.newPlot(domEl, plot_data, plot_layout);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils/violinDistributionPlot.js?");

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi babel-polyfill ./src/js/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/js/index.js?");

/***/ })

/******/ });