(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6878792"],{"0443":function(e){e.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(e,t,a){"use strict";var i=a("9ab4"),c=a("2b0e"),s=a("60a3"),o=a("3657"),n=a("0443"),r=class extends c["a"]{mounted(){o["a"].init(this.$store.getters.homepage),document.title=n.title}};r=Object(i["c"])([s["a"]],r),t["a"]=r},"9b84":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("div",{staticClass:"ui menu borderless",staticStyle:{margin:"0",padding:"0",position:"relative",height:"35px",color:"black",width:"100%","text-align":"right"},attrs:{id:"modeBar"}},[a("div",{staticClass:"right menu"},[e.editorPackage?a("monaco-theme-selector",{model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}}):a("ace-theme-selector",{model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}})],1)]),e.editorPackage?a("monaco-editor",{attrs:{fontSize:e.fontSize,selected_language:e.selected_language,theme:e.theme},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}):a("ace-editor",{attrs:{fontSize:e.fontSize,selected_language:e.selected_language,theme:e.theme},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),a("div",{staticClass:"ui menu borderless",staticStyle:{margin:"0",padding:"0",position:"relative",height:"30px",color:"black",width:"100%"},attrs:{id:"statusBar"}},[a("div",{staticClass:"item",staticStyle:{"text-align":"center"}},[e._v(" CUP Online Judge "),a("div",{staticClass:"item"},[a("div",{staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editorPackage,expression:"editorPackage"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.editorPackage)?e._i(e.editorPackage,null)>-1:e.editorPackage},on:{change:function(t){var a=e.editorPackage,i=t.target,c=!!i.checked;if(Array.isArray(a)){var s=null,o=e._i(a,s);i.checked?o<0&&(e.editorPackage=a.concat([s])):o>-1&&(e.editorPackage=a.slice(0,o).concat(a.slice(o+1)))}else e.editorPackage=c}}}),a("label",[e._v("切换编辑器")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.editorPackage,expression:"!editorPackage"}],staticClass:"item"},[a("span",{staticClass:"item"},[e._v("字号:")]),a("div",{staticClass:"ui input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fontSize,expression:"fontSize"}],staticStyle:{width:"60px","text-align":"center",height:"30px"},attrs:{id:"fontsize",type:"text"},domProps:{value:e.fontSize},on:{input:function(t){t.target.composing||(e.fontSize=t.target.value)}}})])])])])],1)])])])},c=[],s=(a("e260"),a("ddb0"),a("1da1")),o=a("9ab4"),n=a("f6bf"),r=a("cc87"),l=a("3865"),d=a("2f90"),u=a("2cd4"),h=a("60a3"),g=a("5dbd"),p=a("fa82"),m=a.n(p),b={c11:0,cpp17:1,pascal:2,java10:3,ruby:4,bash:5,python2:6,php:7,perl:8,csharp:9,"obj-c":10,freebasic:11,schema:12,clang:13,clangpp:14,lua:15,javascript:16,go:17,python3:18,cpp11:19,cpp98:20,c99:21,kotlin:22,java8:23,java7:24,pypy:25,pypy3:26,java6:27,clang11:28,clangpp17:29},v=a("1ae0"),k=class extends(Object(h["b"])(u["a"])){constructor(){super(...arguments),this.theme="ace/theme/monokai",this.code="",this.editorPackage=!0,this.fontSize="16",this.selected_language=0,this.remoteData=!1,this.lock=new m.a}onEditorPackageChange(e){this.theme=e?"vs-dark":"ace/theme/monokai"}onCodeChange(e){var t=this;return Object(s["a"])((function*(){e&&(t.detectLanguageDebouncer(),yield t.lock.acquireAsync(),!t.remoteData&&t.$store.getters.admin?t.sendChanges(e):t.remoteData=!1,t.lock.release())}))()}sendChanges(e){this.$socket.emit("whiteboard",{request:"text",content:e})}mounted(){var e=this;document.title="Whiteboard -- ".concat(document.title),this.$socket.emit("whiteboard",{request:"register"}),this.sockets.subscribe("whiteboard",function(){var t=Object(s["a"])((function*(t){var{from:a,type:i}=t;"content"===i&&a!==e.$store.getters.user_id&&(yield e.lock.acquireAsync(),e.remoteData=!0,e.lock.release(),e.code=t.content)}));return function(e){return t.apply(this,arguments)}}())}beforeDestroy(){this.sockets.unsubscribe("whiteboard")}detectLanguageDebouncer(){var e=v(this.code,Object.values(b));this.selected_language!==e&&(this.selected_language=e)}};Object(o["c"])([Object(h["d"])("editorPackage")],k.prototype,"onEditorPackageChange",null),Object(o["c"])([Object(h["d"])("code")],k.prototype,"onCodeChange",null),Object(o["c"])([Object(g["a"])(500)],k.prototype,"sendChanges",null),Object(o["c"])([Object(g["a"])(100)],k.prototype,"detectLanguageDebouncer",null),k=Object(o["c"])([Object(h["a"])({components:{aceEditor:n["a"],aceThemeSelector:r["a"],monacoEditor:l["a"],monacoThemeSelector:d["a"]}})],k);var f=k,y=f,_=a("2877"),w=Object(_["a"])(y,i,c,!1,null,"62c19d8b",null);t["default"]=w.exports},fa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(){this._acquired=!1,this._waitingResolvers=[]}acquireAsync(){return this._acquired?new Promise(e=>{this._waitingResolvers.push(e)}):(this._acquired=!0,Promise.resolve())}tryAcquire(){return!this._acquired&&(this._acquired=!0,!0)}release(){if(!this._acquired)throw new Error("Cannot release an unacquired lock");if(this._waitingResolvers.length>0){let e=this._waitingResolvers.shift();e()}else this._acquired=!1}}t.default=i}}]);