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

/***/ "(app-pages-browser)/./app/log.js":
/*!********************!*\
  !*** ./app/log.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Log; },\n/* harmony export */   handleFileSelection: function() { return /* binding */ handleFileSelection; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract.js */ \"(app-pages-browser)/./node_modules/tesseract.js/src/index.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default,handleFileSelection auto */ \n\nasync function Log(text) {\n    console.log(\"got here\");\n    try {\n        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://nlpbackend-vmje.onre/chat\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            data: JSON.stringify({\n                message: text\n            })\n        });\n        if (response === null || response === void 0 ? void 0 : response.data) {\n            console.log(\"shanu mii\", response.data);\n            const mydata = response.data;\n            return mydata;\n        }\n    } catch (error) {\n        throw error;\n    }\n}\n_c = Log;\nconst handleFileSelection = async (files)=>{\n    const selectedFile = files[0]; // Get the first selected file\n    if (selectedFile) {\n        console.log(\"Selected file:\", selectedFile.name);\n        console.log(\"File type:\", selectedFile.type);\n        if (selectedFile.type.startsWith(\"image/\")) {\n            const reader = new FileReader();\n            reader.readAsDataURL(selectedFile); // Convert image to data URL for preview\n            const imageUrlPromise = new Promise((resolve, reject)=>{\n                reader.onload = (event)=>{\n                    const imageUrl = event.target.result;\n                    resolve(imageUrl);\n                };\n                reader.onerror = (error)=>{\n                    reject(error);\n                };\n            });\n            try {\n                const imageUrl = await imageUrlPromise; // Wait for image URL\n                const { data: { text } } = await tesseract_js__WEBPACK_IMPORTED_MODULE_0___default().recognize(imageUrl, \"eng\", {\n                    logger: (m)=>console.log(m.progress)\n                });\n                console.log(\"Recognized text:\", text);\n                return {\n                    success: true,\n                    data: text\n                };\n            } catch (error) {\n                console.error(\"Error recognizing text:\", error);\n                return {\n                    success: false,\n                    data: null\n                };\n            }\n        }\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Log\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7aUZBQ3lCO0FBQ1k7QUFDdEIsZUFBZUUsSUFBSUMsSUFBSTtJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1YsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTU4saURBQUtBLENBQUMsb0NBQW9DO1lBQy9ETyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBU1Q7WUFBSztRQUN2QztRQUNBLElBQUlHLHFCQUFBQSwrQkFBQUEsU0FBVUcsSUFBSSxFQUFFO1lBQ2xCTCxRQUFRQyxHQUFHLENBQUMsYUFBYUMsU0FBU0csSUFBSTtZQUN0QyxNQUFNSSxTQUFTUCxTQUFTRyxJQUFJO1lBQzVCLE9BQU9JO1FBQ1Q7SUFFRixFQUNBLE9BQU9DLE9BQU87UUFDWixNQUFNQTtJQUNSO0FBRUY7S0FyQjhCWjtBQXVCdkIsTUFBTWEsc0JBQXNCLE9BQU9DO0lBQ3hDLE1BQU1DLGVBQWVELEtBQUssQ0FBQyxFQUFFLEVBQUUsOEJBQThCO0lBRTdELElBQUlDLGNBQWM7UUFDaEJiLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JZLGFBQWFDLElBQUk7UUFDL0NkLFFBQVFDLEdBQUcsQ0FBQyxjQUFjWSxhQUFhRSxJQUFJO1FBRTNDLElBQUlGLGFBQWFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDLFdBQVc7WUFDMUMsTUFBTUMsU0FBUyxJQUFJQztZQUNuQkQsT0FBT0UsYUFBYSxDQUFDTixlQUFlLHdDQUF3QztZQUU1RSxNQUFNTyxrQkFBa0IsSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztnQkFDNUNOLE9BQU9PLE1BQU0sR0FBRyxDQUFDQztvQkFDZixNQUFNQyxXQUFXRCxNQUFNRSxNQUFNLENBQUNDLE1BQU07b0JBQ3BDTixRQUFRSTtnQkFDVjtnQkFDQVQsT0FBT1ksT0FBTyxHQUFHLENBQUNuQjtvQkFDaEJhLE9BQU9iO2dCQUNUO1lBQ0Y7WUFFQSxJQUFJO2dCQUNGLE1BQU1nQixXQUFXLE1BQU1OLGlCQUFpQixxQkFBcUI7Z0JBRTdELE1BQU0sRUFBRWYsTUFBTSxFQUFFTixJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU1GLDZEQUFtQixDQUFDNkIsVUFBVSxPQUFNO29CQUFFSyxRQUFRLENBQUNDLElBQU1oQyxRQUFRQyxHQUFHLENBQUMrQixFQUFFQyxRQUFRO2dCQUFFO2dCQUM5R2pDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO2dCQUVoQyxPQUFPO29CQUNMbUMsU0FBUztvQkFDVDdCLE1BQU1OO2dCQUNSO1lBQ0YsRUFBRSxPQUFPVyxPQUFPO2dCQUNkVixRQUFRVSxLQUFLLENBQUMsMkJBQTJCQTtnQkFDekMsT0FBTztvQkFDTHdCLFNBQVM7b0JBQ1Q3QixNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9nLmpzP2M0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBUZXNzZXJhY3QgZnJvbSBcInRlc3NlcmFjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTG9nKHRleHQpIHtcbmNvbnNvbGUubG9nKCdnb3QgaGVyZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9ubHBiYWNrZW5kLXZtamUub25yZS9jaGF0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogdGV4dCB9KSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2U/LmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaGFudSBtaWknLCByZXNwb25zZS5kYXRhKVxuICAgICAgY29uc3QgbXlkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgcmV0dXJuIG15ZGF0YVxuICAgIH1cblxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlRmlsZVNlbGVjdGlvbiA9IGFzeW5jIChmaWxlcykgPT4ge1xuICBjb25zdCBzZWxlY3RlZEZpbGUgPSBmaWxlc1swXTsgLy8gR2V0IHRoZSBmaXJzdCBzZWxlY3RlZCBmaWxlXG5cbiAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBmaWxlOicsIHNlbGVjdGVkRmlsZS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZygnRmlsZSB0eXBlOicsIHNlbGVjdGVkRmlsZS50eXBlKTtcblxuICAgIGlmIChzZWxlY3RlZEZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkRmlsZSk7IC8vIENvbnZlcnQgaW1hZ2UgdG8gZGF0YSBVUkwgZm9yIHByZXZpZXdcblxuICAgICAgY29uc3QgaW1hZ2VVcmxQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgIHJlc29sdmUoaW1hZ2VVcmwpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBhd2FpdCBpbWFnZVVybFByb21pc2U7IC8vIFdhaXQgZm9yIGltYWdlIFVSTFxuXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyB0ZXh0IH0gfSA9IGF3YWl0IFRlc3NlcmFjdC5yZWNvZ25pemUoaW1hZ2VVcmwsICdlbmcnLHsgbG9nZ2VyOiAobSkgPT4gY29uc29sZS5sb2cobS5wcm9ncmVzcykgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWNvZ25pemVkIHRleHQ6JywgdGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IHRleHQsXG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNvZ25pemluZyB0ZXh0OicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIlRlc3NlcmFjdCIsIkxvZyIsInRleHQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwibXlkYXRhIiwiZXJyb3IiLCJoYW5kbGVGaWxlU2VsZWN0aW9uIiwiZmlsZXMiLCJzZWxlY3RlZEZpbGUiLCJuYW1lIiwidHlwZSIsInN0YXJ0c1dpdGgiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsImltYWdlVXJsUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25sb2FkIiwiZXZlbnQiLCJpbWFnZVVybCIsInRhcmdldCIsInJlc3VsdCIsIm9uZXJyb3IiLCJyZWNvZ25pemUiLCJsb2dnZXIiLCJtIiwicHJvZ3Jlc3MiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/log.js\n"));

/***/ })

});