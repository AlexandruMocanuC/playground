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

/* unused harmony exports nav, services, progress, customers */
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
    link: "#",
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
var customers = (/* unused pure expression or super */ null && (['fab fa-jedi-order icon-white', 'fas fa-star-of-life icon-white', 'fas fa-store-alt icon-white', 'fas fa-share-alt-square icon-white', 'fas fa-poo-storm icon-white', 'fas fa-charging-station icon-white', 'fas fa-snowplow icon-white']));

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

/***/ }),

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports footer, about, testimonials, works, perks, news, team */
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
  button: '#'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/design.jpg)"),
  heading: '8 Cities That Show You What The Future Will Look Like (Innovative Ideas)',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
  button: '#'
}, {
  image: "url(".concat(_constants_flamingo__WEBPACK_IMPORTED_MODULE_0__/* .PUBLIC_URL */ .f, "/images/thanks.jpg)"),
  heading: '15 Gift Ideas for Mom and Dad. Wherever They Are This Year',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque ornare tincidunt....',
  button: '#'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsOEJBQThCLHlCQUFjLGFBQWEsc0JBQXNCLHlCQUFnQixhQUFhLHdCQUF3Qix5QkFBZTs7Ozs7Ozs7QUN0QnZTOztBQUViLElBQUksSUFBcUM7QUFDekMsRUFBRSw4Q0FBeUQ7QUFDM0QsRUFBRSxLQUFLLEVBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2NvbXBvbmVudHMvRmxhbWluZ28vUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9jb21wb25lbnRzL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvY29uc3RhbnRzL2ZsYW1pbmdvLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvc2VjdGlvbnMvRmxhbWluZ28vUGVya3MuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9zZWN0aW9ucy9GbGFtaW5nby9UZWFtLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvcGFnZXMvRmxhbWluZ28vQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9wYWdlcy9GbGFtaW5nby9kYi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL3NlY3Rpb25zL0ZsYW1pbmdvL2RiLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHByb2dyZXNzIH0gZnJvbSAnLi9kYic7XHJcbmNvbnN0IFByb2dyZXNzID0gKCkgPT4ge1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbXBvcnQoJy4vcHJvZ3Jlc3MuY3NzJyk7XHJcblx0fSwgW10pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7cHJvZ3Jlc3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtpdGVtLmNsYXNzZXN9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0PGg0PntpdGVtLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdDxoND57aXRlbS5wZXJjZW50YWdlfTwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xyXG4iLCJpbXBvcnQgeyBiYXNlLCBQVUJMSUNfVVJMIH0gZnJvbSAnfi9jb25zdGFudHMvZmxhbWluZ28nO1xyXG5leHBvcnQgY29uc3QgbmF2ID0ge1xyXG5cdGxvZ286IGAke1BVQkxJQ19VUkx9L2ltYWdlcy9sb2dvLnBuZ2AsXHJcblx0bWVudTogW1xyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBiYXNlLFxyXG5cdFx0XHR0ZXh0OiAnaG9tZScsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgJHtiYXNlfXNlcnZpY2VzYCxcclxuXHRcdFx0dGV4dDogJ3NlcnZpY2VzJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGxpbms6IGAke2Jhc2V9d29ya3NgLFxyXG5cdFx0XHR0ZXh0OiAnV29ya3MnLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bGluazogYCR7YmFzZX1hYm91dGAsXHJcblx0XHRcdHRleHQ6ICdhYm91dCcsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRsaW5rOiBgI2AsXHJcblx0XHRcdHRleHQ6ICdibG9nJyxcclxuXHRcdH0sXHJcblx0XSxcclxuXHRjb250YWN0OiB7XHJcblx0XHRsaW5rOiBgJHtiYXNlfWNvbnRhY3RgLFxyXG5cdFx0dGV4dDogJ2NvbnRhY3QnLFxyXG5cdH0sXHJcblx0c2VhcmNoOiB0cnVlLFxyXG59O1xyXG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhciBmYS1wYXBlci1wbGFuZSBtYi1tIGljb24tZ3JlZW4nLFxyXG5cdFx0aGVhZGluZzogJ0Z1dHVyZSBDb25jZXB0LicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLWJyYWluIG1iLW0gaWNvbi1ncmVlbicsXHJcblx0XHRoZWFkaW5nOiAnVGhlIEJpZyBJZGVhcy4nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cy4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhciBmYS1saWdodGJ1bGIgbWItbSBpY29uLWdyZWVuJyxcclxuXHRcdGhlYWRpbmc6ICdDcmVhdGl2ZSBTb2x1dGlvbnMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMuJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3MgPSBbXHJcblx0e1xyXG5cdFx0Y2xhc3NlczogJ2ZsZXgtYmV0d2VlbiBwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLTkwJyxcclxuXHRcdG5hbWU6ICdVSSBEZXNpZ24nLFxyXG5cdFx0cGVyY2VudGFnZTogJzkwJScsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiAnZmxleC1iZXR3ZWVuIHByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItNjAnLFxyXG5cdFx0bmFtZTogJ1VYIERlc2lnbicsXHJcblx0XHRwZXJjZW50YWdlOiAnNjAlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNsYXNzZXM6ICdmbGV4LWJldHdlZW4gcHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci04MCcsXHJcblx0XHRuYW1lOiAnRGlnaXRhbCBNYXJrZXRpbmcnLFxyXG5cdFx0cGVyY2VudGFnZTogJzgwJScsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjbGFzc2VzOiAnZmxleC1iZXR3ZWVuIHByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItNzAnLFxyXG5cdFx0bmFtZTogJ1NvY2lhbCBNZWRpYScsXHJcblx0XHRwZXJjZW50YWdlOiAnNzAlJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgY3VzdG9tZXJzID0gW1xyXG5cdCdmYWIgZmEtamVkaS1vcmRlciBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0YXItb2YtbGlmZSBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXN0b3JlLWFsdCBpY29uLXdoaXRlJyxcclxuXHQnZmFzIGZhLXNoYXJlLWFsdC1zcXVhcmUgaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1wb28tc3Rvcm0gaWNvbi13aGl0ZScsXHJcblx0J2ZhcyBmYS1jaGFyZ2luZy1zdGF0aW9uIGljb24td2hpdGUnLFxyXG5cdCdmYXMgZmEtc25vd3Bsb3cgaWNvbi13aGl0ZScsXHJcbl07XHJcbiIsImNvbnN0IGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gaXNQcm9kdWN0aW9uID8gJy9wbGF5Z3JvdW5kLycgOiAnLyc7XG4iLCJjb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG5pbXBvcnQgeyBiYXNlIGFzIHByb2plY3RCYXNlIH0gZnJvbSAnfi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGlzUHJvZHVjdGlvbiA/IGAke3Byb2plY3RCYXNlfWZsYW1pbmdvL2AgOiAnL2ZsYW1pbmdvLyc7XG5cbmV4cG9ydCBjb25zdCBQVUJMSUNfVVJMID0gaXNQcm9kdWN0aW9uXG5cdD8gYCR7cHJvamVjdEJhc2V9L3N0YXRpYy9mbGFtaW5nb2Bcblx0OiAnL2ZsYW1pbmdvJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHBlcmtzIH0gZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBQZXJrcyA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtM1wiPlxyXG5cdFx0e3BlcmtzLm1hcCgocGVyaywgaW5kZXgpID0+IChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gcC1tXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtwZXJrLmljb259PjwvaT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJtYi1kZWZhdWx0XCI+e3BlcmsuaGVhZGluZ308L2g0PlxyXG5cdFx0XHRcdFx0PHA+e3BlcmsuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCkpfVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBQZXJrcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdGVhbSB9IGZyb20gJy4vZGInO1xyXG5cclxuaW1wb3J0IHsgUFVCTElDX1VSTCB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuXHJcbmNvbnN0IFRlYW0gPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGltcG9ydCgnLi90ZWFtLmNzcycpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZWFtXCI+XHJcblx0XHRcdHt0ZWFtLm1hcCgobWVtYmVyLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWNvdmVyIG1lbWJlclwiXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IG1lbWJlci5pbWFnZSxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVtYmVyLWRldGFpbHNcIj5cclxuXHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj57bWVtYmVyLm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnttZW1iZXIucG9zaXRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1tZWRpYS1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdHttZW1iZXIuc29jaWFsTWVkaWEubWFwKChpdGVtLCBrZXkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2l0ZW0ubGlua30ga2V5PXtrZXl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbn0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnfmMvRmxhbWluZ28vUHJvZ3Jlc3MuanMnO1xyXG5pbXBvcnQgUGVya3MgZnJvbSAnfnMvRmxhbWluZ28vUGVya3MuanMnO1xyXG5pbXBvcnQgVGVhbSBmcm9tICd+cy9GbGFtaW5nby9UZWFtLmpzJztcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2RiJztcclxuXHJcbmltcG9ydCB7IFBVQkxJQ19VUkwgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcblxyXG5jb25zdCBBYm91dFBhZ2UgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlXCI+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT1cImhlYWRlci1zbWFsbCBiZy1jb3ZlclwiXHJcblx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0YmFja2dyb3VuZEltYWdlOiBhYm91dC5oZWFkZXIuaW1hZ2UsXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8aDE+e2Fib3V0LmhlYWRlci5oZWFkaW5nfTwvaDE+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxQZXJrcyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5IHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3aWR0aC04MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnNraWxscy5oZWFkaW5nfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItbVwiPnthYm91dC5za2lsbHMuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxQcm9ncmVzcyAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQuc2tpbGxzLmltYWdlLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlIHNlY3Rpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMtMlwiPlxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2x1bW4gYmctY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogYWJvdXQudmlkZW8uaW1hZ2UsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInAtbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmhlYWRpbmd9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi1tXCI+e2Fib3V0LnZpZGVvLmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXkgbXItZGVmYXVsdFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdHthYm91dC52aWRlby5idXR0b24udGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZXkgc2VjdGlvblwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtYi1sXCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cIm1iLWRlZmF1bHRcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdHthYm91dC50ZWFtLmhlYWRpbmd9XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHQ8aDU+e2Fib3V0LnRlYW0uZGVzY3JpcHRpb259PC9oNT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxUZWFtIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZTtcclxuIiwiaW1wb3J0IHsgUFVCTElDX1VSTCwgYmFzZSB9IGZyb20gJ34vY29uc3RhbnRzL2ZsYW1pbmdvJztcclxuZXhwb3J0IGNvbnN0IGhvbWUgPSB7XHJcblx0aGVhZGVyOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkZXItaG9tZXBhZ2UuanBnKWAsXHJcblx0XHRkZXNjcmlwdGlvbjogJ0NyZWF0aXZlIG1pbmQsIGNyZWF0aXZlIHdvcmtzJyxcclxuXHRcdGhlYWRpbmc6ICdXZSBhcmUgZGlnaXRhbCBhZ2VuY3kuJyxcclxuXHRcdGJ1dHRvbjogJ2dldHRpbmcgc3RhcnRlZCcsXHJcblx0fSxcclxuXHRzZXJ2aWNlczoge1xyXG5cdFx0aGVhZGluZzogJ1NlcnZpY2VzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ091ciBTZXJ2aWNlcyBmb3IgY2xpZW50cycsXHJcblx0fSxcclxuXHR3b3Jrczoge1xyXG5cdFx0aGVhZGluZzogJ1dvcmtzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGluZ3MgV2UndmUgTWFkZVwiLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICd2aWV3IGFsbCcsIGxpbms6IGAke2Jhc2V9d29ya3NgIH0sXHJcblx0fSxcclxuXHRhYm91dDoge1xyXG5cdFx0aGVhZGluZzogJ0Fib3V0LicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcblx0dGVzdGltb25pYWxzOiB7XHJcblx0XHRoZWFkaW5nOiAnVGVzdGltb25pYWxzLicsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1dlIGFyZSBtb3JlIHRoYW4gZGlnaXRhbCBhZ2VuY3knLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3NlcnZpY2VzL2hlYWRlci1iZy5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdTZXJ2aWNlcy4nLFxyXG5cdH0sXHJcblx0b3VyU2VydmljZXM6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgc2VydmljZXMuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnT3VyIFNlcnZpY2VzIGZvciBjbGllbnRzJyxcclxuXHR9LFxyXG5cdHdvcmtzOiB7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9zZXJ2aWNlcy9sYXB0b3AuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnV2FubmEgc2VlIG91ciB3b3Jrcz8nLFxyXG5cdFx0YnV0dG9uOiB7IHRleHQ6ICdhbGwgcHJvamVjdHMnLCBsaW5rOiBgJHtiYXNlfXdvcmtzYCB9LFxyXG5cdH0sXHJcblx0c2tpbGxzOiB7XHJcblx0XHRoZWFkaW5nOiAnSGVyZSBhcmUgc29tZSBvZiBvdXIgZ3JlYXQgc2tpbGxzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpZCBhcmN1IGx1Y3R1cywgcGVsbGVudGVzcXVlIGxvcmVtIGFjLCBwaGFyZXRyYSBzYXBpZW4uIERvbmVjIGVsZW1lbnR1bSwgdG9ydG9yIHZlbCB2aXZlcnJhIHVsdHJpY2VzLCBsYWN1cyBvcmNpIHZlbmVuYXRpcyB0b3J0b3IsIHZlbCByaG9uY3VzIGlwc3VtIGZlbGlzIGEgZGlhbS4nLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB3b3JrcyA9IHtcclxuXHRoZWFkZXI6IHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL3RhdHRvby5qcGcpYCxcclxuXHRcdGhlYWRpbmc6ICdPdXIgd29ya3MuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdPdXIgV29ya3MuJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnU2VlIGFsbCBvdXIgd29ya3MnLFxyXG5cdFx0Y29sdW1uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTEuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0FyaGl0ZWN0dXJlJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0yLmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdQaG90b2dyYXBoeScsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtMy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnVGVhc2VyJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW00LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdTdHlsZXMnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTUuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ0Fib3V0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW02LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdOYW1lcycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy93b3Jrcy9pdGVtNy5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnVGl0bGVzJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW04LmpwZylgLFxyXG5cdFx0XHRcdGhlYWRpbmc6ICdTb21ldGhpbmcnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd29ya3MvaXRlbTkuanBnKWAsXHJcblx0XHRcdFx0aGVhZGluZzogJ1JlYWN0aW9uJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dvcmtzL2l0ZW0xMC5qcGcpYCxcclxuXHRcdFx0XHRoZWFkaW5nOiAnTWlzY2VsYW5pb3VzJyxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGFib3V0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvb2ZmaWNlLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Fib3V0IHVzLicsXHJcblx0fSxcclxuXHRza2lsbHM6IHtcclxuXHRcdGhlYWRpbmc6ICdIZXJlIGFyZSBzb21lIG9mIG91ciBncmVhdCBza2lsbHMnLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGlkIGFyY3UgbHVjdHVzLCBwZWxsZW50ZXNxdWUgbG9yZW0gYWMsIHBoYXJldHJhIHNhcGllbi4nLFxyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYWJvdXQvcGhvbmUuanBnKWAsXHJcblx0fSxcclxuXHR2aWRlbzoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvc2VydmljZXMvbGFwdG9wLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0Jlc3QgU29sdXRpb25zIGZvciBZb3VyIEJ1c2luZXNzJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBzaXQgYW1ldCB1cm5hIHF1aXMgb2RpbyB2ZWhpY3VsYSBjb25zZWN0ZXR1ci4gRG9uZWMgZXUgZ3JhdmlkYSBkaWFtLiBBZW5lYW4gYWNjdW1zYW4gbmlzbCBzZWQgZnJpbmdpbGxhIHNvbGxpY2l0dWRpbi4gRG9uZWMgdGluY2lkdW50IHF1aXMgZG9sb3IgZWdldCBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgYSBtb2xsaXMgbGFjdXMuJyxcclxuXHRcdGJ1dHRvbjogeyB0ZXh0OiAnV2F0Y2ggdmlkZW8nIH0sXHJcblx0fSxcclxuXHR0ZWFtOiB7XHJcblx0XHRoZWFkaW5nOiAnTWVldCBvdXIgdGVhbS4nLFxyXG5cdFx0ZGVzY3JpcHRpb246ICd0aGUgYmVzdCBwZW9wbGUgdG8gc3VwcG9ydCB5b3VyIHByb2plY3QnLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0ge1xyXG5cdGhlYWRlcjoge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvbWFwLmpwZylgLFxyXG5cdFx0aGVhZGluZzogJ0NvbnRhY3QgdXMuJyxcclxuXHR9LFxyXG5cdGNvbnRlbnQ6IHtcclxuXHRcdGhlYWRpbmc6ICdHZXQgaW4gdG91Y2ggd2l0aCB1cyEnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCcsXHJcblx0XHRjb2x1bW5zOiB7XHJcblx0XHRcdGNvbHVtbjE6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnUEhPTkUnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJysxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdFx0bGluazogJ3RlbDoxMjM0NTY3ODkwJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICcrMDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICd0ZWw6MDk4NzY1NDMyMScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjI6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnQUREUkVTUycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0XHRoZWFkaW5nOiAnRU1BSUwnLFxyXG5cdFx0XHRcdGJ1dHRvbnM6IHtcclxuXHRcdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ2FueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0XHRsaW5rOiAnbWFpbHRvOmFueW1haWxAbWFpbC5jb20nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ29mZmljaWFsbWFpbEBtYWlsLmNvbScsXHJcblx0XHRcdFx0XHRcdGxpbms6ICdtYWlsdG86b2ZmaWNpYWxtYWlsQG1haWwuY29tJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRmb3JtOiB7XHJcblx0XHRoZWFkaW5nOiAnU2VuZCB1cyBhIG1lc3NhZ2UhJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQnLFxyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IFBVQkxJQ19VUkwsIGJhc2UgfSBmcm9tICd+L2NvbnN0YW50cy9mbGFtaW5nbyc7XHJcbmV4cG9ydCBjb25zdCBmb290ZXIgPSB7XHJcblx0aW5xdWlyeToge1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYmFja2dyb3VuZC1mb290ZXIuanBnKWAsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLXR3aXR0ZXInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8veW91dHViZS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEteW91dHViZScsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdFx0aGVhZGluZzogJ0hhdmUgYW55IHByb2plY3QgaW4gbWluZD8nLFxyXG5cdFx0YnV0dG9uOiB7XHJcblx0XHRcdHRleHQ6ICdtYWtlIGlucXVpcnknLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1lbnVzOiB7XHJcblx0XHRtZW51MToge1xyXG5cdFx0XHRsb2dvOiB7XHJcblx0XHRcdFx0aW1hZ2U6IGAke1BVQkxJQ19VUkx9L2ltYWdlcy9sb2dvLnBuZ2AsXHJcblx0XHRcdFx0bGluazogYmFzZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdXZSBhcmUgbW9yZSB0aGFuIGEgZGlnaXRhbCBhZ2VuY3knLFxyXG5cdFx0fSxcclxuXHRcdG1lbnUyOiB7XHJcblx0XHRcdGhlYWRpbmc6ICdDb250YWN0IFVzJyxcclxuXHRcdFx0YnV0dG9uczoge1xyXG5cdFx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHRcdHRleHQ6ICcwNzI3NzI5MDY4JyxcclxuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtcGhvbmUtdm9sdW1lIGljb24td2hpdGUnLFxyXG5cdFx0XHRcdFx0bGluazogJ3RlbDowNzI3NzI5MDY4JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJ1dHRvbjI6IHtcclxuXHRcdFx0XHRcdGxpbms6ICdtYWlsdG86bW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvJyxcclxuXHRcdFx0XHRcdGljb246ICdmYXIgZmEtZW52ZWxvcGUgaWNvbi13aGl0ZScsXHJcblx0XHRcdFx0XHR0ZXh0OiAnbW9jYW51LmFsZXhhbmRydTIwQHlhaG9vLnJvJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJ1dHRvbjM6IHtcclxuXHRcdFx0XHRcdGljb246ICdmYXMgZmEtbWFwLW1hcmtlci1hbHQgaWNvbi13aGl0ZScsXHJcblx0XHRcdFx0XHR0ZXh0OiAnQ29uc3RhbnR6YSwgUm9tYW5pYScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRidXR0b240OiB7XHJcblx0XHRcdFx0XHRpY29uOiAnZmFyIGZhLWNhbGVuZGFyLWFsdCBpY29uLXdoaXRlJyxcclxuXHRcdFx0XHRcdHRleHQ6ICdNb25kYXkgdG8gRnJpZGF5JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdG1lbnUzOiB7XHJcblx0XHRcdGhlYWRpbmc6ICdPdXIgU2VydmljZXMnLFxyXG5cdFx0XHRidXR0b25zOiBbJ2xpbmsxJywgJ2xpbmsyJywgJ2xpbmszJywgJ2xpbms0J10sXHJcblx0XHR9LFxyXG5cdFx0bWVudTQ6IHtcclxuXHRcdFx0aGVhZGluZzogJ0Fib3V0IFVzJyxcclxuXHRcdFx0YnV0dG9uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdBYm91dCcsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgJ2Fib3V0JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdCbG9nJyxcclxuXHRcdFx0XHRcdGxpbms6IGJhc2UgKyAnIycsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnQ29udGFjdCB1cycsXHJcblx0XHRcdFx0XHRsaW5rOiBiYXNlICsgJ2NvbnRhY3QnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGV4dDogJ1dvcmtzJyxcclxuXHRcdFx0XHRcdGxpbms6IGJhc2UgKyAnd29ya3MnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29weXJpZ2h0OiB7XHJcblx0XHR0ZXh0OiAnQ29weXJpZ2h0IDIwMjAgQWxsIHJpZ2h0cyByZXNlcnZlZCcsXHJcblx0XHRidXR0b25zOiB7XHJcblx0XHRcdGJ1dHRvbjE6IHtcclxuXHRcdFx0XHR0ZXh0OiAnUHJpdmFjeSBQb2xpY3knLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRidXR0b24yOiB7XHJcblx0XHRcdFx0dGV4dDogJ1Rlcm1zIG9mIFVzZScsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLicsXHJcblx0XHRzb2NpYWxNZWRpYTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vZmFjZWJvb2suY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLWZhY2Vib29rJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tJyxcclxuXHRcdFx0XHRpY29uOiAnZmFiIGZhLXR3aXR0ZXInLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8vaW5zdGFncmFtLmNvbScsXHJcblx0XHRcdFx0aWNvbjogJ2ZhYiBmYS1pbnN0YWdyYW0nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGluazogJ2h0dHBzOi8veW91dHViZS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEteW91dHViZScsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBhYm91dCA9IHtcclxuXHRjb2x1bW5zOiB7XHJcblx0XHRjb2x1bW4xOiB7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3Blb3BsZS10YWxraW5nLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOiAnVGVhbSBXb3JrJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdDb21taXR0ZWQgYW5kIGNyZWF0aXZlJyxcclxuXHRcdH0sXHJcblx0XHRjb2x1bW4yOiB7XHJcblx0XHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3Blb3BsZS13b3JraW5nLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOiAnUGhpbG9zb3BoeScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnVHJ1c3QgcGF5cyBvZmYnLFxyXG5cdFx0fSxcclxuXHRcdGNvbHVtbjM6IHtcclxuXHRcdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvb2ZmaWNlLmpwZylgLFxyXG5cdFx0XHRoZWFkaW5nOiAnT2ZmaWNlJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdTb21ld2hlcmUgb24gZWFydGgnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGRldGFpbHM6IFtcclxuXHRcdHtcclxuXHRcdFx0aGVhZGluZzogJ1dobyB3ZSBhcmUnLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVXQgZWxpdCB0ZWxsdXMsIGx1Y3R1cyBuZWMgdWxsYW1jb3JwZXIgbWF0dGlzLCBwdWx2aW5hciBkYXBpYnVzIGxlby4nLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aGVhZGluZzogJ091ciBwaGlsb3NvcGh5JyxcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFV0IGVsaXQgdGVsbHVzLCBsdWN0dXMgbmVjIHVsbGFtY29ycGVyIG1hdHRpcywgcHVsdmluYXIgZGFwaWJ1cyBsZW8uJyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGhlYWRpbmc6ICdIb3cgd2Ugd29yaycsXHJcblx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBVdCBlbGl0IHRlbGx1cywgbHVjdHVzIG5lYyB1bGxhbWNvcnBlciBtYXR0aXMsIHB1bHZpbmFyIGRhcGlidXMgbGVvLicsXHJcblx0XHR9LFxyXG5cdF0sXHJcbn07XHJcbmV4cG9ydCBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBjb25zZXF1YXQgYmliZW5kdW0gdHVycGlzIHNpdCBhbWV0IHByZXRpdW0uIE51bmMgdXQgZHVpIG9ybmFyZSwgdnVscHV0YXRlIGF1Z3VlIHNlZCwgdmFyaXVzIHZlbGl0LicsXHJcblx0XHRhdmF0YXI6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvYXZhdGFyLmpwZylgLFxyXG5cdFx0bmFtZTogJ0pvaG4gRG9lJyxcclxuXHRcdHBvc2l0aW9uOiAnV2ViIGRldmVsb3BlcicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgY29uc2VxdWF0IGJpYmVuZHVtIHR1cnBpcyBzaXQgYW1ldCBwcmV0aXVtLiBOdW5jIHV0IGR1aSBvcm5hcmUsIHZ1bHB1dGF0ZSBhdWd1ZSBzZWQsIHZhcml1cyB2ZWxpdC4nLFxyXG5cdFx0YXZhdGFyOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2F2YXRhci5qcGcpYCxcclxuXHRcdG5hbWU6ICdKb2huIERvZScsXHJcblx0XHRwb3NpdGlvbjogJ1dlYiBkZXZlbG9wZXInLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGNvbnNlcXVhdCBiaWJlbmR1bSB0dXJwaXMgc2l0IGFtZXQgcHJldGl1bS4gTnVuYyB1dCBkdWkgb3JuYXJlLCB2dWxwdXRhdGUgYXVndWUgc2VkLCB2YXJpdXMgdmVsaXQuJyxcclxuXHRcdGF2YXRhcjogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9hdmF0YXIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHR9LFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgd29ya3MgPSBbXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd2F0Y2guanBnKWAsXHJcblx0XHRuYW1lOiAnU21hcnQgV2F0Y2gnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aW1hZ2U6IGB1cmwoJHtQVUJMSUNfVVJMfS9pbWFnZXMvd2F0Y2gyLmpwZylgLFxyXG5cdFx0bmFtZTogJ1VYIERlc2lnbicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9oZWFkcGhvbmUuanBnKWAsXHJcblx0XHRuYW1lOiAnTW9ja3VwJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL21hYy5qcGcpYCxcclxuXHRcdG5hbWU6ICdUaGUgVUkgRGVzaWduJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3dhdGNoMy5qcGcpYCxcclxuXHRcdG5hbWU6ICdPbmUgUHJvZHVjdCcsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9mbGFtaW5nb3MuanBnKWAsXHJcblx0XHRuYW1lOiAnVGhlIFVYIERlc2lnbnMnLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBwZXJrcyA9IFtcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWJhciBpY29uLWdyZWVuIG1iLWRlZmF1bHQnLFxyXG5cdFx0aGVhZGluZzogJ0V4Y2VsbGVudCBEZXNpZ24nLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdWaXZhbXVzIGF0IHZlaGljdWxhIGp1c3RvIGhlbmRyZXJpdCBldWlzbW9kIGFudGUuIFN1c3BlbmRpc3NlIGVnZXN0YXMgZWZmaWNpdHVyIGV1aXNtb2QuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGljb246ICdmYXMgZmEtcGVuIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnRmFzdCBSZXNwb25zZScsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS11c2VyLWZyaWVuZHMgaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdUaW1lIFNhdmluZycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWNvbjogJ2ZhcyBmYS1nbG9iZS1ldXJvcGUgaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdQZXJzb25hbCBTdXBwb3J0JyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFyIGZhLWJvb2ttYXJrIGljb24tZ3JlZW4gbWItZGVmYXVsdCcsXHJcblx0XHRoZWFkaW5nOiAnQmVzdCBRdWFsaXR5JyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnVml2YW11cyBhdCB2ZWhpY3VsYSBqdXN0byBoZW5kcmVyaXQgZXVpc21vZCBhbnRlLiBTdXNwZW5kaXNzZSBlZ2VzdGFzIGVmZmljaXR1ciBldWlzbW9kLicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiAnZmFzIGZhLWNoYXJ0LWFyZWEgaWNvbi1ncmVlbiBtYi1kZWZhdWx0JyxcclxuXHRcdGhlYWRpbmc6ICdQZXJmZWN0IFNvbHV0aW9ucycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J1ZpdmFtdXMgYXQgdmVoaWN1bGEganVzdG8gaGVuZHJlcml0IGV1aXNtb2QgYW50ZS4gU3VzcGVuZGlzc2UgZWdlc3RhcyBlZmZpY2l0dXIgZXVpc21vZC4nLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBuZXdzID0gW1xyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL3ZyLmpwZylgLFxyXG5cdFx0aGVhZGluZzpcclxuXHRcdFx0J0NvdWxkIHRoaXMgVlIgc2tldGNoaW5nIHRvb2wgYmUgY29taW5nIG9mIGFnZSBmb3IgZGVzaWduZXJzIGluIHRoZSBmdXR1cmU/JyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0YnV0dG9uOiAnIycsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy9kZXNpZ24uanBnKWAsXHJcblx0XHRoZWFkaW5nOlxyXG5cdFx0XHQnOCBDaXRpZXMgVGhhdCBTaG93IFlvdSBXaGF0IFRoZSBGdXR1cmUgV2lsbCBMb29rIExpa2UgKElubm92YXRpdmUgSWRlYXMpJyxcclxuXHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHQnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTWFlY2VuYXMgc2NlbGVyaXNxdWUgb3JuYXJlIHRpbmNpZHVudC4uLi4nLFxyXG5cdFx0YnV0dG9uOiAnIycsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpbWFnZTogYHVybCgke1BVQkxJQ19VUkx9L2ltYWdlcy90aGFua3MuanBnKWAsXHJcblx0XHRoZWFkaW5nOiAnMTUgR2lmdCBJZGVhcyBmb3IgTW9tIGFuZCBEYWQuIFdoZXJldmVyIFRoZXkgQXJlIFRoaXMgWWVhcicsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1hZWNlbmFzIHNjZWxlcmlzcXVlIG9ybmFyZSB0aW5jaWR1bnQuLi4uJyxcclxuXHRcdGJ1dHRvbjogJyMnLFxyXG5cdH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCB0ZWFtID0gW1xyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjEuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2stZicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnRhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczpsaW5rZWRpbi5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtbGlua2VkaW4taW4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjIuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2stZicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnRhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczpsaW5rZWRpbi5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtbGlua2VkaW4taW4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjMuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2stZicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnRhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczpsaW5rZWRpbi5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtbGlua2VkaW4taW4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjQuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2stZicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnRhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczpsaW5rZWRpbi5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtbGlua2VkaW4taW4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGltYWdlOiBgdXJsKCR7UFVCTElDX1VSTH0vaW1hZ2VzL2Fib3V0L21lbWJlcjUuanBnKWAsXHJcblx0XHRuYW1lOiAnSm9obiBEb2UnLFxyXG5cdFx0cG9zaXRpb246ICdXZWIgZGV2ZWxvcGVyJyxcclxuXHRcdHNvY2lhbE1lZGlhOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtZmFjZWJvb2stZicsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsaW5rOiAnaHR0cHM6Ly9pbnRhZ3JhbS5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtaW5zdGFncmFtJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxpbms6ICdodHRwczpsaW5rZWRpbi5jb20nLFxyXG5cdFx0XHRcdGljb246ICdmYWIgZmEtbGlua2VkaW4taW4nLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5dO1xyXG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPTYwMTAzLHA9NjAxMDY7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztleHBvcnRzLlN0cmljdE1vZGU9NjAxMDg7ZXhwb3J0cy5Qcm9maWxlcj02MDExNDt2YXIgcT02MDEwOSxyPTYwMTEwLHQ9NjAxMTI7ZXhwb3J0cy5TdXNwZW5zZT02MDExMzt2YXIgdT02MDExNSx2PTYwMTE2O1xuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcil7dmFyIHc9U3ltYm9sLmZvcjtuPXcoXCJyZWFjdC5lbGVtZW50XCIpO3A9dyhcInJlYWN0LnBvcnRhbFwiKTtleHBvcnRzLkZyYWdtZW50PXcoXCJyZWFjdC5mcmFnbWVudFwiKTtleHBvcnRzLlN0cmljdE1vZGU9dyhcInJlYWN0LnN0cmljdF9tb2RlXCIpO2V4cG9ydHMuUHJvZmlsZXI9dyhcInJlYWN0LnByb2ZpbGVyXCIpO3E9dyhcInJlYWN0LnByb3ZpZGVyXCIpO3I9dyhcInJlYWN0LmNvbnRleHRcIik7dD13KFwicmVhY3QuZm9yd2FyZF9yZWZcIik7ZXhwb3J0cy5TdXNwZW5zZT13KFwicmVhY3Quc3VzcGVuc2VcIik7dT13KFwicmVhY3QubWVtb1wiKTt2PXcoXCJyZWFjdC5sYXp5XCIpfXZhciB4PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtcbmZ1bmN0aW9uIHkoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1mdW5jdGlvbiB6KGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifVxudmFyIEE9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEI9e307ZnVuY3Rpb24gQyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfUMucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307Qy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKHooODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0MucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O1xuZnVuY3Rpb24gRCgpe31ELnByb3RvdHlwZT1DLnByb3RvdHlwZTtmdW5jdGlvbiBFKGEsYixjKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUI7dGhpcy51cGRhdGVyPWN8fEF9dmFyIEY9RS5wcm90b3R5cGU9bmV3IEQ7Ri5jb25zdHJ1Y3Rvcj1FO2woRixDLnByb3RvdHlwZSk7Ri5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsYyl7dmFyIGUsZD17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGUgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilILmNhbGwoYixlKSYmIUkuaGFzT3duUHJvcGVydHkoZSkmJihkW2VdPWJbZV0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZylkLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZSBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09ZFtlXSYmKGRbZV09Z1tlXSk7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19XG5mdW5jdGlvbiBLKGEsYil7cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBMKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ufWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgTT0vXFwvKy9nO2Z1bmN0aW9uIE4oYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBPKGEsYixjLGUsZCl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIG46Y2FzZSBwOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxkPWQoaCksYT1cIlwiPT09ZT9cIi5cIitOKGgsMCk6ZSxBcnJheS5pc0FycmF5KGQpPyhjPVwiXCIsbnVsbCE9YSYmKGM9YS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpLE8oZCxiLGMsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1kJiYoTChkKSYmKGQ9SyhkLGMrKCFkLmtleXx8aCYmaC5rZXk9PT1kLmtleT9cIlwiOihcIlwiK2Qua2V5KS5yZXBsYWNlKE0sXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goZCkpLDE7aD0wO2U9XCJcIj09PWU/XCIuXCI6ZStcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgZz1cbjA7ZzxhLmxlbmd0aDtnKyspe2s9YVtnXTt2YXIgZj1lK04oayxnKTtoKz1PKGssYixjLGYsZCl9ZWxzZSBpZihmPXkoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWUrTihrLGcrKyksaCs9TyhrLGIsYyxmLGQpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1cIlwiK2EsRXJyb3IoeigzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7cmV0dXJuIGh9ZnVuY3Rpb24gUChhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXSxkPTA7TyhhLGUsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoYyxhLGQrKyl9KTtyZXR1cm4gZX1cbmZ1bmN0aW9uIFEoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTthLl9zdGF0dXM9MDthLl9yZXN1bHQ9YjtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdDt0aHJvdyBhLl9yZXN1bHQ7fXZhciBSPXtjdXJyZW50Om51bGx9O2Z1bmN0aW9uIFMoKXt2YXIgYT1SLmN1cnJlbnQ7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeigzMjEpKTtyZXR1cm4gYX12YXIgVD17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpSLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOnt0cmFuc2l0aW9uOjB9LFJlYWN0Q3VycmVudE93bmVyOkcsSXNTb21lUmVuZGVyZXJBY3Rpbmc6e2N1cnJlbnQ6ITF9LGFzc2lnbjpsfTtcbmV4cG9ydHMuQ2hpbGRyZW49e21hcDpQLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe1AoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtQKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUChhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXRocm93IEVycm9yKHooMTQzKSk7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1DO2V4cG9ydHMuUHVyZUNvbXBvbmVudD1FO2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcih6KDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1HLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUguY2FsbChiLGYpJiYhSS5oYXNPd25Qcm9wZXJ0eShmKSYmKGVbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7Zm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bix0eXBlOmEudHlwZSxcbmtleTpkLHJlZjprLHByb3BzOmUsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjpyLF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6cSxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9SjtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9Si5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TDtcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlF9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6dSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlQ29udGV4dChhLGIpfTtleHBvcnRzLnVzZURlYnVnVmFsdWU9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudXNlRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGMpfTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VSZWR1Y2VyKGEsYixjKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFMoKS51c2VTdGF0ZShhKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInByb2dyZXNzIiwiUHJvZ3Jlc3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjbGFzc2VzIiwibmFtZSIsInBlcmNlbnRhZ2UiLCJiYXNlIiwiUFVCTElDX1VSTCIsIm5hdiIsImxvZ28iLCJtZW51IiwibGluayIsInRleHQiLCJjb250YWN0Iiwic2VhcmNoIiwic2VydmljZXMiLCJpY29uIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiY3VzdG9tZXJzIiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicHJvamVjdEJhc2UiLCJwZXJrcyIsIlBlcmtzIiwicGVyayIsInRlYW0iLCJUZWFtIiwibWVtYmVyIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2UiLCJwb3NpdGlvbiIsInNvY2lhbE1lZGlhIiwia2V5IiwiYWJvdXQiLCJBYm91dFBhZ2UiLCJoZWFkZXIiLCJza2lsbHMiLCJ2aWRlbyIsImJ1dHRvbiIsImhvbWUiLCJ3b3JrcyIsInRlc3RpbW9uaWFscyIsIm91clNlcnZpY2VzIiwiY29udGVudCIsImNvbHVtbnMiLCJjb2x1bW4xIiwiYnV0dG9ucyIsImJ1dHRvbjEiLCJidXR0b24yIiwiY29sdW1uMiIsImNvbHVtbjMiLCJmb3JtIiwiZm9vdGVyIiwiaW5xdWlyeSIsIm1lbnVzIiwibWVudTEiLCJtZW51MiIsImJ1dHRvbjMiLCJidXR0b240IiwibWVudTMiLCJtZW51NCIsImNvcHlyaWdodCIsImRldGFpbHMiLCJhdmF0YXIiLCJuZXdzIl0sInNvdXJjZVJvb3QiOiIifQ==