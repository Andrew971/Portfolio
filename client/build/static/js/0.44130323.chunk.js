webpackJsonp([0],{243:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Home",function(){return _});var i=n(0),l=n.n(i),c=n(77),u=n(36),f=n(246),s=n(252),d=n(253),m=n(3),p=n(7),h=n(34),b=n(78),v=n(245),y=n.n(v),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=function(e,t){return"ASC"===e?function(e,n){return n[t]-e[t]}:"DESC"===e?function(e,n){return e[t]-n[t]}:void 0},E=function(e){var t=e.data,n=t.title,r=t.subtitle,o=t.paragraph,a=t.image,u=t.background;return l.a.createElement(c.a,{className:"",primary:"primary",src:u.path},l.a.createElement(h.a,{container:!0,lg:!0,xl:!0,direction:"row-reverse",alignItems:"center"},l.a.createElement(y.a,{height:200,offset:100},l.a.createElement(s.a,{src:a.field[0].path_1})),l.a.createElement(h.a,{items:!0},l.a.createElement(d.a,null,l.a.createElement("h1",null,n.text),l.a.createElement("h3",null,r.text),o.field.sort(w("DESC","order")).map(function(e,t){return l.a.createElement(i.Fragment,{key:t},l.a.createElement("p",null,e.paragraph))})))))},x=function(e){var t=e.Theme,n=e.data,r=n.image,o=n.title;return l.a.createElement(c.a,null,l.a.createElement(f.a,null,o.text),l.a.createElement(h.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",justify:"space-around"},r.field.sort(w("DESC","order")).map(function(e,n){return l.a.createElement(h.a,{items:!0,key:n},l.a.createElement(h.a,{items:!0},l.a.createElement(y.a,{height:200,offset:100},l.a.createElement(b.a,{size:5,src:"Main"===t.label?e.path_2:e.path_1,alt:"Card cap"}))),l.a.createElement(h.a,{items:!0,xs:!0,md:!0,text:"center"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,e.text)))})))},O=function(e){var t=e.data,n=t.project,r=t.title;return l.a.createElement(c.a,{primary:!0},l.a.createElement(f.a,{primary:!0},r.text),l.a.createElement(h.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(w("DESC","order")).map(function(e,t){return l.a.createElement(i.Fragment,{key:t},l.a.createElement(h.a,{items:!0},l.a.createElement(y.a,{height:200,offset:100},l.a.createElement(b.a,{size:30,src:e.img,alt:"Card cap"}))),l.a.createElement(h.a,{items:!0,xs:!0,md:!0,text:"center"},l.a.createElement("h2",{className:"card-title"},e.name),l.a.createElement("h6",{className:"card-text"},e.sub),l.a.createElement("p",null,e.description),e.link.url&&l.a.createElement(u.a,{onClick:function(){window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))},j=function(e){var t=e.data,n=t.project,r=t.title;return l.a.createElement(c.a,null,l.a.createElement(f.a,{className:"col-12"},r.text),l.a.createElement(h.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(w("DESC","order")).map(function(e,t){return l.a.createElement(i.Fragment,{key:t},l.a.createElement(h.a,{items:!0},l.a.createElement(y.a,{height:200,offset:100},l.a.createElement(b.a,{size:30,src:e.img,alt:"Card cap"}))),l.a.createElement(h.a,{items:!0},l.a.createElement("h2",{className:"card-title"},e.name),l.a.createElement("h6",{className:"card-text"},e.sub),l.a.createElement("p",null,e.description),e.link.url&&l.a.createElement(u.a,{onClick:function(){console.log(window.location),window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))},_=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.Theme,n=e.data,r=this.props.location.pathname,o=n.Section.field.sort(w("DESC","order")).filter(function(e){return e.placement===r});return l.a.createElement(i.Fragment,null,o.map(function(e,n){return l.a.createElement(i.Fragment,{key:n},"biography"===e.type&&l.a.createElement(E,{data:e.option}),"services"===e.type&&l.a.createElement(x,{data:e.option,Theme:t}),"project"===e.type&&l.a.createElement(O,{data:e.option}),"side-project"===e.type&&l.a.createElement(j,{data:e.option}))}))}}]),t}(i.PureComponent),k=function(e){return{Theme:e.UI.Theme,Modal:e.UI.Modal,modalSAtatus:e.UI.modalSAtatus,data:e.UI.websiteContent}};t.default=Object(m.e)(Object(p.b)(k)(_))},245:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),f=n(32),s=r(f),d=n(2),m=r(d),p=n(247),h=n(248),b=r(h),v=n(249),y=r(v),g=n(250),w=r(g),E=n(251),x=r(E),O={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",_=[],k=[],z=!1;try{var C=Object.defineProperty({},"passive",{get:function(){z=!0}});window.addEventListener("test",null,C)}catch(e){}var P=!!z&&{capture:!1,passive:!0},M=function(e,t){var n=s.default.findDOMNode(e),r=void 0,o=void 0;try{var a=t.getBoundingClientRect();r=a.top,o=a.height}catch(e){r=O.top,o=O.height}var i=window.innerHeight||document.documentElement.clientHeight,l=Math.max(r,0),c=Math.min(i,r+o)-l,u=void 0,f=void 0;try{var d=n.getBoundingClientRect();u=d.top,f=d.height}catch(e){u=O.top,f=O.height}var m=u-l,p=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-p[0]<=c&&m+f+p[1]>=0},D=function(e){var t=s.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(e){n=O.top,r=O.height}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+r+i[1]>=0},T=function(e){var t=s.default.findDOMNode(e);if(t){var n=(0,b.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?M(e,n):D(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){k.forEach(function(e){var t=_.indexOf(e);-1!==t&&_.splice(t,1)}),k=[]},A=function(){for(var e=0;e<_.length;++e){var t=_[e];T(t)}N()},S=void 0,I=null,F=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===S?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===S&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,p.off)(window,"scroll",I,P),(0,p.off)(window,"resize",I,P),I=null),I||(void 0!==this.props.debounce?(I=(0,y.default)(A,"number"===typeof this.props.debounce?this.props.debounce:300),S="debounce"):void 0!==this.props.throttle?(I=(0,w.default)(A,"number"===typeof this.props.throttle?this.props.throttle:300),S="throttle"):I=A),this.props.overflow){var t=(0,b.default)(s.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(j)+1;1===n&&t.addEventListener("scroll",I,P),t.setAttribute(j,n)}}else if(0===_.length||e){var r=this.props,o=r.scroll,a=r.resize;o&&(0,p.on)(window,"scroll",I,P),a&&(0,p.on)(window,"resize",I,P)}_.push(this),T(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,b.default)(s.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",I,P),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=_.indexOf(this);-1!==n&&_.splice(n,1),0===_.length&&((0,p.off)(window,"resize",I,P),(0,p.off)(window,"scroll",I,P))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:u.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(c.Component);F.propTypes={once:m.default.bool,height:m.default.oneOfType([m.default.number,m.default.string]),offset:m.default.oneOfType([m.default.number,m.default.arrayOf(m.default.number)]),overflow:m.default.bool,resize:m.default.bool,scroll:m.default.bool,children:m.default.node,throttle:m.default.oneOfType([m.default.number,m.default.bool]),debounce:m.default.oneOfType([m.default.number,m.default.bool]),placeholder:m.default.node,unmountIfInvisible:m.default.bool},F.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=x.default;t.default=F,t.forceCheck=A}).call(t,n(33))},246:function(e,t,n){"use strict";var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display:flex;\n  align-content:center;\n  justify-content:space-around;\n  font-size: 3.5em;\n  text-align: center;\n  color: ",";\n  margin-bottom: 5rem;\n"],["\n  display:flex;\n  align-content:center;\n  justify-content:space-around;\n  font-size: 3.5em;\n  text-align: center;\n  color: ",";\n  margin-bottom: 5rem;\n"]);t.a=r.c.h1(o,function(e){return e.primary?e.theme.color.primary:e.theme.primary})},247:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function o(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=o},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,l=o["overflow-x"],c=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(c))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},249:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,l=void 0,c=function c(){var u=+new Date-i;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(l=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(l=e.apply(a,o),a=null,o=null),l}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},250:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,o;return function(){var a=n||this,i=+new Date,l=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout(function(){r=i,e.apply(a,l)},t)):(r=i,e.apply(a,l))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},251:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),u=r(c),f=n(245),s=r(f),d=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){o(this,r);var e=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+d(t),e}return i(r,n),l(r,[{key:"render",value:function(){return u.default.createElement(s.default,e,u.default.createElement(t,this.props))}}]),r}(c.Component)}}},252:function(e,t,n){"use strict";var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\ndisplay:flex;\nflex-flow:column nowrap;\nalign-self: center;\nmax-width:20rem;\nwidth:100%;\nheight:20rem;\nmargin: 2rem;\nborder-radius:50%;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\n\n  "],["\ndisplay:flex;\nflex-flow:column nowrap;\nalign-self: center;\nmax-width:20rem;\nwidth:100%;\nheight:20rem;\nmargin: 2rem;\nborder-radius:50%;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\n\n  "]);t.a=r.c.div(o,function(e){return"Main"===e.theme.label?"0.5em solid #B6D8FF":"0.5em solid #FFD9B6"},function(e){return e.src&&"url("+e.src+")"})},253:function(e,t,n){"use strict";var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n/* display:flex; */\n/* flex-flow: column wrap; */\n/* align-content:center; */\n/* align-items:center; */\n/* justify-items:center; */\nfont-size:1.3rem;\ntext-align:justify;\n/* margin: 1rem 1rem; */\nh1,h2,h3{\n  text-align:left;\n  margin-bottom:1rem;\n}\nh3{\n  margin-bottom:2rem;\n\n}\n    @media (max-width: 740px) {\n      text-align:center;\n      h1,h2,h3{\n        text-align:center;\n        margin-bottom:1rem;\n      }\n      h3{\n        margin-bottom:2rem;\n\n      }\n    }\n    @media (min-width: 750px) and (max-width: 980px) {\n      text-align:justify;\n      h1,h2,h3{\n        text-align:center;\n        margin-bottom:1rem;\n      }\n      h3{\n        margin-bottom:2rem;\n\n      }\n    }\n  "],["\n/* display:flex; */\n/* flex-flow: column wrap; */\n/* align-content:center; */\n/* align-items:center; */\n/* justify-items:center; */\nfont-size:1.3rem;\ntext-align:justify;\n/* margin: 1rem 1rem; */\nh1,h2,h3{\n  text-align:left;\n  margin-bottom:1rem;\n}\nh3{\n  margin-bottom:2rem;\n\n}\n    @media (max-width: 740px) {\n      text-align:center;\n      h1,h2,h3{\n        text-align:center;\n        margin-bottom:1rem;\n      }\n      h3{\n        margin-bottom:2rem;\n\n      }\n    }\n    @media (min-width: 750px) and (max-width: 980px) {\n      text-align:justify;\n      h1,h2,h3{\n        text-align:center;\n        margin-bottom:1rem;\n      }\n      h3{\n        margin-bottom:2rem;\n\n      }\n    }\n  "]);t.a=r.c.div(o)}});
//# sourceMappingURL=0.44130323.chunk.js.map