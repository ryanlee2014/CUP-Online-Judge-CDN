(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b661dab"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(t,i,a){"use strict";var s=a("9ab4"),e=a("2b0e"),o=a("60a3"),c=a("3657"),n=a("0443"),l=class extends e["a"]{mounted(){c["a"].init(this.$store.getters.homepage),document.title=n.title}};l=Object(s["c"])([o["a"]],l),i["a"]=l},"31a2":function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.solution_id,expression:"solution_id"}],attrs:{type:"text",size:"50"},domProps:{value:t.solution_id},on:{input:function(i){i.target.composing||(t.solution_id=i.target.value)}}}),a("button",{staticClass:"ui teal right labeled icon button",on:{click:t.fetch_solution}},[a("i",{staticClass:"history icon"}),t._v(" 自动获取 ")])])]),t._m(1),a("div",{staticClass:"row"},[a("mavon-editor",{model:{value:t.content,callback:function(i){t.content=i},expression:"content"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"two field"},[a("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.captcha},on:{input:function(i){i.target.composing||(t.captcha=i.target.value)}}}),a("img",{attrs:{alt:"click to change",src:"/api/captcha?from=tutorial",onclick:"this.src='/api/captcha?from=tutorial&random='+Math.random()",height:"40px"}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.create_post}},[a("i",{staticClass:"icon edit"}),t._v(" Add New Post ")])])])])},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" 输入答案正确的Solution ID ")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" 题解正文 ")])])}],o=(a("e260"),a("ddb0"),a("9ab4")),c=a("60a3"),n=a("2cd4"),l=a("2fe1"),r=class extends(Object(c["b"])(n["a"])){constructor(){super(...arguments),this.content="",this.solution_id=0,this.captcha="",this.from="local"}created(){this.id=this.$route.params.problem_id}mounted(){document.title="Add Tutorial -- ".concat(document.title)}fetch_solution(){var t=this;this.axios.get("/api/status/".concat(this.id,"/my/null/4/0")).then(i=>{var{data:a}=i;0===a.result.length?alert("未找到相关提交！"):t.solution_id=a.result[0].solution_id})}create_post(){var t={solution_id:this.solution_id,content:this.content,captcha:this.captcha,source:"local",id:this.id};this.axios.post("/api/tutorial/new/".concat(this.from,"/").concat(this.id),t).then(t=>{var{data:i}=t;"OK"===i.status?(alert("添加成功!"),this.$router.push({path:"/tutorial/".concat(this.id)})):alert("服务器遇到错误\n"+i.statement)})}};r=Object(o["c"])([l["b"]],r);var u=r,d=u,h=a("2877"),p=Object(h["a"])(d,s,e,!1,null,"c6377c94",null);i["default"]=p.exports}}]);