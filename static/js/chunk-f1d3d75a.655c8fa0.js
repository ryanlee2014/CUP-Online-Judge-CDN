(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1d3d75a"],{"0443":function(e){e.exports=JSON.parse('{"title":"CUP Online Judge"}')},"21a6":function(e,t,n){(function(n){var o,a,l;(function(n,i){a=[],o=i,l="function"===typeof o?o.apply(t,a):o,void 0===l||(e.exports=l)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){r(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var r=i.URL||i.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?l(s):a(s.href)?o(e,t,n):l(s,s.target="_blank")):(s.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(s.href)}),4e4),setTimeout((function(){l(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),n);else if(a(e))o(e,n,i);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){l(r)}))}}:function(e,t,n,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var l="application/octet-stream"===e.type,r=/constructor/i.test(i.HTMLElement)||i.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&r)&&"object"==typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,u=d.createObjectURL(e);a?a.location=u:location.href=u,a=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});i.saveAs=r.saveAs=r,e.exports=r}))}).call(this,n("c8ba"))},"2cd4":function(e,t,n){"use strict";var o=n("9ab4"),a=n("2b0e"),l=n("60a3"),i=n("3657"),r=n("0443"),s=class extends a["a"]{mounted(){i["a"].init(this.$store.getters.homepage),document.title=r.title}};s=Object(o["c"])([l["a"]],s),t["a"]=s},"60aa":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui container padding"},[n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column",staticStyle:{"z-index":"1700"}},[n("select",{staticClass:"ui search dropdown label selection",on:{change:function(t){e.label=e.select(".label.selection.ui.dropdown").dropdown("get value")}}},e._l(e.all_label,(function(t){return n("option",{key:t,domProps:{value:t,textContent:e._s(t)}})})),0)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[n("button",{staticClass:"ui primary button",on:{click:e.getXLSFile}},[e._v(" "+e._s(e.$t("export problem"))+" ")])])]),n("div",{staticClass:"row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.exported_number>0,expression:"exported_number > 0"}],staticClass:"column"},[e._v(" Exported: "+e._s(e.exported_number)+" ")])])]),n("table",{style:"display:none;vnd.ms-excel.numberformat:@",attrs:{id:"save"}},[n("tbody",[e._m(0),e._l(e.problemList,(function(t,o){return n("tr",{key:o},[n("td",{attrs:{align:"center"}},[e._v(e._s(t.problem_id))]),n("td",{attrs:{align:"center"}},[e._v(e._s(t.title))])])}))],2)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"toprow",attrs:{align:"center"}},[n("td",[e._v("Problem ID")]),n("td",[e._v("title")])])}],l=(n("e260"),n("5319"),n("1276"),n("ddb0"),n("1da1")),i=n("9ab4"),r=n("2cd4"),s=n("21a6"),c=n("60a3"),d=n("1157"),u=n.n(d),p=u.a,f=class extends(Object(c["b"])(r["a"])){constructor(){super(...arguments),this.select=p,this.label=[],this.all_label=[],this.problemList=[],this.exported_number=0}mounted(){this.getLabel()}getXLSFile(){var e=this;return Object(l["a"])((function*(){var t=0,n=e.label;console.log(n);var o=[];while(1){var a=yield e.axios.get("/api/problemset/".concat(t,"/none/problem_id/0/?label=").concat(n)).then(e=>{var{data:t}=e;return 0!==t.problem.length&&(o.push(...t.problem.filter(e=>1===e.label.split(" ").length)),!0)});if(!a)break;e.exported_number=o.length,++t}e.problemList=o,e.$nextTick(()=>{var e=document.getElementById("save"),t='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'+"<head><meta http-equiv='Content-Type' content='application/vnd.ms-excel; charset=utf-8' /></head>";t+="<table border=1>"+e.innerHTML.replace("<tbody>","").replace("</tbody>",""),t+="</table></html>";var o=new Blob([t],{type:"application/vnd.ms-excel;charset=UTF-8;"});Object(s["saveAs"])(o,"".concat(n,".xls"))})}))()}getLabel(){var e=this;this.axios.get("/api/problem/local/?label=true").then(t=>{var{data:n}=t,o=p(".label.selection.ui.dropdown");e.all_label=n.data;var a=e.label;o.dropdown({allowAdditions:!1}).on("click",(function(){e.label=o.dropdown("get value")}));for(var l=0;l<a.length;++l)o.dropdown("set selected",a[l])})}};f=Object(i["c"])([c["a"]],f);var b=f,m=b,v=n("2877"),w=Object(v["a"])(m,o,a,!1,null,"09f931c6",null);t["default"]=w.exports}}]);