(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb2097e"],{"21a6":function(e,t,a){(function(a){var i,s,n;(function(a,o){s=[],i=o,n="function"===typeof i?i.apply(t,s):i,void 0===n||(e.exports=n)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,a){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){l(i.response,t,a)},i.onerror=function(){console.error("could not download file")},i.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,c=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,a){var c=o.URL||o.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?n(l):s(l.href)?i(e,t,a):n(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){n(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,o){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),a);else if(s(e))i(e,a,o);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){n(c)}))}}:function(e,t,a,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,a);var n="application/octet-stream"===e.type,l=/constructor/i.test(o.HTMLElement)||o.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||n&&l||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=r?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},d.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,p=u.createObjectURL(e);s?s.location=p:location.href=p,s=null,setTimeout((function(){u.revokeObjectURL(p)}),4e4)}});o.saveAs=l.saveAs=l,e.exports=l}))}).call(this,a("c8ba"))},"4df4":function(e,t,a){"use strict";var i=a("0366"),s=a("7b0b"),n=a("9bdd"),o=a("e95a"),c=a("50c4"),l=a("8418"),r=a("35a1");e.exports=function(e){var t,a,d,u,p,v,m=s(e),h="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,b=void 0!==g,y=r(m),C=0;if(b&&(g=i(g,f>2?arguments[2]:void 0,2)),void 0==y||h==Array&&o(y))for(t=c(m.length),a=new h(t);t>C;C++)v=b?g(m[C],C):m[C],l(a,C,v);else for(u=y.call(m),p=u.next,a=new h;!(d=p.call(u)).done;C++)v=b?n(u,g,[d.value,C],!0):d.value,l(a,C,v);return a.length=C,a}},7755:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("title")))]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{name:"title",placeholder:"contest title",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"four fields"},[a("div",{staticClass:"field"},[a("div",{ref:"public",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.Private,expression:"Private"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.Private)?e._i(e.Private,null)>-1:e.Private},on:{click:function(t){e.Private=!e.Private},change:function(t){var a=e.Private,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);i.checked?o<0&&(e.Private=a.concat([n])):o>-1&&(e.Private=a.slice(0,o).concat(a.slice(o+1)))}else e.Private=s}}}),a("label",[e._v(e._s(e.$t("private contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.defunct,expression:"defunct"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.defunct)?e._i(e.defunct,null)>-1:e.defunct},on:{click:function(t){e.defunct=!e.defunct},change:function(t){var a=e.defunct,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);i.checked?o<0&&(e.defunct=a.concat([n])):o>-1&&(e.defunct=a.slice(0,o).concat(a.slice(o+1)))}else e.defunct=s}}}),a("label",[e._v(e._s(e.$t("hide contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"contest",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ContestMode,expression:"ContestMode"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.ContestMode)?e._i(e.ContestMode,null)>-1:e.ContestMode},on:{click:function(t){e.ContestMode=!e.ContestMode},change:function(t){var a=e.ContestMode,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);i.checked?o<0&&(e.ContestMode=a.concat([n])):o>-1&&(e.ContestMode=a.slice(0,o).concat(a.slice(o+1)))}else e.ContestMode=s}}}),a("label",[e._v(e._s(e.$t("contest mode available only")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"show_all_ranklist",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.showAllRanklist,expression:"showAllRanklist"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.showAllRanklist)?e._i(e.showAllRanklist,null)>-1:e.showAllRanklist},on:{change:function(t){var a=e.showAllRanklist,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);i.checked?o<0&&(e.showAllRanklist=a.concat([n])):o>-1&&(e.showAllRanklist=a.slice(0,o).concat(a.slice(o+1)))}else e.showAllRanklist=s}}}),a("label",[e._v(e._s(e.$t("show_all_ranklist")))])])])])])]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[e.contest_id?a("button",{staticClass:"ui primary button",on:{click:e.exportSolution}},[e._v(e._s(e.$t("export solution")))]):e._e()]),a("div",{staticClass:"field"},[a("div",{staticClass:"four fields"},[a("div",{staticClass:"field"},[a("div",{ref:"showSim",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.showSim,expression:"showSim"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.showSim)?e._i(e.showSim,null)>-1:e.showSim},on:{click:function(t){e.showSim=!e.showSim},change:function(t){var a=e.showSim,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);i.checked?o<0&&(e.showSim=a.concat([n])):o>-1&&(e.showSim=a.slice(0,o).concat(a.slice(o+1)))}else e.showSim=s}}}),a("label",[e._v(e._s(e.$t("show sim")))])])])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("start time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangestart"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],attrs:{id:"startTime",placeholder:"Start",type:"text",autocomplete:"off"},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}})])])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("end time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangeend"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],attrs:{id:"endTime",placeholder:"End",type:"text",autocomplete:"off"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("contest password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",placeholder:"contest password",type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit classroom")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"limitClassroom"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.classroomSelected,expression:"classroomSelected"}],attrs:{name:"country",type:"hidden"},domProps:{value:e.classroomSelected},on:{change:function(t){e.classroomSelected=t.target.value},input:function(t){t.target.composing||(e.classroomSelected=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("limit classroom")))]),e._m(0)])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit hostname")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1",id:"limitHostname"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hostname,expression:"hostname"}],attrs:{type:"hidden"},domProps:{value:e.hostname},on:{change:function(t){e.hostname=t.target.value},input:function(t){t.target.composing||(e.hostname=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v("All")]),e._m(1)])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"selectedLanguage"}},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(t){e.languageSelected=t.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"menu"},e._l(e.languageSet,(function(t,i){return a("div",{key:i,staticClass:"item",attrs:{"data-value":i}},[e._v(" "+e._s(t)+" ")])})),0)])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("problem list")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.problemSelected,expression:"problemSelected"}],attrs:{type:"text"},domProps:{value:e.problemSelected},on:{input:function(t){t.target.composing||(e.problemSelected=t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("description")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user")))]),a("div",{staticClass:"ui middle aligned animated list"},e._l(e.userList,(function(t,i){return a("div",{key:i,staticClass:"item"},[e._v(" "+e._s(i+1)+" "),a("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+t+".jpg"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[e._v(e._s(t))])])])})),0)]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user input")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:e.userListText},on:{input:function(t){t.target.composing||(e.userListText=t.target.value)}}})])])]),a("div",{staticClass:"padding field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"}),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[e._m(2),a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:e.emitData}},[e._v(" Submit ")])])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"403"}},[e._v(" 403 ")]),a("div",{staticClass:"item",attrs:{"data-value":"404"}},[e._v(" 404 ")]),a("div",{staticClass:"item",attrs:{"data-value":"405"}},[e._v(" 405 ")]),a("div",{staticClass:"item",attrs:{"data-value":"502"}},[e._v(" 502 ")]),a("div",{staticClass:"item",attrs:{"data-value":"503"}},[e._v(" 503 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":""}},[e._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})]),a("div",{staticClass:"item",attrs:{"data-value":"acm.cup.edu.cn"}},[e._v(" acm.cup.edu.cn ")]),a("div",{staticClass:"item",attrs:{"data-value":"www.cupacm.com"}},[e._v(" www.cupacm.com ")]),a("div",{staticClass:"item",attrs:{"data-value":"oj.cupacm.com"}},[e._v(" oj.cupacm.com ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("button",{staticClass:"ui secondary button"},[e._v(" Reset ")])])}],n=(a("a4d3"),a("e01a"),a("4de4"),a("4160"),a("a630"),a("c975"),a("a15b"),a("baa5"),a("d81d"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("498a"),a("159b"),a("ddb0"),a("d4ec")),o=a("bee2"),c=a("262e"),l=a("2caf"),r=a("9ab4"),d=a("b2ab"),u=a("21a6"),p=a("2ef0"),v=a.n(p),m=a("1157"),h=a.n(m),f=a("1b40"),g=a("2b0e"),b=h.a,y=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.contest_id="",e.title="",e.defunct=!1,e.Private=!0,e.ContestMode=!1,e.startTime="",e.endTime="",e.password="",e.description="",e.languageSelected="",e.classroomSelected="",e.problemSelected="",e.showAllRanklist=!1,e.showSim=!1,e.languageSet=d.language_name.local,e.hostname="",e.userListText="",e.userList=[],e}return Object(o["a"])(a,[{key:"created",value:function(){this.contest_id=this.$route.params.contest_id}},{key:"debug",value:function(e,t){console.log(e),"undefined"!==typeof t&&console.log(t)}},{key:"LanguageSelectedToLangmask",value:function(){var e=this.languageSet.length,t=Math.pow(2,e)-1,a=this.languageSelected.split(",").map((function(e){return parseInt(e)}));return a.forEach((function(e){t^=Math.pow(2,e)})),t}},{key:"LangmaskToLanguageSelected",value:function(e){var t=0,a=Array.from(Array(this.languageSet.length).keys());while(e>0)1===(1&e)&&a.splice(a.indexOf(t),1),e>>=1,++t;this.languageSelected=a.join(",")}},{key:"exportSolution",value:function(){var e=this.contest_id;this.axios({url:"/api/admin/solution/download/contest/".concat(e),method:"GET",responseType:"blob"}).then((function(t){var a,i=t.headers["Content-Disposition"]||t.headers["content-disposition"];if(null===i||void 0===i)a="Contest ".concat(e,".txt");else{var s=i.indexOf('"')+1,n=i.lastIndexOf('"');a=i.substring(s,n)}Object(u["saveAs"])(t.data,a)}))}},{key:"emitData",value:function(){var e=v.a.cloneDeep(this.$data);e.langmask=this.LanguageSelectedToLangmask(),e.Public=!e.Private,this.$emit("postData",e)}},{key:"initjQuery",value:function(){var e=this,t=b("#rangestart"),a=b("#rangeend");t.calendar({initialDate:this.startTime?this.startTime:null,endCalendar:a,onChange:function(t){e.startTime=new Date(t)}}),a.calendar({initialDate:this.endTime?this.endTime:null,startCalendar:t,onChange:function(t){e.endTime=new Date(t)}}),b(".ui.dropdown").dropdown(),b("#limitClassroom").dropdown("set selected",this.classroomSelected.split(",")),b("#limitHostname").dropdown("set selected",this.hostname.split(",")),b("#selectedLanguage").dropdown("set selected",this.languageSelected.split(",")),b(this.$refs.public).checkbox(this.checkbox(this.Private)),b(this.$refs.contest).checkbox(this.checkbox(this.ContestMode)),b(this.$refs.defunct).checkbox(this.checkbox(this.defunct)),b(this.$refs.show_all_ranklist).checkbox(this.checkbox(this.showAllRanklist)),b(this.$refs.showSim).checkbox(this.checkbox(this.showSim))}},{key:"checkbox",value:function(e){return e?"check":"uncheck"}},{key:"mounted",value:function(){this.initjQuery()}},{key:"onUserListTextChanged",value:function(e,t){var a=this;t!==e&&(0===e.trim().length?this.userList=[]:this.userList=e.split("\n").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),this.$nextTick((function(){a.$Lazyload.lazyLoadHandler(),a.$forceUpdate()})))}},{key:"onExternalUserListTextChanged",value:function(e){this.userListText=e}},{key:"onExternalProblemSelected",value:function(e){this.problemSelected=e}},{key:"onContestInfoChanged",value:function(e){var t=this;if(e.data.length>0){var a=e.data[0];this.title=a.title,this.startTime=new Date(a.start_time),this.endTime=new Date(a.end_time),this.description=a.description,this.defunct="Y"===a.defunct,this.Private=!!a.private,this.ContestMode=!!a.cmod_visible,this.LangmaskToLanguageSelected(a.langmask),this.password=a.password,this.classroomSelected=a.ip_policy,this.showAllRanklist=!!a.show_all_ranklist,this.showSim=!!a.show_sim,this.hostname=a.limit_hostname?a.limit_hostname:"",this.$nextTick((function(){t.initjQuery()}))}}}]),a}(g["a"]);Object(r["a"])([Object(f["c"])({default:function(){return{}}})],y.prototype,"contestInfo",void 0),Object(r["a"])([Object(f["c"])({default:""})],y.prototype,"externalUserListText",void 0),Object(r["a"])([Object(f["c"])({default:""})],y.prototype,"externalProblemSelected",void 0),Object(r["a"])([Object(f["d"])("userListText")],y.prototype,"onUserListTextChanged",null),Object(r["a"])([Object(f["d"])("externalUserListText")],y.prototype,"onExternalUserListTextChanged",null),Object(r["a"])([Object(f["d"])("externalProblemSelected")],y.prototype,"onExternalProblemSelected",null),Object(r["a"])([Object(f["d"])("contestInfo")],y.prototype,"onContestInfoChanged",null),y=Object(r["a"])([Object(f["a"])({i18n:{messages:{"zh-cn":{show_all_ranklist:"显示详细排行信息","show sim":"显示判重信息"},en:{show_all_ranklist:"Show All Rank Detail","show sim":"Show sim information"},ja:{show_all_ranklist:"ランキング詳しく内容表示","show sim":"剽窃表示"}}}})],y);var C=y,_=C,w=a("2877"),k=Object(w["a"])(_,i,s,!1,null,"3aaf1e08",null);t["a"]=k.exports},"9bdd":function(e,t,a){var i=a("825a"),s=a("2a62");e.exports=function(e,t,a,n){try{return n?t(i(a)[0],a[1]):t(a)}catch(o){throw s(e),o}}},a630:function(e,t,a){var i=a("23e7"),s=a("4df4"),n=a("1c7e"),o=!n((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:o},{from:s})},b2ab:function(e){e.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Kotlin Native","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","C++","Kotlin","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp","cpp","kotlin"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++","c++","kotlin",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp","c_cpp","java"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-devicon-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')},f5f7:function(e,t,a){"use strict";a("a15b"),a("d81d"),a("ac1f"),a("1276");var i=a("d4ec"),s=a("bee2"),n=a("262e"),o=a("2caf"),c=a("9ab4"),l=a("2ef0"),r=a.n(l),d=a("1b40"),u=a("fe4d"),p=function(e){Object(n["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.contest_id="0",e.data={},e.userListText="",e.problemSelected="",e}return Object(s["a"])(a,[{key:"mounted",value:function(){this.initData()}},{key:"add",value:function(e){var t=this;e=this.dataFormat(e),this.axios.post("/api/admin/contest/add",e).then((function(e){e.data;alert(t.$t("success")),t.routerBack()})).catch((function(e){alert(t.$t("error"))}))}},{key:"created",value:function(){this.contest_id=this.$route.params.contest_id}},{key:"initData",value:function(){var e=this;this.axios.get("/api/admin/contest/edit/".concat(this.contest_id)).then((function(t){var a=t.data;a.data.length>0&&(e.data=a)})),this.axios.get("/api/admin/contest/edit/user/".concat(this.contest_id)).then((function(t){var a=t.data;a.data.length>0&&(e.userListText=a.data.map((function(e){return e.user_id})).join("\n"))})),this.axios.get("/api/contest/problem/".concat(this.contest_id)).then((function(t){var a=t.data;"OK"===a.status&&(e.problemSelected=a.data.map((function(e){return e.pid})).join(","))}))}},{key:"dataFormat",value:function(e){return e=r.a.cloneDeep(e),delete e.userListText,delete e.languageSelected,delete e.languageSet,e.problemSelected=e.problemSelected.split(",").map((function(e){return parseInt(e)})),"string"===typeof e.hostname&&"null"!==e.hostname&&null!==e.hostname||(e.hostname=""),e}}]),a}(Object(d["b"])(u["a"]));p=Object(c["a"])([d["a"]],p),t["a"]=p},fe4d:function(e,t,a){"use strict";var i=a("d4ec"),s=a("bee2"),n=a("262e"),o=a("2caf"),c=a("9ab4"),l=a("2b0e"),r=a("1b40"),d=function(e){Object(n["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"routerBack",value:function(e){window.history.length<=1?this.$router.push(e||"/"):this.$router.back()}}]),a}(l["a"]);d=Object(c["a"])([r["a"]],d),t["a"]=d}}]);