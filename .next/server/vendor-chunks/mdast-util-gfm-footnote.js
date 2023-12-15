"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-footnote";
exports.ids = ["vendor-chunks/mdast-util-gfm-footnote"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-footnote/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-footnote/lib/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmFootnoteFromMarkdown: () => (/* binding */ gfmFootnoteFromMarkdown),\n/* harmony export */   gfmFootnoteToMarkdown: () => (/* binding */ gfmFootnoteToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-normalize-identifier */ \"(ssr)/./node_modules/micromark-util-normalize-identifier/dev/index.js\");\n/**\n * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition\n * @typedef {import('mdast').FootnoteReference} FootnoteReference\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Map} Map\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */ \n\nfootnoteReference.peek = footnoteReferencePeek;\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown`.\n */ function gfmFootnoteFromMarkdown() {\n    return {\n        enter: {\n            gfmFootnoteDefinition: enterFootnoteDefinition,\n            gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,\n            gfmFootnoteCall: enterFootnoteCall,\n            gfmFootnoteCallString: enterFootnoteCallString\n        },\n        exit: {\n            gfmFootnoteDefinition: exitFootnoteDefinition,\n            gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,\n            gfmFootnoteCall: exitFootnoteCall,\n            gfmFootnoteCallString: exitFootnoteCallString\n        }\n    };\n}\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM footnotes\n * in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown`.\n */ function gfmFootnoteToMarkdown() {\n    return {\n        // This is on by default already.\n        unsafe: [\n            {\n                character: \"[\",\n                inConstruct: [\n                    \"phrasing\",\n                    \"label\",\n                    \"reference\"\n                ]\n            }\n        ],\n        handlers: {\n            footnoteDefinition,\n            footnoteReference\n        }\n    };\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterFootnoteDefinition(token) {\n    this.enter({\n        type: \"footnoteDefinition\",\n        identifier: \"\",\n        label: \"\",\n        children: []\n    }, token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterFootnoteDefinitionLabelString() {\n    this.buffer();\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitFootnoteDefinitionLabelString(token) {\n    const label = this.resume();\n    const node = this.stack[this.stack.length - 1];\n    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"footnoteDefinition\");\n    node.label = label;\n    node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitFootnoteDefinition(token) {\n    this.exit(token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterFootnoteCall(token) {\n    this.enter({\n        type: \"footnoteReference\",\n        identifier: \"\",\n        label: \"\"\n    }, token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterFootnoteCallString() {\n    this.buffer();\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitFootnoteCallString(token) {\n    const label = this.resume();\n    const node = this.stack[this.stack.length - 1];\n    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"footnoteReference\");\n    node.label = label;\n    node.identifier = (0,micromark_util_normalize_identifier__WEBPACK_IMPORTED_MODULE_1__.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitFootnoteCall(token) {\n    this.exit(token);\n}\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteReference} node\n */ function footnoteReference(node, _, state, info) {\n    const tracker = state.createTracker(info);\n    let value = tracker.move(\"[^\");\n    const exit = state.enter(\"footnoteReference\");\n    const subexit = state.enter(\"reference\");\n    value += tracker.move(state.safe(state.associationId(node), {\n        ...tracker.current(),\n        before: value,\n        after: \"]\"\n    }));\n    subexit();\n    exit();\n    value += tracker.move(\"]\");\n    return value;\n}\n/** @type {ToMarkdownHandle} */ function footnoteReferencePeek() {\n    return \"[\";\n}\n/**\n * @type {ToMarkdownHandle}\n * @param {FootnoteDefinition} node\n */ function footnoteDefinition(node, _, state, info) {\n    const tracker = state.createTracker(info);\n    let value = tracker.move(\"[^\");\n    const exit = state.enter(\"footnoteDefinition\");\n    const subexit = state.enter(\"label\");\n    value += tracker.move(state.safe(state.associationId(node), {\n        ...tracker.current(),\n        before: value,\n        after: \"]\"\n    }));\n    subexit();\n    value += tracker.move(\"]:\" + (node.children && node.children.length > 0 ? \" \" : \"\"));\n    tracker.shift(4);\n    value += tracker.move(state.indentLines(state.containerFlow(node, tracker.current()), map));\n    exit();\n    return value;\n}\n/** @type {Map} */ function map(line, index, blank) {\n    if (index === 0) {\n        return line;\n    }\n    return (blank ? \"\" : \"    \") + line;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tZm9vdG5vdGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0NBU0MsR0FFa0M7QUFDb0M7QUFFdkVHLGtCQUFrQkMsSUFBSSxHQUFHQztBQUV6Qjs7Ozs7O0NBTUMsR0FDTSxTQUFTQztJQUNkLE9BQU87UUFDTEMsT0FBTztZQUNMQyx1QkFBdUJDO1lBQ3ZCQyxrQ0FBa0NDO1lBQ2xDQyxpQkFBaUJDO1lBQ2pCQyx1QkFBdUJDO1FBQ3pCO1FBQ0FDLE1BQU07WUFDSlIsdUJBQXVCUztZQUN2QlAsa0NBQWtDUTtZQUNsQ04saUJBQWlCTztZQUNqQkwsdUJBQXVCTTtRQUN6QjtJQUNGO0FBQ0Y7QUFFQTs7Ozs7O0NBTUMsR0FDTSxTQUFTQztJQUNkLE9BQU87UUFDTCxpQ0FBaUM7UUFDakNDLFFBQVE7WUFBQztnQkFBQ0MsV0FBVztnQkFBS0MsYUFBYTtvQkFBQztvQkFBWTtvQkFBUztpQkFBWTtZQUFBO1NBQUU7UUFDM0VDLFVBQVU7WUFBQ0M7WUFBb0J2QjtRQUFpQjtJQUNsRDtBQUNGO0FBRUE7OztDQUdDLEdBQ0QsU0FBU00sd0JBQXdCa0IsS0FBSztJQUNwQyxJQUFJLENBQUNwQixLQUFLLENBQ1I7UUFBQ3FCLE1BQU07UUFBc0JDLFlBQVk7UUFBSUMsT0FBTztRQUFJQyxVQUFVLEVBQUU7SUFBQSxHQUNwRUo7QUFFSjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNoQjtJQUNQLElBQUksQ0FBQ3FCLE1BQU07QUFDYjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNkLGtDQUFrQ1MsS0FBSztJQUM5QyxNQUFNRyxRQUFRLElBQUksQ0FBQ0csTUFBTTtJQUN6QixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxNQUFNLEdBQUcsRUFBRTtJQUM5Q25DLDBDQUFNQSxDQUFDaUMsS0FBS04sSUFBSSxLQUFLO0lBQ3JCTSxLQUFLSixL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T0FBTyxDQUFDRSxRQUFRLEtBQUssTUFBSyxJQUFLRjtBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR3ZWIvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tZm9vdG5vdGUvbGliL2luZGV4LmpzPzc0NmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkZvb3Rub3RlRGVmaW5pdGlvbn0gRm9vdG5vdGVEZWZpbml0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkZvb3Rub3RlUmVmZXJlbmNlfSBGb290bm90ZVJlZmVyZW5jZVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5NYXB9IE1hcFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLk9wdGlvbnN9IFRvTWFya2Rvd25FeHRlbnNpb25cbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtub3JtYWxpemVJZGVudGlmaWVyfSBmcm9tICdtaWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllcidcblxuZm9vdG5vdGVSZWZlcmVuY2UucGVlayA9IGZvb3Rub3RlUmVmZXJlbmNlUGVla1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gZm9vdG5vdGVzXG4gKiBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtRm9vdG5vdGVGcm9tTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHtcbiAgICAgIGdmbUZvb3Rub3RlRGVmaW5pdGlvbjogZW50ZXJGb290bm90ZURlZmluaXRpb24sXG4gICAgICBnZm1Gb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZzogZW50ZXJGb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZyxcbiAgICAgIGdmbUZvb3Rub3RlQ2FsbDogZW50ZXJGb290bm90ZUNhbGwsXG4gICAgICBnZm1Gb290bm90ZUNhbGxTdHJpbmc6IGVudGVyRm9vdG5vdGVDYWxsU3RyaW5nXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICBnZm1Gb290bm90ZURlZmluaXRpb246IGV4aXRGb290bm90ZURlZmluaXRpb24sXG4gICAgICBnZm1Gb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZzogZXhpdEZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nLFxuICAgICAgZ2ZtRm9vdG5vdGVDYWxsOiBleGl0Rm9vdG5vdGVDYWxsLFxuICAgICAgZ2ZtRm9vdG5vdGVDYWxsU3RyaW5nOiBleGl0Rm9vdG5vdGVDYWxsU3RyaW5nXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gZm9vdG5vdGVzXG4gKiBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7VG9NYXJrZG93bkV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1Gb290bm90ZVRvTWFya2Rvd24oKSB7XG4gIHJldHVybiB7XG4gICAgLy8gVGhpcyBpcyBvbiBieSBkZWZhdWx0IGFscmVhZHkuXG4gICAgdW5zYWZlOiBbe2NoYXJhY3RlcjogJ1snLCBpbkNvbnN0cnVjdDogWydwaHJhc2luZycsICdsYWJlbCcsICdyZWZlcmVuY2UnXX1dLFxuICAgIGhhbmRsZXJzOiB7Zm9vdG5vdGVEZWZpbml0aW9uLCBmb290bm90ZVJlZmVyZW5jZX1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyRm9vdG5vdGVEZWZpbml0aW9uKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoXG4gICAge3R5cGU6ICdmb290bm90ZURlZmluaXRpb24nLCBpZGVudGlmaWVyOiAnJywgbGFiZWw6ICcnLCBjaGlsZHJlbjogW119LFxuICAgIHRva2VuXG4gIClcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nKCkge1xuICB0aGlzLmJ1ZmZlcigpXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdEZvb3Rub3RlRGVmaW5pdGlvbkxhYmVsU3RyaW5nKHRva2VuKSB7XG4gIGNvbnN0IGxhYmVsID0gdGhpcy5yZXN1bWUoKVxuICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gIGFzc2VydChub2RlLnR5cGUgPT09ICdmb290bm90ZURlZmluaXRpb24nKVxuICBub2RlLmxhYmVsID0gbGFiZWxcbiAgbm9kZS5pZGVudGlmaWVyID0gbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICApLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0Rm9vdG5vdGVEZWZpbml0aW9uKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckZvb3Rub3RlQ2FsbCh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnZm9vdG5vdGVSZWZlcmVuY2UnLCBpZGVudGlmaWVyOiAnJywgbGFiZWw6ICcnfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJGb290bm90ZUNhbGxTdHJpbmcoKSB7XG4gIHRoaXMuYnVmZmVyKClcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0Rm9vdG5vdGVDYWxsU3RyaW5nKHRva2VuKSB7XG4gIGNvbnN0IGxhYmVsID0gdGhpcy5yZXN1bWUoKVxuICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gIGFzc2VydChub2RlLnR5cGUgPT09ICdmb290bm90ZVJlZmVyZW5jZScpXG4gIG5vZGUubGFiZWwgPSBsYWJlbFxuICBub2RlLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gICkudG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRGb290bm90ZUNhbGwodG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICogQHBhcmFtIHtGb290bm90ZVJlZmVyZW5jZX0gbm9kZVxuICovXG5mdW5jdGlvbiBmb290bm90ZVJlZmVyZW5jZShub2RlLCBfLCBzdGF0ZSwgaW5mbykge1xuICBjb25zdCB0cmFja2VyID0gc3RhdGUuY3JlYXRlVHJhY2tlcihpbmZvKVxuICBsZXQgdmFsdWUgPSB0cmFja2VyLm1vdmUoJ1teJylcbiAgY29uc3QgZXhpdCA9IHN0YXRlLmVudGVyKCdmb290bm90ZVJlZmVyZW5jZScpXG4gIGNvbnN0IHN1YmV4aXQgPSBzdGF0ZS5lbnRlcigncmVmZXJlbmNlJylcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgIHN0YXRlLnNhZmUoc3RhdGUuYXNzb2NpYXRpb25JZChub2RlKSwge1xuICAgICAgLi4udHJhY2tlci5jdXJyZW50KCksXG4gICAgICBiZWZvcmU6IHZhbHVlLFxuICAgICAgYWZ0ZXI6ICddJ1xuICAgIH0pXG4gIClcbiAgc3ViZXhpdCgpXG4gIGV4aXQoKVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoJ10nKVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfSAqL1xuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2VQZWVrKCkge1xuICByZXR1cm4gJ1snXG59XG5cbi8qKlxuICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gKiBAcGFyYW0ge0Zvb3Rub3RlRGVmaW5pdGlvbn0gbm9kZVxuICovXG5mdW5jdGlvbiBmb290bm90ZURlZmluaXRpb24obm9kZSwgXywgc3RhdGUsIGluZm8pIHtcbiAgY29uc3QgdHJhY2tlciA9IHN0YXRlLmNyZWF0ZVRyYWNrZXIoaW5mbylcbiAgbGV0IHZhbHVlID0gdHJhY2tlci5tb3ZlKCdbXicpXG4gIGNvbnN0IGV4aXQgPSBzdGF0ZS5lbnRlcignZm9vdG5vdGVEZWZpbml0aW9uJylcbiAgY29uc3Qgc3ViZXhpdCA9IHN0YXRlLmVudGVyKCdsYWJlbCcpXG4gIHZhbHVlICs9IHRyYWNrZXIubW92ZShcbiAgICBzdGF0ZS5zYWZlKHN0YXRlLmFzc29jaWF0aW9uSWQobm9kZSksIHtcbiAgICAgIC4uLnRyYWNrZXIuY3VycmVudCgpLFxuICAgICAgYmVmb3JlOiB2YWx1ZSxcbiAgICAgIGFmdGVyOiAnXSdcbiAgICB9KVxuICApXG4gIHN1YmV4aXQoKVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoXG4gICAgJ106JyArIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCA/ICcgJyA6ICcnKVxuICApXG4gIHRyYWNrZXIuc2hpZnQoNClcbiAgdmFsdWUgKz0gdHJhY2tlci5tb3ZlKFxuICAgIHN0YXRlLmluZGVudExpbmVzKHN0YXRlLmNvbnRhaW5lckZsb3cobm9kZSwgdHJhY2tlci5jdXJyZW50KCkpLCBtYXApXG4gIClcbiAgZXhpdCgpXG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKiBAdHlwZSB7TWFwfSAqL1xuZnVuY3Rpb24gbWFwKGxpbmUsIGluZGV4LCBibGFuaykge1xuICBpZiAoaW5kZXggPT09IDApIHtcbiAgICByZXR1cm4gbGluZVxuICB9XG5cbiAgcmV0dXJuIChibGFuayA/ICcnIDogJyAgICAnKSArIGxpbmVcbn1cbiJdLCJuYW1lcyI6WyJvayIsImFzc2VydCIsIm5vcm1hbGl6ZUlkZW50aWZpZXIiLCJmb290bm90ZVJlZmVyZW5jZSIsInBlZWsiLCJmb290bm90ZVJlZmVyZW5jZVBlZWsiLCJnZm1Gb290bm90ZUZyb21NYXJrZG93biIsImVudGVyIiwiZ2ZtRm9vdG5vdGVEZWZpbml0aW9uIiwiZW50ZXJGb290bm90ZURlZmluaXRpb24iLCJnZm1Gb290bm90ZURlZmluaXRpb25MYWJlbFN0cmluZyIsImVudGVyRm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmciLCJnZm1Gb290bm90ZUNhbGwiLCJlbnRlckZvb3Rub3RlQ2FsbCIsImdmbUZvb3Rub3RlQ2FsbFN0cmluZyIsImVudGVyRm9vdG5vdGVDYWxsU3RyaW5nIiwiZXhpdCIsImV4aXRGb290bm90ZURlZmluaXRpb24iLCJleGl0Rm9vdG5vdGVEZWZpbml0aW9uTGFiZWxTdHJpbmciLCJleGl0Rm9vdG5vdGVDYWxsIiwiZXhpdEZvb3Rub3RlQ2FsbFN0cmluZyIsImdmbUZvb3Rub3RlVG9NYXJrZG93biIsInVuc2FmZSIsImNoYXJhY3RlciIsImluQ29uc3RydWN0IiwiaGFuZGxlcnMiLCJmb290bm90ZURlZmluaXRpb24iLCJ0b2tlbiIsInR5cGUiLCJpZGVudGlmaWVyIiwibGFiZWwiLCJjaGlsZHJlbiIsImJ1ZmZlciIsInJlc3VtZSIsIm5vZGUiLCJzdGFjayIsImxlbmd0aCIsInNsaWNlU2VyaWFsaXplIiwidG9Mb3dlckNhc2UiLCJfIiwic3RhdGUiLCJpbmZvIiwidHJhY2tlciIsImNyZWF0ZVRyYWNrZXIiLCJ2YWx1ZSIsIm1vdmUiLCJzdWJleGl0Iiwic2FmZSIsImFzc29jaWF0aW9uSWQiLCJjdXJyZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJzaGlmdCIsImluZGVudExpbmVzIiwiY29udGFpbmVyRmxvdyIsIm1hcCIsImxpbmUiLCJpbmRleCIsImJsYW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-footnote/lib/index.js\n");

/***/ })

};
;