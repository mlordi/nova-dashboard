/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue */ "./resources/js/components/Filter.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/resources'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var gridstack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gridstack */ "./node_modules/gridstack/dist/gridstack.js");
/* harmony import */ var _Widget_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget.vue */ "./resources/js/components/Widget.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Filter: _Filter_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Widget: _Widget_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['card', 'lens', 'resourceName', 'viaResource', 'viaResourceId', 'viaRelationship'],
  data: function data() {
    var key = Nova.store.getters['queryStringParams'].view;
    var view = this.card.views.find(function (view) {
      return view.key === key;
    });
    return {
      grid: null,
      activeView: view !== null && view !== void 0 ? view : this.card.views[0]
    };
  },
  mounted: function mounted() {
    this.createGrid();
  },
  unmounted: function unmounted() {
    this.destroyGrid();
  },
  created: function created() {
    var _iterator = _createForOfIteratorHelper(this.card.views),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var view = _step.value;
        var _iterator2 = _createForOfIteratorHelper(view.widgets),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var widget = _step2.value;
            widget.view = view.key;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        this.$store.registerModule(view.key, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/store/resources'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        this.$store.commit("".concat(view.key, "/storeFilters"), view.filters);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  watch: {
    activeView: function activeView() {
      this.createGrid();
    }
  },
  computed: {
    cacheKey: function cacheKey() {
      return "".concat(this.activeView.key, "-widgets");
    }
  },
  methods: {
    destroyGrid: function destroyGrid() {
      if (this.grid) {
        var _this$$refs$gridStack;
        this.grid.offAll();
        this.grid.destroy(false);
        (_this$$refs$gridStack = this.$refs.gridStack) === null || _this$$refs$gridStack === void 0 || _this$$refs$gridStack.removeAttribute('gs-static');
      }
    },
    createGrid: function createGrid() {
      var _this = this;
      this.destroyGrid();
      var margin = 12;
      this.grid = gridstack__WEBPACK_IMPORTED_MODULE_2__.GridStack.init({
        staticGrid: this.activeView["static"],
        cellHeight: this.activeView.cellHeight + margin * 2,
        margin: margin,
        animate: false,
        auto: false
      });
      this.$nextTick(function () {
        var savedWidgets = _this.loadGrid();
        var _iterator3 = _createForOfIteratorHelper(_this.activeView.widgets),
          _step3;
        try {
          var _loop = function _loop() {
            var widget = _step3.value;
            var savedWidget = savedWidgets.find(function (item) {
              return item.id === widget.key;
            });
            var layout = _this.activeView["static"] === true ? widget : savedWidget !== null && savedWidget !== void 0 ? savedWidget : widget;
            _this.grid.makeWidget("#".concat(widget.key), {
              autoPosition: false,
              id: widget.key,
              minW: widget.minWidth,
              minH: widget.minHeight,
              x: layout.x,
              y: layout.y,
              w: layout.width,
              h: layout.height
            });
          };
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        _this.grid.setAnimation(true);
        _this.grid.on('drag', function () {
          return _this.saveGrid();
        });
        _this.grid.on('resize', function () {
          return _this.saveGrid();
        });
      });
    },
    loadGrid: function loadGrid() {
      try {
        var _JSON$parse;
        return (_JSON$parse = JSON.parse(localStorage.getItem(this.cacheKey))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
      } catch (_unused) {
        return [];
      }
    },
    saveGrid: function saveGrid() {
      var nodes = this.grid.engine.nodes.map(function (node) {
        return {
          id: node.id,
          width: node.w,
          height: node.h,
          x: node.x,
          y: node.y
        };
      });
      localStorage.setItem(this.cacheKey, JSON.stringify(nodes));
    },
    onViewChange: function onViewChange(view) {
      this.activeView = view;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/mixins/Filterable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/mixins/InteractsWithQueryString'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var vue_collapsed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-collapsed */ "./node_modules/vue-collapsed/dist/index.mjs");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'laravel-nova-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Collapse: vue_collapsed__WEBPACK_IMPORTED_MODULE_1__.Collapse,
    Button: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'laravel-nova-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'laravel-nova-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/mixins/Filterable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/mixins/InteractsWithQueryString'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  emits: ['toggle'],
  props: ['views', 'activeView', 'filters', 'columns', 'resource', 'resourceName', 'viaResource', 'viaResourceId', 'viaRelationship'],
  data: function data() {
    return {
      expanded: false
    };
  },
  watch: {
    activeView: {
      immediate: true,
      handler: function handler(view) {
        this.updateQueryString({
          view: view.key
        });
      }
    }
  },
  methods: {
    clearFilters: function clearFilters() {
      this.clearSelectedFilters();
      this.notify();
    },
    onChange: function onChange() {
      this.filterChanged();
      this.notify();
    },
    notify: function notify() {
      Nova.$emit("".concat(this.resourceName, "-updated"), this.$store.getters["".concat(this.resourceName, "/currentEncodedFilters")], this.resource);
    },
    onViewToggle: function onViewToggle(view) {
      var _this = this;
      this.$emit('toggle', view);
      this.$nextTick(function () {
        return _this.initializeState();
      });
      if (this.expanded === false) {
        this.expanded = !this.filtersAreApplied;
      }
    }
  },
  computed: {
    filtersAreApplied: function filtersAreApplied() {
      return this.$store.getters["".concat(this.resourceName, "/filtersAreApplied")];
    },
    initialEncodedFilters: function initialEncodedFilters() {
      return this.queryStringParams[this.filterParameter] || '';
    },
    pageParameter: function pageParameter() {
      return 0;
    }
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this2.initializeState();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  beforeMount: function beforeMount() {
    this.expanded = this.filtersAreApplied;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['widget', 'view']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "nova-dashboard min-h-[auto] pt-0"
};
var _hoisted_2 = {
  "class": "flex justify-center w-[calc(100%+24px)] -ml-[12px]"
};
var _hoisted_3 = {
  ref: "gridStack",
  "class": "grid-stack h-full w-full"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Filter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Filter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.activeView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Filter, {
    key: 0,
    lens: $props.lens,
    views: $props.card.views,
    "active-view": $data.activeView,
    resource: $props.resourceName,
    "resource-name": $data.activeView.key,
    columns: $props.card.columns,
    "via-resource": $props.viaResource,
    "via-resource-id": $props.viaResourceId,
    "via-relationship": $props.viaRelationship,
    onToggle: $options.onViewChange
  }, null, 8 /* PROPS */, ["lens", "views", "active-view", "resource", "resource-name", "columns", "via-resource", "via-resource-id", "via-relationship", "onToggle"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Widget v-for=\"widget in activeView.widgets\" :widget=\"widget\" :key=\"widget.key\" :view=\"activeView.key\"/> ")], 512 /* NEED_PATCH */)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1dedfda3"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "mr-2"
};
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = {
  key: 0,
  "class": "py-1"
};
var _hoisted_4 = {
  "class": "toolbar-button pr-2 md:pr-3 flex flex-1 justify-between filter__header"
};
var _hoisted_5 = {
  key: 1,
  "class": "w-full"
};
var _hoisted_6 = {
  "class": "filter__inner bg-gray-900 rounded p-4"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  "class": "flex flex-wrap"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_DropdownMenuItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownMenuItem");
  var _component_ScrollWrap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ScrollWrap");
  var _component_DropdownMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DropdownMenu");
  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");
  var _component_Collapse = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Collapse");
  var _component_Card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Card");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Card, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nova-dashboard-filter mb-4", {
      '--active px-1 pb-1': $options.filtersAreApplied,
      'px-1': !$options.filtersAreApplied,
      '--expanded': $data.expanded
    }]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      '--columns-desktop': $props.columns || 2
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'h-11': $data.expanded,
          'h-14': !$data.expanded
        }, "w-full flex items-center transition-height"])
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
        placement: "bottom-start"
      }, {
        menu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DropdownMenu, {
            width: "auto",
            "class": "px-1"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ScrollWrap, {
                height: 250,
                "class": "divide-y divide-gray-100 dark:divide-gray-800 divide-solid"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [$props.views.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.views, function (view) {
                    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DropdownMenuItem, {
                      key: view.key,
                      as: "button",
                      "class": "border-none",
                      onClick: function onClick() {
                        return $options.onViewToggle(view);
                      },
                      title: view.name
                    }, {
                      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(view.name), 1 /* TEXT */)];
                      }),

                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "title"]);
                  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
                }),
                _: 1 /* STABLE */
              })];
            }),

            _: 1 /* STABLE */
          })];
        }),

        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["shadow-none", {
              'hover:!bg-transparent': !$options.filtersAreApplied
            }]),
            variant: $options.filtersAreApplied ? 'solid' : 'ghost',
            padding: "tight",
            "aria-label": _ctx.__('Views Dropdown')
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              var _$props$activeView$ic;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(_$props$activeView$ic = $props.activeView.icon) !== null && _$props$activeView$ic !== void 0 && (_$props$activeView$ic = _$props$activeView$ic.trim()) !== null && _$props$activeView$ic !== void 0 && _$props$activeView$ic.startsWith('<svg') ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: 0,
                innerHTML: $props.activeView.icon
              }, null, 8 /* PROPS */, _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Icon, {
                key: 1,
                name: $props.activeView.icon
              }, null, 8 /* PROPS */, ["name"]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.activeView.name), 1 /* TEXT */)];
            }),

            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["class", "variant", "aria-label"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [!$options.filtersAreApplied ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        "class": "py-2 w-full text-xs uppercase tracking-wide text-center font-bold focus:outline-none relative flex justify-end items-center",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $data.expanded = !$data.expanded;
        })
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Filters')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
        name: "chevron-down",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["ml-1 transition-all w-4 h-4", {
          'rotate-180': $data.expanded
        }])
      }, null, 8 /* PROPS */, ["class"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.filtersAreApplied ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "py-2 ml-auto block text-xs uppercase tracking-wide font-bold focus:outline-none cursor-pointer",
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.clearFilters && $options.clearFilters.apply($options, arguments);
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Reset Filters')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Collapse, {
        when: $data.expanded
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$props.activeView && $props.activeView.filters.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.activeView.filters, function (filter) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
              key: filter.name,
              "class": "filter__loop"
            }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(filter.component), {
              "filter-key": filter["class"],
              "resource-name": $props.resourceName,
              onChange: $options.onChange,
              onInput: $options.onChange
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["filter-key", "resource-name", "onChange", "onInput"]))]);
          }), 128 /* KEYED_FRAGMENT */))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Collapse, {
            when: !$options.filtersAreApplied
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                "class": "flex justify-center items-center cursor-pointer pb-1",
                onClick: _cache[2] || (_cache[2] = function ($event) {
                  return $data.expanded = !$data.expanded;
                })
              }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
                name: "chevron-up",
                "class": "h-3 translate-y-[2px]"
              })])];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["when"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["when"])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["style", "class"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=template&id=6830466f":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=template&id=6830466f ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _hoisted_1 = ["id"];
var _hoisted_2 = {
  "class": "grid-stack-item-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "grid-stack-item",
    id: $props.widget.key
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($props.widget.component), {
    "class": "h-full w-full",
    key: "".concat($props.widget.component, ".").concat($props.widget.key, ".").concat($props.view),
    card: _objectSpread(_objectSpread({}, $props.widget), {}, {
      uriKey: $props.widget.key
    })
  }, null, 8 /* PROPS */, ["card"]))])], 8 /* PROPS */, _hoisted_1);
}

/***/ }),

/***/ "./resources/js/card.js":
/*!******************************!*\
  !*** ./resources/js/card.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Card.vue */ "./resources/js/components/Card.vue");
/* harmony import */ var _components_Mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mixin */ "./resources/js/components/Mixin.js");


Nova.booting(function (app) {
  var componentFn = app.component;
  (0,_components_Mixin__WEBPACK_IMPORTED_MODULE_1__.registerDashboardMixin)(Nova.pages['Nova.Dashboard'].components['DashboardView']);
  app.component = function (name, component) {
    if (name.endsWith('widget')) {
      (0,_components_Mixin__WEBPACK_IMPORTED_MODULE_1__.registerMixin)(component);
    }
    return componentFn.call(this, name, component);
  };
  app.component('nova-dashboard', _components_Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./resources/js/components/Mixin.js":
/*!******************************************!*\
  !*** ./resources/js/components/Mixin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerDashboardMixin: () => (/* binding */ registerDashboardMixin),
/* harmony export */   registerMixin: () => (/* binding */ registerMixin)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

function registerMixin(component) {
  component.mixins = component.mixins || [];
  component.mixins.push({
    data: function data() {
      return {
        value: this.card.value,
        isLoading: false
      };
    },
    mounted: function mounted() {
      var _this = this;
      Nova.$on("".concat(this.card.view, "-updated"), function (encoded, resource) {
        var data = new FormData();
        data.append("".concat(_this.card.view, "_filter"), encoded);
        data.append('widget', _this.card.key);
        data.append('view', _this.card.view);
        var extraParam = resource ? "/".concat(resource) : '';
        _this.isLoading = true;
        var request = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/util'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Nova.request({
          method: 'post',
          url: "/nova-vendor/nova-dashboard/widget/update".concat(extraParam),
          data: data
        }));
        request.then(function (response) {
          return _this.value = response.data.value;
        })["finally"](function () {
          return _this.isLoading = false;
        });
      });
    }
  });
}
function registerDashboardMixin(component) {
  var originalDashboardEndpoint = component.computed.dashboardEndpoint;
  component.computed.dashboardEndpoint = function () {
    return originalDashboardEndpoint.call(this) + window.location.search;
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: Cannot find module '../../vendor/laravel/nova/tailwind.config'\nRequire stack:\n- C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at _resolve (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:250334)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:252917)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js:1:106\n    at evalModule (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:255614)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:253542)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:37:30\n    at loadConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:39:6)\n    at getTailwindConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:71:116)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:100:92\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\processTailwindFeatures.js:48:11\n    at plugins (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\plugin.js:38:69)\n    at LazyResult.runOnRoot (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:329:16)\n    at LazyResult.runAsync (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:258:26)\n    at async Object.loader (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss-loader\\dist\\index.js:97:14)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: Cannot find module '../../vendor/laravel/nova/tailwind.config'\nRequire stack:\n- C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at _resolve (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:250334)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:252917)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js:1:106\n    at evalModule (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:255614)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:253542)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:37:30\n    at loadConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:39:6)\n    at getTailwindConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:71:116)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:100:92\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\processTailwindFeatures.js:48:11\n    at plugins (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\plugin.js:38:69)\n    at LazyResult.runOnRoot (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:329:16)\n    at LazyResult.runAsync (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:258:26)\n    at async Object.loader (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss-loader\\dist\\index.js:97:14)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: Cannot find module '../../vendor/laravel/nova/tailwind.config'\nRequire stack:\n- C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at _resolve (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:250334)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:252917)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js:1:106\n    at evalModule (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:255614)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:253542)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:37:30\n    at loadConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:39:6)\n    at getTailwindConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:71:116)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:100:92\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\processTailwindFeatures.js:48:11\n    at plugins (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\plugin.js:38:69)\n    at LazyResult.runOnRoot (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:329:16)\n    at LazyResult.runAsync (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:258:26)\n    at async Object.loader (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss-loader\\dist\\index.js:97:14)");

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-base-impl.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-base-impl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDBaseImplement: () => (/* binding */ DDBaseImplement)
/* harmony export */ });
/**
 * dd-base-impl.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */
class DDBaseImplement {
    constructor() {
        /** @internal */
        this._eventRegister = {};
    }
    /** returns the enable state, but you have to call enable()/disable() to change (as other things need to happen) */
    get disabled() { return this._disabled; }
    on(event, callback) {
        this._eventRegister[event] = callback;
    }
    off(event) {
        delete this._eventRegister[event];
    }
    enable() {
        this._disabled = false;
    }
    disable() {
        this._disabled = true;
    }
    destroy() {
        delete this._eventRegister;
    }
    triggerEvent(eventName, event) {
        if (!this.disabled && this._eventRegister && this._eventRegister[eventName])
            return this._eventRegister[eventName](event);
    }
}
//# sourceMappingURL=dd-base-impl.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-draggable.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-draggable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDDraggable: () => (/* binding */ DDDraggable)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dd-base-impl */ "./node_modules/gridstack/dist/dd-base-impl.js");
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dd-touch */ "./node_modules/gridstack/dist/dd-touch.js");
/**
 * dd-draggable.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */




// make sure we are not clicking on known object that handles mouseDown
const skipMouseDown = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
// let count = 0; // TEST
class DDDraggable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_2__.DDBaseImplement {
    constructor(el, option = {}) {
        super();
        /** @internal */
        this.dragScale = { x: 1, y: 1 };
        this.el = el;
        this.option = option;
        // get the element that is actually supposed to be dragged by
        let handleName = option.handle.substring(1);
        this.dragEl = el.classList.contains(handleName) ? el : el.querySelector(option.handle) || el;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseDown = this._mouseDown.bind(this);
        this._mouseMove = this._mouseMove.bind(this);
        this._mouseUp = this._mouseUp.bind(this);
        this.enable();
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        if (this.disabled === false)
            return;
        super.enable();
        this.dragEl.addEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.dragEl.addEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchstart);
            this.dragEl.addEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerdown);
            // this.dragEl.style.touchAction = 'none'; // not needed unlike pointerdown doc comment
        }
        this.el.classList.remove('ui-draggable-disabled');
    }
    disable(forDestroy = false) {
        if (this.disabled === true)
            return;
        super.disable();
        this.dragEl.removeEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.dragEl.removeEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchstart);
            this.dragEl.removeEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerdown);
        }
        if (!forDestroy)
            this.el.classList.add('ui-draggable-disabled');
    }
    destroy() {
        if (this.dragTimeout)
            window.clearTimeout(this.dragTimeout);
        delete this.dragTimeout;
        if (this.dragging)
            this._mouseUp(this.mouseDownEvent);
        this.disable(true);
        delete this.el;
        delete this.helper;
        delete this.option;
        super.destroy();
    }
    updateOption(opts) {
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        return this;
    }
    /** @internal call when mouse goes down before a dragstart happens */
    _mouseDown(e) {
        // don't let more than one widget handle mouseStart
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled)
            return;
        if (e.button !== 0)
            return true; // only left click
        // make sure we are not clicking on known object that handles mouseDown, or ones supplied by the user
        if (e.target.closest(skipMouseDown))
            return true;
        if (this.option.cancel) {
            if (e.target.closest(this.option.cancel))
                return true;
        }
        // REMOVE: why would we get the event if it wasn't for us or child ?
        // make sure we are clicking on a drag handle or child of it...
        // Note: we don't need to check that's handle is an immediate child, as mouseHandled will prevent parents from also handling it (lowest wins)
        // let className = this.option.handle.substring(1);
        // let el = e.target as HTMLElement;
        // while (el && !el.classList.contains(className)) { el = el.parentElement; }
        // if (!el) return;
        this.mouseDownEvent = e;
        delete this.dragging;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
        // document handler so we can continue receiving moves as the item is 'fixed' position, and capture=true so WE get a first crack
        document.addEventListener('mousemove', this._mouseMove, true); // true=capture, not bubble
        document.addEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.dragEl.addEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchmove);
            this.dragEl.addEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchend);
        }
        e.preventDefault();
        // preventDefault() prevents blur event which occurs just after mousedown event.
        // if an editable content has focus, then blur must be call
        if (document.activeElement)
            document.activeElement.blur();
        _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled = true;
        return true;
    }
    /** @internal method to call actual drag event */
    _callDrag(e) {
        if (!this.dragging)
            return;
        const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'drag' });
        if (this.option.drag) {
            this.option.drag(ev, this.ui());
        }
        this.triggerEvent('drag', ev);
    }
    /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
    _mouseMove(e) {
        // console.log(`${count++} move ${e.x},${e.y}`)
        let s = this.mouseDownEvent;
        if (this.dragging) {
            this._dragFollow(e);
            // delay actual grid handling drag until we pause for a while if set
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag) {
                const pause = Number.isInteger(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag) ? _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.pauseDrag : 100;
                if (this.dragTimeout)
                    window.clearTimeout(this.dragTimeout);
                this.dragTimeout = window.setTimeout(() => this._callDrag(e), pause);
            }
            else {
                this._callDrag(e);
            }
        }
        else if (Math.abs(e.x - s.x) + Math.abs(e.y - s.y) > 3) {
            /**
             * don't start unless we've moved at least 3 pixels
             */
            this.dragging = true;
            _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement = this;
            // if we're dragging an actual grid item, set the current drop as the grid (to detect enter/leave)
            let grid = this.el.gridstackNode?.grid;
            if (grid) {
                _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement = grid.el.ddElement.ddDroppable;
            }
            else {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            }
            this.helper = this._createHelper(e);
            this._setupHelperContainmentStyle();
            this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment);
            const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'dragstart' });
            this._setupHelperStyle(e);
            if (this.option.start) {
                this.option.start(ev, this.ui());
            }
            this.triggerEvent('dragstart', ev);
        }
        e.preventDefault(); // needed otherwise we get text sweep text selection as we drag around
        return true;
    }
    /** @internal call when the mouse gets released to drop the item at current location */
    _mouseUp(e) {
        document.removeEventListener('mousemove', this._mouseMove, true);
        document.removeEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.dragEl.removeEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchmove, true);
            this.dragEl.removeEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.touchend, true);
        }
        if (this.dragging) {
            delete this.dragging;
            // reset the drop target if dragging over ourself (already parented, just moving during stop callback below)
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement?.el === this.el.parentElement) {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            }
            this.helperContainment.style.position = this.parentOriginStylePosition || null;
            if (this.helper === this.el) {
                this._removeHelperStyle();
            }
            else {
                this.helper.remove();
            }
            const ev = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.initEvent(e, { target: this.el, type: 'dragstop' });
            if (this.option.stop) {
                this.option.stop(ev); // NOTE: destroy() will be called when removing item, so expect NULL ptr after!
            }
            this.triggerEvent('dragstop', ev);
            // call the droppable method to receive the item
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement) {
                _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement.drop(e);
            }
        }
        delete this.helper;
        delete this.mouseDownEvent;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.mouseHandled;
        e.preventDefault();
    }
    /** @internal create a clone copy (or user defined method) of the original drag item if set */
    _createHelper(event) {
        let helper = this.el;
        if (typeof this.option.helper === 'function') {
            helper = this.option.helper(event);
        }
        else if (this.option.helper === 'clone') {
            helper = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneNode(this.el);
        }
        if (!document.body.contains(helper)) {
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.appendTo(helper, this.option.appendTo === 'parent' ? this.el.parentElement : this.option.appendTo);
        }
        if (helper === this.el) {
            this.dragElementOriginStyle = DDDraggable.originStyleProp.map(prop => this.el.style[prop]);
        }
        return helper;
    }
    /** @internal set the fix position of the dragged item */
    _setupHelperStyle(e) {
        this.helper.classList.add('ui-draggable-dragging');
        // TODO: set all at once with style.cssText += ... ? https://stackoverflow.com/questions/3968593
        const style = this.helper.style;
        style.pointerEvents = 'none'; // needed for over items to get enter/leave
        // style.cursor = 'move'; //  TODO: can't set with pointerEvents=none ! (done in CSS as well)
        style.width = this.dragOffset.width + 'px';
        style.height = this.dragOffset.height + 'px';
        style.willChange = 'left, top';
        style.position = 'fixed'; // let us drag between grids by not clipping as parent .grid-stack is position: 'relative'
        this._dragFollow(e); // now position it
        style.transition = 'none'; // show up instantly
        setTimeout(() => {
            if (this.helper) {
                style.transition = null; // recover animation
            }
        }, 0);
        return this;
    }
    /** @internal restore back the original style before dragging */
    _removeHelperStyle() {
        this.helper.classList.remove('ui-draggable-dragging');
        let node = this.helper?.gridstackNode;
        // don't bother restoring styles if we're gonna remove anyway...
        if (!node?._isAboutToRemove && this.dragElementOriginStyle) {
            let helper = this.helper;
            // don't animate, otherwise we animate offseted when switching back to 'absolute' from 'fixed'.
            // TODO: this also removes resizing animation which doesn't have this issue, but others.
            // Ideally both would animate ('move' would immediately restore 'absolute' and adjust coordinate to match,
            // then trigger a delay (repaint) to restore to final dest with animate) but then we need to make sure 'resizestop'
            // is called AFTER 'transitionend' event is received (see https://github.com/gridstack/gridstack.js/issues/2033)
            let transition = this.dragElementOriginStyle['transition'] || null;
            helper.style.transition = this.dragElementOriginStyle['transition'] = 'none'; // can't be NULL #1973
            DDDraggable.originStyleProp.forEach(prop => helper.style[prop] = this.dragElementOriginStyle[prop] || null);
            setTimeout(() => helper.style.transition = transition, 50); // recover animation from saved vars after a pause (0 isn't enough #1973)
        }
        delete this.dragElementOriginStyle;
        return this;
    }
    /** @internal updates the top/left position to follow the mouse */
    _dragFollow(e) {
        let containmentRect = { left: 0, top: 0 };
        // if (this.helper.style.position === 'absolute') { // we use 'fixed'
        //   const { left, top } = this.helperContainment.getBoundingClientRect();
        //   containmentRect = { left, top };
        // }
        const style = this.helper.style;
        const offset = this.dragOffset;
        style.left = (e.clientX + offset.offsetLeft - containmentRect.left) * this.dragScale.x + 'px';
        style.top = (e.clientY + offset.offsetTop - containmentRect.top) * this.dragScale.y + 'px';
    }
    /** @internal */
    _setupHelperContainmentStyle() {
        this.helperContainment = this.helper.parentElement;
        if (this.helper.style.position !== 'fixed') {
            this.parentOriginStylePosition = this.helperContainment.style.position;
            if (getComputedStyle(this.helperContainment).position.match(/static/)) {
                this.helperContainment.style.position = 'relative';
            }
        }
        return this;
    }
    /** @internal */
    _getDragOffset(event, el, parent) {
        // in case ancestor has transform/perspective css properties that change the viewpoint
        let xformOffsetX = 0;
        let xformOffsetY = 0;
        if (parent) {
            const testEl = document.createElement('div');
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addElStyles(testEl, {
                opacity: '0',
                position: 'fixed',
                top: 0 + 'px',
                left: 0 + 'px',
                width: '1px',
                height: '1px',
                zIndex: '-999999',
            });
            parent.appendChild(testEl);
            const testElPosition = testEl.getBoundingClientRect();
            parent.removeChild(testEl);
            xformOffsetX = testElPosition.left;
            xformOffsetY = testElPosition.top;
            this.dragScale = {
                x: 1 / testElPosition.width,
                y: 1 / testElPosition.height
            };
        }
        const targetOffset = el.getBoundingClientRect();
        return {
            left: targetOffset.left,
            top: targetOffset.top,
            offsetLeft: -event.clientX + targetOffset.left - xformOffsetX,
            offsetTop: -event.clientY + targetOffset.top - xformOffsetY,
            width: targetOffset.width * this.dragScale.x,
            height: targetOffset.height * this.dragScale.y
        };
    }
    /** @internal TODO: set to public as called by DDDroppable! */
    ui() {
        const containmentEl = this.el.parentElement;
        const containmentRect = containmentEl.getBoundingClientRect();
        const offset = this.helper.getBoundingClientRect();
        return {
            position: {
                top: (offset.top - containmentRect.top) * this.dragScale.y,
                left: (offset.left - containmentRect.left) * this.dragScale.x
            }
            /* not used by GridStack for now...
            helper: [this.helper], //The object arr representing the helper that's being dragged.
            offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
            */
        };
    }
}
/** @internal properties we change during dragging, and restore back */
DDDraggable.originStyleProp = ['transition', 'pointerEvents', 'position', 'left', 'top', 'minWidth', 'willChange'];

//# sourceMappingURL=dd-draggable.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-droppable.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-droppable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDDroppable: () => (/* binding */ DDDroppable)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dd-base-impl */ "./node_modules/gridstack/dist/dd-base-impl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dd-touch */ "./node_modules/gridstack/dist/dd-touch.js");
/**
 * dd-droppable.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */




// let count = 0; // TEST
class DDDroppable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__.DDBaseImplement {
    constructor(el, opts = {}) {
        super();
        this.el = el;
        this.option = opts;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
        this.enable();
        this._setupAccept();
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        if (this.disabled === false)
            return;
        super.enable();
        this.el.classList.add('ui-droppable');
        this.el.classList.remove('ui-droppable-disabled');
        this.el.addEventListener('mouseenter', this._mouseEnter);
        this.el.addEventListener('mouseleave', this._mouseLeave);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.el.addEventListener('pointerenter', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerenter);
            this.el.addEventListener('pointerleave', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerleave);
        }
    }
    disable(forDestroy = false) {
        if (this.disabled === true)
            return;
        super.disable();
        this.el.classList.remove('ui-droppable');
        if (!forDestroy)
            this.el.classList.add('ui-droppable-disabled');
        this.el.removeEventListener('mouseenter', this._mouseEnter);
        this.el.removeEventListener('mouseleave', this._mouseLeave);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_3__.isTouch) {
            this.el.removeEventListener('pointerenter', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerenter);
            this.el.removeEventListener('pointerleave', _dd_touch__WEBPACK_IMPORTED_MODULE_3__.pointerleave);
        }
    }
    destroy() {
        this.disable(true);
        this.el.classList.remove('ui-droppable');
        this.el.classList.remove('ui-droppable-disabled');
        super.destroy();
    }
    updateOption(opts) {
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        this._setupAccept();
        return this;
    }
    /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
    _mouseEnter(e) {
        // console.log(`${count++} Enter ${this.el.id || (this.el as GridHTMLElement).gridstack.opts.id}`); // TEST
        if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement)
            return;
        if (!this._canDrop(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement.el))
            return;
        e.preventDefault();
        e.stopPropagation();
        // make sure when we enter this, that the last one gets a leave FIRST to correctly cleanup as we don't always do
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement && _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement !== this) {
            _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement._mouseLeave(e);
        }
        _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement = this;
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'dropover' });
        if (this.option.over) {
            this.option.over(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('dropover', ev);
        this.el.classList.add('ui-droppable-over');
        // console.log('tracking'); // TEST
    }
    /** @internal called when the item is leaving our area, stop tracking if we had moving item */
    _mouseLeave(e) {
        // console.log(`${count++} Leave ${this.el.id || (this.el as GridHTMLElement).gridstack.opts.id}`); // TEST
        if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement || _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement !== this)
            return;
        e.preventDefault();
        e.stopPropagation();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'dropout' });
        if (this.option.out) {
            this.option.out(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('dropout', ev);
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement === this) {
            delete _dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dropElement;
            // console.log('not tracking'); // TEST
            // if we're still over a parent droppable, send it an enter as we don't get one from leaving nested children
            let parentDrop;
            let parent = this.el.parentElement;
            while (!parentDrop && parent) {
                parentDrop = parent.ddElement?.ddDroppable;
                parent = parent.parentElement;
            }
            if (parentDrop) {
                parentDrop._mouseEnter(e);
            }
        }
    }
    /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
    drop(e) {
        e.preventDefault();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(e, { target: this.el, type: 'drop' });
        if (this.option.drop) {
            this.option.drop(ev, this._ui(_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement));
        }
        this.triggerEvent('drop', ev);
    }
    /** @internal true if element matches the string/method accept option */
    _canDrop(el) {
        return el && (!this.accept || this.accept(el));
    }
    /** @internal */
    _setupAccept() {
        if (!this.option.accept)
            return this;
        if (typeof this.option.accept === 'string') {
            this.accept = (el) => el.classList.contains(this.option.accept) || el.matches(this.option.accept);
        }
        else {
            this.accept = this.option.accept;
        }
        return this;
    }
    /** @internal */
    _ui(drag) {
        return {
            draggable: drag.el,
            ...drag.ui()
        };
    }
}
//# sourceMappingURL=dd-droppable.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-element.js":
/*!***************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDElement: () => (/* binding */ DDElement)
/* harmony export */ });
/* harmony import */ var _dd_resizable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-resizable */ "./node_modules/gridstack/dist/dd-resizable.js");
/* harmony import */ var _dd_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dd-draggable */ "./node_modules/gridstack/dist/dd-draggable.js");
/* harmony import */ var _dd_droppable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dd-droppable */ "./node_modules/gridstack/dist/dd-droppable.js");
/**
 * dd-elements.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */



class DDElement {
    static init(el) {
        if (!el.ddElement) {
            el.ddElement = new DDElement(el);
        }
        return el.ddElement;
    }
    constructor(el) {
        this.el = el;
    }
    on(eventName, callback) {
        if (this.ddDraggable && ['drag', 'dragstart', 'dragstop'].indexOf(eventName) > -1) {
            this.ddDraggable.on(eventName, callback);
        }
        else if (this.ddDroppable && ['drop', 'dropover', 'dropout'].indexOf(eventName) > -1) {
            this.ddDroppable.on(eventName, callback);
        }
        else if (this.ddResizable && ['resizestart', 'resize', 'resizestop'].indexOf(eventName) > -1) {
            this.ddResizable.on(eventName, callback);
        }
        return this;
    }
    off(eventName) {
        if (this.ddDraggable && ['drag', 'dragstart', 'dragstop'].indexOf(eventName) > -1) {
            this.ddDraggable.off(eventName);
        }
        else if (this.ddDroppable && ['drop', 'dropover', 'dropout'].indexOf(eventName) > -1) {
            this.ddDroppable.off(eventName);
        }
        else if (this.ddResizable && ['resizestart', 'resize', 'resizestop'].indexOf(eventName) > -1) {
            this.ddResizable.off(eventName);
        }
        return this;
    }
    setupDraggable(opts) {
        if (!this.ddDraggable) {
            this.ddDraggable = new _dd_draggable__WEBPACK_IMPORTED_MODULE_1__.DDDraggable(this.el, opts);
        }
        else {
            this.ddDraggable.updateOption(opts);
        }
        return this;
    }
    cleanDraggable() {
        if (this.ddDraggable) {
            this.ddDraggable.destroy();
            delete this.ddDraggable;
        }
        return this;
    }
    setupResizable(opts) {
        if (!this.ddResizable) {
            this.ddResizable = new _dd_resizable__WEBPACK_IMPORTED_MODULE_0__.DDResizable(this.el, opts);
        }
        else {
            this.ddResizable.updateOption(opts);
        }
        return this;
    }
    cleanResizable() {
        if (this.ddResizable) {
            this.ddResizable.destroy();
            delete this.ddResizable;
        }
        return this;
    }
    setupDroppable(opts) {
        if (!this.ddDroppable) {
            this.ddDroppable = new _dd_droppable__WEBPACK_IMPORTED_MODULE_2__.DDDroppable(this.el, opts);
        }
        else {
            this.ddDroppable.updateOption(opts);
        }
        return this;
    }
    cleanDroppable() {
        if (this.ddDroppable) {
            this.ddDroppable.destroy();
            delete this.ddDroppable;
        }
        return this;
    }
}
//# sourceMappingURL=dd-element.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-gridstack.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-gridstack.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDGridStack: () => (/* binding */ DDGridStack)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/* harmony import */ var _dd_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dd-element */ "./node_modules/gridstack/dist/dd-element.js");
/**
 * dd-gridstack.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */



// let count = 0; // TEST
/**
 * HTML Native Mouse and Touch Events Drag and Drop functionality.
 */
class DDGridStack {
    resizable(el, opts, key, value) {
        this._getDDElements(el).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddResizable && dEl.ddResizable[opts](); // can't create DD as it requires options for setupResizable()
            }
            else if (opts === 'destroy') {
                dEl.ddResizable && dEl.cleanResizable();
            }
            else if (opts === 'option') {
                dEl.setupResizable({ [key]: value });
            }
            else {
                const grid = dEl.el.gridstackNode.grid;
                let handles = dEl.el.getAttribute('gs-resize-handles') ? dEl.el.getAttribute('gs-resize-handles') : grid.opts.resizable.handles;
                let autoHide = !grid.opts.alwaysShowResizeHandle;
                dEl.setupResizable({
                    ...grid.opts.resizable,
                    ...{ handles, autoHide },
                    ...{
                        start: opts.start,
                        stop: opts.stop,
                        resize: opts.resize
                    }
                });
            }
        });
        return this;
    }
    draggable(el, opts, key, value) {
        this._getDDElements(el).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddDraggable && dEl.ddDraggable[opts](); // can't create DD as it requires options for setupDraggable()
            }
            else if (opts === 'destroy') {
                dEl.ddDraggable && dEl.cleanDraggable();
            }
            else if (opts === 'option') {
                dEl.setupDraggable({ [key]: value });
            }
            else {
                const grid = dEl.el.gridstackNode.grid;
                dEl.setupDraggable({
                    ...grid.opts.draggable,
                    ...{
                        // containment: (grid.parentGridItem && !grid.opts.dragOut) ? grid.el.parentElement : (grid.opts.draggable.containment || null),
                        start: opts.start,
                        stop: opts.stop,
                        drag: opts.drag
                    }
                });
            }
        });
        return this;
    }
    dragIn(el, opts) {
        this._getDDElements(el).forEach(dEl => dEl.setupDraggable(opts));
        return this;
    }
    droppable(el, opts, key, value) {
        if (typeof opts.accept === 'function' && !opts._accept) {
            opts._accept = opts.accept;
            opts.accept = (el) => opts._accept(el);
        }
        this._getDDElements(el).forEach(dEl => {
            if (opts === 'disable' || opts === 'enable') {
                dEl.ddDroppable && dEl.ddDroppable[opts]();
            }
            else if (opts === 'destroy') {
                if (dEl.ddDroppable) { // error to call destroy if not there
                    dEl.cleanDroppable();
                }
            }
            else if (opts === 'option') {
                dEl.setupDroppable({ [key]: value });
            }
            else {
                dEl.setupDroppable(opts);
            }
        });
        return this;
    }
    /** true if element is droppable */
    isDroppable(el) {
        return !!(el && el.ddElement && el.ddElement.ddDroppable && !el.ddElement.ddDroppable.disabled);
    }
    /** true if element is draggable */
    isDraggable(el) {
        return !!(el && el.ddElement && el.ddElement.ddDraggable && !el.ddElement.ddDraggable.disabled);
    }
    /** true if element is draggable */
    isResizable(el) {
        return !!(el && el.ddElement && el.ddElement.ddResizable && !el.ddElement.ddResizable.disabled);
    }
    on(el, name, callback) {
        this._getDDElements(el).forEach(dEl => dEl.on(name, (event) => {
            callback(event, _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement ? _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement.el : event.target, _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement ? _dd_manager__WEBPACK_IMPORTED_MODULE_1__.DDManager.dragElement.helper : null);
        }));
        return this;
    }
    off(el, name) {
        this._getDDElements(el).forEach(dEl => dEl.off(name));
        return this;
    }
    /** @internal returns a list of DD elements, creating them on the fly by default */
    _getDDElements(els, create = true) {
        let hosts = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.getElements(els);
        if (!hosts.length)
            return [];
        let list = hosts.map(e => e.ddElement || (create ? _dd_element__WEBPACK_IMPORTED_MODULE_2__.DDElement.init(e) : null));
        if (!create) {
            list.filter(d => d);
        } // remove nulls
        return list;
    }
}
//# sourceMappingURL=dd-gridstack.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-manager.js":
/*!***************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-manager.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDManager: () => (/* binding */ DDManager)
/* harmony export */ });
/**
 * dd-manager.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */
/**
 * globals that are shared across Drag & Drop instances
 */
class DDManager {
}
//# sourceMappingURL=dd-manager.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-resizable-handle.js":
/*!************************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-resizable-handle.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDResizableHandle: () => (/* binding */ DDResizableHandle)
/* harmony export */ });
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-touch */ "./node_modules/gridstack/dist/dd-touch.js");
/**
 * dd-resizable-handle.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */

class DDResizableHandle {
    constructor(host, direction, option) {
        /** @internal true after we've moved enough pixels to start a resize */
        this.moving = false;
        this.host = host;
        this.dir = direction;
        this.option = option;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseDown = this._mouseDown.bind(this);
        this._mouseMove = this._mouseMove.bind(this);
        this._mouseUp = this._mouseUp.bind(this);
        this._init();
    }
    /** @internal */
    _init() {
        const el = document.createElement('div');
        el.classList.add('ui-resizable-handle');
        el.classList.add(`${DDResizableHandle.prefix}${this.dir}`);
        el.style.zIndex = '100';
        el.style.userSelect = 'none';
        this.el = el;
        this.host.appendChild(this.el);
        this.el.addEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.addEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchstart);
            this.el.addEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.pointerdown);
            // this.el.style.touchAction = 'none'; // not needed unlike pointerdown doc comment
        }
        return this;
    }
    /** call this when resize handle needs to be removed and cleaned up */
    destroy() {
        if (this.moving)
            this._mouseUp(this.mouseDownEvent);
        this.el.removeEventListener('mousedown', this._mouseDown);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.removeEventListener('touchstart', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchstart);
            this.el.removeEventListener('pointerdown', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.pointerdown);
        }
        this.host.removeChild(this.el);
        delete this.el;
        delete this.host;
        return this;
    }
    /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
    _mouseDown(e) {
        this.mouseDownEvent = e;
        document.addEventListener('mousemove', this._mouseMove, true); // capture, not bubble
        document.addEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.addEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchmove);
            this.el.addEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchend);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    /** @internal */
    _mouseMove(e) {
        let s = this.mouseDownEvent;
        if (this.moving) {
            this._triggerEvent('move', e);
        }
        else if (Math.abs(e.x - s.x) + Math.abs(e.y - s.y) > 2) {
            // don't start unless we've moved at least 3 pixels
            this.moving = true;
            this._triggerEvent('start', this.mouseDownEvent);
            this._triggerEvent('move', e);
        }
        e.stopPropagation();
        e.preventDefault();
    }
    /** @internal */
    _mouseUp(e) {
        if (this.moving) {
            this._triggerEvent('stop', e);
        }
        document.removeEventListener('mousemove', this._mouseMove, true);
        document.removeEventListener('mouseup', this._mouseUp, true);
        if (_dd_touch__WEBPACK_IMPORTED_MODULE_0__.isTouch) {
            this.el.removeEventListener('touchmove', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchmove);
            this.el.removeEventListener('touchend', _dd_touch__WEBPACK_IMPORTED_MODULE_0__.touchend);
        }
        delete this.moving;
        delete this.mouseDownEvent;
        e.stopPropagation();
        e.preventDefault();
    }
    /** @internal */
    _triggerEvent(name, event) {
        if (this.option[name])
            this.option[name](event);
        return this;
    }
}
/** @internal */
DDResizableHandle.prefix = 'ui-resizable-';

//# sourceMappingURL=dd-resizable-handle.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-resizable.js":
/*!*****************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-resizable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDResizable: () => (/* binding */ DDResizable)
/* harmony export */ });
/* harmony import */ var _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-resizable-handle */ "./node_modules/gridstack/dist/dd-resizable-handle.js");
/* harmony import */ var _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dd-base-impl */ "./node_modules/gridstack/dist/dd-base-impl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/**
 * dd-resizable.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */




class DDResizable extends _dd_base_impl__WEBPACK_IMPORTED_MODULE_1__.DDBaseImplement {
    constructor(el, opts = {}) {
        super();
        /** @internal */
        this.rectScale = { x: 1, y: 1 };
        /** @internal */
        this._ui = () => {
            const containmentEl = this.el.parentElement;
            const containmentRect = containmentEl.getBoundingClientRect();
            const newRect = {
                width: this.originalRect.width,
                height: this.originalRect.height + this.scrolled,
                left: this.originalRect.left,
                top: this.originalRect.top - this.scrolled
            };
            const rect = this.temporalRect || newRect;
            return {
                position: {
                    left: (rect.left - containmentRect.left) * this.rectScale.x,
                    top: (rect.top - containmentRect.top) * this.rectScale.y
                },
                size: {
                    width: rect.width * this.rectScale.x,
                    height: rect.height * this.rectScale.y
                }
                /* Gridstack ONLY needs position set above... keep around in case.
                element: [this.el], // The object representing the element to be resized
                helper: [], // TODO: not support yet - The object representing the helper that's being resized
                originalElement: [this.el],// we don't wrap here, so simplify as this.el //The object representing the original element before it is wrapped
                originalPosition: { // The position represented as { left, top } before the resizable is resized
                  left: this.originalRect.left - containmentRect.left,
                  top: this.originalRect.top - containmentRect.top
                },
                originalSize: { // The size represented as { width, height } before the resizable is resized
                  width: this.originalRect.width,
                  height: this.originalRect.height
                }
                */
            };
        };
        this.el = el;
        this.option = opts;
        // create var event binding so we can easily remove and still look like TS methods (unlike anonymous functions)
        this._mouseOver = this._mouseOver.bind(this);
        this._mouseOut = this._mouseOut.bind(this);
        this.enable();
        this._setupAutoHide(this.option.autoHide);
        this._setupHandlers();
    }
    on(event, callback) {
        super.on(event, callback);
    }
    off(event) {
        super.off(event);
    }
    enable() {
        super.enable();
        this.el.classList.remove('ui-resizable-disabled');
        this._setupAutoHide(this.option.autoHide);
    }
    disable() {
        super.disable();
        this.el.classList.add('ui-resizable-disabled');
        this._setupAutoHide(false);
    }
    destroy() {
        this._removeHandlers();
        this._setupAutoHide(false);
        delete this.el;
        super.destroy();
    }
    updateOption(opts) {
        let updateHandles = (opts.handles && opts.handles !== this.option.handles);
        let updateAutoHide = (opts.autoHide && opts.autoHide !== this.option.autoHide);
        Object.keys(opts).forEach(key => this.option[key] = opts[key]);
        if (updateHandles) {
            this._removeHandlers();
            this._setupHandlers();
        }
        if (updateAutoHide) {
            this._setupAutoHide(this.option.autoHide);
        }
        return this;
    }
    /** @internal turns auto hide on/off */
    _setupAutoHide(auto) {
        if (auto) {
            this.el.classList.add('ui-resizable-autohide');
            // use mouseover and not mouseenter to get better performance and track for nested cases
            this.el.addEventListener('mouseover', this._mouseOver);
            this.el.addEventListener('mouseout', this._mouseOut);
        }
        else {
            this.el.classList.remove('ui-resizable-autohide');
            this.el.removeEventListener('mouseover', this._mouseOver);
            this.el.removeEventListener('mouseout', this._mouseOut);
            if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement === this) {
                delete _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement;
            }
        }
        return this;
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _mouseOver(e) {
        // console.log(`${count++} pre-enter ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        // already over a child, ignore. Ideally we just call e.stopPropagation() but see https://github.com/gridstack/gridstack.js/issues/2018
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement || _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.dragElement)
            return;
        _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement = this;
        // console.log(`${count++} enter ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        this.el.classList.remove('ui-resizable-autohide');
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _mouseOut(e) {
        // console.log(`${count++} pre-leave ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        if (_dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement !== this)
            return;
        delete _dd_manager__WEBPACK_IMPORTED_MODULE_3__.DDManager.overResizeElement;
        // console.log(`${count++} leave ${(this.el as GridItemHTMLElement).gridstackNode._id}`)
        this.el.classList.add('ui-resizable-autohide');
    }
    /** @internal */
    _setupHandlers() {
        let handlerDirection = this.option.handles || 'e,s,se';
        if (handlerDirection === 'all') {
            handlerDirection = 'n,e,s,w,se,sw,ne,nw';
        }
        this.handlers = handlerDirection.split(',')
            .map(dir => dir.trim())
            .map(dir => new _dd_resizable_handle__WEBPACK_IMPORTED_MODULE_0__.DDResizableHandle(this.el, dir, {
            start: (event) => {
                this._resizeStart(event);
            },
            stop: (event) => {
                this._resizeStop(event);
            },
            move: (event) => {
                this._resizing(event, dir);
            }
        }));
        return this;
    }
    /** @internal */
    _resizeStart(event) {
        this.originalRect = this.el.getBoundingClientRect();
        this.scrollEl = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getScrollElement(this.el);
        this.scrollY = this.scrollEl.scrollTop;
        this.scrolled = 0;
        this.startEvent = event;
        this._setupHelper();
        this._applyChange();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resizestart', target: this.el });
        if (this.option.start) {
            this.option.start(ev, this._ui());
        }
        this.el.classList.add('ui-resizable-resizing');
        this.triggerEvent('resizestart', ev);
        return this;
    }
    /** @internal */
    _resizing(event, dir) {
        this.scrolled = this.scrollEl.scrollTop - this.scrollY;
        this.temporalRect = this._getChange(event, dir);
        this._applyChange();
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resize', target: this.el });
        if (this.option.resize) {
            this.option.resize(ev, this._ui());
        }
        this.triggerEvent('resize', ev);
        return this;
    }
    /** @internal */
    _resizeStop(event) {
        const ev = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.initEvent(event, { type: 'resizestop', target: this.el });
        if (this.option.stop) {
            this.option.stop(ev); // Note: ui() not used by gridstack so don't pass
        }
        this.el.classList.remove('ui-resizable-resizing');
        this.triggerEvent('resizestop', ev);
        this._cleanHelper();
        delete this.startEvent;
        delete this.originalRect;
        delete this.temporalRect;
        delete this.scrollY;
        delete this.scrolled;
        return this;
    }
    /** @internal */
    _setupHelper() {
        this.elOriginStyleVal = DDResizable._originStyleProp.map(prop => this.el.style[prop]);
        this.parentOriginStylePosition = this.el.parentElement.style.position;
        const parent = this.el.parentElement;
        const testEl = document.createElement('div');
        _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.addElStyles(testEl, {
            opacity: '0',
            position: 'fixed',
            top: 0 + 'px',
            left: 0 + 'px',
            width: '1px',
            height: '1px',
            zIndex: '-999999',
        });
        parent.appendChild(testEl);
        const testElPosition = testEl.getBoundingClientRect();
        parent.removeChild(testEl);
        this.rectScale = {
            x: 1 / testElPosition.width,
            y: 1 / testElPosition.height
        };
        if (getComputedStyle(this.el.parentElement).position.match(/static/)) {
            this.el.parentElement.style.position = 'relative';
        }
        this.el.style.position = 'absolute';
        this.el.style.opacity = '0.8';
        return this;
    }
    /** @internal */
    _cleanHelper() {
        DDResizable._originStyleProp.forEach((prop, i) => {
            this.el.style[prop] = this.elOriginStyleVal[i] || null;
        });
        this.el.parentElement.style.position = this.parentOriginStylePosition || null;
        return this;
    }
    /** @internal */
    _getChange(event, dir) {
        const oEvent = this.startEvent;
        const newRect = {
            width: this.originalRect.width,
            height: this.originalRect.height + this.scrolled,
            left: this.originalRect.left,
            top: this.originalRect.top - this.scrolled
        };
        const offsetX = event.clientX - oEvent.clientX;
        const offsetY = event.clientY - oEvent.clientY;
        if (dir.indexOf('e') > -1) {
            newRect.width += offsetX;
        }
        else if (dir.indexOf('w') > -1) {
            newRect.width -= offsetX;
            newRect.left += offsetX;
        }
        if (dir.indexOf('s') > -1) {
            newRect.height += offsetY;
        }
        else if (dir.indexOf('n') > -1) {
            newRect.height -= offsetY;
            newRect.top += offsetY;
        }
        const constrain = this._constrainSize(newRect.width, newRect.height);
        if (Math.round(newRect.width) !== Math.round(constrain.width)) { // round to ignore slight round-off errors
            if (dir.indexOf('w') > -1) {
                newRect.left += newRect.width - constrain.width;
            }
            newRect.width = constrain.width;
        }
        if (Math.round(newRect.height) !== Math.round(constrain.height)) {
            if (dir.indexOf('n') > -1) {
                newRect.top += newRect.height - constrain.height;
            }
            newRect.height = constrain.height;
        }
        return newRect;
    }
    /** @internal constrain the size to the set min/max values */
    _constrainSize(oWidth, oHeight) {
        const maxWidth = this.option.maxWidth || Number.MAX_SAFE_INTEGER;
        const minWidth = this.option.minWidth / this.rectScale.x || oWidth;
        const maxHeight = this.option.maxHeight || Number.MAX_SAFE_INTEGER;
        const minHeight = this.option.minHeight / this.rectScale.y || oHeight;
        const width = Math.min(maxWidth, Math.max(minWidth, oWidth));
        const height = Math.min(maxHeight, Math.max(minHeight, oHeight));
        return { width, height };
    }
    /** @internal */
    _applyChange() {
        let containmentRect = { left: 0, top: 0, width: 0, height: 0 };
        if (this.el.style.position === 'absolute') {
            const containmentEl = this.el.parentElement;
            const { left, top } = containmentEl.getBoundingClientRect();
            containmentRect = { left, top, width: 0, height: 0 };
        }
        if (!this.temporalRect)
            return this;
        Object.keys(this.temporalRect).forEach(key => {
            const value = this.temporalRect[key];
            const scaleReciprocal = key === 'width' || key === 'left' ? this.rectScale.x : key === 'height' || key === 'top' ? this.rectScale.y : 1;
            this.el.style[key] = (value - containmentRect[key]) * scaleReciprocal + 'px';
        });
        return this;
    }
    /** @internal */
    _removeHandlers() {
        this.handlers.forEach(handle => handle.destroy());
        delete this.handlers;
        return this;
    }
}
/** @internal */
DDResizable._originStyleProp = ['width', 'height', 'position', 'left', 'top', 'opacity', 'zIndex'];

//# sourceMappingURL=dd-resizable.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/dd-touch.js":
/*!*************************************************!*\
  !*** ./node_modules/gridstack/dist/dd-touch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTouch: () => (/* binding */ isTouch),
/* harmony export */   pointerdown: () => (/* binding */ pointerdown),
/* harmony export */   pointerenter: () => (/* binding */ pointerenter),
/* harmony export */   pointerleave: () => (/* binding */ pointerleave),
/* harmony export */   touchend: () => (/* binding */ touchend),
/* harmony export */   touchmove: () => (/* binding */ touchmove),
/* harmony export */   touchstart: () => (/* binding */ touchstart)
/* harmony export */ });
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/**
 * touch.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */

/**
 * Detect touch support - Windows Surface devices and other touch devices
 * should we use this instead ? (what we had for always showing resize handles)
 * /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
 */
const isTouch = typeof window !== 'undefined' && typeof document !== 'undefined' &&
    ('ontouchstart' in document
        || 'ontouchstart' in window
        // || !!window.TouchEvent // true on Windows 10 Chrome desktop so don't use this
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        || (window.DocumentTouch && document instanceof window.DocumentTouch)
        || navigator.maxTouchPoints > 0
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        || navigator.msMaxTouchPoints > 0);
// interface TouchCoord {x: number, y: number};
class DDTouch {
}
/**
* Get the x,y position of a touch event
*/
// function getTouchCoords(e: TouchEvent): TouchCoord {
//   return {
//     x: e.changedTouches[0].pageX,
//     y: e.changedTouches[0].pageY
//   };
// }
/**
 * Simulate a mouse event based on a corresponding touch event
 * @param {Object} e A touch event
 * @param {String} simulatedType The corresponding mouse event
 */
function simulateMouseEvent(e, simulatedType) {
    // Ignore multi-touch events
    if (e.touches.length > 1)
        return;
    // Prevent "Ignored attempt to cancel a touchmove event with cancelable=false" errors
    if (e.cancelable)
        e.preventDefault();
    const touch = e.changedTouches[0], simulatedEvent = document.createEvent('MouseEvents');
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(simulatedType, // type
    true, // bubbles
    true, // cancelable
    window, // view
    1, // detail
    touch.screenX, // screenX
    touch.screenY, // screenY
    touch.clientX, // clientX
    touch.clientY, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button
    null // relatedTarget
    );
    // Dispatch the simulated event to the target element
    e.target.dispatchEvent(simulatedEvent);
}
/**
 * Simulate a mouse event based on a corresponding Pointer event
 * @param {Object} e A pointer event
 * @param {String} simulatedType The corresponding mouse event
 */
function simulatePointerMouseEvent(e, simulatedType) {
    // Prevent "Ignored attempt to cancel a touchmove event with cancelable=false" errors
    if (e.cancelable)
        e.preventDefault();
    const simulatedEvent = document.createEvent('MouseEvents');
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(simulatedType, // type
    true, // bubbles
    true, // cancelable
    window, // view
    1, // detail
    e.screenX, // screenX
    e.screenY, // screenY
    e.clientX, // clientX
    e.clientY, // clientY
    false, // ctrlKey
    false, // altKey
    false, // shiftKey
    false, // metaKey
    0, // button
    null // relatedTarget
    );
    // Dispatch the simulated event to the target element
    e.target.dispatchEvent(simulatedEvent);
}
/**
 * Handle the touchstart events
 * @param {Object} e The widget element's touchstart event
 */
function touchstart(e) {
    // Ignore the event if another widget is already being handled
    if (DDTouch.touchHandled)
        return;
    DDTouch.touchHandled = true;
    // Simulate the mouse events
    // simulateMouseEvent(e, 'mouseover');
    // simulateMouseEvent(e, 'mousemove');
    simulateMouseEvent(e, 'mousedown');
}
/**
 * Handle the touchmove events
 * @param {Object} e The document's touchmove event
 */
function touchmove(e) {
    // Ignore event if not handled by us
    if (!DDTouch.touchHandled)
        return;
    simulateMouseEvent(e, 'mousemove');
}
/**
 * Handle the touchend events
 * @param {Object} e The document's touchend event
 */
function touchend(e) {
    // Ignore event if not handled
    if (!DDTouch.touchHandled)
        return;
    // cancel delayed leave event when we release on ourself which happens BEFORE we get this!
    if (DDTouch.pointerLeaveTimeout) {
        window.clearTimeout(DDTouch.pointerLeaveTimeout);
        delete DDTouch.pointerLeaveTimeout;
    }
    const wasDragging = !!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement;
    // Simulate the mouseup event
    simulateMouseEvent(e, 'mouseup');
    // simulateMouseEvent(event, 'mouseout');
    // If the touch interaction did not move, it should trigger a click
    if (!wasDragging) {
        simulateMouseEvent(e, 'click');
    }
    // Unset the flag to allow other widgets to inherit the touch event
    DDTouch.touchHandled = false;
}
/**
 * Note we don't get touchenter/touchleave (which are deprecated)
 * see https://stackoverflow.com/questions/27908339/js-touch-equivalent-for-mouseenter
 * so instead of PointerEvent to still get enter/leave and send the matching mouse event.
 */
function pointerdown(e) {
    // console.log("pointer down")
    if (e.pointerType === 'mouse')
        return;
    e.target.releasePointerCapture(e.pointerId); // <- Important!
}
function pointerenter(e) {
    // ignore the initial one we get on pointerdown on ourself
    if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement) {
        // console.log('pointerenter ignored');
        return;
    }
    // console.log('pointerenter');
    if (e.pointerType === 'mouse')
        return;
    simulatePointerMouseEvent(e, 'mouseenter');
}
function pointerleave(e) {
    // ignore the leave on ourself we get before releasing the mouse over ourself
    // by delaying sending the event and having the up event cancel us
    if (!_dd_manager__WEBPACK_IMPORTED_MODULE_0__.DDManager.dragElement) {
        // console.log('pointerleave ignored');
        return;
    }
    if (e.pointerType === 'mouse')
        return;
    DDTouch.pointerLeaveTimeout = window.setTimeout(() => {
        delete DDTouch.pointerLeaveTimeout;
        // console.log('pointerleave delayed');
        simulatePointerMouseEvent(e, 'mouseleave');
    }, 10);
}
//# sourceMappingURL=dd-touch.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/gridstack-engine.js":
/*!*********************************************************!*\
  !*** ./node_modules/gridstack/dist/gridstack-engine.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridStackEngine: () => (/* binding */ GridStackEngine)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/**
 * gridstack-engine.ts 9.5.0
 * Copyright (c) 2021-2022 Alain Dumesny - see GridStack root license
 */

/**
 * Defines the GridStack engine that does most no DOM grid manipulation.
 * See GridStack methods and vars for descriptions.
 *
 * NOTE: values should not be modified directly - call the main GridStack API instead
 */
class GridStackEngine {
    constructor(opts = {}) {
        this.addedNodes = [];
        this.removedNodes = [];
        this.column = opts.column || 12;
        this.maxRow = opts.maxRow;
        this._float = opts.float;
        this.nodes = opts.nodes || [];
        this.onChange = opts.onChange;
    }
    batchUpdate(flag = true, doPack = true) {
        if (!!this.batchMode === flag)
            return this;
        this.batchMode = flag;
        if (flag) {
            this._prevFloat = this._float;
            this._float = true; // let things go anywhere for now... will restore and possibly reposition later
            this.cleanNodes();
            this.saveInitial(); // since begin update (which is called multiple times) won't do this
        }
        else {
            this._float = this._prevFloat;
            delete this._prevFloat;
            if (doPack)
                this._packNodes();
            this._notify();
        }
        return this;
    }
    // use entire row for hitting area (will use bottom reverse sorted first) if we not actively moving DOWN and didn't already skip
    _useEntireRowArea(node, nn) {
        return (!this.float || this.batchMode && !this._prevFloat) && !this._hasLocked && (!node._moving || node._skipDown || nn.y <= node.y);
    }
    /** @internal fix collision on given 'node', going to given new location 'nn', with optional 'collide' node already found.
     * return true if we moved. */
    _fixCollisions(node, nn = node, collide, opt = {}) {
        this.sortNodes(-1); // from last to first, so recursive collision move items in the right order
        collide = collide || this.collide(node, nn); // REAL area collide for swap and skip if none...
        if (!collide)
            return false;
        // swap check: if we're actively moving in gravity mode, see if we collide with an object the same size
        if (node._moving && !opt.nested && !this.float) {
            if (this.swap(node, collide))
                return true;
        }
        // during while() collisions MAKE SURE to check entire row so larger items don't leap frog small ones (push them all down starting last in grid)
        let area = nn;
        if (this._useEntireRowArea(node, nn)) {
            area = { x: 0, w: this.column, y: nn.y, h: nn.h };
            collide = this.collide(node, area, opt.skip); // force new hit
        }
        let didMove = false;
        let newOpt = { nested: true, pack: false };
        while (collide = collide || this.collide(node, area, opt.skip)) { // could collide with more than 1 item... so repeat for each
            let moved;
            // if colliding with a locked item OR moving down with top gravity (and collide could move up) -> skip past the collide,
            // but remember that skip down so we only do this once (and push others otherwise).
            if (collide.locked || node._moving && !node._skipDown && nn.y > node.y && !this.float &&
                // can take space we had, or before where we're going
                (!this.collide(collide, { ...collide, y: node.y }, node) || !this.collide(collide, { ...collide, y: nn.y - collide.h }, node))) {
                node._skipDown = (node._skipDown || nn.y > node.y);
                moved = this.moveNode(node, { ...nn, y: collide.y + collide.h, ...newOpt });
                if (collide.locked && moved) {
                    _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(nn, node); // moving after lock become our new desired location
                }
                else if (!collide.locked && moved && opt.pack) {
                    // we moved after and will pack: do it now and keep the original drop location, but past the old collide to see what else we might push way
                    this._packNodes();
                    nn.y = collide.y + collide.h;
                    _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(node, nn);
                }
                didMove = didMove || moved;
            }
            else {
                // move collide down *after* where we will be, ignoring where we are now (don't collide with us)
                moved = this.moveNode(collide, { ...collide, y: nn.y + nn.h, skip: node, ...newOpt });
            }
            if (!moved) {
                return didMove;
            } // break inf loop if we couldn't move after all (ex: maxRow, fixed)
            collide = undefined;
        }
        return didMove;
    }
    /** return the nodes that intercept the given node. Optionally a different area can be used, as well as a second node to skip */
    collide(skip, area = skip, skip2) {
        const skipId = skip._id;
        const skip2Id = skip2?._id;
        return this.nodes.find(n => n._id !== skipId && n._id !== skip2Id && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(n, area));
    }
    collideAll(skip, area = skip, skip2) {
        const skipId = skip._id;
        const skip2Id = skip2?._id;
        return this.nodes.filter(n => n._id !== skipId && n._id !== skip2Id && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(n, area));
    }
    /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
    directionCollideCoverage(node, o, collides) {
        if (!o.rect || !node._rect)
            return;
        let r0 = node._rect; // where started
        let r = { ...o.rect }; // where we are
        // update dragged rect to show where it's coming from (above or below, etc...)
        if (r.y > r0.y) {
            r.h += r.y - r0.y;
            r.y = r0.y;
        }
        else {
            r.h += r0.y - r.y;
        }
        if (r.x > r0.x) {
            r.w += r.x - r0.x;
            r.x = r0.x;
        }
        else {
            r.w += r0.x - r.x;
        }
        let collide;
        let overMax = 0.5; // need >50%
        collides.forEach(n => {
            if (n.locked || !n._rect)
                return;
            let r2 = n._rect; // overlapping target
            let yOver = Number.MAX_VALUE, xOver = Number.MAX_VALUE;
            // depending on which side we started from, compute the overlap % of coverage
            // (ex: from above/below we only compute the max horizontal line coverage)
            if (r0.y < r2.y) { // from above
                yOver = ((r.y + r.h) - r2.y) / r2.h;
            }
            else if (r0.y + r0.h > r2.y + r2.h) { // from below
                yOver = ((r2.y + r2.h) - r.y) / r2.h;
            }
            if (r0.x < r2.x) { // from the left
                xOver = ((r.x + r.w) - r2.x) / r2.w;
            }
            else if (r0.x + r0.w > r2.x + r2.w) { // from the right
                xOver = ((r2.x + r2.w) - r.x) / r2.w;
            }
            let over = Math.min(xOver, yOver);
            if (over > overMax) {
                overMax = over;
                collide = n;
            }
        });
        o.collide = collide; // save it so we don't have to find it again
        return collide;
    }
    /** does a pixel coverage returning the node that has the most coverage by area */
    /*
    protected collideCoverage(r: GridStackPosition, collides: GridStackNode[]): {collide: GridStackNode, over: number} {
      let collide: GridStackNode;
      let overMax = 0;
      collides.forEach(n => {
        if (n.locked || !n._rect) return;
        let over = Utils.areaIntercept(r, n._rect);
        if (over > overMax) {
          overMax = over;
          collide = n;
        }
      });
      return {collide, over: overMax};
    }
    */
    /** called to cache the nodes pixel rectangles used for collision detection during drag */
    cacheRects(w, h, top, right, bottom, left) {
        this.nodes.forEach(n => n._rect = {
            y: n.y * h + top,
            x: n.x * w + left,
            w: n.w * w - left - right,
            h: n.h * h - top - bottom
        });
        return this;
    }
    /** called to possibly swap between 2 nodes (same size or column, not locked, touching), returning true if successful */
    swap(a, b) {
        if (!b || b.locked || !a || a.locked)
            return false;
        function _doSwap() {
            let x = b.x, y = b.y;
            b.x = a.x;
            b.y = a.y; // b -> a position
            if (a.h != b.h) {
                a.x = x;
                a.y = b.y + b.h; // a -> goes after b
            }
            else if (a.w != b.w) {
                a.x = b.x + b.w;
                a.y = y; // a -> goes after b
            }
            else {
                a.x = x;
                a.y = y; // a -> old b position
            }
            a._dirty = b._dirty = true;
            return true;
        }
        let touching; // remember if we called it (vs undefined)
        // same size and same row or column, and touching
        if (a.w === b.w && a.h === b.h && (a.x === b.x || a.y === b.y) && (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))
            return _doSwap();
        if (touching === false)
            return; // IFF ran test and fail, bail out
        // check for taking same columns (but different height) and touching
        if (a.w === b.w && a.x === b.x && (touching || (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))) {
            if (b.y < a.y) {
                let t = a;
                a = b;
                b = t;
            } // swap a <-> b vars so a is first
            return _doSwap();
        }
        if (touching === false)
            return;
        // check if taking same row (but different width) and touching
        if (a.h === b.h && a.y === b.y && (touching || (touching = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isTouching(a, b)))) {
            if (b.x < a.x) {
                let t = a;
                a = b;
                b = t;
            } // swap a <-> b vars so a is first
            return _doSwap();
        }
        return false;
    }
    isAreaEmpty(x, y, w, h) {
        let nn = { x: x || 0, y: y || 0, w: w || 1, h: h || 1 };
        return !this.collide(nn);
    }
    /** re-layout grid items to reclaim any empty space - optionally keeping the sort order exactly the same ('list' mode) vs truly finding an empty spaces */
    compact(layout = 'compact', doSort = true) {
        if (this.nodes.length === 0)
            return this;
        if (doSort)
            this.sortNodes();
        const wasBatch = this.batchMode;
        if (!wasBatch)
            this.batchUpdate();
        const wasColumnResize = this._inColumnResize;
        if (!wasColumnResize)
            this._inColumnResize = true; // faster addNode()
        let copyNodes = this.nodes;
        this.nodes = []; // pretend we have no nodes to conflict layout to start with...
        copyNodes.forEach((n, index, list) => {
            let after;
            if (!n.locked) {
                n.autoPosition = true;
                if (layout === 'list' && index)
                    after = list[index - 1];
            }
            this.addNode(n, false, after); // 'false' for add event trigger
        });
        if (!wasColumnResize)
            delete this._inColumnResize;
        if (!wasBatch)
            this.batchUpdate(false);
        return this;
    }
    /** enable/disable floating widgets (default: `false`) See [example](http://gridstackjs.com/demo/float.html) */
    set float(val) {
        if (this._float === val)
            return;
        this._float = val || false;
        if (!val) {
            this._packNodes()._notify();
        }
    }
    /** float getter method */
    get float() { return this._float || false; }
    /** sort the nodes array from first to last, or reverse. Called during collision/placement to force an order */
    sortNodes(dir = 1, column = this.column) {
        this.nodes = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(this.nodes, dir, column);
        return this;
    }
    /** @internal called to top gravity pack the items back OR revert back to original Y positions when floating */
    _packNodes() {
        if (this.batchMode) {
            return this;
        }
        this.sortNodes(); // first to last
        if (this.float) {
            // restore original Y pos
            this.nodes.forEach(n => {
                if (n._updating || n._orig === undefined || n.y === n._orig.y)
                    return;
                let newY = n.y;
                while (newY > n._orig.y) {
                    --newY;
                    let collide = this.collide(n, { x: n.x, y: newY, w: n.w, h: n.h });
                    if (!collide) {
                        n._dirty = true;
                        n.y = newY;
                    }
                }
            });
        }
        else {
            // top gravity pack
            this.nodes.forEach((n, i) => {
                if (n.locked)
                    return;
                while (n.y > 0) {
                    let newY = i === 0 ? 0 : n.y - 1;
                    let canBeMoved = i === 0 || !this.collide(n, { x: n.x, y: newY, w: n.w, h: n.h });
                    if (!canBeMoved)
                        break;
                    // Note: must be dirty (from last position) for GridStack::OnChange CB to update positions
                    // and move items back. The user 'change' CB should detect changes from the original
                    // starting position instead.
                    n._dirty = (n.y !== newY);
                    n.y = newY;
                }
            });
        }
        return this;
    }
    /**
     * given a random node, makes sure it's coordinates/values are valid in the current grid
     * @param node to adjust
     * @param resizing if out of bound, resize down or move into the grid to fit ?
     */
    prepareNode(node, resizing) {
        node = node || {};
        node._id = node._id ?? GridStackEngine._idSeq++;
        // if we're missing position, have the grid position us automatically (before we set them to 0,0)
        if (node.x === undefined || node.y === undefined || node.x === null || node.y === null) {
            node.autoPosition = true;
        }
        // assign defaults for missing required fields
        let defaults = { x: 0, y: 0, w: 1, h: 1 };
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.defaults(node, defaults);
        if (!node.autoPosition) {
            delete node.autoPosition;
        }
        if (!node.noResize) {
            delete node.noResize;
        }
        if (!node.noMove) {
            delete node.noMove;
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sanitizeMinMax(node);
        // check for NaN (in case messed up strings were passed. can't do parseInt() || defaults.x above as 0 is valid #)
        if (typeof node.x == 'string') {
            node.x = Number(node.x);
        }
        if (typeof node.y == 'string') {
            node.y = Number(node.y);
        }
        if (typeof node.w == 'string') {
            node.w = Number(node.w);
        }
        if (typeof node.h == 'string') {
            node.h = Number(node.h);
        }
        if (isNaN(node.x)) {
            node.x = defaults.x;
            node.autoPosition = true;
        }
        if (isNaN(node.y)) {
            node.y = defaults.y;
            node.autoPosition = true;
        }
        if (isNaN(node.w)) {
            node.w = defaults.w;
        }
        if (isNaN(node.h)) {
            node.h = defaults.h;
        }
        return this.nodeBoundFix(node, resizing);
    }
    /** part2 of preparing a node to fit inside our grid - checks for x,y,w from grid dimensions */
    nodeBoundFix(node, resizing) {
        let before = node._orig || _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node);
        if (node.maxW) {
            node.w = Math.min(node.w, node.maxW);
        }
        if (node.maxH) {
            node.h = Math.min(node.h, node.maxH);
        }
        if (node.minW && node.minW <= this.column) {
            node.w = Math.max(node.w, node.minW);
        }
        if (node.minH) {
            node.h = Math.max(node.h, node.minH);
        }
        // if user loaded a larger than allowed widget for current # of columns,
        // remember it's position & width so we can restore back (1 -> 12 column) #1655 #1985
        // IFF we're not in the middle of column resizing!
        const saveOrig = (node.x || 0) + (node.w || 1) > this.column;
        if (saveOrig && this.column < 12 && !this._inColumnResize && node._id && this.findCacheLayout(node, 12) === -1) {
            let copy = { ...node }; // need _id + positions
            if (copy.autoPosition || copy.x === undefined) {
                delete copy.x;
                delete copy.y;
            }
            else
                copy.x = Math.min(11, copy.x);
            copy.w = Math.min(12, copy.w || 1);
            this.cacheOneLayout(copy, 12);
        }
        if (node.w > this.column) {
            node.w = this.column;
        }
        else if (node.w < 1) {
            node.w = 1;
        }
        if (this.maxRow && node.h > this.maxRow) {
            node.h = this.maxRow;
        }
        else if (node.h < 1) {
            node.h = 1;
        }
        if (node.x < 0) {
            node.x = 0;
        }
        if (node.y < 0) {
            node.y = 0;
        }
        if (node.x + node.w > this.column) {
            if (resizing) {
                node.w = this.column - node.x;
            }
            else {
                node.x = this.column - node.w;
            }
        }
        if (this.maxRow && node.y + node.h > this.maxRow) {
            if (resizing) {
                node.h = this.maxRow - node.y;
            }
            else {
                node.y = this.maxRow - node.h;
            }
        }
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, before)) {
            node._dirty = true;
        }
        return node;
    }
    /** returns a list of modified nodes from their original values */
    getDirtyNodes(verify) {
        // compare original x,y,w,h instead as _dirty can be a temporary state
        if (verify) {
            return this.nodes.filter(n => n._dirty && !_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(n, n._orig));
        }
        return this.nodes.filter(n => n._dirty);
    }
    /** @internal call this to call onChange callback with dirty nodes so DOM can be updated */
    _notify(removedNodes) {
        if (this.batchMode || !this.onChange)
            return this;
        let dirtyNodes = (removedNodes || []).concat(this.getDirtyNodes());
        this.onChange(dirtyNodes);
        return this;
    }
    /** @internal remove dirty and last tried info */
    cleanNodes() {
        if (this.batchMode)
            return this;
        this.nodes.forEach(n => {
            delete n._dirty;
            delete n._lastTried;
        });
        return this;
    }
    /** @internal called to save initial position/size to track real dirty state.
     * Note: should be called right after we call change event (so next API is can detect changes)
     * as well as right before we start move/resize/enter (so we can restore items to prev values) */
    saveInitial() {
        this.nodes.forEach(n => {
            n._orig = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, n);
            delete n._dirty;
        });
        this._hasLocked = this.nodes.some(n => n.locked);
        return this;
    }
    /** @internal restore all the nodes back to initial values (called when we leave) */
    restoreInitial() {
        this.nodes.forEach(n => {
            if (_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(n, n._orig))
                return;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(n, n._orig);
            n._dirty = true;
        });
        this._notify();
        return this;
    }
    /** find the first available empty spot for the given node width/height, updating the x,y attributes. return true if found.
     * optionally you can pass your own existing node list and column count, otherwise defaults to that engine data.
     * Optionally pass a widget to start search AFTER, meaning the order will remain the same but possibly have empty slots we skipped
     */
    findEmptyPosition(node, nodeList = this.nodes, column = this.column, after) {
        let start = after ? after.y * column + (after.x + after.w) : 0;
        let found = false;
        for (let i = start; !found; ++i) {
            let x = i % column;
            let y = Math.floor(i / column);
            if (x + node.w > column) {
                continue;
            }
            let box = { x, y, w: node.w, h: node.h };
            if (!nodeList.find(n => _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.isIntercepted(box, n))) {
                if (node.x !== x || node.y !== y)
                    node._dirty = true;
                node.x = x;
                node.y = y;
                delete node.autoPosition;
                found = true;
            }
        }
        return found;
    }
    /** call to add the given node to our list, fixing collision and re-packing */
    addNode(node, triggerAddEvent = false, after) {
        let dup = this.nodes.find(n => n._id === node._id);
        if (dup)
            return dup; // prevent inserting twice! return it instead.
        // skip prepareNode if we're in middle of column resize (not new) but do check for bounds!
        node = this._inColumnResize ? this.nodeBoundFix(node) : this.prepareNode(node);
        delete node._temporaryRemoved;
        delete node._removeDOM;
        let skipCollision;
        if (node.autoPosition && this.findEmptyPosition(node, this.nodes, this.column, after)) {
            delete node.autoPosition; // found our slot
            skipCollision = true;
        }
        this.nodes.push(node);
        if (triggerAddEvent) {
            this.addedNodes.push(node);
        }
        if (!skipCollision)
            this._fixCollisions(node);
        if (!this.batchMode) {
            this._packNodes()._notify();
        }
        return node;
    }
    removeNode(node, removeDOM = true, triggerEvent = false) {
        if (!this.nodes.find(n => n._id === node._id)) {
            // TEST console.log(`Error: GridStackEngine.removeNode() node._id=${node._id} not found!`)
            return this;
        }
        if (triggerEvent) { // we wait until final drop to manually track removed items (rather than during drag)
            this.removedNodes.push(node);
        }
        if (removeDOM)
            node._removeDOM = true; // let CB remove actual HTML (used to set _id to null, but then we loose layout info)
        // don't use 'faster' .splice(findIndex(),1) in case node isn't in our list, or in multiple times.
        this.nodes = this.nodes.filter(n => n._id !== node._id);
        if (!node._isAboutToRemove)
            this._packNodes(); // if dragged out, no need to relayout as already done...
        this._notify([node]);
        return this;
    }
    removeAll(removeDOM = true) {
        delete this._layouts;
        if (!this.nodes.length)
            return this;
        removeDOM && this.nodes.forEach(n => n._removeDOM = true); // let CB remove actual HTML (used to set _id to null, but then we loose layout info)
        this.removedNodes = this.nodes;
        this.nodes = [];
        return this._notify(this.removedNodes);
    }
    /** checks if item can be moved (layout constrain) vs moveNode(), returning true if was able to move.
     * In more complicated cases (maxRow) it will attempt at moving the item and fixing
     * others in a clone first, then apply those changes if still within specs. */
    moveNodeCheck(node, o) {
        // if (node.locked) return false;
        if (!this.changedPosConstrain(node, o))
            return false;
        o.pack = true;
        // simpler case: move item directly...
        if (!this.maxRow) {
            return this.moveNode(node, o);
        }
        // complex case: create a clone with NO maxRow (will check for out of bounds at the end)
        let clonedNode;
        let clone = new GridStackEngine({
            column: this.column,
            float: this.float,
            nodes: this.nodes.map(n => {
                if (n._id === node._id) {
                    clonedNode = { ...n };
                    return clonedNode;
                }
                return { ...n };
            })
        });
        if (!clonedNode)
            return false;
        // check if we're covering 50% collision and could move, while still being under maxRow or at least not making it worse
        // (case where widget was somehow added past our max #2449)
        let canMove = clone.moveNode(clonedNode, o) && clone.getRow() <= Math.max(this.getRow(), this.maxRow);
        // else check if we can force a swap (float=true, or different shapes) on non-resize
        if (!canMove && !o.resizing && o.collide) {
            let collide = o.collide.el.gridstackNode; // find the source node the clone collided with at 50%
            if (this.swap(node, collide)) { // swaps and mark dirty
                this._notify();
                return true;
            }
        }
        if (!canMove)
            return false;
        // if clone was able to move, copy those mods over to us now instead of caller trying to do this all over!
        // Note: we can't use the list directly as elements and other parts point to actual node, so copy content
        clone.nodes.filter(n => n._dirty).forEach(c => {
            let n = this.nodes.find(a => a._id === c._id);
            if (!n)
                return;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(n, c);
            n._dirty = true;
        });
        this._notify();
        return true;
    }
    /** return true if can fit in grid height constrain only (always true if no maxRow) */
    willItFit(node) {
        delete node._willFitPos;
        if (!this.maxRow)
            return true;
        // create a clone with NO maxRow and check if still within size
        let clone = new GridStackEngine({
            column: this.column,
            float: this.float,
            nodes: this.nodes.map(n => { return { ...n }; })
        });
        let n = { ...node }; // clone node so we don't mod any settings on it but have full autoPosition and min/max as well! #1687
        this.cleanupNode(n);
        delete n.el;
        delete n._id;
        delete n.content;
        delete n.grid;
        clone.addNode(n);
        if (clone.getRow() <= this.maxRow) {
            node._willFitPos = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, n);
            return true;
        }
        return false;
    }
    /** true if x,y or w,h are different after clamping to min/max */
    changedPosConstrain(node, p) {
        // first make sure w,h are set for caller
        p.w = p.w || node.w;
        p.h = p.h || node.h;
        if (node.x !== p.x || node.y !== p.y)
            return true;
        // check constrained w,h
        if (node.maxW) {
            p.w = Math.min(p.w, node.maxW);
        }
        if (node.maxH) {
            p.h = Math.min(p.h, node.maxH);
        }
        if (node.minW) {
            p.w = Math.max(p.w, node.minW);
        }
        if (node.minH) {
            p.h = Math.max(p.h, node.minH);
        }
        return (node.w !== p.w || node.h !== p.h);
    }
    /** return true if the passed in node was actually moved (checks for no-op and locked) */
    moveNode(node, o) {
        if (!node || /*node.locked ||*/ !o)
            return false;
        let wasUndefinedPack;
        if (o.pack === undefined && !this.batchMode) {
            wasUndefinedPack = o.pack = true;
        }
        // constrain the passed in values and check if we're still changing our node
        if (typeof o.x !== 'number') {
            o.x = node.x;
        }
        if (typeof o.y !== 'number') {
            o.y = node.y;
        }
        if (typeof o.w !== 'number') {
            o.w = node.w;
        }
        if (typeof o.h !== 'number') {
            o.h = node.h;
        }
        let resizing = (node.w !== o.w || node.h !== o.h);
        let nn = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node, true); // get min/max out first, then opt positions next
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(nn, o);
        nn = this.nodeBoundFix(nn, resizing);
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(o, nn);
        if (!o.forceCollide && _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, o))
            return false;
        let prevPos = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos({}, node);
        // check if we will need to fix collision at our new location
        let collides = this.collideAll(node, nn, o.skip);
        let needToMove = true;
        if (collides.length) {
            let activeDrag = node._moving && !o.nested;
            // check to make sure we actually collided over 50% surface area while dragging
            let collide = activeDrag ? this.directionCollideCoverage(node, o, collides) : collides[0];
            // if we're enabling creation of sub-grids on the fly, see if we're covering 80% of either one, if we didn't already do that
            if (activeDrag && collide && node.grid?.opts?.subGridDynamic && !node.grid._isTemp) {
                let over = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.areaIntercept(o.rect, collide._rect);
                let a1 = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.area(o.rect);
                let a2 = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.area(collide._rect);
                let perc = over / (a1 < a2 ? a1 : a2);
                if (perc > .8) {
                    collide.grid.makeSubGrid(collide.el, undefined, node);
                    collide = undefined;
                }
            }
            if (collide) {
                needToMove = !this._fixCollisions(node, nn, collide, o); // check if already moved...
            }
            else {
                needToMove = false; // we didn't cover >50% for a move, skip...
                if (wasUndefinedPack)
                    delete o.pack;
            }
        }
        // now move (to the original ask vs the collision version which might differ) and repack things
        if (needToMove) {
            node._dirty = true;
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.copyPos(node, nn);
        }
        if (o.pack) {
            this._packNodes()
                ._notify();
        }
        return !_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.samePos(node, prevPos); // pack might have moved things back
    }
    getRow() {
        return this.nodes.reduce((row, n) => Math.max(row, n.y + n.h), 0);
    }
    beginUpdate(node) {
        if (!node._updating) {
            node._updating = true;
            delete node._skipDown;
            if (!this.batchMode)
                this.saveInitial();
        }
        return this;
    }
    endUpdate() {
        let n = this.nodes.find(n => n._updating);
        if (n) {
            delete n._updating;
            delete n._skipDown;
        }
        return this;
    }
    /** saves a copy of the largest column layout (eg 12 even when rendering oneColumnMode) so we don't loose orig layout,
     * returning a list of widgets for serialization */
    save(saveElement = true, saveCB) {
        // use the highest layout for any saved info so we can have full detail on reload #1849
        let len = this._layouts?.length;
        let layout = len && this.column !== (len - 1) ? this._layouts[len - 1] : null;
        let list = [];
        this.sortNodes();
        this.nodes.forEach(n => {
            let wl = layout?.find(l => l._id === n._id);
            // use layout info fields instead if set
            let w = { ...n, ...(wl || {}) };
            _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.removeInternalForSave(w, !saveElement);
            if (saveCB)
                saveCB(n, w);
            list.push(w);
        });
        return list;
    }
    /** @internal called whenever a node is added or moved - updates the cached layouts */
    layoutsNodesChange(nodes) {
        if (!this._layouts || this._inColumnResize)
            return this;
        // remove smaller layouts - we will re-generate those on the fly... larger ones need to update
        this._layouts.forEach((layout, column) => {
            if (!layout || column === this.column)
                return this;
            if (column < this.column) {
                this._layouts[column] = undefined;
            }
            else {
                // we save the original x,y,w (h isn't cached) to see what actually changed to propagate better.
                // NOTE: we don't need to check against out of bound scaling/moving as that will be done when using those cache values. #1785
                let ratio = column / this.column;
                nodes.forEach(node => {
                    if (!node._orig)
                        return; // didn't change (newly added ?)
                    let n = layout.find(l => l._id === node._id);
                    if (!n)
                        return; // no cache for new nodes. Will use those values.
                    // Y changed, push down same amount
                    // TODO: detect doing item 'swaps' will help instead of move (especially in 1 column mode)
                    if (n.y >= 0 && node.y !== node._orig.y) {
                        n.y += (node.y - node._orig.y);
                    }
                    // X changed, scale from new position
                    if (node.x !== node._orig.x) {
                        n.x = Math.round(node.x * ratio);
                    }
                    // width changed, scale from new width
                    if (node.w !== node._orig.w) {
                        n.w = Math.round(node.w * ratio);
                    }
                    // ...height always carries over from cache
                });
            }
        });
        return this;
    }
    /**
     * @internal Called to scale the widget width & position up/down based on the column change.
     * Note we store previous layouts (especially original ones) to make it possible to go
     * from say 12 -> 1 -> 12 and get back to where we were.
     *
     * @param prevColumn previous number of columns
     * @param column  new column number
     * @param nodes different sorted list (ex: DOM order) instead of current list
     * @param layout specify the type of re-layout that will happen (position, size, etc...).
     * Note: items will never be outside of the current column boundaries. default (moveScale). Ignored for 1 column
     */
    columnChanged(prevColumn, column, nodes, layout = 'moveScale') {
        if (!this.nodes.length || !column || prevColumn === column)
            return this;
        // simpler shortcuts layouts
        const doCompact = layout === 'compact' || layout === 'list';
        if (doCompact) {
            this.sortNodes(1, prevColumn); // sort with original layout once and only once (new column will affect order otherwise)
        }
        // cache the current layout in case they want to go back (like 12 -> 1 -> 12) as it requires original data IFF we're sizing down (see below)
        if (column < prevColumn)
            this.cacheLayout(this.nodes, prevColumn);
        this.batchUpdate(); // do this EARLY as it will call saveInitial() so we can detect where we started for _dirty and collision
        let newNodes = [];
        // if we're going to 1 column and using DOM order (item passed in) rather than default sorting, then generate that layout
        let domOrder = false;
        if (column === 1 && nodes?.length) {
            domOrder = true;
            let top = 0;
            nodes.forEach(n => {
                n.x = 0;
                n.w = 1;
                n.y = Math.max(n.y, top);
                top = n.y + n.h;
            });
            newNodes = nodes;
            nodes = [];
        }
        else {
            nodes = doCompact ? this.nodes : _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(this.nodes, -1, prevColumn); // current column reverse sorting so we can insert last to front (limit collision)
        }
        // see if we have cached previous layout IFF we are going up in size (restore) otherwise always
        // generate next size down from where we are (looks more natural as you gradually size down).
        if (column > prevColumn && this._layouts) {
            const cacheNodes = this._layouts[column] || [];
            // ...if not, start with the largest layout (if not already there) as down-scaling is more accurate
            // by pretending we came from that larger column by assigning those values as starting point
            let lastIndex = this._layouts.length - 1;
            if (!cacheNodes.length && prevColumn !== lastIndex && this._layouts[lastIndex]?.length) {
                prevColumn = lastIndex;
                this._layouts[lastIndex].forEach(cacheNode => {
                    let n = nodes.find(n => n._id === cacheNode._id);
                    if (n) {
                        // still current, use cache info positions
                        if (!doCompact && !cacheNode.autoPosition) {
                            n.x = cacheNode.x ?? n.x;
                            n.y = cacheNode.y ?? n.y;
                        }
                        n.w = cacheNode.w ?? n.w;
                        if (cacheNode.x == undefined || cacheNode.y === undefined)
                            n.autoPosition = true;
                    }
                });
            }
            // if we found cache re-use those nodes that are still current
            cacheNodes.forEach(cacheNode => {
                let j = nodes.findIndex(n => n._id === cacheNode._id);
                if (j !== -1) {
                    const n = nodes[j];
                    // still current, use cache info positions
                    if (doCompact) {
                        n.w = cacheNode.w; // only w is used, and don't trim the list
                        return;
                    }
                    if (cacheNode.autoPosition || isNaN(cacheNode.x) || isNaN(cacheNode.y)) {
                        this.findEmptyPosition(cacheNode, newNodes);
                    }
                    if (!cacheNode.autoPosition) {
                        n.x = cacheNode.x ?? n.x;
                        n.y = cacheNode.y ?? n.y;
                        n.w = cacheNode.w ?? n.w;
                        newNodes.push(n);
                    }
                    nodes.splice(j, 1);
                }
            });
        }
        // much simpler layout that just compacts
        if (doCompact) {
            this.compact(layout, false);
        }
        else {
            // ...and add any extra non-cached ones
            if (nodes.length) {
                if (typeof layout === 'function') {
                    layout(column, prevColumn, newNodes, nodes);
                }
                else if (!domOrder) {
                    let ratio = (doCompact || layout === 'none') ? 1 : column / prevColumn;
                    let move = (layout === 'move' || layout === 'moveScale');
                    let scale = (layout === 'scale' || layout === 'moveScale');
                    nodes.forEach(node => {
                        // NOTE: x + w could be outside of the grid, but addNode() below will handle that
                        node.x = (column === 1 ? 0 : (move ? Math.round(node.x * ratio) : Math.min(node.x, column - 1)));
                        node.w = ((column === 1 || prevColumn === 1) ? 1 : scale ? (Math.round(node.w * ratio) || 1) : (Math.min(node.w, column)));
                        newNodes.push(node);
                    });
                    nodes = [];
                }
            }
            // finally re-layout them in reverse order (to get correct placement)
            if (!domOrder)
                newNodes = _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.sort(newNodes, -1, column);
            this._inColumnResize = true; // prevent cache update
            this.nodes = []; // pretend we have no nodes to start with (add() will use same structures) to simplify layout
            newNodes.forEach(node => {
                this.addNode(node, false); // 'false' for add event trigger
                delete node._orig; // make sure the commit doesn't try to restore things back to original
            });
        }
        this.nodes.forEach(n => delete n._orig); // clear _orig before batch=false so it doesn't handle float=true restore
        this.batchUpdate(false, !doCompact);
        delete this._inColumnResize;
        return this;
    }
    /**
     * call to cache the given layout internally to the given location so we can restore back when column changes size
     * @param nodes list of nodes
     * @param column corresponding column index to save it under
     * @param clear if true, will force other caches to be removed (default false)
     */
    cacheLayout(nodes, column, clear = false) {
        let copy = [];
        nodes.forEach((n, i) => {
            n._id = n._id ?? GridStackEngine._idSeq++; // make sure we have an id in case this is new layout, else re-use id already set
            copy[i] = { x: n.x, y: n.y, w: n.w, _id: n._id }; // only thing we change is x,y,w and id to find it back
        });
        this._layouts = clear ? [] : this._layouts || []; // use array to find larger quick
        this._layouts[column] = copy;
        return this;
    }
    /**
     * call to cache the given node layout internally to the given location so we can restore back when column changes size
     * @param node single node to cache
     * @param column corresponding column index to save it under
     */
    cacheOneLayout(n, column) {
        n._id = n._id ?? GridStackEngine._idSeq++;
        let l = { x: n.x, y: n.y, w: n.w, _id: n._id };
        if (n.autoPosition || n.x === undefined) {
            delete l.x;
            delete l.y;
            if (n.autoPosition)
                l.autoPosition = true;
        }
        this._layouts = this._layouts || [];
        this._layouts[column] = this._layouts[column] || [];
        let index = this.findCacheLayout(n, column);
        if (index === -1)
            this._layouts[column].push(l);
        else
            this._layouts[column][index] = l;
        return this;
    }
    findCacheLayout(n, column) {
        return this._layouts?.[column]?.findIndex(l => l._id === n._id) ?? -1;
    }
    removeNodeFromLayoutCache(n) {
        if (!this._layouts) {
            return;
        }
        for (let i = 0; i < this._layouts.length; i++) {
            let index = this.findCacheLayout(n, i);
            if (index !== -1) {
                this._layouts[i].splice(index, 1);
            }
        }
    }
    /** called to remove all internal values but the _id */
    cleanupNode(node) {
        for (let prop in node) {
            if (prop[0] === '_' && prop !== '_id')
                delete node[prop];
        }
        return this;
    }
}
/** @internal unique global internal _id counter */
GridStackEngine._idSeq = 0;

//# sourceMappingURL=gridstack-engine.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/gridstack.js":
/*!**************************************************!*\
  !*** ./node_modules/gridstack/dist/gridstack.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DDGridStack: () => (/* reexport safe */ _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__.DDGridStack),
/* harmony export */   GridStack: () => (/* binding */ GridStack),
/* harmony export */   GridStackEngine: () => (/* reexport safe */ _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine),
/* harmony export */   Utils: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.Utils),
/* harmony export */   dragInDefaultOptions: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.dragInDefaultOptions),
/* harmony export */   gridDefaults: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults),
/* harmony export */   obsolete: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.obsolete),
/* harmony export */   obsoleteAttr: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.obsoleteAttr),
/* harmony export */   obsoleteOpts: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.obsoleteOpts),
/* harmony export */   obsoleteOptsDel: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.obsoleteOptsDel)
/* harmony export */ });
/* harmony import */ var _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gridstack-engine */ "./node_modules/gridstack/dist/gridstack-engine.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/gridstack/dist/utils.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/gridstack/dist/types.js");
/* harmony import */ var _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dd-gridstack */ "./node_modules/gridstack/dist/dd-gridstack.js");
/* harmony import */ var _dd_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dd-touch */ "./node_modules/gridstack/dist/dd-touch.js");
/* harmony import */ var _dd_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dd-manager */ "./node_modules/gridstack/dist/dd-manager.js");
/*!
 * GridStack 9.5.0
 * https://gridstackjs.com/
 *
 * Copyright (c) 2021-2022 Alain Dumesny
 * see root license https://github.com/gridstack/gridstack.js/tree/master/LICENSE
 */



/*
 * and include D&D by default
 * TODO: while we could generate a gridstack-static.js at smaller size - saves about 31k (41k -> 72k)
 * I don't know how to generate the DD only code at the remaining 31k to delay load as code depends on Gridstack.ts
 * also it caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
 */



/** global instance */
const dd = new _dd_gridstack__WEBPACK_IMPORTED_MODULE_3__.DDGridStack;
// export all dependent file as well to make it easier for users to just import the main file




/**
 * Main gridstack class - you will need to call `GridStack.init()` first to initialize your grid.
 * Note: your grid elements MUST have the following classes for the CSS layout to work:
 * @example
 * <div class="grid-stack">
 *   <div class="grid-stack-item">
 *     <div class="grid-stack-item-content">Item 1</div>
 *   </div>
 * </div>
 */
class GridStack {
    /**
     * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
     * simply return the existing instance (ignore any passed options). There is also an initAll() version that support
     * multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.
     * @param options grid options (optional)
     * @param elOrString element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)
     *
     * @example
     * let grid = GridStack.init();
     *
     * Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
     * let grid = document.querySelector('.grid-stack').gridstack;
     */
    static init(options = {}, elOrString = '.grid-stack') {
        let el = GridStack.getGridElement(elOrString);
        if (!el) {
            if (typeof elOrString === 'string') {
                console.error('GridStack.initAll() no grid was found with selector "' + elOrString + '" - element missing or wrong selector ?' +
                    '\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.');
            }
            else {
                console.error('GridStack.init() no grid element was passed.');
            }
            return null;
        }
        if (!el.gridstack) {
            el.gridstack = new GridStack(el, _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(options));
        }
        return el.gridstack;
    }
    /**
     * Will initialize a list of elements (given a selector) and return an array of grids.
     * @param options grid options (optional)
     * @param selector elements selector to convert to grids (default to '.grid-stack' class selector)
     *
     * @example
     * let grids = GridStack.initAll();
     * grids.forEach(...)
     */
    static initAll(options = {}, selector = '.grid-stack') {
        let grids = [];
        GridStack.getGridElements(selector).forEach(el => {
            if (!el.gridstack) {
                el.gridstack = new GridStack(el, _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(options));
            }
            grids.push(el.gridstack);
        });
        if (grids.length === 0) {
            console.error('GridStack.initAll() no grid was found with selector "' + selector + '" - element missing or wrong selector ?' +
                '\nNote: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.');
        }
        return grids;
    }
    /**
     * call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
     * grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
     * JSON serialized data, including options.
     * @param parent HTML element parent to the grid
     * @param opt grids options used to initialize the grid, and list of children
     */
    static addGrid(parent, opt = {}) {
        if (!parent)
            return null;
        let el = parent;
        if (el.gridstack) {
            // already a grid - set option and load data
            const grid = el.gridstack;
            if (opt)
                grid.opts = { ...grid.opts, ...opt };
            if (opt.children !== undefined)
                grid.load(opt.children);
            return grid;
        }
        // create the grid element, but check if the passed 'parent' already has grid styling and should be used instead
        const parentIsGrid = parent.classList.contains('grid-stack');
        if (!parentIsGrid || GridStack.addRemoveCB) {
            if (GridStack.addRemoveCB) {
                el = GridStack.addRemoveCB(parent, opt, true, true);
            }
            else {
                let doc = document.implementation.createHTMLDocument(''); // IE needs a param
                doc.body.innerHTML = `<div class="grid-stack ${opt.class || ''}"></div>`;
                el = doc.body.children[0];
                parent.appendChild(el);
            }
        }
        // create grid class and load any children
        let grid = GridStack.init(opt, el);
        return grid;
    }
    /** call this method to register your engine instead of the default one.
     * See instead `GridStackOptions.engineClass` if you only need to
     * replace just one instance.
     */
    static registerEngine(engineClass) {
        GridStack.engineClass = engineClass;
    }
    /** @internal create placeholder DIV as needed */
    get placeholder() {
        if (!this._placeholder) {
            let placeholderChild = document.createElement('div'); // child so padding match item-content
            placeholderChild.className = 'placeholder-content';
            if (this.opts.placeholderText) {
                placeholderChild.innerHTML = this.opts.placeholderText;
            }
            this._placeholder = document.createElement('div');
            this._placeholder.classList.add(this.opts.placeholderClass, _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass, this.opts.itemClass);
            this.placeholder.appendChild(placeholderChild);
        }
        return this._placeholder;
    }
    /**
     * Construct a grid item from the given element and options
     * @param el
     * @param opts
     */
    constructor(el, opts = {}) {
        /** @internal */
        this._gsEventHandler = {};
        /** @internal extra row added when dragging at the bottom of the grid */
        this._extraDragRow = 0;
        this.el = el; // exposed HTML element to the user
        opts = opts || {}; // handles null/undefined/0
        if (!el.classList.contains('grid-stack')) {
            this.el.classList.add('grid-stack');
        }
        // if row property exists, replace minRow and maxRow instead
        if (opts.row) {
            opts.minRow = opts.maxRow = opts.row;
            delete opts.row;
        }
        let rowAttr = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-row'));
        // flag only valid in sub-grids (handled by parent, not here)
        if (opts.column === 'auto') {
            delete opts.column;
        }
        // save original setting so we can restore on save
        if (opts.alwaysShowResizeHandle !== undefined) {
            opts._alwaysShowResizeHandle = opts.alwaysShowResizeHandle;
        }
        // elements DOM attributes override any passed options (like CSS style) - merge the two together
        let defaults = { ..._utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(_types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults),
            column: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-column')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.column,
            minRow: rowAttr ? rowAttr : _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-row')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.minRow,
            maxRow: rowAttr ? rowAttr : _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-row')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.maxRow,
            staticGrid: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-static')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.staticGrid,
            draggable: {
                handle: (opts.handleClass ? '.' + opts.handleClass : (opts.handle ? opts.handle : '')) || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.draggable.handle,
            },
            removableOptions: {
                accept: opts.itemClass || _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.removableOptions.accept,
                decline: _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.removableOptions.decline
            },
        };
        if (el.getAttribute('gs-animate')) { // default to true, but if set to false use that instead
            defaults.animate = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-animate'));
        }
        this.opts = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.defaults(opts, defaults);
        opts = null; // make sure we use this.opts instead
        this._initMargin(); // part of settings defaults...
        // Now check if we're loading into 1 column mode FIRST so we don't do un-necessary work (like cellHeight = width / 12 then go 1 column)
        if (this.opts.column !== 1 && !this.opts.disableOneColumnMode && this._widthOrContainer() <= this.opts.oneColumnSize) {
            this._prevColumn = this.getColumn();
            this.opts.column = 1;
        }
        if (this.opts.rtl === 'auto') {
            this.opts.rtl = (el.style.direction === 'rtl');
        }
        if (this.opts.rtl) {
            this.el.classList.add('grid-stack-rtl');
        }
        // check if we're been nested, and if so update our style and keep pointer around (used during save)
        const grandParent = this.el.parentElement?.parentElement;
        let parentGridItem = grandParent?.classList.contains(_types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass) ? grandParent.gridstackNode : undefined;
        if (parentGridItem) {
            parentGridItem.subGrid = this;
            this.parentGridItem = parentGridItem;
            this.el.classList.add('grid-stack-nested');
            parentGridItem.el.classList.add('grid-stack-sub-grid');
        }
        this._isAutoCellHeight = (this.opts.cellHeight === 'auto');
        if (this._isAutoCellHeight || this.opts.cellHeight === 'initial') {
            // make the cell content square initially (will use resize/column event to keep it square)
            this.cellHeight(undefined, false);
        }
        else {
            // append unit if any are set
            if (typeof this.opts.cellHeight == 'number' && this.opts.cellHeightUnit && this.opts.cellHeightUnit !== _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.cellHeightUnit) {
                this.opts.cellHeight = this.opts.cellHeight + this.opts.cellHeightUnit;
                delete this.opts.cellHeightUnit;
            }
            this.cellHeight(this.opts.cellHeight, false);
        }
        // see if we need to adjust auto-hide
        if (this.opts.alwaysShowResizeHandle === 'mobile') {
            this.opts.alwaysShowResizeHandle = _dd_touch__WEBPACK_IMPORTED_MODULE_4__.isTouch;
        }
        this._styleSheetClass = 'gs-id-' + _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine._idSeq++;
        this.el.classList.add(this._styleSheetClass);
        this._setStaticClass();
        let engineClass = this.opts.engineClass || GridStack.engineClass || _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine;
        this.engine = new engineClass({
            column: this.getColumn(),
            float: this.opts.float,
            maxRow: this.opts.maxRow,
            onChange: (cbNodes) => {
                let maxH = 0;
                this.engine.nodes.forEach(n => { maxH = Math.max(maxH, n.y + n.h); });
                cbNodes.forEach(n => {
                    let el = n.el;
                    if (!el)
                        return;
                    if (n._removeDOM) {
                        if (el)
                            el.remove();
                        delete n._removeDOM;
                    }
                    else {
                        this._writePosAttr(el, n);
                    }
                });
                this._updateStyles(false, maxH); // false = don't recreate, just append if need be
            }
        });
        if (this.opts.auto) {
            this.batchUpdate(); // prevent in between re-layout #1535 TODO: this only set float=true, need to prevent collision check...
            this.getGridItems().forEach(el => this._prepareElement(el));
            this.batchUpdate(false);
        }
        // load any passed in children as well, which overrides any DOM layout done above
        if (this.opts.children) {
            let children = this.opts.children;
            delete this.opts.children;
            if (children.length)
                this.load(children); // don't load empty
        }
        this.setAnimation(this.opts.animate);
        this._updateStyles();
        this.el.classList.add('gs-' + this.opts.column);
        // dynamic grids require pausing during drag to detect over to nest vs push
        if (this.opts.subGridDynamic && !_dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag)
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = true;
        if (this.opts.draggable?.pause !== undefined)
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = this.opts.draggable.pause;
        this._setupRemoveDrop();
        this._setupAcceptWidget();
        this._updateResizeEvent();
    }
    /**
     * add a new widget and returns it.
     *
     * Widget will be always placed even if result height is more than actual grid height.
     * You need to use `willItFit()` before calling addWidget for additional check.
     * See also `makeWidget()`.
     *
     * @example
     * let grid = GridStack.init();
     * grid.addWidget({w: 3, content: 'hello'});
     * grid.addWidget('<div class="grid-stack-item"><div class="grid-stack-item-content">hello</div></div>', {w: 3});
     *
     * @param el  GridStackWidget (which can have content string as well), html element, or string definition to add
     * @param options widget position/size options (optional, and ignore if first param is already option) - see GridStackWidget
     */
    addWidget(els, options) {
        function isGridStackWidget(w) {
            return w.el !== undefined || w.x !== undefined || w.y !== undefined || w.w !== undefined || w.h !== undefined || w.content !== undefined ? true : false;
        }
        let el;
        let node;
        if (typeof els === 'string') {
            let doc = document.implementation.createHTMLDocument(''); // IE needs a param
            doc.body.innerHTML = els;
            el = doc.body.children[0];
        }
        else if (arguments.length === 0 || arguments.length === 1 && isGridStackWidget(els)) {
            node = options = els;
            if (node?.el) {
                el = node.el; // re-use element stored in the node
            }
            else if (GridStack.addRemoveCB) {
                el = GridStack.addRemoveCB(this.el, options, true, false);
            }
            else {
                let content = options?.content || '';
                let doc = document.implementation.createHTMLDocument(''); // IE needs a param
                doc.body.innerHTML = `<div class="grid-stack-item ${this.opts.itemClass || ''}"><div class="grid-stack-item-content">${content}</div></div>`;
                el = doc.body.children[0];
            }
        }
        else {
            el = els;
        }
        if (!el)
            return;
        // if the caller ended up initializing the widget in addRemoveCB, or we stared with one already, skip the rest
        node = el.gridstackNode;
        if (node && el.parentElement === this.el && this.engine.nodes.find(n => n._id === node._id))
            return el;
        // Tempting to initialize the passed in opt with default and valid values, but this break knockout demos
        // as the actual value are filled in when _prepareElement() calls el.getAttribute('gs-xyz') before adding the node.
        // So make sure we load any DOM attributes that are not specified in passed in options (which override)
        let domAttr = this._readAttr(el);
        options = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(options) || {}; // make a copy before we modify in case caller re-uses it
        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.defaults(options, domAttr);
        node = this.engine.prepareNode(options);
        this._writeAttr(el, options);
        if (this._insertNotAppend) {
            this.el.prepend(el);
        }
        else {
            this.el.appendChild(el);
        }
        this.makeWidget(el, options);
        return el;
    }
    /**
     * Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
     * from the parent's subGrid options.
     * @param el gridItem element to convert
     * @param ops (optional) sub-grid options, else default to node, then parent settings, else defaults
     * @param nodeToAdd (optional) node to add to the newly created sub grid (used when dragging over existing regular item)
     * @returns newly created grid
     */
    makeSubGrid(el, ops, nodeToAdd, saveContent = true) {
        let node = el.gridstackNode;
        if (!node) {
            node = this.makeWidget(el).gridstackNode;
        }
        if (node.subGrid?.el)
            return node.subGrid; // already done
        // find the template subGrid stored on a parent as fallback...
        let subGridTemplate; // eslint-disable-next-line @typescript-eslint/no-this-alias
        let grid = this;
        while (grid && !subGridTemplate) {
            subGridTemplate = grid.opts?.subGridOpts;
            grid = grid.parentGridItem?.grid;
        }
        //... and set the create options
        ops = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep({ ...(subGridTemplate || {}), children: undefined, ...(ops || node.subGridOpts) });
        node.subGridOpts = ops;
        // if column special case it set, remember that flag and set default
        let autoColumn;
        if (ops.column === 'auto') {
            autoColumn = true;
            ops.column = Math.max(node.w || 1, nodeToAdd?.w || 1);
            ops.disableOneColumnMode = true; // driven by parent
        }
        // if we're converting an existing full item, move over the content to be the first sub item in the new grid
        let content = node.el.querySelector('.grid-stack-item-content');
        let newItem;
        let newItemOpt;
        if (saveContent) {
            this._removeDD(node.el); // remove D&D since it's set on content div
            newItemOpt = { ...node, x: 0, y: 0 };
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeInternalForSave(newItemOpt);
            delete newItemOpt.subGridOpts;
            if (node.content) {
                newItemOpt.content = node.content;
                delete node.content;
            }
            if (GridStack.addRemoveCB) {
                newItem = GridStack.addRemoveCB(this.el, newItemOpt, true, false);
            }
            else {
                let doc = document.implementation.createHTMLDocument(''); // IE needs a param
                doc.body.innerHTML = `<div class="grid-stack-item"></div>`;
                newItem = doc.body.children[0];
                newItem.appendChild(content);
                doc.body.innerHTML = `<div class="grid-stack-item-content"></div>`;
                content = doc.body.children[0];
                node.el.appendChild(content);
            }
            this._prepareDragDropByNode(node); // ... and restore original D&D
        }
        // if we're adding an additional item, make the container large enough to have them both
        if (nodeToAdd) {
            let w = autoColumn ? ops.column : node.w;
            let h = node.h + nodeToAdd.h;
            let style = node.el.style;
            style.transition = 'none'; // show up instantly so we don't see scrollbar with nodeToAdd
            this.update(node.el, { w, h });
            setTimeout(() => style.transition = null); // recover animation
        }
        let subGrid = node.subGrid = GridStack.addGrid(content, ops);
        if (nodeToAdd?._moving)
            subGrid._isTemp = true; // prevent re-nesting as we add over
        if (autoColumn)
            subGrid._autoColumn = true;
        // add the original content back as a child of hte newly created grid
        if (saveContent) {
            subGrid.addWidget(newItem, newItemOpt);
        }
        // now add any additional node
        if (nodeToAdd) {
            if (nodeToAdd._moving) {
                // create an artificial event even for the just created grid to receive this item
                window.setTimeout(() => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(nodeToAdd._event, 'mouseenter', subGrid.el), 0);
            }
            else {
                subGrid.addWidget(node.el, node);
            }
        }
        return subGrid;
    }
    /**
     * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
     * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
     */
    removeAsSubGrid(nodeThatRemoved) {
        let pGrid = this.parentGridItem?.grid;
        if (!pGrid)
            return;
        pGrid.batchUpdate();
        pGrid.removeWidget(this.parentGridItem.el, true, true);
        this.engine.nodes.forEach(n => {
            // migrate any children over and offsetting by our location
            n.x += this.parentGridItem.x;
            n.y += this.parentGridItem.y;
            pGrid.addWidget(n.el, n);
        });
        pGrid.batchUpdate(false);
        if (this.parentGridItem)
            delete this.parentGridItem.subGrid;
        delete this.parentGridItem;
        // create an artificial event for the original grid now that this one is gone (got a leave, but won't get enter)
        if (nodeThatRemoved) {
            window.setTimeout(() => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.simulateMouseEvent(nodeThatRemoved._event, 'mouseenter', pGrid.el), 0);
        }
    }
    /**
     * saves the current layout returning a list of widgets for serialization which might include any nested grids.
     * @param saveContent if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
     * be removed.
     * @param saveGridOpt if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
     * to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.
     * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
     * @returns list of widgets or full grid option, including .children list of widgets
     */
    save(saveContent = true, saveGridOpt = false, saveCB = GridStack.saveCB) {
        // return copied GridStackWidget (with optionally .el) we can modify at will...
        let list = this.engine.save(saveContent, saveCB);
        // check for HTML content and nested grids
        list.forEach(n => {
            if (saveContent && n.el && !n.subGrid && !saveCB) { // sub-grid are saved differently, not plain content
                let sub = n.el.querySelector('.grid-stack-item-content');
                n.content = sub ? sub.innerHTML : undefined;
                if (!n.content)
                    delete n.content;
            }
            else {
                if (!saveContent && !saveCB) {
                    delete n.content;
                }
                // check for nested grid
                if (n.subGrid?.el) {
                    const listOrOpt = n.subGrid.save(saveContent, saveGridOpt, saveCB);
                    n.subGridOpts = (saveGridOpt ? listOrOpt : { children: listOrOpt });
                    delete n.subGrid;
                }
            }
            delete n.el;
        });
        // check if save entire grid options (needed for recursive) + children...
        if (saveGridOpt) {
            let o = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(this.opts);
            // delete default values that will be recreated on launch
            if (o.marginBottom === o.marginTop && o.marginRight === o.marginLeft && o.marginTop === o.marginRight) {
                o.margin = o.marginTop;
                delete o.marginTop;
                delete o.marginRight;
                delete o.marginBottom;
                delete o.marginLeft;
            }
            if (o.rtl === (this.el.style.direction === 'rtl')) {
                o.rtl = 'auto';
            }
            if (this._isAutoCellHeight) {
                o.cellHeight = 'auto';
            }
            if (this._autoColumn) {
                o.column = 'auto';
                delete o.disableOneColumnMode;
            }
            const origShow = o._alwaysShowResizeHandle;
            delete o._alwaysShowResizeHandle;
            if (origShow !== undefined) {
                o.alwaysShowResizeHandle = origShow;
            }
            else {
                delete o.alwaysShowResizeHandle;
            }
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeInternalAndSame(o, _types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults);
            o.children = list;
            return o;
        }
        return list;
    }
    /**
     * load the widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.
     *
     * @param layout list of widgets definition to update/create
     * @param addAndRemove boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
     * the user control of insertion.
     *
     * @example
     * see http://gridstackjs.com/demo/serialization.html
     */
    load(items, addRemove = GridStack.addRemoveCB || true) {
        items = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(items); // so we can mod
        // if passed list has coordinates, use them (insert from end to beginning for conflict resolution) else force widget same order
        const haveCoord = items.some(w => w.x !== undefined || w.y !== undefined);
        if (haveCoord)
            items = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.sort(items, -1, this._prevColumn || this.getColumn());
        this._insertNotAppend = haveCoord; // if we create in reverse order...
        // if we're loading a layout into for example 1 column (_prevColumn is set only when going to 1) and items don't fit, make sure to save
        // the original wanted layout so we can scale back up correctly #1471
        if (this._prevColumn && this._prevColumn !== this.opts.column && items.some(n => ((n.x || 0) + n.w) > this.opts.column)) {
            this._ignoreLayoutsNodeChange = true; // skip layout update
            this.engine.cacheLayout(items, this._prevColumn, true);
        }
        // if given a different callback, temporally set it as global option so creating will use it
        const prevCB = GridStack.addRemoveCB;
        if (typeof (addRemove) === 'function')
            GridStack.addRemoveCB = addRemove;
        let removed = [];
        this.batchUpdate();
        // see if any items are missing from new layout and need to be removed first
        if (addRemove) {
            let copyNodes = [...this.engine.nodes]; // don't loop through array you modify
            copyNodes.forEach(n => {
                if (!n.id)
                    return;
                let item = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(items, n.id);
                if (!item) {
                    if (GridStack.addRemoveCB)
                        GridStack.addRemoveCB(this.el, n, false, false);
                    removed.push(n); // batch keep track
                    this.removeWidget(n.el, true, false);
                }
            });
        }
        // now add/update the widgets - starting with removing items in the new layout we will reposition
        // to reduce collision and add no-coord ones at next available spot
        let updateNodes = [];
        this.engine.nodes = this.engine.nodes.filter(n => {
            if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(items, n.id)) {
                updateNodes.push(n);
                return false;
            } // remove if found from list
            return true;
        });
        let widthChanged = false;
        items.forEach(w => {
            let item = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.find(updateNodes, w.id);
            if (item) {
                // if item sizes to content, re-use the exiting height so it's a better guess at the final size 9same if width doesn't change)
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(item))
                    w.h = item.h;
                // check if missing coord, in which case find next empty slot with new (or old if missing) sizes
                if (w.autoPosition || w.x === undefined || w.y === undefined) {
                    w.w = w.w || item.w;
                    w.h = w.h || item.h;
                    this.engine.findEmptyPosition(w);
                }
                widthChanged = widthChanged || (w.w !== undefined && w.w !== item.w);
                // add back to current list BUT force a collision check if it 'appears' we didn't change to make sure we don't overlap others now
                this.engine.nodes.push(item);
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.samePos(item, w)) {
                    this.moveNode(item, { ...w, forceCollide: true });
                    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(w, item, true);
                }
                this.update(item.el, w);
                if (w.subGridOpts?.children) { // update any sub grid as well
                    let sub = item.el.querySelector('.grid-stack');
                    if (sub && sub.gridstack) {
                        sub.gridstack.load(w.subGridOpts.children); // TODO: support updating grid options ?
                        this._insertNotAppend = true; // got reset by above call
                    }
                }
            }
            else if (addRemove) {
                this.addWidget(w);
            }
        });
        this.engine.removedNodes = removed;
        this.doContentResize(widthChanged, true); // we only need to wait for animation if we changed any widths
        this.batchUpdate(false);
        // after commit, clear that flag
        delete this._ignoreLayoutsNodeChange;
        delete this._insertNotAppend;
        prevCB ? GridStack.addRemoveCB = prevCB : delete GridStack.addRemoveCB;
        return this;
    }
    /**
     * use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
     * and get a single event callback. You will see no changes until `batchUpdate(false)` is called.
     */
    batchUpdate(flag = true) {
        this.engine.batchUpdate(flag);
        if (!flag) {
            this._updateContainerHeight();
            this._triggerRemoveEvent();
            this._triggerAddEvent();
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * Gets current cell height.
     */
    getCellHeight(forcePixel = false) {
        if (this.opts.cellHeight && this.opts.cellHeight !== 'auto' &&
            (!forcePixel || !this.opts.cellHeightUnit || this.opts.cellHeightUnit === 'px')) {
            return this.opts.cellHeight;
        }
        // else get first cell height
        let el = this.el.querySelector('.' + this.opts.itemClass);
        if (el) {
            let height = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-h')) || 1; // since we don't write 1 anymore
            return Math.round(el.offsetHeight / height);
        }
        // else do entire grid and # of rows (but doesn't work if min-height is the actual constrain)
        let rows = parseInt(this.el.getAttribute('gs-current-row'));
        return rows ? Math.round(this.el.getBoundingClientRect().height / rows) : this.opts.cellHeight;
    }
    /**
     * Update current cell height - see `GridStackOptions.cellHeight` for format.
     * This method rebuilds an internal CSS style sheet.
     * Note: You can expect performance issues if call this method too often.
     *
     * @param val the cell height. If not passed (undefined), cells content will be made square (match width minus margin),
     * if pass 0 the CSS will be generated by the application instead.
     * @param update (Optional) if false, styles will not be updated
     *
     * @example
     * grid.cellHeight(100); // same as 100px
     * grid.cellHeight('70px');
     * grid.cellHeight(grid.cellWidth() * 1.2);
     */
    cellHeight(val, update = true) {
        // if not called internally, check if we're changing mode
        if (update && val !== undefined) {
            if (this._isAutoCellHeight !== (val === 'auto')) {
                this._isAutoCellHeight = (val === 'auto');
                this._updateResizeEvent();
            }
        }
        if (val === 'initial' || val === 'auto') {
            val = undefined;
        }
        // make item content be square
        if (val === undefined) {
            let marginDiff = -this.opts.marginRight - this.opts.marginLeft
                + this.opts.marginTop + this.opts.marginBottom;
            val = this.cellWidth() + marginDiff;
        }
        let data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(val);
        if (this.opts.cellHeightUnit === data.unit && this.opts.cellHeight === data.h) {
            return this;
        }
        this.opts.cellHeightUnit = data.unit;
        this.opts.cellHeight = data.h;
        this.doContentResize(false, true); // no anim wait, but use attributes since we only change row height
        if (update) {
            this._updateStyles(true); // true = force re-create for current # of rows
        }
        return this;
    }
    /** Gets current cell width. */
    cellWidth() {
        return this._widthOrContainer() / this.getColumn();
    }
    /** return our expected width (or parent) for 1 column check */
    _widthOrContainer() {
        // use `offsetWidth` or `clientWidth` (no scrollbar) ?
        // https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
        return (this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth);
    }
    /**
     * re-layout grid items to reclaim any empty space. Options are:
     * 'list' keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
     * 'compact' might re-order items to fill any empty space
     *
     * doSort - 'false' to let you do your own sorting ahead in case you need to control a different order. (default to sort)
     */
    compact(layout = 'compact', doSort = true) {
        this.engine.compact(layout, doSort);
        this._triggerChangeEvent();
        return this;
    }
    /**
     * set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
     * as well as cache the original layout so you can revert back to previous positions without loss.
     * Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11],
     * else you will need to generate correct CSS (see https://github.com/gridstack/gridstack.js#change-grid-columns)
     * @param column - Integer > 0 (default 12).
     * @param layout specify the type of re-layout that will happen (position, size, etc...).
     * Note: items will never be outside of the current column boundaries. default ('moveScale'). Ignored for 1 column
     */
    column(column, layout = 'moveScale') {
        if (!column || column < 1 || this.opts.column === column)
            return this;
        let oldColumn = this.getColumn();
        // if we go into 1 column mode due to size change (disableOneColumnMode is off and we hit min width)
        // then remember the original columns so we can restore.
        if (column === 1 && !this.opts.disableOneColumnMode) {
            this._prevColumn = oldColumn;
        }
        else {
            delete this._prevColumn;
        }
        this.el.classList.remove('gs-' + oldColumn);
        this.el.classList.add('gs-' + column);
        this.opts.column = this.engine.column = column;
        // update the items now - see if the dom order nodes should be passed instead (else default to current list)
        let domNodes;
        if (column === 1 && this.opts.oneColumnModeDomSort) {
            domNodes = [];
            this.getGridItems().forEach(el => {
                if (el.gridstackNode) {
                    domNodes.push(el.gridstackNode);
                }
            });
            if (!domNodes.length) {
                domNodes = undefined;
            }
        }
        this.engine.columnChanged(oldColumn, column, domNodes, layout);
        if (this._isAutoCellHeight)
            this.cellHeight();
        this.doContentResize();
        // and trigger our event last...
        this._ignoreLayoutsNodeChange = true; // skip layout update
        this._triggerChangeEvent();
        delete this._ignoreLayoutsNodeChange;
        return this;
    }
    /**
     * get the number of columns in the grid (default 12)
     */
    getColumn() {
        return this.opts.column;
    }
    /** returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order */
    getGridItems() {
        return Array.from(this.el.children)
            .filter((el) => el.matches('.' + this.opts.itemClass) && !el.matches('.' + this.opts.placeholderClass));
    }
    /**
     * Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.
     * @param removeDOM if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).
     */
    destroy(removeDOM = true) {
        if (!this.el)
            return; // prevent multiple calls
        this.offAll();
        this._updateResizeEvent(true);
        this.setStatic(true, false); // permanently removes DD but don't set CSS class (we're going away)
        this.setAnimation(false);
        if (!removeDOM) {
            this.removeAll(removeDOM);
            this.el.classList.remove(this._styleSheetClass);
            this.el.removeAttribute('gs-current-row');
        }
        else {
            this.el.parentNode.removeChild(this.el);
        }
        this._removeStylesheet();
        if (this.parentGridItem)
            delete this.parentGridItem.subGrid;
        delete this.parentGridItem;
        delete this.opts;
        delete this._placeholder;
        delete this.engine;
        delete this.el.gridstack; // remove circular dependency that would prevent a freeing
        delete this.el;
        return this;
    }
    /**
     * enable/disable floating widgets (default: `false`) See [example](http://gridstackjs.com/demo/float.html)
     */
    float(val) {
        if (this.opts.float !== val) {
            this.opts.float = this.engine.float = val;
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * get the current float mode
     */
    getFloat() {
        return this.engine.float;
    }
    /**
     * Get the position of the cell under a pixel on screen.
     * @param position the position of the pixel to resolve in
     * absolute coordinates, as an object with top and left properties
     * @param useDocRelative if true, value will be based on document position vs parent position (Optional. Default false).
     * Useful when grid is within `position: relative` element
     *
     * Returns an object with properties `x` and `y` i.e. the column and row in the grid.
     */
    getCellFromPixel(position, useDocRelative = false) {
        let box = this.el.getBoundingClientRect();
        // console.log(`getBoundingClientRect left: ${box.left} top: ${box.top} w: ${box.w} h: ${box.h}`)
        let containerPos;
        if (useDocRelative) {
            containerPos = { top: box.top + document.documentElement.scrollTop, left: box.left };
            // console.log(`getCellFromPixel scrollTop: ${document.documentElement.scrollTop}`)
        }
        else {
            containerPos = { top: this.el.offsetTop, left: this.el.offsetLeft };
            // console.log(`getCellFromPixel offsetTop: ${containerPos.left} offsetLeft: ${containerPos.top}`)
        }
        let relativeLeft = position.left - containerPos.left;
        let relativeTop = position.top - containerPos.top;
        let columnWidth = (box.width / this.getColumn());
        let rowHeight = (box.height / parseInt(this.el.getAttribute('gs-current-row')));
        return { x: Math.floor(relativeLeft / columnWidth), y: Math.floor(relativeTop / rowHeight) };
    }
    /** returns the current number of rows, which will be at least `minRow` if set */
    getRow() {
        return Math.max(this.engine.getRow(), this.opts.minRow);
    }
    /**
     * Checks if specified area is empty.
     * @param x the position x.
     * @param y the position y.
     * @param w the width of to check
     * @param h the height of to check
     */
    isAreaEmpty(x, y, w, h) {
        return this.engine.isAreaEmpty(x, y, w, h);
    }
    /**
     * If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
     * If you want gridstack to add the elements for you, use `addWidget()` instead.
     * Makes the given element a widget and returns it.
     * @param els widget or single selector to convert.
     * @param options widget definition to use instead of reading attributes or using default sizing values
     *
     * @example
     * let grid = GridStack.init();
     * grid.el.appendChild('<div id="1" gs-w="3"></div>');
     * grid.el.appendChild('<div id="2"></div>');
     * grid.makeWidget('1');
     * grid.makeWidget('2', {w:2, content: 'hello'});
     */
    makeWidget(els, options) {
        let el = GridStack.getElement(els);
        this._prepareElement(el, true, options);
        const node = el.gridstackNode;
        this._updateContainerHeight();
        this.doContentResize(false, false, node);
        // see if there is a sub-grid to create
        if (node.subGridOpts) {
            this.makeSubGrid(el, node.subGridOpts, undefined, false); // node.subGrid will be used as option in method, no need to pass
        }
        // if we're adding an item into 1 column (_prevColumn is set only when going to 1) make sure
        // we don't override the larger 12 column layout that was already saved. #1985
        if (this._prevColumn && this.opts.column === 1) {
            this._ignoreLayoutsNodeChange = true;
        }
        this._triggerAddEvent();
        this._triggerChangeEvent();
        delete this._ignoreLayoutsNodeChange;
        return el;
    }
    /**
     * Event handler that extracts our CustomEvent data out automatically for receiving custom
     * notifications (see doc for supported events)
     * @param name of the event (see possible values) or list of names space separated
     * @param callback function called with event and optional second/third param
     * (see README documentation for each signature).
     *
     * @example
     * grid.on('added', function(e, items) { log('added ', items)} );
     * or
     * grid.on('added removed change', function(e, items) { log(e.type, items)} );
     *
     * Note: in some cases it is the same as calling native handler and parsing the event.
     * grid.el.addEventListener('added', function(event) { log('added ', event.detail)} );
     *
     */
    on(name, callback) {
        // check for array of names being passed instead
        if (name.indexOf(' ') !== -1) {
            let names = name.split(' ');
            names.forEach(name => this.on(name, callback));
            return this;
        }
        if (name === 'change' || name === 'added' || name === 'removed' || name === 'enable' || name === 'disable') {
            // native CustomEvent handlers - cash the generic handlers so we can easily remove
            let noData = (name === 'enable' || name === 'disable');
            if (noData) {
                this._gsEventHandler[name] = (event) => callback(event);
            }
            else {
                this._gsEventHandler[name] = (event) => callback(event, event.detail);
            }
            this.el.addEventListener(name, this._gsEventHandler[name]);
        }
        else if (name === 'drag' || name === 'dragstart' || name === 'dragstop' || name === 'resizestart' || name === 'resize'
            || name === 'resizestop' || name === 'dropped' || name === 'resizecontent') {
            // drag&drop stop events NEED to be call them AFTER we update node attributes so handle them ourself.
            // do same for start event to make it easier...
            this._gsEventHandler[name] = callback;
        }
        else {
            console.log('GridStack.on(' + name + ') event not supported, but you can still use $(".grid-stack").on(...) while jquery-ui is still used internally.');
        }
        return this;
    }
    /**
     * unsubscribe from the 'on' event below
     * @param name of the event (see possible values)
     */
    off(name) {
        // check for array of names being passed instead
        if (name.indexOf(' ') !== -1) {
            let names = name.split(' ');
            names.forEach(name => this.off(name));
            return this;
        }
        if (name === 'change' || name === 'added' || name === 'removed' || name === 'enable' || name === 'disable') {
            // remove native CustomEvent handlers
            if (this._gsEventHandler[name]) {
                this.el.removeEventListener(name, this._gsEventHandler[name]);
            }
        }
        delete this._gsEventHandler[name];
        return this;
    }
    /** remove all event handlers */
    offAll() {
        Object.keys(this._gsEventHandler).forEach(key => this.off(key));
        return this;
    }
    /**
     * Removes widget from the grid.
     * @param el  widget or selector to modify
     * @param removeDOM if `false` DOM element won't be removed from the tree (Default? true).
     * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
     */
    removeWidget(els, removeDOM = true, triggerEvent = true) {
        GridStack.getElements(els).forEach(el => {
            if (el.parentElement && el.parentElement !== this.el)
                return; // not our child!
            let node = el.gridstackNode;
            // For Meteor support: https://github.com/gridstack/gridstack.js/pull/272
            if (!node) {
                node = this.engine.nodes.find(n => el === n.el);
            }
            if (!node)
                return;
            if (GridStack.addRemoveCB) {
                GridStack.addRemoveCB(this.el, node, false, false);
            }
            // remove our DOM data (circular link) and drag&drop permanently
            delete el.gridstackNode;
            this._removeDD(el);
            this.engine.removeNode(node, removeDOM, triggerEvent);
            if (removeDOM && el.parentElement) {
                el.remove(); // in batch mode engine.removeNode doesn't call back to remove DOM
            }
        });
        if (triggerEvent) {
            this._triggerRemoveEvent();
            this._triggerChangeEvent();
        }
        return this;
    }
    /**
     * Removes all widgets from the grid.
     * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
     */
    removeAll(removeDOM = true) {
        // always remove our DOM data (circular link) before list gets emptied and drag&drop permanently
        this.engine.nodes.forEach(n => {
            delete n.el.gridstackNode;
            this._removeDD(n.el);
        });
        this.engine.removeAll(removeDOM);
        this._triggerRemoveEvent();
        return this;
    }
    /**
     * Toggle the grid animation state.  Toggles the `grid-stack-animate` class.
     * @param doAnimate if true the grid will animate.
     */
    setAnimation(doAnimate) {
        if (doAnimate) {
            this.el.classList.add('grid-stack-animate');
        }
        else {
            this.el.classList.remove('grid-stack-animate');
        }
        return this;
    }
    /**
     * Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
     * Also toggle the grid-stack-static class.
     * @param val if true the grid become static.
     * @param updateClass true (default) if css class gets updated
     * @param recurse true (default) if sub-grids also get updated
     */
    setStatic(val, updateClass = true, recurse = true) {
        if (!!this.opts.staticGrid === val)
            return this;
        val ? this.opts.staticGrid = true : delete this.opts.staticGrid;
        this._setupRemoveDrop();
        this._setupAcceptWidget();
        this.engine.nodes.forEach(n => {
            this._prepareDragDropByNode(n); // either delete or init Drag&drop
            if (n.subGrid && recurse)
                n.subGrid.setStatic(val, updateClass, recurse);
        });
        if (updateClass) {
            this._setStaticClass();
        }
        return this;
    }
    /**
     * Updates widget position/size and other info. Note: if you need to call this on all nodes, use load() instead which will update what changed.
     * @param els  widget or selector of objects to modify (note: setting the same x,y for multiple items will be indeterministic and likely unwanted)
     * @param opt new widget options (x,y,w,h, etc..). Only those set will be updated.
     */
    update(els, opt) {
        // support legacy call for now ?
        if (arguments.length > 2) {
            console.warn('gridstack.ts: `update(el, x, y, w, h)` is deprecated. Use `update(el, {x, w, content, ...})`. It will be removed soon');
            // eslint-disable-next-line prefer-rest-params
            let a = arguments, i = 1;
            opt = { x: a[i++], y: a[i++], w: a[i++], h: a[i++] };
            return this.update(els, opt);
        }
        GridStack.getElements(els).forEach(el => {
            let n = el?.gridstackNode;
            if (!n)
                return;
            let w = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.cloneDeep(opt); // make a copy we can modify in case they re-use it or multiple items
            delete w.autoPosition;
            delete w.id;
            // move/resize widget if anything changed
            let keys = ['x', 'y', 'w', 'h'];
            let m;
            if (keys.some(k => w[k] !== undefined && w[k] !== n[k])) {
                m = {};
                keys.forEach(k => {
                    m[k] = (w[k] !== undefined) ? w[k] : n[k];
                    delete w[k];
                });
            }
            // for a move as well IFF there is any min/max fields set
            if (!m && (w.minW || w.minH || w.maxW || w.maxH)) {
                m = {}; // will use node position but validate values
            }
            // check for content changing
            if (w.content !== undefined) {
                const itemContent = el.querySelector('.grid-stack-item-content');
                if (itemContent && itemContent.innerHTML !== w.content) {
                    itemContent.innerHTML = w.content;
                    // restore any sub-grid back
                    if (n.subGrid?.el) {
                        itemContent.appendChild(n.subGrid.el);
                        if (!n.subGrid.opts.styleInHead)
                            n.subGrid._updateStyles(true); // force create
                    }
                }
                delete w.content;
            }
            // any remaining fields are assigned, but check for dragging changes, resize constrain
            let changed = false;
            let ddChanged = false;
            for (const key in w) {
                if (key[0] !== '_' && n[key] !== w[key]) {
                    n[key] = w[key];
                    changed = true;
                    ddChanged = ddChanged || (!this.opts.staticGrid && (key === 'noResize' || key === 'noMove' || key === 'locked'));
                }
            }
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.sanitizeMinMax(n);
            // finally move the widget
            if (m !== undefined)
                this.moveNode(n, m);
            if (changed) { // move will only update x,y,w,h so update the rest too
                this._writeAttr(el, n);
            }
            if (ddChanged) {
                this._prepareDragDropByNode(n);
            }
        });
        return this;
    }
    moveNode(n, m) {
        this.engine.cleanNodes()
            .beginUpdate(n)
            .moveNode(n, m);
        this._updateContainerHeight();
        this._triggerChangeEvent();
        this.engine.endUpdate();
    }
    /**
     * Updates widget height to match the content height to avoid v-scrollbar or dead space.
     * Note: this assumes only 1 child under resizeToContentParent='.grid-stack-item-content' (sized to gridItem minus padding) that is at the entire content size wanted.
     * useAttrSize set to true if GridStackNode.h should be used instead of actual container height when we don't need to wait for animation to finish to get actual DOM heights
     */
    resizeToContent(el, useAttrSize = false) {
        if (!el)
            return;
        el.classList.remove('size-to-content-max');
        if (!el.clientHeight)
            return; // 0 when hidden, skip
        let n = el.gridstackNode;
        if (!n)
            return;
        const grid = n.grid;
        if (!grid)
            return;
        if (el.parentElement !== grid.el)
            return; // skip if we are not inside a grid
        const cell = grid.getCellHeight();
        if (!cell)
            return;
        let height = useAttrSize && n.h ? n.h * cell : el.clientHeight; // getBoundingClientRect().height seem to flicker back and forth
        let item;
        if (n.resizeToContentParent)
            item = el.querySelector(n.resizeToContentParent);
        if (!item)
            item = el.querySelector(GridStack.resizeToContentParent);
        if (!item)
            return;
        const padding = el.clientHeight - item.clientHeight; // full - available height to our child (minus border, padding...)
        const itemH = useAttrSize && n.h ? n.h * cell - padding : item.clientHeight; // calculated to what cellHeight is or will become (rather than actual to prevent waiting for animation to finish)
        let wantedH;
        if (n.subGrid) {
            // sub-grid - use their actual row count * their cell height
            wantedH = n.subGrid.getRow() * n.subGrid.getCellHeight();
        }
        else {
            // NOTE: clientHeight & getBoundingClientRect() is undefined for text and other leaf nodes. use <div> container!
            const child = item.firstElementChild;
            if (!child) {
                console.log(`Error: resizeToContent() '${GridStack.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
                return;
            }
            wantedH = child.getBoundingClientRect().height || itemH;
        }
        if (itemH === wantedH)
            return;
        height += wantedH - itemH;
        let h = Math.ceil(height / cell);
        // check for min/max and special sizing
        const softMax = Number.isInteger(n.sizeToContent) ? n.sizeToContent : 0;
        if (softMax && h > softMax) {
            h = softMax;
            el.classList.add('size-to-content-max'); // get v-scroll back
        }
        if (n.minH && h < n.minH)
            h = n.minH;
        else if (n.maxH && h > n.maxH)
            h = n.maxH;
        if (h !== n.h) {
            grid._ignoreLayoutsNodeChange = true;
            grid.moveNode(n, { h });
            delete grid._ignoreLayoutsNodeChange;
        }
    }
    /** call the user resize (so they can do extra work) else our build in version */
    resizeToContentCheck(el, useAttr = false) {
        if (GridStack.resizeToContentCB)
            GridStack.resizeToContentCB(el, useAttr);
        else
            this.resizeToContent(el, useAttr);
    }
    /**
     * Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options (CSS string format of 1,2,4 values or single number).
     * @param value margin value
     */
    margin(value) {
        let isMultiValue = (typeof value === 'string' && value.split(' ').length > 1);
        // check if we can skip re-creating our CSS file... won't check if multi values (too much hassle)
        if (!isMultiValue) {
            let data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(value);
            if (this.opts.marginUnit === data.unit && this.opts.margin === data.h)
                return;
        }
        // re-use existing margin handling
        this.opts.margin = value;
        this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = undefined;
        this._initMargin();
        this._updateStyles(true); // true = force re-create
        return this;
    }
    /** returns current margin number value (undefined if 4 sides don't match) */
    getMargin() { return this.opts.margin; }
    /**
     * Returns true if the height of the grid will be less than the vertical
     * constraint. Always returns true if grid doesn't have height constraint.
     * @param node contains x,y,w,h,auto-position options
     *
     * @example
     * if (grid.willItFit(newWidget)) {
     *   grid.addWidget(newWidget);
     * } else {
     *   alert('Not enough free space to place the widget');
     * }
     */
    willItFit(node) {
        // support legacy call for now
        if (arguments.length > 1) {
            console.warn('gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon');
            // eslint-disable-next-line prefer-rest-params
            let a = arguments, i = 0, w = { x: a[i++], y: a[i++], w: a[i++], h: a[i++], autoPosition: a[i++] };
            return this.willItFit(w);
        }
        return this.engine.willItFit(node);
    }
    /** @internal */
    _triggerChangeEvent() {
        if (this.engine.batchMode)
            return this;
        let elements = this.engine.getDirtyNodes(true); // verify they really changed
        if (elements && elements.length) {
            if (!this._ignoreLayoutsNodeChange) {
                this.engine.layoutsNodesChange(elements);
            }
            this._triggerEvent('change', elements);
        }
        this.engine.saveInitial(); // we called, now reset initial values & dirty flags
        return this;
    }
    /** @internal */
    _triggerAddEvent() {
        if (this.engine.batchMode)
            return this;
        if (this.engine.addedNodes?.length) {
            if (!this._ignoreLayoutsNodeChange) {
                this.engine.layoutsNodesChange(this.engine.addedNodes);
            }
            // prevent added nodes from also triggering 'change' event (which is called next)
            this.engine.addedNodes.forEach(n => { delete n._dirty; });
            this._triggerEvent('added', this.engine.addedNodes);
            this.engine.addedNodes = [];
        }
        return this;
    }
    /** @internal */
    _triggerRemoveEvent() {
        if (this.engine.batchMode)
            return this;
        if (this.engine.removedNodes?.length) {
            this._triggerEvent('removed', this.engine.removedNodes);
            this.engine.removedNodes = [];
        }
        return this;
    }
    /** @internal */
    _triggerEvent(type, data) {
        let event = data ? new CustomEvent(type, { bubbles: false, detail: data }) : new Event(type);
        this.el.dispatchEvent(event);
        return this;
    }
    /** @internal called to delete the current dynamic style sheet used for our layout */
    _removeStylesheet() {
        if (this._styles) {
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removeStylesheet(this._styleSheetClass);
            delete this._styles;
        }
        return this;
    }
    /** @internal updated/create the CSS styles for row based layout and initial margin setting */
    _updateStyles(forceUpdate = false, maxH) {
        // call to delete existing one if we change cellHeight / margin
        if (forceUpdate) {
            this._removeStylesheet();
        }
        if (!maxH)
            maxH = this.getRow();
        this._updateContainerHeight();
        // if user is telling us they will handle the CSS themselves by setting heights to 0. Do we need this opts really ??
        if (this.opts.cellHeight === 0) {
            return this;
        }
        let cellHeight = this.opts.cellHeight;
        let cellHeightUnit = this.opts.cellHeightUnit;
        let prefix = `.${this._styleSheetClass} > .${this.opts.itemClass}`;
        // create one as needed
        if (!this._styles) {
            // insert style to parent (instead of 'head' by default) to support WebComponent
            let styleLocation = this.opts.styleInHead ? undefined : this.el.parentNode;
            this._styles = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.createStylesheet(this._styleSheetClass, styleLocation, {
                nonce: this.opts.nonce,
            });
            if (!this._styles)
                return this;
            this._styles._max = 0;
            // these are done once only
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, prefix, `height: ${cellHeight}${cellHeightUnit}`);
            // content margins
            let top = this.opts.marginTop + this.opts.marginUnit;
            let bottom = this.opts.marginBottom + this.opts.marginUnit;
            let right = this.opts.marginRight + this.opts.marginUnit;
            let left = this.opts.marginLeft + this.opts.marginUnit;
            let content = `${prefix} > .grid-stack-item-content`;
            let placeholder = `.${this._styleSheetClass} > .grid-stack-placeholder > .placeholder-content`;
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, content, `top: ${top}; right: ${right}; bottom: ${bottom}; left: ${left};`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, placeholder, `top: ${top}; right: ${right}; bottom: ${bottom}; left: ${left};`);
            // resize handles offset (to match margin)
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-ne`, `right: ${right}`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-e`, `right: ${right}`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-se`, `right: ${right}; bottom: ${bottom}`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-nw`, `left: ${left}`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-w`, `left: ${left}`);
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix} > .ui-resizable-sw`, `left: ${left}; bottom: ${bottom}`);
        }
        // now update the height specific fields
        maxH = maxH || this._styles._max;
        if (maxH > this._styles._max) {
            let getHeight = (rows) => (cellHeight * rows) + cellHeightUnit;
            for (let i = this._styles._max + 1; i <= maxH; i++) { // start at 1
                _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix}[gs-y="${i}"]`, `top: ${getHeight(i)}`);
                _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.addCSSRule(this._styles, `${prefix}[gs-h="${i + 1}"]`, `height: ${getHeight(i + 1)}`); // start at 2
            }
            this._styles._max = maxH;
        }
        return this;
    }
    /** @internal */
    _updateContainerHeight() {
        if (!this.engine || this.engine.batchMode)
            return this;
        const parent = this.parentGridItem;
        let row = this.getRow() + this._extraDragRow; // this checks for minRow already
        const cellHeight = this.opts.cellHeight;
        const unit = this.opts.cellHeightUnit;
        if (!cellHeight)
            return this;
        // check for css min height (non nested grid). TODO: support mismatch, say: min % while unit is px.
        if (!parent) {
            const cssMinHeight = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(getComputedStyle(this.el)['minHeight']);
            if (cssMinHeight.h > 0 && cssMinHeight.unit === unit) {
                const minRow = Math.floor(cssMinHeight.h / cellHeight);
                if (row < minRow) {
                    row = minRow;
                }
            }
        }
        this.el.setAttribute('gs-current-row', String(row));
        this.el.style.removeProperty('min-height');
        this.el.style.removeProperty('height');
        if (row) {
            // nested grids have 'insert:0' to fill the space of parent by default, but we may be taller so use min-height for possible scrollbars
            this.el.style[parent ? 'minHeight' : 'height'] = row * cellHeight + unit;
        }
        // if we're a nested grid inside an sizeToContent item, tell it to resize itself too
        if (parent && !parent.grid.engine.batchMode && _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(parent)) {
            parent.grid.resizeToContentCheck(parent.el);
        }
        return this;
    }
    /** @internal */
    _prepareElement(el, triggerAddEvent = false, node) {
        el.classList.add(this.opts.itemClass);
        node = node || this._readAttr(el);
        el.gridstackNode = node;
        node.el = el;
        node.grid = this;
        let copy = { ...node };
        node = this.engine.addNode(node, triggerAddEvent);
        // write node attr back in case there was collision or we have to fix bad values during addNode()
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.same(node, copy)) {
            this._writeAttr(el, node);
        }
        if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(node))
            el.classList.add('size-to-content');
        this._prepareDragDropByNode(node);
        return this;
    }
    /** @internal call to write position x,y,w,h attributes back to element */
    _writePosAttr(el, n) {
        if (n.x !== undefined && n.x !== null) {
            el.setAttribute('gs-x', String(n.x));
        }
        if (n.y !== undefined && n.y !== null) {
            el.setAttribute('gs-y', String(n.y));
        }
        n.w > 1 ? el.setAttribute('gs-w', String(n.w)) : el.removeAttribute('gs-w');
        n.h > 1 ? el.setAttribute('gs-h', String(n.h)) : el.removeAttribute('gs-h');
        return this;
    }
    /** @internal call to write any default attributes back to element */
    _writeAttr(el, node) {
        if (!node)
            return this;
        this._writePosAttr(el, node);
        let attrs /*: GridStackWidget but strings */ = {
            autoPosition: 'gs-auto-position',
            noResize: 'gs-no-resize',
            noMove: 'gs-no-move',
            locked: 'gs-locked',
            id: 'gs-id',
        };
        for (const key in attrs) {
            if (node[key]) { // 0 is valid for x,y only but done above already and not in list anyway
                el.setAttribute(attrs[key], String(node[key]));
            }
            else {
                el.removeAttribute(attrs[key]);
            }
        }
        return this;
    }
    /** @internal call to read any default attributes from element */
    _readAttr(el, clearDefaultAttr = true) {
        let n = {};
        n.x = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-x'));
        n.y = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-y'));
        n.w = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-w'));
        n.h = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-h'));
        n.autoPosition = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-auto-position'));
        n.noResize = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-no-resize'));
        n.noMove = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-no-move'));
        n.locked = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toBool(el.getAttribute('gs-locked'));
        n.id = el.getAttribute('gs-id');
        // read but never written out
        n.maxW = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-w'));
        n.minW = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-w'));
        n.maxH = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-max-h'));
        n.minH = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.toNumber(el.getAttribute('gs-min-h'));
        // v8.x optimization to reduce un-needed attr that don't render or are default CSS
        if (clearDefaultAttr) {
            if (n.w === 1)
                el.removeAttribute('gs-w');
            if (n.h === 1)
                el.removeAttribute('gs-h');
            if (n.maxW)
                el.removeAttribute('gs-max-w');
            if (n.minW)
                el.removeAttribute('gs-min-w');
            if (n.maxH)
                el.removeAttribute('gs-max-h');
            if (n.minH)
                el.removeAttribute('gs-min-h');
        }
        // remove any key not found (null or false which is default)
        for (const key in n) {
            if (!n.hasOwnProperty(key))
                return;
            if (!n[key] && n[key] !== 0) { // 0 can be valid value (x,y only really)
                delete n[key];
            }
        }
        return n;
    }
    /** @internal */
    _setStaticClass() {
        let classes = ['grid-stack-static'];
        if (this.opts.staticGrid) {
            this.el.classList.add(...classes);
            this.el.setAttribute('gs-static', 'true');
        }
        else {
            this.el.classList.remove(...classes);
            this.el.removeAttribute('gs-static');
        }
        return this;
    }
    /**
     * called when we are being resized - check if the one Column Mode needs to be turned on/off
     * and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
     * or `sizeToContent` gridItem options.
     */
    onResize() {
        if (!this.el?.clientWidth)
            return; // return if we're gone or no size yet (will get called again)
        if (this.prevWidth === this.el.clientWidth)
            return; // no-op
        this.prevWidth = this.el.clientWidth;
        // console.log('onResize ', this.el.clientWidth);
        this.batchUpdate();
        // see if we're nested and take our column count from our parent....
        let columnChanged = false;
        if (this._autoColumn && this.parentGridItem) {
            if (this.opts.column !== this.parentGridItem.w) {
                this.column(this.parentGridItem.w, 'none');
                columnChanged = true;
            }
        }
        else {
            // else check for 1 column in/out behavior
            let oneColumn = !this.opts.disableOneColumnMode && this.el.clientWidth <= this.opts.oneColumnSize ||
                (this.opts.column === 1 && !this._prevColumn);
            if ((this.opts.column === 1) !== oneColumn) {
                // if (this.opts.animate) this.setAnimation(false); // 1 <-> 12 is too radical, turn off animation and we need it for sizeToContent
                this.column(oneColumn ? 1 : this._prevColumn);
                // if (this.opts.animate) setTimeout(() => this.setAnimation(true));
                columnChanged = true;
            }
        }
        // make the cells content square again
        if (this._isAutoCellHeight)
            this.cellHeight();
        // update any nested grids, or items size
        this.engine.nodes.forEach(n => {
            if (n.subGrid)
                n.subGrid.onResize();
        });
        if (!this._skipInitialResize)
            this.doContentResize(columnChanged); // wait for anim of column changed (DOM reflow before we can size correctly)
        delete this._skipInitialResize;
        this.batchUpdate(false);
        return this;
    }
    doContentResize(delay = true, useAttr = false, n = undefined) {
        // update any gridItem height with sizeToContent, but wait for DOM $animation_speed to settle if we changed column count
        // TODO: is there a way to know what the final (post animation) size of the content will be so we can animate the column width and height together rather than sequentially ?
        setTimeout(() => {
            if (n) {
                if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))
                    this.resizeToContentCheck(n.el, useAttr);
            }
            else if (this.engine.nodes.some(n => _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))) {
                const nodes = [...this.engine.nodes]; // in case order changes while resizing one
                this.batchUpdate();
                nodes.forEach(n => {
                    if (_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.shouldSizeToContent(n))
                        this.resizeToContentCheck(n.el, useAttr);
                });
                this.batchUpdate(false);
            }
            // call this regardless of shouldSizeToContent because widget might need to stretch to take available space after a resize
            if (this._gsEventHandler['resizecontent'])
                this._gsEventHandler['resizecontent'](null, n ? [n] : this.engine.nodes);
        }, delay ? 300 + 10 : 0);
    }
    /** add or remove the grid element size event handler */
    _updateResizeEvent(forceRemove = false) {
        // only add event if we're not nested (parent will call us) and we're auto sizing cells or supporting oneColumn (i.e. doing work)
        // or supporting new sizeToContent option.
        const trackSize = !this.parentGridItem && (this._isAutoCellHeight || this.opts.sizeToContent || !this.opts.disableOneColumnMode
            || this.engine.nodes.find(n => n.sizeToContent));
        if (!forceRemove && trackSize && !this.resizeObserver) {
            this._sizeThrottle = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.throttle(() => this.onResize(), this.opts.cellHeightThrottle);
            this.resizeObserver = new ResizeObserver(() => this._sizeThrottle());
            this.resizeObserver.observe(this.el);
            this._skipInitialResize = true; // makeWidget will originally have called on startup
        }
        else if ((forceRemove || !trackSize) && this.resizeObserver) {
            this.resizeObserver.disconnect();
            delete this.resizeObserver;
            delete this._sizeThrottle;
        }
        return this;
    }
    /** @internal convert a potential selector into actual element */
    static getElement(els = '.grid-stack-item') { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElement(els); }
    /** @internal */
    static getElements(els = '.grid-stack-item') { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(els); }
    /** @internal */
    static getGridElement(els) { return GridStack.getElement(els); }
    /** @internal */
    static getGridElements(els) { return _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(els); }
    /** @internal initialize margin top/bottom/left/right and units */
    _initMargin() {
        let data;
        let margin = 0;
        // support passing multiple values like CSS (ex: '5px 10px 0 20px')
        let margins = [];
        if (typeof this.opts.margin === 'string') {
            margins = this.opts.margin.split(' ');
        }
        if (margins.length === 2) { // top/bot, left/right like CSS
            this.opts.marginTop = this.opts.marginBottom = margins[0];
            this.opts.marginLeft = this.opts.marginRight = margins[1];
        }
        else if (margins.length === 4) { // Clockwise like CSS
            this.opts.marginTop = margins[0];
            this.opts.marginRight = margins[1];
            this.opts.marginBottom = margins[2];
            this.opts.marginLeft = margins[3];
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.margin);
            this.opts.marginUnit = data.unit;
            margin = this.opts.margin = data.h;
        }
        // see if top/bottom/left/right need to be set as well
        if (this.opts.marginTop === undefined) {
            this.opts.marginTop = margin;
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.marginTop);
            this.opts.marginTop = data.h;
            delete this.opts.margin;
        }
        if (this.opts.marginBottom === undefined) {
            this.opts.marginBottom = margin;
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.marginBottom);
            this.opts.marginBottom = data.h;
            delete this.opts.margin;
        }
        if (this.opts.marginRight === undefined) {
            this.opts.marginRight = margin;
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.marginRight);
            this.opts.marginRight = data.h;
            delete this.opts.margin;
        }
        if (this.opts.marginLeft === undefined) {
            this.opts.marginLeft = margin;
        }
        else {
            data = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.parseHeight(this.opts.marginLeft);
            this.opts.marginLeft = data.h;
            delete this.opts.margin;
        }
        this.opts.marginUnit = data.unit; // in case side were spelled out, use those units instead...
        if (this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight) {
            this.opts.margin = this.opts.marginTop; // makes it easier to check for no-ops in setMargin()
        }
        return this;
    }
    /* ===========================================================================================
     * drag&drop methods that used to be stubbed out and implemented in dd-gridstack.ts
     * but caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
     * ===========================================================================================
     */
    /** get the global (but static to this code) DD implementation */
    static getDD() {
        return dd;
    }
    /**
     * call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
     * Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
     * is dynamically create and needs to be set later.
     * @param dragIn string selector (ex: '.sidebar .grid-stack-item') or list of dom elements
     * @param dragInOptions options - see DDDragInOpt. (default: {handle: '.grid-stack-item-content', appendTo: 'body'}
     * @param root optional root which defaults to document (for shadow dom pas the parent HTMLDocument)
     */
    static setupDragIn(dragIn, dragInOptions, root = document) {
        if (dragInOptions?.pause !== undefined) {
            _dd_manager__WEBPACK_IMPORTED_MODULE_5__.DDManager.pauseDrag = dragInOptions.pause;
        }
        dragInOptions = { ..._types__WEBPACK_IMPORTED_MODULE_2__.dragInDefaultOptions, ...(dragInOptions || {}) };
        let els = (typeof dragIn === 'string') ? _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.getElements(dragIn, root) : dragIn;
        if (els.length)
            els?.forEach(el => {
                if (!dd.isDraggable(el))
                    dd.dragIn(el, dragInOptions);
            });
    }
    /**
     * Enables/Disables dragging by the user of specific grid element. If you want all items, and have it affect future items, use enableMove() instead. No-op for static grids.
     * IF you are looking to prevent an item from moving (due to being pushed around by another during collision) use locked property instead.
     * @param els widget or selector to modify.
     * @param val if true widget will be draggable, assuming the parent grid isn't noMove or static.
     */
    movable(els, val) {
        if (this.opts.staticGrid)
            return this; // can't move a static grid!
        GridStack.getElements(els).forEach(el => {
            let n = el.gridstackNode;
            if (!n)
                return;
            val ? delete n.noMove : n.noMove = true;
            this._prepareDragDropByNode(n); // init DD if need be, and adjust
        });
        return this;
    }
    /**
     * Enables/Disables user resizing of specific grid element. If you want all items, and have it affect future items, use enableResize() instead. No-op for static grids.
     * @param els  widget or selector to modify
     * @param val  if true widget will be resizable, assuming the parent grid isn't noResize or static.
     */
    resizable(els, val) {
        if (this.opts.staticGrid)
            return this; // can't resize a static grid!
        GridStack.getElements(els).forEach(el => {
            let n = el.gridstackNode;
            if (!n)
                return;
            val ? delete n.noResize : n.noResize = true;
            this._prepareDragDropByNode(n); // init DD if need be, and adjust
        });
        return this;
    }
    /**
     * Temporarily disables widgets moving/resizing.
     * If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
     * Note: no-op for static grid
     * This is a shortcut for:
     * @example
     *  grid.enableMove(false);
     *  grid.enableResize(false);
     * @param recurse true (default) if sub-grids also get updated
     */
    disable(recurse = true) {
        if (this.opts.staticGrid)
            return;
        this.enableMove(false, recurse);
        this.enableResize(false, recurse);
        this._triggerEvent('disable');
        return this;
    }
    /**
     * Re-enables widgets moving/resizing - see disable().
     * Note: no-op for static grid.
     * This is a shortcut for:
     * @example
     *  grid.enableMove(true);
     *  grid.enableResize(true);
     * @param recurse true (default) if sub-grids also get updated
     */
    enable(recurse = true) {
        if (this.opts.staticGrid)
            return;
        this.enableMove(true, recurse);
        this.enableResize(true, recurse);
        this._triggerEvent('enable');
        return this;
    }
    /**
     * Enables/disables widget moving. No-op for static grids, and locally defined items still overrule
     * @param recurse true (default) if sub-grids also get updated
     */
    enableMove(doEnable, recurse = true) {
        if (this.opts.staticGrid)
            return this; // can't move a static grid!
        doEnable ? delete this.opts.disableDrag : this.opts.disableDrag = true; // FIRST before we update children as grid overrides #1658
        this.engine.nodes.forEach(n => {
            this._prepareDragDropByNode(n);
            if (n.subGrid && recurse)
                n.subGrid.enableMove(doEnable, recurse);
        });
        return this;
    }
    /**
     * Enables/disables widget resizing. No-op for static grids.
     * @param recurse true (default) if sub-grids also get updated
     */
    enableResize(doEnable, recurse = true) {
        if (this.opts.staticGrid)
            return this; // can't size a static grid!
        doEnable ? delete this.opts.disableResize : this.opts.disableResize = true; // FIRST before we update children as grid overrides #1658
        this.engine.nodes.forEach(n => {
            this._prepareDragDropByNode(n);
            if (n.subGrid && recurse)
                n.subGrid.enableResize(doEnable, recurse);
        });
        return this;
    }
    /** @internal removes any drag&drop present (called during destroy) */
    _removeDD(el) {
        dd.draggable(el, 'destroy').resizable(el, 'destroy');
        if (el.gridstackNode) {
            delete el.gridstackNode._initDD; // reset our DD init flag
        }
        delete el.ddElement;
        return this;
    }
    /** @internal called to add drag over to support widgets being added externally */
    _setupAcceptWidget() {
        // check if we need to disable things
        if (this.opts.staticGrid || (!this.opts.acceptWidgets && !this.opts.removable)) {
            dd.droppable(this.el, 'destroy');
            return this;
        }
        // vars shared across all methods
        let cellHeight, cellWidth;
        let onDrag = (event, el, helper) => {
            let node = el.gridstackNode;
            if (!node)
                return;
            helper = helper || el;
            let parent = this.el.getBoundingClientRect();
            let { top, left } = helper.getBoundingClientRect();
            left -= parent.left;
            top -= parent.top;
            let ui = { position: { top, left } };
            if (node._temporaryRemoved) {
                node.x = Math.max(0, Math.round(left / cellWidth));
                node.y = Math.max(0, Math.round(top / cellHeight));
                delete node.autoPosition;
                this.engine.nodeBoundFix(node);
                // don't accept *initial* location if doesn't fit #1419 (locked drop region, or can't grow), but maybe try if it will go somewhere
                if (!this.engine.willItFit(node)) {
                    node.autoPosition = true; // ignore x,y and try for any slot...
                    if (!this.engine.willItFit(node)) {
                        dd.off(el, 'drag'); // stop calling us
                        return; // full grid or can't grow
                    }
                    if (node._willFitPos) {
                        // use the auto position instead #1687
                        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(node, node._willFitPos);
                        delete node._willFitPos;
                    }
                }
                // re-use the existing node dragging method
                this._onStartMoving(helper, event, ui, node, cellWidth, cellHeight);
            }
            else {
                // re-use the existing node dragging that does so much of the collision detection
                this._dragOrResize(helper, event, ui, node, cellWidth, cellHeight);
            }
        };
        dd.droppable(this.el, {
            accept: (el) => {
                let node = el.gridstackNode;
                // set accept drop to true on ourself (which we ignore) so we don't get "can't drop" icon in HTML5 mode while moving
                if (node?.grid === this)
                    return true;
                if (!this.opts.acceptWidgets)
                    return false;
                // check for accept method or class matching
                let canAccept = true;
                if (typeof this.opts.acceptWidgets === 'function') {
                    canAccept = this.opts.acceptWidgets(el);
                }
                else {
                    let selector = (this.opts.acceptWidgets === true ? '.grid-stack-item' : this.opts.acceptWidgets);
                    canAccept = el.matches(selector);
                }
                // finally check to make sure we actually have space left #1571
                if (canAccept && node && this.opts.maxRow) {
                    let n = { w: node.w, h: node.h, minW: node.minW, minH: node.minH }; // only width/height matters and autoPosition
                    canAccept = this.engine.willItFit(n);
                }
                return canAccept;
            }
        })
            /**
             * entering our grid area
             */
            .on(this.el, 'dropover', (event, el, helper) => {
            // console.log(`over ${this.el.gridstack.opts.id} ${count++}`); // TEST
            let node = el.gridstackNode;
            // ignore drop enter on ourself (unless we temporarily removed) which happens on a simple drag of our item
            if (node?.grid === this && !node._temporaryRemoved) {
                // delete node._added; // reset this to track placeholder again in case we were over other grid #1484 (dropout doesn't always clear)
                return false; // prevent parent from receiving msg (which may be a grid as well)
            }
            // fix #1578 when dragging fast, we may not get a leave on the previous grid so force one now
            if (node?.grid && node.grid !== this && !node._temporaryRemoved) {
                // console.log('dropover without leave'); // TEST
                let otherGrid = node.grid;
                otherGrid._leave(el, helper);
            }
            // cache cell dimensions (which don't change), position can animate if we removed an item in otherGrid that affects us...
            cellWidth = this.cellWidth();
            cellHeight = this.getCellHeight(true);
            // load any element attributes if we don't have a node
            if (!node) {
                node = this._readAttr(el, false); // don't wipe external (e.g. drag toolbar) attr #2354
            }
            if (!node.grid) {
                node._isExternal = true;
                el.gridstackNode = node;
            }
            // calculate the grid size based on element outer size
            helper = helper || el;
            let w = node.w || Math.round(helper.offsetWidth / cellWidth) || 1;
            let h = node.h || Math.round(helper.offsetHeight / cellHeight) || 1;
            // if the item came from another grid, make a copy and save the original info in case we go back there
            if (node.grid && node.grid !== this) {
                // copy the node original values (min/max/id/etc...) but override width/height/other flags which are this grid specific
                // console.log('dropover cloning node'); // TEST
                if (!el._gridstackNodeOrig)
                    el._gridstackNodeOrig = node; // shouldn't have multiple nested!
                el.gridstackNode = node = { ...node, w, h, grid: this };
                delete node.x;
                delete node.y;
                this.engine.cleanupNode(node)
                    .nodeBoundFix(node);
                // restore some internal fields we need after clearing them all
                node._initDD =
                    node._isExternal = // DOM needs to be re-parented on a drop
                        node._temporaryRemoved = true; // so it can be inserted onDrag below
            }
            else {
                node.w = w;
                node.h = h;
                node._temporaryRemoved = true; // so we can insert it
            }
            // clear any marked for complete removal (Note: don't check _isAboutToRemove as that is cleared above - just do it)
            this._itemRemoving(node.el, false);
            dd.on(el, 'drag', onDrag);
            // make sure this is called at least once when going fast #1578
            onDrag(event, el, helper);
            return false; // prevent parent from receiving msg (which may be a grid as well)
        })
            /**
             * Leaving our grid area...
             */
            .on(this.el, 'dropout', (event, el, helper) => {
            // console.log(`out ${this.el.gridstack.opts.id} ${count++}`); // TEST
            let node = el.gridstackNode;
            if (!node)
                return false;
            // fix #1578 when dragging fast, we might get leave after other grid gets enter (which calls us to clean)
            // so skip this one if we're not the active grid really..
            if (!node.grid || node.grid === this) {
                this._leave(el, helper);
                // if we were created as temporary nested grid, go back to before state
                if (this._isTemp) {
                    this.removeAsSubGrid(node);
                }
            }
            return false; // prevent parent from receiving msg (which may be grid as well)
        })
            /**
             * end - releasing the mouse
             */
            .on(this.el, 'drop', (event, el, helper) => {
            let node = el.gridstackNode;
            // ignore drop on ourself from ourself that didn't come from the outside - dragend will handle the simple move instead
            if (node?.grid === this && !node._isExternal)
                return false;
            let wasAdded = !!this.placeholder.parentElement; // skip items not actually added to us because of constrains, but do cleanup #1419
            this.placeholder.remove();
            // notify previous grid of removal
            // console.log('drop delete _gridstackNodeOrig') // TEST
            let origNode = el._gridstackNodeOrig;
            delete el._gridstackNodeOrig;
            if (wasAdded && origNode?.grid && origNode.grid !== this) {
                let oGrid = origNode.grid;
                oGrid.engine.removeNodeFromLayoutCache(origNode);
                oGrid.engine.removedNodes.push(origNode);
                oGrid._triggerRemoveEvent()._triggerChangeEvent();
                // if it's an empty sub-grid that got auto-created, nuke it
                if (oGrid.parentGridItem && !oGrid.engine.nodes.length && oGrid.opts.subGridDynamic) {
                    oGrid.removeAsSubGrid();
                }
            }
            if (!node)
                return false;
            // use existing placeholder node as it's already in our list with drop location
            if (wasAdded) {
                this.engine.cleanupNode(node); // removes all internal _xyz values
                node.grid = this;
            }
            delete node.grid._isTemp;
            dd.off(el, 'drag');
            // if we made a copy ('helper' which is temp) of the original node then insert a copy, else we move the original node (#1102)
            // as the helper will be nuked by jquery-ui otherwise. TODO: update old code path
            if (helper !== el) {
                helper.remove();
                el.gridstackNode = origNode; // original item (left behind) is re-stored to pre dragging as the node now has drop info
                if (wasAdded) {
                    el = el.cloneNode(true);
                }
            }
            else {
                el.remove(); // reduce flicker as we change depth here, and size further down
                this._removeDD(el);
            }
            if (!wasAdded)
                return false;
            el.gridstackNode = node;
            node.el = el;
            let subGrid = node.subGrid?.el?.gridstack; // set when actual sub-grid present
            // @ts-ignore
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(node, this._readAttr(this.placeholder)); // placeholder values as moving VERY fast can throw things off #1578
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removePositioningStyles(el); // @ts-ignore
            this._writeAttr(el, node);
            el.classList.add(_types__WEBPACK_IMPORTED_MODULE_2__.gridDefaults.itemClass, this.opts.itemClass);
            this.el.appendChild(el); // @ts-ignore // TODO: now would be ideal time to _removeHelperStyle() overriding floating styles (native only)
            if (subGrid) {
                subGrid.parentGridItem = node;
                if (!subGrid.opts.styleInHead)
                    subGrid._updateStyles(true); // re-create sub-grid styles now that we've moved
            }
            this._prepareDragDropByNode(node);
            this._updateContainerHeight();
            this.engine.addedNodes.push(node); // @ts-ignore
            this._triggerAddEvent(); // @ts-ignore
            this._triggerChangeEvent();
            this.engine.endUpdate();
            if (this._gsEventHandler['dropped']) {
                this._gsEventHandler['dropped']({ ...event, type: 'dropped' }, origNode && origNode.grid ? origNode : undefined, node);
            }
            return false; // prevent parent from receiving msg (which may be grid as well)
        });
        return this;
    }
    /** @internal mark item for removal */
    _itemRemoving(el, remove) {
        let node = el ? el.gridstackNode : undefined;
        if (!node || !node.grid || el.classList.contains(this.opts.removableOptions.decline))
            return;
        remove ? node._isAboutToRemove = true : delete node._isAboutToRemove;
        remove ? el.classList.add('grid-stack-item-removing') : el.classList.remove('grid-stack-item-removing');
    }
    /** @internal called to setup a trash drop zone if the user specifies it */
    _setupRemoveDrop() {
        if (!this.opts.staticGrid && typeof this.opts.removable === 'string') {
            let trashEl = document.querySelector(this.opts.removable);
            if (!trashEl)
                return this;
            // only register ONE drop-over/dropout callback for the 'trash', and it will
            // update the passed in item and parent grid because the 'trash' is a shared resource anyway,
            // and Native DD only has 1 event CB (having a list and technically a per grid removableOptions complicates things greatly)
            if (!dd.isDroppable(trashEl)) {
                dd.droppable(trashEl, this.opts.removableOptions)
                    .on(trashEl, 'dropover', (event, el) => this._itemRemoving(el, true))
                    .on(trashEl, 'dropout', (event, el) => this._itemRemoving(el, false));
            }
        }
        return this;
    }
    /** @internal prepares the element for drag&drop */
    _prepareDragDropByNode(node) {
        let el = node.el;
        const noMove = node.noMove || this.opts.disableDrag;
        const noResize = node.noResize || this.opts.disableResize;
        // check for disabled grid first
        if (this.opts.staticGrid || (noMove && noResize)) {
            if (node._initDD) {
                this._removeDD(el); // nukes everything instead of just disable, will add some styles back next
                delete node._initDD;
            }
            el.classList.add('ui-draggable-disabled', 'ui-resizable-disabled'); // add styles one might depend on #1435
            return this;
        }
        if (!node._initDD) {
            // variables used/cashed between the 3 start/move/end methods, in addition to node passed above
            let cellWidth;
            let cellHeight;
            /** called when item starts moving/resizing */
            let onStartMoving = (event, ui) => {
                // trigger any 'dragstart' / 'resizestart' manually
                if (this._gsEventHandler[event.type]) {
                    this._gsEventHandler[event.type](event, event.target);
                }
                cellWidth = this.cellWidth();
                cellHeight = this.getCellHeight(true); // force pixels for calculations
                this._onStartMoving(el, event, ui, node, cellWidth, cellHeight);
            };
            /** called when item is being dragged/resized */
            let dragOrResize = (event, ui) => {
                this._dragOrResize(el, event, ui, node, cellWidth, cellHeight);
            };
            /** called when the item stops moving/resizing */
            let onEndMoving = (event) => {
                this.placeholder.remove();
                delete node._moving;
                delete node._event;
                delete node._lastTried;
                // if the item has moved to another grid, we're done here
                let target = event.target;
                if (!target.gridstackNode || target.gridstackNode.grid !== this)
                    return;
                node.el = target;
                if (node._isAboutToRemove) {
                    let grid = el.gridstackNode.grid;
                    if (grid._gsEventHandler[event.type]) {
                        grid._gsEventHandler[event.type](event, target);
                    }
                    grid.engine.nodes.push(node); // temp add it back so we can proper remove it next
                    grid.removeWidget(el, true, true);
                }
                else {
                    _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.removePositioningStyles(target);
                    if (node._temporaryRemoved) {
                        // got removed - restore item back to before dragging position
                        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.copyPos(node, node._orig); // @ts-ignore
                        this._writePosAttr(target, node);
                        this.engine.addNode(node);
                    }
                    else {
                        // move to new placeholder location
                        this._writePosAttr(target, node);
                    }
                    if (this._gsEventHandler[event.type]) {
                        this._gsEventHandler[event.type](event, target);
                    }
                }
                // @ts-ignore
                this._extraDragRow = 0; // @ts-ignore
                this._updateContainerHeight(); // @ts-ignore
                this._triggerChangeEvent();
                this.engine.endUpdate();
                if (event.type === 'resizestop') {
                    if (Number.isInteger(node.sizeToContent))
                        node.sizeToContent = node.h; // new soft limit
                    this.doContentResize(false, true, node); // no amin wait as will use the actual sized coordinate attr
                }
            };
            dd.draggable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                drag: dragOrResize
            }).resizable(el, {
                start: onStartMoving,
                stop: onEndMoving,
                resize: dragOrResize
            });
            node._initDD = true; // we've set DD support now
        }
        // finally fine tune move vs resize by disabling any part...
        dd.draggable(el, noMove ? 'disable' : 'enable')
            .resizable(el, noResize ? 'disable' : 'enable');
        return this;
    }
    /** @internal handles actual drag/resize start */
    _onStartMoving(el, event, ui, node, cellWidth, cellHeight) {
        this.engine.cleanNodes()
            .beginUpdate(node);
        // @ts-ignore
        this._writePosAttr(this.placeholder, node);
        this.el.appendChild(this.placeholder);
        // console.log('_onStartMoving placeholder') // TEST
        node.el = this.placeholder;
        node._lastUiPosition = ui.position;
        node._prevYPix = ui.position.top;
        node._moving = (event.type === 'dragstart'); // 'dropover' are not initially moving so they can go exactly where they enter (will push stuff out of the way)
        delete node._lastTried;
        if (event.type === 'dropover' && node._temporaryRemoved) {
            // console.log('engine.addNode x=' + node.x); // TEST
            this.engine.addNode(node); // will add, fix collisions, update attr and clear _temporaryRemoved
            node._moving = true; // AFTER, mark as moving object (wanted fix location before)
        }
        // set the min/max resize info
        this.engine.cacheRects(cellWidth, cellHeight, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft);
        if (event.type === 'resizestart') {
            dd.resizable(el, 'option', 'minWidth', cellWidth * (node.minW || 1))
                .resizable(el, 'option', 'minHeight', cellHeight * (node.minH || 1));
            if (node.maxW) {
                dd.resizable(el, 'option', 'maxWidth', cellWidth * node.maxW);
            }
            if (node.maxH) {
                dd.resizable(el, 'option', 'maxHeight', cellHeight * node.maxH);
            }
        }
    }
    /** @internal handles actual drag/resize */
    _dragOrResize(el, event, ui, node, cellWidth, cellHeight) {
        let p = { ...node._orig }; // could be undefined (_isExternal) which is ok (drag only set x,y and w,h will default to node value)
        let resizing;
        let mLeft = this.opts.marginLeft, mRight = this.opts.marginRight, mTop = this.opts.marginTop, mBottom = this.opts.marginBottom;
        // if margins (which are used to pass mid point by) are large relative to cell height/width, reduce them down #1855
        let mHeight = Math.round(cellHeight * 0.1), mWidth = Math.round(cellWidth * 0.1);
        mLeft = Math.min(mLeft, mWidth);
        mRight = Math.min(mRight, mWidth);
        mTop = Math.min(mTop, mHeight);
        mBottom = Math.min(mBottom, mHeight);
        if (event.type === 'drag') {
            if (node._temporaryRemoved)
                return; // handled by dropover
            let distance = ui.position.top - node._prevYPix;
            node._prevYPix = ui.position.top;
            if (this.opts.draggable.scroll !== false) {
                _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.updateScrollPosition(el, ui.position, distance);
            }
            // get new position taking into account the margin in the direction we are moving! (need to pass mid point by margin)
            let left = ui.position.left + (ui.position.left > node._lastUiPosition.left ? -mRight : mLeft);
            let top = ui.position.top + (ui.position.top > node._lastUiPosition.top ? -mBottom : mTop);
            p.x = Math.round(left / cellWidth);
            p.y = Math.round(top / cellHeight);
            // @ts-ignore// if we're at the bottom hitting something else, grow the grid so cursor doesn't leave when trying to place below others
            let prev = this._extraDragRow;
            if (this.engine.collide(node, p)) {
                let row = this.getRow();
                let extra = Math.max(0, (p.y + node.h) - row);
                if (this.opts.maxRow && row + extra > this.opts.maxRow) {
                    extra = Math.max(0, this.opts.maxRow - row);
                } // @ts-ignore
                this._extraDragRow = extra; // @ts-ignore
            }
            else
                this._extraDragRow = 0; // @ts-ignore
            if (this._extraDragRow !== prev)
                this._updateContainerHeight();
            if (node.x === p.x && node.y === p.y)
                return; // skip same
            // DON'T skip one we tried as we might have failed because of coverage <50% before
            // if (node._lastTried && node._lastTried.x === x && node._lastTried.y === y) return;
        }
        else if (event.type === 'resize') {
            if (p.x < 0)
                return;
            // Scrolling page if needed
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.updateScrollResize(event, el, cellHeight);
            // get new size
            p.w = Math.round((ui.size.width - mLeft) / cellWidth);
            p.h = Math.round((ui.size.height - mTop) / cellHeight);
            if (node.w === p.w && node.h === p.h)
                return;
            if (node._lastTried && node._lastTried.w === p.w && node._lastTried.h === p.h)
                return; // skip one we tried (but failed)
            // if we size on left/top side this might move us, so get possible new position as well
            let left = ui.position.left + mLeft;
            let top = ui.position.top + mTop;
            p.x = Math.round(left / cellWidth);
            p.y = Math.round(top / cellHeight);
            resizing = true;
        }
        node._event = event;
        node._lastTried = p; // set as last tried (will nuke if we go there)
        let rect = {
            x: ui.position.left + mLeft,
            y: ui.position.top + mTop,
            w: (ui.size ? ui.size.width : node.w * cellWidth) - mLeft - mRight,
            h: (ui.size ? ui.size.height : node.h * cellHeight) - mTop - mBottom
        };
        if (this.engine.moveNodeCheck(node, { ...p, cellWidth, cellHeight, rect, resizing })) {
            node._lastUiPosition = ui.position;
            this.engine.cacheRects(cellWidth, cellHeight, mTop, mRight, mBottom, mLeft);
            delete node._skipDown;
            if (resizing && node.subGrid)
                node.subGrid.onResize();
            this._extraDragRow = 0; // @ts-ignore
            this._updateContainerHeight();
            let target = event.target; // @ts-ignore
            this._writePosAttr(target, node);
            if (this._gsEventHandler[event.type]) {
                this._gsEventHandler[event.type](event, target);
            }
        }
    }
    /** @internal called when item leaving our area by either cursor dropout event
     * or shape is outside our boundaries. remove it from us, and mark temporary if this was
     * our item to start with else restore prev node values from prev grid it came from.
     */
    _leave(el, helper) {
        let node = el.gridstackNode;
        if (!node)
            return;
        dd.off(el, 'drag'); // no need to track while being outside
        // this gets called when cursor leaves and shape is outside, so only do this once
        if (node._temporaryRemoved)
            return;
        node._temporaryRemoved = true;
        this.engine.removeNode(node); // remove placeholder as well, otherwise it's a sign node is not in our list, which is a bigger issue
        node.el = node._isExternal && helper ? helper : el; // point back to real item being dragged
        if (this.opts.removable === true) { // boolean vs a class string
            // item leaving us and we are supposed to remove on leave (no need to drag onto trash) mark it so
            this._itemRemoving(el, true);
        }
        // finally if item originally came from another grid, but left us, restore things back to prev info
        if (el._gridstackNodeOrig) {
            // console.log('leave delete _gridstackNodeOrig') // TEST
            el.gridstackNode = el._gridstackNodeOrig;
            delete el._gridstackNodeOrig;
        }
        else if (node._isExternal) {
            // item came from outside (like a toolbar) so nuke any node info
            delete node.el;
            delete el.gridstackNode;
            // and restore all nodes back to original
            this.engine.restoreInitial();
        }
    }
    // legacy method removed
    commit() { (0,_utils__WEBPACK_IMPORTED_MODULE_1__.obsolete)(this, this.batchUpdate(false), 'commit', 'batchUpdate', '5.2'); return this; }
}
/** parent class for sizing content. defaults to '.grid-stack-item-content' */
GridStack.resizeToContentParent = '.grid-stack-item-content';
/** scoping so users can call GridStack.Utils.sort() for example */
GridStack.Utils = _utils__WEBPACK_IMPORTED_MODULE_1__.Utils;
/** scoping so users can call new GridStack.Engine(12) for example */
GridStack.Engine = _gridstack_engine__WEBPACK_IMPORTED_MODULE_0__.GridStackEngine;
GridStack.GDRev = '9.5.0';

//# sourceMappingURL=gridstack.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/types.js":
/*!**********************************************!*\
  !*** ./node_modules/gridstack/dist/types.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragInDefaultOptions: () => (/* binding */ dragInDefaultOptions),
/* harmony export */   gridDefaults: () => (/* binding */ gridDefaults)
/* harmony export */ });
/**
 * types.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */
// default values for grid options - used during init and when saving out
const gridDefaults = {
    alwaysShowResizeHandle: 'mobile',
    animate: true,
    auto: true,
    cellHeight: 'auto',
    cellHeightThrottle: 100,
    cellHeightUnit: 'px',
    column: 12,
    draggable: { handle: '.grid-stack-item-content', appendTo: 'body', scroll: true },
    handle: '.grid-stack-item-content',
    itemClass: 'grid-stack-item',
    margin: 10,
    marginUnit: 'px',
    maxRow: 0,
    minRow: 0,
    oneColumnSize: 768,
    placeholderClass: 'grid-stack-placeholder',
    placeholderText: '',
    removableOptions: { accept: 'grid-stack-item', decline: 'grid-stack-non-removable' },
    resizable: { handles: 'se' },
    rtl: 'auto',
    // **** same as not being set ****
    // disableDrag: false,
    // disableOneColumnMode: false,
    // disableResize: false,
    // float: false,
    // handleClass: null,
    // oneColumnModeDomSort: false,
    // removable: false,
    // staticGrid: false,
    // styleInHead: false,
    //removable
};
/** default dragIn options */
const dragInDefaultOptions = {
    handle: '.grid-stack-item-content',
    appendTo: 'body',
    // revert: 'invalid',
    // scroll: false,
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/gridstack/dist/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/gridstack/dist/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils),
/* harmony export */   obsolete: () => (/* binding */ obsolete),
/* harmony export */   obsoleteAttr: () => (/* binding */ obsoleteAttr),
/* harmony export */   obsoleteOpts: () => (/* binding */ obsoleteOpts),
/* harmony export */   obsoleteOptsDel: () => (/* binding */ obsoleteOptsDel)
/* harmony export */ });
/**
 * utils.ts 9.5.0
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */
/** checks for obsolete method names */
// eslint-disable-next-line
function obsolete(self, f, oldName, newName, rev) {
    let wrapper = (...args) => {
        console.warn('gridstack.js: Function `' + oldName + '` is deprecated in ' + rev + ' and has been replaced ' +
            'with `' + newName + '`. It will be **removed** in a future release');
        return f.apply(self, args);
    };
    wrapper.prototype = f.prototype;
    return wrapper;
}
/** checks for obsolete grid options (can be used for any fields, but msg is about options) */
function obsoleteOpts(opts, oldName, newName, rev) {
    if (opts[oldName] !== undefined) {
        opts[newName] = opts[oldName];
        console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + ' and has been replaced with `' +
            newName + '`. It will be **removed** in a future release');
    }
}
/** checks for obsolete grid options which are gone */
function obsoleteOptsDel(opts, oldName, rev, info) {
    if (opts[oldName] !== undefined) {
        console.warn('gridstack.js: Option `' + oldName + '` is deprecated in ' + rev + info);
    }
}
/** checks for obsolete Jquery element attributes */
function obsoleteAttr(el, oldName, newName, rev) {
    let oldAttr = el.getAttribute(oldName);
    if (oldAttr !== null) {
        el.setAttribute(newName, oldAttr);
        console.warn('gridstack.js: attribute `' + oldName + '`=' + oldAttr + ' is deprecated on this object in ' + rev + ' and has been replaced with `' +
            newName + '`. It will be **removed** in a future release');
    }
}
/**
 * Utility methods
 */
class Utils {
    /** convert a potential selector into actual list of html elements. optional root which defaults to document (for shadow dom) */
    static getElements(els, root = document) {
        if (typeof els === 'string') {
            const doc = ('getElementById' in root) ? root : undefined;
            // Note: very common for people use to id='1,2,3' which is only legal as HTML5 id, but not CSS selectors
            // so if we start with a number, assume it's an id and just return that one item...
            // see https://github.com/gridstack/gridstack.js/issues/2234#issuecomment-1523796562
            if (doc && !isNaN(+els[0])) { // start with digit
                const el = doc.getElementById(els);
                return el ? [el] : [];
            }
            let list = root.querySelectorAll(els);
            if (!list.length && els[0] !== '.' && els[0] !== '#') {
                list = root.querySelectorAll('.' + els);
                if (!list.length) {
                    list = root.querySelectorAll('#' + els);
                }
            }
            return Array.from(list);
        }
        return [els];
    }
    /** convert a potential selector into actual single element. optional root which defaults to document (for shadow dom) */
    static getElement(els, root = document) {
        if (typeof els === 'string') {
            const doc = ('getElementById' in root) ? root : undefined;
            if (!els.length)
                return null;
            if (doc && els[0] === '#') {
                return doc.getElementById(els.substring(1));
            }
            if (els[0] === '#' || els[0] === '.' || els[0] === '[') {
                return root.querySelector(els);
            }
            // if we start with a digit, assume it's an id (error calling querySelector('#1')) as class are not valid CSS
            if (doc && !isNaN(+els[0])) { // start with digit
                return doc.getElementById(els);
            }
            // finally try string, then id, then class
            let el = root.querySelector(els);
            if (doc && !el) {
                el = doc.getElementById(els);
            }
            if (!el) {
                el = root.querySelector('.' + els);
            }
            return el;
        }
        return els;
    }
    /** true if we should resize to content */
    static shouldSizeToContent(n) {
        return n?.grid && (!!n.sizeToContent || (n.grid.opts.sizeToContent && n.sizeToContent !== false));
    }
    /** returns true if a and b overlap */
    static isIntercepted(a, b) {
        return !(a.y >= b.y + b.h || a.y + a.h <= b.y || a.x + a.w <= b.x || a.x >= b.x + b.w);
    }
    /** returns true if a and b touch edges or corners */
    static isTouching(a, b) {
        return Utils.isIntercepted(a, { x: b.x - 0.5, y: b.y - 0.5, w: b.w + 1, h: b.h + 1 });
    }
    /** returns the area a and b overlap */
    static areaIntercept(a, b) {
        let x0 = (a.x > b.x) ? a.x : b.x;
        let x1 = (a.x + a.w < b.x + b.w) ? a.x + a.w : b.x + b.w;
        if (x1 <= x0)
            return 0; // no overlap
        let y0 = (a.y > b.y) ? a.y : b.y;
        let y1 = (a.y + a.h < b.y + b.h) ? a.y + a.h : b.y + b.h;
        if (y1 <= y0)
            return 0; // no overlap
        return (x1 - x0) * (y1 - y0);
    }
    /** returns the area */
    static area(a) {
        return a.w * a.h;
    }
    /**
     * Sorts array of nodes
     * @param nodes array to sort
     * @param dir 1 for asc, -1 for desc (optional)
     * @param width width of the grid. If undefined the width will be calculated automatically (optional).
     **/
    static sort(nodes, dir = 1, column) {
        column = column || nodes.reduce((col, n) => Math.max(n.x + n.w, col), 0) || 12;
        if (dir === -1)
            return nodes.sort((a, b) => ((b.x ?? 1000) + (b.y ?? 1000) * column) - ((a.x ?? 1000) + (a.y ?? 1000) * column));
        else
            return nodes.sort((b, a) => ((b.x ?? 1000) + (b.y ?? 1000) * column) - ((a.x ?? 1000) + (a.y ?? 1000) * column));
    }
    /** find an item by id */
    static find(nodes, id) {
        return id ? nodes.find(n => n.id === id) : undefined;
    }
    /**
     * creates a style sheet with style id under given parent
     * @param id will set the 'gs-style-id' attribute to that id
     * @param parent to insert the stylesheet as first child,
     * if none supplied it will be appended to the document head instead.
     */
    static createStylesheet(id, parent, options) {
        let style = document.createElement('style');
        const nonce = options?.nonce;
        if (nonce)
            style.nonce = nonce;
        style.setAttribute('type', 'text/css');
        style.setAttribute('gs-style-id', id);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (style.styleSheet) { // TODO: only CSSImportRule have that and different beast ??
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            style.styleSheet.cssText = '';
        }
        else {
            style.appendChild(document.createTextNode('')); // WebKit hack
        }
        if (!parent) {
            // default to head
            parent = document.getElementsByTagName('head')[0];
            parent.appendChild(style);
        }
        else {
            parent.insertBefore(style, parent.firstChild);
        }
        return style.sheet;
    }
    /** removed the given stylesheet id */
    static removeStylesheet(id) {
        let el = document.querySelector('STYLE[gs-style-id=' + id + ']');
        if (el && el.parentNode)
            el.remove();
    }
    /** inserts a CSS rule */
    static addCSSRule(sheet, selector, rules) {
        if (typeof sheet.addRule === 'function') {
            sheet.addRule(selector, rules);
        }
        else if (typeof sheet.insertRule === 'function') {
            sheet.insertRule(`${selector}{${rules}}`);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static toBool(v) {
        if (typeof v === 'boolean') {
            return v;
        }
        if (typeof v === 'string') {
            v = v.toLowerCase();
            return !(v === '' || v === 'no' || v === 'false' || v === '0');
        }
        return Boolean(v);
    }
    static toNumber(value) {
        return (value === null || value.length === 0) ? undefined : Number(value);
    }
    static parseHeight(val) {
        let h;
        let unit = 'px';
        if (typeof val === 'string') {
            if (val === 'auto' || val === '')
                h = 0;
            else {
                let match = val.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%)?$/);
                if (!match) {
                    throw new Error(`Invalid height val = ${val}`);
                }
                unit = match[2] || 'px';
                h = parseFloat(match[1]);
            }
        }
        else {
            h = val;
        }
        return { h, unit };
    }
    /** copies unset fields in target to use the given default sources values */
    // eslint-disable-next-line
    static defaults(target, ...sources) {
        sources.forEach(source => {
            for (const key in source) {
                if (!source.hasOwnProperty(key))
                    return;
                if (target[key] === null || target[key] === undefined) {
                    target[key] = source[key];
                }
                else if (typeof source[key] === 'object' && typeof target[key] === 'object') {
                    // property is an object, recursively add it's field over... #1373
                    this.defaults(target[key], source[key]);
                }
            }
        });
        return target;
    }
    /** given 2 objects return true if they have the same values. Checks for Object {} having same fields and values (just 1 level down) */
    static same(a, b) {
        if (typeof a !== 'object')
            return a == b;
        if (typeof a !== typeof b)
            return false;
        // else we have object, check just 1 level deep for being same things...
        if (Object.keys(a).length !== Object.keys(b).length)
            return false;
        for (const key in a) {
            if (a[key] !== b[key])
                return false;
        }
        return true;
    }
    /** copies over b size & position (GridStackPosition), and optionally min/max as well */
    static copyPos(a, b, doMinMax = false) {
        if (b.x !== undefined)
            a.x = b.x;
        if (b.y !== undefined)
            a.y = b.y;
        if (b.w !== undefined)
            a.w = b.w;
        if (b.h !== undefined)
            a.h = b.h;
        if (doMinMax) {
            if (b.minW)
                a.minW = b.minW;
            if (b.minH)
                a.minH = b.minH;
            if (b.maxW)
                a.maxW = b.maxW;
            if (b.maxH)
                a.maxH = b.maxH;
        }
        return a;
    }
    /** true if a and b has same size & position */
    static samePos(a, b) {
        return a && b && a.x === b.x && a.y === b.y && (a.w || 1) === (b.w || 1) && (a.h || 1) === (b.h || 1);
    }
    /** given a node, makes sure it's min/max are valid */
    static sanitizeMinMax(node) {
        // remove 0, undefine, null
        if (!node.minW) {
            delete node.minW;
        }
        if (!node.minH) {
            delete node.minH;
        }
        if (!node.maxW) {
            delete node.maxW;
        }
        if (!node.maxH) {
            delete node.maxH;
        }
    }
    /** removes field from the first object if same as the second objects (like diffing) and internal '_' for saving */
    static removeInternalAndSame(a, b) {
        if (typeof a !== 'object' || typeof b !== 'object')
            return;
        for (let key in a) {
            let val = a[key];
            if (key[0] === '_' || val === b[key]) {
                delete a[key];
            }
            else if (val && typeof val === 'object' && b[key] !== undefined) {
                for (let i in val) {
                    if (val[i] === b[key][i] || i[0] === '_') {
                        delete val[i];
                    }
                }
                if (!Object.keys(val).length) {
                    delete a[key];
                }
            }
        }
    }
    /** removes internal fields '_' and default values for saving */
    static removeInternalForSave(n, removeEl = true) {
        for (let key in n) {
            if (key[0] === '_' || n[key] === null || n[key] === undefined)
                delete n[key];
        }
        delete n.grid;
        if (removeEl)
            delete n.el;
        // delete default values (will be re-created on read)
        if (!n.autoPosition)
            delete n.autoPosition;
        if (!n.noResize)
            delete n.noResize;
        if (!n.noMove)
            delete n.noMove;
        if (!n.locked)
            delete n.locked;
        if (n.w === 1 || n.w === n.minW)
            delete n.w;
        if (n.h === 1 || n.h === n.minH)
            delete n.h;
    }
    /** return the closest parent (or itself) matching the given class */
    // static closestUpByClass(el: HTMLElement, name: string): HTMLElement {
    //   while (el) {
    //     if (el.classList.contains(name)) return el;
    //     el = el.parentElement
    //   }
    //   return null;
    // }
    /** delay calling the given function for given delay, preventing new calls from happening while waiting */
    static throttle(func, delay) {
        let isWaiting = false;
        return (...args) => {
            if (!isWaiting) {
                isWaiting = true;
                setTimeout(() => { func(...args); isWaiting = false; }, delay);
            }
        };
    }
    static removePositioningStyles(el) {
        let style = el.style;
        if (style.position) {
            style.removeProperty('position');
        }
        if (style.left) {
            style.removeProperty('left');
        }
        if (style.top) {
            style.removeProperty('top');
        }
        if (style.width) {
            style.removeProperty('width');
        }
        if (style.height) {
            style.removeProperty('height');
        }
    }
    /** @internal returns the passed element if scrollable, else the closest parent that will, up to the entire document scrolling element */
    static getScrollElement(el) {
        if (!el)
            return document.scrollingElement || document.documentElement; // IE support
        const style = getComputedStyle(el);
        const overflowRegex = /(auto|scroll)/;
        if (overflowRegex.test(style.overflow + style.overflowY)) {
            return el;
        }
        else {
            return this.getScrollElement(el.parentElement);
        }
    }
    /** @internal */
    static updateScrollPosition(el, position, distance) {
        // is widget in view?
        let rect = el.getBoundingClientRect();
        let innerHeightOrClientHeight = (window.innerHeight || document.documentElement.clientHeight);
        if (rect.top < 0 ||
            rect.bottom > innerHeightOrClientHeight) {
            // set scrollTop of first parent that scrolls
            // if parent is larger than el, set as low as possible
            // to get entire widget on screen
            let offsetDiffDown = rect.bottom - innerHeightOrClientHeight;
            let offsetDiffUp = rect.top;
            let scrollEl = this.getScrollElement(el);
            if (scrollEl !== null) {
                let prevScroll = scrollEl.scrollTop;
                if (rect.top < 0 && distance < 0) {
                    // moving up
                    if (el.offsetHeight > innerHeightOrClientHeight) {
                        scrollEl.scrollTop += distance;
                    }
                    else {
                        scrollEl.scrollTop += Math.abs(offsetDiffUp) > Math.abs(distance) ? distance : offsetDiffUp;
                    }
                }
                else if (distance > 0) {
                    // moving down
                    if (el.offsetHeight > innerHeightOrClientHeight) {
                        scrollEl.scrollTop += distance;
                    }
                    else {
                        scrollEl.scrollTop += offsetDiffDown > distance ? distance : offsetDiffDown;
                    }
                }
                // move widget y by amount scrolled
                position.top += scrollEl.scrollTop - prevScroll;
            }
        }
    }
    /**
     * @internal Function used to scroll the page.
     *
     * @param event `MouseEvent` that triggers the resize
     * @param el `HTMLElement` that's being resized
     * @param distance Distance from the V edges to start scrolling
     */
    static updateScrollResize(event, el, distance) {
        const scrollEl = this.getScrollElement(el);
        const height = scrollEl.clientHeight;
        // #1727 event.clientY is relative to viewport, so must compare this against position of scrollEl getBoundingClientRect().top
        // #1745 Special situation if scrollEl is document 'html': here browser spec states that
        // clientHeight is height of viewport, but getBoundingClientRect() is rectangle of html element;
        // this discrepancy arises because in reality scrollbar is attached to viewport, not html element itself.
        const offsetTop = (scrollEl === this.getScrollElement()) ? 0 : scrollEl.getBoundingClientRect().top;
        const pointerPosY = event.clientY - offsetTop;
        const top = pointerPosY < distance;
        const bottom = pointerPosY > height - distance;
        if (top) {
            // This also can be done with a timeout to keep scrolling while the mouse is
            // in the scrolling zone. (will have smoother behavior)
            scrollEl.scrollBy({ behavior: 'smooth', top: pointerPosY - distance });
        }
        else if (bottom) {
            scrollEl.scrollBy({ behavior: 'smooth', top: distance - (height - pointerPosY) });
        }
    }
    /** single level clone, returning a new object with same top fields. This will share sub objects and arrays */
    static clone(obj) {
        if (obj === null || obj === undefined || typeof (obj) !== 'object') {
            return obj;
        }
        // return Object.assign({}, obj);
        if (obj instanceof Array) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return [...obj];
        }
        return { ...obj };
    }
    /**
     * Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
     * Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.
     */
    static cloneDeep(obj) {
        // list of fields we will skip during cloneDeep (nested objects, other internal)
        const skipFields = ['parentGrid', 'el', 'grid', 'subGrid', 'engine'];
        // return JSON.parse(JSON.stringify(obj)); // doesn't work with date format ?
        const ret = Utils.clone(obj);
        for (const key in ret) {
            // NOTE: we don't support function/circular dependencies so skip those properties for now...
            if (ret.hasOwnProperty(key) && typeof (ret[key]) === 'object' && key.substring(0, 2) !== '__' && !skipFields.find(k => k === key)) {
                ret[key] = Utils.cloneDeep(obj[key]);
            }
        }
        return ret;
    }
    /** deep clone the given HTML node, removing teh unique id field */
    static cloneNode(el) {
        const node = el.cloneNode(true);
        node.removeAttribute('id');
        return node;
    }
    static appendTo(el, parent) {
        let parentNode;
        if (typeof parent === 'string') {
            parentNode = Utils.getElement(parent);
        }
        else {
            parentNode = parent;
        }
        if (parentNode) {
            parentNode.appendChild(el);
        }
    }
    // public static setPositionRelative(el: HTMLElement): void {
    //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
    //     el.style.position = "relative";
    //   }
    // }
    static addElStyles(el, styles) {
        if (styles instanceof Object) {
            for (const s in styles) {
                if (styles.hasOwnProperty(s)) {
                    if (Array.isArray(styles[s])) {
                        // support fallback value
                        styles[s].forEach(val => {
                            el.style[s] = val;
                        });
                    }
                    else {
                        el.style[s] = styles[s];
                    }
                }
            }
        }
    }
    static initEvent(e, info) {
        const evt = { type: info.type };
        const obj = {
            button: 0,
            which: 0,
            buttons: 1,
            bubbles: true,
            cancelable: true,
            target: info.target ? info.target : e.target
        };
        // don't check for `instanceof DragEvent` as Safari use MouseEvent #1540
        if (e.dataTransfer) {
            evt['dataTransfer'] = e.dataTransfer; // workaround 'readonly' field.
        }
        ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].forEach(p => evt[p] = e[p]); // keys
        ['pageX', 'pageY', 'clientX', 'clientY', 'screenX', 'screenY'].forEach(p => evt[p] = e[p]); // point info
        return { ...evt, ...obj };
    }
    /** copies the MouseEvent properties and sends it as another event to the given target */
    static simulateMouseEvent(e, simulatedType, target) {
        const simulatedEvent = document.createEvent('MouseEvents');
        simulatedEvent.initMouseEvent(simulatedType, // type
        true, // bubbles
        true, // cancelable
        window, // view
        1, // detail
        e.screenX, // screenX
        e.screenY, // screenY
        e.clientX, // clientX
        e.clientY, // clientY
        e.ctrlKey, // ctrlKey
        e.altKey, // altKey
        e.shiftKey, // shiftKey
        e.metaKey, // metaKey
        0, // button
        e.target // relatedTarget
        );
        (target || e.target).dispatchEvent(simulatedEvent);
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./resources/css/card.css":
/*!********************************!*\
  !*** ./resources/css/card.css ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nError: Cannot find module '../../vendor/laravel/nova/tailwind.config'\nRequire stack:\n- C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at _resolve (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:250334)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:252917)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\tailwind.config.js:1:106\n    at evalModule (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:255614)\n    at jiti (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\jiti\\dist\\jiti.js:1:253542)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:37:30\n    at loadConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\load-config.js:39:6)\n    at getTailwindConfig (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:71:116)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\lib\\setupTrackingContext.js:100:92\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\processTailwindFeatures.js:48:11\n    at plugins (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\tailwindcss\\lib\\plugin.js:38:69)\n    at LazyResult.runOnRoot (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:329:16)\n    at LazyResult.runAsync (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss\\lib\\lazy-result.js:258:26)\n    at async Object.loader (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss-loader\\dist\\index.js:97:14)\n    at processResult (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\webpack\\lib\\NormalModule.js:764:19)\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\webpack\\lib\\NormalModule.js:866:5\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\laragon\\www\\nova-dashboard\\nova-dashboard\\node_modules\\postcss-loader\\dist\\index.js:142:7)");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Widget.vue?vue&type=style&index=0&id=6830466f&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/Card.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Card.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_b9bc2c0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=b9bc2c0a */ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a");
/* harmony import */ var _Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js */ "./resources/js/components/Card.vue?vue&type=script&lang=js");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss */ "./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Card_vue_vue_type_template_id_b9bc2c0a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Card.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Filter.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Filter.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filter_vue_vue_type_template_id_1dedfda3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter.vue?vue&type=template&id=1dedfda3&scoped=true */ "./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true");
/* harmony import */ var _Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.vue?vue&type=script&lang=js */ "./resources/js/components/Filter.vue?vue&type=script&lang=js");
/* harmony import */ var _Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true */ "./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filter_vue_vue_type_template_id_1dedfda3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1dedfda3"],['__file',"resources/js/components/Filter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Widget.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Widget.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget_vue_vue_type_template_id_6830466f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget.vue?vue&type=template&id=6830466f */ "./resources/js/components/Widget.vue?vue&type=template&id=6830466f");
/* harmony import */ var _Widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.vue?vue&type=script&lang=js */ "./resources/js/components/Widget.vue?vue&type=script&lang=js");
/* harmony import */ var _Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widget.vue?vue&type=style&index=0&id=6830466f&lang=css */ "./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Widget_vue_vue_type_template_id_6830466f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Widget.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Filter.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Filter.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Widget.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Widget.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Widget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a":
/*!************************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_b9bc2c0a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_template_id_b9bc2c0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=template&id=b9bc2c0a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a");


/***/ }),

/***/ "./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_1dedfda3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_template_id_1dedfda3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=template&id=1dedfda3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=template&id=1dedfda3&scoped=true");


/***/ }),

/***/ "./resources/js/components/Widget.vue?vue&type=template&id=6830466f":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Widget.vue?vue&type=template&id=6830466f ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_template_id_6830466f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_template_id_6830466f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Widget.vue?vue&type=template&id=6830466f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=template&id=6830466f");


/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Card_vue_vue_type_style_index_0_id_b9bc2c0a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card.vue?vue&type=style&index=0&id=b9bc2c0a&lang=scss");


/***/ }),

/***/ "./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filter_vue_vue_type_style_index_0_id_1dedfda3_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filter.vue?vue&type=style&index=0&id=1dedfda3&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Widget_vue_vue_type_style_index_0_id_6830466f_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Widget.vue?vue&type=style&index=0&id=6830466f&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Widget.vue?vue&type=style&index=0&id=6830466f&lang=css");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

/***/ }),

/***/ "./node_modules/vue-collapsed/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/vue-collapsed/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapse: () => (/* binding */ Q)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");

const A = "--vc-auto-duration", K = `height var(${A}) cubic-bezier(0.33, 1, 0.68, 1)`, d = { padding: 0 }, L = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: "0" };
function R(l) {
  return l.value ? parseFloat(getComputedStyle(l.value).height) : 0;
}
function _(l) {
  var a;
  return { height: `${((a = l.value) == null ? void 0 : a.scrollHeight) ?? 0}px` };
}
function k(l) {
  if (!l.value)
    return {};
  const { transition: a } = getComputedStyle(l.value);
  return a === "all 0s ease 0s" ? { transition: K } : { transition: a };
}
function z(l) {
  if (!l.value)
    return !0;
  const { transition: a } = getComputedStyle(l.value);
  return matchMedia("(prefers-reduced-motion: reduce)").matches || a.includes("none") || a.includes("height 0s");
}
const Q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({ inheritAttrs: !0, __name: "Collapse", props: { when: { type: Boolean }, baseHeight: { default: 0 }, as: { default: "div" } }, emits: ["collapse", "expand", "collapsed", "expanded"], setup(l, { emit: a }) {
  const p = l, n = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(p, "when"), o = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(p, "baseHeight"), c = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ overflow: "hidden", height: `${o.value}px` })), g = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ ...d, ...o.value === 0 ? { display: "none" } : c.value })), t = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), v = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(n.value ? "expanded" : "collapsed"), s = (e) => v.value = e, h = (0,vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef)({}), i = (e) => h.value = e, r = (e) => i({ ...h.value, ...e }), x = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(300), y = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ [A]: `${x.value}ms` }));
  function w() {
    i(d), s("expanded"), a("expanded");
  }
  function C() {
    i(g.value), s("collapsed"), a("collapsed");
  }
  function B(e) {
    var u;
    e.target === t.value && e.propertyName === "height" && (n.value ? ((u = t.value) == null ? void 0 : u.scrollHeight) === R(t) && w() : o.value === R(t) && C());
  }
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    if (!t.value)
      return;
    n.value || o.value !== 0 || i(L);
    const e = function(b = 0) {
      if (b === 0)
        return 0;
      const $ = b / 36, S = Math.round(10 * (4 + 15 * $ ** 0.25 + $ / 5));
      return Number.isFinite(S) ? S : 0;
    }(t.value.scrollHeight - o.value);
    var u;
    u = e <= 0 ? 300 : e, x.value = u, i(n.value ? d : g.value);
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(n, (e) => {
    if (e) {
      if (z(t))
        return w();
      s("expanding"), a("expand"), i({ ...d, ...c.value, ...y.value }), requestAnimationFrame(() => {
        r({ ..._(t), ...k(t), willChange: "height" });
      });
    } else {
      if (z(t))
        return C();
      s("collapsing"), a("collapse"), r({ ...y.value, ..._(t) }), requestAnimationFrame(() => {
        r({ ...c.value, ...k(t), willChange: "height" });
      });
    }
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(o, (e) => {
    n.value || r(e > 0 ? { display: void 0, height: `${e}px` } : { display: "none" });
  }), (e, u) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(p.as), { ref_key: "collapseRef", ref: t, style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(h.value), onTransitionend: B, "data-collapse": v.value }, { default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(e.$slots, "default", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)({ state: v.value })))]), _: 3 }, 40, ["style", "data-collapse"]));
} });



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/card.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/css/card.css");
/******/ 	
/******/ })()
;