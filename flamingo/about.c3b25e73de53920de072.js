"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([[781],{

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
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "services/"),
    text: 'services'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "works/"),
    text: 'Works'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "about/"),
    text: 'about'
  }, {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "blog/"),
    text: 'blog'
  }],
  contact: {
    link: "".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u, "contact"),
    text: 'contact'
  },
  search: false
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

/***/ 898:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./src/components/Flamingo/Progress.js
var Flamingo_Progress = __webpack_require__(812);
// EXTERNAL MODULE: ./src/sections/Flamingo/db.js
var db = __webpack_require__(171);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Perks.js



var Perks_Perks = function Perks() {
  return /*#__PURE__*/React.createElement("div", {
    className: "columns-3"
  }, perks.map(function (perk, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "column p-m",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "width-80"
    }, /*#__PURE__*/React.createElement("i", {
      className: perk.icon
    }), /*#__PURE__*/React.createElement("h4", {
      className: "mb-default"
    }, perk.heading), /*#__PURE__*/React.createElement("p", null, perk.description)));
  }));
};

/* harmony default export */ const Flamingo_Perks = ((/* unused pure expression or super */ null && (Perks_Perks)));
// EXTERNAL MODULE: ./src/constants/flamingo.js
var flamingo = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/sections/Flamingo/Team.js




var Team_Team = function Team() {
  useEffect(function () {
    __webpack_require__.e(/* import() */ 406).then(__webpack_require__.bind(__webpack_require__, 406));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "team"
  }, team.map(function (member, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-cover member",
      style: {
        backgroundImage: member.image
      },
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "member-details"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "mb-default"
    }, member.name), /*#__PURE__*/React.createElement("p", {
      className: "mb-m"
    }, member.position), /*#__PURE__*/React.createElement("div", {
      className: "social-media-small"
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
;// CONCATENATED MODULE: ./src/pages/Flamingo/About.js







var AboutPage = function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    className: "about-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-small bg-cover",
    style: {
      backgroundImage: about.header.image
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h1", null, about.header.heading))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Perks, null))), /*#__PURE__*/React.createElement("div", {
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
  }, about.skills.heading), /*#__PURE__*/React.createElement("p", {
    className: "mb-m"
  }, about.skills.description), /*#__PURE__*/React.createElement(Progress, null))), /*#__PURE__*/React.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: about.skills.image
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "columns-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column bg-cover",
    style: {
      backgroundImage: about.video.image
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-m"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-m"
  }, about.video.heading), /*#__PURE__*/React.createElement("p", {
    className: "mb-m"
  }, about.video.description), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "button"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-play mr-default"
  }), about.video.button.text)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-grey section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container mb-l"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mb-default"
  }, /*#__PURE__*/React.createElement("span", {
    className: "separator"
  }), about.team.heading), /*#__PURE__*/React.createElement("h5", null, about.team.description)), /*#__PURE__*/React.createElement(Team, null)));
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
      heading: 'Arhitecture',
      category: 'Art'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item2.jpg)"),
      heading: 'Photography',
      category: 'Art'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item3.jpg)"),
      heading: 'Teaser',
      category: 'Video'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item4.jpg)"),
      heading: 'Styles',
      category: 'Art'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item5.jpg)"),
      heading: 'About',
      category: 'Writings'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item6.jpg)"),
      heading: 'Names',
      category: 'Writings'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item7.jpg)"),
      heading: 'Titles',
      category: 'Writings'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item8.jpg)"),
      heading: 'Something',
      category: 'Writings'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item9.jpg)"),
      heading: 'Reaction',
      category: 'Video'
    }, {
      image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/works/item10.jpg)"),
      heading: 'Miscelanious',
      category: 'Video'
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

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports footer, about, works, perks, news, team */
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
/******/ var __webpack_exports__ = (__webpack_exec__(898));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQWdCLGFBQWEsd0JBQXdCLHlCQUFlOzs7Ozs7OztBQ3RCdlM7O0FBRWIsSUFBSSxJQUFxQztBQUN6QyxFQUFFLDhDQUF5RDtBQUMzRCxFQUFFLEtBQUssRUFFTiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29tcG9uZW50cy9GbGFtaW5nby9Qcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb25zdGFudHMvZmxhbWluZ28uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9QZXJrcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL1RlYW0uanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9BYm91dC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3BhZ2VzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vZGIuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcHJvZ3Jlc3MgfSBmcm9tICcuL2RiJztcclxuY29uc3QgUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi9wcm9ncmVzcy5jc3MnKTtcclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtwcm9ncmVzcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2l0ZW0uY2xhc3Nlc30ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHQ8aDQ+e2l0ZW0ubmFtZX08L2g0PlxyXG5cdFx0XHRcdFx0PGg0PntpdGVtLnBlcmNlbnRhZ2V9PC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3M7XHJcbiIsImltcG9ydCB7IGJhc2UsIFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcbmV4cG9ydCBjb25zdCBuYXYgPSB7XHJcblx0bG9nbzogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL2xvZ28ucG5nYCxcclxuXHRtZW51OiBbXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGJhc2UsXHJcblx0XHRcdHRleHQ6ICdob21lJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9c2VydmljZXMvYCxcclxuXHRcdFx0dGV4dDogJ3NlcnZpY2VzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9d29ya3MvYCxcclxuXHRcdFx0dGV4dDogJ1dvcmtzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9YWJvdXQvYCxcclxuXHRcdFx0dGV4dDogJ2Fib3V0JyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9YmxvZy9gLFxyXG5cdFx0XHR0ZXh0OiAnYmxvZycsXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0Y29udGFjdDoge1xyXG5cdFx0bGluazogYCR7YmFzZX1jb250YWN0YCxcclxuXHRcdHRleHQ6ICdjb250YWN0JyxcclxuXHR9LFxyXG5cdHNlYXJjaDogZmFsc2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IFtcclxuXHR7XHJcblx0XHRpY29uOiAnZmFyIGZhLXBhcGVyLXBsYW5lIG1iLW0gaWNvbi1ncmVlbicsXHJcblx0XHRoZWFkaW5nOiAnRnV0dXJlIENvbmNlcHQuJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtYnJhaW4gbWItbSBpY29uLWdyZWVuJyxcclxuXHRcdGhlYWRpbmc6ICdUaGUgQmlnIElkZWFzLicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFyIGZhLWxpZ2h0YnVsYiBtYi1tIGljb24tZ3JlZW4nLFxyXG5cdFx0aGVhZGluZzogJ0NyZWF0aXZlIFNvbHV0aW9ucy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwcm9ncmVzcyA9IFtcclxuXHR7XHJcblx0XHRjbGFzc2VzOiAnZmxleC1iZXR3ZWVuIHByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItOTAnLFxyXG5cdFx0bmFtZTogJ1VJIERlc2lnbicsXHJcblx0XHRwZXJjZW50YWdlOiAnOTAlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci02MCcsXHJcblx0XHRuYW1lOiAnVVggRGVzaWduJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc2MCUnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogJ2ZsZXgtYmV0d2VlbiBwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLTgwJyxcclxuXHRcdG5hbWU6ICdEaWdpdGFsIE1hcmtldGluZycsXHJcblx0XHRwZXJjZW50YWdlOiAnODAlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci03MCcsXHJcblx0XHRuYW1lOiAnU29jaWFsIE1lZGlhJyxcclxuXHRcdHBlcmNlbnRhZ2U6ICc3MCUnLFxyXG5cdH0sXHJcbl07XHJcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gJy9wbGF5Z3JvdW5kLycgOiAnLyc7XG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZsYW1pbmdvL2AgOiAnL2ZsYW1pbmdvLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9mbGFtaW5nb2Bcblx0OiAnL2ZsYW1pbmdvJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHBlcmtzIH0gZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBQZXJrcyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxyXG5cdFx0e3BlcmtzLm1hcCgocGVyaywgaW5kZXgpID0+IChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtwZXJrLmljb259PjwvaT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e3BlcmsuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0PHA+e3BlcmsuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQZXJrcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdGVhbSB9IGZyb20gJy4vZGInO1xyXG5cclxuaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi90ZWFtLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZWFtXCI+XHJcblx0XHRcdHt0ZWFtLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWNvdmVyIG1lbWJlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IG1lbWJlci5pbWFnZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57bWVtYmVyLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnttZW1iZXIucG9zaXRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdHttZW1iZXIuc29jaWFsTWVkaWEubWFwKChpdGVtLCBrZXkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtrZXl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnfmMvRmxhbWluZ28vUHJvZ3Jlc3MuanMnO1xyXG5pbXBvcnQgUGVya3MgZnJvbSAnfnMvRmxhbWluZ28vUGVya3MuanMnO1xyXG5pbXBvcnQgVGVhbSBmcm9tICd+cy9GbGFtaW5nby9UZWFtLmpzJztcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlXCI+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImhlYWRlci1zbWFsbCBiZy1jb3ZlclwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBhYm91dC5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8aDE+e2Fib3V0LmhlYWRlci5oZWFkaW5nfTwvaDE+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxQZXJrcyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5IHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnNraWxscy5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnthYm91dC5za2lsbHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxQcm9ncmVzcyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQuc2tpbGxzLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQudmlkZW8uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmhlYWRpbmd9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXkgbXItZGVmYXVsdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdHthYm91dC52aWRlby5idXR0b24udGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXkgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1sXCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdHthYm91dC50ZWFtLmhlYWRpbmd9XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8aDU+e2Fib3V0LnRlYW0uZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUZWFtIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkZXItaG9tZXBhZ2UuanBnKWAsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0NyZWF0aXZlIG1pbmQsIGNyZWF0aXZlIHdvcmtzJyxcclxuXHRcdGhlYWRpbmc6ICdXZSBhcmUgZGlnaXRhbCBhZ2VuY3kuJyxcclxuXHRcdGJ1dHRvbjogJ2dldHRpbmcgc3RhcnRlZCcsXHJcblx0fSxcclxuXHRzZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ091ciBTZXJ2aWNlcyBmb3IgY2xpZW50cycsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aGVhZGluZzogJ1dvcmtzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGluZ3MgV2UndmUgTWFkZVwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICd2aWV3IGFsbCcsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRhYm91dDoge1xyXG5cdFx0aGVhZGluZzogJ0Fib3V0LicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcblx0dGVzdGltb25pYWxzOiB7XHJcblx0XHRoZWFkaW5nOiAnVGVzdGltb25pYWxzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjdXN0b21lcnMgPSBbXHJcblx0J2ZhYiBmYS1qZWRpLW9yZGVyIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc3Rhci1vZi1saWZlIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc3RvcmUtYWx0IGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc2hhcmUtYWx0LXNxdWFyZSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXBvby1zdG9ybSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLWNoYXJnaW5nLXN0YXRpb24gaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1zbm93cGxvdyBpY29uLXdoaXRlJyxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2hlYWRlci1iZy5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdTZXJ2aWNlcy4nLFxyXG5cdH0sXHJcblx0b3VyU2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgc2VydmljZXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzJyxcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnV2FubmEgc2VlIG91ciB3b3Jrcz8nLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICdhbGwgcHJvamVjdHMnLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0c2tpbGxzOiB7XHJcblx0XHRoZWFkaW5nOiAnSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpZCBhcmN1IGx1Y3R1cywgcGVsbGVudGVzcXVlIGxvcmVtIGFjLCBwaGFyZXRyYSBzYXBpZW4uIERvbmVjIGVsZW1lbnR1bSwgdG9ydG9yIHZlbCB2aXZlcnJhIHVsdHJpY2VzLCBsYWN1cyBvcmNpIHZlbmVuYXRpcyB0b3J0b3IsIHZlbCByaG9uY3VzIGlwc3VtIGZlbGlzIGEgZGlhbS4nLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL3RhdHRvby5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdPdXIgd29ya3MuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgV29ya3MuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnU2VlIGFsbCBvdXIgd29ya3MnLFxyXG5cdFx0Y29sdW1uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0FyaGl0ZWN0dXJlJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJ0FydCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMi5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnUGhvdG9ncmFwaHknLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiAnQXJ0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0zLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdUZWFzZXInLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiAnVmlkZW8nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTQuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1N0eWxlcycsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6ICdBcnQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTUuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0Fib3V0JyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJ1dyaXRpbmdzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW02LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdOYW1lcycsXHJcblx0XHRcdFx0Y2F0ZWdvcnk6ICdXcml0aW5ncycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnVGl0bGVzJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJ1dyaXRpbmdzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW04LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdTb21ldGhpbmcnLFxyXG5cdFx0XHRcdGNhdGVnb3J5OiAnV3JpdGluZ3MnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTkuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1JlYWN0aW9uJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJ1ZpZGVvJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTWlzY2VsYW5pb3VzJyxcclxuXHRcdFx0XHRjYXRlZ29yeTogJ1ZpZGVvJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Fib3V0IHVzLicsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jlc3QgU29sdXRpb25zIGZvciBZb3VyIEJ1c2luZXNzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuJyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnV2F0Y2ggdmlkZW8nIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiAnTWVldCBvdXIgdGVhbS4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICd0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3QnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvbWFwLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0NvbnRhY3QgdXMuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdHZXQgaW4gdG91Y2ggd2l0aCB1cyEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0XHRjb2x1bW5zOiB7XHJcblx0XHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnUEhPTkUnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJysxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ3RlbDoxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnQUREUkVTUycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnRU1BSUwnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ2FueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOmFueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ29mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRmb3JtOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VuZCB1cyBhIG1lc3NhZ2UhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBibG9nID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVuLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jsb2cuJyxcclxuXHR9LFxyXG5cdGhlYWRpbmc6ICdDaGVjayBvdXIgbGF0ZXN0IG5ld3MuJyxcclxuXHRkZXNjcmlwdGlvbjogJ0NoZWNrIE91dCBTb21lIG9mIE91ciBOZXdzJyxcclxuXHRhcnRpY2xlczogW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy92ci5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6XHJcblx0XHRcdFx0JzggQ2l0aWVzIFRoYXQgU2hvdyBZb3UgV2hhdCBUaGUgRnV0dXJlIFdpbGwgTG9vayBMaWtlIChJbm5vdmF0aXZlIElkZWFzKScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3RoYW5rcy5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCdDb3VsZCB0aGlzIFZSIHNrZXRjaGluZyB0b29sIGJlIGNvbWluZyBvZiBhZ2UgZm9yIGRlc2lnbmVycyBpbiB0aGUgZnV0dXJlPycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRcdGJ1dHRvbjogYCR7YmFzZX1hcnRpY2xlYCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Rlc2lnbi5qcGcpYCxcclxuXHRcdFx0aGVhZGluZzpcclxuXHRcdFx0XHQnOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOlxyXG5cdFx0XHRcdCcxNSBHaWZ0IElkZWFzIGZvciBNb20gYW5kIERhZC4gV2hlcmV2ZXIgVGhleSBBcmUgVGhpcyBZZWFyJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdFx0fSxcclxuXHRdLFxyXG59O1xyXG5leHBvcnQgY29uc3QgYXJ0aWNsZSA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGNhdGVnb3J5OiAnVGVjaG5vbG9neScsXHJcblx0XHRoZWFkaW5nOlxyXG5cdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0fSxcclxuXHRjb250ZW50OiB7XHJcblx0XHRzaWRlYmFyOiB7XHJcblx0XHRcdGRldGFpbHM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkaW5nOiAnV3JpdHRlbiBieScsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0pvaG4gRG9lJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRpbmc6ICdQb3N0ZWQgb24nLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdKYW51YXJ5IDMsIDIwMjInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGluZzogJ1RhZ3MnLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdEZXNpZ24sIFRlY2hub2xvZ3knLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2snLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhYiBmYS10d2l0dGVyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpbms6ICdodHRwczovL2luc3RhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdFx0bWFpbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2Rlc2NyaXB0aW9uJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGluIHBvc3VlcmUgbWV0dXMuIERvbmVjIGRpY3R1bSB0ZW1wb3Igb2Rpbywgc2l0IGFtZXQgY29uZGltZW50dW0gb2RpbyBtb2xsaXMgbmVjLiBQcmFlc2VudCBlZ2V0IGxpZ3VsYSBuZXF1ZS4gUXVpc3F1ZSBwaGFyZXRyYSBlbGVtZW50dW0gbWFzc2EgYXQgZnJpbmdpbGxhLicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2hlYWRpbmcnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICdUaGUgTmV3IEdlbmVyYXRpb24gb2YgVlIgaXMgQ29taW5nIScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J0V0aWFtIHVsdHJpY2VzIGV4IG5lYyBpbnRlcmR1bSBsdWN0dXMuIFNlZCB0aW5jaWR1bnQgbmlzbCBzZWQgYXJjdSBzb2RhbGVzIGVsZW1lbnR1bS4gRXRpYW0gYWMganVzdG8gdml0YWUgZG9sb3IgdGluY2lkdW50IGVmZmljaXR1ciBlZ2V0IGF0IHRlbGx1cy4gUXVpc3F1ZSB0cmlzdGlxdWUgdm9sdXRwYXQgbnVsbGEsIGV1IGJpYmVuZHVtIGVzdCBtYWxlc3VhZGEgYS4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHlwZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRjb250ZW50OiBgJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnYCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRXRpYW0gaW4gcG9zdWVyZSBtZXR1cy4gRG9uZWMgZGljdHVtIHRlbXBvciBvZGlvLCBzaXQgYW1ldCBjb25kaW1lbnR1bSBvZGlvIG1vbGxpcyBuZWMuIFByYWVzZW50IGVnZXQgbGlndWxhIG5lcXVlLiBRdWlzcXVlIHBoYXJldHJhIGVsZW1lbnR1bSBtYXNzYSBhdCBmcmluZ2lsbGEuIE51bGxhbSBmcmluZ2lsbGEgbmVjIGF1Z3VlIGlkIHNvbGxpY2l0dWRpbi4gUXVpc3F1ZSBpbnRlcmR1bSBsb2JvcnRpcyB0b3J0b3IsIHNpdCBhbWV0IGFsaXF1YW0gdXJuYSBhbGlxdWFtIGluLiBNb3JiaSBpbiBxdWFtIGEgdGVsbHVzIHRlbXBvciB0aW5jaWR1bnQgc2VkIHZpdGFlIGVyb3MuJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6XHJcblx0XHRcdFx0XHQnRXRpYW0gdWx0cmljZXMgZXggbmVjIGludGVyZHVtIGx1Y3R1cy4gU2VkIHRpbmNpZHVudCBuaXNsIHNlZCBhcmN1IHNvZGFsZXMgZWxlbWVudHVtLiBFdGlhbSBhYyBqdXN0byB2aXRhZSBkb2xvciB0aW5jaWR1bnQgZWZmaWNpdHVyIGVnZXQgYXQgdGVsbHVzLiBRdWlzcXVlIHRyaXN0aXF1ZSB2b2x1dHBhdCBudWxsYSwgZXUgYmliZW5kdW0gZXN0IG1hbGVzdWFkYSBhLiBRdWlzcXVlIHN1c2NpcGl0LCBmZWxpcyB1dCBjb25ndWUgbW9sZXN0aWUsIGVyb3MgZG9sb3IgbWF0dGlzIGRvbG9yLCBhIHNhZ2l0dGlzIHNlbSBsaWd1bGEgdml0YWUgZHVpLiBTZWQgcGVsbGVudGVzcXVlIHNhZ2l0dGlzIHRpbmNpZHVudC4gJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdoZWFkaW5nJyxcclxuXHRcdFx0XHRjb250ZW50OlxyXG5cdFx0XHRcdFx0J1wiWW91ciB0aW1lIGlzIGxpbWl0ZWQsIHNvIGRvblxcJ3Qgd2FzdGUgaXQgbGl2aW5nIHNvbWVvbmUgZWxzZVxcJ3MgbGlmZS5cIicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRjb250ZW50OiAnIFN0ZXZlIEpvYnMgfCBFeCBDRU8gb2YgQXBwbGUgJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuZXhwb3J0IGNvbnN0IGZvb3RlciA9IHtcclxuXHRpbnF1aXJ5OiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9iYWNrZ3JvdW5kLWZvb3Rlci5qcGcpYCxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2snLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtdHdpdHRlcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS15b3V0dWJlJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0XHRoZWFkaW5nOiAnSGF2ZSBhbnkgcHJvamVjdCBpbiBtaW5kPycsXHJcblx0XHRidXR0b246IHtcclxuXHRcdFx0dGV4dDogJ21ha2UgaW5xdWlyeScsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bWVudXM6IHtcclxuXHRcdG1lbnUxOiB7XHJcblx0XHRcdGxvZ286IHtcclxuXHRcdFx0XHRpbWFnZTogYCR7UFVCTElDX1VSTH0vaW1hZ2VzL2xvZ28ucG5nYCxcclxuXHRcdFx0XHRsaW5rOiBiYXNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gYSBkaWdpdGFsIGFnZW5jeScsXHJcblx0XHR9LFxyXG5cdFx0bWVudTI6IHtcclxuXHRcdFx0aGVhZGluZzogJ0NvbnRhY3QgVXMnLFxyXG5cdFx0XHRidXR0b25zOiB7XHJcblx0XHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdFx0dGV4dDogJzA3Mjc3MjkwNjgnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1waG9uZS12b2x1bWUgaWNvbi13aGl0ZScsXHJcblx0XHRcdFx0XHRsaW5rOiAndGVsOjA3Mjc3MjkwNjgnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YnV0dG9uMjoge1xyXG5cdFx0XHRcdFx0bGluazogJ21haWx0bzptb2NhbnUuYWxleGFuZHJ1MjBAeWFob28ucm8nLFxyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhciBmYS1lbnZlbG9wZSBpY29uLXdoaXRlJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdtb2NhbnUuYWxleGFuZHJ1MjBAeWFob28ucm8nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YnV0dG9uMzoge1xyXG5cdFx0XHRcdFx0aWNvbjogJ2ZhcyBmYS1tYXAtbWFya2VyLWFsdCBpY29uLXdoaXRlJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdDb25zdGFudHphLCBSb21hbmlhJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJ1dHRvbjQ6IHtcclxuXHRcdFx0XHRcdGljb246ICdmYXIgZmEtY2FsZW5kYXItYWx0IGljb24td2hpdGUnLFxyXG5cdFx0XHRcdFx0dGV4dDogJ01vbmRheSB0byBGcmlkYXknLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bWVudTM6IHtcclxuXHRcdFx0aGVhZGluZzogJ091ciBTZXJ2aWNlcycsXHJcblx0XHRcdGJ1dHRvbnM6IFsnbGluazEnLCAnbGluazInLCAnbGluazMnLCAnbGluazQnXSxcclxuXHRcdH0sXHJcblx0XHRtZW51NDoge1xyXG5cdFx0XHRoZWFkaW5nOiAnQWJvdXQgVXMnLFxyXG5cdFx0XHRidXR0b25zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ0Fib3V0JyxcclxuXHRcdFx0XHRcdGxpbms6IGJhc2UgKyAnYWJvdXQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ0Jsb2cnLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArICcjJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdDb250YWN0IHVzJyxcclxuXHRcdFx0XHRcdGxpbms6IGJhc2UgKyAnY29udGFjdCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnV29ya3MnLFxyXG5cdFx0XHRcdFx0bGluazogYmFzZSArICd3b3JrcycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRjb3B5cmlnaHQ6IHtcclxuXHRcdHRleHQ6ICdDb3B5cmlnaHQgMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkJyxcclxuXHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0YnV0dG9uMToge1xyXG5cdFx0XHRcdHRleHQ6ICdQcml2YWN5IFBvbGljeScsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHR0ZXh0OiAnVGVybXMgb2YgVXNlJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2snLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtdHdpdHRlcicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWluc3RhZ3JhbScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly95b3V0dWJlLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS15b3V0dWJlJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGNvbHVtbnM6IHtcclxuXHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVvcGxlLXRhbGtpbmcuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6ICdUZWFtIFdvcmsnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ0NvbW1pdHRlZCBhbmQgY3JlYXRpdmUnLFxyXG5cdFx0fSxcclxuXHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvcGVvcGxlLXdvcmtpbmcuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6ICdQaGlsb3NvcGh5JyxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdUcnVzdCBwYXlzIG9mZicsXHJcblx0XHR9LFxyXG5cdFx0Y29sdW1uMzoge1xyXG5cdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9vZmZpY2UuanBnKWAsXHJcblx0XHRcdGhlYWRpbmc6ICdPZmZpY2UnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1NvbWV3aGVyZSBvbiBlYXJ0aCcsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0ZGV0YWlsczogW1xyXG5cdFx0e1xyXG5cdFx0XHRoZWFkaW5nOiAnV2hvIHdlIGFyZScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLicsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRoZWFkaW5nOiAnT3VyIHBoaWxvc29waHknLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby4nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aGVhZGluZzogJ0hvdyB3ZSB3b3JrJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uJyxcclxuXHRcdH0sXHJcblx0XSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IFtcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93YXRjaC5qcGcpYCxcclxuXHRcdG5hbWU6ICdTbWFydCBXYXRjaCcsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93YXRjaDIuanBnKWAsXHJcblx0XHRuYW1lOiAnVVggRGVzaWduJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2hlYWRwaG9uZS5qcGcpYCxcclxuXHRcdG5hbWU6ICdNb2NrdXAnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvbWFjLmpwZylgLFxyXG5cdFx0bmFtZTogJ1RoZSBVSSBEZXNpZ24nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd2F0Y2gzLmpwZylgLFxyXG5cdFx0bmFtZTogJ09uZSBQcm9kdWN0JyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2ZsYW1pbmdvcy5qcGcpYCxcclxuXHRcdG5hbWU6ICdUaGUgVVggRGVzaWducycsXHJcblx0fSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHBlcmtzID0gW1xyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtY2hhcnQtYmFyIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnRXhjZWxsZW50IERlc2lnbicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS1wZW4gaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdGYXN0IFJlc3BvbnNlJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLXVzZXItZnJpZW5kcyBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ1RpbWUgU2F2aW5nJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLWdsb2JlLWV1cm9wZSBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ1BlcnNvbmFsIFN1cHBvcnQnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXIgZmEtYm9va21hcmsgaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdCZXN0IFF1YWxpdHknLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtY2hhcnQtYXJlYSBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ1BlcmZlY3QgU29sdXRpb25zJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IG5ld3MgPSBbXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdnIuanBnKWAsXHJcblx0XHRoZWFkaW5nOlxyXG5cdFx0XHQnQ291bGQgdGhpcyBWUiBza2V0Y2hpbmcgdG9vbCBiZSBjb21pbmcgb2YgYWdlIGZvciBkZXNpZ25lcnMgaW4gdGhlIGZ1dHVyZT8nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRoZWFkaW5nOlxyXG5cdFx0XHQnOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0YnV0dG9uOiBgJHtiYXNlfWFydGljbGVgLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvdGhhbmtzLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJzE1IEdpZnQgSWRlYXMgZm9yIE1vbSBhbmQgRGFkLiBXaGVyZXZlciBUaGV5IEFyZSBUaGlzIFllYXInLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNYWVjZW5hcyBzY2VsZXJpc3F1ZSBvcm5hcmUgdGluY2lkdW50Li4uLicsXHJcblx0XHRidXR0b246IGAke2Jhc2V9YXJ0aWNsZWAsXHJcblx0fSxcclxuXTtcclxuZXhwb3J0IGNvbnN0IHRlYW0gPSBbXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyMS5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ludGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOmxpbmtlZGluLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1saW5rZWRpbi1pbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyMi5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ludGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOmxpbmtlZGluLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1saW5rZWRpbi1pbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyMy5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ludGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOmxpbmtlZGluLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1saW5rZWRpbi1pbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyNC5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ludGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOmxpbmtlZGluLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1saW5rZWRpbi1pbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvbWVtYmVyNS5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdFx0c29jaWFsTWVkaWE6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ZhY2Vib29rLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1mYWNlYm9vay1mJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL2ludGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOmxpbmtlZGluLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1saW5rZWRpbi1pbicsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbl07XHJcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49NjAxMDMscD02MDEwNjtleHBvcnRzLkZyYWdtZW50PTYwMTA3O2V4cG9ydHMuU3RyaWN0TW9kZT02MDEwODtleHBvcnRzLlByb2ZpbGVyPTYwMTE0O3ZhciBxPTYwMTA5LHI9NjAxMTAsdD02MDExMjtleHBvcnRzLlN1c3BlbnNlPTYwMTEzO3ZhciB1PTYwMTE1LHY9NjAxMTY7XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgdz1TeW1ib2wuZm9yO249dyhcInJlYWN0LmVsZW1lbnRcIik7cD13KFwicmVhY3QucG9ydGFsXCIpO2V4cG9ydHMuRnJhZ21lbnQ9dyhcInJlYWN0LmZyYWdtZW50XCIpO2V4cG9ydHMuU3RyaWN0TW9kZT13KFwicmVhY3Quc3RyaWN0X21vZGVcIik7ZXhwb3J0cy5Qcm9maWxlcj13KFwicmVhY3QucHJvZmlsZXJcIik7cT13KFwicmVhY3QucHJvdmlkZXJcIik7cj13KFwicmVhY3QuY29udGV4dFwiKTt0PXcoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTtleHBvcnRzLlN1c3BlbnNlPXcoXCJyZWFjdC5zdXNwZW5zZVwiKTt1PXcoXCJyZWFjdC5tZW1vXCIpO3Y9dyhcInJlYWN0LmxhenlcIil9dmFyIHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eCYmYVt4XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfWZ1bmN0aW9uIHooYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9XG52YXIgQT17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQj17fTtmdW5jdGlvbiBDKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9Qy5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtDLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3Ioeig4NSkpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07Qy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBEKCl7fUQucHJvdG90eXBlPUMucHJvdG90eXBlO2Z1bmN0aW9uIEUoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX12YXIgRj1FLnByb3RvdHlwZT1uZXcgRDtGLmNvbnN0cnVjdG9yPUU7bChGLEMucHJvdG90eXBlKTtGLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBHPXtjdXJyZW50Om51bGx9LEg9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxJPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBKKGEsYixjKXt2YXIgZSxkPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUguY2FsbChiLGUpJiYhSS5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1kW2VdJiYoZFtlXT1nW2VdKTtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6ZCxfb3duZXI6Ry5jdXJyZW50fX1cbmZ1bmN0aW9uIEsoYSxiKXtyZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIEwoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PW59ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBNPS9cXC8rL2c7ZnVuY3Rpb24gTihhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIE8oYSxiLGMsZSxkKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbjpjYXNlIHA6aD0hMH19aWYoaClyZXR1cm4gaD1hLGQ9ZChoKSxhPVwiXCI9PT1lP1wiLlwiK04oaCwwKTplLEFycmF5LmlzQXJyYXkoZCk/KGM9XCJcIixudWxsIT1hJiYoYz1hLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIiksTyhkLGIsYyxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWQmJihMKGQpJiYoZD1LKGQsYysoIWQua2V5fHxoJiZoLmtleT09PWQua2V5P1wiXCI6KFwiXCIrZC5rZXkpLnJlcGxhY2UoTSxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChkKSksMTtoPTA7ZT1cIlwiPT09ZT9cIi5cIjplK1wiOlwiO2lmKEFycmF5LmlzQXJyYXkoYSkpZm9yKHZhciBnPVxuMDtnPGEubGVuZ3RoO2crKyl7az1hW2ddO3ZhciBmPWUrTihrLGcpO2grPU8oayxiLGMsZixkKX1lbHNlIGlmKGY9eShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZStOKGssZysrKSxoKz1PKGssYixjLGYsZCk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVwiXCIrYSxFcnJvcih6KDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpKTtyZXR1cm4gaH1mdW5jdGlvbiBQKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBlPVtdLGQ9MDtPKGEsZSxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChjLGEsZCsrKX0pO3JldHVybiBlfVxuZnVuY3Rpb24gUShhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2EuX3N0YXR1cz0wO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0O3Rocm93IGEuX3Jlc3VsdDt9dmFyIFI9e2N1cnJlbnQ6bnVsbH07ZnVuY3Rpb24gUygpe3ZhciBhPVIuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcih6KDMyMSkpO3JldHVybiBhfXZhciBUPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlIsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6e3RyYW5zaXRpb246MH0sUmVhY3RDdXJyZW50T3duZXI6RyxJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O1xuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlAsZm9yRWFjaDpmdW5jdGlvbihhLGIsYyl7UChhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGMpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1AoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBQKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpdGhyb3cgRXJyb3IoeigxNDMpKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUM7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUU7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1UO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKHooMjY3LGEpKTt2YXIgZT1sKHt9LGEucHJvcHMpLGQ9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSC5jYWxsKGIsZikmJiFJLmhhc093blByb3BlcnR5KGYpJiYoZVtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtmb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLFxua2V5OmQscmVmOmsscHJvcHM6ZSxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOnIsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjpxLF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1KO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1KLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07ZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp0LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1MO1xuZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6UX19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp1LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDb250ZXh0KGEsYil9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9O1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUxheW91dEVmZmVjdChhLGIpfTtleHBvcnRzLnVzZU1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZU1lbW8oYSxiKX07ZXhwb3J0cy51c2VSZWR1Y2VyPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZVJlZHVjZXIoYSxiLGMpfTtleHBvcnRzLnVzZVJlZj1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVJlZihhKX07ZXhwb3J0cy51c2VTdGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gUygpLnVzZVN0YXRlKGEpfTtleHBvcnRzLnZlcnNpb249XCIxNy4wLjJcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwicHJvZ3Jlc3MiLCJQcm9ncmVzcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzZXMiLCJuYW1lIiwicGVyY2VudGFnZSIsImJhc2UiLCJQVUJMSUNfVVJMIiwibmF2IiwibG9nbyIsIm1lbnUiLCJsaW5rIiwidGV4dCIsImNvbnRhY3QiLCJzZWFyY2giLCJzZXJ2aWNlcyIsImljb24iLCJoZWFkaW5nIiwiZGVzY3JpcHRpb24iLCJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwcm9qZWN0QmFzZSIsInBlcmtzIiwiUGVya3MiLCJwZXJrIiwidGVhbSIsIlRlYW0iLCJtZW1iZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsInBvc2l0aW9uIiwic29jaWFsTWVkaWEiLCJrZXkiLCJhYm91dCIsIkFib3V0UGFnZSIsImhlYWRlciIsInNraWxscyIsInZpZGVvIiwiYnV0dG9uIiwiaG9tZSIsIndvcmtzIiwidGVzdGltb25pYWxzIiwiY3VzdG9tZXJzIiwiYXZhdGFyIiwib3VyU2VydmljZXMiLCJjb250ZW50IiwiY29sdW1ucyIsImNhdGVnb3J5IiwiY29sdW1uMSIsImJ1dHRvbnMiLCJidXR0b24xIiwiYnV0dG9uMiIsImNvbHVtbjIiLCJjb2x1bW4zIiwiZm9ybSIsImJsb2ciLCJhcnRpY2xlcyIsImFydGljbGUiLCJzaWRlYmFyIiwiZGV0YWlscyIsIm1haW4iLCJ0eXBlIiwiZm9vdGVyIiwiaW5xdWlyeSIsIm1lbnVzIiwibWVudTEiLCJtZW51MiIsImJ1dHRvbjMiLCJidXR0b240IiwibWVudTMiLCJtZW51NCIsImNvcHlyaWdodCIsIm5ld3MiXSwic291cmNlUm9vdCI6IiJ9