"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./context/LangWrapper.tsx":
/*!*********************************!*\
  !*** ./context/LangWrapper.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst LangContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(\"en\");\nconst LangWrapper = (param)=>{\n    let { children } = param;\n    _s();\n    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LangContext.Provider, {\n        value: lang,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"The current language is: \",\n                    lang\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/farukarnaut/EducationProjects/nextjs-typescript/context/LangWrapper.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setLang(\"en\"),\n                children: \"EN\"\n            }, void 0, false, {\n                fileName: \"/Users/farukarnaut/EducationProjects/nextjs-typescript/context/LangWrapper.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/farukarnaut/EducationProjects/nextjs-typescript/context/LangWrapper.tsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setLang(\"de\"),\n                children: \"DE\"\n            }, void 0, false, {\n                fileName: \"/Users/farukarnaut/EducationProjects/nextjs-typescript/context/LangWrapper.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/farukarnaut/EducationProjects/nextjs-typescript/context/LangWrapper.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LangWrapper, \"zBAk1dGmlP9YgPBD/UW9ro1+pX8=\");\n_c = LangWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangWrapper);\nvar _c;\n$RefreshReg$(_c, \"LangWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvTGFuZ1dyYXBwZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRTtBQUluRSxNQUFNRSw0QkFBY0Ysb0RBQWFBLENBQU87QUFFeEMsTUFBTUcsY0FBMkM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBTztJQUV2QyxxQkFDSSw4REFBQ0MsWUFBWUssUUFBUTtRQUFDQyxPQUFPSDs7MEJBQ3pCLDhEQUFDSTs7b0JBQUc7b0JBQTBCSjs7Ozs7OzswQkFDOUIsOERBQUNLO2dCQUFPQyxTQUFTLElBQU1MLFFBQVE7MEJBQU87Ozs7OzswQkFDdEMsOERBQUNNOzs7OzswQkFDRCw4REFBQ0Y7Z0JBQU9DLFNBQVMsSUFBTUwsUUFBUTswQkFBTzs7Ozs7Ozs7Ozs7O0FBR2xEO0dBWE1IO0tBQUFBO0FBYU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9MYW5nV3JhcHBlci50c3g/YjBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIExhbmcgPSBcImVuXCIgfCBcImRlXCI7XG5cbmNvbnN0IExhbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxMYW5nPihcImVuXCIpXG5cbmNvbnN0IExhbmdXcmFwcGVyOiBSZWFjdC5GQzxQcm9wc1dpdGhDaGlsZHJlbj4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGU8TGFuZz4oXCJlblwiKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExhbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtsYW5nfT5cbiAgICAgICAgICAgIDxoMT5UaGUgY3VycmVudCBsYW5ndWFnZSBpczoge2xhbmd9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TGFuZyhcImVuXCIpfT5FTjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TGFuZyhcImRlXCIpfT5ERTwvYnV0dG9uPlxuICAgICAgICA8L0xhbmdDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZ1dyYXBwZXI7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxhbmdDb250ZXh0IiwiTGFuZ1dyYXBwZXIiLCJjaGlsZHJlbiIsImxhbmciLCJzZXRMYW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/LangWrapper.tsx\n"));

/***/ })

});