/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst indexKeyList = [...Array(7)].map((_, index) => index);\nconst playVideoOnClick = (index) => {\n    const explosionVideo = document.getElementById(`v-${index}`);\n    const container = document.getElementById(`c-${index}`);\n    const wrapper = document.getElementById(`w-${index}`);\n    if (!explosionVideo || !container || !wrapper) {\n        console.error(`cannot get elements with index ${index}`);\n        return;\n    }\n    wrapper.addEventListener(\"click\", () => {\n        const videoLength = 4000;\n        container.style.opacity = \"1\";\n        explosionVideo.play();\n        setTimeout(() => {\n            // hide explosion video\n            explosionVideo.style.display = \"none\";\n        }, videoLength);\n    });\n};\nconst setPositionOfVideos = () => {\n    const xMargin = 8;\n    const yMargin = 16;\n    const positionList = [\n        { x: 25 + xMargin, y: 16.5 + yMargin },\n        { x: 75 - xMargin, y: 16.5 + yMargin },\n        { x: 16.5, y: 50 },\n        { x: 50, y: 50 },\n        { x: 83.5, y: 50 },\n        { x: 25 + xMargin, y: 83.5 - yMargin },\n        { x: 75 - xMargin, y: 83.5 - yMargin },\n    ];\n    indexKeyList.map((index) => {\n        const element = document.getElementById(`w-${index}`);\n        if (!element)\n            return;\n        element.style.left = positionList[index].x + \"vw\";\n        element.style.top = positionList[index].y + \"vh\";\n    });\n};\nconst main = () => {\n    setPositionOfVideos();\n    indexKeyList.map((index) => playVideoOnClick(index));\n};\nwindow.addEventListener(\"load\", (event) => {\n    main();\n});\n\n\n//# sourceURL=webpack://stress-coping/./ts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ts/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;