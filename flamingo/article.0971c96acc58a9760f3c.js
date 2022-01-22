"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[745],{

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

/***/ 689:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);



var Article = function Article() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-cover header-article section",
    style: {
      backgroundImage: article.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-m"
  }, article.header.category), /*#__PURE__*/React.createElement("h2", null, article.header.heading))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue section article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar"
  }, article.content.sidebar.details.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "detail bb-white",
      key: index
    }, /*#__PURE__*/React.createElement("h5", {
      className: "mb-default"
    }, item.heading), /*#__PURE__*/React.createElement("p", null, item.description));
  }), /*#__PURE__*/React.createElement("div", {
    className: "social-media-small"
  }, article.content.sidebar.socialMedia.map(function (item, index) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.link
    }, /*#__PURE__*/React.createElement("i", {
      className: item.icon
    }, " "));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, article.content.main.map(function (element, index) {
    if (element.type === 'paragraph') {
      return /*#__PURE__*/React.createElement("p", {
        className: "mb-default",
        key: index
      }, element.content);
    } else if (element.type === 'heading') {
      return /*#__PURE__*/React.createElement("h3", {
        className: "mb-default mt-m",
        key: index
      }, element.content);
    } else if (element.type === 'description') {
      return /*#__PURE__*/React.createElement("p", {
        className: "uppercase mb-default",
        key: index
      }, element.content);
    } else return /*#__PURE__*/React.createElement("img", {
      className: "mb-default mt-m",
      key: index,
      src: element.content
    });
  })))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Article)));

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports home, customers, testimonials, services, works, about, contact, blog, article */
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
var customers = (/* unused pure expression or super */ null && (['fab fa-jedi-order icon-white', 'fas fa-star-of-life icon-white', 'fas fa-store-alt icon-white', 'fas fa-share-alt-square icon-white', 'fas fa-poo-storm icon-white', 'fas fa-charging-station icon-white', 'fas fa-snowplow icon-white']));
var testimonials = [{
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.',
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: 'John Doe',
  position: 'Web developer'
}, {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.',
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: 'John Doe',
  position: 'Web developer'
}, {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.',
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: 'John Doe',
  position: 'Web developer'
}, {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat bibendum turpis sit amet pretium. Nunc ut dui ornare, vulputate augue sed, varius velit.',
  avatar: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/avatar.jpg)"),
  name: 'John Doe',
  position: 'Web developer'
}];
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
    columns: [{
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item1.jpg)"),
      heading: 'Arhitecture'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item2.jpg)"),
      heading: 'Photography'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item3.jpg)"),
      heading: 'Teaser'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item4.jpg)"),
      heading: 'Styles'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item5.jpg)"),
      heading: 'About'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item6.jpg)"),
      heading: 'Names'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item7.jpg)"),
      heading: 'Titles'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item8.jpg)"),
      heading: 'Something'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item9.jpg)"),
      heading: 'Reaction'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item10.jpg)"),
      heading: 'Miscelanious'
    }]
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
var blog = {
  header: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/pen.jpg)"),
    heading: 'Blog.'
  },
  heading: 'Check our latest news.',
  description: 'Check Out Some of Our News',
  articles: [{
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)"),
    heading: 'Could this VR sketching tool be coming of age for designers in the future?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/design.jpg)"),
    heading: '8 Cities That Show You What The Future Will Look Like (Innovative Ideas)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/thanks.jpg)"),
    heading: '15 Gift Ideas for Mom and Dad. Wherever They Are This Year',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)"),
    heading: 'Could this VR sketching tool be coming of age for designers in the future?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/design.jpg)"),
    heading: '8 Cities That Show You What The Future Will Look Like (Innovative Ideas)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }, {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/thanks.jpg)"),
    heading: '15 Gift Ideas for Mom and Dad. Wherever They Are This Year',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
    button: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "article")
  }]
};
var article = {
  header: {
    category: 'Technology',
    heading: 'Could this VR sketching tool be coming of age for designers in the future?',
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg)")
  },
  content: {
    sidebar: {
      details: [{
        heading: 'Written by',
        description: 'John Doe'
      }, {
        heading: 'Posted on',
        description: 'January 3, 2022'
      }, {
        heading: 'Tags',
        description: 'Design, Technology'
      }],
      socialMedia: [{
        link: 'https://facebook.com',
        icon: 'fab fa-facebook'
      }, {
        link: 'https://twitter.com',
        icon: 'fab fa-twitter'
      }, {
        link: 'https://instagram.com',
        icon: 'fab fa-instagram'
      }]
    },
    main: [{
      type: 'description',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla.'
    }, {
      type: 'paragraph',
      content: 'Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a.'
    }, {
      type: 'heading',
      content: 'The New Generation of VR is Coming!'
    }, {
      type: 'paragraph',
      content: 'Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a.'
    }, {
      type: 'image',
      content: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/vr.jpg")
    }, {
      type: 'paragraph',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in posuere metus. Donec dictum tempor odio, sit amet condimentum odio mollis nec. Praesent eget ligula neque. Quisque pharetra elementum massa at fringilla. Nullam fringilla nec augue id sollicitudin. Quisque interdum lobortis tortor, sit amet aliquam urna aliquam in. Morbi in quam a tellus tempor tincidunt sed vitae eros.'
    }, {
      type: 'paragraph',
      content: 'Etiam ultrices ex nec interdum luctus. Sed tincidunt nisl sed arcu sodales elementum. Etiam ac justo vitae dolor tincidunt efficitur eget at tellus. Quisque tristique volutpat nulla, eu bibendum est malesuada a. Quisque suscipit, felis ut congue molestie, eros dolor mattis dolor, a sagittis sem ligula vitae dui. Sed pellentesque sagittis tincidunt. '
    }, {
      type: 'heading',
      content: '"Your time is limited, so don\'t waste it living someone else\'s life."'
    }, {
      type: 'paragraph',
      content: ' Steve Jobs | Ex CEO of Apple '
    }]
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
/******/ var __webpack_exports__ = (__webpack_exec__(689));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vYXJ0aWNsZS4wOTcxYzk2YWNjNThhOTc2MGYzYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFTyxJQUFNRyxJQUFJLEdBQUdKLFlBQVksR0FBRyxjQUFILEdBQW9CLEdBQTdDOzs7Ozs7Ozs7Ozs7QUNGUCxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFQTtBQUVPLElBQU1HLElBQUksR0FBR0osWUFBWSxhQUFNSyxxREFBTixpQkFBK0IsWUFBeEQ7QUFFQSxJQUFNQyxVQUFVLEdBQUdOLFlBQVksYUFDaENLLHFEQURnQyx3QkFFbkMsV0FGSTs7Ozs7Ozs7O0FDTlA7QUFDQTs7QUFFQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNmLHVEQUNDO0FBQ0MsYUFBUyxFQUFDLGlDQURYO0FBRUMsU0FBSyxFQUFFO0FBQ05DLE1BQUFBLGVBQWUsRUFBRUYsT0FBTyxDQUFDRyxNQUFSLENBQWVDO0FBRDFCO0FBRlIsa0JBTUM7QUFBSyxhQUFTLEVBQUM7QUFBZixJQU5ELGVBT0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQXNCSixPQUFPLENBQUNHLE1BQVIsQ0FBZUUsUUFBckMsQ0FERCxlQUVDLGdDQUFLTCxPQUFPLENBQUNHLE1BQVIsQ0FBZUcsT0FBcEIsQ0FGRCxDQVBELENBREQsZUFhQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFTixPQUFPLENBQUNPLE9BQVIsQ0FBZ0JDLE9BQWhCLENBQXdCQyxPQUF4QixDQUFnQ0MsR0FBaEMsQ0FBb0MsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsd0JBQ3BDO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUcsRUFBRUE7QUFBdEMsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUE0QkQsSUFBSSxDQUFDTCxPQUFqQyxDQURELGVBRUMsK0JBQUlLLElBQUksQ0FBQ0UsV0FBVCxDQUZELENBRG9DO0FBQUEsR0FBcEMsQ0FERixlQU9DO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRWIsT0FBTyxDQUFDTyxPQUFSLENBQWdCQyxPQUFoQixDQUF3Qk0sV0FBeEIsQ0FBb0NKLEdBQXBDLENBQ0EsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsd0JBQ0M7QUFBRyxVQUFJLEVBQUVELElBQUksQ0FBQ0k7QUFBZCxvQkFDQztBQUFHLGVBQVMsRUFBRUosSUFBSSxDQUFDSztBQUFuQixXQURELENBREQ7QUFBQSxHQURBLENBREYsQ0FQRCxDQURELGVBa0JDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRWhCLE9BQU8sQ0FBQ08sT0FBUixDQUFnQlUsSUFBaEIsQ0FBcUJQLEdBQXJCLENBQXlCLFVBQUNRLE9BQUQsRUFBVU4sS0FBVixFQUFvQjtBQUM3QyxRQUFJTSxPQUFPLENBQUNDLElBQVIsS0FBaUIsV0FBckIsRUFBa0M7QUFDakMsMEJBQ0M7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBMEIsV0FBRyxFQUFFUDtBQUEvQixTQUNFTSxPQUFPLENBQUNYLE9BRFYsQ0FERDtBQUtBLEtBTkQsTUFNTyxJQUFJVyxPQUFPLENBQUNDLElBQVIsS0FBaUIsU0FBckIsRUFBZ0M7QUFDdEMsMEJBQ0M7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQWdDLFdBQUcsRUFBRVA7QUFBckMsU0FDRU0sT0FBTyxDQUFDWCxPQURWLENBREQ7QUFLQSxLQU5NLE1BTUEsSUFBSVcsT0FBTyxDQUFDQyxJQUFSLEtBQWlCLGFBQXJCLEVBQW9DO0FBQzFDLDBCQUNDO0FBQUcsaUJBQVMsRUFBQyxzQkFBYjtBQUFvQyxXQUFHLEVBQUVQO0FBQXpDLFNBQ0VNLE9BQU8sQ0FBQ1gsT0FEVixDQUREO0FBS0EsS0FOTSxNQU9OLG9CQUNDO0FBQ0MsZUFBUyxFQUFDLGlCQURYO0FBRUMsU0FBRyxFQUFFSyxLQUZOO0FBR0MsU0FBRyxFQUFFTSxPQUFPLENBQUNYO0FBSGQsTUFERDtBQU9ELEdBM0JBLENBREYsQ0FsQkQsQ0FERCxDQWJELENBRGU7QUFBQSxDQUFoQjs7QUFtRUEsc0VBQWVOLGdEQUFBQSxPQUFmOzs7Ozs7Ozs7QUN0RUE7QUFDTyxJQUFNbUIsSUFBSSxHQUFHO0FBQ25CakIsRUFBQUEsTUFBTSxFQUFFO0FBQ1BDLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULGlDQURFO0FBRVBlLElBQUFBLFdBQVcsRUFBRSwrQkFGTjtBQUdQUCxJQUFBQSxPQUFPLEVBQUUsd0JBSEY7QUFJUGUsSUFBQUEsTUFBTSxFQUFFO0FBSkQsR0FEVztBQU9uQkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1RoQixJQUFBQSxPQUFPLEVBQUUsV0FEQTtBQUVUTyxJQUFBQSxXQUFXLEVBQUU7QUFGSixHQVBTO0FBV25CVSxFQUFBQSxLQUFLLEVBQUU7QUFDTmpCLElBQUFBLE9BQU8sRUFBRSxRQURIO0FBRU5PLElBQUFBLFdBQVcsRUFBRSxtQkFGUDtBQUdOUSxJQUFBQSxNQUFNLEVBQUU7QUFBRUcsTUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0JULE1BQUFBLElBQUksWUFBS25CLDhEQUFMO0FBQXhCO0FBSEYsR0FYWTtBQWdCbkI2QixFQUFBQSxLQUFLLEVBQUU7QUFDTm5CLElBQUFBLE9BQU8sRUFBRSxRQURIO0FBRU5PLElBQUFBLFdBQVcsRUFBRTtBQUZQLEdBaEJZO0FBb0JuQmEsRUFBQUEsWUFBWSxFQUFFO0FBQ2JwQixJQUFBQSxPQUFPLEVBQUUsZUFESTtBQUViTyxJQUFBQSxXQUFXLEVBQUU7QUFGQTtBQXBCSyxDQUFiO0FBeUJBLElBQU1jLFNBQVMsR0FBRyxpREFDeEIsOEJBRHdCLEVBRXhCLGdDQUZ3QixFQUd4Qiw2QkFId0IsRUFJeEIsb0NBSndCLEVBS3hCLDZCQUx3QixFQU14QixvQ0FOd0IsRUFPeEIsNEJBUHdCLENBQWxCO0FBU0EsSUFBTUQsWUFBWSxHQUFHLENBQzNCO0FBQ0NiLEVBQUFBLFdBQVcsRUFDVixxS0FGRjtBQUdDZSxFQUFBQSxNQUFNLGdCQUFTOUIsb0VBQVQsd0JBSFA7QUFJQytCLEVBQUFBLElBQUksRUFBRSxVQUpQO0FBS0NDLEVBQUFBLFFBQVEsRUFBRTtBQUxYLENBRDJCLEVBUTNCO0FBQ0NqQixFQUFBQSxXQUFXLEVBQ1YscUtBRkY7QUFHQ2UsRUFBQUEsTUFBTSxnQkFBUzlCLG9FQUFULHdCQUhQO0FBSUMrQixFQUFBQSxJQUFJLEVBQUUsVUFKUDtBQUtDQyxFQUFBQSxRQUFRLEVBQUU7QUFMWCxDQVIyQixFQWUzQjtBQUNDakIsRUFBQUEsV0FBVyxFQUNWLHFLQUZGO0FBR0NlLEVBQUFBLE1BQU0sZ0JBQVM5QixvRUFBVCx3QkFIUDtBQUlDK0IsRUFBQUEsSUFBSSxFQUFFLFVBSlA7QUFLQ0MsRUFBQUEsUUFBUSxFQUFFO0FBTFgsQ0FmMkIsRUFzQjNCO0FBQ0NqQixFQUFBQSxXQUFXLEVBQ1YscUtBRkY7QUFHQ2UsRUFBQUEsTUFBTSxnQkFBUzlCLG9FQUFULHdCQUhQO0FBSUMrQixFQUFBQSxJQUFJLEVBQUUsVUFKUDtBQUtDQyxFQUFBQSxRQUFRLEVBQUU7QUFMWCxDQXRCMkIsQ0FBckI7QUE4QkEsSUFBTVIsUUFBUSxHQUFHO0FBQ3ZCbkIsRUFBQUEsTUFBTSxFQUFFO0FBQ1BDLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULG9DQURFO0FBRVBRLElBQUFBLE9BQU8sRUFBRTtBQUZGLEdBRGU7QUFLdkJ5QixFQUFBQSxXQUFXLEVBQUU7QUFDWnpCLElBQUFBLE9BQU8sRUFBRSxlQURHO0FBRVpPLElBQUFBLFdBQVcsRUFBRTtBQUZELEdBTFU7QUFTdkJVLEVBQUFBLEtBQUssRUFBRTtBQUNObkIsSUFBQUEsS0FBSyxnQkFBU04sb0VBQVQsaUNBREM7QUFFTlEsSUFBQUEsT0FBTyxFQUFFLHNCQUZIO0FBR05lLElBQUFBLE1BQU0sRUFBRTtBQUFFRyxNQUFBQSxJQUFJLEVBQUUsY0FBUjtBQUF3QlQsTUFBQUEsSUFBSSxZQUFLbkIsOERBQUw7QUFBNUI7QUFIRixHQVRnQjtBQWN2Qm9DLEVBQUFBLE1BQU0sRUFBRTtBQUNQMUIsSUFBQUEsT0FBTyxFQUFFLG1DQURGO0FBRVBPLElBQUFBLFdBQVcsRUFDVjtBQUhNO0FBZGUsQ0FBakI7QUFvQkEsSUFBTVUsS0FBSyxHQUFHO0FBQ3BCcEIsRUFBQUEsTUFBTSxFQUFFO0FBQ1BDLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULDhCQURFO0FBRVBRLElBQUFBLE9BQU8sRUFBRTtBQUZGLEdBRFk7QUFLcEJDLEVBQUFBLE9BQU8sRUFBRTtBQUNSRCxJQUFBQSxPQUFPLEVBQUUsWUFERDtBQUVSTyxJQUFBQSxXQUFXLEVBQUUsbUJBRkw7QUFHUm9CLElBQUFBLE9BQU8sRUFBRSxDQUNSO0FBQ0M3QixNQUFBQSxLQUFLLGdCQUFTTixvRUFBVCw2QkFETjtBQUVDUSxNQUFBQSxPQUFPLEVBQUU7QUFGVixLQURRLEVBS1I7QUFDQ0YsTUFBQUEsS0FBSyxnQkFBU04sb0VBQVQsNkJBRE47QUFFQ1EsTUFBQUEsT0FBTyxFQUFFO0FBRlYsS0FMUSxFQVNSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBVFEsRUFhUjtBQUNDRixNQUFBQSxLQUFLLGdCQUFTTixvRUFBVCw2QkFETjtBQUVDUSxNQUFBQSxPQUFPLEVBQUU7QUFGVixLQWJRLEVBaUJSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBakJRLEVBcUJSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBckJRLEVBeUJSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBekJRLEVBNkJSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBN0JRLEVBaUNSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDZCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBakNRLEVBcUNSO0FBQ0NGLE1BQUFBLEtBQUssZ0JBQVNOLG9FQUFULDhCQUROO0FBRUNRLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBckNRO0FBSEQ7QUFMVyxDQUFkO0FBb0RBLElBQU1tQixLQUFLLEdBQUc7QUFDcEJ0QixFQUFBQSxNQUFNLEVBQUU7QUFDUEMsSUFBQUEsS0FBSyxnQkFBU04sb0VBQVQsOEJBREU7QUFFUFEsSUFBQUEsT0FBTyxFQUFFO0FBRkYsR0FEWTtBQUtwQjBCLEVBQUFBLE1BQU0sRUFBRTtBQUNQMUIsSUFBQUEsT0FBTyxFQUFFLG1DQURGO0FBRVBPLElBQUFBLFdBQVcsRUFDVix1SEFITTtBQUlQVCxJQUFBQSxLQUFLLGdCQUFTTixvRUFBVDtBQUpFLEdBTFk7QUFXcEJvQyxFQUFBQSxLQUFLLEVBQUU7QUFDTjlCLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULGlDQURDO0FBRU5RLElBQUFBLE9BQU8sRUFBRSxrQ0FGSDtBQUdOTyxJQUFBQSxXQUFXLEVBQ1YsaVFBSks7QUFLTlEsSUFBQUEsTUFBTSxFQUFFO0FBQUVHLE1BQUFBLElBQUksRUFBRTtBQUFSO0FBTEYsR0FYYTtBQWtCcEJXLEVBQUFBLElBQUksRUFBRTtBQUNMN0IsSUFBQUEsT0FBTyxFQUFFLGdCQURKO0FBRUxPLElBQUFBLFdBQVcsRUFBRTtBQUZSO0FBbEJjLENBQWQ7QUF1QkEsSUFBTXVCLE9BQU8sR0FBRztBQUN0QmpDLEVBQUFBLE1BQU0sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLGdCQUFTTixvRUFBVCxxQkFERTtBQUVQUSxJQUFBQSxPQUFPLEVBQUU7QUFGRixHQURjO0FBS3RCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUkQsSUFBQUEsT0FBTyxFQUFFLHVCQUREO0FBRVJPLElBQUFBLFdBQVcsRUFBRSw0QkFGTDtBQUdSb0IsSUFBQUEsT0FBTyxFQUFFO0FBQ1JJLE1BQUFBLE9BQU8sRUFBRTtBQUNSL0IsUUFBQUEsT0FBTyxFQUFFLE9BREQ7QUFFUmdDLFFBQUFBLE9BQU8sRUFBRTtBQUNSQyxVQUFBQSxPQUFPLEVBQUU7QUFDUmYsWUFBQUEsSUFBSSxFQUFFLGFBREU7QUFFUlQsWUFBQUEsSUFBSSxFQUFFO0FBRkUsV0FERDtBQUtSeUIsVUFBQUEsT0FBTyxFQUFFO0FBQ1JoQixZQUFBQSxJQUFJLEVBQUUsYUFERTtBQUVSVCxZQUFBQSxJQUFJLEVBQUU7QUFGRTtBQUxEO0FBRkQsT0FERDtBQWNSMEIsTUFBQUEsT0FBTyxFQUFFO0FBQ1JuQyxRQUFBQSxPQUFPLEVBQUUsU0FERDtBQUVSTyxRQUFBQSxXQUFXLEVBQ1Y7QUFITyxPQWREO0FBbUJSNkIsTUFBQUEsT0FBTyxFQUFFO0FBQ1JwQyxRQUFBQSxPQUFPLEVBQUUsT0FERDtBQUVSZ0MsUUFBQUEsT0FBTyxFQUFFO0FBQ1JDLFVBQUFBLE9BQU8sRUFBRTtBQUNSZixZQUFBQSxJQUFJLEVBQUUsa0JBREU7QUFFUlQsWUFBQUEsSUFBSSxFQUFFO0FBRkUsV0FERDtBQUtSeUIsVUFBQUEsT0FBTyxFQUFFO0FBQ1JoQixZQUFBQSxJQUFJLEVBQUUsdUJBREU7QUFFUlQsWUFBQUEsSUFBSSxFQUFFO0FBRkU7QUFMRDtBQUZEO0FBbkJEO0FBSEQsR0FMYTtBQTBDdEI0QixFQUFBQSxJQUFJLEVBQUU7QUFDTHJDLElBQUFBLE9BQU8sRUFBRSxvQkFESjtBQUVMTyxJQUFBQSxXQUFXLEVBQUU7QUFGUjtBQTFDZ0IsQ0FBaEI7QUErQ0EsSUFBTStCLElBQUksR0FBRztBQUNuQnpDLEVBQUFBLE1BQU0sRUFBRTtBQUNQQyxJQUFBQSxLQUFLLGdCQUFTTixvRUFBVCxxQkFERTtBQUVQUSxJQUFBQSxPQUFPLEVBQUU7QUFGRixHQURXO0FBS25CQSxFQUFBQSxPQUFPLEVBQUUsd0JBTFU7QUFNbkJPLEVBQUFBLFdBQVcsRUFBRSw0QkFOTTtBQU9uQmdDLEVBQUFBLFFBQVEsRUFBRSxDQUNUO0FBQ0N6QyxJQUFBQSxLQUFLLGdCQUFTTixvRUFBVCxvQkFETjtBQUVDUSxJQUFBQSxPQUFPLEVBQ04sNEVBSEY7QUFJQ08sSUFBQUEsV0FBVyxFQUNWLG9HQUxGO0FBTUNRLElBQUFBLE1BQU0sWUFBS3pCLDhEQUFMO0FBTlAsR0FEUyxFQVNUO0FBQ0NRLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULHdCQUROO0FBRUNRLElBQUFBLE9BQU8sRUFDTiwwRUFIRjtBQUlDTyxJQUFBQSxXQUFXLEVBQ1Ysb0dBTEY7QUFNQ1EsSUFBQUEsTUFBTSxZQUFLekIsOERBQUw7QUFOUCxHQVRTLEVBaUJUO0FBQ0NRLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULHdCQUROO0FBRUNRLElBQUFBLE9BQU8sRUFDTiw0REFIRjtBQUlDTyxJQUFBQSxXQUFXLEVBQ1Ysb0dBTEY7QUFNQ1EsSUFBQUEsTUFBTSxZQUFLekIsOERBQUw7QUFOUCxHQWpCUyxFQXlCVDtBQUNDUSxJQUFBQSxLQUFLLGdCQUFTTixvRUFBVCxvQkFETjtBQUVDUSxJQUFBQSxPQUFPLEVBQ04sNEVBSEY7QUFJQ08sSUFBQUEsV0FBVyxFQUNWLG9HQUxGO0FBTUNRLElBQUFBLE1BQU0sWUFBS3pCLDhEQUFMO0FBTlAsR0F6QlMsRUFpQ1Q7QUFDQ1EsSUFBQUEsS0FBSyxnQkFBU04sb0VBQVQsd0JBRE47QUFFQ1EsSUFBQUEsT0FBTyxFQUNOLDBFQUhGO0FBSUNPLElBQUFBLFdBQVcsRUFDVixvR0FMRjtBQU1DUSxJQUFBQSxNQUFNLFlBQUt6Qiw4REFBTDtBQU5QLEdBakNTLEVBeUNUO0FBQ0NRLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFULHdCQUROO0FBRUNRLElBQUFBLE9BQU8sRUFDTiw0REFIRjtBQUlDTyxJQUFBQSxXQUFXLEVBQ1Ysb0dBTEY7QUFNQ1EsSUFBQUEsTUFBTSxZQUFLekIsOERBQUw7QUFOUCxHQXpDUztBQVBTLENBQWI7QUEwREEsSUFBTUksT0FBTyxHQUFHO0FBQ3RCRyxFQUFBQSxNQUFNLEVBQUU7QUFDUEUsSUFBQUEsUUFBUSxFQUFFLFlBREg7QUFFUEMsSUFBQUEsT0FBTyxFQUNOLDRFQUhNO0FBSVBGLElBQUFBLEtBQUssZ0JBQVNOLG9FQUFUO0FBSkUsR0FEYztBQU90QlMsRUFBQUEsT0FBTyxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRTtBQUNSQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUjtBQUNDSCxRQUFBQSxPQUFPLEVBQUUsWUFEVjtBQUVDTyxRQUFBQSxXQUFXLEVBQUU7QUFGZCxPQURRLEVBS1I7QUFDQ1AsUUFBQUEsT0FBTyxFQUFFLFdBRFY7QUFFQ08sUUFBQUEsV0FBVyxFQUFFO0FBRmQsT0FMUSxFQVNSO0FBQ0NQLFFBQUFBLE9BQU8sRUFBRSxNQURWO0FBRUNPLFFBQUFBLFdBQVcsRUFBRTtBQUZkLE9BVFEsQ0FERDtBQWVSQyxNQUFBQSxXQUFXLEVBQUUsQ0FDWjtBQUNDQyxRQUFBQSxJQUFJLEVBQUUsc0JBRFA7QUFFQ0MsUUFBQUEsSUFBSSxFQUFFO0FBRlAsT0FEWSxFQUtaO0FBQ0NELFFBQUFBLElBQUksRUFBRSxxQkFEUDtBQUVDQyxRQUFBQSxJQUFJLEVBQUU7QUFGUCxPQUxZLEVBU1o7QUFDQ0QsUUFBQUEsSUFBSSxFQUFFLHVCQURQO0FBRUNDLFFBQUFBLElBQUksRUFBRTtBQUZQLE9BVFk7QUFmTCxLQUREO0FBK0JSQyxJQUFBQSxJQUFJLEVBQUUsQ0FDTDtBQUNDRSxNQUFBQSxJQUFJLEVBQUUsYUFEUDtBQUVDWixNQUFBQSxPQUFPLEVBQ047QUFIRixLQURLLEVBTUw7QUFDQ1ksTUFBQUEsSUFBSSxFQUFFLFdBRFA7QUFFQ1osTUFBQUEsT0FBTyxFQUNOO0FBSEYsS0FOSyxFQVdMO0FBQ0NZLE1BQUFBLElBQUksRUFBRSxTQURQO0FBRUNaLE1BQUFBLE9BQU8sRUFBRTtBQUZWLEtBWEssRUFlTDtBQUNDWSxNQUFBQSxJQUFJLEVBQUUsV0FEUDtBQUVDWixNQUFBQSxPQUFPLEVBQ047QUFIRixLQWZLLEVBb0JMO0FBQ0NZLE1BQUFBLElBQUksRUFBRSxPQURQO0FBRUNaLE1BQUFBLE9BQU8sWUFBS1Qsb0VBQUw7QUFGUixLQXBCSyxFQXdCTDtBQUNDcUIsTUFBQUEsSUFBSSxFQUFFLFdBRFA7QUFFQ1osTUFBQUEsT0FBTyxFQUNOO0FBSEYsS0F4QkssRUE2Qkw7QUFDQ1ksTUFBQUEsSUFBSSxFQUFFLFdBRFA7QUFFQ1osTUFBQUEsT0FBTyxFQUNOO0FBSEYsS0E3QkssRUFrQ0w7QUFDQ1ksTUFBQUEsSUFBSSxFQUFFLFNBRFA7QUFFQ1osTUFBQUEsT0FBTyxFQUNOO0FBSEYsS0FsQ0ssRUF1Q0w7QUFDQ1ksTUFBQUEsSUFBSSxFQUFFLFdBRFA7QUFFQ1osTUFBQUEsT0FBTyxFQUFFO0FBRlYsS0F2Q0s7QUEvQkU7QUFQYSxDQUFoQjs7Ozs7OztBQ3pRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2EsTUFBTSxtQkFBTyxDQUFDLEdBQWUsa0JBQWtCLHlCQUFnQixPQUFPLHlCQUFrQixPQUFPLHlCQUFnQixPQUFPLDRCQUE0Qix5QkFBZ0IsT0FBTztBQUN0TCwyQ0FBMkMsaUJBQWlCLHFCQUFxQixvQkFBb0IseUJBQWdCLHFCQUFxQix5QkFBa0Isd0JBQXdCLHlCQUFnQixxQkFBcUIsc0JBQXNCLHFCQUFxQix5QkFBeUIseUJBQWdCLHFCQUFxQixrQkFBa0Isa0JBQWtCO0FBQ3RXLGNBQWMsNkNBQTZDLDJCQUEyQixtQ0FBbUMsY0FBYyx5RUFBeUUsbUJBQW1CLG1EQUFtRCxvQ0FBb0M7QUFDMVQsT0FBTyxxQkFBcUIsU0FBUyxnQ0FBZ0MsaUNBQWlDLDhCQUE4QixNQUFNLGtCQUFrQixhQUFhLGVBQWUsWUFBWSxrQkFBa0IsZ0NBQWdDLG1DQUFtQywwRUFBMEUsbURBQW1ELG9DQUFvQztBQUMxYixjQUFjLHdCQUF3QixrQkFBa0IsYUFBYSxlQUFlLFlBQVksa0JBQWtCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLDBCQUEwQixPQUFPLGFBQWEsc0NBQXNDO0FBQy9QLGtCQUFrQixVQUFVLGVBQWUsNEhBQTRILHlCQUF5QixzQkFBc0IsYUFBYSx1QkFBdUIsSUFBSSx3QkFBd0IsYUFBYSw0RUFBNEUsT0FBTztBQUN0WCxnQkFBZ0IsT0FBTyxzRUFBc0UsY0FBYyxvREFBb0QsbUJBQW1CLE9BQU8sbUJBQW1CLHdDQUF3QyxZQUFZLEVBQUUsYUFBYSxnQkFBZ0I7QUFDL1Isc0JBQXNCLGVBQWUseUNBQXlDLFNBQVMsaUJBQWlCLGVBQWUsaUNBQWlDLE1BQU0saUNBQWlDLG9CQUFvQiwrSEFBK0gsU0FBUywyR0FBMkcsSUFBSSxtQkFBbUI7QUFDN2QsRUFBRSxXQUFXLEtBQUssT0FBTyxlQUFlLGdCQUFnQix5REFBeUQsbUJBQW1CLHdDQUF3QyxzRkFBc0YsOEJBQThCLE1BQU0sU0FBUyxrQkFBa0Isb0JBQW9CLGFBQWEsd0JBQXdCLHVCQUF1QixFQUFFO0FBQ25aLGNBQWMsbUJBQW1CLGdCQUFnQixNQUFNLFlBQVksWUFBWSxtQkFBbUIscURBQXFELGFBQWEseUNBQXlDLEVBQUUsa0NBQWtDLGlCQUFpQixPQUFPLGNBQWMsYUFBYSxnQkFBZ0IsZ0NBQWdDLFNBQVMsT0FBTyxrREFBa0QsYUFBYSwyQ0FBMkMsV0FBVztBQUN6ZCx5QkFBZ0IsRUFBRSw4QkFBOEIsZUFBZSx3QkFBd0IsSUFBSSxtQkFBbUIsUUFBUSxlQUFlLElBQUksRUFBRSxTQUFTLHFCQUFxQix1QkFBdUIsU0FBUyxNQUFNLGtCQUFrQiw2QkFBNkIsV0FBVyx5QkFBaUIsR0FBRyx5QkFBcUIsR0FBRyx5QkFBMEQ7QUFDL1cseUJBQW9CLGlCQUFpQiw4Q0FBOEMsVUFBVSxxQ0FBcUMsWUFBWSxzQ0FBc0MsNkJBQTZCLHlEQUF5RCx5RkFBeUYseUJBQXlCLHNCQUFzQixhQUFhLFdBQVcsWUFBWSxJQUFJLHdCQUF3QixhQUFhLE9BQU87QUFDdGUsK0JBQStCLHlCQUFxQixlQUFlLHFCQUFxQixHQUFHLGdIQUFnSCxZQUFZLHVCQUF1QixxQkFBcUIseUJBQXFCLEdBQUcseUJBQXFCLGFBQWEscUJBQXFCLFNBQVMsVUFBVSx5QkFBaUIsWUFBWSxPQUFPLGVBQWUseUJBQWtCLGFBQWEsT0FBTyxzQkFBc0IseUJBQXNCO0FBQzFlLHlCQUFZLGFBQWEsT0FBTyxxQkFBcUIscUJBQXFCLFdBQVcseUJBQVksZUFBZSxPQUFPLDhDQUE4Qyx5QkFBbUIsZUFBZSw2QkFBNkIseUJBQWtCLGVBQWUsNEJBQTRCLHlCQUFxQixjQUFjLHlCQUFpQixlQUFlLDJCQUEyQix5QkFBMkIsaUJBQWlCO0FBQzNhLHlCQUF1QixlQUFlLGlDQUFpQyx5QkFBZSxlQUFlLHlCQUF5Qix5QkFBa0IsaUJBQWlCLDhCQUE4Qix5QkFBYyxhQUFhLHNCQUFzQix5QkFBZ0IsYUFBYSx3QkFBd0IseUJBQWU7Ozs7Ozs7O0FDdEJ2Uzs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsOENBQXlEO0FBQzNELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9BcnRpY2xlLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyAnL3BsYXlncm91bmQvJyA6ICcvJztcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gYCR7cHJvamVjdEJhc2V9ZmxhbWluZ28vYCA6ICcvZmxhbWluZ28vJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZsYW1pbmdvYFxuXHQ6ICcvZmxhbWluZ28nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXJ0aWNsZSB9IGZyb20gJy4vZGInO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBoZWFkZXItYXJ0aWNsZSBzZWN0aW9uXCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGFydGljbGUuaGVhZGVyLmltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWItbVwiPnthcnRpY2xlLmhlYWRlci5jYXRlZ29yeX08L2g1PlxyXG5cdFx0XHRcdDxoMj57YXJ0aWNsZS5oZWFkZXIuaGVhZGluZ308L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYXJ0aWNsZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG5cdFx0XHRcdFx0e2FydGljbGUuY29udGVudC5zaWRlYmFyLmRldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbCBiYi13aGl0ZVwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2l0ZW0uaGVhZGluZ308L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLXNtYWxsXCI+XHJcblx0XHRcdFx0XHRcdHthcnRpY2xlLmNvbnRlbnQuc2lkZWJhci5zb2NpYWxNZWRpYS5tYXAoXHJcblx0XHRcdFx0XHRcdFx0KGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtpdGVtLmxpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+IDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHRcdHthcnRpY2xlLmNvbnRlbnQubWFpbi5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2hlYWRpbmcnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1kZWZhdWx0IG10LW1cIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09ICdkZXNjcmlwdGlvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIG1iLWRlZmF1bHRcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi1kZWZhdWx0IG10LW1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iLCJpbXBvcnQgeyBQVUJMSUNfVVJMLCBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2hlYWRlci1ob21lcGFnZS5qcGcpYCxcclxuXHRcdGRlc2NyaXB0aW9uOiAnQ3JlYXRpdmUgbWluZCwgY3JlYXRpdmUgd29ya3MnLFxyXG5cdFx0aGVhZGluZzogJ1dlIGFyZSBkaWdpdGFsIGFnZW5jeS4nLFxyXG5cdFx0YnV0dG9uOiAnZ2V0dGluZyBzdGFydGVkJyxcclxuXHR9LFxyXG5cdHNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VydmljZXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzJyxcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRoZWFkaW5nOiAnV29ya3MuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBXZSd2ZSBNYWRlXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ3ZpZXcgYWxsJywgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdGFib3V0OiB7XHJcblx0XHRoZWFkaW5nOiAnQWJvdXQuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeScsXHJcblx0fSxcclxuXHR0ZXN0aW1vbmlhbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdUZXN0aW1vbmlhbHMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeScsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGN1c3RvbWVycyA9IFtcclxuXHQnZmFiIGZhLWplZGktb3JkZXIgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1zdGFyLW9mLWxpZmUgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1zdG9yZS1hbHQgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1zaGFyZS1hbHQtc3F1YXJlIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtcG9vLXN0b3JtIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtY2hhcmdpbmctc3RhdGlvbiBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXNub3dwbG93IGljb24td2hpdGUnLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxzID0gW1xyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvaGVhZGVyLWJnLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXHJcblx0fSxcclxuXHRvdXJTZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogJ091ciBzZXJ2aWNlcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdPdXIgU2VydmljZXMgZm9yIGNsaWVudHMnLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdXYW5uYSBzZWUgb3VyIHdvcmtzPycsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ2FsbCBwcm9qZWN0cycsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4gRG9uZWMgZWxlbWVudHVtLCB0b3J0b3IgdmVsIHZpdmVycmEgdWx0cmljZXMsIGxhY3VzIG9yY2kgdmVuZW5hdGlzIHRvcnRvciwgdmVsIHJob25jdXMgaXBzdW0gZmVsaXMgYSBkaWFtLicsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHdvcmtzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvdGF0dG9vLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ091ciB3b3Jrcy4nLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0aGVhZGluZzogJ091ciBXb3Jrcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdTZWUgYWxsIG91ciB3b3JrcycsXHJcblx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnQXJoaXRlY3R1cmUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTIuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1Bob3RvZ3JhcGh5JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0zLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdUZWFzZXInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTQuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1N0eWxlcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnQWJvdXQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTYuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ05hbWVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW03LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdUaXRsZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTguanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1NvbWV0aGluZycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnUmVhY3Rpb24nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEwLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdNaXNjZWxhbmlvdXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgYWJvdXQgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9vZmZpY2UuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnQWJvdXQgdXMuJyxcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogJ0hlcmUgYXJlIHNvbWUgb2Ygb3VyIGdyZWF0IHNraWxscycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLicsXHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9waG9uZS5qcGcpYCxcclxuXHR9LFxyXG5cdHZpZGVvOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnQmVzdCBTb2x1dGlvbnMgZm9yIFlvdXIgQnVzaW5lc3MnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbGlxdWFtIHNpdCBhbWV0IHVybmEgcXVpcyBvZGlvIHZlaGljdWxhIGNvbnNlY3RldHVyLiBEb25lYyBldSBncmF2aWRhIGRpYW0uIEFlbmVhbiBhY2N1bXNhbiBuaXNsIHNlZCBmcmluZ2lsbGEgc29sbGljaXR1ZGluLiBEb25lYyB0aW5jaWR1bnQgcXVpcyBkb2xvciBlZ2V0IGNvbnNlY3RldHVyLiBTdXNwZW5kaXNzZSBhIG1vbGxpcyBsYWN1cy4nLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICdXYXRjaCB2aWRlbycgfSxcclxuXHR9LFxyXG5cdHRlYW06IHtcclxuXHRcdGhlYWRpbmc6ICdNZWV0IG91ciB0ZWFtLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ3RoZSBiZXN0IHBlb3BsZSB0byBzdXBwb3J0IHlvdXIgcHJvamVjdCcsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9tYXAuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnQ29udGFjdCB1cy4nLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0aGVhZGluZzogJ0dldCBpbiB0b3VjaCB3aXRoIHVzIScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuXHRcdGNvbHVtbnM6IHtcclxuXHRcdFx0Y29sdW1uMToge1xyXG5cdFx0XHRcdGhlYWRpbmc6ICdQSE9ORScsXHJcblx0XHRcdFx0YnV0dG9uczoge1xyXG5cdFx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnKzEyMzQ1Njc4OTAnLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAndGVsOjEyMzQ1Njc4OTAnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJyswOTg3NjU0MzIxJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ3RlbDowOTg3NjU0MzIxJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uMjoge1xyXG5cdFx0XHRcdGhlYWRpbmc6ICdBRERSRVNTJyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJhZGlwaXNjaW5nIGVsaXQuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uMzoge1xyXG5cdFx0XHRcdGhlYWRpbmc6ICdFTUFJTCcsXHJcblx0XHRcdFx0YnV0dG9uczoge1xyXG5cdFx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnYW55bWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86YW55bWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnb2ZmaWNpYWxtYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ21haWx0bzpvZmZpY2lhbG1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGZvcm06IHtcclxuXHRcdGhlYWRpbmc6ICdTZW5kIHVzIGEgbWVzc2FnZSEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGJsb2cgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW4uanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnQmxvZy4nLFxyXG5cdH0sXHJcblx0aGVhZGluZzogJ0NoZWNrIG91ciBsYXRlc3QgbmV3cy4nLFxyXG5cdGRlc2NyaXB0aW9uOiAnQ2hlY2sgT3V0IFNvbWUgb2YgT3VyIE5ld3MnLFxyXG5cdGFydGljbGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCdDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlPycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCcxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZGVzaWduLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCc4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcyknLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXInLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0Y2F0ZWdvcnk6ICdUZWNobm9sb2d5JyxcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdCdDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlPycsXHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdHNpZGViYXI6IHtcclxuXHRcdFx0ZGV0YWlsczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRpbmc6ICdXcml0dGVuIGJ5JyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnSm9obiBEb2UnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogJ1Bvc3RlZCBvbicsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0phbnVhcnkgMywgMjAyMicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiAnVGFncycsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0Rlc2lnbiwgVGVjaG5vbG9neScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vaycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbScsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFiIGZhLXR3aXR0ZXInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHRtYWluOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnZGVzY3JpcHRpb24nLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gaW4gcG9zdWVyZSBtZXR1cy4gRG9uZWMgZGljdHVtIHRlbXBvciBvZGlvLCBzaXQgYW1ldCBjb25kaW1lbnR1bSBvZGlvIG1vbGxpcyBuZWMuIFByYWVzZW50IGVnZXQgbGlndWxhIG5lcXVlLiBRdWlzcXVlIHBoYXJldHJhIGVsZW1lbnR1bSBtYXNzYSBhdCBmcmluZ2lsbGEuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnaGVhZGluZycsXHJcblx0XHRcdFx0Y29udGVudDogJ1RoZSBOZXcgR2VuZXJhdGlvbiBvZiBWUiBpcyBDb21pbmchJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IGAke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGdgLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBpbiBwb3N1ZXJlIG1ldHVzLiBEb25lYyBkaWN0dW0gdGVtcG9yIG9kaW8sIHNpdCBhbWV0IGNvbmRpbWVudHVtIG9kaW8gbW9sbGlzIG5lYy4gUHJhZXNlbnQgZWdldCBsaWd1bGEgbmVxdWUuIFF1aXNxdWUgcGhhcmV0cmEgZWxlbWVudHVtIG1hc3NhIGF0IGZyaW5naWxsYS4gTnVsbGFtIGZyaW5naWxsYSBuZWMgYXVndWUgaWQgc29sbGljaXR1ZGluLiBRdWlzcXVlIGludGVyZHVtIGxvYm9ydGlzIHRvcnRvciwgc2l0IGFtZXQgYWxpcXVhbSB1cm5hIGFsaXF1YW0gaW4uIE1vcmJpIGluIHF1YW0gYSB0ZWxsdXMgdGVtcG9yIHRpbmNpZHVudCBzZWQgdml0YWUgZXJvcy4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuIFF1aXNxdWUgc3VzY2lwaXQsIGZlbGlzIHV0IGNvbmd1ZSBtb2xlc3RpZSwgZXJvcyBkb2xvciBtYXR0aXMgZG9sb3IsIGEgc2FnaXR0aXMgc2VtIGxpZ3VsYSB2aXRhZSBkdWkuIFNlZCBwZWxsZW50ZXNxdWUgc2FnaXR0aXMgdGluY2lkdW50LiAnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2hlYWRpbmcnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnXCJZb3VyIHRpbWUgaXMgbGltaXRlZCwgc28gZG9uXFwndCB3YXN0ZSBpdCBsaXZpbmcgc29tZW9uZSBlbHNlXFwncyBsaWZlLlwiJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICcgU3RldmUgSm9icyB8IEV4IENFTyBvZiBBcHBsZSAnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJiYXNlIiwicHJvamVjdEJhc2UiLCJQVUJMSUNfVVJMIiwiUmVhY3QiLCJhcnRpY2xlIiwiQXJ0aWNsZSIsImJhY2tncm91bmRJbWFnZSIsImhlYWRlciIsImltYWdlIiwiY2F0ZWdvcnkiLCJoZWFkaW5nIiwiY29udGVudCIsInNpZGViYXIiLCJkZXRhaWxzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJzb2NpYWxNZWRpYSIsImxpbmsiLCJpY29uIiwibWFpbiIsImVsZW1lbnQiLCJ0eXBlIiwiaG9tZSIsImJ1dHRvbiIsInNlcnZpY2VzIiwid29ya3MiLCJ0ZXh0IiwiYWJvdXQiLCJ0ZXN0aW1vbmlhbHMiLCJjdXN0b21lcnMiLCJhdmF0YXIiLCJuYW1lIiwicG9zaXRpb24iLCJvdXJTZXJ2aWNlcyIsInNraWxscyIsImNvbHVtbnMiLCJ2aWRlbyIsInRlYW0iLCJjb250YWN0IiwiY29sdW1uMSIsImJ1dHRvbnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbHVtbjIiLCJjb2x1bW4zIiwiZm9ybSIsImJsb2ciLCJhcnRpY2xlcyJdLCJzb3VyY2VSb290IjoiIn0=