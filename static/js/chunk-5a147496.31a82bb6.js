(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a147496"],{"701d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContestSetEditor",{on:{postData:t.add}})},c=[],a=s("9ab4"),n=s("60a3"),o=s("2cd4"),l=s("fc17"),d=s("837e"),r=class extends(Object(n["b"])(o["a"],d["a"])){};r=Object(a["c"])([Object(n["a"])({components:{ContestSetEditor:l["a"]}})],r);var h=r,v=h,u=s("2877"),b=Object(u["a"])(v,i,c,!1,null,"e9e56284",null);e["default"]=b.exports},"837e":function(t,e,s){"use strict";s("e01a"),s("e260"),s("ddb0");var i=s("9ab4"),c=s("2b0e"),a=s("60a3"),n=class extends c["a"]{constructor(){super(...arguments),this.contestSetId="0",this.contestSetInfo={},this.contestSetList=[]}created(){this.contestSetId=this.$route.params.contestSetId}mounted(){this.initData()}initData(){this.axios.get("/api/contestset/set/".concat(this.contestSetId)).then(t=>{var{data:e}=t;this.contestSetInfo=e.data}),this.axios.get("/api/contestset/list/".concat(this.contestSetId)).then(t=>{var{data:e}=t;this.contestSetList=e.data.map(t=>t.contest_id+"")})}get contestSetEditInfo(){if(this.contestSetInfo){var t={contestset_id:parseInt(this.contestSetId),defunct:this.contestSetInfo.defunct,description:this.contestSetInfo.description,title:this.contestSetInfo.title,visible:this.contestSetInfo.visible,create_time:this.contestSetInfo.create_time};return t}return{}}add(t){this.axios.post("/api/admin/contestset/add",t).then(t=>{var{data:e}=t;alert("添加成功")}).catch(t=>{alert("添加失败, 错误信息将在Console输出"),console.error(t)})}};n=Object(i["c"])([a["a"]],n),e["a"]=n},fc17:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container padding"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("title")))]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",placeholder:"",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"field"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("div",{ref:"visible",staticClass:"ui toggle checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.visible)?t._i(t.visible,null)>-1:t.visible},on:{click:t.visibleCallback,change:function(e){var s=t.visible,i=e.target,c=!!i.checked;if(Array.isArray(s)){var a=null,n=t._i(s,a);i.checked?n<0&&(t.visible=s.concat([a])):n>-1&&(t.visible=s.slice(0,n).concat(s.slice(n+1)))}else t.visible=c}}}),s("label",[t._v(t._s(t.$t("visible")))])])]),s("div",{staticClass:"field"},[s("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[s("input",{staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},on:{click:t.reverseDefunct}}),s("label",[t._v(t._s(t.$t("enable")))])])])])])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("contest list")))]),s("div",{ref:"contestList",staticClass:"ui fluid multiple search selection dropdown"},[s("input",{attrs:{type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),s("i",{staticClass:"dropdown icon"}),s("div",{staticClass:"default text"}),s("div",{staticClass:"menu"},t._l(t.totalContestList,(function(e,i){return s("div",{key:i,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("description")))]),s("mavon-editor",{ref:"description",attrs:{markInstance:t.markdownIt},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)]),s("div",{staticClass:"field"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("button",{staticClass:"ui primary button",on:{click:t.emitData}},[t._v(" Submit ")])]),s("div",{staticClass:"field"})])])])])},c=[],a=(s("e01a"),s("e260"),s("1276"),s("ddb0"),s("9ab4")),n=s("2b0e"),o=s("60a3"),l=s("ec1c"),d=s("1157"),r=s.n(d),h=r.a,v=class extends(Object(o["b"])(n["a"])){constructor(){super(...arguments),this.contestIdList=[],this.defunct="N",this.description="",this.title="",this.visible=!0,this.select1="",this.totalContestList=[],this.contestSetId="",this.markdownIt=l["a"]}onContestListChanged(t){t.length>0&&(this.contestIdList=t,this.$nextTick(()=>{this.initJQuery()}))}onContestSetInfoChanged(t){t&&t.title&&t.title.length>0&&(this.visible=t.visible,this.defunct=t.defunct,this.description=t.description,this.title=t.title,t.contestset_id&&(this.contestSetId=t.contestset_id+""),this.$nextTick(()=>{this.initJQuery()}))}created(){this.contestSetId=this.$route.params.contestSetId}mounted(){this.initTotalContest(),this.initJQuery()}initJQuery(){this.$nextTick(()=>{h(this.$refs.visible).checkbox(this.visible?"check":"uncheck"),h(this.$refs.defunct).checkbox("N"===this.defunct?"check":"uncheck"),h(this.$refs.contestList).dropdown("set selected",this.contestIdList)})}initTotalContest(){this.axios.get("/api/contest/list/all").then(t=>{var{data:e}=t;this.totalContestList=e.data})}reverseDefunct(){var t=h(this.$refs.defunct);"Y"===this.defunct?(this.defunct="N",t.checkbox("checked")):(this.defunct="Y",t.checkbox("unchecked"))}visibleCallback(){this.visible=!this.visible;var t=h(this.$refs.visible);this.visible?t.checkbox("checked"):t.checkbox("unchecked")}emitData(){var t={contestIdList:this.select1.split(","),defunct:this.defunct,description:this.description,title:this.title,visible:this.visible,contestSetId:this.contestSetId};this.$emit("postData",t)}};Object(a["c"])([Object(o["c"])({default:{}})],v.prototype,"contestSetInfo",void 0),Object(a["c"])([Object(o["c"])({default:[]})],v.prototype,"contestList",void 0),Object(a["c"])([Object(o["d"])("contestList")],v.prototype,"onContestListChanged",null),Object(a["c"])([Object(o["d"])("contestSetInfo")],v.prototype,"onContestSetInfoChanged",null),v=Object(a["c"])([o["a"]],v);var u=v,b=u,f=s("2877"),p=Object(f["a"])(b,i,c,!1,null,"c89ae980",null);e["a"]=p.exports}}]);