(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8379d488"],{"2cd4":function(t,e,a){"use strict";var i=a("d4ec"),s=a("bee2"),n=a("99de"),d=a("7e84"),c=a("262e"),r=a("9ab4"),u=a("2b0e"),l=a("60a3"),o=a("3657"),v=a("0443"),p=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(n["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.customConfig=v,t}return Object(c["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){o["a"].init(this.$store.getters.homepage),document.title=v.title}}]),e}(u["a"]);p=Object(r["c"])([l["a"]],p),e["a"]=p},f774:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("type")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rejudgeType,expression:"rejudgeType"}],attrs:{name:"language",type:"hidden"},domProps:{value:t.rejudgeType},on:{change:function(e){t.rejudgeType=e.target.value},input:function(e){e.target.composing||(t.rejudgeType=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("All")]),t._m(0)])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:t.rejudge}},[t._v(" "+t._s(t.$t("rejudge"))+" ")])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"1"}},[t._v(" Solution ")]),a("div",{staticClass:"item",attrs:{"data-value":"2"}},[t._v(" Contest ")]),a("div",{staticClass:"item",attrs:{"data-value":"3"}},[t._v(" Problem ")])])}],n=a("d4ec"),d=a("bee2"),c=a("99de"),r=a("7e84"),u=a("262e"),l=a("9ab4"),o=a("2cd4"),v=a("60a3"),p={1:"solution_id",2:"contest_id",3:"problem_id"},m={1:"solution",2:"contest",3:"problem"},b=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.rejudgeType=1,t.id=0,t}return Object(u["a"])(e,t),Object(d["a"])(e,[{key:"makeSendData",value:function(){var t={};return t[p[this.rejudgeType]]=this.id,t}},{key:"rejudge",value:function(){var t=this;this.axios.post("/api/admin/problem/rejudge/".concat(m[this.rejudgeType]),this.makeSendData()).then((function(e){var a=e.data;"OK"===a.status?alert(t.$t("success")):alert(a.statement)}))}}]),e}(Object(v["b"])(o["a"]));b=Object(l["c"])([v["a"]],b);var f=b,g=f,j=a("2877"),h=Object(j["a"])(g,i,s,!1,null,"24e51570",null);e["default"]=h.exports}}]);