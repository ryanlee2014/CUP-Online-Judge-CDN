(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2e709da"],{"0443":function(t){t.exports=JSON.parse('{"title":"CUP Online Judge"}')},2208:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.currentPage,page_cnt:t.pageCount,total:t.totalNumber,"on-page-changed":t.page}})],1),a("div",{staticClass:"three wide right aligned column"},[a("router-link",{staticClass:"ui primary button",attrs:{to:"/admin/contestset/add"}},[t._v(" "+t._s(t.$t("add contest set"))+" ")])],1)])]),a("table",{staticClass:"ui celled structured table"},[a("thead",[a("tr",[a("th",{staticStyle:{width:"80px"}},[t._v(t._s(t.$t("contest set id")))]),a("th",{staticStyle:{width:"450px"}},[t._v(t._s(t.$t("title")))]),a("th",{staticStyle:{width:"160px"}},[t._v(t._s(t.$t("create time")))]),a("th",[t._v(t._s(t.$t("copy contest set")))]),a("th",[t._v(t._s(t.$t("available")))]),a("th",[t._v(t._s(t.$t("remove")))])])]),a("tbody",t._l(t.contestSetList,(function(e){return a("tr",{key:e.contestset_id},[a("td",[t._v(" "+t._s(e.contestset_id)+" ")]),a("td",[a("a",{attrs:{href:"/admin/contestset/edit/"+e.contestset_id,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]),a("td",[t._v(" "+t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss"))+" ")]),a("td",{staticClass:"button_size"},[a("router-link",{staticClass:"ui inverted blue tiny labeled icon button",attrs:{to:"/admin/contestset/copy/"+e.contestset_id}},[a("i",{staticClass:"copy icon"}),t._v(" "+t._s(t.$t("copy"))+" ")])],1),a("td",{staticClass:"button_size"},[a("button",{class:"ui inverted tiny labeled icon button "+(t.defunctToBoolean(e.defunct)?"green":"red"),on:{click:function(a){return t.defunct(e.contestset_id)}}},[a("i",{class:(t.defunctToBoolean(e.defunct)?"checkmark":"remove")+" icon"}),t._v(" "+t._s(t.defunctToBoolean(e.defunct)?t.$t("available"):t.$t("unavailable"))+" ")])]),a("td",{staticClass:"button_size"},[a("button",{staticClass:"ui labeled tiny icon black button",on:{click:function(a){return t.remove(e.contestset_id)}}},[a("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)]),a("Pagination",{attrs:{current_page:t.currentPage,page_cnt:t.pageCount,total:t.totalNumber,"on-page-changed":t.page}})],1)},c=[],s=(a("e260"),a("ddb0"),a("9ab4")),i=a("60a3"),r=a("2cd4"),o=a("9513"),u=a("5a0c"),l=a.n(u),d=class extends(Object(i["b"])(r["a"])){constructor(){super(...arguments),this.currentPage=0,this.contestSetList=[],this.dayjs=l.a,this.pageCount=50,this.totalNumber=0}created(){var t=this.$route.query;if(Object.prototype.hasOwnProperty.call(t,"page")){var e=parseInt(t.page);isNaN(e)||(this.currentPage=e)}}onCurrentPageChanged(t){this.setQuery(),this.flushData(t)}mounted(){this.flushData(this.currentPage)}defunctToBoolean(t){return"N"===t}flushData(t){this.axios.get("/api/admin/contestset/list/".concat(t)).then(t=>{var{data:e}=t;this.contestSetList=e.data.data,this.totalNumber=e.data.count})}setQuery(){var t={};t.page=this.currentPage,this.$router.push({path:this.$route.path,query:t})}defunct(t){this.axios.post("/api/admin/contestset/defunct",{id:t}).then(t=>{var{data:e}=t;this.flushData(this.currentPage)})}page(t,e){this.currentPage=e?this.currentPage+e:t}};Object(s["c"])([Object(i["d"])("currentPage")],d.prototype,"onCurrentPageChanged",null),d=Object(s["c"])([Object(i["a"])({components:{Pagination:o["a"]}})],d);var p=d,g=p,h=(a("3990"),a("2877")),_=Object(h["a"])(g,n,c,!1,null,"21e5a020",null);e["default"]=_.exports},"2cd4":function(t,e,a){"use strict";var n=a("9ab4"),c=a("2b0e"),s=a("60a3"),i=a("3657"),r=a("0443"),o=class extends c["a"]{mounted(){i["a"].init(this.$store.getters.homepage),document.title=r.title}};o=Object(n["c"])([s["a"]],o),e["a"]=o},3990:function(t,e,a){"use strict";var n=a("c1bb"),c=a.n(n);c.a},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},c=[],s=(a("e260"),a("ddb0"),a("9ab4")),i=a("1157"),r=a.n(i),o=a("60a3"),u=a("2b0e"),l=(r.a,class extends u["a"]{constructor(){super(...arguments),this.total_menu=0}created(){var t=document.body.clientWidth,e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}get pageList(){var{current_page:t,page_cnt:e,total:a,total_menu:n}=this,c=Array.from(Array(Math.min(Math.ceil(a/e),n)).keys()).map((function(c){return t<n/2?Math.trunc(c+1):t+n/2+1>Math.ceil(a/e)?Math.trunc(Math.ceil(a/e)-n+1+c):Math.trunc(t+c-n/2+1)}));return this.$emit("pageUpdated",c),c}page(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}});Object(s["c"])([Object(o["c"])()],l.prototype,"total",void 0),Object(s["c"])([Object(o["c"])()],l.prototype,"page_cnt",void 0),Object(s["c"])([Object(o["c"])()],l.prototype,"current_page",void 0),Object(s["c"])([Object(o["c"])()],l.prototype,"onPageChanged",void 0),l=Object(s["c"])([o["a"]],l);var d=l,p=d,g=a("2877"),h=Object(g["a"])(p,n,c,!1,null,"ec841a7a",null);e["a"]=h.exports},c1bb:function(t,e,a){}}]);