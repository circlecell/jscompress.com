var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	import MK from 'matreshka';
	import Upload from './tabs/upload.class';
	import CopyPaste from './tabs/copy-paste.class';
	import Output from './tabs/output.class';
	
	module.exports = new class Application extends MK.Object {
		constructor() {
			super()
				.set({
					activeTabName: 'upload'
				})
				.addDataKeys('upload copyPaste output')
				.setClassFor({
					upload: Upload,
					copyPaste: CopyPaste,
					output: Output
				})
				.on({
					'*@change:active': evt => {
						if (evt.value === true) {
							for (const tab of this) {
								if (tab !== evt.self) {
									tab.active = false;
								}
							}
						}
					},
					'upload@submitCode copyPaste@submitCode': code => {
						this.output.active = true;
						this.output.inputCode = code;
					}
				});
		}
	
	};


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map