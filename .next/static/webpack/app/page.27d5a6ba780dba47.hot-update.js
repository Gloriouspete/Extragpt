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

/***/ "(app-pages-browser)/./app/typeeffect.js":
/*!***************************!*\
  !*** ./app/typeeffect.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-gfm */ \"(app-pages-browser)/./node_modules/remark-gfm/lib/index.js\");\n/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-math */ \"(app-pages-browser)/./node_modules/remark-math/lib/index.js\");\n/* harmony import */ var rehype_katex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-katex */ \"(app-pages-browser)/./node_modules/rehype-katex/lib/index.js\");\n/* harmony import */ var remark_supersub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-supersub */ \"(app-pages-browser)/./node_modules/remark-supersub/lib/index.js\");\n/* harmony import */ var remark_breaks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! remark-breaks */ \"(app-pages-browser)/./node_modules/remark-breaks/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CodeBlock = (param)=>{\n    let { value } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n        className: \"overflow-y-auto min-h-8 flex flex-row p-3 px-1 text-base bg-black text-white rounded-md\",\n        children: value\n    }, void 0, false, {\n        fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CodeBlock;\nconst TypingEffect = (param)=>{\n    let { text, bot } = param;\n    _s();\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            if (currentIndex < text.length) {\n                setDisplayedText((prevText)=>prevText + text[currentIndex]);\n                setCurrentIndex((prevIndex)=>prevIndex + 1);\n            } else {\n                clearInterval(timer);\n            }\n        }, 50);\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, [\n        text,\n        currentIndex\n    ]);\n    const components = {\n        code: (param)=>{\n            let { node, inline, children, ...props } = param;\n            const className = inline ? \"inline-code\" : \"block-code\";\n            // Pass children (content) as value prop to CodeBlock component\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CodeBlock, {\n                value: children,\n                ...props\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 40,\n                columnNumber: 20\n            }, undefined);\n        },\n        blockquote: (param)=>{\n            let { node, children } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 42,\n                columnNumber: 45\n            }, undefined);\n        },\n        heading: (param)=>{\n            let { level, children } = param;\n            if (level === 2) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                    lineNumber: 47,\n                    columnNumber: 24\n                }, undefined);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 49,\n                columnNumber: 20\n            }, undefined);\n        }\n    };\n    if (bot === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n            escapeHtml: false,\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                remark_math__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                remark_supersub__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                remark_breaks__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_katex__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                re\n            ],\n            components: components,\n            className: \"text-base text-slate-900 font-sora\",\n            children: displayedText\n        }, void 0, false, {\n            fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n            lineNumber: 58,\n            columnNumber: 16\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n            remarkPlugins: [\n                remark_gfm__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                remark_math__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                remark_supersub__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                remark_breaks__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n            ],\n            rehypePlugins: [\n                rehype_katex__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n            ],\n            components: components,\n            className: \"text-base text-slate-900 font-sora\",\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n            lineNumber: 62,\n            columnNumber: 16\n        }, undefined);\n    }\n};\n_s(TypingEffect, \"4p+UW4yKA08vspvaIMFg+MJxO3w=\");\n_c1 = TypingEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypingEffect);\nvar _c, _c1;\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c1, \"TypingEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90eXBlZWZmZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNSO0FBQ1I7QUFDRTtBQUNFO0FBQ0E7QUFDRTtBQUNOO0FBQ25DLE1BQU1VLFlBQVk7UUFBQyxFQUFFQyxLQUFLLEVBQUU7SUFFeEIscUJBQ0ksOERBQUNDO1FBQUtDLFdBQVU7a0JBQTJGRjs7Ozs7O0FBRW5IO0tBTE1EO0FBT04sTUFBTUksZUFBZTtRQUFDLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFOztJQUMvQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDa0IsY0FBY0MsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVqREMsZ0RBQVNBLENBQUM7UUFDTixNQUFNbUIsUUFBUUMsWUFBWTtZQUN0QixJQUFJSCxlQUFlSixLQUFLUSxNQUFNLEVBQUU7Z0JBQzVCTCxpQkFBaUJNLENBQUFBLFdBQVlBLFdBQVdULElBQUksQ0FBQ0ksYUFBYTtnQkFDMURDLGdCQUFnQkssQ0FBQUEsWUFBYUEsWUFBWTtZQUM3QyxPQUFPO2dCQUNIQyxjQUFjTDtZQUNsQjtRQUNKLEdBQUc7UUFFSCxPQUFPO1lBQ0hLLGNBQWNMO1FBQ2xCO0lBQ0osR0FBRztRQUFDTjtRQUFNSTtLQUFhO0lBRXZCLE1BQU1RLGFBQWE7UUFDZmYsTUFBTTtnQkFBQyxFQUFFZ0IsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPO1lBRXZDLE1BQU1sQixZQUFZZ0IsU0FBUyxnQkFBZ0I7WUFDM0MsK0RBQStEO1lBQy9ELHFCQUFPLDhEQUFDbkI7Z0JBQVVDLE9BQU9tQjtnQkFBVyxHQUFHQyxLQUFLOzs7Ozs7UUFDaEQ7UUFDQUMsWUFBWTtnQkFBQyxFQUFFSixJQUFJLEVBQUVFLFFBQVEsRUFBRTtpQ0FBSyw4REFBQ0U7MEJBQVlGOzs7Ozs7O1FBRWpERyxTQUFTO2dCQUFDLEVBQUVDLEtBQUssRUFBRUosUUFBUSxFQUFFO1lBRXpCLElBQUlJLFVBQVUsR0FBRztnQkFDYixxQkFBTyw4REFBQ0M7OEJBQUlMOzs7Ozs7WUFDaEI7WUFDQSxxQkFBTyw4REFBQ007MEJBQUlOOzs7Ozs7UUFDaEI7SUFFSjtJQUtBLElBQUlkLFFBQVEsTUFBTTtRQUNkLHFCQUFPLDhEQUFDYixvREFBYUE7WUFBQ2tDLFlBQVk7WUFBT0MsZUFBZTtnQkFBQ2xDLGtEQUFTQTtnQkFBRUMsbURBQVVBO2dCQUFFRSx1REFBUUE7Z0JBQUVDLHFEQUFZQTthQUFDO1lBQ25HK0IsZUFBZTtnQkFBQ2pDLG9EQUFXQTtnQkFBQ2tDO2FBQUc7WUFBRWIsWUFBWUE7WUFBWWQsV0FBVTtZQUFxQ2lCLFVBQVViOzs7Ozs7SUFDMUgsT0FDSztRQUNELHFCQUFPLDhEQUFDZCxvREFBYUE7WUFBQ21DLGVBQWU7Z0JBQUNsQyxrREFBU0E7Z0JBQUVDLG1EQUFVQTtnQkFBRUUsdURBQVFBO2dCQUFFQyxxREFBWUE7YUFBQztZQUNoRitCLGVBQWU7Z0JBQUNqQyxvREFBV0E7YUFBQztZQUFFcUIsWUFBWUE7WUFBWWQsV0FBVTtZQUFxQ2lCLFVBQVVmOzs7Ozs7SUFDdkg7QUFFSjtHQWxETUQ7TUFBQUE7QUFvRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3R5cGVlZmZlY3QuanM/MjIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSc7XG5pbXBvcnQgcmVtYXJrTWF0aCBmcm9tICdyZW1hcmstbWF0aCc7XG5pbXBvcnQgcmVoeXBlS2F0ZXggZnJvbSAncmVoeXBlLWthdGV4JztcbmltcG9ydCBzdXBlcnN1YiBmcm9tICdyZW1hcmstc3VwZXJzdWInO1xuaW1wb3J0IHJlbWFya0JyZWFrcyBmcm9tICdyZW1hcmstYnJlYWtzJztcbmltcG9ydCByZWh5cGVSYXcgZnJvbSAncmVoeXBlLXJhdyc7XG5jb25zdCBDb2RlQmxvY2sgPSAoeyB2YWx1ZSB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9J292ZXJmbG93LXktYXV0byBtaW4taC04IGZsZXggZmxleC1yb3cgcC0zIHB4LTEgdGV4dC1iYXNlIGJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZC1tZCc+e3ZhbHVlfTwvY29kZT5cbiAgICApO1xufTtcblxuY29uc3QgVHlwaW5nRWZmZWN0ID0gKHsgdGV4dCwgYm90IH0pID0+IHtcbiAgICBjb25zdCBbZGlzcGxheWVkVGV4dCwgc2V0RGlzcGxheWVkVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5ZWRUZXh0KHByZXZUZXh0ID0+IHByZXZUZXh0ICsgdGV4dFtjdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocHJldkluZGV4ID0+IHByZXZJbmRleCArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdGV4dCwgY3VycmVudEluZGV4XSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgICBjb2RlOiAoeyBub2RlLCBpbmxpbmUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGlubGluZSA/ICdpbmxpbmUtY29kZScgOiAnYmxvY2stY29kZSc7XG4gICAgICAgICAgICAvLyBQYXNzIGNoaWxkcmVuIChjb250ZW50KSBhcyB2YWx1ZSBwcm9wIHRvIENvZGVCbG9jayBjb21wb25lbnRcbiAgICAgICAgICAgIHJldHVybiA8Q29kZUJsb2NrIHZhbHVlPXtjaGlsZHJlbn0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgfSxcbiAgICAgICAgYmxvY2txdW90ZTogKHsgbm9kZSwgY2hpbGRyZW4gfSkgPT4gPGJsb2NrcXVvdGU+e2NoaWxkcmVufTwvYmxvY2txdW90ZT4sXG5cbiAgICAgICAgaGVhZGluZzogKHsgbGV2ZWwsIGNoaWxkcmVuIH0pID0+IHtcblxuICAgICAgICAgICAgaWYgKGxldmVsID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxoMj57Y2hpbGRyZW59PC9oMj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPGgxPntjaGlsZHJlbn08L2gxPjtcbiAgICAgICAgfSxcblxuICAgIH07XG5cblxuXG5cbiAgICBpZiAoYm90ID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3RNYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gcmVtYXJrUGx1Z2lucz17W3JlbWFya0dmbSwgcmVtYXJrTWF0aCwgc3VwZXJzdWIsIHJlbWFya0JyZWFrc119XG4gICAgICAgICAgICByZWh5cGVQbHVnaW5zPXtbcmVoeXBlS2F0ZXgscmVdfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBjbGFzc05hbWU9J3RleHQtYmFzZSB0ZXh0LXNsYXRlLTkwMCBmb250LXNvcmEnIGNoaWxkcmVuPXtkaXNwbGF5ZWRUZXh0fSAvPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiA8UmVhY3RNYXJrZG93biByZW1hcmtQbHVnaW5zPXtbcmVtYXJrR2ZtLCByZW1hcmtNYXRoLCBzdXBlcnN1YiwgcmVtYXJrQnJlYWtzXX1cbiAgICAgICAgICAgIHJlaHlwZVBsdWdpbnM9e1tyZWh5cGVLYXRleF19IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IGNsYXNzTmFtZT0ndGV4dC1iYXNlIHRleHQtc2xhdGUtOTAwIGZvbnQtc29yYScgY2hpbGRyZW49e3RleHR9IC8+XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBpbmdFZmZlY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0TWFya2Rvd24iLCJyZW1hcmtHZm0iLCJyZW1hcmtNYXRoIiwicmVoeXBlS2F0ZXgiLCJzdXBlcnN1YiIsInJlbWFya0JyZWFrcyIsInJlaHlwZVJhdyIsIkNvZGVCbG9jayIsInZhbHVlIiwiY29kZSIsImNsYXNzTmFtZSIsIlR5cGluZ0VmZmVjdCIsInRleHQiLCJib3QiLCJkaXNwbGF5ZWRUZXh0Iiwic2V0RGlzcGxheWVkVGV4dCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJwcmV2VGV4dCIsInByZXZJbmRleCIsImNsZWFySW50ZXJ2YWwiLCJjb21wb25lbnRzIiwibm9kZSIsImlubGluZSIsImNoaWxkcmVuIiwicHJvcHMiLCJibG9ja3F1b3RlIiwiaGVhZGluZyIsImxldmVsIiwiaDIiLCJoMSIsImVzY2FwZUh0bWwiLCJyZW1hcmtQbHVnaW5zIiwicmVoeXBlUGx1Z2lucyIsInJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/typeeffect.js\n"));

/***/ })

});