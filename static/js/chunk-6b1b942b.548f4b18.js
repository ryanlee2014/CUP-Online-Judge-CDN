(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b1b942b"],{"2cd4":function(t,e,n){"use strict";n("e260"),n("ddb0");var a=n("9ab4"),s=n("2b0e"),r=n("60a3"),i=n("3657"),c=n("0443"),o=class extends s["a"]{constructor(){super(...arguments),this.customConfig=c}mounted(){i["a"].init(this.$store.getters.homepage),document.title=c.title}};o=Object(a["c"])([r["a"]],o),e["a"]=o},f53c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[t._v("Version Control")]),n("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0"}},[t._m(0),t._m(1),n("div",{staticClass:"row"},[n("div",{staticClass:"ui card"},[n("RepoInfoCard",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.currentFrontendInfo.version)+" ")]},proxy:!0},{key:"meta",fn:function(){},proxy:!0}])})],1)]),t._m(2),n("div",{staticClass:"row"},[n("div",{staticClass:"ui cards"},t._l(t.frontendBranch,(function(e,a){return n("RepoInfoCard",{key:a,scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(e.name)+" ")]},proxy:!0},{key:"meta",fn:function(){return[t._v(" "+t._s(e.version)+" ")]},proxy:!0},{key:"content",fn:function(){},proxy:!0}],null,!0)})})),1)]),t._m(3),t._m(4),n("div",{staticClass:"row"},[n("div",{staticClass:"ui card"},[n("RepoInfoCard",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.currentBackendInfo.version)+" ")]},proxy:!0},{key:"meta",fn:function(){},proxy:!0}])})],1)]),t._m(5),n("div",{staticClass:"row"},[n("div",{staticClass:"ui cards"},t._l(t.backendBranch,(function(e,a){return n("RepoInfoCard",{key:a,scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(e.name)+" ")]},proxy:!0},{key:"meta",fn:function(){return[t._v(" "+t._s(e.version)+" ")]},proxy:!0},{key:"content",fn:function(){},proxy:!0}],null,!0)})})),1)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 前端组件 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 当前版本 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 仓库分支版本 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 后端组件 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 当前版本 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h3",{staticClass:"ui header"},[t._v(" 仓库分支版本 ")])])}],r=(n("e260"),n("4e82"),n("e6cf"),n("ddb0"),n("9ab4")),i=n("60a3"),c=n("2cd4"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._t("header")],2),n("div",{staticClass:"meta"},[t._t("meta")],2),n("p",[t._t("content")],2)])])},d=[],u=n("2b0e"),l=class extends u["a"]{};l=Object(r["c"])([i["a"]],l);var h=l,v=h,f=n("2877"),_=Object(f["a"])(v,o,d,!1,null,"1d2c2c24",null),p=_.exports,m=n("9224"),C=class extends(Object(i["b"])(c["a"])){constructor(){super(...arguments),this.frontendBranch=[],this.backendBranch=[],this.currentFrontendInfo=m,this.currentBackendInfo={},this.frontendRepo="ryanlee2014/CUP-Online-Judge-NG-Frontend",this.backendRepo="CUP-ACM-Programming-Club/CUP-Online-Judge-Express"}mounted(){this.initFrontendData(),this.initBackendData()}buildBranchAPIUrl(t){return"https://api.github.com/repos/".concat(t,"/branches?timestamp=").concat(Date.now())}buildVersion(t,e){var n=[];return e.forEach(e=>{var a=this.axios.get(this.buildJsDelivrLink(t,e.name)).then(t=>{var{data:n}=t;return e.version=n.version,e});n.push(a)}),Promise.all(n)}baseInitData(t,e){this.axios.get(this.buildBranchAPIUrl(t)).then(e=>{var{data:n}=e;return this.buildVersion(t,n)}).then(t=>(t.sort((t,e)=>t.version<e.version?1:t.version>e.version?-1:0),t)).then(t=>{this[e]=t})}initFrontendData(){this.baseInitData(this.frontendRepo,"frontendBranch")}initBackendData(){this.baseInitData(this.backendRepo,"backendBranch"),this.getBackendVersion()}getBackendVersion(){this.axios.get("/api/system/config/version_control/version").then(t=>{var{data:e}=t;this.currentBackendInfo=this.buildVersionPackage(e.data)})}buildVersionPackage(t){return{version:t}}buildJsDelivrLink(t,e){return"https://cdn.jsdelivr.net/gh/".concat(t,"@").concat(e,"/package.json?timestamp=").concat(Date.now())}};C=Object(r["c"])([Object(i["a"])({components:{RepoInfoCard:p}})],C);var b=C,k=b,y=Object(f["a"])(k,a,s,!1,null,"36f0c2aa",null);e["default"]=y.exports}}]);