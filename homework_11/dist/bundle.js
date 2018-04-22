/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output_module_js__ = __webpack_require__(2);



$(document).ready(function(){
  let $buttons = $(".buttons");
	let currentOperation;

	let $sign = $("<p></p>");
	$sign.text("");

	let $button = $("#Sum");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__["a" /* default */].Sum;
  });

  $button = $("#Multi");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__["a" /* default */].Multiplication;
  });

  $button = $("#Sub");
  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__["a" /* default */].Sub;
  });

  $button = $("#Division");

  $button.click( () => {
  	$sign.text(event.target.value);
  	currentOperation = __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__["a" /* default */].Division;
  });

	let $result = $(".result");
	let $div = $(".input");
	$result.click( () => {
		let variable_a = $(".first-number").val();
		let variable_b = $(".second-number").val();
		let result = currentOperation(variable_a, variable_b);
		__WEBPACK_IMPORTED_MODULE_1__output_module_js__["a" /* default */].output( result, $div );
	});
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Sum ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a + variable_b;
	}
	return false;
}

function Multiplication ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a * variable_b;
	}
	return false;
}

function Sub ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a - variable_b;
	}
	return false;
}

function Division ( variable_a, variable_b ){
	variable_a = parseFloat(variable_a);
	variable_b = parseFloat(variable_b);
	if( check(variable_a) && check(variable_b) ){
		return variable_a / variable_b;
	}
	return false;
}

function check( variable ){
	variable = parseFloat(variable);
	return !isNaN(parseFloat(variable)) && isFinite(variable);
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Sum: Sum,
	Multiplication: Multiplication,
	Sub: Sub,
	Division: Division
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function output ( result, div ){
	if( result != false ){
		let $result = $("<p></p>");
		$result.text( result );
		$result.addClass( "myClass yourClass" );
		div.append($result);
	} 
}

/* harmony default export */ __webpack_exports__["a"] = ({
	output: output
});

/***/ })
/******/ ]);