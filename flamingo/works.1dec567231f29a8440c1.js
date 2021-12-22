"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[35],{

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
var isProduction = "production" === 'production';
var base = isProduction ? '/playground/' : '/';

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base),
/* harmony export */   "f": () => (/* binding */ PUBLIC_URL)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
var isProduction = "production" === 'production';

var base = isProduction ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "flamingo/") : '/flamingo/';
var PUBLIC_URL = isProduction ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "/static/flamingo") : '/flamingo';

/***/ }),

/***/ 586:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(702);




var Works = function Works() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-cover header-small",
    style: {
      backgroundImage: works.header.image
    }
  }, /*#__PURE__*/React.createElement("h1", null, works.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-m"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-default"
  }, works.content.heading), /*#__PURE__*/React.createElement("h5", null, works.content.description)), /*#__PURE__*/React.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column1.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column1.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column2.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column2.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column3.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column3.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column4.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column4.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column5.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column5.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column6.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column6.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column7.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column7.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column8.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column8.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column9.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column9.heading))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: works.content.columns.column10.image
    },
    className: "column mb-default work-height bg-cover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/React.createElement("h4", null, works.content.columns.column10.heading)))))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Works)));

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports home, services, works, about, contact */
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var home = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/header-homepage.jpg)"),
    description: 'Creative mind, creative works',
    heading: 'We are digital agency.',
    button: 'getting started'
  },
  services: {
    heading: 'Services.',
    description: 'Our Services for clients'
  },
  works: {
    heading: 'Works.',
    description: "Things We've Made",
    button: {
      text: 'view all',
      link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works")
    }
  },
  about: {
    heading: 'About.',
    description: 'We are more than digital agency'
  },
  testimonials: {
    heading: 'Testimonials.',
    description: 'We are more than digital agency'
  }
};
var services = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/header-bg.jpg)"),
    heading: 'Services.'
  },
  ourServices: {
    heading: 'Our services.',
    description: 'Our Services for clients'
  },
  works: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/laptop.jpg)"),
    heading: 'Wanna see our works?',
    button: {
      text: 'all projects',
      link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works")
    }
  },
  skills: {
    heading: 'Here are some of our great skills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam.'
  }
};
var works = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/tattoo.jpg)"),
    heading: 'Our works.'
  },
  content: {
    heading: 'Our Works.',
    description: 'See all our works',
    columns: {
      column1: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item1.jpg)"),
        heading: 'Arhitecture'
      },
      column2: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item2.jpg)"),
        heading: 'Photography'
      },
      column3: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item3.jpg)"),
        heading: 'Teaser'
      },
      column4: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item4.jpg)"),
        heading: 'Styles'
      },
      column5: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item5.jpg)"),
        heading: 'About'
      },
      column6: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item6.jpg)"),
        heading: 'Names'
      },
      column7: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item7.jpg)"),
        heading: 'Titles'
      },
      column8: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item8.jpg)"),
        heading: 'Something'
      },
      column9: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item9.jpg)"),
        heading: 'Reaction'
      },
      column10: {
        image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item10.jpg)"),
        heading: 'Miscelanious'
      }
    }
  }
};
var about = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/office.jpg)"),
    heading: 'About us.'
  },
  skills: {
    heading: 'Here are some of our great skills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien.',
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/phone.jpg)")
  },
  video: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/laptop.jpg)"),
    heading: 'Best Solutions for Your Business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.',
    button: {
      text: 'Watch video'
    }
  },
  team: {
    heading: 'Meet our team.',
    description: 'the best people to support your project'
  }
};
var contact = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/map.jpg)"),
    heading: 'Contact us.'
  },
  content: {
    heading: 'Get in touch with us!',
    description: 'Lorem ipsum dolor sit amet',
    columns: {
      column1: {
        heading: 'PHONE',
        buttons: {
          button1: {
            text: '+1234567890',
            link: 'tel:1234567890'
          },
          button2: {
            text: '+0987654321',
            link: 'tel:0987654321'
          }
        }
      },
      column2: {
        heading: 'ADDRESS',
        description: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit.'
      },
      column3: {
        heading: 'EMAIL',
        buttons: {
          button1: {
            text: 'anymail@mail.com',
            link: 'mailto:anymail@mail.com'
          },
          button2: {
            text: 'officialmail@mail.com',
            link: 'mailto:officialmail@mail.com'
          }
        }
      }
    }
  },
  form: {
    heading: 'Send us a message!',
    description: 'Lorem ipsum dolor sit amet'
  }
};

/***/ }),

/***/ 418:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;__webpack_unused_export__=60107;__webpack_unused_export__=60108;__webpack_unused_export__=60114;var q=60109,r=60110,t=60112;__webpack_unused_export__=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");__webpack_unused_export__=w("react.fragment");__webpack_unused_export__=w("react.strict_mode");__webpack_unused_export__=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");__webpack_unused_export__=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
__webpack_unused_export__={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};__webpack_unused_export__=C;__webpack_unused_export__=E;__webpack_unused_export__=T;
__webpack_unused_export__=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};__webpack_unused_export__=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};__webpack_unused_export__=J;__webpack_unused_export__=function(a){var b=J.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};__webpack_unused_export__=function(a){return{$$typeof:t,render:a}};__webpack_unused_export__=L;
__webpack_unused_export__=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};__webpack_unused_export__=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a,b){return S().useCallback(a,b)};__webpack_unused_export__=function(a,b){return S().useContext(a,b)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a,b){return S().useEffect(a,b)};__webpack_unused_export__=function(a,b,c){return S().useImperativeHandle(a,b,c)};
__webpack_unused_export__=function(a,b){return S().useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return S().useMemo(a,b)};__webpack_unused_export__=function(a,b,c){return S().useReducer(a,b,c)};__webpack_unused_export__=function(a){return S().useRef(a)};__webpack_unused_export__=function(a){return S().useState(a)};__webpack_unused_export__="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  /* unused reexport */ __webpack_require__(408);
} else {}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(586));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vd29ya3MuMWRlYzU2NzIzMWYyOWE4NDQwYzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxZQUFBLEtBQXlCLFlBQTlDO0FBRU8sSUFBTUcsSUFBSSxHQUFHSixZQUFZLEdBQUcsY0FBSCxHQUFvQixHQUE3Qzs7Ozs7Ozs7Ozs7O0FDRlAsSUFBTUEsWUFBWSxHQUFHQyxZQUFBLEtBQXlCLFlBQTlDO0FBRUE7QUFFTyxJQUFNRyxJQUFJLEdBQUdKLFlBQVksYUFBTUsscURBQU4saUJBQStCLFlBQXhEO0FBRUEsSUFBTUMsVUFBVSxHQUFHTixZQUFZLGFBQ2hDSyxxREFEZ0Msd0JBRW5DLFdBRkk7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxzQkFDYix1REFDQztBQUNDLGFBQVMsRUFBQyx1QkFEWDtBQUVDLFNBQUssRUFBRTtBQUNOQyxNQUFBQSxlQUFlLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUR4QjtBQUZSLGtCQU1DLGdDQUFLSixLQUFLLENBQUNHLE1BQU4sQ0FBYUUsT0FBbEIsQ0FORCxDQURELGVBU0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUE0QkwsS0FBSyxDQUFDTSxPQUFOLENBQWNELE9BQTFDLENBREQsZUFFQyxnQ0FBS0wsS0FBSyxDQUFDTSxPQUFOLENBQWNDLFdBQW5CLENBRkQsQ0FERCxlQUtDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxTQUFLLEVBQUU7QUFDTkwsTUFBQUEsZUFBZSxFQUNkRixLQUFLLENBQUNNLE9BQU4sQ0FBY0UsT0FBZCxDQUFzQkMsT0FBdEIsQ0FBOEJMO0FBRnpCLEtBRFI7QUFLQyxhQUFTLEVBQUM7QUFMWCxrQkFPQztBQUFLLGFB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QztBQUN6QyxFQUFFLDhDQUF5RDtBQUMzRCxFQUFFLEtBQUssRUFFTiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzL2ZsYW1pbmdvLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vV29ya3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/ICcvcGxheWdyb3VuZC8nIDogJy8nO1xuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuaW1wb3J0IHsgYmFzZSBhcyBwcm9qZWN0QmFzZSB9IGZyb20gJ34vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyBgJHtwcm9qZWN0QmFzZX1mbGFtaW5nby9gIDogJy9mbGFtaW5nby8nO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX1VSTCA9IGlzUHJvZHVjdGlvblxuXHQ/IGAke3Byb2plY3RCYXNlfS9zdGF0aWMvZmxhbWluZ29gXG5cdDogJy9mbGFtaW5nbyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3b3JrcyB9IGZyb20gJy4vZGInO1xyXG5pbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5cclxuY29uc3QgV29ya3MgPSAoKSA9PiAoXHJcblx0PD5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmctY292ZXIgaGVhZGVyLXNtYWxsXCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHdvcmtzLmhlYWRlci5pbWFnZSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PGgxPnt3b3Jrcy5oZWFkZXIuaGVhZGluZ308L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItbVwiPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57d29ya3MuY29udGVudC5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHQ8aDU+e3dvcmtzLmNvbnRlbnQuZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjEuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW4yLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjIuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW40LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjQuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW41LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjUuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW42LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjYuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW43LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjcuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW44LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjguaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW45LmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoND57d29ya3MuY29udGVudC5jb2x1bW5zLmNvbHVtbjkuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTpcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xMC5pbWFnZSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sdW1uIG1iLWRlZmF1bHQgd29yay1oZWlnaHQgYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQ+e3dvcmtzLmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xMC5oZWFkaW5nfTwvaDQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzO1xyXG4iLCJpbXBvcnQgeyBQVUJMSUNfVVJMLCBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2hlYWRlci1ob21lcGFnZS5qcGcpYCxcclxuXHRcdGRlc2NyaXB0aW9uOiAnQ3JlYXRpdmUgbWluZCwgY3JlYXRpdmUgd29ya3MnLFxyXG5cdFx0aGVhZGluZzogJ1dlIGFyZSBkaWdpdGFsIGFnZW5jeS4nLFxyXG5cdFx0YnV0dG9uOiAnZ2V0dGluZyBzdGFydGVkJyxcclxuXHR9LFxyXG5cdHNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VydmljZXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzJyxcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRoZWFkaW5nOiAnV29ya3MuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBXZSd2ZSBNYWRlXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ3ZpZXcgYWxsJywgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdGFib3V0OiB7XHJcblx0XHRoZWFkaW5nOiAnQWJvdXQuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeScsXHJcblx0fSxcclxuXHR0ZXN0aW1vbmlhbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdUZXN0aW1vbmlhbHMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeScsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvaGVhZGVyLWJnLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXHJcblx0fSxcclxuXHRvdXJTZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogJ091ciBzZXJ2aWNlcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdPdXIgU2VydmljZXMgZm9yIGNsaWVudHMnLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdXYW5uYSBzZWUgb3VyIHdvcmtzPycsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ2FsbCBwcm9qZWN0cycsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4gRG9uZWMgZWxlbWVudHVtLCB0b3J0b3IgdmVsIHZpdmVycmEgdWx0cmljZXMsIGxhY3VzIG9yY2kgdmVuZW5hdGlzIHRvcnRvciwgdmVsIHJob25jdXMgaXBzdW0gZmVsaXMgYSBkaWFtLicsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHdvcmtzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvdGF0dG9vLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ091ciB3b3Jrcy4nLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0aGVhZGluZzogJ091ciBXb3Jrcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdTZWUgYWxsIG91ciB3b3JrcycsXHJcblx0XHRjb2x1bW5zOiB7XHJcblx0XHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnQXJoaXRlY3R1cmUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4yOiB7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTIuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1Bob3RvZ3JhcGh5JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uMzoge1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0zLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdUZWFzZXInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW40OiB7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTQuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1N0eWxlcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjU6IHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnQWJvdXQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW42OiB7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTYuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ05hbWVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uNzoge1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW03LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdUaXRsZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW44OiB7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTguanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1NvbWV0aGluZycsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjk6IHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnUmVhY3Rpb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4xMDoge1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTWlzY2VsYW5pb3VzJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Fib3V0IHVzLicsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jlc3QgU29sdXRpb25zIGZvciBZb3VyIEJ1c2luZXNzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuJyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnV2F0Y2ggdmlkZW8nIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiAnTWVldCBvdXIgdGVhbS4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICd0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3QnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvbWFwLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0NvbnRhY3QgdXMuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdHZXQgaW4gdG91Y2ggd2l0aCB1cyEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0XHRjb2x1bW5zOiB7XHJcblx0XHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnUEhPTkUnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJysxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ3RlbDoxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnQUREUkVTUycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnRU1BSUwnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ2FueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOmFueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ29mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRmb3JtOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VuZCB1cyBhIG1lc3NhZ2UhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdH0sXHJcbn07XHJcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImJhc2UiLCJwcm9qZWN0QmFzZSIsIlBVQkxJQ19VUkwiLCJSZWFjdCIsIndvcmtzIiwiV29ya3MiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWFkZXIiLCJpbWFnZSIsImhlYWRpbmciLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJjb2x1bW5zIiwiY29sdW1uMSIsImNvbHVtbjIiLCJjb2x1bW4zIiwiY29sdW1uNCIsImNvbHVtbjUiLCJjb2x1bW42IiwiY29sdW1uNyIsImNvbHVtbjgiLCJjb2x1bW45IiwiY29sdW1uMTAiLCJob21lIiwiYnV0dG9uIiwic2VydmljZXMiLCJ0ZXh0IiwibGluayIsImFib3V0IiwidGVzdGltb25pYWxzIiwib3VyU2VydmljZXMiLCJza2lsbHMiLCJ2aWRlbyIsInRlYW0iLCJjb250YWN0IiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJidXR0b24yIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=