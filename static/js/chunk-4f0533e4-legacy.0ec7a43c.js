(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0533e4"],{"0443":function(e){e.exports=JSON.parse('{"title":"CUP Online Judge"}')},"21a6":function(e,t,n){(function(n){var o,a,r;(function(n,i){a=[],o=i,r="function"===typeof o?o.apply(t,a):o,void 0===r||(e.exports=r)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,c=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var c=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?r(l):a(l.href)?o(e,t,n):r(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){r(c)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var r="application/octet-stream"===e.type,c=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&c)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},s.readAsDataURL(e)}else{var u=i.URL||i.webkitURL,d=u.createObjectURL(e);a?a.location=d:location.href=d,a=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});i.saveAs=c.saveAs=c,e.exports=c}))}).call(this,n("c8ba"))},2909:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("0d03"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(e){return o(e)||a(e)||r()}n.d(t,"a",(function(){return i}))},"2cd4":function(e,t,n){"use strict";var o=n("d4ec"),a=n("bee2"),r=n("99de"),i=n("7e84"),c=n("262e"),l=n("9ab4"),s=n("2b0e"),u=n("60a3"),d=n("f1ed"),f=n("0443"),p=function(e){function t(){return Object(o["a"])(this,t),Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(a["a"])(t,[{key:"mounted",value:function(){d["a"].init(this.$store.getters.homepage),document.title=f.title}}]),t}(s["a"]);p=Object(l["c"])([u["a"]],p),t["a"]=p},"4df4":function(e,t,n){"use strict";var o=n("0366"),a=n("7b0b"),r=n("9bdd"),i=n("e95a"),c=n("50c4"),l=n("8418"),s=n("35a1");e.exports=function(e){var t,n,u,d,f,p,b=a(e),v="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,w=void 0!==h,y=s(b),g=0;if(w&&(h=o(h,m>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(t=c(b.length),n=new v(t);t>g;g++)p=w?h(b[g],g):b[g],l(n,g,p);else for(d=y.call(b),f=d.next,n=new v;!(u=f.call(d)).done;g++)p=w?r(d,h,[u.value,g],!0):u.value,l(n,g,p);return n.length=g,n}},"60aa":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui container padding"},[n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column",staticStyle:{"z-index":"1700"}},[n("select",{staticClass:"ui search dropdown label selection",on:{change:function(t){e.label=e.select(".label.selection.ui.dropdown").dropdown("get value")}}},e._l(e.all_label,(function(t){return n("option",{key:t,domProps:{value:t,textContent:e._s(t)}})})),0)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("button",{staticClass:"ui primary button",on:{click:e.getXLSFile}},[e._v(" "+e._s(e.$t("export problem"))+" ")])])]),n("div",{staticClass:"row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.exported_number>0,expression:"exported_number > 0"}],staticClass:"column"},[e._v(" Exported: "+e._s(e.exported_number)+" ")])])]),n("table",{style:"display:none;vnd.ms-excel.numberformat:@",attrs:{id:"save"}},[n("tbody",[e._m(0),e._l(e.problemList,(function(t,o){return n("tr",{key:o},[n("td",{attrs:{align:"center"}},[e._v(e._s(t.problem_id))]),n("td",{attrs:{align:"center"}},[e._v(e._s(t.title))])])}))],2)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"toprow",attrs:{align:"center"}},[n("td",[e._v("Problem ID")]),n("td",[e._v("title")])])}],r=(n("99af"),n("4de4"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("2909")),i=(n("96cf"),n("d4ec")),c=n("bee2"),l=n("99de"),s=n("7e84"),u=n("262e"),d=n("9ab4"),f=n("2cd4"),p=n("21a6"),b=n("60a3"),v=n("1157"),m=n.n(v),h=m.a,w=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.select=h,e.label=[],e.all_label=[],e.problemList=[],e.exported_number=0,e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.getLabel()}},{key:"getXLSFile",value:function(){var e,t,n,o;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:e=0,t=this.label,console.log(t),n=[];case 4:return a.next=7,regeneratorRuntime.awrap(this.axios.get("/api/problemset/".concat(e,"/none/problem_id/0/?label=").concat(t)).then((function(e){var t=e.data;return 0!==t.problem.length&&(n.push.apply(n,Object(r["a"])(t.problem.filter((function(e){return 1===e.label.split(" ").length})))),!0)})));case 7:if(o=a.sent,o){a.next=10;break}return a.abrupt("break",14);case 10:this.exported_number=n.length,++e,a.next=4;break;case 14:this.problemList=n,this.$nextTick((function(){var e=document.getElementById("save"),n='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'+"<head><meta http-equiv='Content-Type' content='application/vnd.ms-excel; charset=utf-8' /></head>";n+="<table border=1>"+e.innerHTML.replace("<tbody>","").replace("</tbody>",""),n+="</table></html>";var o=new Blob([n],{type:"application/vnd.ms-excel;charset=UTF-8;"});Object(p["saveAs"])(o,"".concat(t,".xls"))}));case 16:case"end":return a.stop()}}),null,this)}},{key:"getLabel",value:function(){var e=this;this.axios.get("/api/problem/local/?label=true").then((function(t){var n=t.data,o=h(".label.selection.ui.dropdown");e.all_label=n.data;var a=e.label;o.dropdown({allowAdditions:!1}).on("click",(function(){e.label=o.dropdown("get value")}));for(var r=0;r<a.length;++r)o.dropdown("set selected",a[r])}))}}]),t}(Object(b["b"])(f["a"]));w=Object(d["c"])([b["a"]],w);var y=w,g=y,x=n("2877"),_=Object(x["a"])(g,o,a,!1,null,"02933ca0",null);t["default"]=_.exports},a630:function(e,t,n){var o=n("23e7"),a=n("4df4"),r=n("1c7e"),i=!r((function(e){Array.from(e)}));o({target:"Array",stat:!0,forced:i},{from:a})}}]);