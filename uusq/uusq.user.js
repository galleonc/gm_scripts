// ==UserScript==
// @name           uusq
// @namespace      http://www.uusq.net/
// @include        http://www.uusq.net/file-*
// @include        http://www.uusq.net/down-*
// @description    悠悠网盘
// @version        121022
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121022
// ==/UserScript==

if(location.href.contains("file-")){
 //location.href=$("a#down_a1").attr("href");
	location.href=location.href.replace("file","down");
	//GM_log($("a#down_a1").attr("href"));
}

if(location.href.contains("down-")){
	var a = $("div#down_box").find("a").eq(0);
	var newone = $('<a target="_blank"></a>').append('<span><img border="0" align="absmiddle" src="images/dxdown.png"></span>');
	newone.attr("href", a.attr("href"));
	a.after(newone);
	a.remove();
}