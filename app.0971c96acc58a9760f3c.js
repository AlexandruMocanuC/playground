/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(879);



var Progress = function Progress() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    __webpack_require__.e(/* import() */ 871).then(__webpack_require__.bind(__webpack_require__, 871));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _db__WEBPACK_IMPORTED_MODULE_1__/* .progress.map */ .YD.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: item.classes,
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, item.percentage));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$n": () => (/* binding */ nav),
/* harmony export */   "uZ": () => (/* binding */ services),
/* harmony export */   "YD": () => (/* binding */ progress)
/* harmony export */ });
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
var isProduction = "production" === 'production';
var base = isProduction ? '/playground/' : '/';

/***/ }),

/***/ 702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base),
/* harmony export */   "f": () => (/* binding */ PUBLIC_URL)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
var isProduction = "production" === 'production';

var base = isProduction ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "flamingo/") : '/flamingo/';
var PUBLIC_URL = isProduction ? "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "/static/flamingo") : '/flamingo';

/***/ }),

/***/ 898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/components/Flamingo/Progress.js
var Progress = __webpack_require__(812);
// EXTERNAL MODULE: ./src/sections/Flamingo/db.js
var db = __webpack_require__(171);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Perks.js



var Perks = function Perks() {
  return /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, db/* perks.map */.u.map(function (perk, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column p-m",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "width-80"
    }, /*#__PURE__*/react.createElement("i", {
      className: perk.icon
    }), /*#__PURE__*/react.createElement("h4", {
      className: "mb-default"
    }, perk.heading), /*#__PURE__*/react.createElement("p", null, perk.description)));
  }));
};

/* harmony default export */ const Flamingo_Perks = (Perks);
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Team.js




var Team = function Team() {
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 406).then(__webpack_require__.bind(__webpack_require__, 406));
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "team"
  }, db/* team.map */.Bz.map(function (member, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "bg-cover member",
      style: {
        backgroundImage: member.image
      },
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "member-details"
    }, /*#__PURE__*/react.createElement("h4", {
      className: "mb-default"
    }, member.name), /*#__PURE__*/react.createElement("p", {
      className: "mb-m"
    }, member.position), /*#__PURE__*/react.createElement("div", {
      className: "social-media-small"
    }, member.socialMedia.map(function (item, key) {
      return /*#__PURE__*/react.createElement("a", {
        href: item.link,
        key: key
      }, /*#__PURE__*/react.createElement("i", {
        className: item.icon
      }));
    }))));
  }));
};

/* harmony default export */ const Flamingo_Team = (Team);
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var Flamingo_db = __webpack_require__(356);
;// CONCATENATED MODULE: ./src/pages/Flamingo/About.js







var AboutPage = function AboutPage() {
  return /*#__PURE__*/react.createElement("div", {
    className: "about-page"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-small bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.header.image */.jZ.header.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react.createElement("h1", null, Flamingo_db/* about.header.heading */.jZ.header.heading))), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(Flamingo_Perks, null))), /*#__PURE__*/react.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-m"
  }, Flamingo_db/* about.skills.heading */.jZ.skills.heading), /*#__PURE__*/react.createElement("p", {
    className: "mb-m"
  }, Flamingo_db/* about.skills.description */.jZ.skills.description), /*#__PURE__*/react.createElement(Progress/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.skills.image */.jZ.skills.image
    }
  })))), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.video.image */.jZ.video.image
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "p-m"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-m"
  }, Flamingo_db/* about.video.heading */.jZ.video.heading), /*#__PURE__*/react.createElement("p", {
    className: "mb-m"
  }, Flamingo_db/* about.video.description */.jZ.video.description), /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "button"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-play mr-default"
  }), Flamingo_db/* about.video.button.text */.jZ.video.button.text)))))), /*#__PURE__*/react.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container mb-l"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("span", {
    className: "separator"
  }), Flamingo_db/* about.team.heading */.jZ.team.heading), /*#__PURE__*/react.createElement("h5", null, Flamingo_db/* about.team.description */.jZ.team.description)), /*#__PURE__*/react.createElement(Flamingo_Team, null)));
};

/* harmony default export */ const About = (AboutPage);

/***/ }),

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);



var Article = function Article() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-cover header-article section",
    style: {
      backgroundImage: _db__WEBPACK_IMPORTED_MODULE_1__/* .article.header.image */ .Y2.header.image
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
    className: "mb-m"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .article.header.category */ .Y2.header.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, _db__WEBPACK_IMPORTED_MODULE_1__/* .article.header.heading */ .Y2.header.heading))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-blue section article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sidebar"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .article.content.sidebar.details.map */ .Y2.content.sidebar.details.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "detail bb-white",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {
      className: "mb-default"
    }, item.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.description));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "social-media-small"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .article.content.sidebar.socialMedia.map */ .Y2.content.sidebar.socialMedia.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: item.link
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: item.icon
    }, " "));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "main"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .article.content.main.map */ .Y2.content.main.map(function (element, index) {
    if (element.type === 'paragraph') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "mb-default",
        key: index
      }, element.content);
    } else if (element.type === 'heading') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "mb-default mt-m",
        key: index
      }, element.content);
    } else if (element.type === 'description') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "uppercase mb-default",
        key: index
      }, element.content);
    } else return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "mb-default mt-m",
      key: index,
      src: element.content
    });
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

/***/ }),

/***/ 372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);
/* harmony import */ var _s_Flamingo_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(216);




var Blog = function Blog() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-cover header-small",
    style: {
      backgroundImage: _db__WEBPACK_IMPORTED_MODULE_1__/* .blog.header.image */ .tQ.header.image
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, _db__WEBPACK_IMPORTED_MODULE_1__/* .blog.header.heading */ .tQ.header.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center mb-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-default"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .blog.heading */ .tQ.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, _db__WEBPACK_IMPORTED_MODULE_1__/* .blog.description */ .tQ.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "columns-3"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .blog.articles.map */ .tQ.articles.map(function (article, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_s_Flamingo_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      key: index,
      item: article
    });
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Flamingo_Contact)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
;// CONCATENATED MODULE: ./src/components/Flamingo/Form.js


var Form = function Form() {
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 942).then(__webpack_require__.bind(__webpack_require__, 942));
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "form"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "First Name"
  })), /*#__PURE__*/react.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "Last Name"
  })), /*#__PURE__*/react.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/react.createElement("input", {
    type: "email",
    placeholder: "Email"
  })), /*#__PURE__*/react.createElement("div", {
    className: "column mb-default"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    placeholder: "Subject"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("textarea", {
    rows: "4",
    placeholder: "Your message here"
  })), /*#__PURE__*/react.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "button"
  }, "send message")));
};

/* harmony default export */ const Flamingo_Form = (Form);
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var db = __webpack_require__(356);
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Contact.js





var Contact = function Contact() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "bg-cover header-small",
    style: {
      backgroundImage: db/* contact.header.image */.PX.header.image
    }
  }, /*#__PURE__*/react.createElement("h1", null, db/* contact.header.heading */.PX.header.heading)), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue text-center section contact-section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container mb-l"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, db/* contact.content.heading */.PX.content.heading), /*#__PURE__*/react.createElement("h5", null, db/* contact.content.description */.PX.content.description)), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-phone-alt icon-green mb-m"
  }), /*#__PURE__*/react.createElement("h4", {
    className: "mb-m"
  }, db/* contact.content.columns.column1.heading */.PX.content.columns.column1.heading), /*#__PURE__*/react.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("a", {
    href: db/* contact.content.columns.column1.buttons.button1.link */.PX.content.columns.column1.buttons.button1.link
  }, db/* contact.content.columns.column1.buttons.button1.text */.PX.content.columns.column1.buttons.button1.text)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: db/* contact.content.columns.column1.buttons.button2.link */.PX.content.columns.column1.buttons.button2.link
  }, db/* contact.content.columns.column1.buttons.button2.text */.PX.content.columns.column1.buttons.button2.text))), /*#__PURE__*/react.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-map-marker-alt icon-green mb-m"
  }), /*#__PURE__*/react.createElement("h4", {
    className: "mb-m"
  }, db/* contact.content.columns.column2.heading */.PX.content.columns.column2.heading), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
    className: "mb-default"
  }, db/* contact.content.columns.column2.description */.PX.content.columns.column2.description))), /*#__PURE__*/react.createElement("div", {
    className: "column text-center p-m"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-envelope-open-text icon-green mb-m"
  }), /*#__PURE__*/react.createElement("h4", {
    className: "mb-m"
  }, db/* contact.content.columns.column3.heading */.PX.content.columns.column3.heading), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: db/* contact.content.columns.column3.buttons.button1.link */.PX.content.columns.column3.buttons.button1.link,
    className: "mb-default"
  }, db/* contact.content.columns.column3.buttons.button1.text */.PX.content.columns.column3.buttons.button1.text)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: db/* contact.content.columns.column3.buttons.button2.link */.PX.content.columns.column3.buttons.button2.link
  }, db/* contact.content.columns.column3.buttons.button2.text */.PX.content.columns.column3.buttons.button2.text)))))), /*#__PURE__*/react.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container mb-l text-center"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, db/* contact.form.heading */.PX.form.heading), /*#__PURE__*/react.createElement("h5", null, db/* contact.form.description */.PX.form.description)), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(Flamingo_Form, null))));
};

/* harmony default export */ const Flamingo_Contact = (Contact);

/***/ }),

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _s_Flamingo_Services_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(446);
/* harmony import */ var _c_Flamingo_Progress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(812);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(711);






var ServicesPage = function ServicesPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "services-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-small bg-cover",
    style: {
      backgroundImage: _db__WEBPACK_IMPORTED_MODULE_3__/* .services.header.image */ .uZ.header.image
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.header.heading */ .uZ.header.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container text-center mb-l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-default"
  }, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.ourServices.heading */ .uZ.ourServices.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.ourServices.description */ .uZ.ourServices.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_s_Flamingo_Services_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-cover bg-fixed section text-center",
    style: {
      backgroundImage: _db__WEBPACK_IMPORTED_MODULE_3__/* .services.works.image */ .uZ.works.image
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-m"
  }, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.works.heading */ .uZ.works.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .rU, {
    to: _db__WEBPACK_IMPORTED_MODULE_3__/* .services.works.button.link */ .uZ.works.button.link,
    className: "button"
  }, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.works.button.text */ .uZ.works.button.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-m"
  }, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.skills.heading */ .uZ.skills.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, _db__WEBPACK_IMPORTED_MODULE_3__/* .services.skills.description */ .uZ.skills.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_c_Flamingo_Progress_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesPage);

/***/ }),

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);



var Works = function Works() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-cover header-small",
    style: {
      backgroundImage: _db__WEBPACK_IMPORTED_MODULE_1__/* .works.header.image */ ._B.header.image
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, _db__WEBPACK_IMPORTED_MODULE_1__/* .works.header.heading */ ._B.header.heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center mb-m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "mb-default"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .works.content.heading */ ._B.content.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, _db__WEBPACK_IMPORTED_MODULE_1__/* .works.content.description */ ._B.content.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "columns-2"
  }, _db__WEBPACK_IMPORTED_MODULE_1__/* .works.content.columns.map */ ._B.content.columns.map(function (column, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        backgroundImage: column.image
      },
      className: "column mb-default work-height bg-cover",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, column.heading)));
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": () => (/* binding */ home),
/* harmony export */   "J6": () => (/* binding */ customers),
/* harmony export */   "pb": () => (/* binding */ testimonials),
/* harmony export */   "uZ": () => (/* binding */ services),
/* harmony export */   "_B": () => (/* binding */ works),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "PX": () => (/* binding */ contact),
/* harmony export */   "tQ": () => (/* binding */ blog),
/* harmony export */   "Y2": () => (/* binding */ article)
/* harmony export */ });
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
var customers = ['fab fa-jedi-order icon-white', 'fas fa-star-of-life icon-white', 'fas fa-store-alt icon-white', 'fas fa-share-alt-square icon-white', 'fas fa-poo-storm icon-white', 'fas fa-charging-station icon-white', 'fas fa-snowplow icon-white'];
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

/***/ 291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(711);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(61);
;// CONCATENATED MODULE: ./src/pages/Home/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const style = ({});
;// CONCATENATED MODULE: ./src/pages/Home/index.js





var Home = function Home() {
  return /*#__PURE__*/react.createElement("b", null, "home", /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "flamingo/")
  }, "Flamingo"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "travel/")
  }, "Travel"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "houses/")
  }, "Houses"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "forest/")
  }, "Forest"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "".concat(constants/* base */.u, "contacts/")
  }, "Contacts"));
};

/* harmony default export */ const pages_Home = (Home);

/***/ }),

/***/ 216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(711);



var Card = function Card(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column b-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pt-100 bg-cover",
    style: {
      backgroundImage: item.image
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mb-default"
  }, item.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mb-default"
  }, item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU, {
    to: item.button,
    className: "button-small"
  }, "read more")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);


var Services = function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "columns-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-chart-bar icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "Digital Strategy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-pen icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "UX Designs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-user-friends icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "UI Designs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-globe-europe icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "far fa-bookmark icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "Design Concept"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "column p-m bb-white bg-grey bg-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "width-80"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "fas fa-chart-area icon-green mb-m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mb-m"
  }, "Media Pairing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu luctus."))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ }),

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mv": () => (/* binding */ footer),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "_B": () => (/* binding */ works),
/* harmony export */   "u": () => (/* binding */ perks),
/* harmony export */   "r": () => (/* binding */ news),
/* harmony export */   "Bz": () => (/* binding */ team)
/* harmony export */ });
/* harmony import */ var _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);

var footer = {
  inquiry: {
    image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/background-footer.jpg)"),
    socialMedia: [{
      link: 'https://facebook.com',
      icon: 'fab fa-facebook'
    }, {
      link: 'https://twitter.com',
      icon: 'fab fa-twitter'
    }, {
      link: 'https://instagram.com',
      icon: 'fab fa-instagram'
    }, {
      link: 'https://youtube.com',
      icon: 'fab fa-youtube'
    }],
    heading: 'Have any project in mind?',
    button: {
      text: 'make inquiry'
    }
  },
  menus: {
    menu1: {
      logo: {
        image: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/logo.png"),
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u
      },
      description: 'We are more than a digital agency'
    },
    menu2: {
      heading: 'Contact Us',
      buttons: {
        button1: {
          text: '0727729068',
          icon: 'fas fa-phone-volume icon-white',
          link: 'tel:0727729068'
        },
        button2: {
          link: 'mailto:mocanu.alexandru20@yahoo.ro',
          icon: 'far fa-envelope icon-white',
          text: 'mocanu.alexandru20@yahoo.ro'
        },
        button3: {
          icon: 'fas fa-map-marker-alt icon-white',
          text: 'Constantza, Romania'
        },
        button4: {
          icon: 'far fa-calendar-alt icon-white',
          text: 'Monday to Friday'
        }
      }
    },
    menu3: {
      heading: 'Our Services',
      buttons: ['link1', 'link2', 'link3', 'link4']
    },
    menu4: {
      heading: 'About Us',
      buttons: [{
        text: 'About',
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + 'about'
      }, {
        text: 'Blog',
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + '#'
      }, {
        text: 'Contact us',
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + 'contact'
      }, {
        text: 'Works',
        link: _constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u + 'works'
      }]
    }
  },
  copyright: {
    text: 'Copyright 2020 All rights reserved',
    buttons: {
      button1: {
        text: 'Privacy Policy'
      },
      button2: {
        text: 'Terms of Use'
      }
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    socialMedia: [{
      link: 'https://facebook.com',
      icon: 'fab fa-facebook'
    }, {
      link: 'https://twitter.com',
      icon: 'fab fa-twitter'
    }, {
      link: 'https://instagram.com',
      icon: 'fab fa-instagram'
    }, {
      link: 'https://youtube.com',
      icon: 'fab fa-youtube'
    }]
  }
};
var about = {
  columns: {
    column1: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/people-talking.jpg)"),
      heading: 'Team Work',
      description: 'Committed and creative'
    },
    column2: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/people-working.jpg)"),
      heading: 'Philosophy',
      description: 'Trust pays off'
    },
    column3: {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/office.jpg)"),
      heading: 'Office',
      description: 'Somewhere on earth'
    }
  },
  details: [{
    heading: 'Who we are',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }, {
    heading: 'Our philosophy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }, {
    heading: 'How we work',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }]
};
var works = [{
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch.jpg)"),
  name: 'Smart Watch'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch2.jpg)"),
  name: 'UX Design'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/headphone.jpg)"),
  name: 'Mockup'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/mac.jpg)"),
  name: 'The UI Design'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/watch3.jpg)"),
  name: 'One Product'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/flamingos.jpg)"),
  name: 'The UX Designs'
}];
var perks = [{
  icon: 'fas fa-chart-bar icon-green mb-default',
  heading: 'Excellent Design',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}, {
  icon: 'fas fa-pen icon-green mb-default',
  heading: 'Fast Response',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}, {
  icon: 'fas fa-user-friends icon-green mb-default',
  heading: 'Time Saving',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}, {
  icon: 'fas fa-globe-europe icon-green mb-default',
  heading: 'Personal Support',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}, {
  icon: 'far fa-bookmark icon-green mb-default',
  heading: 'Best Quality',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}, {
  icon: 'fas fa-chart-area icon-green mb-default',
  heading: 'Perfect Solutions',
  description: 'Vivamus at vehicula justo hendrerit euismod ante. Suspendisse egestas efficitur euismod.'
}];
var news = [{
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
}];
var team = [{
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member1.jpg)"),
  name: 'John Doe',
  position: 'Web developer',
  socialMedia: [{
    link: 'https://facebook.com',
    icon: 'fab fa-facebook-f'
  }, {
    link: 'https://intagram.com',
    icon: 'fab fa-instagram'
  }, {
    link: 'https:linkedin.com',
    icon: 'fab fa-linkedin-in'
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member2.jpg)"),
  name: 'John Doe',
  position: 'Web developer',
  socialMedia: [{
    link: 'https://facebook.com',
    icon: 'fab fa-facebook-f'
  }, {
    link: 'https://intagram.com',
    icon: 'fab fa-instagram'
  }, {
    link: 'https:linkedin.com',
    icon: 'fab fa-linkedin-in'
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member3.jpg)"),
  name: 'John Doe',
  position: 'Web developer',
  socialMedia: [{
    link: 'https://facebook.com',
    icon: 'fab fa-facebook-f'
  }, {
    link: 'https://intagram.com',
    icon: 'fab fa-instagram'
  }, {
    link: 'https:linkedin.com',
    icon: 'fab fa-linkedin-in'
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member4.jpg)"),
  name: 'John Doe',
  position: 'Web developer',
  socialMedia: [{
    link: 'https://facebook.com',
    icon: 'fab fa-facebook-f'
  }, {
    link: 'https://intagram.com',
    icon: 'fab fa-instagram'
  }, {
    link: 'https:linkedin.com',
    icon: 'fab fa-linkedin-in'
  }]
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/about/member5.jpg)"),
  name: 'John Doe',
  position: 'Web developer',
  socialMedia: [{
    link: 'https://facebook.com',
    icon: 'fab fa-facebook-f'
  }, {
    link: 'https://intagram.com',
    icon: 'fab fa-instagram'
  }, {
    link: 'https:linkedin.com',
    icon: 'fab fa-linkedin-in'
  }]
}];

/***/ }),

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aU": () => (/* binding */ r),
  "lX": () => (/* binding */ createBrowserHistory),
  "Ep": () => (/* binding */ I),
  "cP": () => (/* binding */ J)
});

// UNUSED EXPORTS: createHashHistory, createMemoryHistory

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  extends_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/history/index.js
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= false?0:function(b){return b};function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(e){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(e){return e!==h})}},call:function(h){b.forEach(function(e){return e&&e(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname;h=void 0===h?"/":h;var e=b.search;e=void 0===e?"":e;b=b.hash;b=void 0===b?"":b;e&&"?"!==e&&(h+="?"===e.charAt(0)?e:"?"+e);b&&"#"!==b&&(h+="#"===b.charAt(0)?b:"#"+b);return h}
function J(b){var h={};if(b){var e=b.indexOf("#");0<=e&&(h.hash=b.substr(e),b=b.substr(0,e));e=b.indexOf("?");0<=e&&(h.search=b.substr(e),b=b.substr(0,e));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function e(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C(extends_extends({pathname:q.pathname,hash:"",search:""},"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function f(){A(c,a)}var l=r.Push,k=x(c,
a);if(!g.length||(g.call({action:l,location:k,retry:f}),!1)){var n=[{usr:k.state,key:k.key,idx:v+1},e(k)];k=n[0];n=n[1];try{m.pushState(k,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function f(){y(c,a)}var l=r.Replace,k=x(c,a);g.length&&(g.call({action:l,location:k,retry:f}),1)||(k=[{usr:k.state,key:k.key,idx:v},e(k)],m.replaceState(k[0],"",k[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",
function(){if(u)g.call(u),u=null;else{var c=r.Pop,a=h(),f=a[0];a=a[1];if(g.length)if(null!=f){var l=v-f;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else false?0:
void 0;else z(c)}});var t=r.Pop;b=h();var v=b[0],q=b[1],d=F(),g=F();null==v&&(v=0,m.replaceState(extends_extends({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:e,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=g.push(c);1===g.length&&p.addEventListener("beforeunload",E);return function(){a();g.length||p.removeEventListener("beforeunload",E)}}}};
function createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),f=a.pathname,l=a.search;a=a.hash;var k=u.state||{};return[k.idx,C({pathname:void 0===f?"/":f,search:void 0===l?"":l,hash:void 0===a?"":a,state:k.usr||null,key:k.key||"default"})]}function e(){if(t)c.call(t),t=null;else{var a=r.Pop,f=h(),l=f[0];f=f[1];if(c.length)if(null!=l){var k=q-l;k&&(t={action:a,location:f,retry:function(){p(-1*k)}},p(k))}else false?0:
void 0;else A(a)}}function x(a){var f=document.querySelector("base"),l="";f&&f.getAttribute("href")&&(f=m.location.href,l=f.indexOf("#"),l=-1===l?f:f.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,f){void 0===f&&(f=null);return C(_extends({pathname:d.pathname,hash:"",search:""},"string"===typeof a?J(a):a,{state:f,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];g.call({action:v,location:d})}function y(a,f){function l(){y(a,f)}var k=r.Push,n=z(a,f); false?
0:void 0;if(!c.length||(c.call({action:k,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(k)}}function w(a,f){function l(){w(a,f)}var k=r.Replace,n=z(a,f); false?0:void 0;c.length&&(c.call({action:k,location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(k))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",e);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&e()});var v=r.Pop;b=h();var q=b[0],d=b[1],g=F(),c=F();null==q&&(q=0,u.replaceState(_extends({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},
createHref:x,push:y,replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return g.push(a)},block:function(a){var f=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){f();c.length||m.removeEventListener("beforeunload",E)}}}};
function createMemoryHistory(b){function h(d,g){void 0===g&&(g=null);return C(_extends({pathname:t.pathname,search:"",hash:""},"string"===typeof d?J(d):d,{state:g,key:H()}))}function e(d,g,c){return!q.length||(q.call({action:d,location:g,retry:c}),!1)}function x(d,g){u=d;t=g;v.call({action:u,location:t})}function z(d,g){var c=r.Push,a=h(d,g); false?0:
void 0;e(c,a,function(){z(d,g)})&&(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,g){var c=r.Replace,a=h(d,g); false?0:void 0;e(c,a,function(){A(d,g)})&&(p[m]=a,x(c,a))}function y(d){var g=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[g];e(c,a,function(){y(d)})&&(m=g,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===
b?["/"]:b).map(function(d){var g=C(_extends({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); false?0:void 0;return g}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===
typeof d?d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"contacts":"iSVqa3hCwQZ3RD01HgOQ","mobile":"hyKOEHimvwkaa6IKy4z4","search_icon":"geemokTZXYCEjLVzr92Q","search":"XlW9ZAohXeZ8TULZksY3","focus-visible":"qFUlRA9zWjzNtnieW6tp","no_results":"B0SX5qglVxX9MPKoRVEK"});

/***/ }),

/***/ 418:
/***/ ((module) => {

"use strict";
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

/***/ 448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(294),m=__webpack_require__(418),r=__webpack_require__(840);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),

/***/ 935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(448);
} else {}


/***/ }),

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VK": () => (/* binding */ BrowserRouter),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* unused harmony exports HashRouter, NavLink, createSearchParams, unstable_HistoryRouter, useLinkClickHandler, useSearchParams */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(682);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(974);
/**
 * React Router DOM v6.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = (/* unused pure expression or super */ null && (["aria-current", "caseSensitive", "className", "end", "style", "to", "children"]));

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createBrowserHistory */ .lX)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useHref */ .oQ)(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPath */ .WU)(to);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(location) === (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = useRef(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = useMemo(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = useCallback((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j3": () => (/* binding */ Outlet),
/* harmony export */   "F0": () => (/* binding */ Router),
/* harmony export */   "oQ": () => (/* binding */ useHref),
/* harmony export */   "TH": () => (/* binding */ useLocation),
/* harmony export */   "s0": () => (/* binding */ useNavigate),
/* harmony export */   "WU": () => (/* binding */ useResolvedPath),
/* harmony export */   "V$": () => (/* binding */ useRoutes)
/* harmony export */ });
/* unused harmony exports MemoryRouter, Navigate, Route, Routes, UNSAFE_LocationContext, UNSAFE_NavigationContext, UNSAFE_RouteContext, createRoutesFromChildren, generatePath, matchPath, matchRoutes, renderMatches, resolvePath, useInRouterContext, useMatch, useNavigationType, useOutlet, useOutletContext, useParams */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(682);
/**
 * React Router v6.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? 0 : void 0;
  }
} ///////////////////////////////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////////////////////////////////

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */


const NavigationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (false) {}

const LocationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (false) {}

const RouteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  outlet: null,
  matches: []
});

if (false) {} ///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////////////////////


/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
   false ? 0 : void 0;
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    false ? 0 : invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = history__WEBPACK_IMPORTED_MODULE_1__/* .Action.Pop */ .aU.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   false ? 0 : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */
function useNavigationType() {
  return useContext(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext);
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/docs/en/v6/api#useoutletcontext
 */

function useOutletContext() {
  return useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet(context) {
  let outlet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {}

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (false) {}

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  Children.forEach(children, element => {
    if (! /*#__PURE__*/isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  false ? 0 : invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * The parameters that were parsed from the URL path.
 */

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  false ? 0 : invariant(false) : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  false ? 0 : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  false ? 0 : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */


function renderMatches(matches) {
  return _renderMatches(matches);
}

function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   false ? 0 : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    "(?:\\b|\\/|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     false ? 0 : void 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(to).pathname : to.pathname;
}

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(418),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 933:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "/style.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0971c96acc58a9760f3c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "playground:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/playground/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0,
/******/ 			245: 0,
/******/ 			781: 0,
/******/ 			35: 0,
/******/ 			685: 0,
/******/ 			745: 0,
/******/ 			651: 0,
/******/ 			421: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = (chunkId, promises) => {
/******/ 			var cssChunks = {"118":1,"405":1,"406":1,"415":1,"484":1,"503":1,"631":1,"864":1,"871":1,"931":1,"942":1,"959":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(() => {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, (e) => {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0,
/******/ 			245: 0,
/******/ 			781: 0,
/******/ 			35: 0,
/******/ 			685: 0,
/******/ 			745: 0,
/******/ 			651: 0,
/******/ 			421: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplayground"] = self["webpackChunkplayground"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(711);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(974);
// EXTERNAL MODULE: ./src/pages/Home/index.js + 1 modules
var Home = __webpack_require__(291);
// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(933);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
// EXTERNAL MODULE: ./src/components/Flamingo/db.js
var db = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/components/Flamingo/Navigation.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Navigation = function Navigation() {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      toggleSearch = _useState2[1];

  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 631).then(__webpack_require__.bind(__webpack_require__, 262));
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: flamingo/* base */.u
  }, /*#__PURE__*/react.createElement("img", {
    src: db/* nav.logo */.$n.logo
  }))), /*#__PURE__*/react.createElement("div", {
    className: "menu flex"
  }, db/* nav.menu.map */.$n.menu.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "menu-item",
      key: index
    }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      to: item.link
    }, item.text));
  }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: db/* nav.contact.link */.$n.contact.link,
    className: "button"
  }, db/* nav.contact.text */.$n.contact.text)), db/* nav.search */.$n.search === true ? /*#__PURE__*/react.createElement("div", {
    className: "search",
    onClick: function onClick() {
      return toggleSearch(!search);
    }
  }, /*#__PURE__*/react.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-search"
  }))) : null, search === true ? 'search is on' : ''));
};

/* harmony default export */ const Flamingo_Navigation = (Navigation);
// EXTERNAL MODULE: ./src/sections/Flamingo/db.js
var Flamingo_db = __webpack_require__(171);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Footer.js





var Footer = function Footer() {
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 415).then(__webpack_require__.bind(__webpack_require__, 415));
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "section text-center bg-cover bg-fixed",
    style: {
      backgroundImage: Flamingo_db/* footer.inquiry.image */.Mv.inquiry.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "social-media mb-m"
  }, Flamingo_db/* footer.inquiry.socialMedia.map */.Mv.inquiry.socialMedia.map(function (item, index) {
    return /*#__PURE__*/react.createElement("a", {
      href: item.link,
      key: index
    }, /*#__PURE__*/react.createElement("i", {
      className: item.icon
    }));
  })), /*#__PURE__*/react.createElement("h2", {
    className: "mb-m"
  }, Flamingo_db/* footer.inquiry.heading */.Mv.inquiry.heading), /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "button"
  }, Flamingo_db/* footer.inquiry.button.text */.Mv.inquiry.button.text)), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section bb-white"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menus"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo mb-default"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: Flamingo_db/* footer.menus.menu1.logo.link */.Mv.menus.menu1.logo.link
  }, /*#__PURE__*/react.createElement("img", {
    src: Flamingo_db/* footer.menus.menu1.logo.image */.Mv.menus.menu1.logo.image
  }))), /*#__PURE__*/react.createElement("p", null, Flamingo_db/* footer.menus.menu1.description */.Mv.menus.menu1.description), /*#__PURE__*/react.createElement("div", {
    className: "separator"
  })), /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, "Contact Us"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: Flamingo_db/* footer.menus.menu2.buttons.button1.link */.Mv.menus.menu2.buttons.button1.link,
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: Flamingo_db/* footer.menus.menu2.buttons.button1.icon */.Mv.menus.menu2.buttons.button1.icon
  }), Flamingo_db/* footer.menus.menu2.buttons.button1.text */.Mv.menus.menu2.buttons.button1.text)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("a", {
    href: Flamingo_db/* footer.menus.menu2.buttons.button2.link */.Mv.menus.menu2.buttons.button2.link,
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: Flamingo_db/* footer.menus.menu2.buttons.button2.icon */.Mv.menus.menu2.buttons.button2.icon
  }), Flamingo_db/* footer.menus.menu2.buttons.button2.text */.Mv.menus.menu2.buttons.button2.text)), /*#__PURE__*/react.createElement("div", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("i", {
    className: Flamingo_db/* footer.menus.menu2.buttons.button3.icon */.Mv.menus.menu2.buttons.button3.icon
  }), Flamingo_db/* footer.menus.menu2.buttons.button3.text */.Mv.menus.menu2.buttons.button3.text), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("i", {
    className: Flamingo_db/* footer.menus.menu2.buttons.button4.icon */.Mv.menus.menu2.buttons.button4.icon
  }), Flamingo_db/* footer.menus.menu2.buttons.button4.text */.Mv.menus.menu2.buttons.button4.text)), /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, Flamingo_db/* footer.menus.menu3.heading */.Mv.menus.menu3.heading), Flamingo_db/* footer.menus.menu3.buttons.map */.Mv.menus.menu3.buttons.map(function (button, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index
    }, /*#__PURE__*/react.createElement("a", {
      href: "#",
      className: "mb-default"
    }, button));
  })), /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-default"
  }, Flamingo_db/* footer.menus.menu4.heading */.Mv.menus.menu4.heading), Flamingo_db/* footer.menus.menu4.buttons.map */.Mv.menus.menu4.buttons.map(function (button, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index
    }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      to: button.link,
      className: "mb-default"
    }, button.text));
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue py-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "copyright mb-default flex"
  }, /*#__PURE__*/react.createElement("p", null, Flamingo_db/* footer.copyright.text */.Mv.copyright.text), /*#__PURE__*/react.createElement("a", {
    href: "#"
  }, Flamingo_db/* footer.copyright.buttons.button1.text */.Mv.copyright.buttons.button1.text), /*#__PURE__*/react.createElement("a", {
    href: "#"
  }, Flamingo_db/* footer.copyright.buttons.button2.text */.Mv.copyright.buttons.button2.text)), /*#__PURE__*/react.createElement("div", {
    className: "flex-between"
  }, /*#__PURE__*/react.createElement("p", null, Flamingo_db/* footer.copyright.description */.Mv.copyright.description), /*#__PURE__*/react.createElement("div", {
    className: "social-media-small"
  }, Flamingo_db/* footer.copyright.socialMedia.map */.Mv.copyright.socialMedia.map(function (item, index) {
    return /*#__PURE__*/react.createElement("a", {
      href: item.link,
      key: index
    }, /*#__PURE__*/react.createElement("i", {
      className: item.icon
    }));
  }))))));
};

/* harmony default export */ const Flamingo_Footer = (Footer);
// EXTERNAL MODULE: ./src/sections/Flamingo/Card.js
var Card = __webpack_require__(216);
;// CONCATENATED MODULE: ./src/sections/Flamingo/News.js




var News = function News() {
  return /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container text-center mb-l"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, "Latest News."), /*#__PURE__*/react.createElement("h5", null, "Check Out Some of Our News")), /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, Flamingo_db/* news.map */.r.map(function (item, index) {
    return /*#__PURE__*/react.createElement(Card/* default */.Z, {
      item: item,
      key: index
    });
  })));
};

/* harmony default export */ const Flamingo_News = (News);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Testimonials.js


var Testimonials = function Testimonials(_ref) {
  var testimonials = _ref.testimonials;
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(__webpack_require__, 118));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "columns-4 mb-l testimonials-section"
  }, testimonials.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column text-center",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "bg-blue p-m b-white"
    }, /*#__PURE__*/react.createElement("i", {
      className: "fas fa-quote-right mb-default icon-green"
    }), /*#__PURE__*/react.createElement("p", {
      className: "mb-m"
    }, item.description), /*#__PURE__*/react.createElement("div", {
      className: "mb-m"
    }, /*#__PURE__*/react.createElement("i", {
      className: "fas fa-star icon-star"
    }), /*#__PURE__*/react.createElement("i", {
      className: "fas fa-star icon-star"
    }), /*#__PURE__*/react.createElement("i", {
      className: "fas fa-star icon-star"
    }), /*#__PURE__*/react.createElement("i", {
      className: "fas fa-star icon-star"
    }), /*#__PURE__*/react.createElement("i", {
      className: "fas fa-star icon-star"
    })), /*#__PURE__*/react.createElement("div", {
      className: "avatar bg-cover mb-default",
      style: {
        backgroundImage: item.avatar
      }
    }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h4", {
      className: "mb-default"
    }, item.name), /*#__PURE__*/react.createElement("p", null, item.position))));
  }));
};

/* harmony default export */ const Flamingo_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./src/sections/Flamingo/About.js




var About = function About() {
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 405).then(__webpack_require__.bind(__webpack_require__, 405));
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "columns-2 mb-default"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.columns.column1.image */.jZ.columns.column1.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "mb-default"
  }, Flamingo_db/* about.columns.column1.heading */.jZ.columns.column1.heading), /*#__PURE__*/react.createElement("p", null, Flamingo_db/* about.columns.column1.description */.jZ.columns.column1.description))), /*#__PURE__*/react.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2-v"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.columns.column2.image */.jZ.columns.column2.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "mb-default"
  }, Flamingo_db/* about.columns.column2.heading */.jZ.columns.column2.heading), /*#__PURE__*/react.createElement("p", null, Flamingo_db/* about.columns.column2.description */.jZ.columns.column2.description))), /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: Flamingo_db/* about.columns.column3.image */.jZ.columns.column3.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/react.createElement("div", {
    className: "details"
  }, /*#__PURE__*/react.createElement("h4", {
    className: "mb-default"
  }, Flamingo_db/* about.columns.column3.heading */.jZ.columns.column3.heading), /*#__PURE__*/react.createElement("p", null, Flamingo_db/* about.columns.column3.description */.jZ.columns.column3.description)))))), /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, Flamingo_db/* about.details.map */.jZ.details.map(function (detail, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column p-default",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "width-80"
    }, /*#__PURE__*/react.createElement("h4", {
      className: "mb-default"
    }, detail.heading), /*#__PURE__*/react.createElement("p", null, detail.description)));
  })));
};

/* harmony default export */ const Flamingo_About = (About);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Works.js




var Works = function Works() {
  (0,react.useEffect)(function () {
    __webpack_require__.e(/* import() */ 484).then(__webpack_require__.bind(__webpack_require__, 484));
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "works"
  }, Flamingo_db/* works.map */._B.map(function (work, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "work bg-cover",
      style: {
        backgroundImage: work.image
      },
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "overlay"
    }, /*#__PURE__*/react.createElement("h4", null, work.name)));
  }));
};

/* harmony default export */ const Flamingo_Works = (Works);
// EXTERNAL MODULE: ./src/sections/Flamingo/Services.js
var Services = __webpack_require__(446);
;// CONCATENATED MODULE: ./src/components/Flamingo/Services2.js



var Services2 = function Services2() {
  return /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, db/* services.map */.uZ.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column bg-grey p-m b-hover",
      key: index
    }, /*#__PURE__*/react.createElement("i", {
      className: item.icon
    }), /*#__PURE__*/react.createElement("h3", null, item.heading), /*#__PURE__*/react.createElement("div", {
      className: "separator"
    }), /*#__PURE__*/react.createElement("div", {
      className: "width-80"
    }, /*#__PURE__*/react.createElement("p", null, item.description)));
  }));
};

/* harmony default export */ const Flamingo_Services2 = (Services2);
;// CONCATENATED MODULE: ./src/components/Flamingo/Customers.js


var Customers = function Customers(_ref) {
  var customers = _ref.customers;
  return /*#__PURE__*/react.createElement("div", {
    className: "flex-between"
  }, customers.map(function (item, index) {
    return /*#__PURE__*/react.createElement("i", {
      className: item,
      key: index
    });
  }));
};

/* harmony default export */ const Flamingo_Customers = (Customers);
// EXTERNAL MODULE: ./src/pages/Flamingo/db.js
var pages_Flamingo_db = __webpack_require__(356);
;// CONCATENATED MODULE: ./src/pages/Flamingo/Home.js











var FlamingoHome = function FlamingoHome() {
  return /*#__PURE__*/react.createElement("div", {
    className: "flamingo"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header bg-black section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container bg-cover",
    style: {
      backgroundImage: pages_Flamingo_db/* home.header.image */.LE.header.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "width-50 mb-l"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "mb-m"
  }, pages_Flamingo_db/* home.header.description */.LE.header.description), /*#__PURE__*/react.createElement("h1", {
    className: "mb-m"
  }, pages_Flamingo_db/* home.header.heading */.LE.header.heading), /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "button"
  }, pages_Flamingo_db/* home.header.button */.LE.header.button)), /*#__PURE__*/react.createElement(Flamingo_Services2, null))), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("span", {
    className: "separator"
  }), pages_Flamingo_db/* home.services.heading */.LE.services.heading), /*#__PURE__*/react.createElement("h5", {
    className: "mb-l"
  }, pages_Flamingo_db/* home.services.description */.LE.services.description), /*#__PURE__*/react.createElement(Services/* default */.Z, null))), /*#__PURE__*/react.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container flex-between mb-l"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("span", {
    className: "separator"
  }), pages_Flamingo_db/* home.works.heading */.LE.works.heading, ' '), /*#__PURE__*/react.createElement("h5", null, pages_Flamingo_db/* home.works.description */.LE.works.description)), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: pages_Flamingo_db/* home.works.button.link */.LE.works.button.link,
    className: "button"
  }, pages_Flamingo_db/* home.works.button.text */.LE.works.button.text)), /*#__PURE__*/react.createElement(Flamingo_Works, null)), /*#__PURE__*/react.createElement("div", {
    className: "bg-blue section about-section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("span", {
    className: "separator"
  }), pages_Flamingo_db/* home.about.heading */.LE.about.heading), /*#__PURE__*/react.createElement("h5", {
    className: "mb-m"
  }, pages_Flamingo_db/* home.about.description */.LE.about.description), /*#__PURE__*/react.createElement(Flamingo_About, null))), /*#__PURE__*/react.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container mb-m"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/react.createElement("span", {
    className: "separator"
  }), pages_Flamingo_db/* home.testimonials.heading */.LE.testimonials.heading), /*#__PURE__*/react.createElement("h5", null, pages_Flamingo_db/* home.testimonials.description */.LE.testimonials.description)), /*#__PURE__*/react.createElement(Flamingo_Testimonials, {
    testimonials: pages_Flamingo_db/* testimonials */.pb
  }), /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement(Flamingo_Customers, {
    customers: pages_Flamingo_db/* customers */.J6
  }))), /*#__PURE__*/react.createElement(Flamingo_News, null));
};

/* harmony default export */ const Flamingo_Home = (FlamingoHome);
// EXTERNAL MODULE: ./src/pages/Flamingo/Services.js
var Flamingo_Services = __webpack_require__(31);
// EXTERNAL MODULE: ./src/pages/Flamingo/About.js + 2 modules
var pages_Flamingo_About = __webpack_require__(898);
// EXTERNAL MODULE: ./src/pages/Flamingo/Works.js
var pages_Flamingo_Works = __webpack_require__(586);
// EXTERNAL MODULE: ./src/pages/Flamingo/Contact.js + 1 modules
var Contact = __webpack_require__(248);
// EXTERNAL MODULE: ./src/pages/Flamingo/Blog.js
var Blog = __webpack_require__(372);
// EXTERNAL MODULE: ./src/pages/Flamingo/Article.js
var Article = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Flamingo/dbmenu.js
var menu = [{
  name: 'Asia',
  description: 'Asia express'
}, {
  name: 'Europe',
  description: 'Europe express'
}, {
  name: 'Africa',
  description: 'Welcome to Africa'
}];
;// CONCATENATED MODULE: ./src/components/Flamingo/Menu.js
function Menu_slicedToArray(arr, i) { return Menu_arrayWithHoles(arr) || Menu_iterableToArrayLimit(arr, i) || Menu_unsupportedIterableToArray(arr, i) || Menu_nonIterableRest(); }

function Menu_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Menu_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Menu_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Menu_arrayLikeToArray(o, minLen); }

function Menu_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Menu_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Menu_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Menu = function Menu() {
  var _useState = (0,react.useState)(0),
      _useState2 = Menu_slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = Menu_slicedToArray(_useState3, 2),
      openMenu = _useState4[0],
      toggleMenu = _useState4[1];

  var handleClick = function handleClick(index) {
    setIndex(index);
    toggleMenu(false);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, openMenu === true ? /*#__PURE__*/react.createElement("div", {
    className: "menu"
  }, menu.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index,
      onClick: function onClick() {
        return handleClick(index);
      }
    }, item.name);
  })) : null, /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      return toggleMenu(!openMenu);
    }
  }, "Open menu"), /*#__PURE__*/react.createElement("div", {
    className: "current-item"
  }, /*#__PURE__*/react.createElement("h2", null, menu[currentIndex].name), /*#__PURE__*/react.createElement("p", null, menu[currentIndex].description))));
};

/* harmony default export */ const Flamingo_Menu = (Menu);
;// CONCATENATED MODULE: ./src/pages/Flamingo/index.js














var routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Flamingo_Home, null)
}, {
  path: "services/",
  element: /*#__PURE__*/react.createElement(Flamingo_Services/* default */.Z, null)
}, {
  path: "about/",
  element: /*#__PURE__*/react.createElement(pages_Flamingo_About/* default */.Z, null)
}, {
  path: 'works/',
  element: /*#__PURE__*/react.createElement(pages_Flamingo_Works/* default */.Z, null)
}, {
  path: 'contact/',
  element: /*#__PURE__*/react.createElement(Contact/* default */.Z, null)
}, {
  path: 'blog/',
  element: /*#__PURE__*/react.createElement(Blog/* default */.Z, null)
}, {
  path: 'article/',
  element: /*#__PURE__*/react.createElement(Article/* default */.Z, null)
}];

var Flamingo = function Flamingo() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Poppins:400,800', 'Roboto:400']
      }
    });
    __webpack_require__.e(/* import() */ 503).then(__webpack_require__.bind(__webpack_require__, 503));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(Flamingo_Navigation, null), /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null), /*#__PURE__*/react.createElement(Flamingo_Footer, null), /*#__PURE__*/react.createElement(Flamingo_Menu, null));
};

/* harmony default export */ const pages_Flamingo = (Flamingo);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__(61);
;// CONCATENATED MODULE: ./src/constants/travel.js
var isProduction = "production" === 'production';

var base = isProduction ? "".concat(constants/* base */.u, "travel/") : '/travel/';
var PUBLIC_URL = isProduction ? "".concat(constants/* base */.u, "/static/travel") : '/travel';
;// CONCATENATED MODULE: ./src/pages/Travel/db.js

var continents = [{
  name: 'Asia',
  countries: [{
    flag: "url(".concat(PUBLIC_URL, "/flags/China.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/China.jpg)"),
    name: 'China',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Beijing.jpg)"),
      name: 'Beijing'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Shanghai.jpg)"),
      name: 'Shanghai'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/India.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/India.jpg)"),
    name: 'India',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Mumbai.jpg)"),
      name: 'Mumbai'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Chenai.jpg)"),
      name: 'Chenai'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/Indonezia.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Indonezia.jpg)"),
    name: 'Indonezia',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Surabaya.jpg)"),
      name: 'Surabaya'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Bekasi.jpg)"),
      name: '	Bekasi'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/Pakistan.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Pakistan.jpg)"),
    name: 'Pakistan',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Karachi.jpg)"),
      name: 'Karachi'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Faisalabad.jpg)"),
      name: 'Faisalabad'
    }]
  }]
}, {
  name: 'Europe',
  countries: [{
    flag: "url(".concat(PUBLIC_URL, "/flags/Romania.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Romania.jpg)"),
    name: 'Romania',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Constantza.jpg)"),
      name: 'Constanta'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Vaslui.jpg)"),
      name: 'Vaslui'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/France.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/France.jpg)"),
    name: 'France',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Paris.jpg)"),
      name: 'Paris'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Marseille.jpg)"),
      name: 'Marseille'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/Spain.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Spain.jpg)"),
    name: 'Spain',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Madrid.jpg)"),
      name: 'Madrid'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Barcelona.jpg)"),
      name: 'Barcelona'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/Germany.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Germany.jpg)"),
    name: 'Germany',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Stuttgart.jpg)"),
      name: 'Stuttgart'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Barcelona.jpg)"),
      name: 'Barcelona'
    }]
  }]
}, {
  name: 'Australia and Oceania',
  countries: [{
    flag: "url(".concat(PUBLIC_URL, "/flags/Australia.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Australia.jpg)"),
    name: 'Australia',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Sydney.jpg)"),
      name: 'Sydney'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Melbourne.jpg)"),
      name: 'Melbourne'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/NewZeeland.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/NewZeeland.jpg)"),
    name: 'New Zeeland',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Auckland.jpg)"),
      name: 'Auckland'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Wellington.jpg)"),
      name: 'Wellington'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/Fiji.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/Fiji.jpg)"),
    name: 'Fiji',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Suva.jpg)"),
      name: 'Suva'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Nadi.jpg)"),
      name: 'Nadi'
    }]
  }, {
    flag: "url(".concat(PUBLIC_URL, "/flags/NewGuinea.jpg)"),
    image: "url(".concat(PUBLIC_URL, "/images/NewGuinea.jpg)"),
    name: 'Papua New Guinea',
    cities: [{
      image: "url(".concat(PUBLIC_URL, "/images/Lae.jpg)"),
      name: 'Lae'
    }, {
      image: "url(".concat(PUBLIC_URL, "/images/Madang.jpg)"),
      name: 'Madang'
    }]
  }]
}];
;// CONCATENATED MODULE: ./src/pages/Travel/Home.js
function Home_slicedToArray(arr, i) { return Home_arrayWithHoles(arr) || Home_iterableToArrayLimit(arr, i) || Home_unsupportedIterableToArray(arr, i) || Home_nonIterableRest(); }

function Home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Home_arrayLikeToArray(o, minLen); }

function Home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Home_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var TravelHome = function TravelHome() {
  var _useState = (0,react.useState)(0),
      _useState2 = Home_slicedToArray(_useState, 2),
      continent = _useState2[0],
      setContinent = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = Home_slicedToArray(_useState3, 2),
      country = _useState4[0],
      setCountry = _useState4[1];

  var selectCountry = function selectCountry(continentIndex, countryIndex) {
    setContinent(continentIndex);
    setCountry(countryIndex);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "travel",
    style: {
      backgroundImage: continents[continent].countries[country].image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "sidebar"
  }, continents.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "continents",
      key: index
    }, /*#__PURE__*/react.createElement("h1", null, item.name), item.countries.map(function (c, key) {
      return /*#__PURE__*/react.createElement("div", {
        key: key
      }, index === continent && key === country ? /*#__PURE__*/react.createElement("h2", {
        className: "country"
      }, /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundImage: c.flag
        }
      }), c.name) : /*#__PURE__*/react.createElement("h3", {
        className: "country",
        onClick: function onClick() {
          return selectCountry(index, key);
        }
      }, /*#__PURE__*/react.createElement("span", {
        style: {
          backgroundImage: c.flag
        }
      }), c.name));
    }));
  })), /*#__PURE__*/react.createElement("div", {
    className: "main"
  }, /*#__PURE__*/react.createElement("h2", null, "Top Cities"), /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, continents[continent].countries[country].cities.map(function (city, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column city",
      key: index
    }, /*#__PURE__*/react.createElement("h3", null, city.name), /*#__PURE__*/react.createElement("div", {
      className: "city-image",
      style: {
        backgroundImage: city.image
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "fill"
    })));
  }))));
};

/* harmony default export */ const Travel_Home = (TravelHome);
;// CONCATENATED MODULE: ./src/pages/Travel/index.js





var Travel_routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Travel_Home, null)
}];

var Travel = function Travel() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Varela+Round']
      }
    });
    __webpack_require__.e(/* import() */ 959).then(__webpack_require__.bind(__webpack_require__, 631));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null));
};

/* harmony default export */ const pages_Travel = (Travel);
;// CONCATENATED MODULE: ./src/constants/houses.js
var houses_isProduction = "production" === 'production';

var houses_base = houses_isProduction ? "".concat(constants/* base */.u, "houses/") : '/houses/';
var houses_PUBLIC_URL = houses_isProduction ? "".concat(constants/* base */.u, "/static/houses") : '/houses';
;// CONCATENATED MODULE: ./src/pages/Houses/db.js

var home = {
  header: {
    logo: "".concat(houses_PUBLIC_URL, "/logo.png"),
    image: "url(".concat(houses_PUBLIC_URL, "/header.jpg)"),
    heading: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.'
  },
  houses: [{
    image: "url(".concat(houses_PUBLIC_URL, "/house1.jpg)"),
    name: 'House no.1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: [{
      name: 'rooms',
      value: '2'
    }, {
      name: 'space',
      value: '50mp'
    }, {
      name: 'floors',
      value: '0'
    }],
    rooms: [{
      image: "url(".concat(houses_PUBLIC_URL, "/room1.jpg)"),
      name: 'Inside a modern wooden house constructed in Oulu in Finland'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room2.jpg)"),
      name: 'Inside a modern log home situated in Oulu in Finland and delivered'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room3.jpg)"),
      name: 'Cozy atmosphere of a log home'
    }]
  }, {
    image: "url(".concat(houses_PUBLIC_URL, "/house2.jpg)"),
    name: 'House no.2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: [{
      name: 'rooms',
      value: '5'
    }, {
      name: 'space',
      value: '110mp'
    }, {
      name: 'floors',
      value: '2'
    }],
    rooms: [{
      image: "url(".concat(houses_PUBLIC_URL, "/room4.jpg)"),
      name: 'Inside a Swedish style wooden home'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room5.jpg)"),
      name: 'Inside a chalet in Vosges Mountains (France)'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room6.jpg)"),
      name: 'Inside an ecological wooden home in France'
    }]
  }, {
    image: "url(".concat(houses_PUBLIC_URL, "/house3.jpg)"),
    name: 'House no.3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: [{
      name: 'rooms',
      value: '6'
    }, {
      name: 'space',
      value: '140mp'
    }, {
      name: 'floors',
      value: '1'
    }],
    rooms: [{
      image: "url(".concat(houses_PUBLIC_URL, "/room7.jpg)"),
      name: 'Inside a Scandinavian style luxury log home'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room8.jpg)"),
      name: 'A cozy bedroom: quality living in log homes'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room9.jpg)"),
      name: 'Inside a log house produced in Finland'
    }]
  }, {
    image: "url(".concat(houses_PUBLIC_URL, "/house4.jpg)"),
    name: 'House no.4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: [{
      name: 'rooms',
      value: '3'
    }, {
      name: 'space',
      value: '80mp'
    }, {
      name: 'floors',
      value: '1'
    }],
    rooms: [{
      image: "url(".concat(houses_PUBLIC_URL, "/room10.jpg)"),
      name: 'Inside a log home from Finland'
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room11.jpg)"),
      name: 'Inside a Finnish log home '
    }, {
      image: "url(".concat(houses_PUBLIC_URL, "/room12.jpg)"),
      name: 'Round log home made of kelo located in Swedish Lapland'
    }]
  }]
};
;// CONCATENATED MODULE: ./src/pages/Houses/House.js


var House = function House(_ref) {
  var house = _ref.house,
      onClose = _ref.onClose,
      onPrev = _ref.onPrev,
      onNext = _ref.onNext;
  return /*#__PURE__*/react.createElement("div", {
    className: "house-modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "main bg-cover",
    style: {
      backgroundImage: house.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react.createElement("h1", null, house.name), /*#__PURE__*/react.createElement("p", null, house.description)), /*#__PURE__*/react.createElement("div", {
    className: "arrow-prev",
    onClick: function onClick() {
      return onPrev();
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/react.createElement("div", {
    className: "arrow-next",
    onClick: function onClick() {
      return onNext();
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-chevron-right"
  })), /*#__PURE__*/react.createElement("div", {
    className: "close",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/react.createElement("i", {
    className: "far fa-times-circle"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "sidebar"
  }, /*#__PURE__*/react.createElement("h2", null, "Rooms"), house.rooms.map(function (room, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "room",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "image bg-cover",
      style: {
        backgroundImage: room.image
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "pt-50"
    })), /*#__PURE__*/react.createElement("h3", null, room.name));
  }))));
};

/* harmony default export */ const Houses_House = (House);
;// CONCATENATED MODULE: ./src/pages/Houses/Home.js
function Houses_Home_slicedToArray(arr, i) { return Houses_Home_arrayWithHoles(arr) || Houses_Home_iterableToArrayLimit(arr, i) || Houses_Home_unsupportedIterableToArray(arr, i) || Houses_Home_nonIterableRest(); }

function Houses_Home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Houses_Home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Houses_Home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Houses_Home_arrayLikeToArray(o, minLen); }

function Houses_Home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Houses_Home_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Houses_Home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Home_Home = function Home() {
  var _useState = (0,react.useState)(null),
      _useState2 = Houses_Home_slicedToArray(_useState, 2),
      houseIndex = _useState2[0],
      setHouseIndex = _useState2[1];

  return /*#__PURE__*/react.createElement("div", {
    className: "houses"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header bg-cover",
    style: {
      backgroundImage: home.header.image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: home.header.logo
  })), /*#__PURE__*/react.createElement("h1", null, home.header.heading)), /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, home.houses.map(function (house, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column house",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "bg-cover",
      style: {
        backgroundImage: house.image
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "pt-50"
    })), /*#__PURE__*/react.createElement("div", {
      className: "details"
    }, /*#__PURE__*/react.createElement("h2", null, house.name), /*#__PURE__*/react.createElement("p", null, house.description), /*#__PURE__*/react.createElement("div", {
      className: "hover"
    }, /*#__PURE__*/react.createElement("span", {
      className: "button",
      onClick: function onClick() {
        return setHouseIndex(index);
      }
    }, "See house"), /*#__PURE__*/react.createElement("div", null, house.details.map(function (item, key) {
      return /*#__PURE__*/react.createElement("span", {
        key: key
      }, item.name, ": ", item.value);
    })))));
  })), houseIndex !== null ? /*#__PURE__*/react.createElement(Houses_House, {
    house: home.houses[houseIndex],
    onClose: function onClose() {
      return setHouseIndex(null);
    },
    onPrev: function onPrev() {
      return setHouseIndex(houseIndex === 0 ? home.houses.length - 1 : houseIndex - 1);
    },
    onNext: function onNext() {
      return setHouseIndex(houseIndex === home.houses.length - 1 ? 0 : houseIndex + 1);
    }
  }) : null);
};

/* harmony default export */ const Houses_Home = (Home_Home);
;// CONCATENATED MODULE: ./src/pages/Houses/index.js





var Houses_routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Houses_Home, null)
}];

var Houses = function Houses() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Montserrat+Alternates:400,700']
      }
    });
    __webpack_require__.e(/* import() */ 931).then(__webpack_require__.bind(__webpack_require__, 931));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null));
};

/* harmony default export */ const pages_Houses = (Houses);
;// CONCATENATED MODULE: ./src/constants/forest.js
var forest_isProduction = "production" === 'production';

var forest_base = forest_isProduction ? "".concat(constants/* base */.u, "forest/") : '/forest/';
var forest_PUBLIC_URL = forest_isProduction ? "".concat(constants/* base */.u, "/static/forest") : '/forest';
;// CONCATENATED MODULE: ./src/components/Forest/Header.js


var Header = function Header(_ref) {
  var image = _ref.image,
      logo = _ref.logo,
      heading = _ref.heading,
      description = _ref.description,
      socialMedia = _ref.socialMedia;
  return /*#__PURE__*/react.createElement("div", {
    className: "bg-cover header",
    style: {
      backgroundImage: image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo
  })), /*#__PURE__*/react.createElement("h1", null, heading), /*#__PURE__*/react.createElement("p", null, description), /*#__PURE__*/react.createElement("div", {
    className: "social-media"
  }, socialMedia.map(function (item, index) {
    return /*#__PURE__*/react.createElement("a", {
      href: item.link,
      key: index
    }, /*#__PURE__*/react.createElement("i", {
      className: item.icon
    }));
  }))));
};

/* harmony default export */ const Forest_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Forest/Info.js


var Info = function Info(_ref) {
  var heading = _ref.heading,
      description = _ref.description;
  return /*#__PURE__*/react.createElement("div", {
    className: "info-component"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("h2", null, heading), /*#__PURE__*/react.createElement("p", null, description)));
};

/* harmony default export */ const Forest_Info = (Info);
;// CONCATENATED MODULE: ./src/components/Forest/Columns3.js


var Columns3 = function Columns3(_ref) {
  var columns = _ref.columns;
  return /*#__PURE__*/react.createElement("div", {
    className: "columns-3"
  }, columns.map(function (column, index) {
    return /*#__PURE__*/react.createElement(Column, {
      image: column.image,
      caption: column.caption,
      key: index
    });
  }));
};

var Column = function Column(_ref2) {
  var image = _ref2.image,
      caption = _ref2.caption;
  return /*#__PURE__*/react.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bg-cover preview",
    style: {
      backgroundImage: image
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "caption"
  }, /*#__PURE__*/react.createElement("p", null, caption)));
};

/* harmony default export */ const Forest_Columns3 = (Columns3);
;// CONCATENATED MODULE: ./src/components/Forest/Columns2.js


var Columns2 = function Columns2(_ref) {
  var heading = _ref.heading,
      paragraphs = _ref.paragraphs,
      image = _ref.image;
  return /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "column"
  }, /*#__PURE__*/react.createElement("h2", null, heading), paragraphs.map(function (p, index) {
    return /*#__PURE__*/react.createElement("p", {
      key: index
    }, p);
  })), /*#__PURE__*/react.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: image
    }
  })));
};

/* harmony default export */ const Forest_Columns2 = (Columns2);
;// CONCATENATED MODULE: ./src/components/Forest/Testimonials.js


var Testimonials_Testimonials = function Testimonials(_ref) {
  var image = _ref.image,
      items = _ref.items;
  return /*#__PURE__*/react.createElement("div", {
    className: "testimonials bg-cover",
    style: {
      backgroundImage: image
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "columns-2"
  }, items.map(function (item, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "column",
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "bg-white"
    }, /*#__PURE__*/react.createElement("p", null, item.description), /*#__PURE__*/react.createElement("h3", null, item.name), /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("em", null, item.position))));
  }))));
};

/* harmony default export */ const Forest_Testimonials = (Testimonials_Testimonials);
;// CONCATENATED MODULE: ./src/components/Forest/Footer.js


var Footer_Footer = function Footer(_ref) {
  var copyright = _ref.copyright;
  return /*#__PURE__*/react.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react.createElement("p", null, copyright));
};

/* harmony default export */ const Forest_Footer = (Footer_Footer);
;// CONCATENATED MODULE: ./src/pages/Forest/db.js

var db_home = {
  header: {
    image: "url(".concat(forest_PUBLIC_URL, "/header.jpg)"),
    logo: "".concat(forest_PUBLIC_URL, "/logo.png"),
    heading: 'Wanderlust',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci accumsan, tincidunt velit eget, consequat ante. Duis in nisi ultrices, eleifend velit sit amet, venenatis mi. Sed sed nisi orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    socialMedia: [{
      icon: 'fab fa-facebook-f',
      link: 'https://facebook.com'
    }, {
      icon: 'fab fa-instagram',
      link: 'https://instagram.com'
    }, {
      icon: 'fab fa-pinterest-p',
      link: 'https://pinterest.com'
    }]
  },
  content: [{
    type: 'info',
    heading: 'a unique 1 week adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus. Duis viverra elit et dolor lobortis, et egestas erat vestibulum.'
  }, {
    type: 'columns-3',
    columns: [{
      image: "url(".concat(forest_PUBLIC_URL, "/forest1.jpg)"),
      caption: 'Lorem ipsum dolor sit amet'
    }, {
      image: "url(".concat(forest_PUBLIC_URL, "/forest2.jpg)"),
      caption: 'Lorem ipsum dolor sit amet'
    }, {
      image: "url(".concat(forest_PUBLIC_URL, "/forest3.jpg)"),
      caption: 'Lorem ipsum dolor sit amet'
    }]
  }, {
    type: 'info',
    heading: 'our satisfied adventurers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus. Duis viverra elit et dolor lobortis, et egestas erat vestibulum.'
  }, {
    type: 'testimonials',
    image: "url(".concat(forest_PUBLIC_URL, "/content1.jpg)"),
    items: [{
      description: 'Nulla sed ultrices ex. Nulla neque sem, convallis ut lorem sit amet, interdum tristique mauris. Phasellus et turpis ornare, congue dui nec, condimentum mi. Maecenas id elit id eros mattis vulputate. Nunc venenatis convallis lorem condimentum facilisis. In sagittis elit elit. Quisque commodo, nibh a elementum finibus, massa nunc tempor nisl, et rhoncus nibh augue a nisl.',
      name: 'John Doe',
      position: 'Web developer'
    }, {
      description: 'Maecenas in facilisis velit, vitae sollicitudin risus. Donec mollis, ante mollis tempus suscipit, enim nibh dictum lacus, ac tempor leo mi sed ante. Morbi non nulla eu mauris scelerisque venenatis quis at est. Aliquam eleifend ante vehicula ipsum vehicula, non imperdiet lectus suscipit. Quisque posuere malesuada erat, id luctus lacus luctus in.',
      name: 'Mark Beans',
      position: 'Web developer senior'
    }]
  }, {
    type: 'columns-2',
    heading: 'book your next adventure now',
    paragraphs: ['Nullam porta massa arcu, id elementum diam sagittis vel. Pellentesque ac enim metus. Nullam ut augue vel metus vehicula egestas nec sit amet sapien. Donec tempor pellentesque semper. Sed a metus interdum, pulvinar ipsum mattis, suscipit est. Donec vulputate eros ex, eget pretium nisl maximus ut. Cras venenatis justo felis, vel malesuada erat porttitor in. Suspendisse non ultrices velit.', 'Maecenas massa nulla, aliquet a mi eget, porttitor interdum tortor. Nunc purus arcu, bibendum eu arcu et, maximus auctor nisi. Curabitur maximus auctor ex eu bibendum. Nullam scelerisque luctus velit, ut posuere nibh ultrices sit amet.'],
    image: "url(".concat(forest_PUBLIC_URL, "/content2.jpg)")
  }],
  footer: {
    copyright: 'Copyright A. Mocanu 2022'
  }
};
;// CONCATENATED MODULE: ./src/pages/Forest/Home.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var ForestHome = function ForestHome() {
  return /*#__PURE__*/react.createElement("div", {
    className: "forest"
  }, /*#__PURE__*/react.createElement(Forest_Header, db_home.header), db_home.content.map(function (section, key) {
    switch (section.type) {
      case 'info':
        return /*#__PURE__*/react.createElement(Forest_Info, _extends({
          key: key
        }, section));

      case 'columns-3':
        return /*#__PURE__*/react.createElement(Forest_Columns3, {
          key: key,
          columns: section.columns
        });

      case 'testimonials':
        return /*#__PURE__*/react.createElement(Forest_Testimonials, _extends({
          key: key
        }, section));

      case 'columns-2':
        return /*#__PURE__*/react.createElement(Forest_Columns2, _extends({
          key: key
        }, section));

      default:
        return null;
    }
  }), /*#__PURE__*/react.createElement(Forest_Footer, {
    copyright: db_home.footer.copyright
  }));
};

/* harmony default export */ const Forest_Home = (ForestHome);
;// CONCATENATED MODULE: ./src/pages/Forest/index.js





var Forest_routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Forest_Home, null)
}];

var Forest = function Forest() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Open+Sans:400,700']
      }
    });
    __webpack_require__.e(/* import() */ 864).then(__webpack_require__.bind(__webpack_require__, 864));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null));
};

/* harmony default export */ const pages_Forest = (Forest);
;// CONCATENATED MODULE: ./src/constants/contacts.js
var contacts_isProduction = "production" === 'production';

var contacts_base = contacts_isProduction ? "".concat(constants/* base */.u, "contacts/") : '/contacts/';
var contacts_PUBLIC_URL = contacts_isProduction ? "".concat(constants/* base */.u, "/static/contacts") : '/contacts';
;// CONCATENATED MODULE: ./src/components/Contacts/button.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Contacts_button = ({"button":"oJOJRVqPFk83ZoxbValE","button_red":"Vr7GZ6wY3snMGTKs0z2V","button_grey":"CdaU3IklkiXhs6PHKBcN"});
;// CONCATENATED MODULE: ./src/components/Contacts/Button.js



var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      children = _ref.children,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return type === 'red' ? /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: Contacts_button.button_red
  }, children) : type === 'grey' ? /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: Contacts_button.button_grey
  }, children) : /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: Contacts_button.button
  }, children);
};

/* harmony default export */ const Contacts_Button = (Button);
;// CONCATENATED MODULE: ./src/components/Contacts/card.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const card = ({"card":"H23xllYBkoPLaRPvqO43","blue":"e_g9QfI779TsMopoMip9","red":"UXwAGvV7K6XZesih9GQS","yellow":"sLb9LQMDKQLCWX_2UE4X","green":"VI9gc6Jftv6LoiM8jyra","image":"EtjHwK0kuE6CiZkIiX5u","details":"E7SpzyAj_y62uWJvEDRC","button":"qmdkeIa3N6OCoZXkHQLl"});
;// CONCATENATED MODULE: ./src/components/Contacts/Card.js





var Card_Card = function Card(_ref) {
  var name = _ref.name,
      image = _ref.image,
      city = _ref.city,
      country = _ref.country,
      color = _ref.color;
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(card.card, " ").concat(card[color])
  }, /*#__PURE__*/react.createElement("div", {
    className: card.details
  }, /*#__PURE__*/react.createElement("h2", null, name), /*#__PURE__*/react.createElement("p", null, city), /*#__PURE__*/react.createElement("p", null, country), /*#__PURE__*/react.createElement("div", {
    className: card.button
  }, /*#__PURE__*/react.createElement(Contacts_Button, {
    type: "grey",
    onClick: function onClick() {
      return console.log('ceva');
    }
  }, "Show more"))), /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundImage: image
    },
    className: card.image
  }));
};

/* harmony default export */ const Contacts_Card = (Card_Card);
;// CONCATENATED MODULE: ./src/pages/Contacts/db.js

var contacts = [{
  name: 'John Smith',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact1.jpg)"),
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  job: 'Web developer',
  adress: 'Main street nb.9',
  city: 'Craiova',
  country: 'Romania',
  birthday: 1994
}, {
  name: 'John Doe',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact2.jpg)"),
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  job: 'Front-end',
  adress: 'Main street nb.16',
  city: 'Iasi',
  country: 'Romania',
  birthday: 1991
}, {
  name: 'Jane Dam',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact3.jpg)"),
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  adress: 'Second street nb.54',
  city: 'Suceava',
  country: 'Romania',
  birthday: 1989
}, {
  name: 'Michael Das',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact4.jpg)"),
  socialMedia: {
    instagram: 'https://instagram.com'
  },
  job: 'Designer',
  adress: 'Ralph Dimson nb.23',
  city: 'Constanta',
  country: 'Romania'
}, {
  name: 'Mikaela Roberta',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact5.jpg)"),
  socialMedia: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com'
  },
  city: 'Focsani',
  country: 'Romania'
}, {
  name: 'Duncan Smith',
  image: "url(".concat(contacts_PUBLIC_URL, "/contact6.jpg)"),
  socialMedia: {
    facebook: 'https://facebook.com'
  },
  city: 'Iasi',
  country: 'Romania',
  birthday: 1985
}];
// EXTERNAL MODULE: ./src/pages/Contacts/style.scss
var style = __webpack_require__(130);
;// CONCATENATED MODULE: ./src/pages/Contacts/Home.js
function Home_extends() { Home_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Home_extends.apply(this, arguments); }

function Contacts_Home_slicedToArray(arr, i) { return Contacts_Home_arrayWithHoles(arr) || Contacts_Home_iterableToArrayLimit(arr, i) || Contacts_Home_unsupportedIterableToArray(arr, i) || Contacts_Home_nonIterableRest(); }

function Contacts_Home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Contacts_Home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Contacts_Home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Contacts_Home_arrayLikeToArray(o, minLen); }

function Contacts_Home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Contacts_Home_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Contacts_Home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ContactsHome = function ContactsHome() {
  var colors = ['blue', 'yellow', 'red', 'green'];

  var _useState = (0,react.useState)(false),
      _useState2 = Contacts_Home_slicedToArray(_useState, 2),
      isSearchVisible = _useState2[0],
      toggleSearch = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = Contacts_Home_slicedToArray(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var filteredContacts = contacts.filter(function (contact) {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.city.toLowerCase().includes(searchValue.toLowerCase()) || contact.country.toLowerCase().includes(searchValue.toLowerCase());
  });

  var handleSearch = function handleSearch() {
    if (isSearchVisible === true) {
      setSearchValue('');
    }

    toggleSearch(!isSearchVisible);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: style["default"].contacts
  }, /*#__PURE__*/react.createElement("div", {
    className: style["default"].mobile
  }, /*#__PURE__*/react.createElement("h1", null, "Contacts"), /*#__PURE__*/react.createElement("h1", {
    className: style["default"].search_icon,
    onClick: function onClick() {
      return handleSearch();
    }
  }, isSearchVisible === true ? /*#__PURE__*/react.createElement("i", {
    className: "fas fa-times"
  }) : /*#__PURE__*/react.createElement("i", {
    className: "fas fa-search"
  })), isSearchVisible === true ? /*#__PURE__*/react.createElement("div", {
    className: style["default"].search
  }, /*#__PURE__*/react.createElement("input", {
    autoFocus: true,
    onChange: function onChange(event) {
      return setSearchValue(event.target.value);
    },
    type: "text",
    placeholder: "Search Contacts"
  })) : null, filteredContacts.length !== 0 ? filteredContacts.map(function (contact, index) {
    return /*#__PURE__*/react.createElement(Contacts_Card, Home_extends({}, contact, {
      color: colors[index % 4],
      key: index
    }));
  }) : /*#__PURE__*/react.createElement("h2", {
    className: style["default"].no_results
  }, "No contacts found :(")));
};

/* harmony default export */ const Contacts_Home = (ContactsHome);
;// CONCATENATED MODULE: ./src/pages/Contacts/index.js





var Contacts_routes = [{
  index: true,
  element: /*#__PURE__*/react.createElement(Contacts_Home, null)
}];

var Contacts = function Contacts() {
  (0,react.useEffect)(function () {
    webfontloader_default().load({
      google: {
        families: ['Montserrat+Alternates:400,700']
      }
    });
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 130));
  }, []);
  return /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement(react_router/* Outlet */.j3, null));
};

/* harmony default export */ const pages_Contacts = (Contacts);
;// CONCATENATED MODULE: ./src/pages/Routes.js









var Routes_routes = [{
  path: constants/* base */.u,
  element: /*#__PURE__*/react.createElement(Home/* default */.Z, null)
}, {
  path: "".concat(constants/* base */.u, "flamingo/"),
  element: /*#__PURE__*/react.createElement(pages_Flamingo, null),
  children: routes
}, {
  path: "".concat(constants/* base */.u, "travel/"),
  element: /*#__PURE__*/react.createElement(pages_Travel, null),
  children: Travel_routes
}, {
  path: "".concat(constants/* base */.u, "houses/"),
  element: /*#__PURE__*/react.createElement(pages_Houses, null),
  children: Houses_routes
}, {
  path: "".concat(constants/* base */.u, "forest/"),
  element: /*#__PURE__*/react.createElement(pages_Forest, null),
  children: Forest_routes
}, {
  path: "".concat(constants/* base */.u, "contacts/"),
  element: /*#__PURE__*/react.createElement(pages_Contacts, null),
  children: Contacts_routes
}];

var Routes = function Routes() {
  return (0,react_router/* useRoutes */.V$)(Routes_routes);
};

/* harmony default export */ const pages_Routes = (Routes);
;// CONCATENATED MODULE: ./src/defaults.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const defaults = ({});
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, {
  forceRefresh: true
}, /*#__PURE__*/react.createElement(pages_Routes, null)), document.getElementById('root'));
})();

__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUYsTUFBZjs7QUM5Q0E7QUFDQSwrQ0FBZSxFQUFFOztBQ0RqQjtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUFDLGdCQUFBLGVBQ0Msb0JBQUMsc0NBQUQ7QUFBZSxjQUFZO0FBQTNCLGdCQUNDLG9CQUFDLFlBQUQsT0FERCxDQURELEVBSUNHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzL2ZsYW1pbmdvLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vUGVya3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9UZWFtLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9BcnRpY2xlLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vQmxvZy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vRm9ybS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9TZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL1dvcmtzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9Ib21lL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9DYXJkLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9kYi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvQ29udGFjdHMvc3R5bGUuc2Nzcz8xNjIzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy93ZWJmb250bG9hZGVyL3dlYmZvbnRsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3BsYXlncm91bmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3BsYXlncm91bmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vRm9vdGVyLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vTmV3cy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL1Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL0Fib3V0LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vV29ya3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL1NlcnZpY2VzMi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vQ3VzdG9tZXJzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vSG9tZS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vZGJtZW51LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9NZW51LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvdHJhdmVsLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvVHJhdmVsL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvVHJhdmVsL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9UcmF2ZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvaG91c2VzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvSG91c2VzL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvSG91c2VzL0hvdXNlLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvSG91c2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9Ib3VzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZm9yZXN0LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9Gb3Jlc3QvSGVhZGVyLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9Gb3Jlc3QvSW5mby5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRm9yZXN0L0NvbHVtbnMzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9Gb3Jlc3QvQ29sdW1uczIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZvcmVzdC9UZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZvcmVzdC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9Gb3Jlc3QvZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9Gb3Jlc3QvSG9tZS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0ZvcmVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbnN0YW50cy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdHMvYnV0dG9uLnNjc3M/N2NkOSIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdHMvQnV0dG9uLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy9jYXJkLnNjc3M/NGU2MiIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0NvbnRhY3RzL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvQ29udGFjdHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0NvbnRhY3RzL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvUm91dGVzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvZGVmYXVsdHMuY3NzP2QyNDkiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwcm9ncmVzcyB9IGZyb20gJy4vZGInO1xyXG5jb25zdCBQcm9ncmVzcyA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW1wb3J0KCcuL3Byb2dyZXNzLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e3Byb2dyZXNzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aXRlbS5jbGFzc2VzfSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdDxoND57aXRlbS5uYW1lfTwvaDQ+XHJcblx0XHRcdFx0XHQ8aDQ+e2l0ZW0ucGVyY2VudGFnZX08L2g0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzcztcclxuIiwiaW1wb3J0IHsgYmFzZSwgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuZXhwb3J0IGNvbnN0IG5hdiA9IHtcclxuXHRsb2dvOiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvbG9nby5wbmdgLFxyXG5cdG1lbnU6IFtcclxuXHRcdHtcclxuXHRcdFx0bGluazogYmFzZSxcclxuXHRcdFx0dGV4dDogJ2hvbWUnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1zZXJ2aWNlc2AsXHJcblx0XHRcdHRleHQ6ICdzZXJ2aWNlcycsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfXdvcmtzYCxcclxuXHRcdFx0dGV4dDogJ1dvcmtzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9YWJvdXRgLFxyXG5cdFx0XHR0ZXh0OiAnYWJvdXQnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1ibG9nYCxcclxuXHRcdFx0dGV4dDogJ2Jsb2cnLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGNvbnRhY3Q6IHtcclxuXHRcdGxpbms6IGAke2Jhc2V9Y29udGFjdGAsXHJcblx0XHR0ZXh0OiAnY29udGFjdCcsXHJcblx0fSxcclxuXHRzZWFyY2g6IHRydWUsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IFtcclxuXHR7XHJcblx0XHRpY29uOiAnZmFyIGZhLXBhcGVyLXBsYW5lIG1iLW0gaWNvbi1ncmVlbicsXHJcblx0XHRoZWFkaW5nOiAnRnV0dXJlIENvbmNlcHQuJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtYnJhaW4gbWItbSBpY29uLWdyZWVuJyxcclxuXHRcdGhlYWRpbmc6ICdUaGUgQmlnIElkZWFzLicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFyIGZhLWxpZ2h0YnVsYiBtYi1tIGljb24tZ3JlZW4nLFxyXG5cdFx0aGVhZGluZzogJ0NyZWF0aXZlIFNvbHV0aW9ucy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzcyA9IFtcclxuXHR7XHJcblx0XHRjbGFzc2VzOiAnZmxleC1iZXR3ZWVuIHByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItOTAnLFxyXG5cdFx0bmFtZTogJ1VJIERlc2lnbicsXHJcblx0XHRwZXJjZW50YWdlOiAnOTAlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci02MCcsXHJcblx0XHRuYW1lOiAnVVggRGVzaWduJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc2MCUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogJ2ZsZXgtYmV0d2VlbiBwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLTgwJyxcclxuXHRcdG5hbWU6ICdEaWdpdGFsIE1hcmtldGluZycsXHJcblx0XHRwZXJjZW50YWdlOiAnODAlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci03MCcsXHJcblx0XHRuYW1lOiAnU29jaWFsIE1lZGlhJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc3MCUnLFxyXG5cdH0sXHJcbl07XHJcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gJy9wbGF5Z3JvdW5kLycgOiAnLyc7XG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZsYW1pbmdvL2AgOiAnL2ZsYW1pbmdvLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9mbGFtaW5nb2Bcblx0OiAnL2ZsYW1pbmdvJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHBlcmtzIH0gZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBQZXJrcyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxyXG5cdFx0e3BlcmtzLm1hcCgocGVyaywgaW5kZXgpID0+IChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtwZXJrLmljb259PjwvaT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e3BlcmsuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0PHA+e3BlcmsuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQZXJrcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdGVhbSB9IGZyb20gJy4vZGInO1xyXG5cclxuaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi90ZWFtLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZWFtXCI+XHJcblx0XHRcdHt0ZWFtLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWNvdmVyIG1lbWJlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IG1lbWJlci5pbWFnZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57bWVtYmVyLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnttZW1iZXIucG9zaXRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdHttZW1iZXIuc29jaWFsTWVkaWEubWFwKChpdGVtLCBrZXkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtrZXl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnfmMvRmxhbWluZ28vUHJvZ3Jlc3MuanMnO1xyXG5pbXBvcnQgUGVya3MgZnJvbSAnfnMvRmxhbWluZ28vUGVya3MuanMnO1xyXG5pbXBvcnQgVGVhbSBmcm9tICd+cy9GbGFtaW5nby9UZWFtLmpzJztcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlXCI+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImhlYWRlci1zbWFsbCBiZy1jb3ZlclwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBhYm91dC5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8aDE+e2Fib3V0LmhlYWRlci5oZWFkaW5nfTwvaDE+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxQZXJrcyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5IHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnNraWxscy5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnthYm91dC5za2lsbHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxQcm9ncmVzcyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQuc2tpbGxzLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQudmlkZW8uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmhlYWRpbmd9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXkgbXItZGVmYXVsdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdHthYm91dC52aWRlby5idXR0b24udGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXkgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1sXCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdHthYm91dC50ZWFtLmhlYWRpbmd9XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8aDU+e2Fib3V0LnRlYW0uZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUZWFtIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXJ0aWNsZSB9IGZyb20gJy4vZGInO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBoZWFkZXItYXJ0aWNsZSBzZWN0aW9uXCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGFydGljbGUuaGVhZGVyLmltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWItbVwiPnthcnRpY2xlLmhlYWRlci5jYXRlZ29yeX08L2g1PlxyXG5cdFx0XHRcdDxoMj57YXJ0aWNsZS5oZWFkZXIuaGVhZGluZ308L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYXJ0aWNsZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG5cdFx0XHRcdFx0e2FydGljbGUuY29udGVudC5zaWRlYmFyLmRldGFpbHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbCBiYi13aGl0ZVwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2l0ZW0uaGVhZGluZ308L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLXNtYWxsXCI+XHJcblx0XHRcdFx0XHRcdHthcnRpY2xlLmNvbnRlbnQuc2lkZWJhci5zb2NpYWxNZWRpYS5tYXAoXHJcblx0XHRcdFx0XHRcdFx0KGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtpdGVtLmxpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+IDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuXHRcdFx0XHRcdHthcnRpY2xlLmNvbnRlbnQubWFpbi5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ2hlYWRpbmcnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1kZWZhdWx0IG10LW1cIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09ICdkZXNjcmlwdGlvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIG1iLWRlZmF1bHRcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi1kZWZhdWx0IG10LW1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VsZW1lbnQuY29udGVudH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBibG9nIH0gZnJvbSAnLi9kYic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ35zL0ZsYW1pbmdvL0NhcmQnO1xyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBoZWFkZXItc21hbGxcIlxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYmxvZy5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxoMT57YmxvZy5oZWFkZXIuaGVhZGluZ308L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItbFwiPlxyXG5cdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57YmxvZy5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHQ8aDU+e2Jsb2cuZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTNcIj5cclxuXHRcdFx0XHRcdFx0e2Jsb2cuYXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIGtleT17aW5kZXh9IGl0ZW09e2FydGljbGV9IC8+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi9mb3JtLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0yXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIG1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHQ8dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZSBoZXJlXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0c2VuZCBtZXNzYWdlXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtIGZyb20gJ35jL0ZsYW1pbmdvL0Zvcm0nO1xyXG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSAnLi9kYic7XHJcblxyXG5pbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IChcclxuXHQ8PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBoZWFkZXItc21hbGxcIlxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogY29udGFjdC5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxoMT57Y29udGFjdC5oZWFkZXIuaGVhZGluZ308L2gxPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgdGV4dC1jZW50ZXIgc2VjdGlvbiBjb250YWN0LXNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWItbFwiPlxyXG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e2NvbnRhY3QuY29udGVudC5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0PGg1Pntjb250YWN0LmNvbnRlbnQuZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHRleHQtY2VudGVyIHAtbVwiPlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmUtYWx0IGljb24tZ3JlZW4gbWItbVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLW1cIj5cclxuXHRcdFx0XHRcdFx0XHR7Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5oZWFkaW5nfVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjEuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24xLmxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjEuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24xLnRleHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjIubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMS5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjIudGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHRleHQtY2VudGVyIHAtbVwiPlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItbVwiPlxyXG5cdFx0XHRcdFx0XHRcdHtjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4yLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjIuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gdGV4dC1jZW50ZXIgcC1tXCI+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZS1vcGVuLXRleHQgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItbVwiPlxyXG5cdFx0XHRcdFx0XHRcdHtjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWN0LmNvbnRlbnQuY29sdW1ucy5jb2x1bW4zLmJ1dHRvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuYnV0dG9uMS5saW5rXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhY3QuY29udGVudC5jb2x1bW5zLmNvbHVtbjMuYnV0dG9uc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5idXR0b24xLnRleHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMy5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjIubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFjdC5jb250ZW50LmNvbHVtbnMuY29sdW1uMy5idXR0b25zXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmJ1dHRvbjIudGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JleSBzZWN0aW9uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLWwgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPntjb250YWN0LmZvcm0uaGVhZGluZ308L2gyPlxyXG5cdFx0XHRcdDxoNT57Y29udGFjdC5mb3JtLmRlc2NyaXB0aW9ufTwvaDU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxGb3JtIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnfnMvRmxhbWluZ28vU2VydmljZXMuanMnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJ35jL0ZsYW1pbmdvL1Byb2dyZXNzLmpzJztcbmltcG9ydCB7IHNlcnZpY2VzIH0gZnJvbSAnLi9kYic7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgU2VydmljZXNQYWdlID0gKCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzLXBhZ2VcIj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJoZWFkZXItc21hbGwgYmctY292ZXJcIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBzZXJ2aWNlcy5oZWFkZXIuaW1hZ2UsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxoMT57c2VydmljZXMuaGVhZGVyLmhlYWRpbmd9PC9oMT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbWItbFwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPntzZXJ2aWNlcy5vdXJTZXJ2aWNlcy5oZWFkaW5nfTwvaDI+XG5cdFx0XHRcdDxoNT57c2VydmljZXMub3VyU2VydmljZXMuZGVzY3JpcHRpb259PC9oNT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PFNlcnZpY2VzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBiZy1maXhlZCBzZWN0aW9uIHRleHQtY2VudGVyXCJcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGJhY2tncm91bmRJbWFnZTogc2VydmljZXMud29ya3MuaW1hZ2UsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e3NlcnZpY2VzLndvcmtzLmhlYWRpbmd9PC9oMj5cblx0XHRcdDxMaW5rIHRvPXtzZXJ2aWNlcy53b3Jrcy5idXR0b24ubGlua30gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG5cdFx0XHRcdHtzZXJ2aWNlcy53b3Jrcy5idXR0b24udGV4dH1cblx0XHRcdDwvTGluaz5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXkgc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItbVwiPntzZXJ2aWNlcy5za2lsbHMuaGVhZGluZ308L2gyPlxuXHRcdFx0XHRcdFx0XHQ8cD57c2VydmljZXMuc2tpbGxzLmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XG5cdFx0XHRcdFx0XHRcdDxQcm9ncmVzcyAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXNQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd29ya3MgfSBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IFdvcmtzID0gKCkgPT4gKFxyXG5cdDw+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImJnLWNvdmVyIGhlYWRlci1zbWFsbFwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiB3b3Jrcy5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxoMT57d29ya3MuaGVhZGVyLmhlYWRpbmd9PC9oMT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLW1cIj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e3dvcmtzLmNvbnRlbnQuaGVhZGluZ308L2gyPlxyXG5cdFx0XHRcdFx0PGg1Pnt3b3Jrcy5jb250ZW50LmRlc2NyaXB0aW9ufTwvaDU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTJcIj5cclxuXHRcdFx0XHRcdHt3b3Jrcy5jb250ZW50LmNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBjb2x1bW4uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gbWItZGVmYXVsdCB3b3JrLWhlaWdodCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0Pntjb2x1bW4uaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkZXItaG9tZXBhZ2UuanBnKWAsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0NyZWF0aXZlIG1pbmQsIGNyZWF0aXZlIHdvcmtzJyxcclxuXHRcdGhlYWRpbmc6ICdXZSBhcmUgZGlnaXRhbCBhZ2VuY3kuJyxcclxuXHRcdGJ1dHRvbjogJ2dldHRpbmcgc3RhcnRlZCcsXHJcblx0fSxcclxuXHRzZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ091ciBTZXJ2aWNlcyBmb3IgY2xpZW50cycsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aGVhZGluZzogJ1dvcmtzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGluZ3MgV2UndmUgTWFkZVwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICd2aWV3IGFsbCcsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRhYm91dDoge1xyXG5cdFx0aGVhZGluZzogJ0Fib3V0LicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcblx0dGVzdGltb25pYWxzOiB7XHJcblx0XHRoZWFkaW5nOiAnVGVzdGltb25pYWxzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lcnMgPSBbXHJcblx0J2ZhYiBmYS1qZWRpLW9yZGVyIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc3Rhci1vZi1saWZlIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc3RvcmUtYWx0IGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc2hhcmUtYWx0LXNxdWFyZSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXBvby1zdG9ybSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLWNoYXJnaW5nLXN0YXRpb24gaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1zbm93cGxvdyBpY29uLXdoaXRlJyxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2hlYWRlci1iZy5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdTZXJ2aWNlcy4nLFxyXG5cdH0sXHJcblx0b3VyU2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgc2VydmljZXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzJyxcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnV2FubmEgc2VlIG91ciB3b3Jrcz8nLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICdhbGwgcHJvamVjdHMnLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0c2tpbGxzOiB7XHJcblx0XHRoZWFkaW5nOiAnSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpZCBhcmN1IGx1Y3R1cywgcGVsbGVudGVzcXVlIGxvcmVtIGFjLCBwaGFyZXRyYSBzYXBpZW4uIERvbmVjIGVsZW1lbnR1bSwgdG9ydG9yIHZlbCB2aXZlcnJhIHVsdHJpY2VzLCBsYWN1cyBvcmNpIHZlbmVuYXRpcyB0b3J0b3IsIHZlbCByaG9uY3VzIGlwc3VtIGZlbGlzIGEgZGlhbS4nLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL3RhdHRvby5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdPdXIgd29ya3MuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgV29ya3MuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnU2VlIGFsbCBvdXIgd29ya3MnLFxyXG5cdFx0Y29sdW1uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0FyaGl0ZWN0dXJlJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0yLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdQaG90b2dyYXBoeScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnVGVhc2VyJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW00LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdTdHlsZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTUuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0Fib3V0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW02LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdOYW1lcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnVGl0bGVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW04LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdTb21ldGhpbmcnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTkuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1JlYWN0aW9uJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTWlzY2VsYW5pb3VzJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Fib3V0IHVzLicsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jlc3QgU29sdXRpb25zIGZvciBZb3VyIEJ1c2luZXNzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuJyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnV2F0Y2ggdmlkZW8nIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiAnTWVldCBvdXIgdGVhbS4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICd0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3QnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvbWFwLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0NvbnRhY3QgdXMuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdHZXQgaW4gdG91Y2ggd2l0aCB1cyEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0XHRjb2x1bW5zOiB7XHJcblx0XHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnUEhPTkUnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJysxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ3RlbDoxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnQUREUkVTUycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnRU1BSUwnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ2FueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOmFueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ29mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRmb3JtOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VuZCB1cyBhIG1lc3NhZ2UhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBibG9nID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVuLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jsb2cuJyxcclxuXHR9LFxyXG5cdGhlYWRpbmc6ICdDaGVjayBvdXIgbGF0ZXN0IG5ld3MuJyxcclxuXHRkZXNjcmlwdGlvbjogJ0NoZWNrIE91dCBTb21lIG9mIE91ciBOZXdzJyxcclxuXHRhcnRpY2xlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCdDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlPycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCcxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgYXJ0aWNsZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGNhdGVnb3J5OiAnVGVjaG5vbG9neScsXHJcblx0XHRoZWFkaW5nOlxyXG5cdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRzaWRlYmFyOiB7XHJcblx0XHRcdGRldGFpbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiAnV3JpdHRlbiBieScsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0pvaG4gRG9lJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRpbmc6ICdQb3N0ZWQgb24nLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdKYW51YXJ5IDMsIDIwMjInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogJ1RhZ3MnLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdEZXNpZ24sIFRlY2hub2xvZ3knLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2snLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0bWFpbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2Rlc2NyaXB0aW9uJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2hlYWRpbmcnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICdUaGUgTmV3IEdlbmVyYXRpb24gb2YgVlIgaXMgQ29taW5nIScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRjb250ZW50OiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnYCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gaW4gcG9zdWVyZSBtZXR1cy4gRG9uZWMgZGljdHVtIHRlbXBvciBvZGlvLCBzaXQgYW1ldCBjb25kaW1lbnR1bSBvZGlvIG1vbGxpcyBuZWMuIFByYWVzZW50IGVnZXQgbGlndWxhIG5lcXVlLiBRdWlzcXVlIHBoYXJldHJhIGVsZW1lbnR1bSBtYXNzYSBhdCBmcmluZ2lsbGEuIE51bGxhbSBmcmluZ2lsbGEgbmVjIGF1Z3VlIGlkIHNvbGxpY2l0dWRpbi4gUXVpc3F1ZSBpbnRlcmR1bSBsb2JvcnRpcyB0b3J0b3IsIHNpdCBhbWV0IGFsaXF1YW0gdXJuYSBhbGlxdWFtIGluLiBNb3JiaSBpbiBxdWFtIGEgdGVsbHVzIHRlbXBvciB0aW5jaWR1bnQgc2VkIHZpdGFlIGVyb3MuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLiBRdWlzcXVlIHN1c2NpcGl0LCBmZWxpcyB1dCBjb25ndWUgbW9sZXN0aWUsIGVyb3MgZG9sb3IgbWF0dGlzIGRvbG9yLCBhIHNhZ2l0dGlzIHNlbSBsaWd1bGEgdml0YWUgZHVpLiBTZWQgcGVsbGVudGVzcXVlIHNhZ2l0dGlzIHRpbmNpZHVudC4gJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdoZWFkaW5nJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J1wiWW91ciB0aW1lIGlzIGxpbWl0ZWQsIHNvIGRvblxcJ3Qgd2FzdGUgaXQgbGl2aW5nIHNvbWVvbmUgZWxzZVxcJ3MgbGlmZS5cIicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OiAnIFN0ZXZlIEpvYnMgfCBFeCBDRU8gb2YgQXBwbGUgJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuXHQ8Yj5cclxuXHRcdGhvbWVcclxuXHRcdDxMaW5rIHRvPXtgJHtiYXNlfWZsYW1pbmdvL2B9PkZsYW1pbmdvPC9MaW5rPlxyXG5cdFx0PExpbmsgdG89e2Ake2Jhc2V9dHJhdmVsL2B9PlRyYXZlbDwvTGluaz5cclxuXHRcdDxMaW5rIHRvPXtgJHtiYXNlfWhvdXNlcy9gfT5Ib3VzZXM8L0xpbms+XHJcblx0XHQ8TGluayB0bz17YCR7YmFzZX1mb3Jlc3QvYH0+Rm9yZXN0PC9MaW5rPlxyXG5cdFx0PExpbmsgdG89e2Ake2Jhc2V9Y29udGFjdHMvYH0+Q29udGFjdHM8L0xpbms+XHJcblx0PC9iPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IGl0ZW0gfSkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGItd2hpdGVcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cInB0LTEwMCBiZy1jb3ZlclwiXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogaXRlbS5pbWFnZSxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicC1kZWZhdWx0XCI+XHJcblx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57aXRlbS5oZWFkaW5nfTwvcD5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0PExpbmsgdG89e2l0ZW0uYnV0dG9ufSBjbGFzc05hbWU9XCJidXR0b24tc21hbGxcIj5cclxuXHRcdFx0XHRyZWFkIG1vcmVcclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0zXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LWJhciBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5EaWdpdGFsIFN0cmF0ZWd5PC9oMz5cclxuXHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRDcmFzIGlkIGFyY3UgbHVjdHVzLlxyXG5cdFx0XHRcdDwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHAtbSBiYi13aGl0ZSBiZy1ncmV5IGJnLWhvdmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtODBcIj5cclxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuIGljb24tZ3JlZW4gbWItbVwiPjwvaT5cclxuXHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwibWItbVwiPlVYIERlc2lnbnM8L2gzPlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tIGJiLXdoaXRlIGJnLWdyZXkgYmctaG92ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLWZyaWVuZHMgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1tXCI+VUkgRGVzaWduczwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWV1cm9wZSBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5Tb2NpYWwgTWVkaWE8L2gzPlxyXG5cdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdFx0XHRcdENyYXMgaWQgYXJjdSBsdWN0dXMuXHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tIGJiLXdoaXRlIGJnLWdyZXkgYmctaG92ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhciBmYS1ib29rbWFyayBpY29uLWdyZWVuIG1iLW1cIj48L2k+XHJcblx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm1iLW1cIj5EZXNpZ24gQ29uY2VwdDwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBwLW0gYmItd2hpdGUgYmctZ3JleSBiZy1ob3ZlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoYXJ0LWFyZWEgaWNvbi1ncmVlbiBtYi1tXCI+PC9pPlxyXG5cdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJtYi1tXCI+TWVkaWEgUGFpcmluZzwvaDM+XHJcblx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0Q3JhcyBpZCBhcmN1IGx1Y3R1cy5cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG4iLCJpbXBvcnQgeyBQVUJMSUNfVVJMLCBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5leHBvcnQgY29uc3QgZm9vdGVyID0ge1xyXG5cdGlucXVpcnk6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2JhY2tncm91bmQtZm9vdGVyLmpwZylgLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vaycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLXlvdXR1YmUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHRcdGhlYWRpbmc6ICdIYXZlIGFueSBwcm9qZWN0IGluIG1pbmQ/JyxcclxuXHRcdGJ1dHRvbjoge1xyXG5cdFx0XHR0ZXh0OiAnbWFrZSBpbnF1aXJ5JyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRtZW51czoge1xyXG5cdFx0bWVudTE6IHtcclxuXHRcdFx0bG9nbzoge1xyXG5cdFx0XHRcdGltYWdlOiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvbG9nby5wbmdgLFxyXG5cdFx0XHRcdGxpbms6IGJhc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnV2UgYXJlIG1vcmUgdGhhbiBhIGRpZ2l0YWwgYWdlbmN5JyxcclxuXHRcdH0sXHJcblx0XHRtZW51Mjoge1xyXG5cdFx0XHRoZWFkaW5nOiAnQ29udGFjdCBVcycsXHJcblx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0XHR0ZXh0OiAnMDcyNzcyOTA2OCcsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLXBob25lLXZvbHVtZSBpY29uLXdoaXRlJyxcclxuXHRcdFx0XHRcdGxpbms6ICd0ZWw6MDcyNzcyOTA2OCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOm1vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5ybycsXHJcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWVudmVsb3BlIGljb24td2hpdGUnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ21vY2FudS5hbGV4YW5kcnUyMEB5YWhvby5ybycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b24zOiB7XHJcblx0XHRcdFx0XHRpY29uOiAnZmFzIGZhLW1hcC1tYXJrZXItYWx0IGljb24td2hpdGUnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ0NvbnN0YW50emEsIFJvbWFuaWEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YnV0dG9uNDoge1xyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1jYWxlbmRhci1hbHQgaWNvbi13aGl0ZScsXHJcblx0XHRcdFx0XHR0ZXh0OiAnTW9uZGF5IHRvIEZyaWRheScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRtZW51Mzoge1xyXG5cdFx0XHRoZWFkaW5nOiAnT3VyIFNlcnZpY2VzJyxcclxuXHRcdFx0YnV0dG9uczogWydsaW5rMScsICdsaW5rMicsICdsaW5rMycsICdsaW5rNCddLFxyXG5cdFx0fSxcclxuXHRcdG1lbnU0OiB7XHJcblx0XHRcdGhlYWRpbmc6ICdBYm91dCBVcycsXHJcblx0XHRcdGJ1dHRvbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnQWJvdXQnLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArICdhYm91dCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnQmxvZycsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgJyMnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ0NvbnRhY3QgdXMnLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArICdjb250YWN0JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdXb3JrcycsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgJ3dvcmtzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvcHlyaWdodDoge1xyXG5cdFx0dGV4dDogJ0NvcHlyaWdodCAyMDIwIEFsbCByaWdodHMgcmVzZXJ2ZWQnLFxyXG5cdFx0YnV0dG9uczoge1xyXG5cdFx0XHRidXR0b24xOiB7XHJcblx0XHRcdFx0dGV4dDogJ1ByaXZhY3kgUG9saWN5JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdHRleHQ6ICdUZXJtcyBvZiBVc2UnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby4nLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vaycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLXlvdXR1YmUnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgYWJvdXQgPSB7XHJcblx0Y29sdW1uczoge1xyXG5cdFx0Y29sdW1uMToge1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW9wbGUtdGFsa2luZy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzogJ1RlYW0gV29yaycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnQ29tbWl0dGVkIGFuZCBjcmVhdGl2ZScsXHJcblx0XHR9LFxyXG5cdFx0Y29sdW1uMjoge1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9wZW9wbGUtd29ya2luZy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzogJ1BoaWxvc29waHknLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1RydXN0IHBheXMgb2ZmJyxcclxuXHRcdH0sXHJcblx0XHRjb2x1bW4zOiB7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL29mZmljZS5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzogJ09mZmljZScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnU29tZXdoZXJlIG9uIGVhcnRoJyxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRkZXRhaWxzOiBbXHJcblx0XHR7XHJcblx0XHRcdGhlYWRpbmc6ICdXaG8gd2UgYXJlJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGhlYWRpbmc6ICdPdXIgcGhpbG9zb3BoeScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLicsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRoZWFkaW5nOiAnSG93IHdlIHdvcmsnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby4nLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvcmtzID0gW1xyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dhdGNoLmpwZylgLFxyXG5cdFx0bmFtZTogJ1NtYXJ0IFdhdGNoJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dhdGNoMi5qcGcpYCxcclxuXHRcdG5hbWU6ICdVWCBEZXNpZ24nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvaGVhZHBob25lLmpwZylgLFxyXG5cdFx0bmFtZTogJ01vY2t1cCcsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9tYWMuanBnKWAsXHJcblx0XHRuYW1lOiAnVGhlIFVJIERlc2lnbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93YXRjaDMuanBnKWAsXHJcblx0XHRuYW1lOiAnT25lIFByb2R1Y3QnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvZmxhbWluZ29zLmpwZylgLFxyXG5cdFx0bmFtZTogJ1RoZSBVWCBEZXNpZ25zJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgcGVya3MgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS1jaGFydC1iYXIgaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdFeGNlbGxlbnQgRGVzaWduJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLXBlbiBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ0Zhc3QgUmVzcG9uc2UnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtdXNlci1mcmllbmRzIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnVGltZSBTYXZpbmcnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtZ2xvYmUtZXVyb3BlIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnUGVyc29uYWwgU3VwcG9ydCcsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhciBmYS1ib29rbWFyayBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ0Jlc3QgUXVhbGl0eScsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS1jaGFydC1hcmVhIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnUGVyZmVjdCBTb2x1dGlvbnMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgbmV3cyA9IFtcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdCdDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlPycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdCc4IENpdGllcyBUaGF0IFNob3cgWW91IFdoYXQgVGhlIEZ1dHVyZSBXaWxsIExvb2sgTGlrZSAoSW5ub3ZhdGl2ZSBJZGVhcyknLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgdGVhbSA9IFtcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXIxLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rLWYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW50YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6bGlua2VkaW4uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWxpbmtlZGluLWluJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXIyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rLWYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW50YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6bGlua2VkaW4uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWxpbmtlZGluLWluJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXIzLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rLWYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW50YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6bGlua2VkaW4uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWxpbmtlZGluLWluJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXI0LmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rLWYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW50YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6bGlua2VkaW4uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWxpbmtlZGluLWluJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hYm91dC9tZW1iZXI1LmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rLWYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW50YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6bGlua2VkaW4uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWxpbmtlZGluLWluJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJzt2YXIgcixCPXJ8fChyPXt9KTtCLlBvcD1cIlBPUFwiO0IuUHVzaD1cIlBVU0hcIjtCLlJlcGxhY2U9XCJSRVBMQUNFXCI7dmFyIEM9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9mdW5jdGlvbihiKXtyZXR1cm4gT2JqZWN0LmZyZWV6ZShiKX06ZnVuY3Rpb24oYil7cmV0dXJuIGJ9O2Z1bmN0aW9uIEQoYixoKXtpZighYil7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiZjb25zb2xlLndhcm4oaCk7dHJ5e3Rocm93IEVycm9yKGgpO31jYXRjaChlKXt9fX1mdW5jdGlvbiBFKGIpe2IucHJldmVudERlZmF1bHQoKTtiLnJldHVyblZhbHVlPVwiXCJ9XG5mdW5jdGlvbiBGKCl7dmFyIGI9W107cmV0dXJue2dldCBsZW5ndGgoKXtyZXR1cm4gYi5sZW5ndGh9LHB1c2g6ZnVuY3Rpb24oaCl7Yi5wdXNoKGgpO3JldHVybiBmdW5jdGlvbigpe2I9Yi5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1ofSl9fSxjYWxsOmZ1bmN0aW9uKGgpe2IuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZSYmZShoKX0pfX19ZnVuY3Rpb24gSCgpe3JldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiw4KX1mdW5jdGlvbiBJKGIpe3ZhciBoPWIucGF0aG5hbWU7aD12b2lkIDA9PT1oP1wiL1wiOmg7dmFyIGU9Yi5zZWFyY2g7ZT12b2lkIDA9PT1lP1wiXCI6ZTtiPWIuaGFzaDtiPXZvaWQgMD09PWI/XCJcIjpiO2UmJlwiP1wiIT09ZSYmKGgrPVwiP1wiPT09ZS5jaGFyQXQoMCk/ZTpcIj9cIitlKTtiJiZcIiNcIiE9PWImJihoKz1cIiNcIj09PWIuY2hhckF0KDApP2I6XCIjXCIrYik7cmV0dXJuIGh9XG5mdW5jdGlvbiBKKGIpe3ZhciBoPXt9O2lmKGIpe3ZhciBlPWIuaW5kZXhPZihcIiNcIik7MDw9ZSYmKGguaGFzaD1iLnN1YnN0cihlKSxiPWIuc3Vic3RyKDAsZSkpO2U9Yi5pbmRleE9mKFwiP1wiKTswPD1lJiYoaC5zZWFyY2g9Yi5zdWJzdHIoZSksYj1iLnN1YnN0cigwLGUpKTtiJiYoaC5wYXRobmFtZT1iKX1yZXR1cm4gaH1cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoKXt2YXIgYz1wLmxvY2F0aW9uLGE9bS5zdGF0ZXx8e307cmV0dXJuW2EuaWR4LEMoe3BhdGhuYW1lOmMucGF0aG5hbWUsc2VhcmNoOmMuc2VhcmNoLGhhc2g6Yy5oYXNoLHN0YXRlOmEudXNyfHxudWxsLGtleTphLmtleXx8XCJkZWZhdWx0XCJ9KV19ZnVuY3Rpb24gZShjKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGM/YzpJKGMpfWZ1bmN0aW9uIHgoYyxhKXt2b2lkIDA9PT1hJiYoYT1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6cS5wYXRobmFtZSxoYXNoOlwiXCIsc2VhcmNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgYz9KKGMpOmMse3N0YXRlOmEsa2V5OkgoKX0pKX1mdW5jdGlvbiB6KGMpe3Q9YztjPWgoKTt2PWNbMF07cT1jWzFdO2QuY2FsbCh7YWN0aW9uOnQsbG9jYXRpb246cX0pfWZ1bmN0aW9uIEEoYyxhKXtmdW5jdGlvbiBmKCl7QShjLGEpfXZhciBsPXIuUHVzaCxrPXgoYyxcbmEpO2lmKCFnLmxlbmd0aHx8KGcuY2FsbCh7YWN0aW9uOmwsbG9jYXRpb246ayxyZXRyeTpmfSksITEpKXt2YXIgbj1be3VzcjprLnN0YXRlLGtleTprLmtleSxpZHg6disxfSxlKGspXTtrPW5bMF07bj1uWzFdO3RyeXttLnB1c2hTdGF0ZShrLFwiXCIsbil9Y2F0Y2goRyl7cC5sb2NhdGlvbi5hc3NpZ24obil9eihsKX19ZnVuY3Rpb24geShjLGEpe2Z1bmN0aW9uIGYoKXt5KGMsYSl9dmFyIGw9ci5SZXBsYWNlLGs9eChjLGEpO2cubGVuZ3RoJiYoZy5jYWxsKHthY3Rpb246bCxsb2NhdGlvbjprLHJldHJ5OmZ9KSwxKXx8KGs9W3t1c3I6ay5zdGF0ZSxrZXk6ay5rZXksaWR4OnZ9LGUoayldLG0ucmVwbGFjZVN0YXRlKGtbMF0sXCJcIixrWzFdKSx6KGwpKX1mdW5jdGlvbiB3KGMpe20uZ28oYyl9dm9pZCAwPT09YiYmKGI9e30pO2I9Yi53aW5kb3c7dmFyIHA9dm9pZCAwPT09Yj9kb2N1bWVudC5kZWZhdWx0VmlldzpiLG09cC5oaXN0b3J5LHU9bnVsbDtwLmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLFxuZnVuY3Rpb24oKXtpZih1KWcuY2FsbCh1KSx1PW51bGw7ZWxzZXt2YXIgYz1yLlBvcCxhPWgoKSxmPWFbMF07YT1hWzFdO2lmKGcubGVuZ3RoKWlmKG51bGwhPWYpe3ZhciBsPXYtZjtsJiYodT17YWN0aW9uOmMsbG9jYXRpb246YSxyZXRyeTpmdW5jdGlvbigpe3coLTEqbCl9fSx3KGwpKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSB6KGMpfX0pO3ZhciB0PXIuUG9wO2I9aCgpO3ZhciB2PWJbMF0scT1iWzFdLGQ9RigpLGc9RigpO251bGw9PXYmJih2PTAsbS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sbS5zdGF0ZSx7aWR4OnZ9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdH0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIHF9LGNyZWF0ZUhyZWY6ZSxwdXNoOkEscmVwbGFjZTp5LGdvOncsYmFjazpmdW5jdGlvbigpe3coLTEpfSxmb3J3YXJkOmZ1bmN0aW9uKCl7dygxKX0sbGlzdGVuOmZ1bmN0aW9uKGMpe3JldHVybiBkLnB1c2goYyl9LGJsb2NrOmZ1bmN0aW9uKGMpe3ZhciBhPWcucHVzaChjKTsxPT09Zy5sZW5ndGgmJnAuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLEUpO3JldHVybiBmdW5jdGlvbigpe2EoKTtnLmxlbmd0aHx8cC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSl9fX19O1xuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoYil7ZnVuY3Rpb24gaCgpe3ZhciBhPUoobS5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSksZj1hLnBhdGhuYW1lLGw9YS5zZWFyY2g7YT1hLmhhc2g7dmFyIGs9dS5zdGF0ZXx8e307cmV0dXJuW2suaWR4LEMoe3BhdGhuYW1lOnZvaWQgMD09PWY/XCIvXCI6ZixzZWFyY2g6dm9pZCAwPT09bD9cIlwiOmwsaGFzaDp2b2lkIDA9PT1hP1wiXCI6YSxzdGF0ZTprLnVzcnx8bnVsbCxrZXk6ay5rZXl8fFwiZGVmYXVsdFwifSldfWZ1bmN0aW9uIGUoKXtpZih0KWMuY2FsbCh0KSx0PW51bGw7ZWxzZXt2YXIgYT1yLlBvcCxmPWgoKSxsPWZbMF07Zj1mWzFdO2lmKGMubGVuZ3RoKWlmKG51bGwhPWwpe3ZhciBrPXEtbDtrJiYodD17YWN0aW9uOmEsbG9jYXRpb246ZixyZXRyeTpmdW5jdGlvbigpe3AoLTEqayl9fSxwKGspKX1lbHNlXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9EKCExLFwiWW91IGFyZSB0cnlpbmcgdG8gYmxvY2sgYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIHRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoZSBoaXN0b3J5IGxpYnJhcnkuIFRoZSBibG9jayB3aWxsIGZhaWwgc2lsZW50bHkgaW4gcHJvZHVjdGlvbiwgYnV0IGluIGdlbmVyYWwgeW91IHNob3VsZCBkbyBhbGwgbmF2aWdhdGlvbiB3aXRoIHRoZSBoaXN0b3J5IGxpYnJhcnkgKGluc3RlYWQgb2YgdXNpbmcgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlIGRpcmVjdGx5KSB0byBhdm9pZCB0aGlzIHNpdHVhdGlvbi5cIik6XG52b2lkIDA7ZWxzZSBBKGEpfX1mdW5jdGlvbiB4KGEpe3ZhciBmPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpLGw9XCJcIjtmJiZmLmdldEF0dHJpYnV0ZShcImhyZWZcIikmJihmPW0ubG9jYXRpb24uaHJlZixsPWYuaW5kZXhPZihcIiNcIiksbD0tMT09PWw/ZjpmLnNsaWNlKDAsbCkpO3JldHVybiBsK1wiI1wiKyhcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpJKGEpKX1mdW5jdGlvbiB6KGEsZil7dm9pZCAwPT09ZiYmKGY9bnVsbCk7cmV0dXJuIEMoX2V4dGVuZHMoe3BhdGhuYW1lOmQucGF0aG5hbWUsaGFzaDpcIlwiLHNlYXJjaDpcIlwifSxcInN0cmluZ1wiPT09dHlwZW9mIGE/SihhKTphLHtzdGF0ZTpmLGtleTpIKCl9KSl9ZnVuY3Rpb24gQShhKXt2PWE7YT1oKCk7cT1hWzBdO2Q9YVsxXTtnLmNhbGwoe2FjdGlvbjp2LGxvY2F0aW9uOmR9KX1mdW5jdGlvbiB5KGEsZil7ZnVuY3Rpb24gbCgpe3koYSxmKX12YXIgaz1yLlB1c2gsbj16KGEsZik7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9cbkQoXCIvXCI9PT1uLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucHVzaChcIitKU09OLnN0cmluZ2lmeShhKStcIilcIik6dm9pZCAwO2lmKCFjLmxlbmd0aHx8KGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksITEpKXt2YXIgRz1be3VzcjpuLnN0YXRlLGtleTpuLmtleSxpZHg6cSsxfSx4KG4pXTtuPUdbMF07Rz1HWzFdO3RyeXt1LnB1c2hTdGF0ZShuLFwiXCIsRyl9Y2F0Y2goSyl7bS5sb2NhdGlvbi5hc3NpZ24oRyl9QShrKX19ZnVuY3Rpb24gdyhhLGYpe2Z1bmN0aW9uIGwoKXt3KGEsZil9dmFyIGs9ci5SZXBsYWNlLG49eihhLGYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PW4ucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5yZXBsYWNlKFwiK0pTT04uc3RyaW5naWZ5KGEpK1xuXCIpXCIpOnZvaWQgMDtjLmxlbmd0aCYmKGMuY2FsbCh7YWN0aW9uOmssbG9jYXRpb246bixyZXRyeTpsfSksMSl8fChuPVt7dXNyOm4uc3RhdGUsa2V5Om4ua2V5LGlkeDpxfSx4KG4pXSx1LnJlcGxhY2VTdGF0ZShuWzBdLFwiXCIsblsxXSksQShrKSl9ZnVuY3Rpb24gcChhKXt1LmdvKGEpfXZvaWQgMD09PWImJihiPXt9KTtiPWIud2luZG93O3ZhciBtPXZvaWQgMD09PWI/ZG9jdW1lbnQuZGVmYXVsdFZpZXc6Yix1PW0uaGlzdG9yeSx0PW51bGw7bS5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixlKTttLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgYT1oKClbMV07SShhKSE9PUkoZCkmJmUoKX0pO3ZhciB2PXIuUG9wO2I9aCgpO3ZhciBxPWJbMF0sZD1iWzFdLGc9RigpLGM9RigpO251bGw9PXEmJihxPTAsdS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sdS5zdGF0ZSx7aWR4OnF9KSxcIlwiKSk7cmV0dXJue2dldCBhY3Rpb24oKXtyZXR1cm4gdn0sZ2V0IGxvY2F0aW9uKCl7cmV0dXJuIGR9LFxuY3JlYXRlSHJlZjp4LHB1c2g6eSxyZXBsYWNlOncsZ286cCxiYWNrOmZ1bmN0aW9uKCl7cCgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXtwKDEpfSxsaXN0ZW46ZnVuY3Rpb24oYSl7cmV0dXJuIGcucHVzaChhKX0sYmxvY2s6ZnVuY3Rpb24oYSl7dmFyIGY9Yy5wdXNoKGEpOzE9PT1jLmxlbmd0aCYmbS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsRSk7cmV0dXJuIGZ1bmN0aW9uKCl7ZigpO2MubGVuZ3RofHxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIixFKX19fX07XG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KGIpe2Z1bmN0aW9uIGgoZCxnKXt2b2lkIDA9PT1nJiYoZz1udWxsKTtyZXR1cm4gQyhfZXh0ZW5kcyh7cGF0aG5hbWU6dC5wYXRobmFtZSxzZWFyY2g6XCJcIixoYXNoOlwiXCJ9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQse3N0YXRlOmcsa2V5OkgoKX0pKX1mdW5jdGlvbiBlKGQsZyxjKXtyZXR1cm4hcS5sZW5ndGh8fChxLmNhbGwoe2FjdGlvbjpkLGxvY2F0aW9uOmcscmV0cnk6Y30pLCExKX1mdW5jdGlvbiB4KGQsZyl7dT1kO3Q9Zzt2LmNhbGwoe2FjdGlvbjp1LGxvY2F0aW9uOnR9KX1mdW5jdGlvbiB6KGQsZyl7dmFyIGM9ci5QdXNoLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnB1c2goXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOlxudm9pZCAwO2UoYyxhLGZ1bmN0aW9uKCl7eihkLGcpfSkmJihtKz0xLHAuc3BsaWNlKG0scC5sZW5ndGgsYSkseChjLGEpKX1mdW5jdGlvbiBBKGQsZyl7dmFyIGM9ci5SZXBsYWNlLGE9aChkLGcpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/RChcIi9cIj09PXQucGF0aG5hbWUuY2hhckF0KDApLFwiUmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5LnJlcGxhY2UoXCIrSlNPTi5zdHJpbmdpZnkoZCkrXCIpXCIpOnZvaWQgMDtlKGMsYSxmdW5jdGlvbigpe0EoZCxnKX0pJiYocFttXT1hLHgoYyxhKSl9ZnVuY3Rpb24geShkKXt2YXIgZz1NYXRoLm1pbihNYXRoLm1heChtK2QsMCkscC5sZW5ndGgtMSksYz1yLlBvcCxhPXBbZ107ZShjLGEsZnVuY3Rpb24oKXt5KGQpfSkmJihtPWcseChjLGEpKX12b2lkIDA9PT1iJiYoYj17fSk7dmFyIHc9YjtiPXcuaW5pdGlhbEVudHJpZXM7dz13LmluaXRpYWxJbmRleDt2YXIgcD0odm9pZCAwPT09XG5iP1tcIi9cIl06YikubWFwKGZ1bmN0aW9uKGQpe3ZhciBnPUMoX2V4dGVuZHMoe3BhdGhuYW1lOlwiL1wiLHNlYXJjaDpcIlwiLGhhc2g6XCJcIixzdGF0ZTpudWxsLGtleTpIKCl9LFwic3RyaW5nXCI9PT10eXBlb2YgZD9KKGQpOmQpKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP0QoXCIvXCI9PT1nLnBhdGhuYW1lLmNoYXJBdCgwKSxcIlJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXMgfSkgKGludmFsaWQgZW50cnk6IFwiK0pTT04uc3RyaW5naWZ5KGQpK1wiKVwiKTp2b2lkIDA7cmV0dXJuIGd9KSxtPU1hdGgubWluKE1hdGgubWF4KG51bGw9PXc/cC5sZW5ndGgtMTp3LDApLHAubGVuZ3RoLTEpLHU9ci5Qb3AsdD1wW21dLHY9RigpLHE9RigpO3JldHVybntnZXQgaW5kZXgoKXtyZXR1cm4gbX0sZ2V0IGFjdGlvbigpe3JldHVybiB1fSxnZXQgbG9jYXRpb24oKXtyZXR1cm4gdH0sY3JlYXRlSHJlZjpmdW5jdGlvbihkKXtyZXR1cm5cInN0cmluZ1wiPT09XG50eXBlb2YgZD9kOkkoZCl9LHB1c2g6eixyZXBsYWNlOkEsZ286eSxiYWNrOmZ1bmN0aW9uKCl7eSgtMSl9LGZvcndhcmQ6ZnVuY3Rpb24oKXt5KDEpfSxsaXN0ZW46ZnVuY3Rpb24oZCl7cmV0dXJuIHYucHVzaChkKX0sYmxvY2s6ZnVuY3Rpb24oZCl7cmV0dXJuIHEucHVzaChkKX19fTtleHBvcnR7ciBhcyBBY3Rpb24sY3JlYXRlQnJvd3Nlckhpc3RvcnksY3JlYXRlSGFzaEhpc3RvcnksY3JlYXRlTWVtb3J5SGlzdG9yeSxJIGFzIGNyZWF0ZVBhdGgsSiBhcyBwYXJzZVBhdGh9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFjdHNcIjpcImlTVnFhM2hDd1FaM1JEMDFIZ09RXCIsXCJtb2JpbGVcIjpcImh5S09FSGltdndrYWE2SUt5NHo0XCIsXCJzZWFyY2hfaWNvblwiOlwiZ2VlbW9rVFpYWUNFakxWenI5MlFcIixcInNlYXJjaFwiOlwiWGxXOVpBb2hYZVo4VFVMWmtzWTNcIixcImZvY3VzLXZpc2libGVcIjpcInFGVWxSQTl6V2p6TnRuaWVXNnRwXCIsXCJub19yZXN1bHRzXCI6XCJCMFNYNXFnbFZ4WDlNUEtvUlZFS1wifTsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHkoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9aWYoIWFhKXRocm93IEVycm9yKHkoMjI3KSk7dmFyIGJhPW5ldyBTZXQsY2E9e307ZnVuY3Rpb24gZGEoYSxiKXtlYShhLGIpO2VhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBlYShhLGIpe2NhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyliYS5hZGQoYlthXSl9XG52YXIgZmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGhhPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxpYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuamE9e30sa2E9e307ZnVuY3Rpb24gbGEoYSl7aWYoaWEuY2FsbChrYSxhKSlyZXR1cm4hMDtpZihpYS5jYWxsKGphLGEpKXJldHVybiExO2lmKGhhLnRlc3QoYSkpcmV0dXJuIGthW2FdPSEwO2phW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIG1hKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gbmEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIG9hPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EsXG5wYSk7RFtiXT1uZXcgQihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5ELnhsaW5rSHJlZj1uZXcgQihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiBxYShhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChuYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/bGEoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbnZhciByYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxzYT02MDEwMyx0YT02MDEwNix1YT02MDEwNyx3YT02MDEwOCx4YT02MDExNCx5YT02MDEwOSx6YT02MDExMCxBYT02MDExMixCYT02MDExMyxDYT02MDEyMCxEYT02MDExNSxFYT02MDExNixGYT02MDEyMSxHYT02MDEyOCxIYT02MDEyOSxJYT02MDEzMCxKYT02MDEzMTtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciBFPVN5bWJvbC5mb3I7c2E9RShcInJlYWN0LmVsZW1lbnRcIik7dGE9RShcInJlYWN0LnBvcnRhbFwiKTt1YT1FKFwicmVhY3QuZnJhZ21lbnRcIik7d2E9RShcInJlYWN0LnN0cmljdF9tb2RlXCIpO3hhPUUoXCJyZWFjdC5wcm9maWxlclwiKTt5YT1FKFwicmVhY3QucHJvdmlkZXJcIik7emE9RShcInJlYWN0LmNvbnRleHRcIik7QWE9RShcInJlYWN0LmZvcndhcmRfcmVmXCIpO0JhPUUoXCJyZWFjdC5zdXNwZW5zZVwiKTtDYT1FKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtEYT1FKFwicmVhY3QubWVtb1wiKTtFYT1FKFwicmVhY3QubGF6eVwiKTtGYT1FKFwicmVhY3QuYmxvY2tcIik7RShcInJlYWN0LnNjb3BlXCIpO0dhPUUoXCJyZWFjdC5vcGFxdWUuaWRcIik7SGE9RShcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7SWE9RShcInJlYWN0Lm9mZnNjcmVlblwiKTtKYT1FKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKX1cbnZhciBLYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gTGEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUthJiZhW0thXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBNYTtmdW5jdGlvbiBOYShhKXtpZih2b2lkIDA9PT1NYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtNYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTWErYX12YXIgT2E9ITE7XG5mdW5jdGlvbiBQYShhLGIpe2lmKCFhfHxPYSlyZXR1cm5cIlwiO09hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChrKXt2YXIgZD1rfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2goayl7ZD1rfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goayl7ZD1rfWEoKX19Y2F0Y2goayl7aWYoayYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBrLnN0YWNrKXtmb3IodmFyIGU9ay5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXJldHVyblwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e09hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TmEoYSk6XCJcIn1cbmZ1bmN0aW9uIFFhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBOYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE5hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBOYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE5hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1QYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1QYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMjI6cmV0dXJuIGE9UGEoYS50eXBlLl9yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPVBhKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUmEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB0YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgeGE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2Ugd2E6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBCYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBDYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB6YTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSB5YTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBBYTp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtcbnJldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgRGE6cmV0dXJuIFJhKGEudHlwZSk7Y2FzZSBGYTpyZXR1cm4gUmEoYS5fcmVuZGVyKTtjYXNlIEVhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBSYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gJGEoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZxYShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYWIoYSxiKXskYShhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2JiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmJiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGJiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfWZ1bmN0aW9uIGRiKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGViKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9ZGIoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfVxuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IoeSg5MSkpO3JldHVybiBtKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHkoOTIpKTtpZihBcnJheS5pc0FycmF5KGMpKXtpZighKDE+PWMubGVuZ3RoKSl0aHJvdyBFcnJvcih5KDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIga2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gbGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/bGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbmIsb2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09a2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bmI9bmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gcGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBxYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxyYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocWIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtxYltiXT1xYlthXX0pfSk7ZnVuY3Rpb24gc2IoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHFiLmhhc093blByb3BlcnR5KGEpJiZxYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiB0YihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1zYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB1Yj1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdmIoYSxiKXtpZihiKXtpZih1YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHkoNjApKTtpZighKFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHkoNjIpKTt9fVxuZnVuY3Rpb24gd2IoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IoeSgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtyZXR1cm4gYShiLGMsZCxlKX1mdW5jdGlvbiBJYigpe312YXIgSmI9R2IsS2I9ITEsTGI9ITE7ZnVuY3Rpb24gTWIoKXtpZihudWxsIT09emJ8fG51bGwhPT1BYilJYigpLEZiKCl9XG5mdW5jdGlvbiBOYihhLGIsYyl7aWYoTGIpcmV0dXJuIGEoYixjKTtMYj0hMDt0cnl7cmV0dXJuIEpiKGEsYixjKX1maW5hbGx5e0xiPSExLE1iKCl9fVxuZnVuY3Rpb24gT2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcih5KDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIFBiPSExO2lmKGZhKXRyeXt2YXIgUWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFFiLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtQYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpfWNhdGNoKGEpe1BiPSExfWZ1bmN0aW9uIFJiKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBTYj0hMSxUYj1udWxsLFViPSExLFZiPW51bGwsV2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7U2I9ITA7VGI9YX19O2Z1bmN0aW9uIFhiKGEsYixjLGQsZSxmLGcsaCxrKXtTYj0hMTtUYj1udWxsO1JiLmFwcGx5KFdiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBZYihhLGIsYyxkLGUsZixnLGgsayl7WGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKFNiKXtpZihTYil7dmFyIGw9VGI7U2I9ITE7VGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHkoMTk4KSk7VWJ8fChVYj0hMCxWYj1sKX19ZnVuY3Rpb24gWmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiAkYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGFjKGEpe2lmKFpiKGEpIT09YSl0aHJvdyBFcnJvcih5KDE4OCkpO31cbmZ1bmN0aW9uIGJjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVpiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGFjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGFjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IoeSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih5KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHkoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gY2MoYSl7YT1iYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRjKGEsYil7Zm9yKHZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1iOyl7aWYoYj09PWF8fGI9PT1jKXJldHVybiEwO2I9Yi5yZXR1cm59cmV0dXJuITF9dmFyIGVjLGZjLGdjLGhjLGljPSExLGpjPVtdLGtjPW51bGwsbGM9bnVsbCxtYz1udWxsLG5jPW5ldyBNYXAsb2M9bmV3IE1hcCxwYz1bXSxxYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiByYyhhLGIsYyxkLGUpe3JldHVybntibG9ja2VkT246YSxkb21FdmVudE5hbWU6YixldmVudFN5c3RlbUZsYWdzOmN8MTYsbmF0aXZlRXZlbnQ6ZSx0YXJnZXRDb250YWluZXJzOltkXX19ZnVuY3Rpb24gc2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjprYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6bGM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6bWM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOm5jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOm9jLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gdGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT1yYyhiLGMsZCxlLGYpLG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmZmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gdWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4ga2M9dGMoa2MsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIGxjPXRjKGxjLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBtYz10YyhtYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO25jLnNldChmLHRjKG5jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxvYy5zZXQoZix0YyhvYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiB2YyhhKXt2YXIgYj13YyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVpiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPSRiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO2hjKGEubGFuZVByaW9yaXR5LGZ1bmN0aW9uKCl7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoYS5wcmlvcml0eSxmdW5jdGlvbigpe2djKGMpfSl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmh5ZHJhdGUpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24geGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZmYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiB6YyhhLGIsYyl7eGMoYSkmJmMuZGVsZXRlKGIpfVxuZnVuY3Rpb24gQWMoKXtmb3IoaWM9ITE7MDxqYy5sZW5ndGg7KXt2YXIgYT1qY1swXTtpZihudWxsIT09YS5ibG9ja2VkT24pe2E9Q2IoYS5ibG9ja2VkT24pO251bGwhPT1hJiZlYyhhKTticmVha31mb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yyl7YS5ibG9ja2VkT249YzticmVha31iLnNoaWZ0KCl9bnVsbD09PWEuYmxvY2tlZE9uJiZqYy5zaGlmdCgpfW51bGwhPT1rYyYmeGMoa2MpJiYoa2M9bnVsbCk7bnVsbCE9PWxjJiZ4YyhsYykmJihsYz1udWxsKTtudWxsIT09bWMmJnhjKG1jKSYmKG1jPW51bGwpO25jLmZvckVhY2goemMpO29jLmZvckVhY2goemMpfVxuZnVuY3Rpb24gQmMoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLGljfHwoaWM9ITAsci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksQWMpKSl9XG5mdW5jdGlvbiBDYyhhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBCYyhiLGEpfWlmKDA8amMubGVuZ3RoKXtCYyhqY1swXSxhKTtmb3IodmFyIGM9MTtjPGpjLmxlbmd0aDtjKyspe3ZhciBkPWpjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09a2MmJkJjKGtjLGEpO251bGwhPT1sYyYmQmMobGMsYSk7bnVsbCE9PW1jJiZCYyhtYyxhKTtuYy5mb3JFYWNoKGIpO29jLmZvckVhY2goYik7Zm9yKGM9MDtjPHBjLmxlbmd0aDtjKyspZD1wY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8cGMubGVuZ3RoJiYoYz1wY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOyl2YyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJnBjLnNoaWZ0KCl9XG5mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBFYz17YW5pbWF0aW9uZW5kOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6RGMoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxGYz17fSxHYz17fTtcbmZhJiYoR2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgRWMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgRWMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBIYyhhKXtpZihGY1thXSlyZXR1cm4gRmNbYV07aWYoIUVjW2FdKXJldHVybiBhO3ZhciBiPUVjW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIEdjKXJldHVybiBGY1thXT1iW2NdO3JldHVybiBhfVxudmFyIEljPUhjKFwiYW5pbWF0aW9uZW5kXCIpLEpjPUhjKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLEtjPUhjKFwiYW5pbWF0aW9uc3RhcnRcIiksTGM9SGMoXCJ0cmFuc2l0aW9uZW5kXCIpLE1jPW5ldyBNYXAsTmM9bmV3IE1hcCxPYz1bXCJhYm9ydFwiLFwiYWJvcnRcIixJYyxcImFuaW1hdGlvbkVuZFwiLEpjLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCIsS2MsXCJhbmltYXRpb25TdGFydFwiLFwiY2FucGxheVwiLFwiY2FuUGxheVwiLFwiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCIsXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIixcImVtcHRpZWRcIixcImVtcHRpZWRcIixcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmRlZFwiLFwiZW5kZWRcIixcImVycm9yXCIsXCJlcnJvclwiLFwiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsXCJsb2FkXCIsXCJsb2FkXCIsXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIixcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsXG5cImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIixcInNlZWtpbmdcIixcInNlZWtpbmdcIixcInN0YWxsZWRcIixcInN0YWxsZWRcIixcInN1c3BlbmRcIixcInN1c3BlbmRcIixcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixMYyxcInRyYW5zaXRpb25FbmRcIixcIndhaXRpbmdcIixcIndhaXRpbmdcIl07ZnVuY3Rpb24gUGMoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrPTIpe3ZhciBkPWFbY10sZT1hW2MrMV07ZT1cIm9uXCIrKGVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpKTtOYy5zZXQoZCxiKTtNYy5zZXQoZCxlKTtkYShlLFtkXSl9fXZhciBRYz1yLnVuc3RhYmxlX25vdztRYygpO3ZhciBGPTg7XG5mdW5jdGlvbiBSYyhhKXtpZigwIT09KDEmYSkpcmV0dXJuIEY9MTUsMTtpZigwIT09KDImYSkpcmV0dXJuIEY9MTQsMjtpZigwIT09KDQmYSkpcmV0dXJuIEY9MTMsNDt2YXIgYj0yNCZhO2lmKDAhPT1iKXJldHVybiBGPTEyLGI7aWYoMCE9PShhJjMyKSlyZXR1cm4gRj0xMSwzMjtiPTE5MiZhO2lmKDAhPT1iKXJldHVybiBGPTEwLGI7aWYoMCE9PShhJjI1NikpcmV0dXJuIEY9OSwyNTY7Yj0zNTg0JmE7aWYoMCE9PWIpcmV0dXJuIEY9OCxiO2lmKDAhPT0oYSY0MDk2KSlyZXR1cm4gRj03LDQwOTY7Yj00MTg2MTEyJmE7aWYoMCE9PWIpcmV0dXJuIEY9NixiO2I9NjI5MTQ1NjAmYTtpZigwIT09YilyZXR1cm4gRj01LGI7aWYoYSY2NzEwODg2NClyZXR1cm4gRj00LDY3MTA4ODY0O2lmKDAhPT0oYSYxMzQyMTc3MjgpKXJldHVybiBGPTMsMTM0MjE3NzI4O2I9ODA1MzA2MzY4JmE7aWYoMCE9PWIpcmV0dXJuIEY9MixiO2lmKDAhPT0oMTA3Mzc0MTgyNCZhKSlyZXR1cm4gRj0xLDEwNzM3NDE4MjQ7XG5GPTg7cmV0dXJuIGF9ZnVuY3Rpb24gU2MoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIDE1O2Nhc2UgOTg6cmV0dXJuIDEwO2Nhc2UgOTc6Y2FzZSA5NjpyZXR1cm4gODtjYXNlIDk1OnJldHVybiAyO2RlZmF1bHQ6cmV0dXJuIDB9fWZ1bmN0aW9uIFRjKGEpe3N3aXRjaChhKXtjYXNlIDE1OmNhc2UgMTQ6cmV0dXJuIDk5O2Nhc2UgMTM6Y2FzZSAxMjpjYXNlIDExOmNhc2UgMTA6cmV0dXJuIDk4O2Nhc2UgOTpjYXNlIDg6Y2FzZSA3OmNhc2UgNjpjYXNlIDQ6Y2FzZSA1OnJldHVybiA5NztjYXNlIDM6Y2FzZSAyOmNhc2UgMTpyZXR1cm4gOTU7Y2FzZSAwOnJldHVybiA5MDtkZWZhdWx0OnRocm93IEVycm9yKHkoMzU4LGEpKTt9fVxuZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gRj0wO3ZhciBkPTAsZT0wLGY9YS5leHBpcmVkTGFuZXMsZz1hLnN1c3BlbmRlZExhbmVzLGg9YS5waW5nZWRMYW5lcztpZigwIT09ZilkPWYsZT1GPTE1O2Vsc2UgaWYoZj1jJjEzNDIxNzcyNywwIT09Zil7dmFyIGs9ZiZ+ZzswIT09az8oZD1SYyhrKSxlPUYpOihoJj1mLDAhPT1oJiYoZD1SYyhoKSxlPUYpKX1lbHNlIGY9YyZ+ZywwIT09Zj8oZD1SYyhmKSxlPUYpOjAhPT1oJiYoZD1SYyhoKSxlPUYpO2lmKDA9PT1kKXJldHVybiAwO2Q9MzEtVmMoZCk7ZD1jJigoMD5kPzA6MTw8ZCk8PDEpLTE7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZykpe1JjKGIpO2lmKGU8PUYpcmV0dXJuIGI7Rj1lfWI9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtVmMoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiBXYyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24gWGMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxNTpyZXR1cm4gMTtjYXNlIDE0OnJldHVybiAyO2Nhc2UgMTI6cmV0dXJuIGE9WWMoMjQmfmIpLDA9PT1hP1hjKDEwLGIpOmE7Y2FzZSAxMDpyZXR1cm4gYT1ZYygxOTImfmIpLDA9PT1hP1hjKDgsYik6YTtjYXNlIDg6cmV0dXJuIGE9WWMoMzU4NCZ+YiksMD09PWEmJihhPVljKDQxODYxMTImfmIpLDA9PT1hJiYoYT01MTIpKSxhO2Nhc2UgMjpyZXR1cm4gYj1ZYyg4MDUzMDYzNjgmfmIpLDA9PT1iJiYoYj0yNjg0MzU0NTYpLGJ9dGhyb3cgRXJyb3IoeSgzNTgsYSkpO31mdW5jdGlvbiBZYyhhKXtyZXR1cm4gYSYtYX1mdW5jdGlvbiBaYyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjt2YXIgZD1iLTE7YS5zdXNwZW5kZWRMYW5lcyY9ZDthLnBpbmdlZExhbmVzJj1kO2E9YS5ldmVudFRpbWVzO2I9MzEtVmMoYik7YVtiXT1jfXZhciBWYz1NYXRoLmNsejMyP01hdGguY2x6MzI6YWQsYmQ9TWF0aC5sb2csY2Q9TWF0aC5MTjI7ZnVuY3Rpb24gYWQoYSl7cmV0dXJuIDA9PT1hPzMyOjMxLShiZChhKS9jZHwwKXwwfXZhciBkZD1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGVkPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LGZkPSEwO2Z1bmN0aW9uIGdkKGEsYixjLGQpe0tifHxJYigpO3ZhciBlPWhkLGY9S2I7S2I9ITA7dHJ5e0hiKGUsYSxiLGMsZCl9ZmluYWxseXsoS2I9Zil8fE1iKCl9fWZ1bmN0aW9uIGlkKGEsYixjLGQpe2VkKGRkLGhkLmJpbmQobnVsbCxhLGIsYyxkKSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkKXtpZihmZCl7dmFyIGU7aWYoKGU9MD09PShiJjQpKSYmMDxqYy5sZW5ndGgmJi0xPHFjLmluZGV4T2YoYSkpYT1yYyhudWxsLGEsYixjLGQpLGpjLnB1c2goYSk7ZWxzZXt2YXIgZj15YyhhLGIsYyxkKTtpZihudWxsPT09ZillJiZzYyhhLGQpO2Vsc2V7aWYoZSl7aWYoLTE8cWMuaW5kZXhPZihhKSl7YT1yYyhmLGEsYixjLGQpO2pjLnB1c2goYSk7cmV0dXJufWlmKHVjKGYsYSxiLGMsZCkpcmV0dXJuO3NjKGEsZCl9amQoYSxiLGQsbnVsbCxjKX19fX1cbmZ1bmN0aW9uIHljKGEsYixjLGQpe3ZhciBlPXhiKGQpO2U9d2MoZSk7aWYobnVsbCE9PWUpe3ZhciBmPVpiKGUpO2lmKG51bGw9PT1mKWU9bnVsbDtlbHNle3ZhciBnPWYudGFnO2lmKDEzPT09Zyl7ZT0kYihmKTtpZihudWxsIT09ZSlyZXR1cm4gZTtlPW51bGx9ZWxzZSBpZigzPT09Zyl7aWYoZi5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWYudGFnP2Yuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtlPW51bGx9ZWxzZSBmIT09ZSYmKGU9bnVsbCl9fWpkKGEsYixkLGUsYyk7cmV0dXJuIG51bGx9dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO1xuZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9bShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9bSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPW0oe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPW0oe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPW0oe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1tKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9bSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1tKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9bSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1tKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1tKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9bSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9bSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9ZmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWZhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9ZmEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoZmEpe3ZhciB4ZTtpZihmYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO2E9cmU7aWYoS2IpYShiKTtlbHNle0tiPSEwO3RyeXtHYihhLGIpfWZpbmFsbHl7S2I9ITEsTWIoKX19fX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBKZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighSWUuY2FsbChiLGNbZF0pfHwhSGUoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBLZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZShhLGIpe3ZhciBjPUtlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtlKGMpfX1mdW5jdGlvbiBNZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01lKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgUGU9ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk9lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkplKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cblBjKFwiY2FuY2VsIGNhbmNlbCBjbGljayBjbGljayBjbG9zZSBjbG9zZSBjb250ZXh0bWVudSBjb250ZXh0TWVudSBjb3B5IGNvcHkgY3V0IGN1dCBhdXhjbGljayBhdXhDbGljayBkYmxjbGljayBkb3VibGVDbGljayBkcmFnZW5kIGRyYWdFbmQgZHJhZ3N0YXJ0IGRyYWdTdGFydCBkcm9wIGRyb3AgZm9jdXNpbiBmb2N1cyBmb2N1c291dCBibHVyIGlucHV0IGlucHV0IGludmFsaWQgaW52YWxpZCBrZXlkb3duIGtleURvd24ga2V5cHJlc3Mga2V5UHJlc3Mga2V5dXAga2V5VXAgbW91c2Vkb3duIG1vdXNlRG93biBtb3VzZXVwIG1vdXNlVXAgcGFzdGUgcGFzdGUgcGF1c2UgcGF1c2UgcGxheSBwbGF5IHBvaW50ZXJjYW5jZWwgcG9pbnRlckNhbmNlbCBwb2ludGVyZG93biBwb2ludGVyRG93biBwb2ludGVydXAgcG9pbnRlclVwIHJhdGVjaGFuZ2UgcmF0ZUNoYW5nZSByZXNldCByZXNldCBzZWVrZWQgc2Vla2VkIHN1Ym1pdCBzdWJtaXQgdG91Y2hjYW5jZWwgdG91Y2hDYW5jZWwgdG91Y2hlbmQgdG91Y2hFbmQgdG91Y2hzdGFydCB0b3VjaFN0YXJ0IHZvbHVtZWNoYW5nZSB2b2x1bWVDaGFuZ2VcIi5zcGxpdChcIiBcIiksXG4wKTtQYyhcImRyYWcgZHJhZyBkcmFnZW50ZXIgZHJhZ0VudGVyIGRyYWdleGl0IGRyYWdFeGl0IGRyYWdsZWF2ZSBkcmFnTGVhdmUgZHJhZ292ZXIgZHJhZ092ZXIgbW91c2Vtb3ZlIG1vdXNlTW92ZSBtb3VzZW91dCBtb3VzZU91dCBtb3VzZW92ZXIgbW91c2VPdmVyIHBvaW50ZXJtb3ZlIHBvaW50ZXJNb3ZlIHBvaW50ZXJvdXQgcG9pbnRlck91dCBwb2ludGVyb3ZlciBwb2ludGVyT3ZlciBzY3JvbGwgc2Nyb2xsIHRvZ2dsZSB0b2dnbGUgdG91Y2htb3ZlIHRvdWNoTW92ZSB3aGVlbCB3aGVlbFwiLnNwbGl0KFwiIFwiKSwxKTtQYyhPYywyKTtmb3IodmFyIFZlPVwiY2hhbmdlIHNlbGVjdGlvbmNoYW5nZSB0ZXh0SW5wdXQgY29tcG9zaXRpb25zdGFydCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnVwZGF0ZVwiLnNwbGl0KFwiIFwiKSxXZT0wO1dlPFZlLmxlbmd0aDtXZSsrKU5jLnNldChWZVtXZV0sMCk7ZWEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtcbmVhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtlYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2RhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZGEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5kYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIFhlPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxZZT1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChYZSkpO1xuZnVuY3Rpb24gWmUoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7WWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfX19aWYoVWIpdGhyb3cgYT1WYixVYj0hMSxWYj1udWxsLGE7fVxuZnVuY3Rpb24gRyhhLGIpe3ZhciBjPSRlKGIpLGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChhZihiLGEsMiwhMSksYy5hZGQoZCkpfXZhciBiZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIGNmKGEpe2FbYmZdfHwoYVtiZl09ITAsYmEuZm9yRWFjaChmdW5jdGlvbihiKXtZZS5oYXMoYil8fGRmKGIsITEsYSxudWxsKTtkZihiLCEwLGEsbnVsbCl9KSl9XG5mdW5jdGlvbiBkZihhLGIsYyxkKXt2YXIgZT00PGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxmPWM7XCJzZWxlY3Rpb25jaGFuZ2VcIj09PWEmJjkhPT1jLm5vZGVUeXBlJiYoZj1jLm93bmVyRG9jdW1lbnQpO2lmKG51bGwhPT1kJiYhYiYmWWUuaGFzKGEpKXtpZihcInNjcm9sbFwiIT09YSlyZXR1cm47ZXw9MjtmPWR9dmFyIGc9JGUoZiksaD1hK1wiX19cIisoYj9cImNhcHR1cmVcIjpcImJ1YmJsZVwiKTtnLmhhcyhoKXx8KGImJihlfD00KSxhZihmLGEsZSxiKSxnLmFkZChoKSl9XG5mdW5jdGlvbiBhZihhLGIsYyxkKXt2YXIgZT1OYy5nZXQoYik7c3dpdGNoKHZvaWQgMD09PWU/MjplKXtjYXNlIDA6ZT1nZDticmVhaztjYXNlIDE6ZT1pZDticmVhaztkZWZhdWx0OmU9aGR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IVBifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGpkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9d2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufU5iKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1NYy5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQseD1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjp4PVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOng9XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlIEljOmNhc2UgSmM6Y2FzZSBLYzprPUhkO2JyZWFrO2Nhc2UgTGM6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdz0wIT09KGImNCksej0hdyYmXCJzY3JvbGxcIj09PWEsdT13P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3c9W107Zm9yKHZhciB0PWQscTtudWxsIT09XG50Oyl7cT10O3ZhciB2PXEuc3RhdGVOb2RlOzU9PT1xLnRhZyYmbnVsbCE9PXYmJihxPXYsbnVsbCE9PXUmJih2PU9iKHQsdSksbnVsbCE9diYmdy5wdXNoKGVmKHQsdixxKSkpKTtpZih6KWJyZWFrO3Q9dC5yZXR1cm59MDx3Lmxlbmd0aCYmKGg9bmV3IGsoaCx4LG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnd9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiYwPT09KGImMTYpJiYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYod2MoeCl8fHhbZmZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCx4PXg/d2MoeCk6bnVsbCxudWxsIT09XG54JiYoej1aYih4KSx4IT09enx8NSE9PXgudGFnJiY2IT09eC50YWcpKXg9bnVsbH1lbHNlIGs9bnVsbCx4PWQ7aWYoayE9PXgpe3c9QmQ7dj1cIm9uTW91c2VMZWF2ZVwiO3U9XCJvbk1vdXNlRW50ZXJcIjt0PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdz1UZCx2PVwib25Qb2ludGVyTGVhdmVcIix1PVwib25Qb2ludGVyRW50ZXJcIix0PVwicG9pbnRlclwiO3o9bnVsbD09az9oOnVlKGspO3E9bnVsbD09eD9oOnVlKHgpO2g9bmV3IHcodix0K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9ejtoLnJlbGF0ZWRUYXJnZXQ9cTt2PW51bGw7d2MoZSk9PT1kJiYodz1uZXcgdyh1LHQrXCJlbnRlclwiLHgsYyxlKSx3LnRhcmdldD1xLHcucmVsYXRlZFRhcmdldD16LHY9dyk7ej12O2lmKGsmJngpYjp7dz1rO3U9eDt0PTA7Zm9yKHE9dztxO3E9Z2YocSkpdCsrO3E9MDtmb3Iodj11O3Y7dj1nZih2KSlxKys7Zm9yKDswPHQtcTspdz1nZih3KSx0LS07Zm9yKDswPHEtdDspdT1cbmdmKHUpLHEtLTtmb3IoO3QtLTspe2lmKHc9PT11fHxudWxsIT09dSYmdz09PXUuYWx0ZXJuYXRlKWJyZWFrIGI7dz1nZih3KTt1PWdmKHUpfXc9bnVsbH1lbHNlIHc9bnVsbDtudWxsIT09ayYmaGYoZyxoLGssdywhMSk7bnVsbCE9PXgmJm51bGwhPT16JiZoZihnLHoseCx3LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBKPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpSj1GZTtlbHNle0o9RGU7dmFyIEs9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihKPUVlKTtpZihKJiYoSj1KKGEsZCkpKXtuZShnLEosYyxlKTticmVhayBhfUsmJksoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJihLPWguX3dyYXBwZXJTdGF0ZSkmJlxuSy5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZiYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9Sz1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZShLKXx8XCJ0cnVlXCI9PT1LLmNvbnRlbnRFZGl0YWJsZSlRZT1LLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgUTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6TD1cIm9uQ29tcG9zaXRpb25FbmRcIjticmVhayBiO1xuY2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6TD1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifUw9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKEw9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtMJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1MP1wib25Db21wb3NpdGlvbkVuZFwiPT09TCYmaWUmJihRPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSksSz1vZShkLEwpLDA8Sy5sZW5ndGgmJihMPW5ldyBMZChMLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6TCxsaXN0ZW5lcnM6S30pLFE/TC5kYXRhPVE6KFE9aGUoYyksbnVsbCE9PVEmJihMLmRhdGE9USkpKSk7aWYoUT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSwwPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXG5cImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT1RKX1zZShnLGIpfSl9ZnVuY3Rpb24gZWYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPU9iKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KGVmKGEsZixlKSksZj1PYihhLGIpLG51bGwhPWYmJmQucHVzaChlZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIGdmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBoZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPU9iKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KGVmKGMsayxoKSkpOmV8fChrPU9iKGMsZiksbnVsbCE9ayYmZy5wdXNoKGVmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9ZnVuY3Rpb24gamYoKXt9dmFyIGtmPW51bGwsbGY9bnVsbDtmdW5jdGlvbiBtZihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9XG5mdW5jdGlvbiBuZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9dmFyIG9mPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHBmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMDtmdW5jdGlvbiBxZihhKXsxPT09YS5ub2RlVHlwZT9hLnRleHRDb250ZW50PVwiXCI6OT09PWEubm9kZVR5cGUmJihhPWEuYm9keSxudWxsIT1hJiYoYS50ZXh0Q29udGVudD1cIlwiKSl9XG5mdW5jdGlvbiByZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1mdW5jdGlvbiBzZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgdGY9MDtmdW5jdGlvbiB1ZihhKXtyZXR1cm57JCR0eXBlb2Y6R2EsdG9TdHJpbmc6YSx2YWx1ZU9mOmF9fXZhciB2Zj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx3Zj1cIl9fcmVhY3RGaWJlciRcIit2Zix4Zj1cIl9fcmVhY3RQcm9wcyRcIit2ZixmZj1cIl9fcmVhY3RDb250YWluZXIkXCIrdmYseWY9XCJfX3JlYWN0RXZlbnRzJFwiK3ZmO1xuZnVuY3Rpb24gd2MoYSl7dmFyIGI9YVt3Zl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbZmZdfHxjW3dmXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPXNmKGEpO251bGwhPT1hOyl7aWYoYz1hW3dmXSlyZXR1cm4gYzthPXNmKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbd2ZdfHxhW2ZmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHkoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbeGZdfHxudWxsfVxuZnVuY3Rpb24gJGUoYSl7dmFyIGI9YVt5Zl07dm9pZCAwPT09YiYmKGI9YVt5Zl09bmV3IFNldCk7cmV0dXJuIGJ9dmFyIHpmPVtdLEFmPS0xO2Z1bmN0aW9uIEJmKGEpe3JldHVybntjdXJyZW50OmF9fWZ1bmN0aW9uIEgoYSl7MD5BZnx8KGEuY3VycmVudD16ZltBZl0semZbQWZdPW51bGwsQWYtLSl9ZnVuY3Rpb24gSShhLGIpe0FmKys7emZbQWZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgQ2Y9e30sTT1CZihDZiksTj1CZighMSksRGY9Q2Y7XG5mdW5jdGlvbiBFZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIENmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEZmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gR2YoKXtIKE4pO0goTSl9ZnVuY3Rpb24gSGYoYSxiLGMpe2lmKE0uY3VycmVudCE9PUNmKXRocm93IEVycm9yKHkoMTY4KSk7SShNLGIpO0koTixjKX1cbmZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IoeSgxMDgsUmEoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIEpmKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxDZjtEZj1NLmN1cnJlbnQ7SShNLGEpO0koTixOLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIEtmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcih5KDE2OSkpO2M/KGE9SWYoYSxiLERmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsSChOKSxIKE0pLEkoTSxhKSk6SChOKTtJKE4sYyl9XG52YXIgTGY9bnVsbCxNZj1udWxsLE5mPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LE9mPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxQZj1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFFmPXIudW5zdGFibGVfc2hvdWxkWWllbGQsUmY9ci51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsU2Y9ci51bnN0YWJsZV9ub3csVGY9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxVZj1yLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFZmPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksV2Y9ci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxYZj1yLnVuc3RhYmxlX0xvd1ByaW9yaXR5LFlmPXIudW5zdGFibGVfSWRsZVByaW9yaXR5LFpmPXt9LCRmPXZvaWQgMCE9PVJmP1JmOmZ1bmN0aW9uKCl7fSxhZz1udWxsLGJnPW51bGwsY2c9ITEsZGc9U2YoKSxPPTFFND5kZz9TZjpmdW5jdGlvbigpe3JldHVybiBTZigpLWRnfTtcbmZ1bmN0aW9uIGVnKCl7c3dpdGNoKFRmKCkpe2Nhc2UgVWY6cmV0dXJuIDk5O2Nhc2UgVmY6cmV0dXJuIDk4O2Nhc2UgV2Y6cmV0dXJuIDk3O2Nhc2UgWGY6cmV0dXJuIDk2O2Nhc2UgWWY6cmV0dXJuIDk1O2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiBVZjtjYXNlIDk4OnJldHVybiBWZjtjYXNlIDk3OnJldHVybiBXZjtjYXNlIDk2OnJldHVybiBYZjtjYXNlIDk1OnJldHVybiBZZjtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBnZyhhLGIpe2E9ZmcoYSk7cmV0dXJuIE5mKGEsYil9ZnVuY3Rpb24gaGcoYSxiLGMpe2E9ZmcoYSk7cmV0dXJuIE9mKGEsYixjKX1mdW5jdGlvbiBpZygpe2lmKG51bGwhPT1iZyl7dmFyIGE9Ymc7Ymc9bnVsbDtQZihhKX1qZygpfVxuZnVuY3Rpb24gamcoKXtpZighY2cmJm51bGwhPT1hZyl7Y2c9ITA7dmFyIGE9MDt0cnl7dmFyIGI9YWc7Z2coOTksZnVuY3Rpb24oKXtmb3IoO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdO2RvIGM9YyghMCk7d2hpbGUobnVsbCE9PWMpfX0pO2FnPW51bGx9Y2F0Y2goYyl7dGhyb3cgbnVsbCE9PWFnJiYoYWc9YWcuc2xpY2UoYSsxKSksT2YoVWYsaWcpLGM7fWZpbmFsbHl7Y2c9ITF9fX12YXIga2c9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7ZnVuY3Rpb24gbGcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9dmFyIG1nPUJmKG51bGwpLG5nPW51bGwsb2c9bnVsbCxwZz1udWxsO2Z1bmN0aW9uIHFnKCl7cGc9b2c9bmc9bnVsbH1cbmZ1bmN0aW9uIHJnKGEpe3ZhciBiPW1nLmN1cnJlbnQ7SChtZyk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBzZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZigoYS5jaGlsZExhbmVzJmIpPT09YilpZihudWxsPT09Y3x8KGMuY2hpbGRMYW5lcyZiKT09PWIpYnJlYWs7ZWxzZSBjLmNoaWxkTGFuZXN8PWI7ZWxzZSBhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpO2E9YS5yZXR1cm59fWZ1bmN0aW9uIHRnKGEsYil7bmc9YTtwZz1vZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKHVnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1cbmZ1bmN0aW9uIHZnKGEsYil7aWYocGchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXBnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O2lmKG51bGw9PT1vZyl7aWYobnVsbD09PW5nKXRocm93IEVycm9yKHkoMzA4KSk7b2c9YjtuZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmIscmVzcG9uZGVyczpudWxsfX1lbHNlIG9nPW9nLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciB3Zz0hMTtmdW5jdGlvbiB4ZyhhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGx9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiB5ZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiB6ZyhhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1mdW5jdGlvbiBBZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YSl7YT1hLnNoYXJlZDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifX1cbmZ1bmN0aW9uIEJnKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBDZyhhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO3dnPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG49YS5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe249bi51cGRhdGVRdWV1ZTt2YXIgQT1uLmxhc3RCYXNlVXBkYXRlO0EhPT1nJiYobnVsbD09PUE/bi5maXJzdEJhc2VVcGRhdGU9bDpBLm5leHQ9bCxuLmxhc3RCYXNlVXBkYXRlPWspfX1pZihudWxsIT09Zil7QT1lLmJhc2VTdGF0ZTtnPTA7bj1sPWs9bnVsbDtkb3toPWYubGFuZTt2YXIgcD1mLmV2ZW50VGltZTtpZigoZCZoKT09PWgpe251bGwhPT1uJiYobj1uLm5leHQ9e2V2ZW50VGltZTpwLGxhbmU6MCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBDPWEseD1mO2g9YjtwPWM7c3dpdGNoKHgudGFnKXtjYXNlIDE6Qz14LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEMpe0E9Qy5jYWxsKHAsQSxoKTticmVhayBhfUE9QzticmVhayBhO2Nhc2UgMzpDLmZsYWdzPUMuZmxhZ3MmLTQwOTd8NjQ7Y2FzZSAwOkM9eC5wYXlsb2FkO2g9XCJmdW5jdGlvblwiPT09dHlwZW9mIEM/Qy5jYWxsKHAsQSxoKTpDO2lmKG51bGw9PT1ofHx2b2lkIDA9PT1oKWJyZWFrIGE7QT1tKHt9LEEsaCk7YnJlYWsgYTtjYXNlIDI6d2c9ITB9fW51bGwhPT1mLmNhbGxiYWNrJiYoYS5mbGFnc3w9MzIsaD1lLmVmZmVjdHMsbnVsbD09PWg/ZS5lZmZlY3RzPVtmXTpoLnB1c2goZikpfWVsc2UgcD17ZXZlbnRUaW1lOnAsbGFuZTpoLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW4/KGw9bj1wLGs9QSk6bj1uLm5leHQ9cCxnfD1oO2Y9Zi5uZXh0O2lmKG51bGw9PT1cbmYpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2UgZj1oLm5leHQsaC5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1oLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09biYmKGs9QSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bjtEZ3w9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPUF9fWZ1bmN0aW9uIEVnKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcih5KDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIEZnPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gR2coYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEtnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1piKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9SGcoKSxkPUlnKGEpLGU9emcoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1cbmIpO0FnKGEsZSk7SmcoYSxkLGMpfX07ZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSmUoYyxkKXx8IUplKGUsZik6ITB9XG5mdW5jdGlvbiBNZyhhLGIsYyl7dmFyIGQ9ITEsZT1DZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj12ZyhmKTooZT1GZihiKT9EZjpNLmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9FZihhLGUpOkNmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9S2c7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBOZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBPZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUZnO3hnKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9dmcoZik6KGY9RmYoYik/RGY6TS5jdXJyZW50LGUuY29udGV4dD1FZihhLGYpKTtDZyhhLGMsZSxkKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoR2coYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8XG4oYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksQ2coYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NCl9dmFyIFBnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBRZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHkoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IoeSgxNDcsYSkpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09RmcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IoeSgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IoeSgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIFJnKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IEVycm9yKHkoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7fVxuZnVuY3Rpb24gU2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5mbGFncz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1UZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFncz0yLFxuYyk6ZDtiLmZsYWdzPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1VZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1RZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9UWcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5XZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBBKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1VZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYz1WZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1RZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgdGE6cmV0dXJuIGI9V2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKFBnKGIpfHxMYShiKSlyZXR1cm4gYj1YZyhiLFxuYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO1JnKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PXVhP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSB0YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihQZyhjKXx8TGEoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO1JnKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxcbm51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT11YT9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSB0YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihQZyhkKXx8TGEoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO1JnKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCx0PW51bGwsdT1nLHo9Zz0wLHE9bnVsbDtudWxsIT09dSYmejxoLmxlbmd0aDt6Kyspe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIG49cChlLHUsaFt6XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT1cbm4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx6KTtudWxsPT09dD9sPW46dC5zaWJsaW5nPW47dD1uO3U9cX1pZih6PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoO3o8aC5sZW5ndGg7eisrKXU9QShlLGhbel0sayksbnVsbCE9PXUmJihnPWYodSxnLHopLG51bGw9PT10P2w9dTp0LnNpYmxpbmc9dSx0PXUpO3JldHVybiBsfWZvcih1PWQoZSx1KTt6PGgubGVuZ3RoO3orKylxPUModSxlLHosaFt6XSxrKSxudWxsIT09cSYmKGEmJm51bGwhPT1xLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXEua2V5P3o6cS5rZXkpLGc9ZihxLGcseiksbnVsbD09PXQ/bD1xOnQuc2libGluZz1xLHQ9cSk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiB3KGUsZyxoLGspe3ZhciBsPUxhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHkoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09XG5oKXRocm93IEVycm9yKHkoMTUxKSk7Zm9yKHZhciB0PWw9bnVsbCx1PWcsej1nPTAscT1udWxsLG49aC5uZXh0KCk7bnVsbCE9PXUmJiFuLmRvbmU7eisrLG49aC5uZXh0KCkpe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIHc9cChlLHUsbi52YWx1ZSxrKTtpZihudWxsPT09dyl7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHUpO2c9Zih3LGcseik7bnVsbD09PXQ/bD13OnQuc2libGluZz13O3Q9dzt1PXF9aWYobi5kb25lKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDshbi5kb25lO3orKyxuPWgubmV4dCgpKW49QShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO3JldHVybiBsfWZvcih1PWQoZSx1KTshbi5kb25lO3orKyxuPWgubmV4dCgpKW49Qyh1LGUseixuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZcbnUuZGVsZXRlKG51bGw9PT1uLmtleT96Om4ua2V5KSxnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXVhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHNhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bCl7c3dpdGNoKGsudGFnKXtjYXNlIDc6aWYoZi50eXBlPT09dWEpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YnJlYWs7ZGVmYXVsdDppZihrLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtcbmQ9ZShrLGYucHJvcHMpO2QucmVmPVFnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1jKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09dWE/KGQ9WGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVZnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVFnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB0YTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1cbldnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPVVnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKFBnKGYpKXJldHVybiB4KGEsZCxmLGgpO2lmKExhKGYpKXJldHVybiB3KGEsZCxmLGgpO2wmJlJnKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDIyOmNhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGhyb3cgRXJyb3IoeSgxNTIsUmEoYS50eXBlKXx8XCJDb21wb25lbnRcIikpO31yZXR1cm4gYyhhLGQpfX12YXIgWWc9U2coITApLFpnPVNnKCExKSwkZz17fSxhaD1CZigkZyksYmg9QmYoJGcpLGNoPUJmKCRnKTtcbmZ1bmN0aW9uIGRoKGEpe2lmKGE9PT0kZyl0aHJvdyBFcnJvcih5KDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIGVoKGEsYil7SShjaCxiKTtJKGJoLGEpO0koYWgsJGcpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bWIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPW1iKGIsYSl9SChhaCk7SShhaCxiKX1mdW5jdGlvbiBmaCgpe0goYWgpO0goYmgpO0goY2gpfWZ1bmN0aW9uIGdoKGEpe2RoKGNoLmN1cnJlbnQpO3ZhciBiPWRoKGFoLmN1cnJlbnQpO3ZhciBjPW1iKGIsYS50eXBlKTtiIT09YyYmKEkoYmgsYSksSShhaCxjKSl9ZnVuY3Rpb24gaGgoYSl7YmguY3VycmVudD09PWEmJihIKGFoKSxIKGJoKSl9dmFyIFA9QmYoMCk7XG5mdW5jdGlvbiBpaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBqaD1udWxsLGtoPW51bGwsbGg9ITE7XG5mdW5jdGlvbiBtaChhLGIpe3ZhciBjPW5oKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmZsYWdzPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBvaChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcGgoYSl7aWYobGgpe3ZhciBiPWtoO2lmKGIpe3ZhciBjPWI7aWYoIW9oKGEsYikpe2I9cmYoYy5uZXh0U2libGluZyk7aWYoIWJ8fCFvaChhLGIpKXthLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MjtsaD0hMTtqaD1hO3JldHVybn1taChqaCxjKX1qaD1hO2toPXJmKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MixsaD0hMSxqaD1hfX1mdW5jdGlvbiBxaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47amg9YX1cbmZ1bmN0aW9uIHJoKGEpe2lmKGEhPT1qaClyZXR1cm4hMTtpZighbGgpcmV0dXJuIHFoKGEpLGxoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhbmYoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWtoO2I7KW1oKGEsYiksYj1yZihiLm5leHRTaWJsaW5nKTtxaChhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHkoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe2toPXJmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9a2g9bnVsbH19ZWxzZSBraD1qaD9yZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1cbmZ1bmN0aW9uIHNoKCl7a2g9amg9bnVsbDtsaD0hMX12YXIgdGg9W107ZnVuY3Rpb24gdWgoKXtmb3IodmFyIGE9MDthPHRoLmxlbmd0aDthKyspdGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDt0aC5sZW5ndGg9MH12YXIgdmg9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcix3aD1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyx4aD0wLFI9bnVsbCxTPW51bGwsVD1udWxsLHloPSExLHpoPSExO2Z1bmN0aW9uIEFoKCl7dGhyb3cgRXJyb3IoeSgzMjEpKTt9ZnVuY3Rpb24gQmgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIENoKGEsYixjLGQsZSxmKXt4aD1mO1I9YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO3ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/RGg6RWg7YT1jKGQsZSk7aWYoemgpe2Y9MDtkb3t6aD0hMTtpZighKDI1PmYpKXRocm93IEVycm9yKHkoMzAxKSk7Zis9MTtUPVM9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7dmguY3VycmVudD1GaDthPWMoZCxlKX13aGlsZSh6aCl9dmguY3VycmVudD1HaDtiPW51bGwhPT1TJiZudWxsIT09Uy5uZXh0O3hoPTA7VD1TPVI9bnVsbDt5aD0hMTtpZihiKXRocm93IEVycm9yKHkoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWE7cmV0dXJuIFR9XG5mdW5jdGlvbiBJaCgpe2lmKG51bGw9PT1TKXt2YXIgYT1SLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1TLm5leHQ7dmFyIGI9bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlOlQubmV4dDtpZihudWxsIT09YilUPWIsUz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeSgzMTApKTtTPWE7YT17bWVtb2l6ZWRTdGF0ZTpTLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOlMuYmFzZVN0YXRlLGJhc2VRdWV1ZTpTLmJhc2VRdWV1ZSxxdWV1ZTpTLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hfXJldHVybiBUfWZ1bmN0aW9uIEpoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gS2goYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1TLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2U9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1mPW51bGwsaz1lO2Rve3ZhciBsPWsubGFuZTtpZigoeGgmbCk9PT1sKW51bGwhPT1oJiYoaD1oLm5leHQ9e2xhbmU6MCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLGVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGQsay5hY3Rpb24pO2Vsc2V7dmFyIG49e2xhbmU6bCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLFxuZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09aD8oZz1oPW4sZj1kKTpoPWgubmV4dD1uO1IubGFuZXN8PWw7RGd8PWx9az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1lKTtudWxsPT09aD9mPWQ6aC5uZXh0PWc7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWY7Yi5iYXNlUXVldWU9aDtjLmxhc3RSZW5kZXJlZFN0YXRlPWR9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIExoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfVxuZnVuY3Rpb24gTWgoYSxiLGMpe3ZhciBkPWIuX2dldFZlcnNpb247ZD1kKGIuX3NvdXJjZSk7dmFyIGU9Yi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeTtpZihudWxsIT09ZSlhPWU9PT1kO2Vsc2UgaWYoYT1hLm11dGFibGVSZWFkTGFuZXMsYT0oeGgmYSk9PT1hKWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9ZCx0aC5wdXNoKGIpO2lmKGEpcmV0dXJuIGMoYi5fc291cmNlKTt0aC5wdXNoKGIpO3Rocm93IEVycm9yKHkoMzUwKSk7fVxuZnVuY3Rpb24gTmgoYSxiLGMsZCl7dmFyIGU9VTtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih5KDM0OSkpO3ZhciBmPWIuX2dldFZlcnNpb24sZz1mKGIuX3NvdXJjZSksaD12aC5jdXJyZW50LGs9aC51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBNaChlLGIsYyl9KSxsPWtbMV0sbj1rWzBdO2s9VDt2YXIgQT1hLm1lbW9pemVkU3RhdGUscD1BLnJlZnMsQz1wLmdldFNuYXBzaG90LHg9QS5zb3VyY2U7QT1BLnN1YnNjcmliZTt2YXIgdz1SO2EubWVtb2l6ZWRTdGF0ZT17cmVmczpwLHNvdXJjZTpiLHN1YnNjcmliZTpkfTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3AuZ2V0U25hcHNob3Q9YztwLnNldFNuYXBzaG90PWw7dmFyIGE9ZihiLl9zb3VyY2UpO2lmKCFIZShnLGEpKXthPWMoYi5fc291cmNlKTtIZShuLGEpfHwobChhKSxhPUlnKHcpLGUubXV0YWJsZVJlYWRMYW5lc3w9YSZlLnBlbmRpbmdMYW5lcyk7YT1lLm11dGFibGVSZWFkTGFuZXM7ZS5lbnRhbmdsZWRMYW5lc3w9YTtmb3IodmFyIGQ9XG5lLmVudGFuZ2xlbWVudHMsaD1hOzA8aDspe3ZhciBrPTMxLVZjKGgpLHY9MTw8aztkW2tdfD1hO2gmPX52fX19LFtjLGIsZF0pO2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGQoYi5fc291cmNlLGZ1bmN0aW9uKCl7dmFyIGE9cC5nZXRTbmFwc2hvdCxjPXAuc2V0U25hcHNob3Q7dHJ5e2MoYShiLl9zb3VyY2UpKTt2YXIgZD1JZyh3KTtlLm11dGFibGVSZWFkTGFuZXN8PWQmZS5wZW5kaW5nTGFuZXN9Y2F0Y2gocSl7YyhmdW5jdGlvbigpe3Rocm93IHE7fSl9fSl9LFtiLGRdKTtIZShDLGMpJiZIZSh4LGIpJiZIZShBLGQpfHwoYT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTpufSxhLmRpc3BhdGNoPWw9T2guYmluZChudWxsLFIsYSksay5xdWV1ZT1hLGsuYmFzZVF1ZXVlPW51bGwsbj1NaChlLGIsYyksay5tZW1vaXplZFN0YXRlPWsuYmFzZVN0YXRlPW4pO3JldHVybiBufVxuZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPUloKCk7cmV0dXJuIE5oKGQsYSxiLGMpfWZ1bmN0aW9uIFFoKGEpe3ZhciBiPUhoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gUmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9Ui51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsfSxSLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKGEpe3ZhciBiPUhoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9ZnVuY3Rpb24gVGgoKXtyZXR1cm4gSWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIFVoKGEsYixjLGQpe3ZhciBlPUhoKCk7Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIFZoKGEsYixjLGQpe3ZhciBlPUloKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVMpe3ZhciBnPVMubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmQmgoZCxnLmRlcHMpKXtSaChiLGMsZixkKTtyZXR1cm59fVIuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLGYsZCl9ZnVuY3Rpb24gV2goYSxiKXtyZXR1cm4gVWgoNTE2LDQsYSxiKX1mdW5jdGlvbiBYaChhLGIpe3JldHVybiBWaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFZoKDQsMixhLGIpfWZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19XG5mdW5jdGlvbiAkaChhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFZoKDQsMixaaC5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiBhaSgpe31mdW5jdGlvbiBiaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiBjaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGRpKGEsYil7dmFyIGM9ZWcoKTtnZyg5OD5jPzk4OmMsZnVuY3Rpb24oKXthKCEwKX0pO2dnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBjPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXthKCExKSxiKCl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWN9fSl9XG5mdW5jdGlvbiBPaChhLGIsYyl7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9e2xhbmU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIucGVuZGluZztudWxsPT09Zz9mLm5leHQ9ZjooZi5uZXh0PWcubmV4dCxnLm5leHQ9Zik7Yi5wZW5kaW5nPWY7Zz1hLmFsdGVybmF0ZTtpZihhPT09Unx8bnVsbCE9PWcmJmc9PT1SKXpoPXloPSEwO2Vsc2V7aWYoMD09PWEubGFuZXMmJihudWxsPT09Z3x8MD09PWcubGFuZXMpJiYoZz1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWcpKXRyeXt2YXIgaD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZyhoLGMpO2YuZWFnZXJSZWR1Y2VyPWc7Zi5lYWdlclN0YXRlPWs7aWYoSGUoayxoKSlyZXR1cm59Y2F0Y2gobCl7fWZpbmFsbHl7fUpnKGEsZSxkKX19XG52YXIgR2g9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOkFoLHVzZUNvbnRleHQ6QWgsdXNlRWZmZWN0OkFoLHVzZUltcGVyYXRpdmVIYW5kbGU6QWgsdXNlTGF5b3V0RWZmZWN0OkFoLHVzZU1lbW86QWgsdXNlUmVkdWNlcjpBaCx1c2VSZWY6QWgsdXNlU3RhdGU6QWgsdXNlRGVidWdWYWx1ZTpBaCx1c2VEZWZlcnJlZFZhbHVlOkFoLHVzZVRyYW5zaXRpb246QWgsdXNlTXV0YWJsZVNvdXJjZTpBaCx1c2VPcGFxdWVJZGVudGlmaWVyOkFoLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRGg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7SGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6V2gsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFVoKDQsMixaaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWgoNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1IaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpTaCx1c2VTdGF0ZTpRaCx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9UWgoYSksYz1iWzBdLGQ9YlsxXTtXaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247XG53aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9UWgoITEpLGI9YVswXTthPWRpLmJpbmQobnVsbCxhWzFdKTtTaChhKTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtkLm1lbW9pemVkU3RhdGU9e3JlZnM6e2dldFNuYXBzaG90OmIsc2V0U25hcHNob3Q6bnVsbH0sc291cmNlOmEsc3Vic2NyaWJlOmN9O3JldHVybiBOaChkLGEsYixjKX0sdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe2lmKGxoKXt2YXIgYT0hMSxiPXVmKGZ1bmN0aW9uKCl7YXx8KGE9ITAsYyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSkpO3Rocm93IEVycm9yKHkoMzU1KSk7fSksYz1RaChiKVsxXTswPT09KFIubW9kZSYyKSYmKFIuZmxhZ3N8PTUxNixSaCg1LGZ1bmN0aW9uKCl7YyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSl9LFxudm9pZCAwLG51bGwpKTtyZXR1cm4gYn1iPVwicjpcIisodGYrKykudG9TdHJpbmcoMzYpO1FoKGIpO3JldHVybiBifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEVoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6S2gsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUtoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9S2goSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxGaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOkxoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBMaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1MaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUxoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBMaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sZWk9cmEuUmVhY3RDdXJyZW50T3duZXIsdWc9ITE7ZnVuY3Rpb24gZmkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9aZyhiLG51bGwsYyxkKTpZZyhiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBnaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dGcoYixlKTtkPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlpKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhamkoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsa2koYSxiLGcsZCxlLGYpO2E9VmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKDA9PT0oZSZmKSYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpKZSxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBoaShhLGIsZik7Yi5mbGFnc3w9MTthPVRnKGcsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24ga2koYSxiLGMsZCxlLGYpe2lmKG51bGwhPT1hJiZKZShhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYpaWYodWc9ITEsMCE9PShmJmUpKTAhPT0oYS5mbGFncyYxNjM4NCkmJih1Zz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLGhpKGEsYixmKTtyZXR1cm4gbGkoYSxiLGMsZCxmKX1cbmZ1bmN0aW9uIG1pKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlfHxcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixjKTtlbHNlIGlmKDAhPT0oYyYxMDczNzQxODI0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLG51bGwhPT1mP2YuYmFzZUxhbmVzOmMpO2Vsc2UgcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YX0sbmkoYixhKSxudWxsO2Vsc2UgbnVsbCE9PWY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLG5pKGIsZCk7ZmkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBvaShhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD0xMjh9ZnVuY3Rpb24gbGkoYSxiLGMsZCxlKXt2YXIgZj1GZihjKT9EZjpNLmN1cnJlbnQ7Zj1FZihiLGYpO3RnKGIsZSk7Yz1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUpe2lmKEZmKGMpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7dGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksTWcoYixjLGQpLE9nKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXZnKGwpOihsPUZmKGMpP0RmOk0uY3VycmVudCxsPUVmKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZOZyhiLGcsZCxsKTt3Zz0hMTt2YXIgcD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxwIT09a3x8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihHZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9d2d8fExnKGIsYyxoLGQscCxrLGwpKT8oQXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO3lnKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6bGcoYi50eXBlLGgpO2cucHJvcHM9bDtBPWIucGVuZGluZ1Byb3BzO3A9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9dmcoayk6KGs9RmYoYyk/RGY6TS5jdXJyZW50LGs9RWYoYixrKSk7dmFyIEM9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG49XCJmdW5jdGlvblwiPT09dHlwZW9mIEN8fFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1BfHxwIT09aykmJk5nKGIsZyxkLGspO3dnPSExO3A9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7aCE9PUF8fHAhPT14fHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyYmKEdnKGIsYyxDLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobD13Z3x8TGcoYixjLGwsZCxwLHgsaykpPyhufHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLFxueCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9eCksZy5wcm9wcz1kLGcuc3RhdGU9eCxnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fFxuaD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxkPSExKX1yZXR1cm4gcWkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gcWkoYSxiLGMsZCxlLGYpe29pKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJktmKGIsYywhMSksaGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7ZWkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1ZZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVlnKGIsbnVsbCxoLGYpKTpmaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZLZihiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/SGYoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmSGYoYSxiLmNvbnRleHQsITEpO2VoKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBzaT17ZGVoeWRyYXRlZDpudWxsLHJldHJ5TGFuZTowfTtcbmZ1bmN0aW9uIHRpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPVAuY3VycmVudCxmPSExLGc7KGc9MCE9PShiLmZsYWdzJjY0KSl8fChnPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7Zz8oZj0hMCxiLmZsYWdzJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1kLmZhbGxiYWNrfHwhMD09PWQudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChlfD0xKTtJKFAsZSYxKTtpZihudWxsPT09YSl7dm9pZCAwIT09ZC5mYWxsYmFjayYmcGgoYik7YT1kLmNoaWxkcmVuO2U9ZC5mYWxsYmFjaztpZihmKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LGIubWVtb2l6ZWRTdGF0ZT1zaSxhO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgZC51bnN0YWJsZV9leHBlY3RlZExvYWRUaW1lKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LFxuYi5tZW1vaXplZFN0YXRlPXNpLGIubGFuZXM9MzM1NTQ0MzIsYTtjPXZpKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmF9LGIubW9kZSxjLG51bGwpO2MucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9Y31pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXtpZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9OntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWlmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306XG57YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31mdW5jdGlvbiB1aShhLGIsYyxkKXt2YXIgZT1hLm1vZGUsZj1hLmNoaWxkO2I9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpifTswPT09KGUmMikmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1iKTpmPXZpKGIsZSwwLG51bGwpO2M9WGcoYyxlLGQsbnVsbCk7Zi5yZXR1cm49YTtjLnJldHVybj1hO2Yuc2libGluZz1jO2EuY2hpbGQ9ZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHhpKGEsYixjLGQpe3ZhciBlPWEuY2hpbGQ7YT1lLnNpYmxpbmc7Yz1UZyhlLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmN9KTswPT09KGIubW9kZSYyKSYmKGMubGFuZXM9ZCk7Yy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGEubmV4dEVmZmVjdD1udWxsLGEuZmxhZ3M9OCxiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1hKTtyZXR1cm4gYi5jaGlsZD1jfVxuZnVuY3Rpb24gd2koYSxiLGMsZCxlKXt2YXIgZj1iLm1vZGUsZz1hLmNoaWxkO2E9Zy5zaWJsaW5nO3ZhciBoPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Y307MD09PShmJjIpJiZiLmNoaWxkIT09Zz8oYz1iLmNoaWxkLGMuY2hpbGRMYW5lcz0wLGMucGVuZGluZ1Byb3BzPWgsZz1jLmxhc3RFZmZlY3QsbnVsbCE9PWc/KGIuZmlyc3RFZmZlY3Q9Yy5maXJzdEVmZmVjdCxiLmxhc3RFZmZlY3Q9ZyxnLm5leHRFZmZlY3Q9bnVsbCk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbCk6Yz1UZyhnLGgpO251bGwhPT1hP2Q9VGcoYSxkKTooZD1YZyhkLGYsZSxudWxsKSxkLmZsYWdzfD0yKTtkLnJldHVybj1iO2MucmV0dXJuPWI7Yy5zaWJsaW5nPWQ7Yi5jaGlsZD1jO3JldHVybiBkfWZ1bmN0aW9uIHlpKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO3NnKGEucmV0dXJuLGIpfVxuZnVuY3Rpb24gemkoYSxiLGMsZCxlLGYpe3ZhciBnPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zz9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcucmVuZGVyaW5nU3RhcnRUaW1lPTAsZy5sYXN0PWQsZy50YWlsPWMsZy50YWlsTW9kZT1lLGcubGFzdEVmZmVjdD1mKX1cbmZ1bmN0aW9uIEFpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7ZmkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnlpKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXlpKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoUCxkKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09aWgoYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt6aShiLCExLGUsYyxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1paChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9emkoYiwhMCxjLG51bGwsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOnppKGIsITEsbnVsbCxudWxsLHZvaWQgMCxiLmxhc3RFZmZlY3QpO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7RGd8PWIubGFuZXM7aWYoMCE9PShjJmIuY2hpbGRMYW5lcykpe2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcih5KDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1UZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9VGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1yZXR1cm4gbnVsbH12YXIgQmksQ2ksRGksRWk7XG5CaT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07Q2k9ZnVuY3Rpb24oKXt9O1xuRGk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO2RoKGFoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGUpO2Q9ZWIoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1qZil9dmIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1cbmwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiYoY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8XG4oYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkcoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTpcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09R2E/ay50b1N0cmluZygpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixcbmMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtFaT1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtmdW5jdGlvbiBGaShhLGIpe2lmKCFsaClzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIG51bGw7Y2FzZSAxOnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpcmgoYik/Yi5mbGFnc3w9NDpkLmh5ZHJhdGV8fChiLmZsYWdzfD0yNTYpO0NpKGIpO3JldHVybiBudWxsO2Nhc2UgNTpoaChiKTt2YXIgZT1kaChjaC5jdXJyZW50KTtjPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRGkoYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KTtlbHNle2lmKCFkKXtpZihudWxsPT09XG5iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO3JldHVybiBudWxsfWE9ZGgoYWguY3VycmVudCk7aWYocmgoYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2Rbd2ZdPWI7ZFt4Zl09Zjtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixkKTtHKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGE9MDthPFhlLmxlbmd0aDthKyspRyhYZVthXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZCk7RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxHKFwiaW52YWxpZFwiLGQpfXZiKGMsZik7YT1udWxsO2Zvcih2YXIgZyBpbiBmKWYuaGFzT3duUHJvcGVydHkoZykmJihlPWZbZ10sXCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGU/ZC50ZXh0Q29udGVudCE9PWUmJihhPVtcImNoaWxkcmVuXCIsZV0pOlwibnVtYmVyXCI9PT10eXBlb2YgZSYmZC50ZXh0Q29udGVudCE9PVwiXCIrZSYmKGE9W1wiY2hpbGRyZW5cIixcIlwiK2VdKTpjYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9ZSYmXCJvblNjcm9sbFwiPT09ZyYmRyhcInNjcm9sbFwiLGQpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7Y2IoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1cbmpmKX1kPWE7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O2E9PT1rYi5odG1sJiYoYT1sYihjKSk7YT09PWtiLmh0bWw/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW3dmXT1iO2FbeGZdPWQ7QmkoYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2c9d2IoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixhKTtHKFwiY2xvc2VcIixhKTtcbmU9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxYZS5sZW5ndGg7ZSsrKUcoWGVbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsYSk7RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1cbmdiKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH12YihjLGUpO3ZhciBoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/dGIoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm9iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1jfHxcIlwiIT09aykmJnBiKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZwYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGNhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkcoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZxYShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2NiKGEsZCwhMSk7XG5icmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1qZil9bWYoYyxkKSYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCl9cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUVpKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO1xuYz1kaChjaC5jdXJyZW50KTtkaChhaC5jdXJyZW50KTtyaChiKT8oZD1iLnN0YXRlTm9kZSxjPWIubWVtb2l6ZWRQcm9wcyxkW3dmXT1iLGQubm9kZVZhbHVlIT09YyYmKGIuZmxhZ3N8PTQpKTooZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbd2ZdPWIsYi5zdGF0ZU5vZGU9ZCl9cmV0dXJuIG51bGw7Y2FzZSAxMzpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7Yz0hMTtudWxsPT09YT92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJnJoKGIpOmM9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZihkJiYhYyYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWEmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KFAuY3VycmVudCYxKSkwPT09ViYmKFY9Myk7ZWxzZXtpZigwPT09Vnx8Mz09PVYpVj1cbjQ7bnVsbD09PVV8fDA9PT0oRGcmMTM0MjE3NzI3KSYmMD09PShIaSYxMzQyMTc3MjcpfHxJaShVLFcpfWlmKGR8fGMpYi5mbGFnc3w9NDtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksQ2koYiksbnVsbD09PWEmJmNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYiksbnVsbDtjYXNlIDE3OnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAxOTpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Y9MCE9PShiLmZsYWdzJjY0KTtnPWQucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGYpRmkoZCwhMSk7ZWxzZXtpZigwIT09Vnx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9aWgoYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTY0O0ZpKGQsITEpO2Y9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGIudXBkYXRlUXVldWU9ZixiLmZsYWdzfD00KTtcbm51bGw9PT1kLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3Q7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MixmLm5leHRFZmZlY3Q9bnVsbCxmLmZpcnN0RWZmZWN0PW51bGwsZi5sYXN0RWZmZWN0PW51bGwsZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLFxuZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztJKFAsUC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1hLnNpYmxpbmd9bnVsbCE9PWQudGFpbCYmTygpPkppJiYoYi5mbGFnc3w9NjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKX1lbHNle2lmKCFmKWlmKGE9aWgoZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTY0LGY9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEZpKGQsITApLG51bGw9PT1kLnRhaWwmJlwiaGlkZGVuXCI9PT1kLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFsaClyZXR1cm4gYj1iLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0LG51bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpLG51bGx9ZWxzZSAyKk8oKS1kLnJlbmRlcmluZ1N0YXJ0VGltZT5KaSYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD1cbjY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMik7ZC5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1kLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGQubGFzdD1nKX1yZXR1cm4gbnVsbCE9PWQudGFpbD8oYz1kLnRhaWwsZC5yZW5kZXJpbmc9YyxkLnRhaWw9Yy5zaWJsaW5nLGQubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QsZC5yZW5kZXJpbmdTdGFydFRpbWU9TygpLGMuc2libGluZz1udWxsLGI9UC5jdXJyZW50LEkoUCxmP2ImMXwyOmImMSksYyk6bnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT0obnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSkmJlwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIiE9PWQubW9kZSYmKGIuZmxhZ3N8PTQpLG51bGx9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBMaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpGZihhLnR5cGUpJiZHZigpO3ZhciBiPWEuZmxhZ3M7cmV0dXJuIGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7Yj1hLmZsYWdzO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IoeSgyODUpKTthLmZsYWdzPWImLTQwOTd8NjQ7cmV0dXJuIGE7Y2FzZSA1OnJldHVybiBoaChhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIEgoUCksYj1hLmZsYWdzLGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAxOTpyZXR1cm4gSChQKSxudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGEpLG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBNaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1RYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZX19ZnVuY3Rpb24gTmkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE9pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIFBpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe1FpfHwoUWk9ITAsUmk9ZCk7TmkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7TmkoYSxiKTtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVRpP1RpPW5ldyBTZXQoW3RoaXNdKTpUaS5hZGQodGhpcyksTmkoYSxiKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9dmFyIFVpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O1xuZnVuY3Rpb24gVmkoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7V2koYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfWZ1bmN0aW9uIFhpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6cmV0dXJuO2Nhc2UgMTppZihiLmZsYWdzJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6bGcoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1yZXR1cm47Y2FzZSAzOmIuZmxhZ3MmMjU2JiZxZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTtyZXR1cm47Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBZaShhLGIsYyl7c3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97aWYoMz09PShhLnRhZyYzKSl7dmFyIGQ9YS5jcmVhdGU7YS5kZXN0cm95PWQoKX1hPWEubmV4dH13aGlsZShhIT09Yil9Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97dmFyIGU9YTtkPWUubmV4dDtlPWUudGFnOzAhPT0oZSY0KSYmMCE9PShlJjEpJiYoWmkoYyxhKSwkaShjLGEpKTthPWR9d2hpbGUoYSE9PWIpfXJldHVybjtjYXNlIDE6YT1jLnN0YXRlTm9kZTtjLmZsYWdzJjQmJihudWxsPT09Yj9hLmNvbXBvbmVudERpZE1vdW50KCk6KGQ9Yy5lbGVtZW50VHlwZT09PWMudHlwZT9iLm1lbW9pemVkUHJvcHM6bGcoYy50eXBlLGIubWVtb2l6ZWRQcm9wcyksYS5jb21wb25lbnREaWRVcGRhdGUoZCxcbmIubWVtb2l6ZWRTdGF0ZSxhLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKSkpO2I9Yy51cGRhdGVRdWV1ZTtudWxsIT09YiYmRWcoYyxiLGEpO3JldHVybjtjYXNlIDM6Yj1jLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthPW51bGw7aWYobnVsbCE9PWMuY2hpbGQpc3dpdGNoKGMuY2hpbGQudGFnKXtjYXNlIDU6YT1jLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6YT1jLmNoaWxkLnN0YXRlTm9kZX1FZyhjLGIsYSl9cmV0dXJuO2Nhc2UgNTphPWMuc3RhdGVOb2RlO251bGw9PT1iJiZjLmZsYWdzJjQmJm1mKGMudHlwZSxjLm1lbW9pemVkUHJvcHMpJiZhLmZvY3VzKCk7cmV0dXJuO2Nhc2UgNjpyZXR1cm47Y2FzZSA0OnJldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGw9PT1jLm1lbW9pemVkU3RhdGUmJihjPWMuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYz1jLm1lbW9pemVkU3RhdGUsbnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsIT09YyYmQ2MoYykpKSk7XG5yZXR1cm47Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpjYXNlIDIzOmNhc2UgMjQ6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gYWooYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZD1kLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLnNldFByb3BlcnR5P2Quc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6ZC5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PXNiKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKCgyMyE9PWMudGFnJiYyNCE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHxjPT09YSkmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09XG5hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gYmooYSxiKXtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtNZi5vbkNvbW1pdEZpYmVyVW5tb3VudChMZixiKX1jYXRjaChmKXt9c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjphPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWEmJihhPWEubGFzdEVmZmVjdCxudWxsIT09YSkpe3ZhciBjPWE9YS5uZXh0O2Rve3ZhciBkPWMsZT1kLmRlc3Ryb3k7ZD1kLnRhZztpZih2b2lkIDAhPT1lKWlmKDAhPT0oZCY0KSlaaShiLGMpO2Vsc2V7ZD1iO3RyeXtlKCl9Y2F0Y2goZil7V2koZCxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWEpfWJyZWFrO2Nhc2UgMTpWaShiKTthPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXthLnByb3BzPWIubWVtb2l6ZWRQcm9wcyxhLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxhLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7V2koYixcbmYpfWJyZWFrO2Nhc2UgNTpWaShiKTticmVhaztjYXNlIDQ6Y2ooYSxiKX19ZnVuY3Rpb24gZGooYSl7YS5hbHRlcm5hdGU9bnVsbDthLmNoaWxkPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmZpcnN0RWZmZWN0PW51bGw7YS5sYXN0RWZmZWN0PW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnJldHVybj1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBlaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIGZqKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKGVqKGIpKWJyZWFrIGE7Yj1iLnJldHVybn10aHJvdyBFcnJvcih5KDE2MCkpO312YXIgYz1iO2I9Yy5zdGF0ZU5vZGU7c3dpdGNoKGMudGFnKXtjYXNlIDU6dmFyIGQ9ITE7YnJlYWs7Y2FzZSAzOmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDE2MSkpO31jLmZsYWdzJjE2JiYocGIoYixcIlwiKSxjLmZsYWdzJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8ZWooYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5mbGFncyYyKWNvbnRpbnVlIGI7aWYobnVsbD09PVxuYy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZmxhZ3MmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19ZD9naihhLGMsYik6aGooYSxjLGIpfVxuZnVuY3Rpb24gZ2ooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPWpmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspZ2ooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gaGooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihoaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWhqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGNqKGEsYil7Zm9yKHZhciBjPWIsZD0hMSxlLGY7Oyl7aWYoIWQpe2Q9Yy5yZXR1cm47YTpmb3IoOzspe2lmKG51bGw9PT1kKXRocm93IEVycm9yKHkoMTYwKSk7ZT1kLnN0YXRlTm9kZTtzd2l0Y2goZC50YWcpe2Nhc2UgNTpmPSExO2JyZWFrIGE7Y2FzZSAzOmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYTtjYXNlIDQ6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhfWQ9ZC5yZXR1cm59ZD0hMH1pZig1PT09Yy50YWd8fDY9PT1jLnRhZyl7YTpmb3IodmFyIGc9YSxoPWMsaz1oOzspaWYoYmooZyxrKSxudWxsIT09ay5jaGlsZCYmNCE9PWsudGFnKWsuY2hpbGQucmV0dXJuPWssaz1rLmNoaWxkO2Vsc2V7aWYoaz09PWgpYnJlYWsgYTtmb3IoO251bGw9PT1rLnNpYmxpbmc7KXtpZihudWxsPT09ay5yZXR1cm58fGsucmV0dXJuPT09aClicmVhayBhO2s9ay5yZXR1cm59ay5zaWJsaW5nLnJldHVybj1rLnJldHVybjtrPWsuc2libGluZ31mPyhnPWUsaD1jLnN0YXRlTm9kZSxcbjg9PT1nLm5vZGVUeXBlP2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKTpnLnJlbW92ZUNoaWxkKGgpKTplLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGJqKGEsYyksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gaWooYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOnZhciBjPWIudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG8gMz09PShkLnRhZyYzKSYmKGE9ZC5kZXN0cm95LGQuZGVzdHJveT12b2lkIDAsdm9pZCAwIT09YSYmYSgpKSxkPWQubmV4dDt3aGlsZShkIT09Yyl9cmV0dXJuO2Nhc2UgMTpyZXR1cm47Y2FzZSA1OmM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7ZD1iLm1lbW9pemVkUHJvcHM7dmFyIGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbeGZdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJiRhKGMsZCk7d2IoYSxlKTtiPXdiKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPVxuMil7dmFyIGc9ZltlXSxoPWZbZSsxXTtcInN0eWxlXCI9PT1nP3RiKGMsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9vYihjLGgpOlwiY2hpbGRyZW5cIj09PWc/cGIoYyxoKTpxYShjLGcsaCxiKX1zd2l0Y2goYSl7Y2FzZSBcImlucHV0XCI6YWIoYyxkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihjLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2ZiKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9mYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1yZXR1cm47Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1cbmIubWVtb2l6ZWRQcm9wcztyZXR1cm47Y2FzZSAzOmM9Yi5zdGF0ZU5vZGU7Yy5oeWRyYXRlJiYoYy5oeWRyYXRlPSExLENjKGMuY29udGFpbmVySW5mbykpO3JldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGwhPT1iLm1lbW9pemVkU3RhdGUmJihqaj1PKCksYWooYi5jaGlsZCwhMCkpO2tqKGIpO3JldHVybjtjYXNlIDE5OmtqKGIpO3JldHVybjtjYXNlIDE3OnJldHVybjtjYXNlIDIzOmNhc2UgMjQ6YWooYixudWxsIT09Yi5tZW1vaXplZFN0YXRlKTtyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgVWkpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1sai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIG1qKGEsYil7cmV0dXJuIG51bGwhPT1hJiYoYT1hLm1lbW9pemVkU3RhdGUsbnVsbD09PWF8fG51bGwhPT1hLmRlaHlkcmF0ZWQpPyhiPWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YiYmbnVsbD09PWIuZGVoeWRyYXRlZCk6ITF9dmFyIG5qPU1hdGguY2VpbCxvaj1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHBqPXJhLlJlYWN0Q3VycmVudE93bmVyLFg9MCxVPW51bGwsWT1udWxsLFc9MCxxaj0wLHJqPUJmKDApLFY9MCxzaj1udWxsLHRqPTAsRGc9MCxIaT0wLHVqPTAsdmo9bnVsbCxqaj0wLEppPUluZmluaXR5O2Z1bmN0aW9uIHdqKCl7Smk9TygpKzUwMH12YXIgWj1udWxsLFFpPSExLFJpPW51bGwsVGk9bnVsbCx4aj0hMSx5aj1udWxsLHpqPTkwLEFqPVtdLEJqPVtdLENqPW51bGwsRGo9MCxFaj1udWxsLEZqPS0xLEdqPTAsSGo9MCxJaj1udWxsLEpqPSExO2Z1bmN0aW9uIEhnKCl7cmV0dXJuIDAhPT0oWCY0OCk/TygpOi0xIT09Rmo/Rmo6Rmo9TygpfVxuZnVuY3Rpb24gSWcoYSl7YT1hLm1vZGU7aWYoMD09PShhJjIpKXJldHVybiAxO2lmKDA9PT0oYSY0KSlyZXR1cm4gOTk9PT1lZygpPzE6MjswPT09R2omJihHaj10aik7aWYoMCE9PWtnLnRyYW5zaXRpb24pezAhPT1IaiYmKEhqPW51bGwhPT12aj92ai5wZW5kaW5nTGFuZXM6MCk7YT1Hajt2YXIgYj00MTg2MTEyJn5IajtiJj0tYjswPT09YiYmKGE9NDE4NjExMiZ+YSxiPWEmLWEsMD09PWImJihiPTgxOTIpKTtyZXR1cm4gYn1hPWVnKCk7MCE9PShYJjQpJiY5OD09PWE/YT1YYygxMixHaik6KGE9U2MoYSksYT1YYyhhLEdqKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZyhhLGIsYyl7aWYoNTA8RGopdGhyb3cgRGo9MCxFaj1udWxsLEVycm9yKHkoMTg1KSk7YT1LaihhLGIpO2lmKG51bGw9PT1hKXJldHVybiBudWxsOyRjKGEsYixjKTthPT09VSYmKEhpfD1iLDQ9PT1WJiZJaShhLFcpKTt2YXIgZD1lZygpOzE9PT1iPzAhPT0oWCY4KSYmMD09PShYJjQ4KT9MaihhKTooTWooYSxjKSwwPT09WCYmKHdqKCksaWcoKSkpOigwPT09KFgmNCl8fDk4IT09ZCYmOTkhPT1kfHwobnVsbD09PUNqP0NqPW5ldyBTZXQoW2FdKTpDai5hZGQoYSkpLE1qKGEsYykpO3ZqPWF9ZnVuY3Rpb24gS2ooYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfVxuZnVuY3Rpb24gTWooYSxiKXtmb3IodmFyIGM9YS5jYWxsYmFja05vZGUsZD1hLnN1c3BlbmRlZExhbmVzLGU9YS5waW5nZWRMYW5lcyxmPWEuZXhwaXJhdGlvblRpbWVzLGc9YS5wZW5kaW5nTGFuZXM7MDxnOyl7dmFyIGg9MzEtVmMoZyksaz0xPDxoLGw9ZltoXTtpZigtMT09PWwpe2lmKDA9PT0oayZkKXx8MCE9PShrJmUpKXtsPWI7UmMoayk7dmFyIG49RjtmW2hdPTEwPD1uP2wrMjUwOjY8PW4/bCs1RTM6LTF9fWVsc2UgbDw9YiYmKGEuZXhwaXJlZExhbmVzfD1rKTtnJj1+a31kPVVjKGEsYT09PVU/VzowKTtiPUY7aWYoMD09PWQpbnVsbCE9PWMmJihjIT09WmYmJlBmKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTApO2Vsc2V7aWYobnVsbCE9PWMpe2lmKGEuY2FsbGJhY2tQcmlvcml0eT09PWIpcmV0dXJuO2MhPT1aZiYmUGYoYyl9MTU9PT1iPyhjPUxqLmJpbmQobnVsbCxhKSxudWxsPT09YWc/KGFnPVtjXSxiZz1PZihVZixqZykpOmFnLnB1c2goYyksXG5jPVpmKToxND09PWI/Yz1oZyg5OSxMai5iaW5kKG51bGwsYSkpOihjPVRjKGIpLGM9aGcoYyxOai5iaW5kKG51bGwsYSkpKTthLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIE5qKGEpe0ZqPS0xO0hqPUdqPTA7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBiPWEuY2FsbGJhY2tOb2RlO2lmKE9qKCkmJmEuY2FsbGJhY2tOb2RlIT09YilyZXR1cm4gbnVsbDt2YXIgYz1VYyhhLGE9PT1VP1c6MCk7aWYoMD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9Yzt2YXIgZT1YO1h8PTE2O3ZhciBmPVBqKCk7aWYoVSE9PWF8fFchPT1kKXdqKCksUWooYSxkKTtkbyB0cnl7UmooKTticmVha31jYXRjaChoKXtTaihhLGgpfXdoaWxlKDEpO3FnKCk7b2ouY3VycmVudD1mO1g9ZTtudWxsIT09WT9kPTA6KFU9bnVsbCxXPTAsZD1WKTtpZigwIT09KHRqJkhpKSlRaihhLDApO2Vsc2UgaWYoMCE9PWQpezI9PT1kJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGM9V2MoYSksMCE9PWMmJihkPVRqKGEsYykpKTtpZigxPT09ZCl0aHJvdyBiPXNqLFFqKGEsMCksSWkoYSxjKSxNaihhLE8oKSksYjthLmZpbmlzaGVkV29yaz1cbmEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWM7c3dpdGNoKGQpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IoeSgzNDUpKTtjYXNlIDI6VWooYSk7YnJlYWs7Y2FzZSAzOklpKGEsYyk7aWYoKGMmNjI5MTQ1NjApPT09YyYmKGQ9amorNTAwLU8oKSwxMDxkKSl7aWYoMCE9PVVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmMpIT09Yyl7SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxkKTticmVha31VaihhKTticmVhaztjYXNlIDQ6SWkoYSxjKTtpZigoYyY0MTg2MTEyKT09PWMpYnJlYWs7ZD1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxjOyl7dmFyIGc9MzEtVmMoYyk7Zj0xPDxnO2c9ZFtnXTtnPmUmJihlPWcpO2MmPX5mfWM9ZTtjPU8oKS1jO2M9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+XG5jPzQzMjA6MTk2MCpuaihjLzE5NjApKS1jO2lmKDEwPGMpe2EudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksYyk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA1OlVqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMjkpKTt9fU1qKGEsTygpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1iP05qLmJpbmQobnVsbCxhKTpudWxsfWZ1bmN0aW9uIElpKGEsYil7YiY9fnVqO2ImPX5IaTthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLVZjKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1cbmZ1bmN0aW9uIExqKGEpe2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTtPaigpO2lmKGE9PT1VJiYwIT09KGEuZXhwaXJlZExhbmVzJlcpKXt2YXIgYj1XO3ZhciBjPVRqKGEsYik7MCE9PSh0aiZIaSkmJihiPVVjKGEsYiksYz1UaihhLGIpKX1lbHNlIGI9VWMoYSwwKSxjPVRqKGEsYik7MCE9PWEudGFnJiYyPT09YyYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxiPVdjKGEpLDAhPT1iJiYoYz1UaihhLGIpKSk7aWYoMT09PWMpdGhyb3cgYz1zaixRaihhLDApLElpKGEsYiksTWooYSxPKCkpLGM7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtVaihhKTtNaihhLE8oKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaigpe2lmKG51bGwhPT1Dail7dmFyIGE9Q2o7Q2o9bnVsbDthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5leHBpcmVkTGFuZXN8PTI0JmEucGVuZGluZ0xhbmVzO01qKGEsTygpKX0pfWlnKCl9ZnVuY3Rpb24gV2ooYSxiKXt2YXIgYz1YO1h8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1YO1gmPS0yO1h8PTg7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gbmkoYSxiKXtJKHJqLHFqKTtxanw9Yjt0anw9Yn1mdW5jdGlvbiBLaSgpe3FqPXJqLmN1cnJlbnQ7SChyail9XG5mdW5jdGlvbiBRaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxwZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiZHZigpO2JyZWFrO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2JyZWFrO2Nhc2UgNTpoaChkKTticmVhaztjYXNlIDQ6ZmgoKTticmVhaztjYXNlIDEzOkgoUCk7YnJlYWs7Y2FzZSAxOTpIKFApO2JyZWFrO2Nhc2UgMTA6cmcoZCk7YnJlYWs7Y2FzZSAyMzpjYXNlIDI0OktpKCl9Yz1jLnJldHVybn1VPWE7WT1UZyhhLmN1cnJlbnQsbnVsbCk7Vz1xaj10aj1iO1Y9MDtzaj1udWxsO3VqPUhpPURnPTB9XG5mdW5jdGlvbiBTaihhLGIpe2Rve3ZhciBjPVk7dHJ5e3FnKCk7dmguY3VycmVudD1HaDtpZih5aCl7Zm9yKHZhciBkPVIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9eWg9ITF9eGg9MDtUPVM9Uj1udWxsO3poPSExO3BqLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtWPTE7c2o9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1XO2guZmxhZ3N8PTIwNDg7aC5maXJzdEVmZmVjdD1oLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rO2lmKDA9PT0oaC5tb2RlJjIpKXt2YXIgbj1oLmFsdGVybmF0ZTtuPyhoLnVwZGF0ZVF1ZXVlPW4udXBkYXRlUXVldWUsaC5tZW1vaXplZFN0YXRlPW4ubWVtb2l6ZWRTdGF0ZSxoLmxhbmVzPW4ubGFuZXMpOlxuKGgudXBkYXRlUXVldWU9bnVsbCxoLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIEE9MCE9PShQLmN1cnJlbnQmMSkscD1nO2Rve3ZhciBDO2lmKEM9MTM9PT1wLnRhZyl7dmFyIHg9cC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT14KUM9bnVsbCE9PXguZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciB3PXAubWVtb2l6ZWRQcm9wcztDPXZvaWQgMD09PXcuZmFsbGJhY2s/ITE6ITAhPT13LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOkE/ITE6ITB9fWlmKEMpe3ZhciB6PXAudXBkYXRlUXVldWU7aWYobnVsbD09PXope3ZhciB1PW5ldyBTZXQ7dS5hZGQobCk7cC51cGRhdGVRdWV1ZT11fWVsc2Ugei5hZGQobCk7aWYoMD09PShwLm1vZGUmMikpe3AuZmxhZ3N8PTY0O2guZmxhZ3N8PTE2Mzg0O2guZmxhZ3MmPS0yOTgxO2lmKDE9PT1oLnRhZylpZihudWxsPT09aC5hbHRlcm5hdGUpaC50YWc9MTc7ZWxzZXt2YXIgdD16ZygtMSwxKTt0LnRhZz0yO0FnKGgsdCl9aC5sYW5lc3w9MTticmVhayBhfWs9XG52b2lkIDA7aD1iO3ZhciBxPWYucGluZ0NhY2hlO251bGw9PT1xPyhxPWYucGluZ0NhY2hlPW5ldyBPaSxrPW5ldyBTZXQscS5zZXQobCxrKSk6KGs9cS5nZXQobCksdm9pZCAwPT09ayYmKGs9bmV3IFNldCxxLnNldChsLGspKSk7aWYoIWsuaGFzKGgpKXtrLmFkZChoKTt2YXIgdj1Zai5iaW5kKG51bGwsZixsLGgpO2wudGhlbih2LHYpfXAuZmxhZ3N8PTQwOTY7cC5sYW5lcz1iO2JyZWFrIGF9cD1wLnJldHVybn13aGlsZShudWxsIT09cCk7az1FcnJvcigoUmEoaC50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiKX01IT09ViYmKFY9Mik7az1NaShrLGgpO3A9XG5nO2Rve3N3aXRjaChwLnRhZyl7Y2FzZSAzOmY9aztwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEo9UGkocCxmLGIpO0JnKHAsSik7YnJlYWsgYTtjYXNlIDE6Zj1rO3ZhciBLPXAudHlwZSxRPXAuc3RhdGVOb2RlO2lmKDA9PT0ocC5mbGFncyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgSy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1RJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgUS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhRKSkpKXtwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEw9U2kocCxmLGIpO0JnKHAsTCk7YnJlYWsgYX19cD1wLnJldHVybn13aGlsZShudWxsIT09cCl9WmooYyl9Y2F0Y2godmEpe2I9dmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1cbmZ1bmN0aW9uIFBqKCl7dmFyIGE9b2ouY3VycmVudDtvai5jdXJyZW50PUdoO3JldHVybiBudWxsPT09YT9HaDphfWZ1bmN0aW9uIFRqKGEsYil7dmFyIGM9WDtYfD0xNjt2YXIgZD1QaigpO1U9PT1hJiZXPT09Ynx8UWooYSxiKTtkbyB0cnl7YWsoKTticmVha31jYXRjaChlKXtTaihhLGUpfXdoaWxlKDEpO3FnKCk7WD1jO29qLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcih5KDI2MSkpO1U9bnVsbDtXPTA7cmV0dXJuIFZ9ZnVuY3Rpb24gYWsoKXtmb3IoO251bGwhPT1ZOyliayhZKX1mdW5jdGlvbiBSaigpe2Zvcig7bnVsbCE9PVkmJiFRZigpOyliayhZKX1mdW5jdGlvbiBiayhhKXt2YXIgYj1jayhhLmFsdGVybmF0ZSxhLHFqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/WmooYSk6WT1iO3BqLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFpqKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMjA0OCkpe2M9R2koYyxiLHFqKTtpZihudWxsIT09Yyl7WT1jO3JldHVybn1jPWI7aWYoMjQhPT1jLnRhZyYmMjMhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8MCE9PShxaiYxMDczNzQxODI0KXx8MD09PShjLm1vZGUmNCkpe2Zvcih2YXIgZD0wLGU9Yy5jaGlsZDtudWxsIT09ZTspZHw9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZT1lLnNpYmxpbmc7Yy5jaGlsZExhbmVzPWR9bnVsbCE9PWEmJjA9PT0oYS5mbGFncyYyMDQ4KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxudWxsIT09Yi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QpLDE8Yi5mbGFncyYmKG51bGwhPT1cbmEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iOmEuZmlyc3RFZmZlY3Q9YixhLmxhc3RFZmZlY3Q9YikpfWVsc2V7Yz1MaShiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MjA0NztZPWM7cmV0dXJufW51bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmZsYWdzfD0yMDQ4KX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVYmJihWPTUpfWZ1bmN0aW9uIFVqKGEpe3ZhciBiPWVnKCk7Z2coOTksZGsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZGsoYSxiKXtkbyBPaigpO3doaWxlKG51bGwhPT15aik7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcih5KDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7dmFyIGQ9Yy5sYW5lc3xjLmNoaWxkTGFuZXMsZT1kLGY9YS5wZW5kaW5nTGFuZXMmfmU7YS5wZW5kaW5nTGFuZXM9ZTthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1lO2EubXV0YWJsZVJlYWRMYW5lcyY9ZTthLmVudGFuZ2xlZExhbmVzJj1lO2U9YS5lbnRhbmdsZW1lbnRzO2Zvcih2YXIgZz1hLmV2ZW50VGltZXMsaD1hLmV4cGlyYXRpb25UaW1lczswPGY7KXt2YXIgaz0zMS1WYyhmKSxsPTE8PGs7ZVtrXT0wO2dba109LTE7aFtrXT0tMTtmJj1+bH1udWxsIT09XG5DaiYmMD09PShkJjI0KSYmQ2ouaGFzKGEpJiZDai5kZWxldGUoYSk7YT09PVUmJihZPVU9bnVsbCxXPTApOzE8Yy5mbGFncz9udWxsIT09Yy5sYXN0RWZmZWN0PyhjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGQ9Yy5maXJzdEVmZmVjdCk6ZD1jOmQ9Yy5maXJzdEVmZmVjdDtpZihudWxsIT09ZCl7ZT1YO1h8PTMyO3BqLmN1cnJlbnQ9bnVsbDtrZj1mZDtnPU5lKCk7aWYoT2UoZykpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGcpaD17c3RhcnQ6Zy5zZWxlY3Rpb25TdGFydCxlbmQ6Zy5zZWxlY3Rpb25FbmR9O2Vsc2UgYTppZihoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdywobD1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKSkmJjAhPT1sLnJhbmdlQ291bnQpe2g9bC5hbmNob3JOb2RlO2Y9bC5hbmNob3JPZmZzZXQ7az1sLmZvY3VzTm9kZTtsPWwuZm9jdXNPZmZzZXQ7dHJ5e2gubm9kZVR5cGUsay5ub2RlVHlwZX1jYXRjaCh2YSl7aD1udWxsO1xuYnJlYWsgYX12YXIgbj0wLEE9LTEscD0tMSxDPTAseD0wLHc9Zyx6PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdTs7KXt3IT09aHx8MCE9PWYmJjMhPT13Lm5vZGVUeXBlfHwoQT1uK2YpO3chPT1rfHwwIT09bCYmMyE9PXcubm9kZVR5cGV8fChwPW4rbCk7Mz09PXcubm9kZVR5cGUmJihuKz13Lm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odT13LmZpcnN0Q2hpbGQpKWJyZWFrO3o9dzt3PXV9Zm9yKDs7KXtpZih3PT09ZylicmVhayBiO3o9PT1oJiYrK0M9PT1mJiYoQT1uKTt6PT09ayYmKyt4PT09bCYmKHA9bik7aWYobnVsbCE9PSh1PXcubmV4dFNpYmxpbmcpKWJyZWFrO3c9ejt6PXcucGFyZW50Tm9kZX13PXV9aD0tMT09PUF8fC0xPT09cD9udWxsOntzdGFydDpBLGVuZDpwfX1lbHNlIGg9bnVsbDtoPWh8fHtzdGFydDowLGVuZDowfX1lbHNlIGg9bnVsbDtsZj17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtmZD0hMTtJaj1udWxsO0pqPSExO1o9ZDtkbyB0cnl7ZWsoKX1jYXRjaCh2YSl7aWYobnVsbD09PVxuWil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtJaj1udWxsO1o9ZDtkbyB0cnl7Zm9yKGc9YTtudWxsIT09Wjspe3ZhciB0PVouZmxhZ3M7dCYxNiYmcGIoWi5zdGF0ZU5vZGUsXCJcIik7aWYodCYxMjgpe3ZhciBxPVouYWx0ZXJuYXRlO2lmKG51bGwhPT1xKXt2YXIgdj1xLnJlZjtudWxsIT09diYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YobnVsbCk6di5jdXJyZW50PW51bGwpfX1zd2l0Y2godCYxMDM4KXtjYXNlIDI6ZmooWik7Wi5mbGFncyY9LTM7YnJlYWs7Y2FzZSA2OmZqKFopO1ouZmxhZ3MmPS0zO2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgMTAyNDpaLmZsYWdzJj0tMTAyNTticmVhaztjYXNlIDEwMjg6Wi5mbGFncyY9LTEwMjU7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA0OmlqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgODpoPVo7Y2ooZyxoKTt2YXIgSj1oLmFsdGVybmF0ZTtkaihoKTtudWxsIT09XG5KJiZkaihKKX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO3Y9bGY7cT1OZSgpO3Q9di5mb2N1c2VkRWxlbTtnPXYuc2VsZWN0aW9uUmFuZ2U7aWYocSE9PXQmJnQmJnQub3duZXJEb2N1bWVudCYmTWUodC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0KSl7bnVsbCE9PWcmJk9lKHQpJiYocT1nLnN0YXJ0LHY9Zy5lbmQsdm9pZCAwPT09diYmKHY9cSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdD8odC5zZWxlY3Rpb25TdGFydD1xLHQuc2VsZWN0aW9uRW5kPU1hdGgubWluKHYsdC52YWx1ZS5sZW5ndGgpKToodj0ocT10Lm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcS5kZWZhdWx0Vmlld3x8d2luZG93LHYuZ2V0U2VsZWN0aW9uJiYodj12LmdldFNlbGVjdGlvbigpLGg9dC50ZXh0Q29udGVudC5sZW5ndGgsSj1NYXRoLm1pbihnLnN0YXJ0LGgpLGc9dm9pZCAwPT09XG5nLmVuZD9KOk1hdGgubWluKGcuZW5kLGgpLCF2LmV4dGVuZCYmSj5nJiYoaD1nLGc9SixKPWgpLGg9TGUodCxKKSxmPUxlKHQsZyksaCYmZiYmKDEhPT12LnJhbmdlQ291bnR8fHYuYW5jaG9yTm9kZSE9PWgubm9kZXx8di5hbmNob3JPZmZzZXQhPT1oLm9mZnNldHx8di5mb2N1c05vZGUhPT1mLm5vZGV8fHYuZm9jdXNPZmZzZXQhPT1mLm9mZnNldCkmJihxPXEuY3JlYXRlUmFuZ2UoKSxxLnNldFN0YXJ0KGgubm9kZSxoLm9mZnNldCksdi5yZW1vdmVBbGxSYW5nZXMoKSxKPmc/KHYuYWRkUmFuZ2UocSksdi5leHRlbmQoZi5ub2RlLGYub2Zmc2V0KSk6KHEuc2V0RW5kKGYubm9kZSxmLm9mZnNldCksdi5hZGRSYW5nZShxKSkpKSkpO3E9W107Zm9yKHY9dDt2PXYucGFyZW50Tm9kZTspMT09PXYubm9kZVR5cGUmJnEucHVzaCh7ZWxlbWVudDp2LGxlZnQ6di5zY3JvbGxMZWZ0LHRvcDp2LnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0LmZvY3VzJiZ0LmZvY3VzKCk7Zm9yKHQ9XG4wO3Q8cS5sZW5ndGg7dCsrKXY9cVt0XSx2LmVsZW1lbnQuc2Nyb2xsTGVmdD12LmxlZnQsdi5lbGVtZW50LnNjcm9sbFRvcD12LnRvcH1mZD0hIWtmO2xmPWtmPW51bGw7YS5jdXJyZW50PWM7Wj1kO2RvIHRyeXtmb3IodD1hO251bGwhPT1aOyl7dmFyIEs9Wi5mbGFncztLJjM2JiZZaSh0LFouYWx0ZXJuYXRlLFopO2lmKEsmMTI4KXtxPXZvaWQgMDt2YXIgUT1aLnJlZjtpZihudWxsIT09USl7dmFyIEw9Wi5zdGF0ZU5vZGU7c3dpdGNoKFoudGFnKXtjYXNlIDU6cT1MO2JyZWFrO2RlZmF1bHQ6cT1MfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBRP1EocSk6US5jdXJyZW50PXF9fVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7Wj1udWxsOyRmKCk7WD1lfWVsc2UgYS5jdXJyZW50PWM7aWYoeGopeGo9ITEseWo9YSx6aj1iO2Vsc2UgZm9yKFo9ZDtudWxsIT09WjspYj1cbloubmV4dEVmZmVjdCxaLm5leHRFZmZlY3Q9bnVsbCxaLmZsYWdzJjgmJihLPVosSy5zaWJsaW5nPW51bGwsSy5zdGF0ZU5vZGU9bnVsbCksWj1iO2Q9YS5wZW5kaW5nTGFuZXM7MD09PWQmJihUaT1udWxsKTsxPT09ZD9hPT09RWo/RGorKzooRGo9MCxFaj1hKTpEaj0wO2M9Yy5zdGF0ZU5vZGU7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7TWYub25Db21taXRGaWJlclJvb3QoTGYsYyx2b2lkIDAsNjQ9PT0oYy5jdXJyZW50LmZsYWdzJjY0KSl9Y2F0Y2godmEpe31NaihhLE8oKSk7aWYoUWkpdGhyb3cgUWk9ITEsYT1SaSxSaT1udWxsLGE7aWYoMCE9PShYJjgpKXJldHVybiBudWxsO2lnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBlaygpe2Zvcig7bnVsbCE9PVo7KXt2YXIgYT1aLmFsdGVybmF0ZTtKanx8bnVsbD09PUlqfHwoMCE9PShaLmZsYWdzJjgpP2RjKFosSWopJiYoSmo9ITApOjEzPT09Wi50YWcmJm1qKGEsWikmJmRjKFosSWopJiYoSmo9ITApKTt2YXIgYj1aLmZsYWdzOzAhPT0oYiYyNTYpJiZYaShhLFopOzA9PT0oYiY1MTIpfHx4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKTtaPVoubmV4dEVmZmVjdH19ZnVuY3Rpb24gT2ooKXtpZig5MCE9PXpqKXt2YXIgYT05Nzx6aj85Nzp6ajt6aj05MDtyZXR1cm4gZ2coYSxmayl9cmV0dXJuITF9ZnVuY3Rpb24gJGkoYSxiKXtBai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gWmkoYSxiKXtCai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9XG5mdW5jdGlvbiBmaygpe2lmKG51bGw9PT15ailyZXR1cm4hMTt2YXIgYT15ajt5aj1udWxsO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMzEpKTt2YXIgYj1YO1h8PTMyO3ZhciBjPUJqO0JqPVtdO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7dmFyIGU9Y1tkXSxmPWNbZCsxXSxnPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1jPUFqO0FqPVtdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKz0yKXtlPWNbZF07Zj1jW2QrMV07dHJ5e3ZhciBoPWUuY3JlYXRlO2UuZGVzdHJveT1oKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1mb3IoaD1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWg7KWE9aC5uZXh0RWZmZWN0LGgubmV4dEVmZmVjdD1udWxsLGguZmxhZ3MmOCYmKGguc2libGluZz1cbm51bGwsaC5zdGF0ZU5vZGU9bnVsbCksaD1hO1g9YjtpZygpO3JldHVybiEwfWZ1bmN0aW9uIGdrKGEsYixjKXtiPU1pKGMsYik7Yj1QaShhLGIsMSk7QWcoYSxiKTtiPUhnKCk7YT1LaihhLDEpO251bGwhPT1hJiYoJGMoYSwxLGIpLE1qKGEsYikpfVxuZnVuY3Rpb24gV2koYSxiKXtpZigzPT09YS50YWcpZ2soYSxhLGIpO2Vsc2UgZm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoMz09PWMudGFnKXtnayhjLGEsYik7YnJlYWt9ZWxzZSBpZigxPT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpe2E9TWkoYixhKTt2YXIgZT1TaShjLGEsMSk7QWcoYyxlKTtlPUhnKCk7Yz1LaihjLDEpO2lmKG51bGwhPT1jKSRjKGMsMSxlKSxNaihjLGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXRyeXtkLmNvbXBvbmVudERpZENhdGNoKGIsYSl9Y2F0Y2goZil7fWJyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIFlqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1IZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztVPT09YSYmKFcmYyk9PT1jJiYoND09PVZ8fDM9PT1WJiYoVyY2MjkxNDU2MCk9PT1XJiY1MDA+TygpLWpqP1FqKGEsMCk6dWp8PWMpO01qKGEsYil9ZnVuY3Rpb24gbGooYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj0wOzA9PT1iJiYoYj1hLm1vZGUsMD09PShiJjIpP2I9MTowPT09KGImNCk/Yj05OT09PWVnKCk/MToyOigwPT09R2omJihHaj10aiksYj1ZYyg2MjkxNDU2MCZ+R2opLDA9PT1iJiYoYj00MTk0MzA0KSkpO2M9SGcoKTthPUtqKGEsYik7bnVsbCE9PWEmJigkYyhhLGIsYyksTWooYSxjKSl9dmFyIGNrO1xuY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIubGFuZXM7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fE4uY3VycmVudCl1Zz0hMDtlbHNlIGlmKDAhPT0oYyZkKSl1Zz0wIT09KGEuZmxhZ3MmMTYzODQpPyEwOiExO2Vsc2V7dWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6cmkoYik7c2goKTticmVhaztjYXNlIDU6Z2goYik7YnJlYWs7Y2FzZSAxOkZmKGIudHlwZSkmJkpmKGIpO2JyZWFrO2Nhc2UgNDplaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6ZD1iLm1lbW9pemVkUHJvcHMudmFsdWU7dmFyIGU9Yi50eXBlLl9jb250ZXh0O0kobWcsZS5fY3VycmVudFZhbHVlKTtlLl9jdXJyZW50VmFsdWU9ZDticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiB0aShhLGIsYyk7SShQLFAuY3VycmVudCYxKTtiPWhpKGEsYixjKTtyZXR1cm4gbnVsbCE9PVxuYj9iLnNpYmxpbmc6bnVsbH1JKFAsUC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmNjQpKXtpZihkKXJldHVybiBBaShhLGIsYyk7Yi5mbGFnc3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtJKFAsUC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBiLmxhbmVzPTAsbWkoYSxiLGMpfXJldHVybiBoaShhLGIsYyl9ZWxzZSB1Zz0hMTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsTS5jdXJyZW50KTt0ZyhiLGMpO2U9Q2gobnVsbCxiLGQsYSxlLGMpO2IuZmxhZ3N8PTE7aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKEZmKGQpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt4ZyhiKTt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmR2coYixkLGcsYSk7ZS51cGRhdGVyPUtnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbHM9YjtPZyhiLGQsYSxjKTtiPXFpKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLGZpKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTthOntudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTtcbmE9Yi5wZW5kaW5nUHJvcHM7Zj1lLl9pbml0O2U9ZihlLl9wYXlsb2FkKTtiLnR5cGU9ZTtmPWIudGFnPWhrKGUpO2E9bGcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9bGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTpiPXBpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9Z2kobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1paShudWxsLGIsZSxsZyhlLnR5cGUsYSksZCxjKTticmVhayBhfXRocm93IEVycm9yKHkoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbGkoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSkscGkoYSxiLGQsZSxjKTtjYXNlIDM6cmkoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1hfHxudWxsPT09ZCl0aHJvdyBFcnJvcih5KDI4MikpO1xuZD1iLnBlbmRpbmdQcm9wcztlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lnKGEsYik7Q2coYixkLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlzaCgpLGI9aGkoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihmPWUuaHlkcmF0ZSlraD1yZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGpoPWIsZj1saD0hMDtpZihmKXthPWUubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YTtpZihudWxsIT1hKWZvcihlPTA7ZTxhLmxlbmd0aDtlKz0yKWY9YVtlXSxmLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWFbZSsxXSx0aC5wdXNoKGYpO2M9WmcoYixudWxsLGQsYyk7Zm9yKGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8MTAyNCxjPWMuc2libGluZ31lbHNlIGZpKGEsYixkLGMpLHNoKCk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gZ2goYiksbnVsbD09PWEmJlxucGgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixuZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmbmYoZCxmKSYmKGIuZmxhZ3N8PTE2KSxvaShhLGIpLGZpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmcGgoYiksbnVsbDtjYXNlIDEzOnJldHVybiB0aShhLGIsYyk7Y2FzZSA0OnJldHVybiBlaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1ZZyhiLG51bGwsZCxjKTpmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksZ2koYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO3ZhciBoPWIudHlwZS5fY29udGV4dDtJKG1nLGguX2N1cnJlbnRWYWx1ZSk7aC5fY3VycmVudFZhbHVlPWY7aWYobnVsbCE9PWcpaWYoaD1nLnZhbHVlLGY9SGUoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwLDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU4uY3VycmVudCl7Yj1oaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1cbmsuZmlyc3RDb250ZXh0O251bGwhPT1sOyl7aWYobC5jb250ZXh0PT09ZCYmMCE9PShsLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYobD16ZygtMSxjJi1jKSxsLnRhZz0yLEFnKGgsbCkpO2gubGFuZXN8PWM7bD1oLmFsdGVybmF0ZTtudWxsIT09bCYmKGwubGFuZXN8PWMpO3NnKGgucmV0dXJuLGMpO2subGFuZXN8PWM7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z31maShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix0ZyhiLGMpLGU9dmcoZSxcbmYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5mbGFnc3w9MSxmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bGcoZSxiLnBlbmRpbmdQcm9wcyksZj1sZyhlLnR5cGUsZiksaWkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIGtpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLGIudGFnPTEsRmYoZCk/KGE9ITAsSmYoYikpOmE9ITEsdGcoYixjKSxNZyhiLGQsZSksT2coYixkLGUsYykscWkobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBBaShhLGIsYyk7Y2FzZSAyMzpyZXR1cm4gbWkoYSxiLGMpO2Nhc2UgMjQ6cmV0dXJuIG1pKGEsYixjKX10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO1xufTtmdW5jdGlvbiBpayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZmxhZ3M9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gbmgoYSxiLGMsZCl7cmV0dXJuIG5ldyBpayhhLGIsYyxkKX1mdW5jdGlvbiBqaShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gaGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGppKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1BYSlyZXR1cm4gMTE7aWYoYT09PURhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9bmgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWppKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHVhOnJldHVybiBYZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIEhhOmc9ODtlfD0xNjticmVhaztjYXNlIHdhOmc9ODtlfD0xO2JyZWFrO2Nhc2UgeGE6cmV0dXJuIGE9bmgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT14YSxhLnR5cGU9eGEsYS5sYW5lcz1mLGE7Y2FzZSBCYTpyZXR1cm4gYT1uaCgxMyxjLGIsZSksYS50eXBlPUJhLGEuZWxlbWVudFR5cGU9QmEsYS5sYW5lcz1mLGE7Y2FzZSBDYTpyZXR1cm4gYT1uaCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1DYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiB2aShjLGUsZixiKTtjYXNlIEphOnJldHVybiBhPW5oKDI0LGMsYixlKSxhLmVsZW1lbnRUeXBlPUphLGEubGFuZXM9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHlhOmc9MTA7YnJlYWsgYTtjYXNlIHphOmc9OTticmVhayBhO2Nhc2UgQWE6Zz0xMTticmVhayBhO2Nhc2UgRGE6Zz0xNDticmVhayBhO2Nhc2UgRWE6Zz0xNjtkPW51bGw7YnJlYWsgYTtjYXNlIEZhOmc9MjI7YnJlYWsgYX10aHJvdyBFcnJvcih5KDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPW5oKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWGcoYSxiLGMsZCl7YT1uaCg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gdmkoYSxiLGMsZCl7YT1uaCgyMyxhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gVWcoYSxiLGMpe2E9bmgoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gV2coYSxiLGMpe2I9bmgoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBqayhhLGIsYyl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz1aYygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz1aYygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz1aYygwKTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9bnVsbH1cbmZ1bmN0aW9uIGtrKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6dGEsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBsayhhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1IZygpLGc9SWcoZSk7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxzO2I6e2lmKFpiKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHkoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoRmYoaC50eXBlKSl7aD1oLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKTt0aHJvdyBFcnJvcih5KDE3MSkpO31pZigxPT09Yy50YWcpe3ZhciBrPWMudHlwZTtpZihGZihrKSl7Yz1JZihjLGssaCk7YnJlYWsgYX19Yz1ofWVsc2UgYz1DZjtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPXpnKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PVxuZCYmKGIuY2FsbGJhY2s9ZCk7QWcoZSxiKTtKZyhlLGcsZik7cmV0dXJuIGd9ZnVuY3Rpb24gbWsoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBuayhhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gb2soYSxiKXtuayhhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmbmsoYSxiKX1mdW5jdGlvbiBwaygpe3JldHVybiBudWxsfVxuZnVuY3Rpb24gcWsoYSxiLGMpe3ZhciBkPW51bGwhPWMmJm51bGwhPWMuaHlkcmF0aW9uT3B0aW9ucyYmYy5oeWRyYXRpb25PcHRpb25zLm11dGFibGVTb3VyY2VzfHxudWxsO2M9bmV3IGprKGEsYixudWxsIT1jJiYhMD09PWMuaHlkcmF0ZSk7Yj1uaCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7Yy5jdXJyZW50PWI7Yi5zdGF0ZU5vZGU9Yzt4ZyhiKTthW2ZmXT1jLmN1cnJlbnQ7Y2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl7Yj1kW2FdO3ZhciBlPWIuX2dldFZlcnNpb247ZT1lKGIuX3NvdXJjZSk7bnVsbD09Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2MubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYixlXTpjLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChiLGUpfXRoaXMuX2ludGVybmFsUm9vdD1jfVxucWsucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtsayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLG51bGwpfTtxay5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdCxiPWEuY29udGFpbmVySW5mbztsayhudWxsLGEsbnVsbCxmdW5jdGlvbigpe2JbZmZdPW51bGx9KX07ZnVuY3Rpb24gcmsoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfVxuZnVuY3Rpb24gc2soYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBxayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHRrKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7aC5jYWxsKGEpfX1sayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXNrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2suY2FsbChhKX19WGooZnVuY3Rpb24oKXtsayhiLGcsYSxlKX0pfXJldHVybiBtayhnKX1lYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNCxiKTtvayhhLDQpfX07ZmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDY3MTA4ODY0LGIpO29rKGEsNjcxMDg4NjQpfX07XG5nYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpLGM9SWcoYSk7SmcoYSxjLGIpO29rKGEsYyl9fTtoYz1mdW5jdGlvbihhLGIpe3JldHVybiBiKCl9O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjphYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IoeSg5MCkpO1dhKGQpO2FiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1XajtcbkhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9WDtYfD00O3RyeXtyZXR1cm4gZ2coOTgsYS5iaW5kKG51bGwsYixjLGQsZSkpfWZpbmFsbHl7WD1mLDA9PT1YJiYod2ooKSxpZygpKX19O0liPWZ1bmN0aW9uKCl7MD09PShYJjQ5KSYmKFZqKCksT2ooKSl9O0piPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtYfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fTtmdW5jdGlvbiB1ayhhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiBrayhhLGIsbnVsbCxjKX12YXIgdms9e0V2ZW50czpbQ2IsdWUsRGIsRWIsRmIsT2ose2N1cnJlbnQ6ITF9XX0sd2s9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTcuMC4yXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB4az17YnVuZGxlVHlwZTp3ay5idW5kbGVUeXBlLHZlcnNpb246d2sudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOndrLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6d2sucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWNjKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3ay5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5wayxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHlrPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZigheWsuaXNEaXNhYmxlZCYmeWsuc3VwcG9ydHNGaWJlcil0cnl7TGY9eWsuaW5qZWN0KHhrKSxNZj15a31jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9dms7ZXhwb3J0cy5jcmVhdGVQb3J0YWw9dWs7XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHkoMTg4KSk7dGhyb3cgRXJyb3IoeSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1jYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtpZigwIT09KGMmNDgpKXJldHVybiBhKGIpO1h8PTE7dHJ5e2lmKGEpcmV0dXJuIGdnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1g9YyxpZygpfX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFyayhhKSl0aHJvdyBFcnJvcih5KDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oWGooZnVuY3Rpb24oKXt0ayhudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbZmZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1XajtleHBvcnRzLnVuc3RhYmxlX2NyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3JldHVybiB1ayhhLGIsMjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwpfTtcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXJrKGMpKXRocm93IEVycm9yKHkoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IoeSgzOCkpO3JldHVybiB0ayhhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIFJlYWN0IFJvdXRlciBET00gdjYuMi4wXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUxheW91dEVmZmVjdCwgY3JlYXRlRWxlbWVudCwgZm9yd2FyZFJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZVBhdGggfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciwgdXNlSHJlZiwgdXNlTG9jYXRpb24sIHVzZVJlc29sdmVkUGF0aCwgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXMsIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgVU5TQUZFX1JvdXRlQ29udGV4dCwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBnZW5lcmF0ZVBhdGgsIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIHJlbmRlck1hdGNoZXMsIHJlc29sdmVQYXRoLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wib25DbGlja1wiLCBcInJlbG9hZERvY3VtZW50XCIsIFwicmVwbGFjZVwiLCBcInN0YXRlXCIsIFwidGFyZ2V0XCIsIFwidG9cIl0sXG4gICAgICBfZXhjbHVkZWQyID0gW1wiYXJpYS1jdXJyZW50XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImVuZFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJjaGlsZHJlblwiXTtcblxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgUm91dGVyIVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28geW91IGNhbiBtb3JlIGVhc2lseVxuICAgICAgLy8gZmluZCB0aGUgc291cmNlIGZvciBhIHdhcm5pbmcgdGhhdCBhcHBlYXJzIGluIHRoZSBjb25zb2xlIGJ5XG4gICAgICAvLyBlbmFibGluZyBcInBhdXNlIG9uIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIEphdmFTY3JpcHQgZGVidWdnZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBQcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqL1xuZnVuY3Rpb24gQnJvd3NlclJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IHVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvd1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuZnVuY3Rpb24gSGFzaFJvdXRlcihfcmVmMikge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHdpbmRvd1xuICB9ID0gX3JlZjI7XG4gIGxldCBoaXN0b3J5UmVmID0gdXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93XG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGA8Um91dGVyPmAgdGhhdCBhY2NlcHRzIGEgcHJlLWluc3RhbnRpYXRlZCBoaXN0b3J5IG9iamVjdC4gSXQncyBpbXBvcnRhbnRcbiAqIHRvIG5vdGUgdGhhdCB1c2luZyB5b3VyIG93biBoaXN0b3J5IG9iamVjdCBpcyBoaWdobHkgZGlzY291cmFnZWQgYW5kIG1heSBhZGRcbiAqIHR3byB2ZXJzaW9ucyBvZiB0aGUgaGlzdG9yeSBsaWJyYXJ5IHRvIHlvdXIgYnVuZGxlcyB1bmxlc3MgeW91IHVzZSB0aGUgc2FtZVxuICogdmVyc2lvbiBvZiB0aGUgaGlzdG9yeSBsaWJyYXJ5IHRoYXQgUmVhY3QgUm91dGVyIHVzZXMgaW50ZXJuYWxseS5cbiAqL1xuZnVuY3Rpb24gSGlzdG9yeVJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGhpc3RvcnlcbiAgfSA9IF9yZWYzO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGlzdG9yeVJvdXRlci5kaXNwbGF5TmFtZSA9IFwidW5zdGFibGVfSGlzdG9yeVJvdXRlclwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuY29uc3QgTGluayA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIExpbmtXaXRoUmVmKF9yZWY0LCByZWYpIHtcbiAgbGV0IHtcbiAgICBvbkNsaWNrLFxuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2UgPSBmYWxzZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG9cbiAgfSA9IF9yZWY0LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBfZXhjbHVkZWQpO1xuXG4gIGxldCBocmVmID0gdXNlSHJlZih0byk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXRcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAob25DbGljaykgb25DbGljayhldmVudCk7XG5cbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgIXJlbG9hZERvY3VtZW50KSB7XG4gICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogaHJlZixcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuXG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5jb25zdCBOYXZMaW5rID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gTmF2TGlua1dpdGhSZWYoX3JlZjUsIHJlZikge1xuICBsZXQge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50UHJvcCA9IFwicGFnZVwiLFxuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AgPSBcIlwiLFxuICAgIGVuZCA9IGZhbHNlLFxuICAgIHN0eWxlOiBzdHlsZVByb3AsXG4gICAgdG8sXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY1LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY1LCBfZXhjbHVkZWQyKTtcblxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0byk7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCB0b1BhdGhuYW1lID0gcGF0aC5wYXRobmFtZTtcblxuICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCI7XG4gIGxldCBhcmlhQ3VycmVudCA9IGlzQWN0aXZlID8gYXJpYUN1cnJlbnRQcm9wIDogdW5kZWZpbmVkO1xuICBsZXQgY2xhc3NOYW1lO1xuXG4gIGlmICh0eXBlb2YgY2xhc3NOYW1lUHJvcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lUHJvcCh7XG4gICAgICBpc0FjdGl2ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBjbGFzc05hbWUgcHJvcCBpcyBub3QgYSBmdW5jdGlvbiwgd2UgdXNlIGEgZGVmYXVsdCBgYWN0aXZlYFxuICAgIC8vIGNsYXNzIGZvciA8TmF2TGluayAvPnMgdGhhdCBhcmUgYWN0aXZlLiBJbiB2NSBgYWN0aXZlYCB3YXMgdGhlIGRlZmF1bHRcbiAgICAvLyB2YWx1ZSBmb3IgYGFjdGl2ZUNsYXNzTmFtZWAsIGJ1dCB3ZSBhcmUgcmVtb3ZpbmcgdGhhdCBBUEkgYW5kIGNhbiBzdGlsbFxuICAgIC8vIHVzZSB0aGUgb2xkIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGEgY2xlYW5lciB1cGdyYWRlIHBhdGggYW5kIGtlZXAgdGhlXG4gICAgLy8gc2ltcGxlIHN0eWxpbmcgcnVsZXMgd29ya2luZyBhcyB0aGV5IGN1cnJlbnRseSBkby5cbiAgICBjbGFzc05hbWUgPSBbY2xhc3NOYW1lUHJvcCwgaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbGV0IHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKHtcbiAgICBpc0FjdGl2ZVxuICB9KSA6IHN0eWxlUHJvcDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnQsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHRvOiB0b1xuICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbih7XG4gICAgaXNBY3RpdmVcbiAgfSkgOiBjaGlsZHJlbik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBOYXZMaW5rLmRpc3BsYXlOYW1lID0gXCJOYXZMaW5rXCI7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBIT09LU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBjbGljayBiZWhhdmlvciBmb3Igcm91dGVyIGA8TGluaz5gIGNvbXBvbmVudHMuIFRoaXMgaXMgdXNlZnVsIGlmXG4gKiB5b3UgbmVlZCB0byBjcmVhdGUgY3VzdG9tIGA8TGluaz5gIGNvbXBvbmVudHMgd2l0aCB0aGUgc2FtZSBjbGljayBiZWhhdmlvciB3ZVxuICogdXNlIGluIG91ciBleHBvcnRlZCBgPExpbms+YC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIF90ZW1wKSB7XG4gIGxldCB7XG4gICAgdGFyZ2V0LFxuICAgIHJlcGxhY2U6IHJlcGxhY2VQcm9wLFxuICAgIHN0YXRlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8pO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IDAgJiYgKCAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIElnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZiB0aGUgVVJMIGhhc24ndCBjaGFuZ2VkLCBhIHJlZ3VsYXIgPGE+IHdpbGwgZG8gYSByZXBsYWNlIGluc3RlYWQgb2ZcbiAgICAgIC8vIGEgcHVzaCwgc28gZG8gdGhlIHNhbWUgaGVyZS5cblxuICAgICAgbGV0IHJlcGxhY2UgPSAhIXJlcGxhY2VQcm9wIHx8IGNyZWF0ZVBhdGgobG9jYXRpb24pID09PSBjcmVhdGVQYXRoKHBhdGgpO1xuICAgICAgbmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZSxcbiAgICAgICAgc3RhdGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgcGF0aCwgcmVwbGFjZVByb3AsIHN0YXRlLCB0YXJnZXQsIHRvXSk7XG59XG4vKipcbiAqIEEgY29udmVuaWVudCB3cmFwcGVyIGZvciByZWFkaW5nIGFuZCB3cml0aW5nIHNlYXJjaCBwYXJhbWV0ZXJzIHZpYSB0aGVcbiAqIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcodHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiwgXCJZb3UgY2Fubm90IHVzZSB0aGUgYHVzZVNlYXJjaFBhcmFtc2AgaG9vayBpbiBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBcIiArIFwic3VwcG9ydCB0aGUgVVJMU2VhcmNoUGFyYW1zIEFQSS4gSWYgeW91IG5lZWQgdG8gc3VwcG9ydCBJbnRlcm5ldCBcIiArIFwiRXhwbG9yZXIgMTEsIHdlIHJlY29tbWVuZCB5b3UgbG9hZCBhIHBvbHlmaWxsIHN1Y2ggYXMgXCIgKyBcImh0dHBzOi8vZ2l0aHViLmNvbS91bmdhcC91cmwtc2VhcmNoLXBhcmFtc1xcblxcblwiICsgXCJJZiB5b3UncmUgdW5zdXJlIGhvdyB0byBsb2FkIHBvbHlmaWxscywgd2UgcmVjb21tZW5kIHlvdSBjaGVjayBvdXQgXCIgKyBcImh0dHBzOi8vcG9seWZpbGwuaW8vdjMvIHdoaWNoIHByb3ZpZGVzIHNvbWUgcmVjb21tZW5kYXRpb25zIGFib3V0IGhvdyBcIiArIFwidG8gbG9hZCBwb2x5ZmlsbHMgb25seSBmb3IgdXNlcnMgdGhhdCBuZWVkIHRoZW0sIGluc3RlYWQgb2YgZm9yIGV2ZXJ5IFwiICsgXCJ1c2VyLlwiKSA6IHZvaWQgMDtcbiAgbGV0IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYgPSB1c2VSZWYoY3JlYXRlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgc2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBmb3IgKGxldCBrZXkgb2YgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50LmtleXMoKSkge1xuICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKGtleSkpIHtcbiAgICAgICAgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50LmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWFyY2hQYXJhbXM7XG4gIH0sIFtsb2NhdGlvbi5zZWFyY2hdKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHNldFNlYXJjaFBhcmFtcyA9IHVzZUNhbGxiYWNrKChuZXh0SW5pdCwgbmF2aWdhdGVPcHRpb25zKSA9PiB7XG4gICAgbmF2aWdhdGUoXCI/XCIgKyBjcmVhdGVTZWFyY2hQYXJhbXMobmV4dEluaXQpLCBuYXZpZ2F0ZU9wdGlvbnMpO1xuICB9LCBbbmF2aWdhdGVdKTtcbiAgcmV0dXJuIFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc107XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QgdXNpbmcgdGhlIGdpdmVuIGluaXRpYWxpemVyLlxuICpcbiAqIFRoaXMgaXMgaWRlbnRpY2FsIHRvIGBuZXcgVVJMU2VhcmNoUGFyYW1zKGluaXQpYCBleGNlcHQgaXQgYWxzb1xuICogc3VwcG9ydHMgYXJyYXlzIGFzIHZhbHVlcyBpbiB0aGUgb2JqZWN0IGZvcm0gb2YgdGhlIGluaXRpYWxpemVyXG4gKiBpbnN0ZWFkIG9mIGp1c3Qgc3RyaW5ncy4gVGhpcyBpcyBjb252ZW5pZW50IHdoZW4geW91IG5lZWQgbXVsdGlwbGVcbiAqIHZhbHVlcyBmb3IgYSBnaXZlbiBrZXksIGJ1dCBkb24ndCB3YW50IHRvIHVzZSBhbiBhcnJheSBpbml0aWFsaXplci5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZjpcbiAqXG4gKiAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAqICAgICBbJ3NvcnQnLCAnbmFtZSddLFxuICogICAgIFsnc29ydCcsICdwcmljZSddXG4gKiAgIF0pO1xuICpcbiAqIHlvdSBjYW4gZG86XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKHtcbiAqICAgICBzb3J0OiBbJ25hbWUnLCAncHJpY2UnXVxuICogICB9KTtcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvKipcbiAqIFJlYWN0IFJvdXRlciB2Ni4yLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCBjcmVhdGVFbGVtZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrLCBDaGlsZHJlbiwgaXNWYWxpZEVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSwgQWN0aW9uLCBwYXJzZVBhdGggfSBmcm9tICdoaXN0b3J5JztcblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IFJvdXRlciFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgfVxufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT05URVhUXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQSBOYXZpZ2F0b3IgaXMgYSBcImxvY2F0aW9uIGNoYW5nZXJcIjsgaXQncyBob3cgeW91IGdldCB0byBkaWZmZXJlbnQgbG9jYXRpb25zLlxuICpcbiAqIEV2ZXJ5IGhpc3RvcnkgaW5zdGFuY2UgY29uZm9ybXMgdG8gdGhlIE5hdmlnYXRvciBpbnRlcmZhY2UsIGJ1dCB0aGVcbiAqIGRpc3RpbmN0aW9uIGlzIHVzZWZ1bCBwcmltYXJpbHkgd2hlbiBpdCBjb21lcyB0byB0aGUgbG93LWxldmVsIDxSb3V0ZXI+IEFQSVxuICogd2hlcmUgYm90aCB0aGUgbG9jYXRpb24gYW5kIGEgbmF2aWdhdG9yIG11c3QgYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBpbiBvcmRlclxuICogdG8gYXZvaWQgXCJ0ZWFyaW5nXCIgdGhhdCBtYXkgb2NjdXIgaW4gYSBzdXNwZW5zZS1lbmFibGVkIGFwcCBpZiB0aGUgYWN0aW9uXG4gKiBhbmQvb3IgbG9jYXRpb24gd2VyZSB0byBiZSByZWFkIGRpcmVjdGx5IGZyb20gdGhlIGhpc3RvcnkgaW5zdGFuY2UuXG4gKi9cblxuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdmlnYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJOYXZpZ2F0aW9uXCI7XG59XG5cbmNvbnN0IExvY2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExvY2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTG9jYXRpb25cIjtcbn1cblxuY29uc3QgUm91dGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoe1xuICBvdXRsZXQ6IG51bGwsXG4gIG1hdGNoZXM6IFtdXG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJvdXRlXCI7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjbWVtb3J5cm91dGVyXG4gKi9cbmZ1bmN0aW9uIE1lbW9yeVJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbEVudHJpZXMsXG4gICAgaW5pdGlhbEluZGV4XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IHVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogTm90ZTogVGhpcyBBUEkgaXMgbW9zdGx5IHVzZWZ1bCBpbiBSZWFjdC5Db21wb25lbnQgc3ViY2xhc3NlcyB0aGF0IGFyZSBub3RcbiAqIGFibGUgdG8gdXNlIGhvb2tzLiBJbiBmdW5jdGlvbmFsIGNvbXBvbmVudHMsIHdlIHJlY29tbWVuZCB5b3UgdXNlIHRoZVxuICogYHVzZU5hdmlnYXRlYCBob29rIGluc3RlYWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNuYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiBOYXZpZ2F0ZShfcmVmMikge1xuICBsZXQge1xuICAgIHRvLFxuICAgIHJlcGxhY2UsXG4gICAgc3RhdGVcbiAgfSA9IF9yZWYyO1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mXG4gIC8vIHRoZSByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwiPE5hdmlnYXRlPiBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpLnN0YXRpYywgXCI8TmF2aWdhdGU+IG11c3Qgbm90IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgcmVuZGVyIGluIGEgPFN0YXRpY1JvdXRlcj4uIFwiICsgXCJUaGlzIGlzIGEgbm8tb3AsIGJ1dCB5b3Ugc2hvdWxkIG1vZGlmeSB5b3VyIGNvZGUgc28gdGhlIDxOYXZpZ2F0ZT4gaXMgXCIgKyBcIm9ubHkgZXZlciByZW5kZXJlZCBpbiByZXNwb25zZSB0byBzb21lIHVzZXIgaW50ZXJhY3Rpb24gb3Igc3RhdGUgY2hhbmdlLlwiKSA6IHZvaWQgMDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0ZSh0bywge1xuICAgICAgcmVwbGFjZSxcbiAgICAgIHN0YXRlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3JvdXRlXG4gKi9cbmZ1bmN0aW9uIFJvdXRlKF9wcm9wcykge1xuICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkEgPFJvdXRlPiBpcyBvbmx5IGV2ZXIgdG8gYmUgdXNlZCBhcyB0aGUgY2hpbGQgb2YgPFJvdXRlcz4gZWxlbWVudCwgXCIgKyBcIm5ldmVyIHJlbmRlcmVkIGRpcmVjdGx5LiBQbGVhc2Ugd3JhcCB5b3VyIDxSb3V0ZT4gaW4gYSA8Um91dGVzPi5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBsb2NhdGlvbiBjb250ZXh0IGZvciB0aGUgcmVzdCBvZiB0aGUgYXBwLlxuICpcbiAqIE5vdGU6IFlvdSB1c3VhbGx5IHdvbid0IHJlbmRlciBhIDxSb3V0ZXI+IGRpcmVjdGx5LiBJbnN0ZWFkLCB5b3UnbGwgcmVuZGVyIGFcbiAqIHJvdXRlciB0aGF0IGlzIG1vcmUgc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudCBzdWNoIGFzIGEgPEJyb3dzZXJSb3V0ZXI+XG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSA8U3RhdGljUm91dGVyPiBmb3Igc2VydmVyIHJlbmRlcmluZy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3JvdXRlclxuICovXG5mdW5jdGlvbiBSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWVQcm9wID0gXCIvXCIsXG4gICAgY2hpbGRyZW4gPSBudWxsLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblByb3AsXG4gICAgbmF2aWdhdGlvblR5cGUgPSBBY3Rpb24uUG9wLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AgPSBmYWxzZVxuICB9ID0gX3JlZjM7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBiYXNlbmFtZSA9IG5vcm1hbGl6ZVBhdGhuYW1lKGJhc2VuYW1lUHJvcCk7XG4gIGxldCBuYXZpZ2F0aW9uQ29udGV4dCA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wXG4gIH0pLCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgc3RhdGljUHJvcF0pO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgbG9jYXRpb25Qcm9wID0gcGFyc2VQYXRoKGxvY2F0aW9uUHJvcCk7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIixcbiAgICBzdGF0ZSA9IG51bGwsXG4gICAga2V5ID0gXCJkZWZhdWx0XCJcbiAgfSA9IGxvY2F0aW9uUHJvcDtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0aG5hbWU6IHRyYWlsaW5nUGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoLFxuICAgICAgc3RhdGUsXG4gICAgICBrZXlcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXldKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhsb2NhdGlvbiAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmlnYXRpb25Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB2YWx1ZToge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBuYXZpZ2F0aW9uVHlwZVxuICAgIH1cbiAgfSkpO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIG5lc3RlZCB0cmVlIG9mIDxSb3V0ZT4gZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjcm91dGVzXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcyhfcmVmNCkge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uXG4gIH0gPSBfcmVmNDtcbiAgcmV0dXJuIHVzZVJvdXRlcyhjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pLCBsb2NhdGlvbik7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEhPT0tTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVsbCBocmVmIGZvciB0aGUgZ2l2ZW4gXCJ0b1wiIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmdcbiAqIGN1c3RvbSBsaW5rcyB0aGF0IGFyZSBhbHNvIGFjY2Vzc2libGUgYW5kIHByZXNlcnZlIHJpZ2h0LWNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlaHJlZlxuICovXG5cbmZ1bmN0aW9uIHVzZUhyZWYodG8pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSB1c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBoYXNoLFxuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFxuICB9ID0gdXNlUmVzb2x2ZWRQYXRoKHRvKTtcbiAgbGV0IGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWU7XG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIGxldCB0b1BhdGhuYW1lID0gZ2V0VG9QYXRobmFtZSh0byk7XG4gICAgbGV0IGVuZHNXaXRoU2xhc2ggPSB0b1BhdGhuYW1lICE9IG51bGwgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSArIChlbmRzV2l0aFNsYXNoID8gXCIvXCIgOiBcIlwiKSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLmNyZWF0ZUhyZWYoe1xuICAgIHBhdGhuYW1lOiBqb2luZWRQYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaFxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBhIDxSb3V0ZXI+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlaW5yb3V0ZXJjb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIHRoZSBjdXJyZW50IFVSTCBpbiB3ZWJcbiAqIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IElmIHlvdSdyZSB1c2luZyB0aGlzIGl0IG1heSBtZWFuIHlvdSdyZSBkb2luZyBzb21lIG9mIHlvdXIgb3duXG4gKiBcInJvdXRpbmdcIiBpbiB5b3VyIGFwcCwgYW5kIHdlJ2QgbGlrZSB0byBrbm93IHdoYXQgeW91ciB1c2UgY2FzZSBpcy4gV2UgbWF5XG4gKiBiZSBhYmxlIHRvIHByb3ZpZGUgc29tZXRoaW5nIGhpZ2hlci1sZXZlbCB0byBiZXR0ZXIgc3VpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlbG9jYXRpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUxvY2F0aW9uKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VuYXZpZ2F0aW9udHlwZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uVHlwZSgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KS5uYXZpZ2F0aW9uVHlwZTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBVUkwgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUgbWF0Y2hlcyB0aGUgY3VycmVudCBVUkwuXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyBcImFjdGl2ZVwiIHN0YXRlLCBlLmcuXG4gKiA8TmF2TGluaz4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VtYXRjaFxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIHBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpLCBbcGF0aG5hbWUsIHBhdHRlcm5dKTtcbn1cbi8qKlxuICogVGhlIGludGVyZmFjZSBmb3IgdGhlIG5hdmlnYXRlKCkgZnVuY3Rpb24gcmV0dXJuZWQgZnJvbSB1c2VOYXZpZ2F0ZSgpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBpbXBlcmF0aXZlIG1ldGhvZCBmb3IgY2hhbmdpbmcgdGhlIGxvY2F0aW9uLiBVc2VkIGJ5IDxMaW5rPnMsIGJ1dFxuICogbWF5IGFsc28gYmUgdXNlZCBieSBvdGhlciBlbGVtZW50cyB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IHVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KG1hdGNoZXMubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICBsZXQgYWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhhY3RpdmVSZWYuY3VycmVudCwgXCJZb3Ugc2hvdWxkIGNhbGwgbmF2aWdhdGUoKSBpbiBhIFJlYWN0LnVzZUVmZmVjdCgpLCBub3Qgd2hlbiBcIiArIFwieW91ciBjb21wb25lbnQgaXMgZmlyc3QgcmVuZGVyZWQuXCIpIDogdm9pZCAwO1xuICAgIGlmICghYWN0aXZlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIG5hdmlnYXRvci5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSk7XG5cbiAgICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgICBwYXRoLnBhdGhuYW1lID0gam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICAgIH1cblxuICAgICghIW9wdGlvbnMucmVwbGFjZSA/IG5hdmlnYXRvci5yZXBsYWNlIDogbmF2aWdhdG9yLnB1c2gpKHBhdGgsIG9wdGlvbnMuc3RhdGUpO1xuICB9LCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lXSk7XG4gIHJldHVybiBuYXZpZ2F0ZTtcbn1cbmNvbnN0IE91dGxldENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogUmV0dXJucyB0aGUgY29udGV4dCAoaWYgcHJvdmlkZWQpIGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS5cbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlb3V0bGV0Y29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldENvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KE91dGxldENvbnRleHQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS4gVXNlZCBpbnRlcm5hbGx5IGJ5IDxPdXRsZXQ+IHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VvdXRsZXRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXQoY29udGV4dCkge1xuICBsZXQgb3V0bGV0ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpLm91dGxldDtcblxuICBpZiAob3V0bGV0KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE91dGxldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgfSwgb3V0bGV0KTtcbiAgfVxuXG4gIHJldHVybiBvdXRsZXQ7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBvZiB0aGUgZHluYW1pYyBwYXJhbXMgZnJvbSB0aGUgY3VycmVudFxuICogVVJMIHRoYXQgd2VyZSBtYXRjaGVkIGJ5IHRoZSByb3V0ZSBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjdXNlcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IHVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSN1c2VyZXNvbHZlZHBhdGhcbiAqL1xuXG5mdW5jdGlvbiB1c2VSZXNvbHZlZFBhdGgodG8pIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSB1c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShtYXRjaGVzLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUpLCBbdG8sIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3VzZXJvdXRlc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VSb3V0ZXMoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbWF0Y2hlczogcGFyZW50TWF0Y2hlc1xuICB9ID0gdXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IHBhcmVudE1hdGNoZXNbcGFyZW50TWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgbGV0IHBhcmVudFBhcmFtcyA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xuICBsZXQgcGFyZW50UGF0aG5hbWUgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50UGF0aG5hbWVCYXNlID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWVCYXNlIDogXCIvXCI7XG4gIGxldCBwYXJlbnRSb3V0ZSA9IHJvdXRlTWF0Y2ggJiYgcm91dGVNYXRjaC5yb3V0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gWW91IHdvbid0IGdldCBhIHdhcm5pbmcgYWJvdXQgMiBkaWZmZXJlbnQgPFJvdXRlcz4gdW5kZXIgYSA8Um91dGU+XG4gICAgLy8gd2l0aG91dCBhIHRyYWlsaW5nICosIGJ1dCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgd2FybmluZyBhbnl3YXkgc2luY2Ugd2VcbiAgICAvLyBjYW5ub3QgZXZlbiBnaXZlIHRoZSB3YXJuaW5nIHVubGVzcyB0aGV5IGxhbmQgYXQgdGhlIHBhcmVudCByb3V0ZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyA8Um91dGVzPlxuICAgIC8vICAgey8qIFRoaXMgcm91dGUgcGF0aCBNVVNUIGVuZCB3aXRoIC8qIGJlY2F1c2Ugb3RoZXJ3aXNlXG4gICAgLy8gICAgICAgaXQgd2lsbCBuZXZlciBtYXRjaCAvYmxvZy9wb3N0LzEyMyAqL31cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGVsZW1lbnQ9ezxCbG9nIC8+fSAvPlxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nL2ZlZWRcIiBlbGVtZW50PXs8QmxvZ0ZlZWQgLz59IC8+XG4gICAgLy8gPC9Sb3V0ZXM+XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBCbG9nKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFJvdXRlcz5cbiAgICAvLyAgICAgICA8Um91dGUgcGF0aD1cInBvc3QvOmlkXCIgZWxlbWVudD17PFBvc3QgLz59IC8+XG4gICAgLy8gICAgIDwvUm91dGVzPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UocGFyZW50UGF0aG5hbWUsICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSwgXCJZb3UgcmVuZGVyZWQgZGVzY2VuZGFudCA8Um91dGVzPiAob3IgY2FsbGVkIGB1c2VSb3V0ZXMoKWApIGF0IFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aG5hbWUgKyBcIlxcXCIgKHVuZGVyIDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+KSBidXQgdGhlIFwiKSArIFwicGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFxcXCIqXFxcIi4gVGhpcyBtZWFucyBpZiB5b3UgbmF2aWdhdGUgXCIgKyBcImRlZXBlciwgdGhlIHBhcmVudCB3b24ndCBtYXRjaCBhbnltb3JlIGFuZCB0aGVyZWZvcmUgdGhlIGNoaWxkIFwiICsgXCJyb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXFxuXFxuXCIgKyAoXCJQbGVhc2UgY2hhbmdlIHRoZSBwYXJlbnQgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4gdG8gPFJvdXRlIFwiKSArIChcInBhdGg9XFxcIlwiICsgKHBhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBwYXJlbnRQYXRoICsgXCIvKlwiKSArIFwiXFxcIj4uXCIpKTtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIHZhciBfcGFyc2VkTG9jYXRpb25BcmckcGE7XG5cbiAgICBsZXQgcGFyc2VkTG9jYXRpb25BcmcgPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gICAgIShwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8ICgoX3BhcnNlZExvY2F0aW9uQXJnJHBhID0gcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfcGFyc2VkTG9jYXRpb25BcmckcGEuc3RhcnRzV2l0aChwYXJlbnRQYXRobmFtZUJhc2UpKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBgPFJvdXRlcyBsb2NhdGlvbj5gIG9yIGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilgLCBcIiArIFwidGhlIGxvY2F0aW9uIHBhdGhuYW1lIG11c3QgYmVnaW4gd2l0aCB0aGUgcG9ydGlvbiBvZiB0aGUgVVJMIHBhdGhuYW1lIHRoYXQgd2FzIFwiICsgKFwibWF0Y2hlZCBieSBhbGwgcGFyZW50IHJvdXRlcy4gVGhlIGN1cnJlbnQgcGF0aG5hbWUgYmFzZSBpcyBcXFwiXCIgKyBwYXJlbnRQYXRobmFtZUJhc2UgKyBcIlxcXCIgXCIpICsgKFwiYnV0IHBhdGhuYW1lIFxcXCJcIiArIHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lICsgXCJcXFwiIHdhcyBnaXZlbiBpbiB0aGUgYGxvY2F0aW9uYCBwcm9wLlwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsIFwiTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXFxcIlwiICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoICsgXCJcXFwiIFwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKG1hdGNoZXMgPT0gbnVsbCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50LiBcIiArIFwiVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBudWxsIHZhbHVlIGJ5IGRlZmF1bHQgcmVzdWx0aW5nIGluIGFuIFxcXCJlbXB0eVxcXCIgcGFnZS5cIikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyAmJiBtYXRjaGVzLm1hcChtYXRjaCA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zLCBtYXRjaC5wYXJhbXMpLFxuICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICBwYXRobmFtZUJhc2U6IG1hdGNoLnBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXJlbnRQYXRobmFtZUJhc2UgOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVVRJTFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcm91dGUgY29uZmlnIGZyb20gYSBSZWFjdCBcImNoaWxkcmVuXCIgb2JqZWN0LCB3aGljaCBpcyB1c3VhbGx5XG4gKiBlaXRoZXIgYSBgPFJvdXRlPmAgZWxlbWVudCBvciBhbiBhcnJheSBvZiB0aGVtLiBVc2VkIGludGVybmFsbHkgYnlcbiAqIGA8Um91dGVzPmAgdG8gY3JlYXRlIGEgcm91dGUgY29uZmlnIGZyb20gaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjY3JlYXRlcm91dGVzZnJvbWNoaWxkcmVuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGxldCByb3V0ZXMgPSBbXTtcbiAgQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZWxlbWVudCA9PiB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL2lzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBJZ25vcmUgbm9uLWVsZW1lbnRzLiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gbW9yZSBlYXNpbHkgaW5saW5lXG4gICAgICAvLyBjb25kaXRpb25hbHMgaW4gdGhlaXIgcm91dGUgY29uZmlnLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IEZyYWdtZW50KSB7XG4gICAgICAvLyBUcmFuc3BhcmVudGx5IHN1cHBvcnQgUmVhY3QuRnJhZ21lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgIHJvdXRlcy5wdXNoLmFwcGx5KHJvdXRlcywgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIltcIiArICh0eXBlb2YgZWxlbWVudC50eXBlID09PSBcInN0cmluZ1wiID8gZWxlbWVudC50eXBlIDogZWxlbWVudC50eXBlLm5hbWUpICsgXCJdIGlzIG5vdCBhIDxSb3V0ZT4gY29tcG9uZW50LiBBbGwgY29tcG9uZW50IGNoaWxkcmVuIG9mIDxSb3V0ZXM+IG11c3QgYmUgYSA8Um91dGU+IG9yIDxSZWFjdC5GcmFnbWVudD5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxldCByb3V0ZSA9IHtcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIGluZGV4OiBlbGVtZW50LnByb3BzLmluZGV4LFxuICAgICAgcGF0aDogZWxlbWVudC5wcm9wcy5wYXRoXG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG4gIH0pO1xuICByZXR1cm4gcm91dGVzO1xufVxuLyoqXG4gKiBUaGUgcGFyYW1ldGVycyB0aGF0IHdlcmUgcGFyc2VkIGZyb20gdGhlIFVSTCBwYXRoLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jcy9lbi92Ni9hcGkjZ2VuZXJhdGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChwYXRoLCBwYXJhbXMpIHtcbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC86KFxcdyspL2csIChfLCBrZXkpID0+IHtcbiAgICAhKHBhcmFtc1trZXldICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIk1pc3NpbmcgXFxcIjpcIiArIGtleSArIFwiXFxcIiBwYXJhbVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIHBhcmFtc1trZXldO1xuICB9KS5yZXBsYWNlKC9cXC8qXFwqJC8sIF8gPT4gcGFyYW1zW1wiKlwiXSA9PSBudWxsID8gXCJcIiA6IHBhcmFtc1tcIipcIl0ucmVwbGFjZSgvXlxcLyovLCBcIi9cIikpO1xufVxuLyoqXG4gKiBBIFJvdXRlTWF0Y2ggY29udGFpbnMgaW5mbyBhYm91dCBob3cgYSByb3V0ZSBtYXRjaGVkIGEgVVJMLlxuICovXG5cbi8qKlxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcm91dGVzIHRvIGEgbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIG1hdGNoIGRhdGEuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtYXRjaHJvdXRlc1xuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gIGxldCBwYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCIsIGJhc2VuYW1lKTtcblxuICBpZiAocGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgbWF0Y2hlcyA9PSBudWxsICYmIGkgPCBicmFuY2hlcy5sZW5ndGg7ICsraSkge1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaGVzW2ldLCBwYXRobmFtZSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZmxhdHRlblJvdXRlcyhyb3V0ZXMsIGJyYW5jaGVzLCBwYXJlbnRzTWV0YSwgcGFyZW50UGF0aCkge1xuICBpZiAoYnJhbmNoZXMgPT09IHZvaWQgMCkge1xuICAgIGJyYW5jaGVzID0gW107XG4gIH1cblxuICBpZiAocGFyZW50c01ldGEgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudHNNZXRhID0gW107XG4gIH1cblxuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFwiXCI7XG4gIH1cblxuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IG1ldGEgPSB7XG4gICAgICByZWxhdGl2ZVBhdGg6IHJvdXRlLnBhdGggfHwgXCJcIixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcblxuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgIW1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgbWV0YS5yZWxhdGl2ZVBhdGggPSBtZXRhLnJlbGF0aXZlUGF0aC5zbGljZShwYXJlbnRQYXRoLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBqb2luUGF0aHMoW3BhcmVudFBhdGgsIG1ldGEucmVsYXRpdmVQYXRoXSk7XG4gICAgbGV0IHJvdXRlc01ldGEgPSBwYXJlbnRzTWV0YS5jb25jYXQobWV0YSk7IC8vIEFkZCB0aGUgY2hpbGRyZW4gYmVmb3JlIGFkZGluZyB0aGlzIHJvdXRlIHRvIHRoZSBhcnJheSBzbyB3ZSB0cmF2ZXJzZSB0aGVcbiAgICAvLyByb3V0ZSB0cmVlIGRlcHRoLWZpcnN0IGFuZCBjaGlsZCByb3V0ZXMgYXBwZWFyIGJlZm9yZSB0aGVpciBwYXJlbnRzIGluXG4gICAgLy8gdGhlIFwiZmxhdHRlbmVkXCIgdmVyc2lvbi5cblxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAhKHJvdXRlLmluZGV4ICE9PSB0cnVlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJJbmRleCByb3V0ZXMgbXVzdCBub3QgaGF2ZSBjaGlsZCByb3V0ZXMuIFBsZWFzZSByZW1vdmUgXCIgKyAoXCJhbGwgY2hpbGQgcm91dGVzIGZyb20gcm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiLlwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH0gLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cblxuXG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBicmFuY2hlcztcbn1cblxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIC8vIEhpZ2hlciBzY29yZSBmaXJzdFxuICA6IGNvbXBhcmVJbmRleGVzKGEucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLCBiLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSkpO1xufVxuXG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcblxuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXRoLCBpbmRleCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgbGV0IGluaXRpYWxTY29yZSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cblxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzLmZpbHRlcihzID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSwgaW5pdGlhbFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgPyAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOiAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXNNZXRhXG4gIH0gPSBicmFuY2g7XG4gIGxldCBtYXRjaGVkUGFyYW1zID0ge307XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBcIi9cIjtcbiAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbihtYXRjaGVkUGFyYW1zLCBtYXRjaC5wYXJhbXMpO1xuICAgIGxldCByb3V0ZSA9IG1ldGEucm91dGU7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIHBhcmFtczogbWF0Y2hlZFBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICAgIHBhdGhuYW1lQmFzZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lQmFzZV0pLFxuICAgICAgcm91dGVcbiAgICB9KTtcblxuICAgIGlmIChtYXRjaC5wYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgICBtYXRjaGVkUGF0aG5hbWUgPSBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBvZiBgbWF0Y2hSb3V0ZXMoKWAgaW50byBhIFJlYWN0IGVsZW1lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzKSB7XG4gIGlmIChwYXJlbnRNYXRjaGVzID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRNYXRjaGVzID0gW107XG4gIH1cblxuICBpZiAobWF0Y2hlcyA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIG1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgY2hpbGRyZW46IG1hdGNoLnJvdXRlLmVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IG1hdGNoLnJvdXRlLmVsZW1lbnQgOiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChPdXRsZXQsIG51bGwpLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb3V0bGV0LFxuICAgICAgICBtYXRjaGVzOiBwYXJlbnRNYXRjaGVzLmNvbmNhdChtYXRjaGVzLnNsaWNlKDAsIGluZGV4ICsgMSkpXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBBIFBhdGhQYXR0ZXJuIGlzIHVzZWQgdG8gbWF0Y2ggb24gc29tZSBwb3J0aW9uIG9mIGEgVVJMIHBhdGhuYW1lLlxuICovXG5cblxuLyoqXG4gKiBQZXJmb3JtcyBwYXR0ZXJuIG1hdGNoaW5nIG9uIGEgVVJMIHBhdGhuYW1lIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0XG4gKiB0aGUgbWF0Y2guXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzL2VuL3Y2L2FwaSNtYXRjaHBhdGhcbiAqL1xuZnVuY3Rpb24gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHBhdHRlcm4gPSB7XG4gICAgICBwYXRoOiBwYXR0ZXJuLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICBlbmQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbGV0IFttYXRjaGVyLCBwYXJhbU5hbWVzXSA9IGNvbXBpbGVQYXRoKHBhdHRlcm4ucGF0aCwgcGF0dGVybi5jYXNlU2Vuc2l0aXZlLCBwYXR0ZXJuLmVuZCk7XG4gIGxldCBtYXRjaCA9IHBhdGhuYW1lLm1hdGNoKG1hdGNoZXIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgbGV0IG1hdGNoZWRQYXRobmFtZSA9IG1hdGNoWzBdO1xuICBsZXQgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgbGV0IGNhcHR1cmVHcm91cHMgPSBtYXRjaC5zbGljZSgxKTtcbiAgbGV0IHBhcmFtcyA9IHBhcmFtTmFtZXMucmVkdWNlKChtZW1vLCBwYXJhbU5hbWUsIGluZGV4KSA9PiB7XG4gICAgLy8gV2UgbmVlZCB0byBjb21wdXRlIHRoZSBwYXRobmFtZUJhc2UgaGVyZSB1c2luZyB0aGUgcmF3IHNwbGF0IHZhbHVlXG4gICAgLy8gaW5zdGVhZCBvZiB1c2luZyBwYXJhbXNbXCIqXCJdIGxhdGVyIGJlY2F1c2UgaXQgd2lsbCBiZSBkZWNvZGVkIHRoZW5cbiAgICBpZiAocGFyYW1OYW1lID09PSBcIipcIikge1xuICAgICAgbGV0IHNwbGF0VmFsdWUgPSBjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiO1xuICAgICAgcGF0aG5hbWVCYXNlID0gbWF0Y2hlZFBhdGhuYW1lLnNsaWNlKDAsIG1hdGNoZWRQYXRobmFtZS5sZW5ndGggLSBzcGxhdFZhbHVlLmxlbmd0aCkucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICAgIH1cblxuICAgIG1lbW9bcGFyYW1OYW1lXSA9IHNhZmVseURlY29kZVVSSUNvbXBvbmVudChjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiLCBwYXJhbU5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHBhdGhuYW1lOiBtYXRjaGVkUGF0aG5hbWUsXG4gICAgcGF0aG5hbWVCYXNlLFxuICAgIHBhdHRlcm5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVBhdGgocGF0aCwgY2FzZVNlbnNpdGl2ZSwgZW5kKSB7XG4gIGlmIChjYXNlU2Vuc2l0aXZlID09PSB2b2lkIDApIHtcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoZW5kID09PSB2b2lkIDApIHtcbiAgICBlbmQgPSB0cnVlO1xuICB9XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwYXRoID09PSBcIipcIiB8fCAhcGF0aC5lbmRzV2l0aChcIipcIikgfHwgcGF0aC5lbmRzV2l0aChcIi8qXCIpLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSkgOiB2b2lkIDA7XG4gIGxldCBwYXJhbU5hbWVzID0gW107XG4gIGxldCByZWdleHBTb3VyY2UgPSBcIl5cIiArIHBhdGgucmVwbGFjZSgvXFwvKlxcKj8kLywgXCJcIikgLy8gSWdub3JlIHRyYWlsaW5nIC8gYW5kIC8qLCB3ZSdsbCBoYW5kbGUgaXQgYmVsb3dcbiAgLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYSBsZWFkaW5nIC9cbiAgLnJlcGxhY2UoL1tcXFxcLiorXiQ/e318KClbXFxdXS9nLCBcIlxcXFwkJlwiKSAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyc1xuICAucmVwbGFjZSgvOihcXHcrKS9nLCAoXywgcGFyYW1OYW1lKSA9PiB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIFwiKFteXFxcXC9dKylcIjtcbiAgfSk7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpKSB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKFwiKlwiKTtcbiAgICByZWdleHBTb3VyY2UgKz0gcGF0aCA9PT0gXCIqXCIgfHwgcGF0aCA9PT0gXCIvKlwiID8gXCIoLiopJFwiIC8vIEFscmVhZHkgbWF0Y2hlZCB0aGUgaW5pdGlhbCAvLCBqdXN0IG1hdGNoIHRoZSByZXN0XG4gICAgOiBcIig/OlxcXFwvKC4rKXxcXFxcLyopJFwiOyAvLyBEb24ndCBpbmNsdWRlIHRoZSAvIGluIHBhcmFtc1tcIipcIl1cbiAgfSBlbHNlIHtcbiAgICByZWdleHBTb3VyY2UgKz0gZW5kID8gXCJcXFxcLyokXCIgLy8gV2hlbiBtYXRjaGluZyB0byB0aGUgZW5kLCBpZ25vcmUgdHJhaWxpbmcgc2xhc2hlc1xuICAgIDogLy8gT3RoZXJ3aXNlLCBtYXRjaCBhIHdvcmQgYm91bmRhcnkgb3IgYSBwcm9jZWVkaW5nIC8uIFRoZSB3b3JkIGJvdW5kYXJ5IHJlc3RyaWN0c1xuICAgIC8vIHBhcmVudCByb3V0ZXMgdG8gbWF0Y2hpbmcgb25seSB0aGVpciBvd24gd29yZHMgYW5kIG5vdGhpbmcgbW9yZSwgZS5nLiBwYXJlbnRcbiAgICAvLyByb3V0ZSBcIi9ob21lXCIgc2hvdWxkIG5vdCBtYXRjaCBcIi9ob21lMlwiLlxuICAgIFwiKD86XFxcXGJ8XFxcXC98JClcIjtcbiAgfVxuXG4gIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cChyZWdleHBTb3VyY2UsIGNhc2VTZW5zaXRpdmUgPyB1bmRlZmluZWQgOiBcImlcIik7XG4gIHJldHVybiBbbWF0Y2hlciwgcGFyYW1OYW1lc107XG59XG5cbmZ1bmN0aW9uIHNhZmVseURlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSwgcGFyYW1OYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJUaGUgdmFsdWUgZm9yIHRoZSBVUkwgcGFyYW0gXFxcIlwiICsgcGFyYW1OYW1lICsgXCJcXFwiIHdpbGwgbm90IGJlIGRlY29kZWQgYmVjYXVzZVwiICsgKFwiIHRoZSBzdHJpbmcgXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgaXMgYSBtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHlcIikgKyAoXCIgZHVlIHRvIGEgYmFkIHBlcmNlbnQgZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIHJlc29sdmVkIHBhdGggb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBwYXRobmFtZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3MvZW4vdjYvYXBpI3Jlc29sdmVwYXRoXG4gKi9cblxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCh0bywgZnJvbVBhdGhuYW1lKSB7XG4gIGlmIChmcm9tUGF0aG5hbWUgPT09IHZvaWQgMCkge1xuICAgIGZyb21QYXRobmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZTogdG9QYXRobmFtZSxcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gIGxldCBwYXRobmFtZSA9IHRvUGF0aG5hbWUgPyB0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpID8gdG9QYXRobmFtZSA6IHJlc29sdmVQYXRobmFtZSh0b1BhdGhuYW1lLCBmcm9tUGF0aG5hbWUpIDogZnJvbVBhdGhuYW1lO1xuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaDogbm9ybWFsaXplU2VhcmNoKHNlYXJjaCksXG4gICAgaGFzaDogbm9ybWFsaXplSGFzaChoYXNoKVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUocmVsYXRpdmVQYXRoLCBmcm9tUGF0aG5hbWUpIHtcbiAgbGV0IHNlZ21lbnRzID0gZnJvbVBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICBsZXQgcmVsYXRpdmVTZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG4gIHJlbGF0aXZlU2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBpZiAoc2VnbWVudCA9PT0gXCIuLlwiKSB7XG4gICAgICAvLyBLZWVwIHRoZSByb290IFwiXCIgc2VnbWVudCBzbyB0aGUgcGF0aG5hbWUgc3RhcnRzIGF0IC9cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSBzZWdtZW50cy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09IFwiLlwiKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50cy5sZW5ndGggPiAxID8gc2VnbWVudHMuam9pbihcIi9cIikgOiBcIi9cIjtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSkge1xuICBsZXQgdG8gPSB0eXBlb2YgdG9BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG9BcmcpIDogdG9Bcmc7XG4gIGxldCB0b1BhdGhuYW1lID0gdG9BcmcgPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHRvLnBhdGhuYW1lOyAvLyBJZiBhIHBhdGhuYW1lIGlzIGV4cGxpY2l0bHkgcHJvdmlkZWQgaW4gYHRvYCwgaXQgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAvLyByb3V0ZSBjb250ZXh0LiBUaGlzIGlzIGV4cGxhaW5lZCBpbiBgTm90ZSBvbiBgPExpbmsgdG8+YCB2YWx1ZXNgIGluIG91clxuICAvLyBtaWdyYXRpb24gZ3VpZGUgZnJvbSB2NSBhcyBhIG1lYW5zIG9mIGRpc2FtYmlndWF0aW9uIGJldHdlZW4gYHRvYCB2YWx1ZXNcbiAgLy8gdGhhdCBiZWdpbiB3aXRoIGAvYCBhbmQgdGhvc2UgdGhhdCBkbyBub3QuIEhvd2V2ZXIsIHRoaXMgaXMgcHJvYmxlbWF0aWMgZm9yXG4gIC8vIGB0b2AgdmFsdWVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYSBwYXRobmFtZS4gYHRvYCBjYW4gc2ltcGx5IGJlIGEgc2VhcmNoIG9yXG4gIC8vIGhhc2ggc3RyaW5nLCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyByZWxhdGl2ZVxuICAvLyB0byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHBhdGhuYW1lIGFuZCAqbm90KiB0aGUgcm91dGUgcGF0aG5hbWUuXG5cbiAgbGV0IGZyb207XG5cbiAgaWYgKHRvUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIGZyb20gPSBsb2NhdGlvblBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3V0ZVBhdGhuYW1lSW5kZXggPSByb3V0ZVBhdGhuYW1lcy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi4uXCIpKSB7XG4gICAgICBsZXQgdG9TZWdtZW50cyA9IHRvUGF0aG5hbWUuc3BsaXQoXCIvXCIpOyAvLyBFYWNoIGxlYWRpbmcgLi4gc2VnbWVudCBtZWFucyBcImdvIHVwIG9uZSByb3V0ZVwiIGluc3RlYWQgb2YgXCJnbyB1cCBvbmVcbiAgICAgIC8vIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5IGRpZmZlcmVuY2UgZnJvbSBob3cgPGEgaHJlZj4gd29ya3MgYW5kIGFcbiAgICAgIC8vIG1ham9yIHJlYXNvbiB3ZSBjYWxsIHRoaXMgYSBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuXG4gICAgICB3aGlsZSAodG9TZWdtZW50c1swXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHRvU2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgcm91dGVQYXRobmFtZUluZGV4IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHRvLnBhdGhuYW1lID0gdG9TZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBtb3JlIFwiLi5cIiBzZWdtZW50cyB0aGFuIHBhcmVudCByb3V0ZXMsIHJlc29sdmUgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgcm9vdCAvIFVSTC5cblxuXG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG5cbiAgbGV0IHBhdGggPSByZXNvbHZlUGF0aCh0bywgZnJvbSk7IC8vIEVuc3VyZSB0aGUgcGF0aG5hbWUgaGFzIGEgdHJhaWxpbmcgc2xhc2ggaWYgdGhlIG9yaWdpbmFsIHRvIHZhbHVlIGhhZCBvbmUuXG5cbiAgaWYgKHRvUGF0aG5hbWUgJiYgdG9QYXRobmFtZSAhPT0gXCIvXCIgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIikgJiYgIXBhdGgucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgcGF0aC5wYXRobmFtZSArPSBcIi9cIjtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRUb1BhdGhuYW1lKHRvKSB7XG4gIC8vIEVtcHR5IHN0cmluZ3Mgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgYXMgLyBwYXRoc1xuICByZXR1cm4gdG8gPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykucGF0aG5hbWUgOiB0by5wYXRobmFtZTtcbn1cblxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSBcIi9cIikgcmV0dXJuIHBhdGhuYW1lO1xuXG4gIGlmICghcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGJhc2VuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoYmFzZW5hbWUubGVuZ3RoKTtcblxuICBpZiAobmV4dENoYXIgJiYgbmV4dENoYXIgIT09IFwiL1wiKSB7XG4gICAgLy8gcGF0aG5hbWUgZG9lcyBub3Qgc3RhcnQgd2l0aCBiYXNlbmFtZS9cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwYXRobmFtZS5zbGljZShiYXNlbmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xufVxuXG5jb25zdCBqb2luUGF0aHMgPSBwYXRocyA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcblxuY29uc3Qgbm9ybWFsaXplUGF0aG5hbWUgPSBwYXRobmFtZSA9PiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuXG5jb25zdCBub3JtYWxpemVTZWFyY2ggPSBzZWFyY2ggPT4gIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IHNlYXJjaC5zdGFydHNXaXRoKFwiP1wiKSA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuXG5jb25zdCBub3JtYWxpemVIYXNoID0gaGFzaCA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlcywgTG9jYXRpb25Db250ZXh0IGFzIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Db250ZXh0IGFzIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgZ2VuZXJhdGVQYXRoLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUm91dGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMjAuMlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgZixnLGgsaztpZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19XG5pZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgdD1udWxsLHU9bnVsbCx3PWZ1bmN0aW9uKCl7aWYobnVsbCE9PXQpdHJ5e3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dCghMCxhKTt0PW51bGx9Y2F0Y2goYil7dGhyb3cgc2V0VGltZW91dCh3LDApLGI7fX07Zj1mdW5jdGlvbihhKXtudWxsIT09dD9zZXRUaW1lb3V0KGYsMCxhKToodD1hLHNldFRpbWVvdXQodywwKSl9O2c9ZnVuY3Rpb24oYSxiKXt1PXNldFRpbWVvdXQoYSxiKX07aD1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KX07ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiExfTtrPWV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oKXt9fWVsc2V7dmFyIHg9d2luZG93LnNldFRpbWVvdXQseT13aW5kb3cuY2xlYXJUaW1lb3V0O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSl7dmFyIHo9XG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3JlYWN0LXBvbHlmaWxsc1wiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgeiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIil9dmFyIEE9ITEsQj1udWxsLEM9LTEsRD01LEU9MDtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCk+PVxuRX07az1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6RD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEY9bmV3IE1lc3NhZ2VDaGFubmVsLEc9Ri5wb3J0MjtGLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG51bGwhPT1CKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO0U9YStEO3RyeXtCKCEwLGEpP0cucG9zdE1lc3NhZ2UobnVsbCk6KEE9ITEsQj1udWxsKX1jYXRjaChiKXt0aHJvdyBHLnBvc3RNZXNzYWdlKG51bGwpLGI7fX1lbHNlIEE9ITF9O2Y9ZnVuY3Rpb24oYSl7Qj1hO0F8fChBPSEwLEcucG9zdE1lc3NhZ2UobnVsbCkpfTtnPWZ1bmN0aW9uKGEsYil7Qz1cbngoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3koQyk7Qz0tMX19ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxJKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBKKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBLKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPkkobixjKSl2b2lkIDAhPT1yJiYwPkkocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPkkocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEkoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIEw9W10sTT1bXSxOPTEsTz1udWxsLFA9MyxRPSExLFI9ITEsUz0hMTtcbmZ1bmN0aW9uIFQoYSl7Zm9yKHZhciBiPUooTSk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylLKE0pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpSyhNKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEgoTCxiKTtlbHNlIGJyZWFrO2I9SihNKX19ZnVuY3Rpb24gVShhKXtTPSExO1QoYSk7aWYoIVIpaWYobnVsbCE9PUooTCkpUj0hMCxmKFYpO2Vsc2V7dmFyIGI9SihNKTtudWxsIT09YiYmZyhVLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFYoYSxiKXtSPSExO1MmJihTPSExLGgoKSk7UT0hMDt2YXIgYz1QO3RyeXtUKGIpO2ZvcihPPUooTCk7bnVsbCE9PU8mJighKE8uZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCkpOyl7dmFyIGQ9Ty5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7Ty5jYWxsYmFjaz1udWxsO1A9Ty5wcmlvcml0eUxldmVsO3ZhciBlPWQoTy5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP08uY2FsbGJhY2s9ZTpPPT09SihMKSYmSyhMKTtUKGIpfWVsc2UgSyhMKTtPPUooTCl9aWYobnVsbCE9PU8pdmFyIG09ITA7ZWxzZXt2YXIgbj1KKE0pO251bGwhPT1uJiZnKFUsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e089bnVsbCxQPWMsUT0hMX19dmFyIFc9aztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtSfHxRfHwoUj0hMCxmKFYpKX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBQfTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIEooTCl9O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChQKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1QfXZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7UD1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9VztleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVA7UD1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7UD1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOk4rKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLEgoTSxhKSxudWxsPT09SihMKSYmYT09PUooTSkmJihTP2goKTpTPSEwLGcoVSxjLWQpKSk6KGEuc29ydEluZGV4PWUsSChMLGEpLFJ8fFF8fChSPSEwLGYoVikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1QO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVA7UD1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtQPWN9fX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyogV2ViIEZvbnQgTG9hZGVyIHYxLjYuMjggLSAoYykgQWRvYmUgU3lzdGVtcywgR29vZ2xlLiBMaWNlbnNlOiBBcGFjaGUgMi4wICovKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYWEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYmEoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcChhLGIsYyl7cD1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP2FhOmJhO3JldHVybiBwLmFwcGx5KG51bGwsYXJndW1lbnRzKX12YXIgcT1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9O2Z1bmN0aW9uIGNhKGEsYil7dGhpcy5hPWE7dGhpcy5vPWJ8fGE7dGhpcy5jPXRoaXMuby5kb2N1bWVudH12YXIgZGE9ISF3aW5kb3cuRm9udEZhY2U7ZnVuY3Rpb24gdChhLGIsYyxkKXtiPWEuYy5jcmVhdGVFbGVtZW50KGIpO2lmKGMpZm9yKHZhciBlIGluIGMpYy5oYXNPd25Qcm9wZXJ0eShlKSYmKFwic3R5bGVcIj09ZT9iLnN0eWxlLmNzc1RleHQ9Y1tlXTpiLnNldEF0dHJpYnV0ZShlLGNbZV0pKTtkJiZiLmFwcGVuZENoaWxkKGEuYy5jcmVhdGVUZXh0Tm9kZShkKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdShhLGIsYyl7YT1hLmMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYilbMF07YXx8KGE9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTthLmluc2VydEJlZm9yZShjLGEubGFzdENoaWxkKX1mdW5jdGlvbiB2KGEpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGEpfVxuZnVuY3Rpb24gdyhhLGIsYyl7Yj1ifHxbXTtjPWN8fFtdO2Zvcih2YXIgZD1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGU9MDtlPGIubGVuZ3RoO2UrPTEpe2Zvcih2YXIgZj0hMSxnPTA7ZzxkLmxlbmd0aDtnKz0xKWlmKGJbZV09PT1kW2ddKXtmPSEwO2JyZWFrfWZ8fGQucHVzaChiW2VdKX1iPVtdO2ZvcihlPTA7ZTxkLmxlbmd0aDtlKz0xKXtmPSExO2ZvcihnPTA7ZzxjLmxlbmd0aDtnKz0xKWlmKGRbZV09PT1jW2ddKXtmPSEwO2JyZWFrfWZ8fGIucHVzaChkW2VdKX1hLmNsYXNzTmFtZT1iLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1xccysvZyxcIiBcIikucmVwbGFjZSgvXlxccyt8XFxzKyQvLFwiXCIpfWZ1bmN0aW9uIHkoYSxiKXtmb3IodmFyIGM9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWlmKGNbZF09PWIpcmV0dXJuITA7cmV0dXJuITF9XG5mdW5jdGlvbiBlYShhKXtyZXR1cm4gYS5vLmxvY2F0aW9uLmhvc3RuYW1lfHxhLmEubG9jYXRpb24uaG9zdG5hbWV9ZnVuY3Rpb24geihhLGIsYyl7ZnVuY3Rpb24gZCgpe20mJmUmJmYmJihtKGcpLG09bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLG09Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEEoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQigpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEMoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RChhKX19ZnVuY3Rpb24gRShhLGIpe2EuYz1iO0QoYSl9ZnVuY3Rpb24gRChhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRihhKXt0aGlzLmE9YXx8XCItXCJ9Ri5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBIKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitJKGEuYyl9ZnVuY3Rpb24gSShhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEgoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5vLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEYoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7SyhhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBMKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1LKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBLKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSihjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBOKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gTyhhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSShhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSChhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBQKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9UC5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMuby5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGYoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoZiwyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9ZigpfSksZT1udWxsLGY9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtlPXNldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtmLGRdKS50aGVuKGZ1bmN0aW9uKCl7ZSYmKGNsZWFyVGltZW91dChlKSxlPW51bGwpO2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFEoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubT10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTSh0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE0odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBNKHRoaXMuYyx0aGlzLnMpO3RoaXMubT1uZXcgTSh0aGlzLmMsdGhpcy5zKTthPW5ldyBHKHRoaXMuYS5jK1wiLHNlcmlmXCIsSih0aGlzLmEpKTthPU8oYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEcodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEoodGhpcy5hKSk7YT1PKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBHKFwic2VyaWZcIixKKHRoaXMuYSkpO2E9TyhhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgRyhcInNhbnMtc2VyaWZcIixKKHRoaXMuYSkpO2E9XG5PKGEpO3RoaXMubS5hLnN0eWxlLmNzc1RleHQ9YTtOKHRoaXMuZyk7Tih0aGlzLmgpO04odGhpcy5qKTtOKHRoaXMubSl9dmFyIFI9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFM9bnVsbDtmdW5jdGlvbiBUKCl7aWYobnVsbD09PVMpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtTPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFN9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm0uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO1UodGhpcyl9O1xuZnVuY3Rpb24gbGEoYSxiLGMpe2Zvcih2YXIgZCBpbiBSKWlmKFIuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbUltkXV0mJmM9PT1hLmZbUltkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gVShhKXt2YXIgYj1hLmcuYS5vZmZzZXRXaWR0aCxjPWEuaC5hLm9mZnNldFdpZHRoLGQ7KGQ9Yj09PWEuZi5zZXJpZiYmYz09PWEuZltcInNhbnMtc2VyaWZcIl0pfHwoZD1UKCkmJmxhKGEsYixjKSk7ZD9xKCktYS5BPj1hLnc/VCgpJiZsYShhLGIsYykmJihudWxsPT09YS51fHxhLnUuaGFzT3duUHJvcGVydHkoYS5hLmMpKT9WKGEsYS52KTpWKGEsYS5CKTptYShhKTpWKGEsYS52KX1mdW5jdGlvbiBtYShhKXtzZXRUaW1lb3V0KHAoZnVuY3Rpb24oKXtVKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5tLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubT10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEooYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7SyhiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubT0hMDtuYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSihhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9SyhiLFwiZm9udGluYWN0aXZlXCIsYSk7bmEodGhpcyl9O2Z1bmN0aW9uIG5hKGEpezA9PS0tYS5mJiZhLmomJihhLm0/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxLKGEsXCJhY3RpdmVcIikpOkwoYS5hKSl9O2Z1bmN0aW9uIG9hKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1vYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3BhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiBxYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLG09ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKUwoYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxsPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBrPWNbaF0sbj1tW2suY10scj1iLmEseD1rO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSih4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0socixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO2lmKG51bGw9PT1YKWlmKHdpbmRvdy5Gb250RmFjZSl7dmFyIHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSx4YT0vT1MgWC4qVmVyc2lvblxcLzEwXFwuLipTYWZhcmkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGUvLmV4ZWMod2luZG93Lm5hdmlnYXRvci52ZW5kb3IpO1xuWD14PzQyPHBhcnNlSW50KHhbMV0sMTApOnhhPyExOiEwfWVsc2UgWD0hMTtYP3I9bmV3IFAocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLG4pOnI9bmV3IFEocChiLmcsYikscChiLmgsYiksYi5jLGssYi5zLGEsbik7bC5wdXNoKHIpfWZvcihoPTA7aDxsLmxlbmd0aDtoKyspbFtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcGEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtxYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHJhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9XG5yYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIGw9MDtsPGMubGVuZ3RoO2wrKyl7dmFyIGs9Y1tsXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1tsXS5mb250U3R5bGUmJnZvaWQgMCE9Y1tsXS5mb250V2VpZ2h0PyhoPWNbbF0uZm9udFN0eWxlK2NbbF0uZm9udFdlaWdodCxlLnB1c2gobmV3IEcoayxoKSkpOmUucHVzaChuZXcgRyhrKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5vO0EodGhpcy5jLChjLmEuYXBpfHxcImh0dHBzOi8vZmFzdC5mb250cy5uZXQvanNhcGlcIikrXCIvXCIrZCtcIi5qc1wiKyhlP1wiP3Y9XCIrZTpcIlwiKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK1xuZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitkfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9c2EucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEI7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspeih0aGlzLmMsZFtiXSxDKGcpKTt2YXIgbT1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLGw9MDtsPGgubGVuZ3RoO2wrPTEpbS5wdXNoKG5ldyBHKGRbMF0saFtsXSkpO2Vsc2UgbS5wdXNoKG5ldyBHKGRbMF0pKTtFKGcsZnVuY3Rpb24oKXthKG0sZil9KX07ZnVuY3Rpb24gdGEoYSxiKXthP3RoaXMuYz1hOnRoaXMuYz11YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1ifHxcIlwifXZhciB1YT1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24gdmEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB3YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB5YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIHphPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEFhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQmE9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkNhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBtPWRbMV07Zz1bXTtpZihtKWZvcih2YXIgbT1tLnNwbGl0KFwiLFwiKSxoPW0ubGVuZ3RoLGw9MDtsPGg7bCsrKXt2YXIgaztrPW1bbF07aWYoay5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPUNhLmV4ZWMoay50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWs9XCJcIjtlbHNle2s9blsyXTtrPW51bGw9PWt8fFwiXCI9PWs/XCJuXCI6QmFba107bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUFhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7az1bayxuXS5qb2luKFwiXCIpfX1lbHNlIGs9XCJcIjtrJiZnLnB1c2goayl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPXphW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD16YVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEcoZSxmW2RdKSl9fTtmdW5jdGlvbiBFYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBGYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEIsYz10aGlzLmMsZD1uZXcgdGEodGhpcy5hLmFwaSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7dmEoZCxlKTt2YXIgZj1uZXcgeWEoZSk7RGEoZik7eihjLHdhKGQpLEMoYikpO0UoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxGYSl9KX07ZnVuY3Rpb24gR2EoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1HYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubztiP0EodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0sbT1iW2YrMV0saD0wO2g8bS5sZW5ndGg7aCsrKWUucHVzaChuZXcgRyhnLG1baF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobCl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubyxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxtPWMuZm9udHMubGVuZ3RoO2c8bTsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEcoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQSh0aGlzLmMsKHRoaXMuZi5hcGl8fFwiaHR0cHM6Ly9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBvYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEhhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBHYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEVhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIvc3R5bGUuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA5NzFjOTZhY2M1OGE5NzYwZjNjXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInBsYXlncm91bmQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wbGF5Z3JvdW5kL1wiOyIsInZhciBjcmVhdGVTdHlsZXNoZWV0ID0gKGNodW5rSWQsIGZ1bGxocmVmLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG52YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuXHQxNDM6IDAsXG5cdDI0NTogMCxcblx0NzgxOiAwLFxuXHQzNTogMCxcblx0Njg1OiAwLFxuXHQ3NDU6IDAsXG5cdDY1MTogMCxcblx0NDIxOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYubWluaUNzcyA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHR2YXIgY3NzQ2h1bmtzID0ge1wiMTE4XCI6MSxcIjQwNVwiOjEsXCI0MDZcIjoxLFwiNDE1XCI6MSxcIjQ4NFwiOjEsXCI1MDNcIjoxLFwiNjMxXCI6MSxcIjg2NFwiOjEsXCI4NzFcIjoxLFwiOTMxXCI6MSxcIjk0MlwiOjEsXCI5NTlcIjoxfTtcblx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG5cdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuXHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbG9hZFN0eWxlc2hlZXQoY2h1bmtJZCkudGhlbigoKSA9PiB7XG5cdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdH0sIChlKSA9PiB7XG5cdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KSk7XG5cdH1cbn07XG5cbi8vIG5vIGhtciIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQxNDM6IDAsXG5cdDI0NTogMCxcblx0NzgxOiAwLFxuXHQzNTogMCxcblx0Njg1OiAwLFxuXHQ3NDU6IDAsXG5cdDY1MTogMCxcblx0NDIxOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcGxheWdyb3VuZFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtwbGF5Z3JvdW5kXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtzZWFyY2gsIHRvZ2dsZVNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi9uYXZpZ2F0aW9uLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG5cdFx0XHRcdDxMaW5rIHRvPXtiYXNlfT5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtuYXYubG9nb30gLz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51IGZsZXhcIj5cclxuXHRcdFx0XHR7bmF2Lm1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0PExpbmsgdG89e2l0ZW0ubGlua30+e2l0ZW0udGV4dH08L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PExpbmsgdG89e25hdi5jb250YWN0Lmxpbmt9IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHR7bmF2LmNvbnRhY3QudGV4dH1cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7bmF2LnNlYXJjaCA9PT0gdHJ1ZSA/IChcclxuXHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gdG9nZ2xlU2VhcmNoKCFzZWFyY2gpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHR7c2VhcmNoID09PSB0cnVlID8gJ3NlYXJjaCBpcyBvbicgOiAnJ31cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2RiJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYmFzZSwgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW1wb3J0KCcuL2Zvb3Rlci5jc3MnKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2VjdGlvbiB0ZXh0LWNlbnRlciBiZy1jb3ZlciBiZy1maXhlZFwiXHJcblx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogZm9vdGVyLmlucXVpcnkuaW1hZ2UsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhIG1iLW1cIj5cclxuXHRcdFx0XHRcdHtmb290ZXIuaW5xdWlyeS5zb2NpYWxNZWRpYS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLW1cIj57Zm9vdGVyLmlucXVpcnkuaGVhZGluZ308L2gyPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcblx0XHRcdFx0XHR7Zm9vdGVyLmlucXVpcnkuYnV0dG9uLnRleHR9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYmItd2hpdGVcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51c1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ28gbWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgdG89e2Zvb3Rlci5tZW51cy5tZW51MS5sb2dvLmxpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Zm9vdGVyLm1lbnVzLm1lbnUxLmxvZ28uaW1hZ2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHA+e2Zvb3Rlci5tZW51cy5tZW51MS5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+Q29udGFjdCBVczwvaDU+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvb3Rlci5tZW51cy5tZW51Mi5idXR0b25zLmJ1dHRvbjEubGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb290ZXIubWVudXMubWVudTIuYnV0dG9ucy5idXR0b24xXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5pY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnUyLmJ1dHRvbnMuYnV0dG9uMS50ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb290ZXIubWVudXMubWVudTIuYnV0dG9ucy5idXR0b24yLmxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9vdGVyLm1lbnVzLm1lbnUyLmJ1dHRvbnMuYnV0dG9uMlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuaWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Zvb3Rlci5tZW51cy5tZW51Mi5idXR0b25zLmJ1dHRvbjIudGV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9vdGVyLm1lbnVzLm1lbnUyLmJ1dHRvbnMuYnV0dG9uMy5pY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdD48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnUyLmJ1dHRvbnMuYnV0dG9uMy50ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvb3Rlci5tZW51cy5tZW51Mi5idXR0b25zLmJ1dHRvbjQuaWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2Zvb3Rlci5tZW51cy5tZW51Mi5idXR0b25zLmJ1dHRvbjQudGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnUzLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnUzLmJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnU0LmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdFx0XHR7Zm9vdGVyLm1lbnVzLm1lbnU0LmJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRvPXtidXR0b24ubGlua31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtidXR0b24udGV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgcHktbVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodCBtYi1kZWZhdWx0IGZsZXhcIj5cclxuXHRcdFx0XHRcdFx0PHA+e2Zvb3Rlci5jb3B5cmlnaHQudGV4dH08L3A+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+e2Zvb3Rlci5jb3B5cmlnaHQuYnV0dG9ucy5idXR0b24xLnRleHR9PC9hPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiPntmb290ZXIuY29weXJpZ2h0LmJ1dHRvbnMuYnV0dG9uMi50ZXh0fTwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuXHRcdFx0XHRcdFx0PHA+e2Zvb3Rlci5jb3B5cmlnaHQuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtmb290ZXIuY29weXJpZ2h0LnNvY2lhbE1lZGlhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17aXRlbS5pY29ufT48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbmV3cyB9IGZyb20gJy4vZGInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5cclxuY29uc3QgTmV3cyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgbWItbFwiPlxyXG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPkxhdGVzdCBOZXdzLjwvaDI+XHJcblx0XHRcdDxoNT5DaGVjayBPdXQgU29tZSBvZiBPdXIgTmV3czwvaDU+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0zXCI+XHJcblx0XHRcdHtuZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8Q2FyZCBpdGVtPXtpdGVtfSBrZXk9e2luZGV4fSAvPlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKHsgdGVzdGltb25pYWxzIH0pID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW1wb3J0KCcuL3Rlc3RpbW9uaWFscy5jc3MnKTtcclxuXHR9KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTQgbWItbCB0ZXN0aW1vbmlhbHMtc2VjdGlvblwiPlxyXG5cdFx0XHR7dGVzdGltb25pYWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiB0ZXh0LWNlbnRlclwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHAtbSBiLXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1xdW90ZS1yaWdodCBtYi1kZWZhdWx0IGljb24tZ3JlZW5cIj48L2k+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLW1cIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyIGljb24tc3RhclwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhciBpY29uLXN0YXJcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXIgaWNvbi1zdGFyXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyIGljb24tc3RhclwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhciBpY29uLXN0YXJcIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYXZhdGFyIGJnLWNvdmVyIG1iLWRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGl0ZW0uYXZhdGFyLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPntpdGVtLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8cD57aXRlbS5wb3NpdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vZGInO1xyXG5pbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi9hYm91dC5jc3MnKTtcclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0yIG1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBhYm91dC5jb2x1bW5zLmNvbHVtbjEuaW1hZ2UsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XHJcblx0XHRcdFx0XHRcdFx0e2Fib3V0LmNvbHVtbnMuY29sdW1uMS5oZWFkaW5nfVxyXG5cdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8cD57YWJvdXQuY29sdW1ucy5jb2x1bW4xLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMi12XCI+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGFib3V0LmNvbHVtbnMuY29sdW1uMi5pbWFnZSxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7YWJvdXQuY29sdW1ucy5jb2x1bW4yLmhlYWRpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+e2Fib3V0LmNvbHVtbnMuY29sdW1uMi5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sdW1uIGJnLWNvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBhYm91dC5jb2x1bW5zLmNvbHVtbjMuaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Fib3V0LmNvbHVtbnMuY29sdW1uMy5oZWFkaW5nfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPnthYm91dC5jb2x1bW5zLmNvbHVtbjMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTNcIj5cclxuXHRcdFx0XHR7YWJvdXQuZGV0YWlscy5tYXAoKGRldGFpbCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHAtZGVmYXVsdFwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTgwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57ZGV0YWlsLmhlYWRpbmd9PC9oND5cclxuXHRcdFx0XHRcdFx0XHQ8cD57ZGV0YWlsLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd29ya3MgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcblxyXG5jb25zdCBXb3JrcyA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW1wb3J0KCcuL3dvcmtzLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3b3Jrc1wiPlxyXG5cdFx0XHR7d29ya3MubWFwKCh3b3JrLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIndvcmsgYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiB3b3JrLmltYWdlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcblx0XHRcdFx0XHRcdDxoND57d29yay5uYW1lfTwvaDQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBXb3JrcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tICcuL2RiJztcclxuY29uc3QgU2VydmljZXMyID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0zXCI+XHJcblx0XHR7c2VydmljZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBiZy1ncmV5IHAtbSBiLWhvdmVyXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGkgY2xhc3NOYW1lPXtpdGVtLmljb259PjwvaT5cclxuXHRcdFx0XHQ8aDM+e2l0ZW0uaGVhZGluZ308L2gzPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0PHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlczI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IEN1c3RvbWVycyA9ICh7IGN1c3RvbWVycyB9KSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW5cIj5cclxuXHRcdHtjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW19IGtleT17aW5kZXh9PjwvaT5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcnM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IE5ld3MgZnJvbSAnfnMvRmxhbWluZ28vTmV3cy5qcyc7XG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJ35zL0ZsYW1pbmdvL1Rlc3RpbW9uaWFscy5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnfnMvRmxhbWluZ28vQWJvdXQuanMnO1xuaW1wb3J0IFdvcmtzIGZyb20gJ35zL0ZsYW1pbmdvL1dvcmtzLmpzJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICd+cy9GbGFtaW5nby9TZXJ2aWNlcy5qcyc7XG5pbXBvcnQgU2VydmljZXMyIGZyb20gJ35jL0ZsYW1pbmdvL1NlcnZpY2VzMi5qcyc7XG5pbXBvcnQgQ3VzdG9tZXJzIGZyb20gJ35jL0ZsYW1pbmdvL0N1c3RvbWVycy5qcyc7XG5cbmltcG9ydCB7IGhvbWUsIGN1c3RvbWVycywgdGVzdGltb25pYWxzIH0gZnJvbSAnLi9kYic7XG5cbmNvbnN0IEZsYW1pbmdvSG9tZSA9ICgpID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJmbGFtaW5nb1wiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGJnLWJsYWNrIHNlY3Rpb25cIj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFpbmVyIGJnLWNvdmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGhvbWUuaGVhZGVyLmltYWdlLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTUwIG1iLWxcIj5cblx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwibWItbVwiPntob21lLmhlYWRlci5kZXNjcmlwdGlvbn08L2g1PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJtYi1tXCI+e2hvbWUuaGVhZGVyLmhlYWRpbmd9PC9oMT5cblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuXHRcdFx0XHRcdFx0e2hvbWUuaGVhZGVyLmJ1dHRvbn1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8U2VydmljZXMyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIiAvPlxuXHRcdFx0XHRcdHtob21lLnNlcnZpY2VzLmhlYWRpbmd9XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJtYi1sXCI+e2hvbWUuc2VydmljZXMuZGVzY3JpcHRpb259PC9oNT5cblx0XHRcdFx0PFNlcnZpY2VzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXkgc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleC1iZXR3ZWVuIG1iLWxcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibWItZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0e2hvbWUud29ya3MuaGVhZGluZ317JyAnfVxuXHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PGg1Pntob21lLndvcmtzLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TGluayB0bz17aG9tZS53b3Jrcy5idXR0b24ubGlua30gY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0e2hvbWUud29ya3MuYnV0dG9uLnRleHR9XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PFdvcmtzIC8+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb24gYWJvdXQtc2VjdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG5cdFx0XHRcdFx0e2hvbWUuYWJvdXQuaGVhZGluZ31cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cIm1iLW1cIj57aG9tZS5hYm91dC5kZXNjcmlwdGlvbn08L2g1PlxuXHRcdFx0XHQ8QWJvdXQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JleSBzZWN0aW9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1tXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9zcGFuPlxuXHRcdFx0XHRcdHtob21lLnRlc3RpbW9uaWFscy5oZWFkaW5nfVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8aDU+e2hvbWUudGVzdGltb25pYWxzLmRlc2NyaXB0aW9ufTwvaDU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxUZXN0aW1vbmlhbHMgdGVzdGltb25pYWxzPXt0ZXN0aW1vbmlhbHN9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8Q3VzdG9tZXJzIGN1c3RvbWVycz17Y3VzdG9tZXJzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PE5ld3MgLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGbGFtaW5nb0hvbWU7XG4iLCJleHBvcnQgY29uc3QgbWVudSA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiAnQXNpYScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0FzaWEgZXhwcmVzcycsXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiAnRXVyb3BlJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnRXVyb3BlIGV4cHJlc3MnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ0FmcmljYScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlbGNvbWUgdG8gQWZyaWNhJyxcclxuXHR9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL2RibWVudSc7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtvcGVuTWVudSwgdG9nZ2xlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSBpbmRleCA9PiB7XHJcblx0XHRzZXRJbmRleChpbmRleCk7XHJcblx0XHR0b2dnbGVNZW51KGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e29wZW5NZW51ID09PSB0cnVlID8gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG5cdFx0XHRcdFx0e21lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX0+XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW0ubmFtZX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1lbnUoIW9wZW5NZW51KX0+T3BlbiBtZW51PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LWl0ZW1cIj5cclxuXHRcdFx0XHRcdDxoMj57bWVudVtjdXJyZW50SW5kZXhdLm5hbWV9PC9oMj5cclxuXHRcdFx0XHRcdDxwPnttZW51W2N1cnJlbnRJbmRleF0uZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnfmMvRmxhbWluZ28vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnfnMvRmxhbWluZ28vRm9vdGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vU2VydmljZXMnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBXb3JrcyBmcm9tICcuL1dvcmtzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi9CbG9nJztcclxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi9BcnRpY2xlJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnfmMvRmxhbWluZ28vTWVudSc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG5cdHsgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IDxIb21lIC8+IH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYHNlcnZpY2VzL2AsXHJcblx0XHRlbGVtZW50OiA8U2VydmljZXMgLz4sXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiBgYWJvdXQvYCxcclxuXHRcdGVsZW1lbnQ6IDxBYm91dCAvPixcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICd3b3Jrcy8nLFxyXG5cdFx0ZWxlbWVudDogPFdvcmtzIC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJ2NvbnRhY3QvJyxcclxuXHRcdGVsZW1lbnQ6IDxDb250YWN0IC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJ2Jsb2cvJyxcclxuXHRcdGVsZW1lbnQ6IDxCbG9nIC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogJ2FydGljbGUvJyxcclxuXHRcdGVsZW1lbnQ6IDxBcnRpY2xlIC8+LFxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBGbGFtaW5nbyA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0V2ViRm9udC5sb2FkKHtcclxuXHRcdFx0Z29vZ2xlOiB7XHJcblx0XHRcdFx0ZmFtaWxpZXM6IFsnUG9wcGluczo0MDAsODAwJywgJ1JvYm90bzo0MDAnXSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGltcG9ydCgnLi9zdHlsZS5zY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGI+XHJcblx0XHRcdDxOYXZpZ2F0aW9uIC8+XHJcblx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdFx0PEZvb3RlciAvPlxyXG5cdFx0XHQ8TWVudSAvPlxyXG5cdFx0PC9iPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbGFtaW5nbztcclxuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuaW1wb3J0IHsgYmFzZSBhcyBwcm9qZWN0QmFzZSB9IGZyb20gJ34vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBpc1Byb2R1Y3Rpb24gPyBgJHtwcm9qZWN0QmFzZX10cmF2ZWwvYCA6ICcvdHJhdmVsLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy90cmF2ZWxgXG5cdDogJy90cmF2ZWwnO1xuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL3RyYXZlbCc7XHJcbmV4cG9ydCBjb25zdCBjb250aW5lbnRzID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6ICdBc2lhJyxcclxuXHRcdGNvdW50cmllczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL0NoaW5hLmpwZylgLFxyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0NoaW5hLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdDaGluYScsXHJcblx0XHRcdFx0Y2l0aWVzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0JlaWppbmcuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdCZWlqaW5nJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL1NoYW5naGFpLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnU2hhbmdoYWknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL0luZGlhLmpwZylgLFxyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0luZGlhLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdJbmRpYScsXHJcblx0XHRcdFx0Y2l0aWVzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL011bWJhaS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ011bWJhaScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9DaGVuYWkuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdDaGVuYWknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL0luZG9uZXppYS5qcGcpYCxcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9JbmRvbmV6aWEuanBnKWAsXHJcblx0XHRcdFx0bmFtZTogJ0luZG9uZXppYScsXHJcblx0XHRcdFx0Y2l0aWVzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL1N1cmFiYXlhLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnU3VyYWJheWEnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvQmVrYXNpLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnXHRCZWthc2knLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL1Bha2lzdGFuLmpwZylgLFxyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL1Bha2lzdGFuLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdQYWtpc3RhbicsXHJcblx0XHRcdFx0Y2l0aWVzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0thcmFjaGkuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdLYXJhY2hpJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0ZhaXNhbGFiYWQuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdGYWlzYWxhYmFkJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiAnRXVyb3BlJyxcclxuXHRcdGNvdW50cmllczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL1JvbWFuaWEuanBnKWAsXHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvUm9tYW5pYS5qcGcpYCxcclxuXHRcdFx0XHRuYW1lOiAnUm9tYW5pYScsXHJcblx0XHRcdFx0Y2l0aWVzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0NvbnN0YW50emEuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdDb25zdGFudGEnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvVmFzbHVpLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnVmFzbHVpJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZsYWc6IGB1cmwoJHtQVUJMSUNfVVJMfS9mbGFncy9GcmFuY2UuanBnKWAsXHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvRnJhbmNlLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdGcmFuY2UnLFxyXG5cdFx0XHRcdGNpdGllczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9QYXJpcy5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1BhcmlzJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL01hcnNlaWxsZS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ01hcnNlaWxsZScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmbGFnOiBgdXJsKCR7UFVCTElDX1VSTH0vZmxhZ3MvU3BhaW4uanBnKWAsXHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvU3BhaW4uanBnKWAsXHJcblx0XHRcdFx0bmFtZTogJ1NwYWluJyxcclxuXHRcdFx0XHRjaXRpZXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvTWFkcmlkLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnTWFkcmlkJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0JhcmNlbG9uYS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0JhcmNlbG9uYScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmbGFnOiBgdXJsKCR7UFVCTElDX1VSTH0vZmxhZ3MvR2VybWFueS5qcGcpYCxcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9HZXJtYW55LmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdHZXJtYW55JyxcclxuXHRcdFx0XHRjaXRpZXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvU3R1dHRnYXJ0LmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnU3R1dHRnYXJ0JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL0JhcmNlbG9uYS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0JhcmNlbG9uYScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ0F1c3RyYWxpYSBhbmQgT2NlYW5pYScsXHJcblx0XHRjb3VudHJpZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZsYWc6IGB1cmwoJHtQVUJMSUNfVVJMfS9mbGFncy9BdXN0cmFsaWEuanBnKWAsXHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvQXVzdHJhbGlhLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdBdXN0cmFsaWEnLFxyXG5cdFx0XHRcdGNpdGllczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9TeWRuZXkuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdTeWRuZXknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvTWVsYm91cm5lLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnTWVsYm91cm5lJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZsYWc6IGB1cmwoJHtQVUJMSUNfVVJMfS9mbGFncy9OZXdaZWVsYW5kLmpwZylgLFxyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL05ld1plZWxhbmQuanBnKWAsXHJcblx0XHRcdFx0bmFtZTogJ05ldyBaZWVsYW5kJyxcclxuXHRcdFx0XHRjaXRpZXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvQXVja2xhbmQuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdBdWNrbGFuZCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9XZWxsaW5ndG9uLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnV2VsbGluZ3RvbicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmbGFnOiBgdXJsKCR7UFVCTElDX1VSTH0vZmxhZ3MvRmlqaS5qcGcpYCxcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9GaWppLmpwZylgLFxyXG5cdFx0XHRcdG5hbWU6ICdGaWppJyxcclxuXHRcdFx0XHRjaXRpZXM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvU3V2YS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1N1dmEnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvTmFkaS5qcGcpYCxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ05hZGknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZmxhZzogYHVybCgke1BVQkxJQ19VUkx9L2ZsYWdzL05ld0d1aW5lYS5qcGcpYCxcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9OZXdHdWluZWEuanBnKWAsXHJcblx0XHRcdFx0bmFtZTogJ1BhcHVhIE5ldyBHdWluZWEnLFxyXG5cdFx0XHRcdGNpdGllczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9MYWUuanBnKWAsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdMYWUnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvTWFkYW5nLmpwZylgLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnTWFkYW5nJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb250aW5lbnRzIH0gZnJvbSAnLi9kYic7XG5cbmNvbnN0IFRyYXZlbEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IFtjb250aW5lbnQsIHNldENvbnRpbmVudF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IHNlbGVjdENvdW50cnkgPSAoY29udGluZW50SW5kZXgsIGNvdW50cnlJbmRleCkgPT4ge1xuXHRcdHNldENvbnRpbmVudChjb250aW5lbnRJbmRleCk7XG5cdFx0c2V0Q291bnRyeShjb3VudHJ5SW5kZXgpO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cInRyYXZlbFwiXG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGNvbnRpbmVudHNbY29udGluZW50XS5jb3VudHJpZXNbY291bnRyeV0uaW1hZ2UsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuXHRcdFx0XHR7Y29udGluZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250aW5lbnRzXCIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHQ8aDE+e2l0ZW0ubmFtZX08L2gxPlxuXHRcdFx0XHRcdFx0e2l0ZW0uY291bnRyaWVzLm1hcCgoYywga2V5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0XHRcdHtpbmRleCA9PT0gY29udGluZW50ICYmIGtleSA9PT0gY291bnRyeSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJjb3VudHJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYy5mbGFnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDNcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY291bnRyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0Q291bnRyeShpbmRleCwga2V5KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYy5mbGFnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblx0XHRcdFx0PGgyPlRvcCBDaXRpZXM8L2gyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxuXHRcdFx0XHRcdHtjb250aW5lbnRzW2NvbnRpbmVudF0uY291bnRyaWVzW2NvdW50cnldLmNpdGllcy5tYXAoXG5cdFx0XHRcdFx0XHQoY2l0eSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY2l0eVwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57Y2l0eS5uYW1lfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2l0eS1pbWFnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGNpdHkuaW1hZ2UsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsbFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsSG9tZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvdHJhdmVsJztcclxuXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW3sgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IDxIb21lIC8+IH1dO1xyXG5cclxuY29uc3QgVHJhdmVsID0gKCkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRXZWJGb250LmxvYWQoe1xyXG5cdFx0XHRnb29nbGU6IHtcclxuXHRcdFx0XHRmYW1pbGllczogWydWYXJlbGErUm91bmQnXSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGltcG9ydCgnLi9zdHlsZS5zY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGI+XHJcblx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdDwvYj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsO1xyXG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWhvdXNlcy9gIDogJy9ob3VzZXMvJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2hvdXNlc2Bcblx0OiAnL2hvdXNlcyc7XG4iLCJpbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvaG91c2VzJztcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRsb2dvOiBgJHtQVUJMSUNfVVJMfS9sb2dvLnBuZ2AsXHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2hlYWRlci5qcGcpYCxcclxuXHRcdGhlYWRpbmc6XHJcblx0XHRcdCdOZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QgcXVpIGRvbG9yZW0gaXBzdW0gcXVpYSBkb2xvciBzaXQgYW1ldC4nLFxyXG5cdH0sXHJcblx0aG91c2VzOiBbXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaG91c2UxLmpwZylgLFxyXG5cdFx0XHRuYW1lOiAnSG91c2Ugbm8uMScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdGRldGFpbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAncm9vbXMnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICcyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdzcGFjZScsXHJcblx0XHRcdFx0XHR2YWx1ZTogJzUwbXAnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2Zsb29ycycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJzAnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHJvb21zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9yb29tMS5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdJbnNpZGUgYSBtb2Rlcm4gd29vZGVuIGhvdXNlIGNvbnN0cnVjdGVkIGluIE91bHUgaW4gRmlubGFuZCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L3Jvb20yLmpwZylgLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0luc2lkZSBhIG1vZGVybiBsb2cgaG9tZSBzaXR1YXRlZCBpbiBPdWx1IGluIEZpbmxhbmQgYW5kIGRlbGl2ZXJlZCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L3Jvb20zLmpwZylgLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0NvenkgYXRtb3NwaGVyZSBvZiBhIGxvZyBob21lJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9ob3VzZTIuanBnKWAsXHJcblx0XHRcdG5hbWU6ICdIb3VzZSBuby4yJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJyxcclxuXHRcdFx0ZGV0YWlsczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdyb29tcycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJzUnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ3NwYWNlJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnMTEwbXAnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ2Zsb29ycycsXHJcblx0XHRcdFx0XHR2YWx1ZTogJzInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHJvb21zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9yb29tNC5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdJbnNpZGUgYSBTd2VkaXNoIHN0eWxlIHdvb2RlbiBob21lJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vcm9vbTUuanBnKWAsXHJcblx0XHRcdFx0XHRuYW1lOiAnSW5zaWRlIGEgY2hhbGV0IGluIFZvc2dlcyBNb3VudGFpbnMgKEZyYW5jZSknLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9yb29tNi5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdJbnNpZGUgYW4gZWNvbG9naWNhbCB3b29kZW4gaG9tZSBpbiBGcmFuY2UnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2hvdXNlMy5qcGcpYCxcclxuXHRcdFx0bmFtZTogJ0hvdXNlIG5vLjMnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ3Jvb21zJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnNicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnc3BhY2UnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICcxNDBtcCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnZmxvb3JzJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnMScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0cm9vbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L3Jvb203LmpwZylgLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0luc2lkZSBhIFNjYW5kaW5hdmlhbiBzdHlsZSBsdXh1cnkgbG9nIGhvbWUnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9yb29tOC5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdBIGNvenkgYmVkcm9vbTogcXVhbGl0eSBsaXZpbmcgaW4gbG9nIGhvbWVzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vcm9vbTkuanBnKWAsXHJcblx0XHRcdFx0XHRuYW1lOiAnSW5zaWRlIGEgbG9nIGhvdXNlIHByb2R1Y2VkIGluIEZpbmxhbmQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2hvdXNlNC5qcGcpYCxcclxuXHRcdFx0bmFtZTogJ0hvdXNlIG5vLjQnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nLFxyXG5cdFx0XHRkZXRhaWxzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bmFtZTogJ3Jvb21zJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnMycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuYW1lOiAnc3BhY2UnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICc4MG1wJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG5hbWU6ICdmbG9vcnMnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICcxJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRyb29tczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vcm9vbTEwLmpwZylgLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0luc2lkZSBhIGxvZyBob21lIGZyb20gRmlubGFuZCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L3Jvb20xMS5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdJbnNpZGUgYSBGaW5uaXNoIGxvZyBob21lICcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L3Jvb20xMi5qcGcpYCxcclxuXHRcdFx0XHRcdG5hbWU6ICdSb3VuZCBsb2cgaG9tZSBtYWRlIG9mIGtlbG8gbG9jYXRlZCBpbiBTd2VkaXNoIExhcGxhbmQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIb3VzZSA9ICh7IGhvdXNlLCBvbkNsb3NlLCBvblByZXYsIG9uTmV4dCB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaG91c2UtbW9kYWxcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWFpbiBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGhvdXNlLmltYWdlLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHRcdFx0PGgxPntob3VzZS5uYW1lfTwvaDE+XHJcblx0XHRcdFx0XHRcdDxwPntob3VzZS5kZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXJyb3ctcHJldlwiIG9uQ2xpY2s9eygpID0+IG9uUHJldigpfT5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhcnJvdy1uZXh0XCIgb25DbGljaz17KCkgPT4gb25OZXh0KCl9PlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX0+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuXHRcdFx0XHRcdDxoMj5Sb29tczwvaDI+XHJcblx0XHRcdFx0XHR7aG91c2Uucm9vbXMubWFwKChyb29tLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvb21cIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbWFnZSBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHJvb20uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHQtNTBcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+e3Jvb20ubmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvdXNlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9kYic7XG5pbXBvcnQgSG91c2UgZnJvbSAnLi9Ib3VzZSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cdGNvbnN0IFtob3VzZUluZGV4LCBzZXRIb3VzZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJob3VzZXNcIj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaGVhZGVyIGJnLWNvdmVyXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGhvbWUuaGVhZGVyLmltYWdlLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17aG9tZS5oZWFkZXIubG9nb30gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoMT57aG9tZS5oZWFkZXIuaGVhZGluZ308L2gxPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxuXHRcdFx0XHR7aG9tZS5ob3VzZXMubWFwKChob3VzZSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBob3VzZVwiIGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlclwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBob3VzZS5pbWFnZSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC01MFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cblx0XHRcdFx0XHRcdFx0PGgyPntob3VzZS5uYW1lfTwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwPntob3VzZS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG92ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEhvdXNlSW5kZXgoaW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFNlZSBob3VzZVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2hvdXNlLmRldGFpbHMubWFwKChpdGVtLCBrZXkpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4ga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLm5hbWV9OiB7aXRlbS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7aG91c2VJbmRleCAhPT0gbnVsbCA/IChcblx0XHRcdFx0PEhvdXNlXG5cdFx0XHRcdFx0aG91c2U9e2hvbWUuaG91c2VzW2hvdXNlSW5kZXhdfVxuXHRcdFx0XHRcdG9uQ2xvc2U9eygpID0+IHNldEhvdXNlSW5kZXgobnVsbCl9XG5cdFx0XHRcdFx0b25QcmV2PXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0SG91c2VJbmRleChcblx0XHRcdFx0XHRcdFx0aG91c2VJbmRleCA9PT0gMFxuXHRcdFx0XHRcdFx0XHRcdD8gaG9tZS5ob3VzZXMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdDogaG91c2VJbmRleCAtIDFcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b25OZXh0PXsoKSA9PlxuXHRcdFx0XHRcdFx0c2V0SG91c2VJbmRleChcblx0XHRcdFx0XHRcdFx0aG91c2VJbmRleCA9PT0gaG9tZS5ob3VzZXMubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdD8gMFxuXHRcdFx0XHRcdFx0XHRcdDogaG91c2VJbmRleCArIDFcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogbnVsbH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2ViRm9udCBmcm9tICd3ZWJmb250bG9hZGVyJztcclxuXHJcbmltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2hvdXNlcyc7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFt7IGluZGV4OiB0cnVlLCBlbGVtZW50OiA8SG9tZSAvPiB9XTtcclxuXHJcbmNvbnN0IEhvdXNlcyA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0V2ViRm9udC5sb2FkKHtcclxuXHRcdFx0Z29vZ2xlOiB7XHJcblx0XHRcdFx0ZmFtaWxpZXM6IFsnTW9udHNlcnJhdCtBbHRlcm5hdGVzOjQwMCw3MDAnXSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGltcG9ydCgnLi9zdHlsZS5zY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGI+XHJcblx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdDwvYj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG91c2VzO1xyXG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZvcmVzdC9gIDogJy9mb3Jlc3QvJztcblxuZXhwb3J0IGNvbnN0IFBVQkxJQ19VUkwgPSBpc1Byb2R1Y3Rpb25cblx0PyBgJHtwcm9qZWN0QmFzZX0vc3RhdGljL2ZvcmVzdGBcblx0OiAnL2ZvcmVzdCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgaW1hZ2UsIGxvZ28sIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBzb2NpYWxNZWRpYSB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwiYmctY292ZXIgaGVhZGVyXCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e2xvZ299IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgxPntoZWFkaW5nfTwvaDE+XHJcblx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYVwiPlxyXG5cdFx0XHRcdFx0e3NvY2lhbE1lZGlhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aXRlbS5saW5rfSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5mbyA9ICh7IGhlYWRpbmcsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvbXBvbmVudFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxoMj57aGVhZGluZ308L2gyPlxyXG5cdFx0XHRcdDxwPntkZXNjcmlwdGlvbn08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb2x1bW5zMyA9ICh7IGNvbHVtbnMgfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxyXG5cdFx0XHR7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8Q29sdW1uXHJcblx0XHRcdFx0XHRpbWFnZT17Y29sdW1uLmltYWdlfVxyXG5cdFx0XHRcdFx0Y2FwdGlvbj17Y29sdW1uLmNhcHRpb259XHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IENvbHVtbiA9ICh7IGltYWdlLCBjYXB0aW9uIH0pID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9XCJiZy1jb3ZlciBwcmV2aWV3XCJcclxuXHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlLFxyXG5cdFx0XHR9fVxyXG5cdFx0PjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XHJcblx0XHRcdDxwPntjYXB0aW9ufTwvcD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uczM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb2x1bW5zMiA9ICh7IGhlYWRpbmcsIHBhcmFncmFwaHMsIGltYWdlIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLTJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0PGgyPntoZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHR7cGFyYWdyYXBocy5tYXAoKHAsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxwIGtleT17aW5kZXh9PntwfTwvcD5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbHVtbiBiZy1jb3ZlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGltYWdlIH19XHJcblx0XHRcdFx0PjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5zMjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICh7IGltYWdlLCBpdGVtcyB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwidGVzdGltb25pYWxzIGJnLWNvdmVyXCJcclxuXHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBpbWFnZSB9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucy0yXCI+XHJcblx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMz57aXRlbS5uYW1lfTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGVtPntpdGVtLnBvc2l0aW9ufTwvZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgY29weXJpZ2h0IH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuXHRcdFx0PHA+e2NvcHlyaWdodH08L3A+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mb3Jlc3QnO1xyXG5leHBvcnQgY29uc3QgaG9tZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaGVhZGVyLmpwZylgLFxyXG5cdFx0bG9nbzogYCR7UFVCTElDX1VSTH0vbG9nby5wbmdgLFxyXG5cdFx0aGVhZGluZzogJ1dhbmRlcmx1c3QnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgc2l0IGFtZXQgb3JjaSBhY2N1bXNhbiwgdGluY2lkdW50IHZlbGl0IGVnZXQsIGNvbnNlcXVhdCBhbnRlLiBEdWlzIGluIG5pc2kgdWx0cmljZXMsIGVsZWlmZW5kIHZlbGl0IHNpdCBhbWV0LCB2ZW5lbmF0aXMgbWkuIFNlZCBzZWQgbmlzaSBvcmNpLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1waW50ZXJlc3QtcCcsXHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vcGludGVyZXN0LmNvbScsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0Y29udGVudDogW1xyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnaW5mbycsXHJcblx0XHRcdGhlYWRpbmc6ICdhIHVuaXF1ZSAxIHdlZWsgYWR2ZW50dXJlJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFByYWVzZW50IHZvbHV0cGF0IGV4IHR1cnBpcywgYSBjb21tb2RvIGFyY3UgY29uc2VxdWF0IGFjLiBGdXNjZSBpZCBhbnRlIGV1IGVsaXQgcHVsdmluYXIgc3VzY2lwaXQuIE51bGxhbSBwdWx2aW5hciBsaWd1bGEgcG9ydGEgZmVsaXMgc2NlbGVyaXNxdWUgYWNjdW1zYW4uIEFlbmVhbiBpbiBsaWJlcm8gcnV0cnVtLCBjdXJzdXMgZXN0IGEsIHRpbmNpZHVudCByaXN1cy4gRHVpcyB2aXZlcnJhIGVsaXQgZXQgZG9sb3IgbG9ib3J0aXMsIGV0IGVnZXN0YXMgZXJhdCB2ZXN0aWJ1bHVtLicsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0eXBlOiAnY29sdW1ucy0zJyxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vZm9yZXN0MS5qcGcpYCxcclxuXHRcdFx0XHRcdGNhcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ZvcmVzdDIuanBnKWAsXHJcblx0XHRcdFx0XHRjYXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9mb3Jlc3QzLmpwZylgLFxyXG5cdFx0XHRcdFx0Y2FwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogJ2luZm8nLFxyXG5cdFx0XHRoZWFkaW5nOiAnb3VyIHNhdGlzZmllZCBhZHZlbnR1cmVycycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQcmFlc2VudCB2b2x1dHBhdCBleCB0dXJwaXMsIGEgY29tbW9kbyBhcmN1IGNvbnNlcXVhdCBhYy4gRnVzY2UgaWQgYW50ZSBldSBlbGl0IHB1bHZpbmFyIHN1c2NpcGl0LiBOdWxsYW0gcHVsdmluYXIgbGlndWxhIHBvcnRhIGZlbGlzIHNjZWxlcmlzcXVlIGFjY3Vtc2FuLiBBZW5lYW4gaW4gbGliZXJvIHJ1dHJ1bSwgY3Vyc3VzIGVzdCBhLCB0aW5jaWR1bnQgcmlzdXMuIER1aXMgdml2ZXJyYSBlbGl0IGV0IGRvbG9yIGxvYm9ydGlzLCBldCBlZ2VzdGFzIGVyYXQgdmVzdGlidWx1bS4nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dHlwZTogJ3Rlc3RpbW9uaWFscycsXHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vY29udGVudDEuanBnKWAsXHJcblx0XHRcdGl0ZW1zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHRcdCdOdWxsYSBzZWQgdWx0cmljZXMgZXguIE51bGxhIG5lcXVlIHNlbSwgY29udmFsbGlzIHV0IGxvcmVtIHNpdCBhbWV0LCBpbnRlcmR1bSB0cmlzdGlxdWUgbWF1cmlzLiBQaGFzZWxsdXMgZXQgdHVycGlzIG9ybmFyZSwgY29uZ3VlIGR1aSBuZWMsIGNvbmRpbWVudHVtIG1pLiBNYWVjZW5hcyBpZCBlbGl0IGlkIGVyb3MgbWF0dGlzIHZ1bHB1dGF0ZS4gTnVuYyB2ZW5lbmF0aXMgY29udmFsbGlzIGxvcmVtIGNvbmRpbWVudHVtIGZhY2lsaXNpcy4gSW4gc2FnaXR0aXMgZWxpdCBlbGl0LiBRdWlzcXVlIGNvbW1vZG8sIG5pYmggYSBlbGVtZW50dW0gZmluaWJ1cywgbWFzc2EgbnVuYyB0ZW1wb3IgbmlzbCwgZXQgcmhvbmN1cyBuaWJoIGF1Z3VlIGEgbmlzbC4nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J01hZWNlbmFzIGluIGZhY2lsaXNpcyB2ZWxpdCwgdml0YWUgc29sbGljaXR1ZGluIHJpc3VzLiBEb25lYyBtb2xsaXMsIGFudGUgbW9sbGlzIHRlbXB1cyBzdXNjaXBpdCwgZW5pbSBuaWJoIGRpY3R1bSBsYWN1cywgYWMgdGVtcG9yIGxlbyBtaSBzZWQgYW50ZS4gTW9yYmkgbm9uIG51bGxhIGV1IG1hdXJpcyBzY2VsZXJpc3F1ZSB2ZW5lbmF0aXMgcXVpcyBhdCBlc3QuIEFsaXF1YW0gZWxlaWZlbmQgYW50ZSB2ZWhpY3VsYSBpcHN1bSB2ZWhpY3VsYSwgbm9uIGltcGVyZGlldCBsZWN0dXMgc3VzY2lwaXQuIFF1aXNxdWUgcG9zdWVyZSBtYWxlc3VhZGEgZXJhdCwgaWQgbHVjdHVzIGxhY3VzIGx1Y3R1cyBpbi4nLFxyXG5cdFx0XHRcdFx0bmFtZTogJ01hcmsgQmVhbnMnLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyIHNlbmlvcicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHR5cGU6ICdjb2x1bW5zLTInLFxyXG5cdFx0XHRoZWFkaW5nOiAnYm9vayB5b3VyIG5leHQgYWR2ZW50dXJlIG5vdycsXHJcblx0XHRcdHBhcmFncmFwaHM6IFtcclxuXHRcdFx0XHQnTnVsbGFtIHBvcnRhIG1hc3NhIGFyY3UsIGlkIGVsZW1lbnR1bSBkaWFtIHNhZ2l0dGlzIHZlbC4gUGVsbGVudGVzcXVlIGFjIGVuaW0gbWV0dXMuIE51bGxhbSB1dCBhdWd1ZSB2ZWwgbWV0dXMgdmVoaWN1bGEgZWdlc3RhcyBuZWMgc2l0IGFtZXQgc2FwaWVuLiBEb25lYyB0ZW1wb3IgcGVsbGVudGVzcXVlIHNlbXBlci4gU2VkIGEgbWV0dXMgaW50ZXJkdW0sIHB1bHZpbmFyIGlwc3VtIG1hdHRpcywgc3VzY2lwaXQgZXN0LiBEb25lYyB2dWxwdXRhdGUgZXJvcyBleCwgZWdldCBwcmV0aXVtIG5pc2wgbWF4aW11cyB1dC4gQ3JhcyB2ZW5lbmF0aXMganVzdG8gZmVsaXMsIHZlbCBtYWxlc3VhZGEgZXJhdCBwb3J0dGl0b3IgaW4uIFN1c3BlbmRpc3NlIG5vbiB1bHRyaWNlcyB2ZWxpdC4nLFxyXG5cdFx0XHRcdCdNYWVjZW5hcyBtYXNzYSBudWxsYSwgYWxpcXVldCBhIG1pIGVnZXQsIHBvcnR0aXRvciBpbnRlcmR1bSB0b3J0b3IuIE51bmMgcHVydXMgYXJjdSwgYmliZW5kdW0gZXUgYXJjdSBldCwgbWF4aW11cyBhdWN0b3IgbmlzaS4gQ3VyYWJpdHVyIG1heGltdXMgYXVjdG9yIGV4IGV1IGJpYmVuZHVtLiBOdWxsYW0gc2NlbGVyaXNxdWUgbHVjdHVzIHZlbGl0LCB1dCBwb3N1ZXJlIG5pYmggdWx0cmljZXMgc2l0IGFtZXQuJyxcclxuXHRcdFx0XSxcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9jb250ZW50Mi5qcGcpYCxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRmb290ZXI6IHtcclxuXHRcdGNvcHlyaWdodDogJ0NvcHlyaWdodCBBLiBNb2NhbnUgMjAyMicsXHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICd+Yy9Gb3Jlc3QvSGVhZGVyJztcclxuaW1wb3J0IEluZm8gZnJvbSAnfmMvRm9yZXN0L0luZm8nO1xyXG5pbXBvcnQgQ29sdW1uczMgZnJvbSAnfmMvRm9yZXN0L0NvbHVtbnMzJztcclxuaW1wb3J0IENvbHVtbnMyIGZyb20gJ35jL0ZvcmVzdC9Db2x1bW5zMic7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnfmMvRm9yZXN0L1Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnfmMvRm9yZXN0L0Zvb3Rlcic7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IEZvcmVzdEhvbWUgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJmb3Jlc3RcIj5cclxuXHRcdDxIZWFkZXIgey4uLmhvbWUuaGVhZGVyfSAvPlxyXG5cdFx0e2hvbWUuY29udGVudC5tYXAoKHNlY3Rpb24sIGtleSkgPT4ge1xyXG5cdFx0XHRzd2l0Y2ggKHNlY3Rpb24udHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ2luZm8nOlxyXG5cdFx0XHRcdFx0cmV0dXJuIDxJbmZvIGtleT17a2V5fSB7Li4uc2VjdGlvbn0gLz47XHJcblx0XHRcdFx0Y2FzZSAnY29sdW1ucy0zJzpcclxuXHRcdFx0XHRcdHJldHVybiA8Q29sdW1uczMga2V5PXtrZXl9IGNvbHVtbnM9e3NlY3Rpb24uY29sdW1uc30gLz47XHJcblx0XHRcdFx0Y2FzZSAndGVzdGltb25pYWxzJzpcclxuXHRcdFx0XHRcdHJldHVybiA8VGVzdGltb25pYWxzIGtleT17a2V5fSB7Li4uc2VjdGlvbn0gLz47XHJcblx0XHRcdFx0Y2FzZSAnY29sdW1ucy0yJzpcclxuXHRcdFx0XHRcdHJldHVybiA8Q29sdW1uczIga2V5PXtrZXl9IHsuLi5zZWN0aW9ufSAvPjtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH0pfVxyXG5cdFx0PEZvb3RlciBjb3B5cmlnaHQ9e2hvbWUuZm9vdGVyLmNvcHlyaWdodH0gLz5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmVzdEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvZm9yZXN0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogPEhvbWUgLz4gfV07XHJcblxyXG5jb25zdCBGb3Jlc3QgPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFdlYkZvbnQubG9hZCh7XHJcblx0XHRcdGdvb2dsZToge1xyXG5cdFx0XHRcdGZhbWlsaWVzOiBbJ09wZW4rU2Fuczo0MDAsNzAwJ10sXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRpbXBvcnQoJy4vc3R5bGUuc2NzcycpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxiPlxyXG5cdFx0XHQ8T3V0bGV0IC8+XHJcblx0XHQ8L2I+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmVzdDtcclxuIiwiY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcclxuXHJcbmltcG9ydCB7IGJhc2UgYXMgcHJvamVjdEJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWNvbnRhY3RzL2AgOiAnL2NvbnRhY3RzLyc7XHJcblxyXG5leHBvcnQgY29uc3QgUFVCTElDX1VSTCA9IGlzUHJvZHVjdGlvblxyXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9jb250YWN0c2BcclxuXHQ6ICcvY29udGFjdHMnO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJ1dHRvblwiOlwib0pPSlJWcVBGazgzWm94YlZhbEVcIixcImJ1dHRvbl9yZWRcIjpcIlZyN0daNndZM3NuTUdUS3MwejJWXCIsXCJidXR0b25fZ3JleVwiOlwiQ2RhVTNJa2xraVhoczZQSEtCY05cIn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAkIGZyb20gJy4vYnV0dG9uLnNjc3MnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdHlwZSA9ICdkZWZhdWx0JywgY2hpbGRyZW4sIG9uQ2xpY2sgPSAoKSA9PiB7fSB9KSA9PiB7XHJcblx0cmV0dXJuIHR5cGUgPT09ICdyZWQnID8gKFxyXG5cdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17JC5idXR0b25fcmVkfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9kaXY+XHJcblx0KSA6IHR5cGUgPT09ICdncmV5JyA/IChcclxuXHRcdDxkaXYgb25DbGljaz17KCkgPT4gb25DbGljaygpfSBjbGFzc05hbWU9eyQuYnV0dG9uX2dyZXl9PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQpIDogKFxyXG5cdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9IGNsYXNzTmFtZT17JC5idXR0b259PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNhcmRcIjpcIkgyM3hsbFlCa29QTGFSUHZxTzQzXCIsXCJibHVlXCI6XCJlX2c5UWZJNzc5VHNNb3BvTWlwOVwiLFwicmVkXCI6XCJVWHdBR3ZWN0s2WFplc2loOUdRU1wiLFwieWVsbG93XCI6XCJzTGI5TFFNREtRTENXWF8yVUU0WFwiLFwiZ3JlZW5cIjpcIlZJOWdjNkpmdHY2TG9pTThqeXJhXCIsXCJpbWFnZVwiOlwiRXRqSHdLMGt1RTZDaVprSWlYNXVcIixcImRldGFpbHNcIjpcIkU3U3B6eUFqX3k2MnVXSnZFRFJDXCIsXCJidXR0b25cIjpcInFtZGtlSWEzTjZPQ29aWGtIUUxsXCJ9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ35jL0NvbnRhY3RzL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvY29udGFjdHMnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnLi9jYXJkLnNjc3MnO1xyXG5cclxuY29uc3QgQ2FyZCA9ICh7IG5hbWUsIGltYWdlLCBjaXR5LCBjb3VudHJ5LCBjb2xvciB9KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgJHskLmNhcmR9ICR7JFtjb2xvcl19YH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXskLmRldGFpbHN9PlxyXG5cdFx0XHRcdDxoMj57bmFtZX08L2gyPlxyXG5cdFx0XHRcdDxwPntjaXR5fTwvcD5cclxuXHRcdFx0XHQ8cD57Y291bnRyeX08L3A+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuYnV0dG9ufT5cclxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cImdyZXlcIiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnY2V2YScpfT5cclxuXHRcdFx0XHRcdFx0U2hvdyBtb3JlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBpbWFnZSB9fSBjbGFzc05hbWU9eyQuaW1hZ2V9PjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9jb250YWN0cyc7XHJcbmV4cG9ydCBjb25zdCBjb250YWN0cyA9IFtcclxuXHR7XHJcblx0XHRuYW1lOiAnSm9obiBTbWl0aCcsXHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2NvbnRhY3QxLmpwZylgLFxyXG5cdFx0c29jaWFsTWVkaWE6IHtcclxuXHRcdFx0ZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdGluc3RhZ3JhbTogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScsXHJcblx0XHR9LFxyXG5cdFx0am9iOiAnV2ViIGRldmVsb3BlcicsXHJcblx0XHRhZHJlc3M6ICdNYWluIHN0cmVldCBuYi45JyxcclxuXHRcdGNpdHk6ICdDcmFpb3ZhJyxcclxuXHRcdGNvdW50cnk6ICdSb21hbmlhJyxcclxuXHRcdGJpcnRoZGF5OiAxOTk0LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vY29udGFjdDIuanBnKWAsXHJcblx0XHRzb2NpYWxNZWRpYToge1xyXG5cdFx0XHRmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0aW5zdGFncmFtOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJyxcclxuXHRcdH0sXHJcblx0XHRqb2I6ICdGcm9udC1lbmQnLFxyXG5cdFx0YWRyZXNzOiAnTWFpbiBzdHJlZXQgbmIuMTYnLFxyXG5cdFx0Y2l0eTogJ0lhc2knLFxyXG5cdFx0Y291bnRyeTogJ1JvbWFuaWEnLFxyXG5cdFx0YmlydGhkYXk6IDE5OTEsXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiAnSmFuZSBEYW0nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9jb250YWN0My5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiB7XHJcblx0XHRcdGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRpbnN0YWdyYW06ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0fSxcclxuXHRcdGFkcmVzczogJ1NlY29uZCBzdHJlZXQgbmIuNTQnLFxyXG5cdFx0Y2l0eTogJ1N1Y2VhdmEnLFxyXG5cdFx0Y291bnRyeTogJ1JvbWFuaWEnLFxyXG5cdFx0YmlydGhkYXk6IDE5ODksXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiAnTWljaGFlbCBEYXMnLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9jb250YWN0NC5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiB7IGluc3RhZ3JhbTogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScgfSxcclxuXHRcdGpvYjogJ0Rlc2lnbmVyJyxcclxuXHRcdGFkcmVzczogJ1JhbHBoIERpbXNvbiBuYi4yMycsXHJcblx0XHRjaXR5OiAnQ29uc3RhbnRhJyxcclxuXHRcdGNvdW50cnk6ICdSb21hbmlhJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdNaWthZWxhIFJvYmVydGEnLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9jb250YWN0NS5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiB7XHJcblx0XHRcdGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRpbnN0YWdyYW06ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0fSxcclxuXHRcdGNpdHk6ICdGb2NzYW5pJyxcclxuXHRcdGNvdW50cnk6ICdSb21hbmlhJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdEdW5jYW4gU21pdGgnLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9jb250YWN0Ni5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiB7XHJcblx0XHRcdGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0fSxcclxuXHRcdGNpdHk6ICdJYXNpJyxcclxuXHRcdGNvdW50cnk6ICdSb21hbmlhJyxcclxuXHRcdGJpcnRoZGF5OiAxOTg1LFxyXG5cdH0sXHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ35jL0NvbnRhY3RzL0NhcmQnO1xyXG5cclxuaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCAkIGZyb20gJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDb250YWN0c0hvbWUgPSAoKSA9PiB7XHJcblx0Y29uc3QgY29sb3JzID0gWydibHVlJywgJ3llbGxvdycsICdyZWQnLCAnZ3JlZW4nXTtcclxuXHRjb25zdCBbaXNTZWFyY2hWaXNpYmxlLCB0b2dnbGVTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBmaWx0ZXJlZENvbnRhY3RzID0gY29udGFjdHMuZmlsdGVyKFxyXG5cdFx0Y29udGFjdCA9PlxyXG5cdFx0XHRjb250YWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG5cdFx0XHRjb250YWN0LmNpdHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG5cdFx0XHRjb250YWN0LmNvdW50cnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuXHRcdGlmIChpc1NlYXJjaFZpc2libGUgPT09IHRydWUpIHtcclxuXHRcdFx0c2V0U2VhcmNoVmFsdWUoJycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRvZ2dsZVNlYXJjaCghaXNTZWFyY2hWaXNpYmxlKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9eyQuY29udGFjdHN9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5tb2JpbGV9PlxyXG5cdFx0XHRcdDxoMT5Db250YWN0czwvaDE+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT17JC5zZWFyY2hfaWNvbn0gb25DbGljaz17KCkgPT4gaGFuZGxlU2VhcmNoKCl9PlxyXG5cdFx0XHRcdFx0e2lzU2VhcmNoVmlzaWJsZSA9PT0gdHJ1ZSA/IChcclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHR7aXNTZWFyY2hWaXNpYmxlID09PSB0cnVlID8gKFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyQuc2VhcmNofT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0YXV0b0ZvY3VzXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRTZWFyY2hWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBDb250YWN0c1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0e2ZpbHRlcmVkQ29udGFjdHMubGVuZ3RoICE9PSAwID8gKFxyXG5cdFx0XHRcdFx0ZmlsdGVyZWRDb250YWN0cy5tYXAoKGNvbnRhY3QsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxDYXJkXHJcblx0XHRcdFx0XHRcdFx0ey4uLmNvbnRhY3R9XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9e2NvbG9yc1tpbmRleCAlIDRdfVxyXG5cdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXskLm5vX3Jlc3VsdHN9Pk5vIGNvbnRhY3RzIGZvdW5kIDooPC9oMj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0c0hvbWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnfi9jb25zdGFudHMvY29udGFjdHMnO1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogPEhvbWUgLz4gfV07XHJcblxyXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0V2ViRm9udC5sb2FkKHtcclxuXHRcdFx0Z29vZ2xlOiB7XHJcblx0XHRcdFx0ZmFtaWxpZXM6IFsnTW9udHNlcnJhdCtBbHRlcm5hdGVzOjQwMCw3MDAnXSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGltcG9ydCgnLi9zdHlsZS5zY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGI+XHJcblx0XHRcdDxPdXRsZXQgLz5cclxuXHRcdDwvYj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlcywgT3V0bGV0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgSG9tZSBmcm9tICd+L3BhZ2VzL0hvbWUnO1xyXG5pbXBvcnQgRmxhbWluZ28sIHsgcm91dGVzIGFzIGZsYW1pbmdvUm91dGVzIH0gZnJvbSAnfi9wYWdlcy9GbGFtaW5nbyc7XHJcbmltcG9ydCBUcmF2ZWwsIHsgcm91dGVzIGFzIHRyYXZlbFJvdXRlcyB9IGZyb20gJ34vcGFnZXMvVHJhdmVsJztcclxuaW1wb3J0IEhvdXNlcywgeyByb3V0ZXMgYXMgaG91c2VzUm91dGVzIH0gZnJvbSAnfi9wYWdlcy9Ib3VzZXMnO1xyXG5pbXBvcnQgRm9yZXN0LCB7IHJvdXRlcyBhcyBmb3Jlc3RSb3V0ZXMgfSBmcm9tICd+L3BhZ2VzL0ZvcmVzdCc7XHJcbmltcG9ydCBDb250YWN0cywgeyByb3V0ZXMgYXMgY29udGFjdHNSb3V0ZXMgfSBmcm9tICd+L3BhZ2VzL0NvbnRhY3RzJztcclxuXHJcbmltcG9ydCB7IGJhc2UgfSBmcm9tICd+L2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogYmFzZSxcclxuXHRcdGVsZW1lbnQ6IDxIb21lIC8+LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYCR7YmFzZX1mbGFtaW5nby9gLFxyXG5cdFx0ZWxlbWVudDogPEZsYW1pbmdvIC8+LFxyXG5cdFx0Y2hpbGRyZW46IGZsYW1pbmdvUm91dGVzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYCR7YmFzZX10cmF2ZWwvYCxcclxuXHRcdGVsZW1lbnQ6IDxUcmF2ZWwgLz4sXHJcblx0XHRjaGlsZHJlbjogdHJhdmVsUm91dGVzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYCR7YmFzZX1ob3VzZXMvYCxcclxuXHRcdGVsZW1lbnQ6IDxIb3VzZXMgLz4sXHJcblx0XHRjaGlsZHJlbjogaG91c2VzUm91dGVzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYCR7YmFzZX1mb3Jlc3QvYCxcclxuXHRcdGVsZW1lbnQ6IDxGb3Jlc3QgLz4sXHJcblx0XHRjaGlsZHJlbjogZm9yZXN0Um91dGVzLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogYCR7YmFzZX1jb250YWN0cy9gLFxyXG5cdFx0ZWxlbWVudDogPENvbnRhY3RzIC8+LFxyXG5cdFx0Y2hpbGRyZW46IGNvbnRhY3RzUm91dGVzLFxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB1c2VSb3V0ZXMocm91dGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBSb3V0ZXMgZnJvbSAnfi9wYWdlcy9Sb3V0ZXMnO1xuXG5pbXBvcnQgJy4vZGVmYXVsdHMuY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFxuXHQ8QnJvd3NlclJvdXRlciBmb3JjZVJlZnJlc2g+XG5cdFx0PFJvdXRlcyAvPlxuXHQ8L0Jyb3dzZXJSb3V0ZXI+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwicHJvZ3Jlc3MiLCJQcm9ncmVzcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzZXMiLCJuYW1lIiwicGVyY2VudGFnZSIsImJhc2UiLCJQVUJMSUNfVVJMIiwibmF2IiwibG9nbyIsIm1lbnUiLCJsaW5rIiwidGV4dCIsImNvbnRhY3QiLCJzZWFyY2giLCJzZXJ2aWNlcyIsImljb24iLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwcm9qZWN0QmFzZSIsInBlcmtzIiwiUGVya3MiLCJwZXJrIiwidGVhbSIsIlRlYW0iLCJtZW1iZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsInBvc2l0aW9uIiwic29jaWFsTWVkaWEiLCJrZXkiLCJhYm91dCIsIkFib3V0UGFnZSIsImhlYWRlciIsInNraWxscyIsInZpZGVvIiwiYnV0dG9uIiwiYXJ0aWNsZSIsIkFydGljbGUiLCJjYXRlZ29yeSIsImNvbnRlbnQiLCJzaWRlYmFyIiwiZGV0YWlscyIsIm1haW4iLCJlbGVtZW50IiwidHlwZSIsImJsb2ciLCJDYXJkIiwiQmxvZyIsImFydGljbGVzIiwiRm9ybSIsIkNvbnRhY3QiLCJjb2x1bW5zIiwiY29sdW1uMSIsImJ1dHRvbnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbHVtbjIiLCJjb2x1bW4zIiwiZm9ybSIsIlNlcnZpY2VzIiwiTGluayIsIlNlcnZpY2VzUGFnZSIsIm91clNlcnZpY2VzIiwid29ya3MiLCJXb3JrcyIsImNvbHVtbiIsImhvbWUiLCJ0ZXN0aW1vbmlhbHMiLCJjdXN0b21lcnMiLCJhdmF0YXIiLCIkIiwiSG9tZSIsImZvb3RlciIsImlucXVpcnkiLCJtZW51cyIsIm1lbnUxIiwibWVudTIiLCJidXR0b24zIiwiYnV0dG9uNCIsIm1lbnUzIiwibWVudTQiLCJjb3B5cmlnaHQiLCJuZXdzIiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwidG9nZ2xlU2VhcmNoIiwiRm9vdGVyIiwiTmV3cyIsIlRlc3RpbW9uaWFscyIsIkFib3V0IiwiZGV0YWlsIiwid29yayIsIlNlcnZpY2VzMiIsIkN1c3RvbWVycyIsIkZsYW1pbmdvSG9tZSIsIk1lbnUiLCJjdXJyZW50SW5kZXgiLCJzZXRJbmRleCIsIm9wZW5NZW51IiwidG9nZ2xlTWVudSIsImhhbmRsZUNsaWNrIiwiV2ViRm9udCIsIk91dGxldCIsInJvdXRlcyIsInBhdGgiLCJGbGFtaW5nbyIsImxvYWQiLCJnb29nbGUiLCJmYW1pbGllcyIsImNvbnRpbmVudHMiLCJjb3VudHJpZXMiLCJmbGFnIiwiY2l0aWVzIiwiVHJhdmVsSG9tZSIsImNvbnRpbmVudCIsInNldENvbnRpbmVudCIsImNvdW50cnkiLCJzZXRDb3VudHJ5Iiwic2VsZWN0Q291bnRyeSIsImNvbnRpbmVudEluZGV4IiwiY291bnRyeUluZGV4IiwiYyIsImNpdHkiLCJUcmF2ZWwiLCJob3VzZXMiLCJ2YWx1ZSIsInJvb21zIiwiSG91c2UiLCJob3VzZSIsIm9uQ2xvc2UiLCJvblByZXYiLCJvbk5leHQiLCJyb29tIiwiaG91c2VJbmRleCIsInNldEhvdXNlSW5kZXgiLCJsZW5ndGgiLCJIb3VzZXMiLCJIZWFkZXIiLCJJbmZvIiwiQ29sdW1uczMiLCJjYXB0aW9uIiwiQ29sdW1uIiwiQ29sdW1uczIiLCJwYXJhZ3JhcGhzIiwicCIsIml0ZW1zIiwiRm9yZXN0SG9tZSIsInNlY3Rpb24iLCJGb3Jlc3QiLCJCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJidXR0b25fcmVkIiwiYnV0dG9uX2dyZXkiLCJjb2xvciIsImNhcmQiLCJjb25zb2xlIiwibG9nIiwiY29udGFjdHMiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsImpvYiIsImFkcmVzcyIsImJpcnRoZGF5IiwiQ29udGFjdHNIb21lIiwiY29sb3JzIiwiaXNTZWFyY2hWaXNpYmxlIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpbHRlcmVkQ29udGFjdHMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlU2VhcmNoIiwibW9iaWxlIiwic2VhcmNoX2ljb24iLCJldmVudCIsInRhcmdldCIsIm5vX3Jlc3VsdHMiLCJDb250YWN0cyIsInVzZVJvdXRlcyIsImZsYW1pbmdvUm91dGVzIiwidHJhdmVsUm91dGVzIiwiaG91c2VzUm91dGVzIiwiZm9yZXN0Um91dGVzIiwiY29udGFjdHNSb3V0ZXMiLCJSb3V0ZXMiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==