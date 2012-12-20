// ==UserScript==
// @name           dumpt
// @namespace      http://www.dumpt.com/
// @include        http://www.dumpt.com/img/viewer.php*
// @version        121213
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121213
// ==/UserScript==

//调整图片大小
// resize($("div.imgbox>a>img").get(0),1280,1024);
var img = $("div.imgbox").find("a>img").get(0);
if(img){
	$(img).load(function(){
		resize(img,1280,960);
	});
}
$("div.topcenter").hide();
$("div.nav").hide();
