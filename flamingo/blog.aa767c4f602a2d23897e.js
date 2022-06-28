"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[685],{

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

/***/ 372:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);
/* harmony import */ var _s_Flamingo_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(503);





var Blog = function Blog() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_cover, " ").concat($.header_small),
    style: {
      backgroundImage: blog.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: $.h1
  }, blog.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_blue, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.text_center, " ").concat($.mb_l)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_default, " ").concat($.h2)
  }, blog.heading), /*#__PURE__*/React.createElement("div", {
    className: $.h5
  }, blog.description)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: $.columns_3
  }, blog.articles.map(function (article, index) {
    return /*#__PURE__*/React.createElement(Card, {
      key: index,
      item: article
    });
  }))))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Blog)));

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports home, customers, testimonials, services, works, about, contact, blog, article */
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var home = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/header-homepage.jpg)"),
    description: "Creative mind, creative works",
    heading: "We are digital agency.",
    button: "getting started"
  },
  services: {
    heading: "Services.",
    description: "Our Services for clients"
  },
  works: {
    heading: "Works.",
    description: "Things We've Made",
    button: {
      text: "view all",
      link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works")
    }
  },
  about: {
    heading: "About.",
    description: "We are more than digital agency"
  },
  testimonials: {
    heading: "Testimonials.",
    description: "We are more than digital agency"
  }
};
var customers = (/* unused pure expression or super */ null && (["fab fa-jedi-order", "fas fa-star-of-life", "fas fa-store-alt", "fas fa-share-alt-square", "fas fa-poo-storm", "fas fa-charging-station", "fas fa-snowplow"]));
var testimonials = [{
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: "John Doe",
  position: "Web developer"
}, {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: "John Doe",
  position: "Web developer"
}, {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: "John Doe",
  position: "Web developer"
}, {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.",
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: "John Doe",
  position: "Web developer"
}];
var services = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/header-bg.jpg)"),
    heading: "Services."
  },
  ourServices: {
    heading: "Our services.",
    description: "Our Services for clients"
  },
  works: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/laptop.jpg)"),
    heading: "Wanna see our works?",
    button: {
      text: "all projects",
      link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works")
    }
  },
  skills: {
    heading: "Here are some of our great skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien. Donec elementum, tortor vel viverra ultrices, lacus orci venenatis tortor, vel rhoncus ipsum felis a diam."
  }
};
var works = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/tattoo.jpg)"),
    heading: "Our works."
  },
  content: {
    heading: "Our Works.",
    description: "See all our works",
    columns: [{
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item1.jpg)"),
      heading: "Arhitecture",
      category: "Art"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item2.jpg)"),
      heading: "Photography",
      category: "Art"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item3.jpg)"),
      heading: "Teaser",
      category: "Video"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item4.jpg)"),
      heading: "Styles",
      category: "Art"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item5.jpg)"),
      heading: "About",
      category: "Writings"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item6.jpg)"),
      heading: "Names",
      category: "Writings"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item7.jpg)"),
      heading: "Titles",
      category: "Writings"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item8.jpg)"),
      heading: "Something",
      category: "Writings"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item9.jpg)"),
      heading: "Reaction",
      category: "Video"
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item10.jpg)"),
      heading: "Miscelanious",
      category: "Video"
    }]
  }
};
var about = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/office.jpg)"),
    heading: "About us."
  },
  skills: {
    heading: "Here are some of our great skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus, pellentesque lorem ac, pharetra sapien.",
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/phone.jpg)")
  },
  video: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/services/laptop.jpg)"),
    heading: "Best Solutions for Your Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet urna quis odio vehicula consectetur. Donec eu gravida diam. Aenean accumsan nisl sed fringilla sollicitudin. Donec tincidunt quis dolor eget consectetur. Suspendisse a mollis lacus.",
    button: {
      text: "Watch video"
    }
  },
  team: {
    heading: "Meet our team.",
    description: "the best people to support your project"
  }
};
var contact = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/map.jpg)"),
    heading: "Contact us."
  },
  content: {
    heading: "Get in touch with us!",
    description: "Lorem ipsum dolor sit amet",
    columns: {
      column1: {
        heading: "PHONE",
        buttons: {
          button1: {
            text: "+1234567890",
            link: "tel:1234567890"
          },
          button2: {
            text: "+0987654321",
            link: "tel:0987654321"
          }
        }
      },
      column2: {
        heading: "ADDRESS",
        description: "Lorem ipsum dolor sit amet, consecteturadipiscing elit."
      },
      column3: {
        heading: "EMAIL",
        buttons: {
          button1: {
            text: "anymail@mail.com",
            link: "mailto:anymail@mail.com"
          },
          button2: {
            text: "officialmail@mail.com",
            link: "mailto:officialmail@mail.com"
          }
        }
      }
    }
  },
  form: {
    heading: "Send us a message!",
    description: "Lorem ipsum dolor sit amet"
  }
};
var blog = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/pen.jpg)"),
    heading: "Blog."
  },
  heading: "Check our latest news.",
  description: "Check Out Some of Our News",
  articles: [{
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)"),
    heading: "Could this VR sketching tool be coming of age for designers in the future?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/design.jpg)"),
    heading: "8 Cities That Show You What The Future Will Look Like (Innovative Ideas)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/thanks.jpg)"),
    heading: "15 Gift Ideas for Mom and Dad. Wherever They Are This Year",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)"),
    heading: "Could this VR sketching tool be coming of age for designers in the future?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/design.jpg)"),
    heading: "8 Cities That Show You What The Future Will Look Like (Innovative Ideas)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/thanks.jpg)"),
    heading: "15 Gift Ideas for Mom and Dad. Wherever They Are This Year",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....",
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }]
};
var article = {
  header: {
    category: "Technology",
    heading: "Could this VR sketching tool be coming of age for designers in the future?",
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)")
  },
  content: {
    sidebar: {
      details: [{
        heading: "Written by",
        description: "John Doe"
      }, {
        heading: "Posted on",
        description: "January 3, 2022"
      }, {
        heading: "Tags",
        description: "Design, Technology"
      }],
      socialMedia: [{
        link: "https://facebook.com",
        icon: "fab fa-facebook"
      }, {
        link: "https://twitter.com",
        icon: "fab fa-twitter"
      }, {
        link: "https://instagram.com",
        icon: "fab fa-instagram"
      }]
    },
    main: [{
      type: "description",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla."
    }, {
      type: "paragraph",
      content: "Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a."
    }, {
      type: "heading",
      content: "The New Generation of VR is Coming!"
    }, {
      type: "paragraph",
      content: "Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a."
    }, {
      type: "image",
      content: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg")
    }, {
      type: "paragraph",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla. Nullam fringilla nec augue id sollicitudin. Quisque interdum lobortis tortor, sit amet aliquam urna aliquam in. Morbi in quam a tellus tempor tincidunt sed vitae eros."
    }, {
      type: "paragraph",
      content: "Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a. Quisque suscipit, felis ut congue molestie, eros dolor mattis dolor, a sagittis sem ligula vitae dui. Sed pellentesque sagittis tincidunt. "
    }, {
      type: "heading",
      content: "\"Your time is limited, so don't waste it living someone else's life.\""
    }, {
      type: "paragraph",
      content: " Steve Jobs | Ex CEO of Apple "
    }]
  }
};

/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/sections/Flamingo/card.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const card = ({"w_100":"KFYUgQQcYwkmDSJnwfs8","pt_100":"tE1LZIcc856Gm7oZ5qpK","bg_cover":"oL0aO43lg1RuljQuKYVk","p_default":"WYn7pzCDViV1f8JKBUyn","mb_default":"FKS5Vl0Gu6TsHORkZZKf","button_small":"SO23y1LmLFUpVogOTa97"});
;// CONCATENATED MODULE: ./src/sections/Flamingo/Card.js




var Card = function Card(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: $.w_100
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.pt_100, " ").concat($.bg_cover),
    style: {
      backgroundImage: item.image
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: $.p_default
  }, /*#__PURE__*/React.createElement("p", {
    className: $.mb_default
  }, item.heading), /*#__PURE__*/React.createElement("p", {
    className: $.mb_default
  }, item.description), /*#__PURE__*/React.createElement(Link, {
    to: item.button,
    className: $.button_small
  }, "read more")));
};

/* harmony default export */ const Flamingo_Card = ((/* unused pure expression or super */ null && (Card)));

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
/******/ var __webpack_exports__ = (__webpack_exec__(372));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vYmxvZy5hYTc2N2M0ZjYwMmEyZDIzODk3ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFTyxJQUFNRyxJQUFJLEdBQUdKLFlBQVksR0FBRyxjQUFILEdBQW9CLEdBQTdDOzs7Ozs7Ozs7Ozs7QUNGUCxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFQTtBQUVPLElBQU1HLElBQUksR0FBR0osWUFBWSxhQUFNSyxxREFBTixpQkFBK0IsWUFBeEQ7QUFFQSxJQUFNQyxVQUFVLEdBQUdOLFlBQVksYUFDaENLLHFEQURnQyx3QkFFbkMsV0FGSTs7Ozs7Ozs7Ozs7QUNOUDtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNCQUNaLHVEQUNDO0FBQ0MsYUFBUyxZQUFLRCxDQUFDLENBQUNFLFFBQVAsY0FBbUJGLENBQUMsQ0FBQ0csWUFBckIsQ0FEVjtBQUVDLFNBQUssRUFBRTtBQUNOQyxNQUFBQSxlQUFlLEVBQUVOLElBQUksQ0FBQ08sTUFBTCxDQUFZQztBQUR2QjtBQUZSLGtCQU1DO0FBQUssYUFBUyxFQUFFTixDQUFDLENBQUNPO0FBQWxCLEtBQXVCVCxJQUFJLENBQUNPLE1BQUwsQ0FBWUcsT0FBbkMsQ0FORCxDQURELGVBU0M7QUFBSyxhQUFTLFlBQUtSLENBQUMsQ0FBQ1MsT0FBUCxjQUFrQlQsQ0FBQyxDQUFDVSxPQUFwQjtBQUFkLGtCQUNDO0FBQUssYUFBUyxFQUFFVixDQUFDLENBQUNXO0FBQWxCLGtCQUNDO0FBQUssYUFBUyxZQUFLWCxDQUFDLENBQUNZLFdBQVAsY0FBc0JaLENBQUMsQ0FBQ2EsSUFBeEI7QUFBZCxrQkFDQztBQUFLLGFBQVMsWUFBS2IsQ0FBQyxDQUFDYyxVQUFQLGNBQXFCZCxDQUFDLENBQUNlLEVBQXZCO0FBQWQsS0FDRWpCLElBQUksQ0FBQ1UsT0FEUCxDQURELGVBSUM7QUFB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Qix5QkFBa0IsaUJBQWlCLDhCQUE4Qix5QkFBYyxhQUFhLHNCQUFzQix5QkFBZ0IsYUFBYSx3QkFBd0IseUJBQWU7Ozs7Ozs7O0FDdEJ2Uzs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsOENBQXlEO0FBQzNELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9CbG9nLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9jYXJkLmNzcz9hYjllIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vQ2FyZC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/ICcvcGxheWdyb3VuZC8nIDogJy8nO1xuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuaW1wb3J0IHsgYmFzZSBhcyBwcm9qZWN0QmFzZSB9IGZyb20gJ34vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyBgJHtwcm9qZWN0QmFzZX1mbGFtaW5nby9gIDogJy9mbGFtaW5nby8nO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX1VSTCA9IGlzUHJvZHVjdGlvblxuXHQ/IGAke3Byb2plY3RCYXNlfS9zdGF0aWMvZmxhbWluZ29gXG5cdDogJy9mbGFtaW5nbyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGJsb2cgfSBmcm9tIFwiLi9kYlwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwifnMvRmxhbWluZ28vQ2FyZFwiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuYmdfY292ZXJ9ICR7JC5oZWFkZXJfc21hbGx9YH1cclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGJsb2cuaGVhZGVyLmltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5oMX0+e2Jsb2cuaGVhZGVyLmhlYWRpbmd9PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmJnX2JsdWV9ICR7JC5zZWN0aW9ufWB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLnRleHRfY2VudGVyfSAkeyQubWJfbH1gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLm1iX2RlZmF1bHR9ICR7JC5oMn1gfT5cclxuXHRcdFx0XHRcdFx0e2Jsb2cuaGVhZGluZ31cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDV9PntibG9nLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb2x1bW5zXzN9PlxyXG5cdFx0XHRcdFx0XHR7YmxvZy5hcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PENhcmQga2V5PXtpbmRleH0gaXRlbT17YXJ0aWNsZX0gLz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gXCJ+L2NvbnN0YW50cy9mbGFtaW5nb1wiO1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2hlYWRlci1ob21lcGFnZS5qcGcpYCxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkNyZWF0aXZlIG1pbmQsIGNyZWF0aXZlIHdvcmtzXCIsXHJcblx0XHRoZWFkaW5nOiBcIldlIGFyZSBkaWdpdGFsIGFnZW5jeS5cIixcclxuXHRcdGJ1dHRvbjogXCJnZXR0aW5nIHN0YXJ0ZWRcIixcclxuXHR9LFxyXG5cdHNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiBcIlNlcnZpY2VzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzXCIsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aGVhZGluZzogXCJXb3Jrcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBXZSd2ZSBNYWRlXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJ2aWV3IGFsbFwiLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0YWJvdXQ6IHtcclxuXHRcdGhlYWRpbmc6IFwiQWJvdXQuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5XCIsXHJcblx0fSxcclxuXHR0ZXN0aW1vbmlhbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiVGVzdGltb25pYWxzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeVwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lcnMgPSBbXHJcblx0XCJmYWIgZmEtamVkaS1vcmRlclwiLFxyXG5cdFwiZmFzIGZhLXN0YXItb2YtbGlmZVwiLFxyXG5cdFwiZmFzIGZhLXN0b3JlLWFsdFwiLFxyXG5cdFwiZmFzIGZhLXNoYXJlLWFsdC1zcXVhcmVcIixcclxuXHRcImZhcyBmYS1wb28tc3Rvcm1cIixcclxuXHRcImZhcyBmYS1jaGFyZ2luZy1zdGF0aW9uXCIsXHJcblx0XCJmYXMgZmEtc25vd3Bsb3dcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC5cIixcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2hlYWRlci1iZy5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiU2VydmljZXMuXCIsXHJcblx0fSxcclxuXHRvdXJTZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogXCJPdXIgc2VydmljZXMuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJPdXIgU2VydmljZXMgZm9yIGNsaWVudHNcIixcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIldhbm5hIHNlZSBvdXIgd29ya3M/XCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJhbGwgcHJvamVjdHNcIiwgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogXCJIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHNcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLiBEb25lYyBlbGVtZW50dW0sIHRvcnRvciB2ZWwgdml2ZXJyYSB1bHRyaWNlcywgbGFjdXMgb3JjaSB2ZW5lbmF0aXMgdG9ydG9yLCB2ZWwgcmhvbmN1cyBpcHN1bSBmZWxpcyBhIGRpYW0uXCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHdvcmtzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvdGF0dG9vLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJPdXIgd29ya3MuXCIsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiBcIk91ciBXb3Jrcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlNlZSBhbGwgb3VyIHdvcmtzXCIsXHJcblx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkFyaGl0ZWN0dXJlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQXJ0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlBob3RvZ3JhcGh5XCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQXJ0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlRlYXNlclwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlZpZGVvXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlN0eWxlc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTUuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJBYm91dFwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIk5hbWVzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW03LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiVGl0bGVzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW04LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiU29tZXRoaW5nXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW05LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiUmVhY3Rpb25cIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJWaWRlb1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEwLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiTWlzY2VsYW5pb3VzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiVmlkZW9cIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJBYm91dCB1cy5cIixcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogXCJIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHNcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLlwiLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJCZXN0IFNvbHV0aW9ucyBmb3IgWW91ciBCdXNpbmVzc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJXYXRjaCB2aWRlb1wiIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiBcIk1lZXQgb3VyIHRlYW0uXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJ0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3RcIixcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQ29udGFjdCB1cy5cIixcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6IFwiR2V0IGluIHRvdWNoIHdpdGggdXMhXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFx0Y29sdW1uczoge1xyXG5cdFx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdFx0aGVhZGluZzogXCJQSE9ORVwiLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCIrMTIzNDU2Nzg5MFwiLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiBcInRlbDoxMjM0NTY3ODkwXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcIiswOTg3NjU0MzIxXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwidGVsOjA5ODc2NTQzMjFcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uMjoge1xyXG5cdFx0XHRcdGhlYWRpbmc6IFwiQUREUkVTU1wiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJhZGlwaXNjaW5nIGVsaXQuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkVNQUlMXCIsXHJcblx0XHRcdFx0YnV0dG9uczoge1xyXG5cdFx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcImFueW1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJtYWlsdG86YW55bWFpbEBtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCJvZmZpY2lhbG1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Zm9ybToge1xyXG5cdFx0aGVhZGluZzogXCJTZW5kIHVzIGEgbWVzc2FnZSFcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGJsb2cgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW4uanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIkJsb2cuXCIsXHJcblx0fSxcclxuXHRoZWFkaW5nOiBcIkNoZWNrIG91ciBsYXRlc3QgbmV3cy5cIixcclxuXHRkZXNjcmlwdGlvbjogXCJDaGVjayBPdXQgU29tZSBvZiBPdXIgTmV3c1wiLFxyXG5cdGFydGljbGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCI4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcylcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCIxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCJDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlP1wiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIjggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKVwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIjE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXJcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0Y2F0ZWdvcnk6IFwiVGVjaG5vbG9neVwiLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0XCJDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlP1wiLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRzaWRlYmFyOiB7XHJcblx0XHRcdGRldGFpbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIldyaXR0ZW4gYnlcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIlBvc3RlZCBvblwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiSmFudWFyeSAzLCAyMDIyXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIlRhZ3NcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkRlc2lnbiwgVGVjaG5vbG9neVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2tcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtdHdpdHRlclwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL2luc3RhZ3JhbS5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0bWFpbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcImhlYWRpbmdcIixcclxuXHRcdFx0XHRjb250ZW50OiBcIlRoZSBOZXcgR2VuZXJhdGlvbiBvZiBWUiBpcyBDb21pbmchXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkV0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiaW1hZ2VcIixcclxuXHRcdFx0XHRjb250ZW50OiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnYCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicGFyYWdyYXBoXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gaW4gcG9zdWVyZSBtZXR1cy4gRG9uZWMgZGljdHVtIHRlbXBvciBvZGlvLCBzaXQgYW1ldCBjb25kaW1lbnR1bSBvZGlvIG1vbGxpcyBuZWMuIFByYWVzZW50IGVnZXQgbGlndWxhIG5lcXVlLiBRdWlzcXVlIHBoYXJldHJhIGVsZW1lbnR1bSBtYXNzYSBhdCBmcmluZ2lsbGEuIE51bGxhbSBmcmluZ2lsbGEgbmVjIGF1Z3VlIGlkIHNvbGxpY2l0dWRpbi4gUXVpc3F1ZSBpbnRlcmR1bSBsb2JvcnRpcyB0b3J0b3IsIHNpdCBhbWV0IGFsaXF1YW0gdXJuYSBhbGlxdWFtIGluLiBNb3JiaSBpbiBxdWFtIGEgdGVsbHVzIHRlbXBvciB0aW5jaWR1bnQgc2VkIHZpdGFlIGVyb3MuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkV0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4gUXVpc3F1ZSBzdXNjaXBpdCwgZmVsaXMgdXQgY29uZ3VlIG1vbGVzdGllLCBlcm9zIGRvbG9yIG1hdHRpcyBkb2xvciwgYSBzYWdpdHRpcyBzZW0gbGlndWxhIHZpdGFlIGR1aS4gU2VkIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB0aW5jaWR1bnQuIFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJoZWFkaW5nXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiXFxcIllvdXIgdGltZSBpcyBsaW1pdGVkLCBzbyBkb24ndCB3YXN0ZSBpdCBsaXZpbmcgc29tZW9uZSBlbHNlJ3MgbGlmZS5cXFwiXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFN0ZXZlIEpvYnMgfCBFeCBDRU8gb2YgQXBwbGUgXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wid18xMDBcIjpcIktGWVVnUVFjWXdrbURTSm53ZnM4XCIsXCJwdF8xMDBcIjpcInRFMUxaSWNjODU2R203b1o1cXBLXCIsXCJiZ19jb3ZlclwiOlwib0wwYU80M2xnMVJ1bGpRdUtZVmtcIixcInBfZGVmYXVsdFwiOlwiV1luN3B6Q0RWaVYxZjhKS0JVeW5cIixcIm1iX2RlZmF1bHRcIjpcIkZLUzVWbDBHdTZUc0hPUmtaWktmXCIsXCJidXR0b25fc21hbGxcIjpcIlNPMjN5MUxtTEZVcFZvZ09UYTk3XCJ9OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwiLi9jYXJkLmNzc1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IGl0ZW0gfSkgPT4gKFxyXG5cdDw+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17JC53XzEwMH0+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2AkeyQucHRfMTAwfSAkeyQuYmdfY292ZXJ9YH1cclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBpdGVtLmltYWdlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyQucF9kZWZhdWx0fT5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPXskLm1iX2RlZmF1bHR9PntpdGVtLmhlYWRpbmd9PC9wPlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9eyQubWJfZGVmYXVsdH0+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHQ8TGluayB0bz17aXRlbS5idXR0b259IGNsYXNzTmFtZT17JC5idXR0b25fc21hbGx9PlxyXG5cdFx0XHRcdHJlYWQgbW9yZVxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiYmFzZSIsInByb2plY3RCYXNlIiwiUFVCTElDX1VSTCIsIlJlYWN0IiwiYmxvZyIsIkNhcmQiLCIkIiwiQmxvZyIsImJnX2NvdmVyIiwiaGVhZGVyX3NtYWxsIiwiYmFja2dyb3VuZEltYWdlIiwiaGVhZGVyIiwiaW1hZ2UiLCJoMSIsImhlYWRpbmciLCJiZ19ibHVlIiwic2VjdGlvbiIsImNvbnRhaW5lciIsInRleHRfY2VudGVyIiwibWJfbCIsIm1iX2RlZmF1bHQiLCJoMiIsImg1IiwiZGVzY3JpcHRpb24iLCJjb2x1bW5zXzMiLCJhcnRpY2xlcyIsIm1hcCIsImFydGljbGUiLCJpbmRleCIsImhvbWUiLCJidXR0b24iLCJzZXJ2aWNlcyIsIndvcmtzIiwidGV4dCIsImxpbmsiLCJhYm91dCIsInRlc3RpbW9uaWFscyIsImN1c3RvbWVycyIsImF2YXRhciIsIm5hbWUiLCJwb3NpdGlvbiIsIm91clNlcnZpY2VzIiwic2tpbGxzIiwiY29udGVudCIsImNvbHVtbnMiLCJjYXRlZ29yeSIsInZpZGVvIiwidGVhbSIsImNvbnRhY3QiLCJjb2x1bW4xIiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJidXR0b24yIiwiY29sdW1uMiIsImNvbHVtbjMiLCJmb3JtIiwic2lkZWJhciIsImRldGFpbHMiLCJzb2NpYWxNZWRpYSIsImljb24iLCJtYWluIiwidHlwZSIsIkxpbmsiLCJpdGVtIiwid18xMDAiLCJwdF8xMDAiLCJwX2RlZmF1bHQiLCJidXR0b25fc21hbGwiXSwic291cmNlUm9vdCI6IiJ9