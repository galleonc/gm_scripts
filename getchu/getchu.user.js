// ==UserScript==
// @name           Getchu
// @namespace      http://*.getchu.com/
// @include        http://*.getchu.com/*
// @require        http://cache.soso.com/post/js/jquery.js?1.2.6
// @require        http://www.nerv.org/js/jquery.cookie.js
// ==/UserScript==

var scripts = document.getElementsByTagName("script");
for(var idx=0;idx<scripts.length;idx++){
	var src = scripts[idx].src||"";
	if(src.indexOf("www.google.com")>-1){
		scripts[idx].clearAttributes();
	}
	break;
}
if($.cookie("getchu_adalt_flag"))
$.cookie("getchu_adalt_flag","getchu.com",{expires:365});
