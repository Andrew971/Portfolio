webpackJsonp([1],{257:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),u=n(3),l=n(7),s=n(14),f=n(261),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.Theme,n=e.data,r=this.props.location.pathname,o=n.Section.field.sort(Object(s.a)("DESC","order")).filter(function(e){return e.placement===r});return c.a.createElement(i.Fragment,null,o.map(function(e,n){return c.a.createElement(i.Fragment,{key:n},c.a.createElement(f.a,{type:e.type||"biography",data:e.option,Theme:t}))}))}}]),t}(i.PureComponent),m=function(e){return{Theme:e.UI.Theme,data:e.UI.websiteContent}};t.default=Object(u.e)(Object(l.b)(m)(d))},259:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=r(u),s=n(36),f=r(s),p=n(2),d=r(p),m=n(265),h=n(266),b=r(h),v=n(267),y=r(v),g=n(268),w=r(g),E=n(269),x=r(E),O={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",_=[],k=[],C=!1;try{var P=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,P)}catch(e){}var z=!!C&&{capture:!1,passive:!0},T=function(e,t){var n=f.default.findDOMNode(e),r=void 0,o=void 0;try{var a=t.getBoundingClientRect();r=a.top,o=a.height}catch(e){r=O.top,o=O.height}var i=window.innerHeight||document.documentElement.clientHeight,c=Math.max(r,0),u=Math.min(i,r+o)-c,l=void 0,s=void 0;try{var p=n.getBoundingClientRect();l=p.top,s=p.height}catch(e){l=O.top,s=O.height}var d=l-c,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-m[0]<=u&&d+s+m[1]>=0},D=function(e){var t=f.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(e){n=O.top,r=O.height}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+r+i[1]>=0},M=function(e){var t=f.default.findDOMNode(e);if(t){var n=(0,b.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?T(e,n):D(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){k.forEach(function(e){var t=_.indexOf(e);-1!==t&&_.splice(t,1)}),k=[]},S=function(){for(var e=0;e<_.length;++e){var t=_[e];M(t)}N()},A=void 0,I=null,L=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===A?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===A&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",I,z),(0,m.off)(window,"resize",I,z),I=null),I||(void 0!==this.props.debounce?(I=(0,y.default)(S,"number"===typeof this.props.debounce?this.props.debounce:300),A="debounce"):void 0!==this.props.throttle?(I=(0,w.default)(S,"number"===typeof this.props.throttle?this.props.throttle:300),A="throttle"):I=S),this.props.overflow){var t=(0,b.default)(f.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(j)+1;1===n&&t.addEventListener("scroll",I,z),t.setAttribute(j,n)}}else if(0===_.length||e){var r=this.props,o=r.scroll,a=r.resize;o&&(0,m.on)(window,"scroll",I,z),a&&(0,m.on)(window,"resize",I,z)}_.push(this),M(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,b.default)(f.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",I,z),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=_.indexOf(this);-1!==n&&_.splice(n,1),0===_.length&&((0,m.off)(window,"resize",I,z),(0,m.off)(window,"scroll",I,z))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:l.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(u.Component);L.propTypes={once:d.default.bool,height:d.default.oneOfType([d.default.number,d.default.string]),offset:d.default.oneOfType([d.default.number,d.default.arrayOf(d.default.number)]),overflow:d.default.bool,resize:d.default.bool,scroll:d.default.bool,children:d.default.node,throttle:d.default.oneOfType([d.default.number,d.default.bool]),debounce:d.default.oneOfType([d.default.number,d.default.bool]),placeholder:d.default.node,unmountIfInvisible:d.default.bool},L.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=x.default;t.default=L,t.forceCheck=S}).call(t,n(37))},260:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    background-position: center;\n    background-size: cover;\n    background-image: ",";\n    background-size:cover;\n    width:100%;\n    max-width: ",";\n    margin:auto;\n    ::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n    @media (max-width: 670px) {\n\n    }\n  "],["\n    background-position: center;\n    background-size: cover;\n    background-image: ",";\n    background-size:cover;\n    width:100%;\n    max-width: ",";\n    margin:auto;\n    ::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n    @media (max-width: 670px) {\n\n    }\n  "]),a=r.c.img(o,function(e){return e.src?"url("+e.src+")":"grey"},function(e){return e.size?e.size+"rem":"5rem"}),i=a.withComponent("img");t.b=a},261:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(12),u=n.n(c),l=n(0),s=n.n(l),f=n(262),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={component:null},n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(u.a.mark(function e(){var t,n=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.type,f.a.filter(function(e){return t.toUpperCase()===e.name.toUpperCase()}).map(function(e){return n.setState({component:e.component})});case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state.component;return e?s.a.createElement(e,this.props):null}}]),t}(l.Component);t.a=d},262:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(263),o=n(270),a=n(271),i=n(272),c=n(273),u=n(274),l=[{name:"Biography",component:r.a},{name:"Focus",component:o.a},{name:"Knowledge",component:a.a},{name:"Project",component:i.a},{name:"Lab",Lab:c.a},{name:"Services",component:u.a}]},263:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(264),c=n(80),u=n(20),l=n(14),s=n(259),f=n.n(s),p=function(e){var t=e.data,n=t.title,s=t.subtitle,p=t.paragraph,d=t.image,m=t.background;return o.a.createElement(a.b,{className:"",primary:"primary",src:m.path},o.a.createElement(c.b,{container:!0,lg:!0,xl:!0,direction:"row-reverse",alignItems:"center"},o.a.createElement(f.a,{height:200,offset:100},o.a.createElement(i.a,{src:d.field[0].path,srcx2:d.field[0].pathx2})),o.a.createElement(c.b,{items:!0},o.a.createElement(u.c,null,o.a.createElement("h1",null,n.text),o.a.createElement("h3",null,s.text),p.field.sort(Object(l.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement("p",null,e.paragraph))})))))};t.a=p},264:function(e,t,n){"use strict";var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\ndisplay:flex;\nflex-flow:column nowrap;\nalign-self: center;\nwidth:70%;\nmargin: 2rem;\nborder-radius:50%;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\nbox-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n\n  "],["\ndisplay:flex;\nflex-flow:column nowrap;\nalign-self: center;\nwidth:70%;\nmargin: 2rem;\nborder-radius:50%;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\nbox-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n\n  "]);t.a=r.c.div(o,function(e){return"1px solid "+e.theme.primary},function(e){return e.src&&"url("+e.src+")"})},265:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function o(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=o},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,c=o["overflow-x"],u=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(c)&&n.test(u))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},267:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,u=function u(){var l=+new Date-i;l<t&&l>=0?r=setTimeout(u,t-l):(r=null,n||(c=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var l=n&&!r;return r||(r=setTimeout(u,t)),l&&(c=e.apply(a,o),a=null,o=null),c}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},268:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,o;return function(){var a=n||this,i=+new Date,c=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout(function(){r=i,e.apply(a,c)},t)):(r=i,e.apply(a,c))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=r(u),s=n(259),f=r(s),p=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){o(this,r);var e=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+p(t),e}return i(r,n),c(r,[{key:"render",value:function(){return l.default.createElement(f.default,e,l.default.createElement(t,this.props))}}]),r}(u.Component)}}},270:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(20),c=n(80),u=n(260),l=n(259),s=n.n(l),f=n(14),p=function(e){var t=e.data,n=t.image,r=t.title;return o.a.createElement(a.b,null,o.a.createElement(i.d,{primary:!0},r.text),o.a.createElement(c.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",justify:"space-around",autoFit:!0},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(c.a,{items:!0,key:t},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(u.a,{src:e.path_1,alt:"Card cap"})),o.a.createElement("h2",null,e.name))})))};t.a=p},271:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(20),c=n(80),u=n(260),l=n(259),s=n.n(l),f=n(14),p=function(e){var t=e.data,n=t.image,r=t.title;return o.a.createElement(a.b,{primary:!0},o.a.createElement(i.d,null,r.text),o.a.createElement(c.a,{container:!0,direction:"row"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(c.a,{items:!0,key:t},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(u.b,{src:e.path_1,alt:"Card cap",size:0})),o.a.createElement("h4",null,e.name))})))};t.a=p},272:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(80),c=n(20),u=n(260),l=n(259),s=n.n(l),f=n(14),p=n(35),d=function(e){var t=e.data,n=t.project,l=t.title;return o.a.createElement(a.b,{primary:!0},o.a.createElement(c.d,null,l.text),o.a.createElement(i.b,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement(i.b,{items:!0},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(u.b,{size:30,src:e.img,alt:"Card cap"}))),o.a.createElement(i.b,{items:!0,xs:!0,md:!0,text:"center"},o.a.createElement("h2",{className:"card-title"},e.name),o.a.createElement("h6",{className:"card-text"},e.sub),o.a.createElement("p",null,e.description),e.link.url&&o.a.createElement(p.a,{onClick:function(){window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))};t.a=d},273:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(80),c=n(20),u=n(260),l=n(259),s=n.n(l),f=n(14),p=n(35),d=function(e){var t=e.data,n=t.project,l=t.title;return o.a.createElement(a.b,null,o.a.createElement(c.d,{primary:!0},l.text),o.a.createElement(i.b,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement(i.b,{items:!0},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(u.b,{size:30,src:e.img,alt:"Card cap"}))),o.a.createElement(i.b,{items:!0},o.a.createElement("h2",{className:"card-title"},e.name),o.a.createElement("h6",{className:"card-text"},e.sub),o.a.createElement("p",null,e.description),e.link.url&&o.a.createElement(p.a,{onClick:function(){console.log(window.location),window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))};t.a=d},274:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(19),i=n(80),c=n(20),u=n(38),l=n(259),s=n.n(l),f=n(14),p=function(e){var t=(e.Theme,e.data),n=t.image,r=t.title;return o.a.createElement(a.b,null,o.a.createElement(c.d,{primary:!0},r.text),o.a.createElement(i.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",justify:"space-between",autoFit:!0},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(i.a,{items:!0,key:t},o.a.createElement(i.a,{items:!0},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(u.a,{icon:e.icon||"hamburger"}))),o.a.createElement(i.a,{items:!0},o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.text)))})))};t.a=p}});
//# sourceMappingURL=1.b89ad00f.chunk.js.map