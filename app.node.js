module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(38);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(10);
    }, '/500': function _() {
      return __webpack_require__(11);
    }, '/about': function about() {
      return __webpack_require__(12);
    }, '/': function _() {
      return __webpack_require__(13);
    }, '/uni/kokubun': function uniKokubun() {
      return __webpack_require__(5);
    }, '/uni/kokubun': function uniKokubun() {
      return __webpack_require__(14);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(16);

  var _coreLocation = __webpack_require__(4);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(18);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(19);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(20);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var data = [{
    sorting: '教養原論',
    subject: '',
    requiredCredits: 16
  }, {
    sorting: '外国語科目',
    subject: '英語リーディングⅠ',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '英語リーディングⅡ',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '英語オーラルⅠ',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '英語オーラルⅡ',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '独語IA，仏語IA，中国語IA，ロシア語IA',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '独語IB，仏語IB，中国語IB，ロシア語IB',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '独語IIA(又はSA)，仏語IIA(又はSA)，中国語IIA(又はSA)，ロシア語IIA',
    requiredCredits: 1
  }, {
    sorting: '外国語科目',
    subject: '独語IIB(又はSB)，仏語IIB(又はSB)，中国語IIB(又はSB)，ロシア語IIB',
    requiredCredits: 1
  }, {
    sorting: '健康・スポーツ科学',
    subject: '健康・スポーツ科学実習I',
    requiredCredits: 1
  }, {
    sorting: '情報科目',
    subject: '情報基礎',
    requiredCredits: 1
  }, {
    sorting: '本学部専門科目  必修科目',
    subject: '基礎ゼミ',
    requiredCredits: 2
  }, {
    sorting: '本学部専門科目  必修科目',
    subject: '専門基礎英語(文章表現，会話)I・II，情報科学概論，情報科学演習I',
    requiredCredits: 6
  }, {
    sorting: '本学部専門科目  必修科目',
    subject: '卒論演習',
    requiredCredits: 2
  }, {
    sorting: '本学部専門科目  必修科目',
    subject: '卒業研究',
    requiredCredits: 10
  }, {
    sorting: '本学部専門科目 選択必修科目',
    subject: '各講座開講の「概論｣',
    requiredCredits: 4
  }, {
    sorting: '本学部専門科目 選択必修科目',
    subject: '所属講座開講の講義科目',
    requiredCredits: 10
  }, {
    sorting: '本学部専門科目 選択必修科目',
    subject: '所属講座開講の専門演習A(2年次前期)',
    requiredCredits: 2
  }, {
    sorting: '本学部専門科目 選択必修科目',
    subject: '所属講座開講の専門演習B(2年次後期，3年次前期及び後期に各1演習)',
    requiredCredits: 6
  }, {
    sorting: '本学部専門科目 選択必修科目',
    subject: '外国語演習',
    requiredCredits: 2
  }, {
    sorting: '本学部専門科目 学部選択科目',
    subject: '本学部が開設する授業科目から',
    requiredCredits: 50
  }, {
    sorting: '自由選択科目',
    subject: '本学部専門科目，他学部授業科目，全学共通授業科目及び資格免許のための科目から。(ただし，資格免許のための科目のうち，教職に関する科目，英米文学概論，日本国憲法及び博物館実習は除く。)',
    requiredCredits: 16
  }];

  exports['default'] = data;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("react-social-buttons");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(15);

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(17);

  var _Link = __webpack_require__(3);

  var _Link2 = _interopRequireDefault(_Link);

  var _materialUiLibAppBar = __webpack_require__(21);

  var _materialUiLibAppBar2 = _interopRequireDefault(_materialUiLibAppBar);

  var _materialUiLibIconButton = __webpack_require__(24);

  var _materialUiLibIconButton2 = _interopRequireDefault(_materialUiLibIconButton);

  var _materialUiLibSvgIconsNavigationClose = __webpack_require__(29);

  var _materialUiLibSvgIconsNavigationClose2 = _interopRequireDefault(_materialUiLibSvgIconsNavigationClose);

  var _materialUiLibMenusIconMenu = __webpack_require__(27);

  var _materialUiLibMenusIconMenu2 = _interopRequireDefault(_materialUiLibMenusIconMenu);

  var _materialUiLibSvgIconsNavigationMoreVert = __webpack_require__(30);

  var _materialUiLibSvgIconsNavigationMoreVert2 = _interopRequireDefault(_materialUiLibSvgIconsNavigationMoreVert);

  var _materialUiLibMenusMenuItem = __webpack_require__(28);

  var _materialUiLibMenusMenuItem2 = _interopRequireDefault(_materialUiLibMenusMenuItem);

  var _reactTapEventPlugin = __webpack_require__(39);

  var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

  // Needed for onTouchTap
  // Can go away when react 1.0 release
  // Check this repo:
  // https://github.com/zilverline/react-tap-event-plugin
  (0, _reactTapEventPlugin2['default'])();

  function Navigation() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_materialUiLibAppBar2['default'], {
        title: '単位チェッカー β',
        iconElementLeft: _react2['default'].createElement(
          _materialUiLibIconButton2['default'],
          null,
          _react2['default'].createElement(_materialUiLibSvgIconsNavigationClose2['default'], null)
        ),
        iconElementRight: _react2['default'].createElement(
          _materialUiLibMenusIconMenu2['default'],
          {
            iconButtonElement: _react2['default'].createElement(
              _materialUiLibIconButton2['default'],
              null,
              _react2['default'].createElement(_materialUiLibSvgIconsNavigationMoreVert2['default'], null)
            ),
            targetOrigin: { horizontal: 'right', vertical: 'top' },
            anchorOrigin: { horizontal: 'right', vertical: 'top' }
          },
          _react2['default'].createElement(_materialUiLibMenusMenuItem2['default'], { href: '/', primaryText: 'Home' }),
          _react2['default'].createElement(_materialUiLibMenusMenuItem2['default'], { href: '/about', primaryText: 'About' }),
          _react2['default'].createElement(_materialUiLibMenusMenuItem2['default'], { href: 'http://uraway.hatenablog.com/entry/2016/01/29/213008', primaryText: 'Website' })
        )
      })
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _materialUiLibFlatButton = __webpack_require__(22);

  var _materialUiLibFlatButton2 = _interopRequireDefault(_materialUiLibFlatButton);

  var _materialUiLibFontIcon = __webpack_require__(23);

  var _materialUiLibFontIcon2 = _interopRequireDefault(_materialUiLibFontIcon);

  var _reactSocialButtons = __webpack_require__(7);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'About Me'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'MITライセンスのアプリケーションです｡'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'PC推奨ですが､ スマホの場合は横向きにすると少し見やすくなります｡'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'フィードバック､ 大学･学部追加のリクエストは',
            _react2['default'].createElement(
              'a',
              { href: 'https://twitter.com/uraway_' },
              'こちら'
            ),
            'まで｡ もしくは ',
            _react2['default'].createElement(_reactSocialButtons.TwitterButton, null),
            ' でツイートしてください｡'
          ),
          _react2['default'].createElement(_materialUiLibFlatButton2['default'], {
            label: 'GitHub Link',
            linkButton: true,
            href: 'https://github.com/uraway/CreditChecking',
            secondary: true,
            icon: _react2['default'].createElement(_materialUiLibFontIcon2['default'], { className: 'muidocs-icon-custom-github' })
          })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(3);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _materialUiLibListsList = __webpack_require__(25);

  var _materialUiLibListsList2 = _interopRequireDefault(_materialUiLibListsList);

  var _materialUiLibListsListItem = __webpack_require__(26);

  var _materialUiLibListsListItem2 = _interopRequireDefault(_materialUiLibListsListItem);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          _materialUiLibListsList2['default'],
          null,
          _react2['default'].createElement(_materialUiLibListsListItem2['default'], {
            primaryText: '神戸大学 国際文化学部',
            href: '/uni/kokubun'
          })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _materialUiLibTableTable = __webpack_require__(31);

  var _materialUiLibTableTable2 = _interopRequireDefault(_materialUiLibTableTable);

  var _materialUiLibTableTableHeaderColumn = __webpack_require__(35);

  var _materialUiLibTableTableHeaderColumn2 = _interopRequireDefault(_materialUiLibTableTableHeaderColumn);

  var _materialUiLibTableTableRow = __webpack_require__(36);

  var _materialUiLibTableTableRow2 = _interopRequireDefault(_materialUiLibTableTableRow);

  var _materialUiLibTableTableHeader = __webpack_require__(34);

  var _materialUiLibTableTableHeader2 = _interopRequireDefault(_materialUiLibTableTableHeader);

  var _materialUiLibTableTableRowColumn = __webpack_require__(37);

  var _materialUiLibTableTableRowColumn2 = _interopRequireDefault(_materialUiLibTableTableRowColumn);

  var _materialUiLibTableTableBody = __webpack_require__(32);

  var _materialUiLibTableTableBody2 = _interopRequireDefault(_materialUiLibTableTableBody);

  var _materialUiLibTableTableFooter = __webpack_require__(33);

  var _materialUiLibTableTableFooter2 = _interopRequireDefault(_materialUiLibTableTableFooter);

  var _reactSocialButtons = __webpack_require__(7);

  // import table data

  var _kokubunJs = __webpack_require__(5);

  var _kokubunJs2 = _interopRequireDefault(_kokubunJs);

  var App = (function (_Component) {
    _inherits(App, _Component);

    function App(props) {
      _classCallCheck(this, App);

      _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
    }

    _createClass(App, [{
      key: '_onRowSelection',
      value: function _onRowSelection(rowNumber) {
        var total = 0;

        for (var i in rowNumber) {
          var value = rowNumber[i];
          total = total + _kokubunJs2['default'][value].requiredCredits;
        }

        var totalCredits = document.getElementById('totalCredits');
        totalCredits.textContent = total;

        var remainingCredits = document.getElementById('remainingCredits');
        remainingCredits.textContent = 136 - total;
      }
    }, {
      key: 'render',
      value: function render() {
        var url = "https://creditchecking.firebaseapp.com";

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement(
              'a',
              { className: 'Navigation-link', href: 'https://kym.kobe-u.ac.jp/kobe-u/campus', target: '_blank' },
              'うりぼーネット'
            ),
            'で修得単位を確認する'
          ),
          _react2['default'].createElement(
            _materialUiLibTableTable2['default'],
            {
              height: '500px',
              fixedHeader: true,
              fixedFooter: true,
              selectable: true,
              multiSelectable: true,
              onRowSelection: this._onRowSelection.bind(this)
            },
            _react2['default'].createElement(
              _materialUiLibTableTableHeader2['default'],
              { displaySelectAll: false },
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(
                  _materialUiLibTableTableHeaderColumn2['default'],
                  { colSpan: '3', style: { textAlign: 'center' } },
                  '神戸大学 国際文化学部'
                )
              ),
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(
                  _materialUiLibTableTableHeaderColumn2['default'],
                  null,
                  '授業区分'
                ),
                _react2['default'].createElement(
                  _materialUiLibTableTableHeaderColumn2['default'],
                  null,
                  '科目'
                ),
                _react2['default'].createElement(
                  _materialUiLibTableTableHeaderColumn2['default'],
                  null,
                  '必要修得単位数'
                )
              )
            ),
            _react2['default'].createElement(
              _materialUiLibTableTableBody2['default'],
              {
                deselectOnClickaway: false,
                stripedRows: false
              },
              _kokubunJs2['default'].map(function (row) {
                return _react2['default'].createElement(
                  _materialUiLibTableTableRow2['default'],
                  { selected: row.selected },
                  _react2['default'].createElement(
                    _materialUiLibTableTableRowColumn2['default'],
                    null,
                    row.sorting
                  ),
                  _react2['default'].createElement(
                    _materialUiLibTableTableRowColumn2['default'],
                    null,
                    row.subject
                  ),
                  _react2['default'].createElement(
                    _materialUiLibTableTableRowColumn2['default'],
                    null,
                    row.requiredCredits
                  )
                );
              })
            ),
            _react2['default'].createElement(
              _materialUiLibTableTableFooter2['default'],
              null,
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(
                  _materialUiLibTableTableRowColumn2['default'],
                  null,
                  '合計必要修得単位数'
                ),
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], null),
                _react2['default'].createElement(
                  _materialUiLibTableTableRowColumn2['default'],
                  null,
                  '136'
                )
              ),
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(
                  _materialUiLibTableTableRowColumn2['default'],
                  null,
                  'あなたの合計修得単位数'
                ),
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], null),
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], { id: 'totalCredits' })
              ),
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(
                  _materialUiLibTableTableRowColumn2['default'],
                  null,
                  'あなたの残り必要修得単位数'
                ),
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], null),
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], { id: 'remainingCredits', style: { color: 'red' } })
              ),
              _react2['default'].createElement(
                _materialUiLibTableTableRow2['default'],
                null,
                _react2['default'].createElement(_materialUiLibTableTableRowColumn2['default'], { colSpan: '3', style: { textAlign: "center" } })
              )
            )
          ),
          _react2['default'].createElement(_reactSocialButtons.FacebookLikeButton, { url: url }),
          _react2['default'].createElement(_reactSocialButtons.TwitterButton, { url: url })
        );
      }
    }]);

    return App;
  })(_react.Component);

  exports['default'] = App;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Navigation-item {\n  padding: 0 2em;\n}\n\n.Navigation-link {\n  padding: 0.5em 1em;\n  color: #21ce99;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #21ce99;\n  color: #333;\n}\n", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/app-bar");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/flat-button");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/font-icon");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/icon-button");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/lists/list");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/lists/list-item");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/menus/icon-menu");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/menus/menu-item");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/svg-icons/navigation/close");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/svg-icons/navigation/more-vert");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-body");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-footer");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-header");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-header-column");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-row");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("material-ui/lib/table/table-row-column");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-tap-event-plugin");

/***/ }
/******/ ]);