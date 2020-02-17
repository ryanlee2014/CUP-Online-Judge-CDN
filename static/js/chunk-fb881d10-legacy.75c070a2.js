(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb881d10"],{"038e":function(n,e,t){"use strict";t.r(e),e["default"]='<div class="ui warning message">\n<div class="header">Tips</div>\nIf you don\'t familiar with the platform and rules of Online Judge, it is recommended to use Google, Baidu and other search engines to understanding the ecosystem of Online Judge itself before reading this <b>FAQ</b>.\n(e.g.<a href="https://en.wikipedia.org/wiki/Competitive_programming" target="_blank">Wikipedia-Competitive programming</a>)。\n<br>\nLearn more about this platform, please access this link:<a href="about" target="_blank">About</a>\n<br>\nLearn more about the open source project used to build the platform, please access this link:<a href="opensource" target="_blank">Open Source Announcement</a>\n<br>\nAbout ICPC Contest, please use search engines, and read this article: <a href="icpc" target="_blank">What is ICPC</a>\n</div>\n\nAuthor: [Ryan Lee(李昊元)](/user/2016011253)\n\n<div class="ui message">\n<div class="header">Compatibility tips</div>\nThis system is based on the latest version of the Chrome browser for front-end development, in order to ensure that all functions work properly, it is recommended to use the recommended configuration computer to access:\n<br>\n* <b>The resolution is not lower than 1440×900</b><br>\n* <b>64-bit modern operating system for Windows 7/64-bit operating system for MacOS 10.12/64/64-bit operating system for Ubuntu 14.04 or higher</b><br>\n* <b>The latest version of Chrome/Firefox/Chromium-based Edge browser</b><br>\n* <b>more than 2GB of memory</b><br>\n</div>\n\n## How to submit my code?\n\n1. Register an account\n2. Enter a problem\n3. Paste your code to WebIDE\n4. Click "submit", and waiting for judging.\n```cpp\n   if(AC) goto 2;\n   else {\n       debug;\n       goto 3;\n   }\n```\n## What environment does my code run on?\n\n- CPU:Intel(R) Xeon(R) CPU E5-2609 0 @ 2.40GHz\n- RAM:16GB\n- OS:CentOS 7\n- GCC:9.1.0\n- Clang:LLVM 6.0.0\n- Java:6/7/8/10(OpenJDK)\n- JavaScript:Node.JS Latest\n- Python:CPython/PyPy\n## What is my compiling environment?\n\n| Compiler(Language) | Command                                                                                                        |\n|:------------------:| -------------------------------------------------------------------------------------------------------------- |\n| GCC(C/C++)         | `gcc/g++ -fmax-errors=10 -fno-asm -Wall -O2 -lm --static -std=c++${version} -DONLINE_JUDGE -o Main Main.cc `   |\n| Clang(C/C++)       | `clang/clang++ Main.cc -o Main -ferror-limit=10 -fno-asm -Wall -lm --static -std=c++${version} -DONLINE_JUDGE` |\n| Java               | `java -J${java_xms} -J${java_xmx} -encoding UTF-8 Main.java`                                                   |\n| Python             | None                                                                                                           |\n| JavaScript         | None                                                                                                           |\n| fpc(Pascal)        | `fpc Main.pas -Cs32000000 -Sh -O2 -Co -Ct -Ci`                                                                 |\n\n\n\n## How do I get input from the judge machine and output the results?\n\nThe judge machine only accepts input using `stdin` and outputs the result to `stdout`. All file operations are prohibited\n## What does the result returned by the judge machine mean?\n\n| Judge Results | Meaning |\n| -------------------------- | -------------------------------------------- |\n|Waiting / Waiting | Waiting for the evaluation queue to evaluate the code |\n| Compiling/Compiling | System is compiling code |\n| Running/Running and Judging | The system is running the program and judging |\n| Accept / Answer Correct | Code Passes All Evaluation Samples |\n| Presentation Error / Format Error | Code results can pass all samples, but there is no format that meets the requirements of the topic |\n| Wrong Answer / Answer Error | Code did not pass all the evaluation examples |\n|Time Limit Exceeded/Time Overrun | The code runs out of time and the program is forcibly terminated early |\n|Memory Limit Exceeded/Memory Overrun | The code runs out of memory and the program is forcibly terminated early |\n|Output Limit Exceeded/Output Limit | The code runs out of the correct output (generally more than twice the correct output length) or **exceeds the evaluation machine\'s limit on the output file (256MB)** |\n|Runtime Error/Run Error | Code error occurred during run/access illegal memory space/Illegal call system operation/float number divide-by-zero error/system error |\n| Compile Error | An error occurred during compilation, compilation failed |\n|Add to queue/joined queue | code has been added to the crawler submission queue, waiting to send a submit request to the remote server |\n| Server Refuse/Submission rejected by server | Code was not successfully submitted to the target server due to invalid code/target server status, etc. |\n| System Error / System Error | The system could not complete the evaluation due to unforeseen reasons |\n\n\n## How can I write a program for OJ?\n\ne.g. Problem 1000 A+B Problem \n\n### C\n\n```c\n#include <stdio.h>\nint main()\n{\n  int a,b;\n  scanf("%d%d",&a,&b);\n  printf("%d\\n");\n}\n```\n\n### C++\n\n```c++\n#include <iostream>\nusing namespace std;\nint main()\n{\n  int a,b;\n  cin >> a >> b;\n  cout << a + b << endl;\n}\n```\n\n### Java\n\n**Note: Java programs must have `Main` as the main class, otherwise a compilation error will be returned**\n\n```java\nimport java.util.*\npublic class Main {\n\tpublic static void main(String[] args) throws Exception {\n  \tScanner in = new Scanner(System.in);\n    int a = in.nextInt();\n    int b = in.nextInt();\n    System.out.println(a+b);\n  }\n}\n```\n\n### Python 2\n\n```python\nprint sum(map(int,raw_input().split()))\n```\n\n### Python 3\n\n```python\nprint(sum(map(int,input().split()))\n```\n\n## Note\n\n#### C/C++\n\nThe return value of `main` function must be `int`, `void main()` and other non-standard writing will not be allowed.\n2. For 64-bit integers, declare the variable with `long long/unsigned long long` instead of `__int64` and use `%lld` or `%llu` to input and output\n3. For well-known reasons, `cin` and `cout` are slower than `scanf` and `printf`. Therefore, we recommend using the latter two to read and write data. (In fact, `cin` and `cout` are not necessarily slower than `scanf` and `printf`. For details, see [Emotional Comparison Machine Efficiency](/discuss/thread/8) and [cin Acceleration](http://www.hankcs.com/program/cpp/cin-tie-with-sync\\_with\\_stdio-acceleration-input-and-output.html))\n#### Java\n\n1. There can only be one public class in the submitted code. The class name must be `Main`, and the class `Main` must be set to `public`.\n2. There must be a `static main` method in the `Main` class, and ensure that the method returns `void`\n#### other languages\n\nThe time limit and memory limit of other languages (including Java) is generally twice that of C/C++.\n\n## Why my submission don\'t get "Accept" while my code can output currectly answer in my PC?\n\nThe sample problem show is just one of possible test data in server. Maybe you should consider about other possibilities you unexpected and recheck your code.\n'},"09f6":function(n,e,t){"use strict";t.r(e),e["default"]='<div class="ui warning message">\n<div class="header">ヒント</div>\nOnline Judgeのプラットフォームとルールに慣れていない場合は、このFAQを読む前に、Google、Baidu、その他の検索エンジンを使用してOnline Judge自体のエコシステムを理解することをお勧めします。\n(関連コンテンツ:<a href="https://en.wikipedia.org/wiki/Competitive_programming" target="_blank">Wikipedia-Competitive programming</a>)。\n<br>\nこのプラットフォームの詳細については、このリンクにアクセスしてください。:<a href="about" target="_blank">About</a>\n<br>\nプラットフォームを構築するために使用されるオープンソースプロジェクトの詳細については、このリンクにアクセスしてください。:<a href="opensource" target="_blank">Open Source Announcement</a>\n<br>\nICPCコンテストについては、検索エンジンを使用して、この記事を読んでください: <a href="icpc" target="_blank">What is ICPC</a>\n</div>\n\nAuthor: [Ryan Lee(李昊元)](/user/2016011253)\n\n<div class="ui message">\n<div class="header">相性ヒント</div>\nこのシステムは、フロントエンド開発用の最新バージョンのChromeブラウザに基づいています。すべての機能が正しく機能することを確認するために、推奨設定コンピュータを使用してアクセスすることをお勧めします:\n<br>\n* <b>解像度は1440×900以上</b><br>\n* <b>Windows 7 x64/MacOS 10.12 x64/Ubuntu 14.04 x64 or higher</b><br>\n* <b>Chrome / Firefox / ChromiumベースのEdgeブラウザの最新バージョン</b><br>\n* <b>2GB以上のメモリ</b><br>\n</div>\n\n## 私のコードを提出するにはどうすればいいですか？\n\n1.アカウントを登録する\n\n2.問題を入力してください\n\n3.コードをWebIDEに貼り付けます\n\n4.送信をクリックして、審査結果を待ちます。\n```cpp\n   if(AC) goto 2;\n   else {\n       debug;\n       goto 3;\n   }\n```\n## 私のコードはどの環境で動作しますか？\n\n- CPU:Intel(R) Xeon(R) CPU E5-2609 0 @ 2.40GHz\n- RAM:16GB\n- OS:CentOS 7\n- GCC:9.1.0\n- Clang:LLVM 6.0.0\n- Java:6/7/8/10(OpenJDK)\n- JavaScript:Node.JS Latest\n- Python:CPython/PyPy\n## 私のコンパイル環境は何ですか？\n\n| コンパイラ（言語） | コマンド                                                                                                        |\n|:------------------:| -------------------------------------------------------------------------------------------------------------- |\n| GCC(C/C++)         | `gcc/g++ -fmax-errors=10 -fno-asm -Wall -O2 -lm --static -std=c++${version} -DONLINE_JUDGE -o Main Main.cc `   |\n| Clang(C/C++)       | `clang/clang++ Main.cc -o Main -ferror-limit=10 -fno-asm -Wall -lm --static -std=c++${version} -DONLINE_JUDGE` |\n| Java               | `java -J${java_xms} -J${java_xmx} -encoding UTF-8 Main.java`                                                   |\n| Python             | None                                                                                                           |\n| JavaScript         | None                                                                                                           |\n| fpc(Pascal)        | `fpc Main.pas -Cs32000000 -Sh -O2 -Co -Ct -Ci`                                                                 |\n\n\n\n## サーバーから入力を受け取り結果を出力するにはどうすればよいですか。\n\nジャッジマシンは `stdin`を使った入力だけを受け付けて結果を`stdout`に出力します。 すべてのファイル操作は禁止されています\n## ジャッジマシンによって返された結果はどういう意味ですか？\n\n| Judge Results | Meaning |\n| -------------------------- | -------------------------------------------- |\n|Waiting / Waiting | 評価キューがコードを評価するのを待っています |\n| Compiling/Compiling | システムはコードをコンパイルしています |\n| Running/Running and Judging | システムはプログラムを実行し、判断しています |\n| Accept / Answer Correct | コードはすべての評価サンプルに合格 |\n| Presentation Error / Format Error | コード結果はすべてのサンプルに合格することができますが、トピックの要件を満たすフォーマットはありません。 |\n| Wrong Answer / Answer Error | コードがすべての評価例に合格しなかった \n|Time Limit Exceeded/Time Overrun | コードが時間切れになり、プログラムが早期に強制終了された |\n|Memory Limit Exceeded/Memory Overrun | コードがメモリ不足になり、プログラムが早期に強制終了される |\n|Output Limit Exceeded/Output Limit | コードが正しい出力（通常は正しい出力長の2倍以上）を使い果たすか、**出力ファイルに対する評価マシンの制限（256 MB）を超えています** |\n|Runtime Error/Run Error |実行中にコードエラーが発生しました/不正なメモリ領域へのアクセス/不正な呼び出しシステム操作/浮動小数点数のゼロ除算エラー/システムエラー |\n| Compile Error | コンパイル中にエラーが発生しました、コンパイルは失敗しました |\n|Add to queue/joined queue | リモートサーバーに送信要求を送信するのを待っている、クローラー送信キューにコードが追加されました |\n| Server Refuse/Submission rejected by server | 無効なコード/ターゲットサーバーのステータスなどにより、コードがターゲットサーバーに正常に送信されませんでした。 |\n| System Error / System Error | 予期しない理由により、システムは評価を完了できませんでした |\n\n\n## どうやってOJのプログラムを書くことができますか？\n\ne.g. Problem 1000 A+B Problem \n\n### C\n\n```c\n#include <stdio.h>\nint main()\n{\n  int a,b;\n  scanf("%d%d",&a,&b);\n  printf("%d\\n");\n}\n```\n\n### C++\n\n```c++\n#include <iostream>\nusing namespace std;\nint main()\n{\n  int a,b;\n  cin >> a >> b;\n  cout << a + b << endl;\n}\n```\n\n### Java\n\n**注意：Javaプログラムはメインクラスとして `Main`を持っていなければなりません、そうでなければコンパイルエラーが返されます**\n\n```java\nimport java.util.*\npublic class Main {\n\tpublic static void main(String[] args) throws Exception {\n  \tScanner in = new Scanner(System.in);\n    int a = in.nextInt();\n    int b = in.nextInt();\n    System.out.println(a+b);\n  }\n}\n```\n\n### Python 2\n\n```python\nprint sum(map(int,raw_input().split()))\n```\n\n### Python 3\n\n```python\nprint(sum(map(int,input().split()))\n```\n\n## Note\n\n#### C/C++\n`main`関数の戻り値は` int`、 `void main（）`でなければならず、その他の標準的ではない書き込みは許可されません。\n2. 64ビット整数の場合、変数を `__int64`の代わりに` long long / unsigned long long`で宣言し、入出力には `％lld`または`％llu`を使用してください。\nよく知られた理由で、 `cin`と` cout`は `scanf`と` printf`より遅いです。 したがって、データの読み書きには後者の2つを使用することをお勧めします。 (実際、 `cin`と` cout`は必ずしも `scanf`と` printf`よりも遅いわけではありません。詳しくは、[Emotional Comparison Machine Efficiency](/discuss/thread/8)と[cin Acceleration](http://www.hankcs.com/program/cpp/cin-tie-with-sync\\_with\\_stdio-acceleration-input-and-output.html)を調べてください)\n#### Java\n1.送信されたコードに含まれるパブリッククラスは1つだけです。 クラス名は `Main`でなければならず、クラス` Main`は `public`に設定されなければなりません。\n2. `Main`クラスには` static main`メソッドがなければならず、そのメソッドが `void`を返すことを確認してください\n#### other languages\n\n他の言語（Javaを含む）の制限時間とメモリー制限は、通常C / C ++の2倍です。\n\n## 私のコードが私のPCで正しい答えを出力することができるのに、なぜ私の提出は "Accept"を得ないのですか？\n\nサンプル問題ショーはサーバーで可能性のあるテストデータの1つです。 たぶんあなたはあなたが予想外の他の可能性について考えて、あなたのコードを再チェックするべきです。\n'},"0bcd":function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"ui main container"},[t("h1",{staticClass:"ui dividing header"},[n._v(n._s(n.$t("faq"))+"(Version:2019/04/11)")]),t("div",{staticClass:"markdown target",domProps:{innerHTML:n._s(n.$t(n.$i18n.locale+"-contents"))}})])},a=[],r=(t("4160"),t("d3b7"),t("ac1f"),t("466d"),t("159b"),t("ddb0"),t("d4ec")),o=t("bee2"),s=t("99de"),c=t("7e84"),u=t("262e"),l=t("9ab4"),d=t("6b34"),m=t("2cd4"),p=t("60a3"),b=function(n){function e(){return Object(r["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,n),Object(o["a"])(e,[{key:"created",value:function(){this.locales=this.$i18n.locale}},{key:"mounted",value:function(){document.title="FAQ -- ".concat(document.title)}}]),e}(Object(p["b"])(m["a"]));b=Object(l["c"])([Object(p["a"])({i18n:function(){var n=t("9a2f"),e={};return n.keys().forEach((function(t){var i=t.match(/([A-Za-z0-9-_]+)\./i);if(i&&i.length>1){var a=i[1];e[a]={},e[a]["".concat(a,"-contents")]=d["a"].render(n(t).default)}})),{messages:e}}()})],b);var h=b,g=h,f=t("2877"),C=Object(f["a"])(g,i,a,!1,null,"c21c66e4",null);e["default"]=C.exports},"9a2f":function(n,e,t){var i={"./en.md":"038e","./ja.md":"09f6","./zh-cn.md":"e946"};function a(n){var e=r(n);return t(e)}function r(n){if(!t.o(i,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return i[n]}a.keys=function(){return Object.keys(i)},a.resolve=r,n.exports=a,a.id="9a2f"},e946:function(n,e,t){"use strict";t.r(e),e["default"]='<div class="ui warning message">\n<div class="header">提示</div>\n若您对平台使用方法、OJ模式相关问题不够了解，建议使用Google、百度等搜索引擎搜索后，再阅读本<b>FAQ</b>中的内容(如<a href="https://zh.wikipedia.org/wiki/%E5%9C%A8%E7%BA%BF%E5%88%A4%E9%A2%98%E7%B3%BB%E7%BB%9F" target="_blank">Wikipedia-在线评测系统</a>)。\n<br>平台开发相关信息，请访问<a href="about" target="_blank">关于</a><br>关于本平台使用的开源项目，请访问<a href="opensource" target="_blank">开放源代码声明</a><br>想要了解关于<b>ICPC竞赛</b>的资讯，请善用搜索引擎，并阅读<a href="icpc" target="_blank">什么是ICPC</a>\n</div>\n\n作者:[Ryan Lee(李昊元)](/user/2016011253)\n\n<div class="ui message">\n<div class="header">兼容性提示</div>\n本系统基于最新版本的Chrome浏览器进行前端开发，为了保证所有功能正常工作，建议使用推荐配置计算机进行访问:<br>\n* <b>分辨率不低于1440×900</b><br>\n* <b>Windows 7以上的64位现代操作系统/macOS 10.12以上的64位操作系统/Ubuntu 14.04以上的64位操作系统</b><br>\n* <b>最新版本的Chrome浏览器/Firefox浏览器/基于Chromium内核的Edge浏览器</b><br>\n* <b>2GB以上的内存</b><br>\n</div>\n\n## 我如何能够提交我的代码?\n\n1. 注册一个账号\n2. 进入一个题目\n3. 粘贴你的代码\n4. 点击提交，查看返回结果\n```cpp\n   if(AC) goto 2;\n   else {\n       debug;\n       goto 3;\n   }\n```\n## 我的代码在什么环境上运行？\n\n- CPU:Intel(R) Xeon(R) CPU E5-2609 0 @ 2.40GHz\n- RAM:16GB\n- OS:CentOS 7\n- GCC:9.1.0\n- Clang:LLVM 6.0.0\n- Java:6/7/8/10(OpenJDK)\n- JavaScript:Node.JS Latest\n- Python:CPython/PyPy\n## 我的编译环境是什么？\n\n| Compiler(Language) | Command                                                                                                        |\n|:------------------:| -------------------------------------------------------------------------------------------------------------- |\n| GCC(C/C++)         | `gcc/g++ -fmax-errors=10 -fno-asm -Wall -O2 -lm --static -std=c++${version} -DONLINE_JUDGE -o Main Main.cc `   |\n| Clang(C/C++)       | `clang/clang++ Main.cc -o Main -ferror-limit=10 -fno-asm -Wall -lm --static -std=c++${version} -DONLINE_JUDGE` |\n| Java               | `java -J${java_xms} -J${java_xmx} -encoding UTF-8 Main.java`                                                   |\n| Python             | None                                                                                                           |\n| JavaScript         | None                                                                                                           |\n| fpc(Pascal)        | `fpc Main.pas -Cs32000000 -Sh -O2 -Co -Ct -Ci`                                                                 |\n\n\n\n## 我如何从评测机获得输入，并将结果输出？\n\n评测机仅接受使用`stdin`进行输入，并将结果输出到`stdout`中。所有文件操作均被禁止使用\n\n## 评测机返回的结果代表什么意思?\n\n| 评测结果                       | 含义                                           |\n| -------------------------- | -------------------------------------------- |\n| Waiting/等待                 | 等待评测队列对代码进行评测                                |\n| Compiling/编译中              | 系统正在编译代码                                     |\n| Running/运行并评判              | 系统正在运行程序，并进行评判                               |\n| Accept/答案正确                | 代码通过所有的评测样例                                  |\n| Presentation Error/格式错误    | 代码结果可以通过所有样例，但是没有符合题目要求的格式                   |\n| Wrong Answer/答案错误          | 代码没有通过所有的评测样例                                |\n| Time Limit Exceeded/时间超限   | 代码运行的时间超出了题目的要求，程序被提前强行终止                    |\n| Memory Limit Exceeded/内存超限 | 代码运行的内存超出了题目的要求，程序被提前强行终止                    |\n| Output Limit Exceeded/输出超限 | 代码运行结果超出正确输出(一般是超出正确输出长度两倍以上)或**超出评测机对输出文件的限制(256MB)**                |\n| Runtime Error/运行错误         | 代码在运行过程中出现段错误/访问非法内存空间/非法调用系统操作/浮点数除零错误/系统错误 |\n| Compile Error/编译错误         | 编译过程中发生错误，编译失败                               |\n| Add to queue/已加入队列         | 代码已加入爬虫提交队列，等待向远程服务器发送提交请求                   |\n| Server Refuse/提交被服务器拒绝     | 由于代码不合法/目标服务器状态非法等原因，代码没有成功提交至目标服务器          |\n| System Error/系统错误          | 由于不可预料的原因，系统无法完成评测                           |\n\n### 特别说明:格式错误(2018/09/24 新增)\n> 什么是格式错误？\n\n格式错误是你的答案和标准输出的答案一致，但是控制字符/换行字符/空格数量与标准答案不同的情况。\n例如:\n|期望输出|实际输出 |\n|:-|:-|\n|a&nbsp;&nbsp;=&nbsp;&nbsp;b(间隔两个空格)|a=b|\n这种时候判题机会返回**格式错误**\n以下情况也会被认为是格式错误:\n|期望输出|实际输出 |\n|:-|:-|\n|* * \\*<br>&nbsp;* *<br>&nbsp;&nbsp;\\*|* * \\*<br>&nbsp;* *&nbsp;<br>&nbsp;&nbsp;\\*&nbsp;&nbsp;|\n以上两个的区别是:期望输出的右边**直接是换行，没有空格**\n但是，以下的输出不会被认为是格式错误，而是认为是**答案正确**\n|期望输出|实际输出|\n|-|-|\n|Hello,world!\\n|Hello,world!|\n这是因为判题机会**自动忽略最后一行行尾的换行符、空格以及控制字符**，至于为什么会做这个处理，将在其他的文章中讨论。\n\n### 特别说明:时间超限(2018/09/24 新增)\n> 时间超限指的是程序在执行过程中使用的CPU时间超过了题目的要求，抑或**由于程序基本没有使用CPU时间,但是始终处于运行状态超过了一定时间**(这里一般是10倍CPU限制时间)判题机将会返回时间超限。\n\n一般来说，时间超限可能因为程序的多项式时间超出题目要求所导致的。比如题目对于CPU时间限制为$1\\text{sec}$,对应简单操作$3\\times10^9$次。若输入规模$n$,程序多项式时间函数$f(x)$,则有$f(n) \\leq 1\\times3\\times 10^9$(事实上这并不严谨，只是一个为了方便理解的类比)。若$f(x)$不能满足限制，则**大概率无法在指定时间内运行结束**(这里还有一些神奇的玄学或编译器的编译期优化，以及循环展开等问题造成的影响，不予讨论)\n\n但是有一些特殊情况也会造成时间超限。例如**程序无法申请足够的内存，导致在不占用CPU时间的情况保持使能状态直到运行时间耗尽**。这时我们不难发现CPU时间并未跑满，而评测机却返回了时间超限。\n\n## 我如何针对OJ编写程序？\n\n以Problem 1000 A+B Problem 为例\n\n### C\n\n```c\n#include <stdio.h>\nint main()\n{\n  int a,b;\n  scanf("%d%d",&a,&b);\n  printf("%d\\n");\n}\n```\n\n### C++\n\n```c++\n#include <iostream>\nusing namespace std;\nint main()\n{\n  int a,b;\n  cin >> a >> b;\n  cout << a + b << endl;\n}\n```\n\n### Java\n\n**注:Java程序必须以`Main`作为主类，否则将返回编译错误**\n\n```java\nimport java.util.*\npublic class Main {\n\tpublic static void main(String[] args) throws Exception {\n  \tScanner in = new Scanner(System.in);\n    int a = in.nextInt();\n    int b = in.nextInt();\n    System.out.println(a+b);\n  }\n}\n```\n\n### Python 2\n\n```python\nprint sum(map(int,raw_input().split()))\n```\n\n### Python 3\n\n```python\nprint(sum(map(int,input().split()))\n```\n\n## 注意事项\n\n#### C/C++\n\n1. `main`函数的返回值必须为`int`,`void main()`等非标准的写法将不被允许\n2. 对于64位整数，请使用`long long/unsigned long long`而不是`__int64`声明变量，并使用`%lld`或`%llu`输入输出\n3. 由于众所周知的原因，`cin`和`cout`的速度慢于`scanf`以及`printf`。因此我们推荐使用后两者读写数据。(事实上`cin`以及`cout`并不一定比`scanf`和`printf`慢。详情见[感性对比评测机效率](/discuss/thread/8)以及[cin加速](http://www.hankcs.com/program/cpp/cin-tie-with-sync\\_with\\_stdio-acceleration-input-and-output.html))\n\n#### Java\n\n1. 提交的代码中只能存在一个public 类,该类名必须为`Main`,类`Main`必须设置为`public`\n2. `Main`类中必须存在一个`static main`方法，并保证该方法返回`void`\n\n#### 其他语言\n\n其他语言(包括Java)的时限和内存限制一般是C/C++的两倍\n\n## 我明明本地跑样例过了，为什么提交没有AC?\n样例只是题目所有测试点中的一个例子，不代表你的代码能够通过所有测试点的测试。请认真思考后修改你的代码\n'}}]);