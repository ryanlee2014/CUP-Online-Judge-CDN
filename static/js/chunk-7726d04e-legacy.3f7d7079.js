(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7726d04e"],{e1385:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("rank-view",{attrs:{cid:t.cid}})},c=[],i=(a("a15b"),a("d81d"),a("d4ec")),r=a("bee2"),s=a("262e"),d=a("2caf"),o=a("9ab4"),u=a("1b40"),b=a("4bf2"),p=a("2cd4"),f=function(t){Object(s["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.cid="",t.tid="",t}return Object(r["a"])(a,[{key:"created",value:function(){var t=this,e=this.tid=this.$route.params.contestSetId;this.axios.get("/api/contestset/list/".concat(e)).then((function(e){var a=e.data;t.cid=a.data.map((function(t){return t.contest_id})).join(",")}))}}]),a}(Object(u["b"])(p["a"]));f=Object(o["a"])([Object(u["a"])({components:{RankView:b["a"]}})],f);var h=f,l=h,j=a("2877"),v=Object(j["a"])(l,n,c,!1,null,"ead7d77e",null);e["default"]=v.exports}}]);