(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-406f1f94"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(t,e,a){"use strict";var i=a("d4ec"),c=a("bee2"),s=a("99de"),n=a("7e84"),o=a("262e"),r=a("9ab4"),l=a("2b0e"),d=a("60a3"),u=a("3657"),p=a("0443"),h=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(n["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){u["a"].init(this.$store.getters.homepage),document.title=p.title}}]),e}(l["a"]);h=Object(r["c"])([d["a"]],h),e["a"]=h},afcd:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[t.reply?t._e():a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" Title ")])]),t.reply?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"ui input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{size:"50",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._m(0),a("div",{staticClass:"row"},[a("mavon-editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"two field"},[a("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{attrs:{alt:"click to change",height:"40px",onclick:"this.src='/api/captcha?from=edit&random='+Math.random()",src:"/api/captcha?from=edit"}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.edit_post}},[a("i",{staticClass:"icon edit"}),t._v(" Modify ")])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" Content ")])])}],s=(a("99af"),a("d4ec")),n=a("bee2"),o=a("99de"),r=a("7e84"),l=a("262e"),d=a("9ab4"),u=a("2cd4"),p=a("1157"),h=a.n(p),m=a("60a3"),v=(h.a,function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.content="",t.title="",t.captcha="",t.reply=!1,t.article_id="",t.comment_id="",t}return Object(l["a"])(e,t),Object(n["a"])(e,[{key:"created",value:function(){this.reply=!!this.$route.params.comment_id,this.article_id=this.$route.params.article_id,this.comment_id=this.$route.params.comment_id}},{key:"mounted",value:function(){var t=this;document.title="Edit Thread -- ".concat(document.title);var e=!this.reply;e?this.axios.get("/api/discuss/update/main/".concat(this.article_id)).then((function(e){var a=e.data;t.content=a.data.content,t.title=a.data.title})):this.axios.get("/api/discuss/update/reply/".concat(this.article_id,"/").concat(this.comment_id)).then((function(e){var a=e.data;t.content=a.data.content}))}},{key:"editPostCallback",value:function(t){"OK"===t.status?(alert("更改成功"),this.$router.push({path:"/discuss/thread/".concat(this.article_id)})):alert("Error!\n"+t.statement)}},{key:"edit_post",value:function(){var t=this;this.axios.post(this.editUrl,{title:this.title,content:this.content,captcha:this.captcha}).then((function(e){var a=e.data;t.editPostCallback(a)}))}},{key:"editUrl",get:function(){var t=!this.reply;return t?"/api/discuss/update/main/".concat(this.article_id):"/api/discuss/update/reply/".concat(this.article_id,"/").concat(this.comment_id)}}]),e}(Object(m["b"])(u["a"])));v=Object(d["c"])([m["a"]],v);var f=v,b=f,_=a("2877"),y=Object(_["a"])(b,i,c,!1,null,"6205d6a2",null);e["default"]=y.exports}}]);