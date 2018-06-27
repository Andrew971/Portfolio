webpackJsonp([0],{285:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),s=n(38),f=r(s),p=n(2),d=r(p),m=n(291),h=n(292),b=r(h),y=n(293),v=r(y),g=n(294),w=r(g),E=n(295),O=r(E),x={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",_=[],k=[],C=!1;try{var P=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,P)}catch(e){}var S=!!C&&{capture:!1,passive:!0},z=function(e,t){var n=f.default.findDOMNode(e),r=void 0,o=void 0;try{var a=t.getBoundingClientRect();r=a.top,o=a.height}catch(e){r=x.top,o=x.height}var i=window.innerHeight||document.documentElement.clientHeight,c=Math.max(r,0),l=Math.min(i,r+o)-c,u=void 0,s=void 0;try{var p=n.getBoundingClientRect();u=p.top,s=p.height}catch(e){u=x.top,s=x.height}var d=u-c,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-m[0]<=l&&d+s+m[1]>=0},N=function(e){var t=f.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(e){n=x.top,r=x.height}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+r+i[1]>=0},D=function(e){var t=f.default.findDOMNode(e);if(t){var n=(0,b.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?z(e,n):N(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},T=function(){k.forEach(function(e){var t=_.indexOf(e);-1!==t&&_.splice(t,1)}),k=[]},M=function(){for(var e=0;e<_.length;++e){var t=_[e];D(t)}T()},I=void 0,L=null,A=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===I?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===I&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",L,S),(0,m.off)(window,"resize",L,S),L=null),L||(void 0!==this.props.debounce?(L=(0,v.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),I="debounce"):void 0!==this.props.throttle?(L=(0,w.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),I="throttle"):L=M),this.props.overflow){var t=(0,b.default)(f.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(j)+1;1===n&&t.addEventListener("scroll",L,S),t.setAttribute(j,n)}}else if(0===_.length||e){var r=this.props,o=r.scroll,a=r.resize;o&&(0,m.on)(window,"scroll",L,S),a&&(0,m.on)(window,"resize",L,S)}_.push(this),D(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,b.default)(f.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",L,S),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=_.indexOf(this);-1!==n&&_.splice(n,1),0===_.length&&((0,m.off)(window,"resize",L,S),(0,m.off)(window,"scroll",L,S))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:u.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(l.Component);A.propTypes={once:d.default.bool,height:d.default.oneOfType([d.default.number,d.default.string]),offset:d.default.oneOfType([d.default.number,d.default.arrayOf(d.default.number)]),overflow:d.default.bool,resize:d.default.bool,scroll:d.default.bool,children:d.default.node,throttle:d.default.oneOfType([d.default.number,d.default.bool]),debounce:d.default.oneOfType([d.default.number,d.default.bool]),placeholder:d.default.node,unmountIfInvisible:d.default.bool},A.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=O.default;t.default=A,t.forceCheck=M}).call(t,n(39))},286:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(1),o=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    background-position: center;\n    background-size: cover;\n    background-image: ",";\n    background-size:cover;\n    width:100%;\n    max-width: ",";\n    margin:auto;\n    ::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n    @media (max-width: 670px) {\n\n    }\n  "],["\n    background-position: center;\n    background-size: cover;\n    background-image: ",";\n    background-size:cover;\n    width:100%;\n    max-width: ",";\n    margin:auto;\n    ::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n    @media (max-width: 670px) {\n\n    }\n  "]),a=r.c.img(o,function(e){return e.src?"url("+e.src+")":"grey"},function(e){return e.size?e.size+"rem":"5rem"}),i=a.withComponent("img");t.b=a},287:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),c=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(8),l=n.n(c),u=n(0),s=n.n(u),f=n(288),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={component:null},n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(l.a.mark(function e(){var t,n=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.type,f.a.filter(function(e){return t.toUpperCase()===e.name.toUpperCase()}).map(function(e){return n.setState({component:e.component})});case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.state.component;return e?s.a.createElement(e,this.props):null}}]),t}(u.Component);t.a=d},288:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(289),o=n(297),a=n(298),i=n(299),c=n(300),l=n(301),u=[{name:"Biography",component:r.a},{name:"Focus",component:o.a},{name:"Knowledge",component:a.a},{name:"Project",component:i.a},{name:"Lab",component:c.a},{name:"services",component:l.a}]},289:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(290),c=n(21),l=n(22),u=n(11),s=n(285),f=n.n(s),p=n(296),d=function(e){var t=e.data,n=t.title,s=t.subtitle,d=t.paragraph,m=t.image,h=t.background;return o.a.createElement(a.b,{className:"",primary:!0,src:h.path},o.a.createElement(c.b,{container:!0,lg:!0,xl:!0,direction:"row-reverse",alignItems:"center"},o.a.createElement(f.a,{height:200,offset:100},o.a.createElement(p.a,{In:"animation",Out:"out"},o.a.createElement(i.a,{src:m.field[0].path,srcx2:m.field[0].pathx2}))),o.a.createElement(c.b,{items:!0},o.a.createElement(p.a,{In:"animation",Out:"out"},o.a.createElement(l.c,null,o.a.createElement("h2",null,n.text),o.a.createElement("h3",null,s.text),d.field.sort(Object(u.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement("p",null,e.paragraph))}))))))};t.a=d},290:function(e,t,n){"use strict";var r=n(1),o=n(75),a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\nalign-self: center;\nwidth:70%;\nmargin: 2rem;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\nbox-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\nborder-radius:50%;\nopacity:0;\n\n&.animation{\n  ","\n  /* opacity:1; */\n\n}\n\n&.out{\n  ","\n}\n\n::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n\n\n  "],["\nalign-self: center;\nwidth:70%;\nmargin: 2rem;\nborder: ",";\nbackground-image: ",";\nbackground-position: center;\nbackground-size: cover;\nbox-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\nborder-radius:50%;\nopacity:0;\n\n&.animation{\n  ","\n  /* opacity:1; */\n\n}\n\n&.out{\n  ","\n}\n\n::after{\n  content:'';\n  display: block;\n  padding-bottom:100%;\n}\n\n\n\n  "]);t.a=r.c.div(a,function(e){return"1px solid "+e.theme.primary},function(e){return e.src&&"url("+e.src+")"},Object(o.a)("left"),Object(o.b)("right"))},291:function(e,t,n){"use strict";function r(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function o(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=r,t.off=o},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,c=o["overflow-x"],l=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(c)&&n.test(l))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},293:function(e,t,n){"use strict";function r(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,l=function l(){var u=+new Date-i;u<t&&u>=0?r=setTimeout(l,t-u):(r=null,n||(c=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var u=n&&!r;return r||(r=setTimeout(l,t)),u&&(c=e.apply(a,o),a=null,o=null),c}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},294:function(e,t,n){"use strict";function r(e,t,n){t||(t=250);var r,o;return function(){var a=n||this,i=+new Date,c=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout(function(){r=i,e.apply(a,c)},t)):(r=i,e.apply(a,c))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),s=n(285),f=r(s),p=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){o(this,r);var e=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+p(t),e}return i(r,n),c(r,[{key:"render",value:function(){return u.default.createElement(f.default,e,u.default.createElement(t,this.props))}}]),r}(l.Component)}}},296:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.call(n),n.state={className:""},n}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props.children;return i.Children.map(t,function(t){return e.modifyChildren(t)})}}]),t}(i.Component),s=function(){var e=this;this.componentDidMount=function(){window.addEventListener("scroll",e.isScrolling)},this.isScrolling=function(t){"string"===typeof e.props.children.type?e.isElement(t):e.isStyledComponent(t)},this.isStyledComponent=function(t){var n=e.props,r=n.In,o=n.Out,a=t.target.documentElement.clientHeight||t.target.body.clientHeight,i=a/2,c=e.props.children.type.componentStyle.lastClassName,l=document.getElementsByClassName(c)[0],u=l.getBoundingClientRect(),s=u.bottom<=i,f=u.top<=i&&!s;r&&f?e.setState({className:r}):o&&s?e.setState({className:o}):e.setState({className:""})},this.isElement=function(t){var n=e.props,r=n.In,o=n.Out,a=t.target.documentElement.clientHeight||t.target.body.clientHeight,i=a/2,c=e.props.children.props.id,l=document.getElementById(c),u=l.getBoundingClientRect(),s=u.bottom<=i/2;u.top<=i&&!s&&r?e.setState({className:r}):o&&s?e.setState({className:o}):e.setState({className:""})},this.modifyChildren=function(t){var n=e.state.className,r={className:n};return c.a.cloneElement(t,r)},this.componentWillUnmount=function(){window.removeEventListener("scroll",e.isScrolling)}};t.a=u},297:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(22),c=n(21),l=n(286),u=n(285),s=n.n(u),f=n(11),p=function(e){var t=e.data,n=t.image,r=t.title;return o.a.createElement(a.b,null,o.a.createElement(i.d,{primary:!0},r.text),o.a.createElement(c.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",justify:"space-around",autoFit:!0},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(c.a,{items:!0,key:t},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(l.a,{src:e.path_1,alt:"Card cap"})),o.a.createElement("h2",null,e.name))})))};t.a=p},298:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(22),c=n(21),l=n(286),u=n(285),s=n.n(u),f=n(11),p=function(e){var t=e.data,n=t.image,r=t.title;return o.a.createElement(a.b,{primary:!0},o.a.createElement(i.d,null,r.text),o.a.createElement(c.a,{container:!0,direction:"row"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(c.a,{items:!0,key:t},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(l.b,{src:e.path_1,alt:"Card cap",size:0})),o.a.createElement("h4",null,e.name))})))};t.a=p},299:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(21),c=n(22),l=n(286),u=n(285),s=n.n(u),f=n(11),p=n(37),d=function(e){var t=e.data,n=t.project,u=t.title;return o.a.createElement(a.b,{primary:!0},o.a.createElement(c.d,null,u.text),o.a.createElement(i.b,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement(i.b,{items:!0},o.a.createElement(s.a,{height:200,offset:100,scroll:!0},o.a.createElement(l.b,{size:30,src:e.img,alt:"Card cap"}))),o.a.createElement(i.b,{items:!0,xs:!0,md:!0,text:"center"},o.a.createElement("h2",{className:"card-title"},e.name),o.a.createElement("h6",{className:"card-text"},e.sub),o.a.createElement("p",null,e.description),e.link.url&&o.a.createElement(p.a,{onClick:function(){window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))};t.a=d},300:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(21),c=n(22),l=n(286),u=n(285),s=n.n(u),f=n(11),p=n(37),d=function(e){var t=e.data,n=t.project,u=t.title;return o.a.createElement(a.b,null,o.a.createElement(c.d,{primary:!0},u.text),o.a.createElement(i.b,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",alignItems:"center",justify:"space-around"},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement(i.b,{items:!0},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(l.b,{size:30,src:e.img,alt:"Card cap"}))),o.a.createElement(i.b,{items:!0},o.a.createElement("h2",{className:"card-title"},e.name),o.a.createElement("h6",{className:"card-text"},e.sub),o.a.createElement("p",null,e.description),e.link.url&&o.a.createElement(p.a,{onClick:function(){window.open(e.link.url,"_blank")},primary:"primary"},e.link.text)))})))};t.a=d},301:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(16),i=n(21),c=n(22),l=n(40),u=n(285),s=n.n(u),f=n(11),p=function(e){var t=e.data,n=t.image,r=t.title;return o.a.createElement(a.b,null,o.a.createElement(c.d,{primary:!0},r.text),o.a.createElement(i.a,{container:!0,md:!0,lg:!0,xl:!0,direction:"row",justify:"space-between",autoFit:!0},n.field.sort(Object(f.a)("DESC","order")).map(function(e,t){return o.a.createElement(i.a,{items:!0,key:t},o.a.createElement(i.b,{items:!0},o.a.createElement(s.a,{height:200,offset:100},o.a.createElement(l.a,{icon:e.icon||"hamburger"}))),o.a.createElement(i.b,{items:!0},o.a.createElement("h3",null,e.name),o.a.createElement("p",null,e.text)))})))};t.a=p},74:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(6),u=n(12),s=n(11),f=n(287),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.Theme,n=e.Data,r=this.props.location.pathname,o=n.Section.field.sort(Object(s.a)("DESC","order")).filter(function(e){return e.placement===r});return c.a.createElement(i.Fragment,null,o.map(function(e,n){return c.a.createElement(i.Fragment,{key:n},c.a.createElement(f.a,{type:e.type||"biography",data:e.option,Theme:t}))}))}}]),t}(i.PureComponent),m=function(e){return{Theme:e.Share.Theme,Data:e.Share.websiteContent}};t.default=Object(l.e)(Object(u.b)(m)(d))}});
//# sourceMappingURL=0.7442057b.chunk.js.map