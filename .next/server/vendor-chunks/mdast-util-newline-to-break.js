"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-newline-to-break";
exports.ids = ["vendor-chunks/mdast-util-newline-to-break"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-newline-to-break/lib/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-newline-to-break/lib/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newlineToBreak: () => (/* binding */ newlineToBreak)\n/* harmony export */ });\n/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-find-and-replace */ \"(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\");\n/**\n * @typedef {import('mdast').Nodes} Nodes\n * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction\n */ \n/**\n * Turn normal line endings into hard breaks.\n *\n * @param {Nodes} tree\n *   Tree to change.\n * @returns {undefined}\n *   Nothing.\n */ function newlineToBreak(tree) {\n    (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__.findAndReplace)(tree, [\n        /\\r?\\n|\\r/g,\n        replace\n    ]);\n}\n/**\n * Replace line endings.\n *\n * @type {ReplaceFunction}\n */ function replace() {\n    return {\n        type: \"break\"\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1uZXdsaW5lLXRvLWJyZWFrL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Q0FHQyxHQUV5RDtBQUUxRDs7Ozs7OztDQU9DLEdBQ00sU0FBU0MsZUFBZUMsSUFBSTtJQUNqQ0YsMkVBQWNBLENBQUNFLE1BQU07UUFBQztRQUFhQztLQUFRO0FBQzdDO0FBRUE7Ozs7Q0FJQyxHQUNELFNBQVNBO0lBQ1AsT0FBTztRQUFDQyxNQUFNO0lBQU87QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0d2ViLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtbmV3bGluZS10by1icmVhay9saWIvaW5kZXguanM/NmMxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTm9kZXN9IE5vZGVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZpbmQtYW5kLXJlcGxhY2UnKS5SZXBsYWNlRnVuY3Rpb259IFJlcGxhY2VGdW5jdGlvblxuICovXG5cbmltcG9ydCB7ZmluZEFuZFJlcGxhY2V9IGZyb20gJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZSdcblxuLyoqXG4gKiBUdXJuIG5vcm1hbCBsaW5lIGVuZGluZ3MgaW50byBoYXJkIGJyZWFrcy5cbiAqXG4gKiBAcGFyYW0ge05vZGVzfSB0cmVlXG4gKiAgIFRyZWUgdG8gY2hhbmdlLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld2xpbmVUb0JyZWFrKHRyZWUpIHtcbiAgZmluZEFuZFJlcGxhY2UodHJlZSwgWy9cXHI/XFxufFxcci9nLCByZXBsYWNlXSlcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGxpbmUgZW5kaW5ncy5cbiAqXG4gKiBAdHlwZSB7UmVwbGFjZUZ1bmN0aW9ufVxuICovXG5mdW5jdGlvbiByZXBsYWNlKCkge1xuICByZXR1cm4ge3R5cGU6ICdicmVhayd9XG59XG4iXSwibmFtZXMiOlsiZmluZEFuZFJlcGxhY2UiLCJuZXdsaW5lVG9CcmVhayIsInRyZWUiLCJyZXBsYWNlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-newline-to-break/lib/index.js\n");

/***/ })

};
;