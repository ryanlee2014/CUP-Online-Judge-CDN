(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed43"],{"0c71":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui container padding"},[e("h1",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("problem"))+" "),e("router-link",{attrs:{to:"/problem/submit/"+t.pid}},[t._v(t._s(t.pid))]),t._v(" "+t._s(t.$t("status"))+" ")],1),e("div",{staticClass:"ui stacked segment"},[e("div",{staticClass:"ui statistics"},[e("div",{staticClass:"black statistic"},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_submit)+" ")]),e("div",{staticClass:"label"},[t._v(" 总提交 ")])]),e("div",{staticClass:"black statistic"},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_solved_submit)+" ")]),e("div",{staticClass:"label"},[t._v(" 已提交用户 ")])]),e("div",{staticClass:"black statistic"},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_solved_user)+" ")]),e("div",{staticClass:"label"},[t._v(" 已通过用户 ")])]),t._l(t.submitStatus.problem_status,(function(a,s){return e("div",{key:a,class:t.submitStatus.color[s-1]+" statistic"},[e("div",{staticClass:"value"},[t._v(" "+t._s(a)+" ")]),e("div",{staticClass:"label"},[e("router-link",{attrs:{to:"/status?problem_id="+t.pid+"&jresult="+s}},[t._v(" "+t._s(t.submitStatus.statistic_name[s])+" ")])],1)])}))],2)]),t._m(0),t._m(1),t._m(2),t._m(3),e("div",{staticClass:"ui piled segment"},[e("h2",{staticClass:"ui dividing header"},[t._v("做题人员流向")]),e("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.initSolveMap,expression:"initSolveMap"}],staticClass:"amcharts",attrs:{id:"chord_graph"}},[t._v("加载中")])]),t._m(4),e("h1",{staticClass:"ui dividing header"},[t._v("Submissions")]),e("table",{staticClass:"ui table",attrs:{id:"problemstatus"}},[t._m(5),e("tbody",t._l(t.submitStatus.solution_status,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(20*t.current_page+s+1))]),e("td",[t._v(t._s(a.solution_id))]),e("td",[e("router-link",{attrs:{to:"/user/"+a.user_id}},[t._v(" "+t._s(a.user_id)+" ")])],1),e("td",[t._v(t._s(a.memory)+"KB")]),e("td",[t._v(t._s(a.time)+"ms")]),e("td",[t.isadmin||a.user_id==t.owner?e("router-link",{attrs:{to:"/usercode/local/"+a.solution_id}},[t._v(" "+t._s(t.submitStatus.language_name[a.language])+" ")]):e("span",[t._v(t._s(t.submitStatus.language_name[a.language]))])],1),e("td",[t._v(t._s(a.code_length)+"B")]),e("td",[t._v(t._s(new Date(a.in_date).toLocaleString()))])])})),0)]),e("br"),e("router-link",{staticClass:"ui button",attrs:{to:"/status?problem_id="+this.pid}},[t._v(" Status ")]),e("a",{class:"ui button "+(0==t.current_page?"disabled":""),on:{click:function(a){0!=t.current_page&&t.page(-t.current_page,a)}}},[t._v("Top")]),e("div",{staticClass:"ui buttons"},[e("button",{class:"ui left labeled icon button "+(0==t.current_page?"disabled":""),on:{click:function(a){0!=t.current_page&&t.page(-1,a)}}},[e("i",{staticClass:"left arrow icon"}),t._v(" Prev ")]),e("div",{staticClass:"or"}),e("button",{class:"ui right labeled icon button "+(t.submit_stat.length<20?"disabled":""),on:{click:function(a){20==t.submit_stat.length&&t.page(1,a)}}},[e("i",{staticClass:"right arrow icon"}),t._v(" Next ")])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui piled segment"},[e("div",{attrs:{align:"center",id:"pie_chart_language_legend"}}),e("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"canvas-holder"}},[e("canvas",{attrs:{id:"chart-area"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui piled segment"},[e("div",{attrs:{align:"center",id:"bar_chart_language_legend"}}),e("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"bar-holder"}},[e("canvas",{attrs:{id:"bar-area"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui piled segment"},[e("div",{attrs:{align:"center",id:"memory_bar_chart_language_legend"}}),e("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"memory_bar_holder"}},[e("canvas",{attrs:{id:"memory_bar_area"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui piled segment"},[e("h2",{staticClass:"ui dividing header"},[t._v("代码长度")]),e("div",{staticClass:"amcharts",attrs:{id:"problem_code_length"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui grid"},[e("div",{staticClass:"eight wide column"}),e("div",{staticClass:"seven wide column"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",{staticClass:"toprow"},[e("th",{staticStyle:{cursor:"hand"}},[t._v("名次 ")]),e("th",[t._v("RunID")]),e("th",[t._v("用户")]),e("th",[t._v("内存")]),e("th",[t._v("耗时")]),e("th",[t._v("语言")]),e("th",[t._v("代码长度")]),e("th",[t._v("提交时间")])])])}],r=(e("e260"),e("4e82"),e("b680"),e("1276"),e("ddb0"),e("9ab4")),l=e("71c9"),n=e("c497"),o=e("2cd4"),u=e("60a3"),d=e("2ef0"),c=e.n(d),p=e("1157"),m=e.n(p),_=e("30ef"),h=e.n(_),v=e("5a54").default,g=m.a,b={},f={};function y(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",e=[];if(!b[a]){b[a]=!0,c.a.forEach(t,(function(t){e.push({date:new Date(t.in_date),value:t.code_length})})),l["e"](v);var s=l["d"]("problem_code_length",n["j"]);s.data=e;var i=s.xAxes.push(new n["e"]);i.renderer.minGridDistance=60,s.yAxes.push(new n["i"]);var r=s.series.push(new n["g"]);r.dataFields.valueY="value",r.dataFields.dateX="date",r.tooltipText="{value}",r.tooltip.background.cornerRadius=20,r.tooltip.background.strokeOpacity=0,r.tooltip.pointerOrientation="vertical",r.tooltip.label.minWidth=40,r.tooltip.label.minHeight=40,r.tooltip.label.textAlign="middle",r.tooltip.label.textValign="middle",r.tooltip.pointerOrientation="vertical";var o=r.bullets.push(new n["c"]);o.circle.strokeWidth=2,o.circle.radius=4,o.circle.fill=l["c"]("#fff");var u=o.states.create("hover");u.properties.scale=1.3,s.cursor=new n["l"],s.cursor.behavior="panXY",s.cursor.xAxis=i,s.cursor.snapToSeries=r,s.scrollbarY=new l["b"],s.scrollbarY.parent=s.leftAxesContainer,s.scrollbarY.toBack(),s.scrollbarX=new n["k"],s.scrollbarX.series.push(r),s.scrollbarX.parent=s.bottomAxesContainer}}function C(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"chord_graph";if(!f[e]){f[e]=!0,l["e"](v);var s=l["d"]("chord_graph",n["b"]);c.a.forEach(t,(function(t){if(t.from!=a){var e=t.from;t.from=t.to,t.to=e}t.from="本题",t.to+=""})),t.sort((function(t,a){return a.value-t.value}));while(t.length>30)t.pop();s.data=t,s.dataFields.fromName="from",s.dataFields.toName="to",s.dataFields.value="value";var i=s.nodes.template;i.readerTitle="点击块可显示或隐藏",i.showSystemTooltip=!0;var r=s.links.template,o=r.bullets.push(new n["c"]);o.fillOpacity=1,o.circle.radius=5,o.locationX=.5,s.events.on("ready",(function(){for(var t=0;t<s.links.length;t++){var a=s.links.getIndex(t),e=a.bullets.getIndex(0);u(e)}}))}function u(t){var a=3e3*Math.random()+2e3,e=t.animate([{property:"locationX",from:0,to:1}],a);e.events.on("animationended",(function(t){u(t.target.object)}))}}var w=class extends(Object(u["b"])(o["a"])){constructor(){super(...arguments),this.problem_stat=[],this.submit_stat=[],this.problem_submit_stat={},this.stat_name=[],this.current_page=0,this.language_name=[],this.isadmin=!1,this.self="",this.time_range={},this.owner="",this.memory_range={},this.initedSolveMap=!1}created(){this.pid=this.$route.params.id,this.current_page=parseInt(this.$route.query.page||0)}get submitStatus(){var t={};return c.a.forEach(this.problem_stat,(function(a){t[a.result]=a.total})),{problem_status:t,solution_status:this.submit_stat,total_status:this.problem_submit_stat,color:["black","black","black","green","red","red","yellow","yellow","yellow","yellow","yellow","yellow","yellow","","",""],statistic_name:this.stat_name,language_name:this.language_name,time_range:this.time_range,memory_range:this.memory_range}}set submitStatus(t){var a=t.data.problem_status;this.problem_stat=a,this.submit_stat=t.data.solution_status,this.problem_submit_stat=t.data.submit_status,this.stat_name=t.data.statistic_name,this.language_name=t.data.language_name,this.isadmin=t.data.isadmin,this.owner=t.data.self,this.time_range=t.data.time_range,this.memory_range=t.data.memory_range}initSolveMap(){this.initedSolveMap||(this.initedSolveMap=!0,this.axios.get("/api/status/problem/solve_map/".concat(this.pid)).then(t=>{var{data:a}=t;"OK"===a.status&&c.a.delay(C,0,a.data,this.pid)}))}page(t){this.current_page+=t;this.axios.get("/api/problemstatus/".concat(this.pid,"?page=").concat(this.current_page)).then(t=>{var{data:a}=t;this.submitStatus=a,this.setQuery()})}setQuery(){var t={};0!==this.current_page?t["page"]=this.current_page+1:delete t["page"],this.$router.push({path:this.$route.path,query:t})}mounted(){document.title="Problem ".concat(this.pid," Statistics -- ").concat(document.title);var t=g("title").text();g("title").text("Status:Problem "+this.pid+" - "+t),this.current_page=Math.max(0,this.current_page-1),this.axios.get("/api/status/problem/code_length/problem/".concat(this.pid)).then(t=>{var{data:a}=t;y(a.data)}),this.axios.get("/api/problemstatus/".concat(this.pid,"?page=").concat(this.current_page)).then(t=>{var{data:a}=t;this.submitStatus=a,this.initGraph()})}initGraph(){var t=c.a.values(window.chartColors);t.push("#af63f4"),t.push("#00b5ad"),t.push("#350ae8"),t.push("#E2EAE9");var a=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"];c.a.forEach(a,(function(a){t.push(a)}));var e={type:"pie",data:{datasets:[{data:c.a.map(this.submitStatus.problem_status,t=>t),backgroundColor:t,label:"Status"}],labels:c.a.map(this.submitStatus.problem_status,(t,a)=>this.submitStatus.statistic_name[a])},options:{responsive:!0}},s={},i={};c.a.forEach(this.submitStatus.time_range,(function(t){i[t.diff]=!0,s[t.language]={}})),i=c.a.map(i,(function(t,a){var e=a.split("-"),s=e[0]+"ms";return e.length>1&&(s+=" - "+e[1]+"ms"),s})),i.sort((function(t,a){if(-1!==t.indexOf(">")){var e=parseFloat(t.substring(1,t.length)),s=parseFloat(a.split("-")[0]);return e-s}if(-1!==a.indexOf(">")){var i=parseFloat(t.split("-")[0]),r=parseFloat(a.substring(1,a.length));return i-r}var l=parseFloat(t.split("-")[0]),n=parseFloat(a.split("-")[0]);return l-n})),c.a.forEach(s,(function(t,a){c.a.forEach(i,(function(t){s[a][t]=0}))})),c.a.forEach(this.submitStatus.time_range,t=>{var a=t.diff.split("-"),e=a[0]+"ms";a.length>1&&(e+=" - "+a[1]+"ms"),s[t.language][e]=t.total});var r=c.a.map(t,(function(t){return t})),l={type:"bar",labels:i,datasets:c.a.map(s,(t,a)=>({label:this.submitStatus.language_name[a],backgroundColor:r.shift(),data:c.a.values(t)}))},n={},o={};r=c.a.map(t,t=>t),c.a.forEach(this.submitStatus.memory_range,t=>{n[t.diff]=!0,o[t.language]={}}),n=c.a.map(n,(t,a)=>{if(-1!==a.indexOf("-")){var e=a.split("-");e[0]=(parseFloat(e[0])/1024).toFixed(2),e.length>1&&(e[1]=(parseFloat(e[1])/1024).toFixed(2));var s=e[0]+"MB";return e.length>1&&(s+=" - "+e[1]+"MB"),s}var i=a.substring(1,a.length);return i=(parseFloat(i)/1024).toFixed(2),">"+i+"MB"}),n.sort((t,a)=>{if(">"===t.charAt(0)){var e=parseFloat(t.substring(1,t.length)),s=parseFloat(a.split("-")[0]);return e-s}if(">"===a.charAt(0)){var i=parseFloat(t.split("-")[0]),r=parseFloat(a.substring(1,a.length));return i-r}var l=parseFloat(t.split("-")[0]),n=parseFloat(a.split("-")[0]);return l-n}),c.a.forEach(o,(t,a)=>{c.a.forEach(n,t=>{o[a][t]=0})}),c.a.forEach(this.submitStatus.memory_range,t=>{if(-1!==t.diff.indexOf("-")){var a=t.diff.split("-");a[0]=(parseFloat(a[0])/1024).toFixed(2),a.length>1&&(a[1]=(parseFloat(a[1])/1024).toFixed(2));var e=a[0]+"MB";a.length>1&&(e+=" - "+a[1]+"MB"),o[t.language][e]=t.total}else{var s=t.diff.substring(1,t.diff.length);s=(parseFloat(s)/1024).toFixed(2),o[t.language][">"+s+"MB"]=t.total}});var u={type:"bar",labels:n,datasets:c.a.map(o,(t,a)=>({label:this.submitStatus.language_name[a],backgroundColor:r.shift(),data:c.a.values(t)}))},d=document.getElementById("chart-area").getContext("2d");window.myPie=new h.a(d,e);var p=document.getElementById("bar-area").getContext("2d"),m=document.getElementById("memory_bar_area").getContext("2d");window.myBar=new h.a(p,{type:"bar",data:l,options:{title:{display:!0,text:"AC代码运行用时"},tooltips:{mode:"index",intersect:!0},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}),window.myMemory=new h.a(m,{type:"bar",data:u,options:{title:{display:!0,text:"AC代码内存使用"},tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})}};w=Object(r["c"])([u["a"]],w);var x=w,S=x,k=e("2877"),F=Object(k["a"])(S,s,i,!1,null,"97326f4e",null);a["default"]=F.exports}}]);