"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[245],{

/***/ 837:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/components/Flamingo/db.js
var db = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/components/Flamingo/progress.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Flamingo_progress = ({"h4":"rxw7w4jKVlplbjDc7e5G","progress_bar":"LBlTJB5TgCzZqkueYYE7","progress_bar_90":"Il_EaKevMBq4i2KzFy2z","progress_bar_60":"ewTgKzwntKvkRLi4L0_M","progress_bar_80":"u5HhFS8DlnemcS1lHkTk","progress_bar_70":"vXN23kX1uBv4wfSm8FAz"});
;// CONCATENATED MODULE: ./src/components/Flamingo/Progress.js




var Progress = function Progress() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, progress.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat($.progress_bar, " ").concat($[item.classes]),
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: $.h4
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: $.h4
    }, item.percentage));
  }));
};

/* harmony default export */ const Flamingo_Progress = ((/* unused pure expression or super */ null && (Progress)));

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports nav, services, progress */
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var nav = {
  logo: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/logo.png"),
  menu: [{
    link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    text: "home"
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "services/"),
    text: "services"
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works/"),
    text: "Works"
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "about/"),
    text: "about"
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "blog/"),
    text: "blog"
  }],
  contact: {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "contact"),
    text: "contact"
  },
  search: false
};
var services = [{
  icon: "far fa-paper-plane mb-m icon-green",
  heading: "Future Concept.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
}, {
  icon: "fas fa-brain mb-m icon-green",
  heading: "The Big Ideas.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
}, {
  icon: "far fa-lightbulb mb-m icon-green",
  heading: "Creative Solutions.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."
}];
var progress = [{
  classes: "progress_bar_90",
  name: "UI Design",
  percentage: "90%"
}, {
  classes: "progress_bar_60",
  name: "UX Design",
  percentage: "60%"
}, {
  classes: "progress_bar_80",
  name: "Digital Marketing",
  percentage: "80%"
}, {
  classes: "progress_bar_70",
  name: "Social Media",
  percentage: "70%"
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
/* harmony import */ var _s_Flamingo_Services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(661);
/* harmony import */ var _c_Flamingo_Progress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);







var ServicesPage = function ServicesPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.services_page
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.header_small, " ").concat($.bg_cover),
    style: {
      backgroundImage: services.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: $.h1
  }, services.header.heading)), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_blue, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.container, " ").concat($.text_center, " ").concat($.mb_l)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_default, " ").concat($.h2)
  }, services.ourServices.heading), /*#__PURE__*/React.createElement("div", {
    className: $.h5
  }, services.ourServices.description)), /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement(Services, null))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_cover, " ").concat($.bg_fixed, " ").concat($.section, " ").concat($.text_center),
    style: {
      backgroundImage: services.works.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_m, " ").concat($.h2)
  }, services.works.heading), /*#__PURE__*/React.createElement(Link, {
    to: services.works.button.link,
    className: $.button
  }, services.works.button.text)), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_grey, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement("div", {
    className: $.columns_2
  }, /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_m, " ").concat($.h2)
  }, services.skills.heading), /*#__PURE__*/React.createElement("p", null, services.skills.description))), /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
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

/***/ 661:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/sections/Flamingo/services.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const services = ({"icon_green":"tbtZeMmkXYZSFqiALqMl","mb_m":"dLhUGm9VR0r3A2ZUktOb","width_80":"rsjK8MiKNO0yb6ED3C2n","h3":"cGIWbm48TT1KzgZpYW_V","p_m":"m9TXKOuV1hN2kyOTEGhN","bb_white":"UervrkIIRCz7GwxNEHvD","bg_grey":"_EpTkSdJdB9ooOSXORjn","bg_hover":"r8FxYl4azmOYyVWpEcS5","columns_3":"jO0tfH56IQPSxmzpFfst","column":"dhEBK53gl9LgSxLiJ3gN"});
;// CONCATENATED MODULE: ./src/sections/Flamingo/Services.js



var Services = function Services() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.columns_3
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-bar ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "Digital Strategy"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-pen ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "UX Designs"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-friends ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "UI Designs"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-globe-europe ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "Social Media"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "far fa-bookmark ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "Design Concept"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.p_m, " ").concat($.bb_white, " ").concat($.bg_grey, " ").concat($.bg_hover)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.width_80
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-area ".concat($.icon_green, " ").concat($.mb_m)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.h3, " ").concat($.mb_m)
  }, "Media Pairing"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))));
};

/* harmony default export */ const Flamingo_Services = ((/* unused pure expression or super */ null && (Services)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vc2VydmljZXMuOWQ5OTJkZWJmMTAwMjgzZDFhYTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHdEQUFlLENBQUMsc09BQXNPOztBQ0R0UDtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxzQkFDaEIsMENBQ0VGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLHdCQUNiO0FBQUssZUFBUyxZQUFLSixDQUFDLENBQUNLLFlBQVAsY0FBdUJMLENBQUMsQ0FBQ0csSUFBSSxDQUFDRyxPQUFOLENBQXhCLENBQWQ7QUFBd0QsU0FBRyxFQUFFRjtBQUE3RCxvQkFDQztBQUFLLGVBQVMsRUFBRUosQ0FBQyxDQUFDTztBQUFsQixPQUF1QkosSUFBSSxDQUFDSyxJQUE1QixDQURELGVBRUM7QUFBSyxlQUFTLEVBQUVSLENBQUMsQ0FBQ087QUFBbEIsT0FBdUJKLElBQUksQ0FBQ00sVUFBNUIsQ0FGRCxDQURhO0FBQUEsR0FBYixDQURGLENBRGdCO0FBQUEsQ0FBakI7O0FBV0Esd0RBQWVSLGdEQUFBQSxRQUFmOzs7Ozs7Ozs7QUNoQkE7QUFDTyxJQUFNVyxHQUFHLEdBQUc7QUFDbEJDLEVBQUFBLElBQUksWUFBS0Ysb0VBQUwscUJBRGM7QUFFbEJHLEVBQUFBLElBQUksRUFBRSxDQUNMO0FBQ0NDLElBQUFBLElBQUksRUFBRUwsOERBRFA7QUFFQ00sSUFBQUEsSUFBSSxFQUFFO0FBRlAsR0FESyxFQUtMO0FBQ0NELElBQUFBLElBQUksWUFBS0wsOERBQUwsY0FETDtBQUVDTSxJQUFBQSxJQUFJLEVBQUU7QUFGUCxHQUxLLEVBU0w7QUFDQ0QsSUFBQUEsSUFBSSxZQUFLTCw4REFBTCxXQURMO0FBRUNNLElBQUFBLElBQUksRUFBRTtBQUZQLEdBVEssRUFhTDtBQUNDRCxJQUFBQSxJQUFJLFlBQUtMLDhEQUFMLFdBREw7QUFFQ00sSUFBQUEsSUFBSSxFQUFF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Qix5QkFBa0IsaUJBQWlCLDhCQUE4Qix5QkFBYyxhQUFhLHNCQUFzQix5QkFBZ0IsYUFBYSx3QkFBd0IseUJBQWU7Ozs7Ozs7O0FDdEJ2Uzs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsOENBQXlEO0FBQzNELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL3Byb2dyZXNzLmNzcz8wZGFkIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vc2VydmljZXMuY3NzPzI4YmYiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImg0XCI6XCJyeHc3dzRqS1ZscGxiakRjN2U1R1wiLFwicHJvZ3Jlc3NfYmFyXCI6XCJMQmxUSkI1VGdDelpxa3VlWVlFN1wiLFwicHJvZ3Jlc3NfYmFyXzkwXCI6XCJJbF9FYUtldk1CcTRpMkt6RnkyelwiLFwicHJvZ3Jlc3NfYmFyXzYwXCI6XCJld1RnS3p3bnRLdmtSTGk0TDBfTVwiLFwicHJvZ3Jlc3NfYmFyXzgwXCI6XCJ1NUhoRlM4RGxuZW1jUzFsSGtUa1wiLFwicHJvZ3Jlc3NfYmFyXzcwXCI6XCJ2WE4yM2tYMXVCdjR3ZlNtOEZBelwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByb2dyZXNzIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmltcG9ydCAkIGZyb20gXCIuL3Byb2dyZXNzLmNzc1wiO1xyXG5cclxuY29uc3QgUHJvZ3Jlc3MgPSAoKSA9PiAoXHJcblx0PD5cclxuXHRcdHtwcm9ncmVzcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLnByb2dyZXNzX2Jhcn0gJHskW2l0ZW0uY2xhc3Nlc119YH0ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDR9PntpdGVtLm5hbWV9PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDR9PntpdGVtLnBlcmNlbnRhZ2V9PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KSl9XHJcblx0PC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzcztcclxuIiwiaW1wb3J0IHsgYmFzZSwgUFVCTElDX1VSTCB9IGZyb20gXCJ+L2NvbnN0YW50cy9mbGFtaW5nb1wiO1xyXG5leHBvcnQgY29uc3QgbmF2ID0ge1xyXG5cdGxvZ286IGAke1BVQkxJQ19VUkx9L2ltYWdlcy9sb2dvLnBuZ2AsXHJcblx0bWVudTogW1xyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBiYXNlLFxyXG5cdFx0XHR0ZXh0OiBcImhvbWVcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9c2VydmljZXMvYCxcclxuXHRcdFx0dGV4dDogXCJzZXJ2aWNlc1wiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX13b3Jrcy9gLFxyXG5cdFx0XHR0ZXh0OiBcIldvcmtzXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfWFib3V0L2AsXHJcblx0XHRcdHRleHQ6IFwiYWJvdXRcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9YmxvZy9gLFxyXG5cdFx0XHR0ZXh0OiBcImJsb2dcIixcclxuXHRcdH0sXHJcblx0XSxcclxuXHRjb250YWN0OiB7XHJcblx0XHRsaW5rOiBgJHtiYXNlfWNvbnRhY3RgLFxyXG5cdFx0dGV4dDogXCJjb250YWN0XCIsXHJcblx0fSxcclxuXHRzZWFyY2g6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogXCJmYXIgZmEtcGFwZXItcGxhbmUgbWItbSBpY29uLWdyZWVuXCIsXHJcblx0XHRoZWFkaW5nOiBcIkZ1dHVyZSBDb25jZXB0LlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiBcImZhcyBmYS1icmFpbiBtYi1tIGljb24tZ3JlZW5cIixcclxuXHRcdGhlYWRpbmc6IFwiVGhlIEJpZyBJZGVhcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLlwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogXCJmYXIgZmEtbGlnaHRidWxiIG1iLW0gaWNvbi1ncmVlblwiLFxyXG5cdFx0aGVhZGluZzogXCJDcmVhdGl2ZSBTb2x1dGlvbnMuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy5cIixcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3MgPSBbXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogXCJwcm9ncmVzc19iYXJfOTBcIixcclxuXHRcdG5hbWU6IFwiVUkgRGVzaWduXCIsXHJcblx0XHRwZXJjZW50YWdlOiBcIjkwJVwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogXCJwcm9ncmVzc19iYXJfNjBcIixcclxuXHRcdG5hbWU6IFwiVVggRGVzaWduXCIsXHJcblx0XHRwZXJjZW50YWdlOiBcIjYwJVwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogXCJwcm9ncmVzc19iYXJfODBcIixcclxuXHRcdG5hbWU6IFwiRGlnaXRhbCBNYXJrZXRpbmdcIixcclxuXHRcdHBlcmNlbnRhZ2U6IFwiODAlXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiBcInByb2dyZXNzX2Jhcl83MFwiLFxyXG5cdFx0bmFtZTogXCJTb2NpYWwgTWVkaWFcIixcclxuXHRcdHBlcmNlbnRhZ2U6IFwiNzAlXCIsXHJcblx0fSxcclxuXTtcclxuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyAnL3BsYXlncm91bmQvJyA6ICcvJztcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gYCR7cHJvamVjdEJhc2V9ZmxhbWluZ28vYCA6ICcvZmxhbWluZ28vJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZsYW1pbmdvYFxuXHQ6ICcvZmxhbWluZ28nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIn5zL0ZsYW1pbmdvL1NlcnZpY2VzLmpzXCI7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIn5jL0ZsYW1pbmdvL1Byb2dyZXNzLmpzXCI7XG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gXCIuL2RiXCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgJCBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IFNlcnZpY2VzUGFnZSA9ICgpID0+IChcblx0PGRpdiBjbGFzc05hbWU9eyQuc2VydmljZXNfcGFnZX0+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgJHskLmhlYWRlcl9zbWFsbH0gJHskLmJnX2NvdmVyfWB9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHNlcnZpY2VzLmhlYWRlci5pbWFnZSxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDF9PntzZXJ2aWNlcy5oZWFkZXIuaGVhZGluZ308L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5iZ19ibHVlfSAkeyQuc2VjdGlvbn1gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmNvbnRhaW5lcn0gJHskLnRleHRfY2VudGVyfSAkeyQubWJfbH1gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQubWJfZGVmYXVsdH0gJHskLmgyfWB9PlxuXHRcdFx0XHRcdHtzZXJ2aWNlcy5vdXJTZXJ2aWNlcy5oZWFkaW5nfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDV9PntzZXJ2aWNlcy5vdXJTZXJ2aWNlcy5kZXNjcmlwdGlvbn08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuY29udGFpbmVyfT5cblx0XHRcdFx0PFNlcnZpY2VzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuYmdfY292ZXJ9ICR7JC5iZ19maXhlZH0gJHskLnNlY3Rpb259ICR7JC50ZXh0X2NlbnRlcn1gfVxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBzZXJ2aWNlcy53b3Jrcy5pbWFnZSxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQubWJfbX0gJHskLmgyfWB9PntzZXJ2aWNlcy53b3Jrcy5oZWFkaW5nfTwvZGl2PlxuXHRcdFx0PExpbmsgdG89e3NlcnZpY2VzLndvcmtzLmJ1dHRvbi5saW5rfSBjbGFzc05hbWU9eyQuYnV0dG9ufT5cblx0XHRcdFx0e3NlcnZpY2VzLndvcmtzLmJ1dHRvbi50ZXh0fVxuXHRcdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmJnX2dyZXl9ICR7JC5zZWN0aW9ufWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuY29udGFpbmVyfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuY29sdW1uc18yfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb2x1bW59PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5tYl9tfSAkeyQuaDJ9YH0+XG5cdFx0XHRcdFx0XHRcdFx0e3NlcnZpY2VzLnNraWxscy5oZWFkaW5nfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHA+e3NlcnZpY2VzLnNraWxscy5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb2x1bW59PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxuXHRcdFx0XHRcdFx0XHQ8UHJvZ3Jlc3MgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzUGFnZTtcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tIFwifi9jb25zdGFudHMvZmxhbWluZ29cIjtcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkZXItaG9tZXBhZ2UuanBnKWAsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJDcmVhdGl2ZSBtaW5kLCBjcmVhdGl2ZSB3b3Jrc1wiLFxyXG5cdFx0aGVhZGluZzogXCJXZSBhcmUgZGlnaXRhbCBhZ2VuY3kuXCIsXHJcblx0XHRidXR0b246IFwiZ2V0dGluZyBzdGFydGVkXCIsXHJcblx0fSxcclxuXHRzZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogXCJTZXJ2aWNlcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIk91ciBTZXJ2aWNlcyBmb3IgY2xpZW50c1wiLFxyXG5cdH0sXHJcblx0d29ya3M6IHtcclxuXHRcdGhlYWRpbmc6IFwiV29ya3MuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGluZ3MgV2UndmUgTWFkZVwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwidmlldyBhbGxcIiwgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdGFib3V0OiB7XHJcblx0XHRoZWFkaW5nOiBcIkFib3V0LlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeVwiLFxyXG5cdH0sXHJcblx0dGVzdGltb25pYWxzOiB7XHJcblx0XHRoZWFkaW5nOiBcIlRlc3RpbW9uaWFscy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIldlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3lcIixcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJzID0gW1xyXG5cdFwiZmFiIGZhLWplZGktb3JkZXJcIixcclxuXHRcImZhcyBmYS1zdGFyLW9mLWxpZmVcIixcclxuXHRcImZhcyBmYS1zdG9yZS1hbHRcIixcclxuXHRcImZhcyBmYS1zaGFyZS1hbHQtc3F1YXJlXCIsXHJcblx0XCJmYXMgZmEtcG9vLXN0b3JtXCIsXHJcblx0XCJmYXMgZmEtY2hhcmdpbmctc3RhdGlvblwiLFxyXG5cdFwiZmFzIGZhLXNub3dwbG93XCIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC5cIixcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9oZWFkZXItYmcuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIlNlcnZpY2VzLlwiLFxyXG5cdH0sXHJcblx0b3VyU2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6IFwiT3VyIHNlcnZpY2VzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzXCIsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJXYW5uYSBzZWUgb3VyIHdvcmtzP1wiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwiYWxsIHByb2plY3RzXCIsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4gRG9uZWMgZWxlbWVudHVtLCB0b3J0b3IgdmVsIHZpdmVycmEgdWx0cmljZXMsIGxhY3VzIG9yY2kgdmVuZW5hdGlzIHRvcnRvciwgdmVsIHJob25jdXMgaXBzdW0gZmVsaXMgYSBkaWFtLlwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL3RhdHRvby5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiT3VyIHdvcmtzLlwiLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0aGVhZGluZzogXCJPdXIgV29ya3MuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJTZWUgYWxsIG91ciB3b3Jrc1wiLFxyXG5cdFx0Y29sdW1uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJBcmhpdGVjdHVyZVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTIuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJQaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTMuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJUZWFzZXJcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJWaWRlb1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTQuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJTdHlsZXNcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJBcnRcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW01LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiQWJvdXRcIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJXcml0aW5nc1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTYuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJOYW1lc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlRpdGxlc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlNvbWV0aGluZ1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtOS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlJlYWN0aW9uXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiVmlkZW9cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIk1pc2NlbGFuaW91c1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlZpZGVvXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L29mZmljZS5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQWJvdXQgdXMuXCIsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi5cIixcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L3Bob25lLmpwZylgLFxyXG5cdH0sXHJcblx0dmlkZW86IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2xhcHRvcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQmVzdCBTb2x1dGlvbnMgZm9yIFlvdXIgQnVzaW5lc3NcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gc2l0IGFtZXQgdXJuYSBxdWlzIG9kaW8gdmVoaWN1bGEgY29uc2VjdGV0dXIuIERvbmVjIGV1IGdyYXZpZGEgZGlhbS4gQWVuZWFuIGFjY3Vtc2FuIG5pc2wgc2VkIGZyaW5naWxsYSBzb2xsaWNpdHVkaW4uIERvbmVjIHRpbmNpZHVudCBxdWlzIGRvbG9yIGVnZXQgY29uc2VjdGV0dXIuIFN1c3BlbmRpc3NlIGEgbW9sbGlzIGxhY3VzLlwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6IFwiV2F0Y2ggdmlkZW9cIiB9LFxyXG5cdH0sXHJcblx0dGVhbToge1xyXG5cdFx0aGVhZGluZzogXCJNZWV0IG91ciB0ZWFtLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwidGhlIGJlc3QgcGVvcGxlIHRvIHN1cHBvcnQgeW91ciBwcm9qZWN0XCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9tYXAuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIkNvbnRhY3QgdXMuXCIsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiBcIkdldCBpbiB0b3VjaCB3aXRoIHVzIVwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcIixcclxuXHRcdGNvbHVtbnM6IHtcclxuXHRcdFx0Y29sdW1uMToge1xyXG5cdFx0XHRcdGhlYWRpbmc6IFwiUEhPTkVcIixcclxuXHRcdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6IFwiKzEyMzQ1Njc4OTBcIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJ0ZWw6MTIzNDU2Nzg5MFwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCIrMDk4NzY1NDMyMVwiLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiBcInRlbDowOTg3NjU0MzIxXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkFERFJFU1NcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW4zOiB7XHJcblx0XHRcdFx0aGVhZGluZzogXCJFTUFJTFwiLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCJhbnltYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwibWFpbHRvOmFueW1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6IFwib2ZmaWNpYWxtYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwibWFpbHRvOm9mZmljaWFsbWFpbEBtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGZvcm06IHtcclxuXHRcdGhlYWRpbmc6IFwiU2VuZCB1cyBhIG1lc3NhZ2UhXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBibG9nID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVuLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJCbG9nLlwiLFxyXG5cdH0sXHJcblx0aGVhZGluZzogXCJDaGVjayBvdXIgbGF0ZXN0IG5ld3MuXCIsXHJcblx0ZGVzY3JpcHRpb246IFwiQ2hlY2sgT3V0IFNvbWUgb2YgT3VyIE5ld3NcIixcclxuXHRhcnRpY2xlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIkNvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/XCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZGVzaWduLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhclwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCI4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcylcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCIxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgYXJ0aWNsZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGNhdGVnb3J5OiBcIlRlY2hub2xvZ3lcIixcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdH0sXHJcblx0Y29udGVudDoge1xyXG5cdFx0c2lkZWJhcjoge1xyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJXcml0dGVuIGJ5XCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJKb2huIERvZVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJQb3N0ZWQgb25cIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkphbnVhcnkgMywgMjAyMlwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogXCJUYWdzXCIsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJEZXNpZ24sIFRlY2hub2xvZ3lcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vdHdpdHRlci5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdG1haW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiZGVzY3JpcHRpb25cIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBFdGlhbSBpbiBwb3N1ZXJlIG1ldHVzLiBEb25lYyBkaWN0dW0gdGVtcG9yIG9kaW8sIHNpdCBhbWV0IGNvbmRpbWVudHVtIG9kaW8gbW9sbGlzIG5lYy4gUHJhZXNlbnQgZWdldCBsaWd1bGEgbmVxdWUuIFF1aXNxdWUgcGhhcmV0cmEgZWxlbWVudHVtIG1hc3NhIGF0IGZyaW5naWxsYS5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicGFyYWdyYXBoXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJoZWFkaW5nXCIsXHJcblx0XHRcdFx0Y29udGVudDogXCJUaGUgTmV3IEdlbmVyYXRpb24gb2YgVlIgaXMgQ29taW5nIVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcImltYWdlXCIsXHJcblx0XHRcdFx0Y29udGVudDogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZ2AsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLiBOdWxsYW0gZnJpbmdpbGxhIG5lYyBhdWd1ZSBpZCBzb2xsaWNpdHVkaW4uIFF1aXNxdWUgaW50ZXJkdW0gbG9ib3J0aXMgdG9ydG9yLCBzaXQgYW1ldCBhbGlxdWFtIHVybmEgYWxpcXVhbSBpbi4gTW9yYmkgaW4gcXVhbSBhIHRlbGx1cyB0ZW1wb3IgdGluY2lkdW50IHNlZCB2aXRhZSBlcm9zLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuIFF1aXNxdWUgc3VzY2lwaXQsIGZlbGlzIHV0IGNvbmd1ZSBtb2xlc3RpZSwgZXJvcyBkb2xvciBtYXR0aXMgZG9sb3IsIGEgc2FnaXR0aXMgc2VtIGxpZ3VsYSB2aXRhZSBkdWkuIFNlZCBwZWxsZW50ZXNxdWUgc2FnaXR0aXMgdGluY2lkdW50LiBcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiaGVhZGluZ1wiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIlxcXCJZb3VyIHRpbWUgaXMgbGltaXRlZCwgc28gZG9uJ3Qgd2FzdGUgaXQgbGl2aW5nIHNvbWVvbmUgZWxzZSdzIGxpZmUuXFxcIlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OiBcIiBTdGV2ZSBKb2JzIHwgRXggQ0VPIG9mIEFwcGxlIFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImljb25fZ3JlZW5cIjpcInRidFplTW1rWFlaU0ZxaUFMcU1sXCIsXCJtYl9tXCI6XCJkTGhVR205VlIwcjNBMlpVa3RPYlwiLFwid2lkdGhfODBcIjpcInJzaks4TWlLTk8weWI2RUQzQzJuXCIsXCJoM1wiOlwiY0dJV2JtNDhUVDFLemdacFlXX1ZcIixcInBfbVwiOlwibTlUWEtPdVYxaE4ya3lPVEVHaE5cIixcImJiX3doaXRlXCI6XCJVZXJ2cmtJSVJDejdHd3hORUh2RFwiLFwiYmdfZ3JleVwiOlwiX0VwVGtTZEpkQjlvb09TWE9Sam5cIixcImJnX2hvdmVyXCI6XCJyOEZ4WWw0YXptT1l5VldwRWNTNVwiLFwiY29sdW1uc18zXCI6XCJqTzB0Zkg1NklRUFN4bXpwRmZzdFwiLFwiY29sdW1uXCI6XCJkaEVCSzUzZ2w5TGdTeExpSjNnTlwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwiLi9zZXJ2aWNlcy5jc3NcIjtcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbnNfM30+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC5wX219ICR7JC5iYl93aGl0ZX0gJHskLmJnX2dyZXl9ICR7JC5iZ19ob3Zlcn1gfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC53aWR0aF84MH0+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFzIGZhLWNoYXJ0LWJhciAkeyQuaWNvbl9ncmVlbn0gJHskLm1iX219YH0+PC9pPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmgzfSAkeyQubWJfbX1gfT5EaWdpdGFsIFN0cmF0ZWd5PC9kaXY+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC5wX219ICR7JC5iYl93aGl0ZX0gJHskLmJnX2dyZXl9ICR7JC5iZ19ob3Zlcn1gfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC53aWR0aF84MH0+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFzIGZhLXBlbiAkeyQuaWNvbl9ncmVlbn0gJHskLm1iX219YH0+PC9pPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmgzfSAkeyQubWJfbX1gfT5VWCBEZXNpZ25zPC9kaXY+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC5wX219ICR7JC5iYl93aGl0ZX0gJHskLmJnX2dyZXl9ICR7JC5iZ19ob3Zlcn1gfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC53aWR0aF84MH0+XHJcblx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGZhcyBmYS11c2VyLWZyaWVuZHMgJHskLmljb25fZ3JlZW59ICR7JC5tYl9tfWB9XHJcblx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5oM30gJHskLm1iX219YH0+VUkgRGVzaWduczwvZGl2PlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQucF9tfSAkeyQuYmJfd2hpdGV9ICR7JC5iZ19ncmV5fSAkeyQuYmdfaG92ZXJ9YH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxyXG5cdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtZ2xvYmUtZXVyb3BlICR7JC5pY29uX2dyZWVufSAkeyQubWJfbX1gfVxyXG5cdFx0XHRcdD48L2k+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuaDN9ICR7JC5tYl9tfWB9PlNvY2lhbCBNZWRpYTwvZGl2PlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQucF9tfSAkeyQuYmJfd2hpdGV9ICR7JC5iZ19ncmV5fSAkeyQuYmdfaG92ZXJ9YH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhciBmYS1ib29rbWFyayAkeyQuaWNvbl9ncmVlbn0gJHskLm1iX219YH0+PC9pPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmgzfSAkeyQubWJfbX1gfT5EZXNpZ24gQ29uY2VwdDwvZGl2PlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQucF9tfSAkeyQuYmJfd2hpdGV9ICR7JC5iZ19ncmV5fSAkeyQuYmdfaG92ZXJ9YH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxyXG5cdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtY2hhcnQtYXJlYSAkeyQuaWNvbl9ncmVlbn0gJHskLm1iX219YH1cclxuXHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmgzfSAkeyQubWJfbX1gfT5NZWRpYSBQYWlyaW5nPC9kaXY+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcclxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwcm9ncmVzcyIsIiQiLCJQcm9ncmVzcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2dyZXNzX2JhciIsImNsYXNzZXMiLCJoNCIsIm5hbWUiLCJwZXJjZW50YWdlIiwiYmFzZSIsIlBVQkxJQ19VUkwiLCJuYXYiLCJsb2dvIiwibWVudSIsImxpbmsiLCJ0ZXh0IiwiY29udGFjdCIsInNlYXJjaCIsInNlcnZpY2VzIiwiaWNvbiIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb2plY3RCYXNlIiwiU2VydmljZXMiLCJMaW5rIiwiU2VydmljZXNQYWdlIiwic2VydmljZXNfcGFnZSIsImhlYWRlcl9zbWFsbCIsImJnX2NvdmVyIiwiYmFja2dyb3VuZEltYWdlIiwiaGVhZGVyIiwiaW1hZ2UiLCJoMSIsImJnX2JsdWUiLCJzZWN0aW9uIiwiY29udGFpbmVyIiwidGV4dF9jZW50ZXIiLCJtYl9sIiwibWJfZGVmYXVsdCIsImgyIiwib3VyU2VydmljZXMiLCJoNSIsImJnX2ZpeGVkIiwid29ya3MiLCJtYl9tIiwiYnV0dG9uIiwiYmdfZ3JleSIsImNvbHVtbnNfMiIsImNvbHVtbiIsIndpZHRoXzgwIiwic2tpbGxzIiwiaG9tZSIsImFib3V0IiwidGVzdGltb25pYWxzIiwiY3VzdG9tZXJzIiwiYXZhdGFyIiwicG9zaXRpb24iLCJjb250ZW50IiwiY29sdW1ucyIsImNhdGVnb3J5IiwidmlkZW8iLCJ0ZWFtIiwiY29sdW1uMSIsImJ1dHRvbnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbHVtbjIiLCJjb2x1bW4zIiwiZm9ybSIsImJsb2ciLCJhcnRpY2xlcyIsImFydGljbGUiLCJzaWRlYmFyIiwiZGV0YWlscyIsInNvY2lhbE1lZGlhIiwibWFpbiIsInR5cGUiLCJjb2x1bW5zXzMiLCJwX20iLCJiYl93aGl0ZSIsImJnX2hvdmVyIiwiaWNvbl9ncmVlbiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==