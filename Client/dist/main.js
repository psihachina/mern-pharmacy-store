/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Client/src/app.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Client/src/Components/Medicament.tsx":
/*!**********************************************!*\
  !*** ./Client/src/Components/Medicament.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\nclass ItemModel {\r\n    constructor(_id = \"\", Name = \"\", Type = \"\", WordName = \"\", ImgPath = \"\", Category = \"\") {\r\n        this._id = _id;\r\n        this.Name = Name;\r\n        this.Type = Type;\r\n        this.WordName = WordName;\r\n        this.ImgPath = ImgPath;\r\n        this.Category = Category;\r\n    }\r\n}\r\nexports.ItemModel = ItemModel;\r\nclass Medicament extends React.Component {\r\n    render() {\r\n        const defaultImg = 'assets/images/defaultMedicament.png';\r\n        return (React.createElement(\"div\", { className: \"card\" },\r\n            React.createElement(\"img\", { className: \"card-img-top\", src: this.props.ImgPath || defaultImg, alt: \"Card image cap\" }),\r\n            React.createElement(\"div\", { className: \"card-body\" },\r\n                React.createElement(react_router_dom_1.Link, { to: `/Medicaments/` + this.props._id },\r\n                    React.createElement(\"h5\", { className: \"card-title\" }, this.props.Name)),\r\n                React.createElement(\"p\", { className: \"card-text\" }, this.props.Type))));\r\n    }\r\n}\r\nexports.Medicament = Medicament;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Medicament.tsx?");

/***/ }),

/***/ "./Client/src/Components/Menu.tsx":
/*!****************************************!*\
  !*** ./Client/src/Components/Menu.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\nclass LinkModel {\r\n    constructor(_id = 0, Link = \"\", Name = \"\") {\r\n        this._id = _id;\r\n        this.Link = Link;\r\n        this.Name = Name;\r\n    }\r\n}\r\nclass DropdownContentModel {\r\n    constructor(Links = new Array()) {\r\n        this.Links = Links;\r\n    }\r\n}\r\nclass DropdownContent extends React.Component {\r\n    render() {\r\n        const links = this.props.Links || new Array();\r\n        return (React.createElement(\"div\", { className: \"dropdown-menu\", \"aria-labelledby\": \"navbarDropdown\" }, links.map(x => React.createElement(\"a\", { className: \"dropdown-item\", key: x._id, href: `#` + x.Name }, x.Name))));\r\n    }\r\n}\r\nclass MenuModel {\r\n    constructor(DropdownContent = new DropdownContentModel()) {\r\n        this.DropdownContent = DropdownContent;\r\n    }\r\n}\r\nclass Menu extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = new MenuModel();\r\n        this.state.DropdownContent.Links = [\r\n            new LinkModel(1, \"Категория1\", \"Категория 1\"),\r\n            new LinkModel(2, \"Категория2\", \"Категория 2\"),\r\n            new LinkModel(3, \"Категория3\", \"Категория 3\"),\r\n            new LinkModel(4, \"Категория4\", \"Категория 4\")\r\n        ];\r\n    }\r\n    componentDidMount() {\r\n        fetch('http://localhost:3000/api/categories')\r\n            .then(response => response.json())\r\n            .then((data) => {\r\n            const model = new MenuModel();\r\n            model.DropdownContent.Links = data\r\n                .map(x => new LinkModel(x._id, `/Categories/${x._id}`, x.Name));\r\n            this.setState(model);\r\n        });\r\n    }\r\n    render() {\r\n        return (React.createElement(\"nav\", { className: \"navbar navbar-expand-lg navbar-light white-background fixed-top\" },\r\n            React.createElement(react_router_dom_1.Link, { className: \"navbar-brand\", to: \"/\" },\r\n                React.createElement(\"i\", { className: \"fa fa-heartbeat fa-3x primary-color\", \"aria-hidden\": \"true\" })),\r\n            React.createElement(react_router_dom_1.Link, { className: \"navbar-brand right-align basket-desktop\", to: \"/\" },\r\n                React.createElement(\"i\", { className: \"fa fa-shopping-cart fa-3x \", \"aria-hidden\": \"true\" })),\r\n            React.createElement(\"button\", { className: \"navbar-toggler\", type: \"button\", \"data-toggle\": \"collapse\", \"data-target\": \"#navbarSupportedContent\", \"aria-controls\": \"navbarSupportedContent\", \"aria-expanded\": \"false\", \"aria-label\": \"Toggle navigation\" },\r\n                React.createElement(\"span\", { className: \"navbar-toggler-icon\" })),\r\n            React.createElement(\"div\", { className: \"collapse navbar-collapse\", id: \"navbarSupportedContent\" },\r\n                React.createElement(\"ul\", { className: \"navbar-nav mr-auto\" },\r\n                    React.createElement(\"li\", { className: \"nav-item active\" },\r\n                        React.createElement(react_router_dom_1.Link, { className: \"nav-link\", to: \"/\" },\r\n                            \"\\u0413\\u043B\\u0430\\u0432\\u043D\\u0430\\u044F \",\r\n                            React.createElement(\"span\", { className: \"sr-only\" }, \"(current)\"))),\r\n                    React.createElement(\"li\", { className: \"nav-item\" },\r\n                        React.createElement(react_router_dom_1.Link, { className: \"nav-link\", to: \"/Order\" }, \"\\u0417\\u0430\\u043A\\u0430\\u0437\")),\r\n                    React.createElement(\"li\", { className: \"nav-item dropdown\" },\r\n                        React.createElement(react_router_dom_1.Link, { className: \"nav-link dropdown-toggle\", to: \"/Category\", id: \"navbarDropdown\", role: \"button\", \"data-toggle\": \"dropdown\", \"aria-haspopup\": \"true\", \"aria-expanded\": \"false\" }, \"\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u0438\"),\r\n                        React.createElement(DropdownContent, Object.assign({}, this.state.DropdownContent))),\r\n                    React.createElement(\"li\", { className: \"nav-item\" },\r\n                        React.createElement(react_router_dom_1.Link, { className: \"nav-link\", to: \"/Delivery\" }, \"\\u041F\\u043E\\u0441\\u0442\\u0430\\u0432\\u043A\\u0438\"))),\r\n                React.createElement(react_router_dom_1.Link, { className: \"navbar-brand basket-mobile\", to: \"/\" },\r\n                    React.createElement(\"i\", { className: \"fa fa-shopping-cart fa-3x \", \"aria-hidden\": \"true\" })))));\r\n    }\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Menu.tsx?");

/***/ }),

/***/ "./Client/src/Components/Pages/DeliveryPage.tsx":
/*!******************************************************!*\
  !*** ./Client/src/Components/Pages/DeliveryPage.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nclass DeliveryPage extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"h1\", null, \"Delivery Page\")));\r\n    }\r\n}\r\nexports.DeliveryPage = DeliveryPage;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Pages/DeliveryPage.tsx?");

/***/ }),

/***/ "./Client/src/Components/Pages/MainPage.tsx":
/*!**************************************************!*\
  !*** ./Client/src/Components/Pages/MainPage.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst Medicament_1 = __webpack_require__(/*! ../Medicament */ \"./Client/src/Components/Medicament.tsx\");\r\nclass Category {\r\n    constructor(Name, Medicaments = new Array()) {\r\n        this.Name = Name;\r\n        this.Medicaments = Medicaments;\r\n    }\r\n}\r\nclass MainPageModel {\r\n    constructor(Items = new Array(), Categories = new Array()) {\r\n        this.Items = Items;\r\n        this.Categories = Categories;\r\n    }\r\n}\r\nclass MainPage extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = new MainPageModel();\r\n    }\r\n    componentDidMount() {\r\n        fetch('http://localhost:3000/api/medicaments')\r\n            .then(response => response.json())\r\n            .then((data1) => {\r\n            fetch('http://localhost:3000/api/categories')\r\n                .then(response => response.json())\r\n                .then((data2) => {\r\n                this.setState(new MainPageModel(data1, data2));\r\n                console.log(this.state);\r\n            });\r\n        });\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", { className: \"container\" },\r\n            React.createElement(\"div\", { className: \"row justify-content-center\" },\r\n                React.createElement(\"h2\", { className: \"text-uppercase\" }, \"Main Page\"),\r\n                React.createElement(\"div\", { className: \"row justify-content-center\" }, this.state.Categories.map(x => React.createElement(\"div\", null,\r\n                    React.createElement(\"br\", null),\r\n                    React.createElement(\"h2\", { id: x.Name }, x.Name),\r\n                    React.createElement(\"div\", { className: \"card-deck justify-content-center\" }, this.state.Items.filter(z => z.Category == x.Name).map(y => React.createElement(Medicament_1.Medicament, Object.assign({}, y))))))))));\r\n    }\r\n}\r\nexports.MainPage = MainPage;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Pages/MainPage.tsx?");

/***/ }),

/***/ "./Client/src/Components/Pages/MedicamentPage.tsx":
/*!********************************************************!*\
  !*** ./Client/src/Components/Pages/MedicamentPage.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst Medicament_1 = __webpack_require__(/*! ../Medicament */ \"./Client/src/Components/Medicament.tsx\");\r\nconst defaultImg = '../assets/images/defaultMedicament.png';\r\nclass MedicamentPage extends React.Component {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.state = new Medicament_1.ItemModel();\r\n    }\r\n    componentDidMount() {\r\n        const id = this.props.match.params.id || \"\";\r\n        console.log('id: ', id);\r\n        fetch(`http://localhost:3000/api/medicaments/` + id)\r\n            .then(response => response.json())\r\n            .then((data) => this.setState(data[0]));\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", { className: \"container justify-content-center\" },\r\n            React.createElement(\"img\", { className: \"w-25\", src: this.props.ImgPath || defaultImg, alt: \"\" }),\r\n            React.createElement(\"h2\", { className: \"\" },\r\n                \"Name: \",\r\n                this.state.WordName),\r\n            React.createElement(\"h3\", null,\r\n                \"Hadr Name: \",\r\n                this.state.Name),\r\n            React.createElement(\"p\", null,\r\n                \"Desc: \",\r\n                this.state.Type)));\r\n    }\r\n}\r\nexports.MedicamentPage = MedicamentPage;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Pages/MedicamentPage.tsx?");

/***/ }),

/***/ "./Client/src/Components/Pages/OrderPage.tsx":
/*!***************************************************!*\
  !*** ./Client/src/Components/Pages/OrderPage.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nclass OrderPage extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"div\", null,\r\n            React.createElement(\"h1\", null, \"Order Page\")));\r\n    }\r\n}\r\nexports.OrderPage = OrderPage;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Pages/OrderPage.tsx?");

/***/ }),

/***/ "./Client/src/Components/Pages/index.ts":
/*!**********************************************!*\
  !*** ./Client/src/Components/Pages/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MainPage_1 = __webpack_require__(/*! ./MainPage */ \"./Client/src/Components/Pages/MainPage.tsx\");\r\nexports.MainPage = MainPage_1.MainPage;\r\nconst MedicamentPage_1 = __webpack_require__(/*! ./MedicamentPage */ \"./Client/src/Components/Pages/MedicamentPage.tsx\");\r\nexports.MedicamentPage = MedicamentPage_1.MedicamentPage;\r\nconst OrderPage_1 = __webpack_require__(/*! ./OrderPage */ \"./Client/src/Components/Pages/OrderPage.tsx\");\r\nexports.OrderPage = OrderPage_1.OrderPage;\r\nconst DeliveryPage_1 = __webpack_require__(/*! ./DeliveryPage */ \"./Client/src/Components/Pages/DeliveryPage.tsx\");\r\nexports.DeliveryPage = DeliveryPage_1.DeliveryPage;\r\n\n\n//# sourceURL=webpack:///./Client/src/Components/Pages/index.ts?");

/***/ }),

/***/ "./Client/src/app.tsx":
/*!****************************!*\
  !*** ./Client/src/app.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\r\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.min */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\r\n__webpack_require__(/*! font-awesome/css/font-awesome.min */ \"./node_modules/font-awesome/css/font-awesome.min.css\");\r\n__webpack_require__(/*! ./assets/scss/style */ \"./Client/src/assets/scss/style.scss\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\nconst Pages_1 = __webpack_require__(/*! ./Components/Pages */ \"./Client/src/Components/Pages/index.ts\");\r\nconst Menu_1 = __webpack_require__(/*! ./Components/Menu */ \"./Client/src/Components/Menu.tsx\");\r\nclass App extends React.Component {\r\n    render() {\r\n        return (React.createElement(React.Fragment, null,\r\n            React.createElement(react_router_dom_1.BrowserRouter, null,\r\n                React.createElement(Menu_1.Menu, null),\r\n                React.createElement(react_router_dom_1.Switch, null,\r\n                    React.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: Pages_1.MainPage }),\r\n                    React.createElement(react_router_dom_1.Route, { path: \"/Order\", component: Pages_1.OrderPage }),\r\n                    React.createElement(react_router_dom_1.Route, { path: \"/Delivery\", component: Pages_1.DeliveryPage }),\r\n                    React.createElement(react_router_dom_1.Route, { path: \"/Medicaments/:id\", component: Pages_1.MedicamentPage })))));\r\n    }\r\n}\r\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));\r\n\n\n//# sourceURL=webpack:///./Client/src/app.tsx?");

/***/ }),

/***/ "./Client/src/assets/scss/style.scss":
/*!*******************************************!*\
  !*** ./Client/src/assets/scss/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./Client/src/assets/scss/style.scss?");

/***/ })

/******/ });