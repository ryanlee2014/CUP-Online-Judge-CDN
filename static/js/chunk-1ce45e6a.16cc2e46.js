(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ce45e6a"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"2cd4":function(t,e,n){"use strict";var i=n("9ab4"),o=n("2b0e"),r=n("60a3"),s=n("3657"),a=n("0443"),c=class extends o["a"]{mounted(){s["a"].init(this.$store.getters.homepage),document.title=a.title}};c=Object(i["c"])([r["a"]],c),e["a"]=c},"94d8":function(t,e,n){},a67e:function(t,e,n){"use strict";var i=n("94d8"),o=n.n(i);o.a},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(1),s=d(r),a=n(3),c=d(a),l=n(4),u=d(l);function d(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function h(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var v=function(t){function e(t,n){f(this,e);var i=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return h(e,t),o(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===i(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return m("action",t)}},{key:"defaultTarget",value:function(t){var e=m("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return m("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(c.default);function m(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=v},function(t,e,n){"use strict";var i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(2),s=a(r);function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,s.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,s.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=l},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,s=i.length;r<s;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var i=n(5),o=n(6);function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return s(t,e,n);if(i.nodeList(t))return a(t,e,n);if(i.string(t))return c(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function s(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function a(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function c(t,e,n){return o(document.body,t,e,n)}t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var i=n(7);function o(t,e,n,i,o){var r=s.apply(this,arguments);return t.addEventListener(n,r,o),{destroy:function(){t.removeEventListener(n,r,o)}}}function r(t,e,n,i,r){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,i,r)})))}function s(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=r},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o}])}))},bc99:function(t,e,n){"use strict";var i=n("111f"),o=n.n(i);e["default"]=o.a},d3a2:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui negative message"},[n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),n("p",[t._v(t._s(t.$t("context")))])])},o=[],r=n("9ab4"),s=n("60a3"),a=n("2b0e"),c=class extends a["a"]{};c=Object(r["c"])([s["a"]],c);var l=c,u=l,d=n("2877"),f=n("bc99"),p=Object(d["a"])(u,i,o,!1,null,"5816c0f2",null);"function"===typeof f["default"]&&Object(f["default"])(p);e["a"]=p.exports},efe2:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.contest_mode||t.contestMode?n("ContestMode"):n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("source code"))+" ")]),n("div",{staticClass:"ui existing segment"},[n("div",{staticClass:"ui raised segment"},[t.code?n("div",{staticClass:"ui tiny statistics"},[n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.from+" "+t.problem_id)+" "),n("span",{staticClass:"subscript"})]),n("div",{staticClass:"label none-transform"},[t._v(" Problem ")])]),n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.user_id)+" "),n("span",{staticClass:"subscript"})]),n("div",{staticClass:"label none-transform"},[t._v(" User ")])]),n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.time)+" "),n("span",{staticClass:"subscript"},[t._v("ms")])]),n("div",{staticClass:"label none-transform"},[t._v(" Running Time ")])]),n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.memory)+" "),n("span",{staticClass:"subscript"},[t._v("KB")])]),n("div",{staticClass:"label none-transform"},[t._v(" Used Memory ")])]),n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.language)+" "),n("span",{staticClass:"subscript"})]),n("div",{staticClass:"label none-transform"},[t._v(" Language ")])]),n("div",{staticClass:"statistic"},[n("div",{class:"value none-transform "+t.judge_color},[n("i",{class:t.icon+" icon"}),t._v(" "+t._s(t.result)+" "),n("span",{staticClass:"subscript"})]),n("div",{staticClass:"label none-transform"},[t._v(" Result ")])]),t.privilege?n("div",{staticClass:"statistic"},[n("div",{staticClass:"value none-transform"},[n("a",{staticStyle:{cursor:"pointer"},on:{click:t.rejudge}},[t._v("重新判题")]),n("span",{staticClass:"subscript"})]),n("div",{staticClass:"label none-transform"},[n("a",{staticStyle:{cursor:"pointer"},on:{click:t.ban}},[t._v("封禁")])])]):t._e()]):t._e()]),t.code?n("div",{staticClass:"ui raised segment"},[n("div",{staticClass:"ui top right attached label"},[n("a",{attrs:{"data-clipboard-target":"#code",id:"copy"}},[t._v("Copy Source Code")])]),n("div",{attrs:{id:"code"},domProps:{innerHTML:t._s(t.code)}})]):t._e(),t.statement?n("div",{staticClass:"ui existing segment",domProps:{textContent:t._s(t.statement)}}):t._e()])])},o=[],r=(n("e260"),n("cca6"),n("ddb0"),n("9ab4")),s=n("2cd4"),a=n("d3a2"),c=n("60a3"),l=n("2f62"),u=n("b311"),d=new u("#copy"),f=n("1157"),p=class extends(Object(c["b"])(s["a"])){constructor(){super(...arguments),this.code="",this.time=0,this.memory=0,this.problem_id=0,this.result=0,this.language=0,this.user_id="",this.judge_color=[],this.icon=[],this.from="",this.statement=!1,this.contest_mode=!1,this.privilege=!1,this.error=!1}created(){this.user_id=this.$store.getters.user_id}mounted(){var t=this.$route.params.solution_id;document.title="Solution ".concat(t," -- ").concat(document.title),this.bindClipboardDOM(),this.initData()}initData(){this.axios.get("/api/source/".concat(this.$route.params.from,"/").concat(this.$route.params.solution_id)).then(t=>{var e=t.data;if("OK"===e.status)Object.assign(this,e.data),this.privilege=e.privilege&&"local"===this.$route.params.from,this.problem_id=Math.abs(e.data.problem);else{if(e.contest_mode)return void(this.contest_mode=!0);this.code="",this.statement=e.statement,this.error=!0}})}bindClipboardDOM(){d.on("success",(function(){f("#copy").popup({title:"Finished",content:"Your code is in your clipboard",on:"click"}).popup("show")}))}ban(){this.axios.post("/api/status/ban_submission",{solution_id:this.$route.params.solution_id}).then(t=>{alert("Server receive your request"),console.log(t.data)})}rejudge(){this.axios.post("/api/status/rejudge",{solution_id:this.$route.params.solution_id}).then(t=>{alert("Server receive youre request"),console.log(t.data)})}};p=Object(r["c"])([Object(c["a"])({components:{ContestMode:a["a"]},computed:Object(l["b"])(["contestMode"])})],p);var h=p,v=h,m=(n("a67e"),n("2877")),y=Object(m["a"])(v,i,o,!1,null,"9f09ed4e",null);e["default"]=y.exports}}]);