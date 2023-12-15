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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CodeBlock = (param)=>{\n    let { value } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n        className: \"overflow-y-auto min-h-8 flex flex-row p-3 px-1 text-base bg-black text-white rounded-md\",\n        children: value\n    }, void 0, false, {\n        fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = CodeBlock;\nconst TypingEffect = (param)=>{\n    let { text, bot } = param;\n    _s();\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            if (currentIndex < text.length) {\n                setDisplayedText((prevText)=>prevText + text[currentIndex]);\n                setCurrentIndex((prevIndex)=>prevIndex + 1);\n            } else {\n                clearInterval(timer);\n            }\n        }, 50);\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, [\n        text,\n        currentIndex\n    ]);\n    const components = {\n        code: (param)=>{\n            let { node, inline, children, ...props } = param;\n            const className = inline ? \"inline-code\" : \"block-code\";\n            // Pass children (content) as value prop to CodeBlock component\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CodeBlock, {\n                value: children,\n                ...props\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 35,\n                columnNumber: 20\n            }, undefined);\n        },\n        blockquote: (param)=>{\n            let { node, children } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 37,\n                columnNumber: 45\n            }, undefined);\n        },\n        heading: (param)=>{\n            let { level, children } = param;\n            if (level === 2) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                    lineNumber: 42,\n                    columnNumber: 22\n                }, undefined);\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n                lineNumber: 44,\n                columnNumber: 20\n            }, undefined);\n        }\n    };\n    if (bot === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n            components: components,\n            className: \"text-base text-slate-900 font-sora\",\n            children: displayedText\n        }, void 0, false, {\n            fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n            lineNumber: 53,\n            columnNumber: 16\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_2__.Markdown, {\n            components: components,\n            className: \"text-base text-slate-900 font-sora\",\n            children: text\n        }, void 0, false, {\n            fileName: \"/Users/glo/Documents/nextweb2/app/typeeffect.js\",\n            lineNumber: 56,\n            columnNumber: 16\n        }, undefined);\n    }\n};\n_s(TypingEffect, \"4p+UW4yKA08vspvaIMFg+MJxO3w=\");\n_c1 = TypingEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypingEffect);\nvar _c, _c1;\n$RefreshReg$(_c, \"CodeBlock\");\n$RefreshReg$(_c1, \"TypingEffect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90eXBlZWZmZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUUzQyxNQUFNSSxZQUFZO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBRXhCLHFCQUNJLDhEQUFDQztRQUFLQyxXQUFVO2tCQUEyRkY7Ozs7OztBQUVuSDtLQUxNRDtBQU9OLE1BQU1JLGVBQWU7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRTs7SUFDL0IsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFakRDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsUUFBUUMsWUFBWTtZQUN0QixJQUFJSCxlQUFlSixLQUFLUSxNQUFNLEVBQUU7Z0JBQzVCTCxpQkFBaUJNLENBQUFBLFdBQVlBLFdBQVdULElBQUksQ0FBQ0ksYUFBYTtnQkFDMURDLGdCQUFnQkssQ0FBQUEsWUFBYUEsWUFBWTtZQUM3QyxPQUFPO2dCQUNIQyxjQUFjTDtZQUNsQjtRQUNKLEdBQUc7UUFFSCxPQUFPO1lBQ0hLLGNBQWNMO1FBQ2xCO0lBQ0osR0FBRztRQUFDTjtRQUFNSTtLQUFhO0lBRXZCLE1BQU1RLGFBQWE7UUFDZmYsTUFBTTtnQkFBQyxFQUFFZ0IsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPO1lBRXZDLE1BQU1sQixZQUFZZ0IsU0FBUyxnQkFBZ0I7WUFDM0MsK0RBQStEO1lBQy9ELHFCQUFPLDhEQUFDbkI7Z0JBQVVDLE9BQU9tQjtnQkFBVyxHQUFHQyxLQUFLOzs7Ozs7UUFDaEQ7UUFDQUMsWUFBWTtnQkFBQyxFQUFFSixJQUFJLEVBQUVFLFFBQVEsRUFBRTtpQ0FBSyw4REFBQ0U7MEJBQVlGOzs7Ozs7O1FBRWpERyxTQUFTO2dCQUFDLEVBQUVDLEtBQUssRUFBRUosUUFBUSxFQUFFO1lBRXpCLElBQUlJLFVBQVUsR0FBRztnQkFDZixxQkFBTyw4REFBQ0M7OEJBQUlMOzs7Ozs7WUFDZDtZQUNBLHFCQUFPLDhEQUFDTTswQkFBSU47Ozs7OztRQUNkO0lBRU47SUFLQSxJQUFJZCxRQUFRLE1BQU07UUFDZCxxQkFBTyw4REFBQ1Asb0RBQWFBO1lBQUNrQixZQUFZQTtZQUFZZCxXQUFVO1lBQXFDaUIsVUFBVWI7Ozs7OztJQUMzRyxPQUNLO1FBQ0QscUJBQU8sOERBQUNSLG9EQUFhQTtZQUFDa0IsWUFBWUE7WUFBWWQsV0FBVTtZQUFxQ2lCLFVBQVVmOzs7Ozs7SUFDM0c7QUFFSjtHQWhETUQ7TUFBQUE7QUFrRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3R5cGVlZmZlY3QuanM/MjIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcblxuY29uc3QgQ29kZUJsb2NrID0gKHsgdmFsdWUgfSkgPT4ge1xuICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPSdvdmVyZmxvdy15LWF1dG8gbWluLWgtOCBmbGV4IGZsZXgtcm93IHAtMyBweC0xIHRleHQtYmFzZSBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQnPnt2YWx1ZX08L2NvZGU+XG4gICAgKTtcbn07XG5cbmNvbnN0IFR5cGluZ0VmZmVjdCA9ICh7IHRleHQsIGJvdCB9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXllZFRleHQsIHNldERpc3BsYXllZFRleHRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheWVkVGV4dChwcmV2VGV4dCA9PiBwcmV2VGV4dCArIHRleHRbY3VycmVudEluZGV4XSk7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHByZXZJbmRleCA9PiBwcmV2SW5kZXggKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwKTsgXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFt0ZXh0LCBjdXJyZW50SW5kZXhdKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgICAgIGNvZGU6ICh7IG5vZGUsIGlubGluZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gaW5saW5lID8gJ2lubGluZS1jb2RlJyA6ICdibG9jay1jb2RlJztcbiAgICAgICAgICAgIC8vIFBhc3MgY2hpbGRyZW4gKGNvbnRlbnQpIGFzIHZhbHVlIHByb3AgdG8gQ29kZUJsb2NrIGNvbXBvbmVudFxuICAgICAgICAgICAgcmV0dXJuIDxDb2RlQmxvY2sgdmFsdWU9e2NoaWxkcmVufSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9LFxuICAgICAgICBibG9ja3F1b3RlOiAoeyBub2RlLCBjaGlsZHJlbiB9KSA9PiA8YmxvY2txdW90ZT57Y2hpbGRyZW59PC9ibG9ja3F1b3RlPixcblxuICAgICAgICBoZWFkaW5nOiAoeyBsZXZlbCwgY2hpbGRyZW4gfSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxoMj57Y2hpbGRyZW59PC9oMj47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPGgxPntjaGlsZHJlbn08L2gxPjtcbiAgICAgICAgICB9LFxuXG4gICAgfTtcblxuXG5cblxuICAgIGlmIChib3QgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IGNsYXNzTmFtZT0ndGV4dC1iYXNlIHRleHQtc2xhdGUtOTAwIGZvbnQtc29yYScgY2hpbGRyZW49e2Rpc3BsYXllZFRleHR9IC8+O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IGNsYXNzTmFtZT0ndGV4dC1iYXNlIHRleHQtc2xhdGUtOTAwIGZvbnQtc29yYScgY2hpbGRyZW49e3RleHR9IC8+XG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBpbmdFZmZlY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0TWFya2Rvd24iLCJDb2RlQmxvY2siLCJ2YWx1ZSIsImNvZGUiLCJjbGFzc05hbWUiLCJUeXBpbmdFZmZlY3QiLCJ0ZXh0IiwiYm90IiwiZGlzcGxheWVkVGV4dCIsInNldERpc3BsYXllZFRleHQiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJ0aW1lciIsInNldEludGVydmFsIiwibGVuZ3RoIiwicHJldlRleHQiLCJwcmV2SW5kZXgiLCJjbGVhckludGVydmFsIiwiY29tcG9uZW50cyIsIm5vZGUiLCJpbmxpbmUiLCJjaGlsZHJlbiIsInByb3BzIiwiYmxvY2txdW90ZSIsImhlYWRpbmciLCJsZXZlbCIsImgyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/typeeffect.js\n"));

/***/ })

});