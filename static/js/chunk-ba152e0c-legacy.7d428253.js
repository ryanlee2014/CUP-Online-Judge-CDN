(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba152e0c"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),i=a("99de"),s=a("7e84"),o=a("262e"),c=a("9ab4"),u=a("2b0e"),l=a("60a3"),d=a("3657"),p=a("0443"),v=function(t){function e(){return Object(n["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){d["a"].init(this.$store.getters.homepage),document.title=p.title}}]),e}(u["a"]);v=Object(c["c"])([l["a"]],v),e["a"]=v},"5dbd":function(t,e,a){"use strict";a("99af"),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("96cf");var n=a("2ef0"),r=a.n(n),i=function(){},s=i;function o(t){return function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];s.apply(void 0,[t].concat(a))}}a.d(e,"a",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"b",(function(){return d})),a.d(e,"f",(function(){return p})),a.d(e,"e",(function(){return v})),a.d(e,"c",(function(){return m}));var c=o("Decorator mounted: ");function u(t,e){return function(a,n,i){c("debounce, target:".concat(a.constructor.name,", propertyName:").concat(n));var s=i.value;return i.value=r.a.debounce(s,t,e),i}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e,a,n){c("Interval, target:".concat(e.constructor.name,", propertyName:").concat(a));var r=n.value;n.value=function(){for(var n=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");r.apply(this,s),this.timer_.push(setInterval((function(){c("".concat(e.constructor.name,".").concat(a," called.")),r.apply(n,s)}),t))},s("mounted interval")}}function d(t,e,a){c("Debuglogging, target:".concat(t.constructor.name,", propertyName:").concat(e));var n=a.value;a.value=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var i=a.map((function(t){return JSON.stringify(t)})).join(),o=n.apply(this,a),c=JSON.stringify(o);return s("Call: ".concat(e,"(").concat(i,") => ").concat(c)),o}}function p(t,e,a){c("WebSocketRequest, target:".concat(t.constructor.name,", propertyName:").concat(e));var n=a.value;a.value=function(){if(this.$socket.connected){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return n.apply(this,e)}alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function v(t){return function(e,a,n){c("Lock, target:".concat(e.constructor.name,", propertyName:").concat(a));var r=n.value;n.value=function(){var e,a,n,i,s=arguments;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(t.acquireAsync());case 2:for(e=s.length,a=new Array(e),n=0;n<e;n++)a[n]=s[n];return i=r.apply(this,a),t.release(),o.abrupt("return",i);case 6:case"end":return o.stop()}}),null,this)}}}function m(t,e,a){var n=a.value;a.value=function(){try{for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return n.apply(this,e)}catch(r){alert(r.message)}}}},7803:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"html ui top attached segment"},[a("div",{staticClass:"ui large form"},[a("h4",[t._v("根据要求，请实名注册账号，非法账号将定期删除，严重者封禁IP")]),a("div",{staticClass:"ui form"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("user_id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"text",placeholder:"请填写真实学号",name:"user_id",id:"user_id"},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("nick")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nick,expression:"nick"}],attrs:{type:"text",name:"nick",placeholder:"请填写真实姓名"},domProps:{value:t.nick},on:{input:function(e){e.target.composing||(t.nick=e.target.value)}}})])]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",id:"password",type:"password",placeholder:"必填"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("repeat password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{name:"rptpassword",id:"rptpassword",type:"password",placeholder:"必填"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}})])]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("retrieve password question")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmQuestion,expression:"confirmQuestion"}],attrs:{name:"confirmquestion",id:"confirmquestion",placeholder:"必填"},domProps:{value:t.confirmQuestion},on:{input:function(e){e.target.composing||(t.confirmQuestion=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("retrieve password answer")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmAnswer,expression:"confirmAnswer"}],attrs:{name:"confirmanswer",id:"confirmanswer",placeholder:"必填"},domProps:{value:t.confirmAnswer},on:{input:function(e){e.target.composing||(t.confirmAnswer=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("invite code")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inviteCode,expression:"inviteCode"}],attrs:{name:"invite_code",placeholder:"必填"},domProps:{value:t.inviteCode},on:{input:function(e){e.target.composing||(t.inviteCode=e.target.value)}}})]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("captcha")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{name:"vcode",size:"4",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})]),t._m(0)])]),a("button",{staticClass:"ui primary button",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Submit")]),a("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("Reset")]),a("div",{staticClass:"ui error message"}),a("br"),a("br")])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("label",{staticStyle:{opacity:"0"}},[t._v("Captcha image")]),a("img",{attrs:{alt:"click to change",src:"/api/captcha?from=register",onclick:"this.src='/api/captcha?from=register&random='+Math.random()",width:"20%"}})])}],i=a("d4ec"),s=a("bee2"),o=a("99de"),c=a("7e84"),u=a("262e"),l=a("9ab4"),d=a("60a3"),p=a("2cd4"),v=a("5dbd"),m={confirmQuestion:"",inviteCode:"",nick:"",password:"",userId:"",captcha:"",repeatPassword:"",confirmAnswer:""},f=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.captcha="",t.repeatPassword="",t.confirmAnswer="",t.confirmQuestion="",t.inviteCode="",t.nick="",t.password="",t.userId="",t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){}},{key:"validatePassword",value:function(){if(this.password!==this.repeatPassword)throw new Error("两次输入的密码不一致")}},{key:"submit",value:function(){var t=this;this.validatePassword();var e={confirmAnswer:this.confirmAnswer,confirmQuestion:this.confirmQuestion,inviteCode:this.inviteCode,nick:this.nick,password:this.password,userId:this.userId,captcha:this.captcha};this.axios.post("/api/register",e).then((function(e){var a=e.data;"OK"===a.status&&(alert("注册成功"),t.$router.push({path:"/login"}))})).catch((function(t){alert(t.statement)}))}},{key:"reset",value:function(){Object.assign(this,m)}}]),e}(Object(d["b"])(p["a"]));Object(l["c"])([v["c"]],f.prototype,"submit",null),f=Object(l["c"])([d["a"]],f);var h=f,w=h,g=a("2877"),b=Object(g["a"])(w,n,r,!1,null,"f0aa2404",null);e["default"]=b.exports}}]);