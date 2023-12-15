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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Log; },\n/* harmony export */   handleFileSelection: function() { return /* binding */ handleFileSelection; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract.js */ \"(app-pages-browser)/./node_modules/tesseract.js/src/index.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default,handleFileSelection auto */ \n\nasync function Log(text) {\n    console.log(\"got here\");\n    try {\n        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://nlpbackend-vmje.onrender.com/chat\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            data: JSON.stringify({\n                message: text\n            })\n        });\n        if (response === null || response === void 0 ? void 0 : response.data) {\n            console.log(\"shanu mii\", response.data);\n            const mydata = response.data;\n            return mydata;\n        }\n    } catch (error) {\n        throw error;\n        console.err;\n    }\n}\n_c = Log;\nconst handleFileSelection = async (files)=>{\n    const selectedFile = files[0]; // Get the first selected file\n    if (selectedFile) {\n        console.log(\"Selected file:\", selectedFile.name);\n        console.log(\"File type:\", selectedFile.type);\n        if (selectedFile.type.startsWith(\"image/\")) {\n            const reader = new FileReader();\n            reader.readAsDataURL(selectedFile); // Convert image to data URL for preview\n            const imageUrlPromise = new Promise((resolve, reject)=>{\n                reader.onload = (event)=>{\n                    const imageUrl = event.target.result;\n                    resolve(imageUrl);\n                };\n                reader.onerror = (error)=>{\n                    reject(error);\n                };\n            });\n            try {\n                const imageUrl = await imageUrlPromise; // Wait for image URL\n                const { data: { text } } = await tesseract_js__WEBPACK_IMPORTED_MODULE_0___default().recognize(imageUrl, \"eng\", {\n                    logger: (m)=>console.log(m.progress)\n                });\n                console.log(\"Recognized text:\", text);\n                return {\n                    success: true,\n                    data: text\n                };\n            } catch (error) {\n                console.error(\"Error recognizing text:\", error);\n                return {\n                    success: false,\n                    data: null\n                };\n            }\n        }\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Log\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7aUZBQ3lCO0FBQ1k7QUFDdEIsZUFBZUUsSUFBSUMsSUFBSTtJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ1YsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTU4saURBQUtBLENBQUMsNkNBQTZDO1lBQ3hFTyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBU1Q7WUFBSztRQUN2QztRQUNBLElBQUlHLHFCQUFBQSwrQkFBQUEsU0FBVUcsSUFBSSxFQUFFO1lBQ2xCTCxRQUFRQyxHQUFHLENBQUMsYUFBYUMsU0FBU0csSUFBSTtZQUN0QyxNQUFNSSxTQUFTUCxTQUFTRyxJQUFJO1lBQzVCLE9BQU9JO1FBQ1Q7SUFFRixFQUNBLE9BQU9DLE9BQU87UUFDWixNQUFNQTtRQUNOVixRQUFRVyxHQUFHO0lBQ2I7QUFFRjtLQXRCOEJiO0FBd0J2QixNQUFNYyxzQkFBc0IsT0FBT0M7SUFDeEMsTUFBTUMsZUFBZUQsS0FBSyxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7SUFFN0QsSUFBSUMsY0FBYztRQUNoQmQsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmEsYUFBYUMsSUFBSTtRQUMvQ2YsUUFBUUMsR0FBRyxDQUFDLGNBQWNhLGFBQWFFLElBQUk7UUFFM0MsSUFBSUYsYUFBYUUsSUFBSSxDQUFDQyxVQUFVLENBQUMsV0FBVztZQUMxQyxNQUFNQyxTQUFTLElBQUlDO1lBQ25CRCxPQUFPRSxhQUFhLENBQUNOLGVBQWUsd0NBQXdDO1lBRTVFLE1BQU1PLGtCQUFrQixJQUFJQyxRQUFRLENBQUNDLFNBQVNDO2dCQUM1Q04sT0FBT08sTUFBTSxHQUFHLENBQUNDO29CQUNmLE1BQU1DLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsTUFBTTtvQkFDcENOLFFBQVFJO2dCQUNWO2dCQUNBVCxPQUFPWSxPQUFPLEdBQUcsQ0FBQ3BCO29CQUNoQmMsT0FBT2Q7Z0JBQ1Q7WUFDRjtZQUVBLElBQUk7Z0JBQ0YsTUFBTWlCLFdBQVcsTUFBTU4saUJBQWlCLHFCQUFxQjtnQkFFN0QsTUFBTSxFQUFFaEIsTUFBTSxFQUFFTixJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU1GLDZEQUFtQixDQUFDOEIsVUFBVSxPQUFNO29CQUFFSyxRQUFRLENBQUNDLElBQU1qQyxRQUFRQyxHQUFHLENBQUNnQyxFQUFFQyxRQUFRO2dCQUFFO2dCQUM5R2xDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO2dCQUVoQyxPQUFPO29CQUNMb0MsU0FBUztvQkFDVDlCLE1BQU1OO2dCQUNSO1lBQ0YsRUFBRSxPQUFPVyxPQUFPO2dCQUNkVixRQUFRVSxLQUFLLENBQUMsMkJBQTJCQTtnQkFDekMsT0FBTztvQkFDTHlCLFNBQVM7b0JBQ1Q5QixNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9nLmpzP2M0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBUZXNzZXJhY3QgZnJvbSBcInRlc3NlcmFjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTG9nKHRleHQpIHtcbmNvbnNvbGUubG9nKCdnb3QgaGVyZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vbmxwYmFja2VuZC12bWplLm9ucmVuZGVyLmNvbS9jaGF0XCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogdGV4dCB9KSxcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2U/LmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzaGFudSBtaWknLCByZXNwb25zZS5kYXRhKVxuICAgICAgY29uc3QgbXlkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgcmV0dXJuIG15ZGF0YVxuICAgIH1cblxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yXG4gICAgY29uc29sZS5lcnJcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxlU2VsZWN0aW9uID0gYXN5bmMgKGZpbGVzKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGZpbGVzWzBdOyAvLyBHZXQgdGhlIGZpcnN0IHNlbGVjdGVkIGZpbGVcblxuICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGZpbGU6Jywgc2VsZWN0ZWRGaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdGaWxlIHR5cGU6Jywgc2VsZWN0ZWRGaWxlLnR5cGUpO1xuXG4gICAgaWYgKHNlbGVjdGVkRmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTsgLy8gQ29udmVydCBpbWFnZSB0byBkYXRhIFVSTCBmb3IgcHJldmlld1xuXG4gICAgICBjb25zdCBpbWFnZVVybFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgcmVzb2x2ZShpbWFnZVVybCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbWFnZVVybCA9IGF3YWl0IGltYWdlVXJsUHJvbWlzZTsgLy8gV2FpdCBmb3IgaW1hZ2UgVVJMXG5cbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IHRleHQgfSB9ID0gYXdhaXQgVGVzc2VyYWN0LnJlY29nbml6ZShpbWFnZVVybCwgJ2VuZycseyBsb2dnZXI6IChtKSA9PiBjb25zb2xlLmxvZyhtLnByb2dyZXNzKSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ1JlY29nbml6ZWQgdGV4dDonLCB0ZXh0KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YTogdGV4dCxcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlY29nbml6aW5nIHRleHQ6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IG51bGwsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiVGVzc2VyYWN0IiwiTG9nIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJteWRhdGEiLCJlcnJvciIsImVyciIsImhhbmRsZUZpbGVTZWxlY3Rpb24iLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsIm5hbWUiLCJ0eXBlIiwic3RhcnRzV2l0aCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2VVcmxQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmxvYWQiLCJldmVudCIsImltYWdlVXJsIiwidGFyZ2V0IiwicmVzdWx0Iiwib25lcnJvciIsInJlY29nbml6ZSIsImxvZ2dlciIsIm0iLCJwcm9ncmVzcyIsInN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/log.js\n"));

/***/ })

});