(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8c6714c"],{3643:function(t,e,a){"use strict";a("82c5")},"4df4":function(t,e,a){"use strict";var n=a("0366"),c=a("7b0b"),r=a("9bdd"),i=a("e95a"),o=a("50c4"),u=a("8418"),l=a("35a1");t.exports=function(t){var e,a,s,d,p,h,g=c(t),_="function"==typeof this?this:Array,b=arguments.length,f=b>1?arguments[1]:void 0,v=void 0!==f,m=l(g),y=0;if(v&&(f=n(f,b>2?arguments[2]:void 0,2)),void 0==m||_==Array&&i(m))for(e=o(g.length),a=new _(e);e>y;y++)h=v?f(g[y],y):g[y],u(a,y,h);else for(d=m.call(g),p=d.next,a=new _;!(s=p.call(d)).done;y++)h=v?r(d,f,[s.value,y],!0):s.value,u(a,y,h);return a.length=y,a}},"82c5":function(t,e,a){},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},c=[],r=(a("a630"),a("d81d"),a("b65f"),a("d3b7"),a("3ca3"),a("ddb0"),a("d4ec")),i=a("bee2"),o=a("262e"),u=a("2caf"),l=a("9ab4"),s=a("1157"),d=a.n(s),p=a("1b40"),h=a("2b0e"),g=(d.a,function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.total_menu=0,t}return Object(i["a"])(a,[{key:"created",value:function(){var t=document.body.clientWidth,e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}},{key:"page",value:function(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}},{key:"pageList",get:function(){var t=this.current_page,e=this.page_cnt,a=this.total,n=this.total_menu,c=Math.ceil(a/e),r=Math.min(c,n),i=Array.from(Array(r).keys()).map((function(e){return t<n/2?Math.trunc(e+1):t+n/2+1>c?Math.trunc(Math.max(c-r,0)+1+e):Math.trunc(t+e-n/2+1)}));return this.$emit("pageUpdated",i),i}}]),a}(h["a"]));Object(l["a"])([Object(p["c"])()],g.prototype,"total",void 0),Object(l["a"])([Object(p["c"])()],g.prototype,"page_cnt",void 0),Object(l["a"])([Object(p["c"])()],g.prototype,"current_page",void 0),Object(l["a"])([Object(p["c"])()],g.prototype,"onPageChanged",void 0),g=Object(l["a"])([p["a"]],g);var _=g,b=_,f=a("2877"),v=Object(f["a"])(b,n,c,!1,null,"5a3ababd",null);e["a"]=v.exports},"9bdd":function(t,e,a){var n=a("825a"),c=a("2a62");t.exports=function(t,e,a,r){try{return r?e(n(a)[0],a[1]):e(a)}catch(i){throw c(t),i}}},a630:function(t,e,a){var n=a("23e7"),c=a("4df4"),r=a("1c7e"),i=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:c})},b65f:function(t,e,a){var n=a("23e7"),c=Math.ceil,r=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?r:c)(t)}})},c4d9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}}),a("table",{staticClass:"ui celled structured table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("problem_id")))]),a("th",[t._v(t._s(t.$t("title")))]),a("th",[t._v(t._s(t.$t("from")))]),a("th",[t._v(t._s(t.$t("available")))]),a("th",[t._v(t._s(t.$t("upload time")))]),a("th",[t._v(t._s(t.$t("remove")))])])]),a("tbody",t._l(t.list,(function(e){return a("tr",{key:e.problem_id},[a("td",[t._v(" "+t._s(e.problem_id)+" ")]),a("td",[a("a",{attrs:{href:"/problem/edit/"+e.problem_id,target:"_blank"}},[t._v(t._s(e.title))])]),a("td",[a("a",{attrs:{href:"/problemset?tag="+e.source,target:"_blank"},domProps:{innerHTML:t._s(e.source)}})]),a("td",[a("button",{class:"ui inverted labeled icon button "+(t.defunctToBoolean(e.defunct)?"green":"red"),on:{click:function(a){return t.defunct(e.problem_id)}}},[a("i",{class:(t.defunctToBoolean(e.defunct)?"checkmark":"remove")+" icon"}),t._v(" "+t._s(t.defunctToBoolean(e.defunct)?t.$t("available"):t.$t("unavailable"))+" ")])]),a("td",[t._v(" "+t._s(null!==e.in_date?t.dayjs(e.in_date).format("YYYY-MM-DD HH:mm:ss"):t.$t("unknown"))+" ")]),a("td",[a("button",{staticClass:"ui labeled icon black button",on:{click:function(a){return t.remove(e.problem_id)}}},[a("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)]),a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)},c=[],r=a("d4ec"),i=a("bee2"),o=a("262e"),u=a("2caf"),l=a("9ab4"),s=a("2cd4"),d=a("9513"),p=a("5a0c"),h=a.n(p),g=a("1b40"),_=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.current_page=0,t.list=[],t.dayjs=h.a,t.total_number=0,t.page_cnt=50,t}return Object(i["a"])(a,[{key:"created",value:function(){var t=this.$route.query,e=0;Object.prototype.hasOwnProperty.call(t,"page")&&(e=parseInt(t.page)),isNaN(e)||(this.current_page=e)}},{key:"onCurrentPageChanged",value:function(t){this.setQuery(),this.flushData(t)}},{key:"mounted",value:function(){this.flushData(this.current_page)}},{key:"defunctToBoolean",value:function(t){return"N"===t}},{key:"flushData",value:function(t){var e=this;this.axios.get("/api/admin/problem/list/".concat(t)).then((function(t){var a=t.data;e.list=a.data.data,e.total_number=a.data.count}))}},{key:"setQuery",value:function(){var t={};t.page=this.current_page,this.$router.push({path:this.$route.path,query:t})}},{key:"remove",value:function(t){}},{key:"page",value:function(t,e){this.current_page=e?this.current_page+e:t}},{key:"defunct",value:function(t){var e=this;this.axios.post("/api/admin/problem/defunct",{id:t}).then((function(t){t.data;e.flushData(e.current_page)})).catch((function(t){var e=t.data;alert(e.statement)}))}}]),a}(Object(g["b"])(s["a"]));Object(l["a"])([Object(g["d"])("current_page")],_.prototype,"onCurrentPageChanged",null),_=Object(l["a"])([Object(g["a"])({components:{Pagination:d["a"]}})],_);var b=_,f=b,v=(a("3643"),a("2877")),m=Object(v["a"])(f,n,c,!1,null,"709d5491",null);e["default"]=m.exports}}]);