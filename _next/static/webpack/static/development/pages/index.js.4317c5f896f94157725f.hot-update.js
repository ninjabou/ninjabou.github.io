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






var potentialLayers = {
  pairs: [{
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
  }]
};

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
      var layer1 = new earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__["BackgroundLayer"](potentialLayers.pairs[Math.floor(Math.random(potentialLayers.pairs.length))].layer1);
      var layer2 = new earthbound_battle_backgrounds__WEBPACK_IMPORTED_MODULE_11__["BackgroundLayer"](potentialLayers.pairs[Math.floor(Math.random(potentialLayers.pairs.length))].layer2);
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
          lineNumber: 63
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Ninjabou's Treasure Cave"), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
          lineNumber: 70
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
          lineNumber: 92
        },
        __self: this
      }, __jsx(react_animated_css__WEBPACK_IMPORTED_MODULE_10__["Animated"], {
        animationIn: "fadeInUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundColor: '#fff',
          border: '5px solid #0d0d0d',
          boxShadow: "5px 5px 0px #0d0d0d",
          width: '35%',
          height: '50%',
          margin: 'auto',
          marginTop: '12%'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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
          lineNumber: 95
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
          lineNumber: 96
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
          lineNumber: 97
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
          lineNumber: 98
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
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
          lineNumber: 103
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
          lineNumber: 108
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
          lineNumber: 111
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
          lineNumber: 118
        },
        __self: this
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("b", {
        className: "jsx-2867900497",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "TimeZone Bot")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2867900497",
        __self: this
      }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}.hero.jsx-2867900497{width:100%;color:#000;}.title.jsx-2867900497{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-2867900497,.description.jsx-2867900497{text-align:center;}.row.jsx-2867900497{width:50%;margin-left:auto;margin-right:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2867900497{margin-top:25%;padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;background-color:#ffffff;}.card.jsx-2867900497:hover{border-color:#067df7;}.card.jsx-2867900497 h3.jsx-2867900497{margin:0;color:#067df7;font-size:18px;}.card.jsx-2867900497 p.jsx-2867900497{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmluamFib3VcXG5pbmphYm91U2l0ZVxcbmluamFib3UuZ2l0aHViLmlvXFxuaW5qYWJvdS1zaXRlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lvQixBQUdzQixBQUtFLEFBSUYsQUFRUyxBQUdSLEFBUUssQUFVTSxBQUdaLEFBS0EsU0E1Q2MsQUFRWixBQWdDRyxBQUtHLENBMUJBLENBZk4sSUF1QlksR0FYekIsRUFQbUIsQ0E0Qm5CLENBaENBLENBb0NpQixHQUtBLENBMUJHLFVBVkQsQ0FrQkwsQUFjZCxHQUthLElBMUJFLEtBUUcsRUFtQmxCLEVBckNpQixZQW1CTSxHQWxCdkIsMEJBWEEscUJBOEJnQixHQVRLLFdBVU0seUJBQ0EseUJBQzNCLFFBWCtCLDJIQUMvQiIsImZpbGUiOiJDOlxcVXNlcnNcXG5pbmphYm91XFxuaW5qYWJvdVNpdGVcXG5pbmphYm91LmdpdGh1Yi5pb1xcbmluamFib3Utc2l0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbmF2JztcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtcGFydGljbGVzLWpzJztcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gJ3JlYWN0LWFuaW1hdGVkLWNzcyc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kTGF5ZXIsIEVuZ2luZSB9IGZyb20gJ2VhcnRoYm91bmQtYmF0dGxlLWJhY2tncm91bmRzJztcblxuY29uc3QgcG90ZW50aWFsTGF5ZXJzID0ge1xuICBwYWlyczogW1xuICAgIHtcbiAgICAgIGxheWVyMTogMjYwLFxuICAgICAgbGF5ZXIyOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYXllcjE6IDYsXG4gICAgICBsYXllcjI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxheWVyMTogODEsXG4gICAgICBsYXllcjI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgIGxheWVyMTogMTgwLFxuICAgICAgbGF5ZXIyOiAxNzlcbiAgICB9LFxuICAgIHtcbiAgICAgIGxheWVyMTogMjE5LFxuICAgICAgbGF5ZXIyOiAyMThcbiAgICB9LFxuICAgIHtcbiAgICAgIGxheWVyMTogMTU2LFxuICAgICAgbGF5ZXIyOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYXllcjE6IDIwLFxuICAgICAgbGF5ZXIyOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYXllcjE6IDE5OSxcbiAgICAgIGxheWVyMjogMFxuICAgIH0sXG4gICAge1xuICAgICAgbGF5ZXIxOiAyNzAsXG4gICAgICBsYXllcjI6IDBcbiAgICB9LFxuICBdXG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLnJlZnMuYmFja2dyb3VuZDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHZhciBsYXllcjEgPSBuZXcgQmFja2dyb3VuZExheWVyKHBvdGVudGlhbExheWVycy5wYWlyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKHBvdGVudGlhbExheWVycy5wYWlycy5sZW5ndGgpKV0ubGF5ZXIxKTtcbiAgICB2YXIgbGF5ZXIyID0gbmV3IEJhY2tncm91bmRMYXllcihwb3RlbnRpYWxMYXllcnMucGFpcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbShwb3RlbnRpYWxMYXllcnMucGFpcnMubGVuZ3RoKSldLmxheWVyMik7XG4gICAgY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShbbGF5ZXIxLCBsYXllcjJdLCB7XG4gICAgICBjYW52YXM6IGNhbnZhc1xuICAgIH0pO1xuICAgIGVuZ2luZS5hbmltYXRlKCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TmluamFib3UncyBUcmVhc3VyZSBDYXZlPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjUuMi9hbmltYXRlLm1pbi5jc3NcIi8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8Y2FudmFzIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnLCB6SW5kZXg6ICcxJ319IHJlZj0nYmFja2dyb3VuZCc+XG4gICAgICAgICAgey8qIDxQYXJ0aWNsZXNcbiAgICAgICAgICAgIHBhcmFtcz17e1xuICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJyMwMDAwMDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAnMjAwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgICA8L2NhbnZhcz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAnMid9fT5cbiAgICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJmYWRlSW5VcFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNmZmYnLCBib3JkZXI6ICc1cHggc29saWQgIzBkMGQwZCcsIGJveFNoYWRvdzogXCI1cHggNXB4IDBweCAjMGQwZDBkXCIsIHdpZHRoOiAnMzUlJywgaGVpZ2h0OiAnNTAlJywgbWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcDogJzEyJSd9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpbjogJzAgYXV0byd9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzEwOTY4OTM1MzA2NzEzMjEwOTEvSF8yY1M4OGpfNDAweDQwMC5wbmcnIHN0eWxlPXt7bWFyZ2luOiAnMTBweCcsIHdpZHRoOiAnMTAlJywgaGVpZ2h0OiAnMTAlJywgYm9yZGVyUmFkaXVzOiAnMTAwJScsIGJvcmRlcjogJzVweCBzb2xpZCAjMGQwZDBkJ319Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzVweCd9fT5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7dGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjRweCcsIG1hcmdpbkJvdHRvbTogJzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgTmluamFib3UncyBTZWNyZXQgVHJlYXN1cmUgQ2F2ZVxuICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Ub3A6ICcwcHgnfX0+XG4gICAgICAgICAgICAgICAgICAgIEhvc3QgdG8gdGhlIG5laWdoYm9yJ3MgY2F0IHdoZW4gbm8gb25lIGtub3dzIHdoZXJlIGl0IGlzXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5MZWZ0OiAnMjUlJywgbWFyZ2luUmlnaHQ6ICcyNSUnfX0+XG4gICAgICAgICAgICAgICAgSG9iYnlpc3QgcHJvZ3JhbW1lci9kaWdpdGFsIGFydGlzdC4gQ3VycmVudGx5IGNyZWF0aW5nIGEgbnVtYmVyIG9mIHNtYWxsIHByb2plY3RzLiBIZXJlJ3Mgc29tZSBsaW5rczpcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL25pbmphYm91MScgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJyNmYzAzZjgnfX0+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgICAgICAgPC9iPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3RvcC5nZy9ib3QvNjE4NTc1MjE0OTM4NDIzMzA2JyBzdHlsZT17e3RleHREZWNvcmF0aW9uOiAnbm9uZScsIGNvbG9yOiAnI2ZjMDNmOCd9fT5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICBUaW1lWm9uZSBCb3RcbiAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZWQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXG4gICAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ninjabou\\\\ninjabouSite\\\\ninjabou.github.io\\\\ninjabou-site\\\\pages\\\\index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4317c5f896f94157725f.hot-update.js.map