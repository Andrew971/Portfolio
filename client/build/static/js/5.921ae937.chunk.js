webpackJsonp([5],{82:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}function i(n,e){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}Object.defineProperty(e,"__esModule",{value:!0});var c=t(0),s=t.n(c),p=t(1),u=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),l=i(["\n  100% {\n    transform: rotate(180deg);\n  }\n}\n"],["\n  100% {\n    transform: rotate(180deg);\n  }\n}\n"]),f=i(["\n\n.bar1 {\n   -webkit-transform: rotate(-45deg) translate(-4px, 4px);\n   transform: rotate(-45deg) translate(-4px, 4px);\n}\n\n.bar2 {opacity: 0;}\n\n.bar3 {\n   -webkit-transform: rotate(45deg) translate(-3px, -3px);\n   transform: rotate(45deg) translate(-3px, -3px);\n\n"],["\n\n.bar1 {\n   -webkit-transform: rotate(-45deg) translate(-4px, 4px);\n   transform: rotate(-45deg) translate(-4px, 4px);\n}\n\n.bar2 {opacity: 0;}\n\n.bar3 {\n   -webkit-transform: rotate(45deg) translate(-3px, -3px);\n   transform: rotate(45deg) translate(-3px, -3px);\n\n"]),b=i(["\ndisplay: block;\n    cursor: pointer;\nborder-radius:50%;\npadding:0.5rem;\nmax-width: 100%;\n\n.bar1, .bar2, .bar3 {\n  width:",";\n  height: ",";\n    background-color: ",";\n    margin: 3px 0;\n    transition: 0.4s;\n}\n&:hover{\n  animation: "," 250ms linear 1;\n\n}\n ","\n\n\n"],["\ndisplay: block;\n    cursor: pointer;\nborder-radius:50%;\npadding:0.5rem;\nmax-width: 100%;\n\n.bar1, .bar2, .bar3 {\n  width:",";\n  height: ",";\n    background-color: ",";\n    margin: 3px 0;\n    transition: 0.4s;\n}\n&:hover{\n  animation: "," 250ms linear 1;\n\n}\n ","\n\n\n"]),d=Object(p.d)(l),m=Object(p.b)(f),h=p.c.div(b,function(n){return n.width||"1rem"},function(n){return n.height||"2px"},function(n){return n.color||"rgb(249,249,249)"},d,function(n){return n.open?m:""}),g=function(n){function e(n){r(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.state={open:!1},t}return o(e,n),u(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.color,r=e.width,a=e.height,o=e.open;return s.a.createElement(h,{onClick:function(){n.setState(function(n){return{open:!n.open}})},open:o,color:t,width:r,height:a},s.a.createElement("div",{className:"bar1"}),s.a.createElement("div",{className:"bar2"}),s.a.createElement("div",{className:"bar3"}))}}]),e}(c.PureComponent);e.default=g}});
//# sourceMappingURL=5.921ae937.chunk.js.map