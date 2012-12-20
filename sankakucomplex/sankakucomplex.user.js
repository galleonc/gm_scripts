// ==UserScript==
// @name           sankakucomplex
// @namespace      http://chan.sankakucomplex.com/
// @include        http://chan.sankakucomplex.com/*
// @version        121110
// @require        http://www.nerv.org/js/jquery-1.3.2.min.js
// @require        http://www.nerv.org/js/util.js?121110
// ==/UserScript==

function removeAD(){
	$("div[id='sp1']").remove();
	$("div[id='sp2']").remove();
}

route("post/show",removeAD);
route("tags=",function(){
	removeAD();
	setInterval(function(){
	$("div[id='sp1']").remove();
	},3000);
});