"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[781],{

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

/***/ 404:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/components/Flamingo/Progress.js + 1 modules
var Flamingo_Progress = __webpack_require__(837);
// EXTERNAL MODULE: ./src/sections/Flamingo/db.js
var db = __webpack_require__(171);
;// CONCATENATED MODULE: ./src/sections/Flamingo/perks.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Flamingo_perks = ({"h4":"dSPI2t6qHysPeWOdaP9w","columns_3":"Np8ulPSTYQ6sVSqktkAS","column":"AF6HcbrjjJxCDcogbeL_","icon_green":"ziW92NgANgQANldc7aik","p_m":"habEFRGE77jvubSt73MH","mb_default":"KRMxch0JRyxaUu1akQBE","width_80":"ld6SDgoVt3WjA2pC1KRa"});
;// CONCATENATED MODULE: ./src/sections/Flamingo/Perks.js




var Perks_Perks = function Perks() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.columns_3
  }, perks.map(function (perk, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat($.column, " ").concat($.p_m),
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: $.width_80
    }, /*#__PURE__*/React.createElement("i", {
      className: "".concat(perk.icon, " ").concat($.icon_green, " ").concat($.mb_default)
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat($.mb_default, " ").concat($.h4)
    }, perk.heading), /*#__PURE__*/React.createElement("p", null, perk.description)));
  }));
};

/* harmony default export */ const Flamingo_Perks = ((/* unused pure expression or super */ null && (Perks_Perks)));
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/sections/Flamingo/team.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Flamingo_team = ({"h4":"BvSgR_g_QKSTJ3pCw1k_","team":"pWtAqomuMZbI9DWVsq72","mb_default":"GnAkL8JCzUTgXBYDbJz3","mb_m":"eTM75dRf3GXHNffTJkUN","member":"ApZF5Xasfi90xVVGMr7e","member_details":"X8Cq84CVrnBNyPEDAL4_","social_media_small":"mMHLawYrTgIrVl0C1WZr"});
;// CONCATENATED MODULE: ./src/sections/Flamingo/Team.js





var Team_Team = function Team() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.team
  }, team.map(function (member, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: $.member,
      style: {
        backgroundImage: member.image
      },
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: $.member_details
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat($.mb_default, " ").concat($.h4)
    }, member.name), /*#__PURE__*/React.createElement("p", {
      className: $.mb_m
    }, member.position), /*#__PURE__*/React.createElement("div", {
      className: $.social_media_small
    }, member.socialMedia.map(function (item, key) {
      return /*#__PURE__*/React.createElement("a", {
        href: item.link,
        key: key
      }, /*#__PURE__*/React.createElement("i", {
        className: item.icon
      }));
    }))));
  }));
};

/* harmony default export */ const Flamingo_Team = ((/* unused pure expression or super */ null && (Team_Team)));
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var Flamingo_db = __webpack_require__(356);
// EXTERNAL MODULE: ./src/pages/Flamingo/style.scss
var style = __webpack_require__(503);
;// CONCATENATED MODULE: ./src/pages/Flamingo/About.js








var AboutPage = function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: $.about_page
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.header_small, " ").concat($.bg_cover),
    style: {
      backgroundImage: about.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: $.text_center
  }, /*#__PURE__*/React.createElement("div", {
    className: $.h1
  }, about.header.heading))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_blue, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement(Perks, null))), /*#__PURE__*/React.createElement("div", {
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
  }, about.skills.heading), /*#__PURE__*/React.createElement("p", {
    className: $.mb_m
  }, about.skills.description), /*#__PURE__*/React.createElement(Progress, null))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.bg_cover),
    style: {
      backgroundImage: about.skills.image
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_blue, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: $.container
  }, /*#__PURE__*/React.createElement("div", {
    className: $.columns_2
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.column, " ").concat($.bg_cover),
    style: {
      backgroundImage: about.video.image
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: $.column
  }, /*#__PURE__*/React.createElement("div", {
    className: $.p_m
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_m, " ").concat($.h2)
  }, about.video.heading), /*#__PURE__*/React.createElement("p", {
    className: $.mb_m
  }, about.video.description), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: $.button
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-play ".concat($.mr_default)
  }), about.video.button.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "".concat($.bg_grey, " ").concat($.section)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.container, " ").concat($.mb_l)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat($.mb_default, " ").concat($.h2)
  }, /*#__PURE__*/React.createElement("span", {
    className: $.separator
  }), about.team.heading), /*#__PURE__*/React.createElement("div", {
    className: $.h5
  }, about.team.description)), /*#__PURE__*/React.createElement(Team, null)));
};

/* harmony default export */ const About = ((/* unused pure expression or super */ null && (AboutPage)));

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

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports footer, about, works, perks, news, team */
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var footer = {
  inquiry: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/background-footer.jpg)"),
    socialMedia: [{
      link: "https://facebook.com",
      icon: "fab fa-facebook"
    }, {
      link: "https://twitter.com",
      icon: "fab fa-twitter"
    }, {
      link: "https://instagram.com",
      icon: "fab fa-instagram"
    }, {
      link: "https://youtube.com",
      icon: "fab fa-youtube"
    }],
    heading: "Have any project in mind?",
    button: {
      text: "make inquiry"
    }
  },
  menus: {
    menu1: {
      logo: {
        image: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/logo.png"),
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u
      },
      description: "We are more than a digital agency"
    },
    menu2: {
      heading: "Contact Us",
      buttons: {
        button1: {
          text: "0727729068",
          icon: "fas fa-phone-volume",
          link: "tel:0727729068"
        },
        button2: {
          link: "mailto:mocanu.alexandru20@yahoo.ro",
          icon: "far fa-envelope",
          text: "mocanu.alexandru20@yahoo.ro"
        },
        button3: {
          icon: "fas fa-map-marker-alt",
          text: "Constantza, Romania"
        },
        button4: {
          icon: "far fa-calendar-alt",
          text: "Monday to Friday"
        }
      }
    },
    menu3: {
      heading: "Our Services",
      buttons: ["link1", "link2", "link3", "link4"]
    },
    menu4: {
      heading: "About Us",
      buttons: [{
        text: "About",
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + "about"
      }, {
        text: "Blog",
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + "#"
      }, {
        text: "Contact us",
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + "contact"
      }, {
        text: "Works",
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + "works"
      }]
    }
  },
  copyright: {
    text: "Copyright 2020 All rights reserved",
    buttons: {
      button1: {
        text: "Privacy Policy"
      },
      button2: {
        text: "Terms of Use"
      }
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    socialMedia: [{
      link: "https://facebook.com",
      icon: "fab fa-facebook"
    }, {
      link: "https://twitter.com",
      icon: "fab fa-twitter"
    }, {
      link: "https://instagram.com",
      icon: "fab fa-instagram"
    }, {
      link: "https://youtube.com",
      icon: "fab fa-youtube"
    }]
  }
};
var about = {
  columns: {
    column1: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/people-talking.jpg)"),
      heading: "Team Work",
      description: "Committed and creative"
    },
    column2: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/people-working.jpg)"),
      heading: "Philosophy",
      description: "Trust pays off"
    },
    column3: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/office.jpg)"),
      heading: "Office",
      description: "Somewhere on earth"
    }
  },
  details: [{
    heading: "Who we are",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }, {
    heading: "Our philosophy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }, {
    heading: "How we work",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }]
};
var works = [{
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch.jpg)"),
  name: "Smart Watch"
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch2.jpg)"),
  name: "UX Design"
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/headphone.jpg)"),
  name: "Mockup"
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/mac.jpg)"),
  name: "The UI Design"
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch3.jpg)"),
  name: "One Product"
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/flamingos.jpg)"),
  name: "The UX Designs"
}];
var perks = [{
  icon: "fas fa-chart-bar",
  heading: "Excellent Design",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}, {
  icon: "fas fa-pen",
  heading: "Fast Response",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}, {
  icon: "fas fa-user-friends",
  heading: "Time Saving",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}, {
  icon: "fas fa-globe-europe",
  heading: "Personal Support",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}, {
  icon: "far fa-bookmark",
  heading: "Best Quality",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}, {
  icon: "fas fa-chart-area",
  heading: "Perfect Solutions",
  description: "Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod."
}];
var news = [{
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
}];
var team = [{
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member1.jpg)"),
  name: "John Doe",
  position: "Web developer",
  socialMedia: [{
    link: "https://facebook.com",
    icon: "fab fa-facebook-f"
  }, {
    link: "https://intagram.com",
    icon: "fab fa-instagram"
  }, {
    link: "https:linkedin.com",
    icon: "fab fa-linkedin-in"
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member2.jpg)"),
  name: "John Doe",
  position: "Web developer",
  socialMedia: [{
    link: "https://facebook.com",
    icon: "fab fa-facebook-f"
  }, {
    link: "https://intagram.com",
    icon: "fab fa-instagram"
  }, {
    link: "https:linkedin.com",
    icon: "fab fa-linkedin-in"
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member3.jpg)"),
  name: "John Doe",
  position: "Web developer",
  socialMedia: [{
    link: "https://facebook.com",
    icon: "fab fa-facebook-f"
  }, {
    link: "https://intagram.com",
    icon: "fab fa-instagram"
  }, {
    link: "https:linkedin.com",
    icon: "fab fa-linkedin-in"
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member4.jpg)"),
  name: "John Doe",
  position: "Web developer",
  socialMedia: [{
    link: "https://facebook.com",
    icon: "fab fa-facebook-f"
  }, {
    link: "https://intagram.com",
    icon: "fab fa-instagram"
  }, {
    link: "https:linkedin.com",
    icon: "fab fa-linkedin-in"
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member5.jpg)"),
  name: "John Doe",
  position: "Web developer",
  socialMedia: [{
    link: "https://facebook.com",
    icon: "fab fa-facebook-f"
  }, {
    link: "https://intagram.com",
    icon: "fab fa-instagram"
  }, {
    link: "https:linkedin.com",
    icon: "fab fa-linkedin-in"
  }]
}];

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
/******/ var __webpack_exports__ = (__webpack_exec__(404));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhbWluZ28vYWJvdXQuYWE3NjdjNGY2MDJhMmQyMzg5N2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLHdEQUFlLENBQUMsc09BQXNPOztBQ0R0UDtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxzQkFDaEIsMENBQ0VGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLHdCQUNiO0FBQUssZUFBUyxZQUFLSixDQUFDLENBQUNLLFlBQVAsY0FBdUJMLENBQUMsQ0FBQ0csSUFBSSxDQUFDRyxPQUFOLENBQXhCLENBQWQ7QUFBd0QsU0FBRyxFQUFFRjtBQUE3RCxvQkFDQztBQUFLLGVBQVMsRUFBRUosQ0FBQyxDQUFDTztBQUFsQixPQUF1QkosSUFBSSxDQUFDSyxJQUE1QixDQURELGVBRUM7QUFBSyxlQUFTLEVBQUVSLENBQUMsQ0FBQ087QUFBbEIsT0FBdUJKLElBQUksQ0FBQ00sVUFBNUIsQ0FGRCxDQURhO0FBQUEsR0FBYixDQURGLENBRGdCO0FBQUEsQ0FBakI7O0FBV0Esd0RBQWVSLGdEQUFBQSxRQUFmOzs7Ozs7Ozs7QUNoQkE7QUFDTyxJQUFNVyxHQUFHLEdBQUc7QUFDbEJDLEVBQUFBLElBQUksWUFBS0Ysb0VBQUwscUJBRGM7QUFFbEJHLEVBQUFBLElBQUksRUFBRSxDQUNMO0FBQ0NDLElBQUFBLElBQUksRUFBRUwsOERBRFA7QUFFQ00sSUFBQUEsSUFBSSxFQUFFO0FBRlAsR0FESyxFQUtMO0FBQ0NELElBQUFBLElBQUksWUFBS0wsOERBQUwsY0FETDtBQUVDTSxJQUFBQSxJQUFJLEVBQUU7QUFGUCxHQUxLLEVBU0w7QUFDQ0QsSUFBQUEsSUFBSSxZQUFLTCw4REFBTCxXQURMO0FBRUNNLElBQUFBLElBQUksRUFBRTtBQUZQLEdBVEssRUFhTDtBQUNDRCxJQUFBQSxJQUFJLFlBQUtMLDhEQUFMLFdBREw7QUFFQ00sSUFBQUEsSUFBSSxFQUFFO0FB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QUFxQixhQUFhLHFCQUFxQixTQUFTLFVBQVUseUJBQWlCLFlBQVksT0FBTyxlQUFlLHlCQUFrQixhQUFhLE9BQU8sc0JBQXNCLHlCQUFzQjtBQUMxZSx5QkFBWSxhQUFhLE9BQU8scUJBQXFCLHFCQUFxQixXQUFXLHlCQUFZLGVBQWUsT0FBTyw4Q0FBOEMseUJBQW1CLGVBQWUsNkJBQTZCLHlCQUFrQixlQUFlLDRCQUE0Qix5QkFBcUIsY0FBYyx5QkFBaUIsZUFBZSwyQkFBMkIseUJBQTJCLGlCQUFpQjtBQUMzYSx5QkFBdUIsZUFBZSxpQ0FBaUMseUJBQWUsZUFBZSx5QkFBeUIseUJBQWtCLGlCQUFpQiw4QkFBOEIseUJBQWMsYUFBYSxzQkFBc0IseUJBQWdCLGFBQWEsd0JBQXdCLHlCQUFlOzs7Ozs7OztBQ3RCdlM7O0FBRWIsSUFBSSxJQUFxQztBQUN6QyxFQUFFLDhDQUF5RDtBQUMzRCxFQUFFLEtBQUssRUFFTiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9wcm9ncmVzcy5jc3M/MGRhZCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzL2ZsYW1pbmdvLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vcGVya3MuY3NzPzVhZjAiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9QZXJrcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL3RlYW0uY3NzPzEzNWUiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9UZWFtLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiaDRcIjpcInJ4dzd3NGpLVmxwbGJqRGM3ZTVHXCIsXCJwcm9ncmVzc19iYXJcIjpcIkxCbFRKQjVUZ0N6WnFrdWVZWUU3XCIsXCJwcm9ncmVzc19iYXJfOTBcIjpcIklsX0VhS2V2TUJxNGkyS3pGeTJ6XCIsXCJwcm9ncmVzc19iYXJfNjBcIjpcImV3VGdLendudEt2a1JMaTRMMF9NXCIsXCJwcm9ncmVzc19iYXJfODBcIjpcInU1SGhGUzhEbG5lbWNTMWxIa1RrXCIsXCJwcm9ncmVzc19iYXJfNzBcIjpcInZYTjIza1gxdUJ2NHdmU204RkF6XCJ9OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcHJvZ3Jlc3MgfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcIi4vcHJvZ3Jlc3MuY3NzXCI7XHJcblxyXG5jb25zdCBQcm9ncmVzcyA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0e3Byb2dyZXNzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQucHJvZ3Jlc3NfYmFyfSAkeyRbaXRlbS5jbGFzc2VzXX1gfSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5oNH0+e2l0ZW0ubmFtZX08L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5oNH0+e2l0ZW0ucGVyY2VudGFnZX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpKX1cclxuXHQ8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xyXG4iLCJpbXBvcnQgeyBiYXNlLCBQVUJMSUNfVVJMIH0gZnJvbSBcIn4vY29uc3RhbnRzL2ZsYW1pbmdvXCI7XHJcbmV4cG9ydCBjb25zdCBuYXYgPSB7XHJcblx0bG9nbzogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL2xvZ28ucG5nYCxcclxuXHRtZW51OiBbXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGJhc2UsXHJcblx0XHRcdHRleHQ6IFwiaG9tZVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1zZXJ2aWNlcy9gLFxyXG5cdFx0XHR0ZXh0OiBcInNlcnZpY2VzXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfXdvcmtzL2AsXHJcblx0XHRcdHRleHQ6IFwiV29ya3NcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9YWJvdXQvYCxcclxuXHRcdFx0dGV4dDogXCJhYm91dFwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1ibG9nL2AsXHJcblx0XHRcdHRleHQ6IFwiYmxvZ1wiLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGNvbnRhY3Q6IHtcclxuXHRcdGxpbms6IGAke2Jhc2V9Y29udGFjdGAsXHJcblx0XHR0ZXh0OiBcImNvbnRhY3RcIixcclxuXHR9LFxyXG5cdHNlYXJjaDogZmFsc2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IFtcclxuXHR7XHJcblx0XHRpY29uOiBcImZhciBmYS1wYXBlci1wbGFuZSBtYi1tIGljb24tZ3JlZW5cIixcclxuXHRcdGhlYWRpbmc6IFwiRnV0dXJlIENvbmNlcHQuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy5cIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246IFwiZmFzIGZhLWJyYWluIG1iLW0gaWNvbi1ncmVlblwiLFxyXG5cdFx0aGVhZGluZzogXCJUaGUgQmlnIElkZWFzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiBcImZhciBmYS1saWdodGJ1bGIgbWItbSBpY29uLWdyZWVuXCIsXHJcblx0XHRoZWFkaW5nOiBcIkNyZWF0aXZlIFNvbHV0aW9ucy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLlwiLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzcyA9IFtcclxuXHR7XHJcblx0XHRjbGFzc2VzOiBcInByb2dyZXNzX2Jhcl85MFwiLFxyXG5cdFx0bmFtZTogXCJVSSBEZXNpZ25cIixcclxuXHRcdHBlcmNlbnRhZ2U6IFwiOTAlXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiBcInByb2dyZXNzX2Jhcl82MFwiLFxyXG5cdFx0bmFtZTogXCJVWCBEZXNpZ25cIixcclxuXHRcdHBlcmNlbnRhZ2U6IFwiNjAlXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiBcInByb2dyZXNzX2Jhcl84MFwiLFxyXG5cdFx0bmFtZTogXCJEaWdpdGFsIE1hcmtldGluZ1wiLFxyXG5cdFx0cGVyY2VudGFnZTogXCI4MCVcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6IFwicHJvZ3Jlc3NfYmFyXzcwXCIsXHJcblx0XHRuYW1lOiBcIlNvY2lhbCBNZWRpYVwiLFxyXG5cdFx0cGVyY2VudGFnZTogXCI3MCVcIixcclxuXHR9LFxyXG5dO1xyXG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/ICcvcGxheWdyb3VuZC8nIDogJy8nO1xuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuaW1wb3J0IHsgYmFzZSBhcyBwcm9qZWN0QmFzZSB9IGZyb20gJ34vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyBgJHtwcm9qZWN0QmFzZX1mbGFtaW5nby9gIDogJy9mbGFtaW5nby8nO1xuXG5leHBvcnQgY29uc3QgUFVCTElDX1VSTCA9IGlzUHJvZHVjdGlvblxuXHQ/IGAke3Byb2plY3RCYXNlfS9zdGF0aWMvZmxhbWluZ29gXG5cdDogJy9mbGFtaW5nbyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImg0XCI6XCJkU1BJMnQ2cUh5c1BlV09kYVA5d1wiLFwiY29sdW1uc18zXCI6XCJOcDh1bFBTVFlRNnNWU3FrdGtBU1wiLFwiY29sdW1uXCI6XCJBRjZIY2JyampKeENEY29nYmVMX1wiLFwiaWNvbl9ncmVlblwiOlwiemlXOTJOZ0FOZ1FBTmxkYzdhaWtcIixcInBfbVwiOlwiaGFiRUZSR0U3N2p2dWJTdDczTUhcIixcIm1iX2RlZmF1bHRcIjpcIktSTXhjaDBKUnl4YVV1MWFrUUJFXCIsXCJ3aWR0aF84MFwiOlwibGQ2U0Rnb1Z0M1dqQTJwQzFLUmFcIn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBwZXJrcyB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwiLi9wZXJrcy5jc3NcIjtcclxuXHJcbmNvbnN0IFBlcmtzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbnNfM30+XHJcblx0XHR7cGVya3MubWFwKChwZXJrLCBpbmRleCkgPT4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC5wX219YH0ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQud2lkdGhfODB9PlxyXG5cdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtwZXJrLmljb259ICR7JC5pY29uX2dyZWVufSAkeyQubWJfZGVmYXVsdH1gfVxyXG5cdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLm1iX2RlZmF1bHR9ICR7JC5oNH1gfT5cclxuXHRcdFx0XHRcdFx0e3BlcmsuaGVhZGluZ31cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHA+e3BlcmsuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQZXJrcztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJoNFwiOlwiQnZTZ1JfZ19RS1NUSjNwQ3cxa19cIixcInRlYW1cIjpcInBXdEFxb211TVpiSTlEV1ZzcTcyXCIsXCJtYl9kZWZhdWx0XCI6XCJHbkFrTDhKQ3pVVGdYQllEYkp6M1wiLFwibWJfbVwiOlwiZVRNNzVkUmYzR1hITmZmVEprVU5cIixcIm1lbWJlclwiOlwiQXBaRjVYYXNmaTkweFZWR01yN2VcIixcIm1lbWJlcl9kZXRhaWxzXCI6XCJYOENxODRDVnJuQk55UEVEQUw0X1wiLFwic29jaWFsX21lZGlhX3NtYWxsXCI6XCJtTUhMYXdZclRnSXJWbDBDMVdaclwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRlYW0gfSBmcm9tIFwiLi9kYlwiO1xyXG5cclxuaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gXCJ+L2NvbnN0YW50cy9mbGFtaW5nb1wiO1xyXG5cclxuaW1wb3J0ICQgZnJvbSBcIi4vdGVhbS5jc3NcIjtcclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9eyQudGVhbX0+XHJcblx0XHR7dGVhbS5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17JC5tZW1iZXJ9XHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogbWVtYmVyLmltYWdlLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLm1lbWJlcl9kZXRhaWxzfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLm1iX2RlZmF1bHR9ICR7JC5oNH1gfT5cclxuXHRcdFx0XHRcdFx0e21lbWJlci5uYW1lfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9eyQubWJfbX0+e21lbWJlci5wb3NpdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5zb2NpYWxfbWVkaWFfc21hbGx9PlxyXG5cdFx0XHRcdFx0XHR7bWVtYmVyLnNvY2lhbE1lZGlhLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17aXRlbS5saW5rfSBrZXk9e2tleX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpKX1cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tIFwifmMvRmxhbWluZ28vUHJvZ3Jlc3MuanNcIjtcclxuaW1wb3J0IFBlcmtzIGZyb20gXCJ+cy9GbGFtaW5nby9QZXJrcy5qc1wiO1xyXG5pbXBvcnQgVGVhbSBmcm9tIFwifnMvRmxhbWluZ28vVGVhbS5qc1wiO1xyXG5pbXBvcnQgeyBhYm91dCB9IGZyb20gXCIuL2RiXCI7XHJcblxyXG5pbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSBcIn4vY29uc3RhbnRzL2ZsYW1pbmdvXCI7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwiLi9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9eyQuYWJvdXRfcGFnZX0+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17YCR7JC5oZWFkZXJfc21hbGx9ICR7JC5iZ19jb3Zlcn1gfVxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQuaGVhZGVyLmltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC50ZXh0X2NlbnRlcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuaDF9PnthYm91dC5oZWFkZXIuaGVhZGluZ308L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmJnX2JsdWV9ICR7JC5zZWN0aW9ufWB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxQZXJrcyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuYmdfZ3JleX0gJHskLnNlY3Rpb259YH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuY29sdW1uc18yfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLndpZHRoXzgwfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5tYl9tfSAkeyQuaDJ9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHR7YWJvdXQuc2tpbGxzLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXskLm1iX219PnthYm91dC5za2lsbHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxQcm9ncmVzcyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2AkeyQuY29sdW1ufSAkeyQuYmdfY292ZXJ9YH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGFib3V0LnNraWxscy5pbWFnZSxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmJnX2JsdWV9ICR7JC5zZWN0aW9ufWB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb250YWluZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmNvbHVtbnNfMn0+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7JC5jb2x1bW59ICR7JC5iZ19jb3Zlcn1gfVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQudmlkZW8uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5jb2x1bW59PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5wX219PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLm1iX219ICR7JC5oMn1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdHthYm91dC52aWRlby5oZWFkaW5nfVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17JC5tYl9tfT57YWJvdXQudmlkZW8uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXskLmJ1dHRvbn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmYXMgZmEtcGxheSAkeyQubXJfZGVmYXVsdH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdHthYm91dC52aWRlby5idXR0b24udGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5iZ19ncmV5fSAkeyQuc2VjdGlvbn1gfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2AkeyQuY29udGFpbmVyfSAkeyQubWJfbH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7JC5tYl9kZWZhdWx0fSAkeyQuaDJ9YH0+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyQuc2VwYXJhdG9yfT48L3NwYW4+XHJcblx0XHRcdFx0XHR7YWJvdXQudGVhbS5oZWFkaW5nfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmg1fT57YWJvdXQudGVhbS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUZWFtIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gXCJ+L2NvbnN0YW50cy9mbGFtaW5nb1wiO1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2hlYWRlci1ob21lcGFnZS5qcGcpYCxcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkNyZWF0aXZlIG1pbmQsIGNyZWF0aXZlIHdvcmtzXCIsXHJcblx0XHRoZWFkaW5nOiBcIldlIGFyZSBkaWdpdGFsIGFnZW5jeS5cIixcclxuXHRcdGJ1dHRvbjogXCJnZXR0aW5nIHN0YXJ0ZWRcIixcclxuXHR9LFxyXG5cdHNlcnZpY2VzOiB7XHJcblx0XHRoZWFkaW5nOiBcIlNlcnZpY2VzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzXCIsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aGVhZGluZzogXCJXb3Jrcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoaW5ncyBXZSd2ZSBNYWRlXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJ2aWV3IGFsbFwiLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0YWJvdXQ6IHtcclxuXHRcdGhlYWRpbmc6IFwiQWJvdXQuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJXZSBhcmUgbW9yZSB0aGFuIGRpZ2l0YWwgYWdlbmN5XCIsXHJcblx0fSxcclxuXHR0ZXN0aW1vbmlhbHM6IHtcclxuXHRcdGhlYWRpbmc6IFwiVGVzdGltb25pYWxzLlwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFwiV2UgYXJlIG1vcmUgdGhhbiBkaWdpdGFsIGFnZW5jeVwiLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lcnMgPSBbXHJcblx0XCJmYWIgZmEtamVkaS1vcmRlclwiLFxyXG5cdFwiZmFzIGZhLXN0YXItb2YtbGlmZVwiLFxyXG5cdFwiZmFzIGZhLXN0b3JlLWFsdFwiLFxyXG5cdFwiZmFzIGZhLXNoYXJlLWFsdC1zcXVhcmVcIixcclxuXHRcImZhcyBmYS1wb28tc3Rvcm1cIixcclxuXHRcImZhcyBmYS1jaGFyZ2luZy1zdGF0aW9uXCIsXHJcblx0XCJmYXMgZmEtc25vd3Bsb3dcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LlwiLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC5cIixcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuXCIsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2hlYWRlci1iZy5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiU2VydmljZXMuXCIsXHJcblx0fSxcclxuXHRvdXJTZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogXCJPdXIgc2VydmljZXMuXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJPdXIgU2VydmljZXMgZm9yIGNsaWVudHNcIixcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIldhbm5hIHNlZSBvdXIgd29ya3M/XCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJhbGwgcHJvamVjdHNcIiwgbGluazogYCR7YmFzZX13b3Jrc2AgfSxcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogXCJIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHNcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLiBEb25lYyBlbGVtZW50dW0sIHRvcnRvciB2ZWwgdml2ZXJyYSB1bHRyaWNlcywgbGFjdXMgb3JjaSB2ZW5lbmF0aXMgdG9ydG9yLCB2ZWwgcmhvbmN1cyBpcHN1bSBmZWxpcyBhIGRpYW0uXCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IHdvcmtzID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvdGF0dG9vLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJPdXIgd29ya3MuXCIsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRoZWFkaW5nOiBcIk91ciBXb3Jrcy5cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIlNlZSBhbGwgb3VyIHdvcmtzXCIsXHJcblx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMS5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkFyaGl0ZWN0dXJlXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQXJ0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlBob3RvZ3JhcGh5XCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiQXJ0XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlRlYXNlclwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIlZpZGVvXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIlN0eWxlc1wiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIkFydFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTUuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogXCJBYm91dFwiLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiBcIldyaXRpbmdzXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiBcIk5hbWVzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW03LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiVGl0bGVzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW04LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiU29tZXRoaW5nXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiV3JpdGluZ3NcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW05LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiUmVhY3Rpb25cIixcclxuXHRcdFx0XHRjYXRlZ29yeTogXCJWaWRlb1wiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEwLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6IFwiTWlzY2VsYW5pb3VzXCIsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6IFwiVmlkZW9cIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJBYm91dCB1cy5cIixcclxuXHR9LFxyXG5cdHNraWxsczoge1xyXG5cdFx0aGVhZGluZzogXCJIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHNcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaWQgYXJjdSBsdWN0dXMsIHBlbGxlbnRlc3F1ZSBsb3JlbSBhYywgcGhhcmV0cmEgc2FwaWVuLlwiLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCJCZXN0IFNvbHV0aW9ucyBmb3IgWW91ciBCdXNpbmVzc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuXCIsXHJcblx0XHRidXR0b246IHsgdGV4dDogXCJXYXRjaCB2aWRlb1wiIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiBcIk1lZXQgb3VyIHRlYW0uXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJ0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3RcIixcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGFjdCA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hcC5qcGcpYCxcclxuXHRcdGhlYWRpbmc6IFwiQ29udGFjdCB1cy5cIixcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6IFwiR2V0IGluIHRvdWNoIHdpdGggdXMhXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxyXG5cdFx0Y29sdW1uczoge1xyXG5cdFx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdFx0aGVhZGluZzogXCJQSE9ORVwiLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCIrMTIzNDU2Nzg5MFwiLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiBcInRlbDoxMjM0NTY3ODkwXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcIiswOTg3NjU0MzIxXCIsXHJcblx0XHRcdFx0XHRcdGxpbms6IFwidGVsOjA5ODc2NTQzMjFcIixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uMjoge1xyXG5cdFx0XHRcdGhlYWRpbmc6IFwiQUREUkVTU1wiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXJhZGlwaXNjaW5nIGVsaXQuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiBcIkVNQUlMXCIsXHJcblx0XHRcdFx0YnV0dG9uczoge1xyXG5cdFx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiBcImFueW1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJtYWlsdG86YW55bWFpbEBtYWlsLmNvbVwiLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogXCJvZmZpY2lhbG1haWxAbWFpbC5jb21cIixcclxuXHRcdFx0XHRcdFx0bGluazogXCJtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tXCIsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Zm9ybToge1xyXG5cdFx0aGVhZGluZzogXCJTZW5kIHVzIGEgbWVzc2FnZSFcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XCIsXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGJsb2cgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW4uanBnKWAsXHJcblx0XHRoZWFkaW5nOiBcIkJsb2cuXCIsXHJcblx0fSxcclxuXHRoZWFkaW5nOiBcIkNoZWNrIG91ciBsYXRlc3QgbmV3cy5cIixcclxuXHRkZXNjcmlwdGlvbjogXCJDaGVjayBPdXQgU29tZSBvZiBPdXIgTmV3c1wiLFxyXG5cdGFydGljbGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdFwiQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT9cIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCI4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcylcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCIxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0XCJDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlP1wiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIjggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKVwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uXCIsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHRcIjE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXJcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhcnRpY2xlID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0Y2F0ZWdvcnk6IFwiVGVjaG5vbG9neVwiLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0XCJDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlP1wiLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRzaWRlYmFyOiB7XHJcblx0XHRcdGRldGFpbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIldyaXR0ZW4gYnlcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIlBvc3RlZCBvblwiLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiSmFudWFyeSAzLCAyMDIyXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiBcIlRhZ3NcIixcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkRlc2lnbiwgVGVjaG5vbG9neVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2tcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYWIgZmEtdHdpdHRlclwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogXCJodHRwczovL2luc3RhZ3JhbS5jb21cIixcclxuXHRcdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0bWFpbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJkZXNjcmlwdGlvblwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJwYXJhZ3JhcGhcIixcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0XCJFdGlhbSB1bHRyaWNlcyBleCBuZWMgaW50ZXJkdW0gbHVjdHVzLiBTZWQgdGluY2lkdW50IG5pc2wgc2VkIGFyY3Ugc29kYWxlcyBlbGVtZW50dW0uIEV0aWFtIGFjIGp1c3RvIHZpdGFlIGRvbG9yIHRpbmNpZHVudCBlZmZpY2l0dXIgZWdldCBhdCB0ZWxsdXMuIFF1aXNxdWUgdHJpc3RpcXVlIHZvbHV0cGF0IG51bGxhLCBldSBiaWJlbmR1bSBlc3QgbWFsZXN1YWRhIGEuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcImhlYWRpbmdcIixcclxuXHRcdFx0XHRjb250ZW50OiBcIlRoZSBOZXcgR2VuZXJhdGlvbiBvZiBWUiBpcyBDb21pbmchXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkV0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS5cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwiaW1hZ2VcIixcclxuXHRcdFx0XHRjb250ZW50OiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnYCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6IFwicGFyYWdyYXBoXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gaW4gcG9zdWVyZSBtZXR1cy4gRG9uZWMgZGljdHVtIHRlbXBvciBvZGlvLCBzaXQgYW1ldCBjb25kaW1lbnR1bSBvZGlvIG1vbGxpcyBuZWMuIFByYWVzZW50IGVnZXQgbGlndWxhIG5lcXVlLiBRdWlzcXVlIHBoYXJldHJhIGVsZW1lbnR1bSBtYXNzYSBhdCBmcmluZ2lsbGEuIE51bGxhbSBmcmluZ2lsbGEgbmVjIGF1Z3VlIGlkIHNvbGxpY2l0dWRpbi4gUXVpc3F1ZSBpbnRlcmR1bSBsb2JvcnRpcyB0b3J0b3IsIHNpdCBhbWV0IGFsaXF1YW0gdXJuYSBhbGlxdWFtIGluLiBNb3JiaSBpbiBxdWFtIGEgdGVsbHVzIHRlbXBvciB0aW5jaWR1bnQgc2VkIHZpdGFlIGVyb3MuXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHRcIkV0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4gUXVpc3F1ZSBzdXNjaXBpdCwgZmVsaXMgdXQgY29uZ3VlIG1vbGVzdGllLCBlcm9zIGRvbG9yIG1hdHRpcyBkb2xvciwgYSBzYWdpdHRpcyBzZW0gbGlndWxhIHZpdGFlIGR1aS4gU2VkIHBlbGxlbnRlc3F1ZSBzYWdpdHRpcyB0aW5jaWR1bnQuIFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogXCJoZWFkaW5nXCIsXHJcblx0XHRcdFx0Y29udGVudDpcclxuXHRcdFx0XHRcdFwiXFxcIllvdXIgdGltZSBpcyBsaW1pdGVkLCBzbyBkb24ndCB3YXN0ZSBpdCBsaXZpbmcgc29tZW9uZSBlbHNlJ3MgbGlmZS5cXFwiXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiBcInBhcmFncmFwaFwiLFxyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiIFN0ZXZlIEpvYnMgfCBFeCBDRU8gb2YgQXBwbGUgXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tIFwifi9jb25zdGFudHMvZmxhbWluZ29cIjtcclxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IHtcclxuXHRpbnF1aXJ5OiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9iYWNrZ3JvdW5kLWZvb3Rlci5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2tcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8veW91dHViZS5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS15b3V0dWJlXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0aGVhZGluZzogXCJIYXZlIGFueSBwcm9qZWN0IGluIG1pbmQ/XCIsXHJcblx0XHRidXR0b246IHtcclxuXHRcdFx0dGV4dDogXCJtYWtlIGlucXVpcnlcIixcclxuXHRcdH0sXHJcblx0fSxcclxuXHRtZW51czoge1xyXG5cdFx0bWVudTE6IHtcclxuXHRcdFx0bG9nbzoge1xyXG5cdFx0XHRcdGltYWdlOiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvbG9nby5wbmdgLFxyXG5cdFx0XHRcdGxpbms6IGJhc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIldlIGFyZSBtb3JlIHRoYW4gYSBkaWdpdGFsIGFnZW5jeVwiLFxyXG5cdFx0fSxcclxuXHRcdG1lbnUyOiB7XHJcblx0XHRcdGhlYWRpbmc6IFwiQ29udGFjdCBVc1wiLFxyXG5cdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0dGV4dDogXCIwNzI3NzI5MDY4XCIsXHJcblx0XHRcdFx0XHRpY29uOiBcImZhcyBmYS1waG9uZS12b2x1bWVcIixcclxuXHRcdFx0XHRcdGxpbms6IFwidGVsOjA3Mjc3MjkwNjhcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdGxpbms6IFwibWFpbHRvOm1vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5yb1wiLFxyXG5cdFx0XHRcdFx0aWNvbjogXCJmYXIgZmEtZW52ZWxvcGVcIixcclxuXHRcdFx0XHRcdHRleHQ6IFwibW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b24zOiB7XHJcblx0XHRcdFx0XHRpY29uOiBcImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiLFxyXG5cdFx0XHRcdFx0dGV4dDogXCJDb25zdGFudHphLCBSb21hbmlhXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b240OiB7XHJcblx0XHRcdFx0XHRpY29uOiBcImZhciBmYS1jYWxlbmRhci1hbHRcIixcclxuXHRcdFx0XHRcdHRleHQ6IFwiTW9uZGF5IHRvIEZyaWRheVwiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bWVudTM6IHtcclxuXHRcdFx0aGVhZGluZzogXCJPdXIgU2VydmljZXNcIixcclxuXHRcdFx0YnV0dG9uczogW1wibGluazFcIiwgXCJsaW5rMlwiLCBcImxpbmszXCIsIFwibGluazRcIl0sXHJcblx0XHR9LFxyXG5cdFx0bWVudTQ6IHtcclxuXHRcdFx0aGVhZGluZzogXCJBYm91dCBVc1wiLFxyXG5cdFx0XHRidXR0b25zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogXCJBYm91dFwiLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArIFwiYWJvdXRcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6IFwiQmxvZ1wiLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArIFwiI1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogXCJDb250YWN0IHVzXCIsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgXCJjb250YWN0XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiBcIldvcmtzXCIsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgXCJ3b3Jrc1wiLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29weXJpZ2h0OiB7XHJcblx0XHR0ZXh0OiBcIkNvcHlyaWdodCAyMDIwIEFsbCByaWdodHMgcmVzZXJ2ZWRcIixcclxuXHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdHRleHQ6IFwiUHJpdmFjeSBQb2xpY3lcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdHRleHQ6IFwiVGVybXMgb2YgVXNlXCIsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby5cIixcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2tcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLXR3aXR0ZXJcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8veW91dHViZS5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS15b3V0dWJlXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRjb2x1bW5zOiB7XHJcblx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3Blb3BsZS10YWxraW5nLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOiBcIlRlYW0gV29ya1wiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJDb21taXR0ZWQgYW5kIGNyZWF0aXZlXCIsXHJcblx0XHR9LFxyXG5cdFx0Y29sdW1uMjoge1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW9wbGUtd29ya2luZy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzogXCJQaGlsb3NvcGh5XCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlRydXN0IHBheXMgb2ZmXCIsXHJcblx0XHR9LFxyXG5cdFx0Y29sdW1uMzoge1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9vZmZpY2UuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6IFwiT2ZmaWNlXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlNvbWV3aGVyZSBvbiBlYXJ0aFwiLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRldGFpbHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aGVhZGluZzogXCJXaG8gd2UgYXJlXCIsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby5cIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGhlYWRpbmc6IFwiT3VyIHBoaWxvc29waHlcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLlwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aGVhZGluZzogXCJIb3cgd2Ugd29ya1wiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uXCIsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd29ya3MgPSBbXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd2F0Y2guanBnKWAsXHJcblx0XHRuYW1lOiBcIlNtYXJ0IFdhdGNoXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93YXRjaDIuanBnKWAsXHJcblx0XHRuYW1lOiBcIlVYIERlc2lnblwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvaGVhZHBob25lLmpwZylgLFxyXG5cdFx0bmFtZTogXCJNb2NrdXBcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hYy5qcGcpYCxcclxuXHRcdG5hbWU6IFwiVGhlIFVJIERlc2lnblwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd2F0Y2gzLmpwZylgLFxyXG5cdFx0bmFtZTogXCJPbmUgUHJvZHVjdFwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZmxhbWluZ29zLmpwZylgLFxyXG5cdFx0bmFtZTogXCJUaGUgVVggRGVzaWduc1wiLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwZXJrcyA9IFtcclxuXHR7XHJcblx0XHRpY29uOiBcImZhcyBmYS1jaGFydC1iYXJcIixcclxuXHRcdGhlYWRpbmc6IFwiRXhjZWxsZW50IERlc2lnblwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLlwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogXCJmYXMgZmEtcGVuXCIsXHJcblx0XHRoZWFkaW5nOiBcIkZhc3QgUmVzcG9uc2VcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIlZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC5cIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246IFwiZmFzIGZhLXVzZXItZnJpZW5kc1wiLFxyXG5cdFx0aGVhZGluZzogXCJUaW1lIFNhdmluZ1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLlwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogXCJmYXMgZmEtZ2xvYmUtZXVyb3BlXCIsXHJcblx0XHRoZWFkaW5nOiBcIlBlcnNvbmFsIFN1cHBvcnRcIixcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcIlZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC5cIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246IFwiZmFyIGZhLWJvb2ttYXJrXCIsXHJcblx0XHRoZWFkaW5nOiBcIkJlc3QgUXVhbGl0eVwiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLlwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogXCJmYXMgZmEtY2hhcnQtYXJlYVwiLFxyXG5cdFx0aGVhZGluZzogXCJQZXJmZWN0IFNvbHV0aW9uc1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLlwiLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBuZXdzID0gW1xyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0XCJDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlP1wiLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi5cIixcclxuXHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdFwiOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0aGVhZGluZzogXCIxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyXCIsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLlwiLFxyXG5cdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZWFtID0gW1xyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjEuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rLWZcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnRhZ3JhbS5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6bGlua2VkaW4uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtbGlua2VkaW4taW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXIyLmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS1mYWNlYm9vay1mXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vaW50YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOmxpbmtlZGluLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluLWluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyMy5qcGcpYCxcclxuXHRcdG5hbWU6IFwiSm9obiBEb2VcIixcclxuXHRcdHBvc2l0aW9uOiBcIldlYiBkZXZlbG9wZXJcIixcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtZmFjZWJvb2stZlwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogXCJodHRwczovL2ludGFncmFtLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLWluc3RhZ3JhbVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogXCJodHRwczpsaW5rZWRpbi5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS1saW5rZWRpbi1pblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjQuanBnKWAsXHJcblx0XHRuYW1lOiBcIkpvaG4gRG9lXCIsXHJcblx0XHRwb3NpdGlvbjogXCJXZWIgZGV2ZWxvcGVyXCIsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLWZhY2Vib29rLWZcIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9pbnRhZ3JhbS5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS1pbnN0YWdyYW1cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6bGlua2VkaW4uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtbGlua2VkaW4taW5cIixcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXI1LmpwZylgLFxyXG5cdFx0bmFtZTogXCJKb2huIERvZVwiLFxyXG5cdFx0cG9zaXRpb246IFwiV2ViIGRldmVsb3BlclwiLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcclxuXHRcdFx0XHRpY29uOiBcImZhYiBmYS1mYWNlYm9vay1mXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOi8vaW50YWdyYW0uY29tXCIsXHJcblx0XHRcdFx0aWNvbjogXCJmYWIgZmEtaW5zdGFncmFtXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiBcImh0dHBzOmxpbmtlZGluLmNvbVwiLFxyXG5cdFx0XHRcdGljb246IFwiZmFiIGZhLWxpbmtlZGluLWluXCIsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvZ3Jlc3MiLCIkIiwiUHJvZ3Jlc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJwcm9ncmVzc19iYXIiLCJjbGFzc2VzIiwiaDQiLCJuYW1lIiwicGVyY2VudGFnZSIsImJhc2UiLCJQVUJMSUNfVVJMIiwibmF2IiwibG9nbyIsIm1lbnUiLCJsaW5rIiwidGV4dCIsImNvbnRhY3QiLCJzZWFyY2giLCJzZXJ2aWNlcyIsImljb24iLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwcm9qZWN0QmFzZSIsInBlcmtzIiwiUGVya3MiLCJjb2x1bW5zXzMiLCJwZXJrIiwiY29sdW1uIiwicF9tIiwid2lkdGhfODAiLCJpY29uX2dyZWVuIiwibWJfZGVmYXVsdCIsInRlYW0iLCJUZWFtIiwibWVtYmVyIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJtZW1iZXJfZGV0YWlscyIsIm1iX20iLCJwb3NpdGlvbiIsInNvY2lhbF9tZWRpYV9zbWFsbCIsInNvY2lhbE1lZGlhIiwia2V5IiwiYWJvdXQiLCJBYm91dFBhZ2UiLCJhYm91dF9wYWdlIiwiaGVhZGVyX3NtYWxsIiwiYmdfY292ZXIiLCJoZWFkZXIiLCJ0ZXh0X2NlbnRlciIsImgxIiwiYmdfYmx1ZSIsInNlY3Rpb24iLCJjb250YWluZXIiLCJiZ19ncmV5IiwiY29sdW1uc18yIiwiaDIiLCJza2lsbHMiLCJ2aWRlbyIsImJ1dHRvbiIsIm1yX2RlZmF1bHQiLCJtYl9sIiwic2VwYXJhdG9yIiwiaDUiLCJob21lIiwid29ya3MiLCJ0ZXN0aW1vbmlhbHMiLCJjdXN0b21lcnMiLCJhdmF0YXIiLCJvdXJTZXJ2aWNlcyIsImNvbnRlbnQiLCJjb2x1bW5zIiwiY2F0ZWdvcnkiLCJjb2x1bW4xIiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJidXR0b24yIiwiY29sdW1uMiIsImNvbHVtbjMiLCJmb3JtIiwiYmxvZyIsImFydGljbGVzIiwiYXJ0aWNsZSIsInNpZGViYXIiLCJkZXRhaWxzIiwibWFpbiIsInR5cGUiLCJmb290ZXIiLCJpbnF1aXJ5IiwibWVudXMiLCJtZW51MSIsIm1lbnUyIiwiYnV0dG9uMyIsImJ1dHRvbjQiLCJtZW51MyIsIm1lbnU0IiwiY29weXJpZ2h0IiwibmV3cyJdLCJzb3VyY2VSb290IjoiIn0=