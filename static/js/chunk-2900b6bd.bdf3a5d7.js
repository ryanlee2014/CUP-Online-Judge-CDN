(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2900b6bd"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(t,i,e){"use strict";var n=e("9ab4"),s=e("2b0e"),a=e("60a3"),o=e("3657"),c=e("0443"),r=class extends s["a"]{mounted(){o["a"].init(this.$store.getters.homepage),document.title=c.title}};r=Object(n["c"])([a["a"]],r),i["a"]=r},"3a81":function(t,i,e){},"9a8b":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ui container"},[e("h2",{staticClass:"ui dividing header"},[t._v("Compile Information")]),e("div",{staticClass:"ui segment same_width",domProps:{innerHTML:t._s(t.info)}})])},s=[],a=(e("e260"),e("1276"),e("ddb0"),e("9ab4")),o=e("2cd4"),c=e("60a3"),r=document.createElement("div"),u=class extends(Object(c["b"])(o["a"])){constructor(){super(...arguments),this.info="",this.solution_id=""}created(){this.solution_id=this.$route.params.solution_id}mounted(){document.title="".concat(this.solution_id," Compile Information -- ").concat(document.title),this.axios.get("/api/status/compile_info/".concat(this.solution_id)).then(t=>{var{data:i}=t;"OK"===i.status?this.info=this.convertHTML(i.data.info).split(" ").join("&nbsp;"):this.info="您无权访问"})}convertHTML(t){return r.innerText=t,r.innerHTML}};u=Object(a["c"])([c["a"]],u);var d=u,l=d,h=(e("e8f4"),e("2877")),f=Object(h["a"])(l,n,s,!1,null,"063643a0",null);i["default"]=f.exports},e8f4:function(t,i,e){"use strict";var n=e("3a81"),s=e.n(n);s.a}}]);