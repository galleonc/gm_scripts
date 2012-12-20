// ==UserScript==
// @name           shanzhaiwang
// @namespace      http://pic.shanzhaiwang.net/
// @include        http://pic.shanzhaiwang.net/*
// @require        http://cache.soso.com/post/js/jquery.js?1.2.6
// ==/UserScript==

$("#content div.img a").each(function(){
	this.href = $(this).find("img").attr("src");
});
