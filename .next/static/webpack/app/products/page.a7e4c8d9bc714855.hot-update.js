"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./components/ui/background-gradient.tsx":
/*!***********************************************!*\
  !*** ./components/ui/background-gradient.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackgroundGradient: function() { return /* binding */ BackgroundGradient; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\nconst BackgroundGradient = (param)=>{\n    let { children, className, containerClassName, animate = true } = param;\n    const variants = {\n        initial: {\n            backgroundPosition: \"0 50%\"\n        },\n        animate: {\n            backgroundPosition: [\n                \"0, 50%\",\n                \"100% 50%\",\n                \"0 50%\"\n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\" group\", containerClassName),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: animate ? variants : undefined,\n                initial: animate ? \"initial\" : undefined,\n                animate: animate ? \"animate\" : undefined,\n                transition: animate ? {\n                    duration: 5,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                } : undefined,\n                style: {\n                    backgroundSize: animate ? \"100% 100%\" : undefined\n                },\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"absolute inset-0  z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500\", \" bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]\")\n            }, void 0, false, {\n                fileName: \"/home/mzn010/projects/product/components/ui/background-gradient.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: animate ? variants : undefined,\n                initial: animate ? \"initial\" : undefined,\n                animate: animate ? \"animate\" : undefined,\n                transition: animate ? {\n                    duration: 5,\n                    repeat: Infinity,\n                    repeatType: \"reverse\"\n                } : undefined,\n                style: {\n                    backgroundSize: animate ? \"100% 100%\" : undefined\n                },\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"absolute inset-0 z-[1]\", \"bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]\")\n            }, void 0, false, {\n                fileName: \"/home/mzn010/projects/product/components/ui/background-gradient.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"relative z-10\", className),\n                children: children\n            }, void 0, false, {\n                fileName: \"/home/mzn010/projects/product/components/ui/background-gradient.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mzn010/projects/product/components/ui/background-gradient.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BackgroundGradient;\nvar _c;\n$RefreshReg$(_c, \"BackgroundGradient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvYmFja2dyb3VuZC1ncmFkaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNKO0FBQ2E7QUFFaEMsTUFBTUcscUJBQXFCO1FBQUMsRUFDakNDLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxrQkFBa0IsRUFDbEJDLFVBQVUsSUFBSSxFQU1mO0lBQ0MsTUFBTUMsV0FBVztRQUNmQyxTQUFTO1lBQ1BDLG9CQUFvQjtRQUN0QjtRQUNBSCxTQUFTO1lBQ1BHLG9CQUFvQjtnQkFBQztnQkFBVTtnQkFBWTthQUFRO1FBQ3JEO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSU4sV0FBV0wsOENBQUVBLENBQUMsVUFBVU07OzBCQUMzQiw4REFBQ0osaURBQU1BLENBQUNTLEdBQUc7Z0JBQ1RILFVBQVVELFVBQVVDLFdBQVdJO2dCQUMvQkgsU0FBU0YsVUFBVSxZQUFZSztnQkFDL0JMLFNBQVNBLFVBQVUsWUFBWUs7Z0JBQy9CQyxZQUNFTixVQUNJO29CQUNFTyxVQUFVO29CQUNWQyxRQUFRQztvQkFDUkMsWUFBWTtnQkFDZCxJQUNBTDtnQkFFTk0sT0FBTztvQkFDTEMsZ0JBQWdCWixVQUFVLGNBQWNLO2dCQUMxQztnQkFDQVAsV0FBV0wsOENBQUVBLENBQ1gsK0ZBQ0E7Ozs7OzswQkFHSiw4REFBQ0UsaURBQU1BLENBQUNTLEdBQUc7Z0JBQ1RILFVBQVVELFVBQVVDLFdBQVdJO2dCQUMvQkgsU0FBU0YsVUFBVSxZQUFZSztnQkFDL0JMLFNBQVNBLFVBQVUsWUFBWUs7Z0JBQy9CQyxZQUNFTixVQUNJO29CQUNFTyxVQUFVO29CQUNWQyxRQUFRQztvQkFDUkMsWUFBWTtnQkFDZCxJQUNBTDtnQkFFTk0sT0FBTztvQkFDTEMsZ0JBQWdCWixVQUFVLGNBQWNLO2dCQUMxQztnQkFDQVAsV0FBV0wsOENBQUVBLENBQ1gsMEJBQ0E7Ozs7OzswQkFJSiw4REFBQ1c7Z0JBQUlOLFdBQVdMLDhDQUFFQSxDQUFDLGlCQUFpQks7MEJBQWFEOzs7Ozs7Ozs7Ozs7QUFHdkQsRUFBRTtLQW5FV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9iYWNrZ3JvdW5kLWdyYWRpZW50LnRzeD9kOTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y259IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZEdyYWRpZW50ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgY29udGFpbmVyQ2xhc3NOYW1lLFxuICBhbmltYXRlID0gdHJ1ZSxcbn06IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY29udGFpbmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBhbmltYXRlPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjAgNTAlXCIsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFtcIjAsIDUwJVwiLCBcIjEwMCUgNTAlXCIsIFwiMCA1MCVcIl0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCIgZ3JvdXBcIiwgY29udGFpbmVyQ2xhc3NOYW1lKX0+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB2YXJpYW50cz17YW5pbWF0ZSA/IHZhcmlhbnRzIDogdW5kZWZpbmVkfVxuICAgICAgICBpbml0aWFsPXthbmltYXRlID8gXCJpbml0aWFsXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGUgPyBcImFuaW1hdGVcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgdHJhbnNpdGlvbj17XG4gICAgICAgICAgYW5pbWF0ZVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcInJldmVyc2VcIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBhbmltYXRlID8gXCIxMDAlIDEwMCVcIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcImFic29sdXRlIGluc2V0LTAgIHotWzFdIG9wYWNpdHktNjAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgYmx1ci14bCAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIixcbiAgICAgICAgICBcIiBiZy1bcmFkaWFsLWdyYWRpZW50KGNpcmNsZV9mYXJ0aGVzdC1zaWRlX2F0XzBfMTAwJSwjMDBjY2IxLHRyYW5zcGFyZW50KSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2ZhcnRoZXN0LXNpZGVfYXRfMTAwJV8wLCM3YjYxZmYsdHJhbnNwYXJlbnQpLHJhZGlhbC1ncmFkaWVudChjaXJjbGVfZmFydGhlc3Qtc2lkZV9hdF8xMDAlXzEwMCUsI2ZmYzQxNCx0cmFuc3BhcmVudCkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9mYXJ0aGVzdC1zaWRlX2F0XzBfMCwjMWNhMGZiLCMxNDEzMTYpXVwiXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgdmFyaWFudHM9e2FuaW1hdGUgPyB2YXJpYW50cyA6IHVuZGVmaW5lZH1cbiAgICAgICAgaW5pdGlhbD17YW5pbWF0ZSA/IFwiaW5pdGlhbFwiIDogdW5kZWZpbmVkfVxuICAgICAgICBhbmltYXRlPXthbmltYXRlID8gXCJhbmltYXRlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIHRyYW5zaXRpb249e1xuICAgICAgICAgIGFuaW1hdGVcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgcmVwZWF0VHlwZTogXCJyZXZlcnNlXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYW5pbWF0ZSA/IFwiMTAwJSAxMDAlXCIgOiB1bmRlZmluZWQsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC0wIHotWzFdXCIsXG4gICAgICAgICAgXCJiZy1bcmFkaWFsLWdyYWRpZW50KGNpcmNsZV9mYXJ0aGVzdC1zaWRlX2F0XzBfMTAwJSwjMDBjY2IxLHRyYW5zcGFyZW50KSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlX2ZhcnRoZXN0LXNpZGVfYXRfMTAwJV8wLCM3YjYxZmYsdHJhbnNwYXJlbnQpLHJhZGlhbC1ncmFkaWVudChjaXJjbGVfZmFydGhlc3Qtc2lkZV9hdF8xMDAlXzEwMCUsI2ZmYzQxNCx0cmFuc3BhcmVudCkscmFkaWFsLWdyYWRpZW50KGNpcmNsZV9mYXJ0aGVzdC1zaWRlX2F0XzBfMCwjMWNhMGZiLCMxNDEzMTYpXVwiXG4gICAgICAgICl9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJyZWxhdGl2ZSB6LTEwXCIsIGNsYXNzTmFtZSl9PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY24iLCJSZWFjdCIsIm1vdGlvbiIsIkJhY2tncm91bmRHcmFkaWVudCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpdiIsInVuZGVmaW5lZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/background-gradient.tsx\n"));

/***/ })

});