(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77656e65"],{"111f":function(t,a){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},1681:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.contestMode?e("div",{staticClass:"ui container padding"},[e("ContestMode")],1):e("div",{staticClass:"ui container pusher"},[e("div",{staticClass:"padding"},[e("h2",{directives:[{name:"show",rawName:"v-show",value:!t.finished,expression:"!finished"}],staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("loading"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.finished,expression:"finished"}],staticClass:"ui grid"},[t.error?e("div",{staticClass:"row"},[e("div",{staticClass:"ui huge error message",staticStyle:{margin:"auto"}},[e("div",{staticClass:"header"},[e("i",{staticClass:"remove icon"}),t._v(" "+t._s(t.$t("error")))]),e("p",[t._v(t._s(t.statement))])])]):e("div",{staticClass:"row"},[e("div",{staticClass:"five wide column"},[e("div",{staticClass:"ui card",staticStyle:{width:"100%"},attrs:{id:"user_card"}},[e("div",{staticClass:"blurring dimmable image",attrs:{id:"avatar_container"}},[e("img",{attrs:{src:t.avatar}}),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"square image"})])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[t._m(0),t._m(1)]),e("div",{staticClass:"header"},[e("span",{domProps:{innerHTML:t._s(t.nick)}}),t._v(" "),e("a",{attrs:{href:"mail.php?to_user="+t.user_id}},[e("i",{staticClass:"mail icon"})])]),e("div",{staticClass:"meta"},[e("i",{staticClass:"user circle outline icon"}),e("a",{staticClass:"group"},[t._v(t._s(t.privilege))]),"2016011253"===t.user_id?e("i",{staticClass:"user circle outline icon"}):t._e(),"2016011253"===t.user_id?e("a",{staticClass:"group"},[t._v(" "+t._s(t.$t("system development"))+" ")]):t._e(),t.acm_user?e("br"):t._e(),t.acm_user?e("a",{staticClass:"group"},[e("i",{staticClass:"user icon"}),t._v("ACM "+t._s(t.acm_user.level?t.$t("formal member"):t.$t("reserve member")))]):t._e(),e("br"),t._v(" "+t._s(t.$t("reg time"))+": "+t._s(t.dayjs(t.reg_time).format("YYYY-MM-DD"))+" "),t._l(t.award,(function(a){return e("a",{key:a.year+a.award,staticClass:"group"},[e("br"),e("i",{staticClass:"trophy icon"}),t._v(" "+t._s(a.year+"年"+a.award))])}))],2)]),e("div",{staticClass:"extra content"},[e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(t.$t("local"))+" "+t._s(t.$t("pass"))+" "+t._s(t.local_accepted)+" 题 ")]),e("a",{staticStyle:{float:"right"}},[e("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.rank))]),e("br"),e("a",[e("i",{staticClass:"check icon"}),t._v("VJudge "+t._s(t.$t("pass"))+" "+t._s(t.vjudge_solved)+" 题 ")]),e("a",{staticStyle:{float:"right"}},[e("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.vjudge_rank))]),e("br"),e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(t.$t("other platform"))+" "+t._s(t.$t("pass"))+" "+t._s(t.other_accepted-t.vjudge_solved)+" 题 ")]),e("br"),t._l(t.accepted_details,(function(a,s){return e("span",{key:s},[e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(s)+" "+t._s(t.$t("pass"))+" "+t._s(a.length)+" 题 ")]),e("br")])}))],2)]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("status"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),t.online?e("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("current online"))+" ")]):t._e(),t.online?t._e():e("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("offline"))+" "),e("div",{staticClass:"sub header"},[t._v(" "+t._s(t.$t("last login"))+":"+t._s(t.last_login?new Date(t.last_login).toLocaleString():"")+" ")])])])]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("publish"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v("ID")]),e("th",[t._v(t._s(t.$t("title")))])]),e("tbody",t._l(t.article_publish,(function(a){return e("tr",{key:a.article_id},[e("td",[t._v(" "+t._s(a.article_id)+" ")]),e("td",[e("router-link",{attrs:{to:"/discuss/thread/"+a.article_id}},[t._v(" "+t._s(a.title)+" ")])],1)])})),0)])])]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("tutorial"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("problem_id")))]),e("th",[t._v(t._s(t.$t("title")))])]),e("tbody",t._l(t.tutorial_publish,(function(a){return e("tr",{key:a.problem_id},[e("td",[t._v(" "+t._s(a.problem_id)+" ")]),e("td",[e("router-link",{attrs:{to:"/tutorial/"+a.problem_id},domProps:{innerHTML:t._s(t.markdownIt.renderRaw(a.title))}})],1)])})),0)])])]),t.admin?e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use os"))+" ")])]),e("div",{staticClass:"content"},[e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("os")))]),e("th",[t._v(t._s(t.$t("version")))]),e("th",[t._v(t._s(t.$t("frequency")))])]),e("tbody",t._l(t.os,(function(a){return e("tr",{key:a.os_name+a.os_version},[e("td",[t._v(" "+t._s(a.os_name)+" ")]),e("td",[t._v(" "+t._s(a.os_version)+" ")]),e("td",[t._v(" "+t._s(a.cnt)+" ")])])})),0)])])]):t._e(),t.admin?e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use browser"))+" ")])]),e("div",{staticClass:"content"},[e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("browser")))]),e("th",[t._v(t._s(t.$t("version")))]),e("th",[t._v(t._s(t.$t("frequency")))])]),e("tbody",t._l(t.browser,(function(a){return e("tr",{key:a.browser_name+a.browser_version},[e("td",[t._v(" "+t._s(a.browser_name)+" ")]),e("td",[t._v(" "+t._s(a.browser_version)+" ")]),e("td",[t._v(" "+t._s(a.cnt)+" ")])])})),0)])])]):t._e()]),e("div",{staticClass:"eleven wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"sixteen wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"eight wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"id card icon"}),t._v(t._s(t.$t("user_id")))]),e("div",{staticClass:"ui attached segment"},[e("div",{},[t._v(" "+t._s(t.user_id)+" ")]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"id badge icon"}),t._v(t._s(t.$t("biography"))+" ")]),e("div",{staticClass:"ui attached segment",domProps:{innerHTML:t._s(t.markdownIt.renderRaw(t.biography||""))}},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"university icon"}),t._v(t._s(t.$t("school"))+" ")]),e("div",{staticClass:"ui attached segment"},[e("div",{},[t._v(t._s(t.school))]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"mail square icon"}),t._v(t._s(t.$t("email")))]),e("div",{staticClass:"ui attached segment"},[e("div",{},[e("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),t._m(2),e("div",{staticClass:"ui attached segment"},[e("div",{},[e("a",{attrs:{href:t.blog,target:"_blank"}},[t._v(t._s(t.blog))])]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),t._m(3),e("div",{staticClass:"ui bottom attached segment"},[t.github?e("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+t.github+"&type=follow&count=true",frameborder:"0",height:"20px",scrolling:"0",width:"170px"}}):t._e(),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])])])])])]),e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit statistic"))+" ")]),t._m(4)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"sixteen wide column"},[e("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("submit heatmap")))]),e("div",{staticClass:"ui bottom attached segment heatmap"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"eight wide column"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("h4",{staticClass:"ui top attached block header"},[t._v("CUP Online Judge")]),e("div",{staticClass:"ui attached segment"},[t._l(t.accept.local,(function(a){return e("router-link",{key:a.problem_id,attrs:{to:"/problem/submit/"+a.problem_id}},[t._v(" "+t._s(a.problem_id)+" ")])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2),e("h4",{staticClass:"ui attached block header"},[t._v("HDU")]),e("div",{staticClass:"ui attached segment"},[t._l(t.accept.hdu,(function(a){return e("a",{key:a.problem_id,attrs:{href:"hdusubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2),e("h4",{staticClass:"ui attached block header"},[t._v("POJ")]),e("div",{staticClass:"ui attached segment"},[t._l(t.accept.poj,(function(a){return e("a",{key:a.problem_id,attrs:{href:"pojsubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2),e("h4",{staticClass:"ui attached block header"},[t._v("UVA")]),e("div",{staticClass:"ui attached segment"},[t._l(t.accept.uva,(function(a){return e("a",{key:a.problem_id,attrs:{href:"uvasubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2),e("h4",{staticClass:"ui attached block header"},[t._v(t._s(t.$t("other")))]),e("div",{staticClass:"ui bottom attached segment"},[t._l(t.accept.other,(function(a){return e("a",{key:a.problem_id,attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(a.oj_name+" "+a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2)])]),e("div",{staticClass:"row"}),e("div",{staticClass:"row"})]),e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("programming language"))+" ")]),e("div",{staticClass:"ui bottom attached segment"},[e("div",{attrs:{id:"pie_chart_language_legend"}},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),t._m(5)]),e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit frequency"))+" ")]),t._m(6),e("h4",{staticClass:"ui top attached block header"},[t._v(" "+t._s(t.$t("plagiarism information"))+" ")]),e("div",{staticClass:"ui bottom attached segment"},[e("div",{staticClass:"ui small statistics",staticStyle:{"text-align":"center",display:"block"}},[e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_problem_time)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("problem number"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_aver_length)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average length"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_percentage_aver)+"% ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average plagiarism percentage"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.total_same)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("total number"))+" ")])])])])])])])])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paragraph"},[e("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"newspaper icon"}),t._v("Blog ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"github icon"}),t._v("GitHub ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui bottom attached segment"},[e("div",{attrs:{id:"pie_chart_legend"}}),e("div",[e("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),e("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart",width:"455"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),e("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart_language",width:"455"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui bottom attached segment"},[e("div",{staticClass:"hidden",attrs:{id:"drawgraphitem"}},[e("div",{staticStyle:{margin:"auto"}},[e("canvas",{attrs:{id:"canvas"}})])])])}],n=(e("99af"),e("4160"),e("c975"),e("a15b"),e("baa5"),e("d81d"),e("13d5"),e("45fc"),e("4e82"),e("d3b7"),e("e25e"),e("159b"),e("ddb0"),e("d4ec")),r=e("bee2"),l=e("99de"),c=e("7e84"),o=e("262e"),d=e("9ab4"),u=e("5698"),h=e("ec1c"),v=(e("7db0"),e("a9e3"),e("ac1f"),e("1276"),e("c1df"));function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign({width:700,height:100},t),e=a.width,s=a.height,i=150,n="body",r=parseInt(e/61.7);s=Math.max(9*r,s);var l=2,c=3,o=v().endOf("day").toDate(),d=v().startOf("day").subtract(1,"year").toDate(),h=null,p={},_=[],m=null,g=null,b=["#D8E6E7","#218380"],f="#ebedf0",C=!0,y="submission",w=!0,k=null,x=0,j={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],No:"No",on:"on",Less:"Less",More:"More"},$=Number(u["version"].split(".")[0]);function O(){u["select"](O.selector()).selectAll("svg.calendar-heatmap").remove();var t=(u["time"]&&u["time"].days||u["timeDays"])(d,o),a=(u["time"]&&u["time"].months||u["timeMonths"])(v(d).startOf("month").toDate(),o),n=v(t[0]);0==O.data().length?m=0:null===m&&(m=u["max"](O.data(),(function(t){return t.count}))),null===g&&(g=u["min"](O.data(),(function(t){return t.count})));var h,_,C=function(t){var a=t.substring(1,3),e=t.substring(3,5),s=t.substring(5,7);return a=parseInt(a,16),e=parseInt(e,16),s=parseInt(s,16),"rgb("+a+", "+e+", "+s+")"},w=function(t){return C(0===t?f:t<=5?b[0]:t<=10?b[1]:t<=20?b[2]:b[3])};function E(){var o=u["select"](O.selector()).style("position","relative").append("svg").attr("width",e).attr("class","calendar-heatmap").attr("height",s).style("padding-left",20).style("padding-top",0).style("overflow","inherit");_=o.selectAll(".day-cell").data(t);var d=_.enter().append("rect").attr("class","day-cell").attr("width",r).attr("height",r).attr("fill",(function(t){return w(A(t))})).attr("x",(function(t){var a=v(t),e=a.week()-n.week()+n.weeksInYear()*(a.weekYear()-n.weekYear());return e*(r+l)})).attr("y",(function(t){return c+I(t.getDay())*(r+l)}));if("function"===typeof k&&(3===$?d:d.merge(_)).on("click",(function(t){var a=A(t);k({date:t,count:a})})),O.tooltipEnabled()&&(3===$?d:d.merge(_)).on("mouseover",(function(t,a){h=u["select"](O.selector()).append("div").attr("class","day-cell-tooltip").html(D(t)).style("overflow","inherit").style("left",(function(){return Math.floor(a/8)*r+"px"})).style("top",(function(){return I(t.getDay())*(r+l)+2*c-20+"px"}))})).on("mouseout",(function(){h.remove()})),O.legendEnabled()){b.unshift(f);var p=o.append("g");p.selectAll(".calendar-heatmap-legend").data(b).enter().append("rect").attr("class","calendar-heatmap-legend").attr("width",r).attr("height",r).attr("x",(function(t,a){return e-i+13*(a+1)})).attr("y",s+l).attr("fill",(function(t){return t})),p.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-less").attr("x",e-i-13).attr("y",s+r).text(j.Less),p.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-more").attr("x",e-i+l+13*(b.length+1)).attr("y",s+r).text(j.More)}_.exit().remove();var m=-30;o.selectAll(".month").data(a).enter().append("text").attr("class","month-name").text((function(t){return j.months[t.getMonth()]})).attr("x",(function(a){var e=0;t.find((function(t,s){return e=s,v(a).isSame(t,"month")&&v(a).isSame(t,"year")}));var s=Math.floor(e/7)*(r+l);return s=Math.max(s,m+20),m=s,s})).attr("y",0),j.days.forEach((function(t,a){a=I(a),a%2&&o.append("text").attr("class","day-initial").attr("transform","translate(-12,"+(r+l)*(a+1)+")").style("text-anchor","middle").attr("dy","2").text(t)}))}function M(t){if("string"===typeof y)return y+(1===t?"":"s");for(var a in y){var e=y[a],s=e.min,i=e.max||e.min;if(i="Infinity"===i?1/0:i,t>=s&&t<=i)return e.unit}}function D(t){var a=v(t).format("ddd, MMM Do YYYY"),e=A(t);return"<span><strong>"+(e||j.No)+" "+M(e)+"</strong> "+j.on+" "+a+"</span>"}function A(t){var a=v(t).format("YYYY-MM-DD");return p[a]||0}function I(t){return 1===x?0===t?6:t-1:t}E(),O.data().map((function(t){return t.date.toDateString()}))}return(O.data=function(t){return arguments.length?(_=t,p={},_.forEach((function(t){var a=v(t.date).format("YYYY-MM-DD"),e=p[a]||0;p[a]=e+t.count})),O):_},O.max=function(t){return arguments.length?(m=t,O):m},O.min=function(t){return arguments.length?(g=t,O):g},O.selector=function(t){return arguments.length?(n=t,O):n},O.startDate=function(t){return arguments.length?(d=t,o=v(t).endOf("day").add(1,"year").toDate(),O):h},O.colorRange=function(t,a){return arguments.length?(b=t,f=a,O):b},O.tooltipEnabled=function(t){return arguments.length?(C=t,O):C},O.tooltipUnit=function(t){return arguments.length?(y=t,O):y},O.legendEnabled=function(t){return arguments.length?(w=t,O):w},O.onClick=function(t){return arguments.length?(k=t,O):k()},O.locale=function(t){return arguments.length?(j=t,O):j},O)}Array.prototype.find||(Array.prototype.find=function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!==typeof t)throw new TypeError("predicate must be a function");for(var a,e=Object(this),s=e.length>>>0,i=arguments[1],n=0;n<s;n++)if(a=e[n],t.call(i,a,n,e))return a});var _=e("d3a2"),m=e("20a2"),g=e("60a3"),b=e("1157"),f=e.n(b),C=e("2ef0"),y=e.n(C),w=e("30ef"),k=e.n(w),x=e("5a0c"),j=e.n(x),$=e("2f62"),O=f.a,E=function(t){function a(){var t;return Object(n["a"])(this,a),t=Object(l["a"])(this,Object(c["a"])(a).apply(this,arguments)),t.award=[],t.dayjs=j.a,t.admin=!1,t.biography="",t.error=!1,t.const_variable={},t.article_publish=[],t.tutorial_publish=[],t.markdownIt=h["a"],t.nick="",t.accepted_details={},t.reg_time=0,t.school="",t.github="",t.email="",t.statement="",t.vjudge_solved=0,t.os="",t.browser="",t.blog="",t.recent_submission={submission:0,accept:0},t.avatar="",t.acm_user=!1,t.privilege=!1,t.submission={local:[],hdu:[],poj:[],uva:[],other:[]},t.accept={hdu:[],poj:[],uva:[],local:[],other:[]},t.rank=0,t.vjudge_rank=0,t.last_login=0,t.local_accepted=0,t.other_accepted=0,t.same_percentage_aver=0,t.submission_count=[],t.same_problem_time=0,t.same_aver_length=0,t.total_same=0,t.finished=!1,t.user_id="",t}return Object(o["a"])(a,t),Object(r["a"])(a,[{key:"onUserIdChange",value:function(t){t&&t.length&&t.length>0&&(this.initData(t),document.title="User ".concat(this.user_id," -- ").concat(document.title))}},{key:"initData",value:function(t){var a=this;this.userId=t;var s=this;this.axios.get("/api/user/".concat(t)).then((function(s){var i=s.data;if(!Object.prototype.hasOwnProperty.call(i.data,"information"))return a.statement='The user "'.concat(t,'" is not exist.'),void(a.error=!0);var n,r,l,c,o,d=i,u=d.data.submission,h=[],v=[],p=[],_=[],m=[],g=function(t){var a=[];return y.a.forEach(t,(function(t){4===t.result&&0!=t.problem_id&&a.push(t)})),a=y.a.uniqBy(a,"problem_id"),a.sort((function(t,a){return isNaN(t.problem_id)||isNaN(a.problem_id)?t.problem_id<a.problem_id?1:t.problem_id===a.problem_id?0:-1:parseInt(t.problem_id)-parseInt(a.problem_id)})),a},b=[],f=j()(),C={};y.a.forEach(u,(function(t){(t.time=j()(t.time)).add(3,"month").isAfter(f)&&b.push(t),"LOCAL"===t.oj_name?h.push(t):"HDU"===t.oj_name?v.push(t):"POJ"===t.oj_name?p.push(t):"UVA"===t.oj_name?_.push(t):m.push(t),C[t.oj_name]&&C[t.oj_name].length>0?C[t.oj_name].push(t):C[t.oj_name]=[t]})),b.sort((function(t,a){return t.time.isBefore(a.time)?-1:1}));var w={},k={};for(var x in y.a.forEach(b,(function(t){var a=t.time.format("YYYY-MM-DD");w[a]?(++w[a],4===parseInt(t.result)&&++k[a]):(w[a]=1,k[a]=0,4===parseInt(t.result)&&(k[a]=1))})),r=g(v),n=g(h),l=g(p),c=g(_),o=g(m),C["LOCAL"]&&delete C["LOCAL"],C)Object.prototype.hasOwnProperty.call(C,x)&&(C[x]=g(C[x]));var $=d.data.privilege;if($&&$.length>0)for(var O=0;O<$.length;++O){if("administrator"===$[O].rightstr){$=a.$t("administrator");break}if("source_browser"===$[O].rightstr){$=a.$t("code editor");break}if("editor"===$[O].rightstr){$=a.$t("problem editor");break}}"string"!==typeof $&&($=a.$t("general user"));var E=function(t,a){return a.cnt-t.cnt};for(var M in C)Object.prototype.hasOwnProperty.call(C,M)&&("string"===typeof M&&0!==M.length||delete C[M]);console.log(C),d.data.os.sort(E),d.data.browser.sort(E);var D=d.data.information.github||"";return D.lastIndexOf("/")===D.length-1&&(D=D.substring(0,D.length-1)),-1!==D.indexOf("github.com")&&(D=D.substring(D.lastIndexOf("/")+1)),{award:d.data.award,admin:d.isadmin,biography:d.data.information.biography,const_variable:d.data.const_variable,article_publish:d.data.article_publish,nick:d.data.information.nick,reg_time:d.data.information.reg_time,school:d.data.information.school,submission_count:d.data.submission_count,github:D,email:d.data.information.email,vjudge_solved:d.data.information.vjudge_accept,os:d.data.os,browser:d.data.browser,blog:d.data.information.blog,recent_submission:{submission:w,accept:k},avatar:a.hasAvatarURL(d.data.information)?a.getAvatarURL(Object.assign({user_id:t},d.data.information)):e("84ef"),user_id:t,acm_user:d.data.acm_user,privilege:$,submission:{local:h,hdu:v,poj:p,uva:_,other:m},accept:{hdu:r,poj:l,uva:c,local:n,other:o},rank:d.data.rank,vjudge_rank:d.data.vjudge_rank,last_login:d.data.login_time&&d.data.login_time[0]?d.data.login_time[0].time:"",local_accepted:n.length,accepted_details:C,other_accepted:r.length+l.length+c.length+o.length,same_percentage_aver:parseInt(d.data.sim_average_percentage),same_problem_time:parseInt(d.data.sim_count),same_aver_length:parseInt(d.data.sim_average_length),total_same:d.data.total_sim_time}})).then((function(t){Object.assign(a,t),a.finished=!0})).then((function(){O("#preload").hide();var t=O("title").html();O(".placeholder").remove(),a.$nextTick((function(){var t=j()().endOf("day").toDate(),e=j()().startOf("day").subtract(1,"year").toDate(),i=a.submission_count,n={};y.a.forEach(i,(function(t){t.day<10&&(t.day="0"+t.day),t.month<10&&(t.month="0"+t.month);var a=t.year+"-"+t.month+"-"+t.day;n[a]?n[a]+=t.cnt:n[a]=t.cnt}));var r=u["timeDays"](e,t).map((function(t){return{date:t,count:n[j()(t).format("YYYY-MM-DD")]||0}})),l=p({width:O(".heatmap").width()}).data(r).selector(".heatmap").tooltipEnabled(!0).colorRange(["#c6e48b","#7bc96f","#239a3b","#196127"],"#dfdfdf").onClick((function(){})).tooltipEnabled(!0).legendEnabled(!0);l(),s.$nextTick((function(){var t=new k.a(document.getElementById("pie_chart").getContext("2d"),{type:"pie",data:{datasets:[{data:[s.local_accepted,y.a.reduce(s.submission.local,(function(t,a){return a.result=parseInt(a.result),6===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 10===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 7===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 8===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 9===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 11===a.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return 5===a.result?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#F7464A","#D4CCC5"]}],labels:["Accepted","Wrong Answer","Runtime Error","Time Limit Exceeded","Memory Limit Exceeded","Output Limit Exceeded","Compile Error","Presentation Error"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var a=[];a.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var e=t.data,s=e.datasets,i=e.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)a.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&a.push(i[n]),a.push("</li>");return a.push("</ul>"),a.join("")}}});document.getElementById("pie_chart_legend").innerHTML=t.generateLegend();var a=new k.a(document.getElementById("pie_chart_language").getContext("2d"),{type:"pie",data:{datasets:[{data:[y.a.reduce(s.submission.local,(function(t,a){return"0"===a.language||"21"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"1"===a.language||"19"===a.language||"20"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"3"===a.language||"23"===a.language||"24"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"6"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"13"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"14"===a.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,a){return"2"===a.language?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#E2EAE9"]}],labels:["GCC","G++","Java","Python","Clang","Clang++","Pascal"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var a=[];a.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var e=t.data,s=e.datasets,i=e.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)a.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&a.push(i[n]),a.push("</li>");return a.push("</ul>"),a.join("")}}});document.getElementById("pie_chart_language_legend").innerHTML=a.generateLegend();var e={type:"line",data:{labels:y.a.keys(s.recent_submission.submission),datasets:[{label:this.$t("total submission"),backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,data:y.a.values(s.recent_submission.submission),fill:!1},{label:this.$t("accept"),fill:!1,backgroundColor:window.chartColors.blue,borderColor:window.chartColors.blue,data:y.a.values(s.recent_submission.accept)}]},options:{responsive:!0,title:{display:!1,text:this.$t("statistic information")},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("month")}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("submit")}}]}}},i=document.getElementById("canvas").getContext("2d");window.myLine=new k.a(i,e)}))})),O("title").html(s.user_id+" "+s.nick+" "+t)})),this.axios.get("/api/user/tutorial/".concat(t)).then((function(t){var e=t.data;a.tutorial_publish=e.data}))}},{key:"online",get:function(){var t=this;return this.$store.getters.onlineUser.some((function(a){return a.user_id===t.user_id}))}}]),a}(Object(g["b"])(m["a"]));Object(d["c"])([Object(g["c"])({default:""})],E.prototype,"userId",void 0),Object(d["c"])([Object(g["d"])("userId")],E.prototype,"onUserIdChange",null),E=Object(d["c"])([Object(g["a"])({components:{ContestMode:_["a"]},computed:Object($["b"])(["contestMode"])})],E);var M=E,D=M,A=(e("a3c6"),e("2877")),I=Object(A["a"])(D,s,i,!1,null,"d873ed6e",null);a["a"]=I.exports},"20a2":function(t,a,e){"use strict";var s=e("d4ec"),i=e("bee2"),n=e("99de"),r=e("7e84"),l=e("262e"),c=e("9ab4"),o=e("2b0e"),d=e("2fe1"),u=e("3657"),h=u["a"].getAvatarURL,v=u["a"].hasAvatarURL,p=function(t){function a(){return Object(s["a"])(this,a),Object(n["a"])(this,Object(r["a"])(a).apply(this,arguments))}return Object(l["a"])(a,t),Object(i["a"])(a,[{key:"getAvatarURL",value:function(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return h.apply(this,a)}},{key:"hasAvatarURL",value:function(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return v.apply(this,a)}}]),a}(o["a"]);p=Object(c["c"])([d["b"]],p),a["a"]=p},"31da":function(t,a,e){},a3c6:function(t,a,e){"use strict";var s=e("31da"),i=e.n(s);i.a},bc99:function(t,a,e){"use strict";var s=e("111f"),i=e.n(s);a["default"]=i.a},d3a2:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui negative message"},[e("div",{staticClass:"header"},[e("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),e("p",[t._v(t._s(t.$t("context")))])])},i=[],n=e("d4ec"),r=e("99de"),l=e("7e84"),c=e("262e"),o=e("9ab4"),d=e("60a3"),u=e("2b0e"),h=function(t){function a(){return Object(n["a"])(this,a),Object(r["a"])(this,Object(l["a"])(a).apply(this,arguments))}return Object(c["a"])(a,t),a}(u["a"]);h=Object(o["c"])([d["a"]],h);var v=h,p=v,_=e("2877"),m=e("bc99"),g=Object(_["a"])(p,s,i,!1,null,"5816c0f2",null);"function"===typeof m["default"]&&Object(m["default"])(g);a["a"]=g.exports}}]);