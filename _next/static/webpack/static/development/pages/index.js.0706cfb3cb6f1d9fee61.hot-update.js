webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/lib/particles.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! earthbound-battle-backgrounds */ "./node_modules/earthbound-battle-backgrounds/dist/index.js");
/* harmony import */ var earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "C:\\Users\\ninjabou\\ninjabouSite\\ninjabou.github.io\\ninjabou-site\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var potentialLayers = [{
  layer1: 260,
  layer2: 0
}, {
  layer1: 6,
  layer2: 0
}, {
  layer1: 81,
  layer2: 0
}, {
  layer1: 180,
  layer2: 179
}, {
  layer1: 219,
  layer2: 218
}, {
  layer1: 156,
  layer2: 0
}, {
  layer1: 20,
  layer2: 0
}, {
  layer1: 199,
  layer2: 0
}, {
  layer1: 270,
  layer2: 0
}];

var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var canvas = this.refs.background;
      var ctx = canvas.getContext("2d");
      var layer1 = new earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__["BackgroundLayer"](potentialLayers[Math.floor(Math.random() * potentialLayers.length)].layer1);
      var layer2 = new earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__["BackgroundLayer"](potentialLayers[Math.floor(Math.random() * potentialLayers.length)].layer2);
      var engine = new earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__["Engine"]([layer1, layer2], {
        canvas: canvas
      });
      engine.animate();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Ninjabou's Treasure Cave"), __jsx("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "favicon.ico",
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx("canvas", {
        style: {
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: '1'
        },
        ref: "background",
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '2'
        },
        className: "jsx-2867900497" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(react_animated_css__WEBPACK_IMPORTED_MODULE_10__["Animated"], {
        animationIn: "fadeInUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundColor: '#fff',
          border: '5px solid #0d0d0d',
          boxShadow: "5px 5px 0px #0d0d0d",
          width: '650px',
          height: '50%',
          margin: 'auto',
          marginTop: '12%'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          margin: '0 auto'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("img", {
        src: "https://pbs.twimg.com/profile_images/1096893530671321091/H_2cS88j_400x400.png",
        style: {
          margin: '10px',
          width: '10%',
          height: '10%',
          borderRadius: '100%',
          border: '5px solid #0d0d0d'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '5px'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'left',
          fontSize: '24px',
          marginBottom: '0px'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Ninjabou's Secret Treasure Cave")), __jsx("p", {
        style: {
          textAlign: 'left',
          marginTop: '0px'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Host to the neighbor's cat when no one knows where it is"))), __jsx("p", {
        style: {
          textAlign: 'left',
          marginLeft: '25%',
          marginRight: '25%'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Hobbyist programmer/digital artist. Currently creating a number of small projects. Here's some links:"), __jsx("a", {
        href: "https://twitter.com/ninjabou1",
        style: {
          textDecoration: 'none',
          color: '#fc03f8'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Twitter"))), __jsx("a", {
        href: "https://top.gg/bot/618575214938423306",
        style: {
          textDecoration: 'none',
          color: '#fc03f8'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "TimeZone Bot"))), __jsx("a", {
        href: "https://github.com/ninjabou",
        style: {
          textDecoration: 'none',
          color: '#fc03f8'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Github")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2867900497",
        __self: this
      }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-2867900497{width:100%;color:#000;}.title.jsx-2867900497{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-2867900497,.description.jsx-2867900497{text-align:center;}.row.jsx-2867900497{width:50%;margin-left:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2867900497{margin-top:25%;padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;background-color:#ffffff;}.card.jsx-2867900497:hover{border-color:#067df7;}.card.jsx-2867900497 h3.jsx-2867900497{margin:0;color:#067df7;font-size:18px;}.card.jsx-2867900497 p.jsx-2867900497{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmluamFib3VcXG5pbmphYm91U2l0ZVxcbmluamFib3UuZ2l0aHViLmlvXFxuaW5qYWJvdS1zaXRlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUlvQixBQUdzQixBQUtFLEFBSUYsQUFRUyxBQUdSLEFBUUssQUFVTSxBQUdaLEFBS0EsU0E1Q2MsQUFRWixBQWdDRyxBQUtHLENBMUJBLENBZk4sSUF1QlksR0FYekIsRUFQbUIsQ0E0Qm5CLENBaENBLENBb0NpQixHQUtBLENBMUJHLFVBVkQsQ0FrQkwsQUFjZCxHQUthLElBMUJFLEtBUUcsRUFtQmxCLEVBckNpQixZQW1CTSxHQWxCdkIsMEJBWEEscUJBOEJnQixHQVRLLFdBVU0seUJBQ0EseUJBQzNCLFFBWCtCLDJIQUMvQiIsImZpbGUiOiJDOlxcVXNlcnNcXG5pbmphYm91XFxuaW5qYWJvdVNpdGVcXG5pbmphYm91LmdpdGh1Yi5pb1xcbmluamFib3Utc2l0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJztcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gJ3JlYWN0LWFuaW1hdGVkLWNzcyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTGF5ZXIsIEVuZ2luZSB9IGZyb20gJ2VhcnRoYm91bmQtYmF0dGxlLWJhY2tncm91bmRzJztcblxuY29uc3QgcG90ZW50aWFsTGF5ZXJzID0gW1xuICB7XG4gICAgbGF5ZXIxOiAyNjAsXG4gICAgbGF5ZXIyOiAwXG4gIH0sXG4gIHtcbiAgICBsYXllcjE6IDYsXG4gICAgbGF5ZXIyOiAwXG4gIH0sXG4gIHtcbiAgICBsYXllcjE6IDgxLFxuICAgIGxheWVyMjogMFxuICB9LFxuICB7XG4gICAgbGF5ZXIxOiAxODAsXG4gICAgbGF5ZXIyOiAxNzlcbiAgfSxcbiAge1xuICAgIGxheWVyMTogMjE5LFxuICAgIGxheWVyMjogMjE4XG4gIH0sXG4gIHtcbiAgICBsYXllcjE6IDE1NixcbiAgICBsYXllcjI6IDBcbiAgfSxcbiAge1xuICAgIGxheWVyMTogMjAsXG4gICAgbGF5ZXIyOiAwXG4gIH0sXG4gIHtcbiAgICBsYXllcjE6IDE5OSxcbiAgICBsYXllcjI6IDBcbiAgfSxcbiAge1xuICAgIGxheWVyMTogMjcwLFxuICAgIGxheWVyMjogMFxuICB9LFxuXVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5yZWZzLmJhY2tncm91bmQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB2YXIgbGF5ZXIxID0gbmV3IEJhY2tncm91bmRMYXllcihwb3RlbnRpYWxMYXllcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG90ZW50aWFsTGF5ZXJzLmxlbmd0aCldLmxheWVyMSk7XG4gICAgdmFyIGxheWVyMiA9IG5ldyBCYWNrZ3JvdW5kTGF5ZXIocG90ZW50aWFsTGF5ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbExheWVycy5sZW5ndGgpXS5sYXllcjIpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoW2xheWVyMSwgbGF5ZXIyXSwge1xuICAgICAgY2FudmFzOiBjYW52YXNcbiAgICB9KTtcbiAgICBlbmdpbmUuYW5pbWF0ZSgpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk5pbmphYm91J3MgVHJlYXN1cmUgQ2F2ZTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPSdmYXZpY29uLmljbycgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FuaW1hdGUuY3NzLzMuNS4yL2FuaW1hdGUubWluLmNzc1wiLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxjYW52YXMgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScsIHpJbmRleDogJzEnfX0gcmVmPSdiYWNrZ3JvdW5kJz5cbiAgICAgICAgICB7LyogPFBhcnRpY2xlc1xuICAgICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnIzAwMDAwMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6ICcyMDAnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgIDwvY2FudmFzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIiBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6ICcyJ319PlxuICAgICAgICAgIDxBbmltYXRlZCBhbmltYXRpb25Jbj1cImZhZGVJblVwXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIGJvcmRlcjogJzVweCBzb2xpZCAjMGQwZDBkJywgYm94U2hhZG93OiBcIjVweCA1cHggMHB4ICMwZDBkMGRcIiwgd2lkdGg6ICc2NTBweCcsIGhlaWdodDogJzUwJScsIG1hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6ICcxMiUnfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW46ICcwIGF1dG8nfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMDk2ODkzNTMwNjcxMzIxMDkxL0hfMmNTODhqXzQwMHg0MDAucG5nJyBzdHlsZT17e21hcmdpbjogJzEwcHgnLCB3aWR0aDogJzEwJScsIGhlaWdodDogJzEwJScsIGJvcmRlclJhZGl1czogJzEwMCUnLCBib3JkZXI6ICc1cHggc29saWQgIzBkMGQwZCd9fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICc1cHgnfX0+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzI0cHgnLCBtYXJnaW5Cb3R0b206ICcwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgIE5pbmphYm91J3MgU2VjcmV0IFRyZWFzdXJlIENhdmVcbiAgICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luVG9wOiAnMHB4J319PlxuICAgICAgICAgICAgICAgICAgICBIb3N0IHRvIHRoZSBuZWlnaGJvcidzIGNhdCB3aGVuIG5vIG9uZSBrbm93cyB3aGVyZSBpdCBpc1xuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luTGVmdDogJzI1JScsIG1hcmdpblJpZ2h0OiAnMjUlJ319PlxuICAgICAgICAgICAgICAgIEhvYmJ5aXN0IHByb2dyYW1tZXIvZGlnaXRhbCBhcnRpc3QuIEN1cnJlbnRseSBjcmVhdGluZyBhIG51bWJlciBvZiBzbWFsbCBwcm9qZWN0cy4gSGVyZSdzIHNvbWUgbGlua3M6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly90d2l0dGVyLmNvbS9uaW5qYWJvdTEnIHN0eWxlPXt7dGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6ICcjZmMwM2Y4J319PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly90b3AuZ2cvYm90LzYxODU3NTIxNDkzODQyMzMwNicgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJyNmYzAzZjgnfX0+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgVGltZVpvbmUgQm90XG4gICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9uaW5qYWJvdScgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJyNmYzAzZjgnfX0+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgR2l0aHViXG4gICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0FuaW1hdGVkPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgOmdsb2JhbChib2R5KSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxuICAgICAgICAgICAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\ninjabou\\\\ninjabouSite\\\\ninjabou.github.io\\\\ninjabou-site\\\\pages\\\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0706cfb3cb6f1d9fee61.hot-update.js.map