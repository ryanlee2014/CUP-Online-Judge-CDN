(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5248be50"],{3942:function(t,e,a){},"44ea":function(t,e,a){"use strict";var i=a("9f93"),n=a.n(i);n.a},"9edc":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"read time cost":"阅读本文需要大约{n}分钟"},"en":{"read time cost":"It takes about {n} minute to read this article | It takes about {n} minutes to read this article"},"ja":{"read time cost":"この記事を読むには約{n}分かかります"}}'),delete t.options._Ctor}},"9f93":function(t,e,a){},b0d1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("h2",{staticClass:"ui dividing header"},[t._v("Discuss")]),a("div",{staticClass:"ui breadcrumb"},[a("router-link",{staticClass:"section",attrs:{to:"/discuss"}},[t._v("讨论主页")]),a("i",{staticClass:"right angle icon divider"}),a("div",{staticClass:"active section"},[t._v("Discuss ID:"+t._s(t.id))])],1),a("h1",[t._v(t._s(t.thread_head.title))]),a("MainContent",{attrs:{content:t.content,id:t.id,owner:t.owner,thread_head:t.thread_head}}),a("h3",{staticClass:"ui dividing header"},[t._v("Comments")]),a("div",{staticClass:"ui comments"},t._l(t.reply,(function(e,i){return a("div",{key:i,staticClass:"comment"},[a("div",{staticClass:"avatar"},[t.hasAvatarURL(e)?a("router-link",{staticClass:"avatar",attrs:{src:t.getAvatarURL(e),to:"/user/"+e.user_id,tag:"img"}}):a("router-link",{attrs:{src:"@/static/image/white-image.png",to:"/user/"+e.user_id,tag:"img"}})],1),a("div",{staticClass:"content"},[a("router-link",{staticClass:"author",attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.nick))]),a("div",{staticClass:"metadata"},[a("span",{staticClass:"date"},[t._v(t._s(new Date(e.create_time).toLocaleString()))])]),a("div",{staticClass:"text",domProps:{innerHTML:t._s(e.content)}}),a("div",{staticClass:"actions"},[e.user_id+""===t.owner?a("router-link",{staticClass:"reply",attrs:{to:"/discuss/edit/"+t.id+"/"+e.comment_id}},[t._v(" Edit ")]):t._e(),t.isadmin?a("a",{staticClass:"reply",on:{click:function(a){return t.block_reply(e.comment_id)}}},[t._v("屏蔽")]):t._e()],1)],1)])})),0),a("h3",{staticClass:"ui dividing header"},[t._v("Reply")]),a("form",{staticClass:"ui reply form"},[a("div",{staticClass:"field"},[a("mavon-editor",{model:{value:t.replyText,callback:function(e){t.replyText=e},expression:"replyText"}})],1),a("div",{staticClass:"two field"},[a("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{id:"vcode",name:"vcode",placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=discuss&random='+Math.random()",src:"/api/captcha?from=discuss"}})])]),a("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.replyComment}},[a("i",{staticClass:"icon edit"}),t._v(" Add Reply ")])])],1)},n=[],s=(a("99af"),a("7db0"),a("4160"),a("b65f"),a("e25e"),a("498a"),a("159b"),a("d4ec")),c=a("bee2"),r=a("99de"),o=a("7e84"),d=a("262e"),l=a("9ab4"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui grid"},[i("div",{staticClass:"four wide column"},[i("div",{staticClass:"ui link card"},[i("div",{staticClass:"image"},[t.hasAvatarURL(t.thread_head)?i("router-link",{attrs:{src:t.getAvatarURL(t.thread_head),to:"/user/"+t.thread_head.user_id,tag:"img"}}):i("img",{attrs:{src:a("84ef")}})],1),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[i("router-link",{staticClass:"black",attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.nick)+" ")])],1),i("div",{staticClass:"meta"},[i("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.user_id)+" ")])],1),i("div",{staticClass:"description",domProps:{innerHTML:t._s(t.markdownIt.renderRaw(t.thread_head.biography||""))}})]),i("div",{staticClass:"extra content"},[i("span",{staticClass:"right floated"}),i("span",[i("i",{staticClass:"user icon"}),t._v(" Solved "+t._s(t.thread_head.solved)+" ")])])]),i("div",{staticClass:"ui sticky",staticStyle:{left:"50.1429px"},attrs:{id:"sticky_content"}},[i("h3",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"ui header",attrs:{id:"contents"}},[t._v("目录")]),i("div",{attrs:{id:"contentContainer"}})])]),i("div",{staticClass:"twelve wide column"},[i("div",{staticClass:"ui existing full segment",attrs:{id:"main_context"}},[t.thread_head.user_id+""===t.owner?i("router-link",{staticClass:"ui blue right ribbon label",attrs:{to:"/discuss/edit/"+t.id}},[t._v(" Edit ")]):t._e(),i("div",{staticClass:"ui info message"},[i("div",{staticClass:"header"},[t._v(" "+t._s(t.$tc("read time cost",t.readTime(t.thread_head.content),{n:t.readTime(t.thread_head.content)}))+" ")])]),i("div",{domProps:{innerHTML:t._s(t.thread_head.content)}})],1)])])},h=[],v=a("ec1c"),p=a("20a2"),m=a("60a3"),_=document.createElement("div"),f=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.markdownIt=v["a"],t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"readTime",value:function(t){return _.innerHTML=t,Math.trunc(Math.pow(Math.ceil(_.innerText.length/300),1.41428579532))}}]),e}(Object(m["b"])(p["a"]));Object(l["c"])([Object(m["c"])({default:function(){return{}}})],f.prototype,"thread_head",void 0),Object(l["c"])([Object(m["c"])({default:!1})],f.prototype,"content",void 0),Object(l["c"])([Object(m["c"])({default:""})],f.prototype,"owner",void 0),Object(l["c"])([Object(m["c"])({default:""})],f.prototype,"id",void 0),f=Object(l["c"])([m["a"]],f);var b=f,C=b,g=(a("44ea"),a("2877")),y=a("c82a"),k=Object(g["a"])(C,u,h,!1,null,"6f72d35a",null);"function"===typeof y["default"]&&Object(y["default"])(k);var x=k.exports,w=a("2cd4"),O=a("0c11"),j=a("1157"),T=a.n(j),M=a("2ef0"),E=a.n(M),L=a("b311"),I=a.n(L),R=T.a,$=a("19ddd"),A=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.page=0,t.table_val={},t.total=0,t.id=0,t.replyText="",t.captcha="",t.owner="",t.content=!1,t.isadmin=!1,t}return Object(d["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.id=parseInt(this.$route.params.id)||0}},{key:"updated",value:function(){console.log("updated");var t=R(".table-of-contents"),e=t.html(),a=R("#contentContainer");e||(e=""),t.html(""),e&&a.html(""+e),R("#sticky_content").sticky({context:"#main_context",offset:50}),a.find("a").on("click",(function(){return R([document.documentElement,document.body]).animate({scrollTop:R(document.getElementById($(this.innerText))).offset().top-50},600),!1})),this.content=e&&e.trim&&e.trim().length>0||a&&a.html()&&a.html().trim().length>0}},{key:"mounted",value:function(){document.title="Thread ".concat(this.id," -- ").concat(document.title);var t=20*this.page,e=this;this.axios.get("/api/discuss/".concat(this.id,"?page=").concat(t)).then((function(t){var a=t.data;e.table=a})),this.$nextTick((function(){var t=new I.a(".copy.context",{text:function(t){return R(t).parent().next().text()}});t.on("success",(function(t){R(t.trigger).popup({title:"Finished",content:"Context is in your clipboard",on:"click"}).popup("show")}))}))}},{key:"replyComment",value:function(){var t={comment:this.replyText,captcha:this.captcha};this.axios.post("/api/discuss/reply/".concat(this.id),t).then((function(t){var e=t.data;"OK"===e.status?(alert("回复成功"),location.reload()):alert("回复失败！服务器发生未知错误")}))}},{key:"block_reply",value:function(t){this.axios.get("/api/discuss/update/reply/block/".concat(this.id,"/").concat(t)).then((function(t){var e=t.data;"OK"===e.status?alert("操作成功"):alert("操作失败")}))}},{key:"readTime",value:function(t){var e=document.createElement("div");return e.innerHTML=t,Math.trunc(Math.pow(Math.ceil(e.innerText.length/300),1.41428579532))}},{key:"table",get:function(){return this.table_val},set:function(t){var e=this;E.a.forEach(t,(function(t){t&&t.length&&E.a.forEach(t,(function(t){t.content&&(t.content=v["a"].render(t.content))}))})),this.table_val=t,this.owner=t.owner,this.isadmin=t.admin,this.$nextTick((function(){e.initMermaid()}))}},{key:"thread_head",get:function(){var t={title:""};return E.a.assign(t,this.table_val.discuss_header_content),t.content&&(t.content=v["a"].render(t.content)),t}},{key:"reply",get:function(){return this.table_val.discuss}}]),e}(Object(m["b"])(w["a"],p["a"],O["a"]));A=Object(l["c"])([Object(m["a"])({components:{MainContent:x}})],A);var H=A,D=H,P=(a("f68a"),Object(g["a"])(D,i,n,!1,null,"ab41fe28",null));e["default"]=P.exports},b65f:function(t,e,a){var i=a("23e7"),n=Math.ceil,s=Math.floor;i({target:"Math",stat:!0},{trunc:function(t){return(t>0?s:n)(t)}})},c82a:function(t,e,a){"use strict";var i=a("9edc"),n=a.n(i);e["default"]=n.a},f68a:function(t,e,a){"use strict";var i=a("3942"),n=a.n(i);n.a}}]);