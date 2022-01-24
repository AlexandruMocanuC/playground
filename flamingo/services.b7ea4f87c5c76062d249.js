"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[245],{

/***/ 812:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);



var Progress = function Progress() {
  useEffect(function () {
    __webpack_require__.e(/* import() */ 871).then(__webpack_require__.bind(__webpack_require__, 871));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, progress.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: item.classes,
      key: index
    }, /*#__PURE__*/React.createElement("h4", null, item.name), /*#__PURE__*/React.createElement("h4", null, item.percentage));
  }));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Progress)));

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports nav, services, progress */
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var nav = {
  logo: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/logo.png"),
  menu: [{
    link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    text: 'home'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "services"),
    text: 'services'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works"),
    text: 'Works'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "about"),
    text: 'about'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "blog"),
    text: 'blog'
  }],
  contact: {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "contact"),
    text: 'contact'
  },
  search: true
};
var services = [{
  icon: 'far fa-paper-plane mb-m icon-green',
  heading: 'Future Concept.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
}, {
  icon: 'fas fa-brain mb-m icon-green',
  heading: 'The Big Ideas.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
}, {
  icon: 'far fa-lightbulb mb-m icon-green',
  heading: 'Creative Solutions.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.'
}];
var progress = [{
  classes: 'flex-between progress-bar progress-bar-90',
  name: 'UI Design',
  percentage: '90%'
}, {
  classes: 'flex-between progress-bar progress-bar-60',
  name: 'UX Design',
  percentage: '60%'
}, {
  classes: 'flex-between progress-bar progress-bar-80',
  name: 'Digital Marketing',
  percentage: '80%'
}, {
  classes: 'flex-between progress-bar progress-bar-70',
  name: 'Social Media',
  percentage: '70%'
}];

/***/ }),

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

/***/ 31:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _s_Flamingo_Services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(446);
/* harmony import */ var _c_Flamingo_Progress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(812);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);






var ServicesPage = function ServicesPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "services-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-small bg-cover",
    style: {
      backgroundImage: services.header.image
    }
  }, /*#__PURE__*/React.createElement("h1", null, services.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container text-center mb-l"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-default"
  }, services.ourServices.heading), /*#__PURE__*/React.createElement("h5", null, services.ourServices.description)), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Services, null))), /*#__PURE__*/React.createElement("div", {
    className: "bg-cover bg-fixed section text-center",
    style: {
      backgroundImage: services.works.image
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-m"
  }, services.works.heading), /*#__PURE__*/React.createElement(Link, {
    to: services.works.button.link,
    className: "button"
  }, services.works.button.text)), /*#__PURE__*/React.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-m"
  }, services.skills.heading), /*#__PURE__*/React.createElement("p", null, services.skills.description))), /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement(Progress, null)))))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ServicesPage)));

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

/***/ 446:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);


var Services = function Services() {
  return /*#__PURE__*/React.createElement("div", {
    className: "columns-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-bar icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "Digital Strategy"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-pen icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "UX Designs"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-friends icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "UI Designs"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-globe-europe icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "Social Media"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-bookmark icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "Design Concept"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/React.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-area icon-green mb-m"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mb-m"
  }, "Media Pairing"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Services)));

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
/******/ var __webpack_exports__ = (__webpack_exec__(31));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vc2VydmljZXMuYjdlYTRmODdjNWM3NjA2MmQyNDkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEJGLEVBQUFBLFNBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Esc0JBQ0MsMENBQ0VDLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLHdCQUNiO0FBQUssZUFBUyxFQUFFRCxJQUFJLENBQUNFLE9BQXJCO0FBQThCLFNBQUcsRUFBRUQ7QUFBbkMsb0JBQ0MsZ0NBQUtELElBQUksQ0FBQ0csSUFBVixDQURELGVBRUMsZ0NBQUtILElBQUksQ0FBQ0ksVUFBVixDQUZELENBRGE7QUFBQSxHQUFiLENBREYsQ0FERDtBQVVBLENBZEQ7O0FBZ0JBLHNFQUFlTixnREFBQUEsUUFBZjs7Ozs7Ozs7O0FDbEJBO0FBQ08sSUFBTVMsR0FBRyxHQUFHO0FBQ2xCQyxFQUFBQSxJQUFJLFlBQUtGLG9FQUFMLHFCQURjO0FBRWxCRyxFQUFBQSxJQUFJLEVBQUUsQ0FDTDtBQUNDQyxJQUFBQSxJQUFJLEVBQUVMLDhEQURQO0FBRUNNLElBQUFBLElBQUksRUFBRTtBQUZQLEdBREssRUFLTDtBQUNDRCxJQUFBQSxJQUFJLFlBQUtMLDhEQUFMLGFBREw7QUFFQ00sSUFBQUEsSUFBSSxFQUFFO0FBRlAsR0FMSyxFQVNMO0FBQ0NELElBQUFBLElBQUksWUFBS0wsOERBQUwsVUFETDtBQUVDTSxJQUFBQSxJQUFJLEVBQUU7QUFGUCxHQVRLLEVBYUw7QUFDQ0QsSUFBQUEsSUFBSSxZQUFLTCw4REFBTCxVQURMO0FBRUNNLElBQUFBLElBQUksRUFBRTtBQUZQLEdBYkssRUFpQkw7QUFDQ0QsSUFBQUEsSUFBSSxZQUFLTCw4REFBTCxTQURMO0FBRUNNLElBQUFBLElBQUksRUFBRTtBQUZQLEdBakJLLENBRlk7QUF3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YSxPQUFPLHNCQUFzQix5QkFBc0I7QUFDMWUseUJBQVksYUFBYSxPQUFPLHFCQUFxQixxQkFBcUIsV0FBVyx5QkFBWSxlQUFlLE9BQU8sOENBQThDLHlCQUFtQixlQUFlLDZCQUE2Qix5QkFBa0IsZUFBZSw0QkFBNEIseUJBQXFCLGNBQWMseUJBQWlCLGVBQWUsMkJBQTJCLHlCQUEyQixpQkFBaUI7QUFDM2EseUJBQXVCLGVBQWUsaUNBQWlDLHlCQUFlLGVBQWUseUJBQXlCLHlCQUFrQixpQkFBaUIsOEJBQThCLHlCQUFjLGFBQWEsc0JBQXNCLHlCQUFnQixhQUFhLHdCQUF3Qix5QkFBZTs7Ozs7Ozs7QUN0QnZTOztBQUViLElBQUksSUFBcUM7QUFDekMsRUFBRSw4Q0FBeUQ7QUFDM0QsRUFBRSxLQUFLLEVBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzL2ZsYW1pbmdvLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL1NlcnZpY2VzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb2dyZXNzIH0gZnJvbSAnLi9kYic7XHJcbmNvbnN0IFByb2dyZXNzID0gKCkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbXBvcnQoJy4vcHJvZ3Jlc3MuY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7cHJvZ3Jlc3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtpdGVtLmNsYXNzZXN9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0PGg0PntpdGVtLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdDxoND57aXRlbS5wZXJjZW50YWdlfTwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xyXG4iLCJpbXBvcnQgeyBiYXNlLCBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5leHBvcnQgY29uc3QgbmF2ID0ge1xyXG5cdGxvZ286IGAke1BVQkxJQ19VUkx9L2ltYWdlcy9sb2dvLnBuZ2AsXHJcblx0bWVudTogW1xyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBiYXNlLFxyXG5cdFx0XHR0ZXh0OiAnaG9tZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfXNlcnZpY2VzYCxcclxuXHRcdFx0dGV4dDogJ3NlcnZpY2VzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9d29ya3NgLFxyXG5cdFx0XHR0ZXh0OiAnV29ya3MnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1hYm91dGAsXHJcblx0XHRcdHRleHQ6ICdhYm91dCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfWJsb2dgLFxyXG5cdFx0XHR0ZXh0OiAnYmxvZycsXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0Y29udGFjdDoge1xyXG5cdFx0bGluazogYCR7YmFzZX1jb250YWN0YCxcclxuXHRcdHRleHQ6ICdjb250YWN0JyxcclxuXHR9LFxyXG5cdHNlYXJjaDogdHJ1ZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdHtcclxuXHRcdGljb246ICdmYXIgZmEtcGFwZXItcGxhbmUgbWItbSBpY29uLWdyZWVuJyxcclxuXHRcdGhlYWRpbmc6ICdGdXR1cmUgQ29uY2VwdC4nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS1icmFpbiBtYi1tIGljb24tZ3JlZW4nLFxyXG5cdFx0aGVhZGluZzogJ1RoZSBCaWcgSWRlYXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXIgZmEtbGlnaHRidWxiIG1iLW0gaWNvbi1ncmVlbicsXHJcblx0XHRoZWFkaW5nOiAnQ3JlYXRpdmUgU29sdXRpb25zLicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXHJcblx0fSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHByb2dyZXNzID0gW1xyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci05MCcsXHJcblx0XHRuYW1lOiAnVUkgRGVzaWduJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc5MCUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogJ2ZsZXgtYmV0d2VlbiBwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLTYwJyxcclxuXHRcdG5hbWU6ICdVWCBEZXNpZ24nLFxyXG5cdFx0cGVyY2VudGFnZTogJzYwJScsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiAnZmxleC1iZXR3ZWVuIHByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItODAnLFxyXG5cdFx0bmFtZTogJ0RpZ2l0YWwgTWFya2V0aW5nJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc4MCUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogJ2ZsZXgtYmV0d2VlbiBwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLTcwJyxcclxuXHRcdG5hbWU6ICdTb2NpYWwgTWVkaWEnLFxyXG5cdFx0cGVyY2VudGFnZTogJzcwJScsXHJcblx0fSxcclxuXTtcclxuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyAnL3BsYXlncm91bmQvJyA6ICcvJztcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gYCR7cHJvamVjdEJhc2V9ZmxhbWluZ28vYCA6ICcvZmxhbWluZ28vJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZsYW1pbmdvYFxuXHQ6ICcvZmxhbWluZ28nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ35zL0ZsYW1pbmdvL1NlcnZpY2VzLmpzJztcbmltcG9ydCBQcm9ncmVzcyBmcm9tICd+Yy9GbGFtaW5nby9Qcm9ncmVzcy5qcyc7XG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gJy4vZGInO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFNlcnZpY2VzUGFnZSA9ICgpID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcy1wYWdlXCI+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGVyLXNtYWxsIGJnLWNvdmVyXCJcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogc2VydmljZXMuaGVhZGVyLmltYWdlLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8aDE+e3NlcnZpY2VzLmhlYWRlci5oZWFkaW5nfTwvaDE+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG1iLWxcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57c2VydmljZXMub3VyU2VydmljZXMuaGVhZGluZ308L2gyPlxuXHRcdFx0XHQ8aDU+e3NlcnZpY2VzLm91clNlcnZpY2VzLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxTZXJ2aWNlcyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiYmctY292ZXIgYmctZml4ZWQgc2VjdGlvbiB0ZXh0LWNlbnRlclwiXG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHNlcnZpY2VzLndvcmtzLmltYWdlLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItbVwiPntzZXJ2aWNlcy53b3Jrcy5oZWFkaW5nfTwvaDI+XG5cdFx0XHQ8TGluayB0bz17c2VydmljZXMud29ya3MuYnV0dG9uLmxpbmt9IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuXHRcdFx0XHR7c2VydmljZXMud29ya3MuYnV0dG9uLnRleHR9XG5cdFx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5IHNlY3Rpb25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0yXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtODBcIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLW1cIj57c2VydmljZXMuc2tpbGxzLmhlYWRpbmd9PC9oMj5cblx0XHRcdFx0XHRcdFx0PHA+e3NlcnZpY2VzLnNraWxscy5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxuXHRcdFx0XHRcdFx0XHQ8UHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzUGFnZTtcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcbmV4cG9ydCBjb25zdCBob21lID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvaGVhZGVyLWhvbWVwYWdlLmpwZylgLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdDcmVhdGl2ZSBtaW5kLCBjcmVhdGl2ZSB3b3JrcycsXHJcblx0XHRoZWFkaW5nOiAnV2UgYXJlIGRpZ2l0YWwgYWdlbmN5LicsXHJcblx0XHRidXR0b246ICdnZXR0aW5nIHN0YXJ0ZWQnLFxyXG5cdH0sXHJcblx0c2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6ICdTZXJ2aWNlcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdPdXIgU2VydmljZXMgZm9yIGNsaWVudHMnLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGhlYWRpbmc6ICdXb3Jrcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiVGhpbmdzIFdlJ3ZlIE1hZGVcIixcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAndmlldyBhbGwnLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0YWJvdXQ6IHtcclxuXHRcdGhlYWRpbmc6ICdBYm91dC4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5JyxcclxuXHR9LFxyXG5cdHRlc3RpbW9uaWFsczoge1xyXG5cdFx0aGVhZGluZzogJ1Rlc3RpbW9uaWFscy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJzID0gW1xyXG5cdCdmYWIgZmEtamVkaS1vcmRlciBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0YXItb2YtbGlmZSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0b3JlLWFsdCBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXNoYXJlLWFsdC1zcXVhcmUgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1wb28tc3Rvcm0gaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1jaGFyZ2luZy1zdGF0aW9uIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc25vd3Bsb3cgaWNvbi13aGl0ZScsXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9oZWFkZXItYmcuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnU2VydmljZXMuJyxcclxuXHR9LFxyXG5cdG91clNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiAnT3VyIHNlcnZpY2VzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ091ciBTZXJ2aWNlcyBmb3IgY2xpZW50cycsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ1dhbm5hIHNlZSBvdXIgd29ya3M/JyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnYWxsIHByb2plY3RzJywgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogJ0hlcmUgYXJlIHNvbWUgb2Ygb3VyIGdyZWF0IHNraWxscycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLiBEb25lYyBlbGVtZW50dW0sIHRvcnRvciB2ZWwgdml2ZXJyYSB1bHRyaWNlcywgbGFjdXMgb3JjaSB2ZW5lbmF0aXMgdG9ydG9yLCB2ZWwgcmhvbmN1cyBpcHN1bSBmZWxpcyBhIGRpYW0uJyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3Qgd29ya3MgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy90YXR0b28uanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnT3VyIHdvcmtzLicsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiAnT3VyIFdvcmtzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1NlZSBhbGwgb3VyIHdvcmtzJyxcclxuXHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdBcmhpdGVjdHVyZScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnUGhvdG9ncmFwaHknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTMuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1RlYXNlcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnU3R5bGVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW01LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdBYm91dCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTmFtZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTcuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1RpdGxlcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnU29tZXRoaW5nJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW05LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdSZWFjdGlvbicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMTAuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ01pc2NlbGFuaW91cycsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L29mZmljZS5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdBYm91dCB1cy4nLFxyXG5cdH0sXHJcblx0c2tpbGxzOiB7XHJcblx0XHRoZWFkaW5nOiAnSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpZCBhcmN1IGx1Y3R1cywgcGVsbGVudGVzcXVlIGxvcmVtIGFjLCBwaGFyZXRyYSBzYXBpZW4uJyxcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L3Bob25lLmpwZylgLFxyXG5cdH0sXHJcblx0dmlkZW86IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdCZXN0IFNvbHV0aW9ucyBmb3IgWW91ciBCdXNpbmVzcycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgdXJuYSBxdWlzIG9kaW8gdmVoaWN1bGEgY29uc2VjdGV0dXIuIERvbmVjIGV1IGdyYXZpZGEgZGlhbS4gQWVuZWFuIGFjY3Vtc2FuIG5pc2wgc2VkIGZyaW5naWxsYSBzb2xsaWNpdHVkaW4uIERvbmVjIHRpbmNpZHVudCBxdWlzIGRvbG9yIGVnZXQgY29uc2VjdGV0dXIuIFN1c3BlbmRpc3NlIGEgbW9sbGlzIGxhY3VzLicsXHJcblx0XHRidXR0b246IHsgdGV4dDogJ1dhdGNoIHZpZGVvJyB9LFxyXG5cdH0sXHJcblx0dGVhbToge1xyXG5cdFx0aGVhZGluZzogJ01lZXQgb3VyIHRlYW0uJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAndGhlIGJlc3QgcGVvcGxlIHRvIHN1cHBvcnQgeW91ciBwcm9qZWN0JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdDb250YWN0IHVzLicsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiAnR2V0IGluIHRvdWNoIHdpdGggdXMhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdFx0Y29sdW1uczoge1xyXG5cdFx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ1BIT05FJyxcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMTIzNDU2Nzg5MCcsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MTIzNDU2Nzg5MCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnKzA5ODc2NTQzMjEnLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAndGVsOjA5ODc2NTQzMjEnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4yOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ0FERFJFU1MnLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1cmFkaXBpc2NpbmcgZWxpdC4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4zOiB7XHJcblx0XHRcdFx0aGVhZGluZzogJ0VNQUlMJyxcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdhbnltYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ21haWx0bzphbnltYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdvZmZpY2lhbG1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOm9mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Zm9ybToge1xyXG5cdFx0aGVhZGluZzogJ1NlbmQgdXMgYSBtZXNzYWdlIScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgYmxvZyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3Blbi5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdCbG9nLicsXHJcblx0fSxcclxuXHRoZWFkaW5nOiAnQ2hlY2sgb3VyIGxhdGVzdCBuZXdzLicsXHJcblx0ZGVzY3JpcHRpb246ICdDaGVjayBPdXQgU29tZSBvZiBPdXIgTmV3cycsXHJcblx0YXJ0aWNsZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZGVzaWduLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCc4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcyknLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXInLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFydGljbGUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRjYXRlZ29yeTogJ1RlY2hub2xvZ3knLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0c2lkZWJhcjoge1xyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogJ1dyaXR0ZW4gYnknLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdKb2huIERvZScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiAnUG9zdGVkIG9uJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnSmFudWFyeSAzLCAyMDIyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRpbmc6ICdUYWdzJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnRGVzaWduLCBUZWNobm9sb2d5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtdHdpdHRlcicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdG1haW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdkZXNjcmlwdGlvbicsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBpbiBwb3N1ZXJlIG1ldHVzLiBEb25lYyBkaWN0dW0gdGVtcG9yIG9kaW8sIHNpdCBhbWV0IGNvbmRpbWVudHVtIG9kaW8gbW9sbGlzIG5lYy4gUHJhZXNlbnQgZWdldCBsaWd1bGEgbmVxdWUuIFF1aXNxdWUgcGhhcmV0cmEgZWxlbWVudHVtIG1hc3NhIGF0IGZyaW5naWxsYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdoZWFkaW5nJyxcclxuXHRcdFx0XHRjb250ZW50OiAnVGhlIE5ldyBHZW5lcmF0aW9uIG9mIFZSIGlzIENvbWluZyEnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRcdFx0Y29udGVudDogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZ2AsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLiBOdWxsYW0gZnJpbmdpbGxhIG5lYyBhdWd1ZSBpZCBzb2xsaWNpdHVkaW4uIFF1aXNxdWUgaW50ZXJkdW0gbG9ib3J0aXMgdG9ydG9yLCBzaXQgYW1ldCBhbGlxdWFtIHVybmEgYWxpcXVhbSBpbi4gTW9yYmkgaW4gcXVhbSBhIHRlbGx1cyB0ZW1wb3IgdGluY2lkdW50IHNlZCB2aXRhZSBlcm9zLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4gUXVpc3F1ZSBzdXNjaXBpdCwgZmVsaXMgdXQgY29uZ3VlIG1vbGVzdGllLCBlcm9zIGRvbG9yIG1hdHRpcyBkb2xvciwgYSBzYWdpdHRpcyBzZW0gbGlndWxhIHZpdGFlIGR1aS4gU2VkIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB0aW5jaWR1bnQuICcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAnaGVhZGluZycsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdCdcIllvdXIgdGltZSBpcyBsaW1pdGVkLCBzbyBkb25cXCd0IHdhc3RlIGl0IGxpdmluZyBzb21lb25lIGVsc2VcXCdzIGxpZmUuXCInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0Y29udGVudDogJyBTdGV2ZSBKb2JzIHwgRXggQ0VPIG9mIEFwcGxlICcsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0zXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LWJhciBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5EaWdpdGFsIFN0cmF0ZWd5PC9oMz5cclxuXHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRDcmFzIGlkIGFyY3UgbHVjdHVzLlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHAtbSBiYi13aGl0ZSBiZy1ncmV5IGJnLWhvdmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtODBcIj5cclxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuIGljb24tZ3JlZW4gbWItbVwiPjwvaT5cclxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibWItbVwiPlVYIERlc2lnbnM8L2gzPlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tIGJiLXdoaXRlIGJnLWdyZXkgYmctaG92ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWZyaWVuZHMgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1tXCI+VUkgRGVzaWduczwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWV1cm9wZSBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5Tb2NpYWwgTWVkaWE8L2gzPlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tIGJiLXdoaXRlIGJnLWdyZXkgYmctaG92ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhciBmYS1ib29rbWFyayBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5EZXNpZ24gQ29uY2VwdDwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LWFyZWEgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1tXCI+TWVkaWEgUGFpcmluZzwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInByb2dyZXNzIiwiUHJvZ3Jlc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbGFzc2VzIiwibmFtZSIsInBlcmNlbnRhZ2UiLCJiYXNlIiwiUFVCTElDX1VSTCIsIm5hdiIsImxvZ28iLCJtZW51IiwibGluayIsInRleHQiLCJjb250YWN0Iiwic2VhcmNoIiwic2VydmljZXMiLCJpY29uIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvamVjdEJhc2UiLCJTZXJ2aWNlcyIsIkxpbmsiLCJTZXJ2aWNlc1BhZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoZWFkZXIiLCJpbWFnZSIsIm91clNlcnZpY2VzIiwid29ya3MiLCJidXR0b24iLCJza2lsbHMiLCJob21lIiwiYWJvdXQiLCJ0ZXN0aW1vbmlhbHMiLCJjdXN0b21lcnMiLCJhdmF0YXIiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJjb2x1bW5zIiwidmlkZW8iLCJ0ZWFtIiwiY29sdW1uMSIsImJ1dHRvbnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbHVtbjIiLCJjb2x1bW4zIiwiZm9ybSIsImJsb2ciLCJhcnRpY2xlcyIsImFydGljbGUiLCJjYXRlZ29yeSIsInNpZGViYXIiLCJkZXRhaWxzIiwic29jaWFsTWVkaWEiLCJtYWluIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=