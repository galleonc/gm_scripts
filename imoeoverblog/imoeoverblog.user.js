// ==UserScript==
// @name           imoe.overblog
// @namespace      http://imoe.overblog.com
// @include        http://imoe.overblog.com/*
// @require        http://cache.soso.com/post/js/jquery.js?1.2.6
// ==/UserScript==

$("a,div,p,h1,h2,h3,h4,h5").each(function(){
	this.style.color="#999";
});
