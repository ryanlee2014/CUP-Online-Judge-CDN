(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04c08c67"],{"0443":function(a){a.exports=JSON.parse('{"title":"CUP Online Judge"}')},"2cd4":function(a,e,n){"use strict";var i=n("d4ec"),c=n("bee2"),t=n("99de"),o=n("7e84"),s=n("262e"),p=n("9ab4"),l=n("2b0e"),r=n("60a3"),u=n("3657"),v=n("0443"),d=function(a){function e(){return Object(i["a"])(this,e),Object(t["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(s["a"])(e,a),Object(c["a"])(e,[{key:"mounted",value:function(){u["a"].init(this.$store.getters.homepage),document.title=v.title}}]),e}(l["a"]);d=Object(p["c"])([r["a"]],d),e["a"]=d},aed1:function(a,e,n){"use strict";n.r(e);var i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[a._v(" "+a._s(a.$t("compile arguments"))+" ")]),n("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0"}},[a._l(a.compileArguments,(function(e,i){return n("div",{key:i,staticClass:"row"},[n("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0","margin-top":"0",width:"100%"}},[n("div",{staticClass:"row"},[n("h2",{staticClass:"ui header"},[a._v(" "+a._s(a.languageName[i])+" ")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"ui input",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.compileArguments[i],expression:"compileArguments[name]"}],attrs:{type:"text"},domProps:{value:a.compileArguments[i]},on:{input:function(e){e.target.composing||a.$set(a.compileArguments,i,e.target.value)}}})])])])])})),n("div",{staticClass:"row"},[n("a",{staticClass:"ui primary button",on:{click:function(e){return e.preventDefault(),a.submitCompileArguments(e)}}},[a._v(a._s(a.$t("submit")))])])],2)])},c=[],t=(n("4160"),n("a15b"),n("d81d"),n("ac1f"),n("1276"),n("498a"),n("159b"),n("d4ec")),o=n("bee2"),s=n("99de"),p=n("7e84"),l=n("262e"),r=n("9ab4"),u=n("60a3"),v=n("2cd4"),d=n("2ef0"),m=n.n(d),h=n("b2ab"),g=h.language_name.local,y=function(a){function e(){var a;return Object(t["a"])(this,e),a=Object(s["a"])(this,Object(p["a"])(e).apply(this,arguments)),a.compileArguments={},a.languageName=g,a}return Object(l["a"])(e,a),Object(o["a"])(e,[{key:"mounted",value:function(){this.initCompileArguments()}},{key:"initCompileArguments",value:function(){var a=this;this.axios.get("/api/admin/system/compile/compile_arguments").then((function(e){var n=e.data,i=n.data;m.a.forEach(i,(function(a,e){i[e]=a.join(" ")})),a.compileArguments=i}))}},{key:"submitCompileArguments",value:function(){var a=this,e={};m.a.forEach(this.compileArguments,(function(a,n){e[n]=a.split(" ").map((function(a){return a.trim()}))})),this.axios.post("/api/admin/system/compile/compile_arguments",{payload:e}).then((function(e){e.data;alert(a.$t("success"))}))}}]),e}(Object(u["b"])(v["a"]));y=Object(r["c"])([u["a"]],y);var b=y,j=b,C=n("2877"),_=Object(C["a"])(j,i,c,!1,null,"601efa96",null);e["default"]=_.exports},b2ab:function(a){a.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java 10","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')}}]);