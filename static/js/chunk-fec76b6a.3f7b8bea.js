(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fec76b6a"],{"0028":function(t,e,a){},"180a":function(t,e,a){"use strict";a("e260"),a("841c"),a("ddb0");var s=a("9ab4"),i=a("2b0e"),r=a("60a3"),n=class extends i["a"]{constructor(){super(...arguments),this.current_tag="status",this.user_id=null,this.problem_result=-1,this.problem_id=null,this.language=-1,this.sim_checkbox=!1,this.privilege=0,this.auto_refresh=!0}onSimCheckboxChanged(){this.search()}onAutoRefreshChanged(t){t&&this.search()}onRouteQueryChanged(){this.fetchData()}fetchData(){}search(){console.error("Implement this method")}getUserId(){return this.$route.query?this.$route.query.user_id:null}getResult(){return this.$route.query?this.$route.query.result:null}getProblemID(){return this.$route.query?this.$route.query.problem_id:null}getLanguage(){return this.$route.query?this.$route.query.language:null}setQuery(){var t={};this.user_id&&this.user_id.length>0&&(t["user_id"]=this.user_id),this.problem_result&&-1!==this.problem_result&&(t["result"]=this.problem_result),this.problem_id&&0!==this.problem_id&&(t["problem_id"]=this.problem_id),this.language&&-1!==this.language&&(t["language"]=this.language),this.$router.push({path:this.$route.path,query:t})}tag(t){this.current_tag=t}list_self_only(){var t=this.$store.getters.user_id;null==this.user_id||this.user_id!==t?this.user_id=t:this.user_id=null,this.search()}};Object(s["c"])([Object(r["d"])("sim_checkbox"),Object(r["d"])("privilege")],n.prototype,"onSimCheckboxChanged",null),Object(s["c"])([Object(r["d"])("auto_refresh")],n.prototype,"onAutoRefreshChanged",null),Object(s["c"])([Object(r["d"])("$route.query")],n.prototype,"onRouteQueryChanged",null),n=Object(s["c"])([r["a"]],n),e["a"]=n},"20a2":function(t,e,a){"use strict";var s=a("9ab4"),i=a("2b0e"),r=a("2fe1"),n=a("3657"),{getAvatarURL:o,hasAvatarURL:l}=n["a"],c=class extends i["a"]{getAvatarURL(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return o.apply(this,e)}hasAvatarURL(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return l.apply(this,e)}};c=Object(s["c"])([r["b"]],c),e["a"]=c},"54e8":function(t,e,a){"use strict";var s=a("962d"),i=a.n(s);e["default"]=i.a},"5dbd":function(t,e,a){"use strict";var s=a("1da1"),i=a("2ef0"),r=a.n(i),n=(a("e260"),a("ddb0"),function(){}),o=n;function l(t){return function(){for(var e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];o(t,...a)}}a.d(e,"a",(function(){return u})),a.d(e,"d",(function(){return d})),a.d(e,"b",(function(){return h})),a.d(e,"f",(function(){return p})),a.d(e,"e",(function(){return _})),a.d(e,"c",(function(){return m}));var c=l("Decorator mounted: ");function u(t,e){return function(a,s,i){c("debounce, target:".concat(a.constructor.name,", propertyName:").concat(s));var n=i.value;return i.value=r.a.debounce(n,t,e),i}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e,a,s){c("Interval, target:".concat(e.constructor.name,", propertyName:").concat(a));var i=s.value;s.value=function(){for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");i.apply(this,r),this.timer_.push(setInterval(()=>{c("".concat(e.constructor.name,".").concat(a," called.")),i.apply(this,r)},t))},o("mounted interval")}}function h(t,e,a){c("Debuglogging, target:".concat(t.constructor.name,", propertyName:").concat(e));var s=a.value;a.value=function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var r=a.map(t=>JSON.stringify(t)).join(),n=s.apply(this,a),l=JSON.stringify(n);return o("Call: ".concat(e,"(").concat(r,") => ").concat(l)),n}}function p(t,e,a){c("WebSocketRequest, target:".concat(t.constructor.name,", propertyName:").concat(e));var s=a.value;a.value=function(){if(this.$socket.connected){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return s.apply(this,e)}alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function _(t){return function(e,a,i){c("Lock, target:".concat(e.constructor.name,", propertyName:").concat(a));var r=i.value;i.value=Object(s["a"])((function*(){yield t.acquireAsync();for(var e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];var i=r.apply(this,a);return t.release(),i}))}}function m(t,e,a){var s=a.value;a.value=function(){try{for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return s.apply(this,e)}catch(i){alert(i.message)}}}},"6e89":function(t,e,a){"use strict";a.d(e,"a",(function(){return _}));a("e260"),a("25f0"),a("ddb0");var s=a("9ab4"),i=a("2b0e"),r=a("60a3"),n=a("5a0c"),o=a.n(n),l=a("3657"),c=a("1157"),u=a.n(c),d=a("2ef0"),h=a.n(d),p=u.a,_=class extends i["a"]{constructor(){super(...arguments),this.user={},this.dayjs=o.a}memory_parse(t){var e=["KB","MB","GB"],a=0,s=parseInt(t);if(isNaN(s))return t;while(s>1024)s/=1024,++a;return s.toString().substring(0,5)+e[a]}updated(){p(".list-complete-item").popup({on:"hover",hoverable:!0,positon:"top center"})}time_parse(t){var e=["ms","s"],a=0,s=parseInt(t);if(isNaN(s))return t;while(s>1e3)++a,s/=1e3;return s.toString().substring(0,5)+e[a]}detect_place(t){if(!t)return"未知";var e={intranet_ip:t,place:""};return l["a"].detectIP(e),e.place}infoRoute(t){return 11===parseInt(t)?"compile":"runtime"}get problem_lists(){h.a.forEach(this.problem_list,t=>{this.user[t.user_id]=this.user[t.user_id]||t});var t,e=document.createElement("div");for(var a in this.problem_list)e.innerHTML=this.problem_list[a].nick,t=this.problem_list[a],t.nick=e.innerText;return this.problem_list}};Object(s["c"])([Object(r["c"])({default:()=>[]})],_.prototype,"problem_list",void 0),Object(s["c"])([Object(r["c"])({default:()=>[]})],_.prototype,"answer_icon",void 0),Object(s["c"])([Object(r["c"])({default:()=>[]})],_.prototype,"answer_class",void 0),Object(s["c"])([Object(r["c"])({default:()=>{return{}}})],_.prototype,"target",void 0),Object(s["c"])([Object(r["c"])({default:()=>[]})],_.prototype,"language_name",void 0),Object(s["c"])([Object(r["c"])({default:()=>[]})],_.prototype,"result",void 0),Object(s["c"])([Object(r["c"])({default:""})],_.prototype,"self",void 0),Object(s["c"])([Object(r["c"])({default:!1})],_.prototype,"isadmin",void 0),Object(s["c"])([Object(r["c"])()],_.prototype,"end",void 0),Object(s["c"])([Object(r["c"])()],_.prototype,"finish",void 0),_=Object(s["c"])([r["a"]],_)},"88d0":function(t,e,a){},"93cd":function(t,e,a){"use strict";var s=a("0028"),i=a.n(s);i.a},"962d":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"auto refresh":"自动刷新","show cheat only":"仅显示判重提交","test run invisible":"不显示测试运行","show user only":"仅显示本人提交","submit status":"提交状态","submit graph":"提交图表","result statistic":"结果统计","user statistic":"用户统计"},"en":{"auto refresh":"Auto Refresh","show cheat only":"Show Cheating Only","test run invisible":"Exclude Test Run","submit status":"Submit Status","show user only":"Show Yourself Only","submit graph":"Submission Graph","result statistic":"Result Statistics","user statistic":"User statistics"},"ja":{"auto refresh":"自動リフレッシュ","show cheat only":"チート提出のみを表示","test run invisible":"テスト提出非表示","submit status":"提出リスト","show user only":"自分だけを表示","submit graph":"提出グラフ","result statistics":"結果統計","user statistic":"ユーザー統計"}}'),delete t.options._Ctor}},d3a2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v("竞赛模式")]),a("p",[t._v("根据管理员设置，该页面禁止进入")])])}],r=a("9ab4"),n=a("60a3"),o=a("2b0e"),l=class extends o["a"]{};l=Object(r["c"])([n["a"]],l);var c=l,u=c,d=a("2877"),h=Object(d["a"])(u,s,i,!1,null,"3631ce6f",null);e["a"]=h.exports},d78e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"},[a("ContestMode")],1):a("div",{staticClass:"padding ui container"},[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("status"))+" ")]),a("div",{staticClass:"ui top attached tabular menu"},[a("a",{class:("status"==t.current_tag?"active":"")+" item",attrs:{id:"submitstatus"},on:{click:function(e){return t.tag("status",e)}}},[t._v(t._s(t.$t("submit status")))]),a("a",{class:("graph"==t.current_tag?"active":"")+" item",attrs:{id:"graph"},on:{click:function(e){return t.tag("graph",e)}}},[t._v(t._s(t.$t("submit graph")))]),a("a",{class:("result"==t.current_tag?"active":"")+" item",on:{click:function(e){return t.tag("result",e)}}},[t._v(" "+t._s(t.$t("result statistic"))+" ")]),a("a",{class:("user"==t.current_tag?"active":"")+" item",on:{click:function(e){return t.tag("user",e)}}},[t._v(" "+t._s(t.$t("user statistic"))+" ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"status"==t.current_tag,expression:"current_tag == 'status'"}],staticClass:"ui bottom attached segment"},[a("div",{staticClass:"input-append",attrs:{align:"center"}},[a("form",{staticClass:"ui form segment",attrs:{id:"simform",method:"get"}},[a("div",{staticClass:"four fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("problem_id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.problem_id,expression:"problem_id"}],staticClass:"form-control",attrs:{name:"problem_id",size:"4",type:"text"},domProps:{value:t.problem_id},on:{input:function(e){e.target.composing||(t.problem_id=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("user_id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],staticClass:"form-control",attrs:{name:"user_id",size:"4",type:"text",value:""},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("language")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],attrs:{name:"language",type:"hidden"},domProps:{value:t.language},on:{change:function(e){t.language=e.target.value},input:function(e){e.target.composing||(t.language=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("All")]),a("div",{staticClass:"menu"},[t._m(0),t._l(Array.from(Array(t.language_name?t.language_name.length:0).keys()),(function(e){return a("div",{key:e,staticClass:"item",attrs:{"data-value":e}},[a("i",{class:t.language_icon[e]+" color"}),t._v(" "+t._s(t.language_name[e])+" ")])}))],2)])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("result")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.problem_result,expression:"problem_result"}],attrs:{type:"hidden"},domProps:{value:t.problem_result},on:{change:function(e){t.problem_result=e.target.value},input:function(e){e.target.composing||(t.problem_result=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("All")]),a("div",{staticClass:"menu"},[t._m(1),t._l(Array.from(Array(t.judge_color?t.judge_color.length:0).keys()),(function(e){return a("div",{key:e,staticClass:"item",attrs:{"data-value":e}},[a("span",{class:t.judge_color[e]},[a("i",{class:t.judge_icon[e]+" icon"}),t._v(" "+t._s(t.result[e])+" ")])])}))],2)])])]),a("div",{class:(t.isadmin?"five":"four")+" fields center aligned"},[a("div",{staticClass:"field",staticStyle:{margin:"auto"}},[a("div",{staticClass:"ui toggle checkbox"},[a("input",{attrs:{checked:"true",type:"checkbox"},on:{click:function(e){t.auto_refresh=!t.auto_refresh}}}),a("label",[t._v(t._s(t.$t("auto refresh")))])])]),a("div",{staticClass:"field",staticStyle:{margin:"auto"}},[a("div",{staticClass:"ui toggle checkbox"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.sim_checkbox=!t.sim_checkbox}}}),a("label",[t._v(t._s(t.$t("show cheat only")))])])]),t.isadmin?a("div",{staticClass:"field",staticStyle:{margin:"auto"}},[a("div",{staticClass:"ui toggle checkbox"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.privilege=!t.privilege}}}),a("label",[t._v(t._s(t.$t("test run invisible")))])])]):t._e(),a("div",{staticClass:"field",staticStyle:{margin:"auto"}},[a("div",{staticClass:"ui toggle checkbox"},[a("input",{attrs:{type:"checkbox"},on:{click:t.list_self_only}}),a("label",[t._v(t._s(t.$t("show user only")))])])]),a("div",{staticClass:"field",staticStyle:{margin:"auto"}},[a("button",{staticClass:"ui labeled icon mini button",on:{click:function(e){return e.preventDefault(),t.search(e)}}},[a("i",{staticClass:"search icon"}),t._v(t._s(t.$t("search"))+" ")])])])])]),a("br"),a("div",{staticClass:"row"},[a("status-table",{attrs:{answer_class:t.judge_color,answer_icon:t.icon_list,isadmin:t.isadmin,language_name:t.language_name,problem_list:t.problem_list,result:t.result,self:t.self,target:t.target}}),t.dim?a("div",{staticClass:"ui active inverted dimmer"},[a("div",{staticClass:"ui large text loader"},[t._v("Loading")])]):t._e()],1),a("br"),a("div",{staticClass:"row"},[a("a",{class:"ui button "+(0==t.page_cnt?"disabled":""),on:{click:function(e){0!=t.page_cnt&&t.page(-t.page_cnt,e)}}},[t._v("Top")]),a("div",{staticClass:"ui buttons"},[a("button",{class:"ui left labeled icon button "+(0==t.page_cnt?"disabled":""),on:{click:function(e){0!=t.page_cnt&&t.page(-1,e)}}},[a("i",{staticClass:"left arrow icon"}),t._v(" Prev ")]),a("div",{staticClass:"or"}),a("button",{class:"ui right labeled icon button "+(0==t.problem_list.length?"disabled":""),on:{click:function(e){0!=t.problem_list.length&&t.page(1,e)}}},[a("i",{staticClass:"right arrow icon"}),t._v(" Next ")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"graph"==t.current_tag,expression:"current_tag == 'graph'"}],staticClass:"ui attached bottom segment"},[t._m(2),t._m(3)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"result"==t.current_tag,expression:"current_tag == 'result'"}],staticClass:"ui attached bottom segment"},[t._m(4)]),a("div",{directives:[{name:"show",rawName:"v-show",value:"user"==t.current_tag,expression:"current_tag == 'user'"}],staticClass:"ui attached bottom segment"},[a("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("browser")))]),a("div",{staticClass:"amcharts",attrs:{id:"browser_statistics"}},[t._v(t._s(t.$t("loading")))]),a("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("os")))]),a("div",{staticClass:"amcharts",attrs:{id:"os_statistics"}},[t._v(t._s(t.$t("loading")))]),a("h2",{staticClass:"ui dividing header"},[t._v("Chord graph")]),a("div",{staticClass:"amcharts",attrs:{id:"chord_graph"}},[t._v(t._s(t.$t("loading")))])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",attrs:{"data-value":"-1"}},[t._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",attrs:{"data-value":"-1"}},[t._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"auto"}},[a("canvas",{attrs:{id:"canvas"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"eight wide column"},[a("div",{staticStyle:{width:"550px"}},[a("canvas",{attrs:{id:"subtime"}})])]),a("div",{staticClass:"eigth wide column"},[a("div",{staticStyle:{width:"550px"}},[a("canvas",{attrs:{id:"logtime"}})])])]),a("div",{staticClass:"row",staticStyle:{width:"100%"}},[a("div",{staticStyle:{width:"100%",height:"600px"},attrs:{id:"register_timeline"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"90%",margin:"auto"}},[a("canvas",{attrs:{id:"bar"}})])}],r=(a("e260"),a("4e82"),a("25f0"),a("ddb0"),a("1da1")),n=a("9ab4"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"ui padded selectable unstackable table",attrs:{align:"center",width:"90%"}},[a("thead",[a("tr",{staticClass:"toprow"},[a("th",{attrs:{width:"8%"}},[t._v(t._s(t.$t("solution_id")))]),a("th",[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"four wide column"}),a("div",{staticClass:"twelve wide column"},[t._v(t._s(t.$t("user_id")))])])]),a("th",[t._v(t._s(t.$t("problem_id")))]),a("th",{attrs:{width:"15%"}},[t._v(t._s(t.$t("result")))]),t.isadmin?a("th",[t._v(t._s(t.$t("contest_id")))]):t._e(),a("th",[t._v(t._s(t.$t("memory"))+"/"+t._s(t.$t("time")))]),a("th",[t._v(t._s(t.$t("language"))+"/"+t._s(t.$t("length")))]),a("th",[t._v(t._s(t.$t("submit_time"))+"/"+t._s(t.$t("judger")))])])]),a("transition-group",{attrs:{name:"list-complete",tag:"tbody"}},t._l(t.problem_lists,(function(e){return a("tr",{key:e.solution_id,class:(e.sim?"warning":"")+" list-complete-item",attrs:{"data-html":"<b>IP:"+e.ip+"</b><br><p>类型:"+t.detect_place(e.ip)+"</p><p>用户指纹:<br>"+e.fingerprint+"<br>硬件指纹:<br>"+e.fingerprintRaw+"</p>"}},[a("td",[t._v(t._s(e.solution_id))]),a("td",[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"four wide column",staticStyle:{margin:"auto"}},[a("img",{staticClass:"ui avatar image",staticStyle:{"object-fit":"cover"},attrs:{src:t.getAvatarURL(e)}})]),a("div",{staticClass:"twelve wide column"},[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)),a("br"),t._v(t._s(e.nick)+" ")])],1)])]),a("td",[a("div",{staticClass:"center"},[a("router-link",{attrs:{to:"/problem/submit/"+Math.abs(e.problem_id)}},[t._v(t._s(Math.abs(e.problem_id))+" ")])],1)]),a("td",[a("router-link",{class:t.answer_class[e.result],attrs:{to:"/status/info/"+t.infoRoute(e.result)+"/"+e.solution_id}},[a("i",{class:t.answer_icon[e.result]+" icon"}),t._v(" "+t._s(t.$t(t.result[e.result]))+" ")]),e.sim||3==e.result&&e.pass_point&&e.total_point?a("br"):t._e(),3==e.result&&e.pass_point&&e.total_point?a("a",{class:t.answer_class[e.result]},[a("i",{class:t.answer_icon[e.result]+" icon",staticStyle:{opacity:"0"}}),t._v("("+t._s(e.pass_point||0)+"/"+t._s(e.total_point||0)+")")]):t._e(),e.sim?a("router-link",{class:t.answer_class[e.result],attrs:{to:"/compare/"+e.solution_id+"/"+e.sim_id}},[3==e.result?a("br"):t._e(),e.sim?a("span",[a("i",{class:t.answer_icon[e.result]+" icon",staticStyle:{opacity:"0"}}),t._v(t._s("("+e.sim+"%)"))]):t._e()]):t._e(),4!==e.result&&e.pass_rate>.05?a("br"):t._e(),4!==e.result&&e.pass_rate>.05?a("a",{class:t.answer_class[e.result]},[a("i",{class:t.answer_icon[e.result]+" icon",staticStyle:{opacity:"0"}}),t._v("Passed:"+t._s((100*e.pass_rate).toFixed(1))+"%")]):t._e()],1),t.isadmin?a("td",[e.contest_id?a("router-link",{attrs:{to:"/contest/"+e.contest_id}},[t._v(t._s(e.contest_id))]):a("span",[t._v("无")])],1):t._e(),a("td",[a("div",[a("span",{staticClass:"boldstatus"},[t._v(t._s(t.memory_parse(e.memory)))]),a("br"),a("span",{staticClass:"boldstatus"},[t._v(t._s(t.time_parse(e.time)))])])]),a("td",[t.self===e.user_id||t.isadmin||1==e.share?a("router-link",{staticClass:"boldstatus",attrs:{to:"/usercode/local/"+e.solution_id}},[t._v(" "+t._s(t.$t("view"))+" ")]):a("span",{staticClass:"boldstatus"},[t._v(t._s(t.language_name[e.language]))]),(t.self===e.user_id||t.isadmin||1==e.share)&&e.problem_id?a("span",[t._v(" / ")]):t._e(),(t.self===e.user_id||t.isadmin||1==e.share)&&e.problem_id?a("router-link",{staticClass:"boldstatus",attrs:{to:"/problem/submit/"+Math.abs(e.problem_id)+"/"+Math.abs(e.solution_id)}},[t._v(t._s(t.$t("edit"))+" ")]):t._e(),a("br"),t.self===e.user_id||t.isadmin||1==e.share?a("span",{staticClass:"boldstatus"},[t._v(t._s(t.language_name[e.language])+" / ")]):t._e(),a("span",{staticClass:"boldstatus"},[t._v(t._s(e.length)+"B")])],1),a("td",[t._v(t._s(t.dayjs(e.in_date).format("YYYY-MM-DD HH:mm:ss"))),a("br"),t._v(t._s(e.judger))])])})),0)],1)},l=[],c=a("20a2"),u=a("60a3"),d=a("6e89"),h=class extends(Object(u["b"])(c["a"],d["a"])){};h=Object(n["c"])([u["a"]],h);var p=h,_=p,m=(a("fd77"),a("2877")),g=Object(m["a"])(_,o,l,!1,null,"ff9fc996",null),v=g.exports,b=a("71c9"),f=a("c497"),w=a("d3a2"),y=a("2cd4"),C=a("1157"),k=a.n(C),x=a("30ef"),j=a.n(x),O=a("2ef0"),S=a.n(O),$=a("180a"),A=a("fa82"),R=a.n(A),N=a("5dbd"),E=a("2f62"),I=(k.a,a("5a54").default);function q(t){var e=t.result,a=t.label,s={};S.a.forEach(e,(function(t){s[t[a[0]]]=s[t[a[0]]]||{},s[t[a[0]]][t[a[1]]]={submit:t.submit,accepted:t.accepted||0}}));var i=[],r=[],n=[],o=[];S.a.forEach(s,(function(t,e){S.a.forEach(s[e],(function(t,a){i.push(e.toString()+"-"+a.toString()),r.push(s[e][a].submit),n.push(s[e][a].accepted),o.push((s[e][a].accepted/s[e][a].submit*100).toString().substring(0,5))}))}));var l={type:"line",data:{labels:i,datasets:[{label:"总提交",yAxisID:"submit",backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,data:r,fill:!1},{label:"正确",yAxisID:"submit",fill:!1,backgroundColor:window.chartColors.blue,borderColor:window.chartColors.blue,data:n},{label:"正确率",fill:!1,yAxisID:"per",backgroundColor:window.chartColors.green,borderColor:window.chartColors.green,data:o}]},options:{responsive:!0,title:{display:!0,text:"统计信息"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"月份"}}],yAxes:[{id:"submit",position:"left",display:!0,scaleLabel:{display:!0,labelString:"提交"}},{id:"per",type:"linear",position:"right",scaleLabel:{display:!0,labelString:"正确率"},ticks:{max:100,min:0}}]}}},c=document.getElementById("canvas").getContext("2d");window.myLine=new j.a(c,l)}function D(t,e){t.sort((function(t,e){return e.cnt-t.cnt}));var a=window.chartColors,s={0:a.blue,1:a.blue,2:a.blue,3:a.blue,4:a.green,5:a.red,6:a.red,7:a.yellow,8:a.yellow,9:a.yellow,10:a.yellow,11:a.grey,12:a.blue,13:a.blue,14:a.red,15:a.red},i=[],r=[];i.push({label:"提交数",backgroundColor:[],borderColor:[],borderWidth:1,data:[]}),S.a.forEach(t,(function(t,a){r.push(e[t.result]),i[0].backgroundColor.push(s[t.result]),i[0].borderColor.push("white"),i[0].data.push(t.cnt)}));var n={labels:r,datasets:i};n=JSON.parse(JSON.stringify(n));var o=document.getElementById("bar").getContext("2d");window.myBar=new j.a(o,{type:"bar",data:n,options:{responsive:!0,legend:{display:!1,position:"top"},title:{display:!1,text:"提交统计"}}})}function M(t){var e=t.login;t=t.submit;var a=j.a.helpers.color,s={type:"radar",data:{labels:[],datasets:[{label:"提交分布",backgroundColor:a(window.chartColors.red).alpha(.2).rgbString(),borderColor:window.chartColors.red,pointBackgroundColor:window.chartColors.red,data:[]}]},options:{legend:{position:"top"},title:{display:!0,text:"提交时间分布"},scale:{ticks:{beginAtZero:!0}}}};S.a.forEach(t,(function(t){s.data.labels.push(t.hour+":00"),s.data.datasets[0].data.push(t.cnt)}));var i=JSON.parse(JSON.stringify(s));i.data.datasets=[{label:"登录分布",backgroundColor:a(window.chartColors.blue).alpha(.2).rgbString(),borderColor:window.chartColors.blue,pointBackgroundColor:window.chartColors.blue,data:[]}],S.a.forEach(e,(function(t){i.data.datasets[0].data.push(t.cnt)})),i.options.title.text="登录时间分布",new j.a(document.getElementById("subtime"),s),new j.a(document.getElementById("logtime"),i)}var L={};function T(t,e,a){var s={},i=e+"_name",r=e+"_version";if(!L[a]){if(window.temp_data_object&&window.temp_data_object[a])s=window.temp_data_object[a];else{if(void 0===t)return;L[a]=!0,S.a.forEach(t,(function(t){s[t[i]]||(s[t[i]]={name:t[i],version:{}}),s[t[i]].version[t[r]]?++s[t[i]].version[t[r]]:s[t[i]].version[t[r]]=1})),s=S.a.values(s),S.a.forEach(s,(function(t,e){s[e].children||(s[e].children=[]),S.a.forEach(t.version,(function(t,a){s[e].children.push({name:a,value:t})}))})),window.temp_data_object||(window.temp_data_object={}),window.temp_data_object[a]=s}b["e"](I);var n=b["d"](a,f["h"]);n.hiddenState.properties.opacity=0,window.chart_graph=n,n.data=s,n.colors.step=2,n.dataFields.value="value",n.dataFields.name="name",n.dataFields.children="children",n.zoomable=!0;var o=(new b["a"]).getFor("background"),l=n.seriesTemplates.create("0"),c=l.columns.template;c.column.cornerRadius(10,10,10,10),c.fillOpacity=0,c.strokeWidth=4,c.strokeOpacity=0;var u=n.seriesTemplates.create("1"),d=u.columns.template;u.tooltip.animationDuration=0,u.strokeOpacity=1,d.column.cornerRadius(10,10,10,10),d.fillOpacity=1,d.strokeWidth=4,d.stroke=o;var h=u.bullets.push(new f["f"]);h.locationY=.5,h.locationX=.5,h.label.text="{name}",h.label.fill=b["c"]("#ffffff"),n.maxLevels=2}}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chord_graph";if(!L[e]){L[e]=!0,b["e"](I);var a=b["d"]("chord_graph",f["b"]);S.a.forEach(t,(function(t){if(t.from>t.to){var e=t.from;t.from=t.to,t.to=e}})),t.sort((function(t,e){return e.value-t.value}));while(t.length>30)t.pop();a.data=t,a.dataFields.fromName="from",a.dataFields.toName="to",a.dataFields.value="value";var s=a.nodes.template;s.readerTitle="Click to show/hide or drag to rearrange",s.showSystemTooltip=!0;var i=a.links.template,r=i.bullets.push(new f["c"]);r.fillOpacity=1,r.circle.radius=5,r.locationX=.5,a.events.on("ready",(function(){for(var t=0;t<a.links.length;t++){var e=a.links.getIndex(t),s=e.bullets.getIndex(0);n(s)}}))}function n(t){var e=3e3*Math.random()+2e3,a=t.animate([{property:"locationX",from:0,to:1}],e);a.events.on("animationended",(function(t){n(t.target.object)}))}}function P(t){if(!L["timeline"]){L["timeline"]=!0,b["e"](I);var e=b["d"]("register_timeline",f["j"]);e.paddingRight=20;var a=e.titles.create();a.text="注册人数变化",a.fontSize=15,a.marginBottom=30,e.data=t;var s=e.xAxes.push(new f["e"]),i=(e.yAxes.push(new f["i"]),e.series.push(new f["g"]));i.dataFields.valueY="value",i.dataFields.dateX="date",i.tooltipText="{value}",i.strokeWidth=2,i.minBulletDistance=15,i.tooltip.background.cornerRadius=20,i.tooltip.background.strokeOpacity=0,i.tooltip.pointerOrientation="vertical",i.tooltip.label.minWidth=40,i.tooltip.label.minHeight=40,i.tooltip.label.textAlign="middle",i.tooltip.label.textValign="middle";var r=i.bullets.push(new f["c"]);r.circle.strokeWidth=2,r.circle.radius=4,r.circle.fill=b["c"]("#fff");var n=r.states.create("hover");n.properties.scale=1.3,e.cursor=new f["l"],e.cursor.behavior="panXY",e.cursor.xAxis=s,e.cursor.snapToSeries=i,e.scrollbarY=new b["b"],e.scrollbarY.parent=e.leftAxesContainer,e.scrollbarY.toBack(),e.scrollbarX=new f["k"],e.scrollbarX.series.push(i),e.scrollbarX.parent=e.bottomAxesContainer}}var Y=class extends(Object(u["b"])(y["a"],$["a"])){constructor(){super(...arguments),this.problem_list=[],this.icon_list=[],this.judge_color=[],this.judge_icon=[],this.target={},this.hasDrawedGraph=!1,this.language_name=[],this.result=[],this.language_icon=[],this.self="",this.isadmin=!1,this.page_cnt=0,this.dim=!1,this.prevSolutionId=0}onCurrentTagChanged(t){"user"===t?this.axios.get("/api/status/device/browser").then(t=>{var{data:e}=t;S.a.delay(T,0,e.data,"browser","browser_statistics"),this.axios.get("/api/status/device/os").then(t=>{var{data:e}=t;S.a.delay(T,0,e.data,"os","os_statistics")}),this.axios.get("/api/status/problem/solve_map").then(t=>{var{data:e}=t;S.a.delay(B,0,e.data)})}):"graph"===t&&(this.drawGraph(),this.axios.get("/api/user/register_timeline").then(t=>{var{data:e}=t;S.a.delay(P,0,e.data)}))}search_func(t){var e=this;this.setQuery(),e.problem_list=t.result,e.icon_list=t.const_list.icon_list,e.judge_color=t.const_list.judge_color,e.target=t.const_list.language.cn.status,e.judge_icon=t.const_list.judge_icon,e.language_icon=t.const_list.language_icon,e.language_name=t.const_list.language_name.local,e.result=t.const_list.result.cn,e.self=t.self,e.isadmin=t.isadmin||t.browse_code}search(){this.dim=!0,this.page_cnt=0;var t=this.problem_id||"null",e=this.user_id||"null",a=-1==this.language?"null":this.language,s=-1==this.problem_result?"null":this.problem_result,i=20*this.page_cnt,r=Number(this.sim_checkbox),n=Number(this.privilege);return this.axios.get("/api/status/".concat(t,"/").concat(e,"/").concat(a,"/").concat(s,"/").concat(i,"/").concat(r,"/").concat(n)).then(t=>{var{data:e}=t;this.dim=!1,this.search_func(e)})}page(t){this.dim=!0,this.page_cnt+=t;var e=this.problem_id||"null",a=this.user_id||"null",s=-1==this.language?"null":this.language,i=-1==this.problem_result?"null":this.problem_result,r=20*this.page_cnt,n=Number(this.sim_checkbox),o=Number(this.privilege);this.axios.get("/api/status/".concat(e,"/").concat(a,"/").concat(s,"/").concat(i,"/").concat(r,"/").concat(n,"/").concat(o)).then(t=>{var{data:e}=t;this.dim=!1,this.search_func(e)})}Submit(t){var e=this;return Object(r["a"])((function*(){if(e.auto_refresh&&!(t.submission_id<=e.prevSolutionId)&&(e.prevSolutionId=t.submission_id,(!e.privilege||!(t.val.id<=0||t.val.cid&&t.val.cid<=0))&&!e.sim_checkbox&&!e.privilege&&(!e.user_id||e.user_id===t.user_id)&&-1===e.problem_result&&(-1===e.language||e.language===t.val.language)&&!e.page_cnt&&(!e.problem_id||parseInt(e.problem_id)===Math.abs(t.val.id)))){var a={};a.problem_id=Math.abs(t.val.id),a.solution_id=t.submission_id,a.nick=t.nick,a.user_id=t.user_id,a.length=t.val.source.length,a.language=t.val.language,a.memory=a.time=0,a.in_date=(new Date).toISOString(),a.judger="RATH",a.result=0,a.ip=t.val.ip,a.total_point=0,a.fingerprint=t.val.fingerprint,a.fingerprintRaw=t.val.fingerprintRaw,a.sim=!1,a.avatar=!!t.val.avatar,a.contest_id=t.val.cid?Math.abs(t.val.cid):null,a.sim_id=null,e.problem_list.pop(),e.problem_list.unshift(a)}}))()}Update(t){if(this.auto_refresh){var e=t.solution_id,a=t.state,s=t.time,i=t.memory,r=t.pass_rate,n=t.sim,o=t.ip,l=parseInt(t.total_point)||0,c=t.fingerprint,u=t.fingerprintRaw,d=t.pass_point,h=this;S.a.forEach(this.problem_list,(function(p,_){var m=h.problem_list[_];m.solution_id==e&&(m.result=a,m.time=s,m.memory=i,m.sim=n,m.sim_id=t.sim_s_id,m.pass_rate=r,m.total_point=l,m.pass_point=d,m.contest_id=t.contest_id?Math.abs(t.contest_id):null,m.ip=o,m.fingerprint=c,m.fingerprintRaw=u)}))}}created(){this.fetchData().then(t=>{this.axios.get("/api/status/result").then(e=>{var a=e.data;D(a.data,t.const_list.result.cn)}),this.axios.get("/api/status/submit_hour").then(t=>{var e=t.data,a=(t,e)=>t.hour-e.hour;e.data.submit.sort(a),e.data.login.sort(a),M(e.data)})})}fetchData(){var t=(this.problem_id=this.getProblemID()||null)||"null",e=(this.user_id=this.getUserId()||null)||"null",a=-1==(this.language=this.getLanguage()||-1)?"null":this.getLanguage(),s=-1==(this.problem_result=this.getResult()||-1)?"null":this.problem_result;return this.axios.get("/api/status/".concat(t,"/").concat(e,"/").concat(a,"/").concat(s,"/0/")).then(t=>{var{data:e}=t;return this.dim=!1,this.search_func(e),e})}beforeDestroy(){this.sockets.unsubscribe("submit"),this.sockets.unsubscribe("result")}drawGraph(){this.hasDrawedGraph||(this.hasDrawedGraph=!0,this.axios.get("/api/status/graph").then(t=>{var{data:e}=t;q(e),T()}))}mounted(){document.title="Status -- ".concat(document.title),this.sockets.subscribe("submit",t=>{this.Submit(t)}),this.sockets.subscribe("result",t=>{this.Update(t)})}};Object(n["c"])([Object(u["d"])("current_tag")],Y.prototype,"onCurrentTagChanged",null),Object(n["c"])([Object(N["e"])(new R.a)],Y.prototype,"Submit",null),Y=Object(n["c"])([Object(u["a"])({components:{statusTable:v,ContestMode:w["a"]},computed:Object(E["b"])(["contestMode"])})],Y);var F=Y,U=F,W=(a("93cd"),a("54e8")),J=Object(m["a"])(U,s,i,!1,null,"2f74398e",null);"function"===typeof W["default"]&&Object(W["default"])(J);e["default"]=J.exports},fa82:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(){this._acquired=!1,this._waitingResolvers=[]}acquireAsync(){return this._acquired?new Promise(t=>{this._waitingResolvers.push(t)}):(this._acquired=!0,Promise.resolve())}tryAcquire(){return!this._acquired&&(this._acquired=!0,!0)}release(){if(!this._acquired)throw new Error("Cannot release an unacquired lock");if(this._waitingResolvers.length>0){let t=this._waitingResolvers.shift();t()}else this._acquired=!1}}e.default=s},fd77:function(t,e,a){"use strict";var s=a("88d0"),i=a.n(s);i.a}}]);