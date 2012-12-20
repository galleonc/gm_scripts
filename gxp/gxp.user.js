// ==UserScript==
// @name           共享盘
// @namespace      http://www.gxp.cc/
// @include        http://www.gxp.cc/file-*
// @version        20121127
// @description    共享盘
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?20121127
// ==/UserScript==

var host = "http://www.gxp.cc/";

route("file-",function(){
	unsafeWindow.show_down_url();
	location.href = host + $("#down_a").attr("href");
	//GM_log($("#down_a").attr("href"));
});