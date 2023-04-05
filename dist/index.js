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

/***/ "./ts/api.ts":
/*!*******************!*\
  !*** ./ts/api.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.notifyExplosionCompletion = void 0;\nconst global_1 = __webpack_require__(/*! ./global */ \"./ts/global.ts\");\n// const baseUrl = \"http://localhost:3000\";\nconst baseUrl = \"https://script.google.com/macros/s/AKfycby8dZA-lOWCxKbtJIkp20Tkks-25brIWxpi0e4CweWt_UqwlKNHHR66pxGkUFlImTweXw/exec\";\nconst NotifyExplosionCompletionParams = {\n    id: \"id\",\n};\nconst notifyExplosionCompletion = async (params) => {\n    const url = new URL(baseUrl);\n    url.searchParams.set(\"id\", params.id);\n    await fetch(url, {\n        mode: \"no-cors\",\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n        },\n    })\n        .then(() => {\n        console.log(\"send!!\");\n        (0, global_1.completeTask)();\n    })\n        .catch(() => {\n        console.error(\"server does not work\");\n    });\n};\nexports.notifyExplosionCompletion = notifyExplosionCompletion;\n\n\n//# sourceURL=webpack://stress-coping/./ts/api.ts?");

/***/ }),

/***/ "./ts/global.ts":
/*!**********************!*\
  !*** ./ts/global.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.redirectTo404 = exports.getRandom = exports.imageId = exports.completeTask = exports.counter = exports.indexKeyList = void 0;\nconst api_1 = __webpack_require__(/*! ./api */ \"./ts/api.ts\");\nexports.indexKeyList = [...Array(7)].map((_, index) => index);\nconst explosionNum = 7;\nexports.counter = {\n    value: 0,\n    incrementCounter: () => {\n        navigator.locks.request(\"counter\", async (_lock) => {\n            ++exports.counter.value;\n            if (exports.counter.value == explosionNum) {\n                console.log(\"all movie was clicked\");\n                (0, api_1.notifyExplosionCompletion)({ id: exports.imageId.value });\n            }\n        });\n    },\n};\nconst completeTask = () => {\n    window.location.href = \"./html/finish.html\";\n};\nexports.completeTask = completeTask;\nexports.imageId = {\n    value: \"\",\n    set: (id) => {\n        exports.imageId.value = id;\n    },\n};\nconst getRandom = (size = 4) => (Math.random() * 2 - 1) * size;\nexports.getRandom = getRandom;\nconst redirectTo404 = () => {\n    window.location.href = \"./html/404.html\";\n};\nexports.redirectTo404 = redirectTo404;\n\n\n//# sourceURL=webpack://stress-coping/./ts/global.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getParams = void 0;\nconst global_1 = __webpack_require__(/*! ./global */ \"./ts/global.ts\");\nconst getPathInGoogleApi = (path) => \"https://storage.googleapis.com/stress-explosion-images/\" + path + \".png\";\nconst checkImageExists = (imageUrl, callback) => {\n    const img = new Image();\n    img.onload = () => {\n        callback(true);\n    };\n    img.onerror = () => {\n        callback(false);\n    };\n    img.src = imageUrl;\n};\nconst changeBodyBgImageSrc = (path) => {\n    const url = getPathInGoogleApi(path);\n    const body = document.body;\n    checkImageExists(url, (exist) => {\n        if (exist) {\n            body.style.backgroundImage = `url(\"${url}\")`;\n        }\n        else {\n            (0, global_1.redirectTo404)();\n        }\n    });\n};\nconst getParams = (paramName) => {\n    const url = new URL(window.location.href);\n    const params = url.searchParams;\n    return params.get(paramName);\n};\nexports.getParams = getParams;\nconst playVideoOnClick = (index) => {\n    const explosionVideo = document.getElementById(`v-${index}`);\n    const container = document.getElementById(`c-${index}`);\n    const wrapper = document.getElementById(`w-${index}`);\n    if (!explosionVideo || !container || !wrapper) {\n        console.error(`cannot get elements with index ${index}`);\n        return;\n    }\n    wrapper.addEventListener(\"click\", async () => {\n        const videoLength = 4000;\n        container.style.opacity = \"1\";\n        explosionVideo.play();\n        setTimeout(async () => {\n            // hide explosion video\n            global_1.counter.incrementCounter();\n            explosionVideo.style.display = \"none\";\n        }, videoLength);\n    });\n};\nconst setPositionOfVideos = () => {\n    const xMargin = 8;\n    const yMargin = 16;\n    const positionList = [\n        { x: (0, global_1.getRandom)() + 25 + xMargin, y: (0, global_1.getRandom)() + 16.5 + yMargin },\n        { x: (0, global_1.getRandom)() + 75 - xMargin, y: (0, global_1.getRandom)() + 16.5 + yMargin },\n        { x: (0, global_1.getRandom)() + 22.5, y: (0, global_1.getRandom)() + 45 },\n        { x: (0, global_1.getRandom)() + 50, y: (0, global_1.getRandom)() + 50 },\n        { x: (0, global_1.getRandom)() + 77.5, y: (0, global_1.getRandom)() + 45 },\n        { x: (0, global_1.getRandom)() + 25 + xMargin, y: (0, global_1.getRandom)() + 79.5 - yMargin },\n        { x: (0, global_1.getRandom)() + 75 - xMargin, y: (0, global_1.getRandom)() + 79.5 - yMargin },\n    ];\n    global_1.indexKeyList.map((index) => {\n        const element = document.getElementById(`w-${index}`);\n        if (!element)\n            return;\n        element.style.left = positionList[index].x + \"vw\";\n        element.style.top = positionList[index].y + \"vh\";\n    });\n};\nconst main = () => {\n    // dummy id param\n    // \"016582cf0d94ec309eb1bfae7446aaa4be62b6fa0fca4ec47cf572b0646cc321/04-03-14-15\"\n    const id = (0, exports.getParams)(\"id\");\n    if (!id) {\n        (0, global_1.redirectTo404)();\n        return;\n    }\n    global_1.imageId.set(id);\n    changeBodyBgImageSrc(global_1.imageId.value);\n    setPositionOfVideos();\n    global_1.indexKeyList.map((index) => playVideoOnClick(index));\n};\nwindow.addEventListener(\"load\", (event) => {\n    main();\n});\n\n\n//# sourceURL=webpack://stress-coping/./ts/index.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/index.ts");
/******/ 	
/******/ })()
;