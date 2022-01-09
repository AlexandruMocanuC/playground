"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[651],{

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

/***/ 248:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/components/Flamingo/Form.js


var Form_Form = function Form() {
  useEffect(function () {
    __webpack_require__.e(/* import() */ 942).then(__webpack_require__.bind(__webpack_require__, 942));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "First Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Last Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Subject"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    placeholder: "Your message here"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "button"
  }, "send message")));
};

/* harmony default export */ const Flamingo_Form = ((/* unused pure expression or super */ null && (Form_Form)));
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var db = __webpack_require__(356);
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Contact.js





var Contact = function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-cover header-small",
    style: {
      backgroundImage: contact.header.image
    }
  }, /*#__PURE__*/React.createElement("h1", null, contact.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue text-center section contact-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mb-l"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-default"
  }, contact.content.heading), /*#__PURE__*/React.createElement("h5", null, contact.content.description)), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "columns-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-phone-alt icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "mb-m"
  }, contact.content.columns.column1.heading), /*#__PURE__*/React.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column1.buttons.button1.link
  }, contact.content.columns.column1.buttons.button1.text)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column1.buttons.button2.link
  }, contact.content.columns.column1.buttons.button2.text))), /*#__PURE__*/React.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-map-marker-alt icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "mb-m"
  }, contact.content.columns.column2.heading), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mb-default"
  }, contact.content.columns.column2.description))), /*#__PURE__*/React.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope-open-text icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "mb-m"
  }, contact.content.columns.column3.heading), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column3.buttons.button1.link,
    className: "mb-default"
  }, contact.content.columns.column3.buttons.button1.text)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column3.buttons.button2.link
  }, contact.content.columns.column3.buttons.button2.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mb-l text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-default"
  }, contact.form.heading), /*#__PURE__*/React.createElement("h5", null, contact.form.description)), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Form, null))));
};

/* harmony default export */ const Flamingo_Contact = ((/* unused pure expression or super */ null && (Contact)));

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
/******/ var __webpack_exports__ = (__webpack_exec__(248));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vY29udGFjdC40ZGE2ZGNkZjYwNGMxNDZlMDRkNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFTyxJQUFNRyxJQUFJLEdBQUdKLFlBQVksR0FBRyxjQUFILEdBQW9CLEdBQTdDOzs7Ozs7Ozs7Ozs7QUNGUCxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFQTtBQUVPLElBQU1HLElBQUksR0FBR0osWUFBWSxhQUFNSyxxREFBTixpQkFBK0IsWUFBeEQ7QUFFQSxJQUFNQyxVQUFVLEdBQUdOLFlBQVksYUFDaENLLHFEQURnQyx3QkFFbkMsV0FGSTs7Ozs7Ozs7Ozs7OztBQ05QOztBQUNBLElBQU1JLFNBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEJELEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUM7QUFBL0IsSUFERCxDQURELGVBSUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQURELENBSkQsZUFPQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsZUFBVyxFQUFDO0FBQWhDLElBREQsQ0FQRCxlQVVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixlQUFXLEVBQUM7QUFBL0IsSUFERCxDQVZELENBREQsZUFlQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQVUsUUFBSSxFQUFDLEdBQWY7QUFBbUIsZUFB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QWtCLGVBQWUsNEJBQTRCLHlCQUFxQixjQUFjLHlCQUFpQixlQUFlLDJCQUEyQix5QkFBMkIsaUJBQWlCO0FBQzNhLHlCQUF1QixlQUFlLGlDQUFpQyx5QkFBZSxlQUFlLHlCQUF5Qix5QkFBa0IsaUJBQWlCLDhCQUE4Qix5QkFBYyxhQUFhLHNCQUFzQix5QkFBZ0IsYUFBYSx3QkFBd0IseUJBQWU7Ozs7Ozs7O0FDdEJ2Uzs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsOENBQXlEO0FBQzNELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9Db250YWN0LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyAnL3BsYXlncm91bmQvJyA6ICcvJztcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gYCR7cHJvamVjdEJhc2V9ZmxhbWluZ28vYCA6ICcvZmxhbWluZ28vJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZsYW1pbmdvYFxuXHQ6ICcvZmxhbWluZ28nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuY29uc3QgRm9ybSA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW1wb3J0KCcuL2Zvcm0uY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIG1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdDx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlIGhlcmVcIj48L3RleHRhcmVhPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHRzZW5kIG1lc3NhZ2VcclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm0gZnJvbSAnfmMvRmxhbWluZ28vRm9ybSc7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4gKFxyXG5cdDw+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImJnLWNvdmVyIGhlYWRlci1zbWFsbFwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBjb250YWN0LmhlYWRlci5pbWFnZSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PGgxPntjb250YWN0LmhlYWRlci5oZWFkaW5nfTwvaDE+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZSB0ZXh0LWNlbnRlciBzZWN0aW9uIGNvbnRhY3Qtc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1sXCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57Y29udGFjdC5jb250ZW50LmhlYWRpbmd9PC9oMj5cclxuXHRcdFx0XHQ8aDU+e2NvbnRhY3QuY29udGVudC5kZXNjcmlwdGlvbn08L2g1PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gdGV4dC1jZW50ZXIgcC1tXCI+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waG9uZS1hbHQgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItbVwiPlxyXG5cdFx0XHRcdFx0XHRcdHtjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEudGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi5saW5rXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi50ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gdGV4dC1jZW50ZXIgcC1tXCI+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdCBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1tXCI+XHJcblx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjIuaGVhZGluZ31cclxuXHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMi5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiB0ZXh0LWNlbnRlciBwLW1cIj5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dCBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1tXCI+XHJcblx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuaGVhZGluZ31cclxuXHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24xLmxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMy5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEudGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi5saW5rXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi50ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5IHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWItbCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2NvbnRhY3QuZm9ybS5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0PGg1Pntjb250YWN0LmZvcm0uZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PEZvcm0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcbmV4cG9ydCBjb25zdCBob21lID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvaGVhZGVyLWhvbWVwYWdlLmpwZylgLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdDcmVhdGl2ZSBtaW5kLCBjcmVhdGl2ZSB3b3JrcycsXHJcblx0XHRoZWFkaW5nOiAnV2UgYXJlIGRpZ2l0YWwgYWdlbmN5LicsXHJcblx0XHRidXR0b246ICdnZXR0aW5nIHN0YXJ0ZWQnLFxyXG5cdH0sXHJcblx0c2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6ICdTZXJ2aWNlcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdPdXIgU2VydmljZXMgZm9yIGNsaWVudHMnLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGhlYWRpbmc6ICdXb3Jrcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiVGhpbmdzIFdlJ3ZlIE1hZGVcIixcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAndmlldyBhbGwnLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0YWJvdXQ6IHtcclxuXHRcdGhlYWRpbmc6ICdBYm91dC4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5JyxcclxuXHR9LFxyXG5cdHRlc3RpbW9uaWFsczoge1xyXG5cdFx0aGVhZGluZzogJ1Rlc3RpbW9uaWFscy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJzID0gW1xyXG5cdCdmYWIgZmEtamVkaS1vcmRlciBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0YXItb2YtbGlmZSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0b3JlLWFsdCBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXNoYXJlLWFsdC1zcXVhcmUgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1wb28tc3Rvcm0gaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1jaGFyZ2luZy1zdGF0aW9uIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc25vd3Bsb3cgaWNvbi13aGl0ZScsXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9oZWFkZXItYmcuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnU2VydmljZXMuJyxcclxuXHR9LFxyXG5cdG91clNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiAnT3VyIHNlcnZpY2VzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ091ciBTZXJ2aWNlcyBmb3IgY2xpZW50cycsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ1dhbm5hIHNlZSBvdXIgd29ya3M/JyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnYWxsIHByb2plY3RzJywgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogJ0hlcmUgYXJlIHNvbWUgb2Ygb3VyIGdyZWF0IHNraWxscycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLiBEb25lYyBlbGVtZW50dW0sIHRvcnRvciB2ZWwgdml2ZXJyYSB1bHRyaWNlcywgbGFjdXMgb3JjaSB2ZW5lbmF0aXMgdG9ydG9yLCB2ZWwgcmhvbmN1cyBpcHN1bSBmZWxpcyBhIGRpYW0uJyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3Qgd29ya3MgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy90YXR0b28uanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnT3VyIHdvcmtzLicsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiAnT3VyIFdvcmtzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1NlZSBhbGwgb3VyIHdvcmtzJyxcclxuXHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdBcmhpdGVjdHVyZScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnUGhvdG9ncmFwaHknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTMuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1RlYXNlcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnU3R5bGVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW01LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdBYm91dCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTmFtZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTcuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1RpdGxlcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnU29tZXRoaW5nJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW05LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdSZWFjdGlvbicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMTAuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ01pc2NlbGFuaW91cycsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L29mZmljZS5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdBYm91dCB1cy4nLFxyXG5cdH0sXHJcblx0c2tpbGxzOiB7XHJcblx0XHRoZWFkaW5nOiAnSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpZCBhcmN1IGx1Y3R1cywgcGVsbGVudGVzcXVlIGxvcmVtIGFjLCBwaGFyZXRyYSBzYXBpZW4uJyxcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L3Bob25lLmpwZylgLFxyXG5cdH0sXHJcblx0dmlkZW86IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdCZXN0IFNvbHV0aW9ucyBmb3IgWW91ciBCdXNpbmVzcycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgdXJuYSBxdWlzIG9kaW8gdmVoaWN1bGEgY29uc2VjdGV0dXIuIERvbmVjIGV1IGdyYXZpZGEgZGlhbS4gQWVuZWFuIGFjY3Vtc2FuIG5pc2wgc2VkIGZyaW5naWxsYSBzb2xsaWNpdHVkaW4uIERvbmVjIHRpbmNpZHVudCBxdWlzIGRvbG9yIGVnZXQgY29uc2VjdGV0dXIuIFN1c3BlbmRpc3NlIGEgbW9sbGlzIGxhY3VzLicsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ1dhdGNoIHZpZGVvJyB9LFxyXG5cdH0sXHJcblx0dGVhbToge1xyXG5cdFx0aGVhZGluZzogJ01lZXQgb3VyIHRlYW0uJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAndGhlIGJlc3QgcGVvcGxlIHRvIHN1cHBvcnQgeW91ciBwcm9qZWN0JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdDb250YWN0IHVzLicsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiAnR2V0IGluIHRvdWNoIHdpdGggdXMhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdFx0Y29sdW1uczoge1xyXG5cdFx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ1BIT05FJyxcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMTIzNDU2Nzg5MCcsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MTIzNDU2Nzg5MCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnKzA5ODc2NTQzMjEnLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAndGVsOjA5ODc2NTQzMjEnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4yOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ0FERFJFU1MnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1cmFkaXBpc2NpbmcgZWxpdC4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4zOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ0VNQUlMJyxcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdhbnltYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ21haWx0bzphbnltYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdvZmZpY2lhbG1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOm9mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Zm9ybToge1xyXG5cdFx0aGVhZGluZzogJ1NlbmQgdXMgYSBtZXNzYWdlIScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgYmxvZyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3Blbi5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdCbG9nLicsXHJcblx0fSxcclxuXHRoZWFkaW5nOiAnQ2hlY2sgb3VyIGxhdGVzdCBuZXdzLicsXHJcblx0ZGVzY3JpcHRpb246ICdDaGVjayBPdXQgU29tZSBvZiBPdXIgTmV3cycsXHJcblx0YXJ0aWNsZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZGVzaWduLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCc4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcyknLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXInLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFydGljbGUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRjYXRlZ29yeTogJ1RlY2hub2xvZ3knLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0c2lkZWJhcjoge1xyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogJ1dyaXR0ZW4gYnknLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdKb2huIERvZScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiAnUG9zdGVkIG9uJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnSmFudWFyeSAzLCAyMDIyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRpbmc6ICdUYWdzJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnRGVzaWduLCBUZWNobm9sb2d5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtdHdpdHRlcicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdG1haW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdkZXNjcmlwdGlvbicsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBpbiBwb3N1ZXJlIG1ldHVzLiBEb25lYyBkaWN0dW0gdGVtcG9yIG9kaW8sIHNpdCBhbWV0IGNvbmRpbWVudHVtIG9kaW8gbW9sbGlzIG5lYy4gUHJhZXNlbnQgZWdldCBsaWd1bGEgbmVxdWUuIFF1aXNxdWUgcGhhcmV0cmEgZWxlbWVudHVtIG1hc3NhIGF0IGZyaW5naWxsYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdoZWFkaW5nJyxcclxuXHRcdFx0XHRjb250ZW50OiAnVGhlIE5ldyBHZW5lcmF0aW9uIG9mIFZSIGlzIENvbWluZyEnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRcdFx0Y29udGVudDogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZ2AsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLiBOdWxsYW0gZnJpbmdpbGxhIG5lYyBhdWd1ZSBpZCBzb2xsaWNpdHVkaW4uIFF1aXNxdWUgaW50ZXJkdW0gbG9ib3J0aXMgdG9ydG9yLCBzaXQgYW1ldCBhbGlxdWFtIHVybmEgYWxpcXVhbSBpbi4gTW9yYmkgaW4gcXVhbSBhIHRlbGx1cyB0ZW1wb3IgdGluY2lkdW50IHNlZCB2aXRhZSBlcm9zLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4gUXVpc3F1ZSBzdXNjaXBpdCwgZmVsaXMgdXQgY29uZ3VlIG1vbGVzdGllLCBlcm9zIGRvbG9yIG1hdHRpcyBkb2xvciwgYSBzYWdpdHRpcyBzZW0gbGlndWxhIHZpdGFlIGR1aS4gU2VkIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB0aW5jaWR1bnQuICcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnaGVhZGluZycsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdcIllvdXIgdGltZSBpcyBsaW1pdGVkLCBzbyBkb25cXCd0IHdhc3RlIGl0IGxpdmluZyBzb21lb25lIGVsc2VcXCdzIGxpZmUuXCInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDogJyBTdGV2ZSBKb2JzIHwgRXggQ0VPIG9mIEFwcGxlICcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImJhc2UiLCJwcm9qZWN0QmFzZSIsIlBVQkxJQ19VUkwiLCJSZWFjdCIsInVzZUVmZmVjdCIsIkZvcm0iLCJjb250YWN0IiwiQ29udGFjdCIsImJhY2tncm91bmRJbWFnZSIsImhlYWRlciIsImltYWdlIiwiaGVhZGluZyIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsImNvbHVtbnMiLCJjb2x1bW4xIiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJsaW5rIiwidGV4dCIsImJ1dHRvbjIiLCJjb2x1bW4yIiwiY29sdW1uMyIsImZvcm0iLCJob21lIiwiYnV0dG9uIiwic2VydmljZXMiLCJ3b3JrcyIsImFib3V0IiwidGVzdGltb25pYWxzIiwiY3VzdG9tZXJzIiwiYXZhdGFyIiwibmFtZSIsInBvc2l0aW9uIiwib3VyU2VydmljZXMiLCJza2lsbHMiLCJ2aWRlbyIsInRlYW0iLCJibG9nIiwiYXJ0aWNsZXMiLCJhcnRpY2xlIiwiY2F0ZWdvcnkiLCJzaWRlYmFyIiwiZGV0YWlscyIsInNvY2lhbE1lZGlhIiwiaWNvbiIsIm1haW4iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==