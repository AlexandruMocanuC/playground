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

/***/ 152:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/components/Flamingo/form.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Flamingo_form = ({"form":"L6WOd0Yv4uGZNmiiuwYp","columns_2":"hcHZ9ZiRho0jCVFcp6wL","column":"bIhllITOz5n7S62g1_7G","mb_default":"dfBkEBdA5XHYncBKaFKJ","text_center":"NN0DBAks3hm1hiq96XGB","button":"ykafZhd1gZMSrKC0Q0_E"});
;// CONCATENATED MODULE: ./src/components/Flamingo/Form.js



var Form_Form = function Form() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.form
  }, /*#__PURE__*/React.createElement("div", {
    className: $.columns_2
  }, /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "First Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Last Name"
  })), /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Subject"
  }))), /*#__PURE__*/React.createElement("div", {
    className: $.mb_default
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    placeholder: "Your message here"
  })), /*#__PURE__*/React.createElement("div", {
    className: $.text_center
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: $.button
  }, "send message")));
};

/* harmony default export */ const Flamingo_Form = ((/* unused pure expression or super */ null && (Form_Form)));
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var db = __webpack_require__(356);
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
// EXTERNAL MODULE: ./src/pages/Flamingo/style.scss
var style = __webpack_require__(503);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Contact.js






var Contact = function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_cover, " ").concat($.header_small),
    style: {
      backgroundImage: contact.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: $.h1
  }, contact.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_blue, " ").concat($.text_center, " ").concat($.section, " ").concat($.contact_section)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.container, " ").concat($.mb_l)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h2, " ").concat($.mb_default)
  }, contact.content.heading), /*#__PURE__*/React.createElement("div", {
    className: $.h5
  }, contact.content.description)), /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement("div", {
    className: $.columns_3
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.text_center, " ").concat($.p_m)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-phone-alt ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h4, " ").concat($.mb_m)
  }, contact.content.columns.column1.heading), /*#__PURE__*/React.createElement("div", {
    className: $.mb_default
  }, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column1.buttons.button1.link
  }, contact.content.columns.column1.buttons.button1.text)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column1.buttons.button2.link
  }, contact.content.columns.column1.buttons.button2.text))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.text_center, " ").concat($.p_m)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-map-marker-alt ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h4, " ").concat($.mb_m)
  }, contact.content.columns.column2.heading), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: $.mb_default
  }, contact.content.columns.column2.description))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.text_center, " ").concat($.p_m)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-envelope-open-text ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h4, " ").concat($.mb_m)
  }, contact.content.columns.column3.heading), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column3.buttons.button1.link,
    className: $.mb_default
  }, contact.content.columns.column3.buttons.button1.text)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: contact.content.columns.column3.buttons.button2.link
  }, contact.content.columns.column3.buttons.button2.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_grey, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.container, " ").concat($.mb_l, " ").concat($.text_center)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h2, " ").concat($.mb_default)
  }, contact.form.heading), /*#__PURE__*/React.createElement("div", {
    className: $.h5
  }, contact.form.description)), /*#__PURE__*/React.createElement("div", {
    className: $.container
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
/******/ var __webpack_exports__ = (__webpack_exec__(152));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vY29udGFjdC41NTZhMDYwNWYxMDM4YWE0NzRkYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFTyxJQUFNRyxJQUFJLEdBQUdKLFlBQVksR0FBRyxjQUFILEdBQW9CLEdBQTdDOzs7Ozs7Ozs7Ozs7QUNGUCxJQUFNQSxZQUFZLEdBQUdDLFlBQUEsS0FBeUIsWUFBOUM7QUFFQTtBQUVPLElBQU1HLElBQUksR0FBR0osWUFBWSxhQUFNSyxxREFBTixpQkFBK0IsWUFBeEQ7QUFFQSxJQUFNQyxVQUFVLEdBQUdOLFlBQVksYUFDaENLLHFEQURnQyx3QkFFbkMsV0FGSTs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0Esb0RBQWUsQ0FBQywwTUFBME07O0FDRDFOO0FBRUE7O0FBRUEsSUFBTUksU0FBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWjtBQUFLLGFBQVMsRUFBRUQsQ0FBQyxDQUFDRTtBQUFsQixrQkFDQztBQUFLLGFBQVMsRUFBRUYsQ0FBQyxDQUFDRztBQUFsQixrQkFDQztBQUFLLGFBQVMsRUFBRUgsQ0FBQyxDQUFDSTtBQUFsQixrQkFDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQURELENBREQsZUFJQztBQUFLLGFBQVMsRUFBRUosQ0FBQyxDQUFDSTtBQUFsQixrQkFDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQURELENBSkQsZUFPQztBQUFLLGFBQVMsRUFBRUosQ0FBQyxDQUFDSTtBQUFsQixrQkFDQztBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLGVBQVcsRUFBQztBQUFoQyxJQURELENBUEQsZUFVQztBQUFLLGFBQVMsRUFBRUosQ0FBQyxDQUFDSTtBQUFsQixrQkFDQztBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGVBQVcsRUFBQztBQUEvQixJQURELENBVkQsQ0FERCxlQWVDO0FBQUss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LCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL2Zvcm0uY3NzPzU0N2YiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9Db250YWN0LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyAnL3BsYXlncm91bmQvJyA6ICcvJztcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gYCR7cHJvamVjdEJhc2V9ZmxhbWluZ28vYCA6ICcvZmxhbWluZ28vJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZsYW1pbmdvYFxuXHQ6ICcvZmxhbWluZ28nO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJmb3JtXCI6XCJMNldPZDBZdjR1R1pObWlpdXdZcFwiLFwiY29sdW1uc18yXCI6XCJoY0haOVppUmhvMGpDVkZjcDZ3TFwiLFwiY29sdW1uXCI6XCJiSWhsbElUT3o1bjdTNjJnMV83R1wiLFwibWJfZGVmYXVsdFwiOlwiZGZCa0VCZEE1WEhZbmNCS2FGS0pcIixcInRleHRfY2VudGVyXCI6XCJOTjBEQkFrczNobTFoaXE5NlhHQlwiLFwiYnV0dG9uXCI6XCJ5a2FmWmhkMWdaTVNyS0MwUTBfRVwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwiLi9mb3JtLmNzc1wiO1xyXG5cclxuY29uc3QgRm9ybSA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT17JC5mb3JtfT5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbnNfMn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbn0+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbn0+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuY29sdW1ufT5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb2x1bW59PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tYl9kZWZhdWx0fT5cclxuXHRcdFx0PHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2UgaGVyZVwiPjwvdGV4dGFyZWE+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXskLnRleHRfY2VudGVyfT5cclxuXHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9eyQuYnV0dG9ufT5cclxuXHRcdFx0XHRzZW5kIG1lc3NhZ2VcclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJ+Yy9GbGFtaW5nby9Gb3JtXCI7XHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gXCJ+L2NvbnN0YW50cy9mbGFtaW5nb1wiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuYmdfY292ZXJ9ICR7JC5oZWFkZXJfc21hbGx9YH1cclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGNvbnRhY3QuaGVhZGVyLmltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5oMX0+e2NvbnRhY3QuaGVhZGVyLmhlYWRpbmd9PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtgJHskLmJnX2JsdWV9ICR7JC50ZXh0X2NlbnRlcn0gJHskLnNlY3Rpb259ICR7JC5jb250YWN0X3NlY3Rpb259YH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29udGFpbmVyfSAkeyQubWJfbH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5oMn0gJHskLm1iX2RlZmF1bHR9YH0+XHJcblx0XHRcdFx0XHR7Y29udGFjdC5jb250ZW50LmhlYWRpbmd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDV9Pntjb250YWN0LmNvbnRlbnQuZGVzY3JpcHRpb259PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbnNfM30+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC50ZXh0X2NlbnRlcn0gJHskLnBfbX1gfT5cclxuXHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtcGhvbmUtYWx0ICR7JC5pY29uX2dyZWVufSAkeyQubWJfbX1gfVxyXG5cdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5oNH0gJHskLm1iX219YH0+XHJcblx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjEuaGVhZGluZ31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLm1iX2RlZmF1bHR9PlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEudGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi5saW5rXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4xLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMi50ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQudGV4dF9jZW50ZXJ9ICR7JC5wX219YH0+XHJcblx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmFzIGZhLW1hcC1tYXJrZXItYWx0ICR7JC5pY29uX2dyZWVufSAkeyQubWJfbX1gfVxyXG5cdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5oNH0gJHskLm1iX219YH0+XHJcblx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjIuaGVhZGluZ31cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXskLm1iX2RlZmF1bHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjIuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQudGV4dF9jZW50ZXJ9ICR7JC5wX219YH0+XHJcblx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmFzIGZhLWVudmVsb3BlLW9wZW4tdGV4dCAkeyQuaWNvbl9ncmVlbn0gJHskLm1iX219YH1cclxuXHRcdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuaDR9ICR7JC5tYl9tfWB9PlxyXG5cdFx0XHRcdFx0XHRcdHtjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMy5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjEubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXskLm1iX2RlZmF1bHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMS50ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24yLmxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24yLnRleHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5iZ19ncmV5fSAkeyQuc2VjdGlvbn1gfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29udGFpbmVyfSAkeyQubWJfbH0gJHskLnRleHRfY2VudGVyfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmgyfSAkeyQubWJfZGVmYXVsdH1gfT5cclxuXHRcdFx0XHRcdHtjb250YWN0LmZvcm0uaGVhZGluZ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5oNX0+e2NvbnRhY3QuZm9ybS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PEZvcm0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tIFwifi9jb25zdGFudHMvZmxhbWluZ29cIjtcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkZXItaG9tZXBhZ2UuanBnKWAsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJDcmVhdGl2ZSBtaW5kLCBjcmVhdGl2ZSB3b3Jrc1wiLFxyXG5cdFx0aGVhZGluZzogXCJXZSBhcmUgZGlnaXRhbCBhZ2VuY3kuXCIsXHJcblx0XHRidXR0b246IFwiZ2V0dGluZyBzdGFydGVkXCIsXHJcblx0fSxcclxuXHRzZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogXCJTZXJ2aWNlcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIk91ciBTZXJ2aWNlcyBmb3IgY2xpZW50c1wiLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGhlYWRpbmc6IFwiV29ya3MuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGluZ3MgV2UndmUgTWFkZVwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwidmlldyBhbGxcIiwgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdGFib3V0OiB7XHJcblx0XHRoZWFkaW5nOiBcIkFib3V0LlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeVwiLFxyXG5cdH0sXHJcblx0dGVzdGltb25pYWxzOiB7XHJcblx0XHRoZWFkaW5nOiBcIlRlc3RpbW9uaWFscy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIldlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3lcIixcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJzID0gW1xyXG5cdFwiZmFiIGZhLWplZGktb3JkZXJcIixcclxuXHRcImZhcyBmYS1zdGFyLW9mLWxpZmVcIixcclxuXHRcImZhcyBmYS1zdG9yZS1hbHRcIixcclxuXHRcImZhcyBmYS1zaGFyZS1hbHQtc3F1YXJlXCIsXHJcblx0XCJmYXMgZmEtcG9vLXN0b3JtXCIsXHJcblx0XCJmYXMgZmEtY2hhcmdpbmctc3RhdGlvblwiLFxyXG5cdFwiZmFzIGZhLXNub3dwbG93XCIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC5cIixcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9oZWFkZXItYmcuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIlNlcnZpY2VzLlwiLFxyXG5cdH0sXHJcblx0b3VyU2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6IFwiT3VyIHNlcnZpY2VzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzXCIsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJXYW5uYSBzZWUgb3VyIHdvcmtzP1wiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwiYWxsIHByb2plY3RzXCIsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4gRG9uZWMgZWxlbWVudHVtLCB0b3J0b3IgdmVsIHZpdmVycmEgdWx0cmljZXMsIGxhY3VzIG9yY2kgdmVuZW5hdGlzIHRvcnRvciwgdmVsIHJob25jdXMgaXBzdW0gZmVsaXMgYSBkaWFtLlwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL3RhdHRvby5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiT3VyIHdvcmtzLlwiLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0aGVhZGluZzogXCJPdXIgV29ya3MuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJTZWUgYWxsIG91ciB3b3Jrc1wiLFxyXG5cdFx0Y29sdW1uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJBcmhpdGVjdHVyZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTIuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJQaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTMuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJUZWFzZXJcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJWaWRlb1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTQuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJTdHlsZXNcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJBcnRcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW01LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiQWJvdXRcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJXcml0aW5nc1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTYuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJOYW1lc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlRpdGxlc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlNvbWV0aGluZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlJlYWN0aW9uXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiVmlkZW9cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIk1pc2NlbGFuaW91c1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlZpZGVvXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L29mZmljZS5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQWJvdXQgdXMuXCIsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi5cIixcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L3Bob25lLmpwZylgLFxyXG5cdH0sXHJcblx0dmlkZW86IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQmVzdCBTb2x1dGlvbnMgZm9yIFlvdXIgQnVzaW5lc3NcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgdXJuYSBxdWlzIG9kaW8gdmVoaWN1bGEgY29uc2VjdGV0dXIuIERvbmVjIGV1IGdyYXZpZGEgZGlhbS4gQWVuZWFuIGFjY3Vtc2FuIG5pc2wgc2VkIGZyaW5naWxsYSBzb2xsaWNpdHVkaW4uIERvbmVjIHRpbmNpZHVudCBxdWlzIGRvbG9yIGVnZXQgY29uc2VjdGV0dXIuIFN1c3BlbmRpc3NlIGEgbW9sbGlzIGxhY3VzLlwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwiV2F0Y2ggdmlkZW9cIiB9LFxyXG5cdH0sXHJcblx0dGVhbToge1xyXG5cdFx0aGVhZGluZzogXCJNZWV0IG91ciB0ZWFtLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwidGhlIGJlc3QgcGVvcGxlIHRvIHN1cHBvcnQgeW91ciBwcm9qZWN0XCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9tYXAuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIkNvbnRhY3QgdXMuXCIsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiBcIkdldCBpbiB0b3VjaCB3aXRoIHVzIVwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcdGNvbHVtbnM6IHtcclxuXHRcdFx0Y29sdW1uMToge1xyXG5cdFx0XHRcdGhlYWRpbmc6IFwiUEhPTkVcIixcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6IFwiKzEyMzQ1Njc4OTBcIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJ0ZWw6MTIzNDU2Nzg5MFwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCIrMDk4NzY1NDMyMVwiLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiBcInRlbDowOTg3NjU0MzIxXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkFERFJFU1NcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4zOiB7XHJcblx0XHRcdFx0aGVhZGluZzogXCJFTUFJTFwiLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCJhbnltYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwibWFpbHRvOmFueW1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6IFwib2ZmaWNpYWxtYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwibWFpbHRvOm9mZmljaWFsbWFpbEBtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGZvcm06IHtcclxuXHRcdGhlYWRpbmc6IFwiU2VuZCB1cyBhIG1lc3NhZ2UhXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBibG9nID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVuLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJCbG9nLlwiLFxyXG5cdH0sXHJcblx0aGVhZGluZzogXCJDaGVjayBvdXIgbGF0ZXN0IG5ld3MuXCIsXHJcblx0ZGVzY3JpcHRpb246IFwiQ2hlY2sgT3V0IFNvbWUgb2YgT3VyIE5ld3NcIixcclxuXHRhcnRpY2xlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIkNvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/XCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZGVzaWduLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhclwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCI4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcylcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCIxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgYXJ0aWNsZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGNhdGVnb3J5OiBcIlRlY2hub2xvZ3lcIixcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0c2lkZWJhcjoge1xyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJXcml0dGVuIGJ5XCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJKb2huIERvZVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJQb3N0ZWQgb25cIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkphbnVhcnkgMywgMjAyMlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJUYWdzXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJEZXNpZ24sIFRlY2hub2xvZ3lcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdG1haW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBpbiBwb3N1ZXJlIG1ldHVzLiBEb25lYyBkaWN0dW0gdGVtcG9yIG9kaW8sIHNpdCBhbWV0IGNvbmRpbWVudHVtIG9kaW8gbW9sbGlzIG5lYy4gUHJhZXNlbnQgZWdldCBsaWd1bGEgbmVxdWUuIFF1aXNxdWUgcGhhcmV0cmEgZWxlbWVudHVtIG1hc3NhIGF0IGZyaW5naWxsYS5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicGFyYWdyYXBoXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJoZWFkaW5nXCIsXHJcblx0XHRcdFx0Y29udGVudDogXCJUaGUgTmV3IEdlbmVyYXRpb24gb2YgVlIgaXMgQ29taW5nIVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcImltYWdlXCIsXHJcblx0XHRcdFx0Y29udGVudDogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZ2AsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLiBOdWxsYW0gZnJpbmdpbGxhIG5lYyBhdWd1ZSBpZCBzb2xsaWNpdHVkaW4uIFF1aXNxdWUgaW50ZXJkdW0gbG9ib3J0aXMgdG9ydG9yLCBzaXQgYW1ldCBhbGlxdWFtIHVybmEgYWxpcXVhbSBpbi4gTW9yYmkgaW4gcXVhbSBhIHRlbGx1cyB0ZW1wb3IgdGluY2lkdW50IHNlZCB2aXRhZSBlcm9zLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuIFF1aXNxdWUgc3VzY2lwaXQsIGZlbGlzIHV0IGNvbmd1ZSBtb2xlc3RpZSwgZXJvcyBkb2xvciBtYXR0aXMgZG9sb3IsIGEgc2FnaXR0aXMgc2VtIGxpZ3VsYSB2aXRhZSBkdWkuIFNlZCBwZWxsZW50ZXNxdWUgc2FnaXR0aXMgdGluY2lkdW50LiBcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiaGVhZGluZ1wiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIlxcXCJZb3VyIHRpbWUgaXMgbGltaXRlZCwgc28gZG9uJ3Qgd2FzdGUgaXQgbGl2aW5nIHNvbWVvbmUgZWxzZSdzIGxpZmUuXFxcIlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OiBcIiBTdGV2ZSBKb2JzIHwgRXggQ0VPIG9mIEFwcGxlIFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJiYXNlIiwicHJvamVjdEJhc2UiLCJQVUJMSUNfVVJMIiwiUmVhY3QiLCIkIiwiRm9ybSIsImZvcm0iLCJjb2x1bW5zXzIiLCJjb2x1bW4iLCJtYl9kZWZhdWx0IiwidGV4dF9jZW50ZXIiLCJidXR0b24iLCJjb250YWN0IiwiQ29udGFjdCIsImJnX2NvdmVyIiwiaGVhZGVyX3NtYWxsIiwiYmFja2dyb3VuZEltYWdlIiwiaGVhZGVyIiwiaW1hZ2UiLCJoMSIsImhlYWRpbmciLCJiZ19ibHVlIiwic2VjdGlvbiIsImNvbnRhY3Rfc2VjdGlvbiIsImNvbnRhaW5lciIsIm1iX2wiLCJoMiIsImNvbnRlbnQiLCJoNSIsImRlc2NyaXB0aW9uIiwiY29sdW1uc18zIiwicF9tIiwiaWNvbl9ncmVlbiIsIm1iX20iLCJoNCIsImNvbHVtbnMiLCJjb2x1bW4xIiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJsaW5rIiwidGV4dCIsImJ1dHRvbjIiLCJjb2x1bW4yIiwiY29sdW1uMyIsImJnX2dyZXkiLCJob21lIiwic2VydmljZXMiLCJ3b3JrcyIsImFib3V0IiwidGVzdGltb25pYWxzIiwiY3VzdG9tZXJzIiwiYXZhdGFyIiwibmFtZSIsInBvc2l0aW9uIiwib3VyU2VydmljZXMiLCJza2lsbHMiLCJjYXRlZ29yeSIsInZpZGVvIiwidGVhbSIsImJsb2ciLCJhcnRpY2xlcyIsImFydGljbGUiLCJzaWRlYmFyIiwiZGV0YWlscyIsInNvY2lhbE1lZGlhIiwiaWNvbiIsIm1haW4iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==